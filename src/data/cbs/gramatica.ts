import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do huni kuĩ/hãtxa kuĩ — por enquanto só A1.1 e A1.2 (pacote incompleto). Fonte
 * principal: pt.wikipedia.org/wiki/Língua_caxinauá, que cita sobretudo Eliane Camargo, “Fonologia
 * enunciativa da língua Kaxinawá” (dissertação de mestrado, 1991) — ver o cabeçalho de vocabulario.ts
 * para a lista completa de fontes. O artigo da Wikipédia em inglês sobre as línguas pano
 * (en.wikipedia.org/wiki/Panoan_languages) confirma que a evidencialidade é um traço estudado na
 * família (citando um trabalho comparativo sobre o shipibo-konibo), o que dá contexto à distinção
 * modal -kiki/-kiaki do huni kuĩ ensinada aqui.
 */
export const GRAMMAR_CBS: GrammarTopic[] = [
  {
    id: 'cbs-g1',
    level: 'A1.1',
    title: 'Duas séries de pronomes: forma livre × caso ergativo/acusativo',
    emoji: '🙋',
    summary: 'O huni kuĩ tem uma série de pronomes livres e outra que recebe os sufixos de caso -ã (ergativo) e -a (acusativo).',
    sections: [
      {
        text: 'O huni kuĩ distingue duas séries de pronomes pessoais. A primeira (“nominativa”, citada como vocabulário básico deste curso) é usada como forma livre: ɨ (eu), mĩ (tu/você), nũ (nós), mã (vocês). A segunda série (ɨ, mi, nuku, matu — repare que “mi” não leva til, diferente de “mĩ” da primeira série) recebe sufixos de caso: “-ã”, de função ergativa (marca o possuidor de um substantivo, como em “ɨ-ã hiwɨ”, minha casa, e também o sujeito de certos verbos transitivos), e “-a”, de função acusativa (marca o objeto de um verbo transitivo, como em “mi-a”, você/a você).',
        table: {
          head: ['Pessoa', 'Forma livre', 'Com -ã (ergativo/possessivo)', 'Com -a (acusativo)'],
          rows: [
            ['eu', 'ɨ', 'ɨ-ã', 'ɨ-a'],
            ['tu/você', 'mĩ', 'mi-ã', 'mi-a'],
            ['nós', 'nũ', 'nuku-ã', 'nuku-a'],
            ['vocês', 'mã', 'matu-ã', 'matu-a'],
          ],
        },
        examples: [
          ['Ɨ-ã hiwɨ hawɨ̃-rua.', 'Minha casa é bonita.'],
          ['Ɨ̃ mi-a kuʃa mis ki.', 'Eu costumo bater em você. (mi-a: “você”, objeto acusativo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a mesma forma do pronome, como em português: “mĩ” (forma livre) e “mi-ã”/“mi-a” (com sufixo de caso) são a MESMA pessoa gramatical, mas em contextos diferentes.',
      'Esquecer o sufixo “-ã” ao formar uma posse (“minha casa”): sem ele, “ɨ hiwɨ” fica incompleto — o certo é “ɨ-ã hiwɨ”.',
    ],
    quiz: [
      { question: 'Como se diz “minha casa” em huni kuĩ?', options: ['Ɨ-ã hiwɨ.', 'Ɨ hiwɨ.', 'Hiwɨ ɨ.'], answer: 'Ɨ-ã hiwɨ.', explanation: 'O sufixo “-ã” marca a posse/relação ergativa entre o pronome “ɨ” (eu) e o substantivo “hiwɨ” (casa).' },
      { question: 'Qual destas é a forma de “tu/você” na série que recebe os sufixos de caso (sem til)?', options: ['mi', 'mĩ', 'nũ'], answer: 'mi', explanation: '“Mĩ” (com til) é a forma livre; “mi” (sem til) é a forma que recebe “-ã” ou “-a”.' },
    ],
  },
  {
    id: 'cbs-g2',
    level: 'A1.1',
    title: 'Ordem SOV: o objeto antes do verbo',
    emoji: '➡️',
    summary: 'O huni kuĩ segue a ordem Sujeito-Objeto-Verbo: o verbo (ou o predicado) fecha a frase.',
    sections: [
      {
        text: 'No campo sintático, o huni kuĩ segue a ordem SOV (Sujeito-Objeto-Verbo): o verbo vem por último na frase. Em “na mani pi wɨ” (coma esta banana), o objeto “na mani” (esta banana) vem antes do verbo “pi” (comer), que recebe o sufixo imperativo “wɨ”. O mesmo vale para predicados com adjetivo: em “ɨ-ã hiwɨ hawɨ̃-rua” (minha casa é bonita), o sujeito “ɨ-ã hiwɨ” (minha casa) vem antes do predicado “hawɨ̃-rua” (é bonita).',
        examples: [
          ['Na mani pi wɨ.', 'Coma esta banana. (objeto “na mani” + verbo “pi wɨ”)'],
          ['Ɨ-ã hiwɨ hawɨ̃-rua.', 'Minha casa é bonita. (sujeito “ɨ-ã hiwɨ” + predicado “hawɨ̃-rua”)'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o verbo logo depois do sujeito, como em português: no huni kuĩ, o objeto (ou o predicado) vem no meio, e o verbo fecha a frase.',
      'Traduzir palavra por palavra na mesma ordem do português: “coma esta banana” não é “pi na mani”, e sim “na mani pi wɨ”.',
    ],
    quiz: [
      { question: 'Qual é a ordem básica de palavras do huni kuĩ?', options: ['Sujeito-Objeto-Verbo (SOV)', 'Sujeito-Verbo-Objeto (SVO)', 'Verbo-Sujeito-Objeto (VSO)'], answer: 'Sujeito-Objeto-Verbo (SOV)', explanation: 'O verbo fecha a frase, depois do objeto — diferente da ordem SVO do português.' },
      { question: 'Em “na mani pi wɨ” (coma esta banana), o que vem por último?', options: ['O verbo (“pi wɨ”, comer)', 'O objeto (“na mani”, esta banana)', 'O sujeito'], answer: 'O verbo (“pi wɨ”, comer)', explanation: 'O objeto “na mani” vem antes; o verbo fecha a frase, seguindo a ordem SOV.' },
    ],
  },
  {
    id: 'cbs-g3',
    level: 'A1.2',
    title: 'Certeza × relato de terceiros: -kiki e -kiaki',
    emoji: '🗣️',
    summary: 'O verbo huni kuĩ distingue, com sufixos diferentes, uma informação vista/certa de uma informação ouvida de outra pessoa.',
    sections: [
      {
        text: 'O huni kuĩ marca no próprio verbo se quem fala tem certeza direta de uma informação ou se está apenas repassando o que ouviu de outra pessoa — um traço de marcação da fonte da informação que a família pano, de modo geral, é conhecida por gramaticalizar (ver o estudo comparativo sobre evidencialidade no shipibo-konibo, outra língua pano, citado na Wikipédia em inglês). No huni kuĩ especificamente, o sufixo “-kiki” marca uma afirmação direta/certa, enquanto “-kiaki” marca uma informação de segunda mão (“dizem que…”). Exemplo citado: “mɨʃu kiri naʃi şani kiki” (amanhã ele vai tomar banho, dito com certeza) contra “mɨʃu kiri naʃi şani kiaki” (amanhã ele vai tomar banho, segundo dizem).',
        examples: [
          ['Mɨʃu kiri naʃi şani kiki.', 'Amanhã ele vai tomar banho. (eu sei, é certo)'],
          ['Mɨʃu kiri naʃi şani kiaki.', 'Amanhã ele vai tomar banho. (segundo dizem, relato de terceiros)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “-kiki” e “-kiaki” são intercambiáveis: a escolha muda o compromisso de quem fala com a verdade da informação (viu/sabe com certeza × apenas ouviu contar).',
      'Procurar uma palavra separada para “dizem que”, como em português: no huni kuĩ essa marca vem presa ao verbo, pelo sufixo “-kiaki”.',
    ],
    quiz: [
      { question: 'O que marca o sufixo “-kiaki” no verbo huni kuĩ?', options: ['Que a informação foi ouvida de outra pessoa (relato)', 'Que a ação já terminou', 'Que a frase é uma pergunta'], answer: 'Que a informação foi ouvida de outra pessoa (relato)', explanation: '“-kiki” marca uma afirmação direta e certa; “-kiaki” marca um relato de terceiros.' },
      { question: 'Em qual família linguística esse tipo de marcação da fonte da informação (evidencialidade) é um traço estudado e conhecido?', options: ['Pano', 'Tupi-guarani', 'Jê'], answer: 'Pano', explanation: 'A Wikipédia em inglês cita um estudo comparativo sobre evidencialidade no shipibo-konibo, outra língua pano.' },
    ],
  },
  {
    id: 'cbs-g4',
    level: 'A1.2',
    title: 'O demonstrativo “na” e os numerais de base 10',
    emoji: '🔟',
    summary: '“Na” (este/esta) vem antes do substantivo; os numerais de 1 a 10 têm raízes próprias, sem usar a mão como base.',
    sections: [
      {
        text: 'O demonstrativo “na” (este/esta) vem ANTES do substantivo que aponta ou apresenta, como em “na mani” (esta banana), “na kaya” (este rio) e “na ni” (esta árvore). Os numerais do huni kuĩ, de 1 a 10, têm raízes próprias e formam um sistema de base 10: “bɨsti” é a unidade (um) e “nati” nomeia a dezena (dez) — diferente do sistema de outras línguas indígenas (como o baniwa, deste mesmo app, que conta pelas mãos a partir de cinco).',
        table: {
          head: ['Numeral', 'Valor'],
          rows: [
            ['bɨsti', '1'],
            ['rabɨ', '2'],
            ['tsamĩ', '3'],
            ['kɨtaş', '4'],
            ['mɨtsã', '5'],
            ['sĩti', '6'],
            ['kɨkũ', '7'],
            ['bunɨ', '8'],
            ['usũ', '9'],
            ['nati', '10'],
          ],
        },
        examples: [
          ['Na mani.', 'Esta banana.'],
          ['Na kaya.', 'Este rio.'],
          ['Bɨsti, rabɨ, tsamĩ…', 'Um, dois, três…'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o demonstrativo depois do substantivo, como às vezes se faz em português (“a banana esta”): no huni kuĩ, “na” vem sempre antes.',
      'Esperar uma base manual (contar pelas mãos) a partir de cinco: as fontes consultadas não confirmam esse padrão para o huni kuĩ — cada numeral de 1 a 10 tem raiz própria.',
    ],
    quiz: [
      { question: 'Onde fica o demonstrativo “na” (este/esta) em relação ao substantivo?', options: ['Antes do substantivo', 'Depois do substantivo', 'Pode ficar nos dois lugares'], answer: 'Antes do substantivo', explanation: '“Na mani” (esta banana), “na kaya” (este rio): “na” sempre abre o grupo nominal.' },
      { question: 'Qual numeral nomeia a dezena (10) no sistema de base 10 do huni kuĩ?', options: ['Nati', 'Bɨsti', 'Mɨtsã'], answer: 'Nati', explanation: '“Bɨsti” é a unidade (um); “nati” nomeia a dezena (dez), segundo Camargo (1991).' },
    ],
  },
];
