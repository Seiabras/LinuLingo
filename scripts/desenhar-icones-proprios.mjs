// Ícones desenhados pelo próprio LinuLingo, para conceitos que os acervos livres não distinguem
// (todos os dias da semana caíam no mesmo “calendário”, e só um deles ficava com a figura).
// Mesmo traço dos ícones de contorno (Tabler/Lucide: grade 24×24, linha 2, pontas redondas); a
// tinta é trocada pela cor do app em scripts/icones-palavras.mjs.
// Uso: node scripts/desenhar-icones-proprios.mjs   (grava em scripts/icones-proprios/)
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT = 'scripts/icones-proprios';
mkdirSync(OUT, { recursive: true });
const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>\n`;
// a folha do calendário, com as duas argolas
const folha = '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>';
const ponto = (x, y, on) => (on ? `<circle cx="${x}" cy="${y}" r="1.4" fill="currentColor" stroke="none"/>` : `<circle cx="${x}" cy="${y}" r="0.6" fill="currentColor" stroke="none"/>`);

// dias: uma semana numa fileira, de segunda (1) a domingo (7), com o dia em destaque
for (let d = 1; d <= 7; d++) {
  const pts = Array.from({ length: 7 }, (_, i) => ponto(6 + i * 2, 15.5, i + 1 === d)).join('');
  writeFileSync(`${OUT}/dia-${d}.svg`, svg(folha + pts));
}
// meses: o ano numa grade de 3 linhas por 4 colunas, com o mês em destaque
for (let m = 1; m <= 12; m++) {
  const pts = Array.from({ length: 12 }, (_, i) => ponto(6.75 + (i % 4) * 3.5, 13 + Math.floor(i / 4) * 2.5, i + 1 === m)).join('');
  writeFileSync(`${OUT}/mes-${m}.svg`, svg(folha + pts));
}

// números grandes: em algarismos, numa plaquinha (o algarismo é o mesmo em quase todo idioma do app)
const placa = '<rect x="2" y="5" width="20" height="14" rx="3"/>';
const num = (t, size = 9, y = 15.3) =>
  `<text x="12" y="${y}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${size}" fill="currentColor" stroke="none"${t.length > 3 ? ' textLength="16" lengthAdjust="spacingAndGlyphs"' : ''}>${t}</text>`;
const NUMEROS = {
  'num-200': placa + num('200'),
  'num-300': placa + num('300'),
  'num-500': placa + num('500'),
  'num-2000': placa + num('2000', 8, 15),
  'num-100000': placa + num('100 000', 6, 14.2),
  'num-milhao': placa + num('10', 9, 16) + '<text x="17.3" y="11.2" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="5.5" fill="currentColor" stroke="none">6</text>',
  'num-bilhao': placa + num('10', 9, 16) + '<text x="17.3" y="11.2" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="5.5" fill="currentColor" stroke="none">9</text>',
  'num-100o': placa + num('100', 7.5, 15).replace('x="12"', 'x="9.8"') + '<circle cx="18.4" cy="9.6" r="1.3" stroke-width="1.1"/><path d="M17 12.4h2.8" stroke-width="1.1"/>',
  'decada': folha + num('10', 8, 18.6),
  'milenio': folha + num('1000', 6.5, 18),
};
for (const [n, b] of Object.entries(NUMEROS)) writeFileSync(`${OUT}/${n}.svg`, svg(b));

// parentesco: pedaço da árvore genealógica; quadrado = homem, círculo = mulher, ◉ = você,
// preenchido = o parente da palavra
const L = '<g stroke-width="1.5">';
const H = (x, y, f, k = 1) => `<rect x="${x - 2.3 * k}" y="${y - 2.3 * k}" width="${4.6 * k}" height="${4.6 * k}" rx="0.6"${f ? ' fill="currentColor"' : ''}/>`;
const M = (x, y, f, k = 1) => `<circle cx="${x}" cy="${y}" r="${2.4 * k}"${f ? ' fill="currentColor"' : ''}/>`;
const EU = (x, y) => `<circle cx="${x}" cy="${y}" r="2.4"/><circle cx="${x}" cy="${y}" r="0.9" fill="currentColor" stroke="none"/>`;
// irmãos: barra em cima ligando os dois
const irmaos = (x1, x2, y) => `<path d="M${x1} ${y - 2.4}V${y - 5}H${x2}V${y - 2.4}M${(x1 + x2) / 2} ${y - 5}V${y - 7.5}"/>`;
const desce = (x, y1, y2) => `<path d="M${x} ${y1}V${y2}"/>`;
const casal = (x1, x2, y) => `<path d="M${x1 + 2.4} ${y - 0.6}H${x2 - 2.4}M${x1 + 2.4} ${y + 0.6}H${x2 - 2.4}"/>`;
const PARENTES = {
  // sobrinho/a: você e seu irmão; o filho do irmão embaixo
  'par-sobrinho': L + irmaos(6, 14, 9) + EU(6, 9) + H(14, 9) + desce(14, 11.4, 16) + H(14, 18.5, true) + '</g>',
  'par-sobrinha': L + irmaos(6, 14, 9) + EU(6, 9) + H(14, 9) + desce(14, 11.4, 16) + M(14, 18.5, true) + '</g>',
  // cunhado/a: você, sua irmã/irmão e o cônjuge dele(a), ligado por casamento (=)
  'par-cunhado': L + irmaos(5, 12, 13) + EU(5, 13) + M(12, 13) + casal(12, 19.5, 13) + H(19.5, 13, true) + '</g>',
  'par-cunhada': L + irmaos(5, 12, 13) + EU(5, 13) + H(12, 13) + casal(12, 19.5, 13) + M(19.5, 13, true) + '</g>',
  // primo/a: seu pai e o irmão dele; você embaixo de um, o primo embaixo do outro
  'par-primo': L + irmaos(6, 18, 9) + H(6, 9) + H(18, 9) + desce(6, 11.4, 16) + desce(18, 11.4, 16) + EU(6, 18.5) + H(18, 18.5, true) + '</g>',
  'par-prima': L + irmaos(6, 18, 9) + H(6, 9) + H(18, 9) + desce(6, 11.4, 16) + desce(18, 11.4, 16) + EU(6, 18.5) + M(18, 18.5, true) + '</g>',
  'par-primos': L + irmaos(5, 16, 9) + H(5, 9) + H(16, 9) + desce(5, 11.4, 16) + EU(5, 18.5) + '<path d="M16 11.4V13.5M13 13.5H20M13 13.5V16M20 13.5V16"/>' + H(13, 18.5, true) + M(20, 18.5, true) + '</g>',
  // neta: você em cima, seu filho, a filha dele
  'par-neta': L + EU(12, 3.8) + desce(12, 6.2, 9.4) + H(12, 11.7) + desce(12, 14, 17.4) + M(12, 19.8, true) + '</g>',
  // irmã mais velha / mais nova: a irmã maior ou menor que você
  'par-irma-velha': L + irmaos(7, 16.5, 15) + EU(7, 15) + M(16.5, 13.8, true, 1.5) + '</g>',
  'par-irma-nova': L + irmaos(7, 16, 13) + EU(7, 13) + M(16, 14.2, true, 0.62) + '</g>',
};
for (const [n, b] of Object.entries(PARENTES)) writeFileSync(`${OUT}/${n}.svg`, svg(b));

// a cor bege: uma amostra de cor
writeFileSync(`${OUT}/cor-bege.svg`, svg('<rect x="4" y="4" width="16" height="16" rx="3" fill="#D9C2A0"/>'));

// palavras de relação (conectivos, pronomes, frequência)
const seta = (d, ponta) => `<path d="${d}"/><path d="${ponta}"/>`;
const pessoa = (x, y, k = 1) => `<circle cx="${x}" cy="${y - 4 * k}" r="${2 * k}"/><path d="M${x - 3.5 * k} ${y + 4 * k}v-1.5a${3.5 * k} ${3 * k} 0 0 1 ${7 * k} 0v1.5"/>`;
const RELACOES = {
  // nem: nem isto nem aquilo, os dois riscados
  'rel-nem': '<circle cx="7" cy="12" r="4"/><rect x="13" y="8" width="8" height="8" rx="1"/><path d="M2.5 17.5l9-11M12 17.5l9.5-11"/>',
  // cada: uma setinha para cada um
  'rel-cada': '<g stroke-width="1.6"><circle cx="5" cy="17" r="2.2"/><circle cx="12" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/><path d="M5 5v7M3 10l2 2 2-2M12 5v7M10 10l2 2 2-2M19 5v7M17 10l2 2 2-2"/></g>',
  // ao mesmo tempo: dois relógios marcando a mesma hora
  'rel-mesmo-tempo': '<circle cx="7" cy="12" r="5"/><path d="M7 9.5V12l1.8 1.2"/><circle cx="17" cy="12" r="5"/><path d="M17 9.5V12l1.8 1.2"/>',
  // enquanto: duas coisas acontecendo juntas (duas barras de tempo do mesmo tamanho)
  'rel-enquanto': '<rect x="4" y="6.5" width="16" height="4" rx="2"/><rect x="4" y="13.5" width="16" height="4" rx="2"/><path d="M2 4v16M22 4v16" stroke-dasharray="1.5 2"/>',
  // por causa de: a causa (um ponto) leva ao efeito (uma estrela)
  'rel-por-causa': '<circle cx="4.5" cy="12" r="2.5" fill="currentColor"/>' + seta('M8 12h6', 'M12 9.5l2.5 2.5-2.5 2.5') + '<path d="M19 7.5l1.3 2.8 3 .4-2.2 2.1.6 3-2.7-1.5-2.7 1.5.6-3-2.2-2.1 3-.4z" stroke-width="1.5"/>',
  // porque: da pergunta (?) à razão (!)
  'rel-porque': '<text x="5" y="16.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="currentColor" stroke="none">?</text>' + seta('M9 12h6', 'M13 9.5l2.5 2.5-2.5 2.5') + '<text x="19.5" y="16.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="currentColor" stroke="none">!</text>',
  // causa: um ponto do qual saem setas para três outros
  'rel-causa': '<circle cx="5" cy="12" r="3" fill="currentColor"/><path d="M8.5 10.5l7-4M8.5 12h7M8.5 13.5l7 4"/><circle cx="18.5" cy="5" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/><circle cx="18.5" cy="19" r="1.8"/>',
  // causar: dominós caindo um sobre o outro
  'rel-causar': '<rect x="7" y="10" width="3" height="10" rx="0.6" transform="rotate(-40 10 20)"/><rect x="12" y="10" width="3" height="10" rx="0.6" transform="rotate(-18 15 20)"/><rect x="17.5" y="10" width="3" height="10" rx="0.6"/><path d="M2 21h20"/>',
  // para casa: uma seta entrando na casa
  'rel-para-casa': '<path d="M11 11l6-5.5 6 5.5M12.5 10v10h9V10"/>' + seta('M1.5 15.5h9', 'M8 13l2.5 2.5L8 18'),
  // para lá: daqui (um ponto) até longe (uma bandeirinha)
  'rel-para-la': '<circle cx="3.5" cy="16" r="2" fill="currentColor"/><path d="M7 16h10" stroke-dasharray="2 2"/><path d="M15 13.5l2.5 2.5-2.5 2.5"/><path d="M20.5 18V6l-3 1.8 3 1.8"/>',
  // apesar de: a seta salta por cima do muro e segue
  'rel-apesar': '<rect x="10" y="12" width="4" height="9" rx="0.5"/><path d="M2 18c3-12 15-12 18 0"/><path d="M17 16.5l3 1.5 1.3-3"/>',
  // mesmo assim: a seta atravessa o muro quebrado
  'rel-mesmo-assim': '<path d="M10 3v6.5l2 1.5-2 1.5V21M14 3v6l-2 2 2 2v8"/>' + seta('M2 11h20', 'M19.5 8.5L22 11l-2.5 2.5'),
  // embora: a seta contorna a pedra e segue em frente
  'rel-embora': '<rect x="9" y="12" width="6" height="7" rx="2"/><path d="M2 16h3c2 0 2-8 7-8s5 8 7 8h3"/><path d="M19.5 13.5L22 16l-2.5 2.5"/>',
  // por isso: “portanto” (∴) e a seta
  'rel-por-isso': '<circle cx="6" cy="8" r="1.6" fill="currentColor" stroke="none"/><circle cx="3" cy="14" r="1.6" fill="currentColor" stroke="none"/><circle cx="9" cy="14" r="1.6" fill="currentColor" stroke="none"/>' + seta('M12 11h9', 'M18.5 8.5L21 11l-2.5 2.5'),
  // às vezes: na linha do tempo, umas poucas vezes, sem regra
  'rel-as-vezes': '<path d="M2 14h20"/><circle cx="5" cy="14" r="1.8" fill="currentColor"/><circle cx="11" cy="14" r="1.8" fill="currentColor"/><circle cx="19.5" cy="14" r="1.8" fill="currentColor"/><path d="M5 8v2M11 8v2M19.5 8v2" stroke-width="1.5"/>',
  // de vez em quando: duas vezes, bem separadas, e a volta (uma vez e depois outra)
  'rel-de-vez-em-quando': '<path d="M2 17h20"/><circle cx="5" cy="17" r="1.8" fill="currentColor"/><circle cx="19" cy="17" r="1.8" fill="currentColor"/><path d="M6 12c2-6 10-6 12 0" stroke-dasharray="2 2"/><path d="M15.3 11.3l2.7.7.6-2.7"/>',
  // anteontem: o calendário com duas setas para trás
  'anteontem': folha + '<path d="M11 13l-2.5 2.5L11 18M16 13l-2.5 2.5L16 18"/>',
  // o (artigo definido): aquele ali, um entre vários
  'rel-o': '<g stroke-width="1.6"><circle cx="4" cy="18" r="1.8"/><circle cx="9.5" cy="18" r="1.8"/><circle cx="15" cy="18" r="2.6" fill="currentColor"/><circle cx="20.5" cy="18" r="1.8"/><path d="M15 4v8.5M12.5 10l2.5 2.5 2.5-2.5"/></g>',
  // outro: além do primeiro, mais um
  'rel-outro': '<rect x="3" y="8" width="7" height="7" rx="1"/><rect x="14" y="8" width="7" height="7" rx="1" fill="currentColor"/><path d="M17.5 2.5v3M16 4h3M6.5 18v2.5M17.5 18v2.5" stroke-width="1.6"/>',
  // unidade: uma só peça diante de um grupo
  'rel-unidade': '<rect x="3" y="7" width="9" height="9" rx="1.2" fill="currentColor"/><g stroke-width="1.4"><rect x="15" y="6" width="3" height="3" rx="0.4"/><rect x="19" y="6" width="3" height="3" rx="0.4"/><rect x="15" y="10" width="3" height="3" rx="0.4"/><rect x="19" y="10" width="3" height="3" rx="0.4"/><rect x="15" y="14" width="3" height="3" rx="0.4"/><rect x="19" y="14" width="3" height="3" rx="0.4"/></g><path d="M5 20h5"/>',
  // meu/minha: a coisa junto de mim, com a seta voltando para mim
  'rel-meu': pessoa(8, 12) + '<rect x="15" y="12" width="6" height="6" rx="1" fill="currentColor"/><path d="M18 10c0-4-3-6-6.5-6" stroke-width="1.5"/><path d="M13 2.3l-1.8 1.8 1.8 1.8" stroke-width="1.5"/>',
  // próprio: a pessoa aponta para si mesma
  'rel-proprio': pessoa(10, 12) + '<path d="M19 6c3 4 1 9-5.5 9.5" stroke-width="1.6"/><path d="M15.5 12.8l-2 2.7 2.7 1.8" stroke-width="1.6"/>',
  // deles/delas: a coisa é daquele grupo ali
  'rel-deles': '<g stroke-width="1.6">' + pessoa(4.5, 13, 0.7) + pessoa(9.5, 12, 0.8) + pessoa(14.5, 13, 0.7) + '</g><rect x="18" y="14" width="4.5" height="4.5" rx="0.8" fill="currentColor"/><path d="M20.3 4v6.5M18.3 8.5l2 2 2-2" stroke-width="1.6"/>',
  // simples: o liso no lugar do emaranhado
  'rel-simples': '<path d="M3 9c2-4 5 4 3 5s-4-6 0-6 3 7 0 7-2-5 1-4" stroke-width="1.4"/><path d="M2 4l8 13" stroke-width="1.6"/><circle cx="17" cy="11" r="5"/><path d="M14.8 11l1.6 1.6 3-3"/>',
  // suficiente: cheio até a marca, e certo
  'rel-suficiente': '<path d="M5 4l1.5 16h9L17 4z"/><path d="M5.7 10.5h10.6" stroke-dasharray="1.6 1.6" stroke-width="1.4"/><path d="M6.2 11h9.6l-.9 8H7z" fill="currentColor" stroke="none"/><path d="M17.5 7.5l1.5 1.5 3-3.5"/>',
  // talvez: meio sim, meio não
  'rel-talvez': '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M5 12l1.8 1.8L10 10.5M14.5 9.5l4 4M18.5 9.5l-4 4"/>',
  // um pouco: só um pouquinho entre os dois tracinhos
  'rel-um-pouco': '<path d="M9.5 5v14M14.5 5v14"/><path d="M3 12h4.5M5.5 10L7.5 12l-2 2M21 12h-4.5M18.5 10L16.5 12l2 2" stroke-width="1.6"/>',
};
for (const [n, b] of Object.entries(RELACOES)) writeFileSync(`${OUT}/${n}.svg`, svg(b));
console.log('✅', 19 + Object.keys(NUMEROS).length + Object.keys(PARENTES).length + 1 + Object.keys(RELACOES).length, 'desenhos em', OUT);
