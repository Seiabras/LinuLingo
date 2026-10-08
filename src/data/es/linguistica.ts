import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao espanhol (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_ES: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O espanhol tem só cinco vogais, todas orais e sempre cheias, e alguns sons que o português do Brasil não tem ou usa em outro lugar: o “j” raspado [x], o “r” vibrado no começo da palavra, o [θ] da Espanha e as versões suaves de b, d e g.',
    sections: [
      {
        heading: 'Cinco vogais, nenhuma nasal e nenhuma reduzida',
        text: 'O português do Brasil tem sete vogais orais (com “é” aberto e “ê” fechado, “ó” e “ô”) e ainda as nasais (lã, bom, vim). O espanhol tem só cinco: a, e, i, o, u, e nenhuma é nasal. Além disso, a vogal átona não enfraquece: “leche” termina em [e], nunca em “i”, e “todo” termina em [o], nunca em “u”. O sotaque brasileiro mais comum no espanhol vem justamente daí.',
        table: {
          head: ['Palavra', 'Em espanhol', 'O erro típico do brasileiro'],
          rows: [
            ['leche', '[ˈlet͡ʃe], com [e] final', '“létchi”, com “i” no fim'],
            ['todo', '[ˈtoðo], com [o] final', '“todu”'],
            ['pan', '[pan], com o [n] pronunciado', '“pã”, com vogal nasal'],
            ['también', '[tamˈbjen]', '“tambiẽ”, engolindo o [n]'],
            ['bueno', '[ˈbweno], “e” médio', '“buéno”, com “é” aberto'],
          ],
        },
        examples: [
          ['leche', 'leite: [ˈlet͡ʃe]'],
          ['Mi pan es grande.', 'Meu pão é grande. [n] no fim de “pan”, sem nasalizar'],
        ],
      },
      {
        heading: 'As consoantes que pedem atenção',
        table: {
          head: ['Letra', 'IPA', 'Como produzir', 'Exemplo'],
          rows: [
            ['j, g + e/i', '[x]', 'raspando no fundo da boca, como o “rr” carioca de “carro”', 'jamón [xaˈmon], gente [ˈxente]'],
            ['r inicial, rr', '[r]', 'a ponta da língua vibra várias vezes atrás dos dentes; nunca o “r” de “rato” do Brasil', 'rojo [ˈroxo], perro [ˈpero]'],
            ['r entre vogais', '[ɾ]', 'uma batida só, como em “caro”', 'pero [ˈpeɾo]'],
            ['ll, y', '[ʝ]', 'um “i” apertado, quase um “j” (no Rio da Prata vira [ʃ], como “ch”)', 'lluvia [ˈʝuβja], yo [ʝo]'],
            ['ñ', '[ɲ]', 'igual ao “nh” de “banho”', 'año [ˈaɲo]'],
            ['z, c + e/i', '[s] / [θ]', 'na América, “s”; na maior parte da Espanha, a língua entre os dentes, como o “th” do inglês “think”', 'cielo [ˈsjelo] / [ˈθjelo]'],
            ['l final', '[l]', 'a ponta da língua encosta nos dentes; nunca vira “u”', 'Brasil [bɾaˈsil], sol [sol]'],
            ['h', '—', 'muda, sempre', 'hola [ˈola]'],
          ],
        },
        text: 'O [x] e o [r] existem no português do Brasil, mas em outros lugares: o carioca diz [x] em “carro” e “rato”, e o espanhol usa esse som para o “j”. Por isso “rojo” (vermelho) dito à brasileira soa como “jojo”. E o “l” do fim da sílaba nunca vira “u”: “alto” é [ˈalto], não “autu”.',
      },
      {
        heading: 'O “t” e o “d” nunca viram “tch” e “dj”',
        text: 'No Brasil, “tia” e “dia” costumam soar “tchia” e “djia”. Em espanhol, o [t] e o [d] ficam sempre com a ponta da língua nos dentes, antes de qualquer vogal. E o “s” entre vogais continua [s]: “casa” é [ˈkasa], sem o [z] de “casa” em português. Só antes de consoante sonora ele vira [z]: “mismo” [ˈmizmo].',
        examples: [
          ['tío', 'tio: [ˈtio], sem “tch”'],
          ['día', 'dia: [ˈdia], sem “dj”'],
          ['casa', 'casa: [ˈkasa], com [s]'],
          ['Buenos días, tía.', 'Bom dia, tia.'],
        ],
      },
      {
        heading: 'b, d, g suaves: [β], [ð], [ɣ]',
        text: 'Entre vogais, o b, o d e o g quase não se fecham: os lábios só se aproximam para o [β], a língua encosta de leve nos dentes para o [ð] (como o “th” do inglês “this”) e o fundo da língua só chega perto do céu da boca para o [ɣ]. Depois de pausa ou de “m, n”, eles voltam a ser [b], [d], [g]. E “b” e “v” são o mesmo som: o espanhol padrão não tem o [v] do português, com o lábio nos dentes.',
        examples: [
          ['uva', 'uva: [ˈuβa], sem [v]'],
          ['cada', 'cada: [ˈkaða]'],
          ['agua', 'água: [ˈaɣwa]'],
          ['un vaso', 'um copo: [um ˈbaso]'],
        ],
      },
    ],
    topics: ['es-g1'],
    quiz: [
      {
        question: 'Quantas vogais tem o espanhol?',
        options: ['5', '7', '12', '9'],
        answer: '5',
        explanation: 'a, e, i, o, u, todas orais. O português do Brasil tem 7 orais e mais as nasais.',
      },
      {
        question: 'Como soa o “j” de “jamón”?',
        options: ['Como o “j” de “janela”', 'Como o “rr” carioca de “carro”', 'Mudo', 'Como o “i”'],
        answer: 'Como o “rr” carioca de “carro”',
        explanation: 'É a fricativa velar [x], raspada no fundo da boca.',
      },
      {
        question: 'Como termina a pronúncia de “leche”?',
        options: ['Com “i”, como “leite”', 'Com [e]', 'Sem vogal', 'Com vogal nasal'],
        answer: 'Com [e]',
        explanation: 'A vogal átona final não enfraquece em espanhol: [ˈlet͡ʃe].',
      },
      {
        question: 'Na maior parte da Espanha, o “z” de “zapato” soa…',
        options: ['[s]', '[z]', '[θ], com a língua entre os dentes', '[ʃ]'],
        answer: '[θ], com a língua entre os dentes',
        explanation: 'É a “distinción” espanhola. Na América, e também nas Canárias e em parte da Andaluzia, soa [s].',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'A escrita espanhola é quase fonêmica: cada letra tem um som previsível. O sistema se apoia em pares como pero × perro, em alofones regulares (b/β, d/ð, g/ɣ) e num acento livre que a ortografia sempre deixa saber onde cai.',
    sections: [
      {
        heading: 'Fonemas e alofones',
        text: 'O [β] de “uva” e o [b] de “vaso” são o mesmo fonema /b/: um falante nativo nem percebe a diferença, porque o contexto decide qual sai. Já o [ɾ] de “pero” e o [r] de “perro” são dois fonemas: trocar um pelo outro muda a palavra. No português do Brasil acontece o contrário com o “t”: [t] e [t͡ʃ] em “tatu” e “tia” são alofones.',
        table: {
          head: ['Par mínimo', 'IPA', 'Significados'],
          rows: [
            ['pero / perro', '[ˈpeɾo] / [ˈpero]', 'mas / cachorro'],
            ['caro / carro', '[ˈkaɾo] / [ˈkaro]', 'caro / carro'],
            ['papa / papá', '[ˈpapa] / [paˈpa]', 'batata (ou o papa) / papai'],
            ['casa / caza (Espanha)', '[ˈkasa] / [ˈkaθa]', 'casa / caça'],
          ],
        },
        examples: [
          ['Pero el perro no come.', 'Mas o cachorro não come.'],
          ['Mi papá come papas.', 'Meu pai come batatas.'],
        ],
      },
      {
        heading: 'O acento que se escreve',
        text: 'O acento é livre: pode cair na última, na penúltima ou na antepenúltima sílaba, e muda o sentido. A ortografia resolve tudo com três regras. Palavra sem acento gráfico terminada em vogal, “n” ou “s” é tônica na penúltima (casa, hablan); terminada em outra consoante, na última (hablar, reloj). Quando a pronúncia foge dessa regra, vem o acento gráfico. Por isso quem aprende a regra lê qualquer palavra certo, mesmo sem nunca a ter ouvido.',
        table: {
          head: ['Tipo', 'Leva acento gráfico quando…', 'Exemplos'],
          rows: [
            ['aguda (última sílaba)', 'termina em vogal, n ou s', 'café, canción, compás'],
            ['llana ou grave (penúltima)', 'NÃO termina em vogal, n ou s', 'árbol, lápiz, fácil'],
            ['esdrújula (antepenúltima)', 'sempre', 'música, teléfono, pájaro'],
          ],
        },
        examples: [
          ['término', 'término, fim: [ˈteɾmino]'],
          ['termino', 'eu termino: [teɾˈmino]'],
          ['terminó', 'ele terminou: [teɾmiˈno]'],
        ],
      },
      {
        heading: 'Palavras com a tônica em outro lugar',
        text: 'Muitas palavras são quase iguais ao português, mas a sílaba forte muda. É um dos detalhes que mais denunciam o sotaque brasileiro, e a regra do acento gráfico ajuda a lembrar.',
        table: {
          head: ['Espanhol', 'Tônica', 'Português'],
          rows: [
            ['teléfono', 'te-LÉ-fo-no', 'te-le-FO-ne'],
            ['océano', 'o-CÉ-a-no', 'o-ce-A-no'],
            ['policía', 'po-li-CÍ-a', 'po-LÍ-cia'],
            ['democracia', 'de-mo-CRA-cia', 'de-mo-cra-CI-a'],
            ['nivel', 'ni-VEL', 'NÍ-vel'],
            ['cerebro', 'ce-RE-bro', 'CÉ-re-bro'],
            ['atmósfera', 'at-MÓS-fe-ra', 'at-mos-FE-ra'],
          ],
        },
      },
      {
        heading: 'Variação: seseo, yeísmo e o “s” aspirado',
        text: 'Três fenômenos dividem o mundo hispânico. O seseo: na América, nas Canárias e em parte da Andaluzia, “casa” e “caza” soam iguais, [s]. O yeísmo: quase todos os falantes pronunciam “ll” e “y” do mesmo jeito, e “pollo” (frango) soa como “poyo” (banco de pedra). E o “s” no fim da sílaba vira um sopro [h] ou some no Caribe, em boa parte da Andaluzia, no Chile e no Rio da Prata: “los amigos” pode soar “loh amigo”.',
        examples: [
          ['pollo', 'frango: [ˈpoʝo]; em Buenos Aires, [ˈpoʃo]'],
          ['¿Cómo estás?', 'Como você está? No Caribe, algo como “¿cómo ehtá?”'],
        ],
      },
    ],
    topics: [],
    quiz: [
      {
        question: 'Em espanhol, [ɾ] e [r] (pero × perro) são…',
        options: ['alofones do mesmo fonema', 'dois fonemas diferentes', 'o mesmo som', 'sons que só existem na Espanha'],
        answer: 'dois fonemas diferentes',
        explanation: 'Trocar um pelo outro muda a palavra: pero é “mas”, perro é “cachorro”.',
      },
      {
        question: 'Onde cai a tônica de “hablan”, que não tem acento gráfico?',
        options: ['Na última sílaba', 'Na penúltima sílaba', 'Na antepenúltima', 'Depende do país'],
        answer: 'Na penúltima sílaba',
        explanation: 'Palavra terminada em vogal, n ou s, sem acento gráfico, é grave: HA-blan.',
      },
      {
        question: 'Qual é a pronúncia espanhola de “teléfono”?',
        options: ['te-le-FO-no', 'te-LÉ-fo-no', 'TE-le-fo-no', 'te-le-fo-NO'],
        answer: 'te-LÉ-fo-no',
        explanation: 'É esdrújula, e o acento gráfico mostra a sílaba tônica.',
      },
      {
        question: 'O que é o yeísmo?',
        options: [
          'Pronunciar “ll” e “y” do mesmo jeito',
          'Pronunciar o “z” como [θ]',
          'Apagar o “s” final',
          'Usar “vos” no lugar de “tú”',
        ],
        answer: 'Pronunciar “ll” e “y” do mesmo jeito',
        explanation: 'É o caso da imensa maioria dos falantes hoje: pollo e poyo soam iguais.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'Como o português, o espanhol é uma língua flexiva (fusional): uma só terminação carrega pessoa, número, tempo e modo (habl-ábamos). O verbo é riquíssimo, o substantivo tem só gênero e número, e o sistema de derivação é quase o nosso, com sufixos que às vezes trocam o gênero.',
    sections: [
      {
        heading: 'Os tempos verbais lado a lado',
        text: 'O quadro verbal é quase o mesmo do português, com três diferenças grandes. O pretérito perfecto (he hablado) é um passado ligado ao hoje, não o nosso “tenho falado”, que é repetição. O pluscuamperfecto só existe composto (había hablado): o nosso “falara” não existe com esse sentido, e “hablara” é outra coisa. E o futuro do subjuntivo (hablare) morreu na língua falada: só sobrevive nas leis e em fórmulas antigas.',
        table: {
          head: ['Tempo', 'Espanhol', 'Português', 'Atenção'],
          rows: [
            ['presente', 'hablo', 'falo', '—'],
            ['pretérito perfecto', 'he hablado', 'falei (hoje)', '≠ “tenho falado”'],
            ['indefinido', 'hablé', 'falei', '—'],
            ['imperfecto', 'hablaba', 'falava', 'com b'],
            ['pluscuamperfecto', 'había hablado', 'tinha falado / falara', 'só composto'],
            ['futuro', 'hablaré', 'falarei', '—'],
            ['condicional', 'hablaría', 'falaria', '—'],
            ['subjuntivo presente', 'hable', 'fale', '—'],
            ['subjuntivo imperfecto', 'hablara / hablase', 'falasse', '“hablara” ≠ “falara”'],
            ['futuro de subjuntivo', 'hablare', 'falar', 'só nas leis'],
          ],
        },
        examples: [
          ['Hoy he comido paella.', 'Hoje comi paella.'],
          ['Si tuviera tiempo, viajaría.', 'Se eu tivesse tempo, viajaria.'],
        ],
      },
      {
        heading: 'O que o português tem e o espanhol não',
        text: 'O infinitivo pessoal (para eles falarem) não existe em espanhol: é “para que ellos hablen”. Também não há as contrações de preposição com artigo além de “al” e “del”: nada de “no”, “na”, “pelo”, “num”. E o artigo tem uma forma que o português não tem: o neutro “lo”, que transforma adjetivos em ideias (“lo bueno”, o que é bom).',
        table: {
          head: ['Português', 'Espanhol'],
          rows: [
            ['para eles falarem', 'para que ellos hablen'],
            ['no parque', 'en el parque'],
            ['pela rua', 'por la calle'],
            ['num dia', 'en un día'],
            ['o bom é que…', 'lo bueno es que…'],
          ],
        },
        examples: [
          ['Voy al cine del barrio.', 'Vou ao cinema do bairro.'],
          ['Lo mejor es llegar temprano.', 'O melhor é chegar cedo.'],
        ],
      },
      {
        heading: 'Gênero: os sufixos que trocam de lado',
        text: 'O substantivo tem dois gêneros e dois números, sem casos. O gênero quase sempre coincide com o português, mas alguns sufixos inteiros mudam de lado: -aje é masculino (el viaje, el paisaje), enquanto o nosso -agem é feminino; -umbre é feminino (la costumbre), e o nosso -ume é masculino. Palavras femininas com “a” tônico inicial levam “el” no singular, só pela pronúncia: el agua fría, las aguas.',
        examples: [
          ['el viaje largo', 'a viagem longa'],
          ['la costumbre', 'o costume'],
          ['el agua está fría', 'a água está fria'],
        ],
      },
      {
        heading: 'Formação de palavras',
        text: 'Os sufixos são primos dos nossos: -ción (-ção), -dad (-dade), -mente (-mente), -ero (-eiro). Os diminutivos variam por região: -ito é geral, -illo é comum na Espanha e -ico aparece na Costa Rica, na Colômbia e em Cuba (“chiquitico”). Os compostos de verbo + substantivo funcionam como os nossos: sacacorchos (saca-rolhas), rascacielos (arranha-céu), paraguas (guarda-chuva). Antes de substantivo masculino, alguns adjetivos encurtam: buen día, gran ciudad, primer piso.',
        examples: [
          ['un cafecito', 'um cafezinho'],
          ['el rascacielos', 'o arranha-céu'],
          ['un buen amigo', 'um bom amigo'],
        ],
      },
    ],
    topics: ['es-g2', 'es-g3', 'es-g4', 'es-g8', 'es-g9', 'es-g10', 'es-g12', 'es-g14', 'es-g16', 'es-g18', 'es-g27', 'es-g32', 'es-g36'],
    quiz: [
      {
        question: '“Para eles falarem” em espanhol é…',
        options: ['para ellos hablaren', 'para que ellos hablen', 'para ellos hablar', 'para que ellos hablan'],
        answer: 'para que ellos hablen',
        explanation: 'O espanhol não tem infinitivo pessoal: usa “para que” + subjuntivo.',
      },
      {
        question: 'Qual é o gênero de “viaje” em espanhol?',
        options: ['feminino, como em português', 'masculino', 'neutro', 'depende do país'],
        answer: 'masculino',
        explanation: 'Os substantivos em -aje são masculinos: el viaje, el paisaje, el garaje.',
      },
      {
        question: '“Hoy he comido paella” quer dizer…',
        options: ['Hoje tenho comido paella', 'Hoje comi paella', 'Hoje comerei paella', 'Hoje comia paella'],
        answer: 'Hoje comi paella',
        explanation: 'O pretérito perfecto é o passado ligado ao hoje, não o “tenho comido” do português.',
      },
      {
        question: 'Qual destas formas é o pretérito imperfeito do subjuntivo?',
        options: ['hablara', 'hablaré', 'hablaría', 'hablaba'],
        answer: 'hablara',
        explanation: '“Hablara” (ou “hablase”) = falasse. Não confunda com o nosso “falara”, que é mais-que-perfeito.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A ordem básica é sujeito-verbo-objeto, com bastante liberdade. O sujeito some quando o verbo já diz quem é, os pronomes átonos têm posição fixa, o objeto direto de pessoa leva “a” e o modo verbal (indicativo ou subjuntivo) depende da estrutura da frase.',
    sections: [
      {
        heading: 'Sujeito que some e sujeito que vem depois',
        text: 'O espanhol é uma língua de sujeito nulo: a terminação do verbo já diz a pessoa, e o pronome só aparece para dar ênfase ou contraste. O português do Brasil falado repete muito o pronome (“eu acho que eu vou”); em espanhol, “yo creo que yo voy” soa estranho. Com verbos de existência, chegada ou sensação, o sujeito costuma vir depois do verbo.',
        examples: [
          ['Creo que voy mañana.', 'Acho que eu vou amanhã.'],
          ['Yo pago, tú no.', 'Eu pago, você não. (pronome de contraste)'],
          ['Llegó el tren.', 'O trem chegou.'],
          ['Me duele la cabeza.', 'Minha cabeça dói.'],
        ],
      },
      {
        heading: 'Os pronomes átonos e o seu lugar',
        text: 'No Brasil dizemos “vi ele” e “vou te ver”. Em espanhol, o objeto vira pronome átono antes do verbo conjugado (lo vi) e se cola no fim do infinitivo, do gerúndio e do imperativo afirmativo (verte, diciéndolo, dámelo). Com locuções, o pronome vai antes do verbo conjugado ou depois do infinitivo, nunca no meio: “te quiero ver” ou “quiero verte”, mas nunca “quiero te ver”. Quando “le” encontra “lo”, vira “se”: “se lo di”.',
        table: {
          head: ['Português do Brasil', 'Espanhol', 'Regra'],
          rows: [
            ['Vi ele ontem.', 'Lo vi ayer.', 'pronome átono antes do verbo'],
            ['Vou te ver.', 'Te voy a ver. / Voy a verte.', 'antes do conjugado ou colado no infinitivo'],
            ['Me dá isso!', '¡Dámelo!', 'imperativo afirmativo: tudo colado'],
            ['Dei pra ele.', 'Se lo di.', 'le + lo → se lo'],
          ],
        },
      },
      {
        heading: 'O “a” pessoal e o objeto duplicado',
        text: 'Quando o objeto direto é uma pessoa (ou um animal querido) específica, o espanhol põe “a” antes dele: “Vi a María”, “Busco a mi perro”. O português não faz isso. E o objeto indireto costuma aparecer duas vezes, como pronome e como nome: “Le di el libro a Juan”. Com “gustar”, quem gosta vira objeto indireto e a coisa de que se gosta é o sujeito, por isso o verbo concorda com ela.',
        examples: [
          ['Vi a María en el mercado.', 'Vi a Maria no mercado.'],
          ['Le di el libro a Juan.', 'Dei o livro para o Juan.'],
          ['A mí me gustan los perros.', 'Eu gosto de cachorros.'],
        ],
      },
      {
        heading: 'Indicativo ou subjuntivo: a estrutura decide',
        text: 'O subjuntivo espanhol é parente do nosso, mas as regras de escolha não coincidem. Onde o português usa o futuro do subjuntivo, o espanhol usa o presente do subjuntivo (cuando llegues) ou, depois de “si”, o presente do indicativo (si llueve). “Creo que” pede indicativo, e “no creo que” pede subjuntivo. E “aunque” muda de sentido conforme o modo: com indicativo, é um fato; com subjuntivo, uma hipótese ou algo que não importa.',
        table: {
          head: ['Português', 'Espanhol'],
          rows: [
            ['quando você chegar', 'cuando llegues'],
            ['se chover', 'si llueve'],
            ['acho que é verdade', 'creo que es verdad'],
            ['não acho que seja verdade', 'no creo que sea verdad'],
          ],
        },
        examples: [
          ['Aunque llueve, salgo.', 'Embora esteja chovendo, eu saio. (chove de fato)'],
          ['Aunque llueva, salgo.', 'Mesmo que chova, eu saio. (hipótese)'],
        ],
      },
    ],
    topics: ['es-g6', 'es-g11', 'es-g13', 'es-g17', 'es-g19', 'es-g20', 'es-g21', 'es-g22', 'es-g23', 'es-g28', 'es-g34', 'es-g35', 'es-g-pontuacao'],
    quiz: [
      {
        question: 'Qual frase está correta em espanhol?',
        options: ['Quiero te ver.', 'Te quiero ver.', 'Quiero ver te.', 'Quiero ver a tú.'],
        answer: 'Te quiero ver.',
        explanation: 'O pronome vai antes do verbo conjugado (te quiero ver) ou colado no infinitivo (quiero verte), nunca no meio.',
      },
      {
        question: '“Vi ele ontem” em espanhol é…',
        options: ['Vi él ayer.', 'Lo vi ayer.', 'Vi lo ayer.', 'Le vi a él ayer.'],
        answer: 'Lo vi ayer.',
        explanation: 'O objeto direto vira o pronome átono “lo”, antes do verbo conjugado.',
      },
      {
        question: 'Em qual frase é obrigatório o “a” pessoal?',
        options: ['Busco ___ mi hermana.', 'Busco ___ un taxi.', 'Tengo ___ dos hermanos.', 'Compré ___ pan.'],
        answer: 'Busco ___ mi hermana.',
        explanation: 'Objeto direto de pessoa específica leva “a”: Busco a mi hermana. Com “tener”, em geral não se usa.',
      },
      {
        question: '“Quando você chegar, me liga” em espanhol:',
        options: ['Cuando llegarás, llámame.', 'Cuando llegues, llámame.', 'Cuando llegar, llámame.', 'Cuando llegas, me llama.'],
        answer: 'Cuando llegues, llámame.',
        explanation: 'O futuro do subjuntivo do português vira presente do subjuntivo depois de “cuando”.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário espanhol é, na maior parte, o mesmo do português: latim popular, latim culto, árabe e línguas indígenas da América. Justamente por isso, as palavras que parecem iguais e querem dizer outra coisa são a maior armadilha para o brasileiro.',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'A base é o latim falado na Península Ibérica. Depois vieram as palavras cultas, tiradas do latim escrito, e às vezes a mesma palavra latina entrou duas vezes: “llave” (chave) e “clave” (código) vêm ambas de “clavis”. Do árabe, falado na Península por quase oito séculos, ficaram milhares de palavras, muitas começadas por “al-”. Da América vieram palavras do taíno, do náuatle e do quéchua, que depois se espalharam pelo mundo.',
        table: {
          head: ['Origem', 'Espanhol', 'Português'],
          rows: [
            ['latim popular', 'hijo, ojo, llamar', 'filho, olho, chamar'],
            ['latim culto', 'filial, ocular, clamar', 'filial, ocular, clamar'],
            ['árabe', 'aceite, azúcar, almohada, ojalá', 'azeite, açúcar, travesseiro, tomara'],
            ['taíno (Caribe)', 'canoa, hamaca, huracán', 'canoa, rede, furacão'],
            ['náuatle (México)', 'chocolate, tomate, aguacate', 'chocolate, tomate, abacate'],
            ['quéchua (Andes)', 'papa, cóndor, cancha', 'batata, condor, quadra (de esporte)'],
          ],
        },
        examples: [
          ['Ojalá llueva mañana.', 'Tomara que chova amanhã.'],
          ['El huracán llegó a la isla.', 'O furacão chegou à ilha.'],
        ],
      },
      {
        heading: 'Falsos amigos: a mesma forma, outro sentido',
        text: 'Os linguistas chamam de heterossemânticos as palavras de forma igual ou parecida e sentido diferente. Entre espanhol e português elas são dezenas, e algumas causam situações bem constrangedoras. O treino “Falsos amigos”, em Mais práticas, tem a lista completa com exemplos.',
        table: {
          head: ['Espanhol', 'Quer dizer', 'Não é'],
          rows: [
            ['exquisito', 'delicioso', 'esquisito (= raro)'],
            ['embarazada', 'grávida', 'embaraçada (= avergonzada)'],
            ['oficina', 'escritório', 'oficina (= taller)'],
            ['polvo', 'pó', 'polvo (= pulpo)'],
            ['apellido', 'sobrenome', 'apelido (= apodo)'],
            ['rato', 'momento', 'rato (= ratón)'],
            ['latir', 'bater (o coração)', 'latir (= ladrar)'],
          ],
        },
        examples: [
          ['La comida está exquisita.', 'A comida está deliciosa.'],
          ['Espérame un rato.', 'Me espere um pouco.'],
        ],
      },
      {
        heading: 'Onde o espanhol corta o mundo de outro jeito',
        text: 'Cada língua recorta a realidade à sua maneira. O espanhol separa o peixe vivo (pez) do peixe como comida (pescado), a perna humana (pierna) da perna de animal ou de móvel (pata), e usa “jugar” tanto para jogar quanto para brincar, enquanto “brincar” quer dizer pular. Em compensação, junta numa palavra só o que o português separa: “esposas” são tanto as esposas quanto as algemas.',
        examples: [
          ['El pez nada en el río.', 'O peixe nada no rio.'],
          ['Hoy comemos pescado.', 'Hoje comemos peixe.'],
          ['Los niños juegan en el parque.', 'As crianças brincam no parque.'],
          ['El gato brincó a la mesa.', 'O gato pulou na mesa.'],
        ],
      },
      {
        heading: 'Uma palavra, vários países',
        text: 'Com mais de vinte países, o espanhol tem palavras que mudam de sentido pelo caminho. “Guagua” é ônibus em Cuba, em Porto Rico e nas Canárias, e bebê no Chile e nos Andes (do quéchua “wawa”). “Coche” é carro na Espanha e carrinho de bebê em parte da América. E ônibus pode ser autobús, camión (México), colectivo (Argentina), micro (Chile) ou bus. O app escolhe a forma latino-americana mais comum e cita as outras no vocabulário.',
        examples: [
          ['Tomo la guagua en la esquina.', 'Pego o ônibus na esquina. (Cuba, Porto Rico, Canárias)'],
          ['El carro está en el garaje.', 'O carro está na garagem. (Espanha: el coche)'],
        ],
      },
    ],
    topics: ['es-g5', 'es-g7', 'es-g15', 'es-g25', 'es-g26', 'es-g40'],
    quiz: [
      {
        question: 'O que quer dizer “exquisito”?',
        options: ['esquisito', 'delicioso', 'caro', 'exótico'],
        answer: 'delicioso',
        explanation: '“Exquisito” é elogio. “Esquisito” em espanhol é “raro” ou “extraño”.',
      },
      {
        question: 'De que língua vem “ojalá”?',
        options: ['Do latim', 'Do árabe', 'Do náuatle', 'Do grego'],
        answer: 'Do árabe',
        explanation: 'Vem de uma expressão árabe que quer dizer “se Deus quiser”.',
      },
      {
        question: 'Como se diz “peixe” no prato do restaurante?',
        options: ['pez', 'pescado', 'pesca', 'peje'],
        answer: 'pescado',
        explanation: '“Pez” é o peixe vivo, na água; “pescado” é o peixe como comida.',
      },
      {
        question: '“Llave” e “clave” vêm da mesma palavra latina. Qual é a diferença de origem?',
        options: [
          '“Llave” veio pelo latim popular; “clave” foi tirada depois do latim culto',
          '“Llave” vem do árabe',
          '“Clave” vem do francês',
          'Não há diferença: são a mesma palavra',
        ],
        answer: '“Llave” veio pelo latim popular; “clave” foi tirada depois do latim culto',
        explanation: 'São palavras gêmeas (doublets): a popular sofreu a evolução sonora (cl- → ll-), a culta não.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Tratar alguém por tú, usted ou vos, pedir um café ou atender o telefone: o que soa gentil muda de país para país. O espanhol usa mais o “usted” do que o nosso “o senhor”, e a Espanha é bem mais direta nos pedidos do que a América Latina.',
    sections: [
      {
        heading: 'Tú, usted, vos, vosotros e ustedes',
        text: 'O singular tem três formas. “Tú” é o informal geral. “Usted”, com verbo na 3ª pessoa, é o formal, e na América se usa com desconhecidos, clientes e pessoas mais velhas muito mais do que o nosso “o senhor”. “Vos”, com conjugação própria, é o informal da Argentina, do Uruguai, do Paraguai e de boa parte da América Central. No plural, a América usa só “ustedes”; a Espanha separa “vosotros” (informal) de “ustedes” (formal). Na Colômbia e na Costa Rica, muita gente usa “usted” até com a família.',
        table: {
          head: ['Forma', 'Onde', 'Exemplo'],
          rows: [
            ['tú', 'geral, informal', '¿Tú hablas inglés?'],
            ['usted', 'geral, formal', '¿Usted habla inglés?'],
            ['vos', 'Rio da Prata, América Central', '¿Vos hablás inglés?'],
            ['vosotros', 'Espanha, informal', '¿Vosotros habláis inglés?'],
            ['ustedes', 'América: sempre; Espanha: formal', '¿Ustedes hablan inglés?'],
          ],
        },
      },
      {
        heading: 'Pedir com jeito',
        text: 'Na Espanha, pedir no bar com o imperativo ou com uma pergunta direta é normal e não soa grosso: “Ponme un café”. Em boa parte da América Latina, a mesma frase soaria seca; ali o pedido vem suavizado, com diminutivo ou com verbos como “regalar” (“¿Me regala un tinto?”, na Colômbia, é “me vê um café?”). Em qualquer lugar, o condicional e o imperfeito do subjuntivo são as fórmulas mais educadas.',
        examples: [
          ['¿Me pone un café, por favor?', 'Me vê um café, por favor? (Espanha)'],
          ['¿Me regala un tinto?', 'Me vê um café? (Colômbia)'],
          ['Quisiera una mesa para dos.', 'Eu queria uma mesa para dois.'],
          ['¿Podría ayudarme?', 'O senhor poderia me ajudar?'],
        ],
      },
      {
        heading: 'Cumprimentos, telefone e “de nada”',
        text: '“Buenos días” vale até a hora do almoço; depois vêm “buenas tardes” e, quando escurece, “buenas noches”, que serve também para se despedir. O telefone se atende de jeitos diferentes: “¿Aló?” em boa parte da América do Sul, “¿Bueno?” no México, “¿Diga?” ou “¿Dígame?” na Espanha. E, para responder a um “gracias”, além de “de nada”, ouve-se “con gusto” e “a la orden” na Colômbia e na Venezuela.',
        examples: [
          ['¿Bueno? ¿Quién habla?', 'Alô? Quem fala? (México)'],
          ['—Gracias. —Con gusto.', '— Obrigado. — Por nada.'],
          ['Buenas noches, hasta mañana.', 'Boa noite, até amanhã.'],
        ],
      },
      {
        heading: 'Palavras que mudam de peso',
        text: 'Uma palavra neutra num país pode ser grosseira em outro. O exemplo clássico é “coger”: na Espanha quer dizer pegar (“coger el autobús”), mas no México, na Argentina e em vários outros países é vulgar. Por isso a variante latino-americana do app prefere “tomar” ou “agarrar”. Também o “ahorita” mexicano engana: pode ser “agora mesmo” ou “daqui a pouco”, e só o contexto decide.',
        examples: [
          ['Tomo el autobús a las ocho.', 'Pego o ônibus às oito.'],
          ['Ahorita vuelvo.', 'Já volto. (México: agora ou daqui a pouco)'],
        ],
      },
    ],
    topics: ['es-g24', 'es-g30', 'es-g31'],
    quiz: [
      {
        question: 'Qual é o plural de “tú” na América Latina?',
        options: ['vosotros', 'ustedes', 'vos', 'tús'],
        answer: 'ustedes',
        explanation: 'Na América, “ustedes” serve para o informal e para o formal. “Vosotros” é da Espanha.',
      },
      {
        question: 'Como se atende o telefone no México?',
        options: ['¿Diga?', '¿Bueno?', '¿Hola, qué?', '¿Quién es usted?'],
        answer: '¿Bueno?',
        explanation: 'No México é “¿Bueno?”; na Espanha, “¿Diga?” ou “¿Dígame?”; em boa parte da América do Sul, “¿Aló?”.',
      },
      {
        question: 'Qual é o pedido mais educado?',
        options: ['Quiero un café.', 'Dame un café.', 'Quisiera un café.', 'Un café.'],
        answer: 'Quisiera un café.',
        explanation: 'O imperfeito do subjuntivo “quisiera” suaviza o pedido, como o nosso “eu queria”.',
      },
      {
        question: 'Por que o app evita “coger” no espanhol latino-americano?',
        options: [
          'Porque é arcaico',
          'Porque é vulgar em vários países da América',
          'Porque só se usa na escrita',
          'Porque quer dizer “correr”',
        ],
        answer: 'Porque é vulgar em vários países da América',
        explanation: 'Na Espanha é neutro (pegar), mas no México, na Argentina e em outros países tem sentido sexual. Use “tomar” ou “agarrar”.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'Do “¿qué onda?” mexicano ao “Estimado señor:” da carta formal, o espanhol muda muito de registro. Tem gírias próprias em cada país, um tesouro de refranes e uma literatura que vai do Siglo de Oro ao boom latino-americano.',
    sections: [
      {
        heading: 'Registros: do bar ao cartório',
        text: 'Uma mesma ideia muda de roupa conforme a situação. “Morir” é neutro; “fallecer” é formal, de notícia e de documento; “estirar la pata” é coloquial e brincalhão. Na escrita formal, o espanhol gosta de nominalizações e de fórmulas fixas; a carta começa com “Estimado señor:”, com dois-pontos, e termina com “Atentamente”.',
        table: {
          head: ['Coloquial', 'Neutro', 'Formal'],
          rows: [
            ['estirar la pata', 'morir', 'fallecer'],
            ['currar (Espanha), chambear (México)', 'trabajar', 'desempeñar funciones'],
            ['¿Qué onda? / ¿Qué tal?', '¿Cómo estás?', '¿Cómo se encuentra usted?'],
          ],
        },
        examples: [
          ['Estimada señora López:', 'Prezada senhora López,'],
          ['Sin otro particular, la saluda atentamente.', 'Sem mais para o momento, atenciosamente.'],
        ],
      },
      {
        heading: 'Gírias de cada país',
        text: 'Cada país tem as suas palavras para “legal” e para “amigo”. Elas são ótimas para entender filmes e séries, mas no começo vale usá-las com cuidado, porque denunciam de onde você aprendeu e algumas mudam de tom conforme a região.',
        table: {
          head: ['País', '“Legal”', '“Amigo”'],
          rows: [
            ['México', 'chido', 'cuate'],
            ['Colômbia', 'chévere', 'parce, parcero'],
            ['Venezuela', 'chévere', 'pana'],
            ['Chile', 'bacán', 'compadre'],
            ['Argentina', 'copado', 'che (vocativo), amigo'],
            ['Espanha', 'guay', 'tío, colega'],
          ],
        },
      },
      {
        heading: 'Refranes: a sabedoria em frase feita',
        text: 'Os refranes são frases curtas, muitas vezes com rima e ritmo, que resumem um conselho. Vários têm par exato no português; outros dizem o mesmo com outra imagem. Um bom sinal de nível C2 é saber usá-los na hora certa, sem exagerar.',
        examples: [
          ['Más vale tarde que nunca.', 'Antes tarde do que nunca.'],
          ['En boca cerrada no entran moscas.', 'Em boca fechada não entra mosca.'],
          ['Camarón que se duerme se lo lleva la corriente.', 'Quem dorme no ponto perde a vez (lit.: o camarão que dorme, a correnteza leva).'],
          ['Dime con quién andas y te diré quién eres.', 'Diga-me com quem andas e te direi quem és.'],
        ],
      },
      {
        heading: 'Grandes estilos da literatura',
        text: 'Miguel de Cervantes publicou o Quixote em duas partes (1605 e 1615), com frases longas e cheias de ironia. No mesmo Siglo de Oro, Góngora levou o estilo ao extremo do rebuscado (culteranismo) e Quevedo, ao jogo de conceitos (conceptismo). Na América, Sor Juana Inés de la Cruz escreveu no México do século XVII, e Rubén Darío, da Nicarágua, fundou o modernismo. No século XX vieram os prêmios Nobel Gabriela Mistral (Chile, 1945, a primeira da América Latina), Pablo Neruda (Chile, 1971), Gabriel García Márquez (Colômbia, 1982), com o realismo mágico de “Cien años de soledad”, e Octavio Paz (México, 1990), além de Jorge Luis Borges, mestre da precisão.',
        examples: [
          ['En un lugar de la Mancha, de cuyo nombre no quiero acordarme…', 'Num lugar da Mancha, de cujo nome não quero me lembrar… (Cervantes)'],
        ],
      },
    ],
    topics: ['es-g29', 'es-g33', 'es-g37', 'es-g38', 'es-g39'],
    quiz: [
      {
        question: 'Qual é a forma mais formal de dizer “morrer”?',
        options: ['estirar la pata', 'morir', 'fallecer', 'palmar'],
        answer: 'fallecer',
        explanation: '“Fallecer” é o verbo das notícias e dos documentos.',
      },
      {
        question: 'Como começa uma carta formal em espanhol?',
        options: ['Estimado señor,', 'Estimado señor:', 'Querido señor:', 'Hola, señor.'],
        answer: 'Estimado señor:',
        explanation: 'A saudação da carta formal termina com dois-pontos.',
      },
      {
        question: 'Em que país “chévere” quer dizer “legal”?',
        options: ['Espanha', 'Argentina', 'Venezuela', 'México'],
        answer: 'Venezuela',
        explanation: 'É típico da Venezuela, da Colômbia e do Caribe. No México se diz “chido”; na Espanha, “guay”.',
      },
      {
        question: 'Quem foi a primeira pessoa da América Latina a ganhar o Nobel de Literatura?',
        options: ['Pablo Neruda', 'Gabriela Mistral', 'Jorge Luis Borges', 'Gabriel García Márquez'],
        answer: 'Gabriela Mistral',
        explanation: 'A poeta chilena ganhou o prêmio em 1945. Borges nunca o recebeu.',
      },
    ],
  },
];
