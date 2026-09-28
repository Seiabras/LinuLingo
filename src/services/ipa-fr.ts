/**
 * Transcrição fonética (IPA) do francês padrão (norma de Paris) por regras, com uma lista de exceções.
 *
 * A ortografia francesa guarda letras que não se pronunciam (o -e, o -s, o -t, o -ent dos verbos no
 * plural) e escreve um som de muitos jeitos (o [o] de «au», «eau», «ô»…). As regras daqui cobrem o
 * que é regular: vogais nasais, o «e» mudo [ə], o «e» aberto e fechado, «ill», as consoantes finais
 * que se pronunciam («CaReFuL»), a elisão (l'ami) e as ligações obrigatórias (les amis [lez‿ami]).
 * A tônica do francês cai sempre na última sílaba pronunciada, então não é marcada.
 */

const V = 'aeiouyàâäéèêëîïôöùûüœæ';
const isV = (c: string | undefined) => !!c && V.includes(c);

/** Dicionário de pronúncia do conteúdo (src/data/fr/pronuncia.ts): corrige as formas que as regras erram. */
let LEXICON: Record<string, string> = {};
export function setPronunciationLexiconFr(lex: Record<string, string>) {
  LEXICON = lex;
}

/** Palavras que as regras não dão conta (ou dariam errado). */
const EXCEPTIONS: Record<string, string> = {
  monsieur: 'məsjø',
  messieurs: 'mesjø',
  femme: 'fam',
  femmes: 'fam',
  second: 'səɡɔ̃',
  seconde: 'səɡɔ̃d',
  oignon: 'ɔɲɔ̃',
  fils: 'fis',
  six: 'sis',
  dix: 'dis',
  huit: 'ɥit',
  sept: 'sɛt',
  cinq: 'sɛ̃k',
  neuf: 'nœf',
  vingt: 'vɛ̃',
  cent: 'sɑ̃',
  œuf: 'œf',
  œufs: 'ø',
  bœuf: 'bœf',
  bœufs: 'bø',
  os: 'ɔs',
  août: 'ut',
  ville: 'vil',
  villes: 'vil',
  village: 'vilaʒ',
  mille: 'mil',
  million: 'miljɔ̃',
  tranquille: 'tʁɑ̃kil',
  gentil: 'ʒɑ̃ti',
  outil: 'uti',
  fusil: 'fyzi',
  sourcil: 'suʁsi',
  persil: 'pɛʁsi',
  pied: 'pje',
  clef: 'kle',
  est: 'ɛ',
  et: 'e',
  les: 'le',
  des: 'de',
  mes: 'me',
  tes: 'te',
  ses: 'se',
  ces: 'se',
  aux: 'o',
  eu: 'y',
  eus: 'y',
  eue: 'y',
  ai: 'e',
  vais: 'vɛ',
  sud: 'syd',
  ouest: 'wɛst',
  bus: 'bys',
  autobus: 'otɔbys',
  maïs: 'mais',
  hier: 'jɛʁ',
  mer: 'mɛʁ',
  fer: 'fɛʁ',
  cher: 'ʃɛʁ',
  chère: 'ʃɛʁ',
  fier: 'fjɛʁ',
  hiver: 'ivɛʁ',
  ver: 'vɛʁ',
  amer: 'amɛʁ',
  enfer: 'ɑ̃fɛʁ',
  super: 'sypɛʁ',
  parfum: 'paʁfœ̃',
  examen: 'ɛɡzamɛ̃',
  agenda: 'aʒɛ̃da',
  poêle: 'pwal',
  aujourd: 'oʒuʁd',
  "aujourd'hui": 'oʒuʁdɥi',
  dessus: 'dəsy',
  dessous: 'dəsu',
  faisons: 'fəzɔ̃',
  faisais: 'fəzɛ',
  faisait: 'fəzɛ',
  œil: 'œj',
  yeux: 'jø',
  ennui: 'ɑ̃nɥi',
  emmener: 'ɑ̃məne',
  sens: 'sɑ̃s',
  mars: 'maʁs',
  plus: 'ply',
  tous: 'tus',
  net: 'nɛt',
  but: 'byt',
  fait: 'fɛ',
  album: 'albɔm',
  maximum: 'maksimɔm',
  minimum: 'minimɔm',
  aquarium: 'akwaʁjɔm',
  stadium: 'stadjɔm',
  zoo: 'zo',
  alcool: 'alkɔl',
  week: 'wik',
  weekend: 'wikɛnd',
  'week-end': 'wikɛnd',
  football: 'futbol',
  sandwich: 'sɑ̃dwitʃ',
  parking: 'paʁkiŋ',
  shopping: 'ʃɔpiŋ',
  camping: 'kɑ̃piŋ',
  jean: 'dʒin',
  jeans: 'dʒin',
  club: 'klœb',
  e: 'ə',
  y: 'i',
  à: 'a',
  a: 'a',
  o: 'o',
  oh: 'o',
  ah: 'a',
  eh: 'e',
  en: 'ɑ̃',
  un: 'œ̃',
  estomac: 'ɛstɔma',
  tabac: 'taba',
  blanc: 'blɑ̃',
  banc: 'bɑ̃',
  franc: 'fʁɑ̃',
  porc: 'pɔʁ',
  croc: 'kʁo',
  caoutchouc: 'kautʃu',
  respect: 'ʁɛspɛ',
  aspect: 'aspɛ',
  suspect: 'syspɛ',
  instinct: 'ɛ̃stɛ̃',
  chorale: 'kɔʁal',
  orchestre: 'ɔʁkɛstʁ',
  psychologie: 'psikɔlɔʒi',
  écho: 'eko',
  chaos: 'kao',
  technique: 'tɛknik',
  école: 'ekɔl',
  solennel: 'sɔlanɛl',
  poêles: 'pwal',
  moelle: 'mwal',
  hamburger: 'ɑ̃buʁɡœʁ',
  cuillère: 'kɥijɛʁ',
  paris: 'paʁi',
};

/** Palavras de 1 sílaba em -e/-es que se pronunciam com [ə]/[e] (le, je, les…) já estão nas exceções. */
const SCHWA_MONO = new Set(['le', 'je', 'me', 'te', 'se', 'de', 'ce', 'ne', 'que', 're']);

/** Terminação -er que se pronuncia [ɛʁ] mesmo com mais de uma sílaba (além das exceções). */
const ER_OPEN = /(?:^|[^i])(?:hiver|cancer|laser|revolver|poster|reporter)$/;

/** Palavras com h aspirado: não fazem elisão nem ligação (le héros, les haricots). */
const H_ASPIRE = new Set(['haricot', 'haricots', 'héros', 'hibou', 'hiboux', 'hache', 'haut', 'haute', 'hauts', 'hautes', 'honte', 'hors', 'huit', 'hasard', 'hall', 'hamac', 'hamster', 'hanche', 'handicap', 'hangar', 'hareng', 'haine', 'hockey', 'homard', 'hongrois', 'hurler', 'hutte', 'hérisson', 'hollande', 'hongrie']);

/** Ligações obrigatórias: a palavra de antes e a consoante que aparece antes de vogal. */
const LIAISON: Record<string, string> = {
  les: 'z',
  des: 'z',
  mes: 'z',
  tes: 'z',
  ses: 'z',
  ces: 'z',
  nos: 'z',
  vos: 'z',
  leurs: 'z',
  aux: 'z',
  nous: 'z',
  vous: 'z',
  ils: 'z',
  elles: 'z',
  on: 'n',
  un: 'n',
  aucun: 'n',
  mon: 'n',
  ton: 'n',
  son: 'n',
  en: 'n',
  deux: 'z',
  trois: 'z',
  très: 'z',
  chez: 'z',
  dans: 'z',
  sans: 'z',
  quand: 't',
  petit: 't',
  grand: 't',
  est: 't',
  sont: 't',
  tout: 't',
  bien: 'n',
  rien: 'n',
  plus: 'z',
  moins: 'z',
  bon: 'n',
};

/** Tira as letras finais que não se pronunciam. Devolve [o que se lê, a terminação especial]. */
function trimEnding(w: string, verbs?: Set<string>): { body: string; tail: string } {
  // -ent dos verbos na 3ª pessoa do plural é mudo (ils parlent); nos nomes e advérbios soa [ɑ̃]
  if (/[^aeiouy]ent$/.test(w) || /aient$/.test(w) || /oient$/.test(w)) {
    const verb3pl = /aient$|oient$|issent$/.test(w) || (verbs && (verbs.has(w.slice(0, -2) + 'r') || verbs.has(w.slice(0, -3) + 'ir') || verbs.has(w.slice(0, -3) + 're')));
    if (verb3pl) return { body: w.slice(0, -3), tail: 'e-muet' };
  }
  if (/es$/.test(w) && w.length > 3) return { body: w.slice(0, -2), tail: 'e-muet' };
  if (/e$/.test(w) && w.length > 2) return { body: w.slice(0, -1), tail: 'e-muet' };
  if ((/(?:ez|ed)$/.test(w) && w.length >= 3) || (/er$/.test(w) && w.length > 3 && !ER_OPEN.test(w))) return { body: w.slice(0, -2), tail: 'é' };
  if (/ier$/.test(w)) return { body: w.slice(0, -3), tail: 'ié' };
  // consoantes finais mudas (s, x, z, t, d, p, g), também agrupadas: -ts, -ds, -ps, -ct(s)
  const m = /(?:[sxztdpg]+|cts?)$/.exec(w);
  if (m && m.index > 0) {
    const body = w.slice(0, m.index);
    // «-c» final depois de n é mudo (blanc) — tratado nas exceções; o resto das finais pronunciadas fica
    return { body, tail: /t/.test(m[0]) ? 't-muet' : 'muet' };
  }
  return { body: w, tail: '' };
}

/** Uma palavra (sem espaços) em IPA, sem colchetes. */
export function wordToIpaFr(raw: string, verbs?: Set<string>): string {
  const w0 = raw.toLowerCase().normalize('NFC').replace(/’/g, "'");
  if (LEXICON[w0]) return LEXICON[w0];
  if (EXCEPTIONS[w0]) return EXCEPTIONS[w0];
  if (SCHWA_MONO.has(w0)) return w0.replace(/qu/, 'k').replace(/c/, 's').replace(/j/, 'ʒ').replace(/r/, 'ʁ').replace(/e$/, 'ə');
  // plurais regulares de exceções (les œufs já está na lista)
  if (/s$/.test(w0) && EXCEPTIONS[w0.slice(0, -1)] && !/[sz]$/.test(EXCEPTIONS[w0.slice(0, -1)])) {
    const base = EXCEPTIONS[w0.slice(0, -1)];
    if (!['os', 'sens', 'fils'].includes(w0)) return base;
  }
  const { body, tail } = trimEnding(w0, verbs);
  const w = body;
  const out: string[] = [];
  // depois do fim do corpo vem a terminação tirada: o «e» mudo (e) ou o [e] de -er/-ez (é); as regras
  // de contexto (s entre vogais, c/g antes de e, semivogais) precisam saber o que vinha depois
  const virtual = tail === 'e-muet' ? 'e' : tail === 'é' || tail === 'ié' ? 'é' : '';
  const at = (i: number) => w[i] ?? (i === w.length ? virtual : '');
  /** vogal escrita de verdade no corpo (não conta a terminação tirada) */
  const realV = (i: number) => i < w.length && isV(w[i]);
  const rest = (i: number) => w.slice(i);
  for (let i = 0; i < w.length; ) {
    const c = w[i];
    const r = rest(i);
    const prev = w[i - 1];
    const next = at(i + 1);
    const atEnd = i === w.length - 1;

    // ---- vogais e grupos de vogais ----
    if (r.startsWith('eau')) {
      out.push('o');
      i += 3;
      continue;
    }
    // nasais: vogal(is) + n/m que não é seguido de vogal nem dobrado
    const nasal = /^(ain|aim|ein|eim|oin|ien|yen|éen|an|am|en|em|in|im|yn|ym|un|um|on|om)(.?)(.?)/.exec(r);
    if (nasal) {
      const [, g, after, after2] = nasal;
      const nm = g.slice(-1);
      const followedByVowel = isV(after);
      const doubled = after === nm || (nm === 'n' && after === 'm') || (nm === 'm' && after === 'n');
      // en-/em- no começo, mesmo com n/m dobrado: ennui, emmener
      const initialEn = i === 0 && (g === 'en' || g === 'em') && doubled && !isV(after2);
      const endsHere = after === '' && (tail === '' || tail === 'muet' || tail === 't-muet' || tail === 'e-muet');
      const nasalHere = (!followedByVowel && !doubled && (after !== '' || endsHere)) || initialEn;
      // «-emme» (femme), «-enne» (ancienne) não são nasais; o «n/m» fica oral
      if (nasalHere && !(after === '' && tail === 'e-muet' && !['ien', 'yen', 'éen'].includes(g))) {
        const map: Record<string, string> = {
          ain: 'ɛ̃', aim: 'ɛ̃', ein: 'ɛ̃', eim: 'ɛ̃', oin: 'wɛ̃', ien: 'jɛ̃', yen: 'jɛ̃', éen: 'eɛ̃',
          an: 'ɑ̃', am: 'ɑ̃', en: 'ɑ̃', em: 'ɑ̃', in: 'ɛ̃', im: 'ɛ̃', yn: 'ɛ̃', ym: 'ɛ̃', un: 'œ̃', um: 'œ̃', on: 'ɔ̃', om: 'ɔ̃',
        };
        out.push(map[g]);
        i += g.length + (initialEn ? 0 : 0);
        continue;
      }
    }
    if (r.startsWith('oi') || r.startsWith('oî')) {
      out.push('wa');
      i += 2;
      continue;
    }
    if (r.startsWith('oy') && isV(at(i + 2))) {
      out.push('waj');
      i += 2;
      continue;
    }
    if (r.startsWith('ay') && isV(at(i + 2))) {
      // payer [peje] (antes do [e] de -er), crayon [kʁɛjɔ̃]
      out.push(i + 2 === w.length ? 'ej' : 'ɛj');
      i += 2;
      continue;
    }
    // -ail, -eil, -euil, -ouil (final ou antes de «l(e)») e -aill-, -eill-…
    const ill = /^(a|e|eu|ue|œu|ou)(ill?)/.exec(r);
    if (ill && (ill[2] === 'ill' || (ill[2] === 'il' && i + ill[0].length === w.length))) {
      const v = { a: 'aj', e: 'ɛj', eu: 'œj', ue: 'œj', œu: 'œj', ou: 'uj' }[ill[1]]!;
      out.push(v);
      i += ill[0].length;
      if (ill[2] === 'ill' && at(i) === 'e' && i === w.length - 1) i++;
      continue;
    }
    if (r.startsWith('ai') || r.startsWith('aî') || r.startsWith('ei')) {
      // -ai final (je parlerai) é [e]; nos outros lugares [ɛ]
      out.push(i + 2 === w.length && tail === '' ? 'e' : 'ɛ');
      i += 2;
      continue;
    }
    if (r.startsWith('au')) {
      out.push('o');
      i += 2;
      continue;
    }
    if (r.startsWith('eu') || r.startsWith('œu')) {
      // fechado no fim e antes de [z] (heureuse), aberto antes de consoante pronunciada (fleur, jeune)
      const after = at(i + 2);
      // fechado [ø]: no fim, antes de [z] (heureuse) e em sílaba aberta (heu-reux); aberto [œ] antes de consoante pronunciada (fleur, heure, jeune)
      const closed = i + 2 === w.length || (after === 's' && isV(at(i + 3))) || (!isV(after) && realV(i + 3));
      out.push(closed ? 'ø' : 'œ');
      i += 2;
      continue;
    }
    if (r.startsWith('ou') || r.startsWith('où') || r.startsWith('oû')) {
      out.push(isV(at(i + 2)) ? 'w' : 'u');
      i += 2;
      continue;
    }
    if (c === 'œ') {
      out.push('œ');
      i += 1;
      continue;
    }
    if (c === 'i' || c === 'î' || c === 'ï') {
      // «ill» depois de consoante: fille [fij]
      if (r.startsWith('ill') && i > 0 && !isV(prev)) {
        out.push('ij');
        i += 3;
        if (at(i) === 'e' && i === w.length - 1) i++;
        continue;
      }
      out.push(isV(next) && !(next === 'e' && i + 1 === w.length) && c !== 'ï' ? 'j' : 'i');
      i += 1;
      continue;
    }
    if (c === 'y') {
      out.push(isV(next) && !(next === 'e' && i + 1 === w.length) && i > 0 ? 'j' : 'i');
      i += 1;
      continue;
    }
    if (c === 'u' || c === 'û' || c === 'ù') {
      // depois de q/g já foi consumido; antes de vogal é semivogal [ɥ] (nuit, lui)
      out.push(isV(next) && !(next === 'e' && i + 1 === w.length) && !(i > 1 && /[bcdfgkptv][lr]/.test(w.slice(i - 2, i))) ? 'ɥ' : 'y');
      i += 1;
      continue;
    }
    if (c === 'a' || c === 'à' || c === 'â' || c === 'ä') {
      out.push('a');
      i += 1;
      continue;
    }
    if (c === 'o' || c === 'ô' || c === 'ö') {
      // [o] no fim, com «ô» e antes de [z]; [ɔ] antes de consoante pronunciada
      const open = c !== 'ô' && i < w.length - 1 && !(next === 's' && isV(at(i + 2)));
      out.push(open ? 'ɔ' : 'o');
      i += 1;
      continue;
    }
    if (c === 'é') {
      out.push('e');
      i += 1;
      continue;
    }
    if (c === 'è' || c === 'ê' || c === 'ë') {
      out.push('ɛ');
      i += 1;
      continue;
    }
    if (c === 'e') {
      // «e» antes de x inicial: examen (ex- + vogal = [ɛɡz])
      if (i === 0 && next === 'x') {
        out.push('ɛ');
        i += 1;
        continue;
      }
      const n1 = next;
      const n2 = at(i + 2);
      const lastLetter = i === w.length - 1;
      if (lastLetter) {
        // o «e» que sobrou no fim do corpo: -er/-ez/-ed viram [e]; -et/-ets viram [ɛ]
        out.push(tail === 't-muet' ? 'ɛ' : tail === 'é' || tail === 'ié' ? 'e' : 'ə');
        i += 1;
        continue;
      }
      const cons1 = n1 && !isV(n1);
      const cons2 = n2 && !isV(n2);
      // consoante dobrada ou duas consoantes (que não sejam consoante + l/r) fecham a sílaba: [ɛ]
      // e + consoante dobrada: fecha a sílaba se não vier vogal pronunciada depois (elle [ɛl], terre [tɛʁ]);
      // com vogal depois, a sílaba se divide e o e fica fechado [e] (effet [efɛ], dessert [desɛʁ])
      if (cons1 && n1 === n2 && realV(i + 3)) {
        out.push('e');
        i += 1;
        continue;
      }
      const doubled = cons1 && n1 === n2;
      const cluster = cons1 && cons2 && !(/[lr]/.test(n2) && /[bcdfgkptv]/.test(n1)) && !(n1 === 'c' && n2 === 'h') && !(n1 === 'p' && n2 === 'h') && !(n1 === 't' && n2 === 'h') && !(n1 === 'g' && n2 === 'n');
      // consoante pronunciada no fim da palavra: sel, mer, chef
      // consoante pronunciada no fim (sel, mer, chef), também antes de uma final muda (vert, dessert, concert)
      const finalCons = cons1 && i + 2 === w.length && (tail === '' || tail === 'muet' || tail === 't-muet');
      out.push(doubled || cluster || finalCons ? 'ɛ' : 'ə');
      i += 1;
      continue;
    }

    // ---- consoantes ----
    if (c === 'c') {
      if (next === 'h') {
        out.push('ʃ');
        i += 2;
        continue;
      }
      if (next === 'c' && /[eiy]/.test(at(i + 2))) {
        out.push('ks');
        i += 2;
        continue;
      }
      out.push(/[eéèêiïîy]/.test(next) ? 's' : 'k');
      i += next === 'c' ? 2 : 1;
      continue;
    }
    if (c === 'ç') {
      out.push('s');
      i += 1;
      continue;
    }
    if (c === 'g') {
      if (next === 'n') {
        out.push('ɲ');
        i += 2;
        continue;
      }
      if (next === 'u' && /[eéèêiïîy]/.test(at(i + 2))) {
        out.push('ɡ');
        i += 2;
        continue;
      }
      if (next === 'e' && /[aoâôu]/.test(at(i + 2))) {
        out.push('ʒ');
        i += 2;
        continue;
      }
      out.push(/[eéèêiïîy]/.test(next) ? 'ʒ' : 'ɡ');
      i += next === 'g' ? 2 : 1;
      continue;
    }
    if (c === 'q') {
      out.push('k');
      i += next === 'u' ? 2 : 1;
      continue;
    }
    if (c === 's') {
      if (next === 's') {
        out.push('s');
        i += 2;
        continue;
      }
      if (next === 'c' && /[eiy]/.test(at(i + 2))) {
        out.push('s');
        i += 2;
        continue;
      }
      if (next === 'h') {
        out.push('ʃ');
        i += 2;
        continue;
      }
      out.push(isV(prev) && isV(next) ? 'z' : 's');
      i += 1;
      continue;
    }
    if (c === 'x') {
      out.push(i === 1 && w[0] === 'e' && isV(next) ? 'ɡz' : 'ks');
      i += 1;
      continue;
    }
    if (c === 't') {
      // -tion depois de vogal ou consoante que não é s/x: nation [nasjɔ̃] (question fica [tj])
      if (r.startsWith('tion') && prev !== 's' && prev !== 'x') {
        out.push('s');
        i += 1;
        continue;
      }
      if (next === 'h') {
        out.push('t');
        i += 2;
        continue;
      }
      out.push('t');
      i += next === 't' ? 2 : 1;
      continue;
    }
    if (c === 'p' && next === 'h') {
      out.push('f');
      i += 2;
      continue;
    }
    if (c === 'h') {
      i += 1;
      continue;
    }
    if (c === "'" || c === '-') {
      i += 1;
      continue;
    }
    const simple: Record<string, string> = { b: 'b', d: 'd', f: 'f', j: 'ʒ', k: 'k', l: 'l', m: 'm', n: 'n', p: 'p', r: 'ʁ', v: 'v', w: 'w', z: 'z' };
    if (simple[c]) {
      out.push(simple[c]);
      // consoante dobrada soa uma vez só
      i += next === c ? 2 : 1;
      continue;
    }
    i += 1;
    void atEnd;
  }
  if (tail === 'ié') out.push('je');
  else if (tail === 'é' && !/[eɛə]$/.test(out.join(''))) out.push('e');
  return out.join('');
}

const ELIDED = new Set(['l', 'd', 'j', 'c', 'n', 's', 'm', 't', 'qu', 'jusqu', 'lorsqu', 'puisqu']);

/**
 * Frase inteira em IPA, entre colchetes: «Les amis sont là.» → [lez‿ami sɔ̃ la].
 * `verbs`: infinitivos conhecidos, para saber quando o -ent é de verbo (ils parlent) e é mudo.
 */
export function toIpaFr(text: string, verbs?: Set<string>): string {
  const tokens = text.replace(/’/g, "'").split(/([^\p{L}'-]+)/u);
  const words: string[] = [];
  let prevWord = '';
  let prevPause = true;
  for (const t of tokens) {
    if (!t) continue;
    if (!/\p{L}/u.test(t)) {
      if (/[.,;:!?…]/.test(t)) prevPause = true;
      continue;
    }
    // elisão: l'ami, j'ai, qu'il → uma palavra só
    const parts = t.split("'").filter(Boolean);
    let ipa = '';
    for (let k = 0; k < parts.length; k++) {
      const p = parts[k].toLowerCase();
      if (k < parts.length - 1 && ELIDED.has(p)) ipa += { l: 'l', d: 'd', j: 'ʒ', c: 's', n: 'n', s: 's', m: 'm', t: 't', qu: 'k', jusqu: 'ʒysk', lorsqu: 'lɔʁsk', puisqu: 'pɥisk' }[p];
      else ipa += t.includes("'") && k === parts.length - 1 && parts[k].toLowerCase() === 'hui' ? '' : wordToIpaFr(parts[k].replace(/-/g, ''), verbs);
    }
    if (t.toLowerCase() === "aujourd'hui") ipa = 'oʒuʁdɥi';
    const lower = t.toLowerCase();
    const startsVowel = /^[aeiouyàâäéèêëîïôöùûüœh]/.test(lower) && !H_ASPIRE.has(lower.replace(/'.*/, ''));
    const link = !prevPause && LIAISON[prevWord] && startsVowel && !lower.startsWith("h'");
    if (link && words.length) words[words.length - 1] += LIAISON[prevWord] + '‿' + ipa;
    else words.push(ipa);
    prevWord = lower;
    prevPause = false;
  }
  return words.length ? `[${words.join(' ')}]` : '';
}
