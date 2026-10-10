import type { LanguagePack } from '../types';
import { toReadingTh } from '@/services/reading-thai';
import { VOCAB_TH } from './vocabulario';
import { UNITS_TH } from './curriculo';
import { GRAMMAR_TH } from './gramatica';
import { STORIES_TH } from './historias';
import { COMMUNITY_TH, ETYMOLOGY_TH, JOURNAL_PROMPTS_TH, SCENARIOS_TH, SHADOWING_TH } from './extras';
import { ACCENTS_TH } from './sotaques';

export const TAILANDES: LanguagePack = {
  code: 'th',
  name: 'Tailandês',
  nativeName: 'ภาษาไทย',
  flag: '🇹🇭',
  lineage: {
    family: 'Kra-Dai (Tai-Kadai)',
    branches: ['Tai', 'Tai sudoccidental', 'Chiang Saen'],
    region: 'Tailândia central (bacia do rio Chao Phraya, com Bangkok como referência)',
    writing: 'Escrita tailandesa (abugida, descendente da escrita khmer antiga, por sua vez vinda do brahmi indiano; sem espaços entre as palavras dentro de uma mesma frase)',
  },
  speechLocale: 'th-TH',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1.1 até A2.2 completo (4 unidades, 139 palavras, 8 tópicos de gramática — escrita e tons, pronomes e ครับ/ค่ะ, sem plural nem conjugação, classificadores, futuro com จะ, ação concluída com แล้ว, comparativo e superlativo, locativos ใน/บน/ที่ —, 4 histórias), no tailandês padrão (o de Bangkok, língua oficial da Tailândia). Ainda sem treino da escrita tailandesa letra por letra. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TH,
  // leitura em letras latinas (romanização RTGS) para quem ainda não lê a escrita tailandesa (ver
  // src/services/reading-thai.ts)
  reading: (t) => (/[฀-๿]/.test(t) ? toReadingTh(t) : ''),
  units: UNITS_TH,
  etymology: ETYMOLOGY_TH,
  community: COMMUNITY_TH,
  scenarios: SCENARIOS_TH,
  stories: STORIES_TH,
  accents: ACCENTS_TH,
  grammar: GRAMMAR_TH,
  journalPrompts: JOURNAL_PROMPTS_TH,
  shadowing: SHADOWING_TH,
  specialChars: [
    'ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ',
    'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ',
    'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม',
    'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ',
    'ะ', 'า', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู', 'เ', 'แ', 'โ', 'ใ', 'ไ', 'ั', 'ำ', '่', '้', '๊', '๋',
  ],
  // os 44 consoantes do tailandês em ordem tradicional, seguidas das principais vogais e dos sinais de tom
  keyboardRows: [
    ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ'],
    ['ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ'],
    ['ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม'],
    ['ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'],
    ['ะ', 'า', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู', 'เ', 'แ', 'โ', 'ใ', 'ไ', 'ั', 'ำ'],
    ['่', '้', '๊', '๋'],
  ],
  // o tailandês não marca gênero gramatical em substantivos, adjetivos ou pronomes
  genders: [],
  greeting: 'สวัสดี',
  sampleSentence: 'สวัสดี ฉันชื่อลีนู เรียนภาษาไทยกันเถอะ!',
  phrases: { hi: 'สวัสดี', thanks: 'ขอบคุณ', letsStart: ['เรียนกันเถอะ!', 'Vamos começar!'] },
  formalMarkers:
    'O tailandês marca a polidez sobretudo por quem fala, não por quem ouve: homens terminam frases educadas com “ครับ” (khráp, em afirmações e perguntas); mulheres terminam afirmações com “ค่ะ” (khâ) e perguntas com “คะ” (khá) — não existe forma neutra. Os pronomes também variam: “ผม” (phǒm) é “eu” só para homens; “ฉัน” (chǎn) é o “eu” neutro/informal mais comum, e “ดิฉัน” (dì-chǎn) é a forma mais formal usada por mulheres; “คุณ” (khun) é o “você” educado para qualquer pessoa. Além disso, irmãos e amigos se tratam por “พี่” (phîi, quem é mais velho) e “น้อง” (nɔ́ɔng, quem é mais novo) — a idade relativa organiza boa parte do tratamento entre tailandeses.',
  cognateNote:
    'O tailandês pertence à família Kra-Dai, sem nenhum parentesco com o português: não existem cognatos genuínos entre as duas línguas. Mas séculos de contato com a Índia, através do budismo e do hinduísmo, deixaram no tailandês centenas de palavras eruditas emprestadas do páli e do sânscrito — como “ภาษา” (phaa-sǎa, “língua”), “ประเทศ” (prà-têet, “país”) e “มนุษย์” (má-nút, “ser humano”) — muitas vezes a mesma raiz indiana que também entrou no hindi, por um caminho histórico diferente. Cada palavra emprestada do vocabulário mostra essa raiz e os parentes em outras línguas que também a herdaram.',
};
