import type { UnitSeed } from '../types';

/**
 * Trilha do yawanawá: por enquanto só UMA unidade (A1.1) — ver `incomplete` em index.ts para o porquê
 * deste pacote ser bem menor que o modelo padrão deste app. Nenhuma fonte consultada registra pronome,
 * verbo ou frase completa em yawanawá (só palavras isoladas — ver vocabulario.ts): por isso os exercícios
 * de voz desta unidade pedem para repetir a palavra, não para responder a uma pergunta, e as lacunas do
 * jogo de completar ficam com a palavra inteira (“___.”), igual ao recurso já usado neste app em pacotes
 * de outras línguas pouco documentadas (ver, por exemplo, src/data/kl/curriculo.ts).
 */
export const UNITS_YWN: UnitSeed[] = [
  {
    id: 'ywn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yawa nawa: primeiras palavras',
    emoji: '🐗',
    card: {
      id: 'ywn-c1',
      title: 'Yawa nawa: o povo do queixada',
      emoji: '🐗',
      history:
        'O yawanawá (código ISO 639-3 “ywn”) é uma língua indígena viva da família pano, falada sobretudo na Terra Indígena Rio Gregório, no município de Tarauacá (Acre, Brasil), com grupos também no Peru e na Bolívia. O nome do povo e da língua é a própria autodesignação: “yawa” (queixada, um porco-do-mato) mais “nawa” (povo, gente) — “o povo do queixada”. A população soma cerca de 1.287 pessoas ao todo (831 no Brasil em 2014, 324 no Peru em 1993 e 132 na Bolívia em 2012, segundo pt.wikipedia.org/wiki/Yawanawá); um levantamento mais recente do próprio sistema de saúde indígena conta 849 pessoas só no Brasil em 2020 (pib.socioambiental.org/pt/Povo:Yawanawá, do Instituto Socioambiental).',
      culture_tip:
        'Todo ano, na lua cheia, o povo yawanawá realiza o Mariri Yawanawá — um festival de vários dias de música, dança e cultura na aldeia Mutum, criado em 2000 e hoje aberto a visitantes de fora (pib.socioambiental.org/pt/Povo:Yawanawá). “Mariri” é também o nome geral das festas noturnas de canto e dança do povo.',
      grammar_why:
        'As fontes consultadas nesta entrega confirmam palavra por palavra só substantivos e numerais do yawanawá — nenhum pronome, verbo ou frase completa foi encontrado. Por isso esta unidade apresenta as palavras sozinhas, sem juntá-las em frases inventadas: a única “palavra composta” que as fontes realmente atestam é o próprio nome do povo, “yawa” + “nawa” = “Yawanawá”.',
      grammar_examples: [
        ['Yawa.', 'Queixada, porco-do-mato.'],
        ['Nawa.', 'Povo, gente.'],
        ['Yawa + nawa = Yawanawá.', 'Queixada + gente = o nome do povo.'],
        ['Wisti, rave.', 'Um, dois.'],
      ],
      character_guide: [
        ['a', 'como em “fada”', 'kaman (cachorro), mariri (festa)'],
        ['e', 'som fechado, mais perto de um “i” que do “é” do português', 'rekin (nariz)'],
        ['i', 'como em “si”', 'viru (olho)'],
        ['u', 'como em “lua”', 'uxe (lua)'],
        ['x', 'como o “ch” de “chuva” em Portugal, ou o “sh” do inglês', 'xinaya (especialista em reza)'],
      ],
    },
    lessons: [
      {
        id: 'ywn-u1-l1',
        title: 'Mapu, viru, kixa: o corpo',
        kind: 'licao',
        words: ['mapu', 'viru', 'rekin', 'pahinki', 'vu', 'kixa'],
        cloze: [
          { sentence: '___.', answer: 'mapu', options: ['mapu', 'viru', 'kixa'], translation: 'Cabeça.' },
          { sentence: '___.', answer: 'rekin', options: ['rekin', 'pahinki', 'vu'], translation: 'Nariz.' },
          { sentence: '___.', answer: 'kixa', options: ['kixa', 'mapu', 'viru'], translation: 'Boca.' },
        ],
        voice: {
          bot: 'Mapu.',
          botTranslation: 'Cabeça.',
          expected: ['Mapu.', 'mapu'],
          hint: 'Repita a palavra “mapu” (cabeça) — as fontes do yawanawá só registram as palavras do corpo sozinhas, sem frase.',
        },
        communityPrompt: 'Escreva as seis palavras do corpo desta lição com a tradução de cada uma: mapu, viru, rekin, pahinki, vu, kixa.',
      },
      {
        id: 'ywn-u1-l2',
        title: 'Gente e natureza',
        kind: 'licao',
        words: ['nukevene', 'awinhu', 'waka', 'vari', 'uxe', 'kaman'],
        cloze: [
          { sentence: '___.', answer: 'nukevene', options: ['nukevene', 'awinhu', 'kaman'], translation: 'Homem.' },
          { sentence: '___.', answer: 'waka', options: ['waka', 'vari', 'uxe'], translation: 'Água.' },
          { sentence: '___.', answer: 'uxe', options: ['uxe', 'vari', 'waka'], translation: 'Lua.' },
        ],
        voice: {
          bot: 'Vari. Uxe.',
          botTranslation: 'Sol. Lua.',
          expected: ['Vari. Uxe.', 'vari uxe', 'vari, uxe'],
          hint: 'Repita as duas palavras, uma depois da outra: “vari” (sol), “uxe” (lua).',
        },
        communityPrompt: 'Escolha três palavras desta lição — nukevene (homem), awinhu (mulher), waka (água), vari (sol), uxe (lua) ou kaman (cachorro) — e descreva o que cada uma significa.',
      },
      {
        id: 'ywn-u1-l3',
        title: 'Teste: corpo, gente e natureza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mapu. Viru. Waka.',
          botTranslation: 'Cabeça. Olho. Água.',
          expected: ['Mapu. Viru. Waka.', 'mapu viru waka'],
          hint: 'Repita as três palavras na ordem: “mapu” (cabeça), “viru” (olho), “waka” (água).',
        },
        communityPrompt: 'Escreva seis palavras que você aprendeu nesta unidade, cada uma com a sua tradução.',
      },
    ],
  },
];
