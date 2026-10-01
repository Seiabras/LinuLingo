import type { StorySeed } from '../types';

/** História interativa em letão, C1.1 (lv-h37): as línguas de Rēzekne. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'lv-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Paļdis, Latgola! Trīs valodas vienā pagalmā',
    emoji: '🗣️',
    summary: 'Em Rēzekne, no coração da Latgália, o Linu se hospeda com uma senhora que fala latgaliano, tem uma vizinha de língua russa e o leva a um mercado onde as línguas mudam de banca em banca.',
    cultural_context:
      'A Latgália, região do leste da Letônia, tem o seu latgaliano escrito, que a Lei da Língua de 1999 protege como variante histórica do letão e que muitos consideram uma língua regional; de 1865 a 1904, o Império Russo proibiu imprimi-lo em letras latinas. Em Rēzekne e em outras cidades da região, o latgaliano, o letão padrão e o russo convivem no dia a dia.',
    start: 'start',
    glossary: [
      ['latgaliski', 'em latgaliano'],
      ['paļdis (latg.)', 'obrigado (letão padrão: paldies)'],
      ['Vysu lobu! (latg.)', 'Tudo de bom! (letão padrão: Visu labu!)'],
      ['Latgola (latg.)', 'Latgália (letão padrão: Latgale)'],
      ['volūda (latg.)', 'língua (letão padrão: valoda)'],
      ['rakstu valoda', 'língua escrita'],
      ['literārā valoda', 'língua padrão'],
      ['biezpiens', 'queijo fresco, tipo requeijão de corte'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Linu atbrauca uz Rēzekni, kas atrodas pašā Latgales vidū, un apmetās pie vecas kundzes vārdā Veronika, kura izīrēja istabu savā koka mājā. Kad viņš pasniedza viņai konfekšu kārbu, Veronika plati pasmaidīja un sacīja: “Paļdis!” Linu apmulsa: vārds izklausījās gandrīz kā “paldies”, tomēr ne gluži. “Tā ir latgaliski”, Veronika paskaidroja, “mēs te runājam savā valodā — mūsu ‘volūdā’.”',
        translation:
          'O Linu chegou a Rēzekne, bem no meio da Latgália, e se hospedou com uma senhora idosa chamada Veronika, que alugava um quarto na sua casa de madeira. Quando ele lhe entregou uma caixa de bombons, a Veronika abriu um sorriso e disse: “Paļdis!” O Linu ficou confuso: a palavra soava quase como “paldies” (obrigado), mas não exatamente. “Isso é latgaliano”, explicou a Veronika, “aqui nós falamos a nossa língua — a nossa ‘volūda’.”',
        choices: [
          { text: 'Palūgt, lai Veronika pastāsta vairāk par latgaliešu valodu.', translation: 'Pedir à Veronika que conte mais sobre o latgaliano.', next: 'valoda' },
          { text: 'Iziet pagalmā, kur kāda kaimiņiene māj ar roku.', translation: 'Sair para o quintal, onde uma vizinha acena.', next: 'kaiminiene' },
        ],
      },
      valoda: {
        emoji: '📜',
        text: 'Veronika apsēdās pie galda un stāstīja, ka latgaliešu rakstu valodai ir sena tradīcija, bet no 1865. līdz 1904. gadam to drukāt latīņu burtiem bija aizliegts. “Mūsu grāmatas toreiz veda slepus un pat pārrakstīja ar roku”, viņa teica. Viņa parādīja avīzes lapu, kur bija rakstīts “Latgola” un “latgalīšu volūda”, un paskaidroja, ka latgaliešu valodā bieži ir “o” tur, kur literārajā valodā ir “a”, un “ī” tur, kur ir “ie”. Mūsdienās, viņa lepni piebilda, latgaliski raida radio, izdod grāmatas un to māca dažās skolās.',
        translation:
          'A Veronika sentou-se à mesa e contou que a língua escrita latgaliana tem uma tradição antiga, mas que de 1865 a 1904 foi proibido imprimi-la em letras latinas. “Naquela época, nossos livros eram trazidos às escondidas e até copiados à mão”, disse ela. Mostrou uma página de jornal onde estava escrito “Latgola” e “latgalīšu volūda” e explicou que no latgaliano muitas vezes há “o” onde o letão padrão tem “a”, e “ī” onde ele tem “ie”. Hoje em dia, acrescentou com orgulho, há rádio em latgaliano, publicam-se livros e ele é ensinado em algumas escolas.',
        choices: [
          {
            text: '“Tātad latgaliešu valoda ir vienkārši kļūdaina latviešu valoda.”',
            translation: '“Então o latgaliano é simplesmente um letão cheio de erros.”',
            wrong: 'A Veronika acabou de contar que o latgaliano escrito tem tradição antiga, foi proibido em letras latinas de 1865 a 1904 e hoje tem rádio, livros e ensino. O “o” no lugar do “a” e o “ī” no lugar do “ie” são regras próprias, não erros — e dizer isso a ela seria bem ofensivo.',
          },
          { text: 'Pateikties par stāstu un iet kopā ar Veroniku uz tirgu.', translation: 'Agradecer pela história e ir com a Veronika ao mercado.', next: 'tirgus' },
        ],
      },
      kaiminiene: {
        emoji: '🐈',
        text: 'Pagalmā kaimiņiene Tamāra, pusmūža sieviete ar lielu kaķi rokās, pamāja Linu un teica: “Dobroje utro! Ak, piedod — labrīt!” Viņa smējās un paskaidroja, ka mājās runā krieviski, darbā latviski, bet ar Veroniku — pa pusei latgaliski. “Te, Rēzeknē, daudzi tā dzīvo: trīs valodas vienā pagalmā”, viņa teica. Veronika no loga piebilda, ka Tamāras latgaliešu valoda esot labāka nekā viņas pašas mazmeitai Rīgā.',
        translation:
          'No quintal, a vizinha Tamāra, uma mulher de meia-idade com um gatão no colo, acenou para o Linu e disse: “Dobroje utro! Ah, desculpa — bom dia!” Ela riu e explicou que em casa fala russo, no trabalho letão e com a Veronika meio a meio latgaliano. “Aqui em Rēzekne muita gente vive assim: três línguas num quintal só”, disse. Da janela, a Veronika acrescentou que o latgaliano da Tamāra era, segundo ela, melhor que o da sua própria neta, que mora em Riga.',
        choices: [{ text: 'Iet ar abām sievietēm uz tirgu.', translation: 'Ir ao mercado com as duas mulheres.', next: 'tirgus' }],
      },
      tirgus: {
        emoji: '🍯',
        text: 'Rēzeknes tirgū Veronika un Tamāra pirka biezpienu un medu, un Linu klausījās, kā valodas mainās no galda uz galdu. Pie viena galda runāja krieviski, pie otra latgaliski, bet ar Linu visi pārgāja uz literāro valodu, jo redzēja, ka viņš ir ārzemnieks. Kāds sirms pārdevējs, izdzirdējis, ka Linu mācās latviski, pasmējās: “Tad tev jāmācās trīs valodas, ja gribi saprast Latgali!” Pēc tam viņš pievērsās Veronikai, kaut ko ātri pateica latgaliski, un abi iesmējās.',
        translation:
          'No mercado de Rēzekne, a Veronika e a Tamāra compraram queijo fresco e mel, e o Linu ouvia as línguas mudarem de banca em banca. Numa banca falavam russo, na outra latgaliano, mas com o Linu todos passavam para o letão padrão, porque viam que ele era estrangeiro. Um vendedor grisalho, ao ouvir que o Linu aprendia letão, riu: “Então você vai ter de aprender três línguas, se quiser entender a Latgália!” Depois se virou para a Veronika, disse alguma coisa rápida em latgaliano, e os dois caíram na risada.',
        choices: [
          { text: 'Pajautāt, ko pārdevējs teica, un palūgt iemācīt vienu frāzi.', translation: 'Perguntar o que o vendedor disse e pedir para aprender uma frase.', next: 'fraze' },
          { text: 'Izlikties, ka visu saprata, lai nevienu neapgrūtinātu.', translation: 'Fingir que entendeu tudo, para não incomodar ninguém.', next: 'izlikties' },
        ],
      },
      fraze: {
        emoji: '✍️',
        text: 'Veronika paskaidroja, ka pārdevējs jokojis: pingvīns Latgalē esot retāks putns nekā stārķis ziemā. Tad viņa iemācīja Linu atvadu vārdus: “Vysu lobu!” — tas pats, kas literārajā valodā “Visu labu!”. “Redzi, mūsu rakstībā ir īpašs burts ‘y’, un ‘a’ bieži kļūst par ‘o’”, viņa sacīja. Linu atkārtoja, un pārdevējs tā priecājās, ka iedeva viņam burciņu medus par velti.',
        translation:
          'A Veronika explicou que o vendedor tinha brincado: um pinguim na Latgália seria ave mais rara que cegonha no inverno. Depois ela ensinou ao Linu uma despedida: “Vysu lobu!” — o mesmo que, no letão padrão, “Visu labu!” (Tudo de bom!). “Viu? A nossa escrita tem uma letra especial, o ‘y’, e o ‘a’ muitas vezes vira ‘o’”, disse ela. O Linu repetiu, e o vendedor ficou tão contente que lhe deu um potinho de mel de graça.',
        choices: [{ text: 'Atvadīties no pārdevēja latgaliski.', translation: 'Despedir-se do vendedor em latgaliano.', next: 'final_bom' }],
      },
      izlikties: {
        emoji: '😳',
        text: 'Linu pamāja, it kā visu būtu sapratis, un pat pasmējās līdzi. Pārdevējs to ievēroja, sarauca pieri un pārgāja uz literāro valodu: “Tu taču nesaprati, vai ne?” Linu nosarka un atzinās. Visi laipni pasmējās, bet joks palika nepaskaidrots, jo pie galda jau stāvēja nākamais pircējs.',
        translation:
          'O Linu fez que sim com a cabeça, como se tivesse entendido tudo, e até riu junto. O vendedor percebeu, franziu a testa e passou para o letão padrão: “Você não entendeu, né?” O Linu ficou vermelho e confessou. Todos riram com simpatia, mas a piada ficou sem explicação, porque o próximo freguês já estava na banca.',
        choices: [{ text: 'Atgriezties mājās kopā ar Veroniku.', translation: 'Voltar para casa com a Veronika.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🌉',
        text: 'Kad viņi gāja prom, Linu pagriezās un skaļi sauca: “Vysu lobu!” Pārdevējs pacēla cepuri, Tamāra aplaudēja, un Veronika lepni paziņoja, ka tagad viņš ir “pa pusei latgalietis”. Vakarā viņi visi trīs dzēra tēju Veronikas virtuvē, un saruna nemitīgi pārlēca no vienas valodas uz otru. Linu saprata, ka Latgalē valodas nav robežas starp cilvēkiem, bet gan tilti.',
        translation:
          'Quando estavam indo embora, o Linu se virou e gritou: “Vysu lobu!” O vendedor ergueu o chapéu, a Tamāra aplaudiu, e a Veronika declarou, orgulhosa, que agora ele era “meio latgaliano”. À noite, os três tomaram chá na cozinha da Veronika, e a conversa pulava sem parar de uma língua para outra. O Linu entendeu que, na Latgália, as línguas não são fronteiras entre as pessoas, e sim pontes.',
        ending: { tone: 'bom', title: 'Meio latgaliano', message: 'Você tratou o latgaliano como língua com história e regras próprias, perguntou em vez de fingir — e ganhou mel e um “Vysu lobu!” de volta.' },
      },
      final_neutro: {
        emoji: '🍵',
        text: 'Mājupceļā Linu klusēja un domāja, cik bieži viņš ir izlicies, ka saprot. Veronika to nojauta un pati izstāstīja, ka pārdevējs bija jokojis par pingvīnu Latgalē. “Nākamreiz vienkārši jautā”, viņa teica, “te cilvēki labprāt paskaidro — mums pašiem ir svarīgi, lai mūsu valodu saprastu.” Linu apsolīja, ka tā arī darīs.',
        translation:
          'No caminho de casa, o Linu ficou calado, pensando em quantas vezes já tinha fingido entender. A Veronika percebeu e ela mesma contou que o vendedor tinha brincado sobre um pinguim na Latgália. “Da próxima vez, é só perguntar”, disse ela, “aqui as pessoas explicam com gosto — para nós mesmos é importante que entendam a nossa língua.” O Linu prometeu que faria isso.',
        ending: { tone: 'neutro', title: 'Piada sem tradução', message: 'Fingir que entendeu custou a piada: na Latgália, perguntar é bem-vindo, porque quem fala latgaliano quer ser entendido.' },
      },
    },
  },
];
