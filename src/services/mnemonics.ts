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

/** Dica específica para a palavra, a partir da terminação. */
export function genderTip(word: string, gender: Gender): string {
  const w = word.toLowerCase();
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
export function defaultMnemonic(word: string, meaning: string, gender: Gender): string {
  const r = ROOMS[gender];
  const where = { m: 'no fogo da Forja', f: 'boiando no Lago', n: 'no Jardim, trocando de cor com o camaleão' }[gender];
  return `Imagine ${meaning.split(/[/;,]/)[0].trim()} (${word}) ${where} ${r.emoji}`;
}
