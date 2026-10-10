import type { LanguageVariant } from '../types';
import { ACCENTS_AR } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do árabe, por grupo (decisão do dono, 10/10/2026). Fontes: Wikipédia em português, inglês
 * e árabe («Varieties of Arabic», «Levantine Arabic», «Gulf Arabic», «Maghrebi Arabic», consultadas em
 * 10/10/2026). O padrão do curso é o árabe padrão moderno; cada grupo entra com a pronúncia e as
 * palavras que o distinguem, sem histórias por falta de fonte. O Hejaz (Jidá, Meca) fica fora dos
 * grupos, como sotaque solto; o egípcio e o maltês são línguas com curso próprio.
 */
export const VARIANTS_AR: LanguageVariant[] = [
  dialetoPadrao('ar-fusha', 'SAU', 'Árabe padrão (fuṣḥā)', '📖', 'O padrão do curso: o árabe padrão moderno, o da escrita, dos jornais, do noticiário e dos discursos, igual em todos os países árabes.'),
  {
    code: 'ar-levantino',
    country: 'SYR',
    kind: 'dialeto',
    name: 'Árabe levantino',
    flag: '🇱🇧',
    summary: 'O árabe do Levante: Síria, Líbano, Jordânia e Palestina, muito ouvido nas novelas sírias e nas canções libanesas.',
    pronunciation: ['Nas cidades, o “ق” soa como uma parada na garganta: “ʾalb” (coração).', 'O “ج” soa como o “j” do português.', '“Shu?” para “o quê?” e “kīfak?” para “como vai?”.'],
  },
  {
    code: 'ar-golfo',
    country: 'KWT',
    kind: 'dialeto',
    name: 'Árabe do Golfo',
    flag: '🇰🇼',
    summary: 'O árabe da costa do Golfo Pérsico e do centro da Arábia: Kuwait, Bahrein, Catar, Emirados e Arábia Saudita (Najd).',
    pronunciation: ['O “ق” soa “g”: “gāl” (ele disse).', 'O “ج” muitas vezes soa “y”: “rayyāl” (homem), onde o padrão diz “rajul”.', 'Palavras do persa, do híndi e do inglês, de séculos de comércio.'],
  },
  dialetoDe(ACCENTS_AR, 'ar-iraque', 'ar-iraquiano', 'Árabe iraquiano', '🇮🇶'),
  {
    code: 'ar-magrebino',
    country: 'MAR',
    kind: 'dialeto',
    name: 'Árabe magrebino',
    flag: '🇲🇦',
    summary: 'O árabe do Magrebe: Marrocos, Argélia, Tunísia e Líbia, o mais diferente do padrão, com muito berbere e francês, e difícil de entender para quem é do Oriente.',
    pronunciation: ['As vogais curtas caem: “ktəb” (escreveu).', 'O verbo na primeira pessoa do singular começa com “n-”: “nəktəb” (eu escrevo).', 'Muitas palavras do berbere, do francês e do espanhol.'],
  },
  dialetoDe(ACCENTS_AR, 'ar-sudao', 'ar-sudanes', 'Árabe sudanês', '🇸🇩'),
  dialetoDe(ACCENTS_AR, 'ar-iemen', 'ar-iemenita', 'Árabe iemenita', '🇾🇪'),
];
