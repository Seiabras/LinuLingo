import type { StorySeed } from '../types';

/** Histórias interativas do judeu-espanhol — por enquanto uma por nível (A1.1 ao A2.2), pacote incompleto. */
export const STORIES_LAD: StorySeed[] = [
  {
    id: 'lad-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ke haber en Estambol',
    emoji: '👋',
    summary: 'Você conhece Rashel perto da Torre de Gálata, em Istambul, e faz a sua primeira conversa em ladino.',
    cultural_context: 'O bairro de Gálata, em Istambul, foi por séculos um dos centros da vida sefardita no Império Otomano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ke haber? Me yamo Rashel. Komo estas?',
        translation: 'E aí? Eu me chamo Rachel. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bien, grasias! I tu?', translation: 'Bem, obrigado! E você?', next: 'bien' },
          { text: 'Adio!', translation: 'Tchau!', wrong: 'Rashel acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bien: {
        text: 'Bien tambien! De ande sos?',
        translation: 'Bem também! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'So de São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bueno' },
          { text: 'Bevo agua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “So de…”.' },
        ],
      },
      final_bueno: {
        text: 'Ke bueno! Avlas muy bien el ladino!',
        translation: 'Que bom! Você fala muito bem o ladino!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Muy bien!', message: 'Rashel sorri: você fez a sua primeira conversa em ladino.' },
      },
    },
    glossary: [
      ['ke haber?', 'e aí?'],
      ['komo estas?', 'como você está?'],
      ['so de', 'eu sou de'],
      ['avlas', 'você fala'],
    ],
  },
  {
    id: 'lad-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Burekas en kaza de Moshe',
    emoji: '🥟',
    summary: 'Moshe, um amigo de Izmir, pergunta pela sua família e convida você para comer burekas.',
    cultural_context: 'Esmirna (Izmir) teve uma das maiores comunidades sefarditas do Império Otomano; as burekas de queijo são um clássico da mesa sefardita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ke haber? Tienes ermanos o ermanas?',
        translation: 'E aí? Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Si, tengo un ermano i una ermana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'ermanos' },
          { text: 'Mi kaza es grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “tengo…”.' },
        ],
      },
      ermanos: {
        text: 'Ke bueno! Keres komer burekas en mi kaza?',
        translation: 'Que bom! Quer comer burekas na minha casa?',
        emoji: '🥟',
        choices: [
          { text: 'Si, grasias!', translation: 'Sim, obrigado!', next: 'final_bueno' },
          { text: 'So de São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Moshe fez um convite: responda com “si” ou “no, grasias”.' },
        ],
      },
      final_bueno: {
        text: 'Mi madre aze las burekas mas buenas de Izmir!',
        translation: 'A minha mãe faz as burekas mais gostosas de Esmirna!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ke bueno!', message: 'Você foi convidado para comer burekas com a família de Moshe.' },
      },
    },
    glossary: [
      ['ermano / ermana', 'irmão / irmã'],
      ['tengo', 'eu tenho'],
      ['keres', 'você quer'],
      ['burekas', 'pastéis de massa folhada'],
    ],
  },
  // ── A2.1 e A2.2 (10/10/2026; fontes reconferidas em 11/10/2026) ──
  // Fontes: frases reais do Kantoniko (kantoniko.com): “En Estambol, en invierno, aze mas muncha luvya ke
  // inyeve.”, “Durmir bueno es importante para la mente i el puerpo”, “En enverano, en las islas de
  // Estanbol, ivamos a nadar kon barkas.”, “Kuanto kosta?”, “Kero merkar un bilyeto de avion”, “Los ijos
  // se van a la eskola kada día.”; Wikipédia em inglês, “Grand Bazaar, Istanbul” (o contexto cultural).
  // Frases MONTADAS pelas regras da gramática (não tiradas prontas de fonte):
  // - pretérito regular (-i, -ates): “Ke meldates ayer?”, “Ayer meldi un livro en la eskola i eskrivi a mi
  //   madre.”, “Lavorates?”, “Si, lavori todo el dia.”, “No, durmi muncho!”;
  // - aze/ay + tempo: “Oy aze muncho friyo, ma el sielo esta azul.”, “Ay muncha kalor!”;
  // - estar + adjetivo: “Esto triste, no tengo paras.”; ser + adjetivo: “Es muncho!”;
  // - presente: “Kero merkar un livro en ladino.” (como “Kero merkar un bilyeto”), “Tengo este livro de
  //   trenta pajinas.”, “Kosta sien liras.”, “Si, este kosta vente liras.” (como “Kuanto kosta?”), “Ay
  //   otro mas barato?” (ay = há, como “No ay paras”), “Lo merko!”, “Bueno, aki estan las paras.”;
  // - “Muy bien! I agora, un kafe kayente?” (adjetivo depois do nome, como “un livro viejo”);
  // - futuro (infinitivo + -as): “Meldaras el livro en kaza.”
  {
    id: 'lad-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un dia de invierno en Estambol',
    emoji: '❄️',
    summary: 'Num dia frio de inverno em Istambul, Rashel conta o que fez ontem e pergunta pelo seu dia.',
    cultural_context: 'Em Istambul, o inverno é frio e chuvoso: chove mais do que neva. No verão, os sefarditas da cidade lembram que iam nadar nas ilhas de Istambul.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ke haber? Oy aze muncho friyo, ma el sielo esta azul.',
        translation: 'E aí? Hoje está muito frio, mas o céu está azul.',
        emoji: '🥶',
        choices: [
          { text: 'Si, aze friyo! Ke meldates ayer?', translation: 'Sim, está frio! O que você leu ontem?', next: 'ayer' },
          { text: 'Ay muncha kalor!', translation: 'Está muito calor!', wrong: 'Rashel acabou de dizer que está muito frio: calor não combina com o inverno de Istambul.' },
        ],
      },
      ayer: {
        text: 'Ayer meldi un livro en la eskola i eskrivi a mi madre. I tu, lavorates ayer?',
        translation: 'Ontem li um livro na escola e escrevi para a minha mãe. E você, trabalhou ontem?',
        emoji: '📖',
        choices: [
          { text: 'Si, lavori todo el dia.', translation: 'Sim, trabalhei o dia todo.', next: 'final_lavor' },
          { text: 'No, durmi muncho!', translation: 'Não, dormi muito!', next: 'final_durmir' },
          { text: 'So de São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Rashel perguntou se você trabalhou ontem. Responda com “Si, lavori…” ou “No…”.' },
        ],
      },
      final_lavor: {
        text: 'Muy bien! I agora, un kafe kayente?',
        translation: 'Muito bem! E agora, um café quente?',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Un kafe kayente', message: 'Você contou o seu dia no pretérito, e Rashel convidou você para um café quente no frio de Istambul.' },
      },
      final_durmir: {
        text: 'Durmir bueno es importante para la mente i el puerpo!',
        translation: 'Dormir bem é importante para a mente e o corpo!',
        emoji: '😴',
        ending: { tone: 'bom', title: 'Durmir bueno', message: 'Você usou o pretérito para contar que dormiu muito, e Rashel achou ótimo.' },
      },
    },
    glossary: [
      ['aze friyo', 'faz frio'],
      ['meldates', 'você leu'],
      ['meldi / eskrivi', 'eu li / eu escrevi'],
      ['lavori', 'eu trabalhei'],
      ['kayente', 'quente'],
    ],
  },
  {
    id: 'lad-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Un livro en el charshi',
    emoji: '📕',
    summary: 'No Grande Bazar de Istambul, você procura um livro em ladino, pergunta o preço e paga.',
    cultural_context: 'O Grande Bazar de Istambul, em turco Kapalıçarşı (“mercado coberto”), começou a ser construído em 1455/56 e tem 61 ruas cobertas e mais de 4 mil lojas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Buenos dias! Ke keres merkar?',
        translation: 'Bom dia! O que você quer comprar?',
        emoji: '🏪',
        choices: [
          { text: 'Kero merkar un livro en ladino.', translation: 'Quero comprar um livro em ladino.', next: 'livro' },
          { text: 'Esto triste, no tengo paras.', translation: 'Estou triste, não tenho dinheiro.', wrong: 'Assim a compra não começa: o vendedor perguntou o que você quer comprar. Use “Kero merkar…”.' },
        ],
      },
      livro: {
        text: 'Tengo este livro de trenta pajinas. Kosta sien liras.',
        translation: 'Tenho este livro de trinta páginas. Custa cem liras.',
        emoji: '📕',
        choices: [
          { text: 'Es muncho! Ay otro mas barato?', translation: 'É muito! Tem outro mais barato?', next: 'barato' },
          { text: 'Bueno, aki estan las paras.', translation: 'Está bem, aqui está o dinheiro.', next: 'final_bueno' },
        ],
      },
      barato: {
        text: 'Si, este kosta vente liras.',
        translation: 'Sim, este custa vinte liras.',
        emoji: '🪙',
        choices: [
          { text: 'Lo merko! Aki estan las paras.', translation: 'Vou comprar! Aqui está o dinheiro.', next: 'final_bueno' },
          { text: 'Kuanto kosta?', translation: 'Quanto custa?', wrong: 'O vendedor já disse o preço: vinte liras. Agora é comprar e pagar.' },
        ],
      },
      final_bueno: {
        text: 'Grasias! Meldaras el livro en kaza.',
        translation: 'Obrigado! Você vai ler o livro em casa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un livro en ladino!', message: 'Você perguntou o preço, pagou e saiu do charshí com um livro em ladino.' },
      },
    },
    glossary: [
      ['merkar', 'comprar'],
      ['kosta', 'custa'],
      ['paras', 'dinheiro'],
      ['barato', 'barato'],
      ['meldaras', 'você vai ler'],
    ],
  },
];
