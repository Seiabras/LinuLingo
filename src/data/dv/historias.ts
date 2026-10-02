import type { StorySeed } from '../types';

/**
 * Histórias interativas do dhivehi — uma por nível (A1.1 e A1.2), pacote incompleto. Como esta
 * sessão não confirmou por fonte um verbo de ligação (“ser/estar”) nem a conjugação verbal do
 * dhivehi, os diálogos usam frases prontas e confirmadas (saudações do Wikivoyage, a declinação
 * de “eu” do Wiktionary) e justaposições simples (substantivo+adjetivo, genitivo+substantivo) em
 * vez de inventar gramática — ver o aviso no topo de vocabulario.ts.
 */
export const STORIES_DV: StorySeed[] = [
  {
    id: 'dv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Maruhabaa, Mālegai!',
    emoji: '👋',
    summary: 'Você chega a Malé, a capital das Maldivas, e faz a sua primeira conversa em dhivehi.',
    cultural_context:
      'O dhivehi é a única língua oficial e nacional das Maldivas, com cerca de 504.829 falantes (dado de 2022, Wikipédia). “އައްސަލާމު ޢަލައިކުމް” é a saudação formal de origem árabe, usada em todo o mundo muçulmano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'އައްސަލާމު ޢަލައިކުމް! ހާލުކިހިނެއް?',
        translation: 'Que a paz esteja com você! Como você está?',
        emoji: '🙋',
        choices: [
          { text: 'ރަނގަޅު, ޝުކުރިއްޔާ!', translation: 'Bem, obrigado!', next: 'bom' },
          { text: 'ވަކިވެލަން!', translation: 'Tchau!', wrong: 'A pessoa acabou de te cumprimentar e perguntar como você está: despedir-se agora seria estranho. Responda primeiro com “ރަނގަޅު” (bem).' },
        ],
      },
      bom: {
        text: 'ކޮން ނަމެއް ކިޔަނީ?',
        translation: 'Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'އަހަރެންގެ ނަން...', translation: 'Meu nome é… (diga o seu nome)', next: 'nome' },
          { text: 'ކަނޑު ނޫ.', translation: 'O mar é azul.', wrong: 'Isso não responde qual é o seu nome. Use “އަހަރެންގެ ނަން…” (meu nome é…).' },
        ],
      },
      nome: {
        text: 'ރަނގަޅު! މަރުޙަބާ!',
        translation: 'Legal! Bem-vindo!',
        emoji: '🎉',
        choices: [
          { text: 'ޝުކުރިއްޔާ!', translation: 'Obrigado!', next: 'final_bom' },
          { text: 'ނޫން.', translation: 'Não.', wrong: 'A pessoa te deu as boas-vindas: um “ނޫން” (não) soa estranho aqui. Agradeça com “ޝުކުރިއްޔާ”.' },
        ],
      },
      final_bom: {
        text: 'ކަލޭ ކޮންތާކު?',
        translation: 'De onde você é?',
        emoji: '🗺️',
        ending: { tone: 'bom', title: 'ފުރަތަމަ ވާހަކަ', message: 'Você fez a sua primeira conversa em dhivehi, em Malé — e já sabe se cumprimentar, dizer seu nome e agradecer.' },
      },
    },
    glossary: [
      ['އައްސަލާމު ޢަލައިކުމް', 'saudação formal (que a paz esteja com você)'],
      ['ހާލުކިހިނެއް', 'como você está?'],
      ['ކޮން ނަމެއް ކިޔަނީ', 'qual é o seu nome?'],
      ['އަހަރެންގެ ނަން', 'meu nome é'],
    ],
  },
  {
    id: 'dv-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mas bēlan',
    emoji: '🐟',
    summary: 'Você vai a uma banca de peixe em Malé e escolhe o que comprar.',
    cultural_context:
      'As Maldivas são um arquipélago no Oceano Índico: o peixe (މަސް, mas) é um alimento central, e várias palavras do vocabulário básico do dhivehi (num dicionário etimológico citado pelo Wiktionary) giram em torno do mar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'މަރުޙަބާ! ރަތް މަސް. ރަނގަޅު?',
        translation: 'Oi! Peixe vermelho. Bom?',
        emoji: '🐟',
        choices: [
          { text: 'ލައްބަ, ޝުކުރިއްޔާ!', translation: 'Sim, obrigado!', next: 'compra_vermelho' },
          { text: 'ނޫން.', translation: 'Não.', next: 'oferece_outro' },
          { text: 'ވަކިވެލަން!', translation: 'Tchau!', wrong: 'O vendedor ainda está te mostrando o peixe: despedir-se agora seria estranho. Responda “ލައްބަ” (sim) ou “ނޫން” (não) primeiro.' },
        ],
      },
      oferece_outro: {
        text: 'ދޭއް މަސް. ރަނގަޅު?',
        translation: 'Dois peixes. Bom?',
        emoji: '🐟',
        choices: [
          { text: 'ލައްބަ, ޝުކުރިއްޔާ!', translation: 'Sim, obrigado!', next: 'compra_dois' },
          { text: 'ނޫން, ޝުކުރިއްޔާ.', translation: 'Não, obrigado.', next: 'final_neutro' },
        ],
      },
      compra_vermelho: {
        text: 'ރަނގަޅު! ޝުކުރިއްޔާ!',
        translation: 'Ótimo! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'މަސް ގަތުން', message: 'Você comprou o peixe vermelho na banca de Malé.' },
      },
      compra_dois: {
        text: 'ރަނގަޅު! ޝުކުރިއްޔާ!',
        translation: 'Ótimo! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'މަސް ގަތުން', message: 'Você comprou dois peixes na banca de Malé.' },
      },
      final_neutro: {
        text: 'ރަނގަޅު. ވަކިވެލަން!',
        translation: 'Tudo bem. Tchau!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'އަނެއް ދުވަހު', message: 'Você não comprou peixe desta vez, mas se despediu educadamente — outra hora tem mais.' },
      },
    },
    glossary: [
      ['މަސް', 'peixe'],
      ['ރަތް', 'vermelho'],
      ['ލައްބަ / ނޫން', 'sim / não'],
      ['ރަނގަޅު', 'bom'],
    ],
  },
];
