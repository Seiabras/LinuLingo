import type { StorySeed } from '../types';

/** Histórias interativas em islandês: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_IS: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'is-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Í heita pottinum',
    emoji: '♨️',
    summary: 'Numa piscina pública de Reykjavík, o Linu entra na banheira quente e conhece a Anna.',
    cultural_context:
      'Reykjavík tem várias piscinas públicas ao ar livre, aquecidas com água geotérmica e abertas o ano inteiro, mesmo no inverno. As “heitir pottar”, banheiras de água bem quente, são o lugar onde os islandeses conversam; antes de entrar, é obrigatório tomar banho sem roupa de banho no vestiário.',
    start: 'start',
    glossary: [
      ['Halló! / Bless!', 'Oi! / Tchau!'],
      ['Ég heiti… / Hvað heitir þú?', 'Eu me chamo… / Como você se chama? (o “ð” soa como o “th” do inglês “this”)'],
      ['Ég er frá Brasilíu.', 'Eu sou do Brasil.'],
      ['ekki', 'não (vem depois do verbo: “ég er ekki”)'],
      ['heitur pottur', 'banheira quente (o “tt” tem pré-aspiração: um sopro antes do “t”)'],
      ['þrjár ferðir', 'três idas (de 1 a 4, os números mudam com o gênero: þrír, þrjár, þrjú)'],
      ['tíu / tuttugu', 'dez / vinte'],
      ['takk', 'obrigado'],
    ],
    nodes: {
      start: {
        emoji: '🏊',
        text: 'Reykjavík. Úti er kalt, en laugin er heit. Linu er í sundi.',
        translation: 'Reykjavík. Lá fora está frio, mas a piscina é quente. O Linu está na piscina.',
        choices: [
          { text: 'Linu fer í heita pottinn.', translation: 'O Linu vai para a banheira quente.', next: 'pottur' },
          { text: 'Linu syndir fyrst.', translation: 'O Linu nada primeiro.', next: 'synda' },
        ],
      },
      synda: {
        emoji: '🐧',
        text: 'Linu syndir þrjár ferðir. Gaman!',
        translation: 'O Linu nada três idas. Que legal!',
        choices: [{ text: 'Nú í pottinn!', translation: 'Agora, para a banheira!', next: 'pottur' }],
      },
      pottur: {
        emoji: '👩',
        text: 'Í pottinum er kona. “Halló! Ég heiti Anna. Hvað heitir þú?”',
        translation: 'Na banheira há uma mulher. “Oi! Eu me chamo Anna. Como você se chama?”',
        choices: [
          { text: '“Halló! Ég heiti Linu.”', translation: '“Oi! Eu me chamo Linu.”', next: 'hvadan' },
          {
            text: '“Bless, Anna!”',
            translation: '“Tchau, Anna!”',
            wrong: 'A Anna disse “Halló!” (oi!) e perguntou “Hvað heitir þú?” (como você se chama?). “Bless” é “tchau”: a conversa nem começou! Responda “Ég heiti Linu”.',
          },
        ],
      },
      hvadan: {
        emoji: '🗺️',
        text: '“Gaman að kynnast þér, Linu! Ég er ekki frá Reykjavík. Ég er frá Akureyri. En þú?”',
        translation: '“Prazer em te conhecer, Linu! Eu não sou de Reykjavík. Eu sou de Akureyri. E você?”',
        choices: [
          { text: '“Ég er frá Brasilíu.”', translation: '“Eu sou do Brasil.”', next: 'brasilia' },
          {
            text: '“Ertu frá Reykjavík, Anna?”',
            translation: '“Você é de Reykjavík, Anna?”',
            wrong: 'A Anna disse “Ég er ekki frá Reykjavík”: ela NÃO é de Reykjavík, é de Akureyri. “Ekki” é o “não” que vem depois do verbo.',
          },
        ],
      },
      brasilia: {
        emoji: '☀️',
        text: '“Frá Brasilíu! Þar er heitt.” Linu er glaður. Potturinn er heitur og góður.',
        translation: '“Do Brasil! Lá é quente.” O Linu está contente. A banheira está quente e gostosa.',
        choices: [
          { text: 'Linu er í pottinum í tíu mínútur.', translation: 'O Linu fica na banheira dez minutos.', next: 'final_bom' },
          { text: 'Linu er í pottinum í tuttugu mínútur.', translation: 'O Linu fica na banheira vinte minutos.', next: 'final_heitt' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Takk fyrir spjallið, Anna. Bless!” “Bless, Linu!”',
        translation: '“Obrigado pela conversa, Anna. Tchau!” “Tchau, Linu!”',
        ending: { tone: 'bom', title: 'Conversa no ofurô', message: 'O Linu fez como os islandeses: foi à piscina e fez uma amiga na banheira quente.' },
      },
      final_heitt: {
        emoji: '🥵',
        text: 'Tuttugu mínútur! Linu er rauður og þreyttur. Úff!',
        translation: 'Vinte minutos! O Linu está vermelho e cansado. Ufa!',
        ending: { tone: 'neutro', title: 'Pinguim cozido', message: 'Vinte minutos na água quente é demais, até para os islandeses. Da próxima vez, dez minutos bastam!' },
      },
    },
  },
  {
    id: 'is-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Svarta ströndin',
    emoji: '🖤',
    summary: 'Na praia de areia preta perto de Vík, o Linu conta papagaios-do-mar com o Jón.',
    cultural_context:
      'Reynisfjara, perto da vila de Vík, no sul, é uma praia de areia vulcânica preta com colunas de basalto. As ondas ali são traiçoeiras e já arrastaram visitantes: as placas pedem para nunca dar as costas ao mar. No verão, papagaios-do-mar (lundar) fazem ninho nos penhascos da região.',
    start: 'start',
    glossary: [
      ['ströndin er svört', 'a praia é preta'],
      ['Varúð!', 'Cuidado!'],
      ['öldurnar', 'as ondas'],
      ['hættulegur', 'perigoso'],
      ['lundi / lundar', 'papagaio-do-mar / papagaios-do-mar'],
      ['einn, tveir, þrír, fjórir, fimm', 'um, dois, três, quatro, cinco (de 1 a 4 mudam com o gênero e o caso; do 5 em diante, não)'],
      ['þreyttur', 'cansado'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Vík. Ströndin er svört. Linu og Jón eru á ströndinni.',
        translation: 'Vík. A praia é preta. O Linu e o Jón estão na praia.',
        choices: [
          { text: 'Linu horfir á hafið.', translation: 'O Linu olha o mar.', next: 'haf' },
          { text: 'Linu horfir á klettana.', translation: 'O Linu olha as rochas.', next: 'klettar' },
        ],
      },
      haf: {
        emoji: '🌊',
        text: 'Jón: “Varúð! Öldurnar eru stórar og hættulegar.”',
        translation: 'O Jón: “Cuidado! As ondas são grandes e perigosas.”',
        choices: [
          { text: 'Linu fer frá sjónum.', translation: 'O Linu se afasta do mar.', next: 'klettar' },
          {
            text: 'Linu fer nær sjónum.',
            translation: 'O Linu chega mais perto do mar.',
            wrong: 'O Jón gritou “Varúð!” (cuidado!): as ondas são “stórar og hættulegar”, grandes e perigosas. Em Reynisfjara, o certo é se afastar do mar.',
          },
        ],
      },
      klettar: {
        emoji: '🪨',
        text: 'Á klettunum eru fuglar. “Þetta eru lundar!” segir Jón.',
        translation: 'Nas rochas há pássaros. “São papagaios-do-mar!”, diz o Jón.',
        choices: [{ text: 'Linu telur lundana.', translation: 'O Linu conta os papagaios-do-mar.', next: 'telja' }],
      },
      telja: {
        emoji: '🐦',
        text: 'Einn lundi, tveir lundar, þrír lundar, fjórir lundar. Jón segir: “Og þarna er einn lítill. Fimm!”',
        translation: 'Um papagaio-do-mar, dois, três, quatro. O Jón diz: “E ali tem um pequeno. Cinco!”',
        choices: [
          { text: '“Fimm lundar! Frábært!”', translation: '“Cinco papagaios-do-mar! Que ótimo!”', next: 'mynd' },
          {
            text: '“Nei, Jón. Fjórir lundar.”',
            translation: '“Não, Jón. Quatro papagaios-do-mar.”',
            wrong: 'O Jón viu mais um: “einn lítill”, um pequeno. Quatro mais um dá “fimm”, cinco!',
          },
        ],
      },
      mynd: {
        emoji: '📷',
        text: 'Linu tekur mynd af lundunum. Jón spyr: “Ertu þreyttur? Kaffið er gott í Vík.”',
        translation: 'O Linu tira uma foto dos papagaios-do-mar. O Jón pergunta: “Você está cansado? O café é bom em Vík.”',
        choices: [
          { text: '“Já, takk! Kaffi!”', translation: '“Sim, obrigado! Café!”', next: 'final_bom' },
          { text: '“Nei takk. Ég er hér með lundunum.”', translation: '“Não, obrigado. Eu fico aqui com os papagaios-do-mar.”', next: 'final_lundi' },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Linu og Jón drekka kaffi í Vík. Úti er rigning, en inni er hlýtt.',
        translation: 'O Linu e o Jón tomam café em Vík. Lá fora chove, mas dentro está quentinho.',
        ending: { tone: 'bom', title: 'Café depois da praia', message: 'O Linu respeitou o mar, contou até cinco e ainda ganhou um café quentinho.' },
      },
      final_lundi: {
        emoji: '🌧️',
        text: 'Linu er einn á ströndinni. Nú er rigning. Linu er blautur… en glaður.',
        translation: 'O Linu está sozinho na praia. Agora chove. O Linu está molhado… mas contente.',
        ending: { tone: 'neutro', title: 'Pinguim molhado', message: 'Ficar com os papagaios-do-mar foi bonito, mas o tempo na Islândia muda rápido. Da próxima vez, aceite o café!' },
      },
    },
  },
  {
    id: 'is-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Strokkur gýs!',
    emoji: '💨',
    summary: 'No vale de Geysir, o Linu espera o gêiser Strokkur jorrar com a Guðrún.',
    cultural_context:
      'A palavra “gêiser” vem de Geysir, a grande fonte termal do sul da Islândia, que hoje quase não jorra. Ao lado dela, o Strokkur entra em erupção a cada poucos minutos e lança água fervente a uns 15 a 20 metros de altura.',
    start: 'start',
    glossary: [
      ['heitt vatn / gufa', 'água quente / vapor'],
      ['Strokkur gýs.', 'O Strokkur jorra (entra em erupção).'],
      ['eftir fimm mínútur', 'daqui a cinco minutos'],
      ['fimm / fimmtán', 'cinco / quinze'],
      ['Fyrirgefðu!', 'Desculpe!'],
      ['hættulegt', 'perigoso'],
      ['sími', 'telefone, celular (palavra antiga, “fio”, reaproveitada: o purismo islandês)'],
    ],
    nodes: {
      start: {
        emoji: '♨️',
        text: 'Linu er við Geysi. Hér er gufa og heitt vatn.',
        translation: 'O Linu está no Geysir. Aqui há vapor e água quente.',
        choices: [
          { text: 'Linu gengur að Strokki.', translation: 'O Linu vai até o Strokkur.', next: 'strokkur' },
          { text: 'Linu snertir vatnið.', translation: 'O Linu toca na água.', next: 'vatn' },
        ],
      },
      vatn: {
        emoji: '🔥',
        text: 'Á! Vatnið er mjög heitt. Kona segir: “Nei! Það er hættulegt.”',
        translation: 'Ai! A água está muito quente. Uma mulher diz: “Não! É perigoso.”',
        choices: [{ text: '“Fyrirgefðu!”', translation: '“Desculpe!”', next: 'strokkur' }],
      },
      strokkur: {
        emoji: '👩',
        text: '“Halló! Ég heiti Guðrún. Strokkur gýs oft. Kannski eftir fimm mínútur.”',
        translation: '“Oi! Eu me chamo Guðrún. O Strokkur jorra com frequência. Talvez daqui a cinco minutos.”',
        choices: [
          { text: 'Linu bíður með Guðrúnu.', translation: 'O Linu espera com a Guðrún.', next: 'bida' },
          {
            text: '“Eftir fimmtán mínútur? Bless!”',
            translation: '“Daqui a quinze minutos? Tchau!”',
            wrong: 'A Guðrún disse “fimm” (cinco), não “fimmtán” (quinze). É pouco tempo: vale a pena esperar!',
          },
        ],
      },
      bida: {
        emoji: '⏳',
        text: 'Linu og Guðrún bíða. Guðrún telur: “Einn, tveir, þrír…”',
        translation: 'O Linu e a Guðrún esperam. A Guðrún conta: “Um, dois, três…”',
        choices: [
          { text: 'Linu er tilbúinn með myndavélina.', translation: 'O Linu está pronto com a câmera.', next: 'final_bom' },
          { text: 'Linu horfir í símann.', translation: 'O Linu olha o celular.', next: 'final_simi' },
        ],
      },
      final_bom: {
        emoji: '📸',
        text: 'Vúmm! Vatnið fer tuttugu metra upp í loftið. Linu er með mynd. Frábært!',
        translation: 'Vuum! A água sobe vinte metros no ar. O Linu tem a foto. Que ótimo!',
        ending: { tone: 'bom', title: 'Foto perfeita', message: 'O Linu esperou os cinco minutos e fotografou o Strokkur jorrando.' },
      },
      final_simi: {
        emoji: '📱',
        text: 'Vúmm! Strokkur gýs… en Linu horfir í símann. “Aftur, Strokkur! Aftur!”',
        translation: 'Vuum! O Strokkur jorra… mas o Linu está olhando o celular. “De novo, Strokkur! De novo!”',
        ending: { tone: 'neutro', title: 'Perdeu!', message: 'Sem problema: o Strokkur jorra de novo daqui a poucos minutos. Desta vez, olhe para ele!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'is-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Hjörtun á Akureyri',
    emoji: '❤️',
    summary: 'Em Akureyri, no norte, o Linu descobre semáforos em forma de coração e uma padaria quentinha.',
    cultural_context:
      'Depois da crise financeira de 2008, Akureyri trocou a luz vermelha dos semáforos por corações, como mensagem de otimismo, e eles continuam lá. Repare: os islandeses dizem “á Akureyri” (com “á”), e não “í Akureyri”.',
    start: 'start',
    glossary: [
      ['bærinn', 'a cidade (bær, masculino, + artigo -inn)'],
      ['umferðarljósið', 'o semáforo (neutro: artigo -ið)'],
      ['hjarta', 'coração'],
      ['bakaríið', 'a padaria'],
      ['snúður / snúðurinn', 'um / o caracol de canela (pão doce com cobertura de chocolate)'],
      ['kleina / kleinan', 'uma / a “kleina”, rosquinha frita trançada (feminino: artigo -n)'],
      ['ókeypis', 'grátis'],
      ['á Akureyri', 'em Akureyri (com “á”, não “í”)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu er á Akureyri. Bærinn er lítill og fallegur.',
        translation: 'O Linu está em Akureyri. A cidade é pequena e bonita.',
        choices: [
          { text: 'Linu gengur niður í bæ.', translation: 'O Linu desce para o centro.', next: 'ljos' },
          { text: 'Linu fer beint í bakaríið.', translation: 'O Linu vai direto para a padaria.', next: 'bakari' },
        ],
      },
      ljos: {
        emoji: '🚦',
        text: 'Umferðarljósið er rautt. Og rauða ljósið er hjarta!',
        translation: 'O semáforo está vermelho. E a luz vermelha é um coração!',
        choices: [
          { text: 'Linu bíður og brosir.', translation: 'O Linu espera e sorri.', next: 'bakari' },
          {
            text: 'Linu gengur yfir götuna.',
            translation: 'O Linu atravessa a rua.',
            wrong: 'O texto diz “Umferðarljósið er rautt”: o semáforo está VERMELHO. Mesmo em forma de coração, é para esperar!',
          },
        ],
      },
      bakari: {
        emoji: '🥐',
        text: 'Bakaríið er hlýtt. Konan þar heitir Sigga. “Góðan daginn! Hvað viltu?”',
        translation: 'A padaria está quentinha. A mulher ali se chama Sigga. “Bom dia! O que você quer?”',
        choices: [
          { text: '“Einn snúð, takk.”', translation: '“Um caracol de canela, por favor.”', next: 'snudur' },
          { text: '“Kleinu og kaffi, takk.”', translation: '“Uma kleina e um café, por favor.”', next: 'kleina' },
        ],
      },
      snudur: {
        emoji: '🍫',
        text: 'Snúðurinn er stór. Súkkulaðið er brúnt og sætt.',
        translation: 'O caracol de canela é grande. O chocolate é marrom e doce.',
        choices: [
          { text: 'Linu borðar snúðinn.', translation: 'O Linu come o caracol de canela.', next: 'final_bom' },
          { text: 'Linu kaupir tíu snúða.', translation: 'O Linu compra dez caracóis de canela.', next: 'final_magi' },
        ],
      },
      kleina: {
        emoji: '☕',
        text: 'Kleinan er lítil og kaffið er heitt. Sigga segir: “Kaffið er ókeypis í dag!”',
        translation: 'A kleina é pequena e o café está quente. A Sigga diz: “O café é grátis hoje!”',
        choices: [
          { text: '“Takk kærlega!”', translation: '“Muito obrigado!”', next: 'final_bom' },
          {
            text: '“Hvað kostar kaffið?”',
            translation: '“Quanto custa o café?”',
            wrong: 'A Sigga disse que o café é “ókeypis í dag”: grátis hoje! Não precisa perguntar o preço, só agradecer.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu situr við gluggann, borðar og horfir á fjörðinn. Akureyri er yndisleg.',
        translation: 'O Linu senta junto à janela, come e olha o fiorde. Akureyri é uma graça.',
        ending: { tone: 'bom', title: 'Coração do norte', message: 'O Linu esperou o coração vermelho, comeu bem e aproveitou a vista do fiorde.' },
      },
      final_magi: {
        emoji: '😵',
        text: 'Tíu snúðar! Nú er maginn fullur og Linu er þreyttur.',
        translation: 'Dez caracóis de canela! Agora a barriga está cheia e o Linu está cansado.',
        ending: { tone: 'neutro', title: 'Barriga cheia', message: 'Dez pães doces é exagero, até para um pinguim. Um “snúður” basta!' },
      },
    },
  },
  {
    id: 'is-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Heita áin',
    emoji: '🏞️',
    summary: 'Saindo de Hveragerði, o Linu e a Helga sobem o vale de Reykjadalur para tomar banho num rio quente.',
    cultural_context:
      'Hveragerði, a uns 45 km de Reykjavík, é a cidade das estufas aquecidas pelo calor da terra. Dali parte a trilha para Reykjadalur, o “vale da fumaça”: depois de mais ou menos uma hora de caminhada, chega-se a um rio de água quente onde as pessoas se banham ao ar livre.',
    start: 'start',
    glossary: [
      ['þau', 'eles (grupo misto de homem e mulher: neutro plural!)'],
      ['leiðin', 'o caminho'],
      ['hver / hverirnir', 'fonte termal / as fontes termais'],
      ['brennisteinn', 'enxofre'],
      ['áin / í ánni', 'o rio / no rio (feminino: á, ána, ánni)'],
      ['lyktin', 'o cheiro'],
      ['handklæði', 'toalha'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu og Helga eru í Hveragerði. Í dag ganga þau upp í Reykjadal.',
        translation: 'O Linu e a Helga estão em Hveragerði. Hoje eles sobem até Reykjadalur.',
        choices: [
          { text: '“Ég er tilbúinn!”', translation: '“Estou pronto!”', next: 'leid' },
          { text: '“Hvað er Reykjadalur?”', translation: '“O que é Reykjadalur?”', next: 'dalur' },
        ],
      },
      dalur: {
        emoji: '⛰️',
        text: 'Helga svarar: “Reykjadalur er dalur. Þar er heit á.”',
        translation: 'A Helga responde: “Reykjadalur é um vale. Lá tem um rio quente.”',
        choices: [{ text: '“Heit á? Frábært!”', translation: '“Um rio quente? Que ótimo!”', next: 'leid' }],
      },
      leid: {
        emoji: '💨',
        text: 'Leiðin er löng. Hverirnir sjóða og lyktin er skrýtin. Helga segir: “Þetta er brennisteinn.”',
        translation: 'O caminho é longo. As fontes termais fervem e o cheiro é estranho. A Helga diz: “Isso é enxofre.”',
        choices: [
          { text: '“Já, lyktin er eins og egg!”', translation: '“É, o cheiro é de ovo!”', next: 'ain' },
          {
            text: '“Lyktin er góð, eins og blóm!”',
            translation: '“O cheiro é bom, de flor!”',
            wrong: 'O texto diz “lyktin er skrýtin”: o cheiro é ESTRANHO. É o enxofre (brennisteinn), que cheira a ovo podre, nada de flores!',
          },
        ],
      },
      ain: {
        emoji: '🏞️',
        text: 'Þarna er áin. Vatnið er heitt og fólkið situr í ánni.',
        translation: 'Lá está o rio. A água é quente e as pessoas estão sentadas no rio.',
        choices: [
          { text: 'Linu fer beint í ána.', translation: 'O Linu entra direto no rio.', next: 'bad' },
          { text: 'Linu snertir vatnið fyrst.', translation: 'O Linu toca a água primeiro.', next: 'snerta' },
        ],
      },
      snerta: {
        emoji: '🖐️',
        text: 'Vatnið er ekki of heitt. Það er fullkomið.',
        translation: 'A água não está quente demais. Está perfeita.',
        choices: [{ text: 'Linu fer í ána.', translation: 'O Linu entra no rio.', next: 'bad' }],
      },
      bad: {
        emoji: '😌',
        text: 'Linu og Helga sitja í heitu ánni. Nú er kalt úti og Helga spyr: “Ertu með handklæði?”',
        translation: 'O Linu e a Helga ficam sentados no rio quente. Agora está frio fora da água e a Helga pergunta: “Você tem toalha?”',
        choices: [
          { text: '“Já, hér er handklæðið.”', translation: '“Tenho, aqui está a toalha.”', next: 'final_bom' },
          { text: '“Nei… ég er ekki með handklæði.”', translation: '“Não… eu não tenho toalha.”', next: 'final_blautur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu er þurr og glaður. Þau ganga niður í Hveragerði og borða ís.',
        translation: 'O Linu está seco e contente. Eles descem até Hveragerði e tomam sorvete.',
        ending: { tone: 'bom', title: 'Banho no vale', message: 'O Linu subiu o vale, encarou o cheiro de enxofre e tomou banho num rio quente.' },
      },
      final_blautur: {
        emoji: '🥶',
        text: 'Linu er blautur og það er vindur. Brrr! En Helga er góð vinkona: hún er með tvö handklæði.',
        translation: 'O Linu está molhado e está ventando. Brrr! Mas a Helga é uma boa amiga: ela tem duas toalhas.',
        ending: { tone: 'neutro', title: 'Toalha emprestada', message: 'Sorte que a Helga trouxe duas toalhas. Na Islândia, nunca saia sem a sua!' },
      },
    },
  },
  {
    id: 'is-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pysjurnar í Eyjum',
    emoji: '🐧',
    summary: 'Numa noite de fim de verão nas ilhas Vestmannaeyjar, o Linu ajuda o Kári a salvar filhotes de papagaio-do-mar.',
    cultural_context:
      'Vestmannaeyjar tem uma das maiores colônias de papagaios-do-mar do mundo. Em agosto e setembro, os filhotes (pysjur) saem do ninho à noite, se confundem com as luzes da cidade e caem nas ruas; as crianças os recolhem em caixas de papelão e os soltam no mar no dia seguinte.',
    start: 'start',
    glossary: [
      ['pysja / pysjurnar', 'filhote de papagaio-do-mar / os filhotes'],
      ['kassi / kassinn', 'caixa / a caixa'],
      ['ekkert ennþá', 'nada ainda'],
      ['ljósin', 'as luzes (neutro plural: -in)'],
      ['hræddur, hrædd', 'com medo (masculino, feminino)'],
      ['varlega', 'com cuidado'],
      ['átta ára', 'oito anos de idade'],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: 'Það er kvöld í Vestmannaeyjum. Kári er átta ára og hann er með kassa.',
        translation: 'É noite em Vestmannaeyjar. O Kári tem oito anos e está com uma caixa.',
        choices: [
          { text: '“Hvað er í kassanum?”', translation: '“O que tem na caixa?”', next: 'kassi' },
          { text: 'Linu fer heim að sofa.', translation: 'O Linu vai para casa dormir.', next: 'final_sofa' },
        ],
      },
      kassi: {
        emoji: '📦',
        text: '“Ekkert ennþá. Nú leitum við að pysjum!” Pysja er lítill lundi.',
        translation: '“Nada ainda. Agora vamos procurar filhotes!” Uma “pysja” é um papagaio-do-mar pequeno.',
        choices: [
          { text: 'Linu leitar með Kára.', translation: 'O Linu procura com o Kári.', next: 'gata' },
          {
            text: '“Er kassinn fullur?”',
            translation: '“A caixa está cheia?”',
            wrong: 'O Kári disse “Ekkert ennþá”: nada ainda! A caixa está vazia; eles vão procurar os filhotes agora.',
          },
        ],
      },
      gata: {
        emoji: '💡',
        text: 'Ljósin í bænum eru björt. Pysjurnar sjá ljósin og fljúga ekki til sjávar.',
        translation: 'As luzes da cidade são fortes. Os filhotes veem as luzes e não voam para o mar.',
        choices: [{ text: '“Þarna! Undir bílnum!”', translation: '“Ali! Embaixo do carro!”', next: 'pysja' }],
      },
      pysja: {
        emoji: '🐣',
        text: 'Undir bílnum er lítil pysja. Hún er svört og hvít og mjög hrædd.',
        translation: 'Embaixo do carro há um filhote. Ele é preto e branco e está com muito medo.',
        choices: [
          { text: 'Kári tekur pysjuna varlega og setur hana í kassann.', translation: 'O Kári pega o filhote com cuidado e o põe na caixa.', next: 'morgunn' },
        ],
      },
      morgunn: {
        emoji: '🌅',
        text: 'Morguninn eftir fara þau niður að sjó. Kári opnar kassann.',
        translation: 'Na manhã seguinte, eles descem até o mar. O Kári abre a caixa.',
        choices: [{ text: 'Pysjan flýgur út á sjó.', translation: 'O filhote voa para o mar.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Pysjan er frjáls! Kári og Linu eru mjög glaðir.',
        translation: 'O filhote está livre! O Kári e o Linu estão muito felizes.',
        ending: { tone: 'bom', title: 'Resgate noturno', message: 'O Linu fez como as crianças de Vestmannaeyjar e ajudou um filhote a chegar ao mar.' },
      },
      final_sofa: {
        emoji: '😴',
        text: 'Linu sefur vel. En pysjurnar eru á götunum…',
        translation: 'O Linu dorme bem. Mas os filhotes estão nas ruas…',
        ending: { tone: 'neutro', title: 'Noite perdida', message: 'O Kári ia salvar filhotes de papagaio-do-mar! Tente de novo e pergunte o que tem na caixa.' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'is-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hvalir á Skjálfanda',
    emoji: '🐋',
    summary: 'Em Húsavík, o Linu embarca num passeio para ver baleias na baía de Skjálfandi.',
    cultural_context:
      'Húsavík, no norte, é conhecida como a capital da observação de baleias da Islândia: na baía de Skjálfandi é comum ver jubartes no verão. A cidade também tem um museu dedicado às baleias, com esqueletos inteiros.',
    start: 'start',
    glossary: [
      ['til Húsavíkur', 'para Húsavík (“til” pede genitivo)'],
      ['í höfninni / á bryggjuna', 'no porto (dativo: lugar) / para o cais (acusativo: movimento)'],
      ['hvalaskoðun', 'observação de baleias'],
      ['hnúfubakur', 'jubarte'],
      ['sporður', 'cauda (de peixe ou de baleia)'],
      ['galli / í gallann', 'macacão / para dentro do macacão (acusativo)'],
      ['á hverju sumri', 'todo verão'],
      ['upp úr sjónum', 'para fora do mar (“úr” pede dativo)'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu kemur til Húsavíkur með rútu. Klukkan tíu fer hann í hvalaskoðun, og báturinn bíður í höfninni.',
        translation: 'O Linu chega a Húsavík de ônibus. Às dez horas ele vai fazer observação de baleias, e o barco espera no porto.',
        choices: [
          { text: 'Linu fer beint niður á bryggjuna.', translation: 'O Linu desce direto para o cais.', next: 'batur' },
          { text: 'Linu fer fyrst á hvalasafnið.', translation: 'O Linu vai primeiro ao museu da baleia.', next: 'safn' },
        ],
      },
      safn: {
        emoji: '🦴',
        text: 'Á safninu hanga stórar beinagrindur af hvölum. Linu horfir á þær lengi… of lengi! Klukkan er næstum tíu.',
        translation: 'No museu há grandes esqueletos de baleias pendurados. O Linu olha para eles muito tempo… tempo demais! Já são quase dez horas.',
        choices: [{ text: 'Linu hleypur niður á bryggjuna og nær bátnum.', translation: 'O Linu corre até o cais e alcança o barco.', next: 'batur' }],
      },
      batur: {
        emoji: '🧥',
        text: 'Skipstjórinn heitir Einar. Hann réttir Linu hlýjan galla. “Farðu í gallann. Úti á flóanum er kalt.”',
        translation: 'O capitão se chama Einar. Ele entrega ao Linu um macacão quente. “Vista o macacão. Lá fora na baía faz frio.”',
        choices: [
          { text: 'Linu fer í gallann.', translation: 'O Linu veste o macacão.', next: 'floi' },
          {
            text: 'Linu setur gallann í töskuna.',
            translation: 'O Linu guarda o macacão na bolsa.',
            wrong: 'O Einar disse “Farðu í gallann”: vista o macacão! “Fara í” + acusativo é “entrar em”, e com roupa quer dizer “vestir”. Na baía faz frio.',
          },
        ],
      },
      floi: {
        emoji: '⛵',
        text: 'Báturinn siglir út á flóann. Allt í einu segir Einar: “Sjáið þið? Þarna, við fjöllin!”',
        translation: 'O barco navega para a baía. De repente, o Einar diz: “Estão vendo? Ali, perto das montanhas!”',
        choices: [
          { text: '“Hvar? Ég sé ekkert.”', translation: '“Onde? Não vejo nada.”', next: 'hnufubakur' },
          { text: '“Er þetta hvalur?”', translation: '“Isso é uma baleia?”', next: 'hnufubakur' },
        ],
      },
      hnufubakur: {
        emoji: '🐋',
        text: 'Stór hnúfubakur kemur upp úr sjónum og blæs. Einar segir: “Við köllum hann Stebba. Hann kemur hingað á hverju sumri.”',
        translation: 'Uma jubarte grande sobe do mar e solta um jato. O Einar diz: “Nós o chamamos de Stebbi. Ele vem aqui todo verão.”',
        choices: [
          { text: '“Hvað borðar hann?”', translation: '“O que ele come?”', next: 'matur' },
          { text: '“Má ég taka mynd?”', translation: '“Posso tirar uma foto?”', next: 'mynd' },
          {
            text: '“Er þetta fyrsta sumarið hans hér?”',
            translation: '“É o primeiro verão dele aqui?”',
            wrong: 'O Einar disse “Hann kemur hingað á hverju sumri”: ele vem aqui TODO verão. “Á hverju sumri” (com “á” + dativo) é “todo verão”.',
          },
        ],
      },
      matur: {
        emoji: '🦐',
        text: 'Einar svarar: “Hann borðar lítinn fisk og átu. Á hverjum degi borðar hann mörg hundruð kíló!”',
        translation: 'O Einar responde: “Ele come peixe pequeno e krill. Todo dia ele come centenas de quilos!”',
        choices: [
          { text: 'Linu tekur upp símann.', translation: 'O Linu pega o celular.', next: 'mynd' },
          { text: 'Linu spyr Einar um fleiri hvali.', translation: 'O Linu pergunta ao Einar sobre outras baleias.', next: 'final_spjall' },
        ],
      },
      mynd: {
        emoji: '📱',
        text: 'Hnúfubakurinn kafar og sporðurinn kemur upp úr vatninu.',
        translation: 'A jubarte mergulha e a cauda sai da água.',
        choices: [{ text: 'Linu tekur mynd af sporðinum.', translation: 'O Linu tira uma foto da cauda.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Myndin er fullkomin: stór, svartur sporður og blá fjöll. Í höfninni segir Linu: “Takk, Einar! Þetta er frábær dagur.”',
        translation: 'A foto está perfeita: uma cauda grande e preta e montanhas azuis. No porto, o Linu diz: “Obrigado, Einar! Que dia incrível.”',
        ending: { tone: 'bom', title: 'A cauda da jubarte', message: 'O Linu vestiu o macacão, prestou atenção no Einar e fotografou a cauda da baleia.' },
      },
      final_spjall: {
        emoji: '💬',
        text: 'Linu og Einar tala og tala um hvali. Þegar Linu lítur upp er hnúfubakurinn farinn.',
        translation: 'O Linu e o Einar conversam e conversam sobre baleias. Quando o Linu levanta os olhos, a jubarte já foi embora.',
        ending: { tone: 'neutro', title: 'Conversa comprida', message: 'O Linu aprendeu muito sobre baleias, mas perdeu a cauda da jubarte. Da próxima vez, olhe para o mar!' },
      },
    },
  },
  {
    id: 'is-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mýið við Mývatn',
    emoji: '🦟',
    summary: 'Pedalando em volta do lago Mývatn com a Ragga, o Linu enfrenta uma nuvem de mosquitinhos e visita as rochas de lava de Dimmuborgir.',
    cultural_context:
      'Mývatn quer dizer “lago dos mosquitos”: no verão, nuvens de mosquitinhos (mý) voam sobre a água, a maioria deles sem picar. Perto do lago fica Dimmuborgir, um labirinto de rochas de lava onde, segundo a tradição local, moram os Jólasveinar, os treze duendes do Natal islandês.',
    start: 'start',
    glossary: [
      ['í kringum vatnið', 'em volta do lago (“í kringum” pede acusativo)'],
      ['mý', 'mosquitinhos (e daí o nome Mývatn)'],
      ['upp úr töskunni', 'de dentro da bolsa (“úr” pede dativo)'],
      ['til Dimmuborga', 'para Dimmuborgir (“til” pede genitivo)'],
      ['á milli klettanna', 'entre as rochas (“milli” pede genitivo)'],
      ['jólasveinarnir', 'os Jólasveinar, os duendes do Natal islandês'],
      ['Hvað á ég að gera?', 'O que eu faço?'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu leigir hjól við Mývatn. Í dag hjólar hann í kringum vatnið með Röggu. Veðrið er gott og það er enginn vindur.',
        translation: 'O Linu aluga uma bicicleta no Mývatn. Hoje ele pedala em volta do lago com a Ragga. O tempo está bom e não tem vento nenhum.',
        choices: [
          { text: 'Linu hjólar af stað.', translation: 'O Linu sai pedalando.', next: 'my' },
          { text: 'Linu spyr: “Af hverju heitir vatnið Mývatn?”', translation: 'O Linu pergunta: “Por que o lago se chama Mývatn?”', next: 'nafn' },
        ],
      },
      nafn: {
        emoji: '🤔',
        text: 'Ragga brosir: “Þú sérð það bráðum.” Þau hjóla af stað.',
        translation: 'A Ragga sorri: “Você logo vai ver.” Eles saem pedalando.',
        choices: [{ text: 'Linu hjólar á eftir Röggu.', translation: 'O Linu pedala atrás da Ragga.', next: 'my' }],
      },
      my: {
        emoji: '☁️',
        text: 'Allt í einu er ský í kringum höfuðið á Linu. Það er ekki ský, það er mý! Ragga hlær: “Þess vegna heitir vatnið Mývatn.”',
        translation: 'De repente, há uma nuvem em volta da cabeça do Linu. Não é nuvem, é mosquitinho! A Ragga ri: “É por isso que o lago se chama Mývatn.”',
        choices: [{ text: '“Hjálp! Hvað á ég að gera?”', translation: '“Socorro! O que eu faço?”', next: 'net' }],
      },
      net: {
        emoji: '🥅',
        text: 'Ragga tekur net upp úr töskunni. “Settu netið yfir höfuðið. Þetta mý bítur ekki, en það er pirrandi.”',
        translation: 'A Ragga tira uma rede de dentro da bolsa. “Ponha a rede por cima da cabeça. Esse mosquitinho não pica, mas é irritante.”',
        choices: [
          { text: 'Linu setur netið yfir höfuðið.', translation: 'O Linu põe a rede sobre a cabeça.', next: 'dimmuborgir' },
          {
            text: '“Æ, nei! Mýið bítur mig!”',
            translation: '“Ai, não! Os mosquitinhos estão me picando!”',
            wrong: 'A Ragga disse “Þetta mý bítur ekki”: esse mosquitinho NÃO pica. Ele só é “pirrandi”, irritante.',
          },
        ],
      },
      dimmuborgir: {
        emoji: '🌋',
        text: 'Þau hjóla til Dimmuborga. Þar eru háir, svartir hraunklettar. Ragga segir: “Jólasveinarnir búa hérna.”',
        translation: 'Eles pedalam até Dimmuborgir. Lá há rochas de lava altas e pretas. A Ragga diz: “Os duendes do Natal moram aqui.”',
        choices: [
          { text: '“Í alvöru? Hvar eru þeir núna?”', translation: '“Sério? Onde eles estão agora?”', next: 'jolasveinar' },
          { text: 'Linu gengur einn inn á milli klettanna.', translation: 'O Linu entra sozinho no meio das rochas.', next: 'hraun' },
        ],
      },
      jolasveinar: {
        emoji: '🎅',
        text: '“Á sumrin sofa þeir. Í desember fara þeir til byggða og gefa börnum gjafir í skóinn.”',
        translation: '“No verão eles dormem. Em dezembro eles descem até as cidades e deixam presentes no sapato das crianças.”',
        choices: [{ text: '“Þá kem ég aftur í desember!”', translation: '“Então eu volto em dezembro!”', next: 'final_bom' }],
      },
      hraun: {
        emoji: '🧭',
        text: 'Stígarnir eru margir og allir eins. Linu snýr sér við… Hvar er Ragga?',
        translation: 'As trilhas são muitas e todas iguais. O Linu se vira… Onde está a Ragga?',
        choices: [
          { text: 'Linu kallar á Röggu.', translation: 'O Linu chama a Ragga.', next: 'final_kall' },
          { text: 'Linu gengur lengra inn í hraunið.', translation: 'O Linu entra mais fundo na lava.', next: 'final_villtur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ragga og Linu hjóla aftur að vatninu. Linu er þreyttur, en hann hlakkar til jólanna.',
        translation: 'A Ragga e o Linu pedalam de volta até o lago. O Linu está cansado, mas já está ansioso pelo Natal.',
        ending: { tone: 'bom', title: 'Encontro marcado', message: 'O Linu sobreviveu aos mosquitinhos e já tem planos de voltar no Natal.' },
      },
      final_kall: {
        emoji: '🙌',
        text: 'Ragga svarar strax. Hún stendur á bak við næsta klett og hlær.',
        translation: 'A Ragga responde na hora. Ela está atrás da rocha seguinte, rindo.',
        ending: { tone: 'bom', title: 'Achados!', message: 'Num labirinto de lava, chamar a amiga foi a melhor ideia.' },
      },
      final_villtur: {
        emoji: '😰',
        text: 'Linu gengur og gengur. Eftir klukkutíma finnur Ragga hann við stóran klett, þreyttan og svangan.',
        translation: 'O Linu anda e anda. Depois de uma hora, a Ragga o encontra ao lado de uma rocha grande, cansado e com fome.',
        ending: { tone: 'neutro', title: 'Perdido na lava', message: 'Em Dimmuborgir as trilhas se parecem: fique perto de quem conhece o caminho.' },
      },
    },
  },
  {
    id: 'is-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Á milli heimsálfa',
    emoji: '🌍',
    summary: 'Em Þingvellir, o Linu passeia com o guia Björn pela fenda entre duas placas tectônicas e decide se mergulha em Silfra.',
    cultural_context:
      'Em Þingvellir foi fundado, em 930, o Alþingi, uma das assembleias parlamentares mais antigas do mundo. O parque fica no vale onde se afastam as placas norte-americana e eurasiática, uns 2 cm por ano; a fenda de Silfra, de água cristalina a 2–4 °C, é famosa para mergulho.',
    start: 'start',
    glossary: [
      ['á Þingvöllum', 'em Þingvellir (“á” + dativo plural)'],
      ['með Birni', 'com o Björn (“með” + dativo: Björn vira Birni)'],
      ['gjá', 'fenda, desfiladeiro'],
      ['flekinn / flekarnir', 'a placa / as placas tectônicas'],
      ['í sundur', 'separando-se, cada um para um lado'],
      ['hinum megin við dalinn', 'do outro lado do vale'],
      ['mörgæs', 'pinguim (feminino!)'],
    ],
    nodes: {
      start: {
        emoji: '🪨',
        text: 'Linu er á Þingvöllum með Birni leiðsögumanni. Þeir ganga niður í Almannagjá. Veggirnir eru háir og svartir.',
        translation: 'O Linu está em Þingvellir com o guia Björn. Eles descem até Almannagjá. As paredes são altas e pretas.',
        choices: [
          { text: '“Hvað er þessi gjá?”', translation: '“Que fenda é essa?”', next: 'gja' },
          { text: 'Linu snertir vegginn.', translation: 'O Linu toca na parede.', next: 'veggur' },
        ],
      },
      gja: {
        emoji: '🗺️',
        text: 'Björn segir: “Þetta er Almannagjá. Veggurinn er brún Norður-Ameríkuflekans.”',
        translation: 'O Björn diz: “Esta é Almannagjá. A parede é a borda da placa norte-americana.”',
        choices: [{ text: 'Linu snertir vegginn.', translation: 'O Linu toca na parede.', next: 'veggur' }],
      },
      veggur: {
        emoji: '🖐️',
        text: 'Linu snertir kaldan steininn. “Nú snertir þú Norður-Ameríku!” segir Björn og hlær.',
        translation: 'O Linu toca a pedra fria. “Agora você está tocando a América do Norte!”, diz o Björn, rindo.',
        choices: [{ text: '“En hvar er Evrópa?”', translation: '“Mas onde está a Europa?”', next: 'evropa' }],
      },
      evropa: {
        emoji: '↔️',
        text: '“Hinum megin við dalinn. Flekarnir færast í sundur, um tvo sentímetra á ári.”',
        translation: '“Do outro lado do vale. As placas se afastam uma da outra, uns dois centímetros por ano.”',
        choices: [
          { text: '“Svo Ísland stækkar á hverju ári!”', translation: '“Então a Islândia cresce todo ano!”', next: 'logberg' },
          {
            text: '“Svo flekarnir koma nær hvor öðrum?”',
            translation: '“Então as placas se aproximam uma da outra?”',
            wrong: 'O Björn disse “færast í sundur”: as placas se AFASTAM. “Í sundur” é “separando-se”. Por isso o vale vai ficando mais largo.',
          },
        ],
      },
      logberg: {
        emoji: '🇮🇸',
        text: 'Þeir ganga að Lögbergi, þar sem fáninn er. Björn spyr: “Viltu fara í Silfru? Vatnið þar er tært og mjög kalt.”',
        translation: 'Eles vão até o Lögberg, onde fica a bandeira. O Björn pergunta: “Quer entrar em Silfra? A água lá é cristalina e muito fria.”',
        choices: [
          { text: '“Já! Ég elska kalt vatn.”', translation: '“Quero! Eu adoro água fria.”', next: 'silfra' },
          { text: '“Nei, ég fer frekar á kaffihúsið.”', translation: '“Não, prefiro ir ao café.”', next: 'final_kaffi' },
        ],
      },
      silfra: {
        emoji: '🤿',
        text: 'Vatnið í Silfru er bara tvær eða þrjár gráður, en Linu er mörgæs! Hann syndir á milli Ameríku og Evrópu.',
        translation: 'A água em Silfra tem só dois ou três graus, mas o Linu é pinguim! Ele nada entre a América e a Europa.',
        choices: [
          { text: 'Linu syndir og horfir á bláa vatnið.', translation: 'O Linu nada e olha a água azul.', next: 'final_bom' },
          {
            text: 'Linu fer strax upp úr: vatnið er of kalt fyrir hann.',
            translation: 'O Linu sai na hora: a água é fria demais para ele.',
            wrong: 'O texto lembra: “en Linu er mörgæs!” Ele é um pinguim-de-barbicha, da Antártida. Dois ou três graus é água normal para ele!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Á eftir segir Björn: “Þú ert fyrsta mörgæsin í Silfru!” Linu er mjög stoltur.',
        translation: 'Depois, o Björn diz: “Você é o primeiro pinguim em Silfra!” O Linu fica muito orgulhoso.',
        ending: { tone: 'bom', title: 'Entre dois continentes', message: 'O Linu tocou a América, nadou até a Europa e entendeu por que a Islândia cresce.' },
      },
      final_kaffi: {
        emoji: '☕',
        text: 'Á kaffihúsinu drekkur Linu heitt kakó og horfir á kort af flekunum. Næst fer hann í Silfru!',
        translation: 'No café, o Linu toma chocolate quente e olha um mapa das placas. Da próxima vez, ele entra em Silfra!',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Chocolate quente é bom, mas um pinguim perdeu a chance de nadar entre dois continentes!' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'is-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Húfan mín!',
    emoji: '🧢',
    summary: 'Na cachoeira de Gullfoss, o vento leva a touca do Linu, e ele precisa decidir se corre atrás dela.',
    cultural_context:
      'Gullfoss, a “cachoeira de ouro”, despenca em dois degraus num cânion do rio Hvítá. No começo do século XX, Sigríður Tómasdóttir, filha do dono das terras, lutou contra os planos de usar a queda para gerar energia e hoje é lembrada como pioneira da proteção da natureza na Islândia.',
    start: 'start',
    glossary: [
      ['fór / gengu / hljóp', 'foi / andaram / correu (verbos fortes: o passado muda a vogal)'],
      ['borðuðu / stoppaði / hlustaði', 'comeram / parou / escutou (verbos fracos: -aði, -uðu)'],
      ['fauk', 'voou com o vento (de “fjúka”)'],
      ['húfan mín', 'a minha touca (o possessivo vem depois do substantivo com artigo)'],
      ['trefillinn minn / þinn', 'o meu / o seu cachecol'],
      ['hál', 'escorregadia'],
      ['gamla húfan / nýi trefillinn', 'a touca velha / o cachecol novo (adjetivo fraco, junto do artigo)'],
      ['íslensk kjötsúpa', 'sopa de carne islandesa (adjetivo forte, sem artigo)'],
    ],
    nodes: {
      start: {
        emoji: '🚗',
        text: 'Í gær fór Linu að Gullfossi með vinkonu sinni, Sólveigu. Veðrið var kalt en bjart.',
        translation: 'Ontem o Linu foi a Gullfoss com a amiga dele, a Sólveig. O tempo estava frio, mas claro.',
        choices: [
          { text: 'Þau gengu beint niður að fossinum.', translation: 'Eles desceram direto até a cachoeira.', next: 'foss' },
          { text: 'Þau fóru fyrst á kaffihúsið.', translation: 'Eles foram primeiro ao café.', next: 'kaffi' },
        ],
      },
      kaffi: {
        emoji: '🍲',
        text: 'Á kaffihúsinu borðuðu þau íslenska kjötsúpu. Hún var heit og góð.',
        translation: 'No café, eles comeram sopa de carne islandesa. Estava quente e gostosa.',
        choices: [{ text: 'Svo gengu þau niður að fossinum.', translation: 'Depois eles desceram até a cachoeira.', next: 'foss' }],
      },
      foss: {
        emoji: '💨',
        text: 'Fossinn var risastór og hávær, og það var mikill vindur. Allt í einu fauk gamla húfan hans Linu! “Húfan mín!” hrópaði hann.',
        translation: 'A cachoeira era enorme e barulhenta, e ventava muito. De repente, a touca velha do Linu voou! “A minha touca!”, gritou ele.',
        choices: [
          { text: 'Linu hljóp á eftir húfunni.', translation: 'O Linu correu atrás da touca.', next: 'hufa' },
          { text: 'Linu lét húfuna fjúka.', translation: 'O Linu deixou a touca voar.', next: 'final_kalt' },
        ],
      },
      hufa: {
        emoji: '⚠️',
        text: 'Húfan lenti á steini, rétt við brúnina. Sólveig kallaði: “Stopp, Linu! Það er hættulegt. Brúnin er hál.”',
        translation: 'A touca caiu numa pedra, bem na beirada. A Sólveig gritou: “Pare, Linu! É perigoso. A beirada é escorregadia.”',
        choices: [
          { text: 'Linu stoppaði og hlustaði á hana.', translation: 'O Linu parou e escutou a amiga.', next: 'solveig' },
          {
            text: 'Linu fór alveg út á brúnina.',
            translation: 'O Linu foi até a pontinha da beirada.',
            wrong: 'A Sólveig gritou “Stopp!” e avisou: “Brúnin er hál”, a beirada é escorregadia. Ir até lá por causa de uma touca velha não vale o risco!',
          },
        ],
      },
      solveig: {
        emoji: '🧣',
        text: 'Sólveig tók af sér trefilinn sinn. “Hérna, taktu trefilinn minn. Hann er hlýr.”',
        translation: 'A Sólveig tirou o cachecol dela. “Tome, pegue o meu cachecol. Ele é quentinho.”',
        choices: [
          { text: '“Takk! Trefillinn þinn er mjög mjúkur.”', translation: '“Obrigado! O seu cachecol é muito macio.”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌈',
        text: 'Linu og Sólveig horfðu lengi á fossinn og sáu regnboga í úðanum. Gamla húfan var farin, en nýi trefillinn var hlýr.',
        translation: 'O Linu e a Sólveig olharam muito tempo a cachoeira e viram um arco-íris na névoa. A touca velha se foi, mas o cachecol novo era quentinho.',
        ending: { tone: 'bom', title: 'Arco-íris em Gullfoss', message: 'O Linu escutou a amiga, ficou longe da beirada e ainda ganhou um cachecol.' },
      },
      final_kalt: {
        emoji: '🥶',
        text: 'Húfan hvarf í fossinn. Linu var með kalt höfuð allan daginn.',
        translation: 'A touca sumiu na cachoeira. O Linu ficou com a cabeça gelada o dia inteiro.',
        ending: { tone: 'neutro', title: 'Cabeça fria', message: 'Não correr atrás da touca foi prudente, mas o dia ficou gelado. Tente de novo e veja o que a Sólveig oferece!' },
      },
    },
  },
  {
    id: 'is-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Leyndardómar jökulsins',
    emoji: '🏔️',
    summary: 'Na península de Snæfellsnes, o Linu leva um livro de Jules Verne e sonha em subir a geleira.',
    cultural_context:
      'Em “Viagem ao Centro da Terra” (1864), de Jules Verne, os exploradores descem pela cratera do Snæfellsjökull; em islandês o livro se chama “Leyndardómar Snæfellsjökuls”. A geleira fica na ponta da península de Snæfellsnes, que tem também o Kirkjufell, uma das montanhas mais fotografadas do país.',
    start: 'start',
    glossary: [
      ['fór / tók / las / gekk', 'foi / levou / leu / andou (verbos fortes no passado)'],
      ['keyrðu / benti / hlustaði', 'dirigiram / apontou / escutou (verbos fracos no passado)'],
      ['vinkonu sinni', 'a amiga dele (“sinn” reflexivo, no dativo)'],
      ['í bókinni þinni', 'no seu livro'],
      ['jökull / jökullinn', 'geleira / a geleira'],
      ['hvíta fjallið', 'a montanha branca (adjetivo fraco)'],
      ['þoka', 'neblina'],
      ['búnaður', 'equipamento'],
    ],
    nodes: {
      start: {
        emoji: '📖',
        text: 'Í síðustu viku fór Linu á Snæfellsnes með Þóru, vinkonu sinni. Hann tók með sér gamla bók, Leyndardóma Snæfellsjökuls, eftir Jules Verne.',
        translation: 'Na semana passada, o Linu foi a Snæfellsnes com a Þóra, amiga dele. Ele levou um livro velho: “Viagem ao Centro da Terra”, de Jules Verne.',
        choices: [
          { text: 'Þau keyrðu fyrst að Kirkjufelli.', translation: 'Eles foram primeiro até o Kirkjufell.', next: 'kirkjufell' },
          { text: 'Þau keyrðu beint á Arnarstapa.', translation: 'Eles foram direto para Arnarstapi.', next: 'arnarstapi' },
        ],
      },
      kirkjufell: {
        emoji: '⛰️',
        text: 'Kirkjufell var grænt og fallegt. Margir ferðamenn tóku myndir af fjallinu og litla fossinum.',
        translation: 'O Kirkjufell estava verde e bonito. Muitos turistas tiravam fotos da montanha e da cachoeirinha.',
        choices: [{ text: 'Síðan héldu þau áfram á Arnarstapa.', translation: 'Depois eles seguiram para Arnarstapi.', next: 'arnarstapi' }],
      },
      arnarstapi: {
        emoji: '🪨',
        text: 'Á Arnarstapa gengu þau eftir ströndinni. Þóra benti á jökulinn: “Sérðu hvíta fjallið? Í bókinni þinni fer fólk niður í jörðina þar.”',
        translation: 'Em Arnarstapi, eles andaram pela costa. A Þóra apontou para a geleira: “Está vendo a montanha branca? No seu livro, as pessoas descem para dentro da terra ali.”',
        choices: [
          { text: '“Já! Þar byrjar ferðin að miðju jarðar.”', translation: '“Sim! Ali começa a viagem ao centro da Terra.”', next: 'jokull' },
          {
            text: '“Endar ferðin í bókinni á jöklinum?”',
            translation: '“A viagem do livro termina na geleira?”',
            wrong: 'A Þóra disse que no livro as pessoas “fer… niður í jörðina þar”: DESCEM para dentro da terra ali. A geleira é onde a viagem COMEÇA.',
          },
        ],
      },
      jokull: {
        emoji: '🌅',
        text: 'Þau settust á stein og Linu las upphátt úr bókinni sinni. Sólin var lágt á lofti og jökullinn var bleikur.',
        translation: 'Eles se sentaram numa pedra e o Linu leu em voz alta o livro dele. O sol estava baixo e a geleira estava rosada.',
        choices: [
          { text: 'Linu vildi ganga upp á jökulinn.', translation: 'O Linu quis subir a geleira.', next: 'upp' },
          { text: 'Þau fóru á lítið kaffihús á Hellnum.', translation: 'Eles foram a um cafezinho em Hellnar.', next: 'final_bom' },
        ],
      },
      upp: {
        emoji: '🙅',
        text: 'Þóra hristi höfuðið. “Nei, það er of seint og við höfum engan búnað. Jökullinn er hættulegur.”',
        translation: 'A Þóra balançou a cabeça. “Não, está tarde demais e não temos equipamento nenhum. A geleira é perigosa.”',
        choices: [
          { text: '“Þú hefur rétt fyrir þér. Næst fer ég með leiðsögumanni.”', translation: '“Você tem razão. Da próxima vez, eu vou com um guia.”', next: 'final_bom' },
          { text: 'Linu fór samt einn af stað.', translation: 'O Linu foi sozinho mesmo assim.', next: 'final_thoka' },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Á Hellnum drukku þau heitt kakó á litlu kaffihúsi. Linu skrifaði í dagbókina sína: “Besti dagurinn minn á Íslandi!”',
        translation: 'Em Hellnar, eles tomaram chocolate quente num cafezinho. O Linu escreveu no diário dele: “O meu melhor dia na Islândia!”',
        ending: { tone: 'bom', title: 'Aventura de livro', message: 'O Linu viu a geleira de Jules Verne e deixou a subida para um dia com guia.' },
      },
      final_thoka: {
        emoji: '🌫️',
        text: 'Linu gekk upp í hálftíma, en þá kom þoka. Hann sá ekkert og sneri við, blautur og kaldur.',
        translation: 'O Linu subiu por meia hora, mas então veio a neblina. Ele não via nada e voltou, molhado e com frio.',
        ending: { tone: 'neutro', title: 'Perdido na neblina', message: 'A Þóra tinha razão: geleira não é passeio para fazer sozinho e sem equipamento.' },
      },
    },
  },
  {
    id: 'is-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Síldarstúlkan',
    emoji: '🐟',
    summary: 'Em Siglufjörður, a antiga capital do arenque, o Linu conhece a Ásta, que salgava peixe quando era moça.',
    cultural_context:
      'Na primeira metade do século XX, Siglufjörður, no norte, foi a capital islandesa do arenque: no verão, milhares de pessoas vinham trabalhar ali, e as “síldarstúlkur” salgavam o peixe em barris nos cais. O arenque sumiu no fim dos anos 1960, e hoje a cidade tem um museu dedicado a essa época.',
    start: 'start',
    glossary: [
      ['til Siglufjarðar', 'para Siglufjörður (“til” + genitivo)'],
      ['síld / síldin', 'arenque / o arenque'],
      ['síldarstúlka', 'moça do arenque, que salgava o peixe'],
      ['tunna / tunnur', 'barril / barris'],
      ['söltuðum / dönsuðum', 'salgávamos / dançávamos (verbos fracos no passado)'],
      ['hvarf', 'sumiu (de “hverfa”, verbo forte)'],
      ['mamma mín', 'minha mãe'],
      ['gömul kona', 'uma senhora (adjetivo forte)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu kom til Siglufjarðar með rútu. Fjörðurinn var þröngur og fjöllin voru há.',
        translation: 'O Linu chegou a Siglufjörður de ônibus. O fiorde era estreito e as montanhas eram altas.',
        choices: [
          { text: 'Hann fór á síldarminjasafnið.', translation: 'Ele foi ao museu do arenque.', next: 'safn' },
          { text: 'Hann gekk niður á höfnina.', translation: 'Ele desceu até o porto.', next: 'hofn' },
        ],
      },
      safn: {
        emoji: '🏚️',
        text: 'Safnið var í gömlu, rauðu húsi. Inni voru tunnur, net og gamlar myndir. Við eina myndina stóð gömul kona.',
        translation: 'O museu ficava numa casa velha e vermelha. Lá dentro havia barris, redes e fotos antigas. Diante de uma das fotos estava uma senhora.',
        choices: [{ text: 'Linu heilsaði henni.', translation: 'O Linu a cumprimentou.', next: 'asta' }],
      },
      hofn: {
        emoji: '⚓',
        text: 'Á höfninni voru litlir bátar. Á bekk sat gömul kona og horfði á sjóinn.',
        translation: 'No porto havia barcos pequenos. Num banco, uma senhora estava sentada, olhando o mar.',
        choices: [{ text: 'Linu settist hjá henni.', translation: 'O Linu se sentou ao lado dela.', next: 'asta' }],
      },
      asta: {
        emoji: '👵',
        text: 'Konan hét Ásta. “Þegar ég var ung var ég síldarstúlka hérna,” sagði hún. “Við söltuðum síld í tunnur allan daginn og dönsuðum á kvöldin.”',
        translation: 'A senhora se chamava Ásta. “Quando eu era moça, eu era moça do arenque aqui”, disse ela. “A gente salgava arenque em barris o dia inteiro e dançava à noite.”',
        choices: [
          { text: '“Var það erfitt?”', translation: '“Era difícil?”', next: 'erfitt' },
          {
            text: '“Söltuðuð þið síldina bara á kvöldin?”',
            translation: '“Vocês salgavam o arenque só à noite?”',
            wrong: 'A Ásta disse que elas salgavam “allan daginn” (o dia inteiro) e dançavam “á kvöldin” (à noite). A noite era para dançar!',
          },
        ],
      },
      erfitt: {
        emoji: '💪',
        text: '“Já, mjög erfitt. En við vorum ungar og glaðar. Mamma mín var líka hérna, og hún var fljótust af öllum stúlkunum.”',
        translation: '“Sim, muito difícil. Mas éramos jovens e alegres. A minha mãe também estava aqui, e ela era a mais rápida de todas as moças.”',
        choices: [
          { text: '“Hvað gerðist svo?”', translation: '“E o que aconteceu depois?”', next: 'endir' },
          { text: 'Linu leit á klukkuna sína. Rútan hans var að fara!', translation: 'O Linu olhou o relógio dele. O ônibus dele estava saindo!', next: 'final_ruta' },
        ],
      },
      endir: {
        emoji: '🌊',
        text: '“Svo hvarf síldin. Bátarnir fóru og margt fólk flutti burt. Bærinn varð rólegur.”',
        translation: '“Aí o arenque sumiu. Os barcos foram embora e muita gente se mudou. A cidade ficou tranquila.”',
        choices: [{ text: '“Leiðinlegt… en bærinn er fallegur núna.”', translation: '“Que pena… mas a cidade é bonita agora.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '💃',
        text: 'Ásta brosti. “Í kvöld er ball á safninu. Við dönsum eins og í gamla daga!” Og Linu dansaði með Ástu fram á nótt.',
        translation: 'A Ásta sorriu. “Hoje à noite tem baile no museu. Vamos dançar como nos velhos tempos!” E o Linu dançou com a Ásta até tarde da noite.',
        ending: { tone: 'bom', title: 'Baile do arenque', message: 'O Linu escutou a história da Ásta e ainda dançou como nos tempos do arenque.' },
      },
      final_ruta: {
        emoji: '🚌',
        text: 'Linu hljóp út á stoppistöð, en rútan var farin. Ásta hló: “Komdu, þú getur sofið hjá mér í nótt.”',
        translation: 'O Linu correu até o ponto, mas o ônibus já tinha ido. A Ásta riu: “Venha, você pode dormir lá em casa hoje.”',
        ending: { tone: 'neutro', title: 'Ônibus perdido', message: 'O Linu perdeu o ônibus e o fim da história da Ásta. Ainda bem que em Siglufjörður todo mundo ajuda!' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'is-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Selurinn í lóninu',
    emoji: '🧊',
    summary: 'Na lagoa glacial de Jökulsárlón, o Linu passeia de barco entre icebergs e fica cara a cara com uma foca.',
    cultural_context:
      'Jökulsárlón, no sul, é uma lagoa formada pelo recuo da geleira Breiðamerkurjökull, um braço do Vatnajökull. Os blocos de gelo que saem da lagoa para o mar encalham na praia de areia preta em frente, apelidada de “Praia dos Diamantes”, e focas costumam nadar entre os icebergs.',
    start: 'start',
    glossary: [
      ['á bakka Jökulsárlóns', 'na margem do Jökulsárlón (genitivo: -s)'],
      ['ísjaki / á milli jakanna', 'iceberg / entre os icebergs (genitivo plural)'],
      ['Eigum við að…?', 'Vamos…? Será que a gente deve…?'],
      ['verða að / mega ekki', 'ter que / não poder'],
      ['ætla að / munu', 'pretender (plano) / ir (futuro, previsão)'],
      ['Komdu! / Sjáðu! / Vertu kyrr!', 'Venha! / Olhe! / Fique parado!'],
      ['selur / til selsins', 'foca / para a foca (“til” + genitivo)'],
      ['björgunarvesti', 'colete salva-vidas'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu og Hrafn standa á bakka Jökulsárlóns. Í lóninu fljóta ísjakar, bláir og hvítir, og á bak við þá sést tunga Breiðamerkurjökuls. “Eigum við að fara í bátsferð?” spyr Hrafn.',
        translation: 'O Linu e o Hrafn estão na margem do Jökulsárlón. Na lagoa flutuam icebergs, azuis e brancos, e atrás deles se vê a língua da geleira Breiðamerkurjökull. “Vamos fazer um passeio de barco?”, pergunta o Hrafn.',
        choices: [
          { text: '“Já! Hvenær fer næsti bátur?”', translation: '“Vamos! Quando sai o próximo barco?”', next: 'midi' },
          { text: '“Fyrst vil ég ganga niður á ströndina.”', translation: '“Primeiro eu quero descer até a praia.”', next: 'strond' },
        ],
      },
      strond: {
        emoji: '💎',
        text: 'Hinum megin við veginn er svört strönd. Þar liggja ísmolar á sandinum og glitra eins og demantar. “Þess vegna kalla margir þetta Demantaströndina,” segir Hrafn. “Komdu, við skulum ná bátnum.”',
        translation: 'Do outro lado da estrada há uma praia preta. Ali, pedaços de gelo estão na areia e brilham como diamantes. “Por isso muita gente chama isto de Praia dos Diamantes”, diz o Hrafn. “Venha, vamos pegar o barco.”',
        choices: [{ text: 'Þeir ganga aftur að lóninu.', translation: 'Eles voltam até a lagoa.', next: 'midi' }],
      },
      midi: {
        emoji: '🎟️',
        text: 'Við miðasöluna segir starfsmaður: “Næsti bátur fer eftir tuttugu mínútur. Þið verðið að fara í björgunarvesti. Og munið: það má ekki klifra upp á ísjakana!”',
        translation: 'Na bilheteria, um funcionário diz: “O próximo barco sai daqui a vinte minutos. Vocês têm que vestir colete salva-vidas. E lembrem-se: não é permitido subir nos icebergs!”',
        choices: [
          { text: 'Þeir kaupa tvo miða og fara í vestin.', translation: 'Eles compram dois bilhetes e vestem os coletes.', next: 'batur' },
          {
            text: '“Getum við klifrað upp á stóran ísjaka?”',
            translation: '“A gente pode subir num iceberg grande?”',
            wrong: 'O funcionário acabou de dizer “það má ekki klifra upp á ísjakana”: NÃO é permitido subir nos icebergs. “Má ekki” é proibição. Eles podem virar a qualquer momento!',
          },
        ],
      },
      batur: {
        emoji: '🚤',
        text: 'Báturinn siglir hægt á milli jakanna. Leiðsögukonan segir: “Blái ísinn er mjög gamall og þéttur. Liturinn á ísnum segir sögu hans.” Allt í einu stingur selur hausnum upp úr vatninu.',
        translation: 'O barco navega devagar entre os icebergs. A guia diz: “O gelo azul é muito antigo e denso. A cor do gelo conta a história dele.” De repente, uma foca põe a cabeça para fora da água.',
        choices: [
          { text: '“Sjáðu! Selur!”', translation: '“Olhe! Uma foca!”', next: 'selur' },
          { text: 'Linu vill smakka ísinn.', translation: 'O Linu quer provar o gelo.', next: 'ismoli' },
        ],
      },
      ismoli: {
        emoji: '🧊',
        text: 'Leiðsögukonan tekur lítinn ísmola upp úr vatninu og réttir honum. “Smakkaðu! Þessi ís er kannski þúsund ára gamall.” Linu smakkar: ísinn er kaldur og hreinn.',
        translation: 'A guia tira um pedacinho de gelo da água e o entrega a ele. “Prove! Este gelo talvez tenha mil anos.” O Linu prova: o gelo é frio e puro.',
        choices: [{ text: 'Þá sér Linu selinn.', translation: 'Então o Linu vê a foca.', next: 'selur' }],
      },
      selur: {
        emoji: '🦭',
        text: 'Selurinn horfir á Linu með stórum, svörtum augum. Linu langar að kafa út í vatnið til hans. Hrafn grípur í hann: “Nei, vertu kyrr! Þú mátt ekki fara úr bátnum.”',
        translation: 'A foca olha para o Linu com olhos grandes e pretos. O Linu tem vontade de mergulhar na água até ela. O Hrafn o segura: “Não, fique parado! Você não pode sair do barco.”',
        choices: [
          { text: 'Linu verður kyrr og veifar til selsins.', translation: 'O Linu fica parado e acena para a foca.', next: 'final_bom' },
          { text: 'Linu stekkur út í lónið.', translation: 'O Linu pula na lagoa.', next: 'final_hopp' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Eftir ferðina segir Hrafn: “Á morgun ætlum við að sjá sólarupprásina á Demantaströndinni.” Linu brosir. Hann mun muna eftir selnum alla ævi.',
        translation: 'Depois do passeio, o Hrafn diz: “Amanhã vamos ver o nascer do sol na Praia dos Diamantes.” O Linu sorri. Ele vai se lembrar da foca a vida inteira.',
        ending: { tone: 'bom', title: 'Olho no olho', message: 'O Linu seguiu as regras do barco e ganhou um encontro inesquecível com a foca.' },
      },
      final_hopp: {
        emoji: '💦',
        text: 'Linu stekkur út í lónið, syndir í kringum selinn og kemur aftur upp í bátinn. Leiðsögukonan er ekki ánægð: “Við munum aldrei taka mörgæs með okkur aftur!”',
        translation: 'O Linu pula na lagoa, nada em volta da foca e volta para o barco. A guia não fica nada contente: “Nunca mais vamos levar um pinguim com a gente!”',
        ending: { tone: 'neutro', title: 'Pinguim proibido', message: 'O Hrafn avisou “Þú mátt ekki fara úr bátnum”: não pode sair do barco. Divertido, mas o Linu perdeu a vaga no próximo passeio.' },
      },
    },
  },
  {
    id: 'is-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Refurinn á Hornströndum',
    emoji: '🦊',
    summary: 'Em Ísafjörður, nos Fiordes do Oeste, o Linu espera o tempo melhorar para ir de barco ver raposas-do-ártico em Hornstrandir.',
    cultural_context:
      'A raposa-do-ártico (refur ou melrakki) é o único mamífero terrestre nativo da Islândia. Hornstrandir, no extremo noroeste, ficou sem moradores em meados do século XX e virou reserva natural em 1975: lá as raposas são protegidas e só se chega de barco, por exemplo saindo de Ísafjörður.',
    start: 'start',
    glossary: [
      ['á Ísafirði', 'em Ísafjörður (“á” + dativo)'],
      ['stærsti bær Vestfjarða', 'a maior cidade dos Fiordes do Oeste (genitivo plural)'],
      ['refur / melrakki', 'raposa / raposa-do-ártico (nome antigo)'],
      ['veðurspá', 'previsão do tempo'],
      ['það mun lægja', 'o vento vai diminuir (futuro com “munu”)'],
      ['verða að / mega ekki', 'ter que / não poder'],
      ['Farðu! / Lestu! / Reyndu!', 'Vá! / Leia! / Tente!'],
      ['þolinmóður', 'paciente'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu er á Ísafirði, stærsta bæ Vestfjarða. Á morgun ætlar hann með bát til Hornstranda að sjá refi. “Veðrið ræður,” segir Kristín, konan á gistiheimilinu.',
        translation: 'O Linu está em Ísafjörður, a maior cidade dos Fiordes do Oeste. Amanhã ele pretende ir de barco a Hornstrandir para ver raposas. “Quem manda é o tempo”, diz a Kristín, a dona da pousada.',
        choices: [
          { text: '“Hvað segir veðurspáin?”', translation: '“O que diz a previsão do tempo?”', next: 'spa' },
        ],
      },
      spa: {
        emoji: '🌧️',
        text: 'Kristín les á símann sinn: “Á morgun verður rok og rigning fram að hádegi, en eftir hádegi mun lægja.” Hún bætir við: “Báturinn fer ekki fyrr en veðrið batnar.”',
        translation: 'A Kristín lê no celular: “Amanhã vai ter ventania e chuva até o meio-dia, mas à tarde o vento vai diminuir.” Ela acrescenta: “O barco só sai quando o tempo melhorar.”',
        choices: [
          { text: '“Þá fer ég eftir hádegi.”', translation: '“Então eu vou à tarde.”', next: 'bida' },
          {
            text: '“Þá fer ég snemma í fyrramálið!”',
            translation: '“Então eu vou bem cedo amanhã de manhã!”',
            wrong: 'A previsão diz “rok og rigning fram að hádegi”: ventania e chuva ATÉ O MEIO-DIA. E o barco “fer ekki fyrr en veðrið batnar”, só sai quando o tempo melhorar. De manhã não vai dar!',
          },
        ],
      },
      bida: {
        emoji: '☕',
        text: 'Morguninn eftir rignir mikið. Linu situr í eldhúsi Kristínar og spyr: “Hvað á ég að gera á meðan?” Kristín svarar: “Farðu á byggðasafnið eða lestu bók. Á Vestfjörðum verður maður að vera þolinmóður.”',
        translation: 'Na manhã seguinte, chove muito. O Linu está sentado na cozinha da Kristín e pergunta: “O que eu faço enquanto isso?” A Kristín responde: “Vá ao museu regional ou leia um livro. Nos Fiordes do Oeste, a gente tem que ter paciência.”',
        choices: [
          { text: 'Linu fer á safnið.', translation: 'O Linu vai ao museu.', next: 'safn' },
          { text: 'Linu fer niður á bryggju og talar við skipstjórann.', translation: 'O Linu desce até o cais e fala com o capitão.', next: 'skipstjori' },
        ],
      },
      safn: {
        emoji: '🖼️',
        text: 'Á safninu eru gamlir bátar og myndir af fólkinu sem bjó á Hornströndum. Síðustu bændurnir fluttu burt um miðja tuttugustu öld. Nú búa þar bara refir og fuglar.',
        translation: 'No museu há barcos antigos e fotos das pessoas que moravam em Hornstrandir. Os últimos fazendeiros se mudaram em meados do século XX. Hoje só vivem lá raposas e pássaros.',
        choices: [{ text: 'Klukkan tvö fer Linu niður á bryggju.', translation: 'Às duas horas, o Linu desce até o cais.', next: 'bryggja' }],
      },
      skipstjori: {
        emoji: '👨‍✈️',
        text: 'Skipstjórinn hristir höfuðið. “Ekki núna, vinur. Komdu aftur klukkan tvö. Ef sjórinn verður rólegur, förum við.”',
        translation: 'O capitão balança a cabeça. “Agora não, amigo. Volte às duas horas. Se o mar estiver calmo, a gente vai.”',
        choices: [{ text: 'Linu kemur aftur klukkan tvö.', translation: 'O Linu volta às duas horas.', next: 'bryggja' }],
      },
      bryggja: {
        emoji: '⛴️',
        text: 'Klukkan tvö er komin sól. Báturinn siglir yfir Ísafjarðardjúp til Hornstranda. Í landi segir leiðsögumaðurinn: “Munið: við megum ekki gefa refunum mat, og við verðum að halda okkur á stígnum.”',
        translation: 'Às duas horas o sol já saiu. O barco atravessa o Ísafjarðardjúp até Hornstrandir. Em terra, o guia diz: “Lembrem-se: não podemos dar comida às raposas, e temos que ficar na trilha.”',
        choices: [
          { text: 'Linu gengur hljóðlega eftir stígnum.', translation: 'O Linu anda em silêncio pela trilha.', next: 'refur' },
          {
            text: 'Linu tekur fisk upp úr töskunni handa refunum.',
            translation: 'O Linu tira um peixe da bolsa para as raposas.',
            wrong: 'O guia disse “við megum ekki gefa refunum mat”: NÃO podemos dar comida às raposas. Em Hornstrandir, os animais são selvagens e protegidos.',
          },
        ],
      },
      refur: {
        emoji: '🦊',
        text: 'Á bak við stein situr lítill, brúnn refur og horfir á Linu. Linu langar að klappa honum.',
        translation: 'Atrás de uma pedra, uma raposinha marrom está sentada, olhando para o Linu. O Linu tem vontade de fazer carinho nela.',
        choices: [
          { text: 'Linu sest niður og bíður rólegur.', translation: 'O Linu se senta e espera, calmo.', next: 'final_bom' },
          { text: 'Linu gengur að refnum til að klappa honum.', translation: 'O Linu vai até a raposa para fazer carinho nela.', next: 'final_flotti' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Refurinn kemur nær og nær, þefar af skónum hans og hleypur svo burt. Linu mun aldrei gleyma augum refsins.',
        translation: 'A raposa chega cada vez mais perto, cheira os sapatos dele e depois sai correndo. O Linu nunca vai esquecer os olhos da raposa.',
        ending: { tone: 'bom', title: 'Visita da raposa', message: 'Com paciência, primeiro com o tempo e depois com a raposa, o Linu teve o encontro que queria.' },
      },
      final_flotti: {
        emoji: '💨',
        text: 'Um leið og Linu stendur upp hleypur refurinn inn á milli steinanna. Leiðsögumaðurinn brosir: “Villt dýr á að skoða úr fjarlægð. Reyndu aftur á morgun!”',
        translation: 'Assim que o Linu se levanta, a raposa corre para o meio das pedras. O guia sorri: “Animal selvagem se observa de longe. Tente de novo amanhã!”',
        ending: { tone: 'neutro', title: 'Fugiu!', message: 'A raposa fugiu. Nos Fiordes do Oeste, paciência é tudo: sente-se e espere que ela venha.' },
      },
    },
  },
  {
    id: 'is-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Norður fyrir baug',
    emoji: '🧭',
    summary: 'O Linu pega a balsa para Grímsey, a ilhota cortada pelo Círculo Polar Ártico, e enfrenta enjoo e andorinhas-do-mar bravas.',
    cultural_context:
      'Grímsey, a uns 40 km da costa norte, é o único pedaço da Islândia cortado pelo Círculo Polar Ártico. Como o círculo se desloca devagar para o norte, uma grande esfera de concreto que marca sua posição é mudada de lugar de tempos em tempos. As andorinhas-do-mar-árticas (kríur) defendem os ninhos dando rasantes na cabeça de quem passa.',
    start: 'start',
    glossary: [
      ['til Grímseyjar', 'para Grímsey (“til” + genitivo)'],
      ['heimskautsbaugur', 'Círculo Polar Ártico'],
      ['norðan heimskautsbaugs', 'ao norte do Círculo Polar (genitivo)'],
      ['mér er óglatt', 'estou enjoado (sujeito no dativo)'],
      ['afi Dagnýjar', 'o avô da Dagný (genitivo)'],
      ['Taktu… og haltu honum uppi!', 'Pegue… e segure-o no alto!'],
      ['kría', 'andorinha-do-mar-ártica'],
      ['mun færast', 'vai se deslocar (futuro com “munu”)'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu tekur ferjuna frá Dalvík til Grímseyjar. Hann ætlar að stíga yfir heimskautsbauginn! Sjórinn er úfinn og Dagný, stelpa sem býr í eyjunni, spyr: “Viltu sjóveikitöflu?”',
        translation: 'O Linu pega a balsa de Dalvík para Grímsey. Ele pretende atravessar o Círculo Polar Ártico! O mar está agitado, e a Dagný, uma menina que mora na ilha, pergunta: “Quer um comprimido para enjoo?”',
        choices: [
          { text: '“Já takk, mér er dálítið óglatt.”', translation: '“Quero, obrigado, estou um pouco enjoado.”', next: 'ferja' },
          { text: '“Nei takk, mörgæsir verða aldrei sjóveikar!”', translation: '“Não, obrigado, pinguim nunca fica enjoado!”', next: 'sjoveikur' },
        ],
      },
      sjoveikur: {
        emoji: '🤢',
        text: 'Eftir klukkutíma er Linu grænn í framan. Dagný hlær og réttir honum töflu. “Taktu hana núna og horfðu á sjóndeildarhringinn.”',
        translation: 'Depois de uma hora, o Linu está verde. A Dagný ri e lhe entrega um comprimido. “Tome agora e olhe para o horizonte.”',
        choices: [{ text: 'Linu tekur töfluna.', translation: 'O Linu toma o comprimido.', next: 'ferja' }],
      },
      ferja: {
        emoji: '🐦',
        text: 'Taflan virkar. Linu stendur úti á dekki og horfir á fuglana. “Í Grímsey búa fáir,” segir Dagný, “en fuglarnir eru ótal margir.”',
        translation: 'O comprimido funciona. O Linu fica lá fora no convés olhando os pássaros. “Em Grímsey mora pouca gente”, diz a Dagný, “mas os pássaros são incontáveis.”',
        choices: [{ text: 'Ferjan kemur til Grímseyjar.', translation: 'A balsa chega a Grímsey.', next: 'hofn' }],
      },
      hofn: {
        emoji: '👴',
        text: 'Á bryggjunni bíður afi Dagnýjar. “Velkominn norður fyrir heimskautsbaug!” segir hann. “Eða næstum því: baugurinn liggur þvert yfir eyjuna. Viltu ganga að kúlunni sem sýnir hvar hann er?”',
        translation: 'No cais, o avô da Dagný espera. “Bem-vindo ao norte do Círculo Polar!”, diz ele. “Ou quase: o círculo atravessa a ilha. Quer ir até a esfera que mostra onde ele fica?”',
        choices: [
          { text: '“Já, ég vil stíga yfir bauginn!”', translation: '“Quero, eu quero atravessar o círculo!”', next: 'ganga' },
          {
            text: '“Svo öll eyjan er sunnan við bauginn?”',
            translation: '“Então a ilha toda fica ao sul do círculo?”',
            wrong: 'O avô disse “baugurinn liggur þvert yfir eyjuna”: o círculo ATRAVESSA a ilha. Uma parte de Grímsey fica ao sul, e a outra, ao norte.',
          },
        ],
      },
      ganga: {
        emoji: '🪶',
        text: 'Á leiðinni kemur kría fljúgandi og steypir sér niður að höfði Linu. Afi Dagnýjar segir: “Taktu þennan staf og haltu honum uppi! Krían ræðst alltaf á hæsta punktinn.”',
        translation: 'No caminho, uma andorinha-do-mar vem voando e dá um rasante na cabeça do Linu. O avô da Dagný diz: “Pegue este bastão e segure-o no alto! A andorinha-do-mar sempre ataca o ponto mais alto.”',
        choices: [
          { text: 'Linu heldur stafnum hátt yfir höfðinu.', translation: 'O Linu segura o bastão bem acima da cabeça.', next: 'kula' },
          { text: 'Linu hleypur í burtu.', translation: 'O Linu sai correndo.', next: 'hlaupa' },
        ],
      },
      hlaupa: {
        emoji: '🏃',
        text: 'Linu hleypur, en kríurnar eru fljótari. Þær steypa sér niður að honum aftur og aftur. “Stafinn, Linu!” kallar Dagný.',
        translation: 'O Linu corre, mas as andorinhas-do-mar são mais rápidas. Elas dão rasantes nele de novo e de novo. “O bastão, Linu!”, grita a Dagný.',
        choices: [{ text: 'Linu snýr við og tekur stafinn.', translation: 'O Linu volta e pega o bastão.', next: 'kula' }],
      },
      kula: {
        emoji: '🌐',
        text: 'Loksins koma þau að stórri, grárri kúlu. “Kúlan er færð til, af því að baugurinn færist norður,” útskýrir Dagný. “Eftir nokkra áratugi mun hann fara alveg út af eyjunni.”',
        translation: 'Finalmente eles chegam a uma esfera grande e cinzenta. “A esfera é mudada de lugar, porque o círculo se desloca para o norte”, explica a Dagný. “Daqui a algumas décadas, ele vai sair de vez da ilha.”',
        choices: [
          { text: 'Linu stekkur fram og til baka yfir bauginn.', translation: 'O Linu pula para lá e para cá por cima do círculo.', next: 'final_bom' },
          { text: 'Linu sest við kúluna og horfir á hafið í tvo tíma.', translation: 'O Linu se senta ao lado da esfera e fica olhando o mar por duas horas.', next: 'final_ferja' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Suður, norður, suður, norður! “Nú hef ég verið norðan heimskautsbaugs tíu sinnum!” hrópar Linu. Dagný og afi hennar hlæja.',
        translation: 'Sul, norte, sul, norte! “Agora eu já estive ao norte do Círculo Polar dez vezes!”, grita o Linu. A Dagný e o avô dela riem.',
        ending: { tone: 'bom', title: 'Dez vezes no Ártico', message: 'O Linu atravessou o Círculo Polar, sobreviveu às andorinhas-do-mar e ainda fez amigos em Grímsey.' },
      },
      final_ferja: {
        emoji: '⛴️',
        text: 'Þegar þau koma niður á bryggju er ferjan farin. “Þú verður að gista hjá okkur í nótt,” segir afi Dagnýjar. “Ferjan kemur aftur eftir tvo daga.”',
        translation: 'Quando eles descem até o cais, a balsa já foi. “Você vai ter que dormir na nossa casa hoje”, diz o avô da Dagný. “A balsa volta daqui a dois dias.”',
        ending: { tone: 'neutro', title: 'Preso no Ártico', message: 'O Linu perdeu a balsa olhando o mar. Em Grímsey, a balsa não sai todo dia: fique de olho no relógio!' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'is-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Hvalaskoðun frá Húsavík',
    emoji: '🐋',
    summary: 'Em Húsavík, o Linu embarca com a amiga Sigrún para ver baleias na baía de Skjálfandi, num dia de vento frio.',
    cultural_context:
      'Húsavík, no norte da Islândia, é conhecida como a capital da observação de baleias do país: na baía de Skjálfandi aparecem com frequência baleias-minke e jubartes. A cidade tem até um museu dedicado às baleias, o Hvalasafnið.',
    start: 'start',
    glossary: [
      ['hvalur, hvalir', 'baleia, baleias'],
      ['hnúfubakur', 'baleia-jubarte (literalmente “costas corcundas”)'],
      ['mig langar (til) að…', 'tenho vontade de… (sujeito em acusativo: “me dá vontade”)'],
      ['mér er kalt', 'estou com frio (sujeito em dativo: “a mim está frio”)'],
      ['honum líður illa', 'ele está se sentindo mal (dativo + “líða”)'],
      ['að hjálpa + dativo', 'ajudar alguém (hjálpa manninum)'],
      ['að gleyma + dativo', 'esquecer algo (gleyma kuldanum)'],
      ['sjóveikur', 'enjoado no mar'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu kom til Húsavíkur snemma morguns. Hann hafði lengi langað til að sjá hvali, og Sigrún, vinkona hans, vinnur á hvalaskoðunarbát við höfnina. Hún heilsaði honum og sagði að báturinn færi eftir hálftíma.',
        translation: 'O Linu chegou a Húsavík de manhã cedo. Fazia tempo que ele tinha vontade de ver baleias, e a Sigrún, amiga dele, trabalha num barco de observação de baleias no porto. Ela o cumprimentou e disse que o barco sairia dali a meia hora.',
        choices: [
          { text: 'Linu fór strax um borð með Sigrúnu.', translation: 'O Linu embarcou logo com a Sigrún.', next: 'bordi' },
          { text: 'Linu fór fyrst á kaffihús til að fá sér heitt kakó.', translation: 'O Linu foi primeiro a um café tomar um chocolate quente.', next: 'kako' },
          {
            text: 'Linu sagði Sigrúnu að hann hefði engan áhuga á hvölum.',
            translation: 'O Linu disse à Sigrún que não tinha nenhum interesse em baleias.',
            wrong: 'O texto diz “hann hafði lengi langað til að sjá hvali”: fazia tempo que ele TINHA VONTADE de ver baleias. “Langa” tem sujeito em acusativo: “mig langar” = “me dá vontade”.',
          },
        ],
      },
      kako: {
        emoji: '☕',
        text: 'Í kaffihúsinu var hlýtt og notalegt. Konan við afgreiðsluborðið spurði: “Er þér kalt?” Linu brosti og sagði að mörgæsum yrði sjaldan kalt. Þegar hann leit á klukkuna, sá hann að aðeins fimm mínútur voru í brottför.',
        translation: 'No café estava quentinho e aconchegante. A mulher no balcão perguntou: “Você está com frio?” O Linu sorriu e disse que pinguins raramente sentem frio. Quando olhou o relógio, viu que faltavam só cinco minutos para a partida.',
        choices: [
          { text: 'Linu hljóp niður á höfn.', translation: 'O Linu desceu correndo até o porto.', next: 'bordi' },
          { text: 'Linu pantaði annan bolla af kakói.', translation: 'O Linu pediu outra xícara de chocolate.', next: 'final_misst' },
        ],
      },
      bordi: {
        emoji: '🚢',
        text: 'Báturinn sigldi út á Skjálfanda. Vindurinn var kaldur, og mörgum farþegum var kalt þótt þeir væru í hlýjum göllum. Einum manni leið illa, því að hann var sjóveikur.',
        translation: 'O barco navegou para a baía de Skjálfandi. O vento estava gelado, e muitos passageiros sentiam frio, embora estivessem com macacões quentes. Um homem estava passando mal, porque estava enjoado.',
        choices: [
          { text: 'Linu hjálpaði manninum að finna sæti í miðjum bátnum.', translation: 'O Linu ajudou o homem a achar um lugar no meio do barco.', next: 'madurinn' },
          { text: 'Linu fór fram í stafn til að leita að hvölum.', translation: 'O Linu foi até a proa procurar baleias.', next: 'stafn' },
          {
            text: 'Linu spurði Sigrúnu hvort henni liði illa.',
            translation: 'O Linu perguntou à Sigrún se ela estava passando mal.',
            wrong: 'Quem passava mal era “einum manni” — UM HOMEM, no dativo (com “líða”, quem sente vai no dativo). A Sigrún está bem; quem precisa de ajuda é o homem enjoado.',
          },
        ],
      },
      madurinn: {
        emoji: '🤢',
        text: 'Maðurinn þakkaði honum fyrir hjálpina. Hann sagðist heita Gunnar og vera frá Akureyri. Honum leið strax betur þegar hann horfði á sjóndeildarhringinn, eins og Sigrún hafði ráðlagt honum.',
        translation: 'O homem agradeceu a ajuda. Disse que se chamava Gunnar e que era de Akureyri. Ele logo se sentiu melhor quando olhou para o horizonte, como a Sigrún tinha aconselhado.',
        choices: [{ text: 'Linu og Gunnar fóru saman fram í stafn.', translation: 'O Linu e o Gunnar foram juntos até a proa.', next: 'stafn' }],
      },
      stafn: {
        emoji: '🐋',
        text: 'Allt í einu benti Sigrún út á sjóinn og kallaði: “Sjáið þið blásturinn? Þetta er hnúfubakur!” Stórt, svart bak kom upp úr sjónum, og Linu sýndist hvalurinn vera næstum jafnlangur og báturinn.',
        translation: 'De repente a Sigrún apontou para o mar e gritou: “Estão vendo o esguicho? É uma jubarte!” Um dorso grande e preto saiu da água, e ao Linu pareceu que a baleia era quase do tamanho do barco.',
        choices: [
          { text: 'Linu náði í myndavélina.', translation: 'O Linu pegou a câmera.', next: 'mynd' },
          { text: 'Linu naut þess bara að horfa á hvalinn.', translation: 'O Linu simplesmente aproveitou para olhar a baleia.', next: 'final_bom' },
        ],
      },
      mynd: {
        emoji: '📷',
        text: 'Linu tók fjölda mynda, en á þeim öllum sást bara grár sjór. Hvalurinn var alltaf horfinn þegar hann smellti af. Sigrún hló og sagði að hvölunum líkaði greinilega illa við ljósmyndara.',
        translation: 'O Linu tirou um monte de fotos, mas em todas só aparecia mar cinzento. A baleia sempre já tinha sumido quando ele apertava o botão. A Sigrún riu e disse que as baleias claramente não gostavam de fotógrafos.',
        choices: [{ text: 'Linu stakk myndavélinni ofan í töskuna og horfði bara.', translation: 'O Linu enfiou a câmera na bolsa e ficou só olhando.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Á leiðinni í land sáu þau hvalinn stökkva hátt upp úr sjónum. Linu gleymdi bæði kuldanum og myndavélinni. Hann sagði Sigrúnu að hann myndi aldrei gleyma þessum degi.',
        translation: 'No caminho de volta à terra, eles viram a baleia saltar bem alto para fora da água. O Linu esqueceu o frio e a câmera. Ele disse à Sigrún que nunca ia esquecer aquele dia.',
        ending: { tone: 'bom', title: 'O salto da jubarte', message: 'O Linu enfrentou o vento frio de Skjálfandi e viu uma jubarte saltar. Repare: “gleyma” pede dativo (kuldanum, þessum degi).' },
      },
      final_misst: {
        emoji: '⛴️',
        text: 'Þegar Linu kom loksins niður á höfn, var báturinn farinn. Hann sá Sigrúnu veifa til sín langt úti á flóanum. Hann varð að bíða eftir næstu ferð, sem fór ekki fyrr en eftir hádegi.',
        translation: 'Quando o Linu finalmente chegou ao porto, o barco já tinha saído. Ele viu a Sigrún acenando para ele lá longe na baía. Teve de esperar o passeio seguinte, que só saía depois do meio-dia.',
        ending: { tone: 'neutro', title: 'Chocolate demais', message: 'O Linu viu que só faltavam cinco minutos e mesmo assim pediu outro chocolate. As baleias esperam; o barco, não!' },
      },
    },
  },
  {
    id: 'is-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Pysjunótt í Eyjum',
    emoji: '🐦',
    summary: 'Numa noite de setembro em Vestmannaeyjar, o Linu ajuda a Eyrún e o filho a resgatar filhotes de papagaio-do-mar perdidos nas luzes da cidade.',
    cultural_context:
      'Todo fim de verão, em agosto e setembro, os filhotes de papagaio-do-mar (pysjur) das ilhas Vestmannaeyjar deixam os ninhos à noite, e muitos se perdem atraídos pelas luzes da cidade de Heimaey. As crianças os recolhem em caixas de papelão e, no dia seguinte, os soltam na beira do mar.',
    start: 'start',
    glossary: [
      ['lundi / lundapysja', 'papagaio-do-mar / filhote de papagaio-do-mar'],
      ['Óla langaði…', 'o Óli tinha vontade… (sujeito em acusativo)'],
      ['mér finnst', 'eu acho, me parece (sujeito em dativo)'],
      ['okkur tókst', 'nós conseguimos (sujeito em dativo)'],
      ['að leita að + dativo', 'procurar algo (leita að pysjum)'],
      ['að sleppa + dativo', 'soltar, libertar (sleppa pysjunni)'],
      ['vasaljós', 'lanterna'],
      ['að verða e-m að bráð', 'virar presa de alguém'],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: 'Það var komið fram í september, og Linu var í heimsókn hjá Eyrúnu í Vestmannaeyjum. Á kvöldin fljúga lundapysjurnar úr holunum sínum, en margar þeirra lenda inni í bænum vegna ljósanna. Eyrún og Óli, sonur hennar, ætluðu að leita að pysjum um nóttina, og hún spurði hvort Linu langaði að koma með.',
        translation: 'Já era setembro, e o Linu estava visitando a Eyrún em Vestmannaeyjar. À noite, os filhotes de papagaio-do-mar saem voando das tocas, mas muitos acabam caindo dentro da cidade por causa das luzes. A Eyrún e o Óli, filho dela, iam procurar filhotes durante a noite, e ela perguntou se o Linu queria ir junto.',
        choices: [
          { text: 'Linu sagði já og náði í vasaljós.', translation: 'O Linu disse que sim e pegou uma lanterna.', next: 'gata' },
          { text: 'Linu spurði af hverju pysjurnar kæmu inn í bæinn.', translation: 'O Linu perguntou por que os filhotes vinham para a cidade.', next: 'afhverju' },
          {
            text: 'Linu sagðist ætla að leita að pysjum um hádegið.',
            translation: 'O Linu disse que ia procurar filhotes ao meio-dia.',
            wrong: 'O texto diz “Á kvöldin fljúga lundapysjurnar…”: é À NOITE que os filhotes saem das tocas, e a busca vai ser “um nóttina” (durante a noite).',
          },
        ],
      },
      afhverju: {
        emoji: '💡',
        text: 'Eyrún sagði að pysjurnar ættu að fljúga beint út á sjó, en ljósin í bænum rugluðu þær. Enginn vissi nákvæmlega af hverju, en þær lentu á götum og í görðum. “Ef enginn hjálpar þeim, verða þær köttum eða bílum að bráð,” sagði hún.',
        translation: 'A Eyrún disse que os filhotes deveriam voar direto para o mar, mas as luzes da cidade os confundiam. Ninguém sabia exatamente por quê, mas eles caíam nas ruas e nos jardins. “Se ninguém os ajudar, eles viram presa de gatos ou são atropelados por carros”, disse ela.',
        choices: [{ text: 'Linu náði strax í vasaljós.', translation: 'O Linu pegou logo uma lanterna.', next: 'gata' }],
      },
      gata: {
        emoji: '🔦',
        text: 'Þau gengu um göturnar með vasaljós og pappakassa. Óli var fyrstur til að sjá pysju; hún sat undir bíl og skalf. Linu fannst hún ótrúlega lítil og mjúk.',
        translation: 'Eles andaram pelas ruas com lanternas e uma caixa de papelão. O Óli foi o primeiro a ver um filhote; estava debaixo de um carro, tremendo. O Linu achou o filhote incrivelmente pequeno e macio.',
        choices: [
          { text: 'Linu hjálpaði Óla að ná pysjunni undan bílnum.', translation: 'O Linu ajudou o Óli a tirar o filhote de debaixo do carro.', next: 'nadu' },
          { text: 'Linu reyndi að grípa pysjuna einn og í flýti.', translation: 'O Linu tentou agarrar o filhote sozinho e com pressa.', next: 'flyti' },
          {
            text: 'Linu varaði Óla við því að pysjan væri stór og hættuleg.',
            translation: 'O Linu avisou o Óli de que o filhote era grande e perigoso.',
            wrong: 'O Linu achou o filhote “ótrúlega lítil og mjúk” — incrivelmente PEQUENO e MACIO. Com “finnast”, quem acha vai no dativo: “Linu fannst” = “ao Linu pareceu”.',
          },
        ],
      },
      flyti: {
        emoji: '🚗',
        text: 'Pysjan varð hrædd og hljóp lengra inn undir bílinn. Óli hvíslaði að maður mætti ekki flýta sér, af því að þá yrðu pysjurnar hræddar. Eftir smástund náðu þeir henni saman, rólega og varlega.',
        translation: 'O filhote se assustou e correu mais para debaixo do carro. O Óli sussurrou que não se pode ter pressa, porque aí os filhotes ficam com medo. Depois de um tempinho, os dois o pegaram juntos, com calma e cuidado.',
        choices: [{ text: 'Linu lagði pysjuna varlega í kassann.', translation: 'O Linu colocou o filhote com cuidado na caixa.', next: 'kassi' }],
      },
      nadu: {
        emoji: '📦',
        text: 'Óli lagðist á götuna, og Linu lýsti undir bílinn. Saman náðu þeir pysjunni og settu hana varlega í kassann. Eyrún sagði að þeim hefði tekist þetta mjög vel.',
        translation: 'O Óli se deitou na rua, e o Linu iluminou debaixo do carro. Juntos pegaram o filhote e o colocaram com cuidado na caixa. A Eyrún disse que eles tinham se saído muito bem.',
        choices: [{ text: 'Þau héldu áfram að leita.', translation: 'Eles continuaram procurando.', next: 'kassi' }],
      },
      kassi: {
        emoji: '🕛',
        text: 'Um miðnætti voru sjö pysjur komnar í kassann. Óla langaði að taka eina með sér heim og gefa henni nafn. Eyrún sagði að pysjurnar ættu heima á sjónum, ekki í herberginu hans.',
        translation: 'À meia-noite já havia sete filhotes na caixa. O Óli queria levar um para casa e dar um nome a ele. A Eyrún disse que o lugar dos filhotes era o mar, não o quarto dele.',
        choices: [
          { text: 'Linu stakk upp á að þau slepptu öllum pysjunum í fyrramálið.', translation: 'O Linu sugeriu que soltassem todos os filhotes na manhã seguinte.', next: 'final_bom' },
          { text: 'Linu sagði Óla að hann mætti eiga eina pysju.', translation: 'O Linu disse ao Óli que ele podia ficar com um filhote.', next: 'final_herbergi' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Snemma morguninn eftir fóru þau niður í fjöru. Óli kastaði fyrstu pysjunni upp í loftið, og hún flaug beint út á sjó. Linu fannst hann aldrei hafa séð neitt fallegra.',
        translation: 'Bem cedo na manhã seguinte, eles desceram até a praia. O Óli jogou o primeiro filhote para o alto, e ele voou direto para o mar. O Linu achou que nunca tinha visto nada mais bonito.',
        ending: { tone: 'bom', title: 'Sete filhotes no mar', message: 'O Linu ajudou a salvar sete filhotes de papagaio-do-mar e os viu voltar para o mar.' },
      },
      final_herbergi: {
        emoji: '😕',
        text: 'Eyrún varð ekki ánægð. Hún útskýrði að villtum fuglum liði illa inni í húsum og að þeir þyrftu að komast á sjóinn. Um morguninn var pysjunum samt sleppt, og Linu bað Óla afsökunar.',
        translation: 'A Eyrún não gostou. Ela explicou que aves selvagens sofrem dentro de casa e que precisam chegar ao mar. De manhã, os filhotes foram soltos mesmo assim, e o Linu pediu desculpas ao Óli.',
        ending: { tone: 'neutro', title: 'Filhote não é bicho de estimação', message: 'A Eyrún tinha dito que os filhotes “ættu heima á sjónum”: o lugar deles é o mar. Tente de novo!' },
      },
    },
  },
  {
    id: 'is-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Spjall í sundlauginni',
    emoji: '♨️',
    summary: 'Numa noite escura de janeiro em Reykjavík, a Hildur leva o Linu à piscina ao ar livre, e ele descobre os ofurôs e as regras do vestiário.',
    cultural_context:
      'As piscinas públicas são o centro da vida social na Islândia: a água vem aquecida pela geotermia, e as piscinas e os “heitir pottar” (ofurôs) ficam abertos ao ar livre o ano todo, mesmo sob neve. Antes de entrar, é obrigatório tomar banho sem roupa de banho no vestiário.',
    start: 'start',
    glossary: [
      ['mér er kalt / mér er hlýtt', 'estou com frio / estou aquecido (sujeito em dativo)'],
      ['mér líður vel', 'estou me sentindo bem'],
      ['heiti potturinn', 'o ofurô, a banheira quente da piscina'],
      ['að fara í sund', 'ir à piscina (literalmente “ir nadar”)'],
      ['búningsklefi', 'vestiário'],
      ['að detta í hug + dativo', 'passar pela cabeça de alguém'],
      ['að svara + dativo', 'responder a alguém'],
      ['vanur + dativo', 'acostumado a algo'],
    ],
    nodes: {
      start: {
        emoji: '🌃',
        text: 'Það var janúar í Reykjavík, fimm stiga frost, og orðið dimmt klukkan fjögur. Hildur stakk upp á að þau færu í sund í Laugardalslaug. Linu skildi ekki hvernig nokkrum gæti dottið í hug að synda úti í svona veðri.',
        translation: 'Era janeiro em Reykjavík, cinco graus abaixo de zero, e às quatro da tarde já estava escuro. A Hildur sugeriu que fossem nadar na piscina de Laugardalur. O Linu não entendia como passava pela cabeça de alguém nadar ao ar livre num tempo daqueles.',
        choices: [
          { text: 'Linu sagðist koma með, þótt honum væri kalt.', translation: 'O Linu disse que ia junto, embora estivesse com frio.', next: 'klefi' },
          { text: 'Linu spurði hvort vatnið væri ekki ískalt.', translation: 'O Linu perguntou se a água não era gelada.', next: 'heitt' },
        ],
      },
      heitt: {
        emoji: '🌡️',
        text: 'Hildur hló. Hún sagði að vatnið kæmi heitt úr jörðinni og að heitu pottarnir væru í kringum fjörutíu gráður. “Þér verður ekki kalt, því lofa ég,” sagði hún.',
        translation: 'A Hildur riu. Ela disse que a água vinha quente de dentro da terra e que os ofurôs ficavam por volta de quarenta graus. “Você não vai sentir frio, isso eu prometo”, disse ela.',
        choices: [{ text: 'Linu tók sundskýluna og handklæðið.', translation: 'O Linu pegou a sunga e a toalha.', next: 'klefi' }],
      },
      klefi: {
        emoji: '🚿',
        text: 'Í búningsklefanum hékk skilti með mynd af líkama þar sem nokkrir staðir voru merktir með rauðu. Starfsmaðurinn sagði að allir yrðu að þvo sér vel án sundfata áður en þeir færu út í laug. Linu varð svolítið vandræðalegur, en hlýddi.',
        translation: 'No vestiário havia uma placa com o desenho de um corpo, com alguns pontos marcados em vermelho. O funcionário disse que todos tinham de se lavar bem, sem roupa de banho, antes de ir para a piscina. O Linu ficou um pouco sem graça, mas obedeceu.',
        choices: [
          { text: 'Linu fór í sturtu eins og allir hinir og svo út.', translation: 'O Linu tomou banho como todos os outros e depois saiu.', next: 'pottur' },
          {
            text: 'Linu fór beint út í laugina í sundskýlunni.',
            translation: 'O Linu foi direto para a piscina de sunga.',
            wrong: 'O funcionário disse que todos “yrðu að þvo sér vel án sundfata” — TÊM de se lavar bem SEM roupa de banho antes de entrar. Na Islândia é regra, e os funcionários fiscalizam!',
          },
        ],
      },
      pottur: {
        emoji: '♨️',
        text: 'Úti var kalt og dimmt, en í heita pottinum var yndislegt. Gufan steig upp í frostið, og Linu leið eins og kóngi. Í pottinum sátu nokkrir eldri menn sem ræddu um pólitík og veðrið.',
        translation: 'Lá fora estava frio e escuro, mas no ofurô estava uma delícia. O vapor subia no ar gelado, e o Linu se sentia um rei. No ofurô estavam sentados alguns senhores que discutiam política e o tempo.',
        choices: [
          { text: 'Linu heilsaði mönnunum.', translation: 'O Linu cumprimentou os homens.', next: 'menn' },
          { text: 'Linu langaði að prófa kalda pottinn.', translation: 'O Linu quis experimentar a banheira fria.', next: 'kaldur' },
          {
            text: 'Linu kvartaði yfir því að honum væri kalt í pottinum.',
            translation: 'O Linu reclamou que estava com frio no ofurô.',
            wrong: 'No ofurô estava “yndislegt” (uma delícia), e o Linu se sentia “eins og kóngi” (como um rei). Frio só fazia do lado de fora da água.',
          },
        ],
      },
      menn: {
        emoji: '👴',
        text: 'Einn þeirra, Bjarni, svaraði honum brosandi. Hann sagðist hafa komið í þennan pott á hverjum degi í fjörutíu ár. “Hér leysum við öll vandamál landsins,” sagði hann, “en enginn hlustar á okkur.”',
        translation: 'Um deles, o Bjarni, respondeu sorrindo. Disse que vinha a esse ofurô todos os dias havia quarenta anos. “Aqui a gente resolve todos os problemas do país”, disse ele, “mas ninguém nos escuta.”',
        choices: [{ text: 'Linu sat lengi hjá þeim og hlustaði.', translation: 'O Linu ficou muito tempo com eles, escutando.', next: 'final_bom' }],
      },
      kaldur: {
        emoji: '🧊',
        text: 'Kaldi potturinn var aðeins fjórar gráður. Hildur sagði að það væri hollt að fara fyrst í kalt vatn og svo aftur í heitt. Linu, sem var vanur ísköldum sjó, fór ofan í án þess að hika.',
        translation: 'A banheira fria estava a apenas quatro graus. A Hildur disse que fazia bem entrar primeiro na água fria e depois voltar para a quente. O Linu, que estava acostumado com mar gelado, entrou sem hesitar.',
        choices: [
          { text: 'Linu fór svo aftur í heita pottinn til Hildar.', translation: 'O Linu depois voltou para o ofurô, para junto da Hildur.', next: 'menn' },
          { text: 'Linu ákvað að sitja í kalda pottinum í hálftíma.', translation: 'O Linu decidiu ficar meia hora na banheira fria.', next: 'final_kaldur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Á leiðinni heim var Linu hlýtt um allan líkamann. Hann sagði Hildi að nú skildi hann af hverju Íslendingar færu í sund á hverjum degi. “Hittumst í pottinum á morgun?” spurði hún.',
        translation: 'No caminho para casa, o Linu estava quentinho no corpo inteiro. Ele disse à Hildur que agora entendia por que os islandeses vão à piscina todos os dias. “Nos vemos no ofurô amanhã?”, perguntou ela.',
        ending: { tone: 'bom', title: 'Frequentador do ofurô', message: 'O Linu seguiu as regras do vestiário e descobriu o parlamento informal do ofurô.' },
      },
      final_kaldur: {
        emoji: '🤧',
        text: 'Eftir hálftíma voru allir farnir að horfa á hann. Hildur sagði að jafnvel mörgæsir ættu ekki að ofgera sér. Daginn eftir var Linu kominn með kvef og lofaði að hlusta betur á hana næst.',
        translation: 'Depois de meia hora, todo mundo já estava olhando para ele. A Hildur disse que até pinguins não deviam exagerar. No dia seguinte o Linu estava resfriado e prometeu ouvi-la melhor da próxima vez.',
        ending: { tone: 'neutro', title: 'Pinguim resfriado', message: 'A Hildur disse para ir do frio de volta ao quente. Meia hora a quatro graus foi demais até para um pinguim!' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'is-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Leiðin að miðju jarðar',
    emoji: '🌋',
    summary: 'Na península de Snæfellsnes, o Linu procura a entrada para o centro da Terra do romance de Jules Verne e acaba descendo a uma caverna de lava.',
    cultural_context:
      'No romance “Viagem ao Centro da Terra” (1864), de Jules Verne, os exploradores descem ao interior do planeta pela cratera do Snæfellsjökull, o vulcão coberto de gelo na ponta da península de Snæfellsnes. A região é parque nacional desde 2001 e tem cavernas formadas por rios de lava.',
    start: 'start',
    glossary: [
      ['að hittast', 'encontrar-se (voz média, com -st)'],
      ['að myndast', 'formar-se (voz média)'],
      ['hefst', 'começa (voz média de “hefja”)'],
      ['var gengið', 'desceu-se, foi-se andando (passiva impessoal)'],
      ['þakinn / hulinn', 'coberto / escondido (particípios)'],
      ['gígur', 'cratera'],
      ['jökull', 'geleira (o “ll” soa [tl̥]: [ˈjœːkʏtl̥])'],
      ['hellir', 'caverna'],
    ],
    nodes: {
      start: {
        emoji: '📖',
        text: 'Linu og Ragnar hittust á Arnarstapa, yst á Snæfellsnesi. Linu hafði lesið skáldsögu eftir Jules Verne þar sem ferðin að miðju jarðar hefst í gíg Snæfellsjökuls. Hann var ákveðinn í að finna innganginn.',
        translation: 'O Linu e o Ragnar se encontraram em Arnarstapi, na ponta de Snæfellsnes. O Linu tinha lido um romance de Jules Verne em que a viagem ao centro da Terra começa na cratera do Snæfellsjökull. Ele estava decidido a encontrar a entrada.',
        choices: [
          { text: 'Linu spurði hvort hægt væri að ganga á jökulinn.', translation: 'O Linu perguntou se dava para subir a geleira a pé.', next: 'jokull' },
          { text: 'Linu stakk upp á að þeir skoðuðu fyrst ströndina.', translation: 'O Linu sugeriu que eles vissem primeiro o litoral.', next: 'strond' },
          {
            text: 'Linu sagði að bókin hefði verið skrifuð af íslenskum bónda.',
            translation: 'O Linu disse que o livro tinha sido escrito por um fazendeiro islandês.',
            wrong: 'O texto diz “skáldsögu eftir Jules Verne”: o romance é do escritor francês Jules Verne. Repare na passiva “hefði verið skrifuð af” = “tinha sido escrita por”.',
          },
        ],
      },
      jokull: {
        emoji: '🏔️',
        text: 'Ragnar sagði að ekki mætti ganga á jökulinn án leiðsögumanns, því að hann væri víða þakinn sprungum. Auk þess var toppurinn hulinn skýjum þennan dag. Það var því ákveðið að fara frekar niður í Vatnshelli.',
        translation: 'O Ragnar disse que não se podia subir a geleira sem guia, porque ela era coberta de fendas em muitos pontos. Além disso, o cume estava escondido pelas nuvens naquele dia. Por isso ficou decidido ir, em vez disso, à caverna Vatnshellir.',
        choices: [{ text: 'Linu samþykkti það, þótt hann væri svolítið svekktur.', translation: 'O Linu concordou, embora estivesse um pouco decepcionado.', next: 'hellir' }],
      },
      strond: {
        emoji: '🌊',
        text: 'Við ströndina standa klettar úr stuðlabergi sem hafa verið mótaðir af sjónum í þúsundir ára. Fuglarnir hópuðust saman á syllunum, og öldurnar skullu á klettunum. Ragnar sagði að Vatnshellir, gamall hraunhellir, væri skammt frá.',
        translation: 'No litoral há rochedos de colunas de basalto que foram moldados pelo mar ao longo de milhares de anos. As aves se amontoavam nas saliências, e as ondas batiam nos rochedos. O Ragnar disse que Vatnshellir, uma antiga caverna de lava, ficava ali perto.',
        choices: [{ text: 'Þeir ákváðu að fara í hellinn.', translation: 'Eles decidiram ir à caverna.', next: 'hellir' }],
      },
      hellir: {
        emoji: '🕳️',
        text: 'Hellirinn myndaðist í eldgosi fyrir um átta þúsund árum. Þeim voru afhentir hjálmar og vasaljós, og svo var gengið niður hringstiga. Niðri var kalt og alveg dimmt, og ekkert heyrðist nema vatnsdropar.',
        translation: 'A caverna se formou numa erupção, há uns oito mil anos. Eles receberam capacetes e lanternas, e depois todos desceram por uma escada em espiral. Lá embaixo estava frio e completamente escuro, e não se ouvia nada além de gotas de água.',
        choices: [
          { text: 'Linu slökkti á vasaljósinu til að prófa myrkrið.', translation: 'O Linu apagou a lanterna para experimentar o escuro.', next: 'myrkur' },
          { text: 'Linu laumaðist lengra inn en leyfilegt var.', translation: 'O Linu se esgueirou mais para dentro do que era permitido.', next: 'bann' },
          {
            text: 'Linu spurði hvort hellirinn hefði verið grafinn af mönnum.',
            translation: 'O Linu perguntou se a caverna tinha sido cavada por pessoas.',
            wrong: 'O texto diz que a caverna “myndaðist í eldgosi” — FORMOU-SE numa erupção. O -st de “myndaðist” é a voz média: a caverna se formou sozinha, ninguém a cavou.',
          },
        ],
      },
      myrkur: {
        emoji: '⚫',
        text: 'Myrkrið var algjört; Linu sá ekki einu sinni sinn eigin væng. Leiðsögumaðurinn sagði að í svona myrkri villtist fólk auðveldlega. Linu kveikti fljótt aftur á ljósinu.',
        translation: 'A escuridão era total; o Linu não enxergava nem a própria asa. O guia disse que numa escuridão dessas as pessoas se perdem facilmente. O Linu acendeu a luz de novo bem rápido.',
        choices: [{ text: 'Linu spurði hvort þetta væri inngangurinn að miðju jarðar.', translation: 'O Linu perguntou se aquela era a entrada para o centro da Terra.', next: 'spurn' }],
      },
      spurn: {
        emoji: '😄',
        text: 'Leiðsögumaðurinn hló og sagði að margir ferðamenn spyrðu að þessu. “Inngangurinn hefur ekki fundist enn,” sagði hann, “en kannski verður hann fundinn af mörgæs einn daginn.” Svo var haldið aftur upp stigann.',
        translation: 'O guia riu e disse que muitos turistas perguntavam isso. “A entrada ainda não foi encontrada”, disse ele, “mas talvez um dia seja encontrada por um pinguim.” Depois todos voltaram escada acima.',
        choices: [{ text: 'Linu og Ragnar gengu upp í dagsbirtuna.', translation: 'O Linu e o Ragnar subiram para a luz do dia.', next: 'final_bom' }],
      },
      bann: {
        emoji: '⛔',
        text: 'Leiðsögumaðurinn kallaði á hann og sagði að þessi hluti hellisins væri lokaður, því að grjótið væri laust og gæti hrunið. Linu var sendur beint aftur upp með Ragnari. Ferðinni var þar með lokið.',
        translation: 'O guia o chamou e disse que aquela parte da caverna estava fechada, porque as pedras estavam soltas e podiam desabar. O Linu foi mandado direto de volta lá para cima com o Ragnar. Com isso, o passeio acabou.',
        ending: { tone: 'neutro', title: 'Explorador apressado', message: 'Numa caverna, o que está “lokaður” (fechado) está fechado por um motivo. Tente de novo, sem sair do caminho.' },
      },
      final_bom: {
        emoji: '🏔️',
        text: 'Þegar þeir komu upp, höfðu skýin horfið af jöklinum, og hvítur toppurinn sást greinilega. Ragnar sagði að nú væri inngangurinn að minnsta kosti sýnilegur. Linu tók mynd af jöklinum og lofaði sjálfum sér að koma aftur með Jules Verne í töskunni.',
        translation: 'Quando eles saíram, as nuvens tinham sumido da geleira, e o cume branco aparecia com nitidez. O Ragnar disse que agora pelo menos a entrada estava visível. O Linu tirou uma foto da geleira e prometeu a si mesmo voltar com Jules Verne na mochila.',
        ending: { tone: 'bom', title: 'A entrada à vista', message: 'O Linu não achou o centro da Terra, mas desceu a uma caverna de lava e viu o Snæfellsjökull sem nuvens.' },
      },
    },
  },
  {
    id: 'is-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Ísjakar á lóninu',
    emoji: '🧊',
    summary: 'Na lagoa glacial de Jökulsárlón, o Linu passeia de barco entre icebergs, conhece as focas e encontra na praia preta um pedaço de gelo com forma de pinguim.',
    cultural_context:
      'A lagoa glacial Jökulsárlón, no sudeste da Islândia, formou-se no século XX com o recuo da geleira Breiðamerkurjökull, uma língua do Vatnajökull, a maior geleira do país. Os icebergs que se soltam flutuam até o mar, e muitos encalham na praia de areia preta do outro lado da estrada.',
    start: 'start',
    glossary: [
      ['lón', 'lagoa'],
      ['ísjaki', 'iceberg'],
      ['að hopa', 'recuar (a geleira recua)'],
      ['að myndast', 'formar-se (voz média)'],
      ['frosinn / sannfærður', 'congelado / convencido (particípios)'],
      ['var dreginn', 'foi arrastado (passiva com “vera”)'],
      ['selur', 'foca'],
      ['að skammast sín', 'ter vergonha (voz média + reflexivo)'],
    ],
    nodes: {
      start: {
        emoji: '🧊',
        text: 'Linu stóð á bakka Jökulsárlóns og trúði varla eigin augum. Á lóninu flutu hundruð ísjaka sem höfðu brotnað af jöklinum. Sumir voru hvítir, aðrir skærbláir, og á sumum sáust svartar rendur af ösku.',
        translation: 'O Linu estava na margem de Jökulsárlón e mal acreditava nos próprios olhos. Na lagoa flutuavam centenas de icebergs que tinham se partido da geleira. Alguns eram brancos, outros azul-vivo, e em alguns se viam listras pretas de cinza.',
        choices: [
          { text: 'Linu fór í bátsferð um lónið.', translation: 'O Linu fez um passeio de barco pela lagoa.', next: 'batur' },
          { text: 'Linu gekk niður að ströndinni hinum megin við veginn.', translation: 'O Linu desceu até a praia do outro lado da estrada.', next: 'strond' },
        ],
      },
      batur: {
        emoji: '🚤',
        text: 'Leiðsögumaðurinn, Ásta, sagði að lónið hefði myndast þegar Breiðamerkurjökull fór að hopa á síðustu öld. Nú væri það orðið eitt dýpsta vatn landsins. Allt í einu kom selur upp úr vatninu rétt hjá bátnum.',
        translation: 'A guia, Ásta, disse que a lagoa tinha se formado quando a geleira Breiðamerkurjökull começou a recuar, no século passado. Agora ela já era um dos lagos mais fundos do país. De repente, uma foca surgiu na água bem ao lado do barco.',
        choices: [
          { text: 'Linu teygði sig út til að klappa selnum.', translation: 'O Linu se esticou para fazer carinho na foca.', next: 'selur' },
          { text: 'Linu spurði af hverju sumir ísjakarnir væru svona bláir.', translation: 'O Linu perguntou por que alguns icebergs eram tão azuis.', next: 'blar' },
          {
            text: 'Linu sagði að jökullinn væri greinilega að stækka.',
            translation: 'O Linu disse que a geleira claramente estava crescendo.',
            wrong: 'A Ásta disse que a lagoa se formou quando a geleira “fór að hopa” — começou a RECUAR. A lagoa só existe porque o gelo está derretendo e diminuindo.',
          },
        ],
      },
      blar: {
        emoji: '💎',
        text: 'Ásta útskýrði að ísinn yrði blár þegar loftbólunum hefði verið þrýst út úr honum. Slíkur ís gæti verið mörg hundruð ára gamall. Linu fékk að halda á litlum ísmola sem hafði verið veiddur upp úr lóninu.',
        translation: 'A Ásta explicou que o gelo fica azul quando as bolhas de ar foram espremidas para fora dele. Um gelo assim pode ter várias centenas de anos. O Linu pôde segurar um pedacinho de gelo que tinha sido pescado da lagoa.',
        choices: [{ text: 'Eftir ferðina gekk Linu niður að ströndinni.', translation: 'Depois do passeio, o Linu desceu até a praia.', next: 'strond' }],
      },
      selur: {
        emoji: '🦭',
        text: 'Selurinn hvarf strax undir yfirborðið. Ásta sagði ákveðin að bannað væri að snerta dýrin og að selirnir hræddust snöggar hreyfingar. Linu skammaðist sín og sat kyrr það sem eftir var ferðarinnar.',
        translation: 'A foca sumiu na hora debaixo d’água. A Ásta disse com firmeza que era proibido tocar nos animais e que as focas se assustavam com movimentos bruscos. O Linu ficou com vergonha e ficou quietinho o resto do passeio.',
        choices: [{ text: 'Eftir ferðina gekk Linu niður að ströndinni.', translation: 'Depois do passeio, o Linu desceu até a praia.', next: 'strond' }],
      },
      strond: {
        emoji: '🏖️',
        text: 'Hinum megin við veginn er svört sandströnd þar sem ísjakarnir skolast á land. Ísinn glitraði í sólinni eins og demantar, og þess vegna er ströndin oft kölluð Demantaströndin. Á einum stórum ísjaka sá Linu eitthvað sem líktist mörgæs.',
        translation: 'Do outro lado da estrada há uma praia de areia preta onde os icebergs são levados para a terra pelas ondas. O gelo brilhava ao sol como diamantes, e por isso a praia costuma ser chamada de Praia dos Diamantes. Num iceberg grande, o Linu viu algo que parecia um pinguim.',
        choices: [
          { text: 'Linu gekk nær til að skoða það betur.', translation: 'O Linu chegou mais perto para ver melhor.', next: 'morgaes' },
          { text: 'Linu tók mynd úr fjarlægð og beið.', translation: 'O Linu tirou uma foto de longe e esperou.', next: 'mynd' },
          {
            text: 'Linu sagði að sandurinn væri hvítur eins og snjór.',
            translation: 'O Linu disse que a areia era branca como a neve.',
            wrong: 'A praia é de areia “svört” — PRETA, de origem vulcânica. Brancos são os pedaços de gelo que brilham nela “eins og demantar” (como diamantes).',
          },
        ],
      },
      morgaes: {
        emoji: '🐧',
        text: 'Þegar hann kom nær, sá hann að þetta var ísjaki sem hafði bráðnað í laginu eins og mörgæs. Linu hló og stillti sér upp við hliðina á honum. Ferðamaður tók mynd af þeim báðum, og allir á ströndinni hlógu.',
        translation: 'Quando chegou perto, viu que era um iceberg que tinha derretido com forma de pinguim. O Linu riu e posou ao lado dele. Um turista tirou uma foto dos dois, e todo mundo na praia riu.',
        choices: [{ text: 'Linu kvaddi ísmörgæsina.', translation: 'O Linu se despediu do pinguim de gelo.', next: 'final_bom' }],
      },
      mynd: {
        emoji: '🌊',
        text: 'Linu beið eftir að birtan yrði betri. En á meðan hann beið, lyftist ísjakinn á einni öldunni og var dreginn út á sjó. Mörgæsin úr ís var horfin, og Linu sá hana aldrei aftur.',
        translation: 'O Linu esperou a luz melhorar. Mas enquanto ele esperava, o iceberg foi erguido por uma onda e arrastado para o mar. O pinguim de gelo tinha sumido, e o Linu nunca mais o viu.',
        ending: { tone: 'neutro', title: 'O pinguim que partiu', message: 'Na praia, o gelo não espera: as ondas levam os icebergs de volta ao mar. Da próxima vez, chegue mais perto!' },
      },
      final_bom: {
        emoji: '🌅',
        text: 'Um kvöldið sat Linu á bakkanum og horfði á sólina setjast yfir lóninu. Hann hugsaði um að ísinn, sem hafði verið frosinn í mörg hundruð ár, væri nú loksins á leið út í heim. Hann var sannfærður um að þetta væri fallegasti staður sem hann hefði séð.',
        translation: 'À noite, o Linu ficou sentado na margem vendo o sol se pôr sobre a lagoa. Pensou que o gelo, que estivera congelado por centenas de anos, agora finalmente estava a caminho do mundo. Estava convencido de que aquele era o lugar mais bonito que já tinha visto.',
        ending: { tone: 'bom', title: 'Primo de gelo', message: 'O Linu conheceu a lagoa glacial, a Praia dos Diamantes e até um pinguim de gelo.' },
      },
    },
  },
  {
    id: 'is-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Síldarárin á Siglufirði',
    emoji: '🐟',
    summary: 'Em Siglufjörður, uma antiga “moça do arenque” conta ao Linu como era a vida na época de ouro do arenque e o ensina a dançar.',
    cultural_context:
      'Na primeira metade do século XX, Siglufjörður foi a “capital do arenque” da Islândia: no verão, milhares de pessoas vinham trabalhar na salga do peixe, e as “síldarstúlkur” (moças do arenque) enchiam barris no cais. O arenque sumiu no fim dos anos 1960, e hoje essa história é contada no Museu da Era do Arenque (Síldarminjasafnið).',
    start: 'start',
    glossary: [
      ['síld', 'arenque'],
      ['söltuð síld', 'arenque salgado (particípio)'],
      ['var skorin', 'era cortada (passiva com “vera”)'],
      ['að hittast / að kynnast', 'encontrar-se / conhecer-se (voz média)'],
      ['tunna', 'barril'],
      ['var dansað', 'dançava-se (passiva impessoal)'],
      ['að rekast á', 'esbarrar em (voz média)'],
      ['síldarstúlka', 'moça do arenque, que salgava o peixe no cais'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu kom til Siglufjarðar eftir langa ökuferð í gegnum jarðgöng. Bærinn stendur í þröngum firði nyrst á Tröllaskaga, umkringdur háum fjöllum. Á síldarminjasafninu við höfnina hitti hann gamla konu sem hét Guðrún.',
        translation: 'O Linu chegou a Siglufjörður depois de uma longa viagem de carro por túneis. A cidade fica num fiorde estreito, no extremo norte da península de Tröllaskagi, cercada de montanhas altas. No museu do arenque, junto ao porto, ele conheceu uma senhora chamada Guðrún.',
        choices: [
          { text: 'Linu spurði Guðrúnu um síldarárin.', translation: 'O Linu perguntou à Guðrún sobre os anos do arenque.', next: 'sild' },
          { text: 'Linu fór fyrst að skoða gömlu bátana.', translation: 'O Linu foi primeiro ver os barcos antigos.', next: 'batar' },
        ],
      },
      batar: {
        emoji: '⛵',
        text: 'Í stóru húsi við höfnina voru gamlir síldarbátar geymdir, eins og þeir væru nýkomnir úr veiðiferð. Á veggjunum héngu ljósmyndir af bryggjum sem voru þaktar tunnum. Guðrún benti á eina myndina og sagði að stúlkan lengst til vinstri væri hún sjálf.',
        translation: 'Num galpão grande junto ao porto ficavam guardados barcos antigos de pesca de arenque, como se tivessem acabado de voltar do mar. Nas paredes havia fotos de cais cobertos de barris. A Guðrún apontou uma das fotos e disse que a moça mais à esquerda era ela mesma.',
        choices: [{ text: 'Linu bað hana að segja sér frá þessum tíma.', translation: 'O Linu pediu que ela lhe contasse sobre aquela época.', next: 'sild' }],
      },
      sild: {
        emoji: '🐟',
        text: 'Guðrún sagðist hafa unnið sem síldarstúlka þegar hún var ung. Þegar skipin komu inn, voru stúlkurnar vaktar, jafnvel um miðja nótt. Síldin var skorin, söltuð og lögð í tunnur á bryggjunni.',
        translation: 'A Guðrún contou que tinha trabalhado como moça do arenque quando era jovem. Quando os barcos chegavam, as moças eram acordadas, até no meio da noite. O arenque era cortado, salgado e arrumado em barris no cais.',
        choices: [
          { text: 'Linu spurði hvernig stúlkunum hefði verið borgað.', translation: 'O Linu perguntou como as moças eram pagas.', next: 'laun' },
          { text: 'Linu spurði hvað fólk hefði gert sér til skemmtunar.', translation: 'O Linu perguntou o que as pessoas faziam para se divertir.', next: 'dans' },
          {
            text: 'Linu sagði að það hlyti að hafa verið þægilegt að vinna bara á daginn.',
            translation: 'O Linu disse que devia ter sido confortável trabalhar só de dia.',
            wrong: 'A Guðrún contou que as moças “voru vaktar, jafnvel um miðja nótt” — ERAM ACORDADAS até no meio da noite. “Voru vaktar” é passiva com “vera”: alguém as acordava assim que os barcos chegavam.',
          },
        ],
      },
      laun: {
        emoji: '💰',
        text: 'Guðrún útskýrði að þær hefðu fengið borgað fyrir hverja tunnu sem var fyllt. Duglegustu stúlkurnar gátu saltað í margar tunnur á einni vakt. “Við vorum þreyttar, en við skemmtum okkur líka,” sagði hún og brosti.',
        translation: 'A Guðrún explicou que elas recebiam por cada barril que era enchido. As moças mais rápidas conseguiam salgar vários barris num só turno. “A gente ficava cansada, mas também se divertia”, disse ela, sorrindo.',
        choices: [{ text: 'Linu spurði hvernig þær hefðu skemmt sér.', translation: 'O Linu perguntou como elas se divertiam.', next: 'dans' }],
      },
      dans: {
        emoji: '💃',
        text: 'Á laugardagskvöldum var dansað í bænum, og þá hittust sjómenn og síldarstúlkur. Guðrún sagðist hafa kynnst manninum sínum á slíku balli. Hún brosti og spurði hvort Linu kynni að dansa.',
        translation: 'Nas noites de sábado havia baile na cidade, e aí os pescadores e as moças do arenque se encontravam. A Guðrún contou que tinha conhecido o marido num baile assim. Ela sorriu e perguntou se o Linu sabia dançar.',
        choices: [
          { text: 'Linu bauð henni upp í dans.', translation: 'O Linu a convidou para dançar.', next: 'dansa' },
          { text: 'Linu viðurkenndi að hann kynni ekki að dansa.', translation: 'O Linu admitiu que não sabia dançar.', next: 'kenna' },
        ],
      },
      kenna: {
        emoji: '👣',
        text: 'Guðrún hló og sagði að það væri aldrei of seint að læra. Hún tók í vænginn á honum og kenndi honum nokkur spor. Eftir smástund var Linu farinn að dansa, þótt hann stigi stundum ofan á tærnar á henni.',
        translation: 'A Guðrún riu e disse que nunca era tarde para aprender. Ela pegou a asa dele e lhe ensinou alguns passos. Pouco depois, o Linu já estava dançando, embora às vezes pisasse nos dedos do pé dela.',
        choices: [{ text: 'Linu þakkaði henni fyrir dansinn.', translation: 'O Linu agradeceu a ela pela dança.', next: 'final_bom' }],
      },
      dansa: {
        emoji: '🎶',
        text: 'Guðrún þáði boðið, og safnvörðurinn setti gamla plötu á fóninn. Þau dönsuðu á milli tunnanna á gólfinu. Linu var svo ákafur að hann rakst á eina tunnuna, og hún valt um koll.',
        translation: 'A Guðrún aceitou o convite, e o funcionário do museu pôs um disco antigo na vitrola. Os dois dançaram entre os barris no chão. O Linu estava tão empolgado que esbarrou num barril, e ele tombou.',
        choices: [
          { text: 'Linu reisti tunnuna við og baðst afsökunar.', translation: 'O Linu levantou o barril e pediu desculpas.', next: 'final_bom' },
          { text: 'Linu hélt áfram að dansa, enn hraðar.', translation: 'O Linu continuou dançando, ainda mais rápido.', next: 'final_hratt' },
        ],
      },
      final_hratt: {
        emoji: '🛢️',
        text: 'Nú valt önnur tunna, og svo sú þriðja. Safnvörðurinn stöðvaði tónlistina og bað þau vinsamlega að halda dansinum áfram úti. Guðrún hló svo mikið að hún varð að setjast niður.',
        translation: 'Aí tombou um segundo barril, e depois um terceiro. O funcionário parou a música e pediu, gentilmente, que eles continuassem a dança lá fora. A Guðrún riu tanto que precisou se sentar.',
        ending: { tone: 'neutro', title: 'Baile fora do museu', message: 'Empolgação demais entre barris dá nisso. A Guðrún se divertiu, mas o museu nem tanto!' },
      },
      final_bom: {
        emoji: '🫙',
        text: 'Þegar Linu kvaddi, gaf Guðrún honum litla krukku af saltaðri síld. “Svona var hún borðuð í gamla daga,” sagði hún. Linu lofaði að koma aftur næsta sumar, þegar síldarhátíðin er haldin í bænum.',
        translation: 'Quando o Linu se despediu, a Guðrún lhe deu um potinho de arenque salgado. “Era assim que se comia antigamente”, disse ela. O Linu prometeu voltar no próximo verão, quando a festa do arenque acontece na cidade.',
        ending: { tone: 'bom', title: 'Aprendiz de moça do arenque', message: 'O Linu ouviu a história do arenque de quem a viveu e ainda ganhou uma aula de dança.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'is-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Rauðu hjörtun í bænum',
    emoji: '❤️',
    summary: 'Em Akureyri, a Þórunn mostra ao Linu os semáforos em forma de coração e o desafia a subir correndo a escadaria da igreja.',
    cultural_context:
      'Akureyri, no fundo do fiorde Eyjafjörður, é a maior cidade da Islândia fora da região da capital. Desde a crise financeira de 2008, as luzes vermelhas dos semáforos da cidade têm forma de coração, para levantar o ânimo dos moradores.',
    start: 'start',
    glossary: [
      ['fallegri / fallegastur', 'mais bonito / o mais bonito'],
      ['styttri en…', 'mais curto que… (comparativo de “stuttur”)'],
      ['sem', 'que (pronome relativo, não declina)'],
      ['hún sagði að… væri', 'ela disse que… era (discurso indireto com subjuntivo)'],
      ['umferðarljós', 'semáforo'],
      ['tröppur', 'degraus, escadaria'],
      ['að skora á e-n', 'desafiar alguém'],
      ['eins hratt og hann gat', 'o mais rápido que podia'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu kom til Akureyrar með rútu frá Reykjavík. Þórunn, sem hafði búið á Akureyri alla ævi, tók á móti honum á stöðinni. Hún sagði að Akureyri væri fallegasti bær landsins, en Linu efaðist um að Reykvíkingar væru sammála því.',
        translation: 'O Linu chegou a Akureyri de ônibus, vindo de Reykjavík. A Þórunn, que tinha morado em Akureyri a vida inteira, foi recebê-lo na rodoviária. Ela disse que Akureyri era a cidade mais bonita do país, mas o Linu duvidava que os moradores de Reykjavík concordassem.',
        choices: [
          { text: 'Linu spurði hvað væri svona sérstakt við bæinn.', translation: 'O Linu perguntou o que a cidade tinha de tão especial.', next: 'serstakt' },
          { text: 'Linu stakk upp á að þau færu fyrst í Lystigarðinn.', translation: 'O Linu sugeriu que eles fossem primeiro ao jardim botânico.', next: 'gardur' },
          {
            text: 'Linu spurði Þórunni hvenær hún hefði flutt til Akureyrar.',
            translation: 'O Linu perguntou à Þórunn quando ela tinha se mudado para Akureyri.',
            wrong: 'A Þórunn é alguém “sem hafði búið á Akureyri alla ævi” — QUE tinha morado em Akureyri A VIDA TODA. Ela nunca se mudou para lá: sempre morou lá. “Sem” introduz a oração relativa.',
          },
        ],
      },
      serstakt: {
        emoji: '🚦',
        text: 'Þórunn benti á umferðarljósin. Rauðu ljósin voru ekki kringlótt, heldur í laginu eins og hjörtu. Hún sagði að þau hefðu verið sett upp eftir bankahrunið 2008 til að lífga upp á skap bæjarbúa.',
        translation: 'A Þórunn apontou para os semáforos. As luzes vermelhas não eram redondas, e sim em forma de coração. Ela disse que tinham sido instaladas depois da crise bancária de 2008, para levantar o ânimo dos moradores.',
        choices: [{ text: 'Linu sagði að þetta væru hlýlegustu umferðarljós sem hann hefði séð.', translation: 'O Linu disse que aqueles eram os semáforos mais simpáticos que ele já tinha visto.', next: 'kirkja' }],
      },
      gardur: {
        emoji: '🌷',
        text: 'Lystigarðurinn er einn af nyrstu grasagörðum í heimi. Þar vaxa þúsundir tegunda, sumar frá löndum sem eru miklu hlýrri en Ísland. Linu var hissa á að sjá svo mörg blóm svona norðarlega.',
        translation: 'O Lystigarðurinn é um dos jardins botânicos mais ao norte do mundo. Lá crescem milhares de espécies, algumas de países muito mais quentes que a Islândia. O Linu ficou surpreso de ver tantas flores tão ao norte.',
        choices: [{ text: 'Þau gengu þaðan upp að kirkjunni.', translation: 'De lá eles subiram até a igreja.', next: 'kirkja' }],
      },
      kirkja: {
        emoji: '⛪',
        text: 'Upp að Akureyrarkirkju liggja margar brattar tröppur. Þórunn skoraði á Linu í kapphlaup og sagði að sá sem yrði síðastur upp borgaði ísinn. Linu, sem hafði styttri fætur en hún, hikaði.',
        translation: 'Até a igreja de Akureyri sobe uma escadaria íngreme, de muitos degraus. A Þórunn desafiou o Linu para uma corrida e disse que quem chegasse por último pagaria o sorvete. O Linu, que tinha pernas mais curtas que as dela, hesitou.',
        choices: [
          { text: 'Linu tók áskoruninni.', translation: 'O Linu aceitou o desafio.', next: 'hlaup' },
          { text: 'Linu stakk upp á að þau gengju rólega upp.', translation: 'O Linu sugeriu que eles subissem com calma.', next: 'rolega' },
        ],
      },
      hlaup: {
        emoji: '🏃',
        text: 'Linu hljóp eins hratt og hann gat, en Þórunn var miklu fljótari. Þegar hann kom loksins upp, sat hún á efstu tröppunni og hló. “Mörgæsir eru betri í sjónum en í stigum,” sagði hún.',
        translation: 'O Linu correu o mais rápido que podia, mas a Þórunn era muito mais veloz. Quando ele finalmente chegou lá em cima, ela estava sentada no degrau mais alto, rindo. “Pinguins são melhores no mar do que em escadas”, disse ela.',
        choices: [{ text: 'Linu viðurkenndi að hún hefði rétt fyrir sér og lofaði að borga ísinn.', translation: 'O Linu admitiu que ela tinha razão e prometeu pagar o sorvete.', next: 'utsyni' }],
      },
      rolega: {
        emoji: '🚶',
        text: 'Þau gengu rólega upp og spjölluðu saman. Þórunn sagði að Akureyri væri stærsti bærinn utan höfuðborgarsvæðisins og að þar byggju um tuttugu þúsund manns. Á efstu tröppunni sneru þau sér við.',
        translation: 'Eles subiram com calma, conversando. A Þórunn disse que Akureyri era a maior cidade fora da região da capital e que lá moravam umas vinte mil pessoas. No último degrau, eles se viraram.',
        choices: [{ text: 'Þau litu yfir fjörðinn.', translation: 'Eles olharam para o fiorde.', next: 'utsyni' }],
      },
      utsyni: {
        emoji: '🏔️',
        text: 'Þaðan var útsýnið yfir Eyjafjörð betra en frá nokkrum öðrum stað í bænum. Fjöllin hinum megin við fjörðinn voru enn hvít, þótt komið væri fram í júní. Þórunn spurði hvort Linu fyndist Reykjavík enn fallegri.',
        translation: 'Dali a vista sobre o Eyjafjörður era melhor do que de qualquer outro lugar da cidade. As montanhas do outro lado do fiorde ainda estavam brancas, embora já fosse junho. A Þórunn perguntou se o Linu ainda achava Reykjavík mais bonita.',
        choices: [
          { text: 'Linu svaraði að Akureyri væri að minnsta kosti hlýlegri.', translation: 'O Linu respondeu que Akureyri pelo menos era mais acolhedora.', next: 'final_bom' },
          { text: 'Linu sagði að Reykjavík væri stærri og þess vegna betri.', translation: 'O Linu disse que Reykjavík era maior e, por isso, melhor.', next: 'final_ros' },
          {
            text: 'Linu sagði að fjöllin væru orðin græn.',
            translation: 'O Linu disse que as montanhas já estavam verdes.',
            wrong: 'O texto diz “Fjöllin… voru enn hvít”: as montanhas AINDA estavam BRANCAS de neve, mesmo em junho. “Enn” = ainda.',
          },
        ],
      },
      final_bom: {
        emoji: '🍦',
        text: 'Þórunn brosti og sagðist taka því sem hrósi. Um kvöldið borðuðu þau ís í miðbænum, þótt það væri svalt. Linu skrifaði vini sínum að Akureyri væri notalegasti bær sem hann hefði heimsótt.',
        translation: 'A Þórunn sorriu e disse que aceitava aquilo como elogio. À noite, eles tomaram sorvete no centro, apesar do friozinho. O Linu escreveu a um amigo que Akureyri era a cidade mais aconchegante que ele já tinha visitado.',
        ending: { tone: 'bom', title: 'Coração do norte', message: 'O Linu comparou com jeito e ganhou um sorvete (ou pagou um) na capital do norte.' },
      },
      final_ros: {
        emoji: '😶',
        text: 'Þórunn setti upp svip og sagði að stærra væri ekki alltaf betra. Þau gengu þegjandi niður tröppurnar. Linu lærði að maður ber aldrei Akureyri saman við Reykjavík í návist Akureyrings.',
        translation: 'A Þórunn fez cara feia e disse que maior nem sempre é melhor. Eles desceram a escadaria em silêncio. O Linu aprendeu que nunca se compara Akureyri com Reykjavík na frente de alguém de Akureyri.',
        ending: { tone: 'neutro', title: 'Comparação infeliz', message: '“Stærri” (maior) não quer dizer “betri” (melhor). Na próxima, elogie o que Akureyri tem de melhor!' },
      },
    },
  },
  {
    id: 'is-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Tröllin í Reynisfjöru',
    emoji: '🌊',
    summary: 'Em Vík, o Linu visita a praia de areia preta de Reynisfjara, ouve a lenda dos trolls de pedra e aprende a respeitar as ondas.',
    cultural_context:
      'Reynisfjara, perto do vilarejo de Vík, tem areia vulcânica preta, colunas de basalto e os rochedos Reynisdrangar, que segundo a lenda são trolls petrificados pelo sol. É também uma das praias mais perigosas do país, por causa das ondas repentinas que já arrastaram visitantes para o mar. Acima da vila fica a geleira Mýrdalsjökull, que cobre o vulcão Katla.',
    start: 'start',
    glossary: [
      ['hættulegri / hættulegastur', 'mais perigoso / o mais perigoso'],
      ['sú hættulegasta', 'a mais perigosa (superlativo na forma fraca)'],
      ['svartari en…', 'mais preto que…'],
      ['stuðlaberg', 'colunas de basalto'],
      ['drangur', 'rochedo isolado no mar'],
      ['að verða að steini', 'virar pedra'],
      ['sem', 'que (pronome relativo)'],
      ['að snúa baki í…', 'dar as costas para…'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Linu kom til Víkur í Mýrdal á rigningardegi. Einar, sem rekur lítið gistiheimili í þorpinu, sagði honum að Reynisfjara væri ein fallegasta strönd landsins, en líka sú hættulegasta. Linu hafði aldrei séð svartari sand.',
        translation: 'O Linu chegou a Vík í Mýrdal num dia de chuva. O Einar, que tem uma pequena pousada no vilarejo, disse a ele que Reynisfjara era uma das praias mais bonitas do país, mas também a mais perigosa. O Linu nunca tinha visto uma areia mais preta.',
        choices: [
          { text: 'Linu spurði af hverju ströndin væri svona hættuleg.', translation: 'O Linu perguntou por que a praia era tão perigosa.', next: 'haetta' },
          { text: 'Linu fór strax niður á ströndina.', translation: 'O Linu foi direto para a praia.', next: 'strond' },
        ],
      },
      haetta: {
        emoji: '⚠️',
        text: 'Einar útskýrði að þar kæmu stundum öldur sem væru miklu stærri og kraftmeiri en hinar. Þær kæmu fyrirvaralaust og hefðu oft dregið fólk út á sjó. Hann sagði að maður ætti aldrei að snúa baki í sjóinn.',
        translation: 'O Einar explicou que ali às vezes vinham ondas muito maiores e mais fortes que as outras. Elas chegavam sem aviso e muitas vezes já tinham arrastado gente para o mar. Ele disse que nunca se deve dar as costas para o mar.',
        choices: [
          { text: 'Linu lofaði að fara varlega.', translation: 'O Linu prometeu tomar cuidado.', next: 'strond' },
          {
            text: 'Linu sagðist ætla að synda út að klettunum.',
            translation: 'O Linu disse que ia nadar até os rochedos.',
            wrong: 'O Einar disse que ali vêm ondas “miklu stærri og kraftmeiri en hinar” — muito MAIORES e MAIS FORTES que as outras — e que já arrastaram gente para o mar. Nadar ali é perigosíssimo, até para um pinguim.',
          },
        ],
      },
      strond: {
        emoji: '🗿',
        text: 'Á ströndinni stóðu háir stuðlabergsveggir, og úti í sjónum risu svartir klettadrangar. Einar sagði að drangarnir væru tröll sem hefðu reynt að draga skip að landi um nótt. Þegar sólin kom upp, urðu þau að steini.',
        translation: 'Na praia havia paredões altos de colunas de basalto, e no mar se erguiam rochedos pretos. O Einar disse que os rochedos eram trolls que tinham tentado puxar um navio para a terra durante a noite. Quando o sol nasceu, eles viraram pedra.',
        choices: [
          { text: 'Linu gekk að stuðlaberginu til að skoða það betur.', translation: 'O Linu foi até as colunas de basalto para vê-las melhor.', next: 'studlar' },
          { text: 'Linu gekk alveg niður í flæðarmálið til að taka mynd af dröngunum.', translation: 'O Linu desceu até a beira da água para fotografar os rochedos.', next: 'alda' },
          {
            text: 'Linu sagði að tröllin hefðu orðið að steini um miðja nótt.',
            translation: 'O Linu disse que os trolls tinham virado pedra no meio da noite.',
            wrong: 'Segundo a lenda, os trolls viraram pedra “þegar sólin kom upp” — QUANDO O SOL NASCEU. De noite eles andavam à vontade; o perigo para um troll é a luz do sol.',
          },
        ],
      },
      studlar: {
        emoji: '🧱',
        text: 'Stuðlarnir voru reglulegri en nokkuð annað sem Linu hafði séð í náttúrunni. Einar sagði að þeir hefðu myndast þegar hraun kólnaði hægt. Sumir voru jafnháir húsi, aðrir ekki hærri en Linu sjálfur.',
        translation: 'As colunas eram mais regulares do que qualquer outra coisa que o Linu já tinha visto na natureza. O Einar disse que elas tinham se formado quando a lava esfriou devagar. Algumas eram da altura de uma casa, outras não eram mais altas que o próprio Linu.',
        choices: [
          { text: 'Linu spurði hvort eldfjall væri nálægt.', translation: 'O Linu perguntou se havia um vulcão por perto.', next: 'katla' },
          { text: 'Linu settist á lægsta stuðulinn og horfði á öldurnar úr öruggri fjarlægð.', translation: 'O Linu sentou na coluna mais baixa e ficou olhando as ondas a uma distância segura.', next: 'final_bom' },
        ],
      },
      katla: {
        emoji: '🌋',
        text: 'Einar benti á jökulinn fyrir ofan þorpið. Hann sagði að undir honum væri Katla, eitt virkasta eldfjall landsins, og að síðasta stóra gosið hefði orðið árið 1918. Linu horfði á jökulinn með nýrri virðingu.',
        translation: 'O Einar apontou para a geleira acima do vilarejo. Disse que debaixo dela ficava o Katla, um dos vulcões mais ativos do país, e que a última grande erupção tinha sido em 1918. O Linu olhou para a geleira com um respeito novo.',
        choices: [{ text: 'Linu settist á lægsta stuðulinn og horfði á öldurnar úr öruggri fjarlægð.', translation: 'O Linu sentou na coluna mais baixa e ficou olhando as ondas a uma distância segura.', next: 'final_bom' }],
      },
      alda: {
        emoji: '🌊',
        text: 'Linu var svo upptekinn af myndinni að hann tók ekki eftir öldunni sem nálgaðist. Einar hrópaði til hans að hlaupa. Sjórinn náði honum upp að hnjám áður en hann komst undan.',
        translation: 'O Linu estava tão concentrado na foto que não percebeu a onda que se aproximava. O Einar gritou para ele correr. O mar o alcançou até os joelhos antes que ele conseguisse escapar.',
        choices: [{ text: 'Linu hljóp upp í sandinn eins hratt og hann gat.', translation: 'O Linu correu areia acima o mais rápido que pôde.', next: 'final_blautur' }],
      },
      final_blautur: {
        emoji: '💦',
        text: 'Linu var rennblautur og skalf. Einar sagði að hann hefði verið heppnari en margir aðrir sem hefðu staðið of nálægt sjónum. Nú skildi Linu af hverju viðvörunarskiltin á ströndinni væru svona mörg.',
        translation: 'O Linu estava encharcado e tremendo. O Einar disse que ele tinha tido mais sorte do que muitos outros que tinham ficado perto demais do mar. Agora o Linu entendia por que havia tantas placas de aviso na praia.',
        ending: { tone: 'neutro', title: 'Susto na beira do mar', message: 'O Einar avisou: nunca dê as costas para o mar em Reynisfjara. O Linu escapou por pouco!' },
      },
      final_bom: {
        emoji: '☀️',
        text: 'Þegar sólin braust fram úr skýjunum, glitraði svarti sandurinn. Einar sagði að Linu væri skynsamasti ferðamaður sem hann hefði hitt í sumar. Linu svaraði að hann vildi frekar vera lifandi mörgæs en steinrunnið tröll.',
        translation: 'Quando o sol rompeu as nuvens, a areia preta brilhou. O Einar disse que o Linu era o turista mais sensato que ele tinha conhecido naquele verão. O Linu respondeu que preferia ser um pinguim vivo a um troll petrificado.',
        ending: { tone: 'bom', title: 'Turista sensato', message: 'O Linu admirou a praia mais bonita e mais perigosa do país sem arriscar a vida.' },
      },
    },
  },
  {
    id: 'is-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Á milli flekanna',
    emoji: '🏛️',
    summary: 'Em Þingvellir, a professora de história Kristín conta ao Linu como nasceu o Alþingi, e ele mergulha na fenda entre as placas tectônicas.',
    cultural_context:
      'Em Þingvellir foi fundado em 930 o Alþingi, uma das assembleias parlamentares mais antigas do mundo; ali se adotou o cristianismo no ano 1000 e se proclamou a república em 17 de junho de 1944. O parque fica no vale onde se afastam as placas tectônicas norte-americana e euro-asiática e é Patrimônio Mundial da UNESCO desde 2004.',
    start: 'start',
    glossary: [
      ['mikilvægastur', 'o mais importante (superlativo)'],
      ['breiðari', 'mais largo (comparativo)'],
      ['tærari en…', 'mais transparente que…'],
      ['hún sagði að… hefði verið stofnað', 'ela disse que… tinha sido fundado (discurso indireto)'],
      ['gjá', 'fenda, desfiladeiro'],
      ['fleki', 'placa (tectônica)'],
      ['lögsögumaður', 'o “recitador da lei” do Alþingi medieval'],
      ['að liggja undir feldi', 'deitar debaixo do manto: pensar muito antes de decidir'],
    ],
    nodes: {
      start: {
        emoji: '🚗',
        text: 'Linu og Kristín, sem kennir sögu í menntaskóla, keyrðu til Þingvalla snemma morguns. Kristín sagði að þetta væri mikilvægasti staðurinn í sögu Íslands. Hún bætti við að hér væri hægt að standa á milli tveggja jarðskorpufleka.',
        translation: 'O Linu e a Kristín, que ensina história no ensino médio, foram de carro para Þingvellir de manhã cedo. A Kristín disse que aquele era o lugar mais importante da história da Islândia. Ela acrescentou que ali dava para ficar em pé entre duas placas tectônicas.',
        choices: [
          { text: 'Linu bað hana að segja sér frá sögunni.', translation: 'O Linu pediu que ela lhe contasse a história.', next: 'saga' },
          { text: 'Linu vildi fyrst sjá gjána.', translation: 'O Linu quis ver primeiro a fenda.', next: 'gja' },
        ],
      },
      saga: {
        emoji: '📜',
        text: 'Kristín sagði að Alþingi hefði verið stofnað hér árið 930. Einu sinni á ári hefðu höfðingjar og bændur komið saman alls staðar að af landinu. Lögsögumaðurinn hefði staðið á Lögbergi og farið með lögin utanbókar, þriðjung þeirra á hverju ári.',
        translation: 'A Kristín contou que o Alþingi tinha sido fundado ali no ano 930. Uma vez por ano, chefes e fazendeiros de todo o país se reuniam. O recitador da lei ficava de pé no Lögberg (a Rocha da Lei) e recitava as leis de cor, um terço delas a cada ano.',
        choices: [
          { text: 'Linu spurði hvað hefði gerst árið 1000.', translation: 'O Linu perguntou o que tinha acontecido no ano 1000.', next: 'kristni' },
          {
            text: 'Linu spurði hvort þingið hefði komið saman í hverri viku.',
            translation: 'O Linu perguntou se a assembleia se reunia toda semana.',
            wrong: 'A Kristín disse “einu sinni á ári” — UMA VEZ POR ANO. Gente de todo o país viajava dias a cavalo para chegar lá; toda semana seria impossível.',
          },
        ],
      },
      kristni: {
        emoji: '✝️',
        text: 'Kristín sagði að Íslendingar hefðu tekið kristni á Alþingi árið 1000. Lögsögumaðurinn, Þorgeir, hefði legið undir feldi í heilan sólarhring áður en hann kvað upp úrskurð sinn. Hann ákvað að allir skyldu verða kristnir, en að fólk mætti enn blóta goðin á laun.',
        translation: 'A Kristín contou que os islandeses tinham adotado o cristianismo no Alþingi, no ano 1000. O recitador da lei, Þorgeir, tinha ficado deitado debaixo de um manto um dia e uma noite inteiros antes de anunciar sua decisão. Ele decidiu que todos deviam se tornar cristãos, mas que as pessoas ainda podiam fazer sacrifícios aos deuses às escondidas.',
        choices: [{ text: 'Linu vildi nú sjá gjána.', translation: 'Agora o Linu queria ver a fenda.', next: 'gja' }],
      },
      gja: {
        emoji: '🪨',
        text: 'Almannagjá er löng og djúp gjá sem verður breiðari með hverju árinu. Kristín sagði að flekarnir færðust í sundur um það bil tvo sentímetra á ári. Linu sagði að það væri hægara en nokkur mörgæs gæti gengið.',
        translation: 'Almannagjá é uma fenda longa e funda que fica mais larga a cada ano. A Kristín disse que as placas se afastavam uns dois centímetros por ano. O Linu disse que isso era mais devagar do que qualquer pinguim conseguiria andar.',
        choices: [
          { text: 'Linu vildi kafa í Silfru.', translation: 'O Linu quis mergulhar em Silfra.', next: 'silfra' },
          { text: 'Linu gekk upp að Lögbergi.', translation: 'O Linu subiu até o Lögberg.', next: 'logberg' },
          {
            text: 'Linu sagði að gjáin yrði mjórri með árunum.',
            translation: 'O Linu disse que a fenda ia ficando mais estreita com os anos.',
            wrong: 'O texto diz que a fenda “verður breiðari” — fica MAIS LARGA — porque as placas “færast í sundur” (se afastam). “Mjórri” seria o contrário: mais estreita.',
          },
        ],
      },
      silfra: {
        emoji: '🤿',
        text: 'Í Silfru var vatnið tærara en nokkurt vatn sem Linu hafði séð. Kristín sagði að það kæmi úr jöklinum og hefði runnið neðanjarðar í gegnum hraunið í áratugi. Linu kafaði niður og sá að hann gat næstum snert báða barma gjárinnar í einu.',
        translation: 'Em Silfra, a água era mais transparente que qualquer água que o Linu já tinha visto. A Kristín disse que ela vinha da geleira e tinha corrido debaixo da terra, através da lava, durante décadas. O Linu mergulhou e viu que quase conseguia tocar as duas paredes da fenda ao mesmo tempo.',
        choices: [{ text: 'Linu kom upp úr vatninu, kaldur en alsæll.', translation: 'O Linu saiu da água, gelado mas felicíssimo.', next: 'final_bom' }],
      },
      logberg: {
        emoji: '🇮🇸',
        text: 'Kristín sagði að hér hefði lýðveldið verið stofnað 17. júní 1944, í hellirigningu. Þúsundir manna hefðu staðið hér, blautari en nokkru sinni fyrr, en ánægðari líka. Hún spurði Linu hvað hann myndi segja ef hann væri lögsögumaður í einn dag.',
        translation: 'A Kristín contou que ali a república tinha sido proclamada em 17 de junho de 1944, debaixo de um temporal. Milhares de pessoas tinham ficado ali, mais molhadas do que nunca, mas também mais felizes. Ela perguntou ao Linu o que ele diria se fosse o recitador da lei por um dia.',
        choices: [
          { text: 'Linu sagðist fyrst vilja kafa í Silfru til að hugsa málið.', translation: 'O Linu disse que primeiro queria mergulhar em Silfra para pensar no assunto.', next: 'silfra' },
          { text: 'Linu steig upp á Lögberg og hélt ræðu um réttindi mörgæsa.', translation: 'O Linu subiu no Lögberg e fez um discurso sobre os direitos dos pinguins.', next: 'final_log' },
        ],
      },
      final_log: {
        emoji: '🐟',
        text: 'Linu lýsti því yfir að allar mörgæsir ættu rétt á ókeypis fiski. Nokkrir ferðamenn klöppuðu, en Kristín minnti hann á að lögin yrðu fyrst að vera samþykkt af Alþingi. Lögin voru aldrei samþykkt, en Linu var samt stoltur.',
        translation: 'O Linu declarou que todos os pinguins tinham direito a peixe de graça. Alguns turistas aplaudiram, mas a Kristín lembrou a ele que a lei primeiro tinha de ser aprovada pelo Alþingi. A lei nunca foi aprovada, mas o Linu ficou orgulhoso mesmo assim.',
        ending: { tone: 'neutro', title: 'Lei do peixe grátis', message: 'O Linu discursou na Rocha da Lei, mas sem Alþingi não há lei. Volte e mergulhe em Silfra!' },
      },
      final_bom: {
        emoji: '🎓',
        text: 'Á leiðinni heim sagði Linu Kristínu að hann hefði lært meira um Ísland á einum degi en á heilu ári. Kristín sagði að hann væri áhugasamasti nemandi sem hún hefði kennt. Linu sagði henni ekki að hann væri líka sá eini sem hefði kafað í Silfru án þurrbúnings.',
        translation: 'No caminho de volta, o Linu disse à Kristín que tinha aprendido mais sobre a Islândia num dia do que num ano inteiro. A Kristín disse que ele era o aluno mais interessado que ela já tinha tido. O Linu não contou a ela que também era o único que tinha mergulhado em Silfra sem roupa seca de mergulho.',
        ending: { tone: 'bom', title: 'Entre duas placas', message: 'O Linu ouviu mil anos de história e mergulhou na água mais transparente da Islândia.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'is-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Ef Geysir gysi',
    emoji: '⛲',
    summary: 'No vale de Haukadalur, o Linu e a Helga esperam as erupções do Strokkur e conversam sobre o velho Geysir, que deu nome a todos os gêiseres do mundo.',
    cultural_context:
      'O Geysir, no vale de Haukadalur, deu nome a todos os gêiseres do mundo (do verbo islandês “geysa”, jorrar com força). Hoje ele quase não entra em erupção, mas o vizinho Strokkur jorra água fervente a cada poucos minutos, a cerca de 20 metros de altura. No século XX chegou-se a jogar sabão no Geysir para provocar erupções, prática hoje proibida.',
    start: 'start',
    glossary: [
      ['ef hann gysi…', 'se ele jorrasse… (subjuntivo passado de “gjósa”)'],
      ['við myndum…', 'nós iríamos…, nós faríamos… (condicional)'],
      ['ef ég hefði vitað…', 'se eu tivesse sabido…'],
      ['að óska þess að…', 'desejar que… (com subjuntivo)'],
      ['hver / goshver', 'fonte termal / gêiser'],
      ['að gjósa', 'entrar em erupção, jorrar'],
      ['kaðall', 'corda (a que separa os visitantes)'],
      ['sjóðandi heitur', 'fervendo'],
    ],
    nodes: {
      start: {
        emoji: '⏳',
        text: 'Linu og Helga stóðu við Strokk og biðu. Á nokkurra mínútna fresti gýs hann og þeytir sjóðandi vatni um tuttugu metra upp í loftið. Linu sagðist óska þess að gamli Geysir gysi líka, svo að hann gæti séð þann fræga.',
        translation: 'O Linu e a Helga estavam ao lado do Strokkur, esperando. A cada poucos minutos ele entra em erupção e lança água fervente a uns vinte metros de altura. O Linu disse que desejava que o velho Geysir também jorrasse, para poder ver o famoso.',
        choices: [
          { text: 'Linu spurði af hverju Geysir gysi ekki lengur.', translation: 'O Linu perguntou por que o Geysir não jorrava mais.', next: 'geysir' },
          { text: 'Linu fór nær Strokki til að sjá betur.', translation: 'O Linu chegou mais perto do Strokkur para ver melhor.', next: 'naer' },
          {
            text: 'Linu sagðist vera tilbúinn að bíða í heilan dag eftir næsta gosi í Strokki.',
            translation: 'O Linu disse que estava disposto a esperar um dia inteiro pela próxima erupção do Strokkur.',
            wrong: 'O texto diz que o Strokkur jorra “á nokkurra mínútna fresti” — A CADA POUCOS MINUTOS. Não precisa esperar o dia todo: quem quase não jorra mais é o velho Geysir.',
          },
        ],
      },
      geysir: {
        emoji: '💤',
        text: 'Helga sagði að Geysir hefði gosið oft og kröftuglega fyrr á öldum, en að nú lægi hann oftast í dvala. Stundum vaknaði hann eftir jarðskjálfta, eins og árið 2000. “Ef hann gysi núna, myndum við hlaupa,” sagði hún, “því að vatnið er sjóðandi heitt.”',
        translation: 'A Helga disse que o Geysir tinha jorrado muitas vezes e com força em séculos passados, mas que agora quase sempre ficava adormecido. Às vezes ele acordava depois de terremotos, como no ano 2000. “Se ele jorrasse agora, a gente sairia correndo”, disse ela, “porque a água está fervendo.”',
        choices: [
          { text: 'Linu spurði hvaðan orðið “geysir” kæmi.', translation: 'O Linu perguntou de onde vinha a palavra “geysir”.', next: 'ord' },
          { text: 'Linu stakk upp á að þau hentu sápu í hverinn, eins og gert var í gamla daga.', translation: 'O Linu sugeriu que eles jogassem sabão na fonte, como se fazia antigamente.', next: 'sapa' },
        ],
      },
      ord: {
        emoji: '📚',
        text: 'Helga útskýrði að sögnin “að geysa” þýddi að æða áfram af miklum krafti. Af þessum hver hefðu allir goshverir heimsins fengið nafn sitt. Linu sagði að ef hann hefði verið nefndur eftir hver, væri hann heimsfrægur.',
        translation: 'A Helga explicou que o verbo “geysa” queria dizer avançar com muita força. Foi dessa fonte que todos os gêiseres do mundo tinham recebido o nome. O Linu disse que, se tivesse recebido o nome de uma fonte termal, seria famoso no mundo inteiro.',
        choices: [{ text: 'Þau sneru aftur að Strokki.', translation: 'Eles voltaram para o Strokkur.', next: 'strokkur' }],
      },
      sapa: {
        emoji: '🧼',
        text: 'Helga horfði skelfd á hann. Hún sagði að það hefði verið gert fyrir mörgum áratugum en að nú væri það stranglega bannað. “Ef allir gerðu það, myndu hverirnir skemmast,” sagði hún.',
        translation: 'A Helga olhou para ele horrorizada. Disse que isso tinha sido feito muitas décadas atrás, mas que agora era terminantemente proibido. “Se todo mundo fizesse isso, as fontes se estragariam”, disse ela.',
        choices: [
          { text: 'Linu sagði að hann hefði bara verið að grínast.', translation: 'O Linu disse que estava só brincando.', next: 'strokkur' },
          {
            text: 'Linu tók upp sápustykki úr töskunni.',
            translation: 'O Linu tirou uma barra de sabão da mochila.',
            wrong: 'A Helga disse que isso hoje “væri stranglega bannað” — é TERMINANTEMENTE PROIBIDO — e que, “ef allir gerðu það” (se todos fizessem isso), as fontes se estragariam. Nada de sabão!',
          },
        ],
      },
      naer: {
        emoji: '🚧',
        text: 'Linu steig yfir kaðalinn til að komast nær. Helga kallaði að hann ætti að koma strax til baka; ef vindurinn snerist, fengi hann sjóðandi vatnið yfir sig. Á sama andartaki fór vatnsborðið í hvernum að lyftast.',
        translation: 'O Linu passou por cima da corda para chegar mais perto. A Helga gritou que ele devia voltar imediatamente; se o vento virasse, a água fervente cairia em cima dele. No mesmo instante, a superfície da água na fonte começou a subir.',
        choices: [
          { text: 'Linu hljóp aftur fyrir kaðalinn.', translation: 'O Linu correu de volta para trás da corda.', next: 'strokkur' },
          { text: 'Linu stóð kyrr til að ná bestu myndinni.', translation: 'O Linu ficou parado para conseguir a melhor foto.', next: 'final_blautur' },
        ],
      },
      strokkur: {
        emoji: '💥',
        text: 'Þau stóðu þar sem vindurinn blés frá hvernum og biðu. Allt í einu lyftist blá vatnskúla upp úr hvernum, og svo sprakk hún í háa súlu af vatni og gufu. Linu hrópaði að hann vildi helst sjá þetta þúsund sinnum.',
        translation: 'Eles ficaram onde o vento soprava para longe da fonte e esperaram. De repente, uma bolha azul de água subiu da fonte e estourou numa coluna alta de água e vapor. O Linu gritou que queria ver aquilo mil vezes.',
        choices: [{ text: 'Linu beið eftir næsta gosi.', translation: 'O Linu esperou a próxima erupção.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Þau sáu Strokk gjósa sjö sinnum áður en þau keyrðu áfram að Gullfossi. Í bílnum sagði Linu að ef hann ætti heima á Íslandi, kæmi hann hingað í hverri viku. Helga svaraði að þá yrði hann fljótt leiður á því, en Linu trúði henni ekki.',
        translation: 'Eles viram o Strokkur jorrar sete vezes antes de seguir de carro para Gullfoss. No carro, o Linu disse que, se morasse na Islândia, viria ali toda semana. A Helga respondeu que aí ele logo enjoaria, mas o Linu não acreditou nela.',
        ending: { tone: 'bom', title: 'Sete erupções', message: 'O Linu viu o Strokkur jorrar de um lugar seguro e ainda aprendeu de onde vem a palavra “gêiser”.' },
      },
      final_blautur: {
        emoji: '💦',
        text: 'Vindurinn snerist, og heitur úði og gufa skullu á honum. Sem betur fer stóð hann nógu langt frá til að brenna sig ekki, en myndavélin var rennblaut. Helga sagði að ef hann hefði hlustað á hana, væri myndavélin enn þurr.',
        translation: 'O vento virou, e um borrifo quente e vapor caíram sobre ele. Por sorte ele estava longe o bastante para não se queimar, mas a câmera ficou encharcada. A Helga disse que, se ele a tivesse escutado, a câmera ainda estaria seca.',
        ending: { tone: 'neutro', title: 'Foto molhada', message: 'A Helga avisou: “ef vindurinn snerist…” — se o vento virasse. Atrás da corda é mais seguro (e mais seco)!' },
      },
    },
  },
  {
    id: 'is-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Litríku fjöllin',
    emoji: '⛰️',
    summary: 'Em Landmannalaugar, o Linu e o Stefán tentam subir o Bláhnúkur entre montanhas coloridas, fontes termais e uma neblina que chega sem avisar.',
    cultural_context:
      'Landmannalaugar, nas terras altas do sul da Islândia, é famosa pelas montanhas de riolito em tons de rosa, amarelo e verde e por uma fonte termal natural onde se pode tomar banho. Dali começa a trilha Laugavegur, que segue por cerca de 55 km até o vale de Þórsmörk.',
    start: 'start',
    glossary: [
      ['eins og einhver hefði málað þau', 'como se alguém as tivesse pintado (subjuntivo depois de “eins og”)'],
      ['ef veðrið héldist gott', 'se o tempo continuasse bom'],
      ['ef ég mætti ráða', 'se dependesse de mim'],
      ['ef þú hefðir…, hefðum við…', 'se você tivesse…, nós teríamos…'],
      ['laug', 'fonte termal de banho, piscina'],
      ['þoka', 'neblina'],
      ['stika', 'estaca que marca a trilha'],
      ['landvörður', 'guarda-parque'],
    ],
    nodes: {
      start: {
        emoji: '🎨',
        text: 'Linu og Stefán komu til Landmannalauga með fjallarútu eftir langa ferð yfir ár og sanda. Fjöllin í kring voru bleik, gul, græn og blá, eins og einhver hefði málað þau. Stefán sagði að ef veðrið héldist gott, gætu þeir gengið upp á Bláhnúk.',
        translation: 'O Linu e o Stefán chegaram a Landmannalaugar de ônibus de montanha, depois de uma longa viagem atravessando rios e areais. As montanhas em volta eram rosa, amarelas, verdes e azuis, como se alguém as tivesse pintado. O Stefán disse que, se o tempo continuasse bom, eles poderiam subir o Bláhnúkur.',
        choices: [
          { text: 'Linu vildi leggja strax af stað.', translation: 'O Linu quis partir imediatamente.', next: 'ganga' },
          { text: 'Linu stakk upp á að þeir færu fyrst í heitu laugina.', translation: 'O Linu sugeriu que eles fossem primeiro à fonte termal.', next: 'laug' },
          {
            text: 'Linu spurði hver hefði málað fjöllin.',
            translation: 'O Linu perguntou quem tinha pintado as montanhas.',
            wrong: 'O texto diz “eins og einhver hefði málað þau” — COMO SE alguém as tivesse pintado. O subjuntivo depois de “eins og” indica uma comparação irreal: as cores vêm das rochas vulcânicas e dos minerais.',
          },
        ],
      },
      laug: {
        emoji: '♨️',
        text: 'Heita laugin var við jaðar hraunsins, þar sem heitt og kalt vatn blandast saman. Linu lá í vatninu og sagði að ef hann mætti ráða, færi hann aldrei upp úr. Á meðan dró ský fyrir sólina.',
        translation: 'A fonte termal ficava na beira do campo de lava, onde a água quente e a fria se misturam. O Linu ficou deitado na água e disse que, se dependesse dele, nunca mais sairia. Enquanto isso, uma nuvem cobriu o sol.',
        choices: [
          { text: 'Linu fór upp úr og bjó sig undir gönguna.', translation: 'O Linu saiu da água e se preparou para a caminhada.', next: 'ganga' },
          { text: 'Linu lá í lauginni í tvo tíma í viðbót.', translation: 'O Linu ficou mais duas horas na fonte.', next: 'final_laug' },
        ],
      },
      final_laug: {
        emoji: '🌫️',
        text: 'Þegar Linu kom loksins upp úr, var komin þoka og farið að rigna. Stefán sagði að nú væri of seint að ganga á fjallið. “Ef þú hefðir farið fyrr upp úr, hefðum við séð útsýnið,” sagði hann, en hló samt.',
        translation: 'Quando o Linu finalmente saiu, a neblina já tinha chegado e começado a chover. O Stefán disse que agora era tarde demais para subir a montanha. “Se você tivesse saído antes, a gente teria visto a paisagem”, disse ele, mas riu mesmo assim.',
        ending: { tone: 'neutro', title: 'Preso na fonte', message: 'A nuvem sobre o sol era o aviso. O banho foi ótimo, mas a montanha fica para a próxima.' },
      },
      ganga: {
        emoji: '🥾',
        text: 'Stígurinn lá upp bratta hlíð þar sem rauk upp úr jörðinni á nokkrum stöðum. Stefán sagði að ekki mætti fara út af stígnum, því að gróðurinn væri viðkvæmur og jarðhitinn gæti verið hættulegur. Þegar þeir voru hálfnaðir, sáu þeir þokubakka nálgast.',
        translation: 'A trilha subia uma encosta íngreme onde, em vários pontos, saía vapor do chão. O Stefán disse que não se podia sair da trilha, porque a vegetação era frágil e o calor do solo podia ser perigoso. Quando estavam na metade do caminho, viram um banco de neblina se aproximando.',
        choices: [
          { text: 'Linu vildi halda áfram upp á toppinn.', translation: 'O Linu quis continuar até o cume.', next: 'thoka' },
          { text: 'Linu stakk upp á að þeir sneru við.', translation: 'O Linu sugeriu que eles voltassem.', next: 'snua' },
          {
            text: 'Linu fór út af stígnum til að skoða gufuna betur.',
            translation: 'O Linu saiu da trilha para ver o vapor mais de perto.',
            wrong: 'O Stefán disse que “ekki mætti fara út af stígnum” — NÃO se podia sair da trilha: a vegetação é frágil, e o chão quente pode ser perigoso.',
          },
        ],
      },
      thoka: {
        emoji: '🌫️',
        text: 'Þokan kom hraðar en þeir höfðu búist við, og brátt sá Linu ekki nema nokkra metra fram fyrir sig. Stefán sagði að ef leiðin væri ekki stikuð, væru þeir í vandræðum. Sem betur fer sáust stikurnar greinilega, hver á eftir annarri.',
        translation: 'A neblina chegou mais rápido do que eles esperavam, e logo o Linu só enxergava alguns metros à frente. O Stefán disse que, se a trilha não fosse marcada com estacas, eles estariam em apuros. Por sorte, as estacas apareciam com clareza, uma atrás da outra.',
        choices: [
          { text: 'Þeir fylgdu stikunum varlega upp á toppinn.', translation: 'Eles seguiram as estacas com cuidado até o cume.', next: 'toppur' },
          { text: 'Þeir fylgdu stikunum niður aftur.', translation: 'Eles seguiram as estacas de volta para baixo.', next: 'snua' },
        ],
      },
      toppur: {
        emoji: '🏔️',
        text: 'Rétt þegar þeir komu upp á toppinn, reif vindurinn gat á þokuna. Fyrir neðan þá lágu litrík fjöllin og svart hraunið, og langt í burtu glitti í jökul. Linu sagði að ef hann hefði vitað hve fallegt þetta væri, hefði hann komið fyrir löngu.',
        translation: 'Bem quando eles chegaram ao cume, o vento abriu um buraco na neblina. Lá embaixo estavam as montanhas coloridas e a lava preta, e bem longe brilhava uma geleira. O Linu disse que, se soubesse como aquilo era bonito, teria vindo havia muito tempo.',
        choices: [{ text: 'Þeir gengu niður og fóru í laugina.', translation: 'Eles desceram e foram para a fonte termal.', next: 'final_bom' }],
      },
      snua: {
        emoji: '🛖',
        text: 'Þeir sneru við og gengu niður aftur. Linu var fyrst svolítið svekktur, en Stefán sagði að fjallið færi hvergi. Í skálanum hittu þeir landvörð sem sagði að þokan myndi líklega hverfa um kvöldið.',
        translation: 'Eles deram meia-volta e desceram. O Linu primeiro ficou um pouco decepcionado, mas o Stefán disse que a montanha não ia a lugar nenhum. No abrigo, encontraram um guarda-parque que disse que a neblina provavelmente sumiria à noite.',
        choices: [{ text: 'Þeir reyndu aftur um kvöldið.', translation: 'Eles tentaram de novo à noite.', next: 'toppur' }],
      },
      final_bom: {
        emoji: '🌌',
        text: 'Um kvöldið lágu þeir í heitu lauginni og horfðu á himininn. Stefán spurði hvort Linu vildi ganga Laugaveginn til Þórsmerkur næsta sumar. Linu svaraði að hann myndi gera það ef Stefán lofaði að bera nestið.',
        translation: 'À noite, eles ficaram deitados na fonte termal olhando o céu. O Stefán perguntou se o Linu queria fazer a trilha Laugavegur até Þórsmörk no próximo verão. O Linu respondeu que faria, se o Stefán prometesse carregar o lanche.',
        ending: { tone: 'bom', title: 'Acima da neblina', message: 'O Linu seguiu as estacas, respeitou a trilha e viu as montanhas coloridas lá de cima.' },
      },
    },
  },
  {
    id: 'is-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Norður fyrir heimskautsbaug',
    emoji: '🧭',
    summary: 'O Linu pega a balsa até a ilhota de Grímsey com a amiga Anna para cruzar o Círculo Polar Ártico a pé.',
    cultural_context:
      'Grímsey, uma ilhota a cerca de 40 km da costa norte, é o único lugar habitado da Islândia por onde passa o Círculo Polar Ártico. Tem poucas dezenas de moradores, que vivem da pesca, e seus penhascos abrigam milhares de aves marinhas, como papagaios-do-mar e andorinhas-do-ártico. A balsa sai de Dalvík.',
    start: 'start',
    glossary: [
      ['ef sjórinn yrði úfinn', 'se o mar ficasse agitado'],
      ['hann óskaði þess að hann hefði…', 'ele desejou ter… (subjuntivo mais-que-perfeito)'],
      ['ef þau væru heppin, sæju þau…', 'se tivessem sorte, veriam…'],
      ['heimskautsbaugur', 'Círculo Polar Ártico'],
      ['þilfar', 'convés'],
      ['kría', 'andorinha-do-ártico'],
      ['bjarg', 'penhasco à beira-mar'],
      ['höfrungur', 'golfinho'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Ferjan frá Dalvík var um þrjár klukkustundir á leiðinni út í Grímsey. Linu stóð á þilfarinu með Önnu, sem hafði lofað að fara með honum norður fyrir heimskautsbaug. Hún sagði að ef sjórinn yrði úfinn, væri betra að standa úti en sitja inni.',
        translation: 'A balsa de Dalvík levava umas três horas até Grímsey. O Linu estava no convés com a Anna, que tinha prometido ir com ele além do Círculo Polar Ártico. Ela disse que, se o mar ficasse agitado, era melhor ficar do lado de fora do que sentado lá dentro.',
        choices: [
          { text: 'Linu var áfram úti á þilfarinu.', translation: 'O Linu continuou no convés.', next: 'thilfar' },
          { text: 'Linu fór inn að fá sér kaffi.', translation: 'O Linu entrou para tomar um café.', next: 'inni' },
        ],
      },
      inni: {
        emoji: '🤢',
        text: 'Inni var heitt, og ferjan valt meira en Linu hafði búist við. Honum fór að líða illa, og hann óskaði þess að hann hefði hlustað á Önnu. Hann flýtti sér aftur út í ferska loftið.',
        translation: 'Lá dentro estava quente, e a balsa balançava mais do que o Linu esperava. Ele começou a passar mal e desejou ter escutado a Anna. Correu de volta para o ar fresco.',
        choices: [{ text: 'Linu stóð við borðstokkinn hjá Önnu.', translation: 'O Linu ficou na amurada ao lado da Anna.', next: 'thilfar' }],
      },
      thilfar: {
        emoji: '🐬',
        text: 'Úti var ferskt loft, og brátt sáu þau höfrunga synda við hlið ferjunnar. Anna sagði að ef þau væru heppin, sæju þau líka lunda við eyjuna. Loks birtist Grímsey, lág og græn, með háum björgum.',
        translation: 'Lá fora o ar era fresco, e logo eles viram golfinhos nadando ao lado da balsa. A Anna disse que, se tivessem sorte, também veriam papagaios-do-mar perto da ilha. Por fim apareceu Grímsey, baixa e verde, com penhascos altos.',
        choices: [{ text: 'Linu og Anna gengu í land.', translation: 'O Linu e a Anna desembarcaram.', next: 'eyja' }],
      },
      eyja: {
        emoji: '🏝️',
        text: 'Í Grímsey búa aðeins nokkrir tugir manna, og flestir lifa á fiskveiðum. Heimskautsbaugurinn liggur yfir norðurhluta eyjunnar, og þar hefur verið komið fyrir merki. Anna sagði að þegar Linu stigi yfir bauginn, væri hann formlega kominn inn á norðurheimskautssvæðið.',
        translation: 'Em Grímsey moram só algumas dezenas de pessoas, e a maioria vive da pesca. O Círculo Polar passa pela parte norte da ilha, e ali foi colocado um marco. A Anna disse que, quando o Linu pisasse além da linha, ele estaria oficialmente no Ártico.',
        choices: [
          { text: 'Linu gekk beint að merkinu.', translation: 'O Linu foi direto até o marco.', next: 'baugur' },
          { text: 'Linu fór fyrst að skoða fuglana í bjarginu.', translation: 'O Linu foi primeiro ver as aves no penhasco.', next: 'bjarg' },
          {
            text: 'Linu sagðist vera kominn yfir bauginn um leið og hann steig í land.',
            translation: 'O Linu disse que tinha cruzado a linha assim que pisou em terra.',
            wrong: 'O Círculo Polar passa pela parte NORTE da ilha (“liggur yfir norðurhluta eyjunnar”). Só quando o Linu “stigi yfir bauginn” (pisasse além da linha) ele estaria no Ártico; ainda falta andar até lá.',
          },
        ],
      },
      bjarg: {
        emoji: '🐦',
        text: 'Á bjargbrúninni sátu hundruð lunda, og Linu lagðist á magann til að horfa á þá. Þá kom kría fljúgandi og goggaði hann í hausinn. Anna hló og sagði að ef hann hefði vitað hvað kríur væru árásargjarnar, hefði hann tekið með sér húfu.',
        translation: 'Na beira do penhasco havia centenas de papagaios-do-mar, e o Linu se deitou de bruços para observá-los. Aí veio voando uma andorinha-do-ártico e bicou a cabeça dele. A Anna riu e disse que, se ele soubesse como as andorinhas-do-ártico são agressivas, teria trazido um gorro.',
        choices: [
          { text: 'Linu flýtti sér burt frá kríunum og að merkinu.', translation: 'O Linu fugiu depressa das andorinhas e foi até o marco.', next: 'baugur' },
          {
            text: 'Linu kvartaði yfir því að lundarnir hefðu ráðist á hann.',
            translation: 'O Linu reclamou que os papagaios-do-mar o tinham atacado.',
            wrong: 'Quem bicou o Linu foi uma “kría” (andorinha-do-ártico), não os “lundar” (papagaios-do-mar). As andorinhas-do-ártico defendem os ninhos atacando a cabeça de quem chega perto.',
          },
        ],
      },
      baugur: {
        emoji: '📍',
        text: 'Við merkið stóð Linu með annan fótinn sunnan við bauginn og hinn norðan við hann. Anna tók mynd og sagði að nú væri hann bæði innan og utan heimskautssvæðisins. Linu sagði að ef hann yrði að velja, vildi hann frekar vera norðan megin, þar sem kaldara væri.',
        translation: 'No marco, o Linu ficou com um pé ao sul da linha e o outro ao norte. A Anna tirou uma foto e disse que agora ele estava ao mesmo tempo dentro e fora do Ártico. O Linu disse que, se tivesse de escolher, preferia ficar do lado norte, onde era mais frio.',
        choices: [
          { text: 'Linu og Anna gengu aftur niður að höfninni til að fá sér að borða.', translation: 'O Linu e a Anna voltaram ao porto para comer alguma coisa.', next: 'final_bom' },
          { text: 'Linu vildi ganga alla leið að nyrsta odda eyjunnar.', translation: 'O Linu quis andar até a ponta mais ao norte da ilha.', next: 'oddi' },
        ],
      },
      oddi: {
        emoji: '📯',
        text: 'Gangan var lengri en hann hafði haldið, og á leiðinni heyrðu þau ferjuna flauta. Anna sagði að ef þau hlypu, næðu þau henni kannski. Þau hlupu eins og þau gátu, en ferjan var farin þegar þau komu niður á bryggju.',
        translation: 'A caminhada foi mais longa do que ele imaginava, e no caminho eles ouviram a balsa apitar. A Anna disse que, se corressem, talvez a alcançassem. Correram o quanto puderam, mas a balsa já tinha partido quando chegaram ao cais.',
        ending: { tone: 'neutro', title: 'Uma noite a mais no Ártico', message: 'A Anna disse “ef þau hlypu, næðu þau henni kannski” — se corressem, TALVEZ a alcançassem. Não deu! Pelo menos sobra tempo para os papagaios-do-mar.' },
      },
      final_bom: {
        emoji: '🍲',
        text: 'Um kvöldið fengu þau sér fiskisúpu áður en ferjan fór til baka. Anna lyfti bollanum og sagði: “Ef einhver hefði sagt mér að ég færi norður fyrir heimskautsbaug með mörgæs, hefði ég ekki trúað því.” Linu svaraði að mörgæsir ættu reyndar heima á hinu heimskautinu, en að sér líkaði þetta norðlæga ágætlega.',
        translation: 'No fim da tarde, eles tomaram uma sopa de peixe antes de a balsa voltar. A Anna ergueu a caneca e disse: “Se alguém tivesse me dito que eu cruzaria o Círculo Polar com um pinguim, eu não teria acreditado.” O Linu respondeu que os pinguins, na verdade, moram no outro polo, mas que ele estava gostando bastante daquele norte.',
        ending: { tone: 'bom', title: 'Pinguim no Ártico', message: 'O Linu cruzou o Círculo Polar Ártico a pé, com um pé em cada lado da linha.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'is-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Tölvupóstur til háskólans',
    emoji: '📧',
    summary: 'Em Reykjavík, o Linu escreve um e-mail formal à Universidade da Islândia, e a amiga Þóra lhe ensina que, na Islândia, todos são tratados pelo primeiro nome.',
    cultural_context:
      'Na Islândia quase não há sobrenomes de família: o “sobrenome” é um patronímico (ou matronímico), formado com o nome do pai ou da mãe mais -son (filho) ou -dóttir (filha). Por isso todos são tratados pelo primeiro nome, até o presidente. A Universidade da Islândia (Háskóli Íslands) oferece um curso de “íslenska sem annað mál”, islandês como segunda língua.',
    start: 'start',
    glossary: [
      ['skírnarnafn', 'prenome (nome de batismo)'],
      ['Guðmundsson / Magnúsdóttir', 'patronímicos: filho de Guðmundur / filha de Magnús'],
      ['að ávarpa', 'dirigir-se a alguém, tratar'],
      ['Sæll / Sæl', 'Olá (formal e cordial; masculino / feminino)'],
      ['Með kveðju / Bestu kveðjur', 'Atenciosamente / Um abraço (fechos de e-mail)'],
      ['fyrirspurn', 'consulta, pedido de informação'],
      ['að sækja um', 'candidatar-se, inscrever-se'],
      ['hógværð', 'modéstia'],
    ],
    nodes: {
      start: {
        emoji: '💻',
        text: 'Linu ætlaði að sækja um nám í íslensku sem öðru máli við Háskóla Íslands. Umsjónarmaður námsins hét Jón Guðmundsson, og Linu bað vinkonu sína, Þóru Magnúsdóttur, að lesa yfir tölvupóstinn áður en hann sendi hann. Fyrsta línan var: “Hæstvirti herra Guðmundsson.”',
        translation: 'O Linu ia se inscrever no curso de islandês como segunda língua da Universidade da Islândia. O coordenador do curso se chamava Jón Guðmundsson, e o Linu pediu à amiga Þóra Magnúsdóttir que revisasse o e-mail antes de ele enviar. A primeira linha era: “Excelentíssimo senhor Guðmundsson.”',
        choices: [
          { text: 'Linu spurði Þóru hvort eitthvað væri að ávarpinu.', translation: 'O Linu perguntou à Þóra se havia algo errado com a saudação.', next: 'avarp' },
          { text: 'Linu sagði stoltur að þetta væri kurteisasta ávarp sem hann kynni.', translation: 'O Linu disse, orgulhoso, que aquela era a saudação mais educada que ele conhecia.', next: 'avarp' },
          {
            text: 'Linu bað Þóru að skrifa tölvupóstinn fyrir sig.',
            translation: 'O Linu pediu à Þóra que escrevesse o e-mail por ele.',
            wrong: 'O Linu só pediu que a Þóra “lesa yfir” o e-mail — REVISASSE o texto que ele mesmo tinha escrito. Quem escreve é ele!',
          },
        ],
      },
      avarp: {
        emoji: '😄',
        text: 'Þóra hló og útskýrði að á Íslandi væru allir ávarpaðir með skírnarnafni, jafnvel forsetinn og biskupinn. “Guðmundsson er ekki ættarnafn,” sagði hún. “Það þýðir bara að faðir hans heitir Guðmundur.”',
        translation: 'A Þóra riu e explicou que na Islândia todos são tratados pelo prenome, até o presidente e o bispo. “Guðmundsson não é sobrenome de família”, disse ela. “Só quer dizer que o pai dele se chama Guðmundur.”',
        choices: [
          { text: 'Linu breytti ávarpinu í “Góðan dag, Jón”.', translation: 'O Linu trocou a saudação para “Bom dia, Jón”.', next: 'meginmal' },
          {
            text: 'Linu spurði hvort börn Jóns hétu líka Guðmundsson.',
            translation: 'O Linu perguntou se os filhos de Jón também se chamavam Guðmundsson.',
            wrong: 'Não! “Guðmundsson” só diz que o PAI de Jón se chama Guðmundur. Os filhos de Jón seriam “Jónsson”, e as filhas, “Jónsdóttir”.',
          },
        ],
      },
      meginmal: {
        emoji: '📝',
        text: 'Næst las Þóra meginmálið. Linu hafði skrifað: “Ég vil fá pláss strax, því að ég er mjög góður nemandi.” Þóra sagði að þetta væri of beint og að betra væri að skrifa kurteislega, en þó ekki of hátíðlega.',
        translation: 'Depois a Þóra leu o corpo do e-mail. O Linu tinha escrito: “Quero uma vaga já, porque sou um aluno muito bom.” A Þóra disse que aquilo era direto demais e que era melhor escrever com educação, mas sem ser solene demais.',
        choices: [
          { text: 'Linu skrifaði: “Mig langar að sækja um nám í íslensku sem öðru máli á haustmisseri.”', translation: 'O Linu escreveu: “Gostaria de me inscrever no curso de islandês como segunda língua no semestre de outono.”', next: 'fyrirspurn' },
          { text: 'Linu bætti við: “Ég er besti nemandi í heimi.”', translation: 'O Linu acrescentou: “Sou o melhor aluno do mundo.”', next: 'hroki' },
        ],
      },
      hroki: {
        emoji: '🙄',
        text: 'Þóra hristi höfuðið. Hún sagði að á Íslandi þætti hógværð meiri kostur en að hrósa sjálfum sér. “Leyfðu kennurunum að komast að því sjálfir,” sagði hún.',
        translation: 'A Þóra balançou a cabeça. Disse que na Islândia a modéstia é vista como uma qualidade maior do que se elogiar. “Deixe os professores descobrirem isso sozinhos”, disse ela.',
        choices: [{ text: 'Linu strikaði setninguna út og skrifaði kurteislega fyrirspurn.', translation: 'O Linu riscou a frase e escreveu uma consulta educada.', next: 'fyrirspurn' }],
      },
      fyrirspurn: {
        emoji: '✉️',
        text: 'Þóra kinkaði kolli. Hún stakk upp á að hann spyrði líka hvort nauðsynlegt væri að hafa lokið einhverju prófi áður. “Og endaðu á „Með kveðju‘ eða „Bestu kveðjur‘, ekki á „Ástarkveðjur‘,’ bætti hún við.',
        translation: 'A Þóra fez que sim com a cabeça. Sugeriu que ele também perguntasse se era preciso ter feito alguma prova antes. “E termine com ‘Atenciosamente’ ou ‘Um abraço’, não com ‘Beijos, com amor’”, acrescentou.',
        choices: [
          { text: 'Linu endaði á „Með bestu kveðju, Linu“.', translation: 'O Linu terminou com “Atenciosamente, Linu”.', next: 'svar' },
          {
            text: 'Linu endaði á „Ástarkveðjur, Linu“.',
            translation: 'O Linu terminou com “Beijos, com amor, Linu”.',
            wrong: 'A Þóra disse para NÃO terminar com “Ástarkveðjur” (beijos, com amor): isso é para a família e para namorados. Num e-mail formal: “Með kveðju” ou “Bestu kveðjur”.',
          },
        ],
      },
      svar: {
        emoji: '📬',
        text: 'Tveimur dögum síðar kom svar: “Sæll Linu. Takk fyrir fyrirspurnina. Upplýsingar um inntökuskilyrði og umsóknarfrest eru á vef skólans. Bestu kveðjur, Jón.” Linu var hissa á því hve óformlegt svarið var.',
        translation: 'Dois dias depois chegou a resposta: “Olá, Linu. Obrigado pela consulta. As informações sobre os requisitos de admissão e o prazo de inscrição estão no site da universidade. Um abraço, Jón.” O Linu ficou surpreso com a informalidade da resposta.',
        choices: [
          { text: 'Linu svaraði stuttlega og þakkaði fyrir upplýsingarnar.', translation: 'O Linu respondeu brevemente e agradeceu pelas informações.', next: 'final_bom' },
          { text: 'Linu svaraði: “Sæll Jón! Eigum við að hittast í heita pottinum og ræða málið?”', translation: 'O Linu respondeu: “Olá, Jón! Vamos nos encontrar no ofurô para conversar sobre o assunto?”', next: 'final_sund' },
        ],
      },
      final_bom: {
        emoji: '🎓',
        text: 'Linu sendi umsóknina sama dag. Þóra sagði að nú skrifaði hann betri tölvupósta en margir Íslendingar. Um haustið sat Linu í fyrstu kennslustundinni og kallaði kennarann Jón, eins og allir hinir.',
        translation: 'O Linu mandou a inscrição no mesmo dia. A Þóra disse que agora ele escrevia e-mails melhores que muitos islandeses. No outono, o Linu estava na primeira aula e chamava o professor de Jón, como todos os outros.',
        ending: { tone: 'bom', title: 'Aluno de islandês', message: 'O Linu aprendeu o tom certo: educado, pelo prenome e sem exageros.' },
      },
      final_sund: {
        emoji: '😬',
        text: 'Jón svaraði ekki. Þóra útskýrði að þótt Íslendingar notuðu skírnarnöfn, væri munur á því að vera óformlegur og að vera of nálægur. Linu sendi nýjan og kurteislegri póst daginn eftir.',
        translation: 'O Jón não respondeu. A Þóra explicou que, embora os islandeses usem o prenome, há diferença entre ser informal e ser íntimo demais. O Linu mandou um e-mail novo e mais educado no dia seguinte.',
        ending: { tone: 'neutro', title: 'Informal demais', message: 'Usar o prenome não é intimidade: um coordenador de curso não é colega de ofurô. Tente de novo!' },
      },
    },
  },
  {
    id: 'is-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Nafn handa drengnum',
    emoji: '👶',
    summary: 'Em Hafnarfjörður, amigos do Linu querem dar o nome dele ao filho que vai nascer, e os três escrevem uma carta formal à Comissão de Nomes Pessoais.',
    cultural_context:
      'Desde 1991, a Mannanafnanefnd (Comissão de Nomes Pessoais) aprova ou recusa os prenomes que ainda não estão na lista oficial da Islândia: o nome precisa poder receber a terminação de genitivo e ser escrito de acordo com a ortografia islandesa. Como o patronímico é pessoal, os islandeses normalmente não trocam de nome ao casar.',
    start: 'start',
    glossary: [
      ['eiginnafn', 'prenome'],
      ['mannanafnanefnd', 'Comissão de Nomes Pessoais'],
      ['eignarfall / eignarfallsending', 'genitivo / terminação de genitivo'],
      ['Undirrituð óska hér með eftir…', 'Os abaixo assinados vêm por meio desta solicitar… (registro formal)'],
      ['Virðingarfyllst', 'Respeitosamente (fecho de carta formal)'],
      ['að rökstyðja', 'fundamentar, justificar'],
      ['í höfuðið á e-m', 'em homenagem a alguém (com o nome dele)'],
      ['nafni', 'xará'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'Sigríður og Hrafn, vinir Linu í Hafnarfirði, áttu von á barni. Eitt kvöldið sögðu þau honum að ef barnið yrði drengur, langaði þau að skíra hann Linu. Linu varð svo hrærður að hann missti kaffibollann.',
        translation: 'A Sigríður e o Hrafn, amigos do Linu em Hafnarfjörður, estavam esperando um bebê. Uma noite, eles disseram que, se o bebê fosse menino, queriam lhe dar o nome de Linu. O Linu ficou tão emocionado que deixou cair a xícara de café.',
        choices: [
          { text: 'Linu spurði hvort það væri leyfilegt.', translation: 'O Linu perguntou se isso era permitido.', next: 'nefnd' },
          { text: 'Linu sagðist vera upp með sér, en að nafnið væri kannski skrítið á íslensku.', translation: 'O Linu disse que estava lisonjeado, mas que o nome talvez fosse estranho em islandês.', next: 'nefnd' },
          {
            text: 'Linu óskaði þeim til hamingju með dótturina.',
            translation: 'O Linu deu os parabéns pela filha.',
            wrong: 'O bebê ainda não nasceu: eles “áttu von á barni” — ESTAVAM ESPERANDO um bebê. E o nome Linu só seria usado “ef barnið yrði drengur” — se fosse MENINO.',
          },
        ],
      },
      nefnd: {
        emoji: '⚖️',
        text: 'Hrafn útskýrði að ný eiginnöfn þyrftu að vera samþykkt af mannanafnanefnd. Nafnið yrði að geta tekið eignarfallsendingu og vera ritað með íslenskum stöfum. Sigríður bætti við að þau þyrftu að senda nefndinni formlega umsókn.',
        translation: 'O Hrafn explicou que prenomes novos precisavam ser aprovados pela Comissão de Nomes Pessoais. O nome tinha de poder receber a terminação de genitivo e ser escrito com letras islandesas. A Sigríður acrescentou que eles precisariam mandar à comissão um pedido formal.',
        choices: [
          { text: 'Linu bauðst til að hjálpa þeim við umsóknina.', translation: 'O Linu se ofereceu para ajudá-los com o pedido.', next: 'umsokn' },
          { text: 'Linu spurði hvert eignarfallið af Linu væri.', translation: 'O Linu perguntou qual era o genitivo de Linu.', next: 'eignarfall' },
        ],
      },
      eignarfall: {
        emoji: '🤔',
        text: 'Þau reyndu öll að beygja nafnið: hér er Linu, um Linu, frá Linu… Sigríður hikaði og spurði: “Til Linus? Eða bara til Linu?” Hrafn sagði að nefndin myndi eflaust spyrja að þessu líka.',
        translation: 'Todos tentaram declinar o nome: aqui está Linu, sobre Linu, de Linu… A Sigríður hesitou e perguntou: “Para o Linus? Ou só para o Linu?” O Hrafn disse que a comissão com certeza também ia perguntar isso.',
        choices: [{ text: 'Þau settust við tölvuna til að skrifa umsóknina.', translation: 'Eles se sentaram ao computador para escrever o pedido.', next: 'umsokn' }],
      },
      umsokn: {
        emoji: '⌨️',
        text: 'Þau settust við tölvuna. Linu byrjaði að skrifa: “Hæ nefnd! Okkur langar rosalega að nota nafnið Linu.” Sigríður hló og sagði að bréf til opinberrar nefndar þyrfti að vera formlegra.',
        translation: 'Eles se sentaram ao computador. O Linu começou a escrever: “Oi, comissão! A gente quer muito usar o nome Linu.” A Sigríður riu e disse que uma carta para uma comissão oficial precisava ser mais formal.',
        choices: [
          { text: 'Linu skrifaði: “Undirrituð óska hér með eftir samþykki nefndarinnar á eiginnafninu Linu.”', translation: 'O Linu escreveu: “Os abaixo assinados vêm por meio desta solicitar a aprovação da comissão para o prenome Linu.”', next: 'rok' },
          {
            text: 'Linu bætti við broskalli og sendi bréfið strax.',
            translation: 'O Linu acrescentou uma carinha sorridente e mandou a carta na hora.',
            wrong: 'A Sigríður disse que a carta “þyrfti að vera formlegra” — precisava ser MAIS FORMAL. Carinha sorridente numa carta a uma comissão oficial vai na direção contrária!',
          },
        ],
      },
      rok: {
        emoji: '🐧',
        text: 'Næst þurfti að rökstyðja umsóknina. Hrafn stakk upp á að þau skrifuðu að nafnið væri til heiðurs góðum vini fjölskyldunnar. Linu vildi hins vegar skrifa að allar mörgæsir á Suðurskautslandinu hétu Linu.',
        translation: 'Depois era preciso fundamentar o pedido. O Hrafn sugeriu escrever que o nome era uma homenagem a um grande amigo da família. O Linu, por outro lado, queria escrever que todos os pinguins da Antártida se chamavam Linu.',
        choices: [
          { text: 'Linu féllst á tillögu Hrafns.', translation: 'O Linu concordou com a sugestão do Hrafn.', next: 'lok' },
          { text: 'Linu krafðist þess að setningin um mörgæsirnar yrði með.', translation: 'O Linu fez questão de que a frase sobre os pinguins entrasse.', next: 'final_morgaes' },
        ],
      },
      lok: {
        emoji: '✍️',
        text: 'Bréfinu lauk með kveðjunni “Virðingarfyllst” og nöfnum þeirra beggja: Sigríður Árnadóttir og Hrafn Ólafsson. Linu tók eftir því að þau báru ekki sama eftirnafn, þótt þau væru hjón. Sigríður útskýrði að á Íslandi skiptu hjón yfirleitt ekki um nafn við giftingu.',
        translation: 'A carta terminava com “Respeitosamente” e o nome dos dois: Sigríður Árnadóttir e Hrafn Ólafsson. O Linu reparou que eles não tinham o mesmo sobrenome, embora fossem casados. A Sigríður explicou que na Islândia os casais normalmente não trocam de nome ao casar.',
        choices: [{ text: 'Þau sendu umsóknina daginn eftir.', translation: 'Eles mandaram o pedido no dia seguinte.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🍼',
        text: 'Nokkrum mánuðum síðar fæddist lítill drengur. Hvað sem nefndin myndi ákveða, kallaði Linu hann alltaf “litla nafna”. Sigríður sagði brosandi að drengurinn hefði að minnsta kosti fengið besta guðföður í heimi.',
        translation: 'Alguns meses depois nasceu um menininho. Fosse qual fosse a decisão da comissão, o Linu sempre o chamava de “pequeno xará”. A Sigríður disse, sorrindo, que pelo menos o menino tinha ganhado o melhor padrinho do mundo.',
        ending: { tone: 'bom', title: 'Pequeno xará', message: 'O Linu ajudou a escrever uma carta formal de verdade: “Undirrituð óska hér með eftir…” e “Virðingarfyllst”.' },
      },
      final_morgaes: {
        emoji: '🙃',
        text: 'Sigríður og Hrafn litu hvort á annað. Þau sögðu kurteislega að þau efuðust um að nefndin tæki slík rök gild. Umsóknin var aldrei send, og drengurinn var skírður Ólafur, í höfuðið á afa sínum.',
        translation: 'A Sigríður e o Hrafn se entreolharam. Disseram, com educação, que duvidavam que a comissão aceitasse um argumento desses. O pedido nunca foi enviado, e o menino foi batizado de Ólafur, em homenagem ao avô.',
        ending: { tone: 'neutro', title: 'Argumento de pinguim', message: 'Numa carta formal, o argumento também precisa ser sério. Tente de novo com a sugestão do Hrafn!' },
      },
    },
  },
  {
    id: 'is-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Ormurinn í Lagarfljóti',
    emoji: '🐍',
    summary: 'Num chalé perto de Egilsstaðir, o Linu fica sem água quente, escreve um e-mail formal à dona da casa e acha que viu a serpente do lago Lagarfljót.',
    cultural_context:
      'Segundo uma lenda antiga, o lago Lagarfljót, perto de Egilsstaðir, no leste da Islândia, abriga uma serpente gigante, o Lagarfljótsormurinn, que muitos dizem ter visto ao longo dos séculos. Como quase ninguém na Islândia tem sobrenome de família, a lista telefônica é organizada pelo primeiro nome.',
    start: 'start',
    glossary: [
      ['Sæl Guðný / Sæll Jón', 'Olá, Guðný / Olá, Jón (formal e cordial, pelo prenome)'],
      ['Mér þykir leitt að…', 'Lamento…, sinto muito por…'],
      ['Undirritaður vill hér með tilkynna…', 'O abaixo assinado vem por meio desta comunicar… (muito formal)'],
      ['að biðjast afsökunar á + dativo', 'pedir desculpas por algo'],
      ['símaskrá', 'lista telefônica'],
      ['skírnarnafn', 'prenome'],
      ['sumarbústaður', 'casa de veraneio, chalé'],
      ['ormur', 'serpente, verme'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Linu hafði leigt sumarbústað við Lagarfljót, skammt frá Egilsstöðum. Fyrsta morguninn kom ekkert heitt vatn úr sturtunni. Í möppu í eldhúsinu stóð að gestir ættu að hafa samband við eigandann, Guðnýju Sveinsdóttur, með tölvupósti.',
        translation: 'O Linu tinha alugado um chalé à beira do Lagarfljót, perto de Egilsstaðir. Na primeira manhã, não saiu água quente do chuveiro. Numa pasta na cozinha estava escrito que os hóspedes deviam entrar em contato com a dona, Guðný Sveinsdóttir, por e-mail.',
        choices: [
          { text: 'Linu settist niður til að skrifa tölvupóst.', translation: 'O Linu se sentou para escrever um e-mail.', next: 'postur' },
          { text: 'Linu fór í kalda sturtu og lét það duga.', translation: 'O Linu tomou um banho frio e se contentou com isso.', next: 'kalt' },
          {
            text: 'Linu hringdi í Svein, föður Guðnýjar.',
            translation: 'O Linu ligou para o Sveinn, pai da Guðný.',
            wrong: 'A pasta pedia contato com a dona, Guðný, “með tölvupósti” — POR E-MAIL. “Sveinsdóttir” só diz que o pai dela se chama Sveinn; ele não tem nada a ver com o chalé.',
          },
        ],
      },
      kalt: {
        emoji: '🥶',
        text: 'Fyrir mörgæs var kalda vatnið bara hressandi. En um kvöldið var ofninn í stofunni líka kaldur, og jafnvel Linu var farinn að skjálfa. Hann ákvað að nú væri kominn tími til að láta eigandann vita.',
        translation: 'Para um pinguim, a água fria era só revigorante. Mas à noite o aquecedor da sala também estava frio, e até o Linu começou a tremer. Ele decidiu que estava na hora de avisar a dona.',
        choices: [{ text: 'Linu settist niður til að skrifa tölvupóst.', translation: 'O Linu se sentou para escrever um e-mail.', next: 'postur' }],
      },
      postur: {
        emoji: '💻',
        text: 'Linu skrifaði fyrst: “Halló!!! Ekkert heitt vatn!!!” Svo mundi hann eftir því sem hann hafði lært um formleg bréf. Hann strokaði allt út og byrjaði upp á nýtt.',
        translation: 'Primeiro o Linu escreveu: “Alô!!! Sem água quente!!!” Depois ele se lembrou do que tinha aprendido sobre cartas formais. Apagou tudo e começou de novo.',
        choices: [
          { text: 'Linu skrifaði: “Sæl Guðný. Mér þykir leitt að trufla þig, en svo virðist sem ekkert heitt vatn sé í húsinu.”', translation: 'O Linu escreveu: “Olá, Guðný. Lamento incomodar, mas parece que não há água quente na casa.”', next: 'svar' },
          { text: 'Linu skrifaði: “Góðan daginn, frú Sveinsdóttir.”', translation: 'O Linu escreveu: “Bom dia, senhora Sveinsdóttir.”', next: 'fru' },
        ],
      },
      fru: {
        emoji: '🤔',
        text: 'Linu hikaði. Hann mundi að Íslendingar ávarpa hver annan með skírnarnafni, líka í formlegum bréfum. “Frú Sveinsdóttir” myndi hljóma undarlega, því að það þýðir bara „dóttir Sveins“.',
        translation: 'O Linu hesitou. Lembrou que os islandeses se tratam pelo prenome, também em cartas formais. “Senhora Sveinsdóttir” soaria estranho, porque isso só quer dizer “filha de Sveinn”.',
        choices: [{ text: 'Linu breytti ávarpinu í “Sæl Guðný”.', translation: 'O Linu trocou a saudação para “Olá, Guðný”.', next: 'svar' }],
      },
      svar: {
        emoji: '📨',
        text: 'Guðný svaraði eftir hálftíma. Hún baðst afsökunar á óþægindunum og sagði að pípari kæmi daginn eftir. Hún bætti við að ef hann þyrfti að hringja, væri númerið hennar í símaskránni, þar sem fólki er raðað eftir skírnarnafni.',
        translation: 'A Guðný respondeu depois de meia hora. Pediu desculpas pelo transtorno e disse que um encanador viria no dia seguinte. Acrescentou que, se ele precisasse ligar, o número dela estava na lista telefônica, onde as pessoas são ordenadas pelo prenome.',
        choices: [
          { text: 'Linu þakkaði fyrir og fór út að ganga meðfram fljótinu.', translation: 'O Linu agradeceu e saiu para caminhar ao longo do lago.', next: 'fljot' },
          {
            text: 'Linu leitaði að henni undir S í símaskránni.',
            translation: 'O Linu procurou por ela na letra S da lista telefônica.',
            wrong: 'A Guðný disse que na lista as pessoas estão ordenadas “eftir skírnarnafni” — PELO PRENOME. Procure em G, de Guðný, e não em S, de Sveinsdóttir.',
          },
        ],
      },
      fljot: {
        emoji: '🌫️',
        text: 'Lagarfljót var langt og mjólkurlitað, og yfir því lá þoka. Allt í einu sá Linu eitthvað langt og dökkt hreyfast í vatninu. Hann mundi eftir sögunni um Lagarfljótsorminn, sem margir hafa þóst sjá í aldanna rás.',
        translation: 'O Lagarfljót era comprido e cor de leite, e havia neblina sobre ele. De repente, o Linu viu algo comprido e escuro se mexendo na água. Ele se lembrou da história da serpente do Lagarfljót, que muita gente diz ter visto ao longo dos séculos.',
        choices: [
          { text: 'Linu gekk nær til að skoða betur.', translation: 'O Linu chegou mais perto para ver melhor.', next: 'naer' },
          { text: 'Linu skrifaði formlega tilkynningu til sveitarfélagsins.', translation: 'O Linu escreveu um comunicado formal à prefeitura.', next: 'tilkynning' },
        ],
      },
      naer: {
        emoji: '🪵',
        text: 'Þegar hann kom nær, sá hann að þetta var bara gamall trjábolur sem rak niður fljótið. Linu var næstum því vonsvikinn. Hann tók samt mynd af trjábolnum, svona til öryggis.',
        translation: 'Quando chegou mais perto, viu que era só um tronco velho boiando rio abaixo. O Linu ficou quase decepcionado. Mesmo assim tirou uma foto do tronco, só por garantia.',
        choices: [{ text: 'Linu gekk heim í bústaðinn.', translation: 'O Linu voltou para o chalé.', next: 'final_bom' }],
      },
      tilkynning: {
        emoji: '📜',
        text: 'Linu skrifaði: “Undirritaður vill hér með tilkynna að hann hafi séð Lagarfljótsorminn í morgun.” Hann sendi bréfið til bæjarskrifstofunnar. Svarið kom daginn eftir, stutt og kurteislegt, en Linu fannst eins og einhver hefði brosað á meðan það var skrifað.',
        translation: 'O Linu escreveu: “O abaixo assinado vem por meio desta comunicar que viu a serpente do Lagarfljót esta manhã.” Ele mandou a carta para a prefeitura. A resposta chegou no dia seguinte, curta e educada, mas o Linu teve a impressão de que alguém tinha sorrido enquanto a escrevia.',
        ending: { tone: 'neutro', title: 'Testemunha da serpente', message: 'A carta estava impecável, mas o Linu nem chegou perto para ver o que era. Volte e olhe melhor!' },
      },
      final_bom: {
        emoji: '🚿',
        text: 'Daginn eftir kom píparinn og lagaði heita vatnið á hálftíma. Linu sagði honum frá trjábolnum, og píparinn sagði brosandi að afi sinn hefði séð orminn tvisvar. Um kvöldið fór Linu í heita sturtu og sendi Guðnýju stutt þakkarbréf sem endaði á “Bestu kveðjur, Linu”.',
        translation: 'No dia seguinte, o encanador veio e consertou a água quente em meia hora. O Linu contou a ele sobre o tronco, e o encanador disse, sorrindo, que o avô dele tinha visto a serpente duas vezes. À noite o Linu tomou um banho quente e mandou à Guðný um bilhete de agradecimento que terminava com “Um abraço, Linu”.',
        ending: { tone: 'bom', title: 'Água quente e lendas', message: 'O Linu escreveu um e-mail no tom certo, achou a Guðný pelo prenome e voltou com uma boa história do Lagarfljót.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'is-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Tala og völva',
    emoji: '💻',
    summary: 'Num café de Reykjavík, uma ex-professora de islandês mostra ao Linu como o idioma inventa palavras novas com raízes antigas.',
    cultural_context:
      'O islandês prefere criar palavras com raízes próprias a importar estrangeirismos: “tölva” (computador) junta “tala” (número) e “völva” (vidente), “sími” (telefone) reaproveita uma palavra antiga que queria dizer “fio”, e “þyrla” (helicóptero) vem do verbo “þyrla”, rodopiar. Há décadas existe um comitê oficial da língua, a Íslensk málnefnd, e muitas áreas técnicas têm comitês de palavras (orðanefndir).',
    start: 'start',
    glossary: [
      ['nýyrði', 'neologismo, palavra nova'],
      ['tölva (tala + völva)', 'computador (número + vidente)'],
      ['sími', 'telefone (no nórdico antigo, “fio, cordão”)'],
      ['að vera eins og þorskur á þurru landi', 'estar como peixe fora d’água (lit.: como bacalhau em terra seca)'],
      ['að leggja höfuðið í bleyti', 'quebrar a cabeça, pensar muito (lit.: pôr a cabeça de molho)'],
      ['að taka til hendinni', 'pôr a mão na massa, começar a trabalhar'],
      ['að slá tvær flugur í einu höggi', 'matar dois coelhos com uma cajadada só (lit.: acertar duas moscas num golpe)'],
      ['sletta', 'estrangeirismo usado na fala'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'Það var grenjandi rigning í Reykjavík, og Linu flýtti sér inn á lítið kaffihús við Laugaveg. Við gluggann sat eldri kona með krossgátu og blýant á bak við eyrað. “Þú ert eins og þorskur á þurru landi”, sagði hún brosandi þegar hún sá hann standa rennblautan í dyrunum. Hún kynnti sig sem Sigrúnu Jónsdóttur, fyrrverandi íslenskukennara, og bauð honum sæti.',
        translation:
          'Chovia a cântaros em Reykjavík, e o Linu correu para dentro de um pequeno café na Laugavegur. Perto da janela estava sentada uma senhora com palavras cruzadas e um lápis atrás da orelha. “Você está feito peixe fora d’água”, disse ela sorrindo quando o viu parado, encharcado, na porta. Ela se apresentou como Sigrún Jónsdóttir, ex-professora de islandês, e lhe ofereceu uma cadeira.',
        choices: [
          { text: 'Setjast hjá henni og spyrja um krossgátuna.', translation: 'Sentar-se com ela e perguntar sobre as palavras cruzadas.', next: 'krossgata' },
          { text: 'Taka upp símann og fletta upp orðinu þorskur.', translation: 'Pegar o celular e procurar a palavra “þorskur”.', next: 'simi' },
        ],
      },
      simi: {
        emoji: '📱',
        text: 'Linu tók upp símann til að fletta upp orðinu þorskur, en Sigrún hló og benti á tækið. “Veistu að orðið sími er ævagamalt? Í fornu máli þýddi það þráður eða band”, sagði hún. “Þegar síminn kom til landsins var gamla orðið tekið upp aftur í stað þess að nota erlent orð.” Svo bætti hún við að þorskur væri einfaldlega fiskur og að hann ætti bara að setjast.',
        translation:
          'O Linu pegou o celular para procurar a palavra “þorskur”, mas a Sigrún riu e apontou para o aparelho. “Sabia que a palavra ‘sími’ é antiquíssima? Na língua antiga queria dizer fio ou cordão”, disse ela. “Quando o telefone chegou ao país, retomaram a palavra antiga em vez de usar uma estrangeira.” Depois acrescentou que “þorskur” era simplesmente bacalhau e que ele devia era se sentar.',
        choices: [{ text: 'Setjast og spyrja um fleiri svona orð.', translation: 'Sentar-se e perguntar por mais palavras assim.', next: 'krossgata' }],
      },
      krossgata: {
        emoji: '✏️',
        text: 'Sigrún rétti honum krossgátuna og sagði að hún hefði verið að leggja höfuðið í bleyti yfir einu orði í hálftíma. “Tæki sem telur og spáir, fimm stafir”, las hún upphátt. Linu hugsaði sig um og mundi þá að tölur og spádómar mætast í einu frægasta nýyrði málsins. Sigrún beið spennt með blýantinn á lofti.',
        translation:
          'A Sigrún lhe passou as palavras cruzadas e disse que estava havia meia hora quebrando a cabeça com uma palavra. “Aparelho que conta e prevê, cinco letras”, leu ela em voz alta. O Linu pensou um pouco e lembrou que números e profecias se encontram num dos neologismos mais famosos da língua. A Sigrún esperou, ansiosa, com o lápis no ar.',
        choices: [
          { text: '“Tölva! Tala og völva.”', translation: '“Tölva! Número e vidente.”', next: 'tolva' },
          {
            text: '“Sími! Það er gamalt orð.”',
            translation: '“Sími! É uma palavra antiga.”',
            wrong: 'A pista falava de um aparelho que conta e prevê (“telur og spáir”), com cinco letras. É “tölva” (computador), que junta “tala” (número) e “völva” (vidente). “Sími” tem quatro letras e é o telefone.',
          },
        ],
      },
      tolva: {
        emoji: '💻',
        text: 'Sigrún skrifaði orðið inn og ljómaði. “Einmitt! Tala og völva, tæki sem kann að telja og spá fyrir um framtíðina”, sagði hún. Hún útskýrði að Íslendingar byggju frekar til ný orð úr gömlum rótum en að taka upp erlend orð, og að þyrla væri dregin af sögninni að þyrla, að þeyta einhverju í hringi. “Sjónvarp er líka gott dæmi: sjón og varp, myndum er varpað heim í stofu.” Linu fann að hann var farinn að sjá orðin á nýjan hátt.',
        translation:
          'A Sigrún escreveu a palavra e se iluminou. “Isso! Número e vidente, um aparelho que sabe contar e prever o futuro”, disse ela. Explicou que os islandeses preferem criar palavras novas com raízes antigas a adotar palavras estrangeiras, e que “þyrla” (helicóptero) vem do verbo “þyrla”, fazer girar alguma coisa em círculos. “Sjónvarp (televisão) também é um bom exemplo: visão e projeção, as imagens são projetadas até a sala de casa.” O Linu sentiu que estava começando a ver as palavras de outro jeito.',
        choices: [{ text: '“En hvað þá um orð eins og bíll?”', translation: '“Mas e palavras como ‘bíll’ (carro)?”', next: 'bill' }],
      },
      bill: {
        emoji: '🚗',
        text: 'Linu spurði hvort Íslendingar segðu þá aldrei bíll, sem hljómar ansi útlenskt. Sigrún brosti og viðurkenndi að bíll hefði komið úr dönsku og væri notað á hverjum degi, þótt bifreið væri hið formlega orð. “Málið er ekki safn, það er lifandi”, sagði hún. “Stundum vinnur nýyrðið, stundum lifir slettan, og stundum lifa bæði hlið við hlið.” Hún leit á klukkuna og sagði að nú þyrfti hún að fara að taka til hendinni.',
        translation:
          'O Linu perguntou se então os islandeses nunca diziam “bíll”, que soa bem estrangeiro. A Sigrún sorriu e admitiu que “bíll” tinha vindo do dinamarquês e era usado todo dia, embora “bifreið” fosse a palavra formal. “A língua não é um museu, ela está viva”, disse. “Às vezes o neologismo vence, às vezes o estrangeirismo sobrevive, e às vezes os dois vivem lado a lado.” Ela olhou o relógio e disse que agora precisava pôr a mão na massa.',
        choices: [
          { text: '“Ertu að fara að vinna?”', translation: '“Você vai trabalhar?”', next: 'bod' },
          {
            text: '“Meiddirðu þig í hendinni?”',
            translation: '“Você machucou a mão?”',
            wrong: '“Að taka til hendinni” é uma expressão: quer dizer pôr a mão na massa, começar a trabalhar. A Sigrún não se machucou — ela tem trabalho a fazer.',
          },
        ],
      },
      bod: {
        emoji: '📚',
        text: '“Já, ég er í sjálfboðavinnu hjá orðanefnd sem finnur íslensk orð yfir nýja tækni”, sagði Sigrún og tók saman dótið sitt. Hún sagði að einmitt núna vantaði þau gott orð yfir tæki sem heyrir hvað maður segir og svarar. Linu varð hugsi; kannski gæti hann slegið tvær flugur í einu höggi, lært meira í málinu og hjálpað til um leið. Sigrún horfði á hann yfir gleraugun og beið eftir svari.',
        translation:
          '“Vou, sou voluntária num comitê de palavras que encontra termos islandeses para as novas tecnologias”, disse a Sigrún, juntando suas coisas. Contou que justamente agora faltava a eles uma boa palavra para um aparelho que ouve o que a gente diz e responde. O Linu ficou pensativo: talvez pudesse matar dois coelhos com uma cajadada só, aprender mais a língua e ajudar ao mesmo tempo. A Sigrún olhou para ele por cima dos óculos e esperou a resposta.',
        choices: [
          { text: '“Má ég koma með á næsta fund?”', translation: '“Posso ir junto na próxima reunião?”', next: 'final_bom' },
          { text: '“Af hverju ekki bara að nota enska orðið?”', translation: '“Por que não usar simplesmente a palavra inglesa?”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Á næsta fundi sat Linu við langt borð með sex orðaunnendum sem drukku kaffi og rökræddu af ástríðu um hvert atkvæði. Eftir tveggja tíma umræðu lagði hann til orð sem allir hlógu fyrst að, en fóru svo að velta fyrir sér. Orðið komst ekki í orðabókina í þetta sinn, en Sigrún sagði að hann væri kominn með íslenskt málhjarta. Linu gekk út í rigninguna og fannst hann ekki lengur vera eins og þorskur á þurru landi.',
        translation:
          'Na reunião seguinte, o Linu se sentou a uma mesa comprida com seis amantes das palavras que tomavam café e discutiam com paixão cada sílaba. Depois de duas horas de debate, ele propôs uma palavra de que todos riram primeiro, mas que depois começaram a levar a sério. A palavra não entrou no dicionário dessa vez, mas a Sigrún disse que ele já tinha um coração de língua islandesa. O Linu saiu na chuva e já não se sentia um peixe fora d’água.',
        ending: { tone: 'bom', title: 'Caçador de palavras', message: 'Você entendeu “tölva”, “sími”, “þyrla” e as expressões da Sigrún — e ganhou um lugar à mesa de quem inventa o islandês de amanhã.' },
      },
      final_neutro: {
        emoji: '🌧️',
        text: 'Sigrún andvarpaði, þó ekki illa. “Þá væri málið fljótt orðið að ensku með íslenskum endingum”, sagði hún og setti á sig húfuna. “Nýyrðin halda sambandinu við gömlu textana, því að sömu ræturnar lifa í málinu öld eftir öld”, útskýrði hún. Linu fékk ekki boð á fundinn, en hann fór heim og fletti lengi í orðabókinni.',
        translation:
          'A Sigrún suspirou, mas sem mágoa. “Aí a língua logo virava inglês com terminações islandesas”, disse, pondo o gorro. “Os neologismos mantêm a ligação com os textos antigos, porque as mesmas raízes vivem na língua século após século”, explicou. O Linu não foi convidado para a reunião, mas foi para casa e passou um bom tempo folheando o dicionário.',
        ending: { tone: 'neutro', title: 'Atalho em inglês', message: 'Você entendeu tudo, mas propôs justo o que o purismo islandês evita. “Sími” e “tölva” mostram por que eles preferem raízes próprias.' },
      },
    },
  },
  {
    id: 'is-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ekki hundi út sigandi',
    emoji: '🌨️',
    summary: 'Em Ísafjörður, nos fiordes do oeste, uma nevasca prende o Linu numa pousada, e o dono o ensina a falar do mau tempo como os islandeses.',
    cultural_context:
      'Ísafjörður é a maior cidade dos fiordes do oeste (Vestfirðir), uma região de montanhas íngremes onde as estradas fecham com frequência no inverno por causa da neve. O islandês tem muitas expressões sobre o mau tempo, como “það er ekki hundi út sigandi” — um tempo em que não se manda nem cachorro para fora —, e o famoso “þetta reddast”, “vai dar certo, a gente dá um jeito”.',
    start: 'start',
    glossary: [
      ['það er ekki hundi út sigandi', 'o tempo está horrível (lit.: não dá para mandar nem um cachorro para fora)'],
      ['þetta reddast', 'vai dar certo, a gente dá um jeito'],
      ['að koma af fjöllum', 'não estar sabendo de nada (lit.: vir das montanhas)'],
      ['að vera á báðum áttum', 'estar indeciso (lit.: estar nas duas direções)'],
      ['að fá sér kríu', 'tirar um cochilo (lit.: pegar para si uma andorinha-do-ártico)'],
      ['ófærð', 'estradas intransitáveis'],
      ['það lægir', 'o vento acalma'],
      ['gistiheimili', 'pousada'],
    ],
    nodes: {
      start: {
        emoji: '🌨️',
        text: 'Linu vaknaði á litlu gistiheimili á Ísafirði við að vindurinn barði á rúðunum. Hann ætlaði að taka rútu suður um morguninn, en fjöllin fyrir utan gluggann voru horfin í hvítan byl. Í eldhúsinu stóð gestgjafinn, Guðmundur Einarsson, og hellti upp á kaffi eins og ekkert væri. “Það er ekki hundi út sigandi í dag, vinur”, sagði hann án þess að líta upp.',
        translation:
          'O Linu acordou numa pequena pousada em Ísafjörður com o vento batendo nas vidraças. Ele pretendia pegar um ônibus para o sul de manhã, mas as montanhas do lado de fora da janela tinham sumido numa nevasca branca. Na cozinha estava o anfitrião, Guðmundur Einarsson, passando café como se nada fosse. “Hoje não dá para pôr nem cachorro na rua, amigo”, disse ele sem levantar os olhos.',
        choices: [
          { text: '“Þá bíð ég bara og fæ mér kaffi.”', translation: '“Então eu só espero e tomo um café.”', next: 'kaffi' },
          {
            text: '“Ég á engan hund, svo ég get farið út.”',
            translation: '“Eu não tenho cachorro, então posso sair.”',
            wrong: '“Það er ekki hundi út sigandi” não tem nada a ver com cachorros de verdade: quer dizer que o tempo está tão ruim que não se manda nem um cachorro para fora. Ninguém deve sair!',
          },
          { text: '“Ég verð að ná rútunni, hvað sem það kostar.”', translation: '“Eu preciso pegar o ônibus, custe o que custar.”', next: 'rutan' },
        ],
      },
      rutan: {
        emoji: '🚌',
        text: 'Guðmundur lagði frá sér könnuna og horfði undrandi á Linu. “Rútan? Kemurðu alveg af fjöllum?” spurði hann. “Það er ófærð alla leið yfir heiðina og vegurinn er lokaður.” Hann sýndi honum kort í símanum þar sem allar leiðir suður voru merktar rauðar og sagði að hér færi enginn neitt fyrr en veðrinu slotaði.',
        translation:
          'O Guðmundur largou a jarra e olhou espantado para o Linu. “O ônibus? Você não está sabendo de nada?”, perguntou. “As estradas estão intransitáveis por todo o planalto, e a rodovia está fechada.” Mostrou a ele um mapa no celular em que todos os caminhos para o sul estavam marcados em vermelho e disse que ninguém ia a lugar nenhum antes de o tempo melhorar.',
        choices: [{ text: 'Gefast upp og setjast við eldhúsborðið.', translation: 'Desistir e sentar-se à mesa da cozinha.', next: 'kaffi' }],
      },
      kaffi: {
        emoji: '☕',
        text: 'Guðmundur rétti honum rjúkandi bolla og sagði að Vestfirðingar væru vanir því að vera innilokaðir dögum saman. “Í gamla daga var það bara svona; maður beið, prjónaði, las og sagði sögur”, sagði hann. Svo sagði hann Linu frá afa sínum, sem hafði róið til fiskjar úr þessum firði í alls konar veðrum. “Hann sagði alltaf: þetta reddast. Og það reddaðist yfirleitt, en ekki alltaf.”',
        translation:
          'O Guðmundur lhe entregou uma xícara fumegante e disse que o povo dos fiordes do oeste estava acostumado a ficar preso em casa por dias. “Antigamente era assim mesmo: a gente esperava, tricotava, lia e contava histórias”, disse. Depois contou ao Linu sobre o avô, que tinha saído para pescar deste fiorde com todo tipo de tempo. “Ele sempre dizia: vai dar certo. E geralmente dava, mas nem sempre.”',
        choices: [
          { text: '“Hvað gerðist þegar það reddaðist ekki?”', translation: '“O que acontecia quando não dava certo?”', next: 'afi' },
          { text: '“Hvað gerir maður svo allan daginn?”', translation: '“E o que se faz o dia inteiro?”', next: 'dagur' },
        ],
      },
      afi: {
        emoji: '⛵',
        text: 'Guðmundur þagði stutta stund og horfði út í bylinn. Hann sagði að eitt sinn hefði afi hans lent í óveðri úti á sjó og að fjölskyldan hefði beðið í þrjá sólarhringa án þess að vita neitt. “Hann kom heim á fjórða degi, hrakinn en lifandi, og fór aftur á sjó viku seinna”, sagði hann og brosti dauflega. “Þess vegna segjum við að þetta reddist, en við förum samt ekki út í svona veður.”',
        translation:
          'O Guðmundur ficou calado por um momento, olhando a nevasca. Contou que uma vez o avô tinha sido pego por uma tempestade em alto-mar e que a família esperou três dias e três noites sem saber de nada. “Ele voltou para casa no quarto dia, maltratado mas vivo, e voltou para o mar uma semana depois”, disse, com um sorriso fraco. “Por isso a gente diz que vai dar certo, mas mesmo assim não sai com um tempo destes.”',
        choices: [{ text: 'Kinka kolli og hlusta á vindinn.', translation: 'Concordar com a cabeça e ouvir o vento.', next: 'dagur' }],
      },
      dagur: {
        emoji: '😴',
        text: 'Um hádegið var Linu farinn að geispa, og Guðmundur ráðlagði honum að fá sér kríu. Linu var á báðum áttum; hann vildi ekki eyða deginum í svefn, en það var heldur ekkert annað að gera. Guðmundur sagði að það ætti að lægja seinnipartinn og að þá gætu þeir kannski gengið niður að höfninni. Hann bætti við að í kvöld yrði plokkfiskur, ef Linu nennti að hjálpa til.',
        translation:
          'Lá pelo meio-dia o Linu já estava bocejando, e o Guðmundur o aconselhou a tirar um cochilo. O Linu ficou indeciso: não queria passar o dia dormindo, mas também não havia mais nada para fazer. O Guðmundur disse que o vento devia acalmar no fim da tarde e que então talvez pudessem descer até o porto. Acrescentou que à noite ia ter plokkfiskur (ensopado de peixe com batata), se o Linu tivesse disposição para ajudar.',
        choices: [
          {
            text: 'Fara út í garð að leita að kríum.',
            translation: 'Ir para o quintal procurar andorinhas-do-ártico.',
            wrong: '“Að fá sér kríu” é tirar um cochilo — não tem nada a ver com a ave krían (a andorinha-do-ártico), que, aliás, só passa o verão na Islândia. O Guðmundur sugeriu que o Linu descansasse.',
          },
          { text: 'Leggja sig í hálftíma.', translation: 'Deitar-se por meia hora.', next: 'lygn' },
          { text: 'Byrja strax að afhýða kartöflur.', translation: 'Começar logo a descascar batatas.', next: 'lygn' },
        ],
      },
      lygn: {
        emoji: '🌤️',
        text: 'Seinnipartinn lægði eins og Guðmundur hafði spáð, og sólin braust í gegnum skýin yfir firðinum. Snjórinn glitraði á fjöllunum og bátarnir í höfninni vögguðu rólega. Guðmundur spurði hvort Linu vildi koma með niður á bryggju að kaupa fisk í kvöldmatinn. Linu hugsaði hins vegar um rútuna og hvort hún færi nú, fyrst veðrið var gengið niður.',
        translation:
          'No fim da tarde o vento acalmou, como o Guðmundur tinha previsto, e o sol furou as nuvens sobre o fiorde. A neve brilhava nas montanhas e os barcos do porto balançavam devagar. O Guðmundur perguntou se o Linu queria ir com ele até o cais comprar peixe para o jantar. O Linu, porém, pensava no ônibus e se ele sairia agora, já que o tempo tinha melhorado.',
        choices: [
          { text: 'Fara með Guðmundi niður á bryggju.', translation: 'Ir com o Guðmundur até o cais.', next: 'final_bom' },
          { text: 'Hlaupa út á rútustöð með töskuna.', translation: 'Correr para a rodoviária com a mala.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐟',
        text: 'Á bryggjunni keyptu þeir ýsu af gömlum sjómanni sem hafði þekkt afa Guðmundar og sagði af honum fleiri sögur en Linu gat munað. Um kvöldið stöppuðu þeir saman plokkfisk og borðuðu hann með rúgbrauði og smjöri á meðan vindurinn tók aftur að gnauða. Daginn eftir var heiðin opnuð og Linu fór suður, með nýjan orðaforða og nýjan vin. Þegar hann kvaddi sagði Guðmundur bara: “Sjáðu, þetta reddaðist.”',
        translation:
          'No cais eles compraram hadoque de um velho pescador que tinha conhecido o avô do Guðmundur e contou mais histórias sobre ele do que o Linu conseguiu guardar. À noite os dois amassaram juntos o plokkfiskur e comeram com pão de centeio e manteiga, enquanto o vento voltava a uivar. No dia seguinte o planalto foi reaberto e o Linu seguiu para o sul, com vocabulário novo e um amigo novo. Na despedida o Guðmundur só disse: “Viu? Deu certo.”',
        ending: { tone: 'bom', title: 'Ilhado e feliz', message: 'Você entendeu o tempo e as expressões dos fiordes do oeste — e viu que, às vezes, “þetta reddast” mesmo.' },
      },
      final_neutro: {
        emoji: '🚏',
        text: 'Á rútustöðinni var allt lokað og miði á hurðinni: “Engar ferðir í dag vegna ófærðar.” Linu stóð þar einn í snjónum og áttaði sig á því að þótt lygnt væri í firðinum þýddi það ekki að heiðin væri opin. Hann gekk til baka, blautur og kaldur, og Guðmundur tók á móti honum með bros á vör og þurr handklæði. Plokkfiskurinn var góður, en Linu hafði misst af bryggjunni og sögunum.',
        translation:
          'Na rodoviária estava tudo fechado, com um bilhete na porta: “Nenhuma viagem hoje por causa das estradas intransitáveis.” O Linu ficou ali sozinho na neve e percebeu que o fiorde estar calmo não queria dizer que o planalto estava aberto. Voltou molhado e com frio, e o Guðmundur o recebeu sorrindo, com toalhas secas. O plokkfiskur estava bom, mas o Linu tinha perdido o cais e as histórias.',
        ending: { tone: 'neutro', title: 'Pressa inútil', message: 'O vento parou, mas as estradas continuavam fechadas (“ófærð”). No inverno dos fiordes do oeste, é melhor esperar como os moradores.' },
      },
    },
  },
  {
    id: 'is-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ekki öll nótt úti enn',
    emoji: '🤾',
    summary: 'Em Akureyri, o Linu ajuda uma amiga a narrar ao vivo, no rádio da cidade, um jogo de handebol juvenil — e precisa entender as expressões idiomáticas da transmissão.',
    cultural_context:
      'O handebol é um dos esportes mais populares da Islândia, e a seleção masculina ganhou a prata nos Jogos Olímpicos de Pequim, em 2008. Na linguagem esportiva o purismo também aparece: o nome formal do futebol é “knattspyrna” e o do handebol, “handknattleikur”, embora no dia a dia se diga “fótbolti” e “handbolti”; até o microfone é “hljóðnemi”, “o que capta o som”.',
    start: 'start',
    glossary: [
      ['það er ekki öll nótt úti enn', 'ainda não acabou, ainda há esperança (lit.: nem toda a noite passou ainda)'],
      ['að fara á kostum', 'estar num dia inspirado, brilhar'],
      ['að vera á hálum ís', 'estar numa situação arriscada (lit.: estar em gelo escorregadio)'],
      ['sjaldan fellur eplið langt frá eikinni', 'filho de peixe, peixinho é (lit.: raramente a maçã cai longe do carvalho)'],
      ['hljóðnemi', 'microfone (hljóð “som” + nemi “que capta”)'],
      ['útvarp', 'rádio (lit.: projeção para fora)'],
      ['markmaður', 'goleiro'],
      ['í beinni útsendingu', 'ao vivo'],
    ],
    nodes: {
      start: {
        emoji: '🏟️',
        text: 'Í íþróttahöllinni á Akureyri var allt fullt af foreldrum, systkinum og ömmum sem hrópuðu og klöppuðu. Hrafnhildur, vinkona Linu, lýsti leiknum í beinni útsendingu í útvarpi bæjarins og hafði beðið hann að skrifa niður tölfræðina. Heimaliðið, sextán ára strákar, var fimm mörkum undir í hálfleik og þjálfarinn var eldrauður í framan. “Það er ekki öll nótt úti enn!” hrópaði Hrafnhildur í hljóðnemann.',
        translation:
          'No ginásio de Akureyri não cabia mais ninguém: pais, irmãos e avós gritavam e aplaudiam. A Hrafnhildur, amiga do Linu, narrava o jogo ao vivo na rádio da cidade e tinha pedido a ele que anotasse as estatísticas. O time da casa, garotos de dezesseis anos, estava cinco gols atrás no intervalo, e o técnico estava vermelhíssimo. “Ainda não acabou!”, gritou a Hrafnhildur no microfone.',
        choices: [
          { text: 'Spyrja hvað hún meini.', translation: 'Perguntar o que ela quer dizer.', next: 'nott' },
          {
            text: 'Skrifa niður að leikurinn sé búinn.',
            translation: 'Anotar que o jogo acabou.',
            wrong: '“Það er ekki öll nótt úti enn” quer dizer que o jogo ainda não acabou e ainda há esperança — lit. “nem toda a noite passou ainda”. O time está perdendo por cinco gols, mas o segundo tempo nem começou.',
          },
          { text: 'Spyrja um orðið hljóðnemi.', translation: 'Perguntar sobre a palavra “hljóðnemi”.', next: 'hljod' },
        ],
      },
      hljod: {
        emoji: '🎙️',
        text: 'Hrafnhildur hló þegar Linu benti á tækið og spurði hvaðan orðið kæmi. “Hljóð og nemi: það sem nemur hljóð”, hvíslaði hún á milli setninga. Hún sagði að flest tæki á stöðinni hétu íslenskum nöfnum, og útvarpið sjálft líka, því að þar er fréttum varpað út um landið. Svo benti hún honum á að fylgjast með markmanninum, sem var að standa upp af bekknum.',
        translation:
          'A Hrafnhildur riu quando o Linu apontou o aparelho e perguntou de onde vinha a palavra. “Som e captador: o que capta o som”, sussurrou ela entre uma frase e outra. Disse que quase todos os aparelhos da estação tinham nomes islandeses, e o próprio rádio também, porque nele as notícias são projetadas para o país todo. Depois pediu que ele prestasse atenção no goleiro, que estava se levantando do banco.',
        choices: [{ text: 'Horfa á markmanninn.', translation: 'Olhar o goleiro.', next: 'seinni' }],
      },
      nott: {
        emoji: '🌙',
        text: 'Hrafnhildur slökkti snöggvast á hljóðnemanum og útskýrði að þetta væri gamalt orðatiltæki. “Það þýðir að enn sé von, að ekkert sé búið fyrr en það er búið”, sagði hún. Hún sagði að Íslendingar notuðu það um allt mögulegt, frá handbolta til kosninga og ástarsorgar. Svo kveikti hún aftur og sagði hlustendum að nýr markmaður væri að koma inn á.',
        translation:
          'A Hrafnhildur desligou o microfone por um instante e explicou que aquilo era uma expressão antiga. “Quer dizer que ainda há esperança, que nada acabou até acabar”, disse. Contou que os islandeses a usam para tudo, do handebol às eleições e às dores de amor. Depois religou e avisou aos ouvintes que um goleiro novo estava entrando.',
        choices: [{ text: 'Horfa á markmanninn.', translation: 'Olhar o goleiro.', next: 'seinni' }],
      },
      seinni: {
        emoji: '🧤',
        text: 'Nýi markmaðurinn var lágvaxinn og feiminn, en hann varði hvert skotið á fætur öðru í seinni hálfleik. “Hann fer á kostum!” hrópaði Hrafnhildur, og áhorfendurnir stóðu upp. Kona í fremstu röð kallaði að þetta væri sonur hennar og að hún hefði sjálf staðið í marki fyrir norðan í tuttugu ár. “Sjaldan fellur eplið langt frá eikinni”, sagði Hrafnhildur hlæjandi í útsendingunni.',
        translation:
          'O goleiro novo era baixinho e tímido, mas defendeu um chute atrás do outro no segundo tempo. “Ele está num dia inspirado!”, gritou a Hrafnhildur, e a torcida se levantou. Uma mulher na primeira fila gritou que aquele era o filho dela e que ela mesma tinha jogado no gol, no norte, por vinte anos. “Filho de peixe, peixinho é”, disse a Hrafnhildur, rindo, na transmissão.',
        choices: [
          { text: 'Skrifa: markmaðurinn líkist móður sinni.', translation: 'Anotar: o goleiro puxou à mãe.', next: 'tolfraedi' },
          {
            text: 'Skrifa: markmaðurinn datt og meiddi sig.',
            translation: 'Anotar: o goleiro caiu e se machucou.',
            wrong: '“Að fara á kostum” é brilhar, jogar muito bem — o goleiro defendeu um chute atrás do outro. Ninguém caiu: a mãe dele, ex-goleira, até se levantou orgulhosa.',
          },
        ],
      },
      tolfraedi: {
        emoji: '📊',
        text: 'Á meðan leikurinn var stöðvaður andartak bað Hrafnhildur Linu að lesa upp tölfræðina fyrir hlustendur. Markmaðurinn hafði varið tólf skot, þar á meðal tvö vítaköst, og Linu spurði hvað vítakast væri eiginlega. “Víti er refsing og kast er kast: vítakast er dæmt þegar brotið er á leikmanni í dauðafæri”, útskýrði hún. “Enn eitt orðið sem við bjuggum til sjálf, í stað þess að fá það lánað.”',
        translation:
          'Enquanto o jogo estava parado por um instante, a Hrafnhildur pediu ao Linu que lesse as estatísticas para os ouvintes. O goleiro tinha defendido doze chutes, entre eles dois tiros de sete metros, e o Linu perguntou o que era, afinal, um “vítakast”. “Víti é castigo, e kast é arremesso: o vítakast é marcado quando se comete falta num jogador em chance clara de gol”, explicou ela. “Mais uma palavra que nós mesmos criamos, em vez de pegar emprestada.”',
        choices: [{ text: 'Lesa tölfræðina upp í beinni.', translation: 'Ler as estatísticas ao vivo.', next: 'jafnt' }],
      },
      jafnt: {
        emoji: '⏱️',
        text: 'Þegar mínúta var eftir var staðan jöfn og allt ætlaði um koll að keyra í höllinni. Þjálfarinn tók leikhlé og Hrafnhildur sagði að liðið væri á hálum ís, því að einn leikmaður var nýbúinn að fá tveggja mínútna brottvísun. Hún rétti Linu hljóðnemann í smástund á meðan hún drakk vatn og bað hann að segja eitthvað við hlustendur. Linu fann hjartað berjast í brjóstinu.',
        translation:
          'Faltando um minuto, o placar estava empatado e o ginásio parecia que ia vir abaixo. O técnico pediu tempo, e a Hrafnhildur disse que o time estava numa situação arriscada, porque um jogador tinha acabado de levar dois minutos de exclusão. Ela passou o microfone ao Linu por um instante enquanto bebia água e pediu que ele dissesse alguma coisa aos ouvintes. O Linu sentiu o coração bater forte no peito.',
        choices: [
          { text: '“Liðið er á hálum ís, en það er ekki öll nótt úti enn!”', translation: '“O time está numa situação arriscada, mas ainda não acabou!”', next: 'final_bom' },
          { text: '“Hér er hált á gólfinu, farið varlega!”', translation: '“O chão aqui está escorregadio, cuidado!”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📻',
        text: 'Rödd Linu titraði en orðin voru rétt, og Hrafnhildur gaf honum þumalinn upp. Á síðustu sekúndunni skoraði heimaliðið sigurmarkið og höllin trylltist. Eftir leikinn kom móðir markmannsins og þakkaði þeim fyrir fallegu orðin um soninn. Hrafnhildur sagði að Linu mætti koma aftur næsta laugardag, því að hann hefði slegið tvær flugur í einu höggi: lært orðatiltæki og orðið útvarpsmaður.',
        translation:
          'A voz do Linu tremeu, mas as palavras estavam certas, e a Hrafnhildur fez sinal de positivo. No último segundo o time da casa marcou o gol da vitória e o ginásio foi à loucura. Depois do jogo, a mãe do goleiro veio agradecer as palavras bonitas sobre o filho. A Hrafnhildur disse que o Linu podia voltar no sábado seguinte, porque ele tinha matado dois coelhos com uma cajadada só: aprendido expressões e virado radialista.',
        ending: { tone: 'bom', title: 'Voz do rádio', message: 'Você usou “á hálum ís” e “ekki öll nótt úti enn” na hora certa, ao vivo, no rádio de Akureyri.' },
      },
      final_neutro: {
        emoji: '🧊',
        text: 'Hlustendur heima í stofu skildu ekkert í því hvers vegna þeir ættu að fara varlega á gólfinu. Hrafnhildur tók hljóðnemann aftur og útskýrði brosandi að liðið væri á hálum ís í óeiginlegri merkingu, en að gólfið væri alveg þurrt. Heimaliðið tapaði með einu marki, og í bílnum á leiðinni heim hlógu þau bæði að misskilningnum. “Næst tekurðu orðatiltækin ekki bókstaflega”, sagði hún.',
        translation:
          'Os ouvintes em casa não entenderam nada: por que teriam de tomar cuidado com o chão? A Hrafnhildur pegou o microfone de volta e explicou, sorrindo, que o time estava “em gelo escorregadio” no sentido figurado, mas que o chão estava perfeitamente seco. O time da casa perdeu por um gol, e no carro, voltando para casa, os dois riram do mal-entendido. “Da próxima vez, não leve as expressões ao pé da letra”, disse ela.',
        ending: { tone: 'neutro', title: 'Gelo imaginário', message: '“Að vera á hálum ís” é estar numa situação arriscada, não num chão escorregadio. Quase deu certo!' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'is-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Hvalir og fólk',
    emoji: '🐋',
    summary: 'Em Húsavík, o Linu ajuda uma adolescente a preparar um discurso para a reunião de moradores sobre limitar os barcos de observação de baleias.',
    cultural_context:
      'Húsavík, no norte da Islândia, é conhecida como a capital da observação de baleias do país: da baía de Skjálfandi saem barcos para ver jubartes, baleias-minke e, às vezes, a baleia-azul. A cidade tem até um museu dedicado às baleias, o Hvalasafnið.',
    start: 'start',
    glossary: [
      ['í fyrsta lagi / í öðru lagi', 'em primeiro lugar / em segundo lugar'],
      ['þar af leiðandi', 'por conseguinte, portanto'],
      ['engu að síður', 'mesmo assim, ainda assim'],
      ['þó að (+ subjuntivo)', 'embora'],
      ['rök / að færa rök fyrir', 'argumentos / argumentar a favor de'],
      ['íbúafundur', 'reunião de moradores'],
      ['hvalaskoðun', 'observação de baleias'],
      ['mælendaskrá', 'lista de oradores'],
    ],
    nodes: {
      start: {
        emoji: '📝',
        text: 'Í Húsavík hafði verið boðað til íbúafundar um það hvort takmarka ætti fjölda hvalaskoðunarbáta á Skjálfanda. Sólveig, sautján ára og yngsti ræðumaðurinn, hafði beðið Linu að hjálpa sér með ræðuna kvöldið áður. Hún sat við eldhúsborðið með blað fullt af yfirstrikuðum setningum og andvarpaði. “Ég veit hvað ég vil segja, en rökin hlaupa út um allt”, sagði hún.',
        translation:
          'Em Húsavík, tinha sido convocada uma reunião de moradores para decidir se o número de barcos de observação de baleias na baía de Skjálfandi devia ser limitado. A Sólveig, de dezessete anos, a oradora mais jovem, tinha pedido ao Linu que a ajudasse com o discurso na véspera. Ela estava sentada à mesa da cozinha com uma folha cheia de frases riscadas e suspirou. “Eu sei o que quero dizer, mas os argumentos saem correndo para todo lado”, disse.',
        choices: [
          { text: '“Byrjum á skipulaginu: í fyrsta lagi, í öðru lagi…”', translation: '“Vamos começar pela estrutura: em primeiro lugar, em segundo lugar…”', next: 'skipulag' },
          { text: '“Hver er skoðun þín, í einni setningu?”', translation: '“Qual é a sua opinião, numa frase?”', next: 'skodun' },
        ],
      },
      skodun: {
        emoji: '💭',
        text: 'Sólveig hugsaði sig um og sagði að hún vildi takmarka bátana, þó að pabbi hennar ynni sjálfur við hvalaskoðun. “Ég held að hvalirnir þurfi frið, en ég vil ekki að fólk missi vinnuna”, sagði hún. Linu benti henni á að einmitt þessi togstreita væri styrkur ræðunnar, ekki veikleiki. “Þú getur sýnt að þú skiljir báðar hliðar og komist samt að niðurstöðu”, sagði hann.',
        translation:
          'A Sólveig pensou e disse que queria limitar os barcos, embora o próprio pai dela trabalhasse com observação de baleias. “Acho que as baleias precisam de sossego, mas não quero que ninguém perca o emprego”, disse. O Linu mostrou a ela que justamente esse conflito era a força do discurso, não a fraqueza. “Você pode mostrar que entende os dois lados e mesmo assim chegar a uma conclusão”, disse ele.',
        choices: [{ text: 'Setja rökin í röð.', translation: 'Pôr os argumentos em ordem.', next: 'skipulag' }],
      },
      skipulag: {
        emoji: '🔢',
        text: 'Þau skrifuðu rökin niður í röð. “Í fyrsta lagi hafa rannsóknir sýnt að hvalir breyta hegðun sinni þegar margir bátar eru nálægt. Í öðru lagi er rólegur flói forsenda þess að ferðamenn komi yfirleitt. Í þriðja lagi má takmarka bátana smám saman, svo að enginn missi vinnuna á einni nóttu.” Sólveig las þetta upphátt og bætti við: “Þar af leiðandi snýst málið ekki um hvali eða fólk, heldur um hvali og fólk.”',
        translation:
          'Os dois escreveram os argumentos em ordem. “Em primeiro lugar, pesquisas mostraram que as baleias mudam de comportamento quando há muitos barcos por perto. Em segundo lugar, uma baía tranquila é a condição para que os turistas venham, para começo de conversa. Em terceiro lugar, dá para limitar os barcos aos poucos, para que ninguém perca o emprego da noite para o dia.” A Sólveig leu em voz alta e acrescentou: “Portanto, a questão não é baleias ou pessoas, e sim baleias e pessoas.”',
        choices: [
          { text: '“Frábært. En hvað segja þeir sem eru á móti?”', translation: '“Ótimo. Mas o que dizem os que são contra?”', next: 'motrok' },
          {
            text: '“Svo þú vilt banna alla báta strax?”',
            translation: '“Então você quer proibir todos os barcos já?”',
            wrong: 'A Sólveig disse que dá para limitar os barcos “smám saman” (aos poucos), justamente para que ninguém perca o emprego da noite para o dia. E o “þar af leiðandi” (portanto) conclui: a questão é baleias E pessoas, não uma proibição imediata.',
          },
        ],
      },
      motrok: {
        emoji: '⚖️',
        text: 'Linu lék andstæðinginn og sagði að bátarnir væru lífæð bæjarins og að enginn gæti sannað að hvalirnir færu burt. Sólveig hlustaði, beit í blýantinn og svaraði svo rólega. “Það er rétt að bátarnir skipta bæinn miklu máli. Engu að síður er það einmitt þess vegna sem við verðum að fara varlega, því að án hvalanna eru engir bátar.” Linu klappaði, því að hún hafði snúið rökum hans sér í hag.',
        translation:
          'O Linu fez o papel do adversário e disse que os barcos eram a artéria vital da cidade e que ninguém podia provar que as baleias iriam embora. A Sólveig ouviu, mordeu o lápis e respondeu com calma. “É verdade que os barcos são muito importantes para a cidade. Mesmo assim, é exatamente por isso que precisamos ter cuidado, porque sem as baleias não existem barcos.” O Linu aplaudiu, porque ela tinha virado os argumentos dele a seu favor.',
        choices: [{ text: 'Fara yfir greinarmerkin í ræðunni.', translation: 'Revisar a pontuação do discurso.', next: 'greinarmerki' }],
      },
      greinarmerki: {
        emoji: '✒️',
        text: 'Síðasta klukkutímann fóru þau yfir greinarmerkin, því að Sólveig ætlaði líka að senda ræðuna í bæjarblaðið. Linu sá að hún hafði sett kommu alls staðar þar sem hún dró andann, og þau strikuðu helminginn út. Sólveig sýndi honum hvernig tilvitnun er skrifuð á íslensku, með gæsalöppum sem byrja niðri og enda uppi. “Íslenskar gæsalappir líta út eins og níu níu í byrjun og sex sex í lokin”, sagði hún og hló.',
        translation:
          'Na última hora eles revisaram a pontuação, porque a Sólveig também ia mandar o discurso para o jornal da cidade. O Linu viu que ela tinha posto vírgula em todo lugar onde respirava, e os dois riscaram metade. A Sólveig mostrou a ele como se escreve uma citação em islandês, com aspas que começam embaixo e terminam em cima. “As aspas islandesas parecem um 99 no começo e um 66 no fim”, disse ela, rindo.',
        choices: [{ text: 'Æfa ræðuna einu sinni enn.', translation: 'Ensaiar o discurso mais uma vez.', next: 'fundur' }],
      },
      fundur: {
        emoji: '🏛️',
        text: 'Kvöldið eftir var samkomuhúsið troðfullt og Sólveig var síðust á mælendaskrá. Hún talaði skýrt, notaði rökin í réttri röð og svaraði spurningu frá reiðum skipstjóra af mikilli ró. Þegar hún lauk máli sínu var klappað lengi, og fundarstjórinn spurði hvort einhver vildi bæta einhverju við. Sólveig leit til Linu á aftasta bekknum.',
        translation:
          'Na noite seguinte o salão comunitário estava lotado, e a Sólveig era a última da lista de oradores. Ela falou com clareza, usou os argumentos na ordem certa e respondeu com muita calma à pergunta de um capitão irritado. Quando terminou, os aplausos foram longos, e o presidente da mesa perguntou se alguém queria acrescentar algo. A Sólveig olhou para o Linu, no último banco.',
        choices: [
          { text: 'Sitja kyrr og láta Sólveigu eiga sviðið.', translation: 'Ficar sentado e deixar o palco para a Sólveig.', next: 'final_bom' },
          { text: 'Standa upp og hrósa ræðunni.', translation: 'Levantar-se e elogiar o discurso.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐳',
        text: 'Linu sat kyrr og brosti, og fundarstjórinn lokaði mælendaskránni. Niðurstaðan varð sú að skipa nefnd bæjarbúa, sjómanna og vísindamanna sem ætti að leggja fram tillögu fyrir vorið, og Sólveig var beðin að sitja í henni. Á leiðinni út sagði reiði skipstjórinn að hann væri enn ósammála henni, en að hún hefði fært rök fyrir máli sínu eins og fullorðin manneskja. Það þótti Sólveigu besta hrósið af öllum.',
        translation:
          'O Linu ficou sentado e sorriu, e o presidente da mesa encerrou a lista de oradores. A decisão foi criar uma comissão de moradores, pescadores e cientistas que apresentaria uma proposta até a primavera, e a Sólveig foi convidada a participar. Na saída, o capitão irritado disse que ainda discordava dela, mas que ela tinha defendido sua posição como gente grande. Para a Sólveig, foi o melhor elogio de todos.',
        ending: { tone: 'bom', title: 'Ela falou, você ouviu', message: 'Você ajudou a organizar os argumentos com os conectores certos — e soube a hora de deixar a Sólveig brilhar sozinha.' },
      },
      final_neutro: {
        emoji: '😳',
        text: 'Linu stóð upp og sagði með mikilli tilfinningu að ræða Sólveigar hefði verið sú besta sem hann hefði nokkurn tímann heyrt. Fólk brosti kurteislega, en einhver hvíslaði að útlendingurinn væri greinilega vinur hennar. Reiði skipstjórinn notaði tækifærið og sagði að ræðan væri þá kannski samin af öðrum. Sólveig þurfti að standa upp aftur og fullvissa fundinn um að hvert orð væri hennar eigið.',
        translation:
          'O Linu se levantou e disse, muito emocionado, que o discurso da Sólveig tinha sido o melhor que ele já tinha ouvido. As pessoas sorriram educadamente, mas alguém cochichou que o estrangeiro obviamente era amigo dela. O capitão irritado aproveitou a deixa e disse que então talvez o discurso tivesse sido escrito por outra pessoa. A Sólveig teve de se levantar de novo e garantir à reunião que cada palavra era dela.',
        ending: { tone: 'neutro', title: 'Elogio demais', message: 'Os argumentos eram bons, mas o elogio público do amigo deu munição ao adversário. Num debate, às vezes o melhor argumento é o silêncio.' },
      },
    },
  },
  {
    id: 'is-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Tómatar í snjónum',
    emoji: '🍅',
    summary: 'Em Hveragerði, a cidade das estufas, o Linu ajuda um horticultor a escrever um artigo de opinião para o jornal local.',
    cultural_context:
      'Hveragerði, no sul da Islândia, é conhecida como a cidade das estufas: a água quente do subsolo aquece estufas onde se cultivam tomates, pepinos e flores o ano inteiro, mesmo com neve lá fora. Nos textos de opinião islandeses, conectores como “annars vegar… hins vegar” (de um lado… do outro) e “aftur á móti” (em contrapartida) organizam o argumento.',
    start: 'start',
    glossary: [
      ['annars vegar… hins vegar', 'de um lado… do outro'],
      ['aftur á móti', 'em contrapartida, por outro lado'],
      ['auk þess', 'além disso'],
      ['þrátt fyrir (+ acusativo)', 'apesar de'],
      ['með öðrum orðum', 'em outras palavras'],
      ['að eiga hagsmuna að gæta', 'ter interesse próprio na questão'],
      ['gróðurhús', 'estufa'],
      ['jarðhiti', 'energia geotérmica, calor da terra'],
    ],
    nodes: {
      start: {
        emoji: '♨️',
        text: 'Í Hveragerði rýkur úr jörðinni um allan bæ, og heita vatnið úr iðrum jarðar hitar gróðurhúsin þar sem tómatar og gúrkur vaxa allan veturinn. Linu vann í viku hjá Kára, garðyrkjubónda sem ræktaði tómata undir glerþaki á meðan snjórinn lá úti. Eitt kvöldið sýndi Kári honum frétt um að grunnskólinn ætlaði að kaupa innflutt grænmeti, af því að það væri ódýrara. “Nú skrifa ég grein í blaðið”, sagði hann og settist við tölvuna.',
        translation:
          'Em Hveragerði sai vapor do chão pela cidade inteira, e a água quente das entranhas da terra aquece as estufas onde tomates e pepinos crescem o inverno todo. O Linu trabalhou uma semana com o Kári, um horticultor que cultivava tomates sob um teto de vidro enquanto a neve cobria tudo lá fora. Uma noite o Kári lhe mostrou uma notícia: a escola ia comprar verduras importadas, porque eram mais baratas. “Agora eu escrevo um artigo para o jornal”, disse, e sentou-se ao computador.',
        choices: [
          { text: '“Má ég hjálpa þér að skrifa?”', translation: '“Posso ajudar você a escrever?”', next: 'byrjun' },
          { text: '“Ertu ekki bara reiður af því að þú selur tómata?”', translation: '“Você não está bravo só porque vende tomates?”', next: 'hagsmunir' },
        ],
      },
      hagsmunir: {
        emoji: '🤔',
        text: 'Kári hló, en viðurkenndi að spurningin væri góð. “Þú hefur rétt fyrir þér: ég á hagsmuna að gæta, og það verð ég að segja strax í greininni”, sagði hann. Hann útskýrði að lesendur treystu frekar þeim sem segðu hreinskilnislega frá eigin hagsmunum. Síðan bað hann Linu að setjast hjá sér og andmæla öllu sem hann skrifaði.',
        translation:
          'O Kári riu, mas admitiu que a pergunta era boa. “Você tem razão: tenho interesse próprio na questão, e preciso dizer isso logo no artigo”, disse. Explicou que os leitores confiam mais em quem revela com franqueza os próprios interesses. Depois pediu ao Linu que se sentasse ao lado dele e contestasse tudo o que ele escrevesse.',
        choices: [{ text: 'Setjast hjá honum.', translation: 'Sentar-se ao lado dele.', next: 'byrjun' }],
      },
      byrjun: {
        emoji: '⌨️',
        text: 'Kári skrifaði fyrstu málsgreinina í einum rykk: skólinn ætti að kaupa íslenskt grænmeti, punktur. Linu las hana og benti á að hún væri full af reiði en tóm af rökum. Þeir ákváðu að byggja greinina upp á nýtt: annars vegar kostir innflutnings, hins vegar kostir heimaræktunar, og loks niðurstaða. “Ef ég viðurkenni fyrst það sem mælir á móti mér, taka menn frekar mark á mér”, sagði Kári hugsi.',
        translation:
          'O Kári escreveu o primeiro parágrafo de uma tacada só: a escola devia comprar verduras islandesas, ponto final. O Linu leu e observou que o parágrafo estava cheio de raiva e vazio de argumentos. Decidiram reestruturar o artigo: de um lado, as vantagens da importação; do outro, as do cultivo local; e, por fim, uma conclusão. “Se eu reconhecer primeiro o que pesa contra mim, as pessoas vão me levar mais a sério”, disse o Kári, pensativo.',
        choices: [
          {
            text: '“Svo þú ætlar bara að skrifa um innflutning?”',
            translation: '“Então você só vai escrever sobre a importação?”',
            wrong: 'O plano tem duas partes: “annars vegar” (de um lado) as vantagens da importação, “hins vegar” (do outro) as do cultivo local — e depois a conclusão. O Kári quer reconhecer o outro lado primeiro, justamente para ser levado a sério.',
          },
          { text: '“Góð hugmynd. Hvað mælir með innflutningi?”', translation: '“Boa ideia. O que pesa a favor da importação?”', next: 'rok' },
        ],
      },
      rok: {
        emoji: '🚢',
        text: 'Kári viðurkenndi að innflutt grænmeti væri oft ódýrara og að skólinn hefði lítið fé á milli handanna. Aftur á móti benti hann á að tómatarnir hans væru tíndir sama dag og þeir væru bornir fram, en að innfluttu tómatarnir hefðu ferðast yfir hafið í marga daga. Auk þess væri ræktunin knúin jarðhita og losaði því lítið miðað við langa flutninga. Linu andmælti og sagði að verðmunurinn skipti samt máli fyrir skóla með þröngan fjárhag.',
        translation:
          'O Kári admitiu que as verduras importadas costumavam ser mais baratas e que a escola tinha pouco dinheiro. Em contrapartida, observou que os tomates dele eram colhidos no mesmo dia em que iam para a mesa, enquanto os importados tinham atravessado o oceano durante muitos dias. Além disso, o cultivo era movido a energia geotérmica e, por isso, emitia pouco em comparação com transportes longos. O Linu contestou, dizendo que a diferença de preço ainda pesava para uma escola com orçamento apertado.',
        choices: [{ text: '“Hvernig svararðu því?”', translation: '“Como você responde a isso?”', next: 'svar' }],
      },
      svar: {
        emoji: '💡',
        text: 'Kári hugsaði sig lengi um og skrifaði svo lausn sem hvorugur þeirra hafði hugsað um áður. Skólinn gæti keypt tómatana beint af bændunum í bænum, án milliliða, og þar af leiðandi yrði munurinn miklu minni. Þrátt fyrir það yrði íslenska grænmetið eitthvað dýrara; með öðrum orðum væri spurningin sú hvað bæjarbúar vildu borga fyrir ferskleika og styttri flutninga. “Það er ekki mitt að ákveða það, heldur lesendanna”, skrifaði Kári í lokin.',
        translation:
          'O Kári pensou muito e depois escreveu uma solução em que nenhum dos dois tinha pensado antes. A escola podia comprar os tomates direto dos produtores da cidade, sem intermediários, e, portanto, a diferença ficaria bem menor. Apesar disso, as verduras islandesas continuariam um pouco mais caras; em outras palavras, a questão era quanto os moradores estavam dispostos a pagar por frescor e transporte mais curto. “Não cabe a mim decidir isso, e sim aos leitores”, escreveu o Kári no final.',
        choices: [
          { text: '“Lesum hana upphátt og lögum greinarmerkin.”', translation: '“Vamos ler em voz alta e acertar a pontuação.”', next: 'yfirlestur' },
          { text: '“Þetta er fullkomið, sendu strax!”', translation: '“Está perfeito, mande já!”', next: 'final_neutro' },
        ],
      },
      yfirlestur: {
        emoji: '🔍',
        text: 'Þeir lásu greinina upphátt og löguðu greinarmerkin: kommu á undan en og heldur, punkt þar sem setningarnar voru orðnar of langar. Kári strikaði líka út þrjú upphrópunarmerki, því að Linu sagði að rökin ættu að tala, ekki greinarmerkin. Í lokin bættu þeir við einni setningu þar sem Kári sagði hreinskilnislega frá því að hann ræktaði sjálfur tómata. Svo sendi hann greinina til ritstjórans rétt fyrir miðnætti.',
        translation:
          'Leram o artigo em voz alta e acertaram a pontuação: vírgula antes de “en” (mas) e de “heldur” (e sim), ponto onde as frases tinham ficado compridas demais. O Kári também riscou três pontos de exclamação, porque o Linu disse que quem devia falar eram os argumentos, não a pontuação. No fim, acrescentaram uma frase em que o Kári contava com franqueza que ele mesmo cultivava tomates. Depois ele mandou o artigo para o editor pouco antes da meia-noite.',
        choices: [{ text: 'Bíða eftir blaðinu.', translation: 'Esperar o jornal.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🥗',
        text: 'Greinin birtist tveimur dögum síðar og vakti umræður um allan bæ, í sundlauginni, í bakaríinu og á bæjarstjórnarfundi. Skólastjórinn hringdi í Kára og spurði hvort bændurnir væru tilbúnir að semja um verð beint við skólann. Um vorið borðuðu börnin tómata sem höfðu vaxið í nokkur hundruð metra fjarlægð frá skólanum. Kári sagði að það væri hreinskilnu setningunni að þakka, og að hann hefði aldrei skrifað hana án Linu.',
        translation:
          'O artigo saiu dois dias depois e gerou discussão na cidade inteira: na piscina, na padaria e na reunião da câmara municipal. O diretor da escola ligou para o Kári e perguntou se os produtores estariam dispostos a negociar preço direto com a escola. Na primavera, as crianças comiam tomates que tinham crescido a poucas centenas de metros da escola. O Kári disse que era graças à frase sincera, e que nunca a teria escrito sem o Linu.',
        ending: { tone: 'bom', title: 'Argumento bem regado', message: 'Você ajudou o Kári a reconhecer o outro lado, organizar os conectores e revelar o próprio interesse — e a opinião virou mudança de verdade.' },
      },
      final_neutro: {
        emoji: '📰',
        text: 'Kári sendi greinina í flýti, áður en þeir höfðu lesið hana yfir eða bætt við orði um eigin tómata. Daginn eftir birtist svar frá lesanda sem benti á að greinarhöfundurinn seldi sjálfur grænmeti og hefði því hag af málinu. Upp frá því snerist umræðan um Kára, ekki um grænmetið, og skólinn keypti áfram innflutt. Linu lærði að það skiptir ekki bara máli hvað maður segir, heldur líka hvernig og hvenær.',
        translation:
          'O Kári mandou o artigo às pressas, antes de revisá-lo ou de acrescentar uma palavra sobre os próprios tomates. No dia seguinte saiu a resposta de um leitor observando que o autor vendia verduras e, portanto, lucrava com a questão. A partir daí a discussão passou a ser sobre o Kári, não sobre as verduras, e a escola continuou comprando importado. O Linu aprendeu que não importa só o que se diz, mas também como e quando.',
        ending: { tone: 'neutro', title: 'Enviado cedo demais', message: 'O argumento era bom, mas sem revisão e sem revelar o próprio interesse o debate virou ataque pessoal.' },
      },
    },
  },
  {
    id: 'is-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Að vísu, en…',
    emoji: '🌊',
    summary: 'Em Vík, o Linu faz o papel de juiz num debate entre uma socorrista voluntária e um dono de pousada: fechar ou não a praia de Reynisfjara?',
    cultural_context:
      'A praia de areia preta de Reynisfjara, perto de Vík, é famosa pelas colunas de basalto e pelas ondas traiçoeiras, que de repente avançam muito mais que as outras e já arrastaram turistas para o mar. Na Islândia, o resgate é feito sobretudo por equipes de voluntários, as björgunarsveitir, espalhadas pelo país inteiro.',
    start: 'start',
    glossary: [
      ['að vísu… en', 'é verdade que… mas'],
      ['samt sem áður', 'mesmo assim, contudo'],
      ['þvert á móti', 'pelo contrário'],
      ['í ljósi þess', 'à luz disso, considerando isso'],
      ['enda', 'afinal, já que (justifica o que se disse)'],
      ['málamiðlun', 'meio-termo, acordo'],
      ['björgunarsveit', 'equipe de resgate (voluntária)'],
      ['landvörður', 'guarda-parque'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'Í Vík í Mýrdal sat Linu á kaffihúsi með Ástu, sem var í björgunarsveitinni, og Birgi, sem rak gistiheimili við þjóðveginn. Daginn áður hafði ferðamaður sloppið naumlega þegar alda hreif hann með sér í Reynisfjöru. Birgir sagði að nú yrði að loka ströndinni, en Ásta var ekki sammála. Þau báðu Linu að vera dómari í rökræðunni, enda var hann hlutlaus gestur.',
        translation:
          'Em Vík í Mýrdal, o Linu estava num café com a Ásta, que era da equipe de resgate, e o Birgir, que tinha uma pousada à beira da rodovia. Na véspera, um turista tinha escapado por pouco quando uma onda o arrastou em Reynisfjara. O Birgir dizia que agora era preciso fechar a praia, mas a Ásta não concordava. Os dois pediram ao Linu que fosse o juiz do debate, afinal ele era um visitante neutro.',
        choices: [
          { text: '“Birgir, byrjaðu. Af hverju á að loka?”', translation: '“Birgir, comece. Por que fechar?”', next: 'birgir' },
          { text: '“Ásta, þú hefur séð slysin. Hvað segirðu?”', translation: '“Ásta, você já viu os acidentes. O que você diz?”', next: 'asta' },
        ],
      },
      birgir: {
        emoji: '🚧',
        text: 'Birgir sagði að öryggi fólks væri mikilvægara en allt annað. “Að vísu er fjaran falleg, en engin mynd er þess virði að maður deyi fyrir hana”, sagði hann. Hann benti á að viðvörunarskiltin hefðu staðið þar árum saman og að fólk hunsaði þau samt. Í ljósi þess væri eina örugga lausnin að girða ströndina af.',
        translation:
          'O Birgir disse que a segurança das pessoas era mais importante que tudo. “É verdade que a praia é linda, mas nenhuma foto vale a pena a ponto de alguém morrer por ela”, disse. Observou que as placas de aviso estavam ali havia anos e que as pessoas as ignoravam mesmo assim. Considerando isso, a única solução segura era cercar a praia.',
        choices: [{ text: '“Takk. Ásta, hverju svararðu?”', translation: '“Obrigado. Ásta, o que você responde?”', next: 'asta' }],
      },
      asta: {
        emoji: '🛟',
        text: 'Ásta sagði að hún hefði sjálf dregið fólk upp úr sjónum og vissi manna best hvað aldan gæti gert. “Samt sem áður held ég að lokun leysi ekki vandann”, sagði hún. “Þvert á móti myndi fólk þá laumast framhjá girðingunni, þar sem enginn sæi það.” Hún lagði til að í staðinn yrðu settar upp ljósaviðvaranir og að landverðir stæðu vaktina á mestu annatímunum.',
        translation:
          'A Ásta disse que ela mesma já tinha tirado gente do mar e sabia melhor que ninguém o que a onda podia fazer. “Mesmo assim, acho que fechar não resolve o problema”, disse. “Pelo contrário: as pessoas iam passar escondidas pela cerca, onde ninguém as veria.” Ela propôs, em vez disso, instalar avisos luminosos e pôr guarda-parques de plantão nos horários de maior movimento.',
        choices: [
          {
            text: '“Svo þú vilt líka loka ströndinni, Ásta?”',
            translation: '“Então você também quer fechar a praia, Ásta?”',
            wrong: 'A Ásta disse “samt sem áður” (mesmo assim) e “þvert á móti” (pelo contrário): ela é CONTRA fechar a praia, porque acha que as pessoas passariam escondidas pela cerca. Ela propõe avisos luminosos e guardas.',
          },
          { text: '“Birgir, hverju svararðu því?”', translation: '“Birgir, o que você responde a isso?”', next: 'mot' },
        ],
      },
      mot: {
        emoji: '💬',
        text: 'Birgir hristi höfuðið og sagði að landverðir kostuðu peninga sem sveitarfélagið ætti ekki til. Ásta svaraði að hvert slys kostaði miklu meira, bæði í peningum og mannslífum, enda væru það oft sjálfboðaliðar sem legðu líf sitt í hættu við björgunina. Birgir þagnaði, og Linu sá að hann var farinn að hugsa málið upp á nýtt. Nú horfðu bæði á hann og biðu eftir því að dómarinn segði eitthvað.',
        translation:
          'O Birgir balançou a cabeça e disse que guarda-parques custavam dinheiro que o município não tinha. A Ásta respondeu que cada acidente custava muito mais, em dinheiro e em vidas, afinal muitas vezes eram voluntários que arriscavam a vida no resgate. O Birgir se calou, e o Linu viu que ele estava começando a repensar a questão. Agora os dois olhavam para ele, esperando que o juiz dissesse alguma coisa.',
        choices: [
          { text: '“Getið þið ekki sameinað tillögurnar?”', translation: '“Vocês não podem juntar as propostas?”', next: 'samruni' },
          { text: '“Ásta hefur rétt fyrir sér og Birgir rangt.”', translation: '“A Ásta tem razão e o Birgir está errado.”', next: 'final_neutro' },
        ],
      },
      samruni: {
        emoji: '🤝',
        text: 'Linu dró saman rök beggja: Birgir vildi tryggja að enginn færi of nærri sjónum, og Ásta vildi að fólk fengi að sjá fjöruna án þess að laumast. Hann spurði hvort ekki mætti loka hluta fjörunnar þegar öldurnar væru hæstar, en hafa hana opna þess á milli með ljósum og landvörðum. Birgir og Ásta litu hvort á annað. “Það er að vísu málamiðlun”, sagði Birgir hægt, “en hún er ekki slæm.”',
        translation:
          'O Linu resumiu os argumentos dos dois: o Birgir queria garantir que ninguém chegasse perto demais do mar, e a Ásta queria que as pessoas pudessem ver a praia sem precisar se esconder. Ele perguntou se não dava para fechar parte da praia quando as ondas estivessem mais altas e deixá-la aberta no resto do tempo, com luzes e guarda-parques. O Birgir e a Ásta se entreolharam. “É verdade que é um meio-termo”, disse o Birgir devagar, “mas não é ruim.”',
        choices: [{ text: 'Leggja til að þau skrifi saman bréf til sveitarstjórnar.', translation: 'Sugerir que os dois escrevam juntos uma carta à prefeitura.', next: 'bref' }],
      },
      bref: {
        emoji: '✉️',
        text: 'Þau skrifuðu bréfið saman um kvöldið, og Linu gætti þess að hver málsgrein hefði eina hugmynd og skýr tengiorð. Fyrst lýstu þau vandanum, síðan tillögunum tveimur og loks málamiðluninni sem þau höfðu komist að. Ásta vildi setja þrjú upphrópunarmerki á eftir orðinu lífshætta, en Birgir sagði að eitt nægði, enda væri orðið nógu sterkt sjálft. Þau skrifuðu bæði undir með fullu nafni: Ásta Sigurðardóttir og Birgir Halldórsson.',
        translation:
          'Os dois escreveram a carta juntos à noite, e o Linu cuidou para que cada parágrafo tivesse uma ideia só e conectores claros. Primeiro descreveram o problema, depois as duas propostas e, por fim, o meio-termo a que tinham chegado. A Ásta quis pôr três pontos de exclamação depois da palavra “lífshætta” (perigo de morte), mas o Birgir disse que um bastava, afinal a palavra já era forte o bastante. Os dois assinaram com o nome completo: Ásta Sigurðardóttir e Birgir Halldórsson.',
        choices: [{ text: 'Fara með bréfið á skrifstofu sveitarfélagsins.', translation: 'Levar a carta à sede do município.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🏖️',
        text: 'Sveitarstjórnin tók bréfið fyrir á næsta fundi og ákvað að prófa málamiðlunina um sumarið. Birgir setti upp skilti á gistiheimilinu sínu og Ásta kenndi starfsfólki hans að lesa í öldurnar. Þegar Linu kvaddi Vík stóðu þau bæði á hlaðinu og veifuðu, eins og þau hefðu aldrei verið ósammála. Í vasanum hafði hann afrit af bréfinu, fyrstu röksemdafærslunni sem hann hafði hjálpað til við á íslensku.',
        translation:
          'A câmara analisou a carta na reunião seguinte e decidiu testar o meio-termo no verão. O Birgir pôs uma placa na pousada, e a Ásta ensinou os funcionários dele a ler as ondas. Quando o Linu se despediu de Vík, os dois estavam no pátio acenando, como se nunca tivessem discordado. No bolso ele levava uma cópia da carta, a primeira argumentação que tinha ajudado a construir em islandês.',
        ending: { tone: 'bom', title: 'Juiz de paz', message: 'Você ouviu os dois lados, entendeu os conectores e costurou uma proposta que ambos assinaram.' },
      },
      final_neutro: {
        emoji: '🚪',
        text: 'Ásta brosti sigri hrósandi, en Birgir stóð upp og sagði að hann hefði ekki komið til að láta dæma sig. Hann gekk út og skellti hurðinni, og málið komst aldrei lengra en á kaffihúsið. Um sumarið var ströndin hvorki lokuð né betur vöktuð, og viðvörunarskiltin stóðu þar áfram eins og áður. Linu áttaði sig á því að í rökræðu er sjaldnast nóg að skera úr um hver hefur rétt fyrir sér.',
        translation:
          'A Ásta sorriu triunfante, mas o Birgir se levantou e disse que não tinha vindo para ser julgado. Saiu batendo a porta, e a questão nunca passou do café. No verão, a praia não foi fechada nem mais bem vigiada, e as placas de aviso continuaram lá, como antes. O Linu percebeu que num debate raramente basta decidir quem tem razão.',
        ending: { tone: 'neutro', title: 'Juiz que só julga', message: 'Você deu razão a um lado e perdeu o outro. Os dois tinham bons argumentos, e havia espaço para um meio-termo.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'is-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Að norðan',
    emoji: '🦆',
    summary: 'Numa fazenda à beira do lago Mývatn, um fazendeiro de poucas palavras e muita ironia ensina ao Linu a pronúncia do norte da Islândia.',
    cultural_context:
      'O islandês quase não tem dialetos, mas há diferenças de pronúncia. No norte ouve-se o “harðmæli”: em palavras como “gata” (rua), o “t” depois de vogal longa sai aspirado, com um soprinho, enquanto no sul soa mais brando. Na região de Mývatn e no nordeste também se ouve o “raddaður framburður”, em que o “l”, o “m” e o “n” antes de p, t, k continuam sonoros (“hjálpa”, “vanta”), e não surdos, sussurrados, como no sul.',
    start: 'start',
    glossary: [
      ['harðmæli / linmæli', 'pronúncia “dura” (p, t, k aspirados, no norte) / “branda” (no sul)'],
      ['raddaður framburður', 'pronúncia sonora de l, m, n antes de p, t, k'],
      ['Norðlendingur / Sunnlendingur', 'pessoa do norte / pessoa do sul'],
      ['að láta til leiðast', 'deixar-se convencer'],
      ['af útlendingi að vera', 'para um estrangeiro, levando em conta que é estrangeiro'],
      ['að skella upp úr', 'cair na risada'],
      ['gervigígar', 'pseudocrateras (como as de Mývatn)'],
      ['þurrlega', 'secamente, com humor seco'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Linu kom til Mývatns með Tinnu, vinkonu sinni úr Reykjavík, og þau gistu á bóndabæ við vatnið þar sem Hallgrímur bóndi tók á móti þeim. Hann var hávaxinn og skeggjaður, talaði hægt og með hljómi sem Linu hafði aldrei heyrt áður. Þegar hann spurði hvort þau vantaði eitthvað í morgunmat, hljómaði n-ið í vanta eins og það væri sungið. Tinna hvíslaði að Linu að þetta væri ekta norðlenska. “Hér tala menn eins og í gamla daga”, bætti hún við og glotti.',
        translation:
          'O Linu chegou a Mývatn com a Tinna, uma amiga de Reykjavík, e os dois se hospedaram numa fazenda à beira do lago, onde o fazendeiro Hallgrímur os recebeu. Ele era alto e barbudo, falava devagar e com um som que o Linu nunca tinha ouvido. Quando perguntou se faltava alguma coisa para o café da manhã, o “n” de “vanta” (faltar) soou como se fosse cantado. A Tinna cochichou ao Linu que aquilo era nortista legítimo. “Aqui se fala como antigamente”, acrescentou, com um sorrisinho.',
        choices: [
          { text: '“Hvað áttu við með ekta norðlensku?”', translation: '“O que você quer dizer com nortista legítimo?”', next: 'framburdur' },
          { text: '“Er hann reiður? Hann talar svo hart.”', translation: '“Ele está bravo? Fala de um jeito tão duro.”', next: 'hart' },
        ],
      },
      hart: {
        emoji: '😂',
        text: 'Tinna hló svo hátt að Hallgrímur leit upp frá pottinum. Hún útskýrði að Norðlendingar væru ekki harðari í lund en aðrir, heldur notuðu þeir svokallað harðmæli: p, t og k á eftir löngu sérhljóði væru borin fram með blæstri, svo að gata hljómaði næstum eins og gat-ha. Sunnlendingar segðu þetta mýkra, og sumir Norðlendingar kölluðu það linmæli, ekki alltaf í hrósskyni. “Hann er ekki reiður, hann er bara að norðan”, sagði hún. Hallgrímur heyrði þetta og sagði þurrlega að það væri svo sem nóg.',
        translation:
          'A Tinna riu tão alto que o Hallgrímur levantou os olhos da panela. Ela explicou que os nortistas não eram mais duros de temperamento que os outros, mas usavam o chamado “harðmæli”: p, t e k depois de vogal longa saíam com um sopro, de modo que “gata” soava quase como “gat-ha”. No sul se diz isso de forma mais branda, e alguns nortistas chamam isso de “linmæli” (fala mole), nem sempre como elogio. “Ele não está bravo, só é do norte”, disse ela. O Hallgrímur ouviu e disse, secamente, que isso já era o bastante.',
        choices: [{ text: 'Hlæja með þeim og spyrja um meira.', translation: 'Rir com eles e perguntar mais.', next: 'framburdur' }],
      },
      framburdur: {
        emoji: '🗣️',
        text: 'Við morgunverðarborðið bað Linu Hallgrím að segja nokkur orð hægt, og bóndinn lét til leiðast með semingi. “Hjálpa, vanta, hempa”, sagði hann, og l-ið, n-ið og m-ið hljómuðu skýrt, með rödd, en ekki hvíslandi eins og fyrir sunnan. Hann sagði að þetta héti raddaður framburður og að hann lifði enn hér í Þingeyjarsýslu, þótt unga fólkið talaði meira eins og í sjónvarpinu. “Þið fyrir sunnan hvíslið helminginn af orðunum og kallið það svo nútímann”, sagði hann og blikkaði Tinnu. Tinna lést vera móðguð.',
        translation:
          'À mesa do café, o Linu pediu ao Hallgrímur que dissesse algumas palavras devagar, e o fazendeiro, a contragosto, deixou-se convencer. “Hjálpa, vanta, hempa”, disse ele, e o “l”, o “n” e o “m” soaram claros, com voz, e não sussurrados como no sul. Explicou que aquilo se chamava “raddaður framburður” (pronúncia sonora) e que ainda vivia ali em Þingeyjarsýsla, embora os jovens falassem mais como na televisão. “Vocês do sul sussurram metade das palavras e depois chamam isso de modernidade”, disse, piscando para a Tinna. A Tinna fingiu estar ofendida.',
        choices: [
          {
            text: '“Svo fyrir sunnan tala menn hærra en hér?”',
            translation: '“Então no sul as pessoas falam mais alto que aqui?”',
            wrong: 'O Hallgrímur disse o contrário, com ironia: que no sul as pessoas “sussurram metade das palavras” — lá, o “l”, o “n” e o “m” antes de p, t, k saem surdos. No norte, com o “raddaður framburður”, eles continuam sonoros.',
          },
          { text: '“Þetta er fallegt. Af hverju er það að hverfa?”', translation: '“Isso é bonito. Por que está desaparecendo?”', next: 'hverfur' },
        ],
      },
      hverfur: {
        emoji: '🕰️',
        text: 'Hallgrímur yppti öxlum og sagði að málið hefði alltaf breyst, rétt eins og vatnið breytist með árstíðunum. Hann sagði frá því að þegar hann var í skóla hefði kennari að sunnan reynt að venja hann af norðlenskunni. Móðir hans hefði þá farið í skólann og beðið kennarann vinsamlegast að leyfa drengnum að tala eins og hann hefði lært heima. Tinna spurði hvort kennarinn hefði hlýtt. “Hann flutti suður árið eftir”, sagði Hallgrímur, og enginn vissi hvort það var grín.',
        translation:
          'O Hallgrímur deu de ombros e disse que a língua sempre tinha mudado, assim como o lago muda com as estações. Contou que, quando ele estava na escola, um professor do sul tinha tentado desacostumá-lo do jeito nortista de falar. A mãe dele então foi à escola e pediu ao professor, com toda a gentileza, que deixasse o menino falar como tinha aprendido em casa. A Tinna perguntou se o professor obedeceu. “Ele se mudou para o sul no ano seguinte”, disse o Hallgrímur, e ninguém soube se era piada.',
        choices: [
          { text: '“Viltu kenna mér að tala eins og þú?”', translation: '“Você me ensina a falar como você?”', next: 'kennsla' },
          { text: '“Reykjavíkurmálið er nú samt réttara, er það ekki?”', translation: '“Mas o jeito de Reykjavík é mais correto, não é?”', next: 'final_neutro' },
        ],
      },
      kennsla: {
        emoji: '🌋',
        text: 'Allan daginn, á meðan þau gengu í kringum gervigígana og horfðu á endurnar á vatninu, æfði Linu sig á norðlenskunni. Hallgrímur leiðrétti hann í hvert sinn sem hann hvíslaði n-ið í vanta eða lét t-ið í gata verða of mjúkt. Tinna gerði stöðugt grín að þeim og sagðist ætla að tala sunnlensku til að halda jafnvæginu í heiminum. Undir kvöld sagði Hallgrímur að Linu væri orðinn nokkuð góður, af útlendingi að vera. “Og það er mesta hrós sem hann hefur gefið nokkrum manni”, hvíslaði Tinna.',
        translation:
          'O dia inteiro, enquanto andavam em volta das pseudocrateras e olhavam os patos no lago, o Linu treinou o jeito nortista. O Hallgrímur o corrigia toda vez que ele sussurrava o “n” de “vanta” ou deixava o “t” de “gata” mole demais. A Tinna zombava dos dois o tempo todo e dizia que ia falar à moda do sul para manter o equilíbrio do mundo. Ao anoitecer, o Hallgrímur disse que o Linu estava ficando bem bom, para um estrangeiro. “E esse é o maior elogio que ele já fez a alguém”, cochichou a Tinna.',
        choices: [{ text: 'Setjast að kvöldverði.', translation: 'Sentar-se para o jantar.', next: 'aefing' }],
      },
      aefing: {
        emoji: '🍞',
        text: 'Um kvöldið sátu þau við eldhúsborðið yfir silungi úr vatninu og hverabrauði, og Tinna ákvað að reyna sig líka á norðlenskunni. Hún sagði hjálpa með svo ýktu l-i að það hljómaði eins og hún væri að kafna, og Hallgrímur horfði lengi á hana án þess að segja orð. “Þetta var góð tilraun”, sagði hann loks, “af Reykvíkingi að vera.” Tinna kastaði í hann brauðbita, og í fyrsta sinn sá Linu bóndann skellihlæja.',
        translation:
          'À noite os três se sentaram à mesa da cozinha diante de uma truta do lago e de hverabrauð, o pão de centeio assado no calor do chão, e a Tinna resolveu também arriscar o jeito nortista. Ela disse “hjálpa” com um “l” tão exagerado que parecia estar engasgada, e o Hallgrímur a encarou um bom tempo sem dizer nada. “Foi uma boa tentativa”, disse por fim, “para alguém de Reykjavík.” A Tinna jogou nele um pedaço de pão, e pela primeira vez o Linu viu o fazendeiro gargalhar.',
        choices: [{ text: 'Þakka fyrir sig á norðlensku morguninn eftir.', translation: 'Agradecer à moda do norte na manhã seguinte.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🫙',
        text: 'Morguninn eftir þakkaði Linu fyrir hjálpina og matinn með svo rödduðu l-i að Hallgrímur brosti breitt undir skegginu. Hann sótti krukku af heimagerðri rabarbarasultu og gaf Linu hana til að taka með sér suður. Í bílnum á leiðinni heim reyndi Tinna að herma eftir honum en gafst upp eftir tvö orð. “Þú talar betri norðlensku en ég”, sagði hún, og Linu vissi ekki hvort það var hrós eða kvörtun.',
        translation:
          'Na manhã seguinte o Linu agradeceu a ajuda (“hjálpina”) e a comida com um “l” tão sonoro que o Hallgrímur abriu um sorriso largo debaixo da barba. Ele foi buscar um pote de geleia caseira de ruibarbo e deu ao Linu para levar para o sul. No carro, voltando, a Tinna tentou imitá-lo, mas desistiu depois de duas palavras. “Você fala nortista melhor que eu”, disse ela, e o Linu não soube se era elogio ou reclamação.',
        ending: { tone: 'bom', title: 'Sotaque do norte', message: 'Você entendeu o harðmæli, o raddaður framburður e a ironia seca do Hallgrímur — e ainda ganhou geleia de ruibarbo.' },
      },
      final_neutro: {
        emoji: '🥶',
        text: 'Það varð dauðaþögn við borðið. Hallgrímur lagði frá sér gaffalinn og sagði kurteislega, en mjög hægt, að ekkert afbrigði málsins væri réttara en annað og að Reykjavík hefði ekkert einkaleyfi á íslenskunni. Tinna sparkaði í Linu undir borðinu. Það sem eftir var kvöldsins var kurteislegt en kalt, og morguninn eftir var morgunmaturinn borinn fram þegjandi.',
        translation:
          'Fez-se um silêncio mortal à mesa. O Hallgrímur pousou o garfo e disse, educadamente mas muito devagar, que nenhuma variedade da língua era mais correta que outra e que Reykjavík não tinha o monopólio do islandês. A Tinna chutou o Linu por baixo da mesa. O resto da noite foi educado mas frio, e na manhã seguinte o café foi servido em silêncio.',
        ending: { tone: 'neutro', title: 'Norma de quem?', message: 'O islandês padrão não é “o de Reykjavík”: as pronúncias do norte são tão corretas quanto as do sul. Faltou tato — e senso de ironia.' },
      },
    },
  },
  {
    id: 'is-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Tú og þú',
    emoji: '⛴️',
    summary: 'No ferry que sai de Seyðisfjörður rumo às ilhas Faroé, o Linu conversa com um feroês e descobre o quanto as duas línguas se parecem — e se afastam.',
    cultural_context:
      'Um ferry liga Seyðisfjörður, no leste da Islândia, às ilhas Faroé e à Dinamarca. O feroês e o islandês descendem do nórdico antigo e se parecem muito na escrita, em parte porque a ortografia feroesa foi criada no século XIX tomando o nórdico antigo como modelo; mas a pronúncia do feroês mudou tanto que islandeses e feroeses costumam se entender melhor lendo do que ouvindo. A saga das ilhas, a Færeyinga saga, sobreviveu em manuscritos islandeses.',
    start: 'start',
    glossary: [
      ['færeyska', 'feroês (a língua)'],
      ['Færeyjar / Færeyingur', 'ilhas Faroé / feroês (pessoa)'],
      ['tú (fær.) = þú (ísl.)', 'você: o feroês não tem a letra “þ”'],
      ['takk fyri (fær.) = takk fyrir (ísl.)', 'obrigado'],
      ['fornnorræna', 'nórdico antigo'],
      ['að missa þráðinn', 'perder o fio da meada'],
      ['eins og dögg fyrir sólu', 'num piscar de olhos (lit.: como orvalho diante do sol)'],
      ['Þórshöfn', 'Tórshavn, a capital das ilhas Faroé (nome islandês)'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: 'Ferjan lagði úr höfn á Seyðisfirði í logni og þoku, og brattar hlíðar fjarðarins hurfu hægt á bak við skipið. Á þilfarinu stóð gamall maður í lopapeysu sem heilsaði Linu á máli sem hljómaði næstum eins og íslenska, en þó ekki alveg. Linu skildi eitt og eitt orð en missti þráðinn jafnóðum. Maðurinn hló, benti á sjálfan sig og sagði hægt að hann héti Jógvan og væri á heimleið til Færeyja. Svo benti hann á Linu og spurði einfaldlega: “Og tú?”',
        translation:
          'O ferry deixou o porto de Seyðisfjörður com o mar calmo e neblina, e as encostas íngremes do fiorde foram sumindo devagar atrás do navio. No convés, um senhor de suéter de lã cumprimentou o Linu numa língua que soava quase como islandês, mas não exatamente. O Linu entendia uma palavra ou outra, mas perdia o fio da meada logo em seguida. O homem riu, apontou para si mesmo e disse devagar que se chamava Jógvan e que estava voltando para casa, nas ilhas Faroé. Depois apontou para o Linu e perguntou, simplesmente: “E tú?”',
        choices: [
          { text: '“Ég heiti Linu. Tú, er það þú?”', translation: '“Eu me chamo Linu. ‘Tú’ é ‘þú’?”', next: 'tu' },
          {
            text: '“Fyrirgefðu, ég tala ekki ensku.”',
            translation: '“Desculpe, eu não falo inglês.”',
            wrong: 'O Jógvan não falou inglês: falou feroês, a língua das ilhas Faroé, que se parece muito com o islandês. “Tú” é o “þú” (você) feroês — o feroês não tem a letra “þ”.',
          },
        ],
      },
      tu: {
        emoji: '📝',
        text: 'Jógvan kinkaði kolli og sagði að í færeysku væri enginn þ-stafur, svo að þú yrði tú. Í kaffiteríunni skrifaði hann nokkrar setningar á servíettu, og Linu sá sér til undrunar að hann skildi næstum allt á blaði. “Við skrifum líkt en tölum ólíkt”, sagði Jógvan, hægt og á færeysku, og Linu skildi það nokkurn veginn. Hann útskýrði að færeyska stafsetningin hefði verið samin á nítjándu öld með fornnorrænuna að fyrirmynd. Þess vegna væru orðin á blaði svona lík íslensku, þótt þau hljómuðu allt öðruvísi.',
        translation:
          'O Jógvan fez que sim e disse que em feroês não existe a letra “þ”, então “þú” vira “tú”. Na lanchonete ele escreveu algumas frases num guardanapo, e o Linu viu, surpreso, que entendia quase tudo no papel. “Escrevemos parecido, mas falamos diferente”, disse o Jógvan, devagar e em feroês, e o Linu entendeu mais ou menos. Ele explicou que a ortografia feroesa tinha sido criada no século XIX tomando o nórdico antigo como modelo. Por isso as palavras no papel eram tão parecidas com o islandês, embora soassem completamente diferentes.',
        choices: [
          { text: '“En hvernig hljómar ð-ið hjá ykkur?”', translation: '“E como soa o ‘ð’ para vocês?”', next: 'ed' },
          { text: '“Lesa Færeyingar þá fornsögurnar?”', translation: '“Então os feroeses leem as sagas antigas?”', next: 'sogur' },
        ],
      },
      ed: {
        emoji: '👻',
        text: 'Jógvan hló og sagði að ð-ið væri eins konar draugur í færeysku: það stæði í orðunum en heyrðist oftast ekki. Hann tók dæmi af orðinu veður, sem Íslendingar bera fram með mjúku ð-i, og sagði það á færeysku, og ð-ið hvarf eins og dögg fyrir sólu. Linu hugsaði að þetta væri eins og að hitta gamlan vin í nýjum fötum. Jógvan bætti við að Íslendingar ættu það til að halda að Færeyingar töluðu bara bjagaða íslensku, sem honum þætti hvorki fyndið né satt.',
        translation:
          'O Jógvan riu e disse que o “ð” era uma espécie de fantasma no feroês: estava escrito nas palavras, mas quase nunca se ouvia. Deu o exemplo da palavra “veður” (tempo), que os islandeses pronunciam com um “ð” suave, e a disse em feroês — e o “ð” sumiu num piscar de olhos. O Linu pensou que era como reencontrar um velho amigo de roupa nova. O Jógvan acrescentou que os islandeses às vezes acham que os feroeses falam só um islandês estropiado, o que ele não achava nem engraçado nem verdadeiro.',
        choices: [
          {
            text: '“Er færeyskan þá bara íslenska með hreim?”',
            translation: '“Então o feroês é só islandês com sotaque?”',
            wrong: 'O Jógvan acabou de dizer que acha essa ideia “hvorki fyndið né satt” — nem engraçada nem verdadeira. O feroês é uma língua própria, irmã do islandês, com sua história e sua escrita. O “ð” mudo é só uma das diferenças.',
          },
          { text: '“Ég skil. Lesið þið fornsögurnar?”', translation: '“Entendi. Vocês leem as sagas antigas?”', next: 'sogur' },
        ],
      },
      sogur: {
        emoji: '📜',
        text: 'Jógvan sagði að Færeyingar læsu fornsögurnar, en að margir læsu þær í þýðingu, því að fornmálið væri þeim fjarlægara en Íslendingum. Hann sagði líka að Færeyingar ættu sína eigin sögu, Færeyinga sögu, sem hefði einmitt varðveist í íslenskum handritum. Linu fannst það skemmtileg tilhugsun að saga eyjanna hefði komist af í bókum nágrannanna. “Norðurlönd eru eins og stór fjölskylda”, sagði Jógvan, “þar sem allir skilja hver annan, en enginn talar eins.”',
        translation:
          'O Jógvan disse que os feroeses leem as sagas, mas que muitos as leem traduzidas, porque a língua antiga é mais distante para eles do que para os islandeses. Contou também que os feroeses têm a sua própria saga, a Færeyinga saga, que sobreviveu justamente em manuscritos islandeses. O Linu achou divertido pensar que a história das ilhas tinha sobrevivido nos livros dos vizinhos. “Os países nórdicos são como uma grande família”, disse o Jógvan, “em que todos se entendem, mas ninguém fala igual.”',
        choices: [{ text: 'Þiggja blaðið sem Jógvan dregur upp úr töskunni.', translation: 'Aceitar o jornal que o Jógvan tira da bolsa.', next: 'lestur' }],
      },
      lestur: {
        emoji: '🗞️',
        text: 'Jógvan dró færeyskt dagblað upp úr töskunni og rétti Linu það. Linu las fyrirsagnirnar hægt og skildi flestar, þótt sum orðin væru stafsett öðruvísi en hann átti að venjast og fáein væru honum alveg framandi. Þegar Jógvan las sömu fyrirsagnir upphátt skildi hann aftur á móti nær ekkert. “Sérðu”, sagði Jógvan og hló, “augun eru frændur, en eyrun eru ókunnug.”',
        translation:
          'O Jógvan tirou um jornal feroês da bolsa e o entregou ao Linu. O Linu leu as manchetes devagar e entendeu a maioria, embora algumas palavras fossem escritas de um jeito diferente do que ele estava acostumado e umas poucas lhe fossem totalmente estranhas. Já quando o Jógvan leu as mesmas manchetes em voz alta, ele não entendeu quase nada. “Está vendo?”, disse o Jógvan, rindo. “Os olhos são parentes, mas os ouvidos são desconhecidos.”',
        choices: [{ text: '“Talið þið líka dönsku?”', translation: '“Vocês também falam dinamarquês?”', next: 'danska' }],
      },
      danska: {
        emoji: '🌊',
        text: 'Jógvan sagði að Færeyingar lærðu dönsku frá unga aldri, enda væru eyjarnar hluti af danska konungsríkinu, þótt þær hefðu víðtæka sjálfstjórn. Hann spurði Linu hvort hann vildi æfa sig á færeysku á leiðinni eða hvort þeir ættu að tala saman á ensku, eins og flestir gerðu á ferjunni. Úti fyrir glugganum var þokan farin að lyftast, og Linu sá hafið breiða úr sér, grátt og endalaust.',
        translation:
          'O Jógvan disse que os feroeses aprendem dinamarquês desde pequenos, afinal as ilhas fazem parte do Reino da Dinamarca, embora tenham ampla autonomia. Perguntou ao Linu se ele queria praticar feroês durante a viagem ou se deviam conversar em inglês, como a maioria fazia no ferry. Do lado de fora da janela a neblina começava a subir, e o Linu viu o mar se abrir, cinzento e sem fim.',
        choices: [
          { text: '“Tölum hvor á sínu máli og sjáum hvað gerist.”', translation: '“Vamos falar cada um na sua língua e ver o que acontece.”', next: 'final_bom' },
          { text: '“Tölum bara ensku, það er einfaldara.”', translation: '“Vamos falar inglês, é mais simples.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏝️',
        text: 'Þeir töluðu saman alla leiðina, Linu á íslensku og Jógvan á færeysku, hægt og með mörgum handahreyfingum. Stundum þurftu þeir að skrifa orð á servíettuna, stundum að hlæja að misskilningi, en smám saman fór Linu að heyra íslensku orðin undir færeyska hljóðinu. Þegar eyjarnar risu úr hafinu, grænar og brattar, sagði Jógvan að hann skildi Linu betur en suma Dani sem hann þekkti. Hann skrifaði heimilisfangið sitt í Þórshöfn á servíettuna og sagði “takk fyri”, og Linu svaraði “takk fyrir”.',
        translation:
          'Os dois conversaram a viagem toda, o Linu em islandês e o Jógvan em feroês, devagar e com muitos gestos. Às vezes precisavam escrever uma palavra no guardanapo, às vezes rir de um mal-entendido, mas aos poucos o Linu começou a ouvir as palavras islandesas por baixo do som feroês. Quando as ilhas surgiram do mar, verdes e íngremes, o Jógvan disse que entendia o Linu melhor do que alguns dinamarqueses que conhecia. Escreveu seu endereço em Tórshavn no guardanapo e disse “takk fyri”, e o Linu respondeu “takk fyrir”.',
        ending: { tone: 'bom', title: 'Irmãos de ð', message: 'Você entendeu por que o feroês e o islandês se leem melhor do que se ouvem — e conversou com um feroês, cada um na sua língua.' },
      },
      final_neutro: {
        emoji: '🗺️',
        text: 'Þeir skiptu yfir í ensku og spjölluðu þægilega um veðrið og fiskinn, eins og tveir ferðamenn hvar sem er í heiminum. Samtalið var auðvelt, en Linu fann að eitthvað hafði glatast, einhver skyldleiki sem hafði verið rétt handan við orðin. Þegar þeir kvöddust við landganginn í Þórshöfn sagði Jógvan “takk fyri”, og Linu áttaði sig of seint á því að þeir hefðu getað talað saman á sínum eigin málum allan tímann. Hann ákvað að næst myndi hann reyna.',
        translation:
          'Os dois passaram para o inglês e conversaram tranquilamente sobre o tempo e o peixe, como dois viajantes em qualquer lugar do mundo. A conversa foi fácil, mas o Linu sentiu que algo tinha se perdido, um parentesco que estava logo ali, além das palavras. Quando se despediram na passarela em Tórshavn, o Jógvan disse “takk fyri”, e o Linu percebeu tarde demais que os dois podiam ter conversado nas próprias línguas o tempo todo. Decidiu que, da próxima vez, ia tentar.',
        ending: { tone: 'neutro', title: 'Atalho pelo inglês', message: 'Foi confortável, mas você perdeu a chance de testar o parentesco entre o islandês e o feroês.' },
      },
    },
  },
  {
    id: 'is-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Danskan í skólanum',
    emoji: '🇩🇰',
    summary: 'Numa aula de dinamarquês num colégio de Reykjavík, o Linu precisa perceber a ironia da professora e descobre as palavras dinamarquesas escondidas no islandês.',
    cultural_context:
      'A Islândia esteve durante séculos sob a coroa dinamarquesa; tornou-se um Estado soberano em 1º de dezembro de 1918, e a república foi proclamada em Þingvellir em 17 de junho de 1944. O dinamarquês continua sendo ensinado nas escolas islandesas, e algumas palavras do dia a dia, como “bíll” (carro) e “strax” (já, imediatamente), vieram dele, enquanto o registro formal prefere “bifreið” e “undir eins”.',
    start: 'start',
    glossary: [
      ['kaldhæðni', 'ironia, sarcasmo'],
      ['sletta / dönskusletta', 'estrangeirismo / palavra emprestada do dinamarquês'],
      ['strax / undir eins', 'já, imediatamente (coloquial / formal)'],
      ['bíll / bifreið', 'carro (coloquial / formal)'],
      ['málsnið', 'registro (de língua)'],
      ['hvort sem ykkur líkar betur eða verr', 'queiram vocês ou não'],
      ['að springa úr hlátri', 'cair na gargalhada (lit.: explodir de riso)'],
      ['fullveldi', 'soberania'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Linu var gestur í dönskutíma í menntaskóla í Reykjavík, þar sem Margrét kennari tók á móti honum í dyrunum. Nemendurnir sátu hálfsofandi yfir bókunum, og einn þeirra, Óli, spurði upphátt til hvers í ósköpunum Íslendingar þyrftu að læra dönsku. “Frábær spurning, Óli, og alveg ný”, sagði Margrét. “Ég hef ekki heyrt hana síðan í gær.” Bekkurinn hló og Óli roðnaði.',
        translation:
          'O Linu era convidado numa aula de dinamarquês num colégio de Reykjavík, onde a professora Margrét o recebeu na porta. Os alunos estavam meio dormindo em cima dos livros, e um deles, o Óli, perguntou em voz alta para que diabos os islandeses precisavam aprender dinamarquês. “Ótima pergunta, Óli, e novinha”, disse a Margrét. “Não ouço essa desde ontem.” A turma riu e o Óli ficou vermelho.',
        choices: [
          { text: '“Hún var að gera grín, var það ekki?”', translation: '“Ela estava brincando, não estava?”', next: 'kaldh' },
          {
            text: '“Óli spurði góðrar spurningar sem enginn hefur spurt áður.”',
            translation: '“O Óli fez uma boa pergunta que ninguém tinha feito antes.”',
            wrong: 'A Margrét estava sendo irônica: “alveg ný” (novinha) e “não ouço essa desde ontem” querem dizer que os alunos fazem essa pergunta o tempo todo. Era brincadeira, não elogio.',
          },
          { text: '“Mig langar líka að vita svarið.”', translation: '“Eu também quero saber a resposta.”', next: 'saga' },
        ],
      },
      kaldh: {
        emoji: '😏',
        text: 'Margrét heyrði spurninguna og hló. “Kaldhæðni er fyrsta tungumálið sem kennari lærir, og það eina sem nemendurnir skilja alltaf”, sagði hún. Óli muldraði að hann hefði skilið hana fullvel. Svo varð Margrét alvarleg og sagði að spurningin ætti samt skilið alvöru svar.',
        translation:
          'A Margrét ouviu a pergunta e riu. “A ironia é a primeira língua que um professor aprende, e a única que os alunos sempre entendem”, disse. O Óli resmungou que tinha entendido muito bem. Então a Margrét ficou séria e disse que a pergunta, mesmo assim, merecia uma resposta de verdade.',
        choices: [{ text: 'Hlusta á svarið.', translation: 'Ouvir a resposta.', next: 'saga' }],
      },
      saga: {
        emoji: '👑',
        text: 'Margrét sagði bekknum að Ísland hefði öldum saman heyrt undir danska konunginn og að danska hefði verið mál kaupmanna og embættismanna í Reykjavík. “Við fengum fullveldi 1. desember 1918 og lýðveldið var stofnað á Þingvöllum 17. júní 1944, en danskan hélt áfram að lifa í skólunum”, sagði hún. “Og hún lifir líka í munninum á ykkur, hvort sem ykkur líkar betur eða verr.” Óli lyfti brúnum og spurði hvað hún ætti eiginlega við.',
        translation:
          'A Margrét contou à turma que a Islândia tinha estado por séculos sob o rei da Dinamarca e que o dinamarquês tinha sido a língua dos comerciantes e dos funcionários públicos em Reykjavík. “Ganhamos a soberania em 1º de dezembro de 1918, e a república foi fundada em Þingvellir em 17 de junho de 1944, mas o dinamarquês continuou vivo nas escolas”, disse. “E vive também na boca de vocês, queiram ou não.” O Óli ergueu as sobrancelhas e perguntou o que ela queria dizer com isso, afinal.',
        choices: [{ text: 'Bíða eftir útskýringunni.', translation: 'Esperar a explicação.', next: 'slettur' }],
      },
      slettur: {
        emoji: '🧑‍🏫',
        text: 'Margrét skrifaði nokkur orð á töfluna: strax, passa, bíll. “Öll þessi orð komu til okkar úr dönsku, og þið notið þau oft á dag án þess að blikna”, sagði hún. Óli mótmælti og sagði að bíll væri alíslenskt orð, en Margrét benti á að formlega orðið væri bifreið og að bíll hefði komið úr dönsku. Bekkurinn var skyndilega glaðvakandi. Einhver spurði hvort sko væri líka danska, og Margrét sagði að það yrði efni í annan tíma.',
        translation:
          'A Margrét escreveu algumas palavras no quadro: “strax”, “passa”, “bíll”. “Todas essas palavras chegaram até nós do dinamarquês, e vocês as usam várias vezes por dia sem pestanejar”, disse. O Óli protestou que “bíll” era uma palavra islandesíssima, mas a Margrét observou que a palavra formal era “bifreið” e que “bíll” tinha vindo do dinamarquês. De repente a turma estava bem acordada. Alguém perguntou se “sko” também era dinamarquês, e a Margrét disse que isso ficava para outra aula.',
        choices: [
          { text: '“Er það þá slæmt að nota þessi orð?”', translation: '“Então é ruim usar essas palavras?”', next: 'gott' },
          { text: '“Þá ætti að banna þau öll í skólanum!”', translation: '“Então deviam proibir todas na escola!”', next: 'bann' },
        ],
      },
      bann: {
        emoji: '🚫',
        text: 'Margrét leit á Linu með uppgerðum alvörusvip og sagði að þetta væri einmitt tillagan sem hún hefði beðið eftir alla ævi. “Frá og með morgundeginum verður bannað að segja strax. Í staðinn segið þið undir eins, og hver sá sem passar ekki upp á þetta fær aukaverkefni í dönsku”, sagði hún. Bekkurinn stundi, og Óli hvíslaði að Linu að hann væri búinn að eyðileggja líf þeirra allra. Svo sprakk Margrét úr hlátri og sagði að þetta væri auðvitað grín.',
        translation:
          'A Margrét olhou para o Linu com uma cara séria fingida e disse que aquela era justamente a proposta que ela tinha esperado a vida inteira. “A partir de amanhã fica proibido dizer ‘strax’. Em vez disso vocês dizem ‘undir eins’, e quem não se cuidar com isso (em islandês, ‘passa upp á’) ganha tarefa extra de dinamarquês”, disse. A turma gemeu, e o Óli cochichou ao Linu que ele tinha acabado com a vida de todos. Então a Margrét caiu na gargalhada e disse que era piada, claro.',
        choices: [
          {
            text: '“Svo nú má enginn segja strax í skólanum.”',
            translation: '“Então agora ninguém pode dizer ‘strax’ na escola.”',
            wrong: 'A Margrét estava brincando: no fim ela “sprakk úr hlátri” (caiu na gargalhada) e disse que era “grín” (piada). Repare também na ironia: para proibir a palavra dinamarquesa, ela mesma usou outra, “passa”.',
          },
          { text: '“Ég skil. Hvað segirðu þá í alvöru?”', translation: '“Entendi. E o que você diz a sério?”', next: 'gott' },
        ],
      },
      gott: {
        emoji: '🏞️',
        text: 'Margrét sagði að tungumál væru ekki hrein eins og nýfallinn snjór, heldur eins og á sem ber með sér möl úr mörgum fjöllum. Íslendingar hefðu varið málið sitt vel, með nýyrðum og góðum skólum, en sumar slettur hefðu fengið að lifa, enda væru þær hluti af sögunni. “Í formlegum texta skrifið þið bifreið og undir eins; í eldhúsinu heima megið þið segja bíll og strax”, sagði hún. “Það heitir að kunna að skipta um málsnið, og það er dýrmætara en að kunna tuttugu sagnbeygingar á dönsku.”',
        translation:
          'A Margrét disse que as línguas não são puras como neve recém-caída, e sim como um rio que carrega cascalho de muitas montanhas. Os islandeses tinham defendido bem a sua língua, com neologismos e boas escolas, mas alguns estrangeirismos tinham sobrevivido, afinal faziam parte da história. “Num texto formal vocês escrevem ‘bifreið’ e ‘undir eins’; na cozinha de casa podem dizer ‘bíll’ e ‘strax’”, disse. “Isso se chama saber mudar de registro, e vale mais do que saber vinte conjugações em dinamarquês.”',
        choices: [
          { text: 'Segja bekknum að danskan opni dyr að allri Skandinavíu.', translation: 'Dizer à turma que o dinamarquês abre as portas da Escandinávia inteira.', next: 'final_bom' },
          { text: 'Segja Óla að hann hafi rétt fyrir sér og að danskan sé óþörf.', translation: 'Dizer ao Óli que ele tem razão e que o dinamarquês é inútil.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🧭',
        text: 'Linu sagði bekknum að hann hefði ferðast um Danmörku, Noreg og Svíþjóð og að með dönskunni gæti maður lesið skilti, blöð og bækur í öllum þremur löndunum. Óli hugsaði sig um og viðurkenndi, frekar tregur, að það væri kannski ekki alveg vitlaust. Margrét sagði að þetta væri í fyrsta skipti í tuttugu ár sem nemandi hefði viðurkennt slíkt í tíma hjá henni. “Ég ætla að skrifa þennan dag í dagbókina mína”, sagði hún, og í þetta sinn var enginn viss um hvort hún væri að grínast.',
        translation:
          'O Linu contou à turma que tinha viajado pela Dinamarca, pela Noruega e pela Suécia e que com o dinamarquês dava para ler placas, jornais e livros nos três países. O Óli pensou e admitiu, meio a contragosto, que talvez aquilo não fosse tão bobo. A Margrét disse que era a primeira vez em vinte anos que um aluno admitia uma coisa dessas na aula dela. “Vou anotar este dia no meu diário”, disse, e desta vez ninguém teve certeza se ela estava brincando.',
        ending: { tone: 'bom', title: 'Ironia entendida', message: 'Você pegou a ironia da Margrét, as palavras dinamarquesas escondidas no islandês e a ideia de mudar de registro.' },
      },
      final_neutro: {
        emoji: '🙈',
        text: 'Óli ljómaði og gaf Linu fimmu, og hálfur bekkurinn klappaði. Margrét brosti þurrlega og sagði að þá gæti Linu kannski skrifað ritgerðina um danska málsögu fyrir Óla, fyrst hann væri svona sannfærður. Linu hélt fyrst að henni væri alvara og fór að afsaka sig á hraðri íslensku. Það tók hann góða stund að átta sig á því að kaldhæðnin var enn á ferðinni.',
        translation:
          'O Óli se iluminou e bateu na mão do Linu, e metade da turma aplaudiu. A Margrét sorriu secamente e disse que então talvez o Linu pudesse escrever a redação sobre a história do dinamarquês no lugar do Óli, já que estava tão convencido. O Linu primeiro achou que ela estava falando sério e começou a se desculpar num islandês apressado. Levou um bom tempo para perceber que a ironia continuava em ação.',
        ending: { tone: 'neutro', title: 'Aliado do Óli', message: 'Você fez sucesso com a turma, mas ignorou a história que a Margrét contou — e demorou a perceber a ironia dela.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'is-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Jökullinn hopar',
    emoji: '🧊',
    summary: 'Em Jökulsárlón, a lagoa de icebergs, o Linu entrevista uma glacióloga e precisa transformar linguagem científica num texto para o grande público.',
    cultural_context:
      'A lagoa de Jökulsárlón começou a se formar na década de 1930, quando a geleira Breiðamerkurjökull, uma língua do Vatnajökull — a maior geleira da Islândia —, começou a recuar. A água do mar entra na lagoa com a maré, por isso ela é salobra, e é comum ver focas entre os icebergs.',
    start: 'start',
    glossary: [
      ['að hopa', 'recuar (geleira)'],
      ['jökulsporður', 'frente da geleira, a “ponta” que avança ou recua'],
      ['afkoma jökuls', 'balanço de massa de uma geleira'],
      ['ákoma / leysing', 'acumulação (de neve) / derretimento'],
      ['ísalt vatn', 'água salobra'],
      ['ísjaki (ft. jakar)', 'iceberg'],
      ['fræðimál', 'linguagem acadêmica'],
      ['hófstilltur', 'comedido, sóbrio'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu var í starfsnámi hjá vísindavef og hafði verið sendur að Jökulsárlóni til að skrifa grein fyrir almenning. Þar hitti hann Önnu, jöklafræðing sem hafði mælt Breiðamerkurjökul í fimmtán ár. Hún stóð á bakkanum með mælitæki og benti út yfir lónið, þar sem ísjakar í öllum bláum litum mjökuðust í átt að ósnum. “Fyrir tæpri öld var hér ekkert lón, aðeins jökull sem náði næstum niður að sjó”, sagði hún. “Allt vatnið sem þú sérð fyllir rýmið sem jökullinn hefur skilið eftir sig.”',
        translation:
          'O Linu fazia estágio num site de divulgação científica e tinha sido mandado a Jökulsárlón para escrever um artigo para o grande público. Lá encontrou a Anna, uma glacióloga que media a Breiðamerkurjökull havia quinze anos. Ela estava na margem com um instrumento de medição e apontou para a lagoa, onde icebergs de todos os tons de azul deslizavam devagar em direção à saída para o mar. “Há menos de um século não havia lagoa aqui, só uma geleira que chegava quase até o mar”, disse. “Toda a água que você vê ocupa o espaço que a geleira deixou para trás.”',
        choices: [
          { text: '“Hvernig myndaðist lónið nákvæmlega?”', translation: '“Como exatamente a lagoa se formou?”', next: 'lon' },
          { text: '“Hvernig mælið þið hvað jökullinn hopar?”', translation: '“Como vocês medem quanto a geleira recua?”', next: 'maeling' },
        ],
      },
      lon: {
        emoji: '🦭',
        text: 'Anna útskýrði að jökullinn hefði grafið djúpa rennu í landið þegar hann var stærri, og að þegar hann tók að hopa á fjórða áratug síðustu aldar hefði bræðsluvatn fyllt hana. “Lónið stækkar enn, því að sporðurinn brotnar í sífellu og ísjakarnir fljóta út”, sagði hún. Hún bætti við að sjór streymdi inn í lónið með flóðinu, svo að vatnið væri ísalt, og að selirnir sem Linu sá á jökunum kæmu þangað til að veiða fisk sem bærist inn með sjónum. Linu skrifaði hratt og reyndi að ná hverju orði.',
        translation:
          'A Anna explicou que a geleira tinha escavado um sulco profundo no terreno quando era maior e que, quando começou a recuar, na década de 1930, a água do degelo o encheu. “A lagoa ainda está crescendo, porque a frente da geleira se parte o tempo todo e os icebergs saem flutuando”, disse. Acrescentou que o mar entra na lagoa com a maré, por isso a água é salobra, e que as focas que o Linu via sobre os blocos de gelo vinham caçar os peixes trazidos pelo mar. O Linu escrevia depressa, tentando pegar cada palavra.',
        choices: [{ text: '“Og hvernig mælið þið breytingarnar?”', translation: '“E como vocês medem as mudanças?”', next: 'maeling' }],
      },
      maeling: {
        emoji: '📈',
        text: 'Anna sagði að hópurinn hennar mældi bæði hversu langt sporðurinn hopaði á ári og afkomu jökulsins, það er að segja muninn á þeim snjó sem safnast fyrir á veturna og þeim ís sem bráðnar á sumrin. “Undanfarna áratugi hefur afkoman oftast verið neikvæð; jökullinn tapar meiru en hann fær”, sagði hún. Hún sýndi honum línurit þar sem ferillinn hallaði niður á við, með fáeinum undantekningum. “Í fræðigrein skrifum við að afkoman hafi verið neikvæð; í blaði myndum við segja að jökullinn sé að minnka, og hvort tveggja er satt.”',
        translation:
          'A Anna disse que o grupo dela media tanto quanto a frente da geleira recuava por ano quanto o balanço de massa da geleira, ou seja, a diferença entre a neve que se acumula no inverno e o gelo que derrete no verão. “Nas últimas décadas o balanço tem sido quase sempre negativo: a geleira perde mais do que ganha”, disse. Mostrou a ele um gráfico em que a curva descia, com poucas exceções. “Num artigo científico escrevemos que o balanço de massa foi negativo; num jornal diríamos que a geleira está encolhendo, e as duas coisas são verdade.”',
        choices: [
          {
            text: '“Þannig að jökullinn stækkar á veturna og því er allt í lagi?”',
            translation: '“Então a geleira cresce no inverno e, portanto, está tudo bem?”',
            wrong: 'A Anna disse que a “afkoma” (balanço de massa) tem sido “neikvæð” (negativa) na maior parte das últimas décadas: a geleira perde mais gelo no verão do que ganha de neve no inverno. Ou seja, ela está diminuindo.',
          },
          { text: '“Hvernig á ég að skrifa þetta fyrir almenning?”', translation: '“Como eu escrevo isso para o grande público?”', next: 'still' },
        ],
      },
      still: {
        emoji: '📄',
        text: 'Anna rétti honum útdrátt úr skýrslu sem hún hafði skrifað og bað hann að lesa fyrstu setninguna upphátt. Hún var löng og full af orðum eins og afkomumæliraðir og jökulhopun, og Linu hikaði í miðjunni. “Einmitt”, sagði Anna. “Fræðimálið er nákvæmt, en það er eins og girðing: það ver merkinguna en heldur fólki úti.” Hún sagði að góð blaðagrein byrjaði á mynd sem lesandinn sæi fyrir sér og kæmi svo að tölunum.',
        translation:
          'A Anna lhe entregou o resumo de um relatório que ela tinha escrito e pediu que ele lesse a primeira frase em voz alta. Era longa e cheia de palavras como “séries de medição do balanço de massa” e “recuo glacial”, e o Linu empacou no meio. “Pois é”, disse a Anna. “A linguagem acadêmica é precisa, mas é como uma cerca: protege o sentido, mas deixa as pessoas do lado de fora.” Disse que um bom artigo de jornal começa com uma imagem que o leitor consegue ver e só depois chega aos números.',
        choices: [
          { text: 'Byrja greinina á ísjökunum og selunum.', translation: 'Começar o artigo pelos icebergs e pelas focas.', next: 'drog' },
          { text: 'Byrja greinina á skilgreiningu á afkomu jökla.', translation: 'Começar o artigo com a definição de balanço de massa.', next: 'final_neutro' },
        ],
      },
      drog: {
        emoji: '✍️',
        text: 'Linu skrifaði fyrstu drögin sitjandi á steini við lónið, á meðan ísjaki á stærð við hús snerist hægt á hliðina skammt frá landi. Hann byrjaði á hljóðinu, brestunum og skvettunum þegar jakarnir velta, og kom svo að því að allt þetta vatn hefði verið ís fyrir fáeinum mannsöldrum. Anna las textann og strikaði út eina setningu, þar sem hann hafði skrifað að jökullinn myndi hverfa innan tíu ára. “Þetta segja gögnin ekki”, sagði hún. “Í vísindum skrifum við ekki meira en við vitum, jafnvel þótt það hljómi betur.”',
        translation:
          'O Linu escreveu o primeiro rascunho sentado numa pedra junto à lagoa, enquanto um iceberg do tamanho de uma casa virava devagar de lado, perto da margem. Começou pelo som, os estalos e os respingos quando os blocos tombam, e depois chegou ao fato de que toda aquela água era gelo algumas gerações atrás. A Anna leu o texto e riscou uma frase, em que ele tinha escrito que a geleira ia desaparecer em dez anos. “Os dados não dizem isso”, falou ela. “Em ciência não escrevemos mais do que sabemos, mesmo que soe melhor.”',
        choices: [{ text: 'Laga setninguna og skrifa fyrirsögn.', translation: 'Corrigir a frase e escrever um título.', next: 'fyrirsogn' }],
      },
      fyrirsogn: {
        emoji: '📰',
        text: 'Síðast vantaði fyrirsögn, og ritstjórinn hafði sagt Linu að hún ætti að vekja athygli. Hann skrifaði tvær tillögur í símann og sýndi Önnu: önnur var hófstillt og nákvæm, hin var dramatísk og myndi eflaust fá marga smelli. Anna yppti öxlum og sagði að valið væri hans, en að fyrirsögnin væri það eina sem margir myndu nokkurn tímann lesa. Selur rak höfuðið upp úr lóninu og virtist bíða eftir niðurstöðunni.',
        translation:
          'Por último faltava o título, e o editor tinha dito ao Linu que ele precisava chamar a atenção. O Linu escreveu duas propostas no celular e mostrou à Anna: uma era sóbria e precisa; a outra, dramática, e certamente teria muitos cliques. A Anna deu de ombros e disse que a escolha era dele, mas que o título era a única coisa que muita gente jamais leria. Uma foca pôs a cabeça para fora da lagoa e parecia esperar a decisão.',
        choices: [
          { text: '“Þar sem jökull var áður: lónið sem stækkar ár frá ári”', translation: '“Onde antes havia uma geleira: a lagoa que cresce ano após ano”', next: 'final_bom' },
          { text: '“Jökullinn deyr! Ísland verður íslaust!”', translation: '“A geleira está morrendo! A Islândia vai ficar sem gelo!”', next: 'final_aesi' },
        ],
      },
      final_bom: {
        emoji: '🌊',
        text: 'Greinin birtist viku síðar undir hófstilltu fyrirsögninni, með mynd af selnum á ísjaka. Hún var ekki mest lesna grein vikunnar, en kennari á Höfn notaði hana í kennslu og Anna skrifaði Linu að hún hefði loksins lesið texta um jökulinn sinn sem hún gæti skrifað undir. Í lok greinarinnar hafði Linu sett eina setningu frá henni: “Jökullinn er ekki að deyja á morgun, en hann er að segja okkur eitthvað á hverju ári.” Það var setningin sem flestir deildu.',
        translation:
          'O artigo saiu uma semana depois, com o título sóbrio e uma foto da foca num iceberg. Não foi o texto mais lido da semana, mas uma professora de Höfn o usou em aula, e a Anna escreveu ao Linu dizendo que finalmente tinha lido um texto sobre a sua geleira que ela assinaria embaixo. No fim do artigo, o Linu tinha posto uma frase dela: “A geleira não vai morrer amanhã, mas está nos dizendo alguma coisa todo ano.” Foi a frase que mais gente compartilhou.',
        ending: { tone: 'bom', title: 'Ciência bem contada', message: 'Você entendeu a “afkoma”, respeitou o que os dados dizem e escreveu para o público sem trair a ciência.' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'Linu byrjaði greinina á skilgreiningu: afkoma jökuls er mismunur ákomu og leysingar yfir tiltekið tímabil. Greinin var rétt í hverju smáatriði, en ritstjórinn sagði að flestir lesendur hefðu hætt eftir fyrstu málsgreinina. Anna hughreysti hann og sagði að nákvæmnin væri dyggð, en að í blaðagrein þyrfti hún að ganga á eftir myndinni, ekki á undan henni. Linu lofaði að næst myndi hann byrja á selunum.',
        translation:
          'O Linu começou o artigo com uma definição: o balanço de massa de uma geleira é a diferença entre acumulação e derretimento num determinado período. O texto estava certo em cada detalhe, mas o editor disse que a maioria dos leitores tinha parado depois do primeiro parágrafo. A Anna o consolou, dizendo que a precisão era uma virtude, mas que num artigo de jornal ela precisava vir atrás da imagem, não na frente. O Linu prometeu que da próxima vez começaria pelas focas.',
        ending: { tone: 'neutro', title: 'Exato e ignorado', message: 'Tudo estava certo, mas o tom acadêmico afastou os leitores. Num jornal, a imagem vem antes da definição.' },
      },
      final_aesi: {
        emoji: '📢',
        text: 'Fyrirsögnin fékk fleiri smelli en nokkur önnur grein á vefnum þann mánuðinn. Daginn eftir birtist þó leiðrétting, því að jöklafræðingar bentu á að ekkert í gögnunum gæfi til kynna að landið yrði íslaust í bráð. Anna hringdi í Linu, ekki reið en þreytt, og sagði að svona fyrirsagnir gerðu vísindamönnum erfitt fyrir þegar þeir þyrftu að láta taka sig alvarlega. Linu lærði að athygli er ekki það sama og traust.',
        translation:
          'O título teve mais cliques do que qualquer outro texto do site naquele mês. No dia seguinte, porém, saiu uma correção, porque glaciólogos observaram que nada nos dados indicava que o país ficaria sem gelo tão cedo. A Anna ligou para o Linu, não brava, mas cansada, e disse que títulos assim dificultavam a vida dos cientistas quando eles precisavam ser levados a sério. O Linu aprendeu que atenção não é o mesmo que confiança.',
        ending: { tone: 'neutro', title: 'Clique sem crédito', message: 'O título exagerado chamou atenção, mas foi além do que os dados dizem. No texto científico, o exagero custa a confiança.' },
      },
    },
  },
  {
    id: 'is-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Nóttin sem fjallið opnaðist',
    emoji: '🌋',
    summary: 'Em Heimaey, nas ilhas Vestmannaeyjar, o Linu compara uma notícia de 1973 sobre a erupção com a memória de uma mulher que era criança naquela noite.',
    cultural_context:
      'Em 23 de janeiro de 1973, uma fissura se abriu em Heimaey, a única ilha habitada do arquipélago de Vestmannaeyjar, logo a leste da cidade. Quase todos os cerca de cinco mil moradores foram levados ao continente naquela mesma noite, a maioria em barcos de pesca, que estavam no porto por causa do mau tempo da véspera. Para salvar o porto, bombearam água do mar sobre a lava durante semanas; a erupção terminou no verão e deixou uma montanha nova, o Eldfell.',
    start: 'start',
    glossary: [
      ['eldgos / gjósa', 'erupção / entrar em erupção'],
      ['sprunga', 'fissura'],
      ['hraun / hraunjaðar', 'lava / borda da lava'],
      ['öfugur pýramídi', 'pirâmide invertida (estrutura da notícia)'],
      ['knappur stíll', 'estilo enxuto'],
      ['að dæla sjó', 'bombear água do mar'],
      ['út í Eyjar', 'para as Ilhas (como se diz de Vestmannaeyjar)'],
      ['yfirlestur', 'revisão, leitura prévia'],
    ],
    nodes: {
      start: {
        emoji: '🗞️',
        text: 'Á bókasafninu í Vestmannaeyjum fann Linu gömul dagblöð frá janúar 1973, gulnuð og brothætt. Á forsíðunni stóð með risastóru letri að eldgos væri hafið á Heimaey og að íbúarnir hefðu verið fluttir til lands um nóttina. Linu var að skrifa grein um gosið fyrir tímarit um sögu eyjanna og ætlaði að hitta Guðrúnu, sem var átta ára þegar það hófst. Hann velti fyrir sér hvort hann ætti að lesa fréttina nánar fyrst eða fara beint til hennar.',
        translation:
          'Na biblioteca de Vestmannaeyjar, o Linu encontrou jornais velhos de janeiro de 1973, amarelados e quebradiços. Na primeira página estava escrito, em letras enormes, que uma erupção tinha começado em Heimaey e que os moradores tinham sido levados para o continente durante a noite. O Linu estava escrevendo um artigo sobre a erupção para uma revista de história das ilhas e ia se encontrar com a Guðrún, que tinha oito anos quando tudo começou. Ele se perguntou se devia ler a notícia com mais atenção primeiro ou ir direto falar com ela.',
        choices: [
          { text: 'Lesa fréttina nánar.', translation: 'Ler a notícia com atenção.', next: 'frett' },
          { text: 'Fara beint til Guðrúnar.', translation: 'Ir direto à casa da Guðrún.', next: 'gudrun' },
        ],
      },
      frett: {
        emoji: '📐',
        text: 'Fréttin var skrifuð í knöppum stíl: gos hófst um nóttina austan við bæinn, löng sprunga opnaðist og nær allir íbúar, um fimm þúsund manns, voru fluttir til lands fyrir morgun. Linu tók eftir því að mikilvægustu staðreyndirnar stóðu í fyrstu setningunni og að smáatriðin komu á eftir, eins og í öfugum pýramída. Í þriðju málsgrein var sagt að fiskiskipaflotinn hefði verið í höfn vegna óveðurs daginn áður og að það hefði ráðið úrslitum. Hvergi var eitt einasta orð um tilfinningar fólksins.',
        translation:
          'A notícia era escrita num estilo enxuto: a erupção começou durante a noite, a leste da cidade, uma fissura comprida se abriu, e quase todos os moradores, cerca de cinco mil pessoas, foram levados para o continente antes do amanhecer. O Linu reparou que os fatos mais importantes estavam na primeira frase e que os detalhes vinham depois, como numa pirâmide invertida. No terceiro parágrafo dizia-se que a frota pesqueira estava no porto por causa do temporal da véspera e que isso tinha sido decisivo. Em lugar nenhum havia uma só palavra sobre os sentimentos das pessoas.',
        choices: [{ text: 'Fara til Guðrúnar.', translation: 'Ir até a Guðrún.', next: 'gudrun' }],
      },
      gudrun: {
        emoji: '👵',
        text: 'Guðrún bjó í húsi sem stóð aðeins nokkur hundruð metra frá hraunjaðrinum, og úr eldhúsglugganum sást Eldfell, rauðleitt og ávalt. Hún hellti upp á kaffi og sagði að hún myndi nóttina eins og hún hefði verið í gær. “Mamma vakti mig og sagði að við yrðum að fara niður á bryggju, og ég spurði hvort ég mætti taka dúkkuna mína með”, sagði hún. Hún sagðist muna eftir rauðum himninum, lyktinni og sjóveikinni í bátnum, en ekki eftir því að hún hefði verið hrædd.',
        translation:
          'A Guðrún morava numa casa a poucas centenas de metros da borda da lava, e da janela da cozinha se via o Eldfell, avermelhado e arredondado. Ela passou um café e disse que se lembrava daquela noite como se tivesse sido ontem. “Minha mãe me acordou e disse que tínhamos de descer até o cais, e eu perguntei se podia levar minha boneca”, contou. Disse que se lembrava do céu vermelho, do cheiro e do enjoo no barco, mas não de ter sentido medo.',
        choices: [
          { text: '“Af hverju heldurðu að þú hafir ekki verið hrædd?”', translation: '“Por que você acha que não teve medo?”', next: 'hraedd' },
          { text: '“Hvað varð svo um húsið ykkar?”', translation: '“E o que aconteceu com a casa de vocês?”', next: 'husid' },
        ],
      },
      hraedd: {
        emoji: '🕯️',
        text: 'Guðrún hugsaði sig lengi um áður en hún svaraði. Hún sagði að fullorðna fólkið hefði verið svo rólegt að börnin hefðu ekki skilið hættuna, þótt hún vissi núna að margir foreldrar hefðu verið skelfingu lostnir. “Það er það sem ég hugsa mest um í dag: hvað það kostaði þau að brosa til okkar þessa nótt”, sagði hún. Linu skrifaði setninguna niður orðrétt og fann að hún sagði meira en heil blaðsíða af tölum.',
        translation:
          'A Guðrún pensou muito antes de responder. Disse que os adultos estavam tão calmos que as crianças não entenderam o perigo, embora ela soubesse agora que muitos pais estavam apavorados. “É nisso que eu mais penso hoje: quanto custou a eles sorrir para nós naquela noite”, disse. O Linu anotou a frase palavra por palavra e sentiu que ela dizia mais do que uma página inteira de números.',
        choices: [{ text: '“Og húsið?”', translation: '“E a casa?”', next: 'husid' }],
      },
      husid: {
        emoji: '🏚️',
        text: 'Guðrún sagði að húsið þeirra hefði farið undir hraun í mars, eftir að fjölskyldan hafði búið hjá ættingjum í Reykjavík í tvo mánuði. Hún útskýrði að menn hefðu dælt sjó á hraunið vikum saman til að kæla það og bjarga höfninni, og að það hefði tekist, þótt mörg hús austast í bænum hefðu farið. Gosinu lauk um sumarið og fjölskyldan flutti aftur út í Eyjar, eins og flestir, en ekki allir. “Pabbi sagði alltaf að fjallið hefði tekið húsið en gefið okkur nýtt fjall í staðinn”, sagði hún og brosti.',
        translation:
          'A Guðrún contou que a casa deles ficou soterrada pela lava em março, depois de a família ter passado dois meses na casa de parentes em Reykjavík. Explicou que os homens bombearam água do mar sobre a lava durante semanas para resfriá-la e salvar o porto, e que deu certo, embora muitas casas da parte leste da cidade tenham se perdido. A erupção terminou no verão e a família voltou para as Ilhas, como a maioria, mas não todos. “Meu pai sempre dizia que a montanha levou a casa, mas nos deu uma montanha nova no lugar”, disse ela, sorrindo.',
        choices: [
          {
            text: '“Svo að sjórinn eyðilagði höfnina?”',
            translation: '“Então o mar destruiu o porto?”',
            wrong: 'Foi o contrário: os homens bombearam água do mar sobre a lava “til að kæla það og bjarga höfninni” — para resfriá-la e salvar o porto. E “það hefði tekist”: deu certo. A água do mar salvou o porto.',
          },
          { text: 'Þakka henni og fara heim að skrifa.', translation: 'Agradecer e ir para casa escrever.', next: 'skrif' },
        ],
      },
      skrif: {
        emoji: '🖋️',
        text: 'Um kvöldið skrifaði Linu greinina og reyndi að sameina tvo heima: knappar staðreyndir gömlu fréttarinnar og rödd Guðrúnar. Hann byrjaði á dúkkunni og rauða himninum, setti tölurnar í aðra málsgrein og lauk greininni á orðum föður hennar um fjallið. Í flýtinum skrifaði hann að hún hefði verið níu ára þessa nótt. Nú þurfti hann að ákveða hvort hann sendi Guðrúnu greinina til yfirlestrar eða beint til ritstjórans, sem vildi fá hana strax.',
        translation:
          'À noite o Linu escreveu o artigo tentando unir dois mundos: os fatos enxutos da notícia antiga e a voz da Guðrún. Começou pela boneca e pelo céu vermelho, pôs os números no segundo parágrafo e terminou o texto com as palavras do pai dela sobre a montanha. Na pressa, escreveu que ela tinha nove anos naquela noite. Agora precisava decidir se mandava o artigo para a Guðrún revisar ou direto para o editor, que o queria imediatamente.',
        choices: [
          { text: 'Senda Guðrúnu greinina fyrst.', translation: 'Mandar o artigo primeiro para a Guðrún.', next: 'final_bom' },
          { text: 'Senda hana beint til ritstjórans.', translation: 'Mandar direto para o editor.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🖼️',
        text: 'Guðrún hringdi morguninn eftir, klökk í röddinni, og sagði að greinin væri falleg, en að eitt væri rangt: hún hefði verið átta ára þessa nótt, ekki níu. Linu lagaði villuna, og þegar greinin birtist í tímaritinu var hún bæði nákvæm og hlý. Guðrún rammaði hana inn og hengdi á vegginn við eldhúsgluggann, beint á móti Eldfelli. Linu skildi að góð blaðamennska snýst ekki aðeins um staðreyndir, heldur líka um virðingu fyrir fólkinu sem á söguna.',
        translation:
          'A Guðrún ligou na manhã seguinte, com a voz embargada, e disse que o artigo estava bonito, mas que havia uma coisa errada: ela tinha oito anos naquela noite, não nove. O Linu corrigiu o erro, e quando o artigo saiu na revista estava ao mesmo tempo preciso e caloroso. A Guðrún o emoldurou e pendurou na parede ao lado da janela da cozinha, bem de frente para o Eldfell. O Linu entendeu que o bom jornalismo não é feito só de fatos, mas também de respeito pelas pessoas a quem a história pertence.',
        ending: { tone: 'bom', title: 'Fatos e voz', message: 'Você juntou a pirâmide invertida da notícia com a memória da Guðrún — e deixou a dona da história conferir o texto.' },
      },
      final_neutro: {
        emoji: '📉',
        text: 'Ritstjórinn var ánægður og greinin birtist daginn eftir, en Guðrún hringdi og var sár. Linu hafði skrifað að hún hefði verið níu ára, og hún sagði að þetta væri nóttin sem hún myndi aldrei gleyma og að hvert einasta smáatriði skipti hana máli. Leiðréttingin birtist í næsta hefti, lítil og neðst á síðu. Linu lærði að sá sem segir manni sögu sína á skilið að lesa hana áður en hún fer í prentun.',
        translation:
          'O editor ficou satisfeito e o artigo saiu no dia seguinte, mas a Guðrún ligou magoada. O Linu tinha escrito que ela tinha nove anos, e ela disse que aquela era a noite que nunca esqueceria e que cada detalhe importava para ela. A correção saiu na edição seguinte, pequena e no pé da página. O Linu aprendeu que quem nos conta a própria história merece lê-la antes de ela ir para a gráfica.',
        ending: { tone: 'neutro', title: 'Pressa de fechamento', message: 'O texto era bom, mas um detalhe errado magoou quem contou a história. Mostrar a matéria à fonte evita isso.' },
      },
    },
  },
  {
    id: 'is-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Hvers vegna gýs Strokkur?',
    emoji: '⛲',
    summary: 'Em Haukadalur, junto ao Geysir e ao Strokkur, um geólogo explica ao Linu a física dos gêiseres e o desafia a escrever uma placa para os turistas.',
    cultural_context:
      'O Geysir, em Haukadalur, deu nome aos gêiseres do mundo inteiro: a palavra vem do verbo islandês “geysa”, jorrar com ímpeto. Hoje o Geysir raramente entra em erupção, e sua atividade já mudou várias vezes com terremotos; ao lado dele, o Strokkur jorra a cada poucos minutos, lançando água a cerca de vinte metros de altura.',
    start: 'start',
    glossary: [
      ['goshver', 'gêiser'],
      ['að gjósa (gýs, gaus)', 'entrar em erupção, jorrar'],
      ['suðumark', 'ponto de ebulição'],
      ['þrýstingur', 'pressão'],
      ['rás', 'canal, conduto'],
      ['hverahrúður', 'crosta mineral (sílica) em volta das fontes termais'],
      ['óvissumörk', 'margem de incerteza'],
      ['fræðirit', 'publicação científica'],
    ],
    nodes: {
      start: {
        emoji: '📸',
        text: 'Í Haukadal stóð hópur ferðamanna í hring í kringum Strokk og beið með símana á lofti. Linu var þar með Einari, jarðfræðingi sem hélt stutta fyrirlestra fyrir nemendur á staðnum, og vatnið í skálinni ólgaði og sökk á víxl. Allt í einu lyftist blá kúla upp úr vatninu og sprakk í háa gufusúlu, og hópurinn æpti af hrifningu. “Þetta voru um tuttugu metrar”, sagði Einar rólega, “og eftir nokkrar mínútur gerist það aftur.” Linu spurði hvers vegna goshverinn gysi svona reglulega.',
        translation:
          'Em Haukadalur, um grupo de turistas formava uma roda em volta do Strokkur e esperava com os celulares no alto. O Linu estava lá com o Einar, um geólogo que dava palestras curtas para estudantes no local, e a água da bacia borbulhava e baixava, alternadamente. De repente, uma bolha azul subiu da água e explodiu numa coluna alta de vapor, e o grupo gritou de encanto. “Foram uns vinte metros”, disse o Einar com calma, “e daqui a alguns minutos acontece de novo.” O Linu perguntou por que o gêiser jorrava com tanta regularidade.',
        choices: [
          { text: 'Hlusta á útskýringu Einars.', translation: 'Ouvir a explicação do Einar.', next: 'skyring' },
          { text: '“Og hvað með Geysi sjálfan?”', translation: '“E o próprio Geysir?”', next: 'geysir' },
        ],
      },
      geysir: {
        emoji: '💤',
        text: 'Einar benti á stóra, kyrra skál skammt frá og sagði að þarna væri sjálfur Geysir, sem hefði gefið goshverum um allan heim nafn sitt. Orðið væri dregið af sögninni að geysa, sem merkir að þjóta eða æða áfram. Hann bætti við að Geysir gysi sjaldan nú á dögum og að virkni hans hefði í aldanna rás breyst við jarðskjálfta, sem ýmist opnuðu eða lokuðu rásum í berginu. “Hann er eins og gamall söngvari sem syngur bara þegar honum sýnist”, sagði Einar.',
        translation:
          'O Einar apontou para uma bacia grande e tranquila ali perto e disse que aquele era o próprio Geysir, que deu nome aos gêiseres do mundo inteiro. A palavra vem do verbo “geysa”, que significa lançar-se ou avançar com ímpeto. Acrescentou que o Geysir raramente jorra hoje em dia e que sua atividade tinha mudado ao longo dos séculos com os terremotos, que ora abriam, ora fechavam canais na rocha. “Ele é como um velho cantor que só canta quando lhe dá vontade”, disse o Einar.',
        choices: [{ text: 'Spyrja hvernig gos virkar yfirleitt.', translation: 'Perguntar como uma erupção funciona, afinal.', next: 'skyring' }],
      },
      skyring: {
        emoji: '🌡️',
        text: 'Einar dró upp mynd í mölina með priki: mjó rás sem nær djúpt niður í heitt bergið og er full af vatni. “Neðst í rásinni er vatnið heitara en hundrað gráður, en það sýður ekki, því að þrýstingurinn frá vatninu fyrir ofan heldur því niðri”, sagði hann. “Þegar vatnið nær loks suðumarki einhvers staðar myndast gufa sem ýtir vatni upp úr rásinni; þá fellur þrýstingurinn og öll súlan breytist í gufu á augabragði.” Hann glotti og bætti við: “Í fræðiriti segjum við að þrýstingslækkunin valdi skyndisuðu; hér segi ég bara: búmm.”',
        translation:
          'O Einar desenhou com um graveto no cascalho: um canal estreito que desce fundo na rocha quente e está cheio de água. “No fundo do canal a água está a mais de cem graus, mas não ferve, porque a pressão da água de cima a segura”, disse. “Quando a água finalmente atinge o ponto de ebulição em algum lugar, forma-se vapor, que empurra água para fora do canal; aí a pressão cai e a coluna inteira vira vapor num instante.” Ele sorriu e acrescentou: “Num artigo científico dizemos que a queda de pressão provoca uma ebulição súbita; aqui eu digo só: bum.”',
        choices: [
          {
            text: '“Svo vatnið sýður ekki af því að það er of kalt?”',
            translation: '“Então a água não ferve porque está fria demais?”',
            wrong: 'O Einar disse o contrário: no fundo do canal a água está a MAIS de cem graus (“heitara en hundrað gráður”), mas não ferve porque a pressão da água de cima a segura. Quando a pressão cai, tudo vira vapor de uma vez.',
          },
          { text: '“Er hægt að spá fyrir um gosin?”', translation: '“Dá para prever as erupções?”', next: 'spa' },
        ],
      },
      spa: {
        emoji: '⏲️',
        text: 'Einar sagði að mælingar bentu til þess að tíminn á milli gosa í Strokki væri nokkuð reglulegur, en þó aldrei alveg sá sami. Hann útskýrði muninn á því að segja að eitthvað gerist oft og því að setja fram mælanlega fullyrðingu með óvissumörkum. “Ferðamaður segir að Strokkur gjósi á fimm mínútna fresti; vísindamaður segir að meðalbilið sé svo og svo margar mínútur, með tilteknu fráviki”, sagði hann. Linu hló og sagði að ferðamaðurinn væri nú skemmtilegri.',
        translation:
          'O Einar disse que as medições indicam que o intervalo entre as erupções do Strokkur é bastante regular, mas nunca exatamente o mesmo. Explicou a diferença entre dizer que algo acontece com frequência e fazer uma afirmação mensurável, com margem de incerteza. “O turista diz que o Strokkur jorra a cada cinco minutos; o cientista diz que o intervalo médio é de tantos minutos, com tal desvio”, disse. O Linu riu e disse que o turista era bem mais divertido.',
        choices: [{ text: '“Hvað ógnar svæðinu mest?”', translation: '“O que mais ameaça a área?”', next: 'ahrif' }],
      },
      ahrif: {
        emoji: '⚠️',
        text: 'Einar sagði að áður fyrr hefðu menn jafnvel sett sápu í Geysi til að fá hann til að gjósa fyrir gesti, en að slíkt væri löngu hætt. Nú væri helsta áhyggjuefnið ferðamenn sem færu út fyrir stígana og brenndu sig eða skemmdu viðkvæmt hverahrúðrið. Hann spurði Linu hvort hann vildi hjálpa sér að semja upplýsingaskilti fyrir svæðið, á íslensku, ensku og portúgölsku. “Stutt, nákvæmt og án þess að hræða fólk burt”, sagði hann.',
        translation:
          'O Einar contou que antigamente chegaram a pôr sabão no Geysir para fazê-lo jorrar para os visitantes, mas que isso tinha acabado havia muito tempo. Agora a maior preocupação eram os turistas que saíam das trilhas e se queimavam ou danificavam a frágil crosta mineral. Perguntou ao Linu se ele queria ajudá-lo a redigir uma placa informativa para a área, em islandês, inglês e português. “Curta, precisa e sem espantar as pessoas”, disse.',
        choices: [{ text: 'Setjast niður og byrja.', translation: 'Sentar e começar.', next: 'skilti' }],
      },
      skilti: {
        emoji: '🪧',
        text: 'Þeir settust á bekk og Linu skrifaði fyrstu tillöguna á blað: fyrirsögn, tvær setningar um það hvers vegna Strokkur gýs og ein setning um hættuna. Einar las hana og sagði að hún væri góð, en spurði hvort ekki ætti að bæta við sögu Geysis, efnasamsetningu hverahrúðursins og nákvæmu meðalbilinu milli gosa. Linu horfði á ferðamennina sem stóðu og biðu, flestir með barn í annarri hendi og símann í hinni.',
        translation:
          'Os dois se sentaram num banco, e o Linu escreveu a primeira proposta numa folha: um título, duas frases sobre por que o Strokkur jorra e uma frase sobre o perigo. O Einar leu e disse que estava boa, mas perguntou se não deviam acrescentar a história do Geysir, a composição química da crosta mineral e o intervalo médio exato entre as erupções. O Linu olhou para os turistas que esperavam de pé, a maioria com uma criança numa mão e o celular na outra.',
        choices: [
          { text: 'Halda skiltinu stuttu og bæta aðeins hitastiginu við.', translation: 'Manter a placa curta e acrescentar só a temperatura.', next: 'final_bom' },
          { text: 'Setja allt á skiltið.', translation: 'Pôr tudo na placa.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '✅',
        text: 'Skiltið varð stutt: “Djúpt niðri er vatnið í Strokki heitara en 100 °C. Þegar þrýstingurinn fellur breytist það í gufu á augabragði. Farðu aldrei út fyrir stíginn.” Undir stóð sami texti á ensku og portúgölsku, og nokkrum vikum seinna sá Linu á netinu mynd af brasilískri fjölskyldu sem las skiltið og stóð kyrr á stígnum. Einar sendi honum skilaboð og sagði að fræðimaður hefði skrifað tíu línur, en að ein góð lína gerði meira gagn.',
        translation:
          'A placa ficou curta: “No fundo, a água do Strokkur passa dos 100 °C. Quando a pressão cai, ela vira vapor num instante. Nunca saia da trilha.” Embaixo vinha o mesmo texto em inglês e em português, e algumas semanas depois o Linu viu na internet a foto de uma família brasileira lendo a placa, parada na trilha. O Einar lhe mandou uma mensagem dizendo que um acadêmico teria escrito dez linhas, mas que uma linha boa fazia mais efeito.',
        ending: { tone: 'bom', title: 'Ciência de bolso', message: 'Você entendeu a física do gêiser e transformou o jargão acadêmico em três frases que protegem as pessoas.' },
      },
      final_neutro: {
        emoji: '📚',
        text: 'Skiltið varð fallegt og vandað, með línuriti, efnaformúlum og tilvísunum í þrjár fræðigreinar. Einar var stoltur af því, en þegar þeir komu aftur viku seinna sáu þeir að nær enginn las lengra en fyrirsögnina. Maður í sandölum steig yfir kaðalinn til að ná betri mynd, beint fyrir framan skiltið sem varaði við því. Linu áttaði sig á því að nákvæmur texti er gagnslaus ef enginn les hann.',
        translation:
          'A placa ficou bonita e caprichada, com gráfico, fórmulas químicas e referências a três artigos científicos. O Einar ficou orgulhoso, mas quando voltaram uma semana depois viram que quase ninguém lia além do título. Um homem de sandálias passou por cima da corda para tirar uma foto melhor, bem na frente da placa que alertava justamente contra isso. O Linu percebeu que um texto preciso não serve para nada se ninguém o lê.',
        ending: { tone: 'neutro', title: 'Placa de tese', message: 'Tudo certo cientificamente, mas longo demais para quem está de passagem. Texto técnico precisa saber quem é o leitor.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'is-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Með lögum skal land byggja',
    emoji: '⚖️',
    summary: 'Em Þingvellir, um velho estudioso de manuscritos leva o Linu até a Rocha da Lei e lhe mostra a frase mais famosa da Njáls saga e a história do homem que pensou debaixo da capa.',
    cultural_context:
      'O Alþingi, a assembleia dos islandeses, reuniu-se pela primeira vez em Þingvellir por volta de 930; ali o “lögsögumaður” (o recitador da lei) declamava as leis de memória a partir da Lögberg, a Rocha da Lei. Segundo a Íslendingabók, de Ari, o Sábio, foi também em Þingvellir que, por volta do ano 1000, os islandeses adotaram o cristianismo, depois que o chefe Þorgeir passou um dia e uma noite deitado debaixo da sua capa antes de dar o veredito.',
    start: 'start',
    glossary: [
      ['lögsögumaður', 'o recitador da lei, que declamava as leis de cor'],
      ['að segja upp lögin', 'recitar as leis'],
      ['Með lögum skal land vort byggja en með ólögum eyða.', 'Com leis se deve construir a nossa terra, e com a falta de leis, destruí-la. (Njáls saga)'],
      ['ólög', 'ilegalidade, injustiça (o contrário de “lög”)'],
      ['að liggja undir feldi', 'refletir longamente antes de decidir (lit.: ficar deitado debaixo da capa)'],
      ['búðatóftir', 'ruínas das cabanas de quem vinha à assembleia'],
      ['að skera úr', 'decidir, arbitrar'],
      ['gjá', 'fenda (como a Almannagjá)'],
    ],
    nodes: {
      start: {
        emoji: '🪨',
        text: 'Linu kom til Þingvalla snemma morguns, áður en rúturnar tóku að streyma að, og gekk niður Almannagjá milli hárra hamraveggja. Þar hitti hann Þorstein, aldraðan fræðimann sem hafði varið ævinni í að lesa handrit, og sá gamli bauð honum að ganga með sér að Lögbergi. “Hér stóð lögsögumaðurinn og sagði upp lögin, og engin bók var til að styðjast við, aðeins minnið”, sagði Þorsteinn. Hann benti yfir völlinn, þar sem enn mótar fyrir búðatóftum í grasinu. “Hér komu menn saman á hverju sumri í meira en átta aldir”, bætti hann við.',
        translation:
          'O Linu chegou a Þingvellir de manhã cedo, antes que os ônibus começassem a chegar, e desceu pela Almannagjá, entre altas paredes de rocha. Lá encontrou o Þorsteinn, um velho estudioso que tinha passado a vida lendo manuscritos, e o ancião o convidou a caminhar com ele até a Lögberg. “Aqui ficava o recitador da lei e declamava as leis, sem nenhum livro para se apoiar, só a memória”, disse o Þorsteinn. Apontou para a planície, onde ainda se veem no capim os contornos das ruínas das cabanas. “Aqui as pessoas se reuniram todo verão por mais de oito séculos”, acrescentou.',
        choices: [
          { text: '“Hvernig gat einn maður munað öll lögin?”', translation: '“Como um homem só conseguia lembrar todas as leis?”', next: 'minni' },
          { text: '“Er einhver setning úr sögunum sem tengist þessum stað?”', translation: '“Há alguma frase das sagas ligada a este lugar?”', next: 'njala' },
        ],
      },
      minni: {
        emoji: '🧠',
        text: 'Þorsteinn sagði að lögsögumaðurinn hefði átt að segja upp þriðjung laganna á hverju þingi, svo að öll lögin heyrðust á þremur árum. Hann hefði lært þau af fyrirrennara sínum, orð fyrir orð, eins og menn lærðu kvæði. “Minnið var bókasafn þjóðarinnar áður en bókfellið kom”, sagði hann. Svo rifjaði hann upp að lögin hefðu verið skrifuð niður í fyrsta sinn veturinn 1117 til 1118, á bæ einum í Húnaþingi. “Bókin tók við af minninu, en virðingin fyrir orðinu fylgdi með”, sagði hann.',
        translation:
          'O Þorsteinn contou que o recitador da lei devia declamar um terço das leis a cada assembleia, de modo que todas as leis fossem ouvidas em três anos. Ele as aprendia com o antecessor, palavra por palavra, como se aprendiam os poemas. “A memória era a biblioteca do povo antes de chegar o pergaminho”, disse. Depois lembrou que as leis foram escritas pela primeira vez no inverno de 1117 para 1118, numa fazenda de Húnaþing. “O livro substituiu a memória, mas o respeito pela palavra veio junto”, disse ele.',
        choices: [{ text: '“Er einhver setning úr sögunum um lögin?”', translation: '“Há alguma frase das sagas sobre as leis?”', next: 'njala' }],
      },
      njala: {
        emoji: '📜',
        text: 'Þorsteinn nam staðar og sagði að ein setning úr Njáls sögu væri kunnari en flestar aðrar, og hann fór með hana hægt: “Með lögum skal land vort byggja en með ólögum eyða.” Njáll sjálfur mælti þessi orð, sagði hann, maður sem kunni lögin betur en nokkur annar og var þó brenndur inni að lokum. Þorsteinn benti á að í sögunni gerast mörg stórtíðindi einmitt hér á þinginu, þar sem deilur manna ýmist leystust eða hörðnuðu. “Sagan kennir að lögin eru aðeins jafnsterk og viljinn til að hlíta þeim”, sagði hann.',
        translation:
          'O Þorsteinn parou e disse que uma frase da Njáls saga era mais conhecida que quase todas as outras, e a recitou devagar: “Com leis se deve construir a nossa terra, e com a falta de leis, destruí-la.” Foi o próprio Njáll quem disse essas palavras, contou ele, um homem que conhecia as leis melhor do que ninguém e, mesmo assim, acabou queimado dentro de casa. O Þorsteinn observou que na saga muitos acontecimentos decisivos se passam justamente ali, na assembleia, onde as disputas ora se resolviam, ora se acirravam. “A saga ensina que as leis só são tão fortes quanto a vontade de obedecê-las”, disse ele.',
        choices: [
          {
            text: '“Svo lögin eyða landinu?”',
            translation: '“Então as leis destroem a terra?”',
            wrong: 'A frase diz o contrário: com “lög” (leis) se constrói a terra, e com “ólög” — a falta de lei, a injustiça — ela é destruída. O prefixo “ó-” nega, como o nosso “in-” ou “des-”.',
          },
          { text: '“Og hvað gerðist hér árið 1000?”', translation: '“E o que aconteceu aqui no ano 1000?”', next: 'kristni' },
        ],
      },
      kristni: {
        emoji: '⛪',
        text: 'Þorsteinn sagði frá því, eftir Íslendingabók Ara fróða, að þjóðin hefði verið á barmi klofnings milli kristinna manna og heiðinna þegar Þorgeiri Ljósvetningagoða var falið að skera úr. Þorgeir lagðist niður, breiddi feld sinn yfir sig og lá þannig allan daginn og nóttina eftir, án þess að mæla orð. Síðan gekk hann að Lögbergi og kvað upp úrskurð sinn: allir skyldu hafa ein lög og einn sið, og landsmenn tóku kristni. “Þaðan kemur orðatiltækið að liggja undir feldi, þegar menn hugsa sig vandlega um”, sagði Þorsteinn.',
        translation:
          'O Þorsteinn contou, segundo a Íslendingabók de Ari, o Sábio, que o povo estava à beira de se dividir entre cristãos e pagãos quando coube a Þorgeir, o chefe de Ljósavatn, arbitrar a questão. Þorgeir se deitou, cobriu-se com a sua capa e ficou assim o dia inteiro e a noite seguinte, sem dizer uma palavra. Depois foi até a Lögberg e deu o seu veredito: todos deviam ter uma só lei e uma só religião, e os habitantes do país adotaram o cristianismo. “Daí vem a expressão ‘ficar debaixo da capa’, quando alguém pensa com muito cuidado”, disse o Þorsteinn.',
        choices: [{ text: 'Ganga áfram með Þorsteini eftir gjánni.', translation: 'Seguir com o Þorsteinn pela fenda.', next: 'gja' }],
      },
      gja: {
        emoji: '🌍',
        text: 'Þeir gengu áfram eftir gjánni, og Þorsteinn lagði lófann á kaldan hamarinn. Hann sagði að hér mættust tveir flekar jarðskorpunnar sem færðust hægt hvor frá öðrum, svo að landið sjálft væri í sífelldri klofnun. “Það er einkennilegt að þjóðin skyldi velja einmitt þennan stað til að halda sér saman”, sagði hann. “Kannski vissu forfeður okkar að það sem klofnar þarf mest á lögum að halda.”',
        translation:
          'Os dois seguiram pela fenda, e o Þorsteinn encostou a palma da mão na rocha fria. Contou que ali se encontravam duas placas da crosta terrestre, que se afastam devagar uma da outra, de modo que a própria terra está sempre se partindo. “É curioso que o povo tenha escolhido justamente este lugar para se manter unido”, disse. “Talvez nossos antepassados soubessem que o que se parte é o que mais precisa de leis.”',
        choices: [{ text: 'Spyrja hvað Þorsteinn myndi sjálfur hugsa undir feldinum.', translation: 'Perguntar em que o próprio Þorsteinn pensaria debaixo da capa.', next: 'feldur' }],
      },
      feldur: {
        emoji: '🧥',
        text: 'Þorsteinn hló og sagði að hann hefði legið undir feldi allt sitt líf án þess að komast að nokkurri niðurstöðu. Svo varð hann alvarlegri og sagði að það sem hann dáðist mest að væri ekki úrskurðurinn sjálfur, heldur að menn skyldu hafa sætt sig við hann. “Þorgeir sá að ef lögin yrðu tvenn yrði friðurinn enginn”, sagði hann, og vindurinn gnauðaði í gjánni. Hann spurði Linu hvort hann vildi fara með orð Njáls sjálfur, standandi við Lögberg, eins og menn gerðu forðum. Á pallinum voru nú fyrstu ferðamenn dagsins komnir með myndavélarnar.',
        translation:
          'O Þorsteinn riu e disse que tinha passado a vida inteira debaixo da capa sem chegar a conclusão nenhuma. Depois ficou mais sério e disse que o que mais admirava não era o veredito em si, mas o fato de as pessoas o terem aceitado. “Þorgeir viu que, se houvesse duas leis, não haveria paz nenhuma”, disse, e o vento uivava na fenda. Perguntou ao Linu se ele queria recitar ele mesmo as palavras de Njáll, de pé junto à Lögberg, como se fazia antigamente. Na plataforma já estavam os primeiros turistas do dia com suas câmeras.',
        choices: [
          { text: 'Fara með orðin, lágt en skýrt.', translation: 'Recitar as palavras, baixo mas com clareza.', next: 'final_bom' },
          { text: 'Hrópa orðin eins hátt og hann getur, svo að ferðamennirnir heyri.', translation: 'Gritar as palavras o mais alto que puder, para os turistas ouvirem.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Linu steig fram og fór með setninguna lágt en skýrt: “Með lögum skal land vort byggja en með ólögum eyða.” Hamraveggurinn bar röddina lengra en hann hafði búist við, og nokkrir ferðamenn sneru sér við og þögnuðu. Þorsteinn kinkaði kolli og sagði að Njáll hefði ekki gert betur, enda hefði hann haft tíu öldum skemmri tíma til að æfa sig. Þegar þeir gengu upp úr gjánni sagði hann að Linu hefði nú talað við Lögberg og væri því orðinn hluti af sögu staðarins, þótt lítill væri. Linu vissi að það voru ýkjur, en fallegar ýkjur.',
        translation:
          'O Linu deu um passo à frente e recitou a frase baixo, mas com clareza: “Com leis se deve construir a nossa terra, e com a falta de leis, destruí-la.” A parede de rocha levou a voz mais longe do que ele esperava, e alguns turistas se viraram e ficaram em silêncio. O Þorsteinn assentiu e disse que nem o Njáll teria feito melhor, afinal ele tinha tido dez séculos a menos para treinar. Quando subiram da fenda, disse que o Linu agora tinha falado na Rocha da Lei e, por isso, fazia parte da história do lugar, por menor que fosse essa parte. O Linu sabia que era exagero, mas um exagero bonito.',
        ending: { tone: 'bom', title: 'Voz na Rocha da Lei', message: 'Você entendeu Njáll, o “ólög” e a história do homem debaixo da capa — e disse a frase no lugar onde ela ecoou por séculos.' },
      },
      final_neutro: {
        emoji: '📣',
        text: 'Linu hrópaði setninguna svo hátt að hún bergmálaði í gjánni og hópur ferðamanna hrökk við. Landvörður kom gangandi og bað hann vinsamlegast að hafa hægt um sig, þar sem þetta væri helgur staður í augum þjóðarinnar. Þorsteinn brosti út í annað og sagði að lögsögumennirnir hefðu reyndar líka þurft að brýna raustina, en að þeir hefðu haft umboð til þess. Á leiðinni upp úr gjánni hugsaði Linu með sér að það væri eitt að kunna orðin og annað að skilja staðinn.',
        translation:
          'O Linu gritou a frase tão alto que ela ecoou na fenda, e um grupo de turistas levou um susto. Um guarda-parque veio andando e pediu, gentilmente, que ele falasse mais baixo, já que aquele era um lugar sagrado aos olhos da nação. O Þorsteinn deu um sorriso de canto e disse que os recitadores da lei, na verdade, também precisavam levantar a voz, mas tinham mandato para isso. Subindo da fenda, o Linu pensou consigo que uma coisa era saber as palavras, outra era entender o lugar.',
        ending: { tone: 'neutro', title: 'Grito na fenda', message: 'Você sabia a frase, mas esqueceu o respeito pelo lugar. Em Þingvellir, a história fala baixo.' },
      },
    },
  },
  {
    id: 'is-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Nú andar suðrið',
    emoji: '🪶',
    summary: 'No Dia da Língua Islandesa, o Linu visita Hraun, no vale de Öxnadalur, onde nasceu o poeta Jónas Hallgrímsson, e aprende a ler um verso dele.',
    cultural_context:
      'Jónas Hallgrímsson nasceu em 16 de novembro de 1807 na fazenda Hraun, no vale de Öxnadalur, no norte da Islândia, e morreu em Copenhague em 1845, aos 37 anos. Poeta e naturalista, fundou com amigos a revista Fjölnir e é um dos maiores nomes da literatura islandesa; desde 1996 o seu aniversário é comemorado como o Dia da Língua Islandesa (Dagur íslenskrar tungu). Em 1946 seus restos mortais foram trasladados para Þingvellir.',
    start: 'start',
    glossary: [
      ['Dagur íslenskrar tungu', 'Dia da Língua Islandesa (16 de novembro)'],
      ['að yrkja (orti, ort)', 'compor poesia'],
      ['að fara með ljóð', 'recitar um poema'],
      ['Nú andar suðrið sæla vindum þýðum', 'Agora o bendito sul sopra ventos suaves (1º verso de “Ég bið að heilsa”)'],
      ['þýður', 'suave, brando'],
      ['bragarháttur', 'métrica, forma poética'],
      ['jarðneskar leifar', 'restos mortais'],
      ['utanbókar', 'de cor'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Sextánda nóvember, á degi íslenskrar tungu, ók Linu inn Öxnadal í fyrsta snjó vetrarins. Hann var á leið að Hrauni, bænum þar sem Jónas Hallgrímsson fæddist árið 1807, og yfir dalnum gnæfði Hraundrangi, hvass og svartur við hvítan himininn. Á hlaðinu beið hans Ragnheiður, kennari á eftirlaunum, sem hafði boðist til að sýna honum staðinn. “Hér fæddist maðurinn sem kenndi okkur að sjá landið með nýjum augum”, sagði hún og tók í hönd hans. “En komdu inn, kaffið bíður.”',
        translation:
          'No dia 16 de novembro, Dia da Língua Islandesa, o Linu entrou de carro no vale de Öxnadalur debaixo da primeira neve do inverno. Ia para Hraun, a fazenda onde Jónas Hallgrímsson nasceu em 1807, e acima do vale se erguia o Hraundrangi, pontudo e negro contra o céu branco. No pátio o esperava a Ragnheiður, professora aposentada, que tinha se oferecido para lhe mostrar o lugar. “Aqui nasceu o homem que nos ensinou a ver a nossa terra com outros olhos”, disse ela, apertando-lhe a mão. “Mas entre, o café está esperando.”',
        choices: [
          { text: '“Af hverju er dagur íslenskrar tungu einmitt í dag?”', translation: '“Por que o Dia da Língua Islandesa é justamente hoje?”', next: 'dagur' },
          { text: '“Hvernig var ævi hans?”', translation: '“Como foi a vida dele?”', next: 'aevi' },
        ],
      },
      dagur: {
        emoji: '🎂',
        text: 'Ragnheiður sagði að dagurinn hefði verið haldinn hátíðlegur á afmælisdegi Jónasar síðan 1996, því að fá skáld hefðu mótað nútímamálið jafn mikið. Hún sagði að hann hefði ekki aðeins verið skáld, heldur líka náttúrufræðingur, og að í ljóðum hans rynnu vísindi og fegurð saman. “Hann gekk um landið með hamar í annarri hendinni og penna í hinni”, sagði hún. Hún bætti við að hann hefði ásamt félögum sínum gefið út tímaritið Fjölni, sem barðist fyrir fegurra máli og frelsi landsins.',
        translation:
          'A Ragnheiður contou que o dia era comemorado no aniversário de Jónas desde 1996, porque poucos poetas tinham moldado tanto a língua moderna. Disse que ele não tinha sido só poeta, mas também naturalista, e que nos poemas dele a ciência e a beleza se misturavam. “Ele andava pelo país com um martelo numa mão e uma caneta na outra”, disse. Acrescentou que ele, com os amigos, tinha publicado a revista Fjölnir, que lutava por uma língua mais bela e pela liberdade do país.',
        choices: [{ text: '“Og hvernig var ævi hans?”', translation: '“E como foi a vida dele?”', next: 'aevi' }],
      },
      aevi: {
        emoji: '🕯️',
        text: 'Ragnheiður sagði að Jónas hefði misst föður sinn ungur, þegar faðirinn drukknaði í vatni hér skammt frá, og að hann hefði síðar stundað nám í Bessastaðaskóla og í Kaupmannahöfn. Hann hefði ferðast víða um landið og rannsakað náttúru þess, en búið síðustu árin í Kaupmannahöfn, fátækur og oft veikur. Þar hefði hann dottið í stiga vorið 1845, fótbrotnað og dáið nokkrum dögum síðar, aðeins 37 ára gamall. “Og þó lifir hann í hverju íslensku barni sem lærir ljóðin hans utanbókar”, sagði hún.',
        translation:
          'A Ragnheiður contou que Jónas perdeu o pai cedo, quando o pai se afogou num lago ali perto, e que depois estudou na escola de Bessastaðir e em Copenhague. Viajou muito pelo país estudando a natureza, mas passou os últimos anos em Copenhague, pobre e muitas vezes doente. Lá caiu de uma escada na primavera de 1845, quebrou a perna e morreu alguns dias depois, com apenas 37 anos. “E mesmo assim ele vive em cada criança islandesa que aprende os poemas dele de cor”, disse ela.',
        choices: [
          {
            text: '“Svo Jónas dó gamall hér í Öxnadal?”',
            translation: '“Então Jónas morreu velho aqui em Öxnadalur?”',
            wrong: 'A Ragnheiður contou que Jónas morreu em Copenhague (“í Kaupmannahöfn”), em 1845, com apenas 37 anos, depois de cair de uma escada e quebrar a perna. Ele nasceu em Öxnadalur, mas morreu longe — e jovem.',
          },
          { text: '“Viltu fara með eitthvað eftir hann?”', translation: '“Você recita alguma coisa dele?”', next: 'ljod' },
        ],
      },
      ljod: {
        emoji: '🕊️',
        text: 'Ragnheiður stóð við gluggann, horfði á Hraundranga og fór með fyrstu línu sonnettunnar Ég bið að heilsa, sem Jónas orti í Kaupmannahöfn: “Nú andar suðrið sæla vindum þýðum.” Hún sagði að ljóðið væri kveðja heim, send með hlýjum vindum og farfuglum norður yfir hafið. Linu spurði hvað suðrið sæla væri, og hún útskýrði að skáldið ávarpaði suðrið, hlýja vindinn sunnan að, eins og persónu. “Hann biður vindinn og fuglana að bera kveðju sína heim til Íslands, því að sjálfur komst hann ekki”, sagði hún lágt.',
        translation:
          'A Ragnheiður ficou junto à janela, olhou para o Hraundrangi e recitou o primeiro verso do soneto “Ég bið að heilsa” (“Mando lembranças”), que Jónas escreveu em Copenhague: “Agora o bendito sul sopra ventos suaves.” Disse que o poema era uma saudação para casa, enviada com os ventos quentes e as aves migratórias rumo ao norte, por cima do mar. O Linu perguntou o que era esse “bendito sul”, e ela explicou que o poeta se dirige ao sul, o vento quente que vem do sul, como se fosse uma pessoa. “Ele pede ao vento e às aves que levem a saudação dele para a Islândia, porque ele mesmo não conseguia ir”, disse ela baixinho.',
        choices: [
          { text: '“Af hverju er orðaröðin svona óvenjuleg?”', translation: '“Por que a ordem das palavras é tão incomum?”', next: 'ordarod' },
          { text: '“Hvar er Jónas grafinn?”', translation: '“Onde Jónas está enterrado?”', next: 'grof' },
        ],
      },
      ordarod: {
        emoji: '🎼',
        text: 'Ragnheiður brosti og sagði að í ljóðum mætti hnika orðum til vegna bragarháttarins, rétt eins og í fornkvæðunum. Í óbundnu máli myndi maður frekar segja að sæla suðrið andaði þýðum vindum, en þá týndist hrynjandin og hljómurinn. Hún benti líka á að lýsingarorðið sæla stæði á eftir nafnorðinu, og það gæfi línunni hátíðlegan blæ. “Ljóðmál er ekki rangt mál, heldur mál í sparifötum”, sagði hún og hló.',
        translation:
          'A Ragnheiður sorriu e disse que na poesia se pode deslocar as palavras por causa da métrica, assim como nos poemas antigos. Em prosa se diria antes “sæla suðrið andaði þýðum vindum” (o bendito sul soprava ventos suaves), mas aí se perderiam o ritmo e a sonoridade. Ela observou também que o adjetivo “sæla” vinha depois do substantivo, o que dava ao verso um tom solene. “A língua da poesia não é língua errada; é a língua com roupa de festa”, disse, rindo.',
        choices: [{ text: '“Og hvar er hann grafinn?”', translation: '“E onde ele está enterrado?”', next: 'grof' }],
      },
      grof: {
        emoji: '🪦',
        text: 'Ragnheiður sagði að Jónas hefði fyrst verið jarðsettur í Kaupmannahöfn, en árið 1946 hefðu jarðneskar leifar hans verið fluttar heim og lagðar til hinstu hvílu á Þingvöllum. Flutningurinn hefði verið umdeildur, því að ýmsir Norðlendingar hefðu viljað að hann hvíldi hér í heimahögunum. “Sumir segja enn í hálfkæringi að óvíst sé hvort réttu beinin hafi komið heim”, sagði hún og brosti út í annað. Síðan spurði hún Linu hvort hann vildi skrifa eitthvað í gestabókina, á hvaða máli sem hann vildi.',
        translation:
          'A Ragnheiður contou que Jónas foi enterrado primeiro em Copenhague, mas que em 1946 seus restos mortais foram trazidos para casa e sepultados em Þingvellir. O traslado foi polêmico, porque vários nortistas queriam que ele descansasse ali, na terra natal. “Alguns ainda dizem, meio de brincadeira, que não se sabe se vieram os ossos certos”, disse ela, com um sorriso de canto. Depois perguntou ao Linu se ele queria escrever alguma coisa no livro de visitas, na língua que quisesse.',
        choices: [
          { text: 'Skrifa línuna eftir Jónas og eigin kveðju á íslensku.', translation: 'Escrever o verso de Jónas e uma saudação sua em islandês.', next: 'final_bom' },
          { text: 'Skrifa bara nafnið sitt og dagsetninguna.', translation: 'Escrever só o nome e a data.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '✒️',
        text: 'Linu hugsaði sig lengi um, skrifaði svo línuna eftir Jónas og undir hana, með skjálfandi hendi, sína eigin kveðju heim til Suðurskautslandsins, í sama anda. Ragnheiður las hana yfir öxlina á honum og sagði ekkert í fyrstu, en augu hennar voru rök. “Þú ert fyrsta mörgæsin sem yrkir á íslensku í þessu húsi”, sagði hún loks, “og vonandi ekki sú síðasta.” Þegar Linu ók út dalinn í rökkrinu fannst honum eins og Hraundrangi fylgdi honum eftir með augunum.',
        translation:
          'O Linu pensou por muito tempo, escreveu o verso de Jónas e, embaixo dele, com a mão trêmula, a sua própria saudação para a Antártida, no mesmo espírito. A Ragnheiður leu por cima do ombro dele e primeiro não disse nada, mas estava com os olhos úmidos. “Você é o primeiro pinguim a fazer versos em islandês nesta casa”, disse ela por fim, “e espero que não seja o último.” Quando o Linu saiu do vale de carro, ao entardecer, teve a impressão de que o Hraundrangi o seguia com os olhos.',
        ending: { tone: 'bom', title: 'Saudação ao sul', message: 'Você entendeu a vida de Jónas, a ordem poética do verso e o espírito do soneto — e respondeu com uma saudação sua.' },
      },
      final_neutro: {
        emoji: '📖',
        text: 'Linu skrifaði nafnið sitt og dagsetninguna með snyrtilegri rithönd og lokaði bókinni. Ragnheiður þakkaði honum kurteislega, en Linu sá að hún hafði vonast eftir einhverju meiru á þessum degi allra daga. Á leiðinni út dalinn hugsaði hann um línuna sem hún hafði farið með og fann heila kveðju myndast í huga sér, of seint til að skrifa hana í bókina. Hann ákvað að senda henni hana í bréfi, og það gerði hann viku síðar.',
        translation:
          'O Linu escreveu o nome e a data com letra caprichada e fechou o livro. A Ragnheiður agradeceu educadamente, mas o Linu percebeu que ela esperava algo mais naquele dia entre todos os dias. Saindo do vale, ele pensou no verso que ela tinha recitado e sentiu uma saudação inteira se formar na cabeça, tarde demais para escrevê-la no livro. Decidiu mandá-la numa carta, e foi o que fez uma semana depois.',
        ending: { tone: 'neutro', title: 'Só a assinatura', message: 'Você aprendeu muito, mas no Dia da Língua Islandesa a casa de Jónas pedia mais do que um nome.' },
      },
    },
  },
  {
    id: 'is-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Eigi skal höggva',
    emoji: '🗡️',
    summary: 'Em Reykholt, junto à piscina de Snorri Sturluson, uma estudiosa apresenta ao Linu as kenningar, um verso do Hávamál e as últimas palavras de Snorri.',
    cultural_context:
      'Snorri Sturluson (1179–1241) viveu em Reykholt, onde ainda existe a Snorralaug, uma piscina de pedra alimentada por uma fonte quente. Autor da Edda em prosa — um manual de poesia e mitologia — e da Heimskringla, a história dos reis da Noruega, foi assassinado em Reykholt em 1241; segundo a Sturlunga saga, suas últimas palavras foram “Eigi skal höggva!” (“Não se deve golpear!”). Os grandes manuscritos islandeses guardados em Copenhague começaram a voltar para a Islândia em 1971.',
    start: 'start',
    glossary: [
      ['kenning (ft. kenningar)', 'metáfora poética da tradição nórdica'],
      ['haddur Sifjar', 'o cabelo de Sif = o ouro'],
      ['Kvasis blóð', 'o sangue de Kvasir = a poesia'],
      ['orðstír', 'reputação, o nome que se deixa'],
      ['Deyr fé, deyja frændr…', 'Morre o gado, morrem os parentes… (Hávamál, em nórdico antigo)'],
      ['eigi', 'não (forma antiga e literária de “ekki”)'],
      ['Sturlungaöld', 'a Era dos Sturlungar (séc. XIII), de guerras entre chefes'],
      ['að komast upp á kant við e-n', 'indispor-se com alguém'],
    ],
    nodes: {
      start: {
        emoji: '♨️',
        text: 'Í Reykholti í Borgarfirði gekk Linu að Snorralaug, lítilli, hringlaga laug úr hlöðnu grjóti, þar sem heitt vatn rennur enn inn eftir ævafornum stokki. Við laugina sat Bergþóra, fræðikona sem hafði helgað Snorra Sturlusyni starfsævi sína, með bók í kjöltunni. Hún sagði að hér hefði Snorri setið í heitu vatninu með vinum sínum og rætt um skáldskap, völd og konunga. “Hann skrifaði Eddu til að kenna ungum skáldum gömlu listina, því að hann óttaðist að hún gleymdist”, sagði hún. “Án hans vissum við fátt um norræna goðafræði.”',
        translation:
          'Em Reykholt, no Borgarfjörður, o Linu foi até a Snorralaug, uma pequena piscina redonda de pedras empilhadas, onde a água quente ainda entra por um canal antiquíssimo. À beira da piscina estava sentada a Bergþóra, uma estudiosa que tinha dedicado a carreira a Snorri Sturluson, com um livro no colo. Ela contou que ali Snorri se sentava na água quente com os amigos para conversar sobre poesia, poder e reis. “Ele escreveu a Edda para ensinar a arte antiga aos jovens poetas, porque temia que ela fosse esquecida”, disse. “Sem ele saberíamos pouco da mitologia nórdica.”',
        choices: [
          { text: '“Hvað kennir Edda ungum skáldum?”', translation: '“O que a Edda ensina aos jovens poetas?”', next: 'kenningar' },
          { text: '“Hvernig dó Snorri?”', translation: '“Como Snorri morreu?”', next: 'daudi' },
        ],
      },
      kenningar: {
        emoji: '✨',
        text: 'Bergþóra opnaði bókina og útskýrði að skáldin hefðu sjaldan nefnt hlutina réttum nöfnum, heldur kennt þá við eitthvað annað, og það kallaðist kenning. Gull mætti til dæmis kalla hadd Sifjar, því að Loki hefði klippt hárið af Sif, konu Þórs, og dvergar hefðu smíðað henni nýtt hár úr gulli. Skáldskapurinn sjálfur héti Kvasis blóð, eftir hinum vitra Kvasi, sem dvergar hefðu drepið og bruggað mjöð úr blóði hans. “Hver kenning er lítil saga í einu orði”, sagði hún, “og til að skilja ljóðið þarftu að kunna söguna.”',
        translation:
          'A Bergþóra abriu o livro e explicou que os poetas raramente chamavam as coisas pelo nome, e sim as designavam por meio de outra coisa, e isso se chamava kenning. O ouro, por exemplo, podia ser chamado de “cabelo de Sif”, porque Loki tinha cortado o cabelo de Sif, a mulher de Thor, e anões tinham forjado para ela um cabelo novo de ouro. A própria poesia se chamava “sangue de Kvasir”, por causa do sábio Kvasir, que anões mataram para fazer hidromel com o sangue dele. “Cada kenning é uma pequena história numa palavra”, disse ela, “e para entender o poema você precisa conhecer a história.”',
        choices: [
          {
            text: '“Svo Snorri skrifaði að skáld ættu að drekka blóð?”',
            translation: '“Então Snorri escreveu que os poetas deviam beber sangue?”',
            wrong: '“Kvasis blóð” é uma kenning, uma metáfora poética: é o nome que os poetas davam à própria poesia, por causa do mito do hidromel feito com o sangue de Kvasir. Ninguém bebia sangue — a Bergþóra disse que cada kenning é “uma pequena história numa palavra”.',
          },
          { text: '“Hvað segja fornkvæðin um dauðann?”', translation: '“O que dizem os poemas antigos sobre a morte?”', next: 'havamal' },
        ],
      },
      havamal: {
        emoji: '📜',
        text: 'Bergþóra sagði að frægustu erindin um lífið og dauðann væru ekki eftir Snorra, heldur í Hávamálum, kvæði sem varðveist hefði í Konungsbók eddukvæða. Hún fór með erindið hægt, á fornu máli: “Deyr fé, deyja frændr, deyr sjálfr it sama; en orðstírr deyr aldregi, hveim er sér góðan getr.” Linu skildi að fé og frændur deyja og maðurinn sjálfur líka, en að góður orðstír lifir. Bergþóra sagði að handritið hefði verið í Kaupmannahöfn öldum saman en komið heim árið 1971, og að fólk hefði þyrpst niður að höfninni í Reykjavík til að fagna því. “Þann dag grétu menn yfir bók”, sagði hún.',
        translation:
          'A Bergþóra disse que as estrofes mais famosas sobre a vida e a morte não eram de Snorri, mas do Hávamál, um poema preservado no Codex Regius dos poemas éddicos. Recitou a estrofe devagar, na língua antiga: “Morre o gado, morrem os parentes, morre-se a si mesmo também; mas a fama jamais morre, para quem conquista uma boa.” O Linu entendeu que o gado e os parentes morrem, e o próprio homem também, mas que o bom nome permanece. A Bergþóra contou que o manuscrito tinha ficado séculos em Copenhague, mas voltou para casa em 1971, e que o povo se aglomerou no porto de Reykjavík para festejar. “Naquele dia as pessoas choraram por um livro”, disse ela.',
        choices: [{ text: '“Og hvernig dó Snorri sjálfur?”', translation: '“E como o próprio Snorri morreu?”', next: 'daudi' }],
      },
      daudi: {
        emoji: '🌑',
        text: 'Bergþóra lokaði bókinni og leit í átt að lágum göngunum sem liggja frá lauginni heim að gamla bæjarstæðinu. Hún sagði að Snorri hefði flækst í valdabaráttu Sturlungaaldar og komist upp á kant við Noregskonung, og að haustið 1241 hefðu óvinir hans komið að Reykholti að næturlagi. Snorri hefði flúið niður í kjallara, en þeir hefðu fundið hann þar. “Samkvæmt Sturlungu voru síðustu orð hans: Eigi skal höggva!” sagði hún. “Og þá hjuggu þeir.”',
        translation:
          'A Bergþóra fechou o livro e olhou para a passagem baixa que vai da piscina até o antigo terreno da fazenda. Contou que Snorri se envolveu nas lutas pelo poder da Era dos Sturlungar e se indispôs com o rei da Noruega, e que no outono de 1241 os inimigos dele chegaram a Reykholt de noite. Snorri fugiu para o porão, mas eles o encontraram lá. “Segundo a Sturlunga, suas últimas palavras foram: Não se deve golpear!”, disse ela. “E então golpearam.”',
        choices: [
          { text: '“Hvað merkir eigi skal höggva nákvæmlega?”', translation: '“O que quer dizer exatamente ‘eigi skal höggva’?”', next: 'merking' },
          { text: '“Það er grimm kaldhæðni: maðurinn sem kunni öll orðin.”', translation: '“Que ironia cruel: o homem que conhecia todas as palavras.”', next: 'lok' },
        ],
      },
      merking: {
        emoji: '🔎',
        text: 'Bergþóra útskýrði að eigi væri gamalt og hátíðlegt orð fyrir ekki og að skal hefði hér þá merkingu að eitthvað ætti að gerast eða ekki. Setningin þýddi því einfaldlega: það á ekki að höggva, eða: ekki höggva. Hún sagði að menn hefðu lengi velt fyrir sér hvort orðin væru bæn, skipun eða orð manns sem neitaði að trúa því sem var að gerast. “Í þremur orðum geymir Sturlunga heilan heim”, sagði hún.',
        translation:
          'A Bergþóra explicou que “eigi” era uma palavra antiga e solene para “ekki” (não) e que “skal” tinha aqui o sentido de que algo deve ou não deve acontecer. A frase queria dizer, então, simplesmente: não se deve golpear, ou: não golpeiem. Contou que há muito tempo se discute se aquelas palavras eram uma súplica, uma ordem ou as palavras de um homem que se recusava a acreditar no que estava acontecendo. “Em três palavras a Sturlunga guarda um mundo inteiro”, disse ela.',
        choices: [{ text: 'Hugsa um orðin og örlög Snorra.', translation: 'Pensar nas palavras e no destino de Snorri.', next: 'lok' }],
      },
      lok: {
        emoji: '🏛️',
        text: 'Þau gengu hægt frá lauginni upp að Snorrastofu, þar sem rit um Snorra og samtíma hans eru varðveitt. Bergþóra sagði að Snorri hefði verið allt í senn: skáld, sagnaritari, lögsögumaður, auðmaður og valdamikill höfðingi, og að einmitt þess vegna væri hann svo mannlegur. Hún spurði Linu hvað honum þætti merkilegast, nú þegar hann hafði gengið um Reykholt. “Segðu mér það með kenningu, ef þú þorir”, bætti hún við og glotti.',
        translation:
          'Os dois subiram devagar da piscina até o Snorrastofa, onde se guardam obras sobre Snorri e a época dele. A Bergþóra disse que Snorri tinha sido tudo ao mesmo tempo: poeta, historiador, recitador da lei, homem rico e chefe poderoso, e que justamente por isso era tão humano. Perguntou ao Linu o que ele achava mais notável, agora que tinha percorrido Reykholt. “Diga com uma kenning, se tiver coragem”, acrescentou, com um sorrisinho.',
        choices: [
          { text: '“Kvasis blóð lifir, þótt skáldið félli.”', translation: '“O sangue de Kvasir vive, ainda que o poeta tenha caído.”', next: 'final_bom' },
          { text: '“Snorri var mjög frægur og ríkur maður.”', translation: '“Snorri foi um homem muito famoso e rico.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍯',
        text: 'Bergþóra þagði stundarkorn og lagði svo höndina á öxl hans. “Kvasis blóð lifir, þótt skáldið félli”, endurtók hún. “Þetta hefði Snorri skilið, og kannski fyrirgefið þér að vera mörgæs.” Hún gaf honum gamla útgáfu af Eddu með spássíugreinum eftir sjálfa sig og sagði að nú ætti hann að kenna næstu skáldum. Linu sat lengi við Snorralaug í rökkrinu, hlustaði á vatnið renna eftir forna stokknum og fann að orðstír manns sem dó fyrir löngu lifði enn allt í kringum hann.',
        translation:
          'A Bergþóra ficou um instante em silêncio e depois pôs a mão no ombro dele. “O sangue de Kvasir vive, ainda que o poeta tenha caído”, repetiu. “Isso Snorri teria entendido — e talvez até perdoado você por ser pinguim.” Deu a ele uma edição antiga da Edda com anotações dela nas margens e disse que agora era a vez dele de ensinar os próximos poetas. O Linu ficou muito tempo sentado junto à Snorralaug ao anoitecer, ouvindo a água correr pelo canal antigo, e sentiu que o bom nome de um homem morto havia tanto tempo ainda vivia à sua volta.',
        ending: { tone: 'bom', title: 'Hidromel de Kvasir', message: 'Você entendeu as kenningar, o Hávamál e as últimas palavras de Snorri — e respondeu com uma kenning sua. C2 de verdade.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Bergþóra kinkaði kolli og sagði að það væri rétt, en að það stæði líka á hverju ferðamannaskilti í héraðinu. “Snorri hefði sagt þetta með þremur kenningum, og þú hefðir þurft viku til að ráða þær”, sagði hún glettnislega. Hún gaf honum samt lista yfir algengustu kenningar Eddu til að lesa í rútunni á leiðinni suður. Linu las hann alla leið til Reykjavíkur og velti fyrir sér hvað hann hefði getað sagt.',
        translation:
          'A Bergþóra concordou e disse que era verdade, mas que isso também estava escrito em todas as placas turísticas da região. “Snorri teria dito isso com três kenningar, e você precisaria de uma semana para decifrá-las”, disse ela, brincalhona. Mesmo assim, deu a ele uma lista das kenningar mais comuns da Edda para ler no ônibus rumo ao sul. O Linu leu a lista até Reykjavík, pensando no que poderia ter dito.',
        ending: { tone: 'neutro', title: 'Resposta de placa turística', message: 'Correto, mas sem poesia. A Bergþóra pediu uma kenning — e você mesmo tinha aprendido que “Kvasis blóð” é a poesia.' },
      },
    },
  },
];
