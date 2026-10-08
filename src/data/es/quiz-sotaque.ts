/**
 * «¿Cuál es tu sotaque?»: a versão espanhola do quiz «Qual é o seu sotaque?» (motor genérico em
 * `src/services/sotaque-quiz.ts`). As perguntas vêm das próprias palavras e traços de pronúncia já
 * documentados em `src/data/es/sotaques.ts` (ACCENTS_ES) — nada inventado aqui, só reaproveitado em
 * formato de pergunta de múltipla escolha. Catalão, basco e galego ficam de fora: são línguas
 * próprias (`kind: 'língua'`), não jeitos de falar espanhol.
 */
import type { GuessQuestion, GuessRegion } from '@/services/sotaque-quiz';

export type RegionIdEs =
  | 'es-castelhano'
  | 'es-andaluz'
  | 'es-canario'
  | 'es-mexicano'
  | 'es-norteno'
  | 'es-yucateco'
  | 'es-tico'
  | 'es-cubano'
  | 'es-boricua'
  | 'es-dominicano'
  | 'es-venezuelano'
  | 'es-costeno'
  | 'es-paisa'
  | 'es-rolo'
  | 'es-andino'
  | 'es-chileno'
  | 'es-porteno'
  | 'es-cordobes';

export const GUESS_REGIONS_ES: GuessRegion<RegionIdEs>[] = [
  { id: 'es-castelhano', accent: 'castelhano do centro', where: 'o centro da Espanha', emoji: '🏰' },
  { id: 'es-andaluz', accent: 'andaluz', where: 'a Andaluzia', emoji: '🌞' },
  { id: 'es-canario', accent: 'canário', where: 'as Ilhas Canárias', emoji: '🌋' },
  { id: 'es-mexicano', accent: 'mexicano do centro', where: 'o centro do México', emoji: '🌮' },
  { id: 'es-norteno', accent: 'nortenho', where: 'o norte do México', emoji: '🤠' },
  { id: 'es-yucateco', accent: 'iucateco', where: 'a Península de Iucatã', emoji: '🏛️' },
  { id: 'es-tico', accent: 'costa-riquenho (“tico”)', where: 'a Costa Rica', emoji: '🌴' },
  { id: 'es-cubano', accent: 'cubano', where: 'Cuba', emoji: '🚗' },
  { id: 'es-boricua', accent: 'porto-riquenho (“boricua”)', where: 'Porto Rico', emoji: '🐸' },
  { id: 'es-dominicano', accent: 'dominicano', where: 'a República Dominicana', emoji: '🎵' },
  { id: 'es-venezuelano', accent: 'venezuelano', where: 'a Venezuela', emoji: '🏔️' },
  { id: 'es-costeno', accent: 'costeño (Caribe colombiano)', where: 'a costa caribenha da Colômbia', emoji: '🏖️' },
  { id: 'es-paisa', accent: 'paisa', where: 'Antioquia, na Colômbia', emoji: '☕' },
  { id: 'es-rolo', accent: 'rolo (Bogotá)', where: 'Bogotá', emoji: '🏙️' },
  { id: 'es-andino', accent: 'andino', where: 'os Andes (Peru, Equador, Bolívia)', emoji: '🦙' },
  { id: 'es-chileno', accent: 'chileno', where: 'o Chile', emoji: '🍷' },
  { id: 'es-porteno', accent: 'portenho (Buenos Aires)', where: 'Buenos Aires', emoji: '⚽' },
  { id: 'es-cordobes', accent: 'cordobês', where: 'Córdoba, na Argentina', emoji: '🎶' },
];

export const GUESS_QUESTIONS_ES: GuessQuestion<RegionIdEs>[] = [
  {
    id: 'amigo',
    emoji: '🤝',
    question: 'Um amigo, um cara, um mano:',
    options: [
      { label: 'tío / tía', weights: { 'es-castelhano': 3 } },
      { label: 'quillo / quilla (Sevilha)', weights: { 'es-andaluz': 3 } },
      { label: 'cuate / carnal', weights: { 'es-mexicano': 3 } },
      { label: 'mae', weights: { 'es-tico': 3 } },
      { label: 'asere', weights: { 'es-cubano': 3 } },
      { label: 'pana', weights: { 'es-venezuelano': 3 } },
      { label: 'parce / parcero', weights: { 'es-paisa': 3 } },
      { label: 'amigo (o jeito comum, em qualquer lugar)', weights: {} },
    ],
  },
  {
    id: 'legal',
    emoji: '😎',
    question: 'Uma coisa muito boa, legal:',
    options: [
      { label: 'guay', weights: { 'es-castelhano': 3 } },
      { label: 'padre / chido', weights: { 'es-mexicano': 3 } },
      { label: 'chévere', weights: { 'es-venezuelano': 3 } },
      { label: 'bacano', weights: { 'es-costeno': 3 } },
      { label: 'tuanis', weights: { 'es-tico': 3 } },
      { label: 'bueno, genial (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'onibus',
    emoji: '🚌',
    question: 'O ônibus:',
    options: [
      { label: 'guagua', weights: { 'es-canario': 3, 'es-cubano': 3 } },
      { label: 'camión', weights: { 'es-mexicano': 3 } },
      { label: 'bondi (lunfardo)', weights: { 'es-porteno': 3 } },
      { label: 'autobús / bus (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'dinheiro',
    emoji: '💰',
    question: 'Dinheiro:',
    options: [
      { label: 'guita (lunfardo)', weights: { 'es-porteno': 3 } },
      { label: 'chavos', weights: { 'es-boricua': 3 } },
      { label: 'dinero / plata (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'trabalho',
    emoji: '💼',
    question: 'O trabalho:',
    options: [
      { label: 'chamba', weights: { 'es-mexicano': 3 } },
      { label: 'brete', weights: { 'es-tico': 3 } },
      { label: 'laburo (lunfardo)', weights: { 'es-porteno': 3 } },
      { label: 'trabajo (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'crianca',
    emoji: '🧒',
    question: 'Uma criança pequena, um bebê:',
    options: [
      { label: 'chino / china', weights: { 'es-rolo': 3 } },
      { label: 'pelao / pelaíta', weights: { 'es-costeno': 3 } },
      { label: 'guagua (vem do quéchua)', weights: { 'es-andino': 3, 'es-chileno': 3 } },
      { label: 'niño / niña (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'milho',
    emoji: '🌽',
    question: 'A espiga de milho:',
    options: [
      { label: 'millo', weights: { 'es-canario': 3 } },
      { label: 'choclo (vem do quéchua)', weights: { 'es-andino': 3 } },
      { label: 'maíz, elote (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'batata',
    emoji: '🥔',
    question: 'A batata:',
    options: [
      { label: 'papa', weights: { 'es-canario': 3 } },
      { label: 'patata (o jeito comum na Espanha)', weights: {} },
    ],
  },
  {
    id: 'namorado',
    emoji: '💘',
    question: 'Namorado, namorada:',
    options: [
      { label: 'pololo / polola', weights: { 'es-chileno': 3 } },
      { label: 'jevo / jeva', weights: { 'es-dominicano': 3 } },
      { label: 'novio / novia (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'caminhonete',
    emoji: '🛻',
    question: 'A caminhonete, o carro de caçamba:',
    options: [
      { label: 'troca', weights: { 'es-norteno': 3 } },
      { label: 'camioneta (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'cargada',
    emoji: '😏',
    question: 'Tirar uma zoeira de alguém, de propósito, pra incomodar:',
    options: [
      { label: 'hacer una cargada', weights: { 'es-cordobes': 3 } },
      { label: 'jeito comum (joder, embromar, molestar)', weights: {} },
    ],
  },
  {
    id: 'pibil',
    emoji: '🍖',
    question: 'Uma carne assada enterrada num forno de terra, embrulhada em folha:',
    options: [
      { label: 'pibil (do maia iucateque, como na cochinita pibil)', weights: { 'es-yucateco': 3 } },
      { label: 'al horno, asado (o jeito comum)', weights: {} },
    ],
  },
  {
    id: 'zc',
    emoji: '👂',
    question: '“Casa” (a casa) e “caza” (caçar) — soam igual ou diferente?',
    options: [
      { label: 'diferente: “caza” com um som parecido com o “th” do inglês, e “casa” com “s” (distinción)', weights: { 'es-castelhano': 3 } },
      { label: 'igual, os dois com o som de “th” do inglês (ceceo)', weights: { 'es-andaluz': 3 } },
      {
        label: 'igual, os dois com som de “s” (seseo)',
        weights: {
          'es-andaluz': 2,
          'es-canario': 3,
          'es-mexicano': 1,
          'es-norteno': 1,
          'es-yucateco': 1,
          'es-tico': 1,
          'es-cubano': 1,
          'es-boricua': 1,
          'es-dominicano': 1,
          'es-venezuelano': 1,
          'es-costeno': 1,
          'es-paisa': 1,
          'es-rolo': 1,
          'es-andino': 1,
          'es-chileno': 1,
          'es-porteno': 1,
        },
      },
    ],
  },
  {
    id: 'll',
    emoji: '🗣️',
    question: 'Como soa o “ll” e o “y” de “yo me llamo” (eu me chamo)?',
    options: [
      { label: '“sho”: “sho me shamo”', weights: { 'es-porteno': 3 } },
      {
        label: '“i”, normal: “yo me llamo”',
        weights: {
          'es-castelhano': 1,
          'es-andaluz': 1,
          'es-canario': 1,
          'es-mexicano': 2,
          'es-norteno': 1,
          'es-yucateco': 1,
          'es-tico': 1,
          'es-cubano': 1,
          'es-boricua': 1,
          'es-dominicano': 1,
          'es-venezuelano': 1,
          'es-costeno': 1,
          'es-paisa': 1,
          'es-rolo': 1,
          'es-andino': 1,
          'es-chileno': 1,
        },
      },
    ],
  },
  {
    id: 's-final',
    emoji: '💨',
    question: 'O “s” no fim da palavra, em “¿cómo estás?”:',
    options: [
      { label: 'some ou vira um sopro: “¿cómo estáh?”', weights: { 'es-andaluz': 2, 'es-canario': 2, 'es-cubano': 3, 'es-chileno': 2, 'es-porteno': 1 } },
      { label: 'sempre pronunciado, bem clarinho', weights: { 'es-mexicano': 3 } },
    ],
  },
];
