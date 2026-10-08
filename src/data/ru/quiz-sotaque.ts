/**
 * «Qual é o seu russo?»: a versão russa do quiz «Qual é o seu sotaque?» (motor genérico em
 * `src/services/sotaque-quiz.ts`). As perguntas vêm das próprias palavras e traços de pronúncia
 * documentados em `src/data/ru/sotaques.ts` (ACCENTS_RU) — nada inventado aqui, só reaproveitado
 * em formato de pergunta de múltipla escolha.
 */
import type { GuessQuestion, GuessRegion } from '@/services/sotaque-quiz';

export type RegionIdRu = 'ru-moscou' | 'ru-petersburgo' | 'ru-norte' | 'ru-sul' | 'ru-siberia' | 'ru-odessa' | 'ru-belarus' | 'ru-cazaquistao';

export const GUESS_REGIONS_RU: GuessRegion<RegionIdRu>[] = [
  { id: 'ru-moscou', accent: 'moscovita (russo central)', where: 'Moscou e o centro da Rússia europeia', emoji: '🏛️' },
  { id: 'ru-petersburgo', accent: 'de São Petersburgo', where: 'São Petersburgo e Leningrado', emoji: '🌉' },
  { id: 'ru-norte', accent: 'do norte', where: 'Arcangel, Vologda, Carélia, Komi', emoji: '🌲' },
  { id: 'ru-sul', accent: 'do sul', where: 'Vorónej, Bélgorod, Kursk, Rostov, Krasnodar', emoji: '🌻' },
  { id: 'ru-siberia', accent: 'da Sibéria e dos Urais', where: 'Iekaterinburgo, Novossibirsk, Omsk, Irkutsk', emoji: '❄️' },
  { id: 'ru-odessa', accent: 'de Odessa', where: 'Odessa, no sul da Ucrânia', emoji: '⚓' },
  { id: 'ru-belarus', accent: 'de Belarus', where: 'Belarus', emoji: '🌾' },
  { id: 'ru-cazaquistao', accent: 'do Cazaquistão', where: 'o Cazaquistão', emoji: '🐎' },
];

export const GUESS_QUESTIONS_RU: GuessQuestion<RegionIdRu>[] = [
  {
    id: 'meio-fio',
    emoji: '🛣️',
    question: 'O meio-fio da calçada:',
    options: [
      { label: 'бордю́r (bordiúr)', weights: { 'ru-moscou': 3 } },
      { label: 'поре́брик (poriébrik)', weights: { 'ru-petersburgo': 3 } },
    ],
  },
  {
    id: 'entrada',
    emoji: '🚪',
    question: 'A entrada do prédio, onde fica o elevador:',
    options: [
      { label: 'подъе́зд (podiézd)', weights: { 'ru-moscou': 3 } },
      { label: 'пара́дная (paládnaia)', weights: { 'ru-petersburgo': 3 } },
    ],
  },
  {
    id: 'shawarma',
    emoji: '🌯',
    question: 'O churrasquinho enrolado no pão sírio:',
    options: [
      { label: 'шаурма́ (chaurmá)', weights: { 'ru-moscou': 3 } },
      { label: 'шаве́рма (chavérma)', weights: { 'ru-petersburgo': 3 } },
    ],
  },
  {
    id: 'frango',
    emoji: '🍗',
    question: 'Frango, na fala do dia a dia:',
    options: [
      { label: 'ку́рица (kúritsa, o padrão)', weights: { 'ru-moscou': 2 } },
      { label: 'ку́ра (kúra)', weights: { 'ru-petersburgo': 3 } },
    ],
  },
  {
    id: 'o-atono',
    emoji: '👂',
    question: 'Como soa o “о” sem força, de “молоко́” (leite)?',
    options: [
      { label: 'quase um “a”: [məlɐˈko]', weights: { 'ru-moscou': 2, 'ru-sul': 2, 'ru-belarus': 1 } },
      { label: 'um “o” bem cheio: [moloˈko]', weights: { 'ru-norte': 3 } },
    ],
  },
  {
    id: 'que',
    emoji: '❓',
    question: '“O quê?” — что (chto) no padrão:',
    options: [
      { label: 'что (chto)', weights: { 'ru-moscou': 2, 'ru-norte': 1, 'ru-siberia': 1, 'ru-belarus': 1, 'ru-cazaquistao': 1 } },
      { label: 'шо (cho)', weights: { 'ru-sul': 3, 'ru-odessa': 3 } },
    ],
  },
  {
    id: 'bucha',
    emoji: '🧽',
    question: 'A bucha de banho:',
    options: [
      { label: 'моча́лка (mochálka, o padrão)', weights: { 'ru-moscou': 2 } },
      { label: 'вехо́тка (viekhótka)', weights: { 'ru-siberia': 3 } },
    ],
  },
  {
    id: 'capinha',
    emoji: '📁',
    question: 'A capinha plástica para guardar folhas de papel:',
    options: [
      { label: 'файл (fail, do inglês “file”)', weights: { 'ru-moscou': 2 } },
      { label: 'мультифо́ра (multifóra)', weights: { 'ru-siberia': 3 } },
    ],
  },
  {
    id: 'umolyayu',
    emoji: '🙏',
    question: 'Para pedir algo com ironia, tipo “ora, me faça o favor!”:',
    options: [
      { label: 'Я вас умоля́ю! (do iídiche, bem de Odessa)', weights: { 'ru-odessa': 3 } },
      { label: 'um jeito mais sério, sem essa graça', weights: {} },
    ],
  },
  {
    id: 'bolinho',
    emoji: '🍩',
    question: 'O bolinho de massa frita, bem popular em festa de casamento:',
    options: [
      { label: 'баурса́к (baursák, do cazaque)', weights: { 'ru-cazaquistao': 3 } },
      { label: 'по́нчик (pônchik, o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'г',
    emoji: '🗣️',
    question: 'Como soa a letra “г” de “го́род” (cidade)?',
    options: [
      { label: 'som duro, de “g”: [ˈɡorət]', weights: { 'ru-moscou': 2, 'ru-norte': 1, 'ru-petersburgo': 1, 'ru-siberia': 1 } },
      { label: 'um sopro, quase um “h”: [ˈɣorət]', weights: { 'ru-sul': 3, 'ru-belarus': 2 } },
    ],
  },
];
