import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tagalo — por enquanto só A1.1 e A1.2 (pacote novo e incompleto).
 *
 * Fontes: en.wikipedia.org/wiki/Tagalog_grammar, en.wikipedia.org/wiki/Tagalog_phonology,
 * en.wiktionary.org (verbetes citados em vocabulario.ts) e omniglot.com/language/phrases/tagalog.php.
 * O tópico tl-g3 (ang/ng/sa e o foco do verbo) é só uma introdução ao sistema de alinhamento
 * austronésio — o mais marcante do tagalo, mas também o mais complexo: a lista completa de afixos de
 * foco (ator, paciente, locativo, benefactivo, instrumental…) fica para níveis mais avançados.
 */
export const GRAMMAR_TL: GrammarTopic[] = [
  {
    id: 'tl-g1',
    level: 'A1.1',
    title: 'Pronúncia: “ng”, o glottal stop e o acento',
    emoji: '🔤',
    summary: 'O tagalo tem só 5 vogais e se escreve de um jeito bem regular, mas “ng” é um som só, e um “travamento” na garganta (glottal stop) pode mudar o sentido da palavra.',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['a, e, i, o, u', 'as 5 vogais do tagalo — parecidas com as do português', 'araw (sol/dia), isda (peixe)'],
            ['ng', 'som nasal único, /ŋ/, como o “ng” de “sing” em inglês — nunca “n” e “g” separados', 'magandang (de “maganda” + o ligante -ng)'],
            ["' (glottal stop)", 'um travamento rápido na garganta entre duas vogais ou no fim da palavra — não tem letra própria na escrita comum, só aparece marcado nos dicionários com acento', 'hindî [hinˈdiʔ] (não), nas fontes consultadas'],
          ],
        },
        text: 'O tagalo se lê quase sempre como se escreve — mas duas coisas não aparecem na ortografia do dia a dia: o glottal stop (uma parada da voz na garganta, como a pausa de “uh-oh” em inglês) e o acento tônico, que podem mudar o sentido da palavra. Os dicionários marcam os dois com acentos (á, à, â) só para ensinar a pronúncia — na escrita comum, essas marcas não aparecem.',
      },
    ],
    pitfalls: [
      'Ler “ng” como as letras “n” e “g” separadas: no tagalo é um som nasal só, /ŋ/.',
      'Ignorar o glottal stop e o acento tônico por não aparecerem escritos no dia a dia: eles existem na fala e podem mudar o sentido, mesmo sem marca na ortografia comum.',
    ],
    quiz: [
      {
        question: 'Como soa “ng” em tagalo?',
        options: ['um som nasal só, /ŋ/', '“n” e “g” separados', 'como o “nh” do português'],
        answer: 'um som nasal só, /ŋ/',
        explanation: '“Ng” é sempre um único som nasal em tagalo, nunca duas letras separadas.',
      },
    ],
  },
  {
    id: 'tl-g2',
    level: 'A1.1',
    title: 'Ako, ikaw, siya — e os marcadores po / opo',
    emoji: '🙏',
    summary: 'Os pronomes do tagalo não marcam gênero (“siya” é “ele” ou “ela”) e distinguem dois “nós”: um que inclui quem ouve (“tayo”) e outro que não (“kami”). E “po”/“opo” marcam respeito, sem equivalente direto em português.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ako', 'eu'],
            ['ikaw (ka)', 'você'],
            ['siya', 'ele / ela'],
            ['tayo', 'nós (com quem ouve)'],
            ['kami', 'nós (sem quem ouve)'],
            ['sila', 'eles / elas'],
          ],
        },
        text: '“Siya” serve tanto para “ele” quanto para “ela” — o tagalo não marca gênero gramatical nem nos pronomes nem nos substantivos. E, como em outras línguas austronésias deste app (o indonésio, por exemplo), existem dois “nós”: “tayo” inclui a pessoa com quem você fala, “kami” não inclui. É por isso que o convite “Kain tayo!” (Vamos comer!, lit. “coma nós”) soa natural: quem convida já se inclui no grupo que vai comer, junto com quem ouve.',
        examples: [
          ['Kain tayo!', 'Vamos comer! (convite: “nós”, incluindo quem ouve)'],
          ['Mabuti kami.', 'Nós (sem você) estamos bem.'],
        ],
      },
      {
        heading: 'Po e opo: respeito sem “senhor”/“senhora”',
        text: 'O tagalo não tem um pronome formal como o “você”/“tu” do português. Em vez disso, acrescenta-se a partícula “po” em quase qualquer frase para mostrar respeito a quem é mais velho ou desconhecido — sem mudar o verbo nem o pronome. “Opo” é o “sim” respeitoso (união de “oo”, sim, com “po”).',
        examples: [
          ['Salamat po!', 'Obrigado! (com respeito)'],
          ['Opo, salamat po.', 'Sim, obrigado. (com respeito, duas vezes)'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir “siya” sempre como “ele”: pode ser “ele” OU “ela”, sem distinção de gênero.',
      'Confundir “tayo” e “kami”: “tayo” inclui quem ouve, “kami” não.',
      'Procurar um pronome formal tipo “você”/“tu”: o tagalo marca respeito com a partícula “po”, não trocando o pronome.',
    ],
    quiz: [
      {
        question: 'Qual “nós” inclui a pessoa com quem você está falando?',
        options: ['tayo', 'kami', 'sila'],
        answer: 'tayo',
        explanation: '“Tayo” inclui quem ouve; “kami” exclui.',
      },
    ],
  },
  {
    id: 'tl-g3',
    level: 'A1.2',
    title: 'Ang, ng, sa: o verbo “aponta” quem é o foco',
    emoji: '🎯',
    summary: 'A característica mais famosa do tagalo: o próprio verbo muda de forma para indicar QUAL palavra da frase é o “foco” (marcado por “ang”) — o agente, o objeto, ou outra coisa. Aqui, só uma primeira olhada nesse sistema.',
    sections: [
      {
        text: 'Em vez de marcar sujeito e objeto só pela ordem das palavras (como o português), o tagalo usa três partículas antes de cada parte da frase: “ang” (ou “si”, para nomes de pessoa) marca o FOCO da frase — a parte “em destaque”; “ng” (ou “ni”) marca quem não é o foco; “sa” (ou “kay”) marca lugar, destino ou outros papéis.',
        table: {
          head: ['Partícula', 'Papel', 'Com nome próprio'],
          rows: [
            ['ang', 'marca o foco da frase (o que está em destaque)', 'si'],
            ['ng', 'marca quem/o que não é o foco', 'ni'],
            ['sa', 'marca lugar, destino, a quem', 'kay'],
          ],
        },
      },
      {
        heading: 'O mesmo verbo, dois focos diferentes',
        text: 'O pulo é que o AFIXO do verbo muda para combinar com o que está marcado por “ang”. No par abaixo (Wikipédia, “Tagalog grammar”), a mesma ideia — “o homem comprou a banana” — aparece com dois verbos diferentes, dependendo do que é o foco:',
        examples: [
          ['Bumilí ng saging ang lalaki.', 'O homem comprou banana. (foco no AGENTE “ang lalaki”; verbo com -um-)'],
          ['Binilí ng lalaki ang saging.', 'O homem comprou a banana. (foco no OBJETO “ang saging”; verbo com -in-)'],
        ],
      },
      {
        heading: 'Um exemplo com uma palavra já conhecida',
        text: 'O verbo “pumunta” (ir) também usa o afixo -um-: a palavra vem de “punta” + “-um-”. É o mesmo mecanismo do par acima — só que aqui não há um segundo foco possível (ir não tem “objeto”), então o afixo -um- aparece sempre.',
        examples: [['Pumunta ako sa bahay.', 'Eu fui para casa. (“ako”, foco no agente; “sa bahay”, destino)']],
      },
    ],
    pitfalls: [
      'Achar que “ang” é só um artigo (“o”/“a”): ele marca o foco da frase, que pode ser o agente, o objeto, ou outro papel, dependendo do afixo do verbo.',
      'Esperar uma ordem fixa de sujeito-verbo-objeto: no tagalo o verbo costuma vir primeiro, e a ordem dos outros termos é flexível (ver o próximo tópico).',
    ],
    quiz: [
      {
        question: 'Em “Binilí ng lalaki ang saging”, o que está marcado como foco (“ang”)?',
        options: ['ang saging (a banana, o objeto)', 'ng lalaki (o homem, o agente)', 'o verbo'],
        answer: 'ang saging (a banana, o objeto)',
        explanation: 'O afixo -in- em “binilí” aponta o OBJETO como foco; por isso é “ang saging”, não “ang lalaki”.',
      },
    ],
  },
  {
    id: 'tl-g4',
    level: 'A1.2',
    title: 'Ordem livre e o ligante na / -ng',
    emoji: '🔗',
    summary: 'O verbo quase sempre vem primeiro na frase, mas a ordem do resto é flexível. E, ao juntar um adjetivo ou número a um substantivo, entra um pequeno “ligante”: “na” depois de consoante, “-ng” grudado depois de vogal.',
    sections: [
      {
        text: 'O tagalo costuma começar a frase pelo verbo (ou pelo predicado, se não houver verbo), mas a ordem do agente, do objeto e dos outros termos pode mudar sem mudar o sentido — porque as partículas ang/ng/sa (ver o tópico anterior) já deixam claro o papel de cada um.',
        examples: [
          ['Nagbigáy ang lalaki ng libró sa babae.', 'O homem deu um livro à mulher. (verbo-agente-objeto-destinatário)'],
          ['Nagbigáy ng libró ang lalaki sa babae.', 'O homem deu um livro à mulher. (verbo-objeto-agente-destinatário, mesmo sentido)'],
        ],
      },
      {
        heading: 'O ligante na / -ng',
        text: 'Quando um adjetivo ou número vem colado a um substantivo, aparece um “ligante”: “-ng” grudado na palavra anterior se ela termina em vogal (ou em “n”), e “na” separado se ela termina em outra consoante. É esse ligante que transforma “maganda” (bonito) + “umaga” (manhã) em “magandang umaga” (bom dia, lit. “manhã bonita”).',
        table: {
          head: ['Palavra', 'Termina em', 'Ligante', 'Resultado'],
          rows: [
            ['maganda', 'vogal (a)', '-ng', 'magandang umaga (bom dia)'],
            ['apat', 'consoante (t)', 'na', 'apat na bahay (quatro casas)'],
            ['tatlo', 'vogal (o)', '-ng', 'tatlong aso (três cachorros)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esperar uma ordem fixa tipo sujeito-verbo-objeto do português: no tagalo o verbo vem primeiro, e o resto pode trocar de posição.',
      'Esquecer o ligante na/-ng ao juntar número ou adjetivo a um substantivo: sem ele, a frase soa incompleta (“apat bahay” em vez de “apat na bahay”).',
    ],
    quiz: [
      {
        question: 'Qual ligante se usa depois de uma palavra terminada em consoante, como “apat” (quatro)?',
        options: ['na', '-ng', 'nenhum, não muda nada'],
        answer: 'na',
        explanation: '“Apat” termina em consoante (t), então o ligante é “na” separado: “apat na bahay”.',
      },
    ],
  },
];
