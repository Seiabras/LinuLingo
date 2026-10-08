// Medições compartilhadas pelas varreduras (scripts/varredura-telas.mjs e varredura-idiomas.mjs).
// tudo o que roda dentro da página: medições do que está desenhado agora
export const medir = (page) =>
  page.evaluate(() => {
    const W = innerWidth;
    const textos = [...document.querySelectorAll('[dir="auto"]')].filter((el) => {
      const r = el.getBoundingClientRect();
      const st = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && st.visibility !== 'hidden' && st.opacity !== '0' && el.textContent.trim();
    });
    // fica dentro de algo que rola na horizontal (faixas com setas, tabelas largas): sair da tela é de propósito
    const rolaX = (el) => {
      for (let p = el.parentElement; p; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if ((o === 'auto' || o === 'scroll') && p.scrollWidth > p.clientWidth + 1) return true;
      }
      return false;
    };
    const escondido = (el) => {
      for (let p = el; p; p = p.parentElement) if (getComputedStyle(p).opacity === '0') return true;
      return false;
    };
    const folhas = textos.filter((el) => !el.querySelector('[dir="auto"]'));
    // a parte do texto que aparece de fato: o retângulo recortado por todo ancestral que esconde o
    // que transborda (listas que rolam por dentro, como o mapa da trilha); null = escondido inteiro
    const visivel = (el) => {
      let { left, top, right, bottom } = el.getBoundingClientRect();
      for (let p = el.parentElement; p; p = p.parentElement) {
        const st = getComputedStyle(p);
        if (st.overflowX === 'visible' && st.overflowY === 'visible') continue;
        const q = p.getBoundingClientRect();
        left = Math.max(left, q.left);
        top = Math.max(top, q.top);
        right = Math.min(right, q.right);
        bottom = Math.min(bottom, q.bottom);
        if (right - left < 1 || bottom - top < 1) return null;
      }
      return { left, top, right, bottom, width: right - left, height: bottom - top };
    };
    const cortados = [];
    const reticencias = [];
    const fora = [];
    for (const el of folhas) {
      const st = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const txt = el.textContent.trim().slice(0, 80);
      const clamp = st.webkitLineClamp && st.webkitLineClamp !== 'none';
      const ell = st.textOverflow === 'ellipsis' || clamp;
      const corta = el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 3;
      if (corta && ell) reticencias.push(txt);
      else if (corta && st.overflow !== 'visible') cortados.push(txt);
      if ((r.right > W + 2 || r.left < -2) && !rolaX(el) && !escondido(el) && visivel(el)) fora.push(`${txt} [${Math.round(r.left)}–${Math.round(r.right)}]`);
    }
    // sobreposição: duas folhas de texto que se cruzam bastante (as duas visíveis, nenhuma dentro da outra)
    const sobre = [];
    // a barra de abas fica por cima do conteúdo que rola por baixo dela: não é sobreposição
    const naBarra = (el) => !!el.closest('[role="tablist"]');
    const rs = folhas.filter((el) => !escondido(el) && !rolaX(el) && !naBarra(el)).map((el) => [el, visivel(el)]).filter(([, r]) => r);
    for (let i = 0; i < rs.length; i++)
      for (let j = i + 1; j < rs.length; j++) {
        const [a, ra] = rs[i];
        const [b, rb] = rs[j];
        if (a.contains(b) || b.contains(a)) continue;
        const x = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
        const y = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
        if (x > 4 && y > 4 && x * y > 0.3 * Math.min(ra.width * ra.height, rb.width * rb.height))
          sobre.push(`“${a.textContent.trim().slice(0, 40)}” × “${b.textContent.trim().slice(0, 40)}”`);
      }
    const tudo = folhas.map((el) => el.textContent).join('\n');
    const suspeitos = [];
    const padroes = [
      [/\bundefined\b/, 'undefined'],
      [/\bNaN\b/, 'NaN'],
      [/\[object /, '[object'],
      [/\bnull\b/, 'null'],
      [/�/, 'caractere quebrado'],
      // « » e „ “ são permitidos no texto do idioma (AGENTS.md, “Aspas”); suspeito é o que a troca
      // automática deixou: aspas “ ” com espaço por dentro e „x‘ desencontrado
      [/“ \S[^“”]*\S ”/, 'aspas “ ” com espaço por dentro'],
      [/„[^“”‘’„]{1,60}[‘’]/, 'aspas „ fechadas com ‘ ’'],
      [/\S {2,}\S/, 'espaço duplo'],
      // ; : ! ? com espaço antes é a tipografia do francês: só vírgula e ponto contam
      [/[^\s…]\s[,.](\s|$)/, 'espaço antes de pontuação'],
      [/\{\{|\}\}/, 'chaves de modelo'],
    ];
    for (const linha of tudo.split('\n'))
      for (const [re, nome] of padroes) if (re.test(linha)) suspeitos.push(`${nome}: ${linha.trim().slice(0, 120)}`);
    // letras sem fonte (o “quadradinho”): desenha cada caractere fora do ASCII e compara com um
    // caractere que certamente não existe (U+10FFFD, uso privado); iguais = a fonte não tem a letra
    const cv = document.createElement('canvas');
    cv.width = cv.height = 40;
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    const fonte = getComputedStyle(folhas[0] ?? document.body).fontFamily;
    const desenho = (ch) => {
      ctx.clearRect(0, 0, 40, 40);
      ctx.font = `28px ${fonte}`;
      ctx.fillText(ch, 4, 30);
      return ctx.getImageData(0, 0, 40, 40).data.join(',');
    };
    const tofu = desenho('\u{10FFFD}');
    const semFonte = new Set();
    for (const ch of new Set([...tudo].filter((c) => c.codePointAt(0) > 0x7f && !/\s/.test(c))))
      if (desenho(ch) === tofu) semFonte.add(`${ch} U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`);
    return {
      semFonte: [...semFonte],
      larguraPagina: document.documentElement.scrollWidth > W + 1 ? document.documentElement.scrollWidth : null,
      cortados: [...new Set(cortados)],
      reticencias: [...new Set(reticencias)],
      fora: [...new Set(fora)],
      sobre: [...new Set(sobre)].slice(0, 15),
      suspeitos: [...new Set(suspeitos)],
      texto: tudo,
    };
  });


export const fecharTutorial = async (page) => {
  // a tela de boas-vindas da primeira abertura («Que idioma você quer aprender comigo?»)
  const pular = page.getByText('Pular', { exact: true });
  if (await pular.first().isVisible().catch(() => false)) {
    await pular.first().click();
    await page.waitForTimeout(1500);
  }
  const sair = page.getByRole('button', { name: 'Sair do tutorial' });
  if (await sair.isVisible().catch(() => false)) {
    await sair.click();
    await page.waitForTimeout(600);
  }
};

