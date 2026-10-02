import type { LanguagePack } from '../types';
import { toReadingKm } from '@/services/reading-khmer';
import { VOCAB_KM } from './vocabulario';
import { UNITS_KM } from './curriculo';
import { GRAMMAR_KM } from './gramatica';
import { STORIES_KM } from './historias';
import { COMMUNITY_KM, ETYMOLOGY_KM, JOURNAL_PROMPTS_KM, SCENARIOS_KM, SHADOWING_KM } from './extras';

export const KHMER: LanguagePack = {
  code: 'km',
  name: 'Khmer',
  nativeName: 'ភាសាខ្មែរ',
  flag: '🇰🇭',
  lineage: {
    family: 'Austro-asiático',
    branches: ['Mon-khmer', 'Ramo oriental do mon-khmer (parentes mais próximos: bahnárico e pearico)', 'Khmer'],
    region: 'Camboja, na bacia do Mekong e do Tonlé Sap (Sudeste Asiático continental)',
    writing: 'Escrita khmer (abugida descendente da escrita brahmi via o pallava do sul da Índia, usada desde ao menos o século VII)',
  },
  speechLocale: 'km-KH',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~82 palavras, 4 tópicos de gramática, 2 histórias). Ainda sem treino do alfabeto khmer, um dos mais longos do mundo (mais de 70 letras entre consoantes e vogais) — o teclado mostra só as letras mais essenciais. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_KM,
  // leitura em letras latinas para quem ainda não lê a escrita khmer (ver src/services/reading-khmer.ts)
  reading: (t) => (/[ក-៿]/.test(t) ? toReadingKm(t) : ''),
  units: UNITS_KM,
  etymology: ETYMOLOGY_KM,
  community: COMMUNITY_KM,
  scenarios: SCENARIOS_KM,
  stories: STORIES_KM,
  grammar: GRAMMAR_KM,
  journalPrompts: JOURNAL_PROMPTS_KM,
  shadowing: SHADOWING_KM,
  specialChars: [
    'ា', 'ិ', 'ី', 'ុ', 'ូ', 'េ', 'ែ', 'ោ',
    'ក', 'ខ', 'គ', 'ង', 'ច', 'ឆ', 'ជ', 'ញ', 'ដ', 'ណ', 'ត',
    'ថ', 'ទ', 'ធ', 'ន', 'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ',
    'ល', 'វ', 'ស', 'ហ', 'អ',
  ],
  // vogais mais frequentes e as consoantes mais essenciais da escrita khmer, em fileiras de teclado
  // (o alfabeto completo tem mais de 70 letras — aqui só as mais usadas no vocabulário do curso)
  keyboardRows: [
    ['ា', 'ិ', 'ី', 'ុ', 'ូ', 'េ', 'ែ', 'ោ'],
    ['ក', 'ខ', 'គ', 'ង', 'ច', 'ឆ', 'ជ', 'ញ', 'ដ', 'ណ', 'ត'],
    ['ថ', 'ទ', 'ធ', 'ន', 'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ'],
    ['ល', 'វ', 'ស', 'ហ', 'អ'],
  ],
  // o khmer não marca gênero gramatical em nenhuma classe de palavra
  genders: [],
  greeting: 'សួស្តី',
  sampleSentence: 'សួស្តី! ខ្ញុំឈ្មោះលីនូ។ សូមចាប់ផ្ដើមរៀនភាសាខ្មែរ!',
  phrases: { hi: 'សួស្តី!', thanks: 'អរគុណ!', letsStart: ['សូមចាប់ផ្ដើម!', 'Vamos começar!'] },
  formalMarkers:
    'O khmer marca a polidez sobretudo pela escolha de pronomes e de palavras, não por partículas mecânicas como no tailandês: “អ្នក” (neak) é o “você” neutro e educado; termos de parentesco como “បង” (irmão/irmã mais velho) e “ប្អូន” (mais novo) substituem “eu”/“você” conforme a idade relativa de quem fala; e as partículas finais “បាទ” (homens) e “ចាស” (mulheres) marcam cortesia e “sim”. “សូម” antes do pedido também funciona como “por favor”.',
  cognateNote:
    'O khmer não é uma língua indo-europeia — não existem cognatos reais com o português. Mas, como o tailandês e o laociano, bebeu fundo do páli e do sânscrito, as línguas sagradas que chegaram ao Camboja com o hinduísmo e o budismo: “ម្តាយ” (mdaay, mãe) e “ឪពុក” (ovpuk, pai) vêm do sânscrito; “ភាសា” (phiesa, língua) é o páli “bhāsā”; “មិត្ត” (mit, amigo) é o páli “mitta”; e até a saudação “សួស្តី” (suostei, oi) vem do sânscrito “svasti” — a mesma raiz do “sawatdee” tailandês, embora khmer e tailandês não sejam parentes. Cada palavra com essa origem mostra a raiz páli/sânscrita e os parentes noutras línguas que bebem da mesma fonte.',
};
