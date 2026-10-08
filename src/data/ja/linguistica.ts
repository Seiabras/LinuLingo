import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao japonês padrão (標準語), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_JA: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O japonês tem cinco vogais puras, um “u” sem arredondar [ɯ], um “r” batido [ɾ], consoantes que mudam antes de “i” e “u” (し [ɕi], ち [tɕi], つ [tsɯ], ふ [ɸɯ]), vogais que perdem a voz entre consoantes surdas (です [desɯ̥]) e um ritmo de metrônomo, em que cada mora dura o mesmo tempo.',
    sections: [
      {
        heading: 'Cinco vogais, e o “u” sem bico',
        text: 'O sistema vocálico é pequeno e estável: a, i, u, e, o. O “a” e o “i” são como os nossos. O う é [ɯ], um “u” sem arredondar os lábios. O え e o お são médios, [e̞] e [o̞], entre o nosso “ê” e “é”, “ô” e “ó”. A grande diferença para o português do Brasil é que a vogal átona não se reduz: o “e” final não vira “i” e o “o” final não vira “u”. “さけ” é [sake], nunca “saqui”. Não há vogais nasais próprias como as nossas de “pão” e “mãe”; a nasalidade vem do ん. E a duração é distintiva: cada vogal pode ser curta ou longa, e a longa dura o dobro.',
        table: {
          head: ['Kana', 'IPA', 'Exemplo', 'Dica para o brasileiro'],
          rows: [
            ['あ', '[a]', 'あさ [asa] (manhã)', 'como o “a” de “casa”'],
            ['い', '[i]', 'いえ [ie] (casa)', 'como o nosso “i”'],
            ['う', '[ɯ]', 'うみ [ɯmi] (mar)', '“u” sem arredondar os lábios'],
            ['え', '[e̞]', 'えき [e̞ki] (estação)', 'entre “ê” e “é”; nunca vira “i”'],
            ['お', '[o̞]', 'おと [o̞to̞] (som)', 'entre “ô” e “ó”; nunca vira “u”'],
            ['vogal longa', '[aː] [iː] [ɯː] [eː] [oː]', 'おかあさん [okaːsaɴ] (mãe)', 'o dobro do tempo'],
          ],
        },
        examples: [
          ['うみはきれいです。', 'O mar é bonito: うみ [ɯmi], com o “u” sem bico.'],
          ['えきはどこですか。', 'Onde fica a estação? えき [eki]: o “e” não vira “i”.'],
          ['おかあさん、ただいま。', 'Mãe, cheguei! おかあさん [okaːsaɴ], com o “a” longo.'],
        ],
      },
      {
        heading: 'As consoantes: o que muda antes de “i” e “u”',
        text: 'Várias consoantes mudam de som conforme a vogal. Antes de “i”, o s vira [ɕ] (し, “xi”), o t vira [tɕ] (ち, “tchi”, como o “ti” de “tia” em boa parte do Brasil), o z e o d viram [dʑ] (じ, “dji”), o h vira [ç] (ひ, um “h” chiado). Antes de “u”, o t vira [ts] (つ) e o h vira [ɸ] (ふ, um sopro entre os lábios). O “r” é uma batida rápida da ponta da língua, [ɾ], às vezes perto de um “l”. Na fala tradicional de Tóquio, o が no meio da palavra ainda soa nasal, [ŋa] (鼻濁音). E o ん se adapta ao som seguinte: [m] antes de p, b, m; [n] antes de t, d, n; [ŋ] antes de k, g; [ɴ], no fundo da garganta, no fim da palavra; e uma vogal nasalizada antes de vogal, s, h, y e w.',
        table: {
          head: ['Som', 'IPA', 'Exemplo', 'Dica'],
          rows: [
            ['ら・り・る・れ・ろ', '[ɾ]', 'ありがとう [aɾigatoː]', 'o “r” de “caro”'],
            ['し', '[ɕi]', 'すし [sɯɕi]', '“xi”'],
            ['ち', '[tɕi]', 'ちず [tɕizɯ] (mapa)', '“tchi”'],
            ['つ', '[tsɯ]', 'つなみ [tsɯnami]', '“ts” colado'],
            ['ふ', '[ɸɯ]', 'ふじ [ɸɯdʑi]', 'sopro entre os lábios'],
            ['ひ', '[çi]', 'ひと [çito] (pessoa)', '“h” chiado'],
            ['ん antes de p, b, m', '[m]', 'さんぽ [sampo] (passeio)', 'fecha os lábios'],
            ['ん antes de k, g', '[ŋ]', 'ぎんこう [giŋkoː] (banco)', 'no fundo da boca'],
            ['ん no fim', '[ɴ]', 'ほん [hoɴ] (livro)', 'nasal da garganta, sem fechar a boca'],
          ],
        },
        examples: [
          ['すしとさしみをください。', 'Sushi e sashimi, por favor: [sɯɕi], [saɕimi].'],
          ['さんぽに行きましょう。', 'Vamos dar um passeio: さんぽ [sampo], o ん vira [m] antes do p.'],
          ['銀行はどこですか。', 'Onde fica o banco? ぎんこう [giŋkoː], o ん vira [ŋ] antes do k.'],
        ],
      },
      {
        heading: 'Vogais que somem e o ritmo das moras',
        text: 'No japonês de Tóquio, o い e o う ficam surdos, quase mudos, quando estão entre duas consoantes surdas (k, s, t, h, p) ou no fim da frase depois de uma delas. É o 無声化: です soa “dess” [desɯ̥], すき soa “ski” [sɯ̥ki], ひと soa quase “hto” [çi̥to]. A vogal não desaparece da contagem: ela continua ocupando a sua batida, só que sem voz. E o ritmo é o de um metrônomo: cada mora dura mais ou menos o mesmo tempo, inclusive as moras especiais (a vogal longa, o っ e o ん). O português, ao contrário, estica a sílaba tônica e encurta as outras. Por isso o brasileiro tende a “engolir” as batidas longas: ほっかいどう tem seis batidas, ほ・っ・か・い・ど・う, e não as três sílabas de “Hokkaido”.',
        table: {
          head: ['Palavra', 'Como soa', 'IPA', 'Moras'],
          rows: [
            ['です', '“dess”', '[desɯ̥]', '2'],
            ['します', '“shimass”', '[ɕimasɯ̥]', '3'],
            ['すき', '“ski”', '[sɯ̥ki]', '2'],
            ['ひと', '“hto”', '[çi̥to]', '2'],
            ['ほっかいどう', 'ho-k-kai-dō', '[hokkaidoː]', '6'],
          ],
        },
        examples: [
          ['私はすしがすきです。', 'Eu gosto de sushi: [sɯ̥ki desɯ̥], com os “u” quase mudos.'],
          ['しつれいします。', 'Com licença: [ɕi̥tsɯɾeː ɕimasɯ̥].'],
          ['北海道はさむいです。', 'Hokkaido é frio: ほっかいどう [hokkaidoː], seis batidas.'],
        ],
      },
    ],
    topics: ['ja-g-sons'],
    quiz: [
      {
        question: 'Como é o “u” japonês (う)?',
        options: ['Sem arredondar os lábios, [ɯ]', 'Como o “u” do português, com bico', 'Como o “ü” alemão', 'Como um “o” fechado'],
        answer: 'Sem arredondar os lábios, [ɯ]',
        explanation: 'O う é [ɯ]: a língua na posição do “u”, mas com os lábios relaxados.',
      },
      {
        question: 'Por que です soa como “dess”?',
        options: ['O “u” depois de consoante surda, no fim da frase, perde a voz', 'É uma gíria de Tóquio', 'O “s” final é mudo', 'É um erro de pronúncia'],
        answer: 'O “u” depois de consoante surda, no fim da frase, perde a voz',
        explanation: 'É o 無声化 (ensurdecimento): o い e o う ficam sem voz perto de consoantes surdas, mas continuam contando como batida.',
      },
      {
        question: 'Como soa o ん de “さんぽ” (passeio)?',
        options: ['[m], porque vem antes de p', '[n]', '[ŋ]', 'Não se pronuncia'],
        answer: '[m], porque vem antes de p',
        explanation: 'O ん assimila o ponto do som seguinte: [m] antes de p, b, m; [ŋ] antes de k, g; [n] antes de t, d, n.',
      },
      {
        question: 'Qual é o som de ら, り, る, れ, ろ?',
        options: ['O “r” batido de “caro”, [ɾ]', 'O “r” forte de “rato”', 'Um “l” como em “lata”', 'Um “r” retroflexo, do interior'],
        answer: 'O “r” batido de “caro”, [ɾ]',
        explanation: 'É uma batida rápida da ponta da língua, às vezes perto de um “l”, nunca o “r” de garganta.',
      },
      {
        question: 'Quantas moras tem “ほっかいどう” (Hokkaido)?',
        options: ['Seis', 'Três', 'Quatro', 'Cinco'],
        answer: 'Seis',
        explanation: 'ほ・っ・か・い・ど・う: o っ e a vogal longa contam uma batida cada.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'A unidade de base do japonês é a mora, e não a sílaba: ん, っ e o alongamento da vogal contam como batidas. A sílaba ideal é consoante + vogal, o acento é de altura (箸 ●○, 橋 ○●○, 端 ○●●), e os compostos mudam de som: rendaku (て + かみ = てがみ), geminação (一本 = いっぽん) e até o contágio do ん (反応 = はんのう).',
    sections: [
      {
        heading: 'Mora, sílaba e as moras especiais',
        text: 'O português conta sílabas; o japonês conta moras. Uma sílaba como “tō” (とう) tem duas moras, porque a vogal longa conta à parte. Há três “moras especiais” (特殊拍): o ん (撥音), o っ (促音) e o alongamento da vogal (長音), escrito com ー no katakana. A estrutura preferida é consoante + vogal, sem encontros consonantais nem consoante final (fora o ん). Por isso as palavras estrangeiras ganham vogais: “Christmas” vira クリスマス (ku-ri-su-ma-su), “strike” vira ストライク. O português do Brasil faz o mesmo, sem perceber: “advogado” vira “adevogado”, “pneu” vira “pineu”, “ritmo” vira “rítimo”.',
        table: {
          head: ['Palavra', 'Sílabas', 'Moras', 'Português'],
          rows: [
            ['にほん', 'ni-hon (2)', 'に・ほ・ん (3)', 'Japão'],
            ['とうきょう', 'tō-kyō (2)', 'と・う・きょ・う (4)', 'Tóquio'],
            ['がっこう', 'gak-kō (2)', 'が・っ・こ・う (4)', 'escola'],
            ['コーヒー', 'kō-hī (2)', 'コ・ー・ヒ・ー (4)', 'café'],
            ['クリスマス', 'ku-ri-su-ma-su (5)', 'ク・リ・ス・マ・ス (5)', 'Natal'],
          ],
        },
        examples: [
          ['学校に行きます。', 'Vou à escola: が・っ・こ・う, quatro moras.'],
          ['クリスマスにケーキを食べます。', 'No Natal como bolo: “Christmas” ganhou vogais entre as consoantes, como o brasileiro faz em “adevogado”.'],
          ['コーヒーを一杯ください。', 'Uma xícara de café, por favor: コーヒー tem quatro moras.'],
        ],
      },
      {
        heading: 'O acento de altura',
        text: 'O acento japonês é fonológico: ele distingue palavras. No padrão de Tóquio, cada mora é alta (●) ou baixa (○), a primeira e a segunda mora têm alturas diferentes, e a altura cai no máximo uma vez por palavra, no “núcleo”. Há palavras sem núcleo (planas), e por isso algumas só se distinguem na partícula que vem depois: 花が ○●○ (a flor) × 鼻が ○●● (o nariz). Os compostos ganham acento próprio, e a frase inteira tem sua entonação por cima: a subida de pergunta no fim, a descida gradual ao longo da frase. O sistema de Kyoto e Osaka é outro, e algumas regiões nem têm acento distintivo.',
        table: {
          head: ['Par', 'Padrão', 'Português'],
          rows: [
            ['箸・橋・端', '●○・○●(○)・○●(●)', 'pauzinhos, ponte, beirada'],
            ['雨・飴', '●○・○●', 'chuva, bala'],
            ['花・鼻', '○●(○)・○●(●)', 'flor, nariz'],
            ['神・紙', '●○・○●(○)', 'deus, papel'],
            ['二本・日本', '●○○・○●○', 'dois (objetos longos), Japão'],
          ],
        },
        examples: [
          ['雨の日に飴をなめる。', 'Chupar bala num dia de chuva: あめ ●○ (chuva) e あめ ○● (bala).'],
          ['花が咲いた。', 'A flor desabrochou: はなが ○●○.'],
          ['鼻が痛い。', 'Meu nariz dói: はなが ○●●.'],
        ],
      },
      {
        heading: 'Os sons que mudam nos compostos',
        text: 'Quando as palavras se juntam, o som se ajusta. No 連濁 (rendaku), a consoante inicial do segundo elemento fica sonora: て + かみ = てがみ (carta), はな + ひ = はなび (fogos). A chamada lei de Lyman bloqueia o rendaku quando o segundo elemento já tem uma consoante sonora: はる + かぜ = はるかぜ. Nos compostos sino-japoneses, uma sílaba terminada em ku, ki, chi, tsu encolhe e dobra a consoante seguinte (促音化): がく + こう = がっこう (escola), いち + かい = いっかい (uma vez). Depois do っ, o h vira p (いっぽん); depois do ん, costuma virar b (さんぼん). E há um caso raro e antigo, o 連声 (renjō), em que o ん contagia a vogal seguinte: はん + おう = はんのう (reação).',
        table: {
          head: ['Fenômeno', 'Exemplo', 'O que acontece'],
          rows: [
            ['連濁 (rendaku)', 'て + かみ = てがみ', 'k vira g no segundo elemento'],
            ['rendaku bloqueado', 'はる + かぜ = はるかぜ', 'かぜ já tem som sonoro'],
            ['促音化 (geminação)', 'がく + こう = がっこう', 'a sílaba encolhe e dobra a consoante'],
            ['h → p, h → b', 'いっぽん, さんぼん', 'depois de っ, p; depois de ん, b'],
            ['連声 (renjō)', 'はん + おう = はんのう', 'o ん contagia a vogal seguinte'],
          ],
        },
        examples: [
          ['手紙を書きました。', 'Escrevi uma carta: て + かみ = てがみ.'],
          ['一回だけ行ったことがあります。', 'Fui só uma vez: いち + かい = いっかい.'],
          ['ペンを三本ください。', 'Três canetas, por favor: さん + ほん = さんぼん.'],
        ],
      },
    ],
    topics: ['ja-g-contadores', 'ja-g-acento'],
    quiz: [
      {
        question: 'Quantas moras tem “がっこう” (escola)?',
        options: ['Quatro', 'Duas', 'Três', 'Cinco'],
        answer: 'Quatro',
        explanation: 'が・っ・こ・う: o っ e a vogal longa são moras especiais e contam uma batida cada.',
      },
      {
        question: 'O que é o rendaku?',
        options: ['A sonorização do começo do segundo elemento de um composto', 'A queda de vogais entre consoantes surdas', 'A troca do “r” pelo “l”', 'O alongamento das vogais'],
        answer: 'A sonorização do começo do segundo elemento de um composto',
        explanation: 'て + かみ = てがみ, はな + ひ = はなび: o k vira g, o h vira b.',
      },
      {
        question: 'Qual par se diferencia só pelo acento de altura?',
        options: ['雨・飴', 'ゆき・ゆうき', 'ビル・ビール', 'きて・きって'],
        answer: '雨・飴',
        explanation: '雨 (●○) e 飴 (○●) têm as mesmas moras. Os outros pares diferem na duração ou no っ.',
      },
      {
        question: 'Por que “Christmas” virou クリスマス, com cinco moras?',
        options: ['O japonês põe vogais entre as consoantes das palavras estrangeiras', 'Porque a palavra inglesa é longa', 'Porque o katakana obriga a isso', 'Porque o acento cai no fim'],
        answer: 'O japonês põe vogais entre as consoantes das palavras estrangeiras',
        explanation: 'A sílaba japonesa ideal é consoante + vogal, então os encontros ganham vogais, como o “adevogado” do português falado.',
      },
      {
        question: 'Por que 一本 se lê いっぽん?',
        options: ['O “ichi” encolhe e dobra a consoante seguinte, e o h vira p', 'É uma exceção sem regra', 'Por causa do acento de altura', 'Por causa do rendaku'],
        answer: 'O “ichi” encolhe e dobra a consoante seguinte, e o h vira p',
        explanation: 'É a geminação (促音化): いち + ほん = いっぽん. O mesmo em いっかい, がっこう.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O japonês é aglutinante: o verbo recebe sufixos em fila, cada um com uma função (食べ・させ・られ・なかっ・た, “não foi obrigado a comer”), os adjetivos -い se conjugam como verbos, e não há gênero, artigo, número obrigatório nem concordância de pessoa. As palavras nascem de compostos de kanji, prefixos de cortesia (お, ご) e abreviações de quatro moras (パソコン).',
    sections: [
      {
        heading: 'Aglutinação: sufixos em fila',
        text: 'No português, uma terminação junta várias informações de uma vez: em “falávamos”, o “-ávamos” diz passado, aspecto e pessoa. No japonês, cada informação é um pedaço separado, grudado em fila, sempre na mesma ordem: a raiz, depois a voz (causativa, passiva), depois a negação, depois o tempo, e por fim a modalidade e as partículas de conversa. 食べさせられなかった se desmonta como um trem: 食べ (comer) + させ (fazer) + られ (sofrer) + なかっ (não) + た (passado). E o verbo não concorda com ninguém: 行きます serve para eu, você, ele e nós.',
        table: {
          head: ['Pedaços', 'O que se soma', 'Forma', 'Português'],
          rows: [
            ['食べ', 'raiz', '食べる', 'comer'],
            ['食べ・させ', '+ causativa', '食べさせる', 'fazer comer'],
            ['食べ・させ・られ', '+ passiva', '食べさせられる', 'ser obrigado a comer'],
            ['食べ・させ・られ・ない', '+ negação', '食べさせられない', 'não ser obrigado a comer'],
            ['食べ・させ・られ・なかっ・た', '+ passado', '食べさせられなかった', 'não foi obrigado a comer'],
          ],
        },
        examples: [
          ['子どものころ、野菜を食べさせられなかった。', 'Quando eu era criança, não me obrigavam a comer verdura.'],
          ['行きたくなかったです。', 'Eu não queria ir: 行き + たく + なかっ + た + です.'],
          ['読ませていただけませんか。', 'O senhor me deixaria ler? 読ま + せ + て + いただけ + ませ + ん + か.'],
        ],
      },
      {
        heading: 'As bases do verbo e o adjetivo que se conjuga',
        text: 'Os verbos do grupo 1 se chamam 五段, “de cinco graus”, porque a raiz passa pelas cinco vogais conforme o que vem depois: 書か (ない), 書き (ます), 書く, 書け (ば), 書こ (う). Os do grupo 2 (一段) têm uma base só. E o adjetivo -い é, na prática, um verbo de estado: tem negativo (高くない), passado (高かった) e forma て (高くて). Já os adjetivos -な se comportam como substantivos. Gênero e artigo não existem, e o número quase nunca é marcado: 本 é livro ou livros. Para pessoas há sufixos de plural (学生たち), e alguns substantivos se repetem para indicar pluralidade, com o sinal 々: 人々 (as pessoas), 山々 (as montanhas).',
        table: {
          head: ['Base', 'Forma de 書く', 'Com', 'Português'],
          rows: [
            ['a', '書か', '書かない', 'não escreve'],
            ['i', '書き', '書きます', 'escreve (educado)'],
            ['u', '書く', '書く', 'escreve'],
            ['e', '書け', '書けば・書ける', 'se escrever; consegue escrever'],
            ['o', '書こ', '書こう', 'vamos escrever'],
          ],
        },
        examples: [
          ['手紙はあまり書かない。', 'Não escrevo muitas cartas.'],
          ['山々が美しい。', 'As montanhas são lindas: 々 repete o kanji e faz um plural.'],
          ['学生たちが集まった。', 'Os estudantes se reuniram: たち faz o plural de pessoas.'],
        ],
      },
      {
        heading: 'Formação de palavras: kanji, prefixos e abreviações',
        text: 'Os kanji são peças de montar. 電 (eletricidade) + 車 (veículo) = 電車 (trem); 電 + 話 (fala) = 電話 (telefone); 自 (próprio) + 動 (mover) + 車 = 自動車 (automóvel). Há sufixos produtivos, como os nossos “-ização” e “-ista”: 〜化 (国際化, internacionalização), 〜的 (経済的, econômico), 〜者, 〜家. Os prefixos お e ご embelezam e dão cortesia (お茶, ご家族). E o japonês adora encurtar, de preferência em quatro moras: パソコン (personal computer), コンビニ (convenience store), スマホ (smartphone), ポケモン (pocket monsters). Os nomes longos em kanji também encolhem: 国際連合 vira 国連 (ONU), 就職活動 vira 就活 (a busca de emprego).',
        table: {
          head: ['Palavra', 'Formação', 'Português'],
          rows: [
            ['電車', '電 (eletricidade) + 車 (veículo)', 'trem'],
            ['電話', '電 + 話 (fala)', 'telefone'],
            ['自動車', '自 (próprio) + 動 (mover) + 車', 'automóvel'],
            ['国際化', '国際 (internacional) + 化 (-ização)', 'internacionalização'],
            ['パソコン', 'パーソナル・コンピューター', 'computador pessoal'],
            ['ポケモン', 'ポケット・モンスター', 'Pokémon'],
            ['国連', '国際連合', 'ONU'],
          ],
        },
        examples: [
          ['電車で会社に行きます。', 'Vou de trem para a empresa: 電 (eletricidade) + 車 (veículo).'],
          ['パソコンとスマホを持っています。', 'Tenho computador e celular: duas abreviações de quatro moras.'],
          ['お茶とご飯をどうぞ。', 'Sirva-se de chá e arroz: お e ご dão cortesia à palavra.'],
        ],
      },
    ],
    topics: [
      'ja-g-masu',
      'ja-g-adjetivos',
      'ja-g-forma-simples',
      'ja-g-te',
      'ja-g-ta-nai',
      'ja-g-potencial',
      'ja-g-volitivo',
      'ja-g-causativa',
      'ja-g-causativa-passiva',
      'ja-g-vocabulario',
    ],
    quiz: [
      {
        question: 'O que quer dizer que o japonês é aglutinante?',
        options: ['Os sufixos se enfileiram, cada um com uma função', 'Os verbos não se conjugam', 'Há gênero e número em tudo', 'As palavras nunca mudam de forma'],
        answer: 'Os sufixos se enfileiram, cada um com uma função',
        explanation: '食べ + させ + られ + なかっ + た: causativa, passiva, negação e passado, cada um num pedaço.',
      },
      {
        question: 'O verbo japonês concorda com a pessoa?',
        options: ['Não: a mesma forma serve para eu, você, ele e nós', 'Sim, como no português', 'Só na terceira pessoa', 'Só no plural'],
        answer: 'Não: a mesma forma serve para eu, você, ele e nós',
        explanation: '行きます é “vou”, “vai”, “vamos”, “vão”. Quem faz a ação vem do contexto.',
      },
      {
        question: 'Qual é a base “a” de 書く, a que recebe ない?',
        options: ['書か', '書き', '書け', '書こ'],
        answer: '書か',
        explanation: '書か + ない = 書かない. 書き vai com ます, 書け com ば, e 書こ com う.',
      },
      {
        question: 'Como o japonês indica o plural de pessoas?',
        options: ['Com um sufixo próprio para pessoas', 'Com um -s no fim da palavra', 'Não há como indicar', 'Mudando o artigo'],
        answer: 'Com um sufixo próprio para pessoas',
        explanation: '学生たち (os estudantes), 私たち (nós). Para coisas, o número fica no contexto ou nos contadores.',
      },
      {
        question: 'De onde vem a palavra パソコン?',
        options: ['Da abreviação de “personal computer”', 'De uma marca japonesa', 'Do chinês', 'Do português'],
        answer: 'Da abreviação de “personal computer”',
        explanation: 'パーソナル・コンピューター encolheu para quatro moras, o tamanho preferido das abreviações.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'O japonês é SOV e de núcleo no fim: o verbo fecha a frase, as “preposições” vêm depois do nome (東京で), e tudo o que modifica vem antes do que é modificado (昨日買った本). As partículas marcam as funções, o assunto (は) se separa do sujeito (が), e o que o contexto já diz simplesmente some.',
    sections: [
      {
        heading: 'SOV e núcleo no fim: o português no espelho',
        text: 'Em quase tudo, a ordem japonesa é o reflexo da portuguesa. O verbo vem depois do objeto (パンを食べる), a partícula vem depois do nome (東京で, “Tóquio-em”), o possuidor vem antes da coisa (マリアさんの本), a oração relativa vem antes do substantivo (買った本, “comprei-livro”), o auxiliar vem depois do verbo (食べたい), e a pergunta se marca no fim (来ますか). Os linguistas chamam isso de língua de núcleo final: a palavra principal de cada grupo fica por último. Quando você aprende a ler de trás para a frente, as frases longas deixam de assustar.',
        table: {
          head: ['Estrutura', 'Português', 'Japonês'],
          rows: [
            ['verbo e objeto', 'comer pão', 'パンを食べる'],
            ['preposição', 'em Tóquio', '東京で'],
            ['posse', 'o livro da Maria', 'マリアさんの本'],
            ['oração relativa', 'o livro que comprei', '買った本'],
            ['verbo e auxiliar', 'quero comer', '食べたい'],
            ['pergunta', 'Você vem?', '来ますか。'],
          ],
        },
        examples: [
          ['私は毎朝駅の前の店でコーヒーを飲みます。', 'Todo dia de manhã tomo café na loja em frente à estação: o verbo fecha a frase.'],
          ['昨日友だちと見た映画はおもしろかった。', 'O filme que vi ontem com um amigo foi interessante: tudo o que descreve o filme vem antes dele.'],
          ['日本語を勉強しているブラジル人の友だちがいます。', 'Tenho um amigo brasileiro que estuda japonês.'],
        ],
      },
      {
        heading: 'Assunto e comentário: は e が',
        text: 'O japonês é uma língua de “assunto proeminente”: a frase começa anunciando do que se vai falar (は) e depois comenta. O assunto pode ser o sujeito, mas também o objeto, o lugar ou o tempo: “この本はもう読んだ” (este livro, já li). O が marca o sujeito gramatical, e os dois podem coexistir: “日本は夏が暑い” (o Japão, o verão é quente). O português do Brasil faz isso na fala (“esse carro, o motor é bom”), mas sem partículas. Como as partículas seguram as funções, a ordem dos elementos antes do verbo é flexível: “パンを私が買った” diz o mesmo que “私がパンを買った”, só muda o destaque.',
        table: {
          head: ['Frase', 'O que virou assunto (は)', 'Português'],
          rows: [
            ['この本はもう読んだ。', 'o objeto', 'Este livro eu já li.'],
            ['東京には三回行った。', 'o lugar', 'A Tóquio, fui três vezes.'],
            ['今日は休みだ。', 'o tempo', 'Hoje é folga.'],
            ['ぞうははながながい。', 'o todo', 'O elefante tem a tromba comprida.'],
          ],
        },
        examples: [
          ['この本はもう読みました。', 'Este livro eu já li: o objeto virou assunto.'],
          ['日本は夏が暑い。', 'O Japão, o verão é quente: assunto + sujeito, como no português falado.'],
          ['パンを私が買いました。', 'O pão, quem comprou fui eu: a ordem muda, as partículas seguram as funções.'],
        ],
      },
      {
        heading: 'O que o contexto diz, a frase cala',
        text: 'O japonês omite tudo o que o contexto recupera: sujeito, objeto, às vezes o verbo. “食べた？” “うん、食べた。” é uma conversa completa, sem “você”, sem “isso”, sem “eu”. Os pronomes aparecem pouco, e usar 私 e あなた em toda frase soa como tradução. Quem fez o quê se recupera por outras pistas: o keigo (いらっしゃる é o outro; 参る sou eu) e os verbos de dar e receber (くれる indica que veio para mim). No fim da frase, os elementos se empilham numa ordem fixa, do conteúdo para a conversa: o fato, depois a atitude de quem fala, depois a relação com quem ouve: 雨がふる + かもしれない + ね.',
        table: {
          head: ['Pergunta', 'Resposta natural', 'Português'],
          rows: [
            ['もう昼ご飯を食べましたか。', 'はい、食べました。', 'Já almoçou? Sim, já.'],
            ['この本、読んだ？', 'うん、読んだ。', 'Leu este livro? Li.'],
            ['先生はいらっしゃいますか。', 'はい、いらっしゃいます。', 'O professor está? Está, sim.'],
            ['だれがくれたの？', '母がくれた。', 'Quem te deu? Minha mãe.'],
          ],
        },
        examples: [
          ['行く？', 'Você vai? (sem sujeito e sem mais nada)'],
          ['昨日は手伝ってくれてありがとう。', 'Obrigado por me ajudar ontem: くれる já diz que a ajuda veio para mim.'],
          ['雨がふるかもしれないね。', 'Pode ser que chova, né? O fato (ふる), a dúvida (かもしれない) e a conversa (ね), nessa ordem.'],
        ],
      },
    ],
    topics: [
      'ja-g-desu',
      'ja-g-particulas',
      'ja-g-wa-ga',
      'ja-g-relativas',
      'ja-g-condicionais',
      'ja-g-nominalizadores',
      'ja-g-conectores',
      'ja-g-passiva',
      'ja-g-pontuacao',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica da frase japonesa?',
        options: ['Sujeito, objeto, verbo', 'Sujeito, verbo, objeto', 'Verbo, sujeito, objeto', 'Livre, sem lugar fixo para o verbo'],
        answer: 'Sujeito, objeto, verbo',
        explanation: '私はパンを食べる: o verbo fecha a frase. O resto pode se mover, graças às partículas.',
      },
      {
        question: 'Onde fica a oração relativa em relação ao substantivo?',
        options: ['Antes dele, sem conector', 'Depois dele, com um “que”', 'No fim da frase', 'Em qualquer lugar'],
        answer: 'Antes dele, sem conector',
        explanation: '昨日買った本 = “o livro que comprei ontem”. Tudo o que modifica vem antes.',
      },
      {
        question: 'O que a partícula は marca?',
        options: ['O assunto da frase', 'Sempre o sujeito', 'O objeto direto', 'O lugar da ação'],
        answer: 'O assunto da frase',
        explanation: 'は anuncia de que se fala, e o assunto pode ser sujeito, objeto, lugar ou tempo.',
      },
      {
        question: 'Por que a resposta “はい、食べました” não tem sujeito nem objeto?',
        options: ['O japonês omite o que o contexto já diz', 'Porque está errada', 'Porque é fala infantil', 'Porque o verbo concorda com a pessoa'],
        answer: 'O japonês omite o que o contexto já diz',
        explanation: 'Sujeito e objeto ficam implícitos quando a conversa já os deixou claros.',
      },
      {
        question: 'Em “行くかもしれないね”, qual é a ordem dos elementos?',
        options: ['Fato, probabilidade, relação com o ouvinte', 'Relação com o ouvinte, fato, probabilidade', 'Probabilidade, fato, relação com o ouvinte', 'Não há ordem fixa'],
        answer: 'Fato, probabilidade, relação com o ouvinte',
        explanation: 'O fim da frase se empilha do conteúdo para a conversa: 行く + かもしれない + ね.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O japonês recorta o mundo do seu jeito: separa o que tem vida (いる) do que não tem (ある), classifica as coisas pela forma na hora de contar (本, 枚, 匹), marca de onde vem o que você sabe (そうだ, らしい), tem milhares de onomatopeias para estados e sensações, e palavras sem tradução direta, como もったいない e 木漏れ日.',
    sections: [
      {
        heading: 'Classificar o mundo: いる, ある e os contadores',
        text: 'Duas grandes divisões atravessam o léxico japonês. A primeira é a da vida: いる para o que se move por conta própria, ある para o resto. A segunda é a da forma, nos contadores. Cada contador tem um protótipo e se estende por metáfora, como as categorias da mente: 本 conta coisas longas e finas (lápis, garrafas), e daí filmes (antigos rolos de película), telefonemas (o fio) e até gols e trens. 枚 conta coisas planas: papel, camisetas, pizzas. 匹 conta bichos pequenos e 頭, bichos grandes. Aprender um contador é aprender como o japonês enxerga a forma das coisas.',
        table: {
          head: ['Contador', 'Protótipo', 'Extensões'],
          rows: [
            ['本', 'coisa longa e fina (lápis)', 'filmes, telefonemas, gols, trens'],
            ['枚', 'coisa plana (papel)', 'camisetas, pizzas, fatias, ingressos'],
            ['匹', 'bicho pequeno (gato)', 'peixes, insetos'],
            ['頭', 'bicho grande (vaca)', 'elefantes, cavalos'],
            ['羽', 'ave', 'coelhos (por tradição)'],
            ['台', 'máquina (carro)', 'computadores, pianos'],
          ],
        },
        examples: [
          ['映画を二本見ました。', 'Vi dois filmes: filme se conta com 本, como os antigos rolos de película (二本 = にほん).'],
          ['あとで電話を一本入れます。', 'Depois eu dou uma ligada: até telefonema é “longo” (一本 = いっぽん).'],
          ['動物園にぞうが三頭いる。', 'No zoológico há três elefantes (三頭 = さんとう).'],
        ],
      },
      {
        heading: 'Como você sabe? Evidência, sentimentos e aspecto',
        text: 'O japonês gramaticaliza a fonte da informação: o que você vê (降りそうだ), o que ouviu (降るそうだ), o que se comenta (降るらしい), o que deduz (降るようだ). E trata os estados internos como território privado: posso dizer “私はさびしい”, mas não “田中さんはさびしい”, porque não tenho acesso à mente do Tanaka. Para os outros, a língua pede um sinal de observação: さびしそうだ (parece triste), ほしがっている (está querendo). O aspecto também é semântico: ている é ação em curso com verbos que duram (読んでいる) e estado resultante com verbos de mudança (結婚している, é casado). Foi o linguista Kindaichi Haruhiko quem classificou os verbos japoneses por esse critério.',
        table: {
          head: ['Frase', 'Fonte ou tipo', 'Português'],
          rows: [
            ['雨が降りそうだ。', 'o que vejo', 'Parece que vai chover.'],
            ['雨が降るそうだ。', 'o que ouvi', 'Dizem que vai chover.'],
            ['雨が降るらしい。', 'o que se comenta', 'Pelo jeito, vai chover.'],
            ['雨が降るようだ。', 'o que deduzo', 'Tudo indica que vai chover.'],
            ['田中さんはさびしそうだ。', 'sentimento alheio, visto de fora', 'O Tanaka parece triste.'],
            ['窓が開いている。', 'estado resultante', 'A janela está aberta.'],
          ],
        },
        examples: [
          ['田中さんはさびしそうです。', 'O Tanaka parece triste: o sentimento dos outros se descreve “de fora”.'],
          ['弟が新しいゲームをほしがっている。', 'Meu irmão está doido pelo jogo novo: ほしい vira ほしがる para a terceira pessoa.'],
          ['姉は結婚している。', 'Minha irmã é casada: com verbo de mudança, ている é o estado que ficou.'],
        ],
      },
      {
        heading: 'Palavras que o português não tem (e vice-versa)',
        text: 'Toda língua recorta o mundo à sua maneira. O japonês tem uma palavra para a pena de desperdiçar (もったいない), outra para a luz do sol filtrada pelas folhas (木漏れ日), outra para contar com a indulgência de alguém próximo (甘える, tema de um livro famoso do psiquiatra Doi Takeo). 懐かしい costuma ser comparada à nossa “saudade”, mas não é a mesma coisa: 懐かしい é o prazer doce de reencontrar algo do passado, e não a falta de algo ausente. No sentido inverso, o japonês não tem uma palavra só para “água”: a fria é 水, a quente é お湯. O arroz cru é 米, o cozido é ご飯 (que também quer dizer “refeição”). E 青 cobre o azul e parte do verde: o sinal verde é 青信号, e a maçã verde, 青りんご.',
        table: {
          head: ['Japonês', 'Sentido', 'Em português'],
          rows: [
            ['もったいない', 'pena de desperdiçar', 'que desperdício!'],
            ['懐かしい', 'o prazer de reencontrar o passado', 'que saudade! (mas não é bem saudade)'],
            ['木漏れ日', 'luz do sol filtrada pelas folhas', 'não tem uma palavra'],
            ['甘える', 'contar com a indulgência do outro', 'fazer manha, se deixar mimar'],
            ['水・お湯', 'água fria, água quente', 'água'],
            ['米・ご飯', 'arroz cru, arroz cozido (e refeição)', 'arroz'],
            ['青', 'azul e parte do verde', 'azul; verde (no semáforo)'],
          ],
        },
        examples: [
          ['まだ食べられるのに、捨てるのはもったいない。', 'Jogar fora quando ainda dá para comer é um desperdício.'],
          ['この歌、懐かしいなあ。', 'Essa música me traz tantas lembranças boas!'],
          ['信号が青になったら渡ってください。', 'Atravesse quando o sinal ficar verde: em japonês, ele fica “azul” (青).'],
          ['お湯をわかしてください。', 'Ferva água, por favor: a água quente tem nome próprio, お湯.'],
        ],
      },
    ],
    topics: [
      'ja-g-numeros',
      'ja-g-aru-iru',
      'ja-g-teiru',
      'ja-g-aparencia',
      'ja-g-onomatopeia',
      'ja-g-expressoes',
      'ja-g-substantivos-formais',
    ],
    quiz: [
      {
        question: 'Por que se diz “ねこがいる”, mas “本がある”?',
        options: ['Um verbo é para seres vivos que se movem; o outro, para coisas', 'São sinônimos', 'Um deles é mais formal', 'Um deles é o passado'],
        answer: 'Um verbo é para seres vivos que se movem; o outro, para coisas',
        explanation: 'O japonês separa a existência pelo critério da vida (animacidade).',
      },
      {
        question: 'Com que contador se contam filmes?',
        options: ['本', '枚', '匹', '台'],
        answer: '本',
        explanation: 'O 本 se estende de coisas longas e finas para filmes (os rolos de película), telefonemas e gols.',
      },
      {
        question: 'Qual frase descreve com naturalidade o sentimento de outra pessoa?',
        options: ['田中さんはさびしそうだ。', '田中さんはさびしい。', '田中さんがさびしいです。', '田中さんのさびしいだ。'],
        answer: '田中さんはさびしそうだ。',
        explanation: 'Sentimentos alheios pedem um sinal de observação, como そう: “parece triste”.',
      },
      {
        question: 'De que cor é o “青信号”, o sinal que libera a travessia?',
        options: ['Verde', 'Azul', 'Amarelo', 'Branco'],
        answer: 'Verde',
        explanation: 'O 青 japonês cobre o azul e parte do verde, por tradição. O sinal é verde, mas se chama “azul”.',
      },
      {
        question: 'O que quer dizer “もったいない”?',
        options: ['Que desperdício!', 'Que saudade!', 'Que vergonha!', 'Que sorte!'],
        answer: 'Que desperdício!',
        explanation: 'もったいない é a pena de ver algo de valor sendo desperdiçado: comida, tempo, talento.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Em japonês, o jeito de dizer depende de com quem se fala e de quem é “de dentro” (内) ou “de fora” (外): o keigo eleva o outro e rebaixa você, o chefe perde o さん diante do cliente, e o “não” se diz sem dizer (ちょっと……). As partículas finais (ね, よ), as あいづち e os cumprimentos rituais mantêm a conversa em sintonia.',
    sections: [
      {
        heading: 'Dentro e fora (内・外) e os níveis de cortesia',
        text: 'A cortesia japonesa não depende só de quem é mais velho ou mais importante: depende de quem está do lado de quem. A família, a empresa, o time são o “dentro” (内); o cliente, o desconhecido, a outra empresa são o “fora” (外). Com o “fora”, o “dentro” se rebaixa em bloco: a sua mãe vira 母, o seu chefe perde o さん e ganha 謙譲語. Três níveis de fala se alternam: a forma simples (com íntimos), です・ます (o padrão com quem não é íntimo) e o keigo (clientes, superiores, situações formais). Os títulos também substituem os nomes: chama-se o professor de 先生, o diretor de 部長, o cliente de お客様, e desconhecidos por termos de parentesco (お兄さん, おばあちゃん). O あなた, que parece o nosso “você”, quase não aparece.',
        table: {
          head: ['Falando de…', 'Com alguém de dentro', 'Com alguém de fora'],
          rows: [
            ['a minha mãe', 'お母さん', '母'],
            ['o meu chefe Tanaka', '田中部長', '部長の田中'],
            ['a minha empresa', 'うちの会社', '弊社'],
            ['a empresa do outro', '—', '御社・貴社'],
          ],
        },
        examples: [
          ['母はただいま出かけております。', 'Minha mãe saiu no momento. (ao telefone, com alguém de fora)'],
          ['部長の田中から、お電話するように申しつかっております。', 'O diretor Tanaka me pediu que ligasse ao senhor.'],
          ['先生、質問してもよろしいでしょうか。', 'Professor, posso fazer uma pergunta?'],
        ],
      },
      {
        heading: 'Dizer “não” sem dizer “não”',
        text: 'O japonês evita o confronto direto. Um pedido recusado raramente ouve um いいえ: ouve “ちょっと……”, com a frase deixada no ar, ou “考えておきます” (vou pensar), ou “それはちょっと難しいですね” (isso é meio difícil). Há também a distinção entre 建前, a posição pública, e 本音, o que se pensa de verdade, e a habilidade de “ler o ar” (空気を読む), captando o que ninguém disse. Algumas respostas são ambíguas até para os japoneses: “いいです” pode ser “sim, pode” ou “não, obrigado”, e só o tom decide; “結構です”, diante de uma oferta, é quase sempre “não, obrigado”. E すみません faz três trabalhos: desculpa, agradece e pede licença.',
        table: {
          head: ['Frase', 'O que parece', 'O que costuma querer dizer'],
          rows: [
            ['ちょっと……', '“um pouco…”', 'não dá'],
            ['考えておきます。', 'vou pensar', 'provavelmente não'],
            ['それはちょっと難しいですね。', 'é meio difícil', 'não'],
            ['いいです。', 'está bom', 'sim, ou “não, obrigado” (pelo tom)'],
            ['結構です。', 'está ótimo', 'não, obrigado'],
            ['すみません。', 'desculpe', 'desculpe, obrigado ou com licença'],
          ],
        },
        examples: [
          ['すみません、その日はちょっと……。', 'Desculpe, nesse dia é meio… (não posso)'],
          ['前向きに検討させていただきます。', 'Vamos analisar com carinho. (muitas vezes, um “não” educado)'],
          ['わざわざすみません。', 'Obrigado pelo trabalho que você teve: aqui すみません agradece.'],
        ],
      },
      {
        heading: 'A conversa em dupla: あいづち, partículas e rituais',
        text: 'Quem ouve em japonês trabalha: a cada frase, solta uma あいづち (はい, ええ, うん, そうですね, なるほど, へえ), mostrando que acompanha. Ao telefone, o silêncio do ouvinte soa como desatenção. É parecido com o nosso “aham”, “sei”, “né”, só que mais frequente. As partículas finais regulam o que cada um sabe: ね convida a concordar, よ traz a novidade. Muitas frases ficam de propósito sem fim (〜けど……, 〜ので……), para o ouvinte completar. E o dia é marcado por fórmulas de ida e volta, que funcionam em par: quem sai diz いってきます e quem fica responde いってらっしゃい; quem chega diz ただいま e ouve おかえりなさい.',
        table: {
          head: ['Situação', 'Quem sai ou chega', 'Quem fica'],
          rows: [
            ['sair de casa', 'いってきます', 'いってらっしゃい'],
            ['voltar para casa', 'ただいま', 'おかえりなさい'],
            ['antes de comer', 'いただきます', '—'],
            ['depois de comer', 'ごちそうさまでした', '—'],
            ['sair do trabalho', 'お先に失礼します', 'お疲れさまでした'],
          ],
        },
        examples: [
          ['いってきます！', 'Tô indo! (ao sair de casa)'],
          ['おかえりなさい。', 'Bem-vindo de volta! (a quem chega)'],
          ['へえ、そうなんですか。', 'Nossa, é mesmo? (あいづち de surpresa)'],
        ],
      },
    ],
    topics: [
      'ja-g-kosoado',
      'ja-g-particulas-finais',
      'ja-g-keigo',
      'ja-g-dar-receber',
      'ja-g-negocios',
      'ja-g-coloquial',
    ],
    quiz: [
      {
        question: 'Ao falar com um cliente, como você se refere ao seu chefe Tanaka?',
        options: ['部長の田中', '田中部長さん', '田中様', '田中さん'],
        answer: '部長の田中',
        explanation: 'Diante de alguém de fora, o chefe é “de dentro”: sem さん nem 様, com o cargo antes do nome.',
      },
      {
        question: 'Numa negociação, o que “考えておきます” costuma querer dizer?',
        options: ['Provavelmente não', 'Sim, com certeza', 'Vou decidir amanhã', 'Não entendi a proposta'],
        answer: 'Provavelmente não',
        explanation: 'É uma recusa indireta: o japonês evita o “não” seco.',
      },
      {
        question: 'Alguém chega em casa e diz “ただいま”. O que a família responde?',
        options: ['おかえりなさい', 'いってらっしゃい', 'いただきます', 'ごちそうさま'],
        answer: 'おかえりなさい',
        explanation: 'ただいま e おかえりなさい formam um par. いってらっしゃい é para quem está saindo.',
      },
      {
        question: 'Para que servem as あいづち, como はい, ええ e なるほど?',
        options: ['Mostrar que você está ouvindo e acompanhando', 'Concordar com tudo o que foi dito', 'Interromper quem fala', 'Encerrar a conversa'],
        answer: 'Mostrar que você está ouvindo e acompanhando',
        explanation: 'はい nas あいづち nem sempre é “sim”: muitas vezes é só “estou ouvindo”.',
      },
      {
        question: 'Alguém oferece mais chá e você responde “結構です”. O que você disse?',
        options: ['Não, obrigado', 'Sim, por favor', 'Quero dois', 'Não entendi'],
        answer: 'Não, obrigado',
        explanation: 'Diante de uma oferta, 結構です é a recusa educada.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O japonês escolhe estilo em várias camadas ao mesmo tempo: a cópula (です, だ, である), a escrita (kanji, hiragana ou katakana para a mesma palavra), a direção (vertical ou horizontal), a voz de personagem (役割語), o dialeto e a herança clássica, do 文語 dos provérbios ao ritmo de cinco e sete moras.',
    sections: [
      {
        heading: 'Três escritas, três efeitos',
        text: 'A mesma palavra pode ser escrita de três jeitos, e cada um muda o tom. 猫, em kanji, é neutro e adulto; ねこ, em hiragana, é suave, infantil ou carinhoso; ネコ, em katakana, é técnico (a biologia escreve os nomes de espécies assim: ヒト, ネコ) ou enfático, como na publicidade. Os editores decidem quais palavras “abrir” em kana para aliviar a leitura: 事 vira こと, 下さい vira ください. Nos mangás e nas letras de música, o furigana permite leituras criativas: 本気 lido マジ (sério), 地球 lido ほし (o planeta). E a direção também é estilo: romances, jornais e mangás vêm na vertical (縦書き), da direita para a esquerda; textos científicos e a internet, na horizontal (横書き).',
        table: {
          head: ['Grafia', 'Efeito', 'Onde aparece'],
          rows: [
            ['猫', 'neutro, adulto', 'jornais, livros'],
            ['ねこ', 'suave, infantil, carinhoso', 'livros infantis, placas amigáveis'],
            ['ネコ', 'técnico ou enfático', 'biologia, publicidade, mangá'],
            ['下さい → ください', 'mais leve de ler', 'textos modernos'],
            ['本気（マジ）', 'leitura criativa com furigana', 'mangá, letras de música'],
          ],
        },
        examples: [
          ['ねこがだいすき！', 'Amo gatos! (em hiragana: tom fofo)'],
          ['ネコ科の動物', 'Animais da família dos felinos (em katakana: tom científico)'],
          ['猫を飼っている。', 'Tenho um gato. (em kanji: tom neutro)'],
        ],
      },
      {
        heading: 'Registros e vozes: do artigo ao personagem',
        text: 'O estilo começa na cópula: です・ます para falar com o leitor, だ para o texto neutro, である para o artigo e o ensaio, e nunca misturados no mesmo texto. Na ficção, a fala vira identidade: é o 役割語, a “linguagem de papel”, estudada pelo linguista Kinsui Satoshi. O velho sábio diz わし e 〜じゃ, a moça rica diz 〜ですわ e 〜てよ, o samurai diz 拙者 e 〜でござる, o robô fala em katakana. Ninguém fala assim na vida real, mas todo japonês reconhece o personagem na hora. Os dialetos também viram recurso: o Kansai-ben dá graça e espontaneidade, e o narrador de romance escolhe entre o passado seco (男は扉を開けた) e o presente que aproxima a cena.',
        table: {
          head: ['Personagem', 'Fala', 'Português'],
          rows: [
            ['o velho sábio', 'わしは何でも知っておるぞ。', 'Eu sei de tudo, meu jovem.'],
            ['a moça rica', 'よろしくってよ。', 'Pois não, querida.'],
            ['o samurai', '拙者は旅の者でござる。', 'Sou um viajante.'],
            ['o robô', 'ワタシハロボットデス。', 'EU. SOU. UM. ROBÔ.'],
            ['o narrador', '男は静かに扉を開けた。', 'O homem abriu a porta em silêncio.'],
          ],
        },
        examples: [
          ['わしは何でも知っておるぞ。', 'Eu sei de tudo, meu jovem. (fala de “velho sábio”)'],
          ['拙者は旅の者でござる。', 'Sou um viajante. (fala de samurai de ficção)'],
          ['男は静かに扉を開けた。', 'O homem abriu a porta em silêncio. (voz de narrador)'],
        ],
      },
      {
        heading: 'A herança clássica e o ritmo de cinco e sete',
        text: 'O ritmo de cinco e sete moras (七五調), herdado da poesia clássica, está entranhado na língua: no haicai e no tanka, mas também em canções, provérbios e até em slogans de trânsito, como o famoso “とび出すな車は急に止まれない” (não saia correndo: o carro não para de repente), um 5-7-5 perfeito. A poesia clássica deixou também seus recursos: o 掛詞, a palavra de duplo sentido (ふる, “cair” a chuva e “passar” a vida); o 対句, o paralelismo (月は東に日は西に); o 体言止め, a frase que termina num substantivo. E o 文語 vive nos provérbios (光陰矢のごとし) e nas placas solenes (立ち入るべからず).',
        table: {
          head: ['Recurso', 'Exemplo', 'O que faz'],
          rows: [
            ['七五調', 'とび出すな車は急に止まれない', 'ritmo de 5-7-5, até num slogan'],
            ['掛詞', 'ふる (降る・経る)', 'uma palavra, dois sentidos'],
            ['対句', '月は東に日は西に', 'duas partes espelhadas'],
            ['体言止め', '古池や蛙飛び込む水の音', 'fechar num substantivo'],
            ['文語', '光陰矢のごとし', 'solenidade antiga'],
          ],
        },
        examples: [
          ['とび出すな車は急に止まれない', 'Não saia correndo: o carro não para de repente. (slogan de trânsito em 5-7-5)'],
          ['光陰矢のごとし。', 'O tempo voa como uma flecha. (文語)'],
          ['菜の花や月は東に日は西に', 'Flores de colza: a lua no leste, o sol no oeste. (Buson; paralelismo)'],
        ],
      },
    ],
    topics: [
      'ja-g-escrita-formal',
      'ja-g-dialetos',
      'ja-g-keigo-avancado',
      'ja-g-expressoes-n1',
      'ja-g-classico',
      'ja-g-poesia',
    ],
    quiz: [
      {
        question: 'Que efeito tem escrever “猫” em katakana, “ネコ”?',
        options: ['Tom técnico ou enfático', 'Tom infantil', 'Tom arcaico', 'Nenhum efeito'],
        answer: 'Tom técnico ou enfático',
        explanation: 'O katakana dá ar científico (os nomes de espécies) ou de destaque. O hiragana é que soa suave e infantil.',
      },
      {
        question: 'Em que estilo se escreve um artigo acadêmico em japonês?',
        options: ['である', 'です・ます', 'Kansai-ben', 'Keigo de balcão'],
        answer: 'である',
        explanation: 'Artigos, ensaios e relatórios usam o estilo だ・である, sem misturar com です・ます.',
      },
      {
        question: 'Qual é o ritmo do slogan “とび出すな車は急に止まれない”?',
        options: ['5-7-5 moras', '7-7 moras', '5-5-5 moras', 'Não tem métrica'],
        answer: '5-7-5 moras',
        explanation: 'と・び・だ・す・な (5), く・る・ま・は・きゅ・う・に (7), と・ま・れ・な・い (5): o ritmo do haicai.',
      },
      {
        question: 'O que é o 役割語?',
        options: ['A fala típica de personagens, como a do velho sábio ou do samurai', 'O keigo das empresas', 'Um dialeto de Okinawa', 'A escrita vertical'],
        answer: 'A fala típica de personagens, como a do velho sábio ou do samurai',
        explanation: 'É a “linguagem de papel” da ficção: ninguém fala assim, mas todos reconhecem o personagem.',
      },
      {
        question: 'Qual destas frases vem do japonês clássico?',
        options: ['光陰矢のごとし', 'めっちゃおいしい', 'いいじゃん', 'スマホ貸して'],
        answer: '光陰矢のごとし',
        explanation: 'ごとし (como) é uma forma do 文語. As outras são fala moderna e informal.',
      },
    ],
  },
];
