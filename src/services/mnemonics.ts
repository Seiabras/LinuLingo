/** Palácio da memória: cada gênero mora numa sala com cor e cenário próprios. */
export type Gender = 'm' | 'f' | 'n';

export const ROOMS: Record<Gender, { name: string; emoji: string; tone: 'blue' | 'rose' | 'amber'; color: string; scene: string; rule: string }> = {
  m: {
    name: 'A Forja',
    emoji: '🔥',
    tone: 'blue',
    color: '#2563EB',
    scene: 'Uma forja de ferreiro, com fogo azul e martelos batendo.',
    rule: 'Masculino: seres masculinos, árvores, meses e muitas palavras terminadas em consoante. Plural em -i: copac → copaci.',
  },
  f: {
    name: 'O Lago',
    emoji: '🌊',
    tone: 'rose',
    color: '#E11D48',
    scene: 'Um lago rosado ao pôr do sol, com barcos e peixes saltando.',
    rule: 'Feminino: quase todas as palavras em -ă e muitas em -e, -ie, -ea. Artigo: o casă → casa.',
  },
  n: {
    name: 'O Jardim do Camaleão',
    emoji: '🦎',
    tone: 'amber',
    color: '#D97706',
    scene: 'Um jardim âmbar onde um camaleão muda de cor: macho no singular, fêmea no plural.',
    rule: 'Neutro (a joia do romeno): masculino no singular (un tren), feminino no plural (două trenuri). Plural em -uri ou -e.',
  },
};

type Room = (typeof ROOMS)[Gender];

/** Salas com as regras do idioma estudado (o russo não tem o neutro «camaleão» do romeno). */
export function roomsFor(lang: string): Record<Gender, Room> {
  if (lang !== 'ru') return ROOMS;
  return {
    m: { ...ROOMS.m, rule: 'Masculino: termina em consoante ou em -й (дом, чай, музе́й). Alguns em -ь também (слова́рь, день).' },
    f: { ...ROOMS.f, rule: 'Feminino: termina em -а ou -я (ма́ма, неде́ля) e quase todas em -ость (ра́дость). Muitos em -ь (ночь, дверь).' },
    n: {
      ...ROOMS.n,
      name: 'O Jardim',
      emoji: '🌿',
      scene: 'Um jardim âmbar cheio de janelas abertas, árvores e o sol da manhã.',
      rule: 'Neutro: termina em -о, -е ou -ё (окно́, мо́ре, бельё) e em -мя (и́мя, вре́мя).',
    },
  };
}

/** Texto do Linu na entrada do palácio. */
export function palaceIntro(lang: string): string {
  return lang === 'ru'
    ? 'O russo tem 3 gêneros, e o gênero muda o adjetivo e o possessivo (мой дом, моя́ ма́ма, моё окно́). Imagine cada palavra morando numa sala do palácio!'
    : 'O romeno tem 3 gêneros. Imagine cada palavra morando numa sala do palácio: fica muito mais fácil lembrar se é «un» ou «o»!';
}

/** Dica específica para a palavra, a partir da terminação. */
export function genderTip(word: string, gender: Gender, lang = 'ro'): string {
  const w = word.toLowerCase().replace(/\u0301/g, '');
  if (lang === 'ru') {
    const rooms = roomsFor('ru');
    if (w.endsWith('ь')) return gender === 'f' ? 'Termina em -ь: esses se dividem entre masculino e feminino; esta é feminina (como ночь, дверь). As em -ость são sempre femininas.' : 'Termina em -ь: esses se dividem; esta é masculina (como день, слова́рь). Decore junto com um adjetivo: «но́вый день».';
    if (gender === 'm' && /[ая]$/.test(w)) return 'Cuidado: termina em -а/-я, mas é masculina porque designa um homem (па́па, дя́дя, мужчи́на).';
    if (gender === 'n' && w.endsWith('мя')) return 'As palavras em -мя (и́мя, вре́мя) são neutras, apesar do -я.';
    return rooms[gender].rule;
  }
  if (gender === 'f') {
    if (w.endsWith('ă')) return 'Terminou em -ă? Quase sempre feminino.';
    if (w.endsWith('ie') || w.endsWith('ea')) return 'Terminações -ie e -ea costumam ser femininas.';
    if (w.endsWith('e')) return 'Muitas palavras em -e são femininas (carte, floare), mas não todas: câine e frate são masculinas!';
    return ROOMS.f.rule;
  }
  if (gender === 'm') {
    if (w.endsWith('e')) return 'Cuidado: termina em -e, mas é masculina (como câine, frate, munte).';
    if (w.endsWith('u')) return 'Palavras em -u costumam ser masculinas ou neutras; esta é masculina.';
    return ROOMS.m.rule;
  }
  return 'Neutro: no singular usa «un» como o masculino, mas no plural vira feminino (un ou → două ouă).';
}

/** Mnemônico sugerido quando o aluno ainda não escreveu o dele. */
export function defaultMnemonic(word: string, meaning: string, gender: Gender, lang = 'ro'): string {
  const r = roomsFor(lang)[gender];
  const where = { m: 'no fogo da Forja', f: 'boiando no Lago', n: lang === 'ru' ? 'no Jardim, entre as janelas abertas' : 'no Jardim, trocando de cor com o camaleão' }[gender];
  return `Imagine ${meaning.split(/[/;,]/)[0].trim()} (${word}) ${where} ${r.emoji}`;
}
