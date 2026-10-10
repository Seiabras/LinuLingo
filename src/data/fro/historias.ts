import type { StorySeed } from '../types';

/** Histórias interativas do francês antigo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_FRO: StorySeed[] = [
  {
    id: 'fro-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na corte de Carlemagne',
    emoji: '🏰',
    summary: 'Você chega à corte do imperador Carlemagne e encontra Rollant, um cavaleiro.',
    cultural_context: 'A corte de Carlemagne (Carlos Magno, imperador franco, 742-814) é o cenário da Chanson de Roland — a obra mais famosa escrita em francês antigo, composta por volta de 1040 (com acréscimos até cerca de 1115), sobre uma batalha de verdade ocorrida em 778 nos Pireneus.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jo sui chevalier. Estes vos ami?',
        translation: 'Eu sou cavaleiro. Você é amigo?',
        emoji: '🛡️',
        choices: [
          { text: 'Oïl, jo sui ami.', translation: 'Sim, eu sou amigo.', next: 'amigo' },
          { text: 'Jo vueil vin.', translation: 'Eu quero vinho.', wrong: 'Rollant te perguntou se você é amigo — isso não responde a pergunta dele. Tente “Oïl, jo sui ami.”' },
        ],
      },
      amigo: {
        text: 'Bon! Jo ai nom Rollant. E vos?',
        translation: 'Bom! Eu me chamo Rollant. E você?',
        emoji: '😊',
        choices: [
          { text: 'Jo ai nom Linu.', translation: 'Eu me chamo Linu.', next: 'final_bo' },
          { text: 'Jo ai un chien.', translation: 'Eu tenho um cachorro.', wrong: 'Rollant perguntou seu nome — isso não responde à pergunta dele. Tente “Jo ai nom…”' },
        ],
      },
      final_bo: {
        text: 'Bon, Linu! Merci!',
        translation: 'Bom, Linu! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo na corte!', message: 'Rollant sorri: você fez a sua primeira conversa em francês antigo, na corte de Carlemagne.' },
      },
    },
    glossary: [
      ['jo sui / il est', 'eu sou / ele é'],
      ['ami / chevalier', 'amigo / cavaleiro'],
      ['jo ai nom…', 'eu me chamo…'],
    ],
  },
  {
    id: 'fro-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mon pere e ma meson',
    emoji: '🏠',
    summary: 'Você visita a casa da sua nova amiga e conta um pouco sobre a sua família.',
    cultural_context: 'No francês antigo, "meson" (futura "maison") já significava tanto a casa física quanto, por extensão, a própria família ou linhagem — sentido que o francês moderno "maison" ainda guarda em expressões como "maison royale" (casa real, ou seja, a dinastia).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Avez vos un frere?',
        translation: 'Você tem um irmão?',
        emoji: '📜',
        choices: [
          { text: 'Oïl, jo ai un frere.', translation: 'Sim, eu tenho um irmão.', next: 'fam' },
          { text: 'Jo vueil pain.', translation: 'Eu quero pão.', wrong: 'Isso não responde sobre seus irmãos. Tente “Oïl, jo ai…” ou “Non.”' },
        ],
      },
      fam: {
        text: 'Bon! Avez vos une meson?',
        translation: 'Bom! Você tem uma casa?',
        emoji: '🏠',
        choices: [
          { text: 'Oïl, nos avons une meson.', translation: 'Sim, nós temos uma casa.', next: 'final_bo' },
          { text: 'Non, jo sui chevalier.', translation: 'Não, eu sou cavaleiro.', wrong: 'Isso não responde sobre a casa. Tente “Oïl, nos avons…” ou “Non.”' },
        ],
      },
      final_bo: {
        text: 'Bon! Bienvenu, ami!',
        translation: 'Bom! Bem-vindo(a), amigo(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Convidado para a casa!', message: 'Sua nova amiga ficou feliz em saber da sua família — e já te convidou pra conhecer a casa dela.' },
      },
    },
    glossary: [
      ['frere / suer', 'irmão / irmã'],
      ['meson', 'casa'],
      ['avoir (jo ai)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'fro-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Li chevalier vont a la bataille',
    emoji: '⚔️',
    summary: 'Você encontra Rollant e outros cavaleiros se preparando para uma batalha nos Pireneus.',
    cultural_context: 'A batalha de Roncesvalles (778), na retaguarda do exército de Carlemagne, é o acontecimento histórico por trás da Chanson de Roland — um poema cheio de cenas de espadas, escudos e exércitos inteiros de cavaleiros.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Li chevalier vont a la bataille. Avez vos une espee?',
        translation: 'Os cavaleiros vão à batalha. Você tem uma espada?',
        emoji: '⚔️',
        choices: [
          { text: 'Oïl, jo ai une espee et un escu.', translation: 'Sim, eu tenho uma espada e um escudo.', next: 'conversa' },
          { text: 'Jo ai un enfant.', translation: 'Eu tenho uma criança.', wrong: 'Isso não responde sobre a espada. Tente "Oïl, jo ai une espee" ou "Non".' },
        ],
      },
      conversa: {
        text: 'Bon! La bataille est grant, mais nostre foi est grant ensement.',
        translation: 'Bom! A batalha é grande, mas nossa fé também é grande.',
        emoji: '🙏',
        choices: [
          { text: 'Nostre foi nos dorra victoire.', translation: 'Nossa fé nos dará vitória.', next: 'final_bo' },
          { text: 'Jo vueil pain.', translation: 'Eu quero pão.', wrong: 'Isso muda de assunto. Fale sobre a fé ou a batalha.' },
        ],
      },
      final_bo: {
        text: 'Ben dit, chevaliers! Alons ensemble.',
        translation: 'Bem dito, cavaleiro! Vamos juntos.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Pronto para a batalha!', message: 'Rollant assente: você está armado e firme de fé para enfrentar a batalha ao lado dos cavaleiros de Carlemagne.' },
      },
    },
    glossary: [
      ['espee / escu', 'espada / escudo'],
      ['bataille', 'batalha'],
      ['foi', 'fé'],
    ],
  },
  {
    id: 'fro-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Jadis ert uns reis riches',
    emoji: '🕰️',
    summary: 'Um velho contador de histórias na corte de Carlemagne começa uma narrativa antiga sobre um rei de outros tempos.',
    cultural_context: 'A fórmula "jadis ert uns reis..." (antigamente havia um rei...) é típica de narrativas medievais, usando o imperfeito mais antigo de "estre" — "ert" — ao lado da forma mais nova, "estoit".',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jadis ert uns reis riches, de grant foi. Savez vos sa vie?',
        translation: 'Antigamente havia um rei rico, de grande fé. Você conhece a vida dele?',
        emoji: '📖',
        choices: [
          { text: 'Non, mais jo vueil oïr.', translation: 'Não, mas eu quero ouvir.', next: 'conversa' },
          { text: "Jo ai une espee.", translation: 'Eu tenho uma espada.', wrong: 'Isso não responde ao contador de histórias. Diga que quer ouvir a história.' },
        ],
      },
      conversa: {
        text: "Cist reis n'ert mie chevaliers, mais ert sages. Il ne faisoit pas la guerre sanz foi.",
        translation: 'Este rei não era cavaleiro, mas era sábio. Ele não fazia a guerra sem fé.',
        emoji: '👑',
        choices: [
          { text: 'Sa vie ert bone, donc.', translation: 'A vida dele era boa, então.', next: 'final_bo' },
          { text: 'Jo ne sui mie reis.', translation: 'Eu não sou rei.', wrong: 'Isso não continua a história do contador. Fale sobre a vida do rei.' },
        ],
      },
      final_bo: {
        text: 'Oïl, sa vie ert bone, e sa mort fu honoree.',
        translation: 'Sim, a vida dele era boa, e sua morte foi honrada.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa história!', message: 'O contador sorri: você escutou até o fim a história do rei sábio e de fé.' },
      },
    },
    glossary: [
      ['jadis ert', 'antigamente havia/era'],
      ['ne...mie', 'não...de jeito nenhum'],
      ['vie / mort', 'vida / morte'],
    ],
  },
];
