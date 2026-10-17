import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaiowá, uma por subnível do A1.1 ao B1.4 (as do B1 têm nota própria no bloco do fim). Revisão de 17/10/2026: as falas são
 * frases do «Dicionário bilíngue kaiwá-português» de Eliane B. L. de Barros (UFMS, 2014), copiadas como
 * estão (ou só a oração principal, marcada «oração tirada de»), com a página impressa; «agwyjevete» vem
 * dos agradecimentos da tese de Eliel Benites (UFGD, 2021), na grafia do curso. Nenhuma fala foi montada. As personagens são
 * fictícias. Correção: a terra indígena Te'yikue fica em Caarapó (MS), não em Amambai — é o que diz o
 * resumo da tese de Benites no repositório da UFGD (repositorio.ufgd.edu.br/jspui/handle/prefix/4591).
 * Lugares e costumes: Barros 2014, cap. 2 (pp. 65–84).
 */
export const STORIES_KGK: StorySeed[] = [
  {
    id: 'kgk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Agwyjevete, Te\'yikue!',
    emoji: '👋',
    summary: 'Uma jari (avó) te recebe na terra indígena Te\'yikue, em Caarapó (MS), e você troca as primeiras palavras em kaiowá.',
    // resumo da tese de Benites (repositório da UFGD): retomadas dentro e fora da reserva Te'yikue, em Caarapó
    cultural_context:
      'A Te\'yikue é uma terra indígena kaiowá em Caarapó, no Mato Grosso do Sul. É o lugar estudado pelo pesquisador kaiowá Eliel Benites na tese sobre o teko araguyje, o “jeito sagrado de ser”.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 181
        text: 'Mba\'éixa pa ereiko?',
        translation: 'Como você está?',
        emoji: '👵',
        choices: [
          // Benites 2021 (grafia do curso) e Barros 2014, p. 189
          { text: 'Agwyjevete! Ne resãi?', translation: 'Muito obrigado(a)! Você está com saúde?', next: 'convite' },
          // Barros 2014, p. 146
          { text: 'Amo ou jagwarete.', translation: 'Lá longe vem a onça.', wrong: 'Ela perguntou como você está. Agradeça com “Agwyjevete!” e devolva a pergunta.' },
        ],
      },
      convite: {
        // Barros 2014, p. 150
        text: 'Eju ko\'a-py.',
        translation: 'Venha aqui.',
        emoji: '🏘️',
        choices: [
          // Barros 2014, p. 165 (oração tirada de “Jaha katu, ha'e íxupe”)
          { text: 'Jaha katu.', translation: 'Vamos, então.', next: 'mate' },
          // Barros 2014, p. 189 (oração tirada de “Naháni, he'i”)
          { text: 'Naháni.', translation: 'Não.', wrong: 'Ela está te chamando com carinho. Aceite: “Jaha katu.”' },
        ],
      },
      mate: {
        // Barros 2014, p. 171 (oração tirada de “Egwahẽ ja'u ka'ay, he'i”)
        text: 'Egwahẽ ja\'u ka\'ay.',
        translation: 'Venha, vamos beber mate.',
        emoji: '🧉',
        choices: [
          { text: 'Agwyjevete!', translation: 'Muito obrigado(a)!', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 114 e p. 144
        text: 'Eju jevy a-py.',
        translation: 'Venha de novo para cá.',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Agwyjevete!',
          message: 'Você cumprimentou a jari, aceitou o convite e tomou mate na Te\'yikue.',
        },
      },
    },
    glossary: [
      ['agwyjevete', 'muito obrigado(a)'],
      ['Mba\'éixa pa ereiko?', 'como você está?'],
      ['Eju ko\'a-py', 'venha aqui'],
      ['jaha', 'vamos'],
      ['ka\'ay', 'erva-mate'],
    ],
  },
  {
    id: 'kgk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ka\'agwy: a mata perto de Caarapó',
    emoji: '🌞',
    summary: 'Um tamói (avô) te leva para a mata perto de Caarapó (MS), num dia de sol forte.',
    // Wikipédia, «Língua caiouá»: escola bilíngue kaiowá-português de Caarapó (1997)
    cultural_context:
      'Caarapó, no Mato Grosso do Sul, tem uma terra indígena kaiowá; ali começou, em 1997, uma das primeiras experiências de escola bilíngue kaiowá-português do estado.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 176
        text: 'Haku eterei kwarahy.',
        translation: 'O sol está quente demais.',
        emoji: '☀️',
        choices: [
          // Barros 2014, p. 160
          { text: 'Ka\'agwy hũ porã eterei ko ka\'agwy.', translation: 'Mata escura, esta mata é boa demais.', next: 'onca' },
          // Barros 2014, p. 211
          { text: 'Xe nda\'úi so\'o.', translation: 'Eu não como carne.', wrong: 'Ele está falando do sol. Fuja do calor falando da mata: “Ka\'agwy hũ porã eterei ko ka\'agwy.”' },
        ],
      },
      onca: {
        // Barros 2014, p. 146
        text: 'Amo ou jagwarete.',
        translation: 'Lá longe vem a onça.',
        emoji: '🐆',
        choices: [
          // Barros 2014, p. 174
          { text: 'Nhanhemi yvyra kupe-py.', translation: 'Nós nos escondemos atrás da árvore.', next: 'calma' },
          // Barros 2014, p. 152
          { text: 'Gwyra porã voi xirino.', translation: 'O beija-flor é mesmo um pássaro bonito.', wrong: 'Agora não é hora de olhar o beija-flor: a onça vem vindo. Escondam-se atrás da árvore.' },
        ],
      },
      calma: {
        // Barros 2014, p. 177
        text: 'Ani erekyhyje.',
        translation: 'Não tenha medo.',
        emoji: '🌳',
        choices: [
          { text: 'Agwyjevete!', translation: 'Muito obrigado(a)!', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 158
        text: 'Kwarahy hendy porã jevy.',
        translation: 'O sol brilhava bem de novo.',
        emoji: '🌤️',
        ending: {
          tone: 'bom',
          title: 'Ka\'agwy porã!',
          message: 'A onça passou longe, e você nomeou o sol, a mata e os bichos em kaiowá.',
        },
      },
    },
    glossary: [
      ['kwarahy / ka\'agwy', 'sol / mata'],
      ['jagwarete', 'onça'],
      ['yvyra', 'árvore'],
      ['hũ / porã', 'escuro / bom, bonito'],
    ],
  },
  {
    id: 'kgk-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Uma tarde em Panambizinho',
    emoji: '🏡',
    summary: 'Uma família kaiowá de Panambizinho te recebe com mate; vocês falam da roça, dividem a comida e cantam.',
    // Barros 2014, p. 84 (Panambizinho, língua e cultura mais preservadas), p. 72 (óga e oka), p. 74 (roça) e p. 201
    // (visitas com mate e comida)
    cultural_context:
      'Panambizinho, em Dourados, é a aldeia onde a língua e a cultura kaiowá são mais preservadas. Receber alguém é dividir: as vizinhas dão mate uma à outra e comem juntas, e a roça da família fica em volta da casa e do quintal.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 171 (oração tirada de “Egwahẽ ja'u ka'ay, he'i”)
        text: 'Egwahẽ ja\'u ka\'ay.',
        translation: 'Venha, vamos beber mate.',
        emoji: '🧉',
        choices: [
          // Barros 2014, p. 165
          { text: 'Jaha katu.', translation: 'Vamos, então.', next: 'sentar' },
          // Barros 2014, p. 146
          { text: 'Ani pende are.', translation: 'Não demorem.', wrong: 'Quem foi convidado foi você. Aceite: “Jaha katu.”' },
        ],
      },
      sentar: {
        // Barros 2014, p. 151
        text: 'Ogwapy oĩ-vy xe sy.',
        translation: 'Minha mãe estava sentada.',
        emoji: '🪑',
        choices: [
          // Barros 2014, p. 156
          { text: 'Xe ahayhu ave xe sy-pe.', translation: 'Eu também amo a minha mãe.', next: 'roca' },
          // Barros 2014, p. 173
          { text: 'Oroke arã ore kyha-py.', translation: 'Dormiremos nas nossas redes.', wrong: 'Ainda é tarde, e a família quer conversar. Fale da sua mãe: “Xe ahayhu ave xe sy-pe.”' },
        ],
      },
      roca: {
        // Barros 2014, p. 174
        text: 'Kokwe-py omba\'apo.',
        translation: 'Ele trabalha na roça.',
        emoji: '🌱',
        choices: [
          // Barros 2014, p. 180
          { text: 'Nhamba\'apo pohýi ave opa mba\'e.', translation: 'Trabalhamos duro também em todas as coisas.', next: 'comida' },
          // Barros 2014, p. 146 (oração tirada de “He'i gwembireko-pe: aha-ta anhemitỹ”)
          { text: 'Aha-ta anhemitỹ.', translation: 'Vou plantar.', next: 'comida' },
        ],
      },
      comida: {
        // Barros 2014, p. 170
        text: 'Orogwereko tembi\'u jygwe ramo, orome\'ẽ ojóupe.',
        translation: 'Quando temos comida cozida, damos uma à outra.',
        emoji: '🥘',
        choices: [
          // Barros 2014, p. 154 (oração tirada de “Ha'u-ta kagwĩ, he'i hanhygwe”, “vou beber chicha, disse seu genro”)
          { text: 'Ha\'u-ta kagwĩ.', translation: 'Vou beber chicha.', next: 'canto' },
          // Barros 2014, p. 189
          { text: 'Ndaipotái nde jegwaka.', translation: 'Não quero teu cocar.', wrong: 'Ninguém te ofereceu um cocar: estão dividindo a comida. Aceite a chicha: “Ha\'u-ta kagwĩ.”' },
        ],
      },
      canto: {
        // Barros 2014, p. 170
        text: 'Oroju oroporahéi.',
        translation: 'Nós viemos e cantamos.',
        emoji: '🎶',
        choices: [
          { text: 'Agwyjevete!', translation: 'Muito obrigado(a)!', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 114 e p. 144
        text: 'Eju jevy a-py.',
        translation: 'Venha de novo para cá.',
        emoji: '🌇',
        ending: {
          tone: 'bom',
          title: 'Agwyjevete!',
          message: 'Você tomou mate, falou da família e da roça, dividiu a comida e ouviu o canto: a- (eu), nha- (nós, com você) e oro- (nós, sem você) já estão na sua boca.',
        },
      },
    },
    glossary: [
      ['egwahẽ / jaha katu', 'venha / vamos então'],
      ['kokwe', 'roça'],
      ['tembi\'u', 'comida'],
      ['kagwĩ', 'chicha, bebida de milho'],
      ['oroporahéi', 'nós (sem você) cantamos'],
    ],
  },
  {
    id: 'kgk-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ko\'ẽ ramo: o caminho para Tanambi',
    emoji: '🛤️',
    summary: 'Um nhamói (vovô) pergunta aonde você vai, decide ir junto, e no caminho aparece uma onça.',
    // Barros 2014, p. 214 (Tanambi: “a vila da Borboleta”, Panambi) e p. 68 (Quadro 1: aldeia Panambi); p. 191 (nhamói)
    cultural_context:
      'Tanambi é como um dos falantes do dicionário de Barros chama Panambi, a “vila da Borboleta”, perto das aldeias kaiowá de Dourados. “Nhamói” é como o neto chama o avô.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 173
        text: 'Kipy ereho-ta nde?',
        translation: 'Aonde você vai?',
        emoji: '👴',
        choices: [
          // Barros 2014, p. 174
          { text: 'Ko\'ẽ ramo aha-ta Tanambi-py.', translation: 'Amanhã vou para Tanambi.', next: 'junto' },
          // Barros 2014, p. 189
          { text: 'Naháni.', translation: 'Não.', wrong: '“Naháni” responde a uma pergunta de sim ou não. Ele perguntou aonde: diga “Ko\'ẽ ramo aha-ta Tanambi-py.”' },
        ],
      },
      junto: {
        // Barros 2014, p. 209
        text: 'Aha-ta xe ave nde rupive.',
        translation: 'Eu também vou com você.',
        emoji: '🤝',
        choices: [
          // Barros 2014, p. 165
          { text: 'Jaha katu.', translation: 'Vamos, então.', next: 'caminho' },
          // Barros 2014, p. 220 (oração tirada de “Avy'a eterei xe ryke ogwahẽ jevy ramo”)
          { text: 'Avy\'a eterei.', translation: 'Fiquei muito alegre.', next: 'caminho' },
        ],
      },
      caminho: {
        // Barros 2014, p. 146
        text: 'Amo ou jagwarete.',
        translation: 'Lá longe vem a onça.',
        emoji: '🐆',
        choices: [
          // Barros 2014, p. 174
          { text: 'Nhanhemi yvyra kupe-py.', translation: 'Nós nos escondemos atrás da árvore.', next: 'calma' },
          // Barros 2014, p. 169
          { text: 'Ajogwa arã kure.', translation: 'Pretendo comprar porco.', wrong: 'Não é hora de pensar em compras: a onça vem vindo! Escondam-se atrás da árvore.' },
        ],
      },
      calma: {
        // Barros 2014, p. 177
        text: 'Ani erekyhyje.',
        translation: 'Não tenha medo.',
        emoji: '🌳',
        choices: [
          // Barros 2014, p. 154 (ha'e3, “sim”)
          { text: 'Ha\'e.', translation: 'Sim.', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 158
        text: 'Ha\'e kwéry ohendu mombyry-gwi.',
        translation: 'Eles ouvem de longe.',
        emoji: '🦋',
        ending: {
          tone: 'bom',
          title: 'Ko\'ẽ ramo, Tanambi!',
          message: 'A onça seguiu o caminho dela, e vocês seguiram o seu: você respondeu “aonde” com -ta e ouviu “ani” numa ordem negativa.',
        },
      },
    },
    glossary: [
      ['kipy', 'aonde'],
      ['ko\'ẽ ramo', 'amanhã'],
      ['aha-ta', 'vou'],
      ['ani erekyhyje', 'não tenha medo'],
      ['mombyry', 'longe'],
    ],
  },

  // ═══ B1 (17/10/2026). Não achamos um texto corrido em kaiowá com licença que permita usá-lo aqui: o Novo
  // Testamento kaiwá (Wycliffe, 2006, no eBible.org) é CC BY-NC-ND; “Nhande rembypy” (Garcia) não está aberto na
  // internet; o livro “Tekoha vy'a renda” (EdUFGD, 2019) tem todos os direitos reservados e está em guarani da
  // grafia paraguaia, sem tradução; o texto do anexo B de Cardoso (2008) está em transcrição fonológica e trata de
  // um rito de reclusão. Por isso, como no quéchua de Áncash, cada fala abaixo é uma frase do dicionário de Barros
  // (2014), copiada como está no verbete, com a página; A ORDEM DAS FALAS E O ENREDO SÃO DO CURSO, não de uma
  // história contada por um falante. Nenhuma fala foi montada. ═══
  {
    id: 'kgk-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Um ano na roça',
    emoji: '🌽',
    summary: 'Você acorda cedo e passa um ano na roça de uma família kaiowá: o plantio, a chuva, a espera pela colheita e uma noite de estrelas.',
    // Barros 2014, pp. 73–74 (a roça, o milho branco, o avati nhemongarai na colheita)
    cultural_context:
      'A roça é o sustento das famílias kaiowá. O milho branco, avati morotĩ, é o principal produto, e a colheita é o tempo do avati nhemongarai, o “batismo do milho”. As falas desta história são frases de falantes kaiowá registradas no dicionário de Eliane de Barros; a ordem e o enredo são do curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 198
        text: 'Apáy ramo, ndakevéi.',
        translation: 'Quando acordei, não dormi mais.',
        emoji: '⏰',
        choices: [
          // Barros 2014, p. 164
          { text: 'Jaha jahexa itymby.', translation: 'Vamos ver a plantação de milho.', next: 'roca' },
          // Barros 2014, p. 173
          { text: 'Oroke arã ore kyha-py.', translation: 'Dormiremos nas nossas redes.', wrong: 'Você acabou de dizer que acordou e não dormiu mais. Chame para ver a plantação: “Jaha jahexa itymby.”' },
        ],
      },
      roca: {
        // Barros 2014, p. 193
        text: 'A-py ore heta oronhemitỹ.',
        translation: 'Aqui nós plantamos bastante.',
        emoji: '🌱',
        choices: [
          // Barros 2014, p. 179
          { text: "Ha onhotỹ mandi'o.", translation: 'E plantam mandioca.', next: 'chuva' },
          // Barros 2014, p. 146
          { text: 'Onhotỹ andai.', translation: 'Ele plantou abóbora.', next: 'chuva' },
        ],
      },
      chuva: {
        // Barros 2014, p. 211
        text: 'Xe oky eterei jave ndikatúi asẽ xe róga-gwi.',
        translation: 'Eu, quando chove demais, não consigo sair de casa.',
        emoji: '🌦️',
        choices: [
          // Barros 2014, p. 184 (mbyai)
          { text: 'Kokwe jepe ombyai oky eterei ramo.', translation: 'Até a roça estraga quando chove demais.', next: 'espera' },
          // Barros 2014, p. 176
          { text: 'Haku eterei kwarahy.', translation: 'O sol está quente demais.', wrong: 'Ela está falando de chuva demais, não de sol. Diga o que a chuva faz com a roça: “Kokwe jepe ombyai oky eterei ramo.”' },
        ],
      },
      espera: {
        // Barros 2014, p. 188
        text: "Nhaha'arõ are nhane remitỹgwe nhamono'õ hagwã.",
        translation: 'Temos que esperar muito tempo para colher o que plantamos.',
        emoji: '⌛',
        choices: [
          // Barros 2014, p. 209
          { text: "Peteĩ jasy rire ha'e kwéry ojapo kagwĩ.", translation: 'Depois de um mês, eles faziam a chicha.', next: 'noite' },
          // Barros 2014, p. 169
          { text: "Xe sy xe-vy ome'ẽ jety.", translation: 'Minha mãe me deu batata.', next: 'noite' },
        ],
      },
      noite: {
        // Barros 2014, p. 166
        text: 'Áry potĩ jave jahexa heta jasytata pyhare ramo.',
        translation: 'À noite, quando o céu está limpo, vemos muitas estrelas.',
        emoji: '⭐',
        choices: [
          // Barros 2014, p. 147
          { text: 'Ha oĩ ramo arai ndajahexa porái jasytata.', translation: 'E quando há nuvens, não conseguimos ver bem as estrelas.', next: 'final' },
          // Barros 2014, p. 170
          { text: "Jy'y ojekwaa-ma xe-vy.", translation: 'O arco-íris apareceu para mim.', wrong: 'Agora é noite, e a conversa é sobre as estrelas. Fale das nuvens que as escondem: “Ha oĩ ramo arai ndajahexa porái jasytata.”' },
        ],
      },
      final: {
        // Barros 2014, p. 206
        text: "Ko'ẽ jevy ramo oho.",
        translation: 'Quando amanheceu de novo, ele foi embora.',
        emoji: '🌅',
        ending: {
          tone: 'bom',
          title: 'Um ano de roça',
          message: 'Um ano de roça cabe em poucas frases: você ligou as orações com ramo (quando, se), jave (enquanto), rire (depois de) e hagwã (para).',
        },
      },
    },
    glossary: [
      ['apáy ramo', 'quando acordei'],
      ['oronhemitỹ', 'nós (sem você) plantamos'],
      ['oky eterei jave', 'quando chove demais'],
      ["nhamono'õ hagwã", 'para colhermos'],
      ['jasytata / arai', 'estrela / nuvem'],
    ],
  },
  {
    id: 'kgk-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'O mundéu que os antigos ensinavam',
    emoji: '🪤',
    summary: 'Um velho conta como os antigos ensinavam os filhos a fazer o mundéu, a armadilha de pegar tatu e paca, e a conversa termina no rio.',
    // Barros 2014, p. 182 (mbo'e: os antigos ensinavam os filhos a fazer o mundéu), p. 145 (akutipáy) e p. 73 (caça e pesca)
    cultural_context:
      'O mundéu (monde) é uma armadilha de madeira para pegar bichos como o tatu e a paca. No dicionário de Barros, um falante conta que os antigos ensinavam os filhos a fazê-lo. As falas são frases de falantes kaiowá registradas no dicionário; a ordem e o enredo são do curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 182
        text: "Ymagware ombo'e pe ta'ýry-pe ojapo hagwã monde.",
        translation: 'Os antigos ensinavam os filhos a fazer o mundéu.',
        emoji: '🧓',
        choices: [
          // Barros 2014, p. 202
          { text: "Aporandu-ta nde-vy peteĩ mba'e-rehe.", translation: 'Vou te perguntar sobre uma coisa.', next: 'mata' },
          // Barros 2014, p. 189 (nd- -i)
          { text: 'Ndaipotái nde jegwaka.', translation: 'Não quero o teu cocar.', wrong: 'Ninguém te ofereceu um cocar: ele está falando do mundéu. Mostre interesse com uma pergunta: “Aporandu-ta nde-vy peteĩ mba\'e-rehe.”' },
        ],
      },
      mata: {
        // Barros 2014, p. 180
        text: "Ha'e oike pe ka'agwy-rehe omarika hagwã ojapo monde.",
        translation: 'Ele entrou na mata para caçar e fez um mundéu.',
        emoji: '🌲',
        choices: [
          // Barros 2014, p. 177
          { text: 'Kyse voi ogwereko.', translation: 'Ele tinha uma faca mesmo.', next: 'apoha' },
          // Barros 2014, p. 165
          { text: 'Ani pejahu.', translation: 'Não tomem banho.', wrong: 'Ninguém está indo tomar banho: ele está na mata, fazendo o mundéu. Pergunte pela ferramenta: “Kyse voi ogwereko.”' },
        ],
      },
      apoha: {
        // Barros 2014, p. 147
        text: "Ha'e monde apoha tekotevẽ omoĩ pe monde gwy rupigwa yvyra.",
        translation: 'Aquele que faz o mundéu tem que colocar uma madeira embaixo dele.',
        emoji: '🪵',
        choices: [
          // Barros 2014, p. 187
          { text: 'Omano tatu pe monde gwy-py.', translation: 'O tatu morre debaixo do mundéu.', next: 'tatu' },
        ],
      },
      tatu: {
        // Barros 2014, p. 214
        text: "Ipohýi xe rekove, he'i tatu monde gwy-py oime jave.",
        translation: '“Minha vida é difícil”, diz o tatu quando está debaixo do mundéu.',
        emoji: '🦡',
        choices: [
          // Barros 2014, p. 145
          { text: 'Monde orojapo oroipyhy hagwã tatu, akutipáy.', translation: 'Fazemos o mundéu para pegar tatus e pacas.', next: 'rio' },
          // Barros 2014, p. 171
          { text: 'Kagware onhemondýi.', translation: 'O tamanduá ficou assustado.', next: 'rio' },
        ],
      },
      rio: {
        // Barros 2014, p. 170
        text: "Ke'y oho ojopói pira ysyry-py.",
        translation: 'O irmão mais velho foi pescar peixe no rio.',
        emoji: '🎣',
        choices: [
          // Barros 2014, p. 200
          { text: "Jakare he'i: nda'úi ne pinda pota.", translation: 'O jacaré respondeu: “Não comi o teu anzol e a isca.”', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 148
        text: "Upéixa he'i arandu nhe'ẽ-py onhemombe'u.",
        translation: 'Assim dizem as palavras dos sábios que são contadas.',
        emoji: '🦉',
        ending: {
          tone: 'bom',
          title: 'Monde apoha!',
          message: "Você ouviu como os antigos ensinavam e reconheceu quem faz (apoha, ojapo va'e) e o que se faz: o mundéu, a faca, o anzol.",
        },
      },
    },
    glossary: [
      ["ombo'e", 'ensina, ensinavam'],
      ['monde', 'mundéu, armadilha'],
      ['omarika hagwã', 'para caçar'],
      ['monde apoha', 'aquele que faz o mundéu'],
      ['arandu', 'sábio'],
    ],
  },
  {
    id: 'kgk-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pohã: o vovô fica bom',
    emoji: '💊',
    summary: 'O vovô está bravo e doente; a família conversa, cuida dele e se ajuda até ele ficar calmo de novo.',
    // Barros 2014, pp. 80–81 (postos de saúde e agentes de saúde nas aldeias), p. 191 (nhamói, como o neto chama o avô)
    cultural_context:
      '“Nhamói” é como o neto chama o avô. Nas aldeias, a saúde passa pelos postos e agentes de saúde e também pelos remédios do mato e pela reza. As falas são frases de falantes kaiowá registradas no dicionário de Eliane de Barros; a ordem e o enredo são do curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 202
        text: 'Ipoxy nhamói.',
        translation: 'O vovô está bravo.',
        emoji: '👴',
        choices: [
          // Barros 2014, p. 182 (mbo-)
          { text: "Ko'ánga embovy'a katu nhamói.", translation: 'Agora faça o vovô ficar alegre de fato.', next: 'alegrar' },
          // Barros 2014, p. 203
          { text: 'Opuka hese gwyra kampána.', translation: 'A araponga riu dela.', wrong: 'Falar da araponga não acalma o vovô. Peça para alegrá-lo: “Ko\'ánga embovy\'a katu nhamói.”' },
        ],
      },
      alegrar: {
        // Barros 2014, p. 184
        text: "Tombovy'a jevy nhamói-pe.",
        translation: 'Que eles alegrem o vovô de novo.',
        emoji: '🥳',
        choices: [
          // Barros 2014, p. 194
          { text: "Eju ko'a-py nhanhomongeta.", translation: 'Venha aqui, vamos conversar um com o outro.', next: 'conversa' },
          // Barros 2014, p. 183
          { text: "Tombopy'agwapy nhamói-pe, he'i João.", translation: '“Que eles acalmem o vovô”, disse João.', next: 'conversa' },
        ],
      },
      conversa: {
        // Barros 2014, p. 182 (mboasy)
        text: 'Nde rasy jevy-ma ramo, oromboasy voi xe.',
        translation: 'Quando você ficou doente de novo, eu tive muita pena de você.',
        emoji: '🤒',
        choices: [
          // Barros 2014, p. 201
          { text: 'Iporã ramo pohã ko, oikove jevy arã.', translation: 'Se o remédio for bom, ele vai viver de novo.', next: 'cura' },
          // Barros 2014, p. 170
          { text: 'Ajuka-ta jagwarete-pe.', translation: 'Eu vou matar a onça.', wrong: 'Não há onça nenhuma aqui: o vovô está doente. Fale do remédio: “Iporã ramo pohã ko, oikove jevy arã.”' },
        ],
      },
      cura: {
        // Barros 2014, p. 177
        text: "Xe rasy rei-gwi va'ekwe, xe akwera va'ekwe.",
        translation: 'No passado, eu tinha uma doença comum e sarava.',
        emoji: '❤️‍🩹',
        choices: [
          // Barros 2014, p. 205
          { text: 'Upéixa ore oronhopytygwõmba.', translation: 'Assim nós nos ajudamos.', next: 'final' },
          // Barros 2014, p. 201
          { text: 'Ereipohano nde resa.', translation: 'Você passou remédio no olho.', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 203
        text: "Nhambopy'agwapy jevy nhamói.",
        translation: 'Nós fizemos o vovô ficar calmo de novo.',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'O vovô ficou bom!',
          message: "O vovô sarou e se acalmou: você usou mbo- (embovy'a, nhambopy'agwapy: fazer alguém ficar) e jo- (oronhopytygwõ: nós nos ajudamos).",
        },
      },
    },
    glossary: [
      ['nhamói', 'vovô (como o neto chama)'],
      ["embovy'a", 'faça (alguém) ficar alegre'],
      ['nhanhomongeta', 'vamos conversar um com o outro'],
      ['pohã', 'remédio'],
      ['akwera', 'sarei'],
    ],
  },
  {
    id: 'kgk-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: "Pa'ikwara e Jasy: o sol e a lua",
    emoji: '🌞',
    summary: "Um contador começa uma história dos antigos: os dois irmãos, o sol e a lua, que fizeram a terra e os bichos.",
    // Barros 2014, p. 166 (jasy: Pa'i nhande rugwasu ra'y jasy tyvýry) e p. 198 (Pa'ikwara)
    cultural_context:
      "Nas histórias que os falantes contaram a Eliane de Barros, Pa'ikwara, o sol, é o irmão mais velho, e Jasy, a lua, o mais novo; os dois são filhos de “nosso grande pai”. As falas desta história são frases de várias dessas narrativas, registradas no dicionário; a ordem é do curso, não a de um contador.",
    start: 'inicio',
    nodes: {
      inicio: {
        // Barros 2014, p. 187
        text: "Ãy amombe'u-ta ymagware rehegwa nhe'ẽ.",
        translation: 'Agora vou contar uma história sobre antigamente.',
        emoji: '🧓',
        choices: [
          // Barros 2014, p. 154 (ha'e3)
          { text: "Ha'e.", translation: 'Sim.', next: 'pai' },
          // Barros 2014, p. 174
          { text: "Ko'ẽ ramo aha-ta Tanambi-py.", translation: 'Amanhã vou para Tanambi.', wrong: 'Ele vai contar uma história dos antigos. Fique e diga que está ouvindo: “Ha\'e.”' },
        ],
      },
      pai: {
        // Barros 2014, p. 168
        text: "Yma jeko oiko araka'e nhande ru.",
        translation: 'Antigamente, dizem, viveu nosso pai.',
        emoji: '📜',
        choices: [
          // Barros 2014, p. 219 (va'ekwe)
          { text: "Mokõi mitã oiko va'ekwe.", translation: 'Duas crianças nasceram.', next: 'irmaos' },
        ],
      },
      irmaos: {
        // Barros 2014, p. 166 (jasy) e p. 217 (tyvýry)
        text: "Pa'i nhande rugwasu ra'y jasy tyvýry.",
        translation: 'O sol é o filho do nosso grande pai, e a lua é o seu irmão mais novo.',
        emoji: '🌗',
        choices: [
          // Barros 2014, p. 198
          { text: "Omopu'ã-ma yvy ke'y rusu Pa'ikwara.", translation: 'Pa\'ikwara, o irmão mais velho, fez a terra.', next: 'bichos' },
        ],
      },
      bichos: {
        // Barros 2014, p. 171
        text: "Ojapo gwyrarã, ka'irã.",
        translation: 'Fez os futuros pássaros, os futuros macacos.',
        emoji: '🐒',
        choices: [
          // Barros 2014, p. 147
          { text: "Pa'ikwara apykakwe jakare ramo omondo.", translation: 'O sol transformou o banco velho em jacaré.', next: 'visita' },
          // Barros 2014, p. 169
          { text: 'Ajogwa arã kure.', translation: 'Pretendo comprar porco.', wrong: 'Na história, ninguém compra nada: o sol está criando os bichos. Conte o que ele fez com o banco velho: “Pa\'ikwara apykakwe jakare ramo omondo.”' },
        ],
      },
      visita: {
        // Barros 2014, p. 198
        text: "Upéi Pa'ikwara oho gwyvýry ha-py ipiru ramo.",
        translation: "Depois, Pa'ikwara foi até o irmão mais novo, quando ele estava magro e desgastado.",
        emoji: '🌙',
        choices: [
          // Barros 2014, p. 179
          { text: "Nhane mandu'a-ta jasy-rehe jevy.", translation: 'Nós vamos nos lembrar de novo da lua.', next: 'final' },
        ],
      },
      final: {
        // Barros 2014, p. 183
        text: 'Upe peve nhambopapa.',
        translation: 'Até aí terminamos de contar.',
        emoji: '🌌',
        ending: {
          tone: 'bom',
          title: 'Assim contavam os antigos',
          message: "Você ouviu uma história dos antigos com jeko (dizem que), araka'e (há muito tempo) e va'ekwe, e viu como o sol e a lua, os dois irmãos, fizeram a terra e os bichos.",
        },
      },
    },
    glossary: [
      ['ymagware', 'os antigos; as coisas de antigamente'],
      ["jeko / araka'e", 'dizem que / há muito tempo'],
      ["Pa'ikwara / Jasy", 'o sol / a lua (os irmãos da história)'],
      ['ke\'y rusu / tyvýry', 'irmão mais velho / irmão mais novo'],
      ['nhambopapa', 'terminamos (de contar)'],
    ],
  },
];
