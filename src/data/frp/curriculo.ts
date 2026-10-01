import type { UnitSeed } from '../types';

/**
 * Trilha do francoprovençal: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_FRP: UnitSeed[] = [
  {
    id: 'frp-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonjorn!',
    emoji: '👋',
    card: {
      id: 'frp-c1',
      title: 'Nem francês, nem occitano: um terceiro ramo',
      emoji: '🏔️',
      history:
        'O francoprovençal (ou arpitan) nasceu do latim falado nos Alpes, entre o leste da França, a Suíça francófona e o noroeste da Itália (Vale de Aosta). No século XIX, o linguista Graziadio Isaia Ascoli percebeu que essa fala não era nem uma langue d’oïl (como o francês) nem uma langue d’oc (como o occitano), mas um terceiro ramo galo-românico à parte — daí o nome “franco-provençal”. Desde os anos 1970, muitos falantes preferem o nome “arpitan”, criado para não sugerir que a língua fosse uma mistura de francês e provençal. A UNESCO classifica o francoprovençal como seriamente em perigo: não há uma fala oral única, só dialetos (lionês, saboiano, jurassiano, valdostano…), e a grafia usada aqui, a ORB (Ortografia de Referência B), é uma norma recente, pouco usada no dia a dia.',
      culture_tip:
        '“Bonjorn” serve para cumprimentar a qualquer hora do dia. Para agradecer, “grant-marci”; para se despedir, “a revêre”. Com desconhecidos e em situações formais, usa-se “vos” em vez de “te”, como o “vous” francês.',
      grammar_why:
        'O francoprovençal diz o nome com “s’apelar” (chamar-se): “Je m’apèlo Ana”, “Coment t’apèles?”. O verbo ser/estar, “étre”, tem a forma “su” para “je”: “je su de Sant-Pâblo” (eu sou de São Paulo).',
      grammar_examples: [
        ['Bonjorn! Je m’apèlo Ana.', 'Bom dia! Eu me chamo Ana.'],
        ['Coment vas?', 'Como vai?'],
        ['Je su de Sant-Pâblo.', 'Eu sou de São Paulo.'],
        ['Bien, grant-marci! E tè?', 'Bem, obrigado! E você?'],
      ],
      character_guide: [
        ['é / è / ê', 'o acento marca a vogal fechada ou aberta', 'édye (água), grant-marci, étre (ser)'],
        ['ô', 'um “o” fechado', 'coment, bôna (boa)'],
        ['ç / c (antes de e, i)', 'som de “s”', 'francoprovènçâl'],
        ['j', 'como o “j” do português', 'je (eu), jorns (dias)'],
      ],
    },
    lessons: [
      {
        id: 'frp-u1-l1',
        title: 'Bonjorn, grant-marci, a revêre!',
        kind: 'licao',
        words: ['bonjorn', 'a revêre', 'grant-marci', 'de ren', 'se vos plai', 'èxcusâd-mè'],
        cloze: [
          { sentence: '___! Coment vas?', answer: 'Bonjorn', options: ['Bonjorn', 'A revêre', 'Grant-marci'], translation: 'Bom dia! Como vai?' },
          { sentence: '— Grant-marci! — ___!', answer: 'De ren', options: ['De ren', 'Bonjorn', 'Se vos plai'], translation: '— Obrigado! — De nada!' },
          { sentence: 'On pan, ___.', answer: 'se vos plai', options: ['se vos plai', 'a revêre', 'de ren'], translation: 'Um pão, por favor.' },
        ],
        voice: {
          bot: 'Bonjorn! Coment vas?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Bien, grant-marci! E tè?', 'bien', 'grant-marci'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bien, grant-marci! E tè?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em francoprovençal: “Bonjorn…”, “Grant-marci…” e uma despedida com “A revêre”.',
      },
      {
        id: 'frp-u1-l2',
        title: 'Je, te, il',
        kind: 'licao',
        words: ['je', 'te', 'il', 's’apelar', 'su', 'bien'],
        cloze: [
          { sentence: '___ m’apèlo Ana.', answer: 'Je', options: ['Je', 'Te', 'Il'], translation: 'Eu me chamo Ana.' },
          { sentence: 'E ___, coment t’apèles?', answer: 'te', options: ['te', 'il', 'je'], translation: 'E você, como se chama?' },
          { sentence: '___ est de Genèva.', answer: 'Il', options: ['Il', 'Je', 'Te'], translation: 'Ele é de Genebra.' },
        ],
        voice: {
          bot: 'Bonjorn! Coment t’apèles?',
          botTranslation: 'Bom dia! Como você se chama?',
          expected: ['Je m’apèlo Ana. E tè?', 'je m’apèlo', 'e tè'],
          hint: 'Diga o seu nome com “Je m’apèlo…” e devolva a pergunta com “E tè?”.',
        },
        communityPrompt: 'Apresente-se em francoprovençal: diga o seu nome com “Je m’apèlo…” e como você está com “Je su bien”.',
      },
      {
        id: 'frp-u1-l3',
        title: 'Prova: bonjorn!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonjorn! Je m’apèlo Pierro. Coment t’apèles?',
          botTranslation: 'Bom dia! Eu me chamo Pierro. Como você se chama?',
          expected: ['Bonjorn! Je m’apèlo Lucia.', 'je m’apèlo', 'bonjorn'],
          hint: 'Devolva o cumprimento (“Bonjorn!”) e diga o nome com “Je m’apèlo…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Je m’apèlo…” e uma despedida.',
      },
    ],
  },
  {
    id: 'frp-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famelye et la mêson',
    emoji: '👪',
    card: {
      id: 'frp-c2',
      title: 'A língua das Fêtes des Guinandes',
      emoji: '🧭',
      history:
        'O francoprovençal viveu cercado pelo francês, que por séculos dominou a escola e a administração nas regiões onde se fala: por isso hoje a maioria dos falantes é idosa, e a língua é passada principalmente em festas e tradições, como as Fêtes des Guinandes (uma celebração de fim de ano saboiana) e canções populares. O Vale de Aosta, na Itália, é o único lugar onde a língua tem algum apoio oficial, ao lado do italiano e do francês.',
      culture_tip:
        'A família é o lugar onde o francoprovençal ainda resiste mais: muitos dos poucos falantes que restam aprenderam a língua ouvindo avós (“lo pâre” e “la mâre” dos pais) em casa, não na escola.',
      grammar_why:
        'O verbo “ter” é “aveir”: “je hai” (eu tenho), “te has” (tu tens), “il hat” (ele tem). Os adjetivos concordam em gênero: “bon” vira “bôna” no feminino, “grant” vira “granta”, “petit” vira “petita”.',
      grammar_examples: [
        ['Je hai on frâre.', 'Tenho um irmão.'],
        ['Ma mêson est petita.', 'A minha casa é pequena.'],
        ['Lo pan est bon.', 'O pão é bom.'],
        ['Je mengio pan et je bêvo édye.', 'Eu como pão e bebo água.'],
      ],
      character_guide: [
        ['-ta / -te', 'o feminino de muitos adjetivos', 'petita (pequena), blanche (branca)'],
        ['on / la', 'artigo indefinido masculino e definido feminino', 'on pan (um pão), la mêson (a casa)'],
      ],
    },
    lessons: [
      {
        id: 'frp-u2-l1',
        title: 'En la mêson',
        kind: 'licao',
        words: ['mêson', 'édye', 'pan', 'vin', 'hai', 'mengier'],
        cloze: [
          { sentence: 'Ma ___ est petita.', answer: 'mêson', options: ['mêson', 'édye', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Je bêvo ___.', answer: 'édye', options: ['édye', 'pan', 'vin'], translation: 'Eu bebo água.' },
          { sentence: 'Je ___ on frâre.', answer: 'hai', options: ['hai', 'su', 'est'], translation: 'Eu tenho um irmão.' },
        ],
        voice: {
          bot: 'Qué mengiês?',
          botTranslation: 'O que você come?',
          expected: ['Je mengio pan.', 'je mengio', 'pan'],
          hint: 'Diga o que come com “Je mengio…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe: “Je mengio…” e “Je bêvo…”.',
      },
      {
        id: 'frp-u2-l2',
        title: 'La famelye',
        kind: 'licao',
        words: ['frâre', 'mâre', 'pâre', 'bêre', 'bon', 'grant'],
        cloze: [
          { sentence: 'Je hai on ___.', answer: 'frâre', options: ['frâre', 'mâre', 'pâre'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Ma ___ est de Lyon.', answer: 'mâre', options: ['mâre', 'pâre', 'frâre'], translation: 'A minha mãe é de Lyon.' },
          { sentence: 'Lo pan est ___.', answer: 'bon', options: ['bon', 'grant', 'petit'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Has-tu on frâre?',
          botTranslation: 'Você tem um irmão?',
          expected: ['Ouè, je hai on frâre.', 'je hai', 'frâre'],
          hint: 'Responda com “Ouè, je hai…” ou “Nan, je hai pas…”.',
        },
        communityPrompt: 'Descreva a sua família: quem você tem, usando “je hai…”.',
      },
      {
        id: 'frp-u2-l3',
        title: 'Prova: la famelye et la mêson',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Has-tu on frâre? Qué mengiês?',
          botTranslation: 'Você tem um irmão? O que você come?',
          expected: ['Ouè, je hai on frâre. Je mengio pan.', 'je hai', 'je mengio'],
          hint: 'Diga quem você tem (“je hai…”) e o que come (“je mengio…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “je hai”, “je su” e “est”.',
      },
    ],
  },
];
