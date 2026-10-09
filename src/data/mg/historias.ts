import type { StorySeed } from '../types';

/**
 * Histórias interativas do malgaxe — uma por subnível (A1.1, A1.2 e, a partir daqui, A2.1 e A2.2),
 * pacote ainda incompleto depois disso. As duas histórias novas (mg-h3, mg-h4) usam só vocabulário e
 * gramática já confirmados em vocabulario.ts e gramatica.ts (mercado, números de 30 a mil, hora com
 * "amin'ny" e negação com "tsy").
 */
export const STORIES_MG: StorySeed[] = [
  {
    id: 'mg-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Manao ahoana any Antananarivo',
    emoji: '👋',
    summary: 'Você conhece Rasoa numa praça de Antananarivo e faz a sua primeira conversa em malgaxe.',
    cultural_context: 'Antananarivo (ou “Tana”, como os malgaxes costumam chamar) é a capital de Madagascar, nos planaltos centrais, e o centro do dialeto merina, a base do malgaxe padrão ensinado neste curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Manao ahoana! Rasoa aho. Ahoana ianao?',
        translation: 'Oi! Eu sou a Rasoa. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tsara aho, misaotra! Ianao?', translation: 'Eu estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Veloma!', translation: 'Tchau!', wrong: 'Rasoa acabou de te cumprimentar — responda ao cumprimento primeiro, não se despeça.' },
        ],
      },
      ben: {
        text: 'Tsara koa aho! Manana trano lehibe ve ianao?',
        translation: 'Eu também estou bem! Você tem uma casa grande?',
        emoji: '😊',
        choices: [
          { text: 'Eny, manana trano lehibe aho.', translation: 'Sim, eu tenho uma casa grande.', next: 'final_bo' },
          { text: 'Tia vary aho.', translation: 'Eu gosto de arroz.', wrong: 'Isso não responde sobre a casa. Tente “eny” ou “tsia”, com “manana trano…aho”.' },
        ],
      },
      final_bo: {
        text: 'Tsara be izany!',
        translation: 'Isso é muito bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Rasoa sorri: você fez a sua primeira conversa em malgaxe, na capital de Madagascar.' },
      },
    },
    glossary: [
      ['Manao ahoana', 'oi / como você está'],
      ['tsara aho', 'eu estou bem'],
      ['manana', 'ter'],
    ],
  },
  {
    id: 'mg-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rakoto sy ny fianakaviana',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Rakoto e conhece um pouco da família dele.',
    cultural_context: 'A família extensa (“fianakaviana”) é central na vida social malgaxe: é comum várias gerações viverem perto umas das outras e participarem juntas de cerimônias e decisões importantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Manao ahoana! Manana fianakaviana lehibe ve ianao?',
        translation: 'Oi! Você tem uma família grande?',
        emoji: '📱',
        choices: [
          { text: 'Eny, manana reny sy dada aho.', translation: 'Sim, eu tenho mãe e pai.', next: 'fam' },
          { text: 'Misotro rano aho.', translation: 'Eu bebo água.', wrong: 'Isso não responde sobre a família. Use “eny”/“tsia” e “manana…aho”.' },
        ],
      },
      fam: {
        text: 'Tsara izany! Tia vary ve ianao?',
        translation: 'Que bom! Você gosta de arroz?',
        emoji: '🍚',
        choices: [
          { text: 'Eny, tia vary aho.', translation: 'Sim, eu gosto de arroz.', next: 'final_bo' },
          { text: 'Lehibe ny trano.', translation: 'A casa é grande.', wrong: 'Isso não responde sobre o arroz. Use “eny”/“tsia” com “tia vary aho”.' },
        ],
      },
      final_bo: {
        text: 'Tsara be! Mihinana vary isika!',
        translation: 'Muito bom! Vamos comer arroz!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um almoço em família!', message: 'Rakoto convida você a comer arroz com a família dele — um costume bem malgaxe.' },
      },
    },
    glossary: [
      ['fianakaviana', 'família'],
      ['tia vary', 'gosta de arroz'],
      ['mihinana', 'comer'],
    ],
  },
  {
    id: 'mg-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ao an-tsena any Analakely',
    emoji: '🧺',
    summary: 'Você vai ao mercado de Analakely, em Antananarivo, comprar pão e tenta conseguir um desconto.',
    cultural_context: 'Analakely é o mercado coberto mais famoso de Antananarivo, sucessor do antigo Zoma, a grande feira de sexta-feira que tomava conta de toda a avenida principal da capital antes de 1997. Pechinchar o preço é parte normal da conversa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Tongasoa ao an-tsena! Mila inona ianao?',
        translation: 'Bem-vindo ao mercado! Você precisa do quê?',
        emoji: '🧺',
        choices: [
          { text: 'Mila mofo aho.', translation: 'Eu preciso de pão.', next: 'preco' },
          { text: 'Veloma!', translation: 'Tchau!', wrong: 'A vendedora acabou de te dar as boas-vindas e perguntar o que você precisa — não é hora de se despedir.' },
        ],
      },
      preco: {
        text: 'Dimampolo ariary ny mofo.',
        translation: 'O pão custa cinquenta ariary.',
        emoji: '🍞',
        choices: [
          { text: 'Lafo be izany!', translation: 'Isso é muito caro!', next: 'desconto' },
          { text: 'Tia vary aho.', translation: 'Eu gosto de arroz.', wrong: 'Isso não tem nada a ver com o preço do pão — reclame do preço ou aceite comprar.' },
        ],
      },
      desconto: {
        text: 'Eny, telopolo ariary izany.',
        translation: 'Está bem, trinta ariary então.',
        emoji: '🪙',
        choices: [
          { text: 'Eny, mividy aho. Misaotra!', translation: 'Sim, eu compro. Obrigado!', next: 'final_bo' },
          { text: 'Mangatsiaka ny rano.', translation: 'A água está fria.', wrong: 'Isso não responde à oferta de desconto — diga se você vai comprar.' },
        ],
      },
      final_bo: {
        text: 'Misaotra! Tongasoa!',
        translation: 'Obrigada! Volte sempre!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa compra!', message: 'Você conseguiu um desconto e comprou pão fresco no mercado de Analakely.' },
      },
    },
    glossary: [
      ['tsena', 'mercado'],
      ['hoatrinona / lafo', 'quanto custa / caro'],
      ['mividy', 'comprar'],
    ],
  },
  {
    id: 'mg-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ny androko',
    emoji: '🕐',
    summary: 'Um dia comum: você conta a que horas se levanta, o que faz e como está o tempo.',
    cultural_context: 'Madagascar fica no mesmo fuso o ano inteiro (UTC+3, sem horário de verão), então a hora marcada em qualquer cidade da ilha é sempre a mesma.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Amin\'ny firy ianao mifoha?',
        translation: 'A que horas você se levanta de manhã?',
        emoji: '🌅',
        choices: [
          { text: 'Mifoha amin\'ny enina maraina aho.', translation: 'Eu me levanto às seis da manhã.', next: 'rotina' },
          { text: 'Mafana ny andro.', translation: 'O dia está quente.', wrong: 'Isso não responde à pergunta sobre a hora — diga “Mifoha amin’ny…aho”.' },
        ],
      },
      rotina: {
        text: 'Tsara! Miasa ve ianao, sa mianatra?',
        translation: 'Que bom! Você trabalha, ou estuda?',
        emoji: '💼',
        choices: [
          { text: 'Tsy miasa aho; mianatra malagasy aho.', translation: 'Eu não trabalho; eu estudo malgaxe.', next: 'clima' },
          { text: 'Matory amin\'ny folo alina aho.', translation: 'Eu durmo às dez da noite.', wrong: 'Isso fala da noite, não do trabalho ou dos estudos — responda com “miasa” ou “mianatra”.' },
        ],
      },
      clima: {
        text: 'Ahoana ny andro androany?',
        translation: 'Como está o tempo hoje?',
        emoji: '☀️',
        choices: [
          { text: 'Tsara ny andro, mafana sy misy masoandro.', translation: 'O dia está bom, quente e com sol.', next: 'final_bo' },
          { text: 'Mila mofo aho.', translation: 'Eu preciso de pão.', wrong: 'Isso não descreve o tempo — use “tsara”/“ratsy” e “mafana”/“mangatsiaka”.' },
        ],
      },
      final_bo: {
        text: 'Tsara ny androany!',
        translation: 'Hoje está bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia bem contado!', message: 'Você descreveu a sua hora de levantar, a sua rotina e o tempo de hoje, tudo em malgaxe.' },
      },
    },
    glossary: [
      ['amin\'ny firy', 'a que horas'],
      ['tsy', 'não (nega o predicado)'],
      ['mafana / mangatsiaka', 'quente / frio'],
    ],
  },
];
