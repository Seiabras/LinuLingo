import type { StorySeed } from '../types';

/**
 * Histórias interativas do guarani antigo/colonial — por enquanto uma por nível (A1.1 e A1.2),
 * pacote incompleto. Ambientadas numa redução jesuítica do Paraguai colonial. O jogador decide suas
 * próprias respostas a cada passo — o narrador nunca escolhe a identidade dele.
 */
export const STORIES_GNW: StorySeed[] = [
  {
    id: 'gnw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ereyupa? Chegando à redução',
    emoji: '👋',
    summary: 'Você chega a uma redução jesuítica do Paraguai colonial e troca o primeiro cumprimento com Potira.',
    cultural_context:
      'Chegar perto de alguém já era, por si só, motivo de pergunta: por isso o cumprimento mais documentado por Montoya pergunta diretamente se a pessoa veio (“Ereyupa?”), e não um simples “oi” solto — o mesmo padrão do tupi antigo, língua-irmã do guarani.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ereyupa?',
        translation: 'Você vem?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tã.', translation: 'Sim. (resposta de um homem)', next: 'veio' },
          { text: 'Heẽ.', translation: 'Sim. (resposta de uma mulher)', next: 'veio' },
          { text: 'Aany.', translation: 'Não.', wrong: 'Potira está te recebendo — se você chegou, confirme com “Tã” ou “Heẽ”, conforme o seu gênero.' },
        ],
      },
      veio: {
        text: 'Mbae nde Tera?',
        translation: 'Qual é o seu nome? (lit. “coisa teu nome”)',
        emoji: '😊',
        choices: [
          { text: 'Che Tera Linu.', translation: 'Meu nome [é] Linu.', next: 'nome' },
          { text: 'Pota Y.', translation: 'Eu quero água.', wrong: 'Isso não responde qual é o seu nome. Tente “Che Tera…”.' },
        ],
      },
      nome: {
        text: 'Che Tera Potira. Nde Tuba, nde Cuña?',
        translation: 'Meu nome [é] Potira. [E] seu pai, sua mãe?',
        emoji: '👩',
        choices: [
          { text: 'Che Tuba guasu.', translation: 'Meu pai [é] grande.', next: 'final_bo' },
          { text: 'Mitã mirĩ che.', translation: 'Eu [sou] uma criança pequena.', next: 'final_bo' },
          { text: 'Yby catupiri.', translation: 'A terra [é] boa.', wrong: 'Isso não fala da sua família. Use “Che Tuba…” ou “Mitã mirĩ che”.' },
        ],
      },
      final_bo: {
        text: 'Catupiri! Nde Yrumo.',
        translation: 'Bom! Com você. (lit. “tu-junto”, uma forma de boas-vindas)',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa chegada!', message: 'Potira sorri: você fez a sua primeira conversa em guarani antigo, logo na entrada da redução.' },
      },
    },
    glossary: [
      ['Ereyupa? / Tã, Heẽ', 'você vem? / sim (homem), sim (mulher)'],
      ['Mbae nde Tera?', 'qual é o seu nome?'],
      ['catupiri', 'bom, bonito'],
    ],
  },
  {
    id: 'gnw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na roça com a família',
    emoji: '🌽',
    summary: 'Potira te leva para conhecer a roça comunitária da redução e fala um pouco da família e da comida dela.',
    cultural_context:
      'As reduções jesuíticas se organizavam em torno de roças comunitárias de milho (abatí) e mandioca (mandiog) — a base da alimentação guarani colonial, ao lado do peixe (pirá) pescado nos rios da região.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Che Tuba, che Membi: ore Abatí.',
        translation: 'Meu pai, meus filhos: nosso milho. (apresentando a família e a roça)',
        emoji: '🌽',
        choices: [
          { text: 'Abatí guasu!', translation: 'O milho [é] grande!', next: 'familia' },
          { text: 'Yagua mirĩ.', translation: 'Um cachorro pequeno.', wrong: 'Isso não fala da roça nem da família. Tente “Abatí guasu!”.' },
        ],
      },
      familia: {
        text: 'Catupiri! Pota Pirá?',
        translation: 'Bom! Você quer peixe?',
        emoji: '🐟',
        choices: [
          { text: 'Tã, pota Pirá.', translation: 'Sim, eu quero peixe. (resposta de homem)', next: 'final_bo' },
          { text: 'Heẽ, pota Pirá.', translation: 'Sim, eu quero peixe. (resposta de mulher)', next: 'final_bo' },
          { text: 'Ybág tobí.', translation: 'O céu [é] azul.', wrong: 'Isso não responde se você quer peixe. Use “Tã” ou “Heẽ, pota Pirá”.' },
        ],
      },
      final_bo: {
        text: 'Ahá Y rupi, Pirá rehe!',
        translation: 'Vamos ao rio, atrás do peixe!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um convite de verdade!', message: 'Potira gostou de mostrar a roça e a família — e já te chamou para pescar no rio com ela.' },
      },
    },
    glossary: [
      ['Tuba / Membi', 'pai / filho, filha (dito pela mãe)'],
      ['Abatí / Pirá', 'milho / peixe'],
      ['pota', 'querer'],
    ],
  },
];
