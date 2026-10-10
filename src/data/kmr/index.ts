import type { LanguagePack } from '../types';
import { VOCAB_KMR } from './vocabulario';
import { UNITS_KMR } from './curriculo';
import { GRAMMAR_KMR } from './gramatica';
import { STORIES_KMR } from './historias';
import { COMMUNITY_KMR, ETYMOLOGY_KMR, JOURNAL_PROMPTS_KMR, SCENARIOS_KMR, SHADOWING_KMR } from './extras';
import { ACCENTS_KMR } from './sotaques';

/**
 * Curmanji (curdo do norte), código ISO 639-3 «kmr». Fontes gerais: ver o cabeçalho de
 * vocabulario.ts. Pacote simples (como rm/ e lad/): sem roteiro A–D, só o A1 por enquanto.
 *
 * Curmanji × sorani: são a mesma família curda, mas a Wikipédia cita o linguista Philip G.
 * Kreyenbroek dizendo que “o curmanji e o sorani diferem um do outro tanto quanto o inglês e o
 * alemão” — o sorani perdeu o gênero gramatical e o sistema de casos que o curmanji conserva (ver
 * gramatica.ts). Os linguistas não têm consenso se são duas línguas ou dialetos de uma só «língua
 * curda»; aqui tratamos cada um como um pacote próprio, como a Wikipédia também costuma apresentá-los
 * em artigos separados (Kurmanji / Kurdish languages).
 *
 * Bandeira: não existe Estado curdo soberano, então nenhuma bandeira nacional cobre o curmanji —
 * e usar a bandeira da Turquia (onde vive a maior população curdófona) seria especialmente delicado,
 * já que o próprio alfabeto latino do curdo foi reprimido lá por décadas (letras q/w/x só legalizadas
 * em 2013, depois de processos contra curdos em 2000 e 2003 — ver o histórico em vocabulario.ts e
 * gramatica.ts). Em vez disso, usamos ☀️, em referência ao sol de 21 raios no centro da bandeira do
 * Curdistão (adotada oficialmente pela Região do Curdistão iraquiano em 1992), que a Wikipédia
 * descreve como símbolo de “renascimento, identidade e dignidade” — sem assumir essa bandeira como
 * nacional de nenhum país. É a mesma lógica do 📜 do judeu-espanhol (lad/): um símbolo em vez de uma
 * bandeira de Estado, para uma língua sem país próprio.
 */
export const CURMANJI: LanguagePack = {
  code: 'kmr',
  name: 'Curmanji (curdo do norte)',
  nativeName: 'Kurmancî',
  flag: '☀️',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Iraniano', 'Iraniano ocidental', 'Iraniano noroeste', 'Línguas curdas (curmanji, sorani, curdo do sul)'],
    region: 'Turquia (maior população curdófona, sem status oficial), Síria, norte do Iraque, Irã, Cáucaso e diáspora',
    writing: 'Alfabeto latino (alfabeto Hawar, criado em 1932); o sorani usa letras árabes',
  },
  // «kmr» é o próprio código ISO 639-3: não há voz de síntese confirmada para o curmanji nos
  // aparelhos comuns, então este código é uma aposta razoável (sem confirmação), como em lad/.
  speechLocale: 'kmr',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, 111 palavras, 9 tópicos de gramática, 4 histórias), na grafia latina do alfabeto Hawar. A palavra “çay” (chá) fica sem gênero marcado porque nem o Wiktionary confirma se é masculina ou feminina. Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_KMR,
  units: UNITS_KMR,
  etymology: ETYMOLOGY_KMR,
  community: COMMUNITY_KMR,
  scenarios: SCENARIOS_KMR,
  stories: STORIES_KMR,
  accents: ACCENTS_KMR,
  grammar: GRAMMAR_KMR,
  journalPrompts: JOURNAL_PROMPTS_KMR,
  shadowing: SHADOWING_KMR,
  specialChars: ['ç', 'ê', 'î', 'ş', 'û'],
  // masculino e feminino, sem neutro (o sorani perdeu quase todo o gênero gramatical que o curmanji conserva)
  genders: ['m', 'f'],
  greeting: 'Silav',
  sampleSentence: 'Silav! Navê min Linu e.',
  phrases: { hi: 'Silav!', thanks: 'Spas!', letsStart: ['Baş e!', 'Vamos começar!'] },
  formalMarkers: 'hûn (em vez de tu, com o verbo correspondente), ji kerema xwe',
  cognateNote:
    'O curmanji é uma língua iraniana, da mesma família indo-europeia do português — bem mais distante, mas ainda assim parente, lá na raiz indo-europeia comum (como em “stêr” e “estrela”, ou “derî” e “door”). Cada palavra mostra a raiz iraniana ou indo-europeia e os parentes nas línguas irmãs.',
};
