import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ainu — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: Wikipédia
 * em inglês ("Ainu language", "Ainu grammar"), Wikcionário em inglês (verbete por verbete), todas
 * reconferidas em 08/10/2026.
 */
export const GRAMMAR_AIN: GrammarTopic[] = [
  {
    id: 'ain-g1',
    level: 'A1.1',
    title: '“Nós” com ou sem quem ouve',
    emoji: '🙌',
    summary: 'O ainu tem duas palavras pra “nós”: uma que inclui quem está ouvindo, outra que exclui — uma distinção que o português não faz.',
    sections: [
      {
        text: 'Em português, “nós” serve pra tudo. O ainu separa: “ciutari” é “nós”, mas sem contar com quem está ouvindo (só eu e outras pessoas, não você); “anutari” é “nós”, contando com quem ouve (eu, você e talvez outros). “Anutari” também funciona como um “vocês” mais educado, dirigido a quem se quer tratar com respeito.',
        table: {
          head: ['Forma', 'Quem inclui', 'Tradução'],
          rows: [
            ['ciutari', 'eu + outros, SEM você', 'nós (exclusivo)'],
            ['anutari', 'eu + você (+ outros)', 'nós (inclusivo); ou “vocês”, educado'],
          ],
        },
        examples: [
          ['Ciutari, aynu ne.', 'Nós (sem você) somos humanos.'],
          ['Anutari, aynu ne.', 'Nós (com você) somos humanos.'],
        ],
      },
    ],
    pitfalls: ['Traduzir qualquer “nós” do português direto pra “ciutari”: se a pessoa com quem você fala está incluída na ideia de “nós”, o certo é “anutari”.'],
    quiz: [
      { question: '“Ciutari” é “nós”…', options: ['sem incluir quem ouve', 'incluindo quem ouve', 'só no feminino'], answer: 'sem incluir quem ouve', explanation: '“Ciutari” exclui a pessoa com quem se fala; “anutari” inclui.' },
      { question: 'Essa distinção (nós com/sem quem ouve) existe em português?', options: ['Não, o português só tem um “nós”', 'Sim, é igual', 'Só no plural'], answer: 'Não, o português só tem um “nós”', explanation: 'É uma categoria gramatical que o português simplesmente não marca — por isso chama atenção.' },
    ],
  },
  {
    id: 'ain-g2',
    level: 'A1.1',
    title: 'Ordem SOV e o verbo “ne” no final',
    emoji: '📐',
    summary: 'O ainu põe o verbo no final da frase (sujeito-objeto-verbo), e o verbo “ser/estar” (“ne”) também obedece essa regra.',
    sections: [
      {
        text: 'Como o japonês, o ainu é SOV: sujeito, depois objeto, e o verbo sempre no final. Isso vale também pro verbo “ne” (ser, estar, tornar-se), que serve pra apresentar quem é quem: “Kuani, Linu ne” é, literalmente, “Eu, Linu [sou]”. Os modificadores (como adjetivos) também vêm antes do que eles descrevem, nunca depois.',
        examples: [
          ['Kuani, Linu ne.', 'Eu sou o Linu.'],
          ['Ainu ne ruwe ne.', 'Ele é um aynu. (frase de dicionário, com uma partícula extra de ênfase no final)'],
          ['Aynu ek.', 'Uma pessoa chegou. (sujeito + verbo, sem objeto)'],
        ],
      },
    ],
    pitfalls: ['Procurar o verbo no meio da frase, como em português: no ainu ele sempre fecha a frase.'],
    quiz: [
      { question: 'Em “Kuani, Linu ne”, onde fica o verbo “ser”?', options: ['No final da frase', 'No início', 'Não tem verbo'], answer: 'No final da frase', explanation: 'O ainu é SOV: o verbo (aqui, “ne”) sempre vem por último.' },
      { question: 'Qual é a ordem básica do ainu?', options: ['Sujeito-objeto-verbo', 'Sujeito-verbo-objeto', 'Verbo-sujeito-objeto'], answer: 'Sujeito-objeto-verbo', explanation: 'SOV, a mesma ordem básica do japonês (embora as duas línguas não sejam parentes).' },
    ],
  },
  {
    id: 'ain-g3',
    level: 'A1.2',
    title: 'Prefixos de pessoa no verbo',
    emoji: '🔗',
    summary: 'O ainu marca quem faz a ação com um prefixo no próprio verbo — “ku-” é “eu”, “e-” é “você”, e a 3ª pessoa não leva prefixo nenhum.',
    sections: [
      {
        text: 'Em vez de depender só do pronome separado, o ainu prende um prefixo no verbo pra marcar a pessoa: “ku-” (eu), “e-” (você). A 3ª pessoa (ele/ela) não tem prefixo — o verbo sozinho já basta. Esse prefixo aparece mesmo quando o pronome livre (kuani, eani…) também está na frase, como reforço.',
        table: {
          head: ['Pessoa', 'Prefixo no verbo', 'Exemplo'],
          rows: [
            ['eu', 'ku-', 'ku-itak (eu falei)'],
            ['você', 'e-', 'e-itak (você falou)'],
            ['ele/ela', '(nenhum)', 'itak (ele/ela falou)'],
          ],
        },
        examples: [
          ['Ku-itak.', 'Eu falei.'],
          ['Ku-nukar.', 'Eu vi.'],
          ['Kam k-e.', 'Eu como carne. (ku- perde o “u” antes de verbo que começa com vogal)'],
        ],
      },
    ],
    pitfalls: ['Esquecer o prefixo e deixar só o pronome livre: “Kuani itak” sem “ku-” no verbo soa incompleto pra quem fala ainu — o prefixo é a parte obrigatória, o pronome livre é o reforço opcional.'],
    quiz: [
      { question: 'Qual prefixo marca “eu” no verbo?', options: ['ku-', 'e-', 'nenhum'], answer: 'ku-', explanation: '“ku-” marca a 1ª pessoa: “ku-itak”, eu falei.' },
      { question: 'Como se marca a 3ª pessoa (ele/ela) no verbo?', options: ['Sem prefixo nenhum', 'Com “e-”', 'Com “ne-”'], answer: 'Sem prefixo nenhum', explanation: '“Itak”, sozinho, sem prefixo, já é “ele/ela falou”.' },
    ],
  },
  {
    id: 'ain-g4',
    level: 'A1.2',
    title: 'Negação com “somo”, e “pirka” sem precisar de “ser”',
    emoji: '🚫',
    summary: '“Somo” nega o verbo, sempre antes dele; e palavras como “pirka” (bom, bonito) já são verbos de estado, não precisam de “ne” (ser).',
    sections: [
      {
        text: 'A negação do ainu é mais simples que a de outras línguas: só o advérbio “somo”, sempre antes do verbo. E uma armadilha pro português: “pirka” (bom, bonito, agradável) já é, ele mesmo, um verbo — não um adjetivo que precisa de “ser”. “Wakka pirka” já quer dizer “a água é boa”, sem “ne” nenhum.',
        examples: [
          ['Somo ku-nukar.', 'Eu não vi.'],
          ['Wakka pirka.', 'A água é boa.'],
          ['Seta isam.', 'Não tem cachorro. / O cachorro não existe aqui.'],
        ],
      },
    ],
    pitfalls: ['Colocar “ne” depois de “pirka”: “wakka pirka ne” duplica o verbo — “pirka” já é o predicado completo, sozinho.'],
    quiz: [
      { question: 'Onde fica “somo” na frase?', options: ['Antes do verbo', 'Depois do verbo', 'No início da frase, sempre'], answer: 'Antes do verbo', explanation: '“Somo” é um advérbio de negação, e vem imediatamente antes do verbo que ele nega.' },
      { question: 'Como se diz “a água é boa”?', options: ['Wakka pirka.', 'Wakka pirka ne.', 'Wakka ne pirka.'], answer: 'Wakka pirka.', explanation: '“Pirka” já é um verbo de estado — não precisa do verbo “ne” (ser) junto.' },
    ],
  },
];
