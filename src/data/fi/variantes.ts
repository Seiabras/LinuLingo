import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_FI } from './pronuncia';

/**
 * O finlandês padrão (yleiskieli), com a pronúncia da Finlândia, e o finlandês da minoria
 * finlandesa da Suécia (ruotsinsuomi, em sueco «sverigefinska»). A escrita é a mesma; a voz das duas
 * é a da Finlândia. Atenção: o meänkieli, do vale do rio Torne, é outra língua e fica nos sotaques.
 */
export const VARIANTS_FI: LanguageVariant[] = [
  {
    code: 'fi-FI',
    country: 'FIN',
    speechLocale: 'fi-FI',
    ipa: (t) => lexiconIpa(t, IPA_FI),
    name: 'Finlandês da Finlândia',
    flag: '🇫🇮',
    summary: 'O padrão do app: o yleiskieli, o finlandês padrão escrito e falado nos jornais, na escola e nas repartições da Finlândia.',
    card: {
      id: 'fi-fi-c1',
      title: 'Por que o yleiskieli?',
      emoji: '🇫🇮',
      history:
        'O finlandês é a língua materna de cerca de 5 milhões de pessoas e, ao lado do sueco, uma das duas línguas oficiais da Finlândia. Durante séculos, até 1809, a Finlândia fez parte do reino da Suécia, e o sueco era a língua da administração e da cultura. A escrita finlandesa começou no século XVI, com Mikael Agricola, que publicou uma cartilha por volta de 1543 e o Novo Testamento em finlandês em 1548. No século XIX, com a publicação do Kalevala (1835) e o movimento nacional, o finlandês ganhou prestígio, e um decreto de 1863 começou a igualá-lo ao sueco na administração. O padrão de hoje juntou traços dos dialetos do oeste e do leste, e quem cuida dele é o Instituto das Línguas da Finlândia (Kotimaisten kielten keskus), que publica o dicionário de referência, o Kielitoimiston sanakirja.',
      culture_tip:
        'Na Finlândia, trata-se quase todo mundo por “sinä” (você): colegas, vizinhos, muitas vezes até o chefe. O “te” de cortesia, com o verbo no plural, aparece com pessoas mais velhas, no atendimento formal e nas cartas oficiais. O silêncio numa conversa não é constrangedor, e ninguém fala só para preencher o vazio. A sauna é parte da vida: há milhões delas no país, em casas, prédios e à beira dos lagos. E há uma palavra que muitos finlandeses usam para se descrever: “sisu”, a persistência teimosa de continuar quando tudo está difícil.',
      grammar_why:
        'Quatro marcas do finlandês que o app ensina: (1) não há gênero nem artigo: “hän” é ele e ela; (2) em vez de preposições, há 15 casos, sufixos grudados no fim da palavra: “talo” (casa), “talossa” (na casa), “talosta” (da casa), “taloon” (para a casa); (3) a harmonia vocálica: numa palavra simples, as vogais de trás (a, o, u) não se misturam com as da frente (ä, ö, y), e os sufixos se adaptam: “talossa”, mas “kylässä” (na aldeia); (4) a negação é um verbo que se conjuga: “en tiedä” (eu não sei), “et tiedä” (você não sabe), “ei tiedä” (ele não sabe). A tônica cai sempre na primeira sílaba, e letra dobrada é som longo que muda o sentido: “tuli” (fogo), “tuuli” (vento), “tulli” (alfândega).',
      grammar_examples: [
        ['Hän on opettaja.', 'Ele (ou ela) é professor.'],
        ['Kirja on talossa. Menen taloon.', 'O livro está na casa. Eu vou para a casa.'],
        ['Asun kylässä järven rannalla.', 'Eu moro numa aldeia à beira do lago.'],
        ['En tiedä. Tiedätkö sinä?', 'Eu não sei. Você sabe?'],
        ['Tuli, tuuli ja tulli.', 'Fogo, vento e alfândega.'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'fi-SE',
    country: 'SWE',
    speechLocale: 'fi-FI',
    ipa: (t) => lexiconIpa(t, IPA_FI),
    name: 'Finlandês da Suécia',
    flag: '🇸🇪',
    summary:
      'O finlandês dos ruotsinsuomalaiset, a minoria finlandesa da Suécia: a mesma escrita do yleiskieli, falada ao lado do sueco, com palavras e expressões emprestadas do sueco.',
    card: {
      id: 'fi-se-c1',
      title: 'O finlandês do outro lado do golfo',
      emoji: '🤝',
      history:
        'Há finlandeses na Suécia há séculos: até 1809, a Finlândia fez parte do reino sueco, e muitos finlandeses viviam em Estocolmo e nas florestas do centro da Suécia. A grande onda veio depois da Segunda Guerra Mundial. Em 1954, os países nórdicos criaram um mercado de trabalho comum, e a indústria sueca precisava de mão de obra. Entre os anos 1950 e 1970, várias centenas de milhares de finlandeses se mudaram para a Suécia, com o pico por volta de 1970: iam para as fábricas de carros, de metal, de papel e de tecidos, em cidades como Estocolmo, Södertälje, Eskilstuna, Västerås e Gotemburgo. Muitos voltaram depois; muitos ficaram e criaram os filhos na Suécia. Em 2000, a Suécia reconheceu os ruotsinsuomalaiset (em sueco, “sverigefinnar”) como minoria nacional e o finlandês como uma das cinco línguas minoritárias oficiais do país, ao lado do sámi, do meänkieli, do romani e do iídiche.',
      culture_tip:
        'Estima-se que várias centenas de milhares de pessoas na Suécia tenham raízes finlandesas, da primeira à terceira geração, mas nem todas falam finlandês. Nos municípios da “área administrativa do finlandês” (suomen kielen hallintoalue), como Estocolmo, Eskilstuna e Haparanda, a pessoa tem o direito de tratar com as autoridades em finlandês, e os idosos podem pedir atendimento na sua língua. Existem escolas bilíngues, associações finlandesas com coral, dança e sauna, e as crianças podem ter aulas da língua materna. Todo 24 de fevereiro é o Dia dos Finlandeses da Suécia (ruotsinsuomalaisten päivä). Não confunda com o meänkieli, falado no vale do rio Torne, na fronteira norte: ele é aparentado com o finlandês, mas é reconhecido como uma língua própria, com escrita e literatura suas.',
      grammar_why:
        'A gramática é a do yleiskieli: é ele que se escreve nos jornais e se ensina nas aulas de finlandês. Mas o finlandês da Suécia vive ao lado do sueco, e isso aparece na fala: palavras emprestadas e adaptadas ao finlandês, como “hyyrä” (aluguel, do sueco “hyra”) em vez de “vuokra”, ou “fiika” (a pausa do café, do sueco “fika”); decalques de expressões suecas; e a troca de língua no meio da frase, comum entre os mais jovens. Os mais velhos costumam falar o dialeto da região da Finlândia de onde vieram. O app ensina o yleiskieli; esta variante mostra como ele vive do outro lado do golfo de Bótnia.',
      grammar_examples: [
        ['Olen ruotsinsuomalainen.', 'Eu sou finlandês da Suécia.'],
        ['Mummoni muutti Ruotsiin vuonna 1970.', 'A minha avó se mudou para a Suécia em 1970.'],
        ['Kotona puhumme suomea, töissä ruotsia.', 'Em casa a gente fala finlandês, no trabalho, sueco.'],
        ['Hyyrä on kallis, mutta asunto on hyvä.', 'O aluguel é caro, mas o apartamento é bom.'],
        ['Hyvää ruotsinsuomalaisten päivää!', 'Feliz Dia dos Finlandeses da Suécia!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A escrita é a mesma do yleiskieli, e a voz do app é a da Finlândia. A tônica continua na primeira sílaba, e as vogais e consoantes longas continuam distinguindo palavras.',
      'Os mais velhos costumam trazer a pronúncia do dialeto da sua região de origem na Finlândia; em Haparanda e arredores, o finlandês soa como o do norte da Finlândia, logo do outro lado do rio.',
      'Entre os jovens que cresceram com o sueco, a melodia da frase pode soar mais sueca, e as palavras emprestadas do sueco muitas vezes mantêm sons que o finlandês tradicional evita, como o “b”, o “g” e o “f” no começo da palavra.',
      'Na fala, é comum trocar de língua no meio da frase, sobretudo com palavras da escola, do trabalho e da burocracia suecas.',
    ],
    vocab: [
      ['vuokra', 'hyyrä', 'aluguel', 'do sueco “hyra”; comum na fala de muitos finlandeses da Suécia, não na escrita formal'],
      ['kunta', 'kommuuni', 'município, prefeitura', 'do sueco “kommun”; nos textos oficiais se escreve “kunta”'],
      ['kahvitauko', 'fiika', 'pausa para o café', 'do sueco “fika”, a pausa com café e doce que é quase uma instituição sueca'],
      ['ruotsinsuomalainen', 'ruotsinsuomalainen', 'finlandês da Suécia', 'em sueco, “sverigefinne”; o plural é “ruotsinsuomalaiset”'],
      ['Tukholma', 'Tukholma', 'Estocolmo', 'várias cidades suecas têm nome finlandês: Tukholma (Estocolmo), Haaparanta (Haparanda), Uumaja (Umeå)'],
      ['kansallinen vähemmistö', 'kansallinen vähemmistö', 'minoria nacional', 'os ruotsinsuomalaiset são uma das cinco minorias nacionais da Suécia desde 2000'],
      ['vähemmistökieli', 'vähemmistökieli', 'língua minoritária', 'o finlandês é uma das cinco línguas minoritárias oficiais da Suécia'],
      ['suomen kielen hallintoalue', 'suomen kielen hallintoalue', 'área administrativa do finlandês', 'municípios onde se pode tratar com as autoridades em finlandês, como Estocolmo, Eskilstuna e Haparanda'],
      ['ruotsinsuomalaisten päivä', 'ruotsinsuomalaisten päivä', 'Dia dos Finlandeses da Suécia', 'comemorado todo 24 de fevereiro'],
      ['äidinkielen opetus', 'äidinkielen opetus', 'aulas de língua materna', 'nas escolas suecas, as crianças que falam finlandês em casa podem ter aulas de finlandês'],
      ['raja', 'raja', 'fronteira', 'em Haparanda e Tornio, a fronteira passa entre duas cidades que cresceram grudadas'],
      ['ruotsiksi', 'ruotsiksi', 'em sueco', 'e “suomeksi”, em finlandês: muita gente passa de uma língua à outra várias vezes por dia'],
      ['meänkieli', 'meänkieli', 'o meänkieli', 'não é o finlandês da Suécia: é uma língua própria do vale do rio Torne, reconhecida separadamente em 2000; o nome quer dizer “a nossa língua”'],
    ],
    stories: [
      {
        id: 'fi-se-h1',
        variant: 'fi-SE',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Mummon matkalaukku',
        emoji: '🧳',
        summary: 'Linu visita a amiga Aino em Estocolmo no Dia dos Finlandeses da Suécia e conhece a avó dela, que chegou da Finlândia em 1969.',
        cultural_context:
          'Estocolmo (Tukholma, em finlandês) tem a maior comunidade finlandesa da Suécia. Entre os anos 1950 e 1970, muitos finlandeses atravessaram o mar Báltico de navio, de Turku a Estocolmo, para trabalhar nas fábricas suecas. Todo 24 de fevereiro, o Dia dos Finlandeses da Suécia, a comunidade se reúne com música, discursos e café.',
        start: 'start',
        glossary: [
          ['Tule mukaan!', 'Venha junto! (imperativo)'],
          ['Tulkaa sisään! Istukaa!', 'Entrem! Sentem-se! (imperativo no plural)'],
          ['muutti', 'mudou-se (passado de “muuttaa”)'],
          ['He joivat kahvia.', 'Eles tomaram café. (objeto no partitivo)'],
          ['Hän avasi oven.', 'Ela abriu a porta. (objeto inteiro: acusativo)'],
          ['fiika', 'pausa para o café (do sueco “fika”)'],
          ['tehdas, tehtaassa', 'fábrica, na fábrica'],
          ['pellillinen', 'uma assadeira cheia'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: 'Linu saapui Tukholmaan junalla. Asemalla häntä odotti Aino. Ainon mummo muutti Suomesta Ruotsiin vuonna 1969. “Moi, Linu! Tänään on ruotsinsuomalaisten päivä. Tule mukaan!”',
            translation:
              'Linu chegou a Estocolmo de trem. Na estação, a Aino esperava por ele. A avó da Aino se mudou da Finlândia para a Suécia em 1969. “Oi, Linu! Hoje é o Dia dos Finlandeses da Suécia. Venha junto!”',
            choices: [
              { text: '“Kiitos! Minne menemme?”', translation: '“Obrigado! Aonde a gente vai?”', next: 'metro' },
              { text: '“Haluan ensin kahvia!”', translation: '“Primeiro eu quero um café!”', next: 'kahvila' },
              {
                text: 'Linu vastasi ruotsiksi, koska Aino ei puhu suomea.',
                translation: 'Linu respondeu em sueco, porque a Aino não fala finlandês.',
                wrong: 'A Aino fala finlandês, sim: acabou de cumprimentar o Linu em finlandês (“Moi, Linu!”) e de convidá-lo (“Tule mukaan!”).',
              },
            ],
          },
          kahvila: {
            emoji: '☕',
            text: 'He menivät pieneen kahvilaan. He joivat kahvia ja söivät korvapuustit. Aino nauroi: “Täällä moni sanoo tätä fiikaksi. Se tarkoittaa kahvitaukoa.” Sitten he lähtivät metroon.',
            translation:
              'Eles foram a um cafezinho. Tomaram café e comeram os pãezinhos de canela. A Aino riu: “Aqui muita gente chama isso de fiika. Quer dizer pausa para o café.” Depois foram para o metrô.',
            choices: [{ text: 'He ehtivät juuri metroon.', translation: 'Eles pegaram o metrô bem a tempo.', next: 'metro' }],
          },
          metro: {
            emoji: '🚇',
            text: 'Metrossa Aino kertoi: “Mummo tuli Ruotsiin töihin. Hän teki töitä tehtaassa kolmekymmentä vuotta. Kotona me puhuimme aina suomea, koulussa ruotsia.”',
            translation:
              'No metrô, a Aino contou: “A vovó veio para a Suécia trabalhar. Ela trabalhou numa fábrica por trinta anos. Em casa a gente sempre falava finlandês; na escola, sueco.”',
            choices: [
              { text: '“Haluan tavata mummosi!”', translation: '“Quero conhecer a sua avó!”', next: 'mummo' },
              {
                text: '“Eli mummo ei koskaan oppinut ruotsia?”',
                translation: '“Então a sua avó nunca aprendeu sueco?”',
                wrong: 'A Aino não disse isso: contou só que em casa se falava finlandês. Depois de trinta anos numa fábrica sueca, a avó certamente sabe sueco.',
              },
            ],
          },
          mummo: {
            emoji: '🏠',
            text: 'Mummo avasi oven ja halasi Ainoa. “Tulkaa sisään! Istukaa! Keitin juuri kahvia ja leivoin pullaa.” Pöydällä oli pullaa ja vanha valokuva.',
            translation:
              'A avó abriu a porta e abraçou a Aino. “Entrem! Sentem-se! Acabei de passar café e assei pão doce.” Na mesa havia pão doce e uma fotografia antiga.',
            choices: [
              { text: 'Linu kysyi valokuvasta.', translation: 'Linu perguntou sobre a fotografia.', next: 'final_kuva' },
              { text: 'Linu söi pullaa eikä sanonut mitään.', translation: 'Linu comeu pão doce e não disse nada.', next: 'final_pulla' },
            ],
          },
          final_kuva: {
            emoji: '🚢',
            text: 'Kuvassa oli nuori nainen laivan kannella. “Tämä olen minä vuonna 1969”, mummo kertoi. “Tulin laivalla Turusta Tukholmaan. Minulla oli yksi matkalaukku ja paljon rohkeutta.” Linu kuunteli koko illan.',
            translation:
              'Na foto havia uma moça no convés de um navio. “Esta sou eu, em 1969”, contou a avó. “Vim de navio de Turku para Estocolmo. Eu tinha uma mala e muita coragem.” Linu ficou ouvindo a noite inteira.',
            ending: {
              tone: 'bom',
              title: 'Uma história de família',
              message: 'Você acompanhou o passado (“saapui”, “muutti”, “tuli”, “kertoi”), o objeto no partitivo e no acusativo (“joivat kahvia”, “avasi oven”) e o imperativo (“Tule mukaan!”, “Tulkaa sisään!”, “Istukaa!”).',
            },
          },
          final_pulla: {
            emoji: '🥐',
            text: 'Linu söi yhden pullan, sitten toisen ja kolmannen. Lopulta pöydällä oli vain tyhjä lautanen. Mummo nauroi: “No, ensi kerralla leivon kaksi pellillistä!”',
            translation:
              'Linu comeu um pão doce, depois o segundo e o terceiro. No fim, na mesa só havia um prato vazio. A avó riu: “Bom, da próxima vez eu asso duas assadeiras!”',
            ending: { tone: 'neutro', title: 'Pão doce demais', message: 'O pão doce da vovó é ótimo, mas a história da foto ficou para depois. Da próxima vez, pergunte!' },
          },
        },
      },
      {
        id: 'fi-se-h2',
        variant: 'fi-SE',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Suomen tunti Eskilstunassa',
        emoji: '🏫',
        summary: 'Linu passa um dia em Eskilstuna com Mikko, professor de finlandês, e assiste a uma aula para crianças que falam finlandês em casa.',
        cultural_context:
          'Eskilstuna, a oeste de Estocolmo, é uma antiga cidade industrial, conhecida há séculos pelo trabalho com metal, das facas às máquinas. Nos anos 1960 e 1970, milhares de finlandeses vieram trabalhar nas suas fábricas, e ela é até hoje uma das cidades mais finlandesas da Suécia. O município faz parte da área administrativa do finlandês.',
        start: 'start',
        glossary: [
          ['Mikko, joka opettaa…', 'Mikko, que ensina… (relativo “joka”)'],
          ['lapsia, jotka puhuvat…', 'crianças que falam… (relativo no plural)'],
          ['suomalaisimmista', 'das mais finlandesas (superlativo)'],
          ['vaikeampi kuin', 'mais difícil que (comparativo)'],
          ['vaikeinta, helpointa', 'o mais difícil, o mais fácil'],
          ['tulla katsomaan', 'vir assistir (infinitivo de finalidade)'],
          ['lähteä saunomaan', 'ir para a sauna'],
          ['…, mikä on virhe', '…, o que é um erro (relativo “mikä”)'],
        ],
        nodes: {
          start: {
            emoji: '🏭',
            text: 'Linu tuli Eskilstunaan, joka on vanha teollisuuskaupunki Tukholman länsipuolella. Häntä vastassa oli Mikko, joka opettaa suomea koululaisille. “Tervetuloa! Eskilstuna on yksi Ruotsin suomalaisimmista kaupungeista. Haluatko tulla katsomaan tuntiani?”',
            translation:
              'Linu chegou a Eskilstuna, que é uma antiga cidade industrial a oeste de Estocolmo. Quem o esperava era o Mikko, que ensina finlandês para crianças em idade escolar. “Bem-vindo! Eskilstuna é uma das cidades mais finlandesas da Suécia. Quer vir assistir à minha aula?”',
            choices: [
              { text: '“Totta kai! Opettaminen on kiinnostavaa.”', translation: '“Claro! Ensinar é interessante.”', next: 'tunti' },
              { text: '“Mennään ensin kävelemään joen rantaan.”', translation: '“Vamos antes dar uma volta na beira do rio.”', next: 'joki' },
              {
                text: '“Mutta eihän Eskilstunassa puhuta suomea.”',
                translation: '“Mas em Eskilstuna não se fala finlandês.”',
                wrong: 'O Mikko acabou de dizer o contrário: Eskilstuna é uma das cidades mais finlandesas da Suécia (“yksi Ruotsin suomalaisimmista kaupungeista”).',
              },
            ],
          },
          joki: {
            emoji: '🌉',
            text: 'Joen rannalla on hiljaista. Mikko näyttää vanhoja rakennuksia: “Täällä tehtiin ennen veitsiä ja työkaluja. Monet suomalaiset, jotka muuttivat tänne 1960-luvulla, saivat töitä tehtaista.” Sitten hän katsoo kelloa: “Nyt meidän täytyy kiirehtiä kouluun!”',
            translation:
              'Na beira do rio está tudo calmo. O Mikko mostra uns prédios antigos: “Aqui antigamente se faziam facas e ferramentas. Muitos finlandeses que se mudaram para cá nos anos 1960 conseguiram trabalho nas fábricas.” Aí ele olha o relógio: “Agora a gente tem que correr para a escola!”',
            choices: [{ text: 'He kävelevät nopeasti kouluun.', translation: 'Eles vão depressa para a escola.', next: 'tunti' }],
          },
          tunti: {
            emoji: '📖',
            text: 'Luokassa on kahdeksan lasta, jotka puhuvat kotona suomea. Mikko kysyy: “Kumpi on pidempi sana: kaupunki vai kauppa?” Lapset huutavat vastauksia. Yksi tyttö sanoo: “Minusta suomi on vaikeampi kuin ruotsi, mutta kauniimpi!”',
            translation:
              'Na sala há oito crianças que falam finlandês em casa. O Mikko pergunta: “Qual é a palavra mais comprida: kaupunki ou kauppa?” As crianças gritam as respostas. Uma menina diz: “Para mim o finlandês é mais difícil que o sueco, mas é mais bonito!”',
            choices: [
              { text: '“Mikä suomessa on vaikeinta?”', translation: '“O que é o mais difícil no finlandês?”', next: 'vaikeinta' },
              {
                text: '“Onko ruotsi sinusta siis kauniimpi?”',
                translation: '“Então para você o sueco é mais bonito?”',
                wrong: 'Ela disse o contrário: acha o finlandês mais difícil que o sueco, mas mais bonito (“vaikeampi kuin ruotsi, mutta kauniimpi”).',
              },
            ],
          },
          vaikeinta: {
            emoji: '🤔',
            text: 'Tyttö miettii: “Vaikeinta on muistaa kaikki sijamuodot. Helpointa on puhua mummon kanssa, koska hän ei osaa ruotsia kovin hyvin.” Tunnin jälkeen Mikko kysyy: “Haluatko lähteä saunomaan vai syömään?”',
            translation:
              'A menina pensa: “O mais difícil é lembrar todos os casos. O mais fácil é falar com a vovó, porque ela não sabe sueco muito bem.” Depois da aula, o Mikko pergunta: “Você quer ir para a sauna ou ir comer?”',
            choices: [
              { text: '“Saunaan! Se on paras tapa rentoutua.”', translation: '“Sauna! É o melhor jeito de relaxar.”', next: 'final_sauna' },
              { text: '“Syömään! Olen nälkäisempi kuin koskaan.”', translation: '“Comer! Estou com mais fome do que nunca.”', next: 'final_ruoka' },
            ],
          },
          final_sauna: {
            emoji: '🧖',
            text: 'Suomalaisen yhdistyksen saunassa on lämmintä ja rauhallista. Vanha mies, joka tuli Eskilstunaan vuonna 1970, kertoo nuoruudestaan tehtaassa. Linu kuuntelee ja oppii sanoja, joita hän ei ole koskaan kuullut.',
            translation:
              'Na sauna da associação finlandesa está quentinho e tranquilo. Um senhor, que chegou a Eskilstuna em 1970, conta da juventude na fábrica. Linu escuta e aprende palavras que nunca tinha ouvido.',
            ending: {
              tone: 'bom',
              title: 'Vapor e histórias',
              message: 'Você acompanhou o comparativo e o superlativo (“pidempi”, “vaikeampi”, “suomalaisimmista”, “vaikeinta”, “paras”), os relativos (“joka”, “jotka”, “joita”) e os infinitivos (“tulla katsomaan”, “lähteä saunomaan”).',
            },
          },
          final_ruoka: {
            emoji: '🍽️',
            text: 'Ravintolassa Linu tilaa suurimman annoksen, mikä on virhe. Hän syö niin paljon, ettei jaksa enää kävellä. “Sauna odottaa ensi kerralla”, Mikko nauraa.',
            translation:
              'No restaurante, Linu pede o maior prato, o que é um erro. Ele come tanto que já não aguenta andar. “A sauna fica para a próxima”, ri o Mikko.',
            ending: { tone: 'neutro', title: 'O maior prato', message: 'A comida estava boa, mas a sauna e as histórias da associação ficaram para depois. Da próxima vez, sauna primeiro!' },
          },
        },
      },
      {
        id: 'fi-se-h3',
        variant: 'fi-SE',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Lupa rajakaupungissa',
        emoji: '📧',
        summary: 'Linu passa o verão em Haparanda, na fronteira com a Finlândia, e escreve um e-mail formal em finlandês à prefeitura para organizar um show no parque.',
        cultural_context:
          'Haparanda (Haaparanta, em finlandês), na Suécia, e Tornio, na Finlândia, ficam na foz do rio Torne e cresceram grudadas: dá para atravessar a fronteira a pé, e as duas cidades têm moedas e fusos horários diferentes (na Finlândia, o relógio está uma hora à frente). Haparanda faz parte das áreas administrativas do finlandês e do meänkieli, a língua do vale do Torne; por isso, quem mora lá pode escrever à prefeitura em finlandês.',
        start: 'start',
        glossary: [
          ['Hyvä vastaanottaja', 'Prezado(a) destinatário(a) (abertura formal)'],
          ['Ystävällisin terveisin', 'Atenciosamente (despedida formal)'],
          ['Voisitteko kertoa…?', 'O(a) senhor(a) poderia informar…? (“te” de cortesia)'],
          ['Palauttakaa…', 'Devolva… (imperativo com “te”)'],
          ['Kiitos viestistänne.', 'Obrigado pela sua mensagem. (formal)'],
          ['lupa haetaan', 'a licença é solicitada (passivo)'],
          ['liite', 'anexo'],
          ['viimeistään', 'no mais tardar'],
        ],
        nodes: {
          start: {
            emoji: '🌉',
            text: 'Linu on kesätöissä Haaparannalla. Hän asuu Ruotsin puolella, mutta käy usein Torniossa, Suomen puolella, sillä kaupungit ovat kasvaneet kiinni toisiinsa. Suomalainen yhdistys pyytää häntä järjestämään puistokonsertin. “Lupa pitää kysyä kunnalta”, sanoo yhdistyksen puheenjohtaja Leena. “Haaparanta kuuluu suomen kielen hallintoalueeseen, joten voit kirjoittaa suomeksi.”',
            translation:
              'Linu está num trabalho de verão em Haparanda. Ele mora do lado sueco, mas vai muito a Tornio, do lado finlandês, porque as cidades cresceram grudadas uma na outra. A associação finlandesa pede que ele organize um show no parque. “A licença tem de ser pedida à prefeitura”, diz a presidente da associação, Leena. “Haparanda faz parte da área administrativa do finlandês, então você pode escrever em finlandês.”',
            choices: [
              { text: 'Linu avaa tietokoneen ja aloittaa sähköpostin.', translation: 'Linu abre o computador e começa o e-mail.', next: 'tervehdys' },
              {
                text: 'Linu kirjoittaa englanniksi, koska kunnassa ei ymmärretä suomea.',
                translation: 'Linu escreve em inglês, porque na prefeitura não se entende finlandês.',
                wrong: 'A Leena acabou de explicar o contrário: Haparanda faz parte da área administrativa do finlandês, e a prefeitura atende em finlandês.',
              },
            ],
          },
          tervehdys: {
            emoji: '✍️',
            text: 'Ensin pitää valita tervehdys. Linu ei tunne vastaanottajaa, eikä hän tiedä, kuka viestin lukee. Miten hän aloittaa?',
            translation: 'Primeiro é preciso escolher a saudação. Linu não conhece o destinatário e não sabe quem vai ler a mensagem. Como ele começa?',
            choices: [
              { text: '“Hyvä vastaanottaja,”', translation: '“Prezado(a) destinatário(a),”', next: 'viesti' },
              { text: '“Moro kunta!”', translation: '“E aí, prefeitura!”', next: 'moro' },
            ],
          },
          moro: {
            emoji: '🙈',
            text: 'Leena lukee luonnosta Linun olan yli ja pudistaa päätään: “Moro sopii kavereille, ei viranomaisille. Kirjoita asiallisemmin, niin saat nopeammin vastauksen.”',
            translation: 'A Leena lê o rascunho por cima do ombro do Linu e balança a cabeça: “Moro serve para os amigos, não para as autoridades. Escreva de um jeito mais formal, que a resposta vem mais rápido.”',
            choices: [{ text: 'Linu korjaa tervehdyksen.', translation: 'Linu corrige a saudação.', next: 'viesti' }],
          },
          viesti: {
            emoji: '📨',
            text: 'Linu kirjoittaa: “Hyvä vastaanottaja, järjestämme heinäkuun 15. päivänä pienen konsertin kaupungin puistossa. Voisitteko kertoa, tarvitsemmeko siihen luvan? Ystävällisin terveisin, Linu, Haaparannan suomalainen yhdistys.” Kahden päivän kuluttua tulee vastaus: “Kiitos viestistänne. Lupa haetaan lomakkeella, jonka löydätte liitteestä. Palauttakaa se viimeistään kesäkuun lopussa.”',
            translation:
              'Linu escreve: “Prezado(a) destinatário(a), no dia 15 de julho vamos organizar um pequeno show no parque da cidade. O(a) senhor(a) poderia informar se precisamos de licença para isso? Atenciosamente, Linu, associação finlandesa de Haparanda.” Dois dias depois chega a resposta: “Obrigado pela sua mensagem. A licença é solicitada com o formulário que o senhor encontra em anexo. Devolva-o até o fim de junho, no mais tardar.”',
            choices: [
              { text: 'Linu täyttää lomakkeen heti ja lähettää sen.', translation: 'Linu preenche o formulário na hora e o envia.', next: 'final_ok' },
              { text: 'Linu jättää lomakkeen huomiseksi ja lähtee Tornioon kahville.', translation: 'Linu deixa o formulário para amanhã e vai tomar um café em Tornio.', next: 'final_myohassa' },
            ],
          },
          final_ok: {
            emoji: '🎻',
            text: 'Viikon kuluttua kunnasta tulee sähköposti: “Hyvä Linu, lupa on myönnetty. Toivotamme teille onnistunutta konserttia!” Leena ilahtuu: “Juhlitaan! Mennään Tornioon kahville. Muista vain, että siellä kello on tunnin enemmän.”',
            translation:
              'Uma semana depois chega um e-mail da prefeitura: “Prezado Linu, a licença foi concedida. Desejamos a vocês um ótimo show!” A Leena fica toda contente: “Vamos comemorar! Vamos tomar um café em Tornio. Só lembre que lá o relógio está uma hora à frente.”',
            ending: {
              tone: 'bom',
              title: 'Licença concedida',
              message: 'Você acompanhou o registro formal: a abertura e a despedida do e-mail (“Hyvä vastaanottaja”, “Ystävällisin terveisin”), o “te” de cortesia (“Voisitteko kertoa…?”, “Palauttakaa…”) e o passivo das repartições (“lupa haetaan”, “lupa on myönnetty”).',
            },
          },
          final_myohassa: {
            emoji: '⏰',
            text: 'Torniossa Linu juo kahvia, käy kirjastossa ja unohtaa lomakkeen kokonaan. Kun hän kaksi viikkoa myöhemmin muistaa sen, määräaika on jo mennyt. “Konsertti siirtyy ensi kesään”, Leena huokaisee.',
            translation:
              'Em Tornio, Linu toma café, passa na biblioteca e esquece o formulário por completo. Quando se lembra dele, duas semanas depois, o prazo já passou. “O show fica para o verão que vem”, suspira a Leena.',
            ending: { tone: 'neutro', title: 'Prazo perdido', message: 'Na repartição, prazo é prazo. Da próxima vez, preencha o formulário logo e deixe o café para depois!' },
          },
        },
      },
    ],
  },
];
