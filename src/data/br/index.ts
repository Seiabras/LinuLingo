import type { LanguagePack } from '../types';
import { VOCAB_BR } from './vocabulario';
import { UNITS_BR } from './curriculo';
import { GRAMMAR_BR } from './gramatica';
import { STORIES_BR } from './historias';
import { COMMUNITY_BR, ETYMOLOGY_BR, JOURNAL_PROMPTS_BR, SCENARIOS_BR, SHADOWING_BR } from './extras';
import { ACCENTS_BR } from './sotaques';
import { VARIANTS_BR } from './variantes';

export const BRETAO: LanguagePack = {
  code: 'br',
  name: 'Bretão',
  nativeName: 'Brezhoneg',
  // sem bandeira própria (língua regional da França, não de um país à parte): mesma escolha de
  // outras línguas regionais do app para o país onde são faladas.
  flag: '🇫🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Celta', 'Britônico'],
    region: 'Bretanha (Breizh), sobretudo a Baixa Bretanha (Breizh-Izel), no noroeste da França',
    writing: 'Alfabeto latino, ortografia peurunvan (1941) — sem as letras Q e X',
  },
  // 'br' não tem uma voz sintetizada dedicada garantida em todo aparelho (língua seriamente
  // ameaçada, sem o mesmo investimento comercial de línguas maiores); 'br-FR' é a tag IETF mais
  // correta, mas o aparelho pode cair numa voz em francês, como acontece com outras línguas
  // regionais do app (ver nota do galês escocês em src/data/gd/index.ts para um caso parecido).
  speechLocale: 'br-FR',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Nível A1 e A2 completos por enquanto (4 unidades, 99 palavras, 8 tópicos de gramática, 4 histórias), na ortografia peurunvan. De B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_BR,
  units: UNITS_BR,
  etymology: ETYMOLOGY_BR,
  community: COMMUNITY_BR,
  scenarios: SCENARIOS_BR,
  stories: [...STORIES_BR, ...VARIANTS_BR.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_BR,
  accents: ACCENTS_BR,
  grammar: GRAMMAR_BR,
  journalPrompts: JOURNAL_PROMPTS_BR,
  shadowing: SHADOWING_BR,
  specialChars: ['ñ', 'ù', 'ê', 'â', "c'h", 'zh'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Demat',
  sampleSentence: 'Demat! Linu eo va anv. Deskiñ a ran brezhoneg!',
  phrases: { hi: 'Demat!', thanks: 'Trugarez!', letsStart: ['Deskiñ a ran brezhoneg!', 'Vamos começar!'] },
  formalMarkers: "“c'hwi” (em vez de “te”), como o “vous” francês — serve tanto para o plural quanto para tratar uma pessoa só com educação",
  cognateNote:
    'O bretão é uma língua celta do ramo britônico — prima do galês e do córnico, não do português. A maioria das palavras do dia a dia (como “ti”, casa, ou “mor”, mar) vem direto do celta antigo, sem parentesco visível com o português. Mas algumas palavras, como “gwin” (vinho) e “kador” (cadeira), foram emprestadas do latim havia muito tempo — pelo mesmo caminho que deu “vinho” e “cadeira” em português, só que por uma rota bem mais longa. Cada palavra da etimologia conta essa história, inclusive quando a resposta honesta é “esse parentesco com o português eu não encontrei confirmado”.',
};
