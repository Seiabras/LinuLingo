import type { LanguagePack } from '../types';
import { toReadingTe } from '@/services/reading-telugu';
import { VOCAB_TE } from './vocabulario';
import { UNITS_TE } from './curriculo';
import { GRAMMAR_TE } from './gramatica';
import { STORIES_TE } from './historias';
import { COMMUNITY_TE, ETYMOLOGY_TE, JOURNAL_PROMPTS_TE, SCENARIOS_TE, SHADOWING_TE } from './extras';

export const TELUGO: LanguagePack = {
  code: 'te',
  name: 'Télugo',
  nativeName: 'తెలుగు',
  flag: '🇮🇳',
  lineage: {
    family: 'Dravídico',
    branches: ['Dravídico centro-meridional'],
    region: 'Andhra Pradesh e Telangana (sudeste da Índia)',
    writing: 'Alfabeto télugo (escrita silábica/abugida, descendente do brahmi por meio da escrita Kadamba)',
  },
  speechLocale: 'te-IN',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Por enquanto, A1 e A2 completos (unidades 1 a 4, 108 palavras, 8 tópicos de gramática, 4 histórias), no télugo padrão falado em Andhra Pradesh e Telangana: saudações, família, clima, roupas, cidade, profissões, sentimentos e futuro. Ainda sem treino do alfabeto télugo. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TE,
  // leitura em letras latinas para quem ainda não lê o alfabeto télugo (ver src/services/reading-telugu.ts)
  reading: (t) => (/[ఀ-౿]/.test(t) ? toReadingTe(t) : ''),
  units: UNITS_TE,
  etymology: ETYMOLOGY_TE,
  community: COMMUNITY_TE,
  scenarios: SCENARIOS_TE,
  stories: STORIES_TE,
  grammar: GRAMMAR_TE,
  journalPrompts: JOURNAL_PROMPTS_TE,
  shadowing: SHADOWING_TE,
  specialChars: [
    // vogais curtas, longas, ditongos, mais o anusvara (అం) e o visarga (అః)
    'అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః',
    // consoantes: velares, palatais, retroflexas, dentais, labiais
    'క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట',
    'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ',
    'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ',
    // letras exclusivas do télugo (não vêm do sânscrito): ళ, um “l” retroflexo, e ఱ, um erre batido duplo
    'ళ', 'ఱ',
  ],
  // alfabeto télugo básico (vogais e consoantes), em fileiras de teclado
  keyboardRows: [
    ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః'],
    ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట'],
    ['ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ'],
    ['బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ'],
    ['ళ', 'ఱ'],
  ],
  // o télugo marca três gêneros gramaticais: masculino e feminino para humanos, neutro para o resto (bichos, plantas, objetos)
  genders: ['m', 'f', 'n'],
  greeting: 'నమస్కారం',
  sampleSentence: 'నమస్కారం! నా పేరు లీనూ. మీరు ఎలా ఉన్నారు?',
  phrases: { hi: 'నమస్కారం.', thanks: 'ధన్యవాదములు.', letsStart: ['తెలుగు మొదలు!', 'Vamos começar!'] },
  formalMarkers:
    'మీరు (tratamento respeitoso; o verbo “ఉండు” vai para “ఉన్నారు”) para desconhecidos e pessoas mais velhas; నీవు é um meio-termo mais formal que నువ్వు, mas raro na fala cotidiana; నువ్వు é informal, usado com amigos e crianças; తమరు é o tratamento mais cerimonioso, raro no dia a dia.',
  cognateNote:
    'O télugo é dravídico, não indo-europeu como o português: não é parente do latim nem do sânscrito, embora tenha tomado muitas palavras emprestadas do sânscrito ao longo dos séculos (como “కుక్క”, cachorro, do sânscrito “कुक्कुर”). Os parentes de verdade do télugo são as outras línguas dravídicas do sul da Índia — tâmil, canarês e malaiala —, com quem compartilha palavras como “అమ్మ” (mãe), “అన్న” (irmão mais velho) e “ఇల్లు” (casa), todas vindas do proto-dravídico. Cada palavra do vocabulário mostra essa raiz e os parentes nas línguas irmãs, quando existem.',
};
