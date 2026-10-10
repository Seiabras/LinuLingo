import type { LanguageVariant } from '../types';
import { toIpaPt } from '@/services/ipa-pt';
import { VARIANTS_PT_AFRICA } from './variantes-africa';
import { VARIANTS_PT_ASIA } from './variantes-asia';
import { VARIANT_PT_BARRANCOS } from './variante-barrancos';

/**
 * Variantes do português: o padrão europeu do curso (Lisboa), o português do Brasil e os dialetos
 * da África, da Ásia e de Barrancos (em arquivos à parte).
 * Vocabulário no formato [Portugal, Brasil, explicação, nota]. As histórias da variante pt-BR
 * têm o texto em português do Brasil e, na tradução, a mesma cena dita à portuguesa.
 */
export const VARIANTS_PT: LanguageVariant[] = [
  {
    code: 'pt-PT',
    country: 'PRT',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: (t) => toIpaPt(t, 'PT'),
    name: 'Português de Portugal',
    flag: '🇵🇹',
    summary:
      'O padrão do curso: o português europeu de Lisboa, com as vogais átonas engolidas, o pronome depois do verbo (“chamo-me”), “estar a + infinitivo” e o “tu” entre amigos.',
    card: {
      id: 'pt-pt-c1',
      title: 'Por que o português de Portugal?',
      emoji: '🇵🇹',
      history:
        'O português nasceu do galego-português, falado no noroeste da Península Ibérica na Idade Média. Portugal tornou-se reino independente no século XII, e no fim do século XIII o rei D. Dinis fez do português a língua dos documentos oficiais e fundou a universidade que mais tarde se fixou em Coimbra. Das caravelas do século XV em diante, a língua chegou à África, à Ásia e à América. Hoje a norma europeia é a referência em Portugal e serve de base ao ensino na maior parte dos países africanos de língua portuguesa e em Timor-Leste.',
      culture_tip:
        'Em Portugal, o tratamento muda tudo. Entre amigos, colegas da mesma idade e família usa-se “tu”, com o verbo na 2ª pessoa (“queres um café?”). Com desconhecidos, clientes e pessoas mais velhas, fala-se na 3ª pessoa, sem pronome ou com “o senhor / a senhora”: “A senhora deseja mais alguma coisa?”. “Você” existe, mas dito diretamente a alguém pode soar distante ou até brusco; na dúvida, use o nome ou a 3ª pessoa. E as duas normas, a europeia e a brasileira, são igualmente corretas: o curso ensina a de Portugal sem tirar nenhum mérito à sua.',
      grammar_why:
        'Três marcas do padrão europeu: (1) ênclise como regra: o pronome vem depois do verbo, com hífen (“Chamo-me Ana”, “Diz-me”), e só passa para antes depois de negação, pronome relativo e certos advérbios (“Não me digas”, “Já te disse”); (2) “estar a + infinitivo” no lugar do gerúndio: “Estou a estudar”, e não “estou estudando” (o gerúndio sobrevive no Alentejo, no Algarve e em frases como “ia andando”); (3) o tratamento em três degraus: “tu”, a 3ª pessoa com “o senhor / a senhora” e, raramente, “você”. A ortografia é a do Acordo de 1990, com as grafias próprias de Portugal: facto, receção, económico, António.',
      grammar_examples: [
        ['Chamo-me Ana e sou de Campinas.', 'Meu nome é Ana e sou de Campinas.'],
        ['Não me digas que perdeste o comboio!', 'Não me diga que você perdeu o trem!'],
        ['Estou a preparar o jantar.', 'Estou preparando o jantar.'],
        ['O senhor deseja mais alguma coisa?', 'O senhor deseja mais alguma coisa?'],
        ['Queres vir connosco ao cinema?', 'Você quer vir com a gente ao cinema?'],
        ['Dir-lhe-ei amanhã o que decidimos.', 'Amanhã eu digo a ele o que a gente decidiu.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Vogais átonas reduzidas: o “e” sem acento quase desaparece e o “o” sem acento vira [u]. “Telefone” soa “tlfón”, “pequeno” soa “p’quênu”, “menina” soa “m’nina”. É isso que faz o brasileiro achar que os portugueses “falam depressa”: as sílabas fracas são engolidas.',
      'O “s” e o “z” no fim da sílaba são chiados, como no Rio de Janeiro: “festa” soa “fêshta”, “mesmo” soa “mêjmu”, “os amigos” soa “uz amigush”.',
      'O “r” do começo da palavra e o “rr” são pronunciados no fundo da garganta na maior parte do país, parecido com o “r” de “carro” no Rio; entre vogais, é o “r” leve do Brasil (“caro”). No fim da palavra, o “r” soa sempre: “comer”, “mar”, nunca “comê”.',
      'O “l” no fim da sílaba é velar, com a língua recuada: “Portugal” e “Brasil” nunca viram “Portugau” e “Brasiu”. E “t” e “d” nunca viram “tch” e “dj”: “tia” e “dia” soam secos, como no Nordeste.',
      'Em Lisboa, o ditongo “ei” soa quase “âi” (“primeiro” soa “primâiru”) e o “e” tônico antes de “lh”, “nh”, “ch” e “j” soa [ɐ]: “espelho” soa “espâlhu”, “venho” soa “vânhu”. O ditongo “ou” soa “ô” (“ouro” soa “ôru”).',
      'No Norte, o “v” e o “b” confundem-se (“vinho” soa “binho”), o “s” é mais apical e, em Trás-os-Montes e no Minho, o “ch” ainda soa “tch” (“chave” soa “tchave”). Nos Açores, sobretudo em São Miguel, a melodia e as vogais mudam tanto que surpreendem até os próprios portugueses.',
    ],
    vocab: [
      ['pequeno-almoço', 'café da manhã', 'a primeira refeição do dia', '“tomar o pequeno-almoço”'],
      ['autocarro', 'ônibus', 'ônibus', 'o ponto de ônibus é a “paragem”'],
      ['comboio', 'trem', 'trem', 'no Brasil, “comboio” é uma fila de veículos'],
      ['telemóvel', 'celular', 'telefone celular'],
      ['casa de banho', 'banheiro', 'banheiro', 'em Portugal, “banheiro” é o salva-vidas de praia'],
      ['frigorífico', 'geladeira', 'geladeira', 'no Brasil, “frigorífico” é a indústria de carnes'],
      ['sumo', 'suco', 'suco (de fruta)'],
      ['gelado', 'sorvete', 'sorvete'],
      ['chávena', 'xícara', 'xícara'],
      ['ecrã', 'tela', 'tela (de computador, de telefone)', 'no cinema também se diz “ecrã”'],
      ['miúdo, miúda', 'garoto, criança', 'criança, menino ou menina', '“os miúdos” = as crianças'],
      ['fixe', 'legal', 'legal, bacana', 'informal'],
      ['bué', 'muito', 'muito, um monte', 'gíria que se espalhou a partir de Lisboa; a origem mais citada é angolana'],
    ],
  },
  {
    code: 'pt-BR',
    country: 'BRA',
    kind: 'dialeto',
    speechLocale: 'pt-BR',
    ipa: (t) => toIpaPt(t, 'BR'),
    name: 'Português do Brasil',
    flag: '🇧🇷',
    summary:
      'A variante com mais falantes no mundo: vogais abertas e bem pronunciadas, o pronome antes do verbo (“me chamo”), o gerúndio (“estou estudando”) e o “você” como tratamento do dia a dia.',
    card: {
      id: 'pt-br-c1',
      title: 'O seu português, visto de Lisboa',
      emoji: '🇧🇷',
      history:
        'Cerca de oito em cada dez falantes nativos de português vivem no Brasil. A língua chegou com os colonizadores no século XVI e conviveu com centenas de línguas indígenas, como o tupi, que deu palavras como “abacaxi”, “capim” e “jabuticaba”, e com as línguas africanas trazidas pelas pessoas escravizadas, como o quimbundo, de onde vêm “caçula”, “moleque” e “cafuné”. Em 1808 a corte portuguesa mudou-se para o Rio de Janeiro, e em 1822 o Brasil tornou-se independente. A imigração europeia, árabe e japonesa dos séculos XIX e XX acrescentou novos sotaques e palavras.',
      culture_tip:
        'Em Portugal, o português do Brasil é conhecido de todos, graças às telenovelas, à música e à grande comunidade brasileira que vive no país; você será sempre compreendido. Mesmo assim, algumas palavras mudam de sentido (veja os falsos amigos) e o “você” dito diretamente pode soar distante: prefira o nome da pessoa ou “o senhor / a senhora”. Ninguém espera que você perca o sotaque, mas acertar o tratamento e as palavras do dia a dia abre muitas portas.',
      grammar_why:
        'Três marcas do português do Brasil, vistas a partir de Portugal: (1) próclise como regra na fala: “Me chama amanhã”, “Ele se levantou cedo”; na escrita formal brasileira, a norma culta ainda evita começar a frase com pronome oblíquo, e aí as duas normas se encontram; (2) o gerúndio: “Estou estudando”, onde Portugal diz “Estou a estudar”; (3) “você” como tratamento neutro do dia a dia e “a gente” no lugar de “nós”. Nada disso é erro: são escolhas de outra norma, tão culta quanto a europeia. A ortografia é a mesma do Acordo de 1990, com dupla grafia onde a pronúncia muda (econômico × económico, fato × facto).',
      grammar_examples: [
        ['Chamo-me Pedro.', 'Me chamo Pedro. / Meu nome é Pedro.'],
        ['Estou a ler um livro de Eça de Queirós.', 'Estou lendo um livro de Eça de Queirós.'],
        ['Queres boleia?', 'Você quer uma carona?'],
        ['Vamos ao cinema? Nós pagamos.', 'Vamos ao cinema? A gente paga.'],
        ['Liga-me quando chegares.', 'Me liga quando você chegar.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Vogais átonas abertas e bem pronunciadas: o brasileiro diz todas as sílabas de “telefone” e “pequeno”. O “e” e o “o” no fim da palavra soam “i” e “u”: “leite” soa “leiti”, “muito” soa “muitu”.',
      '“T” e “d” antes do som de “i” viram “tch” e “dj” na maior parte do país: “tia” soa “tchia”, “cidade” soa “cidadji”. No Nordeste, em partes do Sul e no interior de alguns estados, ficam secos, como em Portugal.',
      'O “l” no fim da sílaba vira “u”: “Brasil” soa “Brasiu”, e “mal” e “mau” soam igual. Por isso, no Brasil, a diferença entre os dois é só de escrita.',
      'O “s” no fim da sílaba é sibilante em São Paulo e em boa parte do país (“festa” com “s”), mas é chiado no Rio de Janeiro, em Belém, em Florianópolis e em partes do Nordeste, como em Portugal.',
      'O “r” no fim da sílaba muda de região para região: aspirado, como um “h”, no Rio, em Belo Horizonte e no Nordeste; retroflexo, o “r caipira”, no interior de São Paulo, em Minas, no Paraná e em Goiás; vibrante no Sul. No infinitivo, cai com frequência: “comer” soa “comê”.',
      'O brasileiro acrescenta vogais onde há consoantes juntas (“pneu” soa “peneu”, “advogado” soa “adjivogado”) e ditongos antes de “s” no fim da palavra (“mas” soa “mais”, “arroz” soa “arroiz”, “três” soa “treis”).',
    ],
    vocab: [
      ['elétrico', 'bonde', 'bonde', 'em Lisboa ainda circulam, como o famoso 28'],
      ['metro', 'metrô', 'metrô', 'em Portugal, sem acento e com a tônica no “me”'],
      ['passadeira', 'faixa de pedestres', 'faixa de pedestres'],
      ['peão', 'pedestre', 'pedestre', 'no Brasil, “peão” é o trabalhador do campo'],
      ['camião', 'caminhão', 'caminhão'],
      ['carta de condução', 'carteira de motorista', 'carteira de habilitação', '“tirar a carta”'],
      ['bomba de gasolina', 'posto de gasolina', 'posto de combustível'],
      ['portagem', 'pedágio', 'pedágio'],
      ['rotunda', 'rotatória', 'rotatória'],
      ['travão', 'freio', 'freio', '“travar” = frear'],
      ['rés-do-chão', 'térreo', 'andar térreo'],
      ['autoclismo', 'descarga', 'descarga (do vaso sanitário)'],
      ['sanita', 'vaso sanitário', 'vaso sanitário, privada'],
      ['duche', 'chuveiro, ducha', 'banho de chuveiro', '“tomar um duche”'],
      ['lava-loiça', 'pia', 'pia da cozinha'],
      ['esquentador', 'aquecedor a gás', 'aquecedor de água a gás'],
      ['fiambre', 'presunto', 'presunto cozido', 'em Portugal, “presunto” é o curado, tipo Parma'],
      ['natas', 'creme de leite', 'creme de leite'],
      ['ananás', 'abacaxi', 'abacaxi', 'na Madeira e nos Açores cultiva-se o ananás em estufa'],
      ['sandes', 'sanduíche', 'sanduíche', 'também se diz “sanduíche” em Portugal'],
      ['tosta mista', 'misto-quente', 'misto-quente'],
      ['galão', 'café com leite', 'café com leite servido em copo alto'],
      ['imperial', 'chope', 'chope', 'em Lisboa; no Porto e no Norte, “fino”'],
      ['talho', 'açougue', 'açougue'],
      ['rebuçado', 'bala', 'bala, docinho'],
      ['pastilha elástica', 'chiclete', 'chiclete', 'também só “pastilha”'],
      ['fato', 'terno', 'terno', 'no Brasil, “fato” é um acontecimento (em Portugal, “facto”)'],
      ['fato de banho', 'maiô', 'maiô'],
      ['camisola', 'suéter, blusa de frio', 'suéter, blusa de lã', 'no Brasil, “camisola” é roupa de dormir'],
      ['cuecas', 'calcinha', 'calcinha (e também cueca)', 'em Portugal, “cuecas” serve para homem e mulher'],
      ['sapatilhas', 'tênis', 'tênis (calçado)'],
      ['peúgas', 'meias', 'meias curtas', 'também se diz “meias”'],
      ['guarda-redes', 'goleiro', 'goleiro'],
      ['golo', 'gol', 'gol'],
      ['equipa', 'time, equipe', 'time, equipe'],
      ['rato', 'mouse', 'mouse (do computador)'],
      ['ficheiro', 'arquivo', 'arquivo (de computador)'],
      ['utilizador', 'usuário', 'usuário'],
      ['apelido', 'sobrenome', 'sobrenome', 'no Brasil, “apelido” é a alcunha'],
      ['montra', 'vitrine', 'vitrine'],
      ['agrafador', 'grampeador', 'grampeador'],
      ['propinas', 'mensalidade', 'mensalidade (da universidade)', 'no Brasil, “propina” é suborno'],
    ],
    stories: [
      {
        id: 'pt-br-h1',
        variant: 'pt-BR',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Garoa na Paulista',
        emoji: '🌦️',
        summary: 'Num domingo em São Paulo, Linu encontra o amigo Bruno na Avenida Paulista fechada para os carros, prova um pastel de feira e enfrenta a garoa.',
        cultural_context:
          'Aos domingos, a Avenida Paulista, em São Paulo, fecha para os carros e vira área de lazer para pedestres, ciclistas e artistas de rua. A cidade é chamada de “terra da garoa” por causa da chuva fina que ficou famosa no começo do século XX.',
        start: 'start',
        glossary: [
          ['E aí, beleza?', 'Então, tudo bem?'],
          ['tô', 'estou (na fala do Brasil)'],
          ['a gente', 'nós'],
          ['bora', 'vamos (lá)'],
          ['garoa', 'chuva miudinha, morrinha'],
          ['meu', 'pá (vocativo típico de São Paulo)'],
          ['caldo de cana', 'sumo de cana-de-açúcar'],
          ['barraca', 'banca, tenda'],
        ],
        nodes: {
          start: {
            emoji: '🌦️',
            text: 'Linu chegou a São Paulo no domingo de manhã. Cai uma garoa fina. O amigo Bruno manda uma mensagem: “E aí, Linu, beleza? Tô te esperando na Paulista, na frente do MASP. Hoje a avenida é só pra pedestre!”',
            translation:
              'Linu chegou a São Paulo no domingo de manhã. Cai uma chuva miudinha. O amigo Bruno manda-lhe uma mensagem: “Então, Linu, tudo bem? Estou à tua espera na Paulista, em frente ao MASP. Hoje a avenida é só para peões!”',
            choices: [
              { text: '“Tô indo, meu! Vou de metrô.”', translation: '“Vou já, pá! Vou de metro.”', next: 'metro' },
              {
                text: 'Linu vai ao Mercadão procurar o Bruno.',
                translation: 'Linu vai ao Mercado Municipal procurar o Bruno.',
                wrong: 'O Bruno escreveu que está na Paulista, “na frente do MASP”, o museu da avenida. O Mercadão fica para outro dia!',
              },
            ],
          },
          metro: {
            emoji: '🚇',
            text: 'O metrô está cheio, mas é rápido. Linu desce na estação Trianon-Masp. A garoa parou, e a avenida está lotada: tem gente de bicicleta, músicos tocando samba e barracas de comida por todo lado.',
            translation:
              'O metro está cheio, mas é rápido. Linu sai na estação Trianon-Masp. A chuva parou, e a avenida está cheia de gente: há pessoas de bicicleta, músicos a tocar samba e bancas de comida por todo o lado.',
            choices: [{ text: 'Procura o Bruno na frente do museu.', translation: 'Procura o Bruno em frente ao museu.', next: 'bruno' }],
          },
          bruno: {
            emoji: '👋',
            text: 'Bruno acena embaixo do prédio do museu, que parece flutuar sobre um vão enorme. “Chegou, meu! Tá com fome? Tem uma barraca de pastel ali, e o caldo de cana é gelado.”',
            translation:
              'O Bruno acena debaixo do edifício do museu, que parece flutuar sobre um vão enorme. “Chegaste, pá! Tens fome? Há ali uma banca de pastéis, e o sumo de cana está fresquinho.”',
            choices: [
              { text: '“Bora comer pastel!”', translation: '“Vamos lá comer um pastel!”', next: 'pastel' },
              { text: '“Primeiro quero dar uma volta.”', translation: '“Primeiro quero dar uma volta.”', next: 'volta' },
            ],
          },
          pastel: {
            emoji: '🥟',
            text: 'Linu pede um pastel de queijo. É enorme, frito na hora e crocante. “Em Lisboa, pastel é doce”, conta Linu. Bruno ri: “Aqui é salgado, de feira. Cada país com o seu!”',
            translation:
              'Linu pede um pastel de queijo. É enorme, acabado de fritar e estaladiço. “Em Lisboa, o pastel é doce”, conta Linu. O Bruno ri-se: “Aqui é salgado, de feira. Cada país com o seu!”',
            choices: [{ text: 'Os dois andam pela avenida, comendo.', translation: 'Os dois passeiam pela avenida, a comer.', next: 'chuva' }],
          },
          volta: {
            emoji: '🎸',
            text: 'Os dois andam pela avenida. Uma menina toca violão e canta, um grupo dança na frente de um banco e crianças andam de patins no meio da rua. Linu acha tudo muito legal.',
            translation:
              'Os dois passeiam pela avenida. Uma menina toca guitarra e canta, um grupo dança em frente a um banco e há miúdos de patins no meio da rua. Linu acha tudo muito fixe.',
            choices: [{ text: 'Continuam o passeio.', translation: 'Continuam o passeio.', next: 'chuva' }],
          },
          chuva: {
            emoji: '☔',
            text: 'De repente, a garoa volta, agora mais forte. Bruno abre o guarda-chuva e dá risada: “Isso é São Paulo, meu: faz sol, esfria e chove, tudo no mesmo dia!”',
            translation:
              'De repente, a chuva volta, agora mais forte. O Bruno abre o guarda-chuva e ri-se: “Isto é São Paulo, pá: faz sol, arrefece e chove, tudo no mesmo dia!”',
            choices: [
              { text: 'Entram no MASP para ver a exposição.', translation: 'Entram no MASP para ver a exposição.', next: 'final_masp' },
              { text: 'Ficam na avenida, embaixo da chuva.', translation: 'Ficam na avenida, à chuva.', next: 'final_molhado' },
              {
                text: 'Linu entende que em São Paulo o tempo nunca muda.',
                translation: 'Linu percebe que em São Paulo o tempo nunca muda.',
                wrong: 'É o contrário: o Bruno disse que no mesmo dia faz sol, esfria e chove. O tempo em São Paulo muda o tempo todo!',
              },
            ],
          },
          final_masp: {
            emoji: '🖼️',
            text: 'Dentro do museu, os quadros ficam em cavaletes de vidro, como se flutuassem no ar. Linu passa a tarde ali. Quando saem, o céu está limpo. “Amanhã a gente vai no Mercadão”, promete Bruno.',
            translation:
              'Dentro do museu, os quadros estão em cavaletes de vidro, como se flutuassem no ar. Linu passa lá a tarde. Quando saem, o céu está limpo. “Amanhã vamos ao Mercado Municipal”, promete o Bruno.',
            ending: {
              tone: 'bom',
              title: 'Arte e garoa',
              message: 'Você acompanhou o domingo paulistano no português do Brasil: “tô”, “a gente”, “bora”. Na tradução, viu a mesma cena dita à portuguesa.',
            },
          },
          final_molhado: {
            emoji: '💦',
            text: 'Linu fica embaixo da chuva, feliz: para um pinguim, água fria é festa. Bruno, encharcado, balança a cabeça: “Você é doido, meu! Bora pra casa tomar um café.”',
            translation:
              'Linu fica à chuva, feliz: para um pinguim, água fria é uma festa. O Bruno, encharcado, abana a cabeça: “Tu és maluco, pá! Vamos para casa beber um café.”',
            ending: {
              tone: 'neutro',
              title: 'Pinguim na garoa',
              message: 'O Linu adorou, o Bruno nem tanto. Da próxima vez, o museu também é uma boa ideia!',
            },
          },
        },
      },
      {
        id: 'pt-br-h2',
        variant: 'pt-BR',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Frevo no Recife',
        emoji: '☂️',
        summary: 'No Carnaval do Recife, Linu sai no Galo da Madrugada com a amiga Juliana, aprende a dançar frevo e sobe as ladeiras de Olinda.',
        cultural_context:
          'O Galo da Madrugada, que desfila no sábado de Carnaval pelo centro do Recife, é um dos maiores blocos de rua do mundo. O frevo, dançado com uma pequena sombrinha colorida, é Patrimônio Cultural Imaterial da Humanidade pela UNESCO desde 2012, e o bolo de rolo é patrimônio cultural de Pernambuco.',
        start: 'start',
        glossary: [
          ['oxe, oxente', 'então!, ora essa! (espanto)'],
          ['visse?', 'ouviste?, está bem?'],
          ['arretado', 'espetacular, bestial'],
          ['massa', 'fixe'],
          ['sombrinha', 'guarda-chuva pequeno'],
          ['que nem', 'como, tal como'],
          ['bolo de rolo', 'bolo muito fino, enrolado com goiabada'],
          ['ladeira', 'rua muito inclinada, calçada'],
        ],
        nodes: {
          start: {
            emoji: '⏰',
            text: 'É sábado de Carnaval no Recife. Juliana avisou Linu na véspera: “Oxe, Linu, o Galo sai de manhã cedinho, visse? Se você atrasar, a gente não chega nem perto!”',
            translation:
              'É sábado de Carnaval no Recife. A Juliana avisou o Linu na véspera: “Olha, Linu, o Galo sai logo de manhãzinha, ouviste? Se te atrasares, nem conseguimos chegar perto!”',
            choices: [
              { text: '“Já tô de pé! A gente se encontra na ponte.”', translation: '“Já estou a pé! Encontramo-nos na ponte.”', next: 'galo' },
              {
                text: 'Linu volta a dormir, porque o bloco só sai à noite.',
                translation: 'Linu volta a dormir, porque o cortejo só sai à noite.',
                wrong: 'A Juliana disse que o Galo sai “de manhã cedinho”. Quem dorme até tarde fica sem ver o bloco!',
              },
            ],
          },
          galo: {
            emoji: '🐓',
            text: 'As ruas do centro estão tomadas de gente fantasiada, e um galo gigante enfeita uma ponte sobre o rio Capibaribe. Juliana dá a Linu uma sombrinha colorida: “Toma, é pra dançar frevo. Faz que nem eu: pula, agacha e gira!”',
            translation:
              'As ruas do centro estão cheias de gente mascarada, e um galo gigante enfeita uma ponte sobre o rio Capibaribe. A Juliana dá ao Linu um guarda-chuva pequenino e colorido: “Toma, é para dançar frevo. Faz como eu: salta, agacha-te e roda!”',
            choices: [
              { text: 'Linu tenta dançar frevo.', translation: 'Linu experimenta dançar frevo.', next: 'frevo' },
              { text: 'Linu prefere olhar de longe.', translation: 'Linu prefere ver de longe.', next: 'longe' },
            ],
          },
          frevo: {
            emoji: '💃',
            text: 'Linu pula, agacha e gira a sombrinha. As pessoas em volta aplaudem, e um senhor grita: “Arretado, o pinguim! Dança melhor que muito pernambucano!” Linu fica vermelho, mas não para de dançar.',
            translation:
              'Linu salta, agacha-se e faz rodar o guarda-chuva. As pessoas à volta aplaudem, e um senhor grita: “Espetacular, o pinguim! Dança melhor do que muitos pernambucanos!” Linu fica corado, mas não para de dançar.',
            choices: [
              { text: 'Continua dançando atrás do bloco.', translation: 'Continua a dançar atrás do cortejo.', next: 'fome' },
              {
                text: 'Linu para, porque acha que o senhor reclamou dele.',
                translation: 'Linu para, porque acha que o senhor se queixou dele.',
                wrong: 'Em Pernambuco, “arretado” é elogio: quer dizer incrível, muito bom. O senhor adorou o jeito do Linu dançar!',
              },
            ],
          },
          longe: {
            emoji: '👀',
            text: 'Linu sobe numa escadaria para ver o bloco passar. Lá de cima, o mar de gente parece não ter fim. Juliana chega com dois copos de caldo de cana: “Daqui é massa, né? Mas lá embaixo é mais animado!”',
            translation:
              'Linu sobe uma escadaria para ver o cortejo passar. Lá de cima, o mar de gente parece não ter fim. A Juliana chega com dois copos de sumo de cana: “Daqui é fixe, não é? Mas lá em baixo é mais animado!”',
            choices: [{ text: 'Descem e seguem o bloco.', translation: 'Descem e seguem o cortejo.', next: 'fome' }],
          },
          fome: {
            emoji: '🌇',
            text: 'No fim da tarde, os dois estão cansados e com fome. Juliana tem uma ideia: “Amanhã tem Carnaval em Olinda, com os bonecos gigantes. Mas antes a gente podia comer um bolo de rolo, que tal?”',
            translation:
              'Ao fim da tarde, os dois estão cansados e cheios de fome. A Juliana tem uma ideia: “Amanhã há Carnaval em Olinda, com os bonecos gigantes. Mas antes podíamos comer um bolo de rolo, que tal?”',
            choices: [
              { text: '“Bora pro bolo de rolo!”', translation: '“Vamos lá ao bolo de rolo!”', next: 'bolo' },
              { text: '“Vamos dormir cedo pra aproveitar Olinda.”', translation: '“Vamos deitar-nos cedo para aproveitar Olinda.”', next: 'olinda' },
            ],
          },
          bolo: {
            emoji: '🍰',
            text: 'O bolo de rolo tem camadas finíssimas enroladas com goiabada. Linu come três fatias. A vendedora ri: “Tá gostando, é? Esse bolo é patrimônio de Pernambuco, viu?”',
            translation:
              'O bolo de rolo tem camadas finíssimas enroladas com goiabada. Linu come três fatias. A vendedora ri-se: “Está a gostar, é? Este bolo é património de Pernambuco, sabia?”',
            choices: [{ text: 'No dia seguinte, vão para Olinda.', translation: 'No dia seguinte, vão para Olinda.', next: 'olinda' }],
          },
          olinda: {
            emoji: '🎭',
            text: 'No domingo, Linu e Juliana sobem as ladeiras de Olinda. Os bonecos gigantes, mais altos que as janelas das casas coloridas, dançam no meio da multidão. Juliana pergunta: “E aí, quer seguir os bonecos ou descansar lá no Alto da Sé, olhando o mar?”',
            translation:
              'No domingo, o Linu e a Juliana sobem as calçadas íngremes de Olinda. Os bonecos gigantes, mais altos do que as janelas das casas coloridas, dançam no meio da multidão. A Juliana pergunta: “Então, queres seguir os bonecos ou descansar lá no Alto da Sé, a olhar para o mar?”',
            choices: [
              { text: 'Segue os bonecos ladeira abaixo.', translation: 'Segue os bonecos pela rua abaixo.', next: 'final_bonecos' },
              { text: 'Descansa no Alto da Sé.', translation: 'Descansa no Alto da Sé.', next: 'final_se' },
            ],
          },
          final_bonecos: {
            emoji: '🎉',
            text: 'Linu desce a ladeira atrás dos bonecos, com a sombrinha no alto e a orquestra de frevo tocando forte. No fim do dia, Juliana declara: “Pronto, agora você é pernambucano de coração!”',
            translation:
              'Linu desce a rua atrás dos bonecos, com o guarda-chuva no ar e a orquestra de frevo a tocar alto. No fim do dia, a Juliana declara: “Pronto, agora és pernambucano de coração!”',
            ending: {
              tone: 'bom',
              title: 'Pernambucano de coração',
              message: 'Você acompanhou o Carnaval com “oxe”, “visse”, “arretado” e “massa”, e viu como cada frase se diria em Portugal.',
            },
          },
          final_se: {
            emoji: '🌊',
            text: 'Lá do alto, Linu vê as igrejas, os telhados coloridos e o mar azul. O frevo chega de longe, mais baixinho. “Ano que vem eu desço a ladeira inteira”, promete.',
            translation:
              'Lá de cima, Linu vê as igrejas, os telhados coloridos e o mar azul. O frevo chega de longe, mais baixinho. “Para o ano, desço a rua toda”, promete.',
            ending: {
              tone: 'neutro',
              title: 'Vista do Alto da Sé',
              message: 'Uma pausa merecida, com a melhor vista de Olinda. Os bonecos ficam para o próximo Carnaval!',
            },
          },
        },
      },
      {
        id: 'pt-br-h3',
        variant: 'pt-BR',
        level: 'B1.3',
        cefr: 'B1',
        title: 'Antes da chuva, em Belém',
        emoji: '🌧️',
        summary: 'Em Belém do Pará, Linu e a amiga Iara correm contra a chuva da tarde: açaí no Ver-o-Peso, tacacá na cuia e um barco para a ilha do Combu.',
        cultural_context:
          'Em Belém, a chuva forte do meio da tarde é tão frequente que muita gente marca compromissos “antes” ou “depois da chuva”. No Ver-o-Peso, mercado à beira da baía do Guajará, o açaí é tomado sem açúcar, com farinha e peixe frito, e o tacacá leva tucupi, goma de mandioca, camarão seco e jambu, uma erva que deixa a boca formigando.',
        start: 'start',
        glossary: [
          ['égua!', 'caramba!, eh pá! (espanto, no Pará)'],
          ['pai d’égua', 'excelente, bestial'],
          ['cuia', 'tigela feita de cabaça'],
          ['tucupi', 'caldo amarelo da mandioca brava'],
          ['jambu', 'erva que deixa a boca dormente'],
          ['se a gente fosse', 'se fôssemos'],
          ['a gente chegaria', 'chegaríamos'],
          ['palafita', 'casa sobre estacas, à beira do rio'],
        ],
        nodes: {
          start: {
            emoji: '☀️',
            text: 'Belém, dez da manhã. O calor já é forte e o céu está limpo. A amiga de Linu, Iara, avisa: “Égua, Linu, o dia hoje vai ser corrido! Primeiro o Ver-o-Peso, depois o barco pro Combu. Mas tem que ser antes da chuva, tá?”',
            translation:
              'Belém, dez da manhã. O calor já aperta e o céu está limpo. A amiga do Linu, a Iara, avisa: “Caramba, Linu, hoje o dia vai ser a correr! Primeiro o Ver-o-Peso, depois o barco para o Combu. Mas tem de ser antes da chuva, está bem?”',
            choices: [
              { text: '“Beleza! Mas que horas chove aqui?”', translation: '“Combinado! Mas a que horas chove aqui?”', next: 'hora' },
              {
                text: 'Linu acha que hoje não vai chover, porque o céu está limpo.',
                translation: 'Linu acha que hoje não vai chover, porque o céu está limpo.',
                wrong: 'A Iara disse “tem que ser antes da chuva”: em Belém, mesmo com o céu limpo de manhã, a chuva da tarde é quase certa.',
              },
            ],
          },
          hora: {
            emoji: '🕑',
            text: 'Iara ri: “Quase todo dia, lá pelas duas, três da tarde. Aqui a gente marca encontro pra antes ou pra depois da chuva!” Os dois pegam um táxi para o mercado.',
            translation:
              'A Iara ri-se: “Quase todos os dias, lá para as duas, três da tarde. Aqui combinamos as coisas para antes ou para depois da chuva!” Os dois apanham um táxi para o mercado.',
            choices: [{ text: 'Chegam ao Ver-o-Peso.', translation: 'Chegam ao Ver-o-Peso.', next: 'mercado' }],
          },
          mercado: {
            emoji: '🐟',
            text: 'O Ver-o-Peso fica na beira da baía. Tem barracas de peixe, de frutas que Linu nunca viu e de ervas com nomes engraçados. Uma vendedora, dona Socorro, oferece: “Prova o açaí, meu filho! Aqui a gente toma sem açúcar, com farinha e peixe frito.”',
            translation:
              'O Ver-o-Peso fica à beira da baía. Há bancas de peixe, de frutas que o Linu nunca viu e de ervas com nomes engraçados. Uma vendedora, a D. Socorro, oferece: “Prova o açaí, meu filho! Aqui come-se sem açúcar, com farinha e peixe frito.”',
            choices: [
              { text: '“Com peixe frito? Quero provar!”', translation: '“Com peixe frito? Quero provar!”', next: 'acai' },
              { text: '“Eu prefiro com açúcar, se a senhora tiver.”', translation: '“Prefiro com açúcar, se a senhora tiver.”', next: 'acucar' },
            ],
          },
          acai: {
            emoji: '🫐',
            text: 'O açaí é grosso, roxo-escuro, com gosto de terra e de fruta ao mesmo tempo. Com o peixe frito, fica ótimo. Linu raspa a cuia, e dona Socorro aplaude: “Pai d’égua! Esse pinguim já é paraense!”',
            translation:
              'O açaí é espesso, roxo-escuro, com sabor a terra e a fruta ao mesmo tempo. Com o peixe frito, fica ótimo. Linu rapa a tigela, e a D. Socorro aplaude: “Bestial! Este pinguim já é paraense!”',
            choices: [
              { text: 'Agradece e segue com Iara para o almoço.', translation: 'Agradece e segue com a Iara para o almoço.', next: 'tacaca' },
              {
                text: 'Linu pede desculpas, porque dona Socorro não gostou do jeito dele comer.',
                translation: 'Linu pede desculpa, porque a D. Socorro não gostou da maneira como ele comeu.',
                wrong: '“Pai d’égua” é um elogio no Pará: quer dizer muito bom, excelente. A dona Socorro adorou!',
              },
            ],
          },
          acucar: {
            emoji: '🥄',
            text: 'Dona Socorro põe um pouco de açúcar, balançando a cabeça, mas sorri: “Tá bom, mas da próxima vez tu provas do nosso jeito, combinado?”',
            translation:
              'A D. Socorro põe um bocadinho de açúcar, a abanar a cabeça, mas sorri: “Está bem, mas da próxima vez provas à nossa maneira, combinado?”',
            choices: [{ text: '“Combinado!” Linu segue com Iara para o almoço.', translation: '“Combinado!” Linu segue com a Iara para o almoço.', next: 'tacaca' }],
          },
          tacaca: {
            emoji: '🥣',
            text: 'Iara leva Linu para tomar tacacá: um caldo quente e amarelo, de tucupi, com goma, camarão seco e folhas de jambu, servido na cuia. Depois de dois goles, a boca de Linu começa a formigar. Iara ri e olha o céu: “Calma, é o jambu! Olha, se a gente fosse agora pro barco, chegaria no Combu antes da chuva.”',
            translation:
              'A Iara leva o Linu a comer tacacá: um caldo quente e amarelo, de tucupi, com goma, camarão seco e folhas de jambu, servido numa tigela de cabaça. Depois de dois goles, o Linu começa a sentir formigueiro na boca. A Iara ri-se e olha para o céu: “Calma, é o jambu! Olha, se fôssemos agora para o barco, chegávamos ao Combu antes da chuva.”',
            choices: [
              { text: '“Então vamos já pro barco!”', translation: '“Então vamos já para o barco!”', next: 'barco' },
              { text: '“Prefiro esperar a chuva passar aqui.”', translation: '“Prefiro esperar aqui que a chuva passe.”', next: 'final_chuva' },
              {
                text: 'Linu para de tomar, achando que o tacacá está estragado.',
                translation: 'Linu deixa de comer, a pensar que o tacacá está estragado.',
                wrong: 'A Iara explicou: é o jambu, uma erva que deixa a boca formigando. Faz parte do prato!',
              },
            ],
          },
          barco: {
            emoji: '🛶',
            text: 'O barco atravessa o rio Guamá em poucos minutos. No Combu, as casas são de madeira, sobre palafitas, no meio da floresta. Quando Linu desce, caem as primeiras gotas. Iara grita: “Corre, que lá vem ela!”',
            translation:
              'O barco atravessa o rio Guamá em poucos minutos. No Combu, as casas são de madeira, sobre estacas, no meio da floresta. Quando o Linu sai do barco, caem as primeiras gotas. A Iara grita: “Corre, que aí vem ela!”',
            choices: [{ text: 'Correm para um restaurante com varanda sobre o rio.', translation: 'Correm para um restaurante com varanda sobre o rio.', next: 'final_combu' }],
          },
          final_combu: {
            emoji: '🌈',
            text: 'Da varanda, os dois veem a chuva cair pesada sobre o rio e a floresta. O barulho é tão forte que é preciso falar alto. Quando a chuva passa, o céu fica cor-de-rosa. Linu pensa: “Se eu morasse aqui, marcaria tudo pra depois da chuva.”',
            translation:
              'Da varanda, os dois veem a chuva cair pesada sobre o rio e a floresta. O barulho é tão forte que é preciso falar alto. Quando a chuva passa, o céu fica cor-de-rosa. O Linu pensa: “Se eu morasse aqui, marcava tudo para depois da chuva.”',
            ending: {
              tone: 'bom',
              title: 'Chegou antes da chuva',
              message: 'Você entendeu a hipótese da Iara, “se a gente fosse… chegaria”, e chegou ao Combu a tempo. Em Portugal, na fala, diz-se “se fôssemos… chegávamos”.',
            },
          },
          final_chuva: {
            emoji: '🌧️',
            text: 'Linu e Iara esperam no mercado. A chuva cai forte por uma hora e depois o sol volta, como se nada tivesse acontecido. Mas o último barco da tarde já saiu. “Amanhã a gente vai antes da chuva”, diz Iara.',
            translation:
              'O Linu e a Iara esperam no mercado. A chuva cai com força durante uma hora e depois o sol volta, como se nada fosse. Mas o último barco da tarde já partiu. “Amanhã vamos antes da chuva”, diz a Iara.',
            ending: {
              tone: 'neutro',
              title: 'Depois da chuva',
              message: 'Em Belém, quem espera a chuva passar às vezes perde o barco. Amanhã tem mais!',
            },
          },
        },
      },
    ],
  },
  // os dialetos da África e da Ásia e o barranquenho (decisão do dono, 09/10/2026)
  ...VARIANTS_PT_AFRICA,
  ...VARIANTS_PT_ASIA,
  VARIANT_PT_BARRANCOS,
];
