import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do japonês para quem fala português (pronúncia de referência: Tóquio, 標準語).
 * Quase todos giram em torno da mora, a «batida» do japonês: a vogal longa, o っ e o ん valem uma
 * batida inteira cada um, e o ouvido do brasileiro, acostumado a contar sílabas, passa por cima delas.
 */
export const PARES_JA: MinimalPairs = {
  contrasts: [
    {
      id: 'vogal-longa',
      name: 'vogal curta × vogal longa',
      sounds: ['a', 'aː'],
      tip: 'No japonês, a vogal longa vale duas batidas (duas moras) e sozinha muda a palavra: おばさん (tia) × おばあさん (avó). Em português a duração não separa palavras, então o brasileiro encurta sem perceber e chama a avó de tia. Conte as batidas: お・ば・あ・さ・ん são cinco; お・ば・さ・ん, quatro. No hiragana, a vogal longa se escreve dobrada (ああ, いい, おう, えい); no katakana, com o traço ー: ビル (prédio) × ビール (cerveja).',
    },
    {
      id: 'consoante-dupla',
      name: 'consoante simples × consoante dupla (っ)',
      sounds: ['t', 'tː'],
      tip: 'O っ pequeno é uma pausa de uma batida inteira antes da consoante: a boca se prepara para o «t» e fica parada um instante, como no italiano «notte». きって (selo) é «kit-te»; きて (venha) é «ki-te», direto. Sem a pausa, o japonês ouve a outra palavra: おっと (marido) vira おと (som).',
    },
    {
      id: 'n-moraico',
      name: 'ん antes de vogal × n + vogal',
      sounds: ['ɰ̃', 'n'],
      tip: 'O ん vale uma batida inteira e não se liga à vogal seguinte: きんえん (proibido fumar) é «kin-en», com um «n» nasal segurado, sem encostar a língua; きねん (lembrança) é «ki-nen». O brasileiro tende a juntar tudo («ki-nen») ou a só nasalizar a vogal, como em «quinto». Segure o ん como um «hum» curtinho antes de passar para a vogal.',
    },
    {
      id: 'tsu-su',
      name: 'つ × す',
      sounds: ['t͡s', 's'],
      tip: 'つ é «ts»: a ponta da língua encosta atrás dos dentes de cima, como para um «t», e solta chiando. す é só o «s», sem a batidinha. Se o «t» sumir, つき (lua) vira すき (gostar): em vez de falar da lua, você declara amor.',
    },
    {
      id: 'tsu-chu',
      name: 'つ × ちゅ',
      sounds: ['t͡s', 't͡ɕ'],
      tip: 'No つ a língua fica na frente, atrás dos dentes, e sai o «ts» de «tsunami». No ちゅ a língua sobe para o céu da boca e sai o «tchu» de «tchutchuca». Muito brasileiro diz つ como «tchu», e aí つうがく (ir para a escola) vira ちゅうがく (o ginásio), e つうか (passagem) vira ちゅうか (comida chinesa).',
    },
    {
      id: 'r-h',
      name: 'r batido × h',
      sounds: ['ɾ', 'h'],
      tip: 'Armadilha de carioca e de paulistano: o nosso «r» do começo da palavra («rato») sai na garganta e soa como o は行 japonês. O «r» japonês é sempre o fraco de «cara», uma batidinha da ponta da língua, mesmo no começo da palavra. Com o «r» de «rato», ろうか (corredor) vira ほうか (incêndio criminoso), e れい (obrigado, reverência) vira へい (muro).',
    },
    {
      id: 'yoon',
      name: 'ゃ ゅ ょ pequenos × grandes',
      sounds: ['kʲo', 'kʲi.jo'],
      tip: 'O ゃ, ゅ ou ょ pequeno gruda na sílaba anterior e forma uma batida só: きょう (hoje) é «kyô», きょ・う; きよう (habilidoso) é «ki-yô», き・よ・う, uma batida a mais. Olhe o tamanho da letra e conte as batidas: びょういん (hospital) × びよういん (salão de beleza) é um erro clássico de quem começa.',
    },
    {
      id: 'acento-tonal',
      name: 'acento de altura (pitch)',
      sounds: ['˥˩', '˩˥'],
      tip: 'O japonês de Tóquio tem acento de altura: cada batida é alta ou baixa, e às vezes essa melodia é a única diferença entre duas palavras. 箸 (hashi, pauzinhos) começa alto e desce: HA-shi; 橋 (hashi, ponte) começa baixo e sobe: ha-SHI. Não é mais forte nem mais longo, como a nossa tônica: é mais agudo. O contexto quase sempre salva, mas é a melodia que faz você soar natural.',
      // a gravação de uma palavra solta nem sempre deixa ouvir a melodia: aqui vale a voz do aparelho, que lê o kanji
      deviceVoice: true,
    },
  ],
  pairs: [
    { contrast: 'vogal-longa', a: ['おばさん', 'tia; senhora (de meia-idade)'], b: ['おばあさん', 'avó; senhora idosa'] },
    { contrast: 'vogal-longa', a: ['おじさん', 'tio; senhor (de meia-idade)'], b: ['おじいさん', 'avô; senhor idoso'] },
    { contrast: 'vogal-longa', a: ['ビル', 'prédio'], b: ['ビール', 'cerveja'] },
    { contrast: 'vogal-longa', a: ['とり', 'pássaro (鳥)'], b: ['とおり', 'rua, avenida (通り)'] },
    { contrast: 'vogal-longa', a: ['ここ', 'aqui'], b: ['こうこう', 'ensino médio (高校)'] },
    { contrast: 'vogal-longa', a: ['ゆき', 'neve (雪)'], b: ['ゆうき', 'coragem (勇気)'] },
    { contrast: 'consoante-dupla', a: ['きて', 'venha (来て)'], b: ['きって', 'selo (切手)'] },
    { contrast: 'consoante-dupla', a: ['いた', 'estava (いる)'], b: ['いった', 'disse; foi (言った, 行った)'] },
    { contrast: 'consoante-dupla', a: ['おと', 'som (音)'], b: ['おっと', 'marido (夫)'] },
    { contrast: 'consoante-dupla', a: ['さか', 'ladeira (坂)'], b: ['さっか', 'escritor (作家)'] },
    { contrast: 'consoante-dupla', a: ['まち', 'cidade, bairro (町)'], b: ['マッチ', 'fósforo'] },
    { contrast: 'n-moraico', a: ['きんえん', 'proibido fumar (禁煙)'], b: ['きねん', 'lembrança, comemoração (記念)'] },
    { contrast: 'n-moraico', a: ['かんゆう', 'convite insistente, aliciamento (勧誘)'], b: ['かにゅう', 'adesão, filiação (加入)'] },
    { contrast: 'n-moraico', a: ['たんい', 'unidade; crédito da faculdade (単位)'], b: ['たに', 'vale (谷)'] },
    { contrast: 'tsu-su', a: ['つき', 'lua (月)'], b: ['すき', 'gostar (好き)'] },
    { contrast: 'tsu-su', a: ['つる', 'grou (鶴)'], b: ['する', 'fazer'] },
    { contrast: 'tsu-su', a: ['つな', 'corda (綱)'], b: ['すな', 'areia (砂)'] },
    { contrast: 'tsu-su', a: ['つみ', 'pecado, crime (罪)'], b: ['すみ', 'canto; carvão (隅, 炭)'] },
    { contrast: 'tsu-chu', a: ['つうがく', 'ir para a escola (通学)'], b: ['ちゅうがく', 'ginásio, ensino fundamental II (中学)'] },
    { contrast: 'tsu-chu', a: ['つうか', 'passagem, trânsito (通過)'], b: ['ちゅうか', 'comida chinesa (中華)'] },
    { contrast: 'tsu-chu', a: ['つうこう', 'circulação, tráfego (通行)'], b: ['ちゅうこう', 'fundamental II e médio juntos (中高)'] },
    { contrast: 'r-h', a: ['ろうか', 'corredor (廊下)'], b: ['ほうか', 'incêndio criminoso (放火)'] },
    { contrast: 'r-h', a: ['れい', 'agradecimento, reverência; zero (礼, 零)'], b: ['へい', 'muro (塀)'] },
    { contrast: 'r-h', a: ['らん', 'orquídea (蘭)'], b: ['はん', 'carimbo; grupo (判, 班)'] },
    { contrast: 'r-h', a: ['りょう', 'dormitório, alojamento (寮)'], b: ['ひょう', 'tabela; leopardo (表, 豹)'] },
    { contrast: 'yoon', a: ['きょう', 'hoje (今日)'], b: ['きよう', 'habilidoso, jeitoso (器用)'] },
    { contrast: 'yoon', a: ['びょういん', 'hospital (病院)'], b: ['びよういん', 'salão de beleza (美容院)'] },
    { contrast: 'yoon', a: ['じゅう', 'dez (十)'], b: ['じゆう', 'liberdade (自由)'] },
    { contrast: 'yoon', a: ['りょう', 'dormitório; quantidade (寮, 量)'], b: ['りよう', 'uso, utilização (利用)'] },
    { contrast: 'acento-tonal', a: ['箸', 'pauzinhos (はし: HA-shi, desce)'], b: ['橋', 'ponte (はし: ha-SHI, sobe)'] },
    { contrast: 'acento-tonal', a: ['雨', 'chuva (あめ: A-me, desce)'], b: ['飴', 'bala, doce (あめ: a-ME, sobe)'] },
    { contrast: 'acento-tonal', a: ['鮭', 'salmão (さけ: SA-ke, desce)'], b: ['酒', 'saquê, bebida alcoólica (さけ: sa-KE, sobe)'] },
    { contrast: 'acento-tonal', a: ['神', 'deus (かみ: KA-mi, desce)'], b: ['紙', 'papel (かみ: ka-MI, sobe)'] },
  ],
  // escritas diferentes que soam igual: o kana guarda a história da palavra, a boca não
  sameSound: [
    { words: [['じめん', 'chão, solo (地面)'], ['はなぢ', 'sangramento no nariz (鼻血)']], note: 'じ e ぢ soam igual, «dji». O ぢ só aparece quando um ち ganha os tracinhos ao formar palavra: はな (nariz) + ち (sangue) = はなぢ.' },
    { words: [['すずしい', 'fresco (o clima)'], ['つづく', 'continuar']], note: 'ず e づ soam igual, «dzu». O づ vem de um つ que ganhou tracinhos: つづく repete o つ, e みか + つき vira みかづき (lua crescente).' },
    { words: [['おおきい', 'grande'], ['おうさま', 'rei']], note: 'O «o» longo se escreve おお em poucas palavras (おおきい, とおい, おおい) e おう na maioria (おうさま, こうこう, ありがとう): o som é o mesmo, [oː].' },
    { words: [['おかし', 'doce, guloseima'], ['をかし', 'encantador (no japonês clássico)']], note: 'お e を soam igual, «o». Hoje o を só aparece como a partícula do objeto (みずをのむ); nos textos antigos, como o «Makura no Sōshi», aparece dentro das palavras.' },
  ],
};
