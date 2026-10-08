import type { LanguageVariant } from '../types';
import { toIpaEs } from '@/services/ipa-es';

/** Variantes do espanhol: o padrão latino-americano do app, o espanhol da Espanha e o rioplatense. */
export const VARIANTS_ES: LanguageVariant[] = [
  {
    code: 'es-419',
    country: 'MEX',
    kind: 'dialeto',
    speechLocale: 'es-MX',
    ipa: (t) => toIpaEs(t, '419'),
    name: 'Espanhol latino-americano',
    flag: '🌎',
    summary: 'O padrão do app: um espanhol neutro, entendido do México à Terra do Fogo, com “ustedes” no plural e o som de “s” no lugar do “z”.',
    card: {
      id: 'es-419-c1',
      title: 'Por que o espanhol latino-americano?',
      emoji: '🌎',
      history:
        'Cerca de nove em cada dez falantes nativos de espanhol vivem nas Américas, e o México é o país com mais falantes nativos do mundo. O Brasil faz fronteira com sete países hispanofalantes: Uruguai, Argentina, Paraguai, Bolívia, Peru, Colômbia e Venezuela. É esse espanhol que você vai ouvir nas viagens pela região, nos negócios com os vizinhos e na maior parte das músicas e séries em espanhol.',
      culture_tip:
        'O espanhol latino-americano não é uma língua à parte: a gramática e a ortografia são as mesmas da Espanha, fixadas em conjunto pelas academias de todos os países hispanofalantes. O app usa uma variante neutra, entendida do México à Patagônia; com ela você conversa em qualquer lugar, inclusive na Espanha. As outras variantes ficam nesta seção para você reconhecer as diferenças quando elas aparecerem.',
      grammar_why:
        'Três marcas do padrão latino-americano: (1) “ustedes” é o único plural de “tú”, tanto entre amigos quanto em situações formais, sem “vosotros”; (2) “z” e “c” antes de “e/i” soam como “s” (seseo): “casa” e “caza” soam igual; (3) para o passado de hoje, o mais comum é o indefinido: “Hoy me levanté temprano”. Onde há variação regional (tú × vos, palavras do dia a dia), o app prefere a forma mais compreendida em toda a região.',
      grammar_examples: [
        ['¿Ustedes quieren un café?', 'Vocês querem um café?'],
        ['Chicos, ¿de dónde son ustedes?', 'Pessoal, de onde vocês são?'],
        ['Hoy me levanté temprano.', 'Hoje eu acordei cedo.'],
        ['La casa y la caza suenan igual.', '“Casa” (casa) e “caza” (caça) soam igual.'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'es-ES',
    country: 'ESP',
    kind: 'dialeto',
    speechLocale: 'es-ES',
    ipa: (t) => toIpaEs(t, 'ES'),
    name: 'Espanhol da Espanha',
    flag: '🇪🇸',
    summary:
      'Mesma gramática e mesma ortografia, mas com “vosotros”, o pretérito perfecto para o passado recente, o som [θ] no “z” e muitas palavras próprias do dia a dia.',
    card: {
      id: 'es-es-c1',
      title: 'Vosotros e o passado de hoje',
      emoji: '🇪🇸',
      history:
        'O espanhol nasceu em Castela, no centro-norte da Península Ibérica, e por isso também se chama “castellano”. A Real Academia Española foi fundada em Madri em 1713 e hoje trabalha em conjunto com as academias dos outros países hispanofalantes. A Espanha reúne menos de um décimo dos falantes nativos de espanhol e convive com outras línguas oficiais em suas regiões, como o catalão, o galego e o basco.',
      culture_tip:
        'Na Espanha, “vosotros” é o plural de “tú”: é assim que se fala com um grupo de amigos, colegas ou parentes. “Ustedes” fica para situações formais (exceto nas Canárias e em parte da Andaluzia, onde se usa “ustedes” para todos, como na América). Os horários também surpreendem: almoça-se por volta das duas da tarde e janta-se depois das nove da noite. E prepare-se para ouvir “vale” (tá bom) a cada frase.',
      grammar_why:
        '(1) “Vosotros” tem conjugação própria: “habláis, coméis, vivís” no presente e “hablasteis” no indefinido; o imperativo afirmativo termina em -d: “¡hablad!, ¡comed!, ¡venid!”. O pronome átono é “os” e o possessivo, “vuestro/vuestra”. (2) Para o passado dentro de um período que ainda não acabou (hoy, esta mañana, esta semana, este año), a Espanha prefere o pretérito perfecto: “Hoy he comido paella”. Na maior parte da América Latina, o normal é o indefinido: “Hoy comí paella”. Para ontem e antes, os dois usam o indefinido: “Ayer comí paella”. Reconheça essas formas; no app seguimos o padrão latino-americano.',
      grammar_examples: [
        ['¿Vosotros queréis un café?', 'Vocês querem um café?'],
        ['¿De dónde sois?', 'De onde vocês são?'],
        ['¡Venid, que la cena está lista!', 'Venham, que o jantar está pronto!'],
        ['Os he traído un regalo.', 'Eu trouxe um presente para vocês.'],
        ['Esta mañana he desayunado churros con chocolate.', 'Hoje de manhã tomei café com churros e chocolate quente.'],
        ['¿Habéis visto la película? (América: ¿Vieron la película?)', 'Vocês viram o filme?'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Distinção: “z” e “c” antes de “e/i” soam [θ], com a ponta da língua entre os dentes, como o “th” do inglês “think”. Por isso “casa” (casa) e “caza” (caça) soam diferentes, assim como “cena” (jantar) e “sena”. Em partes da Andaluzia e nas Canárias há seseo, como na América.',
      'O “j”, e o “g” antes de “e/i”, é [x]: forte e raspado no fundo da garganta, mais áspero que o “rr” carioca. Ouça “jamón”, “gente”, “ajo”. Em boa parte da América esse som é mais suave.',
      'O “s” é apical: pronunciado com a ponta da língua levantada, soa um pouco chiado, entre o nosso “s” e o “x”. Repare em “sí, señor” ou “así es”.',
      'O “d” final quase some ou vira [θ]: “Madrid” soa “Madrí” ou “Madriz”, “usted” soa “usté”. Na fala informal, “-ado” vira “-ao”: “cansado” soa “cansao”.',
      'No sul, o “s” no fim da sílaba vira um sopro ou cai: “los niños” soa “loh niñoh”. E a diferença entre “ll” e “y” quase desapareceu no país todo: como na América, “pollo” e “poyo” soam igual (yeísmo).',
    ],
    vocab: [
      ['carro', 'coche', 'carro', 'na Espanha, “carro” é carroça ou carrinho de compras'],
      ['celular', 'móvil', 'celular'],
      ['computadora', 'ordenador', 'computador'],
      ['jugo', 'zumo', 'suco'],
      ['manejar', 'conducir', 'dirigir (um carro)', '“conducir” também se usa na América, no registro formal'],
      ['papa', 'patata', 'batata', 'na Espanha, “el papa” é o Papa; “papa” só se ouve nas Canárias e em parte da Andaluzia'],
      ['durazno', 'melocotón', 'pêssego'],
      ['frijoles', 'judías, alubias', 'feijão'],
      ['arveja', 'guisante', 'ervilha', 'no México, “chícharo”'],
      ['maní', 'cacahuete', 'amendoim', 'no México, “cacahuate”'],
      ['camarón', 'gamba', 'camarão', 'na Espanha, “camarón” é um camarão bem pequeno'],
      ['banana', 'plátano', 'banana', 'no México e em parte do Caribe também se diz “plátano”'],
      ['torta, pastel', 'tarta', 'bolo (de festa), torta'],
      ['refrigerador', 'nevera, frigorífico', 'geladeira'],
      ['departamento, apartamento', 'piso', 'apartamento', '“piso” também é andar e chão'],
      ['clóset', 'armario', 'guarda-roupa, armário embutido'],
      ['cobija, frazada', 'manta', 'cobertor'],
      ['control remoto', 'mando (a distancia)', 'controle remoto'],
      ['elevador', 'ascensor', 'elevador', 'na América também se diz “ascensor”'],
      ['boleto', 'billete', 'passagem, bilhete', 'na Espanha, “billete” é também a cédula de dinheiro'],
      ['estacionar', 'aparcar', 'estacionar'],
      ['licencia de conducir', 'carné de conducir', 'carteira de motorista'],
      ['llanta', 'neumático', 'pneu', 'na Espanha, “llanta” é o aro da roda'],
      ['cuadra', 'manzana', 'quarteirão', '“manzana” também é maçã'],
      ['anteojos, lentes', 'gafas', 'óculos'],
      ['saco', 'chaqueta, americana', 'paletó'],
      ['suéter', 'jersey', 'suéter, blusa de lã'],
      ['medias', 'calcetines', 'meias (curtas)', 'na Espanha, “medias” são meias-calças'],
      ['bolsa, cartera', 'bolso', 'bolsa (de mão)'],
      ['billetera', 'cartera', 'carteira (de dinheiro)'],
      ['mesero, mozo', 'camarero', 'garçom'],
      ['tarea', 'deberes', 'lição de casa', '“hacer los deberes”'],
      ['pasto', 'césped', 'grama'],
      ['cerillo, fósforo', 'cerilla', 'fósforo'],
      ['tomar (el autobús)', 'coger (el autobús)', 'pegar (o ônibus)', 'ATENÇÃO: em boa parte da América Latina, “coger” é palavrão'],
      ['enojarse', 'enfadarse', 'ficar bravo, zangar-se'],
      ['apurarse', 'darse prisa', 'apressar-se', '“¡Date prisa!” = anda logo!'],
      ['pararse', 'ponerse de pie', 'ficar de pé', 'na Espanha, “pararse” é só parar'],
      ['regresar', 'volver', 'voltar', '“volver” também é muito comum na América'],
      ['acá', 'aquí', 'aqui', '“acá” existe na Espanha, mas “aquí” é bem mais usado'],
      ['lindo', 'mono', 'fofo, bonitinho', 'coloquial; “mono” também é macaco'],
      ['genial, buenísimo', 'guay', 'legal, massa', 'coloquial'],
      ['chico, muchacho', 'chaval', 'moleque, garoto', 'coloquial'],
      ['dinero, plata', 'pasta', 'grana', 'coloquial'],
      ['está bien, bueno', 'vale', 'tá bom, beleza', 'a palavra mais ouvida na Espanha'],
      ['ustedes (entre amigos)', 'vosotros', 'vocês', 'plural informal; na Espanha “ustedes” fica para o formal'],
    ],
    stories: [
      {
        id: 'es-es-h1',
        variant: 'es-ES',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Linu en Madrid',
        emoji: '🚣',
        summary: 'No primeiro dia em Madri, Linu prova o sanduíche de lulas da Plaza Mayor e tenta remar no lago do Retiro com os amigos.',
        cultural_context:
          'O Retiro é o grande parque do centro de Madri, com um lago onde se alugam barcos a remo. O “bocadillo de calamares”, pão com anéis de lula empanados, é um clássico dos bares em volta da Plaza Mayor.',
        start: 'start',
        glossary: [
          ['ha llegado', 'chegou (pretérito perfecto)'],
          ['¿Has comido ya?', 'Você já comeu?'],
          ['nunca lo he probado', 'nunca provei isso'],
          ['el bocadillo', 'o sanduíche de pão'],
          ['el estanque', 'o lago (do parque)'],
          ['la barca', 'o barco a remo'],
          ['vosotros', 'vocês (Espanha, informal)'],
          ['venga', 'vamos, anda (Espanha)'],
        ],
        nodes: {
          start: {
            emoji: '🚆',
            text: 'Linu ha llegado a Madrid esta mañana en tren. Está cansado, pero muy contento. Su amiga Lucía le escribe: “¡Hola, Linu! Pablo y yo estamos en la Plaza Mayor, en un bar muy famoso. ¿Has comido ya?”',
            translation:
              'Linu chegou a Madri hoje de manhã, de trem. Está cansado, mas muito contente. Sua amiga Lucía escreve: “Oi, Linu! O Pablo e eu estamos na Plaza Mayor, num bar muito famoso. Você já comeu?”',
            choices: [
              { text: '“Todavía no he comido. ¡Voy ahora mismo!”', translation: '“Ainda não comi. Estou indo agora mesmo!”', next: 'plaza' },
              {
                text: 'Va al parque del Retiro a buscar a sus amigos.',
                translation: 'Vai ao parque do Retiro procurar os amigos.',
                wrong: 'Lucía escreveu que eles estão na Plaza Mayor: “estamos en la Plaza Mayor”. O Retiro fica para depois!',
              },
            ],
          },
          plaza: {
            emoji: '🥖',
            text: 'La Plaza Mayor es grande y está llena de gente. Pablo le pregunta: “Linu, ¿has probado alguna vez el bocadillo de calamares? Es muy típico de Madrid.”',
            translation: 'A Plaza Mayor é grande e está cheia de gente. Pablo pergunta: “Linu, você já provou alguma vez o sanduíche de lulas? É muito típico de Madri.”',
            choices: [
              { text: '“No, nunca lo he probado. ¡Quiero uno!”', translation: '“Não, nunca provei. Quero um!”', next: 'bocadillo' },
              { text: '“Prefiero una tortilla de patatas.”', translation: '“Prefiro uma tortilha de batata.”', next: 'tortilla' },
            ],
          },
          bocadillo: {
            emoji: '😋',
            text: 'El bocadillo es enorme y está buenísimo. Linu se lo ha comido en cinco minutos. Lucía se ríe: “¡Qué rápido! Venga, ahora vamos al Retiro.”',
            translation: 'O sanduíche é enorme e está uma delícia. Linu comeu tudo em cinco minutos. Lucía ri: “Que rápido! Vamos, agora vamos ao Retiro.”',
            choices: [{ text: 'Van andando al Retiro.', translation: 'Vão a pé ao Retiro.', next: 'retiro' }],
          },
          tortilla: {
            emoji: '🥔',
            text: 'El camarero trae una tortilla de patatas con pan. Linu la prueba: “¡Qué rica! Ha sido una buena idea.” Pablo paga y dice: “Venga, vamos al Retiro.”',
            translation: 'O garçom traz uma tortilha de batata com pão. Linu prova: “Que gostosa! Foi uma boa ideia.” Pablo paga e diz: “Vamos, vamos ao Retiro.”',
            choices: [{ text: 'Van andando al Retiro.', translation: 'Vão a pé ao Retiro.', next: 'retiro' }],
          },
          retiro: {
            emoji: '🌳',
            text: 'El parque del Retiro es enorme y muy verde. En el estanque hay barcas de remos. Lucía dice: “Yo nunca he remado. ¿Y vosotros?” Pablo tampoco ha remado nunca.',
            translation: 'O parque do Retiro é enorme e muito verde. No lago há barcos a remo. Lucía diz: “Eu nunca remei. E vocês?” Pablo também nunca remou.',
            choices: [
              { text: 'Alquilan una barca.', translation: 'Alugam um barco.', next: 'barca' },
              { text: 'Pasean por el parque.', translation: 'Passeiam pelo parque.', next: 'final_siesta' },
              {
                text: '“Pablo sabe remar muy bien, ¿verdad?”',
                translation: '“O Pablo sabe remar muito bem, não é?”',
                wrong: '“Pablo tampoco ha remado nunca”: o Pablo também nunca remou. Ninguém ali tem experiência!',
              },
            ],
          },
          barca: {
            emoji: '🚣',
            text: 'Pablo rema, pero la barca solo da vueltas. Lucía no puede parar de reír. Linu mira el agua: está fresquita, perfecta para un pingüino.',
            translation: 'Pablo rema, mas o barco só dá voltas. Lucía não consegue parar de rir. Linu olha a água: está fresquinha, perfeita para um pinguim.',
            choices: [
              { text: 'Linu salta al agua y empuja la barca.', translation: 'Linu pula na água e empurra o barco.', next: 'final_agua' },
              { text: 'Linu coge los remos.', translation: 'Linu pega os remos.', next: 'final_remos' },
            ],
          },
          final_agua: {
            emoji: '🎉',
            text: 'Linu salta al estanque y empuja la barca hasta el centro. La gente aplaude desde la orilla. Lucía grita: “¡Hoy ha sido un día genial!”',
            translation: 'Linu pula no lago e empurra o barco até o centro. As pessoas aplaudem da margem. Lucía grita: “Hoje foi um dia incrível!”',
            ending: {
              tone: 'bom',
              title: 'O motor do Retiro',
              message: 'Você acompanhou o dia no pretérito perfecto, do jeito que se fala na Espanha: “ha llegado”, “ha sido”.',
            },
          },
          final_remos: {
            emoji: '😅',
            text: 'Linu coge los remos con sus aletas, pero él tampoco sabe remar. Al final, un señor de otra barca les enseña. Pablo dice: “¡Hoy hemos aprendido algo nuevo!”',
            translation: 'Linu pega os remos com as nadadeiras, mas ele também não sabe remar. No fim, um senhor de outro barco ensina os três. Pablo diz: “Hoje aprendemos uma coisa nova!”',
            ending: {
              tone: 'neutro',
              title: 'Aula de remo',
              message: 'Muitas voltas no lago, mas ninguém se molhou. Da próxima vez, que tal usar as nadadeiras?',
            },
          },
          final_siesta: {
            emoji: '😴',
            text: 'Los tres pasean y se tumban en el césped. Hace sol y Linu está muy cansado: se ha dormido en dos minutos. Cuando se despierta, Lucía le dice: “¡Has dormido una hora!”',
            translation: 'Os três passeiam e se deitam na grama. Faz sol e Linu está muito cansado: dormiu em dois minutos. Quando acorda, Lucía diz: “Você dormiu uma hora!”',
            ending: {
              tone: 'neutro',
              title: 'Siesta madrilena',
              message: 'Um descanso merecido depois da viagem. As barcas ficam para amanhã!',
            },
          },
        },
      },
      {
        id: 'es-es-h2',
        variant: 'es-ES',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Las flechas amarillas',
        emoji: '🐚',
        summary: 'Nas últimas etapas do Caminho de Santiago, na Galícia, Linu e Marta enfrentam chuva, atalhos e um peregrino machucado.',
        cultural_context:
          'O Caminho de Santiago é sinalizado com setas amarelas e conchas de vieira. Quem faz a pé pelo menos os últimos 100 quilômetros, com a credencial carimbada pelo caminho, pode pedir a “Compostela”, certificado tradicionalmente escrito em latim. Melide, na Galícia, é famosa pelo polvo.',
        start: 'start',
        glossary: [
          ['acaba de salir', 'acabou de sair'],
          ['llegaremos', 'chegaremos'],
          ['yo en vuestro lugar saldría', 'eu, no lugar de vocês, sairia'],
          ['siguen caminando', 'continuam caminhando'],
          ['la flecha amarilla', 'a seta amarela'],
          ['el sello', 'o carimbo'],
          ['por vosotros', 'graças a vocês (causa)'],
          ['para Santiago', 'em direção a Santiago (destino)'],
          ['ir a por', 'ir buscar (Espanha)'],
        ],
        nodes: {
          start: {
            emoji: '🌧️',
            text: 'Linu acaba de salir del albergue de Melide con su amiga Marta, una peregrina de Valencia. Faltan unos cincuenta kilómetros para Santiago de Compostela. Marta mira el cielo gris y dice: “Si seguimos a este ritmo, llegaremos pasado mañana. Pero creo que va a llover.”',
            translation:
              'Linu acaba de sair do albergue de Melide com sua amiga Marta, uma peregrina de Valência. Faltam uns cinquenta quilômetros para Santiago de Compostela. Marta olha o céu cinzento e diz: “Se continuarmos neste ritmo, chegaremos depois de amanhã. Mas acho que vai chover.”',
            choices: [
              { text: 'Se ponen los chubasqueros y siguen caminando.', translation: 'Vestem as capas de chuva e continuam caminhando.', next: 'bosque' },
              { text: 'Deciden desayunar primero en un bar.', translation: 'Decidem tomar café da manhã primeiro num bar.', next: 'bar' },
            ],
          },
          bar: {
            emoji: '☕',
            text: 'En el bar, un señor mayor les sirve dos cafés con leche y les pregunta: “¿Vais para Santiago?” Marta le enseña su credencial y el señor le pone un sello. Luego les aconseja: “Yo en vuestro lugar saldría ya, porque esta tarde lloverá muchísimo.”',
            translation:
              'No bar, um senhor de idade serve dois cafés com leite e pergunta: “Vocês vão para Santiago?” Marta mostra a credencial e o senhor põe um carimbo nela. Depois aconselha: “Eu, no lugar de vocês, sairia já, porque hoje à tarde vai chover muitíssimo.”',
            choices: [
              { text: 'Pagan y salen enseguida.', translation: 'Pagam e saem logo.', next: 'bosque' },
              {
                text: 'Se quedan en el bar toda la tarde, como les ha aconsejado el señor.',
                translation: 'Ficam no bar a tarde toda, como o senhor aconselhou.',
                wrong: 'O senhor aconselhou o contrário: “yo en vuestro lugar saldría ya”, eu no lugar de vocês sairia já, porque à tarde vai chover muito. É o condicional dando um conselho.',
              },
            ],
          },
          bosque: {
            emoji: '🌲',
            text: 'El camino pasa por bosques de eucaliptos y pueblos pequeños. En un cruce, la flecha amarilla señala un sendero a la izquierda, pero un cartel dice: “Atajo para Santiago por la carretera”. Marta pregunta: “¿Tú qué harías?”',
            translation:
              'O caminho passa por bosques de eucaliptos e aldeias pequenas. Num cruzamento, a seta amarela aponta uma trilha à esquerda, mas uma placa diz: “Atalho para Santiago pela estrada”. Marta pergunta: “O que você faria?”',
            choices: [
              { text: '“Yo seguiría la flecha amarilla.”', translation: '“Eu seguiria a seta amarela.”', next: 'rio' },
              { text: '“Yo tomaría el atajo.”', translation: '“Eu pegaria o atalho.”', next: 'carretera' },
            ],
          },
          carretera: {
            emoji: '🚗',
            text: 'La carretera es más corta, pero no tiene sombra ni fuentes, y los coches pasan muy rápido. Después de una hora, Marta dice: “Acabo de ver una flecha amarilla ahí abajo.” Y añade: “Deberíamos volver al camino.”',
            translation:
              'A estrada é mais curta, mas não tem sombra nem fontes, e os carros passam muito rápido. Depois de uma hora, Marta diz: “Acabei de ver uma seta amarela lá embaixo.” E acrescenta: “Deveríamos voltar para o caminho.”',
            choices: [{ text: 'Vuelven al camino.', translation: 'Voltam para o caminho.', next: 'rio' }],
          },
          rio: {
            emoji: '🌉',
            text: 'El sendero sigue junto a un río tranquilo. Empieza a llover, pero ellos siguen caminando y cantando. En un puente encuentran a Jonas, un peregrino alemán que se ha torcido el tobillo y no puede seguir solo.',
            translation:
              'A trilha segue ao lado de um rio tranquilo. Começa a chover, mas eles continuam caminhando e cantando. Numa ponte encontram Jonas, um peregrino alemão que torceu o tornozelo e não consegue continuar sozinho.',
            choices: [
              { text: 'Lo ayudan a llegar al próximo pueblo.', translation: 'Ajudam-no a chegar à próxima aldeia.', next: 'ayudar' },
              { text: 'Le dejan agua y siguen, porque tienen prisa.', translation: 'Deixam água para ele e seguem, porque estão com pressa.', next: 'final_solos' },
            ],
          },
          ayudar: {
            emoji: '🤝',
            text: 'Linu lleva la mochila de Jonas y Marta le presta su bastón. Caminan despacio, pero llegan al pueblo antes de que oscurezca. Jonas les da las gracias: “Por vosotros no he tenido que abandonar el Camino. En Santiago os invitaré a pulpo.”',
            translation:
              'Linu carrega a mochila de Jonas e Marta empresta o cajado dela. Caminham devagar, mas chegam à aldeia antes de escurecer. Jonas agradece: “Graças a vocês não precisei abandonar o Caminho. Em Santiago vou convidar vocês para comer polvo.”',
            choices: [
              { text: 'Siguen juntos hasta Santiago.', translation: 'Seguem juntos até Santiago.', next: 'santiago' },
              {
                text: 'Linu entiende que Jonas va a abandonar el Camino.',
                translation: 'Linu entende que Jonas vai abandonar o Caminho.',
                wrong: '“Por vosotros no he tenido que abandonar”: graças a vocês ele NÃO precisou desistir. Aqui “por” indica a causa, e não a finalidade.',
              },
            ],
          },
          santiago: {
            emoji: '⛪',
            text: 'Dos días después, los tres entran en la plaza del Obradoiro. La catedral es impresionante, y Linu vuelve a mirar su credencial, llena de sellos. Marta propone: “Podríamos ir a por la Compostela ahora o comer primero. ¿Qué preferís?”',
            translation:
              'Dois dias depois, os três entram na praça do Obradoiro. A catedral é impressionante, e Linu volta a olhar sua credencial, cheia de carimbos. Marta propõe: “Poderíamos ir buscar a Compostela agora ou comer primeiro. O que vocês preferem?”',
            choices: [
              { text: '“¡Vamos a por la Compostela!”', translation: '“Vamos buscar a Compostela!”', next: 'final_compostela' },
              { text: '“Primero el pulpo, que Jonas nos invita.”', translation: '“Primeiro o polvo, que o Jonas está convidando.”', next: 'final_pulpo' },
            ],
          },
          final_compostela: {
            emoji: '📜',
            text: 'En la oficina del peregrino, les dan la Compostela, escrita en latín. Linu no entiende casi nada, pero sonríe al ver su nombre. “La guardaré para siempre”, dice.',
            translation: 'Na secretaria do peregrino, eles recebem a Compostela, escrita em latim. Linu não entende quase nada, mas sorri ao ver o próprio nome. “Vou guardá-la para sempre”, diz.',
            ending: {
              tone: 'bom',
              title: 'Peregrino oficial',
              message: 'Você chegou a Santiago com o futuro, o condicional e as perífrases na mochila.',
            },
          },
          final_pulpo: {
            emoji: '🐙',
            text: 'Jonas cumple su promesa: pulpo a la gallega, con pimentón y aceite de oliva, para todos. Brindan por el Camino y por las flechas amarillas. “El año que viene volveremos a caminar juntos”, dice Marta.',
            translation: 'Jonas cumpre a promessa: polvo à galega, com páprica e azeite de oliva, para todos. Brindam ao Caminho e às setas amarelas. “No ano que vem vamos caminhar juntos de novo”, diz Marta.',
            ending: {
              tone: 'bom',
              title: 'Polvo da amizade',
              message: 'A ajuda no caminho virou amizade. “Volveremos a caminar”: a perífrase de repetição promete mais aventuras.',
            },
          },
          final_solos: {
            emoji: '🌦️',
            text: 'Linu y Marta llegan a Santiago dos días después, cansados y mojados. Sin embargo, Linu sigue pensando en Jonas. “Deberíamos haberlo ayudado”, le dice a Marta.',
            translation: 'Linu e Marta chegam a Santiago dois dias depois, cansados e molhados. No entanto, Linu continua pensando em Jonas. “Deveríamos ter ajudado ele”, diz para Marta.',
            ending: {
              tone: 'neutro',
              title: 'Chegada pela metade',
              message: 'Vocês chegaram, mas sem o companheiro do caminho. No Caminho de Santiago, a pressa costuma ser a pior companheira.',
            },
          },
        },
      },
      {
        id: 'es-es-h3',
        variant: 'es-ES',
        level: 'B2.1',
        cefr: 'B2',
        title: 'Un pingüino en las Fallas',
        emoji: '🔥',
        summary: 'Em Valência, na noite da “cremà”, Linu se apaixona por um boneco de pinguim que vai virar cinzas à meia-noite.',
        cultural_context:
          'As Fallas de Valência, Patrimônio Cultural Imaterial da Humanidade pela UNESCO desde 2016, terminam na noite de 19 de março, dia de São José, com a “cremà”: os monumentos cheios de bonecos satíricos (ninots) são queimados nas ruas. Só dois ninots por ano escapam do fogo, os “indultados”, escolhidos por votação popular. Durante a festa, a “mascletà” explode todo dia às duas da tarde na praça da Prefeitura.',
        start: 'start',
        glossary: [
          ['la quema', 'a queima (em valenciano, “cremà”)'],
          ['la mascletá', 'a sequência de rojões das duas da tarde (valenciano “mascletà”)'],
          ['el ninot', 'o boneco do monumento (valenciano)'],
          ['el casal', 'a sede da associação da falla'],
          ['si yo fuera', 'se eu fosse'],
          ['si salváramos', 'se salvássemos'],
          ['sin embargo', 'no entanto'],
          ['aunque', 'embora, ainda que'],
          ['por lo tanto', 'portanto'],
          ['la ilusión', 'a expectativa, a animação (falso amigo)'],
        ],
        nodes: {
          start: {
            emoji: '🎆',
            text: 'Es 19 de marzo en Valencia, y Linu lleva una semana disfrutando de las Fallas. Su amigo Vicent, que es fallero, le ha contado que esta noche quemarán todos los monumentos; sin embargo, Linu todavía no se lo cree. “Si yo fuera fallero, no dejaría que quemaran algo tan bonito”, le dice.',
            translation:
              'É 19 de março em Valência, e Linu está há uma semana curtindo as Fallas. Seu amigo Vicent, que é fallero, contou que esta noite vão queimar todos os monumentos; no entanto, Linu ainda não acredita. “Se eu fosse fallero, não deixaria que queimassem algo tão bonito”, diz.',
            choices: [
              { text: '“¿Por qué los queman, entonces?”', translation: '“Por que os queimam, então?”', next: 'porque' },
              { text: 'Va primero a la mascletá de las dos.', translation: 'Vai primeiro à mascletà das duas.', next: 'mascleta' },
            ],
          },
          mascleta: {
            emoji: '💥',
            text: 'A las dos, la plaza del Ayuntamiento está llena hasta los balcones. La mascletá no se ve, se siente: el suelo tiembla y el ruido es tan fuerte que Linu se tapa los oídos. Al terminar, Vicent se ríe: “Te dije que no te pusieras tan cerca.” Luego lo lleva al casal de su falla.',
            translation:
              'Às duas, a praça da Prefeitura está lotada até as sacadas. A mascletà não se vê, se sente: o chão treme e o barulho é tão forte que Linu tapa os ouvidos. No fim, Vicent ri: “Eu te disse para não ficar tão perto.” Depois o leva à sede da sua falla.',
            choices: [{ text: 'Va con Vicent al casal.', translation: 'Vai com Vicent à sede.', next: 'casal' }],
          },
          porque: {
            emoji: '🪵',
            text: 'Vicent le explica que, según la tradición, la fiesta nació de las hogueras que hacían los carpinteros en la víspera de San José. El fuego cierra un ciclo, y al día siguiente ya se empieza a pensar en la falla del año próximo. “Además, cada año se salvan dos ninots, los indultados, que se eligen por votación popular; por lo tanto, si querías salvar alguno, tendrías que haber votado”, bromea.',
            translation:
              'Vicent explica que, segundo a tradição, a festa nasceu das fogueiras que os carpinteiros faziam na véspera de São José. O fogo fecha um ciclo, e no dia seguinte já se começa a pensar na falla do ano que vem. “Além disso, todo ano se salvam dois ninots, os indultados, escolhidos por votação popular; portanto, se você queria salvar algum, deveria ter votado”, brinca.',
            choices: [{ text: 'Va con Vicent al casal.', translation: 'Vai com Vicent à sede.', next: 'casal' }],
          },
          casal: {
            emoji: '🐧',
            text: 'Frente al casal se levanta el monumento de la falla de Vicent. En una esquina hay un ninot pequeño con forma de pingüino, con gafas de sol y una paella entre las aletas. Linu se enamora de él al instante; sin embargo, Vicent le recuerda que a medianoche arderá con todo lo demás.',
            translation:
              'Em frente à sede ergue-se o monumento da falla de Vicent. Num canto há um ninot pequeno em forma de pinguim, de óculos escuros e com uma paella entre as nadadeiras. Linu se apaixona por ele na hora; no entanto, Vicent lembra que à meia-noite ele vai arder com todo o resto.',
            choices: [
              { text: 'Le pide a Vicent que hable con la presidenta de la falla.', translation: 'Pede a Vicent que fale com a presidente da falla.', next: 'comision' },
              { text: 'Le hace muchas fotos para recordarlo.', translation: 'Tira muitas fotos dele para lembrar.', next: 'fotos' },
              {
                text: 'Se alegra: el ninot pingüino es uno de los indultados de este año.',
                translation: 'Fica feliz: o ninot pinguim é um dos indultados deste ano.',
                wrong: 'Vicent lembrou que o pinguim “arderá con todo lo demás”, vai queimar com todo o resto. Então ele não é um indultado, os únicos que se salvam.',
              },
            ],
          },
          comision: {
            emoji: '🗣️',
            text: 'La presidenta escucha a Linu con paciencia. “Aunque me encantaría ayudarte, no puedo: si salváramos cada ninot que le gusta a alguien, no quemaríamos nada”, le explica. Sin embargo, le propone que se quede a cenar con la comisión y que vea la quema desde la primera fila.',
            translation:
              'A presidente escuta Linu com paciência. “Embora eu adorasse te ajudar, não posso: se salvássemos cada ninot de que alguém gosta, não queimaríamos nada”, explica. No entanto, propõe que ele fique para jantar com a comissão e que veja a cremà da primeira fila.',
            choices: [
              { text: 'Acepta y se queda a cenar.', translation: 'Aceita e fica para jantar.', next: 'cena' },
              { text: 'Da las gracias, pero prefiere despedirse del ninot a solas.', translation: 'Agradece, mas prefere se despedir do ninot sozinho.', next: 'fotos' },
            ],
          },
          fotos: {
            emoji: '📸',
            text: 'Linu fotografía al ninot desde todos los ángulos. Una señora mayor lo observa y le cuenta que, de niña, lloraba cada 19 de marzo; aun así, nunca se ha perdido una quema. “Si no se quemaran, no las esperaríamos con tanta ilusión”, le dice.',
            translation:
              'Linu fotografa o ninot de todos os ângulos. Uma senhora de idade o observa e conta que, quando menina, chorava todo 19 de março; mesmo assim, nunca perdeu uma cremà. “Se não fossem queimadas, não as esperaríamos com tanta expectativa”, diz.',
            choices: [
              { text: 'Se queda con la señora a ver la quema.', translation: 'Fica com a senhora para ver a cremà.', next: 'crema' },
              {
                text: 'Linu entiende que la señora nunca ha visto una quema.',
                translation: 'Linu entende que a senhora nunca viu uma cremà.',
                wrong: '“Nunca se ha perdido una quema” = ela nunca perdeu uma cremà, foi a todas. “Aun así” marca o contraste: chorava e, mesmo assim, sempre ia.',
              },
            ],
          },
          cena: {
            emoji: '🥘',
            text: 'La cena es una paella enorme, hecha a leña en plena calle. Vicent confiesa que, si tuviera que elegir entre la paella y la quema, no sabría qué escoger. Poco antes de medianoche, los bomberos se colocan alrededor del monumento y todos se levantan.',
            translation:
              'O jantar é uma paella enorme, feita na lenha no meio da rua. Vicent confessa que, se tivesse que escolher entre a paella e a cremà, não saberia o que escolher. Pouco antes da meia-noite, os bombeiros se posicionam em volta do monumento e todos se levantam.',
            choices: [{ text: 'Se acerca a la primera fila.', translation: 'Vai para a primeira fila.', next: 'crema' }],
          },
          crema: {
            emoji: '🔥',
            text: 'Apagan las farolas y, tras una traca, el monumento empieza a arder. Linu ve cómo el pingüino desaparece entre las llamas; aunque se le escapa una lágrima, siente que ha formado parte de algo especial. Vicent le pone una mano en el hombro.',
            translation:
              'Apagam os postes de luz e, depois de uma fieira de rojões, o monumento começa a arder. Linu vê o pinguim desaparecer entre as chamas; embora lhe escape uma lágrima, sente que fez parte de algo especial. Vicent põe a mão no ombro dele.',
            choices: [
              { text: '“El año que viene quiero ser fallero.”', translation: '“No ano que vem eu quero ser fallero.”', next: 'final_fallero' },
              { text: 'Se marcha antes de que termine.', translation: 'Vai embora antes que termine.', next: 'final_marcha' },
            ],
          },
          final_fallero: {
            emoji: '🎉',
            text: 'Vicent lo abraza: “Si te apuntaras hoy, el año que viene podrías desfilar con nosotros en la Ofrenda de flores.” Linu acepta sin pensarlo. Y, aunque el pingüino ya es ceniza, guarda las fotos como un tesoro.',
            translation:
              'Vicent o abraça: “Se você se inscrevesse hoje, no ano que vem poderia desfilar com a gente na Oferenda de flores.” Linu aceita sem pensar. E, embora o pinguim já seja cinza, guarda as fotos como um tesouro.',
            ending: {
              tone: 'bom',
              title: 'Fallero de coração',
              message: 'Você entendeu as hipóteses no imperfecto de subjuntivo e os conectores de contraste do começo ao fim da festa.',
            },
          },
          final_marcha: {
            emoji: '🌫️',
            text: 'Linu vuelve al hotel sin mirar atrás. Sin embargo, desde la ventana se ven los resplandores de cientos de hogueras por toda la ciudad. “Si me hubiera quedado, quizá lo habría entendido”, piensa.',
            translation:
              'Linu volta para o hotel sem olhar para trás. No entanto, da janela se veem os clarões de centenas de fogueiras pela cidade toda. “Se eu tivesse ficado, talvez tivesse entendido”, pensa.',
            ending: {
              tone: 'neutro',
              title: 'Fogo de longe',
              message: 'Perder a cremà é perder o sentido da festa. No ano que vem, fique até o fim!',
            },
          },
        },
      },
    ],
  },
  {
    code: 'es-AR',
    country: 'ARG',
    kind: 'dialeto',
    speechLocale: 'es-AR',
    ipa: (t) => toIpaEs(t, 'AR'),
    name: 'Espanhol rioplatense',
    flag: '🇦🇷',
    summary:
      'O espanhol de Buenos Aires e Montevidéu: “vos” no lugar de “tú” (vos tenés, vos sos), “ll” e “y” chiados, melodia italiana e gírias do lunfardo.',
    card: {
      id: 'es-ar-c1',
      title: 'Vos, che e o ritmo italiano',
      emoji: '🧉',
      history:
        'Entre o fim do século XIX e as primeiras décadas do século XX, milhões de imigrantes europeus, sobretudo italianos e espanhóis, chegaram a Buenos Aires e a Montevidéu. Dessa mistura nasceram o sotaque rioplatense, com uma melodia que lembra o italiano, e o lunfardo, a gíria portenha cheia de palavras de origem italiana, como “laburo” (trabalho) e “fiaca” (preguiça). O tango, declarado Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2009, é filho desse mesmo caldeirão.',
      culture_tip:
        'Na roda de mate, a mesma cuia passa de mão em mão, e quem serve (o “cebador”) enche e devolve a cada vez: tome até o fim, devolva ao cebador e não mexa na bomba. Dizer “gracias” ao devolver quer dizer “não quero mais”. Para chamar alguém, use “che”: “Che, ¿vamos?”. E “boludo”: entre amigos íntimos soa como “mano”, mas com desconhecidos é um insulto. Entenda, mas não use.',
      grammar_why:
        '“Vos” substitui “tú” em toda a conversa informal, inclusive na escrita do dia a dia e na publicidade. (1) Presente: acento na última sílaba e sem ditongo: “hablás, tenés, vivís, querés, podés”; o verbo ser fica “vos sos”. (2) Imperativo: tira-se o -r do infinitivo e acentua-se a última vogal: “hablá, comé, viví, vení”; com pronome, “decime, sentate”. (3) Depois de preposição também se usa “vos” (“para vos, con vos”), mas o pronome átono continua “te” e o possessivo, “tu/tuyo”: “¿Te llamo?”, “tu casa”. (4) No subjuntivo, o mais comum é a forma de “tú”: “Quiero que vengas”. (5) O plural é sempre “ustedes”. No Uruguai também se ouve “tú” com o verbo de vos: “tú tenés”.',
      grammar_examples: [
        ['¿Vos tenés hora?', 'Você tem horas?'],
        ['Vos sos de Brasil, ¿no?', 'Você é do Brasil, né?'],
        ['¿Querés un mate?', 'Quer um mate?'],
        ['Vení, mirá esto.', 'Vem, olha isto.'],
        ['Esto es para vos.', 'Isto é para você.'],
        ['Che, ¿vos te acordás de mí?', 'Ei, você se lembra de mim?'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Yeísmo rehilado: “ll” e “y” soam [ʒ], como o “j” de “já”, ou [ʃ], como o “x” de “xícara”. “Yo” soa “jô” ou “xô”, “calle” soa “caje” ou “caxe”, “lluvia” soa “júvia” ou “xúvia”.',
      'Entre os mais jovens de Buenos Aires predomina o [ʃ] surdo (“xô”); muitos dos mais velhos mantêm o [ʒ] sonoro (“jô”). Os dois são entendidos em toda a região.',
      'Entonação italiana: a melodia sobe e desce com força e a sílaba tônica às vezes se alonga, herança da grande imigração italiana. Por isso, para um brasileiro, o rioplatense soa “cantado”.',
      'O “s” antes de consoante vira um sopro [h] ou some: “¿Cómo estás?” soa “¿Cómo ehtás?”, “mismo” soa “mihmo”, “los dos” soa “loh dos”.',
      'O voseo muda a tônica: “vos tenés”, “vos podés”, “vos sabés” levam o acento na última sílaba, e o imperativo também: “vení”, “mirá”, “decime” (de-CI-me), “sentate” (sen-TA-te). Acertar essa tônica é o que mais faz você soar rioplatense.',
    ],
    vocab: [
      ['tú', 'vos', 'você (informal)', '“vos tenés”, “vos sos”'],
      ['autobús', 'colectivo', 'ônibus', 'em Montevidéu, “ómnibus”'],
      ['carro', 'auto', 'carro'],
      ['refrigerador', 'heladera', 'geladeira'],
      ['piscina', 'pileta', 'piscina', 'também é a pia da cozinha'],
      ['fresa', 'frutilla', 'morango'],
      ['aguacate', 'palta', 'abacate', 'também no Chile e no Peru'],
      ['frijol', 'poroto', 'feijão'],
      ['maíz', 'choclo', 'milho (espiga)', 'também nos Andes'],
      ['calabaza', 'zapallo', 'abóbora'],
      ['piña', 'ananá', 'abacaxi', 'parente do “ananás” do português'],
      ['pimiento', 'morrón', 'pimentão'],
      ['mantequilla', 'manteca', 'manteiga', 'em outros países, “manteca” é banha'],
      ['pastel', 'torta', 'bolo'],
      ['refresco', 'gaseosa', 'refrigerante'],
      ['camiseta', 'remera', 'camiseta'],
      ['falda', 'pollera', 'saia'],
      ['chaqueta', 'campera', 'jaqueta'],
      ['suéter', 'buzo', 'moletom, blusão'],
      ['traje de baño', 'malla', 'maiô, sunga'],
      ['acera', 'vereda', 'calçada'],
      ['mesero', 'mozo', 'garçom'],
      ['grifo, llave', 'canilla', 'torneira'],
      ['maletero, cajuela', 'baúl', 'porta-malas'],
      ['bolígrafo', 'birome', 'caneta esferográfica', 'do sobrenome do inventor, László Bíró, que viveu na Argentina'],
      ['tienda de abarrotes', 'almacén', 'mercearia, armazém'],
      ['discoteca', 'boliche', 'balada, boate'],
      ['trabajo', 'laburo', 'trampo, trabalho', 'lunfardo, do italiano “lavoro”'],
      ['pereza', 'fiaca', 'preguiça', 'lunfardo, do italiano “fiacca”'],
      ['dinero', 'guita, plata', 'grana', 'coloquial'],
      ['niño, chico', 'pibe (AR), gurí (UY)', 'moleque, guri', '“gurí” vem do guarani, parente do “guri” gaúcho'],
      ['chica, mujer', 'mina', 'mina, garota', 'lunfardo; informal'],
      ['policía', 'cana', 'polícia, tira', 'lunfardo'],
      ['genial', 'bárbaro, copado', 'demais, massa', 'coloquial'],
      ['muy', 're', 'muito', 'intensificador coloquial: “re lindo”, “re bien”'],
      ['de acuerdo, sí', 'dale', 'beleza, bora, tá', 'onipresente: serve para aceitar e para apressar'],
      ['burlarse, tomar el pelo', 'cargar', 'zoar, tirar sarro', '“¿Me estás cargando?”'],
      ['oye', 'che', 'ei, ô', 'para chamar alguém: “Che, ¿vamos?”'],
      ['tonto, idiota', 'boludo', 'bobo, idiota; entre amigos, “mano”', 'ATENÇÃO: entre amigos íntimos é carinhoso, com desconhecidos é ofensivo. Não use'],
    ],
    stories: [
      {
        id: 'es-ar-h1',
        variant: 'es-AR',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Linu en La Boca',
        emoji: '🎨',
        summary: 'Em Buenos Aires, Linu vai com a amiga Sofía até o Caminito, arrisca uns passos de tango e escolhe empanadas.',
        cultural_context:
          'Caminito é uma rua-museu do bairro de La Boca, em Buenos Aires, com casas de chapa pintadas de cores vivas. Nas empanadas argentinas, as de “humita” levam recheio cremoso de milho.',
        start: 'start',
        glossary: [
          ['el colectivo', 'o ônibus (Argentina)'],
          ['¿Vos querés…?', 'Você quer…?'],
          ['vamos a tomar', 'vamos pegar'],
          ['llegaron', 'chegaram'],
          ['más grande que', 'maior que'],
          ['más ricas que', 'mais gostosas que'],
          ['el mozo', 'o garçom (Argentina)'],
          ['dale', 'beleza, combinado'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'Ayer Linu llegó a Buenos Aires. Hoy su amiga Sofía le escribe: “¡Hola, Linu! ¿Vos querés conocer La Boca? Vamos a tomar el colectivo en la esquina de tu hotel.”',
            translation:
              'Ontem Linu chegou a Buenos Aires. Hoje sua amiga Sofía escreve: “Oi, Linu! Você quer conhecer La Boca? Vamos pegar o ônibus na esquina do seu hotel.”',
            choices: [
              { text: '“¡Dale! ¿A qué hora?”', translation: '“Beleza! A que horas?”', next: 'colectivo' },
              { text: '“Prefiero ir caminando.”', translation: '“Prefiro ir a pé.”', next: 'caminando' },
            ],
          },
          colectivo: {
            emoji: '🚍',
            text: 'El colectivo está lleno de gente. Sofía pagó los dos boletos con su tarjeta. En veinte minutos llegaron a La Boca.',
            translation: 'O ônibus está cheio de gente. Sofía pagou as duas passagens com o cartão dela. Em vinte minutos chegaram a La Boca.',
            choices: [{ text: 'Bajan del colectivo.', translation: 'Descem do ônibus.', next: 'caminito' }],
          },
          caminando: {
            emoji: '🚶',
            text: 'Linu caminó más de una hora. Buenos Aires es mucho más grande que su ciudad. Llegó cansado, pero Sofía lo esperó con un mate.',
            translation: 'Linu caminhou mais de uma hora. Buenos Aires é muito maior que a cidade dele. Chegou cansado, mas Sofía o esperou com um mate.',
            choices: [{ text: 'Toma el mate y siguen juntos.', translation: 'Toma o mate e seguem juntos.', next: 'caminito' }],
          },
          caminito: {
            emoji: '🎨',
            text: 'Caminito es una calle corta, con casas de chapa de muchos colores. Sofía dice: “Estas casas son más viejas que el barrio de mi abuela. Dicen que las pintaron con la pintura que sobraba en el puerto.”',
            translation:
              'Caminito é uma rua curta, com casas de chapa de muitas cores. Sofía diz: “Estas casas são mais velhas que o bairro da minha avó. Dizem que as pintaram com a tinta que sobrava no porto.”',
            choices: [
              { text: 'Mira a una pareja que baila tango.', translation: 'Olha um casal que dança tango.', next: 'tango' },
              { text: '“Tengo hambre. ¿Comemos algo?”', translation: '“Estou com fome. Vamos comer alguma coisa?”', next: 'empanadas' },
              {
                text: '“¡Qué lindas! ¿Son casas nuevas?”',
                translation: '“Que lindas! São casas novas?”',
                wrong: 'Sofía disse que as casas são “más viejas que el barrio de mi abuela”, mais velhas que o bairro da avó dela. Não são nada novas!',
              },
            ],
          },
          tango: {
            emoji: '💃',
            text: 'La bailarina invitó a Linu a bailar. Linu nunca bailó tango, pero lo intentó. Le pisó el pie dos veces, y la gente aplaudió igual.',
            translation: 'A dançarina convidou Linu para dançar. Linu nunca dançou tango, mas tentou. Pisou no pé dela duas vezes, e as pessoas aplaudiram mesmo assim.',
            choices: [{ text: 'Después, van a comer.', translation: 'Depois, vão comer.', next: 'empanadas' }],
          },
          empanadas: {
            emoji: '🥟',
            text: 'En un bodegón, el mozo les ofrece empanadas de carne y de humita. Sofía dice: “Las de carne son más ricas que las de humita, pero las de humita son más baratas.” Linu tiene poca plata.',
            translation:
              'Num restaurante tradicional, o garçom oferece empanadas de carne e de milho. Sofía diz: “As de carne são mais gostosas que as de milho, mas as de milho são mais baratas.” Linu tem pouco dinheiro.',
            choices: [
              { text: 'Pide empanadas de carne.', translation: 'Pede empanadas de carne.', next: 'final_carne' },
              { text: 'Pide empanadas de humita para ahorrar.', translation: 'Pede empanadas de milho para economizar.', next: 'final_humita' },
              {
                text: 'Pide las de humita, porque según Sofía son las más ricas.',
                translation: 'Pede as de milho, porque segundo Sofía são as mais gostosas.',
                wrong: 'Sofía disse que as de carne são “más ricas que las de humita”. As de milho são as mais baratas, não as mais gostosas.',
              },
            ],
          },
          final_carne: {
            emoji: '🎉',
            text: 'Las empanadas llegaron calentitas. Linu comió cuatro y Sofía comió tres. “¡Son las mejores empanadas que probé en mi vida!”, dijo Linu.',
            translation: 'As empanadas chegaram quentinhas. Linu comeu quatro e Sofía comeu três. “São as melhores empanadas que eu já provei na vida!”, disse Linu.',
            ending: {
              tone: 'bom',
              title: 'Banquete em La Boca',
              message: 'Você entendeu os comparativos e o passado do dia: “llegaron”, “comió”, “probé”.',
            },
          },
          final_humita: {
            emoji: '🌽',
            text: 'Las empanadas de humita fueron más ricas de lo que pensó Linu. Pagó menos y quedó contento. Sofía le dijo: “¿Viste? La próxima vez vamos a pedir de las dos.”',
            translation: 'As empanadas de milho foram mais gostosas do que Linu pensou. Pagou menos e ficou contente. Sofía disse: “Viu? Da próxima vez vamos pedir das duas.”',
            ending: {
              tone: 'neutro',
              title: 'Econômico e feliz',
              message: 'Boa escolha para o bolso. Da próxima vez, prove também as de carne!',
            },
          },
        },
      },
      {
        id: 'es-ar-h2',
        variant: 'es-AR',
        level: 'B1.3',
        cefr: 'B1',
        title: 'Tambores en Montevideo',
        emoji: '🥁',
        summary: 'No Carnaval de Montevidéu, Linu vai ao Desfile de Llamadas para ver a prima do amigo Mateo tocar candombe.',
        cultural_context:
          'O Carnaval de Montevidéu é um dos mais longos do mundo, com cerca de 40 dias. O Desfile de Llamadas, em fevereiro, percorre os bairros Sur e Palermo ao som do candombe, ritmo afro-uruguaio tocado com três tambores: chico, repique e piano.',
        start: 'start',
        glossary: [
          ['quiero que vengas', 'quero que você venha'],
          ['ojalá que no llueva', 'tomara que não chova'],
          ['cuando baje el sol', 'quando o sol baixar'],
          ['para que puedan pasar', 'para que possam passar'],
          ['no te olvides', 'não se esqueça'],
          ['no te pongas', 'não fique, não se ponha'],
          ['la campera', 'a jaqueta'],
          ['la vereda', 'a calçada'],
        ],
        nodes: {
          start: {
            emoji: '📱',
            text: 'Es febrero y Linu está en Montevideo. Su amigo Mateo lo llama: “Esta noche son las Llamadas en Barrio Sur. Quiero que vengas conmigo: mi prima Ana toca el tambor piano en una comparsa.” Linu mira el cielo, que está nublado, y piensa: “Ojalá que no llueva.”',
            translation:
              'É fevereiro e Linu está em Montevidéu. Seu amigo Mateo liga: “Hoje à noite são as Llamadas no Barrio Sur. Quero que você venha comigo: minha prima Ana toca o tambor piano numa comparsa.” Linu olha o céu, que está nublado, e pensa: “Tomara que não chova.”',
            choices: [
              { text: '“¡Obvio! ¿Dónde nos encontramos?”', translation: '“Claro! Onde a gente se encontra?”', next: 'encuentro' },
              { text: '“Dale, pero antes quiero pasear por la rambla.”', translation: '“Beleza, mas antes quero passear pela orla.”', next: 'rambla' },
            ],
          },
          rambla: {
            emoji: '🌊',
            text: 'La rambla bordea el Río de la Plata durante kilómetros, y mucha gente toma mate con el termo bajo el brazo. Linu recibe un mensaje de Mateo: “No te olvides de traer campera, que cuando baje el sol va a hacer fresco.” Pero la campera de Linu está en el hotel.',
            translation:
              'A rambla margeia o Rio da Prata por quilômetros, e muita gente toma mate com a garrafa térmica debaixo do braço. Linu recebe uma mensagem de Mateo: “Não se esqueça de trazer jaqueta, que quando o sol baixar vai ficar fresco.” Mas a jaqueta de Linu está no hotel.',
            choices: [
              { text: 'Vuelve al hotel a buscar la campera.', translation: 'Volta ao hotel para buscar a jaqueta.', next: 'encuentro' },
              { text: 'Sigue paseando sin campera.', translation: 'Continua passeando sem jaqueta.', next: 'frio' },
              {
                text: 'No busca la campera, porque Mateo le dijo que no la llevara.',
                translation: 'Não busca a jaqueta, porque Mateo disse para não levar.',
                wrong: '“No te olvides de traer campera” = não se esqueça de trazer jaqueta. O imperativo negativo aqui é “não se esqueça”, e não “não traga”.',
              },
            ],
          },
          frio: {
            emoji: '🥶',
            text: 'Cuando baja el sol, empieza a soplar un viento frío desde el río. Mateo lo ve temblando y se ríe: “¡Te lo dije!” Le presta su buzo: “Tomá, ponételo, pero no te quejes si te queda grande.”',
            translation:
              'Quando o sol baixa, começa a soprar um vento frio do rio. Mateo o vê tremendo e ri: “Eu te disse!” Empresta o blusão dele: “Toma, veste, mas não reclame se ficar grande.”',
            choices: [{ text: 'Se pone el buzo y van a las Llamadas.', translation: 'Veste o blusão e vão às Llamadas.', next: 'llamadas' }],
          },
          encuentro: {
            emoji: '🧭',
            text: 'Mateo lo espera en una esquina de Barrio Sur, entre mucha gente. Le da un consejo: “Cuando pasen los tambores, no te pongas delante de la cuerda. Mirá desde la vereda, para que puedan pasar.”',
            translation:
              'Mateo o espera numa esquina do Barrio Sur, no meio de muita gente. Dá um conselho: “Quando os tambores passarem, não fique na frente da cuerda. Olhe da calçada, para que eles possam passar.”',
            choices: [
              { text: 'Busca un lugar en la vereda.', translation: 'Procura um lugar na calçada.', next: 'llamadas' },
              {
                text: 'Se pone en el medio de la calle para ver mejor.',
                translation: 'Fica no meio da rua para ver melhor.',
                wrong: 'Mateo pediu “no te pongas delante de la cuerda”, não fique na frente do grupo de tambores, e “mirá desde la vereda”, olhe da calçada.',
              },
            ],
          },
          llamadas: {
            emoji: '🎭',
            text: 'Los tambores suenan tan fuerte que Linu siente el ritmo en el pecho. Pasan bailarinas, banderas y personajes tradicionales como la mama vieja y el gramillero. Mateo grita: “¡Mirá, ahí viene Ana! Quiero que la saludes cuando pase.”',
            translation:
              'Os tambores soam tão forte que Linu sente o ritmo no peito. Passam dançarinas, bandeiras e personagens tradicionais como a mama vieja e o gramillero. Mateo grita: “Olha, lá vem a Ana! Quero que você a cumprimente quando ela passar.”',
            choices: [
              { text: 'La saluda con las dos aletas.', translation: 'Acena para ela com as duas nadadeiras.', next: 'ana' },
              { text: 'Se pone a bailar en la vereda.', translation: 'Começa a dançar na calçada.', next: 'bailar' },
            ],
          },
          bailar: {
            emoji: '🕺',
            text: 'Una señora de la vereda le enseña el paso: “Mové los hombros así, no pares, ¡seguí!” Linu baila hasta que termina la comparsa. Al final, Ana se acerca con el tambor colgado del hombro.',
            translation:
              'Uma senhora da calçada ensina o passo: “Mexe os ombros assim, não pare, continua!” Linu dança até a comparsa terminar. No fim, Ana se aproxima com o tambor pendurado no ombro.',
            choices: [{ text: 'Saluda a Ana.', translation: 'Cumprimenta a Ana.', next: 'ana' }],
          },
          ana: {
            emoji: '🥁',
            text: 'Después del desfile, Ana está cansada pero feliz. “Ojalá que vuelvas el año que viene”, le dice a Linu. “Si querés, te enseño a tocar el chico, para que desfiles con nosotros.”',
            translation:
              'Depois do desfile, Ana está cansada mas feliz. “Tomara que você volte no ano que vem”, diz a Linu. “Se quiser, eu te ensino a tocar o chico, para que você desfile com a gente.”',
            choices: [
              { text: '“¡Sí! ¿Cuándo empezamos?”', translation: '“Sim! Quando começamos?”', next: 'final_clase' },
              { text: '“Gracias, pero prefiero mirar desde la vereda.”', translation: '“Obrigado, mas prefiro olhar da calçada.”', next: 'final_mirar' },
            ],
          },
          final_clase: {
            emoji: '🎉',
            text: 'Ana le da la primera clase allí mismo, en la esquina. Linu toca con las aletas y, aunque se equivoca, todos se ríen con él. Mateo le dice: “Cuando vuelvas, quiero que toques en la cuerda de Ana.”',
            translation:
              'Ana dá a primeira aula ali mesmo, na esquina. Linu toca com as nadadeiras e, embora erre, todos riem com ele. Mateo diz: “Quando você voltar, quero que toque na cuerda da Ana.”',
            ending: {
              tone: 'bom',
              title: 'Pinguim do candombe',
              message: 'Você entendeu os desejos, conselhos e pedidos no subjuntivo: “quiero que vengas”, “ojalá que vuelvas”, “para que desfiles”.',
            },
          },
          final_mirar: {
            emoji: '🙂',
            text: 'Linu se queda en la vereda hasta que pasa la última comparsa. Ana se despide: “Bueno, ojalá que cambies de idea.” Linu vuelve al hotel con el ritmo del candombe en la cabeza.',
            translation:
              'Linu fica na calçada até passar a última comparsa. Ana se despede: “Bom, tomara que você mude de ideia.” Linu volta ao hotel com o ritmo do candombe na cabeça.',
            ending: {
              tone: 'neutro',
              title: 'Espectador fiel',
              message: 'Uma noite linda na calçada. Quem sabe no próximo Carnaval você aceita o tambor?',
            },
          },
        },
      },
      {
        id: 'es-ar-h3',
        variant: 'es-AR',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Primos en Punta Tombo',
        emoji: '🐧',
        summary: 'Na Patagônia argentina, Linu visita a colônia de pinguins-de-magalhães de Punta Tombo e escreve um e-mail formal para ser voluntário.',
        cultural_context:
          'Punta Tombo, na província do Chubut, abriga a maior colônia continental de pinguins-de-magalhães, que chegam por volta de setembro para fazer ninhos em tocas cavadas na terra. Perto dali, Gaiman foi fundada por colonos galeses no século XIX, e o chá com torta galesa virou tradição.',
        start: 'start',
        glossary: [
          ['se le informa', 'é-lhe informado, informam-lhe'],
          ['no se permite', 'não é permitido'],
          ['fueron establecidas', 'foram estabelecidas'],
          ['se ruega', 'pede-se'],
          ['la cueva', 'a toca, a cova'],
          ['el guardaparque', 'o guarda-parque'],
          ['Estimados señores:', 'Prezados senhores,'],
          ['el pingüino barbijo', 'o pinguim-de-barbicha'],
        ],
        nodes: {
          start: {
            emoji: '🗺️',
            text: 'Linu, un pingüino barbijo de la Antártida, llegó a Trelew con un sueño: conocer a sus primos, los pingüinos de Magallanes. En la oficina de turismo se le informa que a la reserva de Punta Tombo se puede ir en excursión o en auto alquilado. “¿Usted prefiere ir con guía o por su cuenta?”, le pregunta la empleada.',
            translation:
              'Linu, um pinguim-de-barbicha da Antártida, chegou a Trelew com um sonho: conhecer seus primos, os pinguins-de-magalhães. No escritório de turismo, informam-lhe que à reserva de Punta Tombo se pode ir de excursão ou de carro alugado. “O senhor prefere ir com guia ou por conta própria?”, pergunta a funcionária.',
            choices: [
              { text: 'Contrata la excursión con guía.', translation: 'Contrata a excursão com guia.', next: 'guia' },
              { text: 'Alquila un auto y va por su cuenta.', translation: 'Aluga um carro e vai por conta própria.', next: 'solo' },
            ],
          },
          guia: {
            emoji: '🚐',
            text: 'En la combi, el guía trata a todos los pasajeros de usted. “Les pido que presten atención: en la reserva no se permite salir de los senderos ni tocar a los animales. Estas normas fueron establecidas para proteger los nidos, que están en cuevas cavadas en la tierra.” Después de un largo viaje por la estepa, llegan a la costa.',
            translation:
              'Na van, o guia trata todos os passageiros por “usted”. “Peço que prestem atenção: na reserva não é permitido sair das trilhas nem tocar nos animais. Estas normas foram estabelecidas para proteger os ninhos, que ficam em tocas cavadas na terra.” Depois de uma longa viagem pela estepe, chegam à costa.',
            choices: [
              { text: 'Baja de la combi y sigue al grupo por el sendero.', translation: 'Desce da van e segue o grupo pela trilha.', next: 'colonia' },
              {
                text: 'Piensa que, si tiene cuidado, podrá acariciar a un pingüino.',
                translation: 'Pensa que, se tomar cuidado, poderá fazer carinho num pinguim.',
                wrong: 'O guia foi claro: “no se permite… tocar a los animales”, não é permitido tocar nos animais, nem com cuidado.',
              },
            ],
          },
          solo: {
            emoji: '🚙',
            text: 'La ruta es de ripio y el viento sopla con fuerza. En el camino, Linu ve guanacos y ñandúes que cruzan la estepa. Cuando llega, un guardaparque lo recibe: “Buenas tardes. Le informo que se ruega no salir del sendero y que los pingüinos siempre tienen prioridad.”',
            translation:
              'A estrada é de cascalho e o vento sopra com força. No caminho, Linu vê guanacos e emas que atravessam a estepe. Quando chega, um guarda-parque o recebe: “Boa tarde. Informo que se pede não sair da trilha e que os pinguins sempre têm prioridade.”',
            choices: [{ text: 'Entra en la reserva.', translation: 'Entra na reserva.', next: 'colonia' }],
          },
          colonia: {
            emoji: '🐧',
            text: 'La colonia es enorme: se ven pingüinos por todas partes, entre arbustos y cuevas. De pronto, uno de ellos cruza el sendero justo delante de Linu. Según las normas de la reserva, cuando un pingüino cruza, se espera sin moverse.',
            translation:
              'A colônia é enorme: veem-se pinguins por toda parte, entre arbustos e tocas. De repente, um deles atravessa a trilha bem na frente de Linu. Segundo as normas da reserva, quando um pinguim atravessa, espera-se sem se mexer.',
            choices: [
              { text: 'Espera quieto a que pase.', translation: 'Espera parado que ele passe.', next: 'primo' },
              { text: 'Sale del sendero para sacar una foto de cerca.', translation: 'Sai da trilha para tirar uma foto de perto.', next: 'reto' },
            ],
          },
          reto: {
            emoji: '🚫',
            text: 'Un guardaparque se acerca, serio: “Señor, le recuerdo que está prohibido salir del sendero. Si usted pisa una cueva, puede destruir un nido.” Linu le pide disculpas y vuelve enseguida al sendero.',
            translation:
              'Um guarda-parque se aproxima, sério: “Senhor, lembro-lhe que é proibido sair da trilha. Se o senhor pisar numa toca, pode destruir um ninho.” Linu pede desculpas e volta logo para a trilha.',
            choices: [{ text: 'Sigue por el sendero.', translation: 'Segue pela trilha.', next: 'primo' }],
          },
          primo: {
            emoji: '🤝',
            text: 'Un pingüino de Magallanes se detiene y mira a Linu con curiosidad. Tienen casi el mismo tamaño, pero su primo luce dos bandas negras en el pecho, y Linu, su barbijo. Al volver, en la entrada se lee un cartel: “Se buscan voluntarios para el conteo de nidos. Las solicitudes deben enviarse por correo electrónico a la administración.”',
            translation:
              'Um pinguim-de-magalhães para e olha Linu com curiosidade. Os dois têm quase o mesmo tamanho, mas o primo exibe duas faixas pretas no peito, e Linu, a sua barbicha. Na volta, na entrada, lê-se uma placa: “Procuram-se voluntários para a contagem de ninhos. Os pedidos devem ser enviados por e-mail à administração.”',
            choices: [
              { text: 'Decide escribir el correo esa misma noche.', translation: 'Decide escrever o e-mail naquela mesma noite.', next: 'correo' },
              { text: 'Prefiere ir a tomar el té en Gaiman.', translation: 'Prefere ir tomar chá em Gaiman.', next: 'final_te' },
            ],
          },
          correo: {
            emoji: '💻',
            text: 'En el hotel, Linu abre la computadora. Sabe que a la administración de una reserva se le escribe en registro formal, con “usted” y sin palabras del día a día. Piensa un rato en cómo empezar el mensaje.',
            translation:
              'No hotel, Linu abre o computador. Sabe que para a administração de uma reserva se escreve em registro formal, com “usted” e sem palavras do dia a dia. Pensa um pouco em como começar a mensagem.',
            choices: [
              {
                text: '“Estimados señores: Me dirijo a ustedes para solicitar un puesto de voluntario en el conteo de nidos.”',
                translation: '“Prezados senhores, dirijo-me a vocês para solicitar uma vaga de voluntário na contagem de ninhos.”',
                next: 'final_voluntario',
              },
              {
                text: '“¡Che, qué tal! Quiero laburar con los pingüinos, ¿dale?”',
                translation: '“Ei, beleza? Quero trampar com os pinguins, pode ser?”',
                wrong: 'Numa solicitação à administração, o registro é formal: “Estimados señores”, “usted”, “me dirijo a ustedes”. “Che”, “laburar” e “dale” são ótimos com amigos, não num e-mail oficial.',
              },
            ],
          },
          final_voluntario: {
            emoji: '🎉',
            text: 'Dos días después, se recibe una respuesta: “Estimado Linu: Nos complace informarle que su solicitud ha sido aceptada.” La semana siguiente, Linu cuenta nidos junto a los guardaparques. Su primo de las bandas negras lo saluda cada mañana desde su cueva.',
            translation:
              'Dois dias depois, chega uma resposta: “Prezado Linu, temos o prazer de informar que seu pedido foi aceito.” Na semana seguinte, Linu conta ninhos junto com os guarda-parques. O primo das faixas pretas o cumprimenta toda manhã da sua toca.',
            ending: {
              tone: 'bom',
              title: 'Voluntário da colônia',
              message: 'Você dominou a voz passiva, o “se” impessoal e o registro formal, e ainda ganhou um trabalho entre primos.',
            },
          },
          final_te: {
            emoji: '🫖',
            text: 'En Gaiman, en una casa de té fundada por descendientes de galeses, se sirve té con torta negra y pan casero. Linu disfruta cada bocado. Sin embargo, mientras mira las fotos de su primo, se pregunta si no debería haber escrito aquel correo.',
            translation:
              'Em Gaiman, numa casa de chá fundada por descendentes de galeses, serve-se chá com torta negra e pão caseiro. Linu aproveita cada mordida. No entanto, enquanto olha as fotos do primo, pergunta-se se não deveria ter escrito aquele e-mail.',
            ending: {
              tone: 'neutro',
              title: 'Chá galês na Patagônia',
              message: 'Uma tarde deliciosa, mas a vaga de voluntário ficou para outro. Ainda dá tempo de escrever o e-mail formal!',
            },
          },
        },
      },
    ],
  },
];
