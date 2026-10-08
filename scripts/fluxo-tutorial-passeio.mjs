// Confere o passeio guiado do tutorial com as novas mecânicas: abas da barra inferior aparecendo
// conforme o passeio avança, e os botões "Fazer agora" (lição de verdade e sprint) que saem do
// passeio, deixam a pessoa usar a página de verdade e retomam sozinhos ao voltar pra trilha.
// Uso: node scripts/fluxo-tutorial-passeio.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop' })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.toLowerCase().includes(x.toLowerCase()), t, { timeout, polling: 200 });
const abaVisivel = (nome) => page.getByRole('tab', { name: new RegExp(nome, 'i') }).isVisible().catch(() => false);
const proximo = () => page.getByText(/^(Próximo|Pular|Começar!)$/, { exact: true }).last().click();

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await waitText('que idioma você quer aprender comigo?', 90000);
// o romeno é o pacote mais completo (lição real, falsos amigos não, mas tem tudo mais) — mas usamos
// o espanhol, que tem falsos amigos, pra também passar por aquele passo do passeio
await page.getByRole('radio', { name: 'Aprender Espanhol' }).click();
await waitText('¡Hola! Vamos de espanhol!', 60000);
await page.getByText('Me mostra o app!', { exact: true }).click();
await waitText('este é o meu abrigo', 30000).then(() => ok('passeio começou na trilha'), () => fail('passeio não começou'));

(await abaVisivel('Cofre')) ? fail('Cofre já visível no passo 0 (devia estar escondida)') : ok('abas ainda escondidas no começo do passeio');

// avança até o passo "Cada lição, 5 etapas" (tem o botão "Fazer a 1ª lição")
for (let i = 0; i < 20 && !(await page.getByText('Fazer a 1ª lição', { exact: false }).isVisible().catch(() => false)); i++) await proximo();
const temBotaoLicao = await page.getByText('Fazer a 1ª lição', { exact: false }).isVisible().catch(() => false);
temBotaoLicao ? ok('passo da lição tem o botão "Fazer a 1ª lição"') : fail('botão da 1ª lição não apareceu');
await page.screenshot({ path: `${OUT}/tutorial-passeio-${device}-1-etapas.png` });

if (temBotaoLicao) {
  await page.getByText('Fazer a 1ª lição', { exact: false }).click();
  await waitText('Etapa 1 de', 30000).then(() => ok('"Fazer agora" abriu a lição de verdade'), () => fail('não abriu a lição real'));
  await page.screenshot({ path: `${OUT}/tutorial-passeio-${device}-2-licao-real.png` });
  await page.getByLabel('Sair da lição').click();
  await page.getByText(/^(Próximo|Pular|Começar!)$/, { exact: true }).last().waitFor({ timeout: 20000 })
    .then(() => ok('voltou pra trilha e o passeio retomou sozinho'), () => fail('o passeio não retomou ao voltar'));
}

// continua até o passo do sprint
for (let i = 0; i < 20 && !(await page.getByText('Fazer um sprint', { exact: false }).isVisible().catch(() => false)); i++) await proximo();
const temBotaoSprint = await page.getByText('Fazer um sprint', { exact: false }).isVisible().catch(() => false);
temBotaoSprint ? ok('passo do sprint tem o botão "Fazer um sprint"') : fail('botão do sprint não apareceu');

// achado real do Matheus testando no celular: arrastar pra cima o cartão de exemplo ("pinguim")
// fazia ele vazar por cima da barra de abas ("a aba comendo o pinguim"). Reproduz o gesto aqui,
// antes de sair pro sprint de verdade, e confere que nada aparece sobre a barra de abas.
if (temBotaoSprint) {
  const cartao = page.getByText('pinguim', { exact: true });
  const boxCartao = await cartao.boundingBox().catch(() => null);
  const boxAba = await page.getByRole('tab').first().boundingBox().catch(() => null);
  if (boxCartao && boxAba) {
    const cx = boxCartao.x + boxCartao.width / 2;
    const cy = boxCartao.y + boxCartao.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx, cy - 150, { steps: 12 }); // meio do gesto: é aqui que o vazamento acontecia
    await page.screenshot({ path: `${OUT}/tutorial-passeio-${device}-3b-swipe-cima.png` });
    await page.mouse.up();
    await page.waitForTimeout(300);
    const vazou = await page.evaluate((abaTop) => {
      const els = [...document.querySelectorAll('*')].filter((e) => e.textContent?.trim() === 'pinguim' && e.children.length === 0);
      return els.some((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.bottom > abaTop;
      });
    }, boxAba.y);
    vazou ? fail('o cartão "pinguim" vazou sobre a barra de abas no swipe pra cima') : ok('swipe pra cima no exemplo do sprint não vaza sobre a barra de abas');
  } else {
    fail('não achei o cartão "pinguim" ou a barra de abas pra testar o swipe pra cima');
  }

  await page.getByText('Fazer um sprint', { exact: false }).click();
  await page.waitForURL(/\/sprint/, { timeout: 20000 }).then(() => ok('"Fazer agora" abriu o sprint de verdade'), () => fail('não abriu o sprint'));
  await page.screenshot({ path: `${OUT}/tutorial-passeio-${device}-3-sprint-real.png` });
  await page.goBack();
  await page.getByText(/^(Próximo|Pular|Começar!)$/, { exact: true }).last().waitFor({ timeout: 20000 })
    .then(() => ok('voltou pra trilha e o passeio retomou de novo'), () => fail('o passeio não retomou depois do sprint'));
}

(await abaVisivel('Cofre')) ? ok('a aba Cofre já apareceu (o passeio já passou por ela)') : fail('Cofre devia estar visível a essa altura do passeio');

// termina o passeio inteiro
for (let i = 0; i < 40 && (await page.getByText(/^(Próximo|Pular|Começar!)$/, { exact: true }).last().isVisible().catch(() => false)); i++) await proximo();
await page.waitForTimeout(500);
let todasVisiveis = true;
for (const nome of ['Trilha', 'Cofre', 'Gramática', 'Cultura', 'Conversa', 'Comunidade', 'Perfil']) {
  if (!(await abaVisivel(nome))) {
    todasVisiveis = false;
    fail(`aba ${nome} não ficou visível depois do passeio terminar`);
  }
}
todasVisiveis && ok('todas as 7 abas voltaram a aparecer depois do passeio terminar');
await page.screenshot({ path: `${OUT}/tutorial-passeio-${device}-4-fim-abas.png` });

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
