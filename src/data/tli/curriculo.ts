import type { UnitSeed } from '../types';

/**
 * Trilha do lingít/tlingit: só as duas unidades do nível A1 (pacote marcado como incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para a lista completa de fontes e para a explicação de
 * como as frases de exemplo foram montadas (sem verbos de ação, que nenhuma fonte consultada documenta
 * com uma forma de citação simples): a maioria é a própria palavra sozinha, listas curtas sem verbo
 * (como as da contagem) ou o padrão “ax̱ + substantivo inalienável” (“meu/minha ___”), que é o próprio
 * formato usado pelo Dictionary of Tlingit (Edwards, 2009) e citado assim no Wiktionary.
 */
export const UNITS_TLI: UnitSeed[] = [
  {
    id: 'tli-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Lingít: o povo e as pessoas',
    emoji: '🧑‍🤝‍🧑',
    card: {
      id: 'tli-c1',
      title: 'Uma língua gravemente ameaçada do sudeste do Alasca',
      emoji: '🏔️',
      history:
        'O lingít (ou tlingit) é falado no sudeste do Alasca (Estados Unidos) e em partes costeiras da Colúmbia Britânica e do Yukon, no Canadá, segundo a Wikipédia em inglês. É uma língua gravemente ameaçada: estimativas citadas na Wikipédia falam em algo entre 50 e 200 falantes nativos fluentes nos Estados Unidos e cerca de 120 a 150 no Canadá (censo de 2016), quase todos já com mais de 60 anos — a UNESCO classifica o lingít como “criticamente em perigo”. Ainda assim, cerca de 22.600 pessoas se identificam como lingít no Alasca e 2.110 no Canadá (dados citados na Wikipédia), e programas de revitalização seguem ativos, com dicionários e cursos publicados pelo Sealaska Heritage Institute e por professores como X̱ʼunei Lance Twitchell.',
      culture_tip:
        'A própria palavra “lingít” quer dizer “pessoa, ser humano”: é a autodesignação do povo, que a Wikipédia em inglês traduz também como “povo das marés”. A sociedade lingít se divide em duas metades (em inglês, “moieties”): Raven (corvo, “yéil” em lingít) e Eagle (águia, associada a “chʼáakʼ”). A descendência é matrilinear — a criança pertence ao clã da mãe —, e cada clã tem seus próprios emblemas (corvo, águia, lobo e outros), exibidos em mastros totêmicos, canoas e tecidos, segundo a Wikipédia em inglês.',
      grammar_why:
        'Palavras de parentesco como “éesh” (pai) e “tláa” (mãe) nunca aparecem sozinhas em lingít: o Wiktionary mostra que são substantivos “inalienáveis”, que exigem um possuidor. Para “meu/minha”, usa-se o prefixo “ax̱-”: “ax̱ tláa” é, literalmente, a forma citada no Dictionary of Tlingit (Edwards, 2009) para “minha mãe”. O mesmo padrão vale para partes do corpo, vistas na próxima unidade.',
      grammar_examples: [
        ['Ax̱ tláa.', 'Minha mãe.'],
        ['Ax̱ éesh.', 'Meu pai.'],
        ['Lingít x̱ʼéinax̱.', 'A língua lingít (lit. “boca/fala lingít”).'],
      ],
      character_guide: [
        ['x̱', 'uma fricativa na parte de trás da boca (véu palatino), diferente do “x” do português', 'x̱át (eu), x̱ʼaan (fogo)'],
        ['ḵ', 'uma consoante feita mais atrás na garganta que o “k” comum do lingít', 'ḵáa (homem), ḵa (e)'],
        ['g̱', 'uma fricativa sonora, “par” do x̱ feito mais atrás na garganta', 'g̱agaan (sol), g̱ooch (lobo)'],
        ['ʼ (apóstrofo)', 'marca uma consoante ejetiva (dita com um golpe de ar da glote) — uma letra própria, não pontuação', 'tléixʼ (um), chʼáakʼ (águia)'],
      ],
    },
    lessons: [
      {
        id: 'tli-u1-l1',
        title: 'X̱át, wa.é, hú, hás',
        kind: 'licao',
        words: ['x̱át', 'wa.é', 'hú', 'hás', 'ḵáa', 'shaawát'],
        cloze: [
          { sentence: '“___”: eu.', answer: 'X̱át', options: ['X̱át', 'Wa.é', 'Hú'], translation: '“X̱át”: eu.' },
          { sentence: '“___”: mulher.', answer: 'Shaawát', options: ['Shaawát', 'Ḵáa', 'Hás'], translation: '“Shaawát”: mulher.' },
          { sentence: '“___”: eles, elas.', answer: 'Hás', options: ['Hás', 'Hú', 'Wa.é'], translation: '“Hás”: eles, elas.' },
        ],
        voice: {
          bot: 'X̱át, wa.é…',
          botTranslation: 'Eu, você…',
          expected: ['Hú.', 'hú'],
          hint: 'Complete a lista de pessoas: depois de “wa.é” (você) vem “hú” (ele/ela).',
        },
        communityPrompt: 'Escreva os pronomes “x̱át” (eu), “wa.é” (você) e “hás” (eles/elas), e as palavras “ḵáa” (homem) e “shaawát” (mulher).',
      },
      {
        id: 'tli-u1-l2',
        title: 'Ax̱ tláa, ax̱ éesh',
        kind: 'licao',
        words: ['éesh', 'tláa', 'yádi', 'lingít', 'gunalchéesh', 'aakʼé'],
        cloze: [
          { sentence: 'Ax̱ ___.', answer: 'tláa', options: ['tláa', 'éesh', 'yádi'], translation: 'Minha mãe.' },
          { sentence: 'Ax̱ ___.', answer: 'éesh', options: ['éesh', 'tláa', 'lingít'], translation: 'Meu pai.' },
          { sentence: '“___”: obrigado(a).', answer: 'gunalchéesh', options: ['gunalchéesh', 'aakʼé', 'lingít'], translation: '“Gunalchéesh”: obrigado(a).' },
        ],
        voice: {
          bot: 'Ax̱ tláa.',
          botTranslation: 'Minha mãe.',
          expected: ['Ax̱ éesh.', 'ax̱ éesh'],
          hint: 'Agora diga “meu pai”, com o mesmo padrão: “Ax̱ éesh.”.',
        },
        communityPrompt: 'Apresente a sua família usando “ax̱ tláa” (minha mãe), “ax̱ éesh” (meu pai) e “ax̱ yádi” (meu filho/minha filha), e agradeça com “gunalchéesh”.',
      },
      {
        id: 'tli-u1-l3',
        title: 'Prova: o povo e as pessoas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ax̱ tláa, ax̱ éesh…',
          botTranslation: 'Minha mãe, meu pai…',
          expected: ['Ax̱ yádi.', 'ax̱ yádi'],
          hint: 'Complete com “meu filho/minha filha”, com o mesmo padrão “ax̱” + substantivo: “Ax̱ yádi.”.',
        },
        communityPrompt: 'Escreva cinco palavras desta unidade sobre pessoas e família, usando “ax̱” antes das palavras que precisam de um possuidor (éesh, tláa, yádi).',
      },
    ],
  },
  {
    id: 'tli-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Números, natureza e bichos',
    emoji: '🌊',
    card: {
      id: 'tli-c2',
      title: 'Clãs, metades e o tom que muda a palavra',
      emoji: '🐦‍⬛',
      history:
        'Os números lingít guardam a própria história da contagem nos dedos: “keijín” (cinco) vem de “kei” (para cima) + “jín” (mão) — a mão levantada ao chegar em cinco —, e “jinkaat” (dez) combina “jín” (mão) com “kaat”, segundo o Wiktionary. Essa base-5/base-10 é comum em línguas que contam nos dedos das duas mãos.',
      culture_tip:
        'O corvo (“yéil”) e a águia (associada a “chʼáakʼ”) não são só bichos do dia a dia: são os emblemas das duas metades da sociedade lingít (Raven e Eagle), que organizam os clãs e até quem pode se casar com quem, já que o casamento tradicional acontece entre pessoas de metades diferentes, segundo a Wikipédia em inglês.',
      grammar_why:
        'O lingít tem tom: a Wikipédia em inglês e o artigo de fonologia da língua mostram que a mesma sequência de letras pode ter dois ou três tons diferentes, marcados por acentos na vogal — e que a marcação varia conforme o dialeto. Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Tléixʼ, déix̱, násʼk…', 'Um, dois, três…'],
        ['Yéil, chʼáakʼ.', 'Corvo, águia — os emblemas das duas metades do povo lingít.'],
      ],
      character_guide: [
        ['´ (agudo)', 'tom alto numa vogal curta, segundo a ortografia do tlingit do interior', 'g̱agaan (sol)'],
        ['^ (circunflexo)', 'tom alto numa vogal longa', 'sem exemplo de palavra nas fontes consultadas'],
        ['ˋ (grave)', 'tom baixo numa vogal longa', 'sem exemplo de palavra nas fontes consultadas'],
        ['vogal dobrada (aa, ee, ii, oo)', 'vogal longa', 'daaxʼoon (quatro), g̱ooch (lobo)'],
      ],
    },
    lessons: [
      {
        id: 'tli-u2-l1',
        title: 'Contando de um a seis',
        kind: 'licao',
        words: ['tléixʼ', 'déix̱', 'násʼk', 'daaxʼoon', 'keijín', 'tleidooshú'],
        cloze: [
          { sentence: 'Tléixʼ, déix̱, ___.', answer: 'násʼk', options: ['násʼk', 'daaxʼoon', 'keijín'], translation: 'Um, dois, três.' },
          { sentence: 'Daaxʼoon, ___.', answer: 'keijín', options: ['keijín', 'tleidooshú', 'násʼk'], translation: 'Quatro, cinco.' },
          { sentence: '“___”: seis.', answer: 'tleidooshú', options: ['tleidooshú', 'keijín', 'daaxʼoon'], translation: '“Tleidooshú”: seis.' },
        ],
        voice: {
          bot: 'Tléixʼ, déix̱, násʼk, daaxʼoon, keijín…',
          botTranslation: 'Um, dois, três, quatro, cinco…',
          expected: ['Tleidooshú.', 'tleidooshú'],
          hint: 'Complete a contagem até seis: “tleidooshú”.',
        },
        communityPrompt: 'Conte de um a seis em lingít: tléixʼ, déix̱, násʼk, daaxʼoon, keijín, tleidooshú.',
      },
      {
        id: 'tli-u2-l2',
        title: 'Sol, água, bichos',
        kind: 'licao',
        words: ['g̱agaan', 'héen', 'yéil', 'chʼáakʼ', 'g̱ooch', 'keitl'],
        cloze: [
          { sentence: '“___”: sol.', answer: 'g̱agaan', options: ['g̱agaan', 'dís', 'héen'], translation: '“G̱agaan”: sol.' },
          { sentence: '“___”: corvo.', answer: 'yéil', options: ['yéil', 'chʼáakʼ', 'g̱ooch'], translation: '“Yéil”: corvo (também o emblema de uma das metades do povo lingít).' },
          { sentence: '“___”: cachorro.', answer: 'keitl', options: ['keitl', 'g̱ooch', 'chʼáakʼ'], translation: '“Keitl”: cachorro.' },
        ],
        voice: {
          bot: 'Yéil, chʼáakʼ…',
          botTranslation: 'Corvo, águia…',
          expected: ['G̱ooch.', 'g̱ooch'],
          hint: 'Complete com outro bicho: “g̱ooch” (lobo).',
        },
        communityPrompt: 'Escreva sobre a natureza usando “g̱agaan” (sol) e “héen” (água), e sobre os bichos usando “yéil” (corvo), “chʼáakʼ” (águia), “g̱ooch” (lobo) e “keitl” (cachorro).',
      },
      {
        id: 'tli-u2-l3',
        title: 'Prova: números, natureza e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Keijín, tleidooshú, dax̱adooshú…',
          botTranslation: 'Cinco, seis, sete…',
          expected: ['Nasʼgadooshú.', 'nasʼgadooshú'],
          hint: 'Complete a contagem até oito: “nasʼgadooshú”.',
        },
        communityPrompt: 'Escreva uma pequena cena usando pelo menos quatro palavras das duas unidades: pessoas, família, números, natureza ou bichos.',
      },
    ],
  },
];
