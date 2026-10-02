import type { LanguagePack } from '../types';
import { VOCAB_TA } from './vocabulario';
import { UNITS_TA } from './curriculo';
import { GRAMMAR_TA } from './gramatica';
import { STORIES_TA } from './historias';
import { COMMUNITY_TA, ETYMOLOGY_TA, JOURNAL_PROMPTS_TA, SCENARIOS_TA, SHADOWING_TA } from './extras';

export const TAMIL: LanguagePack = {
  code: 'ta',
  name: 'Tâmil',
  nativeName: 'தமிழ்',
  flag: '🇮🇳',
  lineage: {
    family: 'Dravídico',
    // Dravídico meridional (não o centro-meridional do télugo): o parente mais próximo do tâmil é
    // o malaiala, de quem se separou por volta do século 9 — fonte: Wikipédia, artigo Tamil language.
    branches: ['Dravídico meridional', 'Tâmil-Malaiala'],
    region:
      'Tamil Nadu, no sul da Índia (também o território de Puducherry); língua oficial também no Sri Lanka (ao lado do cingalês) e em Singapura, com diáspora grande na Malásia, em Maurício, na África do Sul, no Canadá, nos EUA, na Austrália e no Reino Unido',
    writing: 'Alfabeto tâmil (escrita silábica/abugida, descendente do brahmi por meio da escrita Pallava) — um sistema de escrita próprio, diferente do alfabeto télugo',
  },
  speechLocale: 'ta-IN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 5 tópicos de gramática, 2 histórias), no tâmil padrão falado em Tamil Nadu. Ainda sem treino do alfabeto tâmil nem romanização automática (as outras línguas de alfabeto próprio, como o télugo e o hindi, já têm um serviço de leitura; o do tâmil ainda não existe). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TA,
  units: UNITS_TA,
  etymology: ETYMOLOGY_TA,
  community: COMMUNITY_TA,
  scenarios: SCENARIOS_TA,
  stories: STORIES_TA,
  grammar: GRAMMAR_TA,
  journalPrompts: JOURNAL_PROMPTS_TA,
  shadowing: SHADOWING_TA,
  specialChars: [
    // vogais curtas e longas, ditongos, mais o āytam (ஃ), um caractere à parte
    'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ',
    // consoantes வல்லினம் (duras), மெல்லினம் (nasais) e இடையினம் (médias) — só 18 ao todo
    'க', 'ச', 'ட', 'த', 'ப', 'ற',
    'ங', 'ஞ', 'ண', 'ந', 'ம', 'ன',
    'ய', 'ர', 'ல', 'வ', 'ழ', 'ள',
    // letras grantha, acrescentadas só para escrever palavras emprestadas do sânscrito
    'ஜ', 'ஶ', 'ஷ', 'ஸ', 'ஹ',
  ],
  // alfabeto tâmil básico (vogais e consoantes), em fileiras de teclado
  keyboardRows: [
    ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ'],
    ['க', 'ச', 'ட', 'த', 'ப', 'ற'],
    ['ங', 'ஞ', 'ண', 'ந', 'ம', 'ன'],
    ['ய', 'ர', 'ல', 'வ', 'ழ', 'ள'],
    ['ஜ', 'ஶ', 'ஷ', 'ஸ', 'ஹ'],
  ],
  // o tâmil não marca gênero como o português: pronomes e concordância seguem a distinção
  // racional (humanos: masculino அவன்/feminino அவள்/plural அவர்கள்) × irracional (bichos,
  // plantas, objetos: அது, அவை) — aqui 'n' representa a classe irracional, não um neutro à parte
  genders: ['m', 'f', 'n'],
  greeting: 'வணக்கம்',
  sampleSentence: 'வணக்கம்! என் பெயர் லீனு. நீங்கள் எப்படி இருக்கின்றீர்கள்?',
  phrases: { hi: 'வணக்கம்.', thanks: 'நன்றி.', letsStart: ['தமிழ் ஆரம்பம்!', 'Vamos começar!'] },
  formalMarkers:
    'நீங்கள் (tratamento respeitoso, também plural; o verbo vai para a forma “-ீர்கள்”, como em இருக்கின்றீர்கள்) para desconhecidos e pessoas mais velhas; நீ é informal, usado com amigos, colegas e crianças. Diferente do télugo e do hindi, o tâmil não tem um terceiro nível intermediário de uso comum.',
  cognateNote:
    'O tâmil é dravídico, não indo-europeu como o português: não é parente do latim nem do sânscrito, embora tenha tomado emprestadas várias palavras do sânscrito ao longo dos séculos (como “குடும்பம்”, família, e “சூரியன்”, sol) — um pouco como o português pegou palavras do grego. Os parentes de verdade do tâmil são as outras línguas dravídicas do sul da Índia — télugo, canarês e malaiala, o mais próximo de todos —, com quem compartilha palavras do dia a dia como “அம்மா” (mãe), “அப்பா” (pai) e “பால்” (leite), todas vindas do proto-dravídico. Cada palavra do vocabulário mostra essa raiz e os parentes nas línguas irmãs, quando existem.',
};
