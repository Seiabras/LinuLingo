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
];
