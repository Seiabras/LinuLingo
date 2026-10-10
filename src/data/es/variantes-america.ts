import type { LanguageVariant } from '../types';
import { ipaEsDe } from './tracos';

/**
 * Os dialetos do espanhol nas Américas, além do padrão latino-americano e do rioplatense
 * (decisão do dono, 09/10/2026): o México e o Chile, que são nacionais, e três grandes grupos, o
 * Caribe, os Andes e a América Central. Cada um com cartão, pronúncia, vocabulário e duas
 * histórias. O vocabulário vem no formato [padrão latino-americano do app, o dialeto, explicação,
 * nota]; nas histórias, o texto está no espanhol de lá e a tradução em português.
 *
 * Fontes: Wikipédia em espanhol («Español mexicano», «Español chileno», «Español caribeño», «Español
 * andino», «Español centroamericano», consultadas em 09/10/2026) e o que elas citam: Moreno de Alba e
 * Lapesa (México); Rabanales (2000) e Castillo Fadic (Chile); Alvar (1996) e Lipski (Caribe e
 * América Central); Cerrón Palomino (2003) e Granda (2001) (Andes). Os patrimônios da UNESCO, pela
 * lista oficial.
 */
export const VARIANTS_ES_AMERICA: LanguageVariant[] = [
  // ───────────────────────────── MÉXICO ─────────────────────────────
  {
    code: 'es-MX',
    country: 'MEX',
    kind: 'dialeto',
    speechLocale: 'es-MX',
    ipa: ipaEsDe('es-MX', '419'),
    name: 'Espanhol do México',
    flag: '🇲🇽',
    summary:
      'O país com mais falantes de espanhol do mundo, mais que o dobro de qualquer outro. O “s” sempre bem pronunciado, vogais átonas curtinhas, muitas palavras do náuatle e o “¿mande?” de cortesia.',
    card: {
      id: 'es-mx-c1',
      title: 'Ahorita, ¿mande?',
      emoji: '🇲🇽',
      history:
        'A Cidade do México foi por quase três séculos a capital do Vice-Reino da Nova Espanha, que ia do sudoeste dos atuais Estados Unidos até a Costa Rica, e virou um dos grandes centros do espanhol fora da Espanha. Hoje o espanhol é falado por mais de 99% dos mexicanos e é a língua materna de cerca de 93% deles; os outros falam uma das línguas indígenas do país, como o náuatle, o maia ou o mixteco. O espanhol do centro do México é a base do “espanhol neutro” da maior parte das dublagens para a América Latina: é muito provável que você já o tenha ouvido em desenhos e filmes.',
      culture_tip:
        'A cortesia mexicana é famosa. Para pedir que alguém repita, diz-se “¿mande?” (literalmente, “mande”), e não um seco “¿qué?”. Os diminutivos amaciam tudo: “ahorita” (agorinha), “un cafecito”, “con permisito”. Mas cuidado: “ahorita” pode ser agora mesmo ou daqui a algumas horas, conforme o tom. E se alguém disser que uma coisa está “padre” ou “chida”, está elogiando: quer dizer “legal”.',
      grammar_why:
        'O espanhol mexicano tem construções que surpreendem até outros hispanofalantes. A mais traiçoeira é o “hasta” sem “no”: “Cierran hasta las nueve” quer dizer que só fecham às nove, e não que ficam abertos até as nove (na Espanha se diria “No cierran hasta las nueve”). Para perguntar intensidade, usa-se “¿qué tan…?”: “¿Qué tan lejos está?”. E quando o “se” representa várias pessoas, o plural passa para o pronome seguinte: “Ya se los dije” (já disse isso a vocês), um traço estudado por José G. Moreno de Alba.',
      grammar_examples: [
        ['Cierran hasta las nueve.', 'Eles só fecham às nove.'],
        ['¿Qué tan lejos está el mercado?', 'O mercado fica muito longe?'],
        ['Ya se los dije a ustedes.', 'Eu já disse isso a vocês.'],
        ['¿Mande?', 'Como? Pode repetir? (com educação)'],
        ['Ahorita vengo.', 'Já volto (agorinha, ou daqui a pouco).'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “s” no fim da sílaba é sempre pronunciado, com força: “los estudiantes” soa com todos os “s”. Nas costas, porém, ele enfraquece, como no Caribe.',
      'As vogais átonas encostadas no “s” ficam tão curtas que quase somem: “pesas”, “peces” e “pesos” podem soar iguais, e “necesito” soa “nec’sito”, um traço apontado pelo filólogo Rafael Lapesa.',
      'O “d” entre vogais e no fim da palavra se mantém: “cansado”, “ciudad”. Deixá-lo cair, como no Caribe, soa descuidado no México.',
      'O “x” tem vários sons: [x] em “México” e “Oaxaca” (uma grafia antiga), [s] em “Xochimilco”, [ʃ] em palavras de origem maia. Nomes do náuatle trazem o som [ts], escrito “tz”: “Tzintzuntzan”.',
      'No norte, o “ch” soa [ʃ], como o “x” de “xícara”: “muchacho” → [muˈʃaʃo].',
    ],
    vocab: [
      ['autobús', 'camión', 'ônibus', 'no México, “camión” é também ônibus'],
      ['trabajo', 'chamba', 'trabalho, trampo'],
      ['dinero', 'lana', 'grana'],
      ['amigo', 'cuate', 'amigo, chegado', 'do náuatle “cōātl”, gêmeo'],
      ['conversar', 'platicar', 'conversar, bater papo'],
      ['¡qué bien!', '¡qué padre!, ¡qué chido!', 'que legal!'],
      ['¿cómo?, ¿perdón?', '¿mande?', 'como? (pedindo para repetir)'],
      ['ahora', 'ahorita', 'agora; daqui a pouco', 'depende do tom'],
      ['niño', 'chamaco, escuincle', 'criança, moleque', '“escuincle” vem do náuatle'],
      ['maíz (espiga)', 'elote', 'espiga de milho', 'do náuatle “elotl”'],
      ['tomate', 'jitomate', 'tomate', 'do náuatle; “tomate” é o tomate verde'],
      ['pajita', 'popote', 'canudo', 'do náuatle'],
      ['pavo', 'guajolote', 'peru', 'do náuatle'],
      ['mercado al aire libre', 'tianguis', 'feira de rua', 'do náuatle'],
      ['bolígrafo', 'pluma', 'caneta'],
      ['sándwich de pan blanco', 'torta', 'sanduíche de pão francês', 'em outros países, “torta” é bolo'],
      ['refrigerador', 'refri', 'geladeira'],
    ],
    stories: [
      {
        id: 'es-mx-h1',
        variant: 'es-MX',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Tianguis en Coyoacán',
        emoji: '🌽',
        summary: 'Na Cidade do México, a amiga Ximena leva o Linu a um tianguis em Coyoacán, ensina o “¿mande?” e oferece um elote.',
        cultural_context:
          'Coyoacán é um bairro antigo da Cidade do México, de praças e ruas de pedra, onde fica a Casa Azul, a casa onde viveu a pintora Frida Kahlo e que hoje é museu. Os “tianguis” são feiras de rua (a palavra vem do náuatle “tianquiztli”, mercado), e o “elote”, a espiga de milho, se come com maionese, queijo, pimenta e limão.',
        start: 'start',
        glossary: [
          ['¿mande?', 'como? (para pedir que repita)'],
          ['tianguis', 'feira de rua'],
          ['elote', 'espiga de milho'],
          ['¡qué padre!', 'que legal!'],
          ['ahorita', 'agorinha'],
          ['cuate', 'amigo'],
        ],
        nodes: {
          start: {
            emoji: '📱',
            text: 'Linu recibe un mensaje: “¡Hola, cuate! Soy Ximena. Hoy hay tianguis en Coyoacán. ¿Vamos? Te veo ahorita en la plaza.”',
            translation: 'Linu recebe uma mensagem: “Oi, amigo! Aqui é a Ximena. Hoje tem feira em Coyoacán. Vamos? Te encontro agorinha na praça.”',
            choices: [
              { text: '“¡Claro! Ya voy.”', translation: '“Claro! Já estou indo.”', next: 'plaza' },
              {
                text: 'Linu acha que “cuate” é um xingamento.',
                translation: 'Linu acha que “cuate” é um xingamento.',
                wrong: 'No México, “cuate” quer dizer amigo. A palavra vem do náuatle e é carinhosa!',
              },
            ],
          },
          plaza: {
            emoji: '🌳',
            text: 'En la plaza hay música y niños jugando. Ximena dice algo muy rápido. Linu no entiende. Ella sonríe y espera.',
            translation: 'Na praça tem música e crianças brincando. A Ximena diz alguma coisa muito rápido. Linu não entende. Ela sorri e espera.',
            choices: [
              { text: '“¿Mande?”', translation: '“Como? Pode repetir?”', next: 'mande' },
              { text: '“¿Qué?”', translation: '“O quê?”', next: 'que' },
            ],
          },
          que: {
            emoji: '🙂',
            text: 'Ximena se ríe: “Aquí decimos ‘¿mande?’, es más amable. ‘¿Qué?’ suena un poco seco.” Linu lo repite: “¿Mande?” “¡Eso!”',
            translation: 'Ximena ri: “Aqui a gente diz ‘mande?’, é mais gentil. ‘Quê?’ soa meio seco.” Linu repete: “Mande?” “Isso!”',
            choices: [{ text: 'Ella repite lo que dijo.', translation: 'Ela repete o que tinha dito.', next: 'mande' }],
          },
          mande: {
            emoji: '🛍️',
            text: '“Te decía que el tianguis está aquí cerquita, junto a la Casa Azul de Frida Kahlo.” Entre los puestos hay frutas, flores, juguetes de madera y un señor que vende elotes.',
            translation: '“Eu estava dizendo que a feira fica aqui pertinho, do lado da Casa Azul da Frida Kahlo.” Entre as barracas tem frutas, flores, brinquedos de madeira e um senhor que vende espiga de milho.',
            choices: [
              { text: 'Linu quiere probar un elote.', translation: 'Linu quer provar um milho.', next: 'elote' },
              { text: 'Linu prefiere ver la Casa Azul primero.', translation: 'Linu prefere ver a Casa Azul primeiro.', next: 'casa' },
            ],
          },
          casa: {
            emoji: '💙',
            text: 'La Casa Azul es de un azul fortísimo. Hay una fila larga para entrar. “Hoy no da tiempo”, dice Ximena. “Mejor comemos algo y volvemos otro día.”',
            translation: 'A Casa Azul é de um azul fortíssimo. Tem uma fila comprida para entrar. “Hoje não dá tempo”, diz a Ximena. “Melhor a gente comer alguma coisa e voltar outro dia.”',
            choices: [{ text: 'Vuelven al tianguis.', translation: 'Voltam para a feira.', next: 'elote' }],
          },
          elote: {
            emoji: '🌽',
            text: 'El señor prepara el elote con mayonesa, queso, chile en polvo y limón. “¿Le pongo chile?”, pregunta.',
            translation: 'O senhor prepara o milho com maionese, queijo, pimenta em pó e limão. “Ponho pimenta?”, pergunta.',
            choices: [
              { text: '“Sí, poquito, por favor.”', translation: '“Sim, só um pouquinho, por favor.”', next: 'final_bom' },
              { text: '“¡Mucho chile!”', translation: '“Bastante pimenta!”', next: 'final_picante' },
              {
                text: 'Linu acha que “elote” é um tipo de bolo.',
                translation: 'Linu acha que “elote” é um tipo de bolo.',
                wrong: '“Elote” é a espiga de milho, palavra que vem do náuatle. O senhor está preparando um milho, não um bolo!',
              },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: 'El elote está delicioso. “¡Qué padre está el tianguis!”, dice Linu. Ximena aplaude: “¡Ya hablas como mexicano!”',
            translation: 'O milho está delicioso. “Que legal é essa feira!”, diz Linu. A Ximena aplaude: “Você já fala como um mexicano!”',
            ending: {
              tone: 'bom',
              title: 'Elote con poquito chile',
              message: 'Você aprendeu o “¿mande?”, o “ahorita”, o “cuate” e o “¡qué padre!”, e provou um elote no tianguis.',
            },
          },
          final_picante: {
            emoji: '🥵',
            text: 'El chile pica muchísimo. Linu llora y se ríe al mismo tiempo. El señor le da un vaso de agua de jamaica: “Para la próxima, poquito, ¿eh?”',
            translation: 'A pimenta arde muito. Linu chora e ri ao mesmo tempo. O senhor dá um copo de água de hibisco para ele: “Da próxima vez, só um pouquinho, hein?”',
            ending: {
              tone: 'neutro',
              title: 'Chile de más',
              message: 'O pinguim exagerou na pimenta. No México, “poquito” é a palavra mais segura na hora do chile.',
            },
          },
        },
      },
      {
        id: 'es-mx-h2',
        variant: 'es-MX',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Hasta las nueve en Oaxaca',
        emoji: '💃',
        summary: 'Em Oaxaca, durante a Guelaguetza, o Linu se confunde com o “hasta” mexicano e com o “ahorita”, mas acaba provando mole negro com a família do Emiliano.',
        cultural_context:
          'Oaxaca, no sul do México, é a terra de muitos povos indígenas, como os zapotecas e os mixtecos. Em julho, a festa da Guelaguetza reúne danças e trajes de todas as regiões do estado. O centro histórico de Oaxaca é Patrimônio Mundial da UNESCO desde 1987, e o mole negro, um molho de pimentas, chocolate e especiarias, é um dos pratos mais famosos do país.',
        start: 'start',
        glossary: [
          ['hasta las nueve', 'só às nove (no México, com o verbo “cerrar” e outros)'],
          ['ahorita', 'agorinha; daqui a pouco'],
          ['¿qué tan…?', 'quão…?'],
          ['platicar', 'conversar'],
          ['camión', 'ônibus'],
        ],
        nodes: {
          start: {
            emoji: '🏛️',
            text: 'Linu y Emiliano caminan por el centro de Oaxaca. Linu quiere comprar un regalo en una tienda de artesanías. Emiliano lee el letrero: “Cierran hasta las nueve. Tenemos tiempo.”',
            translation: 'Linu e Emiliano andam pelo centro de Oaxaca. Linu quer comprar um presente numa loja de artesanato. Emiliano lê a placa: “Eles só fecham às nove. A gente tem tempo.”',
            choices: [
              { text: 'Linu entiende que la tienda está abierta y pueden ir con calma.', translation: 'Linu entende que a loja está aberta e que podem ir com calma.', next: 'tienda' },
              {
                text: 'Linu entende que la tienda está cerrada hasta las nueve y que hay que esperar.',
                translation: 'Linu entende que a loja está fechada até as nove e que é preciso esperar.',
                wrong: 'No México, “cierran hasta las nueve” quer dizer que só fecham às nove: a loja está aberta agora. É uma das armadilhas mais famosas do espanhol mexicano!',
              },
            ],
          },
          tienda: {
            emoji: '🧶',
            text: 'En la tienda hay alebrijes, figuras de madera pintadas de mil colores. La vendedora pregunta: “¿Qué tan grande lo quiere?” Linu escoge uno pequeño, con forma de pingüino.',
            translation: 'Na loja tem alebrijes, figuras de madeira pintadas de mil cores. A vendedora pergunta: “De que tamanho o senhor quer?” Linu escolhe um pequeno, em forma de pinguim.',
            choices: [{ text: 'Salen a la calle.', translation: 'Saem para a rua.', next: 'guelaguetza' }],
          },
          guelaguetza: {
            emoji: '🎉',
            text: 'Por la calle pasa un desfile de la Guelaguetza: mujeres con faldas de colores, música de banda y piñas que bailan sobre los hombros. “Mi mamá nos espera para comer”, dice Emiliano. “Ahorita vamos.”',
            translation: 'Pela rua passa um desfile da Guelaguetza: mulheres de saias coloridas, música de banda e abacaxis que dançam sobre os ombros. “Minha mãe está esperando a gente para comer”, diz Emiliano. “Daqui a pouco a gente vai.”',
            choices: [
              { text: 'Linu se queda a ver el desfile un rato.', translation: 'Linu fica vendo o desfile um pouco.', next: 'ahorita' },
              { text: 'Linu sale corriendo hacia la casa.', translation: 'Linu sai correndo para a casa.', next: 'corre' },
            ],
          },
          corre: {
            emoji: '🏃',
            text: 'Emiliano lo detiene, riendo: “¡Espérate! Ahorita no es ahora mismo. Primero vemos el desfile.”',
            translation: 'Emiliano segura o Linu, rindo: “Espera! ‘Ahorita’ não é agora mesmo. Primeiro a gente vê o desfile.”',
            choices: [{ text: 'Ven el desfile juntos.', translation: 'Veem o desfile juntos.', next: 'ahorita' }],
          },
          ahorita: {
            emoji: '🚌',
            text: 'Una hora después, toman el camión hacia la casa de Emiliano. Su mamá los recibe con un plato de mole negro, tortillas y chocolate caliente. “Siéntense, siéntense. ¿Qué tan picante les gusta?”',
            translation: 'Uma hora depois, pegam o ônibus para a casa do Emiliano. A mãe dele recebe os dois com um prato de mole negro, tortilhas e chocolate quente. “Sentem, sentem. Vocês gostam de quanta pimenta?”',
            choices: [
              { text: 'Linu prueba el mole y platica con la familia.', translation: 'Linu prova o mole e conversa com a família.', next: 'final_mole' },
              { text: 'Linu solo toma el chocolate.', translation: 'Linu só toma o chocolate.', next: 'final_chocolate' },
            ],
          },
          final_mole: {
            emoji: '🍫',
            text: 'El mole es dulce, picante y oscuro, con más de veinte ingredientes. Linu platica con la familia hasta la noche y les regala el alebrije de pingüino.',
            translation: 'O mole é doce, picante e escuro, com mais de vinte ingredientes. Linu conversa com a família até a noite e dá de presente o alebrije de pinguim.',
            ending: {
              tone: 'bom',
              title: 'Mole en familia',
              message: 'Você entendeu o “hasta” e o “ahorita” mexicanos, duas pegadinhas famosas, e conheceu a Guelaguetza de Oaxaca.',
            },
          },
          final_chocolate: {
            emoji: '☕',
            text: 'El chocolate oaxaqueño es espeso y perfumado. La mamá de Emiliano le guarda un poco de mole para mañana: “Para que lo pruebe con calma.”',
            translation: 'O chocolate de Oaxaca é grosso e perfumado. A mãe do Emiliano guarda um pouco de mole para o dia seguinte: “Para você provar com calma.”',
            ending: {
              tone: 'neutro',
              title: 'Mole para mañana',
              message: 'O mole ficou para o dia seguinte. Mas o chocolate de Oaxaca já valeu a viagem.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── AMÉRICA CENTRAL ─────────────────────────────
  {
    code: 'es-centroamerica',
    country: 'SLV',
    kind: 'dialeto',
    speechLocale: 'es-CR',
    ipa: ipaEsDe('es-centroamerica', '419'),
    name: 'Espanhol da América Central',
    flag: '🌋',
    summary:
      'O espanhol de Guatemala, El Salvador, Honduras, Nicarágua e Costa Rica: o “vos” é a norma de todas as classes, a “jota” é um sopro e cada país tem um apelido carinhoso, como “chapín”, “guanaco”, “catracho”, “nica” e “tico”.',
    card: {
      id: 'es-ca-c1',
      title: 'Vos, chunche y pura vida',
      emoji: '🌋',
      history:
        'Durante o período colonial, a América Central formou a Capitania-Geral da Guatemala, ligada ao Vice-Reino da Nova Espanha, e depois da independência, em 1821, chegou a ser uma só república, a República Federal da América Central, que se desfez no fim da década de 1830. Por isso os cinco países, mais o estado mexicano de Chiapas, partilham muito do vocabulário e da gramática, mas cada um tem traços próprios: não há um espanhol centro-americano único, e sim um contínuo. O Panamá, que fez parte da Colômbia até 1903, fala uma variedade do espanhol do Caribe.',
      culture_tip:
        'Cada povo da região tem o seu apelido, usado com carinho: os guatemaltecos são “chapines”, os salvadorenhos “guanacos”, os hondurenhos “catrachos”, os nicaraguenses “nicas” e os costa-riquenhos “ticos”. Na Costa Rica, “¡pura vida!” serve de oi, de tchau e de “tudo bem”. E não estranhe se uma pessoa tratar o amigo por “vos” e a mãe por “usted”: são graus diferentes de intimidade.',
      grammar_why:
        'Em quase toda a América Central, o “vos” é o pronome da intimidade em todas as classes sociais e faz parte da norma culta; na Nicarágua, é a forma normal até na escrita. As formas são as mesmas do rioplatense: “vos tenés”, “vos sos”, “vení”. Na Costa Rica, o “usted” se espalhou tanto que é usado até com amigos, crianças e bichos de estimação. O diminutivo “-ico” depois de “t” (“momentico”, “chiquitico”) deu aos costa-riquenhos o apelido de “ticos”.',
      grammar_examples: [
        ['¿Vos querés una pupusa?', 'Você quer uma pupusa?'],
        ['Vení, mirá este chunche.', 'Vem, olha esse troço.'],
        ['¡Qué chivo!', 'Que legal! (Guatemala e El Salvador)'],
        ['¿Usted ya comió, mi amor?', 'Você já comeu, meu amor? (Costa Rica)'],
        ['Espéreme un momentico.', 'Me espere um minutinho.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A “jota” é um sopro [h], como o “h” do inglês: “jugo” [ˈhuɣo], “gente” [ˈhente].',
      'O “s” no fim da sílaba vira aspiração [h], sobretudo na Nicarágua e em Honduras, menos em El Salvador e na Guatemala, e pouco na Costa Rica.',
      'O “b”, o “d” e o “g” entre vogais são sempre suaves e bem pronunciados; não há troca entre “l” e “r”, como no Caribe.',
      'Na Costa Rica, o “rr” e o “r” do começo da palavra saem assibilados, parecidos com o “j” de “já”: “carro” [ˈkaʐo].',
    ],
    vocab: [
      ['tú', 'vos', 'você (informal)', '“vos tenés”, “vos sos”, “vení”'],
      ['cosa', 'chunche', 'coisa, troço'],
      ['niño', 'cipote (SV, HN), patojo (GT)', 'criança, moleque'],
      ['¡qué bien!', '¡qué chivo! (GT, SV)', 'que legal!'],
      ['tienda de barrio', 'pulpería', 'mercearia de bairro', 'Honduras, Nicarágua, Costa Rica'],
      ['persona rubia', 'chele', 'pessoa loira, de pele clara', 'Nicarágua, Honduras, El Salvador'],
      ['guatemalteco', 'chapín', 'guatemalteco'],
      ['salvadoreño', 'guanaco', 'salvadorenho'],
      ['hondureño', 'catracho', 'hondurenho'],
      ['nicaragüense', 'nica', 'nicaraguense'],
      ['costarricense', 'tico', 'costa-riquenho'],
      ['¡hola!, ¡todo bien!', '¡pura vida!', 'oi!, tudo bem!, valeu!', 'Costa Rica'],
      ['solo, solísimo', 'íngrimo', 'completamente só', 'palavra centro-americana registrada pela Real Academia Espanhola'],
    ],
    stories: [
      {
        id: 'es-ca-h1',
        variant: 'es-centroamerica',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Pupusas en San Salvador',
        emoji: '🫓',
        summary: 'Em San Salvador, o amigo Óscar leva o Linu a uma pupuseria e ensina a falar de “vos” e a dizer “¡qué chivo!”.',
        cultural_context:
          'A pupusa, uma tortilha grossa de milho recheada de queijo, feijão ou carne de porco, é o prato nacional de El Salvador; vem acompanhada de “curtido”, uma conserva de repolho, e de molho de tomate. Em El Salvador, o “vos” é a forma de tratamento entre amigos.',
        start: 'start',
        glossary: [
          ['¿vos querés…?', 'você quer…?'],
          ['¡qué chivo!', 'que legal!'],
          ['cipote', 'criança'],
          ['chunche', 'coisa, troço'],
          ['curtido', 'conserva de repolho'],
        ],
        nodes: {
          start: {
            emoji: '👋',
            text: 'Óscar saluda a Linu en la puerta del hotel: “¡Hola, Linu! ¿Vos tenés hambre? Te llevo a la mejor pupusería de San Salvador.”',
            translation: 'Óscar cumprimenta o Linu na porta do hotel: “Oi, Linu! Você está com fome? Vou te levar à melhor pupuseria de San Salvador.”',
            choices: [
              { text: '“¡Sí! ¿Qué es una pupusa?”', translation: '“Sim! O que é uma pupusa?”', next: 'pupusa' },
              {
                text: 'Linu acha que “vos” é só da Argentina e que o Óscar está brincando.',
                translation: 'Linu acha que “vos” é só da Argentina e que o Óscar está brincando.',
                wrong: 'O “vos” é usado em grande parte da América Central, e em El Salvador é a forma normal entre amigos. O Óscar está falando sério!',
              },
            ],
          },
          pupusa: {
            emoji: '🫓',
            text: '“Es una tortilla gruesa, rellena de queso o de frijoles”, explica Óscar. En la pupusería, una señora hace las pupusas con las manos, rapidísimo. Unos cipotes miran a Linu con curiosidad.',
            translation: '“É uma tortilha grossa, recheada de queijo ou de feijão”, explica Óscar. Na pupuseria, uma senhora faz as pupusas com as mãos, rapidíssimo. Umas crianças olham o Linu com curiosidade.',
            choices: [
              { text: 'Linu pide una pupusa de queso.', translation: 'Linu pede uma pupusa de queijo.', next: 'mesa' },
              { text: 'Linu pide una de cada sabor.', translation: 'Linu pede uma de cada sabor.', next: 'muchas' },
            ],
          },
          muchas: {
            emoji: '🤯',
            text: 'Llegan cinco pupusas enormes. Óscar se ríe: “¡Vos sí que tenés hambre!” Los cipotes también se ríen.',
            translation: 'Chegam cinco pupusas enormes. Óscar ri: “Você está mesmo com fome!” As crianças também riem.',
            choices: [{ text: 'Se sientan a comer.', translation: 'Sentam-se para comer.', next: 'mesa' }],
          },
          mesa: {
            emoji: '🥗',
            text: 'En la mesa hay un frasco con repollo y zanahoria. “Ese chunche es el curtido”, dice Óscar. “Se pone encima de la pupusa, con salsa de tomate. Y se come con la mano.”',
            translation: 'Na mesa tem um pote com repolho e cenoura. “Esse troço é o curtido”, diz Óscar. “Se põe em cima da pupusa, com molho de tomate. E se come com a mão.”',
            choices: [
              { text: 'Linu come con la mano, como Óscar.', translation: 'Linu come com a mão, como o Óscar.', next: 'final_bom' },
              { text: 'Linu pide cuchillo y tenedor.', translation: 'Linu pede faca e garfo.', next: 'final_cubiertos' },
              {
                text: 'Linu acha que “chunche” é o nome de um bicho.',
                translation: 'Linu acha que “chunche” é o nome de um bicho.',
                wrong: 'Na América Central, “chunche” quer dizer “coisa, troço”. O Óscar está falando do pote de curtido!',
              },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: 'La pupusa está caliente y el queso se estira. “¡Qué chivo!”, dice Linu. Óscar levanta el pulgar: “¡Ya sos guanaco!”',
            translation: 'A pupusa está quente e o queijo estica. “Que legal!”, diz Linu. Óscar faz joinha: “Você já é salvadorenho!”',
            ending: {
              tone: 'bom',
              title: '¡Qué chivo!',
              message: 'Você comeu pupusas, aprendeu “chunche”, “cipote” e “¡qué chivo!” e viu o “vos” no dia a dia de El Salvador.',
            },
          },
          final_cubiertos: {
            emoji: '🍴',
            text: 'La señora le trae cubiertos, un poco sorprendida. La pupusa se rompe con el cuchillo. Óscar le dice: “La próxima, con la mano, como se debe.”',
            translation: 'A senhora traz talheres, um pouco surpresa. A pupusa se desmancha com a faca. Óscar diz: “Da próxima vez, com a mão, como tem que ser.”',
            ending: {
              tone: 'neutro',
              title: 'Pupusa con tenedor',
              message: 'Deu para comer, mas a pupusa se come com a mão. Fica a lição para a próxima.',
            },
          },
        },
      },
      {
        id: 'es-ca-h2',
        variant: 'es-centroamerica',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Pura vida en Monteverde',
        emoji: '🐦',
        summary: 'Na Costa Rica, o Linu caminha pela floresta nublada de Monteverde com a guia Daniela, que trata todo mundo por “usted”, e procura o quetzal.',
        cultural_context:
          'A Costa Rica protege cerca de um quarto do seu território em parques e reservas. Em Monteverde, a floresta nublada, sempre coberta de neblina, abriga o quetzal-resplandecente, uma ave de penas verdes e vermelhas que era sagrada para os maias. Os costa-riquenhos usam “usted” até com amigos e família, e respondem a quase tudo com “¡pura vida!”.',
        start: 'start',
        glossary: [
          ['¡pura vida!', 'oi!, tudo bem!, valeu!'],
          ['usted', 'você (na Costa Rica, até entre amigos)'],
          ['tico', 'costa-riquenho'],
          ['pulpería', 'mercearia de bairro'],
          ['momentico', 'minutinho'],
        ],
        nodes: {
          start: {
            emoji: '🌫️',
            text: 'La guía, Daniela, recibe a Linu en la entrada de la reserva. “¡Pura vida! ¿Usted trajo chaqueta? Aquí arriba hace frío y siempre hay neblina.”',
            translation: 'A guia, Daniela, recebe o Linu na entrada da reserva. “Oi, tudo bem? Você trouxe casaco? Aqui em cima faz frio e sempre tem neblina.”',
            choices: [
              { text: '“¡Pura vida! Sí, traje chaqueta.”', translation: '“Tudo ótimo! Sim, trouxe casaco.”', next: 'sendero' },
              {
                text: 'Linu se ofende porque a Daniela o trata por “usted”, como a um velho.',
                translation: 'Linu se ofende porque a Daniela o trata por “usted”, como se fosse um velho.',
                wrong: 'Na Costa Rica, o “usted” é usado com quase todo mundo, até com amigos e crianças. Não tem nada de distante: é o jeito tico de falar!',
              },
            ],
          },
          sendero: {
            emoji: '🌿',
            text: 'Caminan por un sendero entre árboles cubiertos de musgo. Daniela habla bajito: “Si usted oye un canto así, como un silbido, puede ser el quetzal.”',
            translation: 'Andam por uma trilha entre árvores cobertas de musgo. Daniela fala baixinho: “Se você ouvir um canto assim, como um assobio, pode ser o quetzal.”',
            choices: [
              { text: 'Linu camina en silencio, escuchando.', translation: 'Linu anda em silêncio, escutando.', next: 'puente' },
              { text: 'Linu habla y se ríe en voz alta.', translation: 'Linu fala e ri alto.', next: 'ruido' },
            ],
          },
          ruido: {
            emoji: '🤫',
            text: '“Shh, un momentico”, dice Daniela. “Con ruido los pájaros se esconden.” Linu se tapa el pico con el ala.',
            translation: '“Psiu, um minutinho”, diz Daniela. “Com barulho os pássaros se escondem.” Linu tapa o bico com a asa.',
            choices: [{ text: 'Siguen en silencio.', translation: 'Seguem em silêncio.', next: 'puente' }],
          },
          puente: {
            emoji: '🌉',
            text: 'Cruzan un puente colgante sobre el bosque. De repente, Daniela señala una rama: un pájaro verde brillante, con el pecho rojo y una cola larguísima.',
            translation: 'Atravessam uma ponte pênsil sobre a floresta. De repente, Daniela aponta para um galho: um pássaro verde brilhante, com o peito vermelho e uma cauda compridíssima.',
            choices: [
              { text: '“¡Es el quetzal!”', translation: '“É o quetzal!”', next: 'final_quetzal' },
              {
                text: 'Linu conclui que o quetzal é um papagaio comum.',
                translation: 'Linu conclui que o quetzal é um papagaio comum.',
                wrong: 'O quetzal-resplandecente não é um papagaio: é uma ave rara das florestas nubladas, sagrada para os maias, e o símbolo da Guatemala.',
              },
              { text: 'Linu tenta tirar uma foto e espanta o pássaro.', translation: 'Linu tenta tirar uma foto e espanta o pássaro.', next: 'final_foto' },
            ],
          },
          final_quetzal: {
            emoji: '🐦',
            text: 'Se quedan mirando el quetzal en silencio. Al final, Daniela sonríe: “Hay gente que viene muchas veces y nunca lo ve. Usted tiene suerte.” En la pulpería del pueblo, celebran con un café.',
            translation: 'Ficam olhando o quetzal em silêncio. No fim, Daniela sorri: “Tem gente que vem muitas vezes e nunca vê. Você tem sorte.” Na mercearia do vilarejo, comemoram com um café.',
            ending: {
              tone: 'bom',
              title: 'Pura vida',
              message: 'Você viu o quetzal, aprendeu o “usted” tico e o “¡pura vida!”, e conheceu a floresta nublada da Costa Rica.',
            },
          },
          final_foto: {
            emoji: '📸',
            text: 'El ruido de la cámara asusta al quetzal, que se va volando. Daniela suspira: “Tranquilo, mañana volvemos temprano. ¡Pura vida!”',
            translation: 'O barulho da câmera assusta o quetzal, que sai voando. Daniela suspira: “Calma, amanhã a gente volta cedo. Tudo bem!”',
            ending: {
              tone: 'neutro',
              title: 'Mañana, temprano',
              message: 'O quetzal voou, mas a floresta de Monteverde continua lá. Da próxima vez, primeiro olhe, depois fotografe.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── CARIBE ─────────────────────────────
  {
    code: 'es-caribe',
    country: 'CUB',
    kind: 'dialeto',
    speechLocale: 'es-US',
    ipa: ipaEsDe('es-caribe', '419'),
    name: 'Espanhol do Caribe',
    flag: '🏝️',
    summary:
      'O espanhol de Cuba, Porto Rico, República Dominicana, da costa da Venezuela e da Colômbia e do Panamá: o “s” vira um sopro, o “d” some, perguntas sem inversão (“¿Qué tú quieres?”) e a música que o mundo dança, da salsa ao merengue.',
    card: {
      id: 'es-car-c1',
      title: '¿Qué tú quieres?',
      emoji: '🏝️',
      history:
        'Foi no Caribe que o espanhol chegou à América, em 1492. Os portos das ilhas viviam em contato com os de Sevilha, de Cádis e das Canárias, e por isso o espanhol caribenho se parece tanto com o andaluz e o canário. Dos taínos, o povo das ilhas, vieram palavras que o mundo inteiro usa, como “canoa”, “huracán”, “hamaca” e “maíz”; dos africanos escravizados, sobretudo de língua kikongo, vieram palavras, ritmos e parte da melodia. Hoje é também o espanhol mais ouvido em Miami e em Nova York, e a língua de muitos cantores de salsa, merengue, bachata e reggaeton.',
      culture_tip:
        'No Caribe, conversa-se alto, rápido e com muito humor. A música está em toda parte: o merengue (2016) e a bachata (2019), da República Dominicana, e a rumba cubana (2016) são Patrimônio Cultural Imaterial da Humanidade. Em Cuba, em Porto Rico e na República Dominicana, o ônibus é a “guagua”, e a resposta para quase tudo pode ser “¡chévere!” (ótimo).',
      grammar_why:
        'Algumas construções caribenhas surpreendem quem aprendeu o espanhol de livro. Nas perguntas, o sujeito não troca de lugar com o verbo: “¿Qué tú quieres?”, “¿Cómo tú te llamas?”. O pronome sujeito vem antes do infinitivo: “Antes de yo entrar a la casa”. Os pronomes “yo”, “tú” e “él” aparecem mais vezes do que o necessário, porque o “s” do verbo, que marcaria a pessoa, muitas vezes some na pronúncia. E o “ser” serve para destacar: “Lo hice fue en invierno” (foi no inverno que eu fiz).',
      grammar_examples: [
        ['¿Qué tú quieres comer?', 'O que você quer comer?'],
        ['Antes de yo llegar, ya habían comido.', 'Antes de eu chegar, eles já tinham comido.'],
        ['Lo compré fue ayer.', 'Foi ontem que eu comprei.'],
        ['Vamo’ pa’ la playa en la guagua.', 'Vamos à praia de ônibus.'],
        ['Espérame un momentico.', 'Me espera um minutinho.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “s” no fim da sílaba vira um sopro [h] ou desaparece, mesmo na fala formal: “¿Cómo estás?” soa [ˈkomo ehˈta], “los niños” soa [lo ˈniɲo].',
      'O “d” entre vogais cai: “cansado” → “cansao”, “dedo” → “deo”.',
      'O “r” e o “l” no fim da sílaba se confundem: em Porto Rico, “Puerto Rico” soa “Puelto Rico”; em Cuba, “porque” pode soar “polque” ou “pokke”; no norte da República Dominicana, “poique”.',
      'A “jota” é um sopro [h]: “Los Ángeles” soa [loh ˈaŋheleh]. E o “n” final sai do fundo da boca: “camión” [kaˈmjoŋ].',
    ],
    vocab: [
      ['autobús', 'guagua', 'ônibus', 'Cuba, Porto Rico, República Dominicana (e Canárias)'],
      ['¡qué bien!', '¡chévere!', 'ótimo! legal!', 'Venezuela, Cuba, Porto Rico, Colômbia'],
      ['amigo', 'pana', 'camarada, chegado', 'Venezuela, Porto Rico'],
      ['salir a divertirse', 'janguear', 'sair, curtir', 'Porto Rico, do inglês “hang out”'],
      ['estacionar', 'parquear', 'estacionar', 'do inglês “park”'],
      ['papaya', 'fruta bomba', 'mamão', 'Cuba: lá, “papaya” tem outro sentido'],
      ['plátano verde frito', 'tostones', 'banana-da-terra frita e amassada'],
      ['un poco', 'un chin', 'um pouquinho', 'República Dominicana'],
      ['¡hola!', '¡épale!', 'oi! (cumprimento animado)', 'Venezuela'],
      ['un momento', 'un momentico', 'um minutinho', 'o diminutivo “-ico” depois de “t”'],
    ],
    stories: [
      {
        id: 'es-car-h1',
        variant: 'es-caribe',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Guagua al Viejo San Juan',
        emoji: '🏰',
        summary: 'Em Porto Rico, a amiga Yaritza leva o Linu de guagua ao Viejo San Juan e ao forte El Morro, e no fim vão comer mofongo.',
        cultural_context:
          'O Viejo San Juan é a parte antiga da capital de Porto Rico, com casas coloridas e ruas de pedras azuladas. As fortificações espanholas, como o Castillo San Felipe del Morro, são Patrimônio Mundial da UNESCO desde 1983. O mofongo, banana-da-terra frita amassada com alho, é um dos pratos mais típicos da ilha.',
        start: 'start',
        glossary: [
          ['guagua', 'ônibus'],
          ['¿qué tú quieres?', 'o que você quer?'],
          ['janguear', 'sair, curtir'],
          ['¡chévere!', 'ótimo!'],
          ['pana', 'amigo'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'Yaritza espera a Linu en la parada: “¡Wepa, pana! Vamo’ a coger la guagua pa’l Viejo San Juan. ¿Qué tú quieres ver primero?”',
            translation: 'Yaritza espera o Linu no ponto: “Eba, amigo! Vamos pegar o ônibus para o Viejo San Juan. O que você quer ver primeiro?”',
            choices: [
              { text: '“¡El Morro!”', translation: '“O Morro!”', next: 'guagua' },
              {
                text: 'Linu procura uma guagua: acha que é um bebê.',
                translation: 'Linu procura uma “guagua”: acha que é um bebê.',
                wrong: 'Nos Andes e no Chile, “guagua” é bebê, mas no Caribe é o ônibus! A Yaritza está dizendo para pegarem o ônibus.',
              },
            ],
          },
          guagua: {
            emoji: '🌴',
            text: 'La guagua va llena y con música. Por la ventana, Linu ve el mar azul y las casas de colores. “¡Qué chévere!”, dice.',
            translation: 'O ônibus vai lotado e com música. Pela janela, Linu vê o mar azul e as casas coloridas. “Que demais!”, diz.',
            choices: [{ text: 'Se bajan en el Viejo San Juan.', translation: 'Descem no Viejo San Juan.', next: 'morro' }],
          },
          morro: {
            emoji: '🏰',
            text: 'El Morro es enorme, con murallas frente al océano. En el césped, familias vuelan chiringas, que es como aquí le dicen a las cometas. “Los domingos esto se llena”, explica Yaritza.',
            translation: 'O Morro é enorme, com muralhas de frente para o oceano. No gramado, famílias soltam pipas, as “chiringas”, como chamam aqui. “Aos domingos isso aqui lota”, explica Yaritza.',
            choices: [
              { text: 'Linu quiere volar una chiringa.', translation: 'Linu quer soltar uma pipa.', next: 'chiringa' },
              { text: 'Linu tiene hambre y quiere comer.', translation: 'Linu está com fome e quer comer.', next: 'mofongo' },
            ],
          },
          chiringa: {
            emoji: '🪁',
            text: 'Un niño le presta su chiringa a Linu. El viento es fuerte y la chiringa sube altísimo. “¡Mira eso!”, grita Yaritza.',
            translation: 'Um menino empresta a pipa dele ao Linu. O vento é forte e a pipa sobe altíssimo. “Olha só!”, grita Yaritza.',
            choices: [{ text: 'Después, van a comer.', translation: 'Depois, vão comer.', next: 'mofongo' }],
          },
          mofongo: {
            emoji: '🍽️',
            text: 'En un restaurante pequeño, Yaritza pide dos mofongos. “Es plátano frito majado con ajo. ¿Tú lo quieres con camarones o con carne?”',
            translation: 'Num restaurante pequeno, Yaritza pede dois mofongos. “É banana-da-terra frita amassada com alho. Você quer com camarão ou com carne?”',
            choices: [
              { text: '“Con camarones, por favor.”', translation: '“Com camarão, por favor.”', next: 'final_bom' },
              { text: 'Linu dice que no le gusta el ajo.', translation: 'Linu diz que não gosta de alho.', next: 'final_ajo' },
            ],
          },
          final_bom: {
            emoji: '🦐',
            text: 'El mofongo está buenísimo. “Esta noche vamos a janguear en la plaza”, dice Yaritza. “¡Chévere!”, responde Linu, que ya habla boricua.',
            translation: 'O mofongo está ótimo. “Hoje à noite a gente vai sair na praça”, diz Yaritza. “Demais!”, responde Linu, que já fala como porto-riquenho.',
            ending: {
              tone: 'bom',
              title: '¡Wepa, pana!',
              message: 'Você andou de guagua, aprendeu “pana”, “janguear” e “¡chévere!”, e ouviu o “¿Qué tú quieres?” do Caribe.',
            },
          },
          final_ajo: {
            emoji: '🧄',
            text: 'Yaritza se ríe: “¡Pero el mofongo sin ajo no es mofongo!” Linu pide unos tostones y se queda curioso por probar el mofongo otro día.',
            translation: 'Yaritza ri: “Mas mofongo sem alho não é mofongo!” Linu pede uns tostones e fica curioso para provar o mofongo outro dia.',
            ending: {
              tone: 'neutro',
              title: 'Tostones por hoy',
              message: 'O mofongo ficou para outro dia, mas os tostones também são bem caribenhos.',
            },
          },
        },
      },
      {
        id: 'es-car-h2',
        variant: 'es-caribe',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Merengue en la Zona Colonial',
        emoji: '🎺',
        summary: 'Em Santo Domingo, o Linu passeia pela Zona Colonial com o amigo Ramón, aprende a pedir “un chin” e a dançar merengue numa festa de bairro.',
        cultural_context:
          'A Zona Colonial de Santo Domingo, na República Dominicana, foi a primeira cidade fundada pelos europeus nas Américas que existe até hoje, com a primeira catedral e a primeira universidade do continente; é Patrimônio Mundial da UNESCO desde 1990. O merengue, a música nacional dominicana, é Patrimônio Cultural Imaterial da Humanidade desde 2016, e o sancocho, um ensopado com várias carnes e raízes, é o prato das festas.',
        start: 'start',
        glossary: [
          ['un chin', 'um pouquinho'],
          ['¿qué tú quieres?', 'o que você quer?'],
          ['¡chévere!', 'ótimo!'],
          ['sancocho', 'ensopado de carnes e raízes'],
          ['guagua', 'ônibus'],
        ],
        nodes: {
          start: {
            emoji: '⛪',
            text: 'Ramón le enseña a Linu la Catedral Primada: “Es la catedral más antigua de América. Aquí empezó todo.” Hace un calor tremendo. “¿Qué tú quieres tomar?”',
            translation: 'Ramón mostra ao Linu a Catedral Primada: “É a catedral mais antiga da América. Tudo começou aqui.” Faz um calor tremendo. “O que você quer beber?”',
            choices: [
              { text: '“Un jugo de chinola, por favor.”', translation: '“Um suco de maracujá, por favor.”', next: 'jugo' },
              {
                text: 'Linu entende que o Ramón perguntou quem ele é.',
                translation: 'Linu entende que o Ramón perguntou quem ele é.',
                wrong: '“¿Qué tú quieres tomar?” é “o que você quer beber?”. No Caribe a pergunta não inverte o sujeito, mas o sentido é o mesmo de “¿Qué quieres tomar?”.',
              },
            ],
          },
          jugo: {
            emoji: '🥤',
            text: 'En una esquina compran jugo de chinola, que es como aquí le dicen al maracuyá. “¿Le echo azúcar?”, pregunta la vendedora. “Un chin nada más”, responde Ramón por Linu.',
            translation: 'Numa esquina compram suco de “chinola”, que é como chamam o maracujá aqui. “Ponho açúcar?”, pergunta a vendedora. “Só um pouquinho”, responde Ramón pelo Linu.',
            choices: [{ text: 'Siguen caminando por la calle El Conde.', translation: 'Seguem andando pela rua El Conde.', next: 'barrio' }],
          },
          barrio: {
            emoji: '🎶',
            text: 'Al caer la tarde, se oye música. En una plaza del barrio, un grupo toca merengue con acordeón, güira y tambora. La gente baila en parejas. “¿Tú bailas?”, pregunta una señora.',
            translation: 'No fim da tarde, ouve-se música. Numa praça do bairro, um grupo toca merengue com sanfona, güira e tambora. As pessoas dançam em pares. “Você dança?”, pergunta uma senhora.',
            choices: [
              { text: 'Linu acepta y baila con la señora.', translation: 'Linu aceita e dança com a senhora.', next: 'baile' },
              { text: 'Linu dice que no sabe bailar.', translation: 'Linu diz que não sabe dançar.', next: 'timido' },
            ],
          },
          timido: {
            emoji: '😅',
            text: 'La señora se ríe: “¡Aquí todo el mundo sabe! Es un paso pa’ un lao y otro pa’l otro.” Lo toma del ala y lo lleva al centro de la plaza.',
            translation: 'A senhora ri: “Aqui todo mundo sabe! É um passo para um lado e outro para o outro.” Pega o Linu pela asa e o leva para o meio da praça.',
            choices: [{ text: 'Linu intenta bailar.', translation: 'Linu tenta dançar.', next: 'baile' }],
          },
          baile: {
            emoji: '💃',
            text: 'Linu se mueve torpe al principio, pero poco a poco agarra el ritmo. Ramón grita: “¡Eso, pana!” Después, la señora los invita a comer sancocho en su casa.',
            translation: 'Linu se mexe desajeitado no começo, mas aos poucos pega o ritmo. Ramón grita: “Isso aí, amigo!” Depois, a senhora convida os dois para comer sancocho na casa dela.',
            choices: [
              { text: 'Aceptan la invitación.', translation: 'Aceitam o convite.', next: 'final_sancocho' },
              { text: 'Linu está cansado y vuelve al hotel.', translation: 'Linu está cansado e volta para o hotel.', next: 'final_hotel' },
            ],
          },
          final_sancocho: {
            emoji: '🍲',
            text: 'El sancocho tiene pollo, cerdo, yuca, plátano y mazorca. La señora sirve a Linu un plato enorme: “Come, que bailaste mucho.” Linu se siente en casa.',
            translation: 'O sancocho tem frango, porco, mandioca, banana-da-terra e milho. A senhora serve ao Linu um prato enorme: “Coma, que você dançou muito.” Linu se sente em casa.',
            ending: {
              tone: 'bom',
              title: 'Merengue y sancocho',
              message: 'Você conheceu a cidade mais antiga das Américas, dançou merengue e aprendeu o “un chin” e o “¿Qué tú quieres?” dominicanos.',
            },
          },
          final_hotel: {
            emoji: '🌙',
            text: 'Linu vuelve al hotel con los pies cansados y el merengue todavía en la cabeza. Desde la ventana, sigue oyendo la música hasta medianoche.',
            translation: 'Linu volta para o hotel com os pés cansados e o merengue ainda na cabeça. Da janela, continua ouvindo a música até meia-noite.',
            ending: {
              tone: 'bom',
              title: 'Música hasta medianoche',
              message: 'O sancocho ficou para outra vez, mas o Linu aprendeu os primeiros passos de merengue.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── ANDES ─────────────────────────────
  {
    code: 'es-andes',
    country: 'PER',
    kind: 'dialeto',
    speechLocale: 'es-PE',
    ipa: ipaEsDe('es-andes', '419'),
    name: 'Espanhol dos Andes',
    flag: '🏔️',
    summary:
      'O espanhol das montanhas, do sul da Colômbia ao norte da Argentina, passando pelo Equador, pelo Peru e pela Bolívia, ao lado do quéchua e do aimará: “s” firme, vogais átonas fracas, “rr” assibilado e o “nomás” que amacia os pedidos.',
    card: {
      id: 'es-and-c1',
      title: 'Pase nomás',
      emoji: '🏔️',
      history:
        'Nos Andes, o espanhol chegou no século XVI a um território onde se falavam o quéchua, língua do Império Inca, e o aimará, e convive com elas até hoje. O quéchua é oficial no Peru e na Bolívia, e milhões de pessoas falam as duas línguas. Desse contato vêm muitas palavras (“palta”, “choclo”, “cancha”, “guagua”) e construções que o espanhol andino tem e os outros não. Os linguistas, como Rodolfo Cerrón Palomino, chamam de “castelhano andino” a variedade das terras altas, do sul da Colômbia ao noroeste da Argentina. O interior andino da Colômbia, de Bogotá e Medellín, tem outros traços, mas partilha com ele as montanhas, a cortesia e muitas palavras.',
      culture_tip:
        'A fala andina é cortês e cheia de diminutivos: “un ratito”, “un cafecito”, “pase nomás” (entre, fique à vontade). Na Colômbia, pede-se com “¿me regala…?” (literalmente, “me dá de presente?”), e quem atende responde “a la orden” (às ordens). Em Boyacá e Cundinamarca, “sumercé” (de “su merced”) é um tratamento carinhoso e respeitoso ao mesmo tempo.',
      grammar_why:
        'No espanhol andino, o pretérito composto é muito usado para o passado (“he llegado ayer”), e o pronome “lo” pode valer para tudo, masculino, feminino e plural, sobretudo no Peru. Na fala rural, aparecem construções que copiam o quéchua e o aimará, como o possessivo duplo (“su casa de Jacinta”, a casa da Jacinta) e o verbo no fim da frase. O “nomás” depois do verbo amacia o pedido: “Siéntese nomás”. E o “vos” convive com o “tú” em partes do Equador, da Colômbia (em Pasto) e da Bolívia.',
      grammar_examples: [
        ['Pase nomás, siéntese.', 'Entre, fique à vontade, sente-se.'],
        ['¿Me regala un tinto?', 'Pode me dar um cafezinho? (Colômbia)'],
        ['A su casa de Jacinta me estoy yendo.', 'Estou indo para a casa da Jacinta.'],
        ['Ayer he llegado a Cusco.', 'Cheguei ontem a Cusco.'],
        ['¿Qué más, sumercé?', 'Tudo bem, querido(a)? (Boyacá)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “s” nunca vira sopro: é pronunciado com força em todas as posições, às vezes com a ponta da língua levantada, no altiplano do Peru e da Bolívia.',
      'As vogais átonas se enfraquecem e as consoantes ficam firmes, um pouco como no México.',
      'O “rr” e o grupo “tr” saem assibilados, parecidos com o “j” de “já”: “carro” [ˈkaʐo]. Em Cuenca, no Equador, e no oeste da Bolívia, isso é considerado culto.',
      'Em partes da Bolívia, do Peru e do Equador ainda se distingue o “ll” do “y”, coisa rara na América.',
      'No Equador, o “s” final soa [z] antes de vogal: “los amigos” [loz aˈmiɣos].',
    ],
    vocab: [
      ['bebé', 'guagua, wawa', 'bebê', 'do quéchua; no Caribe, “guagua” é ônibus'],
      ['aguacate', 'palta', 'abacate', 'do quéchua'],
      ['maíz (espiga)', 'choclo', 'espiga de milho', 'do quéchua'],
      ['maíz tostado', 'cancha', 'milho torrado (petisco)', 'Peru'],
      ['terreno de cultivo', 'chacra', 'roça', 'do quéchua'],
      ['solamente, tranquilo', 'nomás', 'só, à vontade', '“pase nomás”'],
      ['amigo', 'pata (Peru), parce (Medellín)', 'amigo, chegado', 'gíria'],
      ['¡genial!', '¡bacán!', 'legal!', 'Peru (e Chile)'],
      ['¿me da…?', '¿me regala…?', 'pode me dar…?', 'Colômbia'],
      ['de nada; a su servicio', 'a la orden', 'às ordens; de nada', 'Colômbia'],
      ['café solo', 'tinto', 'cafezinho preto', 'Colômbia'],
      ['¿qué tal?', '¿quiubo?', 'e aí?', 'Colômbia, de “¿qué hubo?”'],
    ],
    stories: [
      {
        id: 'es-and-h1',
        variant: 'es-andes',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Choclo en el mercado de San Pedro',
        emoji: '🌽',
        summary: 'Em Cusco, a amiga Rosa leva o Linu ao mercado de San Pedro, ensina uma saudação em quéchua e oferece choclo com queijo e chicha morada.',
        cultural_context:
          'Cusco, no Peru, foi a capital do Império Inca e é Patrimônio Mundial da UNESCO desde 1983. No mercado de San Pedro vendem-se frutas, ervas, pães e comidas. Muitos cusquenhos falam quéchua e espanhol. O “choclo” peruano tem grãos enormes e se come com queijo fresco; a chicha morada é um refresco de milho roxo.',
        start: 'start',
        glossary: [
          ['choclo', 'espiga de milho'],
          ['nomás', 'à vontade; só'],
          ['allillanchu', 'tudo bem? (em quéchua)'],
          ['chicha morada', 'refresco de milho roxo'],
          ['wawa', 'bebê'],
        ],
        nodes: {
          start: {
            emoji: '🏔️',
            text: 'Rosa espera a Linu en la puerta del mercado. “Bienvenido a Cusco. Aquí estamos a tres mil cuatrocientos metros. Camina despacito nomás, para no cansarte.”',
            translation: 'Rosa espera o Linu na porta do mercado. “Bem-vindo a Cusco. Aqui estamos a três mil e quatrocentos metros. Ande devagarinho, para não se cansar.”',
            choices: [
              { text: 'Linu camina despacio.', translation: 'Linu anda devagar.', next: 'mercado' },
              {
                text: 'Linu sai correndo para ver tudo de uma vez.',
                translation: 'Linu sai correndo para ver tudo de uma vez.',
                wrong: 'Em Cusco, a mais de 3.400 metros, o ar é rarefeito: correr cansa muito depressa. A Rosa tem razão, devagarinho nomás!',
              },
            ],
          },
          mercado: {
            emoji: '🧺',
            text: 'En el mercado hay montañas de papas de muchos colores, frutas y hierbas. Una señora con una wawa en la espalda saluda a Rosa en quechua: “¿Allillanchu?” Rosa le responde y luego explica: “Me preguntó si estoy bien.”',
            translation: 'No mercado tem montanhas de batatas de muitas cores, frutas e ervas. Uma senhora com um bebê nas costas cumprimenta a Rosa em quéchua: “Allillanchu?” Rosa responde e depois explica: “Ela perguntou se eu estou bem.”',
            choices: [
              { text: 'Linu intenta saludar también: “¿Allillanchu?”', translation: 'Linu tenta cumprimentar também: “Allillanchu?”', next: 'saludo' },
              { text: 'Linu sonríe y sigue mirando las papas.', translation: 'Linu sorri e continua olhando as batatas.', next: 'comida' },
            ],
          },
          saludo: {
            emoji: '😊',
            text: 'La señora se ríe, contenta, y le regala a Linu una mandarina. “Le gustó que hables quechua”, dice Rosa.',
            translation: 'A senhora ri, contente, e dá uma tangerina para o Linu. “Ela gostou de você falar quéchua”, diz Rosa.',
            choices: [{ text: 'Van a buscar comida.', translation: 'Vão procurar comida.', next: 'comida' }],
          },
          comida: {
            emoji: '🌽',
            text: 'En un puesto de comida, Rosa pide dos choclos con queso y dos vasos de chicha morada. El choclo tiene granos enormes. “Siéntate nomás”, dice la vendedora.',
            translation: 'Numa barraca de comida, Rosa pede dois milhos com queijo e dois copos de chicha morada. O milho tem grãos enormes. “Sente-se, fique à vontade”, diz a vendedora.',
            choices: [
              { text: 'Linu prueba la chicha morada.', translation: 'Linu prova a chicha morada.', next: 'final_bom' },
              { text: 'Linu acha que a chicha morada é suco de uva.', translation: 'Linu acha que a chicha morada é suco de uva.', next: 'final_uva' },
            ],
          },
          final_bom: {
            emoji: '🥤',
            text: 'La chicha morada es dulce, con canela y piña. “¡Qué rico!”, dice Linu. Rosa sonríe: “Mañana te llevo a ver las piedras de los incas.”',
            translation: 'A chicha morada é doce, com canela e abacaxi. “Que gostoso!”, diz Linu. Rosa sorri: “Amanhã te levo para ver as pedras dos incas.”',
            ending: {
              tone: 'bom',
              title: 'Allillanchu, Cusco',
              message: 'Você aprendeu “nomás”, “wawa” e “choclo” e até uma saudação em quéchua, a língua que convive com o espanhol nos Andes.',
            },
          },
          final_uva: {
            emoji: '🍇',
            text: 'Rosa se ríe: “No es de uva, es de maíz morado.” Linu no lo puede creer: un maíz de color morado. Prueba otro vaso, para estar seguro.',
            translation: 'Rosa ri: “Não é de uva, é de milho roxo.” Linu não acredita: um milho roxo. Prova outro copo, só para ter certeza.',
            ending: {
              tone: 'bom',
              title: 'Maíz morado',
              message: 'Nos Andes há milho de muitas cores, e a chicha morada é feita do roxo. O Linu agora sabe!',
            },
          },
        },
      },
      {
        id: 'es-and-h2',
        variant: 'es-andes',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Flores en Medellín',
        emoji: '💐',
        summary: 'Em Medellín, durante a Feira das Flores, o amigo Santiago ensina ao Linu o “¿me regala…?”, o “parce” e o “a la orden”, e os dois sobem de teleférico pelas montanhas.',
        cultural_context:
          'Medellín, no interior andino da Colômbia, fica num vale cercado de montanhas. Em agosto, a Feira das Flores celebra os “silleteros”, que carregam nas costas enormes arranjos de flores, uma tradição dos camponeses da região. O Metrocable, um teleférico que faz parte do transporte público, liga o centro aos bairros dos morros.',
        start: 'start',
        glossary: [
          ['¿me regala…?', 'pode me dar…?'],
          ['a la orden', 'às ordens; de nada'],
          ['parce', 'amigo'],
          ['tinto', 'cafezinho preto'],
          ['¿quiubo?', 'e aí?'],
          ['silletero', 'quem carrega os arranjos de flores nas costas'],
        ],
        nodes: {
          start: {
            emoji: '☕',
            text: '“¿Quiubo, parce?”, saluda Santiago. Están en una cafetería del centro. Linu quiere pedir un café, pero no sabe cómo. Santiago le dice: “Aquí se dice: ‘¿Me regala un tinto?’”',
            translation: '“E aí, amigo?”, cumprimenta Santiago. Estão numa cafeteria do centro. Linu quer pedir um café, mas não sabe como. Santiago diz: “Aqui se diz: ‘Me vê um cafezinho?’”',
            choices: [
              { text: '“¿Me regala un tinto, por favor?”', translation: '“Me vê um cafezinho, por favor?”', next: 'tinto' },
              {
                text: 'Linu pede um vinho tinto, achando que “tinto” é vinho.',
                translation: 'Linu pede um vinho tinto, achando que “tinto” é vinho.',
                wrong: 'Na Colômbia, “un tinto” é um cafezinho preto, não vinho! E “¿me regala…?” não é pedir de graça: é o jeito educado de pedir.',
              },
            ],
          },
          tinto: {
            emoji: '😊',
            text: 'La mesera trae el tinto y Linu dice: “Gracias.” Ella responde: “A la orden.” Santiago explica: “Eso es como ‘de nada’, pero más amable.”',
            translation: 'A garçonete traz o cafezinho e Linu diz: “Obrigado.” Ela responde: “Às ordens.” Santiago explica: “É como ‘de nada’, mas mais gentil.”',
            choices: [{ text: 'Salen a ver el desfile.', translation: 'Saem para ver o desfile.', next: 'desfile' }],
          },
          desfile: {
            emoji: '🌺',
            text: 'Por la avenida pasan los silleteros, con enormes arreglos de flores en la espalda. Uno de ellos, un señor mayor, descansa un momento. “Esta silleta pesa como sesenta kilos”, dice.',
            translation: 'Pela avenida passam os silleteros, com enormes arranjos de flores nas costas. Um deles, um senhor de idade, descansa um momento. “Essa silleta pesa uns sessenta quilos”, diz.',
            choices: [
              { text: 'Linu le pregunta desde hace cuánto lo hace.', translation: 'Linu pergunta desde quando ele faz isso.', next: 'silletero' },
              { text: 'Linu prefiere subir al Metrocable.', translation: 'Linu prefere subir no Metrocable.', next: 'metrocable' },
            ],
          },
          silletero: {
            emoji: '👴',
            text: '“Desde niño, como mi papá y mi abuelo”, responde el señor. “Antes bajábamos las flores de las montañas para venderlas. Ahora es una fiesta.” Le regala a Linu una flor.',
            translation: '“Desde criança, como o meu pai e o meu avô”, responde o senhor. “Antes a gente descia as flores das montanhas para vender. Agora é uma festa.” Dá uma flor ao Linu.',
            choices: [{ text: 'Después, suben al Metrocable.', translation: 'Depois, sobem no Metrocable.', next: 'metrocable' }],
          },
          metrocable: {
            emoji: '🚡',
            text: 'Desde la cabina del Metrocable se ve toda la ciudad, en el valle, rodeada de montañas verdes. “Por eso le dicen la ciudad de la eterna primavera”, dice Santiago.',
            translation: 'Da cabine do Metrocable se vê a cidade inteira, no vale, cercada de montanhas verdes. “Por isso chamam de cidade da eterna primavera”, diz Santiago.',
            choices: [
              { text: '“¡Qué belleza, parce!”', translation: '“Que lindo, amigo!”', next: 'final_bom' },
              { text: 'Linu tiene un poco de miedo de la altura.', translation: 'Linu tem um pouco de medo da altura.', next: 'final_miedo' },
            ],
          },
          final_bom: {
            emoji: '🌄',
            text: 'Santiago se ríe: “¡Ya habla como paisa!” Arriba, en el barrio, se toman otro tinto mirando el atardecer sobre el valle.',
            translation: 'Santiago ri: “Já fala como um paisa!” Lá em cima, no bairro, tomam outro cafezinho olhando o pôr do sol sobre o vale.',
            ending: {
              tone: 'bom',
              title: 'Parce y tinto',
              message: 'Você aprendeu a pedir “¿me regala un tinto?”, respondeu “a la orden” e conheceu os silleteros de Medellín.',
            },
          },
          final_miedo: {
            emoji: '😬',
            text: 'Linu se agarra fuerte del asiento hasta llegar arriba. Santiago le da una palmadita: “Tranquilo, parce. Para bajar, cerramos los ojos.”',
            translation: 'Linu se segura forte no banco até chegar lá em cima. Santiago dá um tapinha nele: “Calma, amigo. Para descer, a gente fecha os olhos.”',
            ending: {
              tone: 'neutro',
              title: 'Pingüino en las alturas',
              message: 'Pinguins não voam, e o Linu descobriu por quê. Mas a vista de Medellín valeu o susto.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── CHILE ─────────────────────────────
  {
    code: 'es-CL',
    country: 'CHL',
    kind: 'dialeto',
    speechLocale: 'es-CL',
    ipa: ipaEsDe('es-CL', '419'),
    name: 'Espanhol do Chile',
    flag: '🇨🇱',
    summary:
      'Fama de ser o espanhol mais difícil de entender: fala rápida, o “s” que some, um voseo só no verbo (“¿cómo estái?”) e uma gíria própria, com “po”, “cachái”, “al tiro” e “fome”.',
    card: {
      id: 'es-cl-c1',
      title: '¿Cachái, po?',
      emoji: '🇨🇱',
      history:
        'Isolado entre os Andes, o deserto do Atacama e o Pacífico, o Chile desenvolveu um espanhol que os dialetólogos tratam como uma zona à parte desde os estudos de Pedro Henríquez Ureña (1921). O linguista Ambrosio Rabanales (2000) divide o país em quatro zonas: a do norte, com influência do quéchua; a central, de Santiago; a do sul, com muitas palavras do mapuche; e a de Chiloé, a mais arcaica. A 23.ª edição do Dicionário da Real Academia Espanhola (2014) registra mais de 2.200 chilenismos. Até o século XIX, o “vos” dominava a fala culta chilena; o venezuelano Andrés Bello, reitor da Universidade do Chile (1843–1865), fez campanha contra ele, e o “tú” ganhou o lugar na escrita.',
      culture_tip:
        'O chileno termina muitas frases com “po” (de “pues”): “sí, po”, “ya, po”. E pergunta “¿cachái?” (sacou?) para ver se você está acompanhando. O lanche da tarde se chama “once”, com pão, abacate (“palta”) e chá. E cuidado com a palavra “huevón”: entre amigos íntimos é quase “cara”, mas com estranhos é um insulto. Entenda, mas não use.',
      grammar_why:
        'O Chile tem um sistema de tratamento em três degraus: “usted” para o respeito, e, na intimidade, “tú” ou um voseo só no verbo, que tira o “s” final: “tú estái”, “¿qué querís?”, “¿cómo estái?”; o verbo ser fica “soi” (ou “erís”, na fala jovem). O pronome “vos”, sozinho, soa grosseiro, mas o verbo voseante é normal entre amigos de todas as classes. O futuro simples quase não se usa para o futuro (“voy a ir”), e sim para a dúvida: “¿Será esa la micro?” (será que é esse o ônibus?).',
      grammar_examples: [
        ['¿Cómo estái?', 'Como você está?'],
        ['¿Qué querís tomar?', 'O que você quer beber?'],
        ['Ya, po, vamos al tiro.', 'Tá bom, vamos agora mesmo.'],
        ['¿Será esa la micro que nos sirve?', 'Será que esse é o ônibus que a gente pega?'],
        ['Esta película es súper fome.', 'Esse filme é muito chato.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “s” no fim da sílaba vira um sopro ou some: “estas manos” soa [ˈehtah ˈmanoh]. Na fala formal, ele volta.',
      'O “d” entre vogais cai, sobretudo em “-ado” e “-ada”: “salado” → “salao”, “cansada” → “cansá”; e o “d” final some: “realidad” → “realidá”.',
      'Antes de “e” e “i”, o “k”, o “g” e a “jota” se aproximam do céu da boca: “queso” soa quase “quiêso”, “jefe” quase “hiéfe”.',
      'O grupo “tr” soa parecido com o “tr” do inglês; e o “ch” pode soar [ʃ] na fala popular, um traço desvalorizado.',
      'Antes de “hue-” e “hui-”, aparece um “g”: “huevo” soa “güevo”, “huaso” soa “guaso”.',
    ],
    vocab: [
      ['autobús', 'micro', 'ônibus'],
      ['atasco', 'taco', 'engarrafamento'],
      ['novio, novia', 'pololo, polola', 'namorado, namorada', '“pololear” é namorar'],
      ['aburrido', 'fome', 'chato, sem graça'],
      ['enseguida', 'al tiro', 'na hora, agora mesmo'],
      ['¿entiendes?', '¿cachái?', 'sacou?, entendeu?', 'de “cachar”, entender'],
      ['pues', 'po', 'né, ué (enfático no fim da frase)'],
      ['merienda', 'once', 'lanche da tarde', '“tomar once”'],
      ['trabajo', 'pega', 'trabalho, emprego'],
      ['bebé', 'guagua', 'bebê', 'do quéchua'],
      ['aguacate', 'palta', 'abacate', 'do quéchua'],
      ['maíz (espiga)', 'choclo', 'espiga de milho'],
      ['frijol', 'poroto', 'feijão'],
      ['hace un momento', 'denante', 'agora há pouco'],
      ['a veces; quizás', 'de repente', 'às vezes; talvez'],
      ['¡genial!', '¡bacán!', 'legal!'],
    ],
    stories: [
      {
        id: 'es-cl-h1',
        variant: 'es-CL',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Ascensor en Valparaíso',
        emoji: '🚠',
        summary: 'Em Valparaíso, a amiga Catalina leva o Linu de “micro” até os morros coloridos, sobe num elevador centenário e convida para a “once”.',
        cultural_context:
          'Valparaíso, o grande porto do Chile, se espalha por dezenas de morros cobertos de casas coloridas. Para subir, há “ascensores”, funiculares do fim do século XIX e começo do XX. A área histórica da cidade é Patrimônio Mundial da UNESCO desde 2003. A “once” é o lanche da tarde chileno, com pão, abacate e chá.',
        start: 'start',
        glossary: [
          ['micro', 'ônibus'],
          ['al tiro', 'agora mesmo'],
          ['po', 'né (enfático)'],
          ['¿cachái?', 'sacou?'],
          ['once', 'lanche da tarde'],
          ['palta', 'abacate'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'Catalina llega corriendo: “¡Hola, Linu! ¿Cómo estái? Tomemos la micro al tiro, que se nos va.”',
            translation: 'Catalina chega correndo: “Oi, Linu! Como você está? Vamos pegar o ônibus agora mesmo, que ele vai embora.”',
            choices: [
              { text: 'Linu corre con ella hacia la micro.', translation: 'Linu corre com ela para o ônibus.', next: 'micro' },
              {
                text: 'Linu acha que “micro” é um micro-ondas.',
                translation: 'Linu acha que “micro” é um micro-ondas.',
                wrong: 'No Chile, a “micro” é o ônibus urbano. A Catalina quer pegar o ônibus antes que ele saia!',
              },
            ],
          },
          micro: {
            emoji: '🏘️',
            text: 'La micro baja por calles estrechas. Por la ventana, Linu ve casas amarillas, azules y rojas en los cerros. “Valparaíso es puro cerro, ¿cachái?”, dice Catalina.',
            translation: 'O ônibus desce por ruas estreitas. Pela janela, Linu vê casas amarelas, azuis e vermelhas nos morros. “Valparaíso é só morro, sacou?”, diz Catalina.',
            choices: [{ text: '“¡Cacho, cacho!”', translation: '“Saquei, saquei!”', next: 'ascensor' }],
          },
          ascensor: {
            emoji: '🚠',
            text: 'Llegan a un ascensor antiguo, una cabina de madera que sube el cerro por un riel. “Tiene más de cien años”, dice Catalina. “¿Subimos o vamos por la escalera?”',
            translation: 'Chegam a um elevador antigo, uma cabine de madeira que sobe o morro por um trilho. “Tem mais de cem anos”, diz Catalina. “A gente sobe nele ou vai pela escada?”',
            choices: [
              { text: '“¡En el ascensor, po!”', translation: '“No elevador, né!”', next: 'arriba' },
              { text: 'Linu prefiere la escalera.', translation: 'Linu prefere a escada.', next: 'escalera' },
            ],
          },
          escalera: {
            emoji: '😮‍💨',
            text: 'La escalera tiene cientos de peldaños. Arriba, Linu llega sin aire. Catalina se ríe: “Te dije, po. La próxima, en ascensor.”',
            translation: 'A escada tem centenas de degraus. Lá em cima, Linu chega sem fôlego. Catalina ri: “Eu te disse, né. Da próxima vez, de elevador.”',
            choices: [{ text: 'Descansan mirando el mar.', translation: 'Descansam olhando o mar.', next: 'arriba' }],
          },
          arriba: {
            emoji: '🌊',
            text: 'Desde arriba se ve todo el puerto, los barcos y el océano. “Ya, po, ¿vamos a tomar once a mi casa?”, invita Catalina. “Mi mamá hizo pan amasado.”',
            translation: 'Lá de cima se vê o porto inteiro, os navios e o oceano. “Então, vamos lanchar na minha casa?”, convida Catalina. “Minha mãe fez pão caseiro.”',
            choices: [
              { text: '“¡Bacán! Vamos.”', translation: '“Legal! Vamos.”', next: 'final_once' },
              {
                text: 'Linu responde que às onze horas da noite já estará dormindo.',
                translation: 'Linu responde que às onze horas da noite já vai estar dormindo.',
                wrong: 'No Chile, “tomar once” não tem nada a ver com as onze horas: é o lanche da tarde, com pão, abacate e chá!',
              },
              { text: 'Linu prefiere quedarse mirando el mar.', translation: 'Linu prefere ficar olhando o mar.', next: 'final_mar' },
            ],
          },
          final_once: {
            emoji: '🥑',
            text: 'En la casa de Catalina hay pan calentito, palta, queso y té. La mamá le sirve a Linu: “Come no más, mijo.” Linu ya dice “po” sin darse cuenta.',
            translation: 'Na casa da Catalina tem pão quentinho, abacate, queijo e chá. A mãe serve o Linu: “Coma à vontade, meu filho.” Linu já diz “po” sem perceber.',
            ending: {
              tone: 'bom',
              title: 'Once con palta',
              message: 'Você andou de micro, subiu num ascensor de Valparaíso e tomou “once”: o lanche chileno que não tem nada a ver com as onze horas.',
            },
          },
          final_mar: {
            emoji: '🌅',
            text: 'Linu se queda mirando el atardecer sobre el Pacífico. Catalina le guarda un pan para mañana: “Igual vas a tener que probar la once, po.”',
            translation: 'Linu fica olhando o pôr do sol sobre o Pacífico. Catalina guarda um pão para o dia seguinte: “Mesmo assim você vai ter que provar a once, né.”',
            ending: {
              tone: 'neutro',
              title: 'Atardecer en el puerto',
              message: 'O pôr do sol foi lindo. A “once” fica para amanhã.',
            },
          },
        },
      },
      {
        id: 'es-cl-h2',
        variant: 'es-CL',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Taco en Santiago',
        emoji: '🚗',
        summary: 'Em Santiago, o Linu enfrenta um “taco” com o amigo Matías e a namorada dele, a “polola” Javiera, e sobe o Cerro San Cristóbal para ver os Andes.',
        cultural_context:
          'Santiago, a capital do Chile, fica num vale ao pé da Cordilheira dos Andes, cujos picos nevados se veem da cidade nos dias claros. O Cerro San Cristóbal, no meio da cidade, tem um teleférico, um funicular e, no alto, uma grande estátua da Virgem. No Chile, “taco” é engarrafamento e “pololo” e “polola” são namorado e namorada.',
        start: 'start',
        glossary: [
          ['taco', 'engarrafamento'],
          ['polola', 'namorada'],
          ['fome', 'chato'],
          ['pega', 'trabalho'],
          ['de repente', 'às vezes; talvez'],
        ],
        nodes: {
          start: {
            emoji: '🚗',
            text: 'Matías pasa a buscar a Linu en auto. En el asiento de adelante va Javiera. “Ella es mi polola”, la presenta Matías. Pero en la avenida no se mueve nada. “¡Qué taco más fome!”, se queja Javiera.',
            translation: 'Matías passa para buscar o Linu de carro. No banco da frente vai a Javiera. “Ela é minha namorada”, apresenta Matías. Mas na avenida nada anda. “Que engarrafamento chato!”, reclama Javiera.',
            choices: [
              { text: 'Linu entiende que hay mucho tráfico.', translation: 'Linu entende que tem muito trânsito.', next: 'conversa' },
              {
                text: 'Linu acha que a Javiera está reclamando de um taco mexicano sem graça.',
                translation: 'Linu acha que a Javiera está reclamando de um taco mexicano sem graça.',
                wrong: 'No Chile, “taco” é engarrafamento, e “fome” é chato. A Javiera está reclamando do trânsito, não da comida!',
              },
            ],
          },
          conversa: {
            emoji: '💬',
            text: 'Para pasar el tiempo, conversan. “¿Y tú, Linu, en qué trabajái?”, pregunta Javiera. “Estoy estudiando idiomas”, responde él. “¡Bacán! Yo encontré una pega nueva en un museo”, cuenta ella.',
            translation: 'Para passar o tempo, conversam. “E você, Linu, trabalha com o quê?”, pergunta Javiera. “Estou estudando idiomas”, responde ele. “Legal! Eu arrumei um trabalho novo num museu”, conta ela.',
            choices: [
              { text: 'Linu le pregunta por el museo.', translation: 'Linu pergunta sobre o museu.', next: 'museo' },
              { text: 'Linu pregunta cuánto falta para llegar.', translation: 'Linu pergunta quanto falta para chegar.', next: 'falta' },
            ],
          },
          museo: {
            emoji: '🏛️',
            text: '“Es el Museo Chileno de Arte Precolombino”, dice Javiera. “Hay piezas de los pueblos andinos, de los mapuche y de la Isla de Pascua. De repente te llevo.”',
            translation: '“É o Museu Chileno de Arte Pré-Colombiana”, diz Javiera. “Tem peças dos povos andinos, dos mapuche e da Ilha de Páscoa. Talvez eu te leve lá.”',
            choices: [{ text: 'Por fin, el taco avanza.', translation: 'Enfim, o engarrafamento anda.', next: 'cerro' }],
          },
          falta: {
            emoji: '⏱️',
            text: '“Con este taco, de repente media hora más”, suspira Matías. Linu mira por la ventana y ve, al fondo, unas montañas enormes con nieve.',
            translation: '“Com esse engarrafamento, talvez mais meia hora”, suspira Matías. Linu olha pela janela e vê, no fundo, umas montanhas enormes com neve.',
            choices: [{ text: 'Por fin, llegan al cerro.', translation: 'Enfim, chegam ao morro.', next: 'cerro' }],
          },
          cerro: {
            emoji: '🏔️',
            text: 'Suben el Cerro San Cristóbal en el funicular. Desde arriba, la cordillera de los Andes se ve gigante y blanca detrás de la ciudad. “¿Te gusta Santiago?”, pregunta Matías.',
            translation: 'Sobem o Cerro San Cristóbal no funicular. Lá de cima, a Cordilheira dos Andes parece gigante e branca atrás da cidade. “Você gosta de Santiago?”, pergunta Matías.',
            choices: [
              { text: '“¡Me encanta! La vista es lo más bacán.”', translation: '“Adoro! A vista é a coisa mais legal.”', next: 'final_bom' },
              { text: '“El taco fue muy fome…”', translation: '“O engarrafamento foi muito chato…”', next: 'final_fome' },
            ],
          },
          final_bom: {
            emoji: '🌄',
            text: 'Los tres se quedan mirando la cordillera hasta que el sol la pinta de rosado. Javiera dice: “Ya hablái chileno, Linu.” “Sí, po”, responde él.',
            translation: 'Os três ficam olhando a cordilheira até o sol pintá-la de rosa. Javiera diz: “Você já fala chileno, Linu.” “Né, sim”, responde ele.',
            ending: {
              tone: 'bom',
              title: 'Sí, po',
              message: 'Você aprendeu “taco”, “polola”, “pega”, “fome” e “bacán”, e ouviu o voseo chileno: “¿en qué trabajái?”.',
            },
          },
          final_fome: {
            emoji: '😅',
            text: 'Matías se ríe: “Es Santiago, po. Pero mira la cordillera: vale la pena.” Linu mira y tiene que darle la razón.',
            translation: 'Matías ri: “É Santiago, né. Mas olha a cordilheira: vale a pena.” Linu olha e tem que concordar.',
            ending: {
              tone: 'neutro',
              title: 'Taco y cordillera',
              message: 'O trânsito de Santiago é famoso, mas a vista dos Andes compensa.',
            },
          },
        },
      },
    ],
  },
];
