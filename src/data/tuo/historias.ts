import type { StorySeed } from '../types';

/**
 * Histórias interativas do tukano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As duas são baseadas, quase frase por frase, nos dois diálogos de exemplo citados em
 * pt.wikipedia.org/wiki/Língua_tucano (a partir da gramática pedagógica de West & Welsch, 2004) — ver
 * vocabulario.ts para a lista completa de fontes. As únicas frases acrescentadas são as opções
 * “erradas”, montadas combinando palavras já atestadas noutro lugar do pacote.
 */
export const STORIES_TUO: StorySeed[] = [
  {
    id: 'tuo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Anuáto! Ye'pâ-masa?",
    emoji: '👋',
    summary: 'Você encontra alguém em Iauaretê, às margens do rio Uaupés, e descobre que os dois são ye\'pâ-masa.',
    cultural_context: "Iauaretê, no rio Uaupés, é um dos centros tradicionais dos Ye'pâ-masa (povo tukano). Perguntar de qual grupo alguém é faz parte de se apresentar no Alto Rio Negro, onde várias línguas e povos convivem lado a lado.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Anuáto!',
        translation: 'Olá!',
        emoji: '🙋',
        choices: [
          { text: 'Anuáto! Anutí?', translation: 'Olá! Como você está?', next: 'estado' },
          { text: "Masîtisa'.", translation: 'Eu não sei.', wrong: 'A pessoa só disse “Anuáto!” (olá); ainda não perguntou nada para você “não saber”. Devolva a saudação com “Anuáto!”.' },
        ],
      },
      estado: {
        text: "Anú'u. Mɨ'ɨ ye'pâ-masɨ nii-á-ti?",
        translation: 'Eu estou bem. Você é ye\'pâ-masɨ (gente da nossa terra)?',
        emoji: '❓',
        choices: [
          { text: "Yɨ'ɨ ke'ra ye'pâ-masɨ nii-'.", translation: "Eu também sou ye'pâ-masɨ.", next: 'grupo' },
          { text: "Te'á!", translation: 'Vamos!', wrong: 'Isso muda de assunto: a pessoa perguntou se você é ye\'pâ-masɨ. Responda com “Yɨ\'ɨ … nii-\'.” (eu sou…).' },
        ],
      },
      grupo: {
        text: "Ye'pâ-masa nii-', ɨ̃sâ pɨɨárã!",
        translation: "Somos ye'pâ-masa, nós dois!",
        emoji: '🤝',
        choices: [
          { text: 'Aɨ! Anuáto reté!', translation: 'Tá bom! Olá de novo!', next: 'final' },
          { text: "Naâ ye'pâ-masa nii-ma.", translation: "Eles/elas são ye'pâ-masa.", wrong: 'Isso fala de outras pessoas (“naâ”, eles/elas), mas a conversa é sobre vocês dois. Confirme com “Aɨ!” (tá bom).' },
        ],
      },
      final: {
        text: "Aɨ! Yamiákã, te'á!",
        translation: 'Tá bom! Amanhã, vamos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: "Ye'pâ-masa, nós dois!", message: "Você descobriu que a pessoa que acabou de conhecer em Iauaretê também é ye'pâ-masa — e já combinaram de se encontrar de novo amanhã." },
      },
    },
    glossary: [
      ['Anuáto', 'olá'],
      ['Anutí', 'como você está?'],
      ["ye'pâ-masa", 'gente da nossa terra (autodesignação do povo tukano)'],
      ['pɨɨárã', 'dois'],
    ],
  },
  {
    id: 'tuo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Mɨ'ɨ pacó",
    emoji: '🏡',
    summary: 'Uma conversa em casa: o que você está fazendo, e o que a sua mãe está preparando.',
    cultural_context: 'A mandioca (“da\'rê”) é a base da alimentação no Alto Rio Negro, preparada em casa (“wi\'i”) — a cena deste diálogo, documentada para o tukano, retrata justamente esse dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "De'ró weé'gɨ' wee'ti?",
        translation: 'O que você está fazendo?',
        emoji: '❓',
        choices: [
          { text: "Su'tí besé-gɨ weé-'.", translation: 'Estou escolhendo roupa.', next: 'mae' },
          { text: 'Anuáto!', translation: 'Olá!', wrong: 'Isso é só uma saudação; a pergunta foi sobre o que você está fazendo agora. Responda com “weé-\'” (estou fazendo) ou diga o que está escolhendo.' },
        ],
      },
      mae: {
        text: "Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?",
        translation: 'E a sua mãe, o que ela está fazendo?',
        emoji: '👩',
        choices: [
          { text: "Da'rê ba'a-go' wee-á-mo, ɨ̃sa yaá wi'i-pɨ.", translation: 'Ela está preparando mandioca, na nossa casa.', next: 'final' },
          { text: "Masîtisa'.", translation: 'Eu não sei.', wrong: 'Você sabe sim: ela está preparando a mandioca em casa. Responda terminando o verbo com “-á-mo” (visto, feminino): “…wee-á-mo”.' },
        ],
      },
      final: {
        text: 'Aɨ! Anú\'u.',
        translation: 'Tá bom! Eu estou bem.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Da\'rê, na wi\'i', message: 'Você contou o que estava fazendo e o que a sua mãe estava preparando em casa — uma conversa simples do dia a dia, em tukano.' },
      },
    },
    glossary: [
      ["de'ró", 'o quê'],
      ['pacó', 'mãe'],
      ["da'rê", 'mandioca'],
      ["wi'i", 'casa'],
    ],
  },
];
