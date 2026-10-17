import type { StorySeed } from '../types';

/**
 * Histórias interativas do huni kuĩ, uma por subnível (A1.1 ao B1.4). As siglas das fontes e as regras
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
        // [KAX14] 37, ex. 1
        text: 'Ẽ hiwe hawẽrua.',
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
      ['hawẽrua', 'bonito'],
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

  // ══ B1: a continuação de “Yauxiku nawa”, frase a frase como em [KAX11] cap. IV, p. 86-123 (a lista
  // numerada de cada parte, na grafia atual, conferida na imagem; a tradução é a de Joaquim Kaxinawá,
  // às vezes encurtada). Nas respostas erradas entram frases de outras partes da mesma história ou de
  // [KAX14], fora de lugar.
  {
    id: 'cbs-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Nishekepã',
    emoji: '🦎',
    summary: 'O calango vai à casa do povo sovino, ajuda a debulhar o milho e esconde um grão na boca.',
    // [KAX11] 80 (os narradores de Capistrano, os jovens Muru e Ibã, do rio Ibuaçu) e 86, parte 2, frases
    // 1-3 (o homem que roubou macaxeira, picado pelos marimbondos, caiu na água e virou jacaré: “os mondrongos
    // que o jacaré tem, foram os marimbondos que o ferraram”).
    cultural_context:
      'Logo antes deste trecho, a história explica por que o jacaré tem a pele cheia de calombos: um homem que foi roubar macaxeira levou ferroadas dos marimbondos, caiu na água e virou jacaré. Agora é a vez do calango tentar trazer o milho. Capistrano ouviu estas histórias em 1914 de dois jovens, Muru e Ibã, do rio Ibuaçu.',
    start: 'inicio',
    nodes: {
      inicio: {
        // parte 2, frase 4 (p. 86; glosa e tradução, p. 88)
        text: 'Nisheke kani kiaki, yauxiku nawa hiwetanã, ha ka tsaukẽ, yauxiku nawã yunukĩ;',
        translation: 'O calango foi à casa do povo sovino, e o povo sovino mandou que ele se sentasse.',
        emoji: '🏠',
        choices: [
          // frase 5
          { text: 'Nishekepã, ẽ sheki ea shemeshuwẽ? Anikiaki.', translation: '“Calango, me ajuda a debulhar o meu milho?”, disse.', next: 'debulhar' },
          // parte 1, frase 9 (p. 82, conferida na imagem: “anũkawe”, “bushũ”)
          { text: 'Yauxiku nawa mani ea anũkawe ika, bushũ ea akabu.', translation: '“Vamos pedir banana ao povo sovino”, disseram, e foram pedir.', wrong: 'A banana já ficou para trás. Agora o povo sovino tem um pedido para o calango: “Nishekepã, ẽ sheki ea shemeshuwẽ?”.' },
        ],
      },
      debulhar: {
        // frase 6 (p. 86; p. 88-89)
        text: 'Haskawa ha nishekepã, sheki shemeai uĩ, harapi tsauni kiaki, yauxiku nawarã.',
        translation: 'Assim, o povo sovino se sentou perto do calango e ficou olhando ele debulhar o milho.',
        emoji: '🌽',
        choices: [
          // parte 3, frase 7 (p. 91)
          { text: 'Ha sheki beru besti bushũ banaima.', translation: 'Levou o grão de milho e plantou.', wrong: 'Ainda é cedo para plantar. O povo sovino está vigiando: “Ha shemeai uĩtsaushũ…”.' },
          // frase 7
          { text: 'Ha shemeai uĩtsaushũ, sheki beru betsa tĩ ikai, tupishũ txitxãki nanei tsaukẽ.', translation: 'Ficou sentado vendo, juntando os grãos que caíam e pondo na cesta.', next: 'grao' },
        ],
      },
      grao: {
        // frase 8 (p. 86; p. 89)
        text: 'Ha yauxiku nawa hamakiri besutanaya, sheki beru betsa tukũni kiaki, nishekepãnã.',
        translation: 'Quando o povo sovino virou a cara para o outro lado, o calango pôs um grão de milho na boca.',
        emoji: '🤫',
        choices: [
          // frases 9-10
          { text: 'Nishekepã, hania sheki beru betsarã? Aka.', translation: '“Calango, cadê o outro grão de milho?”, disse.', next: 'pergunta' },
          // [KAX14] 77, ex. 297
          { text: 'Na mani piwe.', translation: 'Coma esta banana.', wrong: 'O povo sovino não oferece nada: ele percebe que falta um grão e pergunta “Nishekepã, hania sheki beru betsarã?”.' },
        ],
      },
      pergunta: {
        // frase 9 (p. 86; p. 89-90)
        text: 'Haskawakẽ ha yauxiku nawã, benashũ yukani kiaki.',
        translation: 'Assim o povo sovino procurou e perguntou.',
        emoji: '🔍',
        choices: [
          // [CAM05] 64, ex. 19b (fui eu)
          { text: 'Eaki.', translation: 'Fui eu.', wrong: 'O calango não confessa! Ele responde: “Ẽ uĩyamaki, sheki beru betsarã” (o outro grão de milho eu não vi).' },
          // frase 11
          { text: 'Ẽ uĩyamaki, sheki beru betsarã, aka.', translation: '“O outro grão de milho eu não vi”, disse.', next: 'faca' },
        ],
      },
      faca: {
        // frase 12 (p. 86; p. 90-91)
        text: 'Uĩyama maki; ika benikãi, hawẽ nupe bitãshũ.',
        translation: '“Não viu?”, disse, levantou-se e foi buscar a faca dele.',
        emoji: '🔪',
        choices: [
          // parte 3, frase 1 (p. 91; p. 92)
          { text: 'Haskawa nisheke mawakẽ, yauxiku nawã barĩ puta, txuxiaya binã tũkua, bestẽtã kuxikaini, hawenabuki nukuni kiaki.', translation: 'O calango morreu e o povo sovino o jogou no sol; secando ali, levou uma ferroada do marimbondo, acordou, correu e chegou até os parentes.', next: 'parentes' },
          // [KAX14] 181, ex. 920
          { text: 'Ui ishuki.', translation: 'Choveu.', wrong: 'A história não fala de chuva. O calango apanhou e foi jogado no sol, mas acordou: “Haskawa nisheke mawakẽ…”.' },
        ],
      },
      parentes: {
        // parte 3, frases 2-3 (p. 91; p. 92)
        text: 'Ha hikitã hawenabu yuikĩ: enabũ, ẽ yauxiku nawaki baika.',
        translation: 'Ele chegou e disse aos parentes: “Meus parentes, eu fui passear no povo sovino.”',
        emoji: '👪',
        choices: [
          // parte 3, frase 6 (p. 91; p. 94)
          { text: 'Barĩ ea txuxiwai ẽ rakakẽ, binã ea tũkua, bestẽtã ẽ kuxikirãshuki, hatuani kiaki.', translation: '“Eu estava deitado secando no sol, o marimbondo me picou, acordei e corri”, disse.', next: 'final' },
          // [KAX14] 37, ex. 1
          { text: 'Ẽ hiwe hawẽrua.', translation: 'Minha casa é bonita.', wrong: 'Os parentes querem saber o que aconteceu. Ele conta: “Barĩ ea txuxiwai ẽ rakakẽ…”.' },
        ],
      },
      final: {
        // parte 3, frase 7 (p. 91; p. 94-95)
        text: 'Ha sheki beru besti bushũ banaima, ma keyatapa tanaya, tauru tãtãkĩ, unu kani txuxitanaya, bai betsawashũ bana nibukiaki.',
        translation: 'Ele levou aquele grão de milho e plantou. Quando cresceu, limparam; amadureceu, secou, e fizeram outro roçado e plantaram.',
        emoji: '🌱',
        ending: {
          tone: 'bom',
          title: 'Nishekepã',
          message: 'O calango escondeu um grão na boca, aguentou tudo calado, e foi desse único grão que os huni kuĩ plantaram o milho. Repare como as frases se encadeiam: “-tã”, “-ya”, “-tanaya”, e só o último verbo leva o “kiaki”.',
        },
      },
    },
    glossary: [
      ['nisheke', 'calango'],
      ['sheki beru', 'grão de milho'],
      ['sheme', 'debulhar'],
      ['txitxã', 'cesta'],
      ['barĩ', 'sol'],
      ['nabu', 'parente'],
    ],
  },
  {
    id: 'cbs-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Txere txi bini',
    emoji: '🔥',
    summary: 'A curica de bico comprido rouba um tição do povo sovino e traz o fogo.',
    // [KAX11] 13 (a história fala “da origem do fogo e dos legumes”); 92, parte 3, frase 8, e 96, parte 4,
    // frases 1-5 (traduções nas p. 95-99).
    cultural_context:
      'Joaquim Kaxinawá escolheu “Yauxiku nawa” por ser a história da origem do fogo e dos legumes. Neste trecho, quem traz o fogo é a curica, uma ave de bico comprido. A frase que abre o trecho já diz quem foi, com o foco do “nã”: “quem pegou o fogo foi a curica”.',
    start: 'inicio',
    nodes: {
      inicio: {
        // parte 3, frase 8 (p. 92; p. 95-96)
        text: 'Habĩ txi bikinã, txerẽ binikiaki. Yauxiku nawã uĩyãyã, txere sheta txaipa, nuya kirã tsauwaya.',
        translation: 'Quem pegou o fogo foi a curica. O povo sovino viu? A curica, de bico comprido, veio voando e pousou.',
        emoji: '🐦',
        choices: [
          // parte 4, frase 1 (p. 96; p. 97)
          { text: 'Haskakirã hi shanaki tsautã, “she! she!” iki tsaukẽ, yauxiku nawa aĩnẽ nĩkatã, txi txixte bibirã, ha txere hawẽ tsaka.', translation: 'Pousou num pau seco e ficou cantando “she! she!”; a mulher do povo sovino ouviu, pegou um tição e atirou na curica.', next: 'ticao' },
          // parte 2, frase 4 (p. 86)
          { text: 'Nisheke kani kiaki, yauxiku nawa hiwetanã.', translation: 'O calango foi à casa do povo sovino.', wrong: 'O calango já fez a parte dele. Agora é a curica, pousada num pau seco: “Haskakirã hi shanaki tsautã…”.' },
        ],
      },
      ticao: {
        // parte 4, frase 2 (p. 96; p. 97). A lista escreve “yauxiki nawã”; a glosa da mesma frase mostra
        // “jauʃi-ku”, e o curso segue a glosa.
        text: 'Haskawa ha txerẽ txi txixte, nuyakirã tukũbainaya, yauxiku nawã aĩnẽ betxitã:',
        translation: 'A curica veio voando, pegou o tição com o bico e levou; a mulher do povo sovino viu:',
        emoji: '🪵',
        choices: [
          // [KAX14] 77, ex. 297
          { text: 'Na mani piwe.', translation: 'Coma esta banana.', wrong: 'A mulher não oferece nada: ela grita ao ver o fogo indo embora — “Ũ unu txerẽ, txi nuku buãi!”.' },
          // parte 4, frase 3 (p. 96; p. 97-98)
          { text: 'Ũ unu txerẽ, txi nuku buãi! Ikaya.', translation: '“Olha aquela curica levando o nosso fogo!”, disse.', next: 'porque' },
        ],
      },
      porque: {
        // parte 4, frase 4 (p. 96; p. 98)
        text: 'Mĩ hawakatsi txere txi bumai? Ika.',
        translation: '“Por que você deixou a curica levar o fogo?”, disse.',
        emoji: '❓',
        choices: [
          // parte 4, frase 5 (p. 96; p. 98)
          { text: 'Haskaya ha txere, hawẽ hiwetã nukuirã, hawẽ sheta ma menui txixte kainaya, ha txi putatã, txatxaki shepukũ ika rakani kiaki.', translation: 'Então a curica chegou à casa dela com o bico já queimando, jogou o tição e caiu na fonte de água para molhar o bico.', next: 'final' },
          // parte 3, frase 3 (p. 91)
          { text: 'Enabũ, ẽ yauxiku nawaki baika.', translation: 'Meus parentes, eu fui passear no povo sovino.', wrong: 'Essa é a fala do calango. A curica não para para conversar: voa para casa com o bico queimando — “Haskaya ha txere, hawẽ hiwetã nukuirã…”.' },
        ],
      },
      final: {
        // parte 4, frase 6 (p. 96; p. 98), começo
        text: 'Haskaya shapu bikinã, pinũ bini kiaki.',
        translation: 'E quem pegou o algodão foi o beija-flor.',
        emoji: '🔥',
        ending: {
          tone: 'bom',
          title: 'Txere txi bini',
          message: 'A curica queimou o bico, mas o fogo chegou aos huni kuĩ. Repare em “Mĩ hawakatsi…?” (por quê?) e no “nã” que põe em foco quem fez: “quem pegou o fogo foi a curica”. A história segue com o beija-flor e o algodão.',
        },
      },
    },
    glossary: [
      ['txere', 'curica'],
      ['sheta', 'bico'],
      ['txixte', 'tição'],
      ['nĩka', 'ouvir'],
      ['hawakatsi', 'por quê'],
      ['menu', 'queimar'],
    ],
  },
  {
    id: 'cbs-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pinũ shapu',
    emoji: '🧶',
    summary: 'O povo sovino nega o algodão, e um homem vira beija-flor para roubar a semente.',
    // [KAX11] 96, parte 4, frases 6-10, e 101, parte 5, frases 1-7 (traduções nas p. 98-104); [KAX14] 29
    // (as tecelãs aprendem com uma mestra, enquanto o sábio canta os bichos que são os desenhos).
    cultural_context:
      'Sem algodão não havia roupa nem rede. Entre os huni kuĩ, tecer é um saber que se aprende com uma mestra: segundo Joaquim Kaxinawá, a moça que quer ser boa tecelã recebe nos olhos o sumo de uma planta, enquanto o sábio canta os animais e os insetos que viram desenhos na pintura e no tecido.',
    start: 'inicio',
    nodes: {
      inicio: {
        // parte 4, frase 6 (p. 96; p. 98)
        text: 'Haskaya shapu bikinã, pinũ bini kiaki; hanu shapu betxiriamarã, enaburã tariuma, na disiuma, inibukiaki.',
        translation: 'Quem pegou o algodão foi o beija-flor. Naquele tempo, os nossos parentes ainda não tinham achado o algodão: não tinham roupa nem rede.',
        emoji: '🐦',
        choices: [
          // parte 4, frase 7 (p. 96; p. 99)
          { text: 'Huni betsa iki; ẽ yauxiku nawa nua shapu bikai, mã batxiwanunã, ika kashũ.', translation: 'Outro homem disse: “Vou buscar o algodão do povo sovino para vocês fazerem vestido”, e foi.', next: 'pedido' },
          // parte 3, frase 8 (p. 92)
          { text: 'Habĩ txi bikinã, txerẽ binikiaki.', translation: 'Quem pegou o fogo foi a curica.', wrong: 'O fogo já veio. Agora falta o algodão, e um homem se oferece: “Huni betsa iki; ẽ yauxiku nawa nua shapu bikai…”.' },
        ],
      },
      pedido: {
        // parte 4, frases 8-9 (p. 96; p. 99)
        text: 'Yauxiku nawã hiwetã hikitã: yauxiku nawã ea shapu inawẽ, ẽ aĩ batxiumakirã, aka.',
        translation: 'Chegou à casa do povo sovino: “Povo sovino, me dê algodão, minha mulher não tem vestido”, disse.',
        emoji: '🙏',
        choices: [
          // parte 4, frase 10 (p. 96; p. 100-101)
          { text: 'Haskawa yauxiku nawã, shapu bestitxai kũtesh-shũ inã, ha huni sina kiranikiaki.', translation: 'O povo sovino deu só um algodão já debulhado, e o homem voltou zangado.', next: 'zangado' },
          // parte 1, frase 4 (p. 82, conferida na imagem: “shuishũ”)
          { text: 'Haskaya ha yauxiku nawã, atsa ewapama shuishũ inã.', translation: 'Então o povo sovino deu uma macaxeira pequena, assada.', wrong: 'Isso foi com a macaxeira, lá no começo. Com o algodão, o povo sovino dá só um, já debulhado: “Haskawa yauxiku nawã, shapu bestitxai kũtesh-shũ inã…”.' },
        ],
      },
      zangado: {
        // parte 5, frase 2 (p. 101; p. 102)
        text: 'Haskatã hatu yuikĩ; ẽ pinukãi shapu heshe yumetsuikai, hatuani kiaki.',
        translation: 'Então disse a eles: “Vou virar beija-flor e roubar a semente do algodão.”',
        emoji: '🐦',
        choices: [
          // [KAX14] 181, ex. 920
          { text: 'Ui ishuki.', translation: 'Choveu.', wrong: 'Não é hora de falar da chuva. O beija-flor vai até o algodão, e o povo sovino vê: “Ũ unu pinũ nukũ shapu biwanai…”.' },
          // parte 5, frase 4 (p. 101; p. 103)
          { text: 'Ũ unu pinũ nukũ shapu biwanai, hawakatsi mĩ pinu shapu bimai ikai? ikaibũ.', translation: '“Olha aquele beija-flor pegando o nosso algodão! Por que você deixou o beija-flor tirar o algodão?”, disseram.', next: 'plantou' },
        ],
      },
      plantou: {
        // parte 5, frase 5 (p. 101; p. 104)
        text: 'Ha pinũ shapu heshe bestitxai bushũ, banaima hukũtã ewai, unu shurutanaya, hawẽ aĩ yuini kiaki.',
        translation: 'O beija-flor trouxe uma só semente de algodão e plantou; germinou, cresceu e, quando ficou bom de colher, ele disse à mulher:',
        emoji: '🌱',
        choices: [
          // parte 5, frase 6 (p. 101; p. 104)
          { text: 'Ẽ aĩnẽ, shapu ẽ mia banashunimarã, ma shuruaki bitawẽ? Anikiaki.', translation: '“Minha mulher, o algodão que eu plantei para você já está maduro, vá buscar”, disse.', next: 'final' },
          // parte 3, frase 6 (p. 91)
          { text: 'Barĩ ea txuxiwai ẽ rakakẽ.', translation: 'Eu estava deitado secando no sol.', wrong: 'Essa é a fala do calango. O beija-flor tem uma boa notícia para a mulher: “Ẽ aĩnẽ, shapu ẽ mia banashunimarã…”.' },
        ],
      },
      final: {
        // parte 5, frase 7 (p. 101; p. 104)
        text: 'Haskawa benimakãi, shapu bitãshũ kũtesh-shũ, batxiwashũ saweni kiaki.',
        translation: 'Ela ficou alegre, foi buscar o algodão, debulhou, fez um vestido e vestiu.',
        emoji: '👗',
        ending: {
          tone: 'bom',
          title: 'Pinũ shapu',
          message: 'De uma só semente veio todo o algodão. Repare no fim de cada fala, “aka”, “ika”, “anikiaki”, e no “mã batxiwanunã”: para vocês fazerem vestido, com o “nã” de quando quem faz é outra pessoa.',
        },
      },
    },
    glossary: [
      ['shapu', 'algodão'],
      ['pinũ', 'beija-flor'],
      ['heshe', 'semente'],
      ['batxi', 'vestido'],
      ['sina', 'zangado'],
      ['sawe', 'vestir'],
    ],
  },
  {
    id: 'cbs-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Rami kanirã',
    emoji: '🦋',
    summary: 'Os bichos se juntam contra o povo sovino, e no fim homens e mulheres viram os animais da mata.',
    // [KAX11] 101, parte 5, frases 8-9; 106, parte 6, frases 3, 5 e 10; 112, parte 7, frase 5; 116-117, parte
    // 8, frases 2 e 4 (traduções nas p. 105-119). [KAX14] 291, adivinhas 5.884-5.887 (quem pegou a rede, a
    // arma, a borduna e o grafismo).
    cultural_context:
      'O fim de “Yauxiku nawa” explica de onde vêm os bichos: cada um escolhe em que vai se transformar, e cada um fica com a sua marca. As adivinhas de Capistrano, que Joaquim Kaxinawá pôs no fim da gramática, lembram a mesma história: quem pegou a rede foi o camarão, a arma foi a arraia, a borduna foi o poraquê, e o grafismo veio da jiboia.',
    start: 'inicio',
    nodes: {
      inicio: {
        // parte 5, frase 8 (p. 101; p. 105)
        text: 'Haska uĩ yubakanibu kiaki, yuinaka xaraburã.',
        translation: 'Vendo isso, os animais combinaram.',
        emoji: '🐾',
        choices: [
          // parte 5, frase 9 (p. 101; p. 105)
          { text: 'Haska xina harukũ huirã; kana yaix hunũ, tetxukiri yaix hunũ, pãku hunũ, na habia yaix xarabu itxanibu kiaki.', translation: 'Quem chegou primeiro foi o tatu “kana”; vieram o tatu “tetxukiri” e o tatu-de-rabo-de-couro, e todos os tatus se juntaram.', next: 'plano' },
          // parte 5, frase 7 (p. 101)
          { text: 'Haskawa benimakãi.', translation: 'Assim, ficou alegre.', wrong: 'Os bichos não estão alegres: estão bravos com o povo sovino. Quem chega primeiro para combinar? “Haska xina harukũ huirã; kana yaix hunũ…”.' },
        ],
      },
      plano: {
        // parte 6, frase 3 (p. 106; p. 107-108)
        text: 'Yauxiku nawa retenũbukawẽ; nenushũ kini wabãikĩ, hawẽ risirapi pesanũbukawẽ, hatuani kiaki.',
        translation: '“Vamos matar o povo sovino: vamos cavar um buraco daqui e furar perto da rede dele”, disse a eles.',
        emoji: '🕳️',
        choices: [
          // [KAX14] 77, ex. 297
          { text: 'Na mani piwe.', translation: 'Coma esta banana.', wrong: 'Não é hora de comer. Os tatus começam a cavar, um depois do outro: “Haskawa bãikĩ, unu henetã, ma ẽ hĩ ikaki…”.' },
          // parte 6, frase 5 (p. 106; p. 108)
          { text: 'Haskawa bãikĩ, unu henetã, ma ẽ hĩ ikaki, mĩtseri butawẽ, anikiaki pãku akĩ.', translation: 'Foi cavando, parou lá adiante e disse ao tatu-de-rabo-de-couro: “Já estou cansado, agora é você.”', next: 'japo' },
        ],
      },
      japo: {
        // parte 6, frase 10 (p. 106; p. 110)
        text: 'Ishũ hatu yuiya; tsaka taewakinã, iskũ anikiaki.',
        translation: 'Quem começou a flechar foi o japó.',
        emoji: '🎯',
        choices: [
          // parte 7, frase 1 (p. 112; p. 113)
          { text: 'Haskawakĩ keyutã, tashnikawã itxai keyutã, yauxiku nawa shateshũ, nãke Isa yuini kiaki.', translation: 'Assim acabaram com tudo; todos saíram e se juntaram, o povo sovino partiu, e falaram ao pássaro azul.', next: 'escolha' },
          // parte 2, frase 11 (p. 86)
          { text: 'Ẽ uĩyamaki, sheki beru betsarã, aka.', translation: '“O outro grão de milho eu não vi”, disse.', wrong: 'Isso foi o calango, bem antes. Agora os bichos venceram o povo sovino: “Haskawakĩ keyutã…”.' },
        ],
      },
      escolha: {
        // parte 7, frase 5 (p. 112; p. 114-115), só o começo da lista
        text: 'Earã ẽ hasĩ kainai, earã ẽ nea kainai, earã ẽ pinu kainai.',
        translation: '“Eu vou virar mutum”, “eu vou virar jacamim”, “eu vou virar beija-flor”.',
        emoji: '🦃',
        choices: [
          // parte 8, frase 2 (p. 116; p. 118)
          { text: 'Haskatã hunibu rami, na aĩbaibu raminibu kiaki.', translation: 'Então os homens e as mulheres se transformaram.', next: 'final' },
          // [KAX14] 175, ex. 896
          { text: 'Ẽ hiwerã turuki.', translation: 'Minha casa é redonda.', wrong: 'Ninguém fala de casa agora: cada um escolheu o seu bicho, e então todos se transformam — “Haskatã hunibu rami…”.' },
        ],
      },
      final: {
        // parte 8, frase 4 (p. 117; p. 118-119)
        text: 'Atsa bikĩ, kari bikĩ, mani bikĩ, sheki bikĩ, haskaxarabu bikĩ keyutã, hanu hiwei penibu kiaki.',
        translation: 'Pegaram a macaxeira, a batata-doce, a banana, o milho, pegaram tudo, e passaram a viver bem.',
        emoji: '🌽',
        ending: {
          tone: 'bom',
          title: 'Rami kanirã',
          message: 'Com o fogo, o milho, o algodão e os legumes do povo sovino, a gente passou a viver bem, e os bichos da mata ficaram com as marcas da história. Repare no “earã ẽ… kainai”: o pronome em foco, “eu mesmo vou virar…”.',
        },
      },
    },
    glossary: [
      ['yuinaka', 'animais de caça'],
      ['yubaka', 'combinar'],
      ['rete', 'matar'],
      ['isku', 'japó'],
      ['rami', 'transformar-se'],
      ['earã', 'eu (em foco)'],
    ],
  },
];
