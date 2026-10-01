import type { LanguagePack } from '../types';
import { VOCAB_AY } from './vocabulario';
import { UNITS_AY } from './curriculo';
import { GRAMMAR_AY } from './gramatica';
import { STORIES_AY } from './historias';
import { COMMUNITY_AY, ETYMOLOGY_AY, JOURNAL_PROMPTS_AY, SCENARIOS_AY, SHADOWING_AY } from './extras';

export const AIMARA: LanguagePack = {
  code: 'ay',
  name: 'Aimará',
  nativeName: 'Aymar aru',
  flag: '🇧🇴',
  lineage: {
    family: 'Aimará (jaqi)',
    branches: ['Aimará do sul (o mais falado, em torno de La Paz, El Alto e do lago Titicaca)'],
    region: 'Altiplano andino — Bolívia (onde é cooficial), sul do Peru, norte do Chile e noroeste da Argentina',
    writing:
      'Alfabeto latino, ortografia de três vogais (a, i, u, podendo ser longas: ä, ï, ü), com consoantes ejetivas e aspiradas marcadas por apóstrofo e “h” — e um som a mais que o quéchua não tem, o “x” (padrão fixado pelo “Alfabeto Único” de 1984-85, adotado na Bolívia e no Peru)',
  },
  // ISO 639-1 na melhor tentativa: nem o Android nem o iOS trazem voz nativa para o aimará — a leitura
  // em voz alta pode não funcionar na maioria dos aparelhos (ver nota em `incomplete`).
  speechLocale: 'ay',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 80 palavras, 4 tópicos de gramática, 2 histórias). O aimará tem três áreas dialetais (norte, sul e intermédia) e nenhuma ortografia única adotada por todos os falantes: este curso segue o aimará do sul, falado em torno de La Paz e do lago Titicaca, a variedade mais documentada. A maioria dos aparelhos também não tem voz sintetizada para o aimará, então a leitura em voz alta pode não soar certa ou pode faltar. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AY,
  units: UNITS_AY,
  etymology: ETYMOLOGY_AY,
  community: COMMUNITY_AY,
  scenarios: SCENARIOS_AY,
  stories: STORIES_AY,
  grammar: GRAMMAR_AY,
  journalPrompts: JOURNAL_PROMPTS_AY,
  shadowing: SHADOWING_AY,
  specialChars: ["'", 'x', 'ñ'],
  // o aimará não marca gênero gramatical: não há artigos nem concordância de gênero nos substantivos
  // e adjetivos (como no quéchua, mas aqui nem as palavras de parentesco mudam pelo gênero de quem fala).
  genders: [],
  greeting: 'Kamisaki',
  sampleSentence: 'Kamisaki! Linu satathwa. ¡Sarañani, Aymar aru yatiqañani!',
  phrases: { hi: 'Kamisaki!', thanks: 'Yuspagara!', letsStart: ['Sarañani!', 'Vamos começar!'] },
  formalMarkers:
    'O aimará não tem um “você” formal separado do “tu”, como o espanhol: “juma” serve para qualquer pessoa. O respeito vem do vocabulário, sobretudo de chamar alguém de “jilata” (irmão) ou “kullaka” (irmã) — ou, com mais distância, de “tata” (senhor) ou “mama” (senhora) — antes do nome ou sozinho, mesmo sem parentesco nenhum.',
  cognateNote:
    'O aimará não é parente comprovado do quéchua: apesar de serem faladas lado a lado nos Andes há séculos e de terem se influenciado muito por contato, pertencem a famílias de línguas diferentes — não espere reconhecer palavras aimarás por semelhança com as do pacote de quéchua deste app. Com o português, o parentesco também não existe, mas o aimará emprestou pelo menos uma palavra do dia a dia direto para o espanhol e, por ele, para o português: “alpaca” vem do aimará “allpaqa”, o nome do animal.',
};
