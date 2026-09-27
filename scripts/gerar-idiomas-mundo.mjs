// Gera src/data/idiomas-mundo.ts: TODOS os idiomas com dados por país no Unicode CLDR
// (território, % da população que fala, status oficial) e a família de cada um.
//
// Fontes:
//  - Unicode CLDR (pacote cldr-core, licença Unicode-3.0): territoryInfo.json e languageGroups.json
//  - nomes em pt-BR: Intl do Node (dados do CLDR); na falta, as traduções do projeto iso-codes
//    (Debian, LGPL-2.1, via gettext) e, por fim, a tabela NOME_PT abaixo
//  - famílias: a árvore da ISO 639-5 no CLDR, com os nomes em português da tabela FAMILIA_PT
//
// Uso: node scripts/gerar-idiomas-mundo.mjs   (precisa de: npm i -D cldr-core; pacote iso-codes do sistema)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const territoryInfo = require('cldr-core/supplemental/territoryInfo.json').supplemental.territoryInfo;
const groups = require('cldr-core/supplemental/languageGroups.json').supplemental.languageGroups;
const ISO_DIR = '/usr/share/iso-codes/json';
const iso6393 = JSON.parse(readFileSync(`${ISO_DIR}/iso_639-3.json`, 'utf8'))['639-3'];

// ISO 3166 alfa-2 → alfa-3, a partir do mapa do app (só os territórios que o mapa desenha)
const mapa = readFileSync('src/data/mapa-mundi.ts', 'utf8');
const ALFA3 = Object.fromEntries([...mapa.matchAll(/"iso":"([A-Z]{3})","iso2":"([A-Z]{2})"/g)].map((m) => [m[2], m[1]]));

/** Famílias e ramos (códigos da ISO 639-5) em português. */
const FAMILIA_PT = {
  aav: 'Austro-asiático', afa: 'Afro-asiático', alg: 'Algonquino', alv: 'Atlântico-congolês', apa: 'Apache', aqa: 'Alacalufe',
  aql: 'Álgico', art: 'Língua artificial', ath: 'Atabascano', auf: 'Arauá', aus: 'Australiano (aborígine)', awd: 'Aruaque',
  azc: 'Uto-asteca', bad: 'Banda', bai: 'Bamileke', bat: 'Báltico', ber: 'Berbere', bih: 'Bihari', bnt: 'Banto', btk: 'Batak',
  cai: 'Indígena da América Central', cba: 'Chibcha', ccn: 'Caucasiano do norte', ccs: 'Cartveliano', cdc: 'Chádico',
  cdd: 'Caddo', cel: 'Céltico', cmc: 'Châmico', cpe: 'Crioulo de base inglesa', cpf: 'Crioulo de base francesa',
  cpp: 'Crioulo de base portuguesa', crp: 'Crioulo ou língua mista', csu: 'Sudânico central', cus: 'Cuxítico', day: 'Bidayuh',
  dmn: 'Mandê', dra: 'Dravídico', egx: 'Egípcio', esx: 'Esquimó-aleúte', euq: 'Basco (língua isolada)', fiu: 'Fino-úgrico',
  fox: 'Formosano', gem: 'Germânico', gme: 'Germânico oriental', gmq: 'Germânico setentrional', gmw: 'Germânico ocidental',
  grk: 'Helênico', hmx: 'Hmong-mien', hok: 'Hokano', hyx: 'Armênio', iir: 'Indo-iraniano', ijo: 'Ijo', inc: 'Indo-ariano',
  ine: 'Indo-europeu', ira: 'Iraniano', iro: 'Iroquês', itc: 'Itálico', jpx: 'Japônico', kar: 'Karen', kdo: 'Cordofaniano',
  khi: 'Coissã', kro: 'Kru', map: 'Austronésio', mkh: 'Mon-khmer', mno: 'Manobo', mun: 'Munda', myn: 'Maia', nah: 'Náuatle',
  nai: 'Indígena da América do Norte', ngb: 'Ubangiano', ngf: 'Trans-Nova Guiné', nic: 'Níger-Congo', nub: 'Núbio',
  omq: 'Oto-mangue', omv: 'Omótico', oto: 'Otomí', paa: 'Papua', phi: 'Filipino', plf: 'Malaio-polinésio central',
  poz: 'Malaio-polinésio', pqe: 'Malaio-polinésio oriental', pqw: 'Malaio-polinésio ocidental', pra: 'Prácrito', qwe: 'Quéchua',
  roa: 'Românico', sai: 'Indígena da América do Sul', sal: 'Salish', sdv: 'Sudânico oriental', sem: 'Semítico',
  sgn: 'Língua de sinais', sio: 'Sioux', sit: 'Sino-tibetano', sla: 'Eslavo', smi: 'Sami', son: 'Songai', sqj: 'Albanês',
  ssa: 'Nilo-saariano', syd: 'Samoiedo', tai: 'Tai', tbq: 'Tibeto-birmanês', trk: 'Túrquico', tup: 'Tupi', tuw: 'Tungúsico',
  urj: 'Urálico', wak: 'Wakash', wen: 'Sorábio', xgn: 'Mongólico', xnd: 'Na-dené', ypk: 'Iúpique', zhx: 'Chinês',
  zle: 'Eslavo oriental', zls: 'Eslavo meridional', zlw: 'Eslavo ocidental', znd: 'Zande', sw: 'Suaíli', cr: 'Cree',
};
// agrupamentos geográficos ou hipotéticos, que não são famílias aceitas: ficam fora da genealogia
const SEM_FAMILIA = new Set(['mul', 'und', 'tut', 'cau']);

// idiomas que o CLDR não põe em nenhum grupo: o grupo a que pertencem (código ISO 639-5)
const GRUPO_EXTRA = {
  lah: 'inc', hak: 'zhx', apd: 'sem', rkt: 'inc', mwr: 'inc', tts: 'tai', dcc: 'inc', rw: 'bnt', kri: 'cpe', rn: 'bnt',
  min: 'pqw', tpi: 'cpe', sq: 'sqj', wtm: 'inc', sou: 'tai', knn: 'inc', vmf: 'gmw', hno: 'inc', lir: 'cpe', swv: 'inc',
  gbm: 'inc', lmn: 'inc', tzm: 'ber', mfa: 'pqw', jam: 'cpe', wbq: 'dra', haz: 'ira', wbr: 'inc', aln: 'sqj', mtr: 'inc',
  hoj: 'inc', kfr: 'inc', hnd: 'inc', jml: 'inc', kj: 'bnt', ewo: 'bnt', prd: 'ira', fan: 'bnt', cps: 'phi', dty: 'inc',
  unx: 'mun', gos: 'gmw', ast: 'roa', ng: 'bnt', leb: 'bnt', gju: 'inc', mt: 'sem', srn: 'cpe', zmi: 'pqw', khw: 'inc',
  mvy: 'inc', mgp: 'tbq', zdj: 'bnt', bi: 'cpe', arn: 'sai', mrd: 'tbq', kao: 'dmn', pap: 'cpp', bzj: 'cpe', swb: 'bnt',
  atj: 'alg', crl: 'alg', xin: 'cai', ccr: 'cai', ckz: 'myn', vic: 'cpe', wbp: 'aus', frs: 'gmw', crg: 'crp', len: 'cai',
  nsk: 'alg', stq: 'gmw', tsd: 'grk', pi: 'inc', lzh: 'zhx', jut: 'gmq', sly: 'pqw', ife: 'alv', btv: 'inc', vro: 'fiu',
  bqv: 'alv', buc: 'pqw', kxv: 'dra', rmo: 'inc', esu: 'ypk', amo: 'alv', crk: 'alg', sli: 'gmw', stu: 'mkh', rmu: 'inc',
  bku: 'phi', ik: 'esx', ecy: null,
  // o CLDR deixa estas no agrupamento geográfico «caucasiano»; são do ramo caucasiano do norte
  ce: 'ccn', av: 'ccn', dar: 'ccn', lez: 'ccn', inh: 'ccn', lbe: 'ccn', tkr: 'ccn', ab: 'ccn', ady: 'ccn', kbd: 'ccn',
  ryu: 'jpx',
};
// genealogia escrita à mão (isoladas ou que o CLDR deixa na raiz)
const LINHAGEM_EXTRA = {
  ko: ['Coreânico'],
  hy: ['Indo-europeu', 'Armênio'],
  kgp: ['Macro-jê'],
  xav: ['Macro-jê'],
  ka: ['Cartveliano'],
};

/** Nomes em português para quem não tem tradução no Intl nem no iso-codes (≥ 0,5 milhão de falantes). */
const NOME_PT = {
  arz: 'Árabe egípcio', apc: 'Árabe levantino', arq: 'Árabe argelino', ary: 'Árabe marroquino', apd: 'Árabe sudanês',
  aeb: 'Árabe tunisiano', skr: 'Saraiki', bar: 'Bávaro', rkt: 'Rangpuri', tts: 'Isan (tailandês do nordeste)', fuv: 'Fula nigeriano',
  hne: 'Chhattisgarhi', dcc: 'Dakhini', mey: 'Hassaniya', kri: 'Krio', syl: 'Silheti', bjj: 'Kanauji', nod: 'Tai do norte (lanna)',
  wtm: 'Mewati', bew: 'Betawi', luo: 'Luo', sou: 'Tailandês do sul', knn: 'Concani', vmf: 'Francônio', ndc: 'Ndau',
  hno: 'Hindko do norte', bjn: 'Banjar', glk: 'Gilaki', lir: 'Inglês liberiano', swv: 'Shekhawati', rif: 'Rifenho (tarifit)',
  gbm: 'Garhwali', lmn: 'Lambadi', mfa: 'Malaio de Pattani', bci: 'Baulê', brh: 'Brahui', kfy: 'Kumaoni', fbl: 'Bikol de Albay',
  jam: 'Crioulo jamaicano', bbc: 'Batak toba', sck: 'Sadri', wbq: 'Waddar', haz: 'Hazaragi', toi: 'Tonga (Zâmbia)',
  ngl: 'Lomwe', mww: 'Hmong daw', khn: 'Khandesi', tcy: 'Tulu', wbr: 'Wagdi', ljp: 'Lampung', laj: 'Lango', fuq: 'Fula do Níger',
  noe: 'Nimadi', abr: 'Abron', ffm: 'Fula de Maasina', bhb: 'Bhili', rmt: 'Domari', kek: 'Q’eqchi’', dnj: 'Dan', cak: 'Kaqchikel',
  aln: 'Albanês guegue', myx: 'Masaaba', mdh: 'Maguindanao', hoc: 'Ho', mtr: 'Mewari', fvr: 'Fur', unr: 'Mundari', tsg: 'Tausug',
  bhi: 'Bhilali', rej: 'Rejang', sef: 'Senufo cebaara', bqi: 'Bakhtiari', gur: 'Frafra', vls: 'Flamengo ocidental',
  kxm: 'Khmer do norte', hoj: 'Hadothi', rng: 'Ronga', mxc: 'Manyika', mwk: 'Maninka de Kita', luz: 'Luri do sul', kfr: 'Kachhi',
  tly: 'Tálix', qug: 'Quíchua de Chimborazo', nij: 'Ngaju', hnd: 'Hindko do sul', jml: 'Jumli', mnw: 'Mon', ryu: 'Okinawano',
  mgy: 'Mbunga', ttj: 'Tooro', prd: 'Parsi-dari', kck: 'Kalanga', kge: 'Komering', yua: 'Maia iucateque', grt: 'Garo',
  swg: 'Suábio', mam: 'Mam', hnj: 'Hmong njua', cps: 'Capiznon', dty: 'Dotyali', bsq: 'Bassa', aoz: 'Uab meto', pcd: 'Picardo',
  blt: 'Tai dam', bfy: 'Bagheli', unx: 'Munda', lki: 'Laki', pms: 'Piemontês', gos: 'Gronings', lis: 'Lisu', nse: 'Nsenga',
  thl: 'Tharu dangaura', leb: 'Lala-bisa', rcf: 'Crioulo reunionense', kro: 'Kru', bft: 'Balti', xmf: 'Megreliano',
  nhe: 'Náuatle da Huasteca oriental', nhw: 'Náuatle da Huasteca ocidental', gju: 'Gujari', lah: 'Lahnda', hak: 'Hakka',
  mwr: 'Marwari', min: 'Minangkabau', tpi: 'Tok pisin', xav: 'Xavante', kgp: 'Kaingang', gub: 'Guajajara', yrl: 'Nheengatu',
  maz: 'Mazahua central', rue: 'Rusino', zmi: 'Malaio de Negeri Sembilan', tdg: 'Tamang ocidental', kvx: 'Koli parkari',
  bgx: 'Turco gagauz dos Bálcãs', mgp: 'Magar oriental', zdj: 'Comoriano ngazidja', bto: 'Bikol rinconada', wni: 'Comoriano ndzwani',
  kxp: 'Koli wadiyara', cja: 'Cham ocidental', mrd: 'Magar ocidental', nch: 'Náuatle da Huasteca central', kss: 'Kisi do sul',
  bzj: 'Crioulo belizenho', ltg: 'Latgaliano', kiu: 'Kirmanjki (zazaki)', guc: 'Wayuu (guajiro)', taj: 'Tamang oriental',
  pdc: 'Alemão da Pensilvânia', knj: 'Akateko', sdc: 'Sardo sassarês', cjm: 'Cham oriental', lcp: 'Lawa ocidental',
  fit: 'Meänkieli (finlandês de Tornedalen)', gcr: 'Crioulo guianense', egl: 'Emiliano', mrj: 'Mari ocidental', esu: 'Iúpique central',
  mop: 'Maia mopán', sli: 'Silesiano inferior', wls: 'Wallisiano', gbz: 'Dari zoroastriano', lwl: 'Lawa oriental',
  rmf: 'Romani kalo finlandês', ckz: 'Língua mista cakchiquel-quiché', vic: 'Crioulo das Ilhas Virgens', uli: 'Ulitiano',
  tsd: 'Tsacônio', izh: 'Ingriano', jut: 'Jutlandês', sgs: 'Samogitiano', zea: 'Zelandês', tkt: 'Tharu kathoriya',
};
// sem falantes vivos (línguas históricas ou só literárias) e o código «indeterminado»
const FORA = new Set(['und', 'ecy', 'gmy', 'lzh', 'jut']);

// ── população por idioma e território (o maior % quando o CLDR lista variantes de escrita, como sr e sr_Latn) ──
const STATUS = { official: 'o', de_facto_official: 'o', official_regional: 'r' };
const langs = new Map();
for (const [ter, info] of Object.entries(territoryInfo)) {
  const iso3 = ALFA3[ter];
  if (!iso3) continue;
  const pop = Number(info._population);
  for (const [tag, v] of Object.entries(info.languagePopulation ?? {})) {
    const code = tag.split('_')[0];
    const pct = Number(v._populationPercent);
    const role = STATUS[v._officialStatus] ?? 'f';
    const e = langs.get(code) ?? { code, byTer: new Map() };
    const prev = e.byTer.get(iso3);
    if (!prev || pct > prev.pct || (role !== 'f' && prev.role === 'f')) e.byTer.set(iso3, { pct: Math.max(pct, prev?.pct ?? 0), role: role !== 'f' ? role : prev?.role ?? 'f', pop });
    langs.set(code, e);
  }
}

// ── nomes ──
const pt = new Intl.DisplayNames('pt-BR', { type: 'language', fallback: 'none' });
const isoEntry = (code) => iso6393.find((x) => x.alpha_3 === code || x.alpha_2 === code);
const semNome = [...langs.keys()].filter((c) => !NOME_PT[c] && !pt.of(c));
const ingles = semNome.map((c) => isoEntry(c)?.name ?? c);
const py = `import gettext,json,sys
t=gettext.translation('iso_639-3',languages=['pt_BR'],fallback=True)
print(json.dumps([t.gettext(n) for n in json.load(sys.stdin)],ensure_ascii=False))`;
const traduzidos = JSON.parse(execFileSync('python3', ['-c', py], { input: JSON.stringify(ingles) }).toString());
const doIso = Object.fromEntries(semNome.map((c, i) => [c, traduzidos[i]]));
const maiuscula = (s) => s.charAt(0).toLocaleUpperCase('pt-BR') + s.slice(1);
const nomeDe = (c) => maiuscula(NOME_PT[c] ?? pt.of(c) ?? doIso[c] ?? c);
const nativo = (c) => {
  try {
    const n = new Intl.DisplayNames(c, { type: 'language', fallback: 'none' }).of(c);
    return n && n.toLowerCase() !== nomeDe(c).toLowerCase() ? n : '';
  } catch {
    return '';
  }
};

// ── família ──
const pai = new Map();
for (const [g, filhos] of Object.entries(groups)) for (const f of filhos.split(' ')) if (!SEM_FAMILIA.has(g)) pai.set(f, g);
for (const [c, g] of Object.entries(GRUPO_EXTRA)) if (g) pai.set(c, g);
function linhagem(code) {
  if (LINHAGEM_EXTRA[code]) return LINHAGEM_EXTRA[code];
  const cadeia = [];
  for (let g = pai.get(code); g && cadeia.length < 10; g = pai.get(g)) if (!SEM_FAMILIA.has(g)) cadeia.unshift(g);
  const nomes = cadeia.map((g) => FAMILIA_PT[g]).filter(Boolean);
  // o app usa o nível «Balto-eslavo» (eslavo + báltico), como na genealogia do russo
  const i = nomes.findIndex((n) => n === 'Eslavo' || n === 'Báltico');
  if (i > 0 && nomes[i - 1] === 'Indo-europeu') nomes.splice(i, 0, 'Balto-eslavo');
  return nomes;
}

// ── saída ──
const out = [...langs.values()]
  .map((e) => {
    const paises = [...e.byTer.entries()].map(([iso, x]) => ({ iso, role: x.role, pct: x.pct, n: (x.pop * x.pct) / 100 }));
    const milhoes = paises.reduce((s, p) => s + p.n, 0) / 1e6;
    paises.sort((a, b) => b.n - a.n);
    return { code: e.code, name: nomeDe(e.code), native: nativo(e.code), lineage: linhagem(e.code), millions: milhoes, paises };
  })
  .filter((l) => l.paises.length && !FORA.has(l.code) && l.millions * 1e6 >= 50)
  .sort((a, b) => b.millions - a.millions);

const esc = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, '’')}'`;
const num = (x) => (x >= 10 ? Math.round(x) : x >= 0.1 ? Number(x.toPrecision(2)) : Number(x.toPrecision(1)));
const linhas = out.map(
  (l) =>
    `  [${esc(l.code)}, ${esc(l.name)}, ${esc(l.native)}, [${l.lineage.map(esc).join(', ')}], ${num(l.millions)}, ${esc(l.paises.map((p) => `${p.iso}:${p.role}:${num(p.pct)}`).join(' '))}],`,
);
const ts = `// Gerado por scripts/gerar-idiomas-mundo.mjs — não editar à mão.
// Idiomas por país: Unicode CLDR ${require('cldr-core/package.json').version} (territoryInfo, licença Unicode-3.0).
// Famílias: árvore da ISO 639-5 no CLDR, com nomes em português. Nomes dos idiomas: CLDR (Intl) e iso-codes (LGPL-2.1).
// Os números somam quem fala o idioma em cada país, inclusive como segunda língua.

/** [código, nome, nome no próprio idioma, família › ramos, milhões de falantes, "ISO3:papel:%"…]
 *  papel: o = oficial, r = oficial numa região, f = falada sem status oficial */
export type WorldLanguageRow = [string, string, string, string[], number, string];

export const WORLD_LANGUAGE_ROWS: WorldLanguageRow[] = [
${linhas.join('\n')}
];
`;
writeFileSync('src/data/idiomas-mundo.ts', ts);
const semFamilia = out.filter((l) => !l.lineage.length);
console.log(`✅ ${out.length} idiomas em ${new Set(out.flatMap((l) => l.paises.map((p) => p.iso))).size} países; sem família: ${semFamilia.length} (${semFamilia.slice(0, 15).map((l) => l.code).join(' ')}…); nomes só em inglês: ${out.filter((l) => l.name === (isoEntry(l.code)?.name ?? '')).length}`);
