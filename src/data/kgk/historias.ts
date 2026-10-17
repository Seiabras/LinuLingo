import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaiowá, uma por subnível do A1.1 ao A2.2. Revisão de 17/10/2026: as falas são
 * frases do «Dicionário bilíngue kaiwá-português» de Eliane B. L. de Barros (UFMS, 2014), copiadas como
 * estão (ou só a oração principal, marcada «oração tirada de»), com a página impressa; «agwyjevete» vem
 * do glossário de Eliel Benites (UFGD), na grafia do curso. Nenhuma fala foi montada. As personagens são
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
          // Benites 2022 (grafia do curso) e Barros 2014, p. 189
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
        translation: 'Minha mãe está sentada.',
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
          // Barros 2014, p. 171
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
];
