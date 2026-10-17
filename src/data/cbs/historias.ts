import type { StorySeed } from '../types';

/**
 * Histórias interativas do huni kuĩ, uma por subnível (A1.1 ao A2.2). As siglas das fontes e as regras
 * de grafia estão no cabeçalho de vocabulario.ts. Todas as falas são frases das fontes (passadas para a
 * grafia prática pela regra); a fonte de cada uma está no comentário do nó. As duas do A2 são textos
 * huni kuĩ de verdade: as adivinhas e a história do povo sovino, anotadas por Capistrano de Abreu
 * (1914) e reescritas na grafia de hoje por Joaquim Paulo de Lima Kaxinawá ([KAX14] Anexo 2; [KAX11]
 * cap. IV). As respostas erradas também são frases das fontes, só que fora de lugar.
 */
export const STORIES_CBS: StorySeed[] = [
  {
    id: 'cbs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txai, na aldeia',
    emoji: '🏞️',
    summary: 'Sua canoa chega a uma aldeia huni kuĩ, e um primo te recebe em casa.',
    // [KAX14] 67 e 70 (txai, o primo cruzado; também o avô materno do homem); [KAX11] 18-20.
    cultural_context:
      'Entre os huni kuĩ, “txai” é um parente de verdade: o primo cruzado, filho do irmão da mãe ou da irmã do pai. Fora das aldeias, a palavra ficou conhecida como “amigo, parceiro”, e é assim que muitos visitantes são chamados.',
    start: 'inicio',
    nodes: {
      inicio: {
        // [KAX14] 70 (txai)
        text: 'Txai!',
        translation: 'Primo!',
        emoji: '🛶',
        choices: [
          { text: 'Txai!', translation: 'Primo!', next: 'casa' },
          // [KAX14] 70
          { text: 'Ẽ aĩ.', translation: 'Minha esposa.', wrong: 'Isso quer dizer “minha esposa”. Devolva o cumprimento: “Txai!”.' },
        ],
      },
      casa: {
        // [KAX14h] 36, ex. 1
        text: 'Ẽ hiwe hawerua.',
        translation: 'Minha casa é bonita.',
        emoji: '🏠',
        choices: [
          // [KAX14] 175, ex. 899
          { text: 'Mĩ hiwe keyatapaki.', translation: 'Sua casa é alta.', next: 'banana' },
          // [KAX14] 81, ex. 321
          { text: 'Ha beruhayaki.', translation: 'Ele tem olho.', wrong: 'A conversa é sobre a casa. Elogie: “Mĩ hiwe keyatapaki” (sua casa é alta).' },
        ],
      },
      banana: {
        // [KAX14] 77, ex. 297
        text: 'Na mani piwe.',
        translation: 'Coma esta banana.',
        emoji: '🍌',
        choices: [
          // [KAX14] 143, ex. 735: aceitando, já comendo
          { text: 'Ẽ nami piai.', translation: 'Eu estou comendo carne.', wrong: 'Você recebeu uma banana, não carne. Aceite oferecendo de volta: “Ha mani piwe” (coma essa banana).' },
          // [KAX14] 77, ex. 300
          { text: 'Ha mani piwe.', translation: 'Coma essa banana. (oferecendo de volta)', next: 'final' },
        ],
      },
      final: {
        // [KAX14] 69 (“ɨ̃ ɨwa”, minha mãe)
        text: 'Ẽ ewa.',
        translation: 'Minha mãe. (apresentando a mãe)',
        emoji: '👩',
        ending: {
          tone: 'bom',
          title: 'Txai na aldeia',
          message: 'Você respondeu ao “txai”, elogiou a casa, dividiu a banana e conheceu a mãe do seu primo.',
        },
      },
    },
    glossary: [
      ['txai', 'primo cruzado; amigo, parceiro'],
      ['hiwe', 'casa'],
      ['hawerua', 'bonito'],
      ['mani', 'banana'],
      ['ewa', 'mãe'],
    ],
  },
  {
    id: 'cbs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Takara xarabu',
    emoji: '🐔',
    summary: 'Um dia no quintal da aldeia: contar as galinhas, dividir a comida e ver a chuva passar.',
    // [KAX14] 40 (“takara-ʃarabu”, galinhas: “xarabu” é o plural das coisas que não são gente) e 94.
    cultural_context:
      'Em hãtxa kuĩ, o plural de gente é “-bu” (“hunibu”, homens), mas galinhas e flechas pedem “xarabu”: “takara xarabu”. Os números de um a dez foram organizados pelos professores huni kuĩ para a escola.',
    start: 'inicio',
    nodes: {
      inicio: {
        // [KAX14] 40
        text: 'Takara xarabu.',
        translation: 'Várias galinhas.',
        emoji: '🐔',
        choices: [
          // [KAX14] 95, ex. 407-410
          { text: 'Besti, rabe, tsamĩ, ketash.', translation: 'Uma, duas, três, quatro.', next: 'banana' },
          // [KAX14] 81, ex. 322
          { text: 'Ha mekĩyaki.', translation: 'Ele tem mão.', wrong: 'A conversa é sobre as galinhas. Conte: “Besti, rabe, tsamĩ, ketash”.' },
        ],
      },
      banana: {
        // [KAX14] 77, ex. 303
        text: 'Uwa mani piwe.',
        translation: 'Coma aquela banana. (a que está longe)',
        emoji: '🍌',
        choices: [
          // [KAX14] 77, ex. 297
          { text: 'Na mani piwe.', translation: 'Coma esta banana. (a que está perto de mim)', next: 'chuva' },
          // [KAX14] 95, ex. 416
          { text: 'Nati.', translation: 'Dez.', wrong: 'Ninguém está contando agora. Responda apontando a banana perto de você: “Na mani piwe”.' },
        ],
      },
      chuva: {
        // [KAX14] 181, ex. 920
        text: 'Ui ishuki.',
        translation: 'Choveu. (acabou de parar)',
        emoji: '🌧️',
        choices: [
          // [CAM05] 62, ex. 15
          { text: 'Ni merã ẽ kai.', translation: 'Vou pela mata adentro.', next: 'final' },
          // [KAX14] 183, ex. 928
          { text: 'Huni rauya ipauni kiaki.', translation: 'Dizem que o homem conhecia remédios, há muito tempo.', wrong: 'Essa frase conta uma história antiga (“kiaki”). Agora é hora de sair: “Ni merã ẽ kai”.' },
        ],
      },
      final: {
        // [KAX14] 174, ex. 893
        text: 'Mexu kiri hu shani kiaki.',
        translation: 'Dizem que ele vem amanhã.',
        emoji: '🌳',
        ending: {
          tone: 'bom',
          title: 'Takara xarabu',
          message: 'Você contou as galinhas, usou “na” e “uwa” para apontar perto e longe e, depois da chuva, foi para a mata. Repare no “kiaki” do fim: quem falou só ouviu dizer que ele vem amanhã.',
        },
      },
    },
    glossary: [
      ['takara', 'galinha'],
      ['xarabu', 'vários (plural das coisas)'],
      ['na / uwa', 'este / aquele'],
      ['ui', 'chuva'],
      ['ni', 'mata'],
    ],
  },
  {
    id: 'cbs-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hawa ixta?',
    emoji: '🔥',
    summary: 'À noite, perto do fogo, uma velha propõe as adivinhas dos antigos: “o que é, o que é?”.',
    // [KAX14] 286-289, Anexo 2: adivinhas 5.861, 5.862, 5.863 e 5.869 de Capistrano de Abreu (1914, p.
    // 520-522), com a leitura de Joaquim Kaxinawá; “Haskamã!”, interjeição de surpresa, [KAX14] 140.
    cultural_context:
      'Estas adivinhas foram anotadas por Capistrano de Abreu em 1914, com dois jovens huni kuĩ do rio Ibuaçu, e voltaram ao povo um século depois, na gramática de Joaquim Kaxinawá. Todas começam com “Hawa ixta…?”, “o que é, o que é…?”, e a resposta leva o “-rã”, que destaca a palavra.',
    start: 'inicio',
    nodes: {
      inicio: {
        // adivinha 5.861 (“hawa iʃta ha-ø wɨ̃ hiwɨ a bu mɨ̃ kã i? – hiwɨ-rã”)
        text: 'Hawa ixta, ha wẽ hiweabu mẽ kãi?',
        translation: 'O que é, o que é: onde eles moram?',
        emoji: '🏠',
        choices: [
          { text: 'Hiwerã.', translation: 'A casa.', next: 'rede' },
          { text: 'Txirã.', translation: 'O fogo.', wrong: 'Ninguém mora no fogo! Onde a gente mora? Na casa: “Hiwerã”.' },
        ],
      },
      rede: {
        // adivinha 5.862 (“hawa iʃta buʂka rabɨ ya mɨ kã i? – risi-rã”)
        text: 'Hawa ixta, bushka rabe ya me kãi?',
        translation: 'O que é, o que é, que tem duas cabeças?',
        emoji: '🛏️',
        choices: [
          { text: 'Hiwerã.', translation: 'A casa.', wrong: 'A casa não tem duas pontas amarradas. Pense na rede de dormir: “Risirã”.' },
          { text: 'Risirã.', translation: 'A rede de dormir.', next: 'fogo' },
        ],
      },
      fogo: {
        // adivinha 5.863 (“hawa iʃta buʂka taʃi mɨ kã i? – tʃi-rã”)
        text: 'Hawa ixta, bushka taxi me kãi?',
        translation: 'O que é, o que é, que tem a cabeça vermelha?',
        emoji: '🔥',
        choices: [
          { text: 'Txirã.', translation: 'O fogo.', next: 'olho' },
          { text: 'Risirã.', translation: 'A rede de dormir.', wrong: 'A rede não é vermelha na ponta. O que tem a “cabeça” vermelha é o fogo: “Txirã”.' },
        ],
      },
      olho: {
        // adivinha 5.869 (“hawa iʃta ha-ø wɨ̃ uĩ mis bu mɨ̃ kã i? – bɨru-rã”) e 5.870 (pabĩki, orelha)
        text: 'Hawa ixta, ha wẽ uĩmisbu mẽ kãi?',
        translation: 'O que é, o que é: com que se enxerga?',
        emoji: '👁️',
        choices: [
          { text: 'Pabĩkirã.', translation: 'A orelha.', wrong: 'Com a orelha a gente ouve (“nĩka”). Para enxergar (“uĩ”), é o olho: “Berurã”.' },
          { text: 'Berurã.', translation: 'O olho.', next: 'final' },
        ],
      },
      final: {
        text: 'Haskamã!',
        translation: 'Olha só! (surpresa)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Hawa ixta?',
          message: 'Você acertou quatro adivinhas dos antigos: a casa, a rede, o fogo e o olho. Repare como todas abrem com a palavra de pergunta, “hawa” (o que), e como a resposta leva o “-rã”.',
        },
      },
    },
    glossary: [
      ['hawa ixta', 'o que é, o que é'],
      ['bushka', 'cabeça'],
      ['risi', 'rede de dormir'],
      ['txi', 'fogo'],
      ['beru', 'olho'],
      ['pabĩki', 'orelha'],
    ],
  },
  {
    id: 'cbs-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Yauxiku nawa',
    emoji: '🌽',
    summary: 'A história dos antigos: o povo sovino guarda os legumes, e os huni kuĩ dão um jeito de plantar a macaxeira.',
    // [KAX11] 81-86: frases 1 a 10 de “Yauxiku nawa”, de Capistrano de Abreu, na grafia atual e com a
    // tradução de Joaquim Kaxinawá; “inu” (e) escrito “inũ”, e “e” (eu) escrito “ẽ”, pela regra.
    cultural_context:
      'Esta é a primeira parte de “Yauxiku nawa”, a história que conta como os huni kuĩ conseguiram a macaxeira, a banana, o milho e, mais adiante, o fogo. Capistrano de Abreu a anotou em 1914, e Joaquim Kaxinawá a reescreveu em 2011 para as escolas das aldeias. Como toda história dos antigos, as frases terminam em “kiaki”.',
    start: 'inicio',
    nodes: {
      inicio: {
        // frase 1, [KAX11] 81-82
        text: 'Yauxiku nawa hawe inaburã, runu inũ, bina inũ, kape inũ, runuwã inũ, shawã inũ, inu inũ, yawa inũ, awa inũ, txashu inũ, hati inikiaki.',
        translation: 'O povo sovino tinha muitas criações: cobra, marimbondo, jacaré, cobra grande, arara, onça, queixada, anta e veado.',
        emoji: '🐍',
        choices: [
          // frase 2, [KAX11] 82-83
          { text: 'Yauxiku nawarã, mawa yunu rasi hayake, huni kuĩ yunumake.', translation: 'O povo sovino tinha vários legumes, e os huni kuĩ não tinham.', next: 'fome' },
          // [KAX14] 181, ex. 920
          { text: 'Ui ishuki.', translation: 'Choveu.', wrong: 'A história não fala de chuva. O que mais o povo sovino tinha? Muitos legumes: “Yauxiku nawarã, mawa yunu rasi hayake…”.' },
        ],
      },
      fome: {
        // frase 3, [KAX11] 83-84
        text: 'Huni kuĩbu bunikĩ, yauxiku nawã hiwetã kashu, atsa ea akĩ.',
        translation: 'Os huni kuĩ, com fome, foram à casa do povo sovino pedir macaxeira.',
        emoji: '🏠',
        choices: [
          // frase 3, a fala
          { text: 'Yauxiku nawã, ea atsa inãwẽ, ẽ buniairã!', translation: 'Povo sovino, me dê macaxeira, eu estou com fome!', next: 'pequena' },
          // [KAX14] 77, ex. 297
          { text: 'Na mani piwe.', translation: 'Coma esta banana.', wrong: 'Quem está com fome são os huni kuĩ. Eles pedem: “Yauxiku nawã, ea atsa inãwẽ!” (me dê macaxeira!).' },
        ],
      },
      pequena: {
        // frase 4, [KAX11] 84
        text: 'Haskaya ha yauxiku nawã, atsa ewapama shuishu inã.',
        translation: 'Então o povo sovino deu uma macaxeira pequena, assada.',
        emoji: '🥔',
        choices: [
          // frase 6, [KAX11] 84
          { text: 'Ẽ atsa ea akarã, ewapama shuishu ea inãshuki.', translation: 'Eu pedi macaxeira, e ele me deu uma pequena, assada.', next: 'plano' },
          // [KAX11] 59, ex. 33
          { text: 'Shashu ewapa.', translation: 'Canoa grande.', wrong: 'A macaxeira era pequena, não grande. O homem volta e conta aos parentes: “Ẽ atsa ea akarã, ewapama shuishu ea inãshuki”.' },
        ],
      },
      plano: {
        // frase 7, [KAX11] 85
        text: 'Haskatã xinãkĩ: mexumerã atsa tashu yumetsu nukawe itã.',
        translation: 'Assim pensaram: de noite, vamos roubar a maniva da macaxeira.',
        emoji: '🌙',
        choices: [
          // frase 8, [KAX11] 85
          { text: 'Mexuaya huni rabe kashu, atsa mebi sekeshu, beshu hatu baiyanu banakĩ atã.', translation: 'Escurecendo, dois homens foram, pegaram os galhos da macaxeira, trouxeram e plantaram no roçado deles.', next: 'banana' },
          // [KAX14] 173, ex. 885
          { text: 'Mexu kiri naxi shani kiki.', translation: 'Amanhã ele vai tomar banho.', wrong: 'O plano é para esta noite, e não é um banho! Siga a história: dois homens vão buscar a maniva — “Mexuaya huni rabe kashu…”.' },
        ],
      },
      banana: {
        // frase 9, [KAX11] 85-86
        text: 'Yauxiku nawa mani ea anukawe ika, bushu ea akabu.',
        translation: '“Vamos pedir banana ao povo sovino”, disseram, e foram pedir.',
        emoji: '🍌',
        choices: [
          // frase 10, [KAX11] 86
          { text: 'Ha kashu ea akaburã, eskarabe huxiã shuishu, hatu inãpauni kiaki.', translation: 'Quando foram pedir, ele assou um pouquinho de banana madura e deu a eles.', next: 'final' },
          // [KAX11] Tabela 1, linha 64
          { text: 'Bukawẽ!', translation: 'Vamos!', wrong: 'Eles já foram. O que o povo sovino fez? Deu só um pouquinho: “Ha kashu ea akaburã, eskarabe huxiã shuishu…”.' },
        ],
      },
      final: {
        // frase 8, de novo: o roçado plantado
        text: 'Hatu baiyanu banakĩ atã.',
        translation: 'E plantaram no roçado deles.',
        emoji: '🌱',
        ending: {
          tone: 'bom',
          title: 'Yauxiku nawa',
          message: 'O povo sovino dava só um pouquinho, mas os huni kuĩ plantaram a maniva no próprio roçado. É assim que a história explica de onde veio a macaxeira — e ela continua, com a banana, o milho e o fogo.',
        },
      },
    },
    glossary: [
      ['yauxiku nawa', 'o povo sovino'],
      ['yunu', 'legumes'],
      ['atsa', 'macaxeira'],
      ['ewapama', 'pequeno'],
      ['bai', 'roçado'],
      ['kiaki', 'fim das frases das histórias dos antigos'],
    ],
  },
];
