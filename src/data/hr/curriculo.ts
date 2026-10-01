import type { UnitSeed } from '../types';

/**
 * Trilha do croata: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_HR: UnitSeed[] = [
  {
    id: 'hr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bok! Prvi koraci',
    emoji: '👋',
    card: {
      id: 'hr-c1',
      title: 'Do glagolítico ao alfabeto de Gaj',
      emoji: '🇭🇷',
      history:
        'O croata é uma língua eslava meridional. O croata, o sérvio, o bósnio e o montenegrino padrão se baseiam no mesmo grupo de dialetos (o chtokaviano) e se entendem sem dificuldade; cada país tem a sua norma e o seu nome para a língua. Por séculos, na Croácia se escreveu também em glagolítico, o primeiro alfabeto eslavo: a Tábua de Baška, de por volta do ano 1100, é um dos textos croatas mais antigos. No século XIX, Ljudevit Gaj propôs o alfabeto latino com č, ć, š, ž e đ usado até hoje. O croata é a língua oficial da Croácia e, desde 2013, uma das línguas oficiais da União Europeia.',
      culture_tip:
        '“Bok” é o oi e o tchau entre amigos. Com desconhecidos, diga “Dobar dan” e trate a pessoa por “vi”, com o verbo no plural. Na Croácia, “ići na kavu” (ir tomar um café) é um programa social que pode durar horas numa esplanada.',
      grammar_why:
        'O croata não tem artigos: “pas” é “o cachorro” ou “um cachorro”. A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair. O “sou” é uma palavrinha átona, “sam”, que não pode abrir a frase: diz-se “Ja sam Ana” ou “Iz Zagreba sam”. O nome se diz com um verbo reflexivo: “zovem se Ana” (eu me chamo Ana).',
      grammar_examples: [
        ['Bok! Zovem se Ana.', 'Oi! Eu me chamo Ana.'],
        ['Kako se zoveš?', 'Como você se chama?'],
        ['On je iz Splita, ona je iz Zagreba.', 'Ele é de Split, ela é de Zagreb.'],
        ['Dobro, hvala. A ti?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['č / ć', '“tch” duro / “tch” macio, quase “ti”', 'četiri, noć'],
        ['dž / đ', '“dj” duro / “dj” macio', 'doviđenja'],
        ['š / ž', '“ch” de “chá” / “j” de “já”', 'šest, živim'],
        ['j', '“i” curto de “pai”', 'ja (eu), majka'],
        ['lj / nj', '“lh” / “nh”', 'prijatelj, njihov'],
        ['c', '“ts” de “tsunami”', 'otac (pai)'],
        ['h', '“rr” aspirado', 'hvala, kruh'],
        ['r entre consoantes', 'o “r” pode ser a vogal da sílaba', 'crn (preto), četvrtak'],
      ],
    },
    lessons: [
      {
        id: 'hr-u1-l1',
        title: 'Bok, hvala, doviđenja!',
        kind: 'licao',
        words: ['bok', 'dobar dan', 'dobra večer', 'laku noć', 'doviđenja', 'hvala'],
        cloze: [
          { sentence: '___, Ivana! Kako si?', answer: 'Bok', options: ['Bok', 'Laku noć', 'Hvala'], translation: 'Oi, Ivana! Como vai?' },
          { sentence: 'Već je kasno. ___!', answer: 'Laku noć', options: ['Laku noć', 'Dobar dan', 'Bok'], translation: 'Já é tarde. Boa noite!' },
          { sentence: 'Puno ___!', answer: 'hvala', options: ['hvala', 'bok', 'doviđenja'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Bok! Kako si?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobro, hvala! A ti?', 'dobro', 'hvala'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobro, hvala! A ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em croata: um de dia (“Dobar dan…”), um à noite (“Dobra večer…”) e uma despedida (“Doviđenja” ou “Laku noć”).',
      },
      {
        id: 'hr-u1-l2',
        title: 'Ja, ti, on, ona',
        kind: 'licao',
        words: ['ja', 'ti', 'on', 'ona', 'zvati se', 'ime'],
        cloze: [
          { sentence: '___ sam Ivana.', answer: 'Ja', options: ['Ja', 'Ti', 'On'], translation: 'Eu sou a Ivana.' },
          { sentence: 'A ___? Kako se zoveš?', answer: 'ti', options: ['ti', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je iz Splita. To je moj brat.', answer: 'On', options: ['On', 'Ona', 'Ja'], translation: 'Ele é de Split. É o meu irmão.' },
        ],
        voice: {
          bot: 'Bok! Kako se zoveš?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Zovem se Ana. A ti?', 'zovem se', 'a ti'],
          hint: 'Diga o seu nome com “Zovem se…” e devolva a pergunta com “A ti?”.',
        },
        communityPrompt: 'Apresente-se em croata: diga o seu nome com “Zovem se…” e pergunte o nome de alguém com “Kako se zoveš?”.',
      },
      {
        id: 'hr-u1-l3',
        title: 'Test: prvi koraci',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bok! Zovem se Luka. Kako se zoveš i odakle si?',
          botTranslation: 'Oi! Eu me chamo Luka. Como você se chama e de onde você é?',
          expected: ['Bok! Zovem se Lucija i ja sam iz São Paula.', 'zovem se', 'iz', 'bok'],
          hint: 'Devolva o cumprimento (“Bok!”), diga o nome com “Zovem se…” e a cidade com “Ja sam iz…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Zovem se…”, cidade com “Ja sam iz…” e uma despedida.',
      },
    ],
  },
  {
    id: 'hr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Obitelj i kuća',
    emoji: '👪',
    card: {
      id: 'hr-c2',
      title: 'Três gêneros, “moj / moja / moje” e o “nemam”',
      emoji: '🧭',
      history:
        'O croata padrão é ijekaviano: onde o sérvio da Sérvia diz “mleko” e “gde”, o croata diz “mlijeko” e “gdje”. Além do chtokaviano, que é a base da língua padrão, a Croácia tem outros dois grandes grupos de dialetos: o kajkaviano, em volta de Zagreb, e o tchakaviano, no litoral e nas ilhas. Os três ganharam nome pela palavra que usam para “o quê”: “kaj”, “ča” e “što”.',
      culture_tip:
        'Na Dalmácia, no litoral, é comum ouvir a “klapa”: grupos de vozes que cantam sem instrumentos, em harmonia. O canto de klapa está na lista do patrimônio imaterial da UNESCO.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (grad, brat), -a → feminino (kuća, voda), -o/-e → neutro (mlijeko, ime). Há exceções, como “obitelj” (família), que é feminino. O possessivo concorda: “moj brat”, “moja sestra”, “moje ime”. Para negar, “ne” antes do verbo, mas alguns verbos grudam a negação: “nemam” (não tenho), “nisam” (não sou), “neću” (não quero).',
      grammar_examples: [
        ['Moja obitelj je velika.', 'A minha família é grande.'],
        ['Imam brata i sestru.', 'Tenho um irmão e uma irmã.'],
        ['Mlijeko je bijelo.', 'O leite é branco.'],
        ['Ne znam.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -u', 'depois de “imam” (tenho), a palavra feminina muda: é o acusativo', 'sestra → imam sestru'],
        ['ne + sam = nisam', 'algumas negações viram uma palavra só', 'nemam, nisam, neću'],
      ],
    },
    lessons: [
      {
        id: 'hr-u2-l1',
        title: 'Moja obitelj',
        kind: 'licao',
        words: ['obitelj', 'majka', 'otac', 'brat', 'sestra', 'imati'],
        cloze: [
          { sentence: 'Moja ___ se zove Ivana.', answer: 'majka', options: ['majka', 'otac', 'brat'], translation: 'A minha mãe se chama Ivana.' },
          { sentence: 'Ja ___ brata i sestru.', answer: 'imam', options: ['imam', 'sam', 'idem'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Moj ___ je iz Splita.', answer: 'otac', options: ['otac', 'sestra', 'majka'], translation: 'O meu pai é de Split.' },
        ],
        voice: {
          bot: 'Imaš li brata ili sestru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Da, imam brata i sestru.', 'imam', 'brata', 'sestru'],
          hint: 'Responda com “Da, imam…” ou “Ne, nemam…”.',
        },
        communityPrompt: 'Descreva a sua família em croata: se você tem irmão (brat) ou irmã (sestra) e como se chamam os seus pais (“Moja majka se zove…”).',
      },
      {
        id: 'hr-u2-l2',
        title: 'Kod kuće',
        kind: 'licao',
        words: ['kuća', 'voda', 'kruh', 'mlijeko', 'sir', 'voljeti'],
        cloze: [
          { sentence: 'Moja ___ je mala.', answer: 'kuća', options: ['kuća', 'voda', 'mlijeko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Pijem ___.', answer: 'vodu', options: ['vodu', 'kruh', 'sir'], translation: 'Eu bebo água.' },
          { sentence: 'Jedem kruh i ___.', answer: 'sir', options: ['sir', 'vodu', 'mlijeko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Što jedeš za doručak?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jedem kruh i sir.', 'jedem', 'kruh', 'sir'],
          hint: 'Diga o que come com “Jedem…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jedem…” e “Pijem…”.',
      },
      {
        id: 'hr-u2-l3',
        title: 'Test: obitelj i kuća',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Pričaj o obitelji: imaš li brata ili sestru?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Da, imam sestru. Zove se Marija.', 'imam', 'zove se'],
          hint: 'Diga se tem irmãos (“imam…”) e o nome deles (“zove se…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “imam”, “zove se” e “je”.',
      },
    ],
  },
];
