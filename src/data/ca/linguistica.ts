import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao catalão (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_CA: LinguisticsArea[] = [
  {
    area: 'fonetica',
    summary:
      'O catalão central reduz quase todas as vogais átonas a um som neutro, tem uma fila de sons que o português não separa da mesma forma (ll, l·l, ny, x, tx) e mistura “b” e “v” num só som.',
    sections: [
      {
        heading: 'A vogal neutra: quando “a” e “e” viram o mesmo som',
        text: 'No catalão central (a base da pronúncia do app), toda vogal “a” ou “e” sem acento tônico cai no mesmo som neutro [ə] — parecido com o “a” fraco do fim de “casa” dito rápido no Brasil. “Barcelona” soa [bərsəˈlonə]: só o “o” da sílaba tônica mantém o timbre cheio. É por isso que o acento gráfico (à, è, é) importa tanto: ele marca a vogal que NÃO reduz.',
        examples: [
          ['pare', 'pai: [ˈpaɾə], com o “e” final neutro'],
          ['Barcelona', '[bərsəˈlonə]'],
        ],
      },
      {
        heading: 'Consoantes sem equivalente direto no português',
        table: {
          head: ['Letra(s)', 'IPA', 'Exemplo'],
          rows: [
            ['ll', '[ʎ]', 'lloc (o nosso “lh”)'],
            ['l·l', '[lː]', 'col·legi (um “l” comum, só mais longo)'],
            ['ny', '[ɲ]', 'catalunya (o nosso “nh”)'],
            ['x / ix', '[ʃ]', 'caixa (o nosso “x” de “xícara”)'],
            ['tx / ig (final)', '[tʃ]', 'despatx, goig (o “tch”)'],
          ],
        },
        text: 'O “ll” e o “l·l” se escrevem parecido, mas são sons bem diferentes: nunca confunda “vall” (vale, com “lh”) e “vil·la” (mansão, com “l” longo).',
      },
      {
        heading: 'Betacisme: “b” e “v” soam igual',
        text: 'No catalão central e na maior parte do território, “b” e “v” se fundiram num único som, sempre como o nosso “b”. “Beu” (bebe) e “veu” (voz) soam exatamente iguais: [bɛw]. É um traço que o catalão compartilha com o espanhol, mas não com o português.',
      },
    ],
    topics: ['ca-g1', 'ca-g41'],
    quiz: [
      {
        question: 'Como soa o “e” final de “pare” (pai) no catalão central?',
        options: ['Como “e” fechado, igual ao espanhol', 'Como a vogal neutra [ə]', 'Não se pronuncia', 'Como “i”'],
        answer: 'Como a vogal neutra [ə]',
        explanation: 'Toda vogal átona (“a” ou “e”) cai no som neutro [ə] no catalão central.',
      },
      {
        question: 'Qual é a diferença entre “ll” e “l·l”?',
        options: ['Nenhuma, são o mesmo som', '“ll” é o “lh” [ʎ], “l·l” é um “l” comum mais longo', '“l·l” é o “lh” e “ll” é comum', 'Os dois viram “u” no fim da palavra'],
        answer: '“ll” é o “lh” [ʎ], “l·l” é um “l” comum mais longo',
        explanation: 'O ponto do “l·l” (ela geminada) avisa que não é o dígrafo “ll”.',
      },
      {
        question: 'No catalão central, “beu” (bebe) e “veu” (voz) soam…',
        options: ['Bem diferentes', 'Exatamente iguais, por causa do betacisme', 'Diferentes só no plural', 'Iguais apenas em Valência'],
        answer: 'Exatamente iguais, por causa do betacisme',
        explanation: '“b” e “v” se fundiram no mesmo som no catalão central: [bɛw] para os dois.',
      },
      {
        question: 'O que o acento gráfico (à, è, é, ò, ó) sinaliza no catalão?',
        options: ['Que a vogal é muda', 'Onde cai a vogal neutra', 'A vogal plena e tônica, que NÃO se reduz', 'Que a palavra é estrangeira'],
        answer: 'A vogal plena e tônica, que NÃO se reduz',
        explanation: 'É por isso que palavras quase iguais se distinguem só pelo acento: “pèl” (pelo) × “pel” (per + el).',
      },
    ],
  },
  {
    area: 'fonologia',
    summary:
      'A grande fronteira do catalão passa pela redução das vogais átonas (bloco oriental × ocidental), o acento gráfico funciona para distinguir palavras que soam diferente por causa do tom (que × què), e os dialetos periféricos (Balears, Alguer, Rosselló) e o vizinho aranês mostram como a mesma raiz latina se desenvolveu de formas diferentes.',
    sections: [
      {
        heading: 'Dois grandes blocos: oriental e ocidental',
        text: 'Desde a classificação de Manuel Milà i Fontanals (1861), o catalão se divide em dois blocos pela pronúncia das vogais átonas. No bloco oriental (Barcelona, Girona, Balears, Rosselló), “a” e “e” átonos caem os dois no som neutro [ə], e “o” átono soa [u]. No bloco ocidental (Lleida, Valência), cada vogal átona mantém seu timbre próprio: “pare” soa [ˈpaɾe], não [ˈpaɾə].',
      },
      {
        heading: '“Que” e “què”: o acento marca o tom',
        text: 'A conjunção átona “que” (que liga orações, como em “crec que vindrà”) soa fraca, [kə], e nunca leva acento. O pronome interrogativo ou relativo tônico “què” (o quê? aquello que) soa cheio, [ˈkɛ], e leva acento. É a mesma lógica do “pèl”/“pel”: o acento aparece só na sílaba tônica plena.',
        examples: [
          ['Crec que vindrà.', 'Acho que ele virá. (que átono, sem acento)'],
          ['Què vols?', 'O que você quer? (què tônico, com acento)'],
        ],
      },
      {
        heading: 'Os dialetos periféricos e o vizinho aranês',
        text: 'Nas Ilhas Baleares sobrevive o “article salat” (es, sa, ses), do latim “ipse”; no Alguer (Sardenha, Itália), séculos de isolamento deram um rotacismo característico do “l” entre vogais; no Rosselló (sul da França), o francês deixou marcas como a negação reforçada com “pas”. O aranès, falado na Vall d\'Aran, NÃO é um dialeto do catalão: é uma variedade do occitano, só oficial na Catalunha ao lado do catalão desde 2006.',
      },
    ],
    topics: ['ca-g32', 'ca-g48', 'ca-g49', 'ca-g50'],
    quiz: [
      {
        question: 'O que distingue o bloco oriental do ocidental do catalão?',
        options: ['O uso do “vostè”', 'A redução das vogais átonas', 'O gênero dos substantivos', 'A ordem das palavras'],
        answer: 'A redução das vogais átonas',
        explanation: 'No oriental, “a/e” átonos viram [ə] e “o” átono vira [u]; no ocidental, as vogais átonas mantêm o timbre.',
      },
      {
        question: 'Por que “què” leva acento em “Què vols?” mas “que” não leva em “Crec que vindrà”?',
        options: ['É uma regra arbitrária', 'O “què” tônico soa cheio [ˈkɛ]; o “que” átono soa fraco [kə]', 'Só o interrogativo existe na escrita', 'Depende do dialeto'],
        answer: 'O “què” tônico soa cheio [ˈkɛ]; o “que” átono soa fraco [kə]',
        explanation: 'O acento gráfico do catalão marca sempre a vogal plena e tônica.',
      },
      {
        question: 'O “article salat” (es, sa, ses) é típico de qual variedade?',
        options: ['Valenciano', 'Balear', 'Rossellonês', 'Alguerês'],
        answer: 'Balear',
        explanation: 'Vem do latim “ipse” e sobrevive nas Ilhas Baleares (e em pontos da Costa Brava).',
      },
      {
        question: 'O aranès, falado na Vall d\'Aran…',
        options: ['É um dialeto ocidental do catalão', 'É uma variedade do occitano, não é catalão', 'É a forma antiga do valenciano', 'É o mesmo que o rossellonês'],
        answer: 'É uma variedade do occitano, não é catalão',
        explanation: 'É oficial na Catalunha desde o Estatuto de 2006, ao lado do catalão e do castelhano, mas é uma língua diferente.',
      },
    ],
  },
  {
    area: 'morfologia',
    summary:
      'O catalão tem 2 gêneros e um sistema de pronomes átonos (pronoms febles) que se combinam de formas complexas; o passado mais comum não é um tempo simples, mas uma perífrase com o verbo “anar” (vaig parlar = falei); e o subjuntivo e o imperativo completam um sistema verbal rico.',
    sections: [
      {
        heading: 'Gênero, plural e artigos',
        text: 'Como o português, o catalão tem 2 gêneros (masculino e feminino) e forma o plural sobretudo com “-s”. A diferença mais visível está nos artigos: “el/la” (definido) e “un/una” (indefinido), com contrações obrigatórias antes de vogal (“l\'aigua”) e com as preposições “a/de/per” (“al”, “del”, “pel”).',
      },
      {
        heading: 'O passat perifràstic: o passado mais usado não é um tempo simples',
        text: 'A marca mais famosa do catalão é o “passat perifràstic”: para contar o que já aconteceu, usa-se o presente do verbo “anar” (vaig, vas, va, vam, vau, van) mais o infinitivo. “Vaig parlar” não quer dizer “eu ia falar”: quer dizer “eu falei”. O antigo pretérito perfeito simples (parlí, parlares…) sobrevive só na escrita literária e culta (ca-g38).',
        examples: [['Ahir vaig anar al cinema.', 'Ontem eu fui ao cinema.']],
      },
      {
        heading: 'Pronoms febles: pequenas partículas, muitas combinações',
        text: 'Os pronomes átonos do catalão (em, et, es, el/la, li, ens, us, els/les, hi, en) substituem complementos e se combinam entre si em ordens fixas quando aparecem juntos (CI antes de CD, e formas que mudam de acordo com o verbo ao redor: “me\'l dona” = ele me dá isso). É um dos sistemas mais ricos e mais difíceis do catalão para quem vem do português, que usa muito menos clíticos combinados no dia a dia.',
      },
      {
        heading: 'Sufixação avaliativa e numerais',
        text: 'Os sufixos diminutivos (-et/-eta), augmentativos (-às/-assa, -ot/-ota) e o sufixo “-ó” carregam valor afetivo, não só de tamanho: “Maripili” vira “Mariona”, “got” (copo) vira “gotet” (copinho, com carinho). No sistema numérico, a hora se conta pelo “sistema de quarts” (dos quartos da próxima hora), diferente do sistema direto do português.',
      },
    ],
    topics: [
      'ca-g2', 'ca-g4', 'ca-g5', 'ca-g6', 'ca-g7', 'ca-g8', 'ca-g9', 'ca-g10', 'ca-g11', 'ca-g12', 'ca-g13', 'ca-g14',
      'ca-g16', 'ca-g20', 'ca-g23', 'ca-g27', 'ca-g29', 'ca-g35', 'ca-g39', 'ca-g40', 'ca-g43',
    ],
    quiz: [
      {
        question: 'O que significa “Vaig parlar amb ella”?',
        options: ['Eu ia falar com ela', 'Eu falei com ela', 'Eu vou falar com ela', 'Eu falaria com ela'],
        answer: 'Eu falei com ela',
        explanation: 'O “passat perifràstic” (vaig + infinitivo) é a forma comum de passado no catalão falado, não uma intenção futura.',
      },
      {
        question: 'Como o catalão faz a contração do artigo “el” com a preposição “a”?',
        options: ['a el', 'al', 'no artigo', 'a\'l'],
        answer: 'al',
        explanation: '“a + el” vira “al”, como “de + el” vira “del” e “per + el” vira “pel”.',
      },
      {
        question: 'Os pronomes “hi” e “en” (pronoms febles) servem para substituir, respectivamente…',
        options: ['Pessoas femininas e masculinas', 'Complementos de lugar/coisas com preposição, e quantidades/coisas com “de”', 'Só o sujeito da frase', 'Só o objeto direto'],
        answer: 'Complementos de lugar/coisas com preposição, e quantidades/coisas com “de”',
        explanation: '“Hi vaig” (vou lá) usa “hi”; “En vull dos” (quero dois deles) usa “en”.',
      },
      {
        question: 'O que os sufixos “-et/-eta” podem indicar, além de tamanho pequeno?',
        options: ['Só o plural', 'Carinho, valor afetivo', 'Tempo verbal', 'Gênero neutro'],
        answer: 'Carinho, valor afetivo',
        explanation: 'Como no diminutivo português (“cafezinho”), o “-et/-eta” catalão carrega afeto, não só tamanho.',
      },
    ],
  },
  {
    area: 'sintaxe',
    summary:
      'A ordem da frase catalã muda bastante quando entram os pronomes febles combinados e a “dislocació” (repetir com um pronome o elemento que se adianta ou se atrasa); as orações condicionais, concessivas e de discurso indireto seguem regras próprias de concordância temporal.',
    sections: [
      {
        heading: 'A dislocació: adiantar ou atrasar um elemento e retomá-lo com um pronome',
        text: 'É comum no catalão falado e escrito “deslocar” o complemento para o início ou o fim da frase e retomá-lo com um pronome fraco: “El llibre, l\'he llegit” (O livro, eu li ele) em vez de “He llegit el llibre”. Essa duplicação, estranha em português, é uma estrutura normal e frequente em catalão, usada para marcar o que já se sabe (tema) e o que é novidade (rema).',
        examples: [["El llibre, l'he llegit.", 'O livro, eu já li. (tema adiantado + pronome “l\'”)']],
      },
      {
        heading: 'Relativas, condicionais e concessivas',
        text: 'As orações relativas usam “que” (sujeito/objeto) e “qui”/“el qual” (depois de preposição); as condicionais mudam de tempo e modo conforme o grau de hipótese (real, pouco provável, irreal), e as concessivas cultas usam conectores como “per bé que”, “tot i que” e, em registro elevado, “posat que” e “sens que”.',
      },
      {
        heading: 'Discurso indireto e voz passiva',
        text: 'Ao relatar a fala de outra pessoa, o catalão muda os tempos verbais de forma parecida com o português (presente → imperfeito, passat perifràstic → mais-que-perfeito). A voz passiva com “ser + particípio” aceita um agente com “per”, mas a passiva pronominal (“es + verbo”) NÃO aceita agente explícito — é um erro comum de quem aprende dizer “es va construir... per l\'arquitecte”.',
      },
    ],
    topics: [
      'ca-g15', 'ca-g17', 'ca-g18', 'ca-g19', 'ca-g21', 'ca-g22', 'ca-g24', 'ca-g26', 'ca-g28', 'ca-g33', 'ca-g36', 'ca-g37', 'ca-g45',
    ],
    quiz: [
      {
        question: 'Na frase “El llibre, l\'he llegit”, o que faz a construção “dislocació”?',
        options: ['Nada, é um erro', 'Adianta o complemento e o retoma com um pronome fraco', 'Transforma a frase em pergunta', 'Só existe na fala informal'],
        answer: 'Adianta o complemento e o retoma com um pronome fraco',
        explanation: 'É uma estrutura normal do catalão para marcar o que já é conhecido (tema) antes da informação nova.',
      },
      {
        question: 'Qual construção NÃO pode ter um agente explícito com “per”?',
        options: ['A passiva perifràstica (ser + particípio)', 'A passiva pronominal (es + verbo)', 'As duas aceitam', 'Nenhuma das duas'],
        answer: 'A passiva pronominal (es + verbo)',
        explanation: '“Es va construir... per l\'arquitecte” está errado: com agente, usa-se “va ser construïda... per l\'arquitecte”.',
      },
      {
        question: 'No discurso indireto, o que costuma acontecer com o presente do discurso direto?',
        options: ['Vira futuro', 'Vira imperfeito', 'Fica igual', 'Vira subjuntivo sempre'],
        answer: 'Vira imperfeito',
        explanation: 'A concordância temporal do catalão funciona de forma parecida com a do português.',
      },
      {
        question: '“Tot i que”, “per bé que” e “posat que” são conectores de…',
        options: ['Causa', 'Concessão', 'Finalidade', 'Consequência'],
        answer: 'Concessão',
        explanation: 'Introduzem uma ideia que poderia contradizer a oração principal, do mais comum (“tot i que”) ao mais culto (“posat que”).',
      },
    ],
  },
  {
    area: 'semantica',
    summary:
      'A distinção entre “ésser” e “estar”, entre “per” e “per a”, os verbos que traduzem “tornar-se/ficar” e a fraseologia (expressões e provérbios) formam o vocabulário de significados mais sutis do catalão.',
    sections: [
      {
        heading: 'Ésser i estar: uma fronteira própria',
        text: 'Como o espanhol e diferente do português, o catalão distingue “ésser/ser” (identidade, característica permanente: “Sóc professora”) de “estar” (estado, localização: “Estic cansat”, “És a Barcelona” é exceção — localização de lugares fixos usa “ser”). A fronteira exata muda um pouco em relação ao espanhol, e é preciso aprender caso a caso.',
      },
      {
        heading: '“Per” e “per a”: causa/meio × destino/finalidade',
        text: '“Per” indica causa, meio ou passagem (“Gràcies per l\'ajuda”, “Passo pel parc”); “per a” indica destino ou finalidade (“Això és per a tu”, “Estudio per a l\'examen”). É uma distinção que o espanhol perdeu (só tem “para”) e o português não faz da mesma forma, por isso exige atenção extra.',
      },
      {
        heading: 'Os verbos de “tornar-se”',
        text: 'O catalão tem uma família de verbos para “mudar de estado”, cada um com seu contexto: “esdevenir” (mudança formal, de estatuto: “va esdevenir president”), “fer-se” (mudança gradual ou por esforço: “es va fer metge”), “posar-se” (estado emocional ou físico passageiro: “es va posar trist”) e “quedar-se”/“convertir-se en” (mudança de estado ou de categoria).',
      },
    ],
    topics: ['ca-g3', 'ca-g25', 'ca-g30', 'ca-g46', 'ca-g54'],
    quiz: [
      {
        question: 'Para dizer que uma cidade fica em determinado lugar (localização de algo fixo), o catalão usa…',
        options: ['estar', 'ser', 'haver-hi', 'tenir'],
        answer: 'ser',
        explanation: 'Diferente do espanhol, a localização de lugares e eventos fixos no catalão usa “ser”: “Barcelona és a Catalunya”.',
      },
      {
        question: 'Qual frase usa “per a” corretamente?',
        options: ['Passo per a el parc.', 'Això és per a tu.', 'Gràcies per a l\'ajuda.', 'Treballo per a la ciutat de nit (só de passagem).'],
        answer: 'Això és per a tu.',
        explanation: '“Per a” marca destino/finalidade; “per” marca causa, meio ou passagem.',
      },
      {
        question: 'Qual verbo combina melhor com “va ___ trist quan ho va saber” (mudança de emoção passageira)?',
        options: ['esdevenir', 'posar-se', 'fer-se', 'quedar-se'],
        answer: 'posar-se',
        explanation: '“Posar-se” é o verbo típico para mudanças de estado emocional ou físico passageiras.',
      },
    ],
  },
  {
    area: 'pragmatica',
    summary:
      'A escolha entre “tu” e “vostè”, os marcadores de discurso que organizam a conversa e a fronteira entre registro formal e os barbarismos do dia a dia mostram como o contexto social molda a fala catalã.',
    sections: [
      {
        heading: 'Tu ou vostè: como escolher o tratamento',
        text: 'O catalão usa “tu” (informal, entre amigos, família e colegas próximos) e “vostè” (formal, com desconhecidos, autoridades e em atendimento formal), com a conjugação verbal correspondente (“ets”/“és”, “tens”/“té”). Usar “tu” num contexto formal, ou “vostè” entre amigos, soa estranho ou até rude, dependendo do contexto.',
      },
      {
        heading: 'Marcadores do discurso',
        text: 'Palavras como “tanmateix” e “així i tot” (contraste), “és a dir” e “dit d\'una altra manera” (reformulação), e “de fet” e “en tot cas” (modalização) organizam a conversa e a escrita, sinalizando a intenção do falante além do conteúdo literal da frase.',
      },
      {
        heading: 'Registro formal e barbarismos',
        text: 'Cartas, e-mails e documentos formais seguem fórmulas próprias (“Benvolgut/da”, “Atentament”). Já os “barbarismes” são formas que entram no catalão coloquial por influência do espanhol, mas que a norma não aceita (“des de logo” em vez de “per descomptat”): reconhecê-los ajuda a diferenciar registro coloquial de padrão.',
      },
    ],
    topics: ['ca-g31', 'ca-g42', 'ca-g44', 'ca-g47'],
    quiz: [
      {
        question: 'Ao dirigir-se a um desconhecido numa loja, em registro formal, o catalão usa…',
        options: ['tu', 'vostè', 'vós', 'sempre o nome próprio'],
        answer: 'vostè',
        explanation: '“Vostè” é o tratamento formal, com a 3ª pessoa do verbo: “Que desitja?”.',
      },
      {
        question: '“És a dir” e “dit d\'una altra manera” servem para…',
        options: ['Contrastar duas ideias', 'Reformular o que já foi dito', 'Terminar a conversa', 'Fazer uma pergunta'],
        answer: 'Reformular o que já foi dito',
        explanation: 'São marcadores de reformulação, que explicam a mesma ideia de outra forma.',
      },
      {
        question: 'O que é um “barbarisme” no catalão?',
        options: ['Uma palavra vinda do latim', 'Uma forma que a norma não aceita, geralmente por influência do espanhol', 'Um sinônimo culto', 'Um erro de pronúncia apenas'],
        answer: 'Uma forma que a norma não aceita, geralmente por influência do espanhol',
        explanation: 'Reconhecer os barbarismos ajuda a escrever e falar segundo o padrão.',
      },
    ],
  },
  {
    area: 'estilistica',
    summary:
      'Os tempos verbais também carregam valor estilístico (não só temporal), o registro literário clássico vai de Ramon Llull a Joan Maragall, e a linguagem científica, jornalística e administrativa usa a nominalização para soar mais objetiva.',
    sections: [
      {
        heading: 'Tempos verbais como recurso de estilo',
        text: 'Além de marcar tempo, certas formas verbais carregam valor estilístico: o imperfeito de cortesia (“Volia demanar-li un favor”, mais suave que “Vull”), o futuro de probabilidade (“Deu ser tard”, provavelmente é tarde) e, na escrita literária culta, o passat simple sintético (“parlà”, “cantà”) e a variação regional do imperfeito de subjuntivo (-és/-ara).',
      },
      {
        heading: 'Os clássicos: de Llull a Maragall',
        text: 'A literatura catalã tem uma tradição contínua desde a Idade Média: Ramon Llull (séc. XIII) é considerado o criador da prosa catalã e um dos primeiros filósofos europeus a escrever em língua vulgar, e não só em latim; séculos depois, Joan Maragall (séc. XIX-XX) foi a figura central da Renaixença modernista, com uma prosa e poesia que ajudaram a renovar o catalão literário.',
      },
      {
        heading: 'Nominalização: o estilo científico, jornalístico e administrativo',
        text: 'Textos técnicos, notícias e documentos oficiais preferem substantivos derivados de verbos (“la implementació”, “l\'anàlisi”) em vez de frases com o verbo conjugado, o que dá um tom mais objetivo e impessoal — um traço que o catalão compartilha com o português culto e com outras línguas europeias.',
      },
    ],
    topics: ['ca-g34', 'ca-g38', 'ca-g51', 'ca-g52', 'ca-g53'],
    quiz: [
      {
        question: 'Por que dizer “Volia demanar-li un favor” em vez de “Vull demanar-li un favor”?',
        options: ['É um erro comum', 'O imperfeito soa mais educado, é o “imperfeito de cortesia”', 'Muda o significado da frase', 'Só se usa no passado'],
        answer: 'O imperfeito soa mais educado, é o “imperfeito de cortesia”',
        explanation: 'É um uso estilístico do tempo verbal, não uma referência ao passado real.',
      },
      {
        question: 'Ramon Llull é considerado…',
        options: ['O poeta da Renaixença', 'O criador da prosa catalã, no século XIII', 'O autor do primeiro dicionário catalão', 'Um autor exclusivamente valenciano'],
        answer: 'O criador da prosa catalã, no século XIII',
        explanation: 'Llull foi um dos primeiros na Europa a escrever filosofia numa língua vulgar, e não em latim.',
      },
      {
        question: 'O que caracteriza o estilo científico e administrativo em catalão?',
        options: ['Muitas interjeições', 'A nominalização, com substantivos derivados de verbos', 'O uso constante do “tu”', 'A ausência de pontuação'],
        answer: 'A nominalização, com substantivos derivados de verbos',
        explanation: '“La implementació del projecte” soa mais formal e objetivo que “Vam implementar el projecte”.',
      },
    ],
  },
];
