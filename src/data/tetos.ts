import type { CefrLevel, SubLevel } from '@/types';

/**
 * Até que nível cada idioma consegue chegar com material livre e documentado da internet (decisão do
 * dono do app, 08/10/2026): o curso que chega ao seu teto é um curso COMPLETO, mesmo que o teto seja
 * A2 ou B1 — não se inventa conteúdo pra ir além. O critério e o motivo de cada idioma estão em
 * TETO-DOS-IDIOMAS.md (na raiz do projeto); ao mudar um teto aqui, mude lá também, com a fonte.
 */
export const TETO: Record<string, CefrLevel> = {
  // C2 (59)
  af: 'C2', ar: 'C2', be: 'C2', bg: 'C2', bn: 'C2', bs: 'C2', ca: 'C2', cs: 'C2', da: 'C2', de: 'C2',
  el: 'C2', en: 'C2', eo: 'C2', es: 'C2', et: 'C2', eu: 'C2', fa: 'C2', fi: 'C2', fr: 'C2', gl: 'C2',
  he: 'C2', hi: 'C2', hr: 'C2', hu: 'C2', hy: 'C2', id: 'C2', is: 'C2', it: 'C2', ja: 'C2', ka: 'C2',
  ko: 'C2', la: 'C2', lt: 'C2', lv: 'C2', mk: 'C2', mr: 'C2', ms: 'C2', my: 'C2', nb: 'C2', nl: 'C2', yue: 'C2',
  pl: 'C2', pt: 'C2', ro: 'C2', ru: 'C2', sk: 'C2', sl: 'C2', sq: 'C2', sr: 'C2', sv: 'C2', ta: 'C2',
  te: 'C2', th: 'C2', tr: 'C2', uk: 'C2', ur: 'C2', uz: 'C2', vi: 'C2', zh: 'C2',
  // C1 (45)
  am: 'C1', arz: 'C1', ast: 'C1', br: 'C1', ckb: 'C1', fo: 'C1', fy: 'C1', gd: 'C1', ha: 'C1', haw: 'C1',
  hsb: 'C1', hyw: 'C1', km: 'C1', kmr: 'C1', lb: 'C1', lo: 'C1', mi: 'C1', mn: 'C1', mt: 'C1', mvf: 'C1',
  non: 'C1', oc: 'C1', ps: 'C1', se: 'C1', so: 'C1', sw: 'C1', tl: 'C1', ug: 'C1', yi: 'C1', yo: 'C1',
  zu: 'C1', jv: 'C1', fro: 'C1', cu: 'C1', mg: 'C1', osp: 'C1', gmh: 'C1', zgh: 'C1', cop: 'C1', ce: 'C1', ab: 'C1', pa: 'C1', medi1250: 'C1', fior1236: 'C1', clas1259: 'C1',
  // B2 (33)
  an: 'B2', ay: 'B2', co: 'B2', csb: 'B2', dv: 'B2', ee: 'B2', fur: 'B2', gn: 'B2', gsw: 'B2', ht: 'B2',
  ia: 'B2', ig: 'B2', iu: 'B2', kl: 'B2', lld: 'B2', ln: 'B2', mnc: 'B2', nap: 'B2', nds: 'B2', om: 'B2', pcm: 'B2',
  pms: 'B2', qu: 'B2', rm: 'B2', sc: 'B2', scn: 'B2', sco: 'B2', tdt: 'B2', vec: 'B2', wa: 'B2', wo: 'B2',
  xh: 'B2', isv: 'B2',
  // B1 (25)
  arn: 'B1', bxr: 'B1', fon: 'B1', frp: 'B1', oldp1258: 'B1', io: 'B1', jbo: 'B1', kmb: 'B1', lad: 'B1', nov: 'B1',
  lij: 'B1', lkt: 'B1', lmo: 'B1', mwl: 'B1', nah: 'B1', nv: 'B1', rup: 'B1', tlh: 'B1', tli: 'B1',
  tok: 'B1', tpw: 'B1', vo: 'B1', yrl: 'B1', ain: 'B1', jje: 'B1',
  // A2 (23)
  apw: 'A2', awe: 'A2', cbs: 'A2', cni: 'A2', gun: 'A2', hop: 'A2', kay: 'A2', kgk: 'A2', kgp: 'A2',
  kpc: 'A2', ktn: 'A2', myu: 'A2', pln: 'A2', ryu: 'A2', shh: 'A2', shp: 'A2', tca: 'A2', ter: 'A2',
  tsd: 'A2', tuo: 'A2', urb: 'A2', xav: 'A2', bsk: 'A2',
  // A1 (6)
  mav: 'A1', mdz: 'A1', mzr: 'A1', nhd: 'A1', tpj: 'A1', ywn: 'A1',
};

/** O último subnível de cada nível do QECR na trilha. */
const ULTIMO_SUBNIVEL: Record<CefrLevel, SubLevel> = { A1: 'A1.2', A2: 'A2.2', B1: 'B1.4', B2: 'B2.4', C1: 'C1.2', C2: 'C2' };

/** O teto do idioma (C2 se não estiver na tabela: idioma novo ainda não avaliado). */
export function tetoDoIdioma(code: string): CefrLevel {
  return TETO[code] ?? 'C2';
}

/** O subnível em que o curso deste idioma termina. */
export function ultimoSubnivel(code: string): SubLevel {
  return ULTIMO_SUBNIVEL[tetoDoIdioma(code)];
}
