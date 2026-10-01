import type { LanguagePack } from '../types';
import { VOCAB_LO } from './vocabulario';
import { UNITS_LO } from './curriculo';
import { GRAMMAR_LO } from './gramatica';
import { STORIES_LO } from './historias';
import { COMMUNITY_LO, ETYMOLOGY_LO, JOURNAL_PROMPTS_LO, SCENARIOS_LO, SHADOWING_LO } from './extras';

export const LAOSIANO: LanguagePack = {
  code: 'lo',
  name: 'Laosiano',
  nativeName: 'ພາສາລາວ',
  flag: '🇱🇦',
  lineage: {
    family: 'Kra-Dai (Tai-Kadai)',
    branches: ['Tai', 'Tai sudoccidental', 'Lao-Phuthai'],
    region: 'Laos, e a região de Isan, no nordeste da Tailândia, onde se fala um dialeto muito próximo',
    writing:
      'Escrita lao (abugida; irmã muito próxima da escrita tailandesa — por volta do século XV, uma forma da escrita de Sukhothai chegou à bacia do rio Mekong e ali se diferenciou aos poucos, dando origem à escrita lao de hoje, que remonta à escrita khmer antiga e, mais adiante, ao brahmi indiano; menos letras e traços mais arredondados que a tailandesa; sem espaços entre as palavras dentro de uma mesma frase)',
  },
  speechLocale: 'lo-LA',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 90 palavras, 4 tópicos de gramática, 2 histórias), no laosiano padrão (o de Vientiane, língua oficial do Laos). O laosiano é próximo do tailandês — mesma família Kra-Dai, ramo Tai sudoccidental, com boa inteligibilidade mútua —, mas é uma língua própria, com escrita própria (o alfabeto lao não é o alfabeto tailandês, embora pareçam parecidos) e um tom a mais (seis, contra cinco no tailandês). Ainda sem treino da escrita lao letra por letra. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LO,
  units: UNITS_LO,
  etymology: ETYMOLOGY_LO,
  community: COMMUNITY_LO,
  scenarios: SCENARIOS_LO,
  stories: STORIES_LO,
  grammar: GRAMMAR_LO,
  journalPrompts: JOURNAL_PROMPTS_LO,
  shadowing: SHADOWING_LO,
  specialChars: [
    'ກ', 'ຂ', 'ຄ', 'ງ', 'ຈ', 'ສ', 'ຊ', 'ຍ', 'ດ', 'ຕ', 'ຖ',
    'ທ', 'ນ', 'ບ', 'ປ', 'ຜ', 'ຝ', 'ພ', 'ຟ', 'ມ', 'ຢ', 'ຣ',
    'ລ', 'ວ', 'ຫ', 'ອ', 'ຮ',
    'ະ', 'າ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ', 'ັ', 'ຳ', 'ົ', 'ຽ',
    '່', '້', '໊', '໋',
  ],
  // as 27 consoantes do laosiano em ordem tradicional, seguidas das principais vogais e dos sinais de tom
  keyboardRows: [
    ['ກ', 'ຂ', 'ຄ', 'ງ', 'ຈ', 'ສ', 'ຊ', 'ຍ', 'ດ'],
    ['ຕ', 'ຖ', 'ທ', 'ນ', 'ບ', 'ປ', 'ຜ', 'ຝ', 'ພ'],
    ['ຟ', 'ມ', 'ຢ', 'ຣ', 'ລ', 'ວ', 'ຫ', 'ອ', 'ຮ'],
    ['ະ', 'າ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ', 'ັ', 'ຳ', 'ົ', 'ຽ'],
    ['່', '້', '໊', '໋'],
  ],
  // o laosiano não marca gênero gramatical em substantivos, adjetivos ou pronomes
  genders: [],
  greeting: 'ສະບາຍດີ',
  sampleSentence: 'ສະບາຍດີ, ຂ້ອຍຊື່ລີນູ. ມາຮຽນພາສາລາວ!',
  phrases: { hi: 'ສະບາຍດີ', thanks: 'ຂອບໃຈ', letsStart: ['ມາຮຽນພາສາລາວ', 'Vamos aprender laosiano!'] },
  formalMarkers:
    'O laosiano marca a polidez de um jeito mais simples que o tailandês: os pronomes não mudam conforme o gênero de quem fala. “ຂ້ອຍ” (khǭi) é o “eu” comum para qualquer pessoa, e “ເຈົ້າ” (chao) é o “você” entre iguais; em situações mais formais usam-se “ທ່ານ” (thān, “o(a) senhor(a)”) e, na terceira pessoa, “ເພິ່ນ” (phœ̄n). Em vez de uma partícula marcada pelo gênero (como o “ครับ”/“ค่ะ” do tailandês), o laosiano usa duas partículas neutras no final da frase: “ແດ່” (dǣ) suaviza pedidos e ordens, como um “por favor”, e “ເດີ” (dēu) marca sugestões, convites e despedidas — variantes como “ເດ”/“ເດ້” soam mais urgentes e menos educadas. Como no tailandês, irmãos e amigos próximos se tratam por idade relativa: “ອ້າຍ”/“ເອື້ອຍ” (quem é mais velho, homem ou mulher) e “ນ້ອງ” (quem é mais novo). As perguntas de sim/não terminam com a partícula “ບໍ່”, respondida com “ແມ່ນ” (sim) ou “ບໍ່” (não) — nunca repetindo a palavra negada.',
  cognateNote:
    'O laosiano é parente de verdade do tailandês: os dois pertencem à família Kra-Dai, no mesmo ramo Tai sudoccidental, e têm uma inteligibilidade mútua documentada e real — não é um parentesco forçado. Palavras do dia a dia como “ຂອງ”/“ของ” (de, pertencente a), “ຢູ່”/“อยู่” (morar, estar) e “ແມ່”/“แม่” (mãe) descem do mesmo tronco Tai. Ainda assim, são línguas distintas: o laosiano tem um tom a mais (seis contra cinco), uma escrita própria com menos letras, e várias palavras do dia a dia diferentes — como “ແຊບ” (gostoso) no lugar do tailandês “อร่อย”. Além do parentesco Tai, séculos de contato com a Índia, através do budismo, deixaram no laosiano centenas de palavras eruditas emprestadas do páli e do sânscrito — como “ພາສາ” (phā-sā, “língua”), “ປະເທດ” (pa-thēt, “país”) e “ວັດ” (wat, “templo”) —, as mesmas raízes indianas compartilhadas com o tailandês e o khmer. Cada palavra emprestada do vocabulário mostra essa raiz e os parentes em outras línguas que também a herdaram.',
};
