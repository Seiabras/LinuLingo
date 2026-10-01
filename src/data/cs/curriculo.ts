import type { UnitSeed } from '../types';

/**
 * Trilha do tcheco: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_CS: UnitSeed[] = [
  {
    id: 'cs-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj! První kroky',
    emoji: '👋',
    card: {
      id: 'cs-c1',
      title: 'A língua que inventou o háček',
      emoji: '🇨🇿',
      history:
        'O tcheco é uma língua eslava ocidental, tão próxima do eslovaco que os dois povos se entendem sem estudar. Na Idade Média ele se escrevia com letras latinas combinadas de muitos jeitos. No começo do século XV, um tratado em latim sobre a ortografia tcheca, atribuído ao reformador religioso Jan Hus, propôs trocar essas combinações por sinais sobre as letras. Dessa ideia nasceram o “háček” (č, š, ž, ř) e a “čárka” (á, é, í), que depois foram adotados pelo eslovaco, pelo esloveno, pelo croata, pelo lituano e pelo letão. Hoje o tcheco é a língua oficial da República Tcheca e uma das línguas oficiais da União Europeia.',
      culture_tip:
        'Ao entrar numa loja, num elevador ou num consultório, os tchecos dizem “Dobrý den” a todos. “Ahoj” serve para oi e para tchau entre amigos. Com desconhecidos, usa-se “vy” com o verbo no plural, mesmo falando com uma pessoa só: “Jak se máte?” (Como vai o senhor?). Passar de “vy” para “ty” é quase um ritual, e costuma partir da pessoa mais velha.',
      grammar_why:
        'O tcheco não tem artigos: “pes” é “o cachorro” ou “um cachorro”. A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair: “jsem” já é “eu sou”. O nome se diz com um verbo reflexivo, como em português: “jmenuji se Anna” (eu me chamo Anna).',
      grammar_examples: [
        ['Ahoj! Jmenuji se Anna.', 'Oi! Eu me chamo Anna.'],
        ['Jak se jmenuješ?', 'Como você se chama?'],
        ['On je z Brna, ona je z Prahy.', 'Ele é de Brno, ela é de Praga.'],
        ['Dobře, děkuji. A ty?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ř', 'o som mais famoso do tcheco: um “r” vibrado e um “j” ao mesmo tempo', 'tři (três), středa (quarta)'],
        ['č / š / ž', '“tch” de “tchau” / “ch” de “chá” / “j” de “já”', 'černý, šest, žena'],
        ['c', '“ts” de “tsunami”', 'co (o que)'],
        ['ch', '“rr” aspirado, como o “r” de “rato” no Rio', 'chléb (pão)'],
        ['h', '“h” com voz, como um “rr” suave', 'ahoj'],
        ['ě', 'depois de d, t, n soa “ie” molhado; depois de b, p, v, f, “ié”', 'děkuji, pět (cinco)'],
        ['á, é, í, ó, ú, ů, ý', 'o acento agudo (čárka) e o “ů” marcam vogal longa, não tônica', 'máma, dům (casa)'],
        ['acento', 'a tônica cai sempre na primeira sílaba', 'DĚ-ku-ji, KA-ma-rád'],
      ],
    },
    lessons: [
      {
        id: 'cs-u1-l1',
        title: 'Ahoj, děkuji, na shledanou!',
        kind: 'licao',
        words: ['ahoj', 'dobrý den', 'dobrý večer', 'dobrou noc', 'na shledanou', 'děkuji'],
        cloze: [
          { sentence: '___, Evo! Jak se máš?', answer: 'Ahoj', options: ['Ahoj', 'Dobrou noc', 'Děkuji'], translation: 'Oi, Eva! Como vai?' },
          { sentence: 'Je pozdě. ___!', answer: 'Dobrou noc', options: ['Dobrou noc', 'Dobrý den', 'Děkuji'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ moc!', answer: 'Děkuji', options: ['Děkuji', 'Ahoj', 'Na shledanou'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ahoj! Jak se máš?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobře, děkuji! A ty?', 'dobře', 'děkuji', 'děkuju'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobře, děkuji! A ty?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em tcheco: um de dia (“Dobrý den…”), um à noite (“Dobrý večer…”) e uma despedida (“Na shledanou” ou “Dobrou noc”).',
      },
      {
        id: 'cs-u1-l2',
        title: 'Já, ty, on, ona',
        kind: 'licao',
        words: ['já', 'ty', 'on', 'ona', 'jmenovat se', 'jméno'],
        cloze: [
          { sentence: '___ se jmenuji Eva.', answer: 'Já', options: ['Já', 'Ty', 'On'], translation: 'Eu me chamo Eva.' },
          { sentence: 'A ___? Jak se jmenuješ?', answer: 'ty', options: ['ty', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je z Brna. To je můj bratr.', answer: 'On', options: ['On', 'Ona', 'Já'], translation: 'Ele é de Brno. É o meu irmão.' },
        ],
        voice: {
          bot: 'Ahoj! Jak se jmenuješ?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Jmenuji se Ana. A ty?', 'jmenuji se', 'jmenuju se', 'a ty'],
          hint: 'Diga o seu nome com “Jmenuji se…” e devolva a pergunta com “A ty?”.',
        },
        communityPrompt: 'Apresente-se em tcheco: diga o seu nome com “Jmenuji se…” e pergunte o nome de alguém com “Jak se jmenuješ?”.',
      },
      {
        id: 'cs-u1-l3',
        title: 'Test: první kroky',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ahoj! Jmenuji se Petr. Jak se jmenuješ a odkud jsi?',
          botTranslation: 'Oi! Eu me chamo Petr. Como você se chama e de onde você é?',
          expected: ['Ahoj! Jmenuji se Lucie a jsem ze São Paula.', 'jmenuji se', 'jsem z', 'ahoj'],
          hint: 'Devolva o cumprimento (“Ahoj!”), diga o nome com “Jmenuji se…” e a cidade com “Jsem z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Jmenuji se…”, cidade com “Jsem z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'cs-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina a domov',
    emoji: '👪',
    card: {
      id: 'cs-c2',
      title: 'Três gêneros, “můj / moje” e o “ne-” grudado',
      emoji: '🧭',
      history:
        'Nos séculos XVII e XVIII, o alemão tomou conta da administração e das cidades da Boêmia, e o tcheco ficou sobretudo no campo. A partir do fim do século XVIII, um movimento chamado “renascimento nacional” recuperou a língua escrita: Josef Jungmann publicou, entre 1834 e 1839, um grande dicionário tcheco-alemão que fixou milhares de palavras. O tcheco de hoje tem sete casos: a terminação muda conforme a função na frase, como em “jsem z Prahy” (sou de Praga), com o genitivo de “Praha”.',
      culture_tip:
        'O calendário tcheco traz um nome para cada dia do ano, e muita gente comemora esse “svátek” (dia do nome) quase como um segundo aniversário, com flores e parabéns no trabalho.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (dům, bratr), -a → feminino (máma, voda), -o → neutro (mléko, víno). O possessivo concorda: “můj bratr”, “moje sestra”, “moje mléko”. Para negar, o “ne-” se escreve grudado no verbo: “vím” (sei) → “nevím” (não sei).',
      grammar_examples: [
        ['Moje rodina je velká.', 'A minha família é grande.'],
        ['Mám bratra a sestru.', 'Tenho um irmão e uma irmã.'],
        ['Mléko je bílé.', 'O leite é branco.'],
        ['Nevím.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -u', 'depois de “mám” (tenho), a palavra feminina muda: é o acusativo', 'sestra → mám sestru'],
        ['ne-', 'a negação se escreve junto com o verbo', 'nemám (não tenho), nejsem (não sou)'],
      ],
    },
    lessons: [
      {
        id: 'cs-u2-l1',
        title: 'Moje rodina',
        kind: 'licao',
        words: ['rodina', 'máma', 'táta', 'bratr', 'sestra', 'mít'],
        cloze: [
          { sentence: 'Moje ___ se jmenuje Eva.', answer: 'máma', options: ['máma', 'táta', 'bratr'], translation: 'A minha mãe se chama Eva.' },
          { sentence: 'Já ___ bratra a sestru.', answer: 'mám', options: ['mám', 'jsem', 'jdu'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Můj ___ je z Brna.', answer: 'táta', options: ['táta', 'sestra', 'máma'], translation: 'O meu pai é de Brno.' },
        ],
        voice: {
          bot: 'Máš bratra nebo sestru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Ano, mám bratra a sestru.', 'mám', 'bratra', 'sestru'],
          hint: 'Responda com “Ano, mám…” ou “Ne, nemám…”.',
        },
        communityPrompt: 'Descreva a sua família em tcheco: se você tem irmão (bratr) ou irmã (sestra) e como se chamam os seus pais (“Moje máma se jmenuje…”).',
      },
      {
        id: 'cs-u2-l2',
        title: 'Doma',
        kind: 'licao',
        words: ['dům', 'voda', 'chléb', 'mléko', 'sýr', 'mít rád'],
        cloze: [
          { sentence: 'Můj ___ je malý.', answer: 'dům', options: ['dům', 'voda', 'mléko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Piju ___.', answer: 'vodu', options: ['vodu', 'chléb', 'sýr'], translation: 'Eu bebo água.' },
          { sentence: 'Jím chléb a ___.', answer: 'sýr', options: ['sýr', 'vodu', 'mléko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Co jíš k snídani?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jím chléb a sýr.', 'jím', 'chléb', 'sýr'],
          hint: 'Diga o que come com “Jím…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jím…” e “Piju…”.',
      },
      {
        id: 'cs-u2-l3',
        title: 'Test: rodina a domov',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Povídej o rodině: máš bratra nebo sestru?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Ano, mám sestru. Jmenuje se Marie.', 'mám', 'jmenuje se'],
          hint: 'Diga se tem irmãos (“mám…”) e o nome deles (“jmenuje se…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mám”, “jmenuje se” e “je”.',
      },
    ],
  },
];
