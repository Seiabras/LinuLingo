import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_SV } from './pronuncia';

/** Variantes do sueco: o padrão da Suécia (rikssvenska), usado no app, e o sueco da Finlândia (finlandssvenska). */
export const VARIANTS_SV: LanguageVariant[] = [
  {
    code: 'sv-SE',
    country: 'SWE',
    speechLocale: 'sv-SE',
    ipa: (t) => lexiconIpa(t, IPA_SV),
    name: 'Sueco da Suécia',
    flag: '🇸🇪',
    summary: 'O padrão do app: o “rikssvenska”, o sueco de rádio, de TV e da escola na Suécia, com os dois acentos tonais e o tratamento por “du” quase para todo mundo.',
    card: {
      id: 'sv-se-c1',
      title: 'Por que o sueco da Suécia?',
      emoji: '🇸🇪',
      history:
        'O sueco é a língua materna de cerca de 10 milhões de pessoas. Na Suécia, a Lei da Língua de 2009 (“språklagen”) o definiu como a língua principal do país. A Academia Sueca (Svenska Akademien), fundada em 1786 pelo rei Gustavo III, publica o dicionário ortográfico de referência, o SAOL. O sueco também é língua oficial da Finlândia, ao lado do finlandês, e a única língua oficial de Åland.',
      culture_tip:
        'Nos anos 1960, a Suécia passou pela “du-reformen”: o tratamento por “du” (você) se espalhou para quase todo mundo, do chefe ao médico. Hoje, o formal “ni” para uma pessoa só soa antiquado ou até distante; a cortesia sueca está nas formas: “skulle jag kunna få…?” (será que eu poderia…?), “tack så mycket” (muito obrigado). E há a “fika”, a pausa para o café com doce, que é quase uma instituição nos locais de trabalho.',
      grammar_why:
        'Três marcas do sueco que o app ensina: (1) ordem V2: o verbo conjugado é sempre o segundo elemento da oração principal; se a frase começa com outra coisa, o sujeito vai para depois do verbo: “Idag åker jag till Uppsala”; (2) dois gêneros, “en” e “ett”, com o artigo definido grudado no fim da palavra: “en bil → bilen”, “ett hus → huset”; (3) dois acentos tonais, que distinguem palavras: “anden” (o pato) × “anden” (o espírito). O app segue o rikssvenska, o sueco padrão da Suécia; as outras formas ficam nesta seção para você reconhecer.',
      grammar_examples: [
        ['Idag åker jag till Uppsala.', 'Hoje eu vou para Uppsala.'],
        ['Jag har en bil. Bilen är röd.', 'Eu tenho um carro. O carro é vermelho.'],
        ['Huset ligger vid sjön.', 'A casa fica à beira do lago.'],
        ['Skulle jag kunna få en kopp kaffe?', 'Será que eu poderia tomar uma xícara de café?'],
        ['Tack så mycket för hjälpen!', 'Muito obrigado pela ajuda!'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'sv-FI',
    country: 'FIN',
    speechLocale: 'sv-FI',
    ipa: (t) => lexiconIpa(t, IPA_SV),
    name: 'Sueco da Finlândia (finlandssvenska)',
    flag: '🇫🇮',
    summary:
      'Mesma gramática e mesma ortografia, mas sem os dois acentos tonais, com uma melodia mais plana, parecida com a do finlandês, e palavras próprias, as “finlandismer”.',
    card: {
      id: 'sv-fi-c1',
      title: 'O sueco do outro lado do Báltico',
      emoji: '🇫🇮',
      history:
        'A Finlândia fez parte do reino sueco por mais de cinco séculos, até 1809, quando passou para o domínio russo. Até hoje o sueco é, pela Constituição, uma das duas línguas nacionais do país, ao lado do finlandês. Cerca de 5% dos finlandeses têm o sueco como língua materna, sobretudo no litoral: Helsinque (Helsingfors), Turku (Åbo), Vaasa (Vasa), Porvoo (Borgå) e as ilhas de Åland, onde o sueco é a única língua oficial.',
      culture_tip:
        'Em Helsinque, as placas de rua são bilíngues, em finlandês e em sueco. No dia 5 de fevereiro, dia do poeta Johan Ludvig Runeberg, come-se a “runebergstårta”, um bolinho de amêndoas com geleia de framboesa; e foi Runeberg quem escreveu, em sueco, o poema “Vårt land”, que virou o hino da Finlândia. No dia a dia, o finlandssvenska pega palavras do finlandês: “moi” (oi), “kiva” (legal), “joo” (é, sim).',
      grammar_why:
        'A gramática é a mesma do sueco da Suécia: en/ett, forma definida, ordem V2. As diferenças estão na pronúncia (sem os dois acentos tonais) e em palavras e usos próprios, as “finlandismer”: “fara” no lugar de “åka” (ir de carro, de ônibus, de barco), “våning” para apartamento, “hälsocentral” para posto de saúde. As cidades têm nome sueco: Helsingfors, Åbo, Borgå, Vasa. Reconheça essas formas; no app seguimos o padrão da Suécia.',
      grammar_examples: [
        ['Vi far till Åbo i morgon.', 'Nós vamos para Turku amanhã. (Na Suécia: “Vi åker till Åbo”.)'],
        ['Moi! Hur är läget?', 'Oi! Tudo bem?'],
        ['Det var riktigt kiva!', 'Foi muito legal!'],
        ['Hon bor i en våning i Helsingfors.', 'Ela mora num apartamento em Helsinque.'],
        ['Jag måste gå till hälsocentralen.', 'Eu preciso ir ao posto de saúde.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Sem os dois acentos tonais: “anden” (o pato) e “anden” (o espírito) soam iguais. A melodia é mais plana e regular, parecida com a do finlandês, sem o sobe e desce cantado do sueco de Estocolmo.',
      '“sj” (sju, sjö, sjuk) soa [ʃ], como o nosso “ch” de “chá”, e não o [ɧ] soprado da Suécia.',
      '“tj” e o “k” antes de e, i, y, ä, ö soam [tʃ], como o “tch” de “tchau”: “tjugo” [ˈtʃʉːɡu], “kära” [ˈtʃæːra]. Na Suécia, esse som é [ɕ], um chiado sem o “t”.',
      '“p”, “t” e “k” saem sem o sopro (aspiração) do sueco da Suécia: soam secos, como no português.',
      'O “r” é vibrante, com a ponta da língua, e em geral não se junta à consoante seguinte: “mars” soa [mars], e não [maʂ] com o “rs” chiado da Suécia.',
    ],
    vocab: [
      ['semla', 'fastlagsbulle', 'o bolinho de Carnaval recheado de creme e marzipã', 'na Finlândia, “semla” é outra coisa: um pãozinho comum'],
      ['fralla', 'semla', 'pãozinho (de sal)', 'cuidado ao pedir uma “semla” em Helsinque: vem um pão, não o doce'],
      ['lägenhet', 'våning', 'apartamento', 'na Suécia, “våning” é o andar de um prédio'],
      ['förskola', 'daghem', 'creche, pré-escola', 'no dia a dia, os dois lados dizem “dagis”'],
      ['tunnelbana, t-bana', 'metro', 'metrô', 'Helsinque tem “metron”; Estocolmo, a “tunnelbanan”'],
      ['personnummer', 'personbeteckning', 'número de identidade pessoal (como o nosso CPF)'],
      ['vårdcentral', 'hälsocentral', 'posto de saúde'],
      ['sjuksköterska', 'sjukskötare', 'enfermeiro, enfermeira'],
      ['övergångsställe', 'skyddsväg', 'faixa de pedestres', 'decalque do finlandês “suojatie”'],
      ['åka', 'fara', 'ir (de carro, de ônibus, de barco), viajar', '“Vi far till stan” = vamos para o centro'],
      ['läsk', 'limonad, limsa', 'refrigerante'],
      ['godis', 'karameller', 'doces, balas'],
      ['toalett, toa', 'vessa', 'banheiro (o vaso)', 'coloquial, do finlandês'],
      ['ja', 'joo', 'sim, é', 'coloquial, do finlandês'],
      ['hej', 'moi', 'oi', 'coloquial, do finlandês; “moi moi” também serve de tchau'],
      ['kul, trevlig', 'kiva', 'legal, agradável', 'coloquial, do finlandês'],
      ['mormor, farmor', 'mommo', 'vó', 'familiar'],
      ['morfar, farfar', 'moffa', 'vô', 'familiar'],
      ['valborg, första maj', 'vappen', 'a festa de 30 de abril e 1º de maio', 'na Finlândia é a grande festa dos estudantes, com o boné branco de formatura'],
      ['villa, småhus', 'egnahemshus', 'casa (de uma família só)'],
    ],
    stories: [
      {
        id: 'sv-fi-h1',
        variant: 'sv-FI',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Linu i Helsingfors',
        emoji: '⛴️',
        summary: 'Linu chega a Helsinque de barco, almoça na praça do mercado com uma amiga finlandesa de fala sueca e pega a balsa para a fortaleza de Sveaborg.',
        cultural_context:
          'Sveaborg (em finlandês, Suomenlinna) é uma fortaleza que os suecos começaram a construir em 1748, numas ilhas na frente de Helsinque, quando a Finlândia ainda fazia parte da Suécia. Hoje é Patrimônio Mundial da Unesco e se chega lá de balsa, saindo da Salutorget, a praça do mercado no porto.',
        start: 'start',
        glossary: [
          ['hamnen', 'o porto'],
          ['skyltar', 'placas'],
          ['Salutorget', 'a praça do mercado de Helsinque'],
          ['laxsoppa', 'sopa de salmão'],
          ['nu far vi', 'agora nós vamos (Finlândia; na Suécia: “nu åker vi”)'],
          ['en fästning', 'uma fortaleza'],
          ['kiva', 'legal (Finlândia, do finlandês)'],
          ['moi', 'oi (Finlândia, do finlandês)'],
        ],
        nodes: {
          start: {
            emoji: '⛴️',
            text: 'Linu kommer till Helsingfors med båten från Stockholm. I hamnen ser han skyltar på två språk: finska och svenska. Hans vän Ella skriver: “Moi, Linu! Jag väntar vid Salutorget. Idag äter vi lunch på torget!”',
            translation:
              'Linu chega a Helsinque de barco, vindo de Estocolmo. No porto ele vê placas em duas línguas: finlandês e sueco. Sua amiga Ella escreve: “Oi, Linu! Estou esperando na Salutorget. Hoje a gente almoça na praça!”',
            choices: [
              { text: '“Moi, Ella! Jag kommer till torget nu.”', translation: '“Oi, Ella! Estou indo para a praça agora.”', next: 'torget' },
              {
                text: 'Linu tar en taxi till flygplatsen för att möta Ella.',
                translation: 'Linu pega um táxi para o aeroporto para encontrar a Ella.',
                wrong: 'A Ella está esperando na praça do mercado: “Jag väntar vid Salutorget”. E o Linu nem veio de avião: chegou de barco de Estocolmo!',
              },
            ],
          },
          torget: {
            emoji: '🐟',
            text: 'På Salutorget finns det små röda tält. Man säljer fisk, bär och varm mat. Ella säger: “Här kan man äta laxsoppa. Den är jättegod!”',
            translation: 'Na Salutorget há pequenas barracas vermelhas. Vendem peixe, frutas silvestres e comida quente. Ella diz: “Aqui dá para tomar sopa de salmão. É uma delícia!”',
            choices: [
              { text: '“Jag tar en laxsoppa, tack!”', translation: '“Vou querer uma sopa de salmão, por favor!”', next: 'soppa' },
              { text: '“Jag vill hellre ha bär.”', translation: '“Prefiro frutas silvestres.”', next: 'bar' },
            ],
          },
          soppa: {
            emoji: '🍲',
            text: 'Linu äter en stor tallrik laxsoppa. Efter lunchen säger Ella: “Nu far vi till Sveaborg. Båten går klockan två.”',
            translation: 'Linu toma um prato grande de sopa de salmão. Depois do almoço, Ella diz: “Agora a gente vai para Sveaborg. O barco sai às duas.”',
            choices: [{ text: 'De går till båten.', translation: 'Eles vão até o barco.', next: 'baten' }],
          },
          bar: {
            emoji: '🫐',
            text: 'Linu köper blåbär och jordgubbar. Ella skrattar: “Kiva! Men en pingvin behöver väl fisk också?” Sedan säger hon: “Klockan två far vi till Sveaborg med båten.”',
            translation: 'Linu compra mirtilos e morangos. Ella ri: “Legal! Mas um pinguim também precisa de peixe, né?” Depois ela diz: “Às duas a gente vai para Sveaborg de barco.”',
            choices: [{ text: 'De går till båten.', translation: 'Eles vão até o barco.', next: 'baten' }],
          },
          baten: {
            emoji: '🏰',
            text: 'Båten till Sveaborg är liten och full av turister. Ella berättar: “Sveaborg är en gammal fästning. Svenskarna byggde den på 1700-talet, när Finland var en del av Sverige.”',
            translation: 'O barco para Sveaborg é pequeno e está cheio de turistas. Ella conta: “Sveaborg é uma fortaleza antiga. Os suecos a construíram no século XVIII, quando a Finlândia fazia parte da Suécia.”',
            choices: [
              { text: '“Talar folk svenska där idag?”', translation: '“As pessoas falam sueco lá hoje?”', next: 'fastningen' },
              {
                text: '“Så ryssarna byggde fästningen?”',
                translation: '“Então foram os russos que construíram a fortaleza?”',
                wrong: 'A Ella disse que foram os suecos: “Svenskarna byggde den på 1700-talet”, quando a Finlândia fazia parte da Suécia.',
              },
            ],
          },
          fastningen: {
            emoji: '🌊',
            text: 'På Sveaborg finns det gamla murar, kanoner och en liten strand. Ella svarar: “Här bor faktiskt folk, och man hör både finska och svenska. Vill du se kanonerna eller bada?”',
            translation: 'Em Sveaborg há muralhas antigas, canhões e uma prainha. Ella responde: “Aqui mora gente de verdade, e se ouve tanto finlandês quanto sueco. Você quer ver os canhões ou tomar banho de mar?”',
            choices: [
              { text: '“Jag vill bada!”', translation: '“Quero tomar banho de mar!”', next: 'final_bad' },
              { text: '“Jag vill se kanonerna.”', translation: '“Quero ver os canhões.”', next: 'final_kanon' },
            ],
          },
          final_bad: {
            emoji: '🐧',
            text: 'Linu hoppar i det kalla havet. Vattnet är perfekt för en pingvin! Ella tar ett foto: “Det här är årets bästa bild!”',
            translation: 'Linu pula no mar gelado. A água está perfeita para um pinguim! Ella tira uma foto: “Esta é a melhor foto do ano!”',
            ending: { tone: 'bom', title: 'Um mergulho no Báltico', message: 'Você acompanhou a ordem V2 (“Idag äter vi”, “I hamnen ser han”) e ainda aprendeu o “fara” dos finlandeses de fala sueca.' },
          },
          final_kanon: {
            emoji: '⏰',
            text: 'Linu tittar på de stora kanonerna i en hel timme. Plötsligt ser han på klockan: den sista båten går om fem minuter! De springer och hinner precis.',
            translation: 'Linu fica olhando os canhões grandes por uma hora inteira. De repente ele olha o relógio: o último barco sai em cinco minutos! Eles correm e chegam bem a tempo.',
            ending: { tone: 'neutro', title: 'Por um triz', message: 'Muita história e nenhum mergulho. Da próxima vez, dá tempo de ver os canhões e de nadar!' },
          },
        },
      },
      {
        id: 'sv-fi-h2',
        variant: 'sv-FI',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Runebergsdagen i Borgå',
        emoji: '🧁',
        summary: 'No dia 5 de fevereiro, Linu precisa arranjar os bolinhos de Runeberg na cidade velha de Porvoo e acaba aprendendo a história da catedral e do poeta.',
        cultural_context:
          'Porvoo (Borgå, em sueco) é uma das cidades mais antigas da Finlândia, famosa pelos armazéns vermelhos à beira do rio. Na catedral, em 1809, o tsar Alexandre I se reuniu com os estados finlandeses, e a Finlândia virou um grão-ducado dentro do Império Russo. O poeta Johan Ludvig Runeberg morou em Borgå, e no dia do seu aniversário, 5 de fevereiro, come-se a “runebergstårta”.',
        start: 'start',
        glossary: [
          ['vi måste', 'nós temos que'],
          ['kan du köpa…?', 'você pode comprar…?'],
          ['kvar', 'sobrando, restando'],
          ['baka', 'fazer (bolo, pão), assar'],
          ['glöm inte', 'não esqueça (imperativo)'],
          ['domkyrkan', 'a catedral'],
          ['ett storfurstendöme', 'um grão-ducado'],
          ['vi ska', 'nós vamos (futuro, com plano)'],
        ],
        nodes: {
          start: {
            emoji: '📱',
            text: 'Det är den femte februari och Linu är i Borgå. Hans vän Oskar ringer: “I dag är det Runebergsdagen! Vi måste äta runebergstårta. Kan du köpa två på kaféet i gamla stan? Jag kommer hem klockan fyra.”',
            translation:
              'É dia 5 de fevereiro e Linu está em Porvoo. Seu amigo Oskar liga: “Hoje é o dia de Runeberg! A gente tem que comer runebergstårta. Você pode comprar duas no café da cidade velha? Eu chego em casa às quatro.”',
            choices: [
              { text: 'Linu går till kaféet i gamla stan.', translation: 'Linu vai ao café da cidade velha.', next: 'kafe' },
              {
                text: 'Linu väntar hemma, för Oskar ska köpa tårtorna.',
                translation: 'Linu espera em casa, porque o Oskar vai comprar as tortas.',
                wrong: 'Foi o Oskar que pediu ao Linu: “Kan du köpa två…?” (Você pode comprar duas…?). A tarefa é do Linu!',
              },
            ],
          },
          kafe: {
            emoji: '🏘️',
            text: 'Kaféet ligger nära de röda strandbodarna vid ån. Men kön är lång, och expediten säger: “Tyvärr har vi bara en tårta kvar. Vill du ta den, eller vill du baka själv? Jag kan ge dig ett recept.”',
            translation: 'O café fica perto dos armazéns vermelhos à beira do rio. Mas a fila é longa, e a atendente diz: “Infelizmente só temos uma torta sobrando. Você quer levá-la ou quer fazer você mesmo? Posso te dar uma receita.”',
            choices: [
              { text: 'Linu tar den sista tårtan.', translation: 'Linu leva a última torta.', next: 'sista' },
              { text: 'Linu tar receptet. Han ska baka själv!', translation: 'Linu pega a receita. Ele vai fazer ele mesmo!', next: 'recept' },
            ],
          },
          sista: {
            emoji: '🧁',
            text: 'Linu betalar och går ut med tårtan. Han måste gå försiktigt, för gatorna i gamla stan är av sten och ganska ojämna. Vid domkyrkan väntar Oskar.',
            translation: 'Linu paga e sai com a torta. Ele precisa andar com cuidado, porque as ruas da cidade velha são de pedra e bem irregulares. Na frente da catedral, Oskar está esperando.',
            choices: [{ text: '“Hej, Oskar! Jag har tårtan.”', translation: '“Oi, Oskar! Estou com a torta.”', next: 'domkyrkan' }],
          },
          recept: {
            emoji: '📝',
            text: 'Expediten skriver: “Blanda mandel, smör, socker, ägg och lite rom. Grädda tårtorna i ugnen. Lägg sedan hallonsylt ovanpå och en ring av vit glasyr runt sylten. Glöm inte glasyren!”',
            translation: 'A atendente escreve: “Misture amêndoas, manteiga, açúcar, ovos e um pouco de rum. Asse as tortinhas no forno. Depois ponha geleia de framboesa por cima e um anel de glacê branco em volta da geleia. Não esqueça o glacê!”',
            choices: [
              { text: 'Linu går hem och bakar.', translation: 'Linu vai para casa e faz as tortas.', next: 'baka' },
              {
                text: 'Linu lägger sylten i botten av tårtan.',
                translation: 'Linu põe a geleia no fundo da torta.',
                wrong: 'A receita manda pôr a geleia por cima: “Lägg sedan hallonsylt ovanpå” (ovanpå = em cima).',
              },
            ],
          },
          baka: {
            emoji: '👨‍🍳',
            text: 'Linu bakar i Oskars kök. Tårtorna blir lite sneda, men de luktar underbart. När Oskar kommer hem, säger han: “Vi ska gå till domkyrkan först. Sedan äter vi!”',
            translation: 'Linu faz as tortas na cozinha do Oskar. Elas ficam um pouco tortas, mas estão com um cheiro maravilhoso. Quando o Oskar chega em casa, ele diz: “Primeiro vamos à catedral. Depois a gente come!”',
            choices: [{ text: 'De går till domkyrkan.', translation: 'Eles vão à catedral.', next: 'domkyrkan' }],
          },
          domkyrkan: {
            emoji: '⛪',
            text: 'Oskar visar Linu Borgå domkyrka. “Här möttes den ryske kejsaren och ständerna från Finland år 1809”, berättar han. “Efter det blev Finland ett storfurstendöme under Ryssland.”',
            translation: 'Oskar mostra ao Linu a catedral de Porvoo. “Aqui se reuniram o imperador russo e os estados da Finlândia, em 1809”, conta ele. “Depois disso, a Finlândia virou um grão-ducado sob a Rússia.”',
            choices: [
              { text: '“Och Runeberg, vem var han?”', translation: '“E o Runeberg, quem era ele?”', next: 'runeberg' },
              {
                text: '“Så Finland blev självständigt år 1809?”',
                translation: '“Então a Finlândia ficou independente em 1809?”',
                wrong: 'Não: em 1809 a Finlândia virou um grão-ducado sob a Rússia (“under Ryssland”). A independência só veio em 1917.',
              },
            ],
          },
          runeberg: {
            emoji: '📜',
            text: 'Oskar berättar: “Johan Ludvig Runeberg var Finlands nationalskald. Han bodde här i Borgå, och i dag är hans hem ett museum. Han skrev dikten Vårt land, som blev vår nationalsång – och han skrev den på svenska!” Linus mage kurrar. “Ska vi äta nu?” frågar han.',
            translation:
              'Oskar conta: “Johan Ludvig Runeberg foi o poeta nacional da Finlândia. Ele morou aqui em Porvoo, e hoje a casa dele é um museu. Ele escreveu o poema ‘Vårt land’, que virou o nosso hino, e escreveu em sueco!” A barriga do Linu ronca. “Vamos comer agora?”, pergunta ele.',
            choices: [
              { text: '“Vi sätter oss på ett kafé vid ån.”', translation: '“Vamos sentar num café à beira do rio.”', next: 'final_kafe' },
              { text: '“Vi går hem till dig och fikar där.”', translation: '“Vamos para a sua casa tomar café lá.”', next: 'final_hem' },
            ],
          },
          final_hem: {
            emoji: '🇫🇮',
            text: 'Hemma hos Oskar dricker de kaffe och äter runebergstårta. Utanför fönstret vajar den blåvita flaggan, för Runebergsdagen är en flaggdag. “Den här dagen kommer jag aldrig att glömma”, säger Linu.',
            translation: 'Na casa do Oskar, eles tomam café e comem runebergstårta. Lá fora, a bandeira azul e branca tremula, porque o dia de Runeberg é dia de hastear a bandeira. “Nunca vou esquecer este dia”, diz Linu.',
            ending: { tone: 'bom', title: 'Fika de poeta', message: 'Você acompanhou os modais (“måste”, “kan”, “ska”) e o futuro com “kommer att”, e ainda aprendeu história finlandesa.' },
          },
          final_kafe: {
            emoji: '🥶',
            text: 'Kaféet vid ån är fullt, och de måste vänta en halvtimme ute i kylan. Linu fryser inte – han är ju en pingvin – men Oskar skakar. “Nästa år ska vi fika hemma”, säger han.',
            translation: 'O café à beira do rio está lotado, e eles precisam esperar meia hora lá fora, no frio. Linu não sente frio, afinal ele é um pinguim, mas o Oskar treme. “No ano que vem a gente toma café em casa”, diz ele.',
            ending: { tone: 'neutro', title: 'Fila no frio', message: 'A torta estava ótima, mas o Oskar congelou. Em fevereiro, na Finlândia, o melhor lugar para a fika é em casa!' },
          },
        },
      },
      {
        id: 'sv-fi-h3',
        variant: 'sv-FI',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Med cykel på Åland',
        emoji: '🚲',
        summary: 'Linu desembarca em Mariehamn para pedalar por Åland, descobre que é uma região finlandesa onde só se fala oficialmente sueco e prova a panqueca local.',
        cultural_context:
          'Åland é um arquipélago autônomo da Finlândia, com milhares de ilhas, entre a Suécia e o continente finlandês. A única língua oficial é o sueco. Na capital, Mariehamn, o veleiro de quatro mastros Pommern, que levava trigo da Austrália para a Europa, virou museu; e a sobremesa típica é a “ålandspannkaka”, servida com creme de ameixa e chantili.',
        start: 'start',
        glossary: [
          ['eftersom', 'porque, já que'],
          ['att han inte hade', 'que ele não tinha (o “inte” antes do verbo na subordinada)'],
          ['han hade hyrt', 'ele tinha alugado (mais-que-perfeito)'],
          ['om du inte vill', 'se você não quiser'],
          ['fast', 'embora, só que'],
          ['turistbyrån', 'o posto de informações turísticas'],
          ['färjan', 'a balsa, o ferry'],
          ['sviskonkräm', 'creme de ameixa-preta'],
        ],
        nodes: {
          start: {
            emoji: '⛴️',
            text: 'När Linu kom till Mariehamn med färjan från Stockholm, sken solen. Han hade hyrt en cykel på nätet, eftersom han ville se så många öar som möjligt. Men på kajen märkte han att han inte hade någon karta.',
            translation:
              'Quando Linu chegou a Mariehamn na balsa de Estocolmo, o sol brilhava. Ele tinha alugado uma bicicleta pela internet, porque queria ver o máximo de ilhas possível. Mas, no cais, percebeu que não tinha mapa nenhum.',
            choices: [
              { text: 'Linu gick till cykeluthyrningen för att hämta cykeln.', translation: 'Linu foi à locadora de bicicletas buscar a bicicleta.', next: 'cykel' },
              {
                text: 'Linu gick tillbaka till färjan för att hämta kartan.',
                translation: 'Linu voltou à balsa para buscar o mapa.',
                wrong: 'O texto não diz que ele esqueceu o mapa na balsa: diz que ele percebeu que não tinha mapa nenhum (“att han inte hade någon karta”).',
              },
            ],
          },
          cykel: {
            emoji: '🚲',
            text: 'Mannen på cykeluthyrningen sa att Linu inte behövde någon karta. “Det finns skyltar överallt”, sa han. “Men om du vill ha tips, kan du gå till turistbyrån.”',
            translation: 'O homem da locadora de bicicletas disse que o Linu não precisava de mapa. “Tem placas por todo lado”, disse ele. “Mas, se você quiser dicas, pode ir ao posto de turismo.”',
            choices: [{ text: 'Linu cyklade till turistbyrån.', translation: 'Linu pedalou até o posto de turismo.', next: 'turist' }],
          },
          turist: {
            emoji: 'ℹ️',
            text: 'På turistbyrån jobbade en kvinna som hette Saga. Hon berättade att Åland har tusentals öar och att svenska är det enda officiella språket där, fast Åland hör till Finland. “Om du inte vill cykla så långt, kan du stanna i Mariehamn”, sa hon. “Men om du orkar, cykla till Kastelholms slott!”',
            translation:
              'No posto de turismo trabalhava uma mulher chamada Saga. Ela contou que Åland tem milhares de ilhas e que o sueco é a única língua oficial ali, embora Åland pertença à Finlândia. “Se você não quiser pedalar tanto, pode ficar em Mariehamn”, disse ela. “Mas, se aguentar, pedale até o castelo de Kastelholm!”',
            choices: [
              { text: 'Linu stannade i Mariehamn.', translation: 'Linu ficou em Mariehamn.', next: 'mariehamn' },
              { text: 'Linu cyklade till Kastelholm.', translation: 'Linu pedalou até Kastelholm.', next: 'kastelholm' },
              {
                text: 'Linu bad Saga att prata finska, eftersom hon inte kunde svenska.',
                translation: 'Linu pediu à Saga que falasse finlandês, porque ela não sabia sueco.',
                wrong: 'A Saga contou que o sueco é a única língua oficial de Åland: “svenska är det enda officiella språket där”. Ela fala sueco, é claro!',
              },
            ],
          },
          mariehamn: {
            emoji: '⛵',
            text: 'I hamnen såg Linu Pommern, ett gammalt segelfartyg som i dag är museum. En guide berättade att fartyget förr hade seglat med vete från Australien till Europa. Linu tyckte att det var spännande, fast han hellre hade velat bada.',
            translation:
              'No porto, Linu viu o Pommern, um veleiro antigo que hoje é museu. Um guia contou que o navio antigamente tinha levado trigo da Austrália para a Europa. Linu achou emocionante, embora preferisse ter ido nadar.',
            choices: [{ text: 'Linu blev hungrig och gick till ett kafé.', translation: 'Linu ficou com fome e foi a um café.', next: 'pannkaka' }],
          },
          kastelholm: {
            emoji: '🏰',
            text: 'Vägen till Kastelholm var längre än Linu hade trott, men landskapet var vackert: röda stugor, åkrar och blått hav. När han äntligen kom fram, låg det gamla slottet där vid vattnet. Linu var trött, eftersom han inte hade ätit sedan frukosten.',
            translation:
              'O caminho até Kastelholm era mais longo do que o Linu tinha imaginado, mas a paisagem era linda: casinhas vermelhas, campos e mar azul. Quando ele finalmente chegou, lá estava o castelo antigo, à beira da água. Linu estava cansado, porque não tinha comido nada desde o café da manhã.',
            choices: [{ text: 'Linu letade efter ett kafé.', translation: 'Linu procurou um café.', next: 'pannkaka' }],
          },
          pannkaka: {
            emoji: '🥞',
            text: 'På ett kafé beställde Linu ålandspannkaka. Servitören förklarade att den görs på mannagryn och att man äter den med sviskonkräm och vispgrädde. Linu hade aldrig smakat något liknande!',
            translation: 'Num café, Linu pediu a panqueca de Åland. O garçom explicou que ela é feita com semolina e que se come com creme de ameixa e chantili. Linu nunca tinha provado nada parecido!',
            choices: [
              { text: 'Linu frågade om det fanns en strand i närheten.', translation: 'Linu perguntou se havia uma praia por perto.', next: 'final_strand' },
              { text: 'Linu frågade när den sista färjan till Stockholm gick.', translation: 'Linu perguntou quando saía a última balsa para Estocolmo.', next: 'final_farja' },
            ],
          },
          final_strand: {
            emoji: '🌅',
            text: 'Servitören sa att det fanns en fin klippstrand bara tio minuter bort. Linu badade i Östersjön tills solen gick ner, och han bestämde sig för att stanna en vecka till.',
            translation: 'O garçom disse que havia uma bela praia de pedras a só dez minutos dali. Linu nadou no mar Báltico até o sol se pôr e decidiu ficar mais uma semana.',
            ending: { tone: 'bom', title: 'Uma semana a mais', message: 'Você entendeu as subordinadas (“eftersom”, “att han inte hade…”, “fast”) e o mais-que-perfeito. E o Linu ganhou férias a mais!' },
          },
          final_farja: {
            emoji: '🌙',
            text: 'Linu hann med kvällsfärjan, fast han knappt hade sett något av Åland. På däck lovade han sig själv att han skulle komma tillbaka och stanna längre.',
            translation: 'Linu pegou a balsa da noite, embora mal tivesse visto alguma coisa de Åland. No convés, prometeu a si mesmo que voltaria para ficar mais tempo.',
            ending: { tone: 'neutro', title: 'Até a próxima, Åland', message: 'Uma visita rápida demais. São milhares de ilhas: da próxima vez, reserve mais dias!' },
          },
        },
      },
    ],
  },
];
