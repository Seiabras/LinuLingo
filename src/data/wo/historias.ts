import type { StorySeed } from '../types';

/**
 * Histórias interativas do wolof — por enquanto uma por subnível (A1.1 e A1.2), pacote incompleto (ver
 * `incomplete` em index.ts). As falas combinam só palavras e frases já atestadas em vocabulario.ts e
 * curriculo.ts (Wikipédia “Wolof language”, Wikcionário, Omniglot “Wolof phrases”) com os padrões de
 * frase também já atestados ali (“Dama + verbo + substantivo”, “X ak Y”, a troca de cumprimentos
 * “Na nga def?”/“Jàmm nga am?” → “Jàmm rekk”) — nenhuma palavra nova é inventada aqui.
 */
export const STORIES_WO: StorySeed[] = [
  {
    id: 'wo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Waxtaan: Na nga def?',
    emoji: '👋',
    summary: 'Uma troca de cumprimentos completa — o “waxtaan” (bate-papo) que abre toda conversa em wolof — com uma família no Senegal.',
    cultural_context:
      'Em wolof, cumprimentar é sempre uma pequena conversa, nunca só um “oi” rápido: pergunta-se como a pessoa está (“Na nga def?”) ou diretamente pela paz dela (“Jàmm nga am?”), e normalmente também se pergunta pela família antes de ir ao assunto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Na nga def?',
        translation: 'Como vai?',
        emoji: '👋',
        choices: [
          { text: 'Jàmm rekk, jërejëf. Yow nag?', translation: 'Vou bem (só paz), obrigado(a). E você?', next: 'resposta' },
          { text: 'Baay ak doom.', translation: 'O pai e o filho (ou filha).', wrong: 'Isso não responde “como vai?”. Responda com “Jàmm rekk, jërejëf” (vou bem, obrigado).' },
        ],
      },
      resposta: {
        text: 'Jàmm nga am?',
        translation: 'Você tem paz? (outro jeito comum de perguntar “como vai”)',
        emoji: '🕊️',
        choices: [
          { text: 'Jàmm rekk.', translation: 'Só paz (vou bem).', next: 'familia' },
          { text: 'Déedéet.', translation: 'Não.', wrong: 'Responder “não” a esse cumprimento de paz soa estranho nesta conversa cordial. Responda com “Jàmm rekk” (só paz, vou bem).' },
        ],
      },
      familia: {
        text: 'Baay ak yaay?',
        translation: 'O pai e a mãe? (perguntando pela sua família)',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Baay ak doom.', translation: 'O pai e o filho (ou filha).', next: 'final' },
          { text: 'Jàmm rekk.', translation: 'Só paz.', wrong: 'A pergunta agora era sobre a família (baay, yaay, doom), não um novo cumprimento. Responda falando da família: “Baay ak doom.”.' },
        ],
      },
      final: {
        text: 'Ba beneen!',
        translation: 'Até logo! (até a próxima vez)',
        emoji: '👋',
        ending: {
          tone: 'bom',
          title: 'Um waxtaan completo',
          message: 'Você cumprimentou, respondeu como vai e falou da família — uma troca completa de “waxtaan” (bate-papo), do jeito que se cumprimenta em wolof.',
        },
      },
    },
    glossary: [
      ['Na nga def', 'oi, como vai?'],
      ['Jàmm rekk', 'só paz (vou bem)'],
      ['baay', 'pai'],
      ['doom', 'filho, filha'],
    ],
  },
  {
    id: 'wo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ceeb ak jën, ci kër gi',
    emoji: '🍚',
    summary: 'Um dia comum em casa: o que se come, o que se bebe e uma conversa sobre o corpo.',
    cultural_context:
      'O “ceebu jën” (arroz com peixe) é o prato mais famoso do Senegal, servido costumeiramente num prato grande, de onde a família toda come junto — por isso “ceeb” (arroz) e “jën” (peixe) são duas das primeiras palavras de comida que se aprendem em wolof.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dama lekk ceebu jën.',
        translation: 'Eu como arroz com peixe (ceebu jën).',
        emoji: '🍚',
        choices: [
          { text: 'Dama bëgg ceeb ak jën.', translation: 'Eu quero arroz com peixe.', next: 'bebida' },
          { text: 'Dama dem kër.', translation: 'Eu vou para casa.', wrong: 'A fala era sobre a comida (ceebu jën), não sobre ir embora. Responda falando da comida: “Dama bëgg ceeb ak jën.”.' },
        ],
      },
      bebida: {
        text: 'Dama naan ndox. Yow nag?',
        translation: 'Eu bebo água. E você?',
        emoji: '💧',
        choices: [
          { text: 'Dama naan meew.', translation: 'Eu bebo leite.', next: 'corpo' },
          { text: 'Benn, ñaar, ñett.', translation: 'Um, dois, três.', wrong: 'A pergunta era sobre o que você bebe, não sobre números. Responda com “Dama naan…” e uma bebida, como “meew” (leite).' },
        ],
      },
      corpo: {
        text: 'Dama gis ak bët.',
        translation: 'Eu vejo com os olhos.',
        emoji: '👁️',
        choices: [
          { text: 'Dama bëgg loxo ak tànk.', translation: 'Eu gosto das minhas mãos e pernas.', next: 'final' },
          { text: 'Dama lekk kër.', translation: 'Eu como casa.', wrong: '“Kër” é a casa, não dá para comer. Fale do corpo, com “loxo” (mão, braço) ou “tànk” (perna, pé).' },
        ],
      },
      final: {
        text: 'Jàmm rekk! Ba beneen.',
        translation: 'Vou bem! Até logo.',
        emoji: '👋',
        ending: {
          tone: 'bom',
          title: 'Um dia de comida e conversa',
          message: 'Você falou da sua comida, da bebida e até do corpo — um bate-papo completo sobre o dia a dia em wolof.',
        },
      },
    },
    glossary: [
      ['ceeb', 'arroz'],
      ['jën', 'peixe'],
      ['ndox', 'água'],
      ['meew', 'leite'],
    ],
  },
];
