import type { StorySeed } from '../types';

/**
 * Histórias interativas do Ido — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. A
 * comunidade do Ido é pequena e vive sobretudo online (fóruns, grupos de redes sociais, a revista
 * “Progreso” desde 1908) — por isso as histórias se passam num fórum de Ido, um cenário real e bem
 * documentado, em vez de inventar um evento presencial que não achamos fonte confiável pra citar.
 */
export const STORIES_IDO: StorySeed[] = [
  {
    id: 'ido-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Saluto, nova amiko!',
    emoji: '👋',
    summary: 'Você entra num fórum online de Ido e conhece Petro, outro estudante, na seção de apresentações.',
    cultural_context: 'A comunidade do Ido é pequena (estimativas de 1.000 a 5.000 falantes) e vive sobretudo online, em fóruns e grupos de redes sociais — bem diferente do esperanto, que tem congressos presenciais todo ano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluto! Quo esas vua nomo?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mea nomo esas Ana. E vua?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adio!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Me nomesas Petro. Ka vu parolas Ido de longa tempo?',
        translation: 'Eu me chamo Petro. Você fala Ido há muito tempo?',
        emoji: '😊',
        choices: [
          { text: 'Yes, me lernas Ido.', translation: 'Sim, eu estudo Ido.', next: 'final_bo' },
          { text: 'La pano esas bona.', translation: 'O pão é bom.', wrong: 'Isso não responde sobre há quanto tempo você fala Ido. Tente “Yes…” ou “No…”.' },
        ],
      },
      final_bo: {
        text: 'Bonege! Danko, e bona chanco, Ana!',
        translation: 'Ótimo! Obrigado, e boa sorte, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo!', message: 'Petro gostou de conhecer você: foi sua primeira conversa em Ido, num fórum de verdade.' },
      },
    },
    glossary: [
      ['saluto / adio', 'olá / tchau'],
      ['mea nomo esas… / me nomesas…', 'meu nome é… / eu me chamo…'],
      ['danko', 'obrigado'],
    ],
  },
  {
    id: 'ido-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'En la domo de Petro',
    emoji: '🏠',
    summary: 'Você visita (por videochamada) o novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'Como o Ido não assume o masculino como padrão nas palavras de parentesco (ver gramática desta unidade), falar da família é também um bom jeito de praticar os sufixos -ulo e -ino.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluto! Ka vu havas fratuli?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Yes, me havas un fratulo e un fratino.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Mea domo esas granda.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “yes, me havas…” ou “no”.' },
        ],
      },
      fam: {
        text: 'Bonege! E quala esas vua domo?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mea domo esas mikra ma bona.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dek yari.', translation: 'Dez anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “mea domo…”' },
        ],
      },
      final_bo: {
        text: 'Interesanta! Bonveno a mea domo!',
        translation: 'Interessante! Seja bem-vindo(a) à minha casa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Petro gostou de saber da sua família — e já te deu as boas-vindas à casa dele.' },
      },
    },
    glossary: [
      ['fratulo / fratino', 'irmão / irmã'],
      ['mea domo', 'minha casa'],
      ['havar (me havas)', 'ter (eu tenho)'],
    ],
  },
];
