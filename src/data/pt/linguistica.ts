import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao português (Portugal × Brasil e a norma culta), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_PT: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'Portugal e Brasil escrevem quase igual e soam muito diferente: em Lisboa as vogais átonas encolhem ([ɐ], [ɨ], [u]) ou somem, o “s” do fim da sílaba chia [ʃ], o “r” forte vem da garganta [ʁ], o “l” final é velar [ɫ] e “ei” soa [ɐj]; no Brasil as vogais se mantêm, o “t” e o “d” viram [tʃ] e [dʒ] antes de “i”, o “l” final vira [w] e o “r” forte é aspirado [h].',
    sections: [
      {
        heading: 'As vogais átonas: onde Portugal encolhe e o Brasil mantém',
        text: 'Na sílaba tônica, as duas normas têm praticamente as mesmas vogais orais: [a], [ɛ], [e], [i], [ɔ], [o], [u]. A diferença está nas átonas. Em Lisboa, o “a” átono vira [ɐ], um “a” fechado e curto; o “e” átono vira [ɨ], uma vogal central que muitas vezes nem se ouve; e o “o” átono vira [u]. Por isso “pequeno” soa [pɨˈkenu] e “morar” soa [muˈɾaɾ]. No Brasil, as pretônicas ficam plenas ([peˈkenu], [moˈɾah]) e as finais sobem para [ɐ], [i] e [u]: “leite” termina em [i], não em [ɨ]. É essa redução que dá ao ouvido brasileiro a impressão de que o português europeu “engole as vogais” e é só consoante.',
        table: {
          head: ['Palavra', 'Portugal (Lisboa)', 'Brasil', 'O que muda'],
          rows: [
            ['pequeno', '[pɨˈkenu]', '[peˈkenu] ou [piˈkenu]', '“e” átono → [ɨ]'],
            ['morar', '[muˈɾaɾ]', '[moˈɾah]', '“o” átono → [u]'],
            ['cadeira', '[kɐˈðɐjɾɐ]', '[kaˈdejɾɐ]', '“a” átono → [ɐ]; “ei” → [ɐj]'],
            ['telefone', '[tɨlɨˈfɔnɨ], na fala [tɨlˈfɔn]', '[teleˈfɔni]', 'o “e” átono cai'],
            ['cama', '[ˈkɐmɐ]', '[ˈkɐ̃mɐ]', 'no Brasil a tônica antes de “m” e “n” nasaliza'],
            ['obrigado', '[ɔbɾiˈɣaðu]', '[obɾiˈɡadu]', '“g” e “d” entre vogais se abrandam em Portugal'],
          ],
        },
        examples: [
          ['O menino é pequeno.', 'O menino é pequeno: PT [u mɨˈninu ɛ pɨˈkenu], BR [u meˈninu ɛ peˈkenu]'],
          ['Obrigado, até amanhã!', 'Obrigado, até amanhã! PT [ɔbɾiˈɣaðu], BR [obɾiˈɡadu]'],
          ['Onde está o telefone?', 'Onde está o telefone? PT [tɨlˈfɔn], BR [teleˈfɔni]'],
        ],
      },
      {
        heading: 'As consoantes que denunciam a origem',
        table: {
          head: ['Traço', 'Portugal', 'Brasil', 'Exemplo (PT × BR)'],
          rows: [
            ['“s”, “z” no fim da sílaba', '[ʃ] e [ʒ], chiados', '[s] e [z] (chiado no Rio e em parte do Norte)', 'dois [dojʃ] × [dojs]; mesmo [ˈmeʒmu] × [ˈmezmu]'],
            ['“r” forte (início, “rr”)', '[ʁ], na garganta, vibrante', '[h] ou [x], aspirado', 'rua [ˈʁuɐ] × [ˈhuɐ]; carro [ˈkaʁu] × [ˈkahu]'],
            ['“r” no fim da sílaba', '[ɾ], a ponta da língua bate', '[h], [x], [ɾ] ou [ɹ], conforme a região', 'mar [maɾ] × [mah]; porta [ˈpɔɾtɐ] × [ˈpɔhtɐ]'],
            ['“l” no fim da sílaba', '[ɫ], velar, a língua encosta', '[w], vira semivogal', 'Brasil [bɾɐˈziɫ] × [bɾaˈziw]; sal [saɫ] × [saw]'],
            ['“t”, “d” antes de [i]', '[t] e [d]', '[tʃ] e [dʒ] (na maior parte do país)', 'tia [ˈtiɐ] × [ˈtʃiɐ]; dia [ˈdiɐ] × [ˈdʒiɐ]'],
            ['“b”, “d”, “g” entre vogais', '[β], [ð], [ɣ], suaves', '[b], [d], [ɡ], firmes', 'cada [ˈkaðɐ] × [ˈkadɐ]'],
          ],
        },
        text: 'Duas palavras bastam para situar um falante: “Brasil” e “noite”. O português de Lisboa diz [bɾɐˈziɫ], com o “l” encostado no céu da boca, e [ˈnojtɨ], com o “t” limpo; o carioca diz [bɾaˈziw] e [ˈnojtʃi]. O “s” chiado de Portugal é o mesmo do Rio de Janeiro: quem é do Rio já sabe fazê-lo. O “r” forte de Lisboa é uvular, [ʁ], parecido com o “r” francês; no Norte de Portugal e em zonas rurais ainda se ouve o “r” vibrado com a ponta da língua, [r].',
      },
      {
        heading: 'Os ditongos e as vogais antes de consoante palatal',
        text: 'Em Lisboa, o ditongo “ei” soa [ɐj], quase “âi”: “leite” [ˈlɐjtɨ], “sei” [sɐj]. No Brasil ele é [ej] e, antes de “r”, “x” e “j”, costuma reduzir-se a [e]: “peixe” [ˈpeʃi]. O “em” final vira [ɐ̃j̃] em Portugal e [ẽj̃] no Brasil: “bem”, “também”. E o “e” tônico antes de som palatal (lh, nh, ch, j, x) abre-se em [ɐ] no padrão de Lisboa: “tenho” [ˈtɐɲu], “vejo” [ˈvɐʒu], “coelho” [kuˈɐʎu]. No Norte de Portugal, “ei” continua [ej] e o “ou” ainda se pronuncia [ow].',
        table: {
          head: ['Palavra', 'Portugal (Lisboa)', 'Brasil'],
          rows: [
            ['leite', '[ˈlɐjtɨ]', '[ˈlejtʃi]'],
            ['peixe', '[ˈpɐjʃɨ]', '[ˈpejʃi] ou [ˈpeʃi]'],
            ['bem', '[bɐ̃j̃]', '[bẽj̃]'],
            ['tenho', '[ˈtɐɲu]', '[ˈtẽɲu] ou [ˈtẽj̃u]'],
            ['coelho', '[kuˈɐʎu]', '[koˈeʎu]'],
            ['depois', '[dɨˈpojʃ]', '[deˈpojs] ou [deˈpojʃ]'],
          ],
        },
        examples: [
          ['Queria um galão e uma torrada, se faz favor.', 'Eu queria um café com leite e uma torrada, por favor.'],
          ['Tenho um peixe e um coelho.', 'Tenho um peixe e um coelho: PT [ˈtɐɲu ... ˈpɐjʃɨ ... kuˈɐʎu]'],
          ['Está tudo bem, também sei.', 'Está tudo bem, também sei: PT [bɐ̃j̃], [tɐ̃ˈbɐ̃j̃], [sɐj]'],
        ],
      },
    ],
    topics: ['pt-g1'],
    quiz: [
      {
        question: 'Como soa o “s” de “dois” em Lisboa?',
        options: ['[s]', '[ʃ], chiado', '[z]', 'Não se pronuncia'],
        answer: '[ʃ], chiado',
        explanation: 'No fim da sílaba, o “s” de Portugal chia: [dojʃ], como no Rio de Janeiro.',
      },
      {
        question: 'Qual é a pronúncia de “Brasil” em Portugal?',
        options: ['[bɾaˈziw]', '[bɾɐˈziɫ]', '[bɾaˈzil]', '[bɾɐˈziw]'],
        answer: '[bɾɐˈziɫ]',
        explanation: 'O “a” átono vira [ɐ] e o “l” final é velar, [ɫ]; ele nunca vira [w] como no Brasil.',
      },
      {
        question: 'Em qual norma “dia” soa [ˈdʒiɐ]?',
        options: ['Em Portugal', 'Na maior parte do Brasil', 'Nas duas', 'Em nenhuma'],
        answer: 'Na maior parte do Brasil',
        explanation: 'A palatalização de “t” e “d” antes de [i] é traço brasileiro; em Portugal é [ˈdiɐ], com “d” dental.',
      },
      {
        question: 'O que acontece com o “e” átono de “telefone” na fala de Lisboa?',
        options: ['Vira [i]', 'Vira [e] fechado', 'Vira [ɨ] ou cai', 'Fica aberto, [ɛ]'],
        answer: 'Vira [ɨ] ou cai',
        explanation: 'A redução vocálica transforma o “e” átono em [ɨ], que muitas vezes desaparece: [tɨlˈfɔn].',
      },
      {
        question: 'Como soa “leite” em Lisboa?',
        options: ['[ˈlejtʃi]', '[ˈlɐjtɨ]', '[ˈletʃi]', '[ˈlejti]'],
        answer: '[ˈlɐjtɨ]',
        explanation: 'O ditongo “ei” é [ɐj] no padrão de Lisboa, e o “e” final é o reduzido [ɨ], sem “tch”.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'O português europeu tem ritmo acentual: as sílabas átonas se comprimem e as vogais caem (“telefone” [tɨlˈfɔn]), criando grupos de consoantes que o Brasil, de ritmo silábico, desfaz com vogais extras (pneu [piˈnew]); cada norma distingue sons que a outra confunde (mal × mau, falamos × falámos), e o Acordo de 1990 fez a escrita seguir a pronúncia de cada lado (facto × fato, económico × econômico).',
    sections: [
      {
        heading: 'Ritmo acentual × ritmo silábico',
        text: 'No Brasil, cada sílaba tem mais ou menos o mesmo peso, e as vogais átonas se ouvem inteiras: é um ritmo próximo do silábico, como o do espanhol. Em Portugal, o que marca o tempo é a sílaba tônica; as átonas entre uma tônica e outra se espremem, e as vogais [ɨ] e [u] muitas vezes caem de vez. O resultado é uma fala que, para o brasileiro, parece rápida e cheia de consoantes: “despertador” vira algo como [dʃpɨɾtɐˈðoɾ], e “de facto” soa [dˈfatu]. Para entender o português europeu, o segredo é procurar as sílabas tônicas: elas não somem nunca.',
        table: {
          head: ['Palavra', 'Portugal (fala corrente)', 'Brasil', 'O que caiu'],
          rows: [
            ['telefone', '[tɨlˈfɔn]', '[teleˈfɔni]', 'o 2º e o último “e”'],
            ['semana', '[sˈmɐnɐ]', '[seˈmɐ̃nɐ]', 'o “e” da 1ª sílaba'],
            ['pequeno', '[pˈkenu]', '[peˈkenu]', 'o “e” da 1ª sílaba'],
            ['desculpe', '[dʃˈkuɫp]', '[dʒisˈkuwpi]', 'o “e” inicial e o final'],
            ['felicidade', '[flisiˈðad]', '[felisiˈdadʒi]', 'o “e” átono e o final'],
            ['estar', '[ʃˈtaɾ]', '[isˈtah]', 'o “e” inicial'],
          ],
        },
        examples: [
          ['Desculpe, pode repetir?', 'Desculpe, pode repetir? PT [dʃˈkuɫp ˈpɔð ʁɨpɨˈtiɾ]'],
          ['Para a semana vou ao Porto.', 'Semana que vem vou ao Porto. PT [sˈmɐnɐ]'],
          ['Estás bem?', 'Tudo bem com você? PT [ʃˈtaʒ ˈbɐ̃j̃]'],
        ],
      },
      {
        heading: 'A sílaba: grupos de consoantes e vogais que aparecem',
        text: 'As duas normas partem da mesma escrita, mas organizam a sílaba de jeitos opostos. O Brasil prefere a sílaba aberta (consoante + vogal) e, quando a palavra traz duas consoantes seguidas que não formam grupo, insere uma vogal que não está escrita: “pneu” [piˈnew], “advogado” [adʒivoˈɡadu], “ritmo” [ˈhitʃimu]. É a epêntese. Portugal faz o contrário: além de não inserir vogal, ainda apaga as átonas e cria grupos que não existem na escrita, como [pk] em “pequeno” e [ʃt] em “estar”. Por isso a mesma palavra pode ter uma sílaba a mais no Brasil e uma a menos em Portugal.',
        table: {
          head: ['Palavra', 'Portugal', 'Brasil', 'Sílabas (PT × BR)'],
          rows: [
            ['pneu', '[ˈpnew]', '[piˈnew]', '1 × 2'],
            ['advogado', '[ɐðvuˈɣaðu]', '[adʒivoˈɡadu]', '4 × 5'],
            ['ritmo', '[ˈʁitmu]', '[ˈhitʃimu]', '2 × 3'],
            ['absoluto', '[ɐβsuˈlutu]', '[abisoˈlutu]', '4 × 5'],
            ['pequeno', '[pˈkenu]', '[peˈkenu]', '2 × 3'],
          ],
        },
        examples: [
          ['O advogado chegou a horas.', 'O advogado chegou na hora. PT [ɐðvuˈɣaðu], BR [adʒivoˈɡadu]'],
          ['Tenho um pneu furado.', 'Estou com um pneu furado. PT [ˈpnew], BR [piˈnew]'],
        ],
      },
      {
        heading: 'Sons que uma norma distingue e a outra confunde',
        text: 'Um fonema é o som que muda o sentido. Algumas diferenças são fonemas numa norma e desaparecem na outra. Em Portugal, o “l” velar e o “u” são sons diferentes, então “mal” [maɫ] e “mau” [maw] nunca se confundem; no Brasil, os dois soam [maw], e a escrita é que obriga a escolher (daí a dúvida “mal × mau” ser tão brasileira). Em Portugal, [a] e [ɐ] também se opõem: “falámos” (passado) × “falamos” (presente), e “à” [a] × “a” [ɐ], de modo que a crase se ouve. No Brasil, onde o “a” antes de “m” e “n” é nasal e o “a” átono não se fecha tanto, essas oposições não existem na fala, e por isso “falamos” serve para os dois tempos. Em compensação, o Brasil distingue [e] e [i] finais onde Portugal tem um só [ɨ] ou nada.',
        table: {
          head: ['Par', 'Portugal', 'Brasil'],
          rows: [
            ['mal × mau', '[maɫ] × [maw]: sons diferentes', '[maw] × [maw]: homófonos'],
            ['falamos × falámos', '[fɐˈlɐmuʃ] × [fɐˈlamuʃ]', '[faˈlɐ̃mus] nos dois tempos (só “falamos”)'],
            ['a × à', '[ɐ] × [a]', '[a] × [a]: a crase não se ouve'],
            ['há × a', '[a] × [ɐ]', '[a] × [a]'],
            ['cela × sela', '[ˈsɛlɐ] × [ˈsɛlɐ]', '[ˈsɛlɐ] × [ˈsɛlɐ]: homófonos nas duas'],
          ],
        },
        examples: [
          ['Ontem falámos com a Ana; hoje falamos com o Rui.', 'Ontem falamos com a Ana; hoje falamos com o Rui. (Em Portugal, o acento separa os tempos.)'],
          ['Não é mau, mas sabe mal.', 'Não é ruim, mas o gosto é ruim. PT [maw] × [maɫ]'],
          ['Vou à praia daqui a pouco.', 'Vou à praia daqui a pouco. PT [a ˈpɾajɐ] × [dɐˈki ɐ ˈpoku]'],
        ],
      },
      {
        heading: 'A escrita que segue a pronúncia: o Acordo de 1990',
        text: 'O Acordo Ortográfico de 1990 aproximou as grafias com um critério fonológico: cada país escreve as consoantes que pronuncia e elimina as que não pronuncia. Como os portugueses dizem o “c” de “facto” e não dizem o “p” de “receção”, escrevem “facto” e “receção”; os brasileiros, que não dizem o “c” e dizem o “p”, escrevem “fato” e “recepção”. Os acentos também seguem o timbre da vogal: em Portugal, o “o” e o “e” tônicos antes de “m” e “n” são abertos (económico, António, género) e levam agudo; no Brasil são fechados e levam circunflexo (econômico, Antônio, gênero). O hífen dos prefixos também obedece ao som: separa vogais iguais (micro-ondas) e cai quando o som se junta (autoestrada, antirrugas, contrassenso), igual nos dois países.',
        table: {
          head: ['Portugal', 'Brasil', 'Motivo'],
          rows: [
            ['facto [ˈfaktu]', 'fato [ˈfatu]', 'o “c” se pronuncia só em Portugal'],
            ['contacto', 'contato', 'idem'],
            ['receção', 'recepção', 'o “p” se pronuncia só no Brasil'],
            ['económico [ikuˈnɔmiku]', 'econômico [ekoˈnõmiku]', 'vogal aberta × fechada antes de “m”'],
            ['bebé [bɛˈbɛ]', 'bebê [beˈbe]', 'vogal final aberta × fechada'],
            ['ótimo, ação, diretor', 'ótimo, ação, diretor', 'consoante muda nos dois países: caiu nos dois'],
          ],
        },
        examples: [
          ['De facto, o contacto foi na receção do hotel.', 'De fato, o contato foi na recepção do hotel.'],
          ['O António tem um prémio económico.', 'O Antônio ganhou um prêmio de economia.'],
        ],
      },
    ],
    topics: ['pt-g19', 'pt-g20', 'pt-g29'],
    quiz: [
      {
        question: 'Por que o português europeu parece “engolir” as vogais?',
        options: ['Porque tem ritmo acentual e reduz as átonas', 'Porque não tem vogais átonas', 'Porque só tem cinco vogais', 'Porque as vogais são nasais'],
        answer: 'Porque tem ritmo acentual e reduz as átonas',
        explanation: 'No ritmo acentual, as sílabas átonas se comprimem entre as tônicas, e as vogais [ɨ] e [u] muitas vezes caem.',
      },
      {
        question: 'Quantas sílabas tem “pneu” na pronúncia brasileira comum?',
        options: ['Uma', 'Duas', 'Três', 'Nenhuma'],
        answer: 'Duas',
        explanation: 'O Brasil insere um [i] entre o “p” e o “n” (epêntese): [piˈnew]. Em Portugal é uma sílaba só, [ˈpnew].',
      },
      {
        question: 'Em qual norma “mal” e “mau” são homófonos?',
        options: ['Em Portugal', 'No Brasil', 'Nas duas', 'Em nenhuma'],
        answer: 'No Brasil',
        explanation: 'No Brasil o “l” final vira [w] e os dois soam [maw]; em Portugal, “mal” é [maɫ], com “l” velar.',
      },
      {
        question: 'Por que Portugal escreve “facto” e o Brasil “fato”?',
        options: ['Porque o “c” se pronuncia em Portugal e não no Brasil', 'Porque o Acordo proibiu o “c”', 'Por tradição, sem motivo', 'Porque são palavras diferentes'],
        answer: 'Porque o “c” se pronuncia em Portugal e não no Brasil',
        explanation: 'O Acordo de 1990 manda escrever as consoantes pronunciadas e eliminar as mudas; cada país segue a sua pronúncia.',
      },
      {
        question: 'Em Portugal, o que distingue “falamos” de “falámos”?',
        options: ['Nada: são a mesma forma', 'O timbre do “a” tônico: [ɐ] × [a]', 'O “s” final', 'A sílaba tônica'],
        answer: 'O timbre do “a” tônico: [ɐ] × [a]',
        explanation: '“Falamos” (presente) tem [ɐ] fechado; “falámos” (pretérito) tem [a] aberto, e o acento agudo o marca.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'As formas são as mesmas nos dois países; muda o uso: Portugal conjuga o “tu” na 2ª pessoa todos os dias (tu falas, tu foste), guarda o “vós” em regiões e na literatura, distingue “falámos” de “falamos”, usa sem esforço o futuro do conjuntivo (quando puderes) e o infinitivo pessoal (antes de saíres), e ao lado do “-inho” usa mais o diminutivo “-ito”.',
    sections: [
      {
        heading: 'As pessoas do verbo: tu, você, vós e vocês',
        text: 'A gramática lista seis pessoas, e Portugal usa cinco delas no dia a dia. O “tu” leva sempre o verbo na 2ª pessoa (tu falas, tu falaste, tu vais), e é o tratamento normal entre amigos e família. O “você” e o “vocês” levam o verbo na 3ª pessoa, como no Brasil. O “vós” sobrevive em algumas zonas do Norte de Portugal (“vós sabeis”) e, sobretudo, na liturgia e na literatura, com formas que o brasileiro só vê em Camões ou na Bíblia: sois, fostes, ide. No Brasil, o “você” ocupou o lugar do “tu” em boa parte do país; onde o “tu” resiste (Sul, Norte, Nordeste, parte do Rio), a fala costuma usá-lo com o verbo na 3ª pessoa (“tu vai”), o que a norma culta dos dois países não aceita.',
        table: {
          head: ['Pessoa', 'Presente', 'Pretérito perfeito', 'Uso em Portugal', 'Uso no Brasil'],
          rows: [
            ['eu', 'falo', 'falei', 'geral', 'geral'],
            ['tu', 'falas', 'falaste', 'geral, informal', 'regional; na fala, muitas vezes “tu fala”'],
            ['você / ele', 'fala', 'falou', '“você” com cautela', '“você” é o geral'],
            ['nós', 'falamos', 'falámos', 'geral', '“falamos” nos dois tempos; “a gente fala” na fala'],
            ['vós', 'falais', 'falastes', 'regional (Norte) e literário', 'só literário e religioso'],
            ['vocês / eles', 'falam', 'falaram', 'geral', 'geral'],
          ],
        },
        examples: [
          ['Tu falas muito bem português!', 'Você fala muito bem português!'],
          ['Ontem falámos com o professor.', 'Ontem falamos com o professor.'],
          ['Vocês vêm jantar connosco?', 'Vocês vêm jantar com a gente?'],
          ['Fala mais devagar! Não fales tão depressa!', 'Fala mais devagar! Não fala tão rápido!'],
        ],
      },
      {
        heading: 'O conjuntivo: o subjuntivo com outro nome',
        text: 'Em Portugal o modo chama-se “conjuntivo”; no Brasil, “subjuntivo”. As formas são idênticas. O português tem três tempos simples desse modo: o presente (que eu faça), o pretérito imperfeito (se eu fizesse) e o futuro (quando eu fizer), este último uma raridade entre as línguas românicas, já que o espanhol, por exemplo, só o conserva em textos jurídicos e fórmulas antigas. O imperativo negativo usa sempre o presente do conjuntivo: “Não fales!”, “Não faças isso!”. Com “tu”, o português europeu põe essas formas em evidência: “quando puderes”, “se quiseres”, “não te preocupes”. O brasileiro, que costuma trocar o “tu” por “você”, usa as formas da 3ª pessoa: “quando você puder”.',
        table: {
          head: ['Tempo', 'Portugal (com tu)', 'Brasil (com você)'],
          rows: [
            ['presente', 'Espero que venhas.', 'Espero que você venha.'],
            ['imperativo negativo', 'Não te preocupes!', 'Não se preocupe! / Não se preocupa!'],
            ['pretérito imperfeito', 'Se pudesses, vinhas?', 'Se você pudesse, você vinha?'],
            ['futuro', 'Quando puderes, liga-me.', 'Quando você puder, me liga.'],
            ['futuro', 'Se quiseres, vamos juntos.', 'Se você quiser, a gente vai junto.'],
          ],
        },
        examples: [
          ['Quando chegares a Faro, manda-me uma mensagem.', 'Quando você chegar em Faro, me manda uma mensagem.'],
          ['Se tivesses tempo, ias ao Douro?', 'Se você tivesse tempo, você ia ao Douro?'],
          ['Não te esqueças do guarda-chuva.', 'Não esquece o guarda-chuva.'],
        ],
      },
      {
        heading: 'O infinitivo pessoal: o infinitivo que se conjuga',
        text: 'O português é uma das pouquíssimas línguas em que o infinitivo recebe terminação de pessoa. Ele aparece depois de preposição (para, antes de, depois de, sem, ao) e de expressões como “é melhor”, “é preciso”: “para fazermos”, “antes de saíres”, “é melhor irem já”. As terminações são as do futuro do conjuntivo dos verbos regulares, mas partem sempre do infinitivo: fazer → fazeres, fazermos (e não “fizeres”, que é futuro do conjuntivo). Em Portugal ele é vivíssimo na fala, sobretudo com “tu”; no Brasil, a fala tende a usar o infinitivo sem flexão (“para a gente fazer”, “antes de você sair”), mas a norma culta dos dois países pede a forma flexionada quando o sujeito é diferente do da oração principal ou precisa ficar claro.',
        table: {
          head: ['Pessoa', 'Infinitivo pessoal de “fazer”', 'Exemplo'],
          rows: [
            ['eu', 'fazer', 'para eu fazer'],
            ['tu', 'fazeres', 'antes de fazeres'],
            ['você / ele', 'fazer', 'sem ele fazer'],
            ['nós', 'fazermos', 'ao fazermos'],
            ['vós', 'fazerdes', 'para fazerdes (literário)'],
            ['vocês / eles', 'fazerem', 'é melhor fazerem já'],
          ],
        },
        examples: [
          ['Antes de saíres, fecha a janela.', 'Antes de você sair, fecha a janela.'],
          ['Trouxe o mapa para não nos perdermos.', 'Trouxe o mapa para a gente não se perder.'],
          ['É melhor irem de comboio.', 'É melhor vocês irem de trem.'],
        ],
      },
      {
        heading: 'Tempos que cada lado prefere e os diminutivos',
        text: 'O pretérito perfeito composto (tenho feito) indica, nos dois países, uma ação repetida ou que continua até agora: “Tenho andado cansado”. Em Portugal ele é bem mais frequente. O mais-que-perfeito simples (fizera, dissera) ficou para a literatura e para frases feitas comuns aos dois lados (“Quem me dera!”, “Pudera!”). Nos diminutivos, “-inho” e “-zinho” reinam dos dois lados do Atlântico, mas Portugal usa também o “-ito”, afetuoso e às vezes regional: “bocadito”, “pouquito”, “cãozito”, “rapazito”. E o gênero de algumas palavras muda: em Portugal diz-se “o ecrã”, “a equipa”, “o registo”; no Brasil, “a tela”, “a equipe”, “o registro”.',
        table: {
          head: ['Fenômeno', 'Portugal', 'Brasil'],
          rows: [
            ['perfeito composto', 'Tenho estudado muito.', 'Tenho estudado muito. / Ando estudando muito.'],
            ['mais-que-perfeito simples', 'literário: “Ele já saíra.”', 'literário: “Ele já saíra.”'],
            ['frase feita', 'Quem me dera!', 'Quem me dera!'],
            ['diminutivo', 'um bocadinho, um bocadito', 'um pouquinho'],
            ['diminutivo', 'o cãozinho, o cãozito', 'o cachorrinho'],
            ['gênero / forma', 'a equipa, o ecrã', 'a equipe, a tela'],
          ],
        },
        examples: [
          ['Tenho trabalhado bué, mas espera só um bocadito.', 'Tenho trabalhado muito, mas espera só um pouquinho.'],
          ['Quem me dera ir aos Açores!', 'Quem me dera ir para os Açores!'],
        ],
      },
    ],
    topics: ['pt-g5', 'pt-g9', 'pt-g16', 'pt-g17', 'pt-g18', 'pt-g40'],
    quiz: [
      {
        question: 'Qual é a forma certa na norma culta?',
        options: ['Tu vai ao Porto amanhã?', 'Tu vais ao Porto amanhã?', 'Tu vás ao Porto amanhã?', 'Tu ides ao Porto amanhã?'],
        answer: 'Tu vais ao Porto amanhã?',
        explanation: 'O “tu” leva o verbo na 2ª pessoa: tu vais. “Tu vai” é da fala de algumas regiões do Brasil.',
      },
      {
        question: 'Como fica “Quando você puder, me liga” em Portugal, com “tu”?',
        options: ['Quando podes, liga-me.', 'Quando puderes, liga-me.', 'Quando poderes, liga-me.', 'Quando pudeste, liga-me.'],
        answer: 'Quando puderes, liga-me.',
        explanation: '“Puderes” é o futuro do conjuntivo de “poder” na 2ª pessoa, formado do pretérito “puderam”.',
      },
      {
        question: 'Qual frase usa o infinitivo pessoal?',
        options: ['Quando fizeres o jantar, avisa.', 'Antes de saíres, fecha a porta.', 'Não fales alto.', 'Se pudesses, vinhas.'],
        answer: 'Antes de saíres, fecha a porta.',
        explanation: '“Saíres” é o infinitivo “sair” + a terminação de 2ª pessoa, depois da preposição “de”.',
      },
      {
        question: 'Em Portugal, “falámos”, com acento, é…',
        options: ['presente do indicativo', 'pretérito perfeito', 'futuro do conjuntivo', 'imperativo'],
        answer: 'pretérito perfeito',
        explanation: 'Em Portugal, o acento agudo separa o pretérito (falámos) do presente (falamos).',
      },
      {
        question: 'Qual destes diminutivos é mais típico de Portugal?',
        options: ['pouquinho', 'bocadito', 'cafezinho', 'devagarinho'],
        answer: 'bocadito',
        explanation: 'O sufixo “-ito” é bem mais comum em Portugal; “-inho” se usa dos dois lados.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A frase portuguesa segue a mesma gramática nos dois países, mas Portugal põe o pronome átono depois do verbo (chamo-me, diz-me), antes só quando uma palavra o atrai (não me digas) e no meio do futuro e do condicional (dir-lhe-ei); prefere “estar a + infinitivo” ao gerúndio; e está mais perto da norma culta na regência (vou ao cinema, cheguei a Braga) e no artigo com possessivos (a minha casa).',
    sections: [
      {
        heading: 'Colocação pronominal: ênclise, próclise e mesóclise',
        text: 'É a diferença que mais denuncia o brasileiro em Portugal. No português europeu, a posição normal do pronome átono é depois do verbo, com hífen: a ênclise (“Chamo-me Ana”, “Ele disse-me”). O pronome vai para antes do verbo, a próclise, quando alguma palavra o “puxa”: negação (não, nunca), certos advérbios (já, também, ainda, só, sempre), pronomes relativos e interrogativos (que, quem, onde), conjunções subordinativas (quando, se, porque) e quantificadores (tudo, alguém). No futuro e no condicional sem palavra atrativa, a norma culta pede a mesóclise, com o pronome no meio da forma: “dir-lhe-ei”, “far-se-ia”; na fala, o português evita a construção com “vou dizer-lhe”. No Brasil, a fala usa a próclise quase sempre (“Me chama”, “Ele me disse”), e a norma culta brasileira aceita “Ele me disse”; mas nenhuma das duas normas cultas aceita pronome átono no começo da frase.',
        table: {
          head: ['Contexto', 'Portugal', 'Brasil (fala)', 'Regra'],
          rows: [
            ['frase afirmativa', 'Chamo-me Rui.', 'Me chamo Rui.', 'ênclise; nunca átono no início'],
            ['sujeito + verbo', 'Ele disse-me a verdade.', 'Ele me disse a verdade.', 'PT: ênclise; BR culto aceita a próclise'],
            ['negação', 'Não me digas!', 'Não me diga!', 'próclise obrigatória'],
            ['“já”, “também”, “ainda”', 'Já te disse.', 'Já te disse.', 'próclise obrigatória'],
            ['relativo, conjunção', 'o livro que me deste; quando o vi', 'o livro que você me deu; quando vi ele', 'próclise obrigatória'],
            ['futuro, condicional', 'Dir-lhe-ei amanhã.', 'Vou falar para ele amanhã.', 'mesóclise (culta) ou perífrase'],
            ['dois pronomes', 'Dá-mo!', 'Me dá isso!', 'me + o = mo; lhe + o = lho'],
          ],
        },
        examples: [
          ['Chamo-me Joana e moro em Coimbra.', 'Me chamo Joana e moro em Coimbra.'],
          ['Não me digas que já te esqueceste!', 'Não vai me dizer que você já esqueceu!'],
          ['O livro? Já lho dei.', 'O livro? Já dei para ele.'],
          ['Dir-lhe-ei tudo amanhã.', 'Eu lhe direi tudo amanhã. / Vou contar tudo para ele amanhã.'],
        ],
      },
      {
        heading: 'Estar a + infinitivo: a ação em curso',
        text: 'Para a ação que está a acontecer, o português padrão de Portugal usa “estar a + infinitivo”: “Estou a trabalhar”. O Brasil usa o gerúndio: “Estou trabalhando”. As duas construções são antigas e corretas; cada norma escolheu a sua. O mesmo vale para os outros verbos auxiliares de aspecto: andar, ficar, continuar, começar a, passar a. Curiosamente, no Alentejo e no Algarve o gerúndio é comum na fala, como no Brasil. E o gerúndio continua vivo em Portugal fora dessas perífrases, em orações adverbiais: “Chegando a casa, telefona-me”.',
        table: {
          head: ['Portugal', 'Brasil', 'Valor'],
          rows: [
            ['Estou a ler.', 'Estou lendo.', 'ação em curso'],
            ['Anda a estudar muito.', 'Anda estudando muito.', 'ação repetida no período'],
            ['Ficou a ver o mar.', 'Ficou vendo o mar.', 'duração'],
            ['Continua a chover.', 'Continua chovendo.', 'continuidade'],
            ['Está sempre a queixar-se.', 'Vive reclamando.', 'hábito, com ênfase'],
          ],
        },
        examples: [
          ['Agora não posso, estou a jantar.', 'Agora não posso, estou jantando.'],
          ['Está a chover em Braga há três dias.', 'Está chovendo em Braga há três dias.'],
          ['O que é que andas a fazer?', 'O que você anda fazendo?'],
        ],
      },
      {
        heading: 'Regência, crase e o artigo',
        text: 'Regência é a preposição que o verbo ou o nome exige. Aqui a fala portuguesa fica mais perto da norma culta comum: “vou ao cinema”, “cheguei a Braga”, “assisti ao jogo”, onde a fala brasileira diz “fui no cinema”, “cheguei em Braga”, “assisti o jogo”. Em Portugal, “ir a” indica ida breve e “ir para”, permanência: “vou a casa buscar o casaco” × “vou para casa”. O português europeu também usa artigo antes de possessivos e de nomes de pessoas (“a minha mãe”, “a Ana”), por isso a crase aparece mais: “Dei o livro à Ana”. No Brasil, o artigo com possessivo e nome próprio é opcional, e a crase acompanha essa opção. A crase propriamente dita é a mesma regra nos dois países: preposição “a” + artigo “a”.',
        table: {
          head: ['Verbo', 'Norma culta (PT e BR)', 'Fala do Brasil'],
          rows: [
            ['ir', 'Vou ao mercado.', 'Vou no mercado.'],
            ['chegar', 'Cheguei a Lisboa.', 'Cheguei em Lisboa.'],
            ['assistir (ver)', 'Assisti ao filme.', 'Assisti o filme.'],
            ['obedecer', 'Obedeço às regras.', 'Obedeço as regras.'],
            ['preferir', 'Prefiro chá a café.', 'Prefiro chá do que café.'],
            ['namorar', 'Namoro a Rita.', 'Namoro com a Rita.'],
          ],
        },
        examples: [
          ['Ontem fomos ao teatro e depois à praia.', 'Ontem fomos no teatro e depois na praia.'],
          ['Cheguei a Aveiro ao meio-dia.', 'Cheguei em Aveiro ao meio-dia.'],
          ['Dei a prenda à minha irmã.', 'Dei o presente para minha irmã.'],
        ],
      },
      {
        heading: 'Concordância, relativos e vírgula',
        text: 'As regras são as mesmas nas duas normas cultas, e os tropeços também. “Haver” no sentido de existir e “fazer” indicando tempo são impessoais: “havia muitas pessoas”, “faz dois anos” (nunca “haviam”, “fazem”). Na passiva com “se”, o verbo concorda: “vendem-se casas”. Com “a maioria de” + plural, as duas concordâncias são aceitas. Os relativos seguem a regência: “o filme de que te falei”, “a cidade onde vivo”, “o autor cujo livro li” (sem artigo depois de “cujo”); “aonde” só com verbo de movimento com “a”. A vírgula nunca separa o sujeito do verbo. A diferença tipográfica mais visível é que Portugal prefere as aspas angulares « », e o Brasil as aspas curvas “ ”.',
        table: {
          head: ['Errado', 'Certo (nas duas normas)', 'Regra'],
          rows: [
            ['Haviam muitas pessoas.', 'Havia muitas pessoas.', '“haver” = existir é impessoal'],
            ['Fazem dois anos que vivo aqui.', 'Faz dois anos que vivo aqui.', '“fazer” de tempo é impessoal'],
            ['Vende-se casas.', 'Vendem-se casas.', 'passiva: o verbo concorda'],
            ['o autor cujo o livro li', 'o autor cujo livro li', '“cujo” sem artigo'],
            ['o filme que te falei', 'o filme de que te falei', 'falar de'],
            ['Os alunos da turma, chegaram.', 'Os alunos da turma chegaram.', 'sem vírgula entre sujeito e verbo'],
          ],
        },
        examples: [
          ['Havia muita gente na festa.', 'Tinha muita gente na festa. (norma culta: Havia muita gente.)'],
          ['Faz três anos que vivo em Évora.', 'Faz três anos que eu moro em Évora.'],
          ['A rapariga com quem falei é de Guimarães.', 'A moça com quem eu falei é de Guimarães.'],
        ],
      },
    ],
    topics: ['pt-g6', 'pt-g7', 'pt-g8', 'pt-g12', 'pt-g13', 'pt-g14', 'pt-g15', 'pt-g21', 'pt-g22', 'pt-g28'],
    quiz: [
      {
        question: 'Como um português diz “Me chamo Rui”?',
        options: ['Me chamo Rui.', 'Chamo-me Rui.', 'Chamo Rui-me.', 'Eu me chamo-me Rui.'],
        answer: 'Chamo-me Rui.',
        explanation: 'Sem palavra atrativa, a posição normal em Portugal é a ênclise; e nenhuma norma culta começa a frase com pronome átono.',
      },
      {
        question: 'Em qual frase a próclise é obrigatória?',
        options: ['Diz-me a verdade.', 'Não me digas isso.', 'Dá-mo já.', 'Chamo-me Ana.'],
        answer: 'Não me digas isso.',
        explanation: 'A negação atrai o pronome para antes do verbo, também em Portugal.',
      },
      {
        question: 'Qual é a forma culta de “direi a ele” com pronome átono?',
        options: ['Direi-lhe.', 'Dir-lhe-ei.', 'Lhe direi.', 'Dir-ei-lhe.'],
        answer: 'Dir-lhe-ei.',
        explanation: 'O futuro não aceita ênclise; sem palavra atrativa, a norma culta pede a mesóclise: dir-lhe-ei.',
      },
      {
        question: 'Como fica “Estou lendo um livro” em Portugal?',
        options: ['Estou lendo um livro.', 'Estou a ler um livro.', 'Estou ler um livro.', 'Leio-me um livro.'],
        answer: 'Estou a ler um livro.',
        explanation: 'O português padrão de Portugal usa “estar a + infinitivo” para a ação em curso.',
      },
      {
        question: 'Qual frase segue a norma culta dos dois países?',
        options: ['Haviam muitos turistas.', 'Havia muitos turistas.', 'Cheguei em Lisboa.', 'Vende-se apartamentos.'],
        answer: 'Havia muitos turistas.',
        explanation: '“Haver” no sentido de existir é impessoal e fica no singular.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário básico é comum, mas o do dia a dia muda (pequeno-almoço, autocarro, telemóvel), algumas palavras existem dos dois lados com sentidos diferentes (propina, constipação, apelido, rapariga), os números grandes não coincidem (bilião × bilhão) e cada país tem as suas imagens idiomáticas para a mesma ideia.',
    sections: [
      {
        heading: 'O dia a dia com outros nomes',
        text: 'Os dois países se separaram antes de existirem muitas das coisas modernas, e cada um batizou o trem, o ônibus e o celular à sua maneira. Outras diferenças são antigas: Portugal manteve “pequeno-almoço” e “casa de banho”, o Brasil criou “café da manhã” e “banheiro”. Quase sempre a palavra do outro lado é entendida; o que muda é o que soa natural.',
        table: {
          head: ['Portugal', 'Brasil'],
          rows: [
            ['pequeno-almoço', 'café da manhã'],
            ['autocarro / comboio / elétrico', 'ônibus / trem / bonde'],
            ['telemóvel / ecrã', 'celular / tela'],
            ['frigorífico', 'geladeira'],
            ['casa de banho / sanita', 'banheiro / vaso sanitário'],
            ['sumo / gelado', 'suco / sorvete'],
            ['talho / montra', 'açougue / vitrine'],
            ['chávena / bica', 'xícara / cafezinho'],
            ['passadeira / peão', 'faixa de pedestres / pedestre'],
            ['guarda-redes / relvado', 'goleiro / gramado'],
            ['miúdo / rapaz / rapariga', 'criança, garoto / moço / moça'],
          ],
        },
        examples: [
          ['Tomei o pequeno-almoço e apanhei o autocarro.', 'Tomei café da manhã e peguei o ônibus.'],
          ['Deixei o telemóvel na casa de banho.', 'Deixei o celular no banheiro.'],
          ['Uma bica e um sumo de laranja, se faz favor.', 'Um cafezinho e um suco de laranja, por favor.'],
        ],
      },
      {
        heading: 'Falsos amigos entre as normas',
        text: 'Algumas palavras existem nos dois países com sentidos diferentes, e às vezes o mal-entendido é sério. “Rapariga” é a palavra neutra para “moça” em Portugal, mas em muitas regiões do Brasil é pejorativa; o brasileiro deve saber que, em Portugal, ela não ofende ninguém. “Bicha” é, tradicionalmente, a fila de espera em Portugal (hoje também se diz “fila”); no Brasil é um termo usado para ofender homossexuais, e convém evitá-lo. “Puto” é, em Portugal, um “garoto” em registro informal; no Brasil a palavra é vulgar. Nos outros casos, o equívoco é só engraçado.',
        table: {
          head: ['Palavra', 'Em Portugal', 'No Brasil'],
          rows: [
            ['rapariga', 'moça, garota (neutro)', 'pejorativo em muitas regiões'],
            ['bicha', 'fila de espera', 'termo ofensivo; evite'],
            ['propina', 'taxa paga à universidade', 'suborno'],
            ['constipação', 'resfriado', 'prisão de ventre'],
            ['apelido', 'sobrenome', 'alcunha (em Portugal: “alcunha”)'],
            ['fato', 'terno (roupa)', 'acontecimento (em Portugal: “facto”)'],
            ['banheiro', 'salva-vidas da praia', 'casa de banho'],
            ['camisola', 'suéter, blusa de lã; camisa de time', 'camisola de dormir'],
            ['reforma', 'aposentadoria (e também reforma)', 'reforma, obra'],
            ['giro', 'bonito, legal', 'volta, passeio'],
          ],
        },
        examples: [
          ['A propina deste ano subiu.', 'A mensalidade da faculdade deste ano subiu.'],
          ['Estou constipado, tenho febre.', 'Estou resfriado, estou com febre.'],
          ['Qual é o teu apelido? — Ferreira.', 'Qual é o seu sobrenome? — Ferreira.'],
          ['Vou pôr o fato para o casamento.', 'Vou pôr o terno para o casamento.'],
        ],
      },
      {
        heading: 'Números: bilião não é bilhão',
        text: 'Portugal segue a escala longa, usada na maior parte da Europa: um milhão de milhões é um “bilião” (10¹²). O Brasil segue a escala curta: “bilhão” é mil milhões (10⁹). Por isso uma notícia brasileira de “2 bilhões” vira, em Portugal, “2 mil milhões”. Nos números pequenos, a diferença é de forma: Portugal escreve e diz “dezasseis, dezassete, dezanove”, o Brasil “dezesseis, dezessete, dezenove”. E o euro divide-se em “cêntimos”.',
        table: {
          head: ['Valor', 'Portugal', 'Brasil'],
          rows: [
            ['16, 17, 19', 'dezasseis, dezassete, dezanove', 'dezesseis, dezessete, dezenove'],
            ['10⁹', 'mil milhões', 'um bilhão'],
            ['10¹²', 'um bilião', 'um trilhão'],
            ['0,50 €', 'cinquenta cêntimos', '(no real) cinquenta centavos'],
          ],
        },
        examples: [
          ['O projeto custou dois mil milhões de euros.', 'O projeto custou dois bilhões de euros.'],
          ['A minha irmã tem dezassete anos.', 'Minha irmã tem dezessete anos.'],
        ],
      },
      {
        heading: 'Expressões idiomáticas: a mesma ideia, outra imagem',
        text: 'Cada lado do Atlântico criou as suas imagens para as mesmas situações. Muitas expressões são comuns (custar os olhos da cara, ficar a ver navios / ficar vendo navios, ser canja), mas outras só existem de um lado e não se entendem literalmente. O sentido de uma expressão idiomática não é a soma das palavras: é uma unidade de significado própria.',
        table: {
          head: ['Portugal', 'Brasil', 'Sentido'],
          rows: [
            ['estar-se nas tintas', 'não estar nem aí', 'não se importar'],
            ['meter água', 'pisar na bola', 'errar, fazer asneira'],
            ['dar graxa', 'puxar o saco', 'bajular'],
            ['encher chouriços', 'encher linguiça', 'falar ou escrever sem conteúdo'],
            ['armar-se em esperto', 'se achar o esperto', 'fingir que sabe mais'],
            ['ser canja', 'ser moleza (ou “ser canja”)', 'ser fácil'],
          ],
        },
        examples: [
          ['Ele está-se nas tintas para o que dizem.', 'Ele não está nem aí para o que falam.'],
          ['Meti água no exame de ontem.', 'Pisei na bola na prova de ontem.'],
          ['Isso é canja!', 'Isso é moleza!'],
        ],
      },
    ],
    topics: ['pt-g3', 'pt-g4', 'pt-g26'],
    quiz: [
      {
        question: 'O que é o “pequeno-almoço” em Portugal?',
        options: ['O almoço leve', 'O café da manhã', 'O lanche da tarde', 'A sobremesa'],
        answer: 'O café da manhã',
        explanation: '“Pequeno-almoço” é a primeira refeição do dia; o “almoço” é a do meio-dia, como no Brasil.',
      },
      {
        question: 'Um estudante português reclama da “propina”. Do que ele fala?',
        options: ['De um suborno', 'Da taxa paga à universidade', 'De uma gorjeta', 'De uma multa'],
        answer: 'Da taxa paga à universidade',
        explanation: 'Em Portugal, “propina” é a taxa de matrícula e frequência do ensino superior; o sentido de suborno é brasileiro.',
      },
      {
        question: 'Em Portugal, “estou constipado” quer dizer…',
        options: ['estou com prisão de ventre', 'estou resfriado', 'estou cansado', 'estou preocupado'],
        answer: 'estou resfriado',
        explanation: 'A “constipação” portuguesa é o resfriado; o sentido intestinal é o do Brasil.',
      },
      {
        question: 'Quanto vale “um bilião” em Portugal?',
        options: ['Mil milhões (10⁹)', 'Um milhão de milhões (10¹²)', 'Cem milhões', 'O mesmo que no Brasil'],
        answer: 'Um milhão de milhões (10¹²)',
        explanation: 'Portugal usa a escala longa: o “bilhão” brasileiro (10⁹) é, lá, “mil milhões”.',
      },
      {
        question: 'Qual é o equivalente português de “pisar na bola”?',
        options: ['meter água', 'dar graxa', 'ser canja', 'encher chouriços'],
        answer: 'meter água',
        explanation: '“Meter água” é errar, cometer uma gafe; “dar graxa” é bajular e “ser canja” é ser fácil.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Em Portugal, o como se diz pesa tanto quanto o que se diz: “tu” só com quem é próximo; no formal, “o senhor”, o nome ou a 3ª pessoa sem pronome (“A Ana quer um café?”), porque o “você” pode soar distante ou brusco; títulos como “Dr.” e “Dona”; pedidos no imperfeito (queria um café, se faz favor); e marcadores próprios da conversa (pois, pronto, se calhar, ora essa).',
    sections: [
      {
        heading: 'Tu, você, o senhor e a 3ª pessoa',
        text: 'O sistema de tratamento é a diferença pragmática mais importante. Em Portugal, “tu” é o tratamento de família, amigos, colegas próximos e crianças. Com desconhecidos, clientes e pessoas mais velhas, usa-se “o senhor / a senhora”, o nome da pessoa ou simplesmente o verbo na 3ª pessoa, sem pronome: “Quer mais alguma coisa?”, “A Ana já almoçou?”. O “você” existe e é usado, mas é delicado: entre iguais pode soar neutro, mas dirigido a quem se deve respeito pode parecer distante ou até brusco. Por isso os portugueses o evitam com frequência, e a 3ª pessoa sem pronome é a escolha mais segura. No Brasil, “você” é o tratamento neutro por excelência, e “o senhor” marca respeito, idade ou hierarquia.',
        table: {
          head: ['Situação', 'Portugal', 'Brasil'],
          rows: [
            ['amigo, família', 'Tu vens hoje?', 'Você vem hoje? (ou “tu vem”, em várias regiões)'],
            ['desconhecido, cliente', 'Deseja mais alguma coisa?', 'Você deseja mais alguma coisa?'],
            ['respeito, mais velho', 'O senhor quer sentar-se?', 'O senhor quer se sentar?'],
            ['pelo nome', 'A Dona Rosa já almoçou?', 'Dona Rosa, a senhora já almoçou?'],
            ['jovem, no comércio', 'A menina deseja?', 'A moça deseja? / Pois não?'],
            ['“com você”', 'Posso falar consigo?', 'Posso falar com você?'],
            ['plural', 'Vocês querem vir?', 'Vocês querem vir?'],
          ],
        },
        examples: [
          ['O senhor sabe onde fica a estação?', 'O senhor sabe onde fica a estação?'],
          ['A menina quer mais um café?', 'Você quer mais um café?'],
          ['Posso falar consigo um minuto?', 'Posso falar com você um minuto?'],
        ],
      },
      {
        heading: 'Pedir, agradecer e atender: a cortesia de cada lado',
        text: 'Nos dois países, o imperfeito suaviza o pedido: “Queria um café”. Em Portugal essa é a forma normal em qualquer balcão, acompanhada de “se faz favor” (mais comum que “por favor”) e das perguntas no imperfeito: “Podia ajudar-me?”, “Importava-se de fechar a janela?”. O agradecimento concorda com quem fala, nas duas normas: o homem diz “obrigado”, a mulher “obrigada”. A resposta a “obrigado” pode ser “De nada”, “Não tem de quê” ou o português “Ora essa!” (o equivalente do “Imagina!” brasileiro). Ao telefone, o português atende com “Estou?” ou “Está?”; o brasileiro, com “Alô?”. E “Adeus” é uma despedida neutra do dia a dia em Portugal, sem o tom dramático que tem no Brasil.',
        table: {
          head: ['Ato', 'Portugal', 'Brasil'],
          rows: [
            ['pedir', 'Queria um galão, se faz favor.', 'Eu queria um café com leite, por favor.'],
            ['pedir ajuda', 'Podia ajudar-me?', 'Você poderia me ajudar?'],
            ['responder a “obrigado”', 'De nada. / Ora essa!', 'De nada. / Imagina!'],
            ['atender o telefone', 'Estou? / Está?', 'Alô?'],
            ['despedir-se', 'Adeus, até amanhã! / Até já!', 'Tchau, até amanhã! / Até daqui a pouco!'],
          ],
        },
        examples: [
          ['Queria uma nata, se faz favor.', 'Eu queria um pastel de nata, por favor.'],
          ['Importava-se de fechar a janela?', 'Você se importa de fechar a janela?'],
          ['— Obrigada! — Ora essa!', '— Obrigada! — Imagina!'],
        ],
      },
      {
        heading: 'Títulos: Dr., Eng.º e Dona',
        text: 'Em Portugal, quem tem licenciatura costuma ser tratado por “Senhor Doutor” ou “Doutora”, mesmo sem doutoramento; o engenheiro, por “Senhor Engenheiro” (Eng.º); a senhora mais velha, por “Dona” + nome próprio. Nos serviços, em cartas e e-mails, o título é quase obrigatório, e usar só o nome pode soar pouco respeitoso. O Brasil também usa “doutor” para médicos, advogados e autoridades, mas com menos rigidez. Na escrita formal portuguesa aparecem as abreviaturas “Exmo. Sr.”, “Exma. Sr.ª”, “V. Ex.ª” (Vossa Excelência).',
        examples: [
          ['Bom dia, Senhor Doutor. Tem um minuto?', 'Bom dia, doutor. O senhor tem um minuto?'],
          ['A Dona Lurdes está?', 'A dona Lurdes está?'],
          ['Exmo. Senhor Eng.º Carlos Matos', 'Prezado Senhor Engenheiro Carlos Matos'],
        ],
      },
      {
        heading: 'Os marcadores da conversa: pois, pronto, se calhar',
        text: 'A conversa portuguesa é temperada por palavrinhas que quase não têm significado próprio, mas organizam a interação. “Pois” (ou “pois é”, “pois, pois”) concorda e mostra que se está a ouvir. “Pronto” fecha um assunto, resigna-se ou marca uma transição: “Pronto, já está”, “Pronto, paciência”. “Se calhar” é “talvez”. “Ora” abre uma resposta ou um raciocínio, e “ora essa” agradece ou protesta. “Pois não?” no fim de uma frase negativa pede confirmação, como o “né?”: “Não te esqueceste, pois não?”. Atenção: no Brasil, “Pois não?” é a oferta de ajuda do atendente (“Em que posso ajudar?”), um sentido que em Portugal soaria estranho.',
        table: {
          head: ['Marcador', 'Em Portugal', 'Equivalente no Brasil'],
          rows: [
            ['pois / pois é', 'concordar, acompanhar', 'é / pois é / é mesmo'],
            ['pronto', 'encerrar, resignar-se, “certo”', 'pronto / tá bom / enfim'],
            ['se calhar', 'talvez', 'talvez / de repente'],
            ['ora essa', 'de nada; ou “que absurdo!”', 'imagina / que isso'],
            ['…, pois não?', 'confirmação de frase negativa', '…, né?'],
            ['então?', 'e aí? tudo bem?', 'e aí?'],
          ],
        },
        examples: [
          ['— Está frio hoje. — Pois está.', '— Está frio hoje. — É, está mesmo.'],
          ['Pronto, está decidido: vamos a Sintra.', 'Pronto, está decidido: a gente vai para Sintra.'],
          ['Se calhar chove amanhã.', 'Talvez chova amanhã.'],
          ['Não te esqueceste da chave, pois não?', 'Você não esqueceu a chave, né?'],
        ],
      },
    ],
    topics: ['pt-g2', 'pt-g10', 'pt-g11', 'pt-g24', 'pt-g27'],
    quiz: [
      {
        question: 'Qual é a forma mais segura de oferecer algo a um desconhecido em Portugal?',
        options: ['Você quer um café?', 'Tu queres um café?', 'Quer um café?', 'Vós quereis um café?'],
        answer: 'Quer um café?',
        explanation: 'A 3ª pessoa sem pronome é neutra e cortês; o “você” pode soar distante e o “tu” é íntimo.',
      },
      {
        question: 'O que quer dizer “Posso falar consigo?” em Portugal?',
        options: ['Posso falar sozinho?', 'Posso falar com o senhor / com você?', 'Posso falar com ele?', 'Posso falar comigo?'],
        answer: 'Posso falar com o senhor / com você?',
        explanation: 'Em Portugal, “consigo” se usa para a pessoa com quem se fala, no tratamento de 3ª pessoa.',
      },
      {
        question: 'Como um português costuma atender o telefone?',
        options: ['Alô?', 'Estou?', 'Pronto?', 'Diga-me!'],
        answer: 'Estou?',
        explanation: '“Estou?” ou “Está?” (às vezes “Está lá?”) são as formas usuais em Portugal.',
      },
      {
        question: 'Num café de Lisboa, qual pedido soa mais natural?',
        options: ['Me vê um café.', 'Queria um café, se faz favor.', 'Quero café já.', 'Me dá um café aí.'],
        answer: 'Queria um café, se faz favor.',
        explanation: 'O imperfeito de cortesia e o “se faz favor” são a forma normal de pedir em Portugal.',
      },
      {
        question: 'O que significa “se calhar” em Portugal?',
        options: ['com certeza', 'talvez', 'se couber', 'nunca'],
        answer: 'talvez',
        explanation: '“Se calhar vou amanhã” = “Talvez eu vá amanhã”.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'Nos dois países a língua muda do registro íntimo (fixe, bué, malta) ao administrativo (Exmo. Senhor, Venho por este meio) e ao literário (dir-vos-ei, fizera); a norma culta é comum no essencial e própria em cada país nos detalhes; e a mesma língua dá a voz de Camões, Eça, Pessoa e Machado de Assis, dos crioulos de Cabo Verde e do galego.',
    sections: [
      {
        heading: 'Os registros: da gíria ao ofício',
        text: 'Cada situação pede um registro. Na rua, os jovens portugueses dizem “fixe” (legal), “bué” (muito), “giro” (bonito), “a malta” (a galera) e “porreiro” (ótimo). No registro corrente, a frase é neutra. No formal escrito, Portugal tem fórmulas fixas: a carta abre com “Exmo. Senhor” e fecha com “Com os melhores cumprimentos”; o pedido começa por “Venho por este meio solicitar”. O Brasil tem as suas: “Prezado Senhor”, “Venho, por meio desta, solicitar”, “Atenciosamente”. No texto acadêmico e jornalístico, os dois países usam a impessoalidade (“pretende-se”, “considera-se”) e a nominalização (“a decisão do Governo” em vez de “o Governo decidiu”); os jornais portugueses preferem verbos declarativos como “adiantou”, “sublinhou”, “avançou”.',
        table: {
          head: ['Registro', 'Portugal', 'Brasil'],
          rows: [
            ['gíria', 'Bué fixe, pá!', 'Muito legal, cara!'],
            ['corrente', 'Estou a gostar muito disto.', 'Estou gostando muito disso.'],
            ['cuidado', 'Gostaria de lhe agradecer a ajuda.', 'Gostaria de agradecer a sua ajuda.'],
            ['carta formal: abertura', 'Exmo. Senhor,', 'Prezado Senhor,'],
            ['carta formal: fecho', 'Com os melhores cumprimentos,', 'Atenciosamente,'],
            ['acadêmico', 'Pretende-se demonstrar que…', 'Pretende-se demonstrar que…'],
          ],
        },
        examples: [
          ['A festa foi bué fixe, estava lá a malta toda.', 'A festa foi muito legal, a galera toda estava lá.'],
          ['Venho por este meio solicitar a marcação de uma reunião.', 'Venho, por meio desta, solicitar o agendamento de uma reunião.'],
          ['O ministro adiantou que a decisão será tomada amanhã.', 'O ministro afirmou que a decisão será tomada amanhã.'],
        ],
      },
      {
        heading: 'A norma culta: comum no essencial, própria nos detalhes',
        text: 'A norma culta é a variedade usada na escrita cuidada, na escola, na imprensa e na administração. Portugal e Brasil partilham o essencial: a concordância, a regência, a crase, os tempos do conjuntivo, a proibição do pronome átono no início da frase. Mas cada país tem a sua norma, descrita pelas suas gramáticas e dicionários, e nenhuma é “mais correta”. As diferenças aparecem na colocação pronominal (a norma brasileira aceita “Ele me disse”), no progressivo, em alguns hábitos gráficos (os porquês, as aspas, os meses com minúscula nos dois países desde o Acordo) e no vocabulário. Dentro de cada país há ainda variação regional: no Norte de Portugal o “v” pode soar [b] e o “ou” [ow]; no Alentejo ouve-se o gerúndio; os Açores e a Madeira têm sotaques próprios. E o português é língua oficial também em Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste e Guiné Equatorial, e uma das línguas oficiais de Macau.',
        table: {
          head: ['Ponto', 'Norma culta de Portugal', 'Norma culta do Brasil'],
          rows: [
            ['pronome com sujeito expresso', 'Ele disse-me.', 'Ele me disse. / Ele disse-me.'],
            ['ação em curso', 'Está a chover.', 'Está chovendo.'],
            ['pergunta com “porque”', 'Porque não vieste? — Porquê?', 'Por que você não veio? — Por quê?'],
            ['aspas', '«…»', '“…”'],
            ['conjuntivo / subjuntivo', 'Espero que venhas.', 'Espero que você venha.'],
          ],
        },
        examples: [
          ['Porque não vieste ontem? Não sei porquê.', 'Por que você não veio ontem? Não sei por quê.'],
          ['O Pedro disse-me que está a estudar em Coimbra.', 'O Pedro me disse que está estudando em Coimbra.'],
        ],
      },
      {
        heading: 'Variação, crioulos e o galego',
        text: 'O contacto do português com outras línguas, desde o século XV, deu origem a crioulos: línguas novas, com gramática própria, e não “português mal falado”. Os mais falados são o crioulo de Cabo Verde e o da Guiné-Bissau; em São Tomé fala-se o forro; na Ásia, restam o papiá kristang de Malaca e memórias do patuá de Macau. Ao norte de Portugal, o galego é língua irmã: nasceu do mesmo galego-português medieval em que se escreveram as cantigas de amigo e separou-se do português ao longo dos séculos, com a fronteira política.',
        examples: [
          ['Em Angola e Moçambique, o português ganhou palavras das línguas bantas.', 'Em Angola e Moçambique, o português ganhou palavras das línguas bantas.'],
          ['O galego e o português nasceram da mesma língua medieval.', 'O galego e o português nasceram da mesma língua medieval.'],
        ],
      },
      {
        heading: 'Da literatura aos provérbios',
        text: 'A língua literária guarda o que a fala perdeu: o “vós” (dir-vos-ei), a mesóclise, o mais-que-perfeito simples (fizera), a ordem inversa. Camões abre “Os Lusíadas” (1572) com um hipérbato, a inversão da ordem direta, e define o amor por antíteses num soneto célebre. Fernando Pessoa escreveu com vários heterônimos, cada um com o seu estilo; o semi-heterônimo Bernardo Soares deixou a frase “Minha pátria é a língua portuguesa”. Eça de Queirós e Machado de Assis são mestres da ironia, e Cesário Verde fez da Lisboa do século XIX matéria de poesia. Os provérbios, comuns aos dois países, mudam às vezes só na sintaxe: “dois a voar” em Portugal, “dois voando” no Brasil.',
        table: {
          head: ['Autor', 'Trecho', 'Recurso'],
          rows: [
            ['Camões', '“As armas e os barões assinalados, / Que da ocidental praia Lusitana…”', 'hipérbato, vocabulário épico'],
            ['Camões', '“Amor é fogo que arde sem se ver”', 'metáfora e antítese'],
            ['Fernando Pessoa', '“O poeta é um fingidor. / Finge tão completamente…”', 'paradoxo'],
            ['Machado de Assis', '“Ao vencedor, as batatas!” (Quincas Borba)', 'ironia'],
            ['provérbio', 'Mais vale um pássaro na mão do que dois a voar.', 'paralelismo; PT “a voar” × BR “voando”'],
          ],
        },
        examples: [
          ['Amor é fogo que arde sem se ver.', 'Camões: metáfora e antítese num soneto.'],
          ['Mais vale um pássaro na mão do que dois a voar.', 'Mais vale um pássaro na mão do que dois voando.'],
          ['Quem me dera que ele viera!', 'Quem me dera que ele tivesse vindo! (mais-que-perfeito literário)'],
        ],
      },
    ],
    topics: ['pt-g23', 'pt-g25', 'pt-g30', 'pt-g31', 'pt-g32', 'pt-g33', 'pt-g34', 'pt-g35', 'pt-g36', 'pt-g37', 'pt-g38', 'pt-g39'],
    quiz: [
      {
        question: 'Como fecha uma carta formal em Portugal?',
        options: ['Atenciosamente,', 'Com os melhores cumprimentos,', 'Beijos,', 'Abraço,'],
        answer: 'Com os melhores cumprimentos,',
        explanation: '“Com os melhores cumprimentos” é o fecho formal português; “Atenciosamente” é o brasileiro.',
      },
      {
        question: 'O que quer dizer “bué fixe” na gíria de Portugal?',
        options: ['muito legal', 'pouco firme', 'bem parado', 'meio chato'],
        answer: 'muito legal',
        explanation: '“Bué” é “muito” e “fixe” é “legal”; é registro informal, próprio da fala jovem.',
      },
      {
        question: 'Qual afirmação sobre as normas de Portugal e do Brasil é correta?',
        options: ['A de Portugal é a original e mais correta', 'A do Brasil é mais moderna e mais correta', 'São duas normas da mesma língua, com a mesma dignidade', 'Só a de Portugal tem norma culta'],
        answer: 'São duas normas da mesma língua, com a mesma dignidade',
        explanation: 'Cada país tem a sua norma culta, descrita pelas suas gramáticas; nenhuma é “mais correta”.',
      },
      {
        question: 'Que recurso Camões usa em “As armas e os barões assinalados, / Que da ocidental praia Lusitana…”?',
        options: ['Hipérbato (ordem inversa)', 'Onomatopeia', 'Eufemismo', 'Gíria'],
        answer: 'Hipérbato (ordem inversa)',
        explanation: 'A ordem direta seria “Que da praia ocidental lusitana”; a inversão é típica da epopeia.',
      },
      {
        question: 'O que é um crioulo de base portuguesa?',
        options: ['Português falado com erros', 'Uma língua nova, com gramática própria, nascida do contacto', 'Um sotaque do Brasil', 'O galego'],
        answer: 'Uma língua nova, com gramática própria, nascida do contacto',
        explanation: 'O crioulo de Cabo Verde, por exemplo, é uma língua com sistema próprio, não português deturpado.',
      },
    ],
  },
];
