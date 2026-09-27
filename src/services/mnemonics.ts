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
  if (lang === 'es')
    return {
      m: { ...ROOMS.m, rule: 'Masculino: quase todas em -o, e as em -aje (el viaje), -or (el color) e as de origem grega em -ma (el problema, el tema). Cuidado com as que mudam de gênero em relação ao português!' },
      f: { ...ROOMS.f, rule: 'Feminino: quase todas em -a, e as em -ción/-sión, -dad/-tad, -tud e -umbre (la costumbre, la legumbre). Exceções clássicas: la mano, la radio, la foto, la moto.' },
      n: ROOMS.n,
    };
  if (lang === 'it')
    return {
      m: { ...ROOMS.m, rule: 'Masculino: quase todas em -o (il libro), muitas em -e (il fiore, il pane) e as de origem grega em -ma (il problema, il tema). Plural em -i.' },
      f: { ...ROOMS.f, rule: 'Feminino: quase todas em -a (la casa), as em -zione/-sione (la stazione), -tà/-tù (la città, la virtù) e -i (la crisi). Exceções: la mano, la radio, la foto, la moto.' },
      n: ROOMS.n,
    };
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

/** Heterogenéricos mais comuns: gênero diferente do português. */
const HETERO_ES: Record<string, string> = {
  leche: 'Atenção: la leche é feminino (o leite).',
  sal: 'Atenção: la sal é feminino (o sal).',
  miel: 'Atenção: la miel é feminino (o mel).',
  sangre: 'Atenção: la sangre é feminino (o sangue).',
  nariz: 'Atenção: la nariz é feminino (o nariz).',
  árbol: 'Atenção: el árbol é masculino (a árvore).',
  color: 'Atenção: el color é masculino (a cor).',
  dolor: 'Atenção: el dolor é masculino (a dor).',
  puente: 'Atenção: el puente é masculino (a ponte).',
  origen: 'Atenção: el origen é masculino (a origem).',
  labor: 'Atenção: la labor é feminino (o labor).',
  señal: 'Atenção: la señal é feminino (o sinal).',
};

/** Italiano: gênero diferente do português (ou armadilha de gênero). */
const HETERO_IT: Record<string, string> = {
  fiore: 'Atenção: il fiore é masculino (a flor).',
  carcere: 'Atenção: il carcere é masculino (a prisão, o cárcere).',
  pepe: 'Atenção: il pepe é masculino (a pimenta-do-reino).',
  latte: 'Il latte é masculino, como «o leite» — igual ao português (no espanhol é feminino).',
  mare: 'Il mare é masculino, como em português.',
  problema: 'Termina em -a, mas é masculino: il problema (plural: i problemi).',
  mano: 'Termina em -o, mas é feminina: la mano (plural: le mani).',
  uovo: 'Masculino no singular (l’uovo) e feminino no plural: le uova!',
  braccio: 'Masculino no singular (il braccio) e feminino no plural: le braccia.',
  dito: 'Masculino no singular (il dito) e feminino no plural: le dita.',
  labbro: 'Masculino no singular (il labbro) e feminino no plural: le labbra.',
  ginocchio: 'Masculino no singular (il ginocchio) e, no plural do corpo, feminino: le ginocchia.',
  osso: 'Masculino no singular (l’osso) e, no plural do corpo, feminino: le ossa.',
  lenzuolo: 'Masculino no singular (il lenzuolo) e, no par da cama, feminino: le lenzuola.',
};

/** Texto do Linu na entrada do palácio. */
export function palaceIntro(lang: string): string {
  if (lang === 'it')
    return 'O italiano tem 2 gêneros, como o português, e quase sempre a terminação entrega: -o masculino, -a feminino. O perigo mora nas em -e (il fiore, la notte) e nos plurais que trocam de gênero: l’uovo → le uova. Guarde cada uma na sala certa!';
  if (lang === 'es')
    return 'O espanhol tem 2 gêneros, como o português, mas muitas palavras trocam de gênero de uma língua para a outra: el viaje, la leche, el árbol, la nariz. Guarde cada uma na sala certa!';
  return lang === 'ru'
    ? 'O russo tem 3 gêneros, e o gênero muda o adjetivo e o possessivo (мой дом, моя́ ма́ма, моё окно́). Imagine cada palavra morando numa sala do palácio!'
    : 'O romeno tem 3 gêneros. Imagine cada palavra morando numa sala do palácio: fica muito mais fácil lembrar se é «un» ou «o»!';
}

/** Dica específica para a palavra, a partir da terminação. */
export function genderTip(word: string, gender: Gender, lang = 'ro'): string {
  const w = word.toLowerCase().replace(/\u0301/g, '');
  if (lang === 'it') {
    if (HETERO_IT[w]) return HETERO_IT[w];
    if (w.endsWith('zione') || w.endsWith('sione')) return 'Terminou em -zione/-sione? Feminino: la stazione, la televisione (como «a estação» em português).';
    if (/(tà|tù)$/.test(w)) return 'Terminou em -tà/-tù? Feminino e invariável no plural: la città → le città.';
    if (gender === 'm' && w.endsWith('ma')) return 'Palavra de origem grega em -ma: masculina, como il problema, il tema, il programma.';
    if (w.endsWith('e')) return gender === 'm' ? 'Termina em -e: pode ser dos dois gêneros. Esta é masculina (como il fiore, il pane). Decore com o artigo!' : 'Termina em -e: pode ser dos dois gêneros. Esta é feminina (como la notte, la chiave). Decore com o artigo!';
    return roomsFor('it')[gender].rule;
  }
  if (lang === 'es') {
    if (w.endsWith('aje')) return 'Terminou em -aje? Masculino: el viaje, el paisaje, el garaje (em português é feminino: a viagem).';
    if (w.endsWith('umbre')) return 'Terminou em -umbre? Feminino: la costumbre, la legumbre (em português: o costume, o legume).';
    if (gender === 'm' && w.endsWith('ma')) return 'Palavra de origem grega em -ma: masculina, como el problema, el tema, el idioma.';
    if (gender === 'f' && w.endsWith('o')) return 'Exceção: termina em -o, mas é feminina (la mano, la radio, la foto).';
    if (HETERO_ES[w]) return HETERO_ES[w];
    return roomsFor('es')[gender].rule;
  }
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
