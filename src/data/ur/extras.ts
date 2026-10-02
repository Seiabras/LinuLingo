import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no urdu). */
export const COMMUNITY_UR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'آپ کا کیا نام ہے اور آپ کہاں سے ہیں؟',
    content: 'میرا نام برونو اور میں ہوں برازیل سے۔',
    reference: 'میرا نام برونو ہے اور میں برازیل سے ہوں۔',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'کیا آپ کے پاس بہن ہے؟',
    content: 'ہاں، میرا بہن ہے۔',
    reference: 'ہاں، میری بہن ہے۔',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'آپ کا کیا حال ہے؟',
    content: 'میں اچھا ہے، شکریہ۔',
    reference: 'میں اچھا ہوں، شکریہ۔',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_UR: ScenarioSeed[] = [
  {
    id: 'ur-s1',
    title: 'چائے اور پانی',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'زینب، میری دوست',
    description: 'Zainab convida você para tomar chá numa barraca de chá em Lahore. É uma conversa entre amigos: use “تم”.',
    turns: [
      {
        bot: 'السلام علیکم! کیا تم چائے چاہتے ہو یا پانی؟',
        botTranslation: 'Olá! Você quer chá ou água?',
        keywords: ['چائے', 'پانی'],
        suggestions: ['مجھے چائے پسند ہے۔', 'ایک پانی، برائے مہربانی۔'],
      },
      {
        bot: 'تم کہاں سے ہو؟',
        botTranslation: 'De onde você é?',
        keywords: ['سے ہوں'],
        suggestions: ['میں برازیل سے ہوں۔'],
      },
    ],
  },
];

/**
 * Palavras do urdu com a raiz e os parentes nas línguas irmãs — o urdu formal busca muito
 * vocabulário no persa e no árabe (diferente do hindi formal, que busca no sânscrito: Wikipédia,
 * “Urdu”), mas a camada mais antiga, indo-ariana, continua a mesma do hindi e, lá atrás, do
 * português. Fontes de cada palavra: en.wiktionary.org/wiki/<palavra> (edição em urdu).
 */
export const ETYMOLOGY_UR: EtymologySeed[] = [
  {
    word: 'نام',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen'], ['pa', 'ناں (nāṉ)']),
    evolution_note:
      '“نام” (nām) veio do sânscrito नामन् (nā́man), herdeiro fiel da raiz indo-europeia “*h₁nómn̥” — a mesma do latim “nomen”, do português “nome” e do inglês “name” (o próprio Wiktionary chama o inglês de cognato direto). É um lembrete de que, apesar do vocabulário formal emprestado do persa e do árabe, o urdu continua geneticamente uma língua indo-ariana, irmã do hindi (que usa a mesma palavra, só escrita “नाम” em devanágari) e prima distante do português.',
    transparent: true,
  },
  {
    word: 'زبان',
    root_word: 'زبان (zabān)',
    origin_language: 'Persa clássico',
    cognates: c(['fa', 'زبان (zabān)']),
    evolution_note:
      '“زبان” (zabān) quer dizer tanto “língua” (o órgão da boca) quanto “idioma” — e foi emprestada do persa clássico. É um ótimo exemplo da diferença de registro entre o urdu e o hindi: o hindi formal usa “भाषा” (bhāṣā), de raiz sânscrita, para “idioma”, enquanto o urdu formal prefere esta palavra persa (Wikipédia, “Urdu”: “formal Urdu draws literary, political, and technical vocabulary from Persian and Arabic”, contra o sânscrito do hindi formal).',
    transparent: false,
  },
  {
    word: 'دوست',
    root_word: 'دوست (dōst)',
    origin_language: 'Persa clássico',
    cognates: c(['fa', 'دوست (dōst)']),
    evolution_note:
      '“دوست” (dost, amigo) foi emprestada do persa clássico, que por sua vez herdou a palavra de etapas ainda mais antigas do iraniano. É uma das muitas palavras do dia a dia do urdu — ao lado de “خاندان” (família) e “شکریہ” (obrigado) — que vieram do persa, a língua de prestígio cultural na corte mogol que governou o norte da Índia por séculos.',
    transparent: false,
  },
  {
    word: 'خاندان',
    root_word: 'خاندان (xāndān)',
    origin_language: 'Persa clássico',
    cognates: c(['fa', 'خاندان (xāndān)'], ['hi', 'ख़ानदान (khāndān)']),
    evolution_note:
      '“خاندان” (xāndān) quer dizer “família”, mas também “dinastia” ou “linhagem” — e foi emprestada do persa clássico. O hindi tomou emprestada a mesma palavra persa, só que escrita em devanágari (ख़ानदान): um caso em que urdu e hindi compartilham até o empréstimo, não só a base indo-ariana.',
    transparent: false,
  },
  {
    word: 'شکریہ',
    root_word: 'شُكْر (šukr)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'شُكْر (šukr)'], ['hi', 'शुक्रिया (shukriyā)']),
    evolution_note:
      '“شکریہ” (shukriya, obrigado) vem da raiz árabe “شُكْر” (šukr, gratidão), com um sufixo de formação persa/urdu — por isso o Wiktionary chama a palavra inteira de uma “formação indo-ariana” sobre uma raiz emprestada. A mesma palavra, com a mesma pronúncia, também virou “obrigado” em hindi (शुक्रिया) e aparece em bengali, panjabi e divevi — mais uma prova de que urdu e hindi compartilham até as palavras emprestadas do árabe e do persa no dia a dia.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_UR: [string, string][] = [
  ['آپ کا کیا حال ہے؟', 'Como você está?'],
  ['کیا آپ کے پاس بھائی یا بہن ہے؟', 'Você tem algum irmão ou irmã?'],
  ['آپ کیا کھاتے اور پیتے ہیں؟', 'O que você come e bebe?'],
  ['کیا آپ کے پاس بڑا خاندان ہے؟', 'Você tem uma família grande?'],
];

export const SHADOWING_UR: [string, string][] = [
  ['السلام علیکم! میرا نام لینو ہے۔', 'Olá! Eu me chamo Linu.'],
  ['میں اچھا ہوں، شکریہ۔ اور آپ؟', 'Eu estou bem, obrigado(a). E você?'],
  ['میرا ایک بھائی اور ایک بہن ہے۔', 'Eu tenho um irmão e uma irmã.'],
  ['مجھے چائے پسند ہے۔', 'Eu gosto de chá.'],
];
