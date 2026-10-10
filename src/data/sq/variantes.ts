import type { LanguageVariant } from '../types';

/**
 * Os dialetos do albanês (decisão do dono, 09/10/2026): o tosk, do sul, base do padrão (o do curso), e
 * o gheg, do norte da Albânia e do Kosovo, separados pelo rio Shkumbin. O arbëresh (Itália) e o
 * arvanítico (Grécia) ficam como línguas próprias em sotaques.ts. Vocabulário no formato [padrão, gheg,
 * explicação, nota]; nas histórias, a narração segue o padrão e as falas trazem as formas gheg. Como o
 * curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em albanês («Gegërishtja», «Toskërishtja», «Kalaja e Rozafës») e em inglês («Gheg
 * Albanian», «Albanian language», consultadas em 10/10/2026).
 */
export const VARIANTS_SQ: LanguageVariant[] = [
  {
    code: 'sq-tosk',
    country: 'ALB',
    kind: 'dialeto',
    speechLocale: 'sq-AL',
    name: 'Albanês padrão (base tosk)',
    flag: '🇦🇱',
    summary:
      'O padrão do curso: o albanês literário, fixado em 1972 a partir do tosk, o grande dialeto do sul da Albânia. É o da escola, dos jornais e da TV na Albânia e no Kosovo.',
    card: {
      id: 'sq-tosk-c1',
      title: 'Uma língua, dois lados do rio',
      emoji: '🇦🇱',
      history:
        'O albanês tem dois grandes dialetos, separados pelo rio Shkumbin, que corta a Albânia ao meio: o gheg, ao norte, e o tosk, ao sul. Os textos mais antigos da língua são em gheg: a fórmula de batismo de Pal Engjëlli (1462) e o “Meshari” de Gjon Buzuku (1555). Por muito tempo os dois conviveram na escrita. Depois da Segunda Guerra, o governo de Enver Hoxha, que era do sul, apoiou o tosk, e em 1972 o Congresso de Ortografia de Tirana fixou a língua literária unificada com base nele, com alguns elementos do gheg. O Kosovo também a adotou. Por isso o padrão que o curso ensina é o tosk, embora cerca de metade dos falantes de albanês fale gheg em casa.',
      culture_tip:
        'Atenção com a cabeça: na Albânia, balançar a cabeça de um lado para o outro muitas vezes quer dizer “sim”, e o aceno para cima e para baixo pode querer dizer “não”. A palavra de honra, a “besa”, é sagrada: quem dá a besa não volta atrás. E o café é ritual: o convite “të pimë një kafe?” (vamos tomar um café?) pode virar uma conversa de duas horas.',
      grammar_why:
        'Três marcas do padrão que mudam no gheg: (1) o “r” entre vogais em palavras onde o gheg mantém o “n” antigo: “verë” (vinho), “atyre” (a eles); (2) o particípio em “-uar”: “punuar” (trabalhado); (3) o futuro com “do të” e o subjuntivo: “do të shkoj” (vou ir), e a falta de um infinitivo de verdade: “për të punuar” (para trabalhar).',
      grammar_examples: [
        ['Ai është në shtëpi.', 'Ele está em casa.'],
        ['Tani do të shkoj në punë.', 'Agora eu vou para o trabalho.'],
        ['Si je? Çfarë po bën?', 'Como você está? O que está fazendo?'],
        ['Kam punuar shumë sot.', 'Trabalhei muito hoje.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── GHEG ─────────────────────────────
  {
    code: 'sq-geg',
    country: 'XKX',
    kind: 'dialeto',
    speechLocale: 'sq-AL',
    name: 'Gheg (norte da Albânia e Kosovo)',
    flag: '🇽🇰',
    summary:
      'O grande dialeto do norte, falado por cerca de 4,1 milhões de pessoas: no norte e no centro da Albânia, em Shkodër e Tirana, e sobretudo no Kosovo, onde é a fala do dia a dia da maioria. Tem vogais nasais, um infinitivo próprio e o “n” antigo onde o padrão pôs “r”.',
    card: {
      id: 'sq-geg-c1',
      title: 'O albanês do norte',
      emoji: '🏔️',
      history:
        'O gheg é o dialeto dos textos mais antigos do albanês: a fórmula de batismo de 1462 e o “Meshari” de Gjon Buzuku, de 1555, o primeiro livro impresso na língua. Em Shkodër floresceu uma literatura rica no começo do século XX: o padre Gjergj Fishta escreveu em gheg o grande poema épico “Lahuta e Malcís” (O alaúde das montanhas), e Shtjefën Gjeçovi registrou o Kanun, o direito costumeiro das montanhas do norte. Em 1972, o padrão unificado ficou com base no tosk, e o gheg saiu da escrita oficial. No Kosovo, o padrão é o da escola e da TV, mas em casa, na rua e nos cafés de Prishtina fala-se gheg.',
      culture_tip:
        'No Kosovo, o cumprimento é “Qysh je?” (como vai?), e não o “Si je?” do padrão; e a pergunta “Çka po bën?” é o “o que você está fazendo?”. A comida de festa é a flija, camadas finas de massa e creme assadas devagar, por horas, debaixo de uma tampa de metal coberta de brasas (o saç). Em Shkodër, a fortaleza de Rozafa guarda uma das lendas mais conhecidas dos Bálcãs: a da mulher emparedada na muralha que pediu para deixar de fora um seio, um olho, uma mão e um pé, para continuar cuidando do filho.',
      grammar_why:
        'O gheg tem uma gramática que o padrão perdeu ou mudou: (1) um infinitivo com “me” + particípio: “me punue” (trabalhar), onde o padrão diz “për të punuar”; (2) um futuro com “kam me”: “kam me shkue” (vou ir), onde o padrão diz “do të shkoj”; (3) particípios curtos em “-ue”: “punue” (padrão: “punuar”); (4) o “n” antigo entre vogais, que no tosk virou “r” (rotacismo): “venë” (vinho, padrão: “verë”), “atyne” (padrão: “atyre”); (5) vogais nasais, escritas com circunflexo: “âsht” (é, padrão: “është”), “bâj” (faço, padrão: “bëj”).',
      grammar_examples: [
        ['Qysh je? Çka po bën?', 'Como vai? O que está fazendo? (padrão: Si je? Çfarë po bën?)'],
        ['Tash kam me shkue n’shpi.', 'Agora vou para casa. (padrão: Tani do të shkoj në shtëpi.)'],
        ['Due me punue.', 'Quero trabalhar. (padrão: Dua të punoj.)'],
        ['Ai âsht nji djalë i mirë.', 'Ele é um bom rapaz. (padrão: Ai është një djalë i mirë.)'],
        ['Kam punue shumë sot.', 'Trabalhei muito hoje. (padrão: Kam punuar.)'],
      ],
      character_guide: [
        ['â, ê, î, ô, û, ŷ', 'o circunflexo marca a vogal nasal', 'âsht, bâj, zâni'],
        ['n', 'entre vogais, onde o padrão tem “r”', 'venë (verë), atyne (atyre)'],
        ['-ue', 'o particípio curto, onde o padrão tem “-uar”', 'punue, shkue, kndue'],
      ],
    },
    pronunciation: [
      'O gheg tem vogais nasais, que o padrão não tem: o “â” de “âsht” (é) soa como um “ã”. Contando as orais, as nasais, as longas e as curtas, são 26 vogais.',
      'O “ë” do fim da palavra quase sempre cai: “shtëpi” encolhe para “shpi”, e muitas palavras perdem uma sílaba.',
      'Onde o padrão tem “r” entre vogais por causa do rotacismo do tosk, o gheg guarda o “n”: “venë” (vinho), “zâni” (a voz).',
      'No nordeste, e no Kosovo, os sons palatais do padrão mudam: o “q” de “qen” (cão) e o “gj” de “gjumë” (sono) saem como “tch” e “dj”.',
      'As vogais longas fazem diferença de sentido, e a fala soa mais cantada que a do sul.',
      'A voz do app lê com a pronúncia do padrão: as formas gheg vão soar como o tosk.',
    ],
    vocab: [
      ['është', 'âsht', 'é (verbo ser)', 'com o “â” nasal'],
      ['një', 'nji', 'um, uma', 'no noroeste também “nja”'],
      ['bëj', 'bâj', 'faço', 'a mesma vogal nasal'],
      ['shtëpi', 'shpi', 'casa', 'com o “ë” que cai'],
      ['tani', 'tash', 'agora', 'a palavra de todo dia no Kosovo'],
      ['si', 'qysh', 'como', '“Qysh je?”: como vai?'],
      ['çfarë', 'çka', 'o quê', '“Çka po bën?”: o que você está fazendo?'],
      ['më', 'mâ', 'mais', '“mâ i madh”: maior'],
      ['verë', 'venë', 'vinho', 'o “n” antigo, que o tosk trocou por “r”'],
      ['atyre', 'atyne', 'a eles, deles', 'a mesma regra'],
      ['punuar', 'punue', 'trabalhado', 'o particípio curto em “-ue”'],
      ['për të punuar', 'me punue', 'trabalhar (infinitivo)', 'o infinitivo do gheg, com “me”'],
      ['do të shkoj', 'kam me shkue', 'vou ir (futuro)', 'o futuro do gheg, com “kam me”'],
      ['Shqipëria', 'Shqypnia', 'a Albânia', 'a forma gheg, a de Fishta e de Shkodër'],
    ],
    stories: [
      {
        id: 'sq-h5',
        variant: 'sq-geg',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Qysh je, Prishtinë?',
        emoji: '☕',
        summary: 'Em Prishtina, a amiga Arta leva Linu para tomar café e almoçar flija na casa da avó, e ele descobre que no Kosovo se fala de um jeito diferente do livro.',
        cultural_context:
          'Prishtina é a capital do Kosovo. A escola e a TV usam o albanês padrão, mas nas ruas e nos cafés fala-se gheg: “Qysh je?” em vez de “Si je?”, “tash” em vez de “tani”, “shpi” em vez de “shtëpi”. A flija, camadas de massa e creme assadas por horas sob brasas, é o prato das festas e dos domingos em família.',
        start: 'start',
        glossary: [
          ['Qysh je?', 'como vai? (padrão: Si je?)'],
          ['Çka?', 'o quê? (padrão: Çfarë?)'],
          ['tash', 'agora (padrão: tani)'],
          ['shpi', 'casa (padrão: shtëpi)'],
          ['âsht', 'é (padrão: është)'],
          ['flija', 'torta de camadas de massa e creme'],
          ['gjyshja', 'a avó'],
        ],
        nodes: {
          start: {
            emoji: '☕',
            text: 'Linu është në Prishtinë. Shoqja e tij Arta e pret në një kafene. “Tungjatjeta, Linu! Qysh je?”',
            translation: 'Linu está em Prishtina. A amiga dele, Arta, espera por ele num café. “Olá, Linu! Como vai?”',
            choices: [
              { text: '“Mirë jam, faleminderit! Po ti?”', translation: '“Estou bem, obrigado! E você?”', next: 'kafe' },
              {
                text: '“Qysh? Nuk e kuptoj.”',
                translation: '“Qysh? Não entendo.”',
                wrong: '“Qysh je?” é o “Si je?” do Kosovo: “como vai?”. A Arta só está cumprimentando o Linu do jeito de lá.',
              },
            ],
          },
          kafe: {
            emoji: '🗣️',
            text: '“Mirë, mirë!” thotë Arta. “Këtu në Kosovë themi ‘qysh’, jo ‘si’. Dhe ‘tash’, jo ‘tani’.” Ata pinë makiato. Pastaj Arta thotë: “Tash kam me shkue n’shpi te gjyshja. Ajo ka bâ flija. A vjen?”',
            translation:
              '“Bem, bem!”, diz a Arta. “Aqui no Kosovo a gente diz ‘qysh’, não ‘si’. E ‘tash’, não ‘tani’.” Eles tomam um macchiato. Depois a Arta diz: “Agora vou para a casa da minha avó. Ela fez flija. Você vem?”',
            choices: [
              { text: '“Po, vij me kënaqësi!”', translation: '“Vou, com prazer!”', next: 'shpi' },
              { text: '“Jo, faleminderit. Jam i lodhur.”', translation: '“Não, obrigado. Estou cansado.”', next: 'final_neutro' },
            ],
          },
          shpi: {
            emoji: '🏠',
            text: 'Gjyshja e Artës është shumë e mirë. Ajo i jep Linut një copë flija: “Hajde, ha! Flija âsht mâ e mira kur âsht e nxehtë.” Linu pyet Artën: “Çka do të thotë ‘âsht’?”',
            translation:
              'A avó da Arta é muito simpática. Ela dá ao Linu um pedaço de flija: “Vem, come! A flija é mais gostosa quando está quente.” Linu pergunta à Arta: “O que quer dizer ‘âsht’?”',
            choices: [
              {
                text: 'Arta thotë: “‘Âsht’ âsht ‘është’!”',
                translation: 'A Arta diz: “‘Âsht’ é ‘është’!”',
                next: 'final_bom',
              },
              {
                text: 'Linu mendon se ‘âsht’ do të thotë ‘nuk ka’.',
                translation: 'Linu acha que ‘âsht’ quer dizer ‘não tem’.',
                wrong: '“Âsht” é o “është” (é) do gheg, com a vogal nasal. A avó disse que a flija é mais gostosa quando está quente.',
              },
            ],
          },
          final_bom: {
            emoji: '🥧',
            text: 'Të gjithë qeshin. Linu ha flija dhe thotë: “Flija âsht shumë e mirë!” Gjyshja qesh: “Bravo! Tash flet si kosovar!”',
            translation: 'Todos riem. Linu come a flija e diz: “A flija é muito boa!” A avó ri: “Muito bem! Agora você fala como um kosovar!”',
            ending: {
              tone: 'bom',
              title: 'Como um kosovar',
              message: 'Você aprendeu o gheg do Kosovo: qysh (como), tash (agora), shpi (casa), âsht (é), mâ (mais) e o futuro “kam me shkue”.',
            },
          },
          final_neutro: {
            emoji: '🛏️',
            text: 'Linu kthehet në hotel. Në mbrëmje, Arta i dërgon një foto: flija e gjyshes. “Herën tjetër ke me ardhë!”',
            translation: 'Linu volta para o hotel. À noite, a Arta manda uma foto: a flija da avó. “Da próxima vez você vem!”',
            ending: {
              tone: 'neutro',
              title: 'A flija fica para a próxima',
              message: 'Descansar também vale, mas a flija da avó é o melhor jeito de ouvir o gheg em casa. Da próxima vez, aceite o convite!',
            },
          },
        },
      },
      {
        id: 'sq-h6',
        variant: 'sq-geg',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Legjenda e Rozafës',
        emoji: '🏰',
        summary: 'Em Shkodër, o senhor Gjon leva Linu até a fortaleza de Rozafa e conta, em gheg, a lenda da mulher que foi emparedada na muralha.',
        cultural_context:
          'Shkodër, no norte da Albânia, é uma das cidades mais antigas do país e o centro da literatura em gheg. No alto de uma colina fica a fortaleza de Rozafa. Segundo a lenda, três irmãos construíam a muralha, mas o que faziam de dia caía à noite; um velho lhes disse que a muralha só ficaria de pé se emparedassem a mulher que levasse o almoço no dia seguinte. Foi Rozafa, a mulher do irmão mais novo.',
        start: 'start',
        glossary: [
          ['kala', 'fortaleza, castelo'],
          ['mur', 'muro, muralha'],
          ['vëlla', 'irmão (gheg: vlla)'],
          ['kam me t’tregue', 'vou te contar (gheg)'],
          ['natën', 'à noite'],
          ['gji', 'seio'],
          ['djalë', 'menino, filho'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: 'Linu është në Shkodër. Zoti Gjon, një burrë i vjetër, e çon te kalaja e Rozafës. “Kjo kala âsht shumë e vjetër,” thotë ai. “Kam me t’tregue nji legjendë.”',
            translation:
              'Linu está em Shkodër. O senhor Gjon, um homem de idade, o leva até a fortaleza de Rozafa. “Esta fortaleza é muito antiga”, diz ele. “Vou te contar uma lenda.”',
            choices: [
              { text: '“Po, ju lutem, më tregoni!”', translation: '“Sim, por favor, me conte!”', next: 'vllaznit' },
              {
                text: 'Linu mendon se zoti Gjon do të shkojë në shtëpi.',
                translation: 'Linu acha que o senhor Gjon vai para casa.',
                wrong: '“Kam me t’tregue” é o futuro gheg de “tregoj” (contar): “vou te contar”. No padrão seria “do të të tregoj”.',
              },
            ],
          },
          vllaznit: {
            emoji: '🧱',
            text: '“Tre vllazën ndërtonin kalanë,” fillon zoti Gjon. “Ditën punonin shumë, por natën muri binte. Nji plak u tha: ‘Muri ka me qëndrue vetëm nëse murosni nji grua.’”',
            translation:
              '“Três irmãos construíam a fortaleza”, começa o senhor Gjon. “De dia eles trabalhavam muito, mas à noite a muralha caía. Um velho lhes disse: ‘A muralha só vai ficar de pé se vocês emparedarem uma mulher.’”',
            choices: [
              { text: '“Dhe çka ndodhi?”', translation: '“E o que aconteceu?”', next: 'rozafa' },
            ],
          },
          rozafa: {
            emoji: '👩‍🍼',
            text: '“Ishte Rozafa, gruaja e vllait mâ të vogël. Ajo kishte nji djalë të vogël. Rozafa tha: ‘Lini jashtë gjirin, që të ushqej djalin, syrin, që ta shoh, dorën, që ta përkëdhel, dhe kambën, që ta tund djepin.’”',
            translation:
              '“Foi a Rozafa, a mulher do irmão mais novo. Ela tinha um filho pequeno. A Rozafa disse: ‘Deixem de fora o meu seio, para eu alimentar o meu filho; o meu olho, para eu vê-lo; a minha mão, para eu acariciá-lo; e o meu pé, para eu balançar o berço.’”',
            choices: [
              {
                text: '“Rozafa donte me u kujdesë për djalin.”',
                translation: '“A Rozafa queria cuidar do filho.”',
                next: 'muri',
              },
              {
                text: '“Rozafa donte me ikë nga kalaja.”',
                translation: '“A Rozafa queria fugir da fortaleza.”',
                wrong: 'Ela não fugiu: aceitou ficar na muralha e só pediu que deixassem de fora o seio, o olho, a mão e o pé, para continuar cuidando do filho.',
              },
            ],
          },
          muri: {
            emoji: '💧',
            text: '“Po,” thotë zoti Gjon. “Edhe sot, në murin e kalasë rrjedh pak ujë i bardhë. Nanat e Shkodrës thonë se âsht qumështi i Rozafës.” Linu shikon murin e vjetër.',
            translation:
              '“Isso”, diz o senhor Gjon. “Até hoje, na muralha da fortaleza escorre um pouco de água esbranquiçada. As mães de Shkodër dizem que é o leite da Rozafa.” Linu olha a muralha antiga.',
            choices: [
              { text: '“Faleminderit, zoti Gjon. Kjo âsht nji legjendë shumë e bukur.”', translation: '“Obrigado, senhor Gjon. Esta é uma lenda muito bonita.”', next: 'final_bom' },
              { text: 'Linu bën nji foto dhe ikën shpejt.', translation: 'Linu tira uma foto e vai embora depressa.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌅',
            text: 'Zoti Gjon qesh: “Ke folë si shkodran: ‘âsht’, ‘nji’!” Ata ulen mbi mur dhe shikojnë liqenin e Shkodrës në perëndim të diellit.',
            translation: 'O senhor Gjon ri: “Você falou como alguém de Shkodër: ‘âsht’, ‘nji’!” Eles se sentam na muralha e olham o lago de Shkodër ao pôr do sol.',
            ending: {
              tone: 'bom',
              title: 'O leite de Rozafa',
              message:
                'Você ouviu a lenda de Rozafa em gheg: o futuro “kam me t’tregue”, o infinitivo “me u kujdesë”, “nji” (um), “âsht” (é), “mâ” (mais) e “vlla” (irmão).',
            },
          },
          final_neutro: {
            emoji: '📸',
            text: 'Linu bën nji foto dhe kthehet në qytet. Në mbrëmje, shikon foton dhe nuk e kujton mirë fundin e legjendës.',
            translation: 'Linu tira uma foto e volta para a cidade. À noite, olha a foto e não lembra bem o fim da lenda.',
            ending: {
              tone: 'neutro',
              title: 'A foto sem a lenda',
              message: 'A fortaleza de Rozafa só faz sentido com a lenda. Volte e escute o senhor Gjon até o fim!',
            },
          },
        },
      },
    ],
  },
];
