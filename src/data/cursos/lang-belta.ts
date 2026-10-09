import type { MiniCourse } from './tipos';

/**
 * Lang Belta (Belter Creole), de “The Expanse” — criada por Nick Farmer, linguista contratado pela
 * produção da série da Amazon/Syfy (2014-2015, a partir da 1ª temporada; os livros de James S. A.
 * Corey tinham só um “sabor” de língua, sem gramática nem vocabulário desenvolvidos — os próprios
 * autores recomendam a versão da série, não a dos livros). Fonte: Wikipédia em inglês "Belter
 * Creole" (conferida nesta sessão), que cita Farmer diretamente (posts dele no Twitter/X) pra quase
 * toda regra de gramática e ortografia — mais de uma dúzia de vezes ao longo do artigo. O léxico
 * mistura de propósito línguas românicas (espanhol, francês, italiano, português), germânicas
 * (inglês, alemão, holandês, sueco), eslavas (polonês), além de mandarim, zulu, árabe e hebraico —
 * simulando o crioulo que colonos de origens bem diferentes criariam juntos no Cinturão de
 * asteroides. O dialeto usado na série é o “de Ceres”, segundo o próprio Farmer.
 */
export const CURSO_LANG_BELTA: MiniCourse = {
  id: 'langbelta',
  name: 'Lang Belta',
  emoji: '🪐',
  kind: 'artificial',
  summary: 'O crioulo dos colonos do Cinturão de asteroides em “The Expanse”: uma mistura de propósito de espanhol, francês, alemão, polonês, mandarim e mais, criada por um linguista de verdade para a série.',
  sources: [{ label: 'Wikipédia (inglês): “Belter Creole”', url: 'https://en.wikipedia.org/wiki/Belter_Creole' }],
  lessons: [
    {
      id: 'saudacoes',
      title: 'Oye, kopeng!',
      emoji: '👋',
      intro: [
        'O linguista Nick Farmer criou o lang belta para a série “The Expanse” simulando o crioulo que colonos de línguas bem diferentes inventariam juntos, morando há gerações no Cinturão de asteroides: palavras do espanhol, do francês, do alemão, do holandês, do polonês, do mandarim, do zulu e de outras línguas, tudo misturado numa gramática só.',
        '“Kopeng” (amigo/amigos) vem do francês “copain” somado ao mandarim 朋友 (“péngyou”) — exatamente o tipo de mistura que dá nome à língua: duas raízes de línguas sem nenhum parentesco, grudadas numa palavra só.',
      ],
      items: [
        { term: 'oye', meaning: 'olá (do espanhol “oye”, “escuta”)' },
        { term: 'oyedeng', meaning: 'tchau' },
        { term: 'taki taki', meaning: 'obrigado (do sueco “tack”, do dinamarquês “tak” e do mandarim 谢谢, “xièxiè”)' },
        { term: 'ya', meaning: 'sim (do inglês “yeah” e do alemão/holandês “ja”)' },
        { term: 'na', meaning: 'não (do inglês “no”)' },
        { term: 'kopeng', meaning: 'amigo/amigos (do francês “copain” + mandarim 朋友, “péngyou”)' },
      ],
      quiz: [
        { q: 'De onde vem “taki taki” (obrigado)?', options: ['Do sueco “tack” e do mandarim 谢谢', 'Só do inglês “thanks”', 'Do espanhol “gracias”'], answer: 0, why: 'O lang belta mistura raízes de línguas sem parentesco — “taki taki” junta o escandinavo “tack/takk/tak” ao mandarim “xièxiè”.' },
        { q: 'Como se diz “amigos” em lang belta?', options: ['kopeng', 'oye', 'taki taki'], answer: 0 },
      ],
    },
    {
      id: 'pronomes',
      title: 'Mi, to, im',
      emoji: '🙋',
      intro: [
        'Os pronomes do lang belta também vêm de mistura: “mi” (eu, do espanhol/italiano “mi”), “to” (você, do holandês informal), “im” (ele/ela/isso, do inglês “him”). O plural de pronome usa o sufixo “-lowda” (de “all of us/you/them”): “milowda” (nós), “tolowda” (vocês), “imalowda” (eles/elas).',
        'A pergunta de sim/não não inverte a ordem da frase: só acrescenta a partícula “ke” no FINAL, depois do verbo — bem diferente do português. “To showxa lang Belta, ke?” (Você fala lang belta?) é um exemplo atestado do próprio Nick Farmer.',
      ],
      items: [
        { term: 'mi', meaning: 'eu' },
        { term: 'to', meaning: 'você' },
        { term: 'im', meaning: 'ele/ela/isso' },
        { term: 'milowda', meaning: 'nós' },
        { term: 'ke', meaning: 'partícula de pergunta (vai no FINAL da frase)' },
        { term: 'showxa', meaning: 'falar' },
      ],
      quiz: [
        { q: 'Onde fica a partícula de pergunta “ke”?', options: ['No final da frase', 'No início da frase', 'Logo depois do pronome'], answer: 0, why: '“To showxa lang Belta, ke?” (Você fala lang belta?) — “ke” vem no final, sem inverter a ordem das palavras.' },
        { q: 'Como se diz “nós” em lang belta?', options: ['milowda', 'tolowda', 'imalowda'], answer: 0, why: 'O sufixo “-lowda” marca o plural dos pronomes: “mi” (eu) → “milowda” (nós).' },
      ],
    },
    {
      id: 'numeros',
      title: 'Nada, wang, tu...',
      emoji: '🔢',
      intro: [
        'O sistema numérico do lang belta tem palavras próprias de 0 a 9, e depois combina essas raízes para formar dezenas e centenas: “teng” é dez, “tuteng” é vinte (literalmente “dois-dez”), “xanya” é cem.',
      ],
      items: [
        { term: 'nada', meaning: 'zero' },
        { term: 'wang', meaning: 'um' },
        { term: 'tu', meaning: 'dois' },
        { term: 'serí', meaning: 'três' },
        { term: 'fu', meaning: 'quatro' },
        { term: 'teng', meaning: 'dez' },
      ],
      quiz: [
        { q: 'Como se forma “vinte” (20) em lang belta?', options: ['tuteng (dois-dez)', 'tengtu', 'tunada'], answer: 0, why: 'As dezenas se formam com o numeral + “teng” (dez): “tu” (dois) + “teng” = “tuteng” (vinte).' },
        { q: 'Qual é o zero em lang belta?', options: ['nada', 'wang', 'na'], answer: 0, why: '“Nada” é zero — não confundir com “na” (não) nem com o português “nada”.' },
      ],
    },
  ],
};
