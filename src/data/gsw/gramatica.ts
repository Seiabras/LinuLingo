import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do suíço-alemão (dialeto de Zurique) — por enquanto só A1.1 e A1.2 (pacote
 * incompleto). Formas conferidas por busca (dict.leo.org, Wiktionary, cursos de Schweizerdeutsch).
 */
export const GRAMMAR_GSW: GrammarTopic[] = [
  {
    id: 'gsw-g1',
    level: 'A1.1',
    title: 'Pronúncia: o “ch” gutural e o ditongo “üe”',
    emoji: '🔤',
    summary: 'O suíço-alemão usa o alfabeto do alemão padrão, mas com um som gutural próprio e vogais que o alemão escrito não tem.',
    sections: [
      {
        text: 'O “ch” suíço-alemão é mais forte e mais raspado que o “ch” do alemão padrão, e aparece em muito mais palavras — inclusive onde o alemão padrão tem “k”.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ch', 'gutural raspado (como o “j” espanhol, mas mais no fundo)', 'Chind (criança), Chatz (gato)'],
            ['üe', 'ditongo “u” deslizando pra “e”', 'Brüeder (irmão), Mueter (mãe, com “ue”)'],
            ['sch', '“x” de “xícara”', 'Schwöschter (irmã)'],
            ['-e final', 'quase sempre mudo ou muito fraco', 'Chatz (do alemão “Katze”, sem o “e” final)'],
          ],
        },
        examples: [
          ['S’Chind isch chli.', 'A criança é pequena.'],
          ['Ich ha en Brüeder.', 'Tenho um irmão.'],
        ],
      },
    ],
    pitfalls: ['Ler “ch” como o alemão padrão: no suíço-alemão ele é bem mais forte e aparece onde o alemão tem “k” (Chind = Kind).', 'Pronunciar o “-e” final das palavras como no alemão padrão: no dialeto ele quase desaparece.'],
    quiz: [
      { question: 'Como soa o “ch” de “Chatz”?', options: ['Gutural, raspado no fundo da garganta', 'Como “tch” de “tchau”', 'Como “k” normal'], answer: 'Gutural, raspado no fundo da garganta', explanation: 'É um traço marcante do suíço-alemão, sem equivalente direto em português.' },
      { question: 'O que quer dizer “Chind”?', options: ['criança', 'cachorro', 'casa'], answer: 'criança', explanation: 'Vem do alemão “Kind”, com o “k” virando o “ch” gutural típico do dialeto.' },
    ],
  },
  {
    id: 'gsw-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo sii',
    emoji: '🙋',
    summary: 'Sete pronomes e um verbo “sii” (ser/estar) bem diferente do “sein” do alemão padrão.',
    sections: [
      {
        text: 'O suíço-alemão sempre diz o pronome, como o português: “ich bi”, “du bisch”. O verbo “sii” cobre tanto o nosso “ser” quanto o nosso “estar”.',
        table: {
          head: ['Pronome', 'Tradução', 'sii'],
          rows: [
            ['ich', 'eu', 'bi'],
            ['du', 'tu, você', 'bisch'],
            ['er / sie', 'ele / ela', 'isch'],
            ['mir', 'nós', 'sind'],
            ['ir', 'vocês', 'sind'],
            ['si', 'eles, elas', 'sind'],
          ],
        },
        examples: [
          ['Ich bi vo Brasilie.', 'Sou do Brasil.'],
          ['Mir sind Fründe.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Usar as formas do alemão padrão (“bin”, “bist”, “ist”): no suíço-alemão são “bi”, “bisch”, “isch”.'],
    quiz: [
      { question: 'Complete: “Ich ___ vo Züri.”', options: ['bi', 'isch', 'sind'], answer: 'bi', explanation: '“Bi” é a forma de “sii” para “ich”.' },
      { question: 'Como se diz “ele é” em suíço-alemão?', options: ['er isch', 'er ist', 'er bin'], answer: 'er isch', explanation: 'O verbo “sii” muda bastante do “sein” do alemão padrão: “er isch”, não “er ist”.' },
    ],
  },
  {
    id: 'gsw-g3',
    level: 'A1.2',
    title: 'Os artigos reduzidos s’ e d’',
    emoji: '👪',
    summary: 'Antes de um substantivo, “das” vira “s’” e “die” vira “d’” — uma marca sonora do suíço-alemão falado.',
    sections: [
      {
        text: 'O alemão padrão tem três artigos (der, die, das); no suíço-alemão falado, “die” e “das” costumam encolher para “d’” e “s’” quando vêm bem coladas no substantivo seguinte. “Der” (masculino) normalmente vira “de”.',
        table: {
          head: ['Gênero', 'Artigo', 'Exemplo'],
          rows: [
            ['masculino', 'de', 'de Hund (o cachorro)'],
            ['feminino', 'd’', 'd’Chatz (o/a gata)'],
            ['neutro', 's’', 's’Chind (a criança)'],
          ],
        },
        examples: [
          ['D’Chatz isch schwarz.', 'O/a gato/a é preto/a.'],
          ['S’Brot isch frisch.', 'O pão está fresco.'],
        ],
      },
    ],
    pitfalls: ['Usar “das” e “die” inteiros, como no alemão padrão: no suíço-alemão falado eles costumam encolher antes do substantivo.'],
    quiz: [
      { question: 'Como se diz “a criança” (neutro)?', options: ['s’Chind', 'd’Chind', 'de Chind'], answer: 's’Chind', explanation: '“Das” (neutro) encolhe para “s’” antes do substantivo.' },
      { question: 'Qual artigo vai com “Chatz” (gato, feminino)?', options: ['d’', 's’', 'de'], answer: 'd’', explanation: '“Die” (feminino) encolhe para “d’”.' },
    ],
  },
  {
    id: 'gsw-g4',
    level: 'A1.2',
    title: 'O verbo ha e a negação com nöd',
    emoji: '🤲',
    summary: '“Ha” é ter — bem diferente do “haben” do alemão padrão — e “nöd” nega o verbo, sempre depois dele.',
    sections: [
      {
        text: 'O verbo ter muda bastante do alemão padrão. Para negar, “nöd” vem depois do verbo (nunca antes, como o “nicht” do alemão em certas posições): “ich weiss es nöd” (eu não sei).',
        table: {
          head: ['Pronome', 'ha', 'negativo'],
          rows: [
            ['ich', 'ha', 'ha… nöd'],
            ['du', 'häsch', 'häsch… nöd'],
            ['er / sie', 'hät', 'hät… nöd'],
            ['mir', 'händ', 'händ… nöd'],
            ['ir', 'händ', 'händ… nöd'],
            ['si', 'händ', 'händ… nöd'],
          ],
        },
        examples: [
          ['Ich ha en Brüeder.', 'Tenho um irmão.'],
          ['Ich weiss es nöd.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Confundir “ha” (ter) com “sii” (ser/estar): “ich ha en Brüeder” (tenho um irmão) não leva “sii”.', 'Esquecer o “nöd”: a negação precisa dele depois do verbo.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ich weiss es nöd.', 'Ich nöd weiss es.', 'Nöd ich weiss es.'], answer: 'Ich weiss es nöd.', explanation: '“Nöd” vem depois do verbo.' },
      { question: '“Du häsch en Fründ” quer dizer…', options: ['Você tem um amigo.', 'Você é um amigo.', 'Você conhece um amigo.'], answer: 'Você tem um amigo.', explanation: '“Häsch” é a forma de “du” do verbo “ha” (ter).' },
    ],
  },
];
