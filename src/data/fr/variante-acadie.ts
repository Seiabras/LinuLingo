import type { LanguageVariant } from '../types';
import { toIpaFr } from '@/services/ipa-fr';

/**
 * O francês acadiano, dialeto completo (decisão do dono, 09/10/2026): é outra comunidade, com
 * história própria, e não um sotaque do Quebec. Vocabulário no formato [francês padrão, acadiano,
 * explicação, nota]; nas histórias, o texto está no francês de lá e a tradução em português.
 *
 * Fontes: Wikipédia em francês («Français acadien», consultada em 09/10/2026) e o que ela cita:
 * Louise Péronnet («Le français acadien»), Ruth King («Acadian French in Time and Space», 2013), Yves
 * Cormier («Dictionnaire du français acadien», 1999), Pascal Poirier («Le Glossaire acadien»).
 */
export const VARIANT_FR_ACADIE: LanguageVariant = {
  code: 'fr-acadie',
  country: 'CAN',
  kind: 'dialeto',
  speechLocale: 'fr-CA',
  ipa: (t) => toIpaFr(t),
  name: 'Francês da Acádia',
  flag: '⭐',
  summary:
    'O francês dos acadianos do leste do Canadá: Novo Brunswick, Nova Escócia e Ilha do Príncipe Eduardo. Guarda formas que a França abandonou há séculos (“je parlons”, “asteure”) e, em Moncton, mistura-se com o inglês no chiac.',
  card: {
    id: 'fr-acadie-c1',
    title: 'Asteure, en Acadie',
    emoji: '⭐',
    history:
      'A Acádia foi a primeira colônia francesa da América do Norte, fundada em 1604, com colonos vindos sobretudo do oeste da França (Poitou, Aunis, Saintonge). Em 1755, os britânicos expulsaram os acadianos das suas terras e os espalharam pelas colônias inglesas, pela França e pelas Antilhas: é o “Grand Dérangement”. Parte deles voltou para o atual Novo Brunswick, e outra parte chegou à Luisiana, onde os “cadiens” deram origem aos cajuns. Por ter vivido separado do Quebec e da França, o francês acadiano guardou palavras e conjugações antigas, algumas do poitevin e do saintongeais. O Novo Brunswick é desde 1969 a única província oficialmente bilíngue do Canadá.',
    culture_tip:
      'A Acádia não é um país, mas tem bandeira, hino e festa nacional: a bandeira é a tricolor francesa com uma estrela amarela, adotada em 1884, e no dia 15 de agosto, a Fête nationale de l’Acadie, as cidades fazem o “tintamarre”, um desfile em que todo mundo sai à rua fazendo barulho com panelas, cornetas e apitos, para mostrar que os acadianos continuam ali. A escritora Antonine Maillet, autora de “La Sagouine”, ganhou o Prêmio Goncourt em 1979 com “Pélagie-la-Charrette”.',
    grammar_why:
      'Duas marcas antigas chamam atenção. Na primeira pessoa do plural, usa-se “je” com o verbo em “-ons”: “je parlons” (nós falamos), “j’avons” (nós temos). Na terceira do plural, a terminação se pronuncia: “ils parlont” (eles falam), onde o francês padrão diz “ils parlent”, com o final mudo. O estudo de Ruth King (2013) mostra que essas formas vêm do francês falado no oeste da França no século XVII. A negação usa muitas vezes “point” no lugar de “pas”, e “rinque” (de “rien que”) quer dizer “só”. No sudeste do Novo Brunswick, o chiac mistura o francês acadiano com o inglês, com palavras como “right” para intensificar: “c’est right beau” (é muito bonito).',
    grammar_examples: [
      ['Je parlons français à la maison.', 'Nós falamos francês em casa.'],
      ['Ils parlont trop vite.', 'Eles falam rápido demais.'],
      ['Asteure, faut y aller.', 'Agora, tem que ir.'],
      ['Espère-moi icitte !', 'Me espera aqui!'],
      ["J'ai rinque deux piasses.", 'Só tenho dois dólares.'],
    ],
    character_guide: null,
  },
  pronunciation: [
    'Antes de “e” e “i”, o “k” vira [tʃ] e o “g” vira [dʒ]: “quelqu’un” soa “tchelqu’un”, “queue” soa “tcheue”, “bon Dieu” soa “bon Djeu”. Esse traço explica a palavra “cajun”, que vem de “acadien”.',
    'O “o” vira “ou” em muitas palavras (o “ouïsme”): “comme” soa “coume”, “homme” soa “houme”, “chose” soa “chouse”.',
    'O “oi” soa “wè” no sudeste do Novo Brunswick: “je vois” soa “j’wè”, “boire” soa “bwère”. E “lait” e “poulet” terminam em “é”.',
    '“Re” vira “er” em várias palavras: “grenouille” soa “guernouille”, “breloque” soa “berloque”.',
    'O “a” no fim da sílaba soa quase “ó”, como no Quebec: “pas” soa [pɔ], “là” soa [lɔ].',
  ],
  vocab: [
    ['maintenant', 'asteure', 'agora', 'de “à cette heure”'],
    ['ici', 'icitte', 'aqui'],
    ['attendre (quelqu’un)', 'espérer', 'esperar alguém', 'na França, “espérer” é só ter esperança'],
    ['pas (négation)', 'point', 'não'],
    ['nous parlons', 'je parlons', 'nós falamos'],
    ['ils parlent', 'ils parlont', 'eles falam', 'a terminação se pronuncia'],
    ['seulement', 'rinque', 'só, somente', 'de “rien que”'],
    ['crabe', 'chancre', 'caranguejo'],
    ['écureuil', 'écureau', 'esquilo'],
    ['loup-garou', 'galipote', 'lobisomem', 'do poitevin e do saintongeais'],
    ['grenouille', 'guernouille', 'rã'],
    ['garer (la voiture)', 'parker', 'estacionar', 'do inglês “park”, no chiac'],
    ['freiner', 'braker', 'frear', 'do inglês “brake”'],
    ['soixante-dix', 'septante', 'setenta', 'em Pubnico, na Nova Escócia, como na Suíça'],
  ],
  stories: [
    {
      id: 'fr-acadie-h1',
      variant: 'fr-acadie',
      level: 'A2.2',
      cefr: 'A2',
      title: 'Tintamarre à Caraquet',
      emoji: '📯',
      summary: 'No dia 15 de agosto, em Caraquet, no Novo Brunswick, a amiga Émilie leva o Linu ao tintamarre, a festa barulhenta da Acádia.',
      cultural_context:
        'Caraquet, na Península Acadiana do Novo Brunswick, é uma das capitais culturais da Acádia. No dia 15 de agosto, festa nacional acadiana, milhares de pessoas saem às ruas no tintamarre, fazendo barulho com panelas, cornetas e apitos, vestidas de azul, branco, vermelho e amarelo, as cores da bandeira acadiana.',
      start: 'start',
      glossary: [
        ['asteure', 'agora'],
        ['espère-moi', 'me espera'],
        ['icitte', 'aqui'],
        ['je sons', 'nós somos (acadiano)'],
        ['tintamarre', 'desfile barulhento do 15 de agosto'],
      ],
      nodes: {
        start: {
          emoji: '⭐',
          text: 'Émilie arrive avec deux casseroles. « Asteure, c’est le tintamarre ! Prends ça, pis fais du bruit ! Espère-moi icitte, je vas chercher les drapeaux. »',
          translation: 'Émilie chega com duas panelas. “Agora é o tintamarre! Pega isso e faz barulho! Me espera aqui, vou buscar as bandeiras.”',
          choices: [
            { text: 'Linu attend Émilie avec les casseroles.', translation: 'Linu espera a Émilie com as panelas.', next: 'drapeau' },
            {
              text: 'Linu acha que “espère-moi” quer dizer “tenha esperança em mim”.',
              translation: 'Linu acha que “espère-moi” quer dizer “tenha esperança em mim”.',
              wrong: 'Na Acádia, “espérer” quer dizer esperar alguém, como em português. A Émilie só pediu: “me espera aqui!”',
            },
          ],
        },
        drapeau: {
          emoji: '🏳️',
          text: 'Émilie revient avec un drapeau bleu, blanc et rouge, avec une étoile jaune. « C’est le drapeau acadien. L’étoile, c’est Stella Maris, l’étoile de la mer. »',
          translation: 'Émilie volta com uma bandeira azul, branca e vermelha, com uma estrela amarela. “É a bandeira acadiana. A estrela é a Stella Maris, a estrela do mar.”',
          choices: [{ text: 'Ils vont dans la rue principale.', translation: 'Vão para a rua principal.', next: 'rue' }],
        },
        rue: {
          emoji: '📯',
          text: 'À six heures, toute la ville fait du bruit en même temps : des cornes, des sifflets, des casseroles, des klaxons. « Je sons encore là ! », crie Émilie.',
          translation: 'Às seis horas, a cidade inteira faz barulho ao mesmo tempo: cornetas, apitos, panelas, buzinas. “Nós ainda estamos aqui!”, grita Émilie.',
          choices: [
            { text: 'Linu tape sur sa casserole de toutes ses forces.', translation: 'Linu bate na panela com toda a força.', next: 'final_bruit' },
            { text: 'Linu se bouche les oreilles.', translation: 'Linu tapa os ouvidos.', next: 'oreilles' },
          ],
        },
        oreilles: {
          emoji: '🙉',
          text: 'Émilie rit : « Le tintamarre, c’est pour dire au monde que les Acadiens sont toujours là, après le Grand Dérangement. Faut faire du bruit ! »',
          translation: 'Émilie ri: “O tintamarre é para dizer ao mundo que os acadianos continuam aqui, depois do Grand Dérangement. Tem que fazer barulho!”',
          choices: [
            { text: 'Linu tape enfin sur sa casserole.', translation: 'Linu enfim bate na panela.', next: 'final_bruit' },
            {
              text: 'Linu conclui que o tintamarre é uma reclamação dos vizinhos.',
              translation: 'Linu conclui que o tintamarre é uma reclamação dos vizinhos.',
              wrong: 'É o contrário: o tintamarre é uma festa de orgulho. O barulho mostra que os acadianos sobreviveram à deportação de 1755.',
            },
          ],
        },
        final_bruit: {
          emoji: '🎉',
          text: 'Linu fait autant de bruit que tout le monde. À la fin, Émilie l’embrasse : « T’es un vrai Acadien asteure ! »',
          translation: 'Linu faz tanto barulho quanto todo mundo. No fim, Émilie o abraça: “Agora você é um acadiano de verdade!”',
          ending: {
            tone: 'bom',
            title: 'Je sons encore là !',
            message: 'Você conheceu o tintamarre, a bandeira acadiana e palavras como “asteure”, “icitte” e “espérer”.',
          },
        },
      },
    },
    {
      id: 'fr-acadie-h2',
      variant: 'fr-acadie',
      level: 'B1.2',
      cefr: 'B1',
      title: 'Du chiac à Moncton',
      emoji: '🗣️',
      summary: 'Em Moncton, o estudante Luc mostra ao Linu o chiac, a mistura de francês acadiano e inglês, e os dois visitam o Pays de la Sagouine, em Bouctouche.',
      cultural_context:
        'Moncton, no sudeste do Novo Brunswick, é uma cidade bilíngue e sede da Universidade de Moncton, a maior universidade francófona fora do Quebec no Canadá. Ali se fala o chiac, que mistura o francês acadiano com o inglês. Em Bouctouche, o Pays de la Sagouine recria a aldeia da personagem de Antonine Maillet, a escritora acadiana que ganhou o Prêmio Goncourt em 1979.',
      start: 'start',
      glossary: [
        ['c’est right beau', 'é muito bonito (chiac)'],
        ['parker', 'estacionar'],
        ['rinque', 'só, somente'],
        ['asteure', 'agora'],
        ['la Sagouine', 'personagem de Antonine Maillet'],
      ],
      nodes: {
        start: {
          emoji: '🎓',
          text: 'Luc attend Linu devant l’université. « Hey, Linu ! J’ai parké mon char juste là. On s’en va à Bouctouche, c’est right beau là-bas. »',
          translation: 'Luc espera o Linu na frente da universidade. “Ei, Linu! Estacionei o carro ali. Vamos a Bouctouche, é muito bonito lá.”',
          choices: [
            { text: '« Allons-y ! »', translation: '“Vamos!”', next: 'route' },
            {
              text: 'Linu entende que o Luc estacionou um carro de guerra.',
              translation: 'Linu entende que o Luc estacionou um carro de guerra.',
              wrong: 'No Canadá francófono, “char” é o carro comum, e “parker” é estacionar, do inglês “park”. Nada de tanque de guerra!',
            },
          ],
        },
        route: {
          emoji: '🚗',
          text: 'Dans l’auto, Luc explique : « Le chiac, c’est notre manière de parler, moitié français, moitié anglais. Mes grands-parents parlaient rinque français, mais nous autres, on a grandi avec les deux. »',
          translation: 'No carro, Luc explica: “O chiac é o nosso jeito de falar, metade francês, metade inglês. Meus avós só falavam francês, mas nós crescemos com as duas línguas.”',
          choices: [
            { text: 'Linu demande si le chiac est mal vu.', translation: 'Linu pergunta se o chiac é malvisto.', next: 'avis' },
            { text: 'Linu écoute la radio acadienne.', translation: 'Linu ouve a rádio acadiana.', next: 'sagouine' },
          ],
        },
        avis: {
          emoji: '🤔',
          text: '« Y’en a qui disent que c’est du mauvais français », répond Luc. « Mais asteure, des chanteurs et des écrivains l’utilisent avec fierté. C’est notre identité. »',
          translation: '“Tem gente que diz que é francês ruim”, responde Luc. “Mas agora cantores e escritores usam o chiac com orgulho. É a nossa identidade.”',
          choices: [{ text: 'Ils arrivent à Bouctouche.', translation: 'Chegam a Bouctouche.', next: 'sagouine' }],
        },
        sagouine: {
          emoji: '🏝️',
          text: 'Au Pays de la Sagouine, une actrice joue la Sagouine, une vieille femme de ménage qui parle en acadien ancien. Elle dit : « Je sons des pauvres, mais je sons fiers. »',
          translation: 'No Pays de la Sagouine, uma atriz interpreta a Sagouine, uma velha faxineira que fala o acadiano antigo. Ela diz: “Nós somos pobres, mas somos orgulhosos.”',
          choices: [
            { text: 'Linu reconnaît le « je sons » du tintamarre.', translation: 'Linu reconhece o “je sons” do tintamarre.', next: 'final_bon' },
            {
              text: 'Linu acha que “je sons” é um erro da atriz.',
              translation: 'Linu acha que “je sons” é um erro da atriz.',
              wrong: 'Não é erro: no francês acadiano, “je” com o verbo em “-ons” quer dizer “nós”. “Je sons” é “nós somos”.',
            },
            { text: 'Linu préfère aller voir la mer.', translation: 'Linu prefere ir ver o mar.', next: 'final_mer' },
          ],
        },
        final_bon: {
          emoji: '📚',
          text: 'Luc lui offre un livre d’Antonine Maillet. « Elle a gagné le Goncourt en 1979. La première écrivaine hors d’Europe à le gagner ! » Linu le met dans son sac comme un trésor.',
          translation: 'Luc dá a ele um livro de Antonine Maillet. “Ela ganhou o Goncourt em 1979. A primeira escritora de fora da Europa a ganhar!” Linu guarda o livro na mochila como um tesouro.',
          ending: {
            tone: 'bom',
            title: 'Je sons fiers',
            message: 'Você conheceu o chiac de Moncton, a Sagouine de Antonine Maillet e a conjugação acadiana “je sons”.',
          },
        },
        final_mer: {
          emoji: '🌊',
          text: 'Ils marchent sur la passerelle au-dessus de la dune. Le vent est froid, et Linu, pingouin heureux, trouve que la mer d’Acadie est parfaite.',
          translation: 'Andam pela passarela sobre a duna. O vento é frio, e o Linu, pinguim feliz, acha o mar da Acádia perfeito.',
          ending: {
            tone: 'neutro',
            title: 'Le vent d’Acadie',
            message: 'O mar foi lindo; a história da Sagouine fica para outra visita.',
          },
        },
      },
    },
  ],
};
