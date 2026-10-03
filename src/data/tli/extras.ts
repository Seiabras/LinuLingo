import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo lingít). Só dois
 * (não três): o erro mais provável e mais bem documentado é esquecer o possuidor obrigatório dos
 * substantivos inalienáveis — ver a nota 2 no cabeçalho de vocabulario.ts.
 */
export const COMMUNITY_TLI: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Diga “minha mãe” em lingít.',
    content: 'Tláa.',
    reference: 'Ax̱ tláa.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Diga “você” em lingít.',
    content: 'X̱át.',
    reference: 'Wa.é.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não confirmam uma forma de tratamento “formal” separada
 * da informal em lingít (nenhum verbo de ação com forma de citação foi encontrado, muito menos um
 * contraste de registro) — por isso o cenário é informal, como nos outros pacotes de língua indígena
 * deste app.
 */
export const SCENARIOS_TLI: ScenarioSeed[] = [
  {
    id: 'tli-s1',
    title: 'Agradecendo e apresentando a família',
    emoji: '🙏',
    cefr: 'A1',
    register: 'informal',
    persona: 'Alguém do povo lingít, no sudeste do Alasca',
    description: 'As fontes consultadas não documentam uma forma “formal” separada da informal em lingít: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Gunalchéesh!',
        botTranslation: 'Obrigado(a)!',
        keywords: ['aakʼé'],
        suggestions: ['Aakʼé!'],
      },
      {
        bot: 'Ax̱ tláa, ax̱ éesh. Wa.é?',
        botTranslation: 'Minha mãe, meu pai. E você?',
        keywords: ['ax̱ tláa', 'ax̱ éesh'],
        suggestions: ['Ax̱ tláa.', 'Ax̱ éesh.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras lingít. O lingít NÃO é parente do português (é na-dené, uma família totalmente
 * diferente da indo-europeia) — por isso as notas abaixo mostram o parentesco interno à própria língua
 * ou à família na-dené (com o eyak, não com o navajo/apache, que é um ramo diferente — ver index.ts),
 * nunca uma comparação com o português.
 */
export const ETYMOLOGY_TLI: EtymologySeed[] = [
  {
    word: 'lingít',
    root_word: 'lingít',
    origin_language: 'Lingít',
    cognates: c(['tli', 'lingít (pessoa, ser humano)']),
    evolution_note:
      'A própria palavra “lingít” significa “pessoa, ser humano”: virou o nome do povo e da língua, um padrão comum entre povos indígenas que se autodesignam simplesmente “as pessoas” ou “o povo” (en.wikipedia.org/wiki/Tlingit_language). Como adjetivo, antes do substantivo, “lingít” também quer dizer “lingít, tlingit”: “Lingít x̱ʼéinax̱” é, literalmente, “a boca/fala lingít” — a própria língua.',
    transparent: false,
  },
  {
    word: 'keijín',
    root_word: 'kei + jín',
    origin_language: 'Lingít',
    cognates: c(['tli', 'jín (mão)'], ['tli', 'jinkaat (dez)']),
    evolution_note:
      '“Keijín” (cinco) é um composto de “kei” (para cima) com “jín” (mão), segundo o Wiktionary: a mão erguida ao se chegar em cinco, contando nos dedos de uma mão. O mesmo “jín” reaparece em “jinkaat” (dez, “jín” + “kaat”), mostrando como o sistema numérico lingít guarda a própria contagem nos dedos.',
    transparent: false,
  },
  {
    word: 'jinkaat',
    root_word: 'jín + kaat',
    origin_language: 'Lingít',
    cognates: c(['tli', 'jín (mão)'], ['tli', 'keijín (cinco)']),
    evolution_note:
      '“Jinkaat” (dez) combina “jín” (mão) com “kaat”, segundo o Wiktionary — a mesma raiz “jín” de “keijín” (cinco), o que sugere uma contagem baseada nas duas mãos.',
    transparent: false,
  },
  {
    word: 'g̱ooch',
    root_word: '*ɢuǰ',
    origin_language: 'Proto-na-dené',
    cognates: c(['eya', 'ɢuˑǰih (lobo)']),
    evolution_note:
      '“G̱ooch” (lobo) vem do proto-na-dené “*ɢuǰ”, segundo o Wiktionary (que cita Fortescue e Vajda, 2022), com um parente direto no eyak, “ɢuˑǰih”. É um exemplo real de parentesco DENTRO da família na-dené — mas com o eyak, não com o navajo ou o apache, que pertencem a um ramo diferente, o atabascano: o lingít é um ramo próprio e distinto do na-dené.',
    transparent: false,
  },
  {
    word: 'gunalchéesh',
    root_word: 'gunalchéesh',
    origin_language: 'Lingít',
    cognates: c(['tli', 'gunalchéesh (obrigado)']),
    evolution_note:
      '“Gunalchéesh” (obrigado) é, segundo o Wiktionary, originalmente um substantivo verbal, com o sentido literal de “não é fácil de conseguir para si mesmo” — a gratidão expressa como reconhecimento do esforço alheio, não como uma palavra solta e simples como o “obrigado” do português.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TLI: [string, string][] = [
  ['Ax̱ tláa.', 'Escreva sobre a sua mãe, começando com “ax̱ tláa” (minha mãe).'],
  ['Ax̱ éesh ḵa ax̱ tláa.', 'Escreva sobre o seu pai e a sua mãe, usando “ḵa” (e).'],
  ['Yéil ḵa chʼáakʼ.', 'Escreva sobre o corvo e a águia, os emblemas das duas metades (Raven e Eagle) do povo lingít.'],
  ['Keitl.', 'Escreva sobre um cachorro ou outro bicho que você conhece, usando uma palavra de animal deste curso.'],
];

export const SHADOWING_TLI: [string, string][] = [
  ['Gunalchéesh!', 'Obrigado(a)!'],
  ['Ax̱ tláa.', 'Minha mãe.'],
  ['Ax̱ éesh.', 'Meu pai.'],
  ['Lingít x̱ʼéinax̱.', 'A língua lingít.'],
];
