import type { UnitSeed } from '../types';
// Unidades 3 e 4 (A2.1 e A2.2) acrescentadas depois das duas unidades originais do A1 — ver
// `incomplete` em index.ts.

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
  {
    id: 'hr-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vrijeme i osjećaji',
    emoji: '🌦️',
    card: {
      id: 'hr-c3',
      title: 'O futuro, o perfeito e o clima de mar a montanha',
      emoji: '🏝️',
      history:
        'A Croácia tem mais de mil ilhas ao longo do Adriático, e o clima muda muito entre a costa e o interior: em Zagreb o inverno é frio e o verão moderado (clima continental), enquanto Split e Dubrovnik, na costa, têm verões quentes e secos e invernos amenos (clima mediterrâneo).',
      culture_tip:
        'Nos dias quentes de verão na costa, é comum fazer uma pausa à tarde (a “fjaka”, palavra dálmata para uma preguiça tranquila) antes de voltar às atividades à noite, quando o calor diminui.',
      grammar_why:
        'O futuro simples (futur I) usa as formas curtas de “htjeti” (ću, ćeš, će...) junto do infinitivo: no croata padrão, o infinitivo perde o “-i” final mas fica separado por um espaço, “učit ću” (diferente do sérvio, que junta tudo: “učiću”). O perfeito, o passado do dia a dia, usa o presente de “biti” (sam, si, je...) mais um participle que concorda em gênero: “učio sam” (eu estudei, fala um homem) ou “učila sam” (fala uma mulher).',
      grammar_examples: [
        ['Sutra ću učiti hrvatski.', 'Amanhã vou estudar croata.'],
        ['Učit ću cijeli dan.', 'Vou estudar o dia todo.'],
        ['Jučer sam bio umoran.', 'Ontem eu estava cansado. (fala um homem)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hr-u3-l1',
        title: 'Kakvo će biti vrijeme?',
        kind: 'licao',
        words: ['kiša', 'snijeg', 'sunce', 'vjetar', 'hladan', 'topao'],
        cloze: [
          { sentence: 'Sutra će biti ___.', answer: 'kiša', options: ['kiša', 'snijeg', 'sunce'], translation: 'Amanhã vai chover (lit. será chuva).' },
          { sentence: 'Zimi pada ___ u planini.', answer: 'snijeg', options: ['snijeg', 'kiša', 'sunce'], translation: 'No inverno neva na montanha.' },
          { sentence: 'Danas ima ___ i toplo je.', answer: 'sunce', options: ['sunce', 'vjetar', 'snijeg'], translation: 'Hoje tem sol e está quente.' },
        ],
        voice: {
          bot: 'Kakvo će biti vrijeme sutra?',
          botTranslation: 'Qual vai ser o tempo amanhã?',
          expected: ['Sutra će biti kiša.', 'će biti', 'kiša'],
          hint: 'Responda com “će biti” + o substantivo do tempo.',
        },
        communityPrompt: 'Descreva o tempo de hoje em croata e diga com “Sutra će...” o que você acha que vai acontecer amanhã.',
      },
      {
        id: 'hr-u3-l2',
        title: 'Jučer sam bio...',
        kind: 'licao',
        words: ['sretan', 'tužan', 'umoran', 'ljut', 'gladan', 'glava'],
        cloze: [
          { sentence: 'Danas sam veoma ___.', answer: 'sretan', options: ['sretan', 'tužan', 'ljut'], translation: 'Hoje estou muito feliz.' },
          { sentence: 'Boli me ___.', answer: 'glava', options: ['glava', 'ruka', 'usta'], translation: 'Dói-me a cabeça.' },
          { sentence: 'Jučer sam bio ___ nakon posla.', answer: 'umoran', options: ['umoran', 'sretan', 'gladan'], translation: 'Ontem eu estava cansado depois do trabalho. (fala um homem)' },
        ],
        voice: {
          bot: 'Kako si se osjećao jučer?',
          botTranslation: 'Como você se sentiu ontem?',
          expected: ['Jučer sam bio umoran.', 'bio sam', 'umoran'],
          hint: 'Use o perfeito: “(Ja) sam bio/bila...” com um adjetivo.',
        },
        communityPrompt: 'Escreva duas frases no perfeito sobre como você se sentiu ontem (“Jučer sam bio/bila...”) e uma no presente sobre como se sente hoje.',
      },
      {
        id: 'hr-u3-l3',
        title: 'Test: vrijeme i osjećaji',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kakvo je vrijeme bilo jučer i kakvo će biti sutra?',
          botTranslation: 'Como estava o tempo ontem e como vai estar amanhã?',
          expected: ['Jučer je bila kiša, a sutra će biti sunce.', 'bila', 'će biti'],
          hint: 'Combine o perfeito (“jučer je bila...”) com o futuro (“sutra će biti...”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: como estava o tempo ontem (perfeito) e como vai estar amanhã (futuro).',
      },
    ],
  },
  {
    id: 'hr-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Grad, posao i brojevi',
    emoji: '🏙️',
    card: {
      id: 'hr-c4',
      title: 'O instrumental: “com leite”, “de autocarro”',
      emoji: '🧺',
      history:
        'O Dolac, em Zagreb, é o maior mercado aberto da Croácia, inaugurado em 1930 bem acima da Praça Principal (Trg bana Jelačića). É conhecido como "o estômago de Zagreb": debaixo dos famosos guarda-sóis vermelhos, produtores vendem fruta, legumes e queijo fresco todas as manhãs.',
      culture_tip:
        'Ao comprar no Dolac ou em qualquer tržnica croata, é comum perguntar “Koliko košta?” (quanto custa?). Pechinchar levemente é aceitável em compras grandes, mas não em preços já marcados.',
      grammar_why:
        'O instrumental marca “com” (companhia ou combinação), com a preposição “s” ou “sa” (usa-se “sa” antes de palavra que comece com s, š, z ou ž): os femininos em “-a” trocam para “-om” (kava → kavom), e os masculinos/neutros também recebem “-om/-em” (sir → sirom, mlijeko → mlijekom). Sem preposição, o instrumental também marca o meio de transporte: “putujem autobusom” (viajo de ônibus).',
      grammar_examples: [
        ['Jedem kruh sa sirom.', 'Eu como pão com queijo.'],
        ['Pijem kavu s mlijekom.', 'Eu bebo café com leite.'],
        ['Putujem autobusom na tržnicu.', 'Eu viajo de ônibus ao mercado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hr-u4-l1',
        title: 'U gradu',
        kind: 'licao',
        words: ['trg', 'tržnica', 'crkva', 'škola', 'bolnica', 'aerodrom'],
        cloze: [
          { sentence: '___ je velika zgrada u centru.', answer: 'Škola', options: ['Škola', 'Crkva', 'Bolnica'], translation: 'A escola é um prédio grande no centro.' },
          { sentence: '___ je stara i lijepa.', answer: 'Crkva', options: ['Crkva', 'Škola', 'Tržnica'], translation: 'A igreja é antiga e bonita.' },
          { sentence: '___ je velik.', answer: 'Aerodrom', options: ['Aerodrom', 'Trg', 'Tržnica'], translation: 'O aeroporto é grande.' },
        ],
        voice: {
          bot: 'Gdje kupuješ povrće?',
          botTranslation: 'Onde você compra verduras?',
          expected: ['Kupujem povrće na tržnici.', 'tržnici', 'tržnica'],
          hint: 'Responda com “na tržnici” (no mercado).',
        },
        communityPrompt: 'Descreva o seu bairro: quais destes lugares (tržnica, crkva, škola, bolnica) tem perto da sua casa.',
      },
      {
        id: 'hr-u4-l2',
        title: 'Zanimanja i kupovina',
        kind: 'licao',
        words: ['liječnik', 'učitelj', 'kuhar', 'kupovati', 'prodavati', 'dvadeset'],
        cloze: [
          { sentence: '___ radi u bolnici.', answer: 'Liječnik', options: ['Liječnik', 'Učitelj', 'Kuhar'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Kuhar ___ svježe povrće na tržnici.', answer: 'kupuje', options: ['kupuje', 'prodaje', 'uči'], translation: 'O cozinheiro compra verduras frescas no mercado.' },
          { sentence: 'Ona ima ___ godina.', answer: 'dvadeset', options: ['dvadeset', 'deset', 'pet'], translation: 'Ela tem vinte anos.' },
        ],
        voice: {
          bot: 'Čime se baviš? Kakav je tvoj prijatelj?',
          botTranslation: 'O que você faz? Qual é a profissão do seu amigo?',
          expected: ['Ja sam učitelj, a prijatelj mi je liječnik.', 'učitelj', 'liječnik'],
          hint: 'Diga a sua profissão e a de um amigo com “sam...”.',
        },
        communityPrompt: 'Escreva sobre três profissões (liječnik, učitelj, kuhar, pastir, pisac) e diga com o que cada uma trabalha, usando “s/sa” + instrumental.',
      },
      {
        id: 'hr-u4-l3',
        title: 'Test: grad, posao i brojevi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Što ćeš raditi sutra na tržnici?',
          botTranslation: 'O que você vai fazer amanhã no mercado?',
          expected: ['Sutra ću kupiti kruh sa sirom.', 'ću kupiti', 'sa sirom'],
          hint: 'Combine o futuro (“ću kupiti”) com o instrumental (“sa sirom”).',
        },
        communityPrompt: 'Escreva cinco frases usando o futuro (ću/ćeš/će), o perfeito (sam/si/je + participle) e o instrumental (s/sa + instrumental) sobre um dia na cidade.',
      },
    ],
  },
];
