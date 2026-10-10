import type { LanguageVariant } from '../types';
import { ipaDe } from './tracos';

/**
 * O barranquenho, falar da vila de Barrancos, na fronteira com a Espanha: o dono do app decidiu
 * (09/10/2026) que é um dialeto completo, mesmo sendo de uma vila só, por misturar o português com o
 * espanhol da Estremadura e da Andaluzia e mudar mais que o som. O falar não tem escrita fixa: nas
 * histórias, a narração vai no português de Portugal e as falas usam as formas barranquenhas
 * documentadas (nusotrus, andubi, supimus, argo, se lavô, uma bê, Manué, olivá).
 *
 * Fontes: Wikipédia em português («Dialeto barranquenho», consultada em 09/10/2026), que se apoia em
 * José Leite de Vasconcelos, «Filologia Barranquenha» (1955); lei de reconhecimento aprovada pela
 * Assembleia da República em 26 de novembro de 2021.
 */
export const VARIANT_PT_BARRANCOS: LanguageVariant = {
  code: 'pt-barrancos',
  country: 'PRT',
  kind: 'dialeto',
  speechLocale: 'pt-PT',
  ipa: ipaDe('pt-barrancos', 'PT'),
  name: 'Barranquenho',
  flag: '🇵🇹',
  summary:
    'O falar da vila de Barrancos, no Alentejo, colada à Espanha: um português misturado com o espanhol da Estremadura e da Andaluzia. O “s” final vira um sopro, o “j” soa como a “jota” espanhola e “nós” é “nusotrus”. Reconhecido e protegido por lei desde 2021.',
  card: {
    id: 'pt-barrancos-c1',
    title: 'Nusotrus, os de Barrancos',
    emoji: '🐖',
    history:
      'Barrancos fica no extremo leste do Baixo Alentejo, numa ponta de Portugal cercada pela Espanha, entre a Estremadura e a Andaluzia. Durante séculos, a gente da vila viveu, trabalhou e casou dos dois lados da fronteira, a “raia”, e o português de lá misturou-se com o espanhol dos vizinhos. O primeiro a estudar esse falar foi o filólogo José Leite de Vasconcelos, no livro “Filologia Barranquenha”, publicado em 1955, depois da sua morte. Em 2008, o barranquenho foi declarado Património Cultural Imaterial de Interesse Municipal, e em 26 de novembro de 2021 a Assembleia da República aprovou, por unanimidade, uma lei de reconhecimento e proteção do barranquenho e da sua identidade cultural.',
    culture_tip:
      'Em Barrancos, falar barranquenho é motivo de orgulho, mas toda a gente fala também o português padrão, na escola e com quem vem de fora. A vila é terra de montado, o bosque de azinheiras onde o porco preto engorda com bolotas: o Presunto de Barrancos tem Denominação de Origem Protegida. Perto da vila fica o Castelo de Noudar, de onde se vê a Espanha do outro lado do rio.',
    grammar_why:
      'O barranquenho não é só sotaque: a gramática também tem marca espanhola. O pronome “nós” é substituído por “nusotrus” (do espanhol “nosotros”), os pronomes vão antes do verbo como no castelhano (“se lavô”, onde o português padrão diz “lavou-se” e o espanhol “se lavó”) e muitos verbos se conjugam à espanhola: “andubi” (andei, no espanhol “anduve”), “supimus” (soubemos, no espanhol “supimos”). A base, porém, continua portuguesa: por isso os linguistas o chamam de dialeto raiano do português.',
    grammar_examples: [
      ['Nusotrus somos de Barrancos.', 'Nós somos de Barrancos.'],
      ['O Manué se lavô e foi ao campo.', 'O Manuel se lavou e foi para o campo.'],
      ['Andubi todo o dia no olivá.', 'Andei o dia inteiro no olival.'],
      ['Nusotrus supimus a notícia pela televisão.', 'Nós soubemos da notícia pela televisão.'],
      ['Queres argo?', 'Você quer alguma coisa?'],
    ],
    character_guide: null,
  },
  pronunciation: [
    'O “s” e o “z” no fim da sílaba viram uma aspiração, como no espanhol da Estremadura e da Andaluzia: “cruz” soa “cruh”, “buscar” soa “buhcá”. Às vezes a aspiração some de todo: “uma vez” soa “uma bê”.',
    'O “j” e o “g” antes de “e” e “i” soam [x], como a “jota” espanhola: “hoje” [ˈoxi].',
    'O “r” e o “l” no fim da palavra não se pronunciam: “Manuel” soa “Manué”, “olival” soa “olivá”. Voltam no plural: “olivareh”. Antes de consoante, o “l” vira “r”: “algo” soa “argo”.',
    'O “b” e o “v” não se distinguem, como no espanhol: “vaca” soa “baca”.',
    'O “e” final soa “i”, como na Estremadura espanhola: “pobre” soa “pobri”.',
  ],
  vocab: [
    ['nós', 'nusotrus', 'nós', 'do espanhol “nosotros”'],
    ['andei', 'andubi', 'andei', 'do espanhol “anduve”'],
    ['soubemos', 'supimus', 'soubemos', 'do espanhol “supimos”'],
    ['algo', 'argo', 'alguma coisa', 'o “l” antes de consoante vira “r”'],
    ['lavou-se', 'se lavô', 'se lavou', 'o pronome antes do verbo, como no espanhol'],
    ['cruz', 'cruh', 'cruz', 'o “z” final vira um sopro'],
    ['buscar', 'buhcá', 'procurar, buscar'],
    ['uma vez', 'uma bê', 'uma vez'],
    ['olival', 'olivá', 'olival', 'no plural: “olivareh”'],
    ['Manuel', 'Manué', 'Manuel'],
    ['vaca', 'baca', 'vaca', 'sem diferença entre “b” e “v”'],
    ['pobre', 'pobri', 'pobre'],
  ],
  stories: [
    {
      id: 'pt-barrancos-h1',
      variant: 'pt-barrancos',
      level: 'A2.2',
      cefr: 'A2',
      title: 'Do outro lado da raia',
      emoji: '🌳',
      summary: 'O Linu chega a Barrancos e conhece o senhor Manuel, que lhe mostra o montado, os porcos pretos e o jeito barranquenho de falar.',
      cultural_context:
        'Barrancos é uma vila de cerca de mil e quinhentos habitantes, na fronteira do Alentejo com a Espanha. À volta, estende-se o montado, um bosque de azinheiras e sobreiros onde o porco preto se alimenta de bolotas no outono e no inverno. O Presunto de Barrancos tem Denominação de Origem Protegida. Nesta história, a narração está no português de Portugal, e as falas usam formas do barranquenho registadas por Leite de Vasconcelos.',
      start: 'start',
      glossary: [
        ['nusotrus', 'nós'],
        ['Manué', 'Manuel'],
        ['uma bê', 'uma vez'],
        ['argo', 'alguma coisa'],
        ['montado', 'bosque de azinheiras e sobreiros'],
        ['bolota', 'fruto da azinheira'],
      ],
      nodes: {
        start: {
          emoji: '🏘️',
          text: 'O Linu chega a Barrancos ao fim da manhã. Na praça, um senhor de boina acena-lhe: “Bom dia! Eu sou o Manué. Nusotrus aqui falamos à nossa maneira, mas tu percebes, não é?”',
          translation: 'O Linu chega a Barrancos no fim da manhã. Na praça, um senhor de boina acena para ele: “Bom dia! Eu sou o Manuel. Nós aqui falamos do nosso jeito, mas você entende, né?”',
          choices: [
            { text: '“Percebo, sim! Nusotrus quer dizer nós?”', translation: '“Entendo, sim! Nusotrus quer dizer nós?”', next: 'manue' },
            {
              text: 'Linu acha que o senhor está a falar espanhol e responde em espanhol.',
              translation: 'Linu acha que o senhor está falando espanhol e responde em espanhol.',
              wrong: 'O senhor Manuel fala barranquenho: um português com muitas marcas do espanhol da fronteira. Mesmo com “nusotrus”, a base é portuguesa!',
            },
          ],
        },
        manue: {
          emoji: '👴',
          text: '“Isso mesmo!”, ri-se o senhor Manuel. “Aqui dizemos nusotrus, como os vizinhos espanhóis. E não dizemos Manuel, dizemos Manué. Queres ver o montado? Uma bê que vens a Barrancos, tens de ver os porcos.”',
          translation: '“Isso mesmo!”, ri o senhor Manuel. “Aqui a gente diz nusotrus, como os vizinhos espanhóis. E não diz Manuel, diz Manué. Quer ver o montado? Já que você veio uma vez a Barrancos, tem que ver os porcos.”',
          choices: [{ text: 'Vão de carro até ao montado.', translation: 'Vão de carro até o montado.', next: 'montado' }],
        },
        montado: {
          emoji: '🐖',
          text: 'Entre as azinheiras, dezenas de porcos pretos procuram bolotas no chão. “Comem bolota todo o outono”, explica o senhor Manuel. “É por isso que o nosso presunto é tão bom.”',
          translation: 'Entre as azinheiras, dezenas de porcos pretos procuram bolotas no chão. “Comem bolota o outono inteiro”, explica o senhor Manuel. “É por isso que o nosso presunto é tão bom.”',
          choices: [
            { text: 'Linu apanha uma bolota do chão para ver.', translation: 'Linu pega uma bolota do chão para ver.', next: 'bolota' },
            { text: 'Linu tem medo dos porcos e fica no carro.', translation: 'Linu tem medo dos porcos e fica no carro.', next: 'carro' },
          ],
        },
        carro: {
          emoji: '🚙',
          text: 'O senhor Manuel ri-se: “São mansos, homem! Anda cá.” O Linu sai do carro devagar, e um porquinho vem cheirar-lhe as patas.',
          translation: 'O senhor Manuel ri: “São mansos, rapaz! Venha cá.” O Linu sai do carro devagar, e um porquinho vem cheirar as patas dele.',
          choices: [{ text: 'Linu apanha uma bolota.', translation: 'Linu pega uma bolota.', next: 'bolota' }],
        },
        bolota: {
          emoji: '🌰',
          text: 'A bolota é pequena e castanha, como uma noz comprida. “Dá-la ao porquinho”, diz o senhor Manuel. “Depois vamos à minha casa: a minha mulher tem argo para nusotrus comermos.”',
          translation: 'A bolota é pequena e marrom, como uma noz comprida. “Dê para o porquinho”, diz o senhor Manuel. “Depois vamos à minha casa: minha mulher tem alguma coisa para a gente comer.”',
          choices: [
            { text: 'Linu dá a bolota ao porquinho e vão para casa.', translation: 'Linu dá a bolota para o porquinho e vão para casa.', next: 'final_casa' },
            {
              text: 'Linu entende que “argo” é o nome da mulher do senhor Manuel.',
              translation: 'Linu entende que “argo” é o nome da mulher do senhor Manuel.',
              wrong: '“Argo” é o barranquenho de “algo”, alguma coisa: o “l” antes de consoante vira “r”. A mulher do senhor Manuel tem alguma coisa para eles comerem!',
            },
          ],
        },
        final_casa: {
          emoji: '🍽️',
          text: 'Em casa, a mesa tem pão alentejano, presunto de Barrancos e queijo. O Linu prova tudo. “Agora já és um bocadinho barranquenho”, diz o senhor Manuel, a rir.',
          translation: 'Em casa, a mesa tem pão alentejano, presunto de Barrancos e queijo. O Linu prova tudo. “Agora você já é um pouquinho barranquenho”, diz o senhor Manuel, rindo.',
          ending: {
            tone: 'bom',
            title: 'Presunto e nusotrus',
            message: 'Você conheceu Barrancos e aprendeu “nusotrus”, “Manué”, “uma bê” e “argo”: o português da raia, com sabor espanhol.',
          },
        },
      },
    },
    {
      id: 'pt-barrancos-h2',
      variant: 'pt-barrancos',
      level: 'B1.2',
      cefr: 'B1',
      title: 'O castelo de Noudar',
      emoji: '🏰',
      summary: 'Com a neta do senhor Manuel, a Lucía, o Linu sobe ao castelo de Noudar, olha para a Espanha e ouve a história da lei que protegeu o barranquenho.',
      cultural_context:
        'O Castelo de Noudar, do século XIV, fica num morro sobre o rio Ardila, perto de Barrancos, e foi durante séculos um posto da fronteira. Do outro lado, já em Espanha, ficam vilas como Encinasola. O barranquenho foi estudado pelo filólogo José Leite de Vasconcelos e reconhecido por lei pela Assembleia da República em 2021. Nesta história, a narração está no português de Portugal, e as falas usam formas do barranquenho.',
      start: 'start',
      glossary: [
        ['supimus', 'soubemos'],
        ['andubi', 'andei'],
        ['raia', 'fronteira'],
        ['nusotrus', 'nós'],
        ['olivá', 'olival'],
      ],
      nodes: {
        start: {
          emoji: '🚶',
          text: 'A Lucía, neta do senhor Manuel, leva o Linu pelo caminho de terra até ao castelo. Passam por um olivá. “Quando era pequena, andubi aqui todos os verões a apanhar azeitona com o meu avô”, conta ela.',
          translation: 'A Lucía, neta do senhor Manuel, leva o Linu pelo caminho de terra até o castelo. Passam por um olival. “Quando eu era pequena, andei aqui todo verão colhendo azeitona com o meu avô”, conta ela.',
          choices: [
            { text: 'Linu pergunta se ela também fala barranquenho.', translation: 'Linu pergunta se ela também fala barranquenho.', next: 'fala' },
            {
              text: 'Linu acha que “andubi” é o nome de uma árvore.',
              translation: 'Linu acha que “andubi” é o nome de uma árvore.',
              wrong: '“Andubi” é o verbo “andar” no passado, conjugado à espanhola (“anduve”): quer dizer “andei”.',
            },
          ],
        },
        fala: {
          emoji: '💬',
          text: '“Falo com a família e com os amigos”, responde a Lucía. “Na escola e com quem vem de fora, falo português normal. Os meus pais diziam que era falar mal; hoje temos orgulho.”',
          translation: '“Falo com a família e com os amigos”, responde a Lucía. “Na escola e com quem vem de fora, falo o português normal. Meus pais diziam que era falar errado; hoje a gente tem orgulho.”',
          choices: [{ text: 'Chegam ao castelo.', translation: 'Chegam ao castelo.', next: 'castelo' }],
        },
        castelo: {
          emoji: '🏰',
          text: 'Do alto das muralhas de Noudar, vê-se o rio lá em baixo e, do outro lado, os montes de Espanha. “Ali já é Espanha”, aponta a Lucía. “Durante séculos, a gente daqui atravessava a raia para trabalhar, comerciar e namorar.”',
          translation: 'Do alto das muralhas de Noudar, dá para ver o rio lá embaixo e, do outro lado, os morros da Espanha. “Ali já é a Espanha”, aponta a Lucía. “Durante séculos, o povo daqui atravessava a fronteira para trabalhar, fazer comércio e namorar.”',
          choices: [
            { text: '“Por isso é que o barranquenho tem tanto espanhol!”', translation: '“É por isso que o barranquenho tem tanto espanhol!”', next: 'lei' },
            { text: 'Linu fica calado, a olhar a paisagem.', translation: 'Linu fica calado, olhando a paisagem.', next: 'lei' },
          ],
        },
        lei: {
          emoji: '📜',
          text: '“E sabes a melhor parte?”, diz a Lucía. “Em 2021, o parlamento aprovou uma lei para proteger o barranquenho. Nusotrus supimus pela televisão e a vila inteira fez festa.”',
          translation: '“E sabe a melhor parte?”, diz a Lucía. “Em 2021, o parlamento aprovou uma lei para proteger o barranquenho. A gente soube pela televisão e a vila inteira fez festa.”',
          choices: [
            { text: 'Linu pede-lhe que lhe ensine mais palavras.', translation: 'Linu pede que ela ensine mais palavras.', next: 'final_palavras' },
            { text: 'Começa a escurecer e voltam à vila.', translation: 'Começa a escurecer e voltam para a vila.', next: 'final_volta' },
            {
              text: 'Linu entende que a lei proibiu o barranquenho.',
              translation: 'Linu entende que a lei proibiu o barranquenho.',
              wrong: 'É o contrário: a lei de 2021 reconheceu e protegeu o barranquenho. Por isso a vila fez festa!',
            },
          ],
        },
        final_palavras: {
          emoji: '📝',
          text: 'A Lucía ensina: “buhcá” é buscar, “pobri” é pobre, “baca” é vaca. O Linu escreve tudo num caderno. “Para a próxima, vens às festas de agosto”, convida ela.',
          translation: 'A Lucía ensina: “buhcá” é buscar, “pobri” é pobre, “baca” é vaca. O Linu anota tudo num caderno. “Na próxima, você vem para as festas de agosto”, convida ela.',
          ending: {
            tone: 'bom',
            title: 'Um caderno de barranquenho',
            message: 'Você subiu a Noudar, aprendeu “andubi” e “supimus” e descobriu que um falar de uma vila só também pode ser protegido por lei.',
          },
        },
        final_volta: {
          emoji: '🌄',
          text: 'Descem o morro ao pôr do sol. A Lucía vai a cantarolar, e o Linu tenta repetir as palavras novas. Tropeça no “nusotrus”, mas a Lucía diz que está quase.',
          translation: 'Descem o morro no pôr do sol. A Lucía vai cantarolando, e o Linu tenta repetir as palavras novas. Tropeça no “nusotrus”, mas a Lucía diz que está quase.',
          ending: {
            tone: 'bom',
            title: 'Quase barranquenho',
            message: 'O Linu ainda tropeça no “nusotrus”, mas já sabe que o barranquenho é português com sabor da raia.',
          },
        },
      },
    },
  ],
};
