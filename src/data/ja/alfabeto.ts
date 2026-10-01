import type { AlphabetData } from '../types';

/**
 * Os 46 kana básicos e os 25 com tracinhos (dakuten ゛) ou bolinha (handakuten ゜), cada um como
 * «hiragana katakana» («あ ア»): os dois silabários têm os mesmos sons, um para as palavras japonesas
 * e outro para as estrangeiras. Cada kana vale uma batida (mora) inteira. Nenhum é parecido com uma
 * letra latina, então todos são «nova».
 */
export const ALPHABET_JA: AlphabetData = {
  letters: [
    // ——— vogais ———
    { letter: 'あ ア', ipa: '[a]', short: 'a', sound: '“a” de “casa”, claro e aberto', example: ['あさ', 'manhã'], group: 'nova' },
    { letter: 'い イ', ipa: '[i]', short: 'i', sound: '“i” de “vida”', example: ['いぬ', 'cachorro'], group: 'nova' },
    { letter: 'う ウ', ipa: '[ɯ]', short: 'u', sound: '“u” sem fazer bico: lábios relaxados. Entre consoantes surdas e no fim de です e ます quase some: です soa “dess”', example: ['うみ', 'mar'], group: 'nova' },
    { letter: 'え エ', ipa: '[e]', short: 'e', sound: '“e” entre o “ê” de “você” e o “é” de “café”', example: ['えき', 'estação (de trem)'], group: 'nova' },
    { letter: 'お オ', ipa: '[o]', short: 'o', sound: '“o” entre o “ô” de “ovo” e o “ó” de “avó”', example: ['おにぎり', 'bolinho de arroz'], group: 'nova' },
    // ——— k ———
    { letter: 'か カ', ipa: '[ka]', short: 'ka', sound: '“ca” de “casa”', example: ['かさ', 'guarda-chuva'], group: 'nova' },
    { letter: 'き キ', ipa: '[kʲi]', short: 'ki', sound: '“qui” de “quilo”', example: ['きもの', 'quimono'], group: 'nova' },
    { letter: 'く ク', ipa: '[kɯ]', short: 'ku', sound: '“cu” de “cuca”, sem bico nos lábios', example: ['くるま', 'carro'], group: 'nova' },
    { letter: 'け ケ', ipa: '[ke]', short: 'ke', sound: '“que” de “queijo”', example: ['けむり', 'fumaça'], group: 'nova' },
    { letter: 'こ コ', ipa: '[ko]', short: 'ko', sound: '“co” de “coco”', example: ['こども', 'criança'], group: 'nova' },
    // ——— s ———
    { letter: 'さ サ', ipa: '[sa]', short: 'sa', sound: '“sa” de “sapo”', example: ['さくら', 'cerejeira'], group: 'nova' },
    { letter: 'し シ', ipa: '[ɕi]', short: 'shi', sound: '“xi” de “xícara”, não “si”', example: ['しか', 'cervo'], group: 'nova' },
    { letter: 'す ス', ipa: '[sɯ]', short: 'su', sound: '“su” de “sucesso”, sem bico; no fim da frase quase some', example: ['すし', 'sushi'], group: 'nova' },
    { letter: 'せ セ', ipa: '[se]', short: 'se', sound: '“se” de “sede”', example: ['せんせい', 'professor'], group: 'nova' },
    { letter: 'そ ソ', ipa: '[so]', short: 'so', sound: '“so” de “sono”', example: ['そら', 'céu'], group: 'nova' },
    // ——— t ———
    { letter: 'た タ', ipa: '[ta]', short: 'ta', sound: '“ta” de “tatu”', example: ['たまご', 'ovo'], group: 'nova' },
    { letter: 'ち チ', ipa: '[t͡ɕi]', short: 'chi', sound: '“tchi”, como o “ti” de “tia” no Rio ou em São Paulo', example: ['ちず', 'mapa'], group: 'nova' },
    { letter: 'つ ツ', ipa: '[t͡sɯ]', short: 'tsu', sound: '“tsu”, o “ts” de “tsunami”: um “t” que solta chiando em “s”. Não é “tu” nem “su”', example: ['つき', 'lua'], group: 'nova' },
    { letter: 'て テ', ipa: '[te]', short: 'te', sound: '“te” de “teto”; nunca vira “tchi”, como o “te” de “leite”', example: ['てがみ', 'carta'], group: 'nova' },
    { letter: 'と ト', ipa: '[to]', short: 'to', sound: '“to” de “toco”', example: ['とけい', 'relógio'], group: 'nova' },
    // ——— n ———
    { letter: 'な ナ', ipa: '[na]', short: 'na', sound: '“na” de “nada”', example: ['なつ', 'verão'], group: 'nova' },
    { letter: 'に ニ', ipa: '[ɲi]', short: 'ni', sound: '“ni” de “ninho”, com a língua no céu da boca, quase “nhi”', example: ['にく', 'carne'], group: 'nova' },
    { letter: 'ぬ ヌ', ipa: '[nɯ]', short: 'nu', sound: '“nu” de “nuvem”, sem bico', example: ['ぬいぐるみ', 'bicho de pelúcia'], group: 'nova' },
    { letter: 'ね ネ', ipa: '[ne]', short: 'ne', sound: '“ne” de “neve”', example: ['ねこ', 'gato'], group: 'nova' },
    { letter: 'の ノ', ipa: '[no]', short: 'no', sound: '“no” de “nome”', example: ['のり', 'alga nori'], group: 'nova' },
    // ——— h ———
    { letter: 'は ハ', ipa: '[ha]', short: 'ha', sound: '“ra” com o “r” de “rato” do Rio, bem soprado e leve. Como partícula (わたしは), lê-se “wa”', example: ['はな', 'flor'], group: 'nova' },
    { letter: 'ひ ヒ', ipa: '[çi]', short: 'hi', sound: 'um “ri” de “rico” (do Rio) soprado com a língua perto do céu da boca, quase um “xi” sem chiado', example: ['ひと', 'pessoa'], group: 'nova' },
    { letter: 'ふ フ', ipa: '[ɸɯ]', short: 'fu', sound: 'sopro entre “f” e “h”: os lábios quase se tocam, sem os dentes, como quem apaga uma vela', example: ['ふゆ', 'inverno'], group: 'nova' },
    { letter: 'へ ヘ', ipa: '[he]', short: 'he', sound: '“re” com o “r” leve de “rato”. Como partícula de direção (がっこうへ), lê-se “e”', example: ['へや', 'quarto'], group: 'nova' },
    { letter: 'ほ ホ', ipa: '[ho]', short: 'ho', sound: '“ro” com o “r” leve de “rato”', example: ['ほし', 'estrela'], group: 'nova' },
    // ——— m ———
    { letter: 'ま マ', ipa: '[ma]', short: 'ma', sound: '“ma” de “mala”', example: ['まど', 'janela'], group: 'nova' },
    { letter: 'み ミ', ipa: '[mʲi]', short: 'mi', sound: '“mi” de “mito”', example: ['みず', 'água'], group: 'nova' },
    { letter: 'む ム', ipa: '[mɯ]', short: 'mu', sound: '“mu” de “muda”, sem bico', example: ['むし', 'inseto'], group: 'nova' },
    { letter: 'め メ', ipa: '[me]', short: 'me', sound: '“me” de “medo”', example: ['めがね', 'óculos'], group: 'nova' },
    { letter: 'も モ', ipa: '[mo]', short: 'mo', sound: '“mo” de “morango”', example: ['もり', 'floresta'], group: 'nova' },
    // ——— y ———
    { letter: 'や ヤ', ipa: '[ja]', short: 'ya', sound: '“ia” de “iate”', example: ['やま', 'montanha'], group: 'nova' },
    { letter: 'ゆ ユ', ipa: '[jɯ]', short: 'yu', sound: '“iu” de “iupi”', example: ['ゆき', 'neve'], group: 'nova' },
    { letter: 'よ ヨ', ipa: '[jo]', short: 'yo', sound: '“iô” de “iô-iô”', example: ['よる', 'noite'], group: 'nova' },
    // ——— r: sempre o «r» fraco de «cara» ———
    { letter: 'ら ラ', ipa: '[ɾa]', short: 'ra', sound: '“ra” de “cara”: o “r” fraco, uma batidinha da língua. Nunca o “r” de “rato”, nem no começo da palavra', example: ['らくだ', 'camelo'], group: 'nova' },
    { letter: 'り リ', ipa: '[ɾʲi]', short: 'ri', sound: '“ri” de “Maria”, com o “r” fraco', example: ['りんご', 'maçã'], group: 'nova' },
    { letter: 'る ル', ipa: '[ɾɯ]', short: 'ru', sound: '“ru” de “Peru”, com o “r” fraco e sem bico', example: ['るす', 'estar fora de casa'], group: 'nova' },
    { letter: 'れ レ', ipa: '[ɾe]', short: 're', sound: '“re” de “careta”, com o “r” fraco', example: ['れいぞうこ', 'geladeira'], group: 'nova' },
    { letter: 'ろ ロ', ipa: '[ɾo]', short: 'ro', sound: '“ro” de “caroço”, com o “r” fraco', example: ['ろうそく', 'vela'], group: 'nova' },
    // ——— w e n ———
    { letter: 'わ ワ', ipa: '[ɰa]', short: 'wa', sound: '“uá” de “água”, bem juntinho: “wa”', example: ['わたし', 'eu'], group: 'nova' },
    { letter: 'を ヲ', ipa: '[o]', short: 'o', sound: 'soa igual a お. Só aparece como a partícula do objeto: みずをのむ, “beber água”', example: ['みずをのむ', 'beber água'], group: 'nova' },
    { letter: 'ん ン', ipa: '[ɴ]', short: 'n', sound: '“n” que vale uma batida inteira: antes de “p, b, m” soa “m” (さんぽ, “sampo”), antes de “k, g” como o “n” de “banco”, no fim como o “m” de “bom”', example: ['ほん', 'livro'], group: 'nova' },
    // ——— com tracinhos (dakuten): a consoante fica sonora ———
    { letter: 'が ガ', ipa: '[ga]', short: 'ga', sound: '“ga” de “gato”. Os tracinhos deixam a consoante sonora: か → が', example: ['がっこう', 'escola'], group: 'nova' },
    { letter: 'ぎ ギ', ipa: '[gʲi]', short: 'gi', sound: '“gui” de “guitarra”, nunca “ji”', example: ['ぎんこう', 'banco (instituição)'], group: 'nova' },
    { letter: 'ぐ グ', ipa: '[gɯ]', short: 'gu', sound: '“gu” de “gula”, sem bico', example: ['グラス', 'taça'], group: 'nova' },
    { letter: 'げ ゲ', ipa: '[ge]', short: 'ge', sound: '“gue” de “foguete”', example: ['げた', 'tamanco de madeira (geta)'], group: 'nova' },
    { letter: 'ご ゴ', ipa: '[go]', short: 'go', sound: '“go” de “goleiro”', example: ['ごはん', 'arroz; refeição'], group: 'nova' },
    { letter: 'ざ ザ', ipa: '[d͡za]', short: 'za', sound: '“za” de “zabumba”; no começo da palavra sai um “dz” leve', example: ['ざっし', 'revista'], group: 'nova' },
    { letter: 'じ ジ', ipa: '[d͡ʑi]', short: 'ji', sound: '“dji”, como o “di” de “dia” no Rio ou em São Paulo', example: ['じてんしゃ', 'bicicleta'], group: 'nova' },
    { letter: 'ず ズ', ipa: '[d͡zɯ]', short: 'zu', sound: '“zu” de “zumbido”, com um “d” leve na frente: “dzu”', example: ['ズボン', 'calça'], group: 'nova' },
    { letter: 'ぜ ゼ', ipa: '[d͡ze]', short: 'ze', sound: '“ze” de “zero”', example: ['ぜんぶ', 'tudo'], group: 'nova' },
    { letter: 'ぞ ゾ', ipa: '[d͡zo]', short: 'zo', sound: '“zo” de “zona”', example: ['ぞう', 'elefante'], group: 'nova' },
    { letter: 'だ ダ', ipa: '[da]', short: 'da', sound: '“da” de “dado”', example: ['だいがく', 'universidade'], group: 'nova' },
    { letter: 'ぢ ヂ', ipa: '[d͡ʑi]', short: 'ji', sound: 'soa igual a じ, “dji”. É raro: aparece quando um ち ganha os tracinhos, como em はなぢ (はな + ち)', example: ['はなぢ', 'sangramento no nariz'], group: 'nova' },
    { letter: 'づ ヅ', ipa: '[d͡zɯ]', short: 'zu', sound: 'soa igual a ず, “dzu”. É raro: aparece quando um つ ganha os tracinhos, como em みかづき (みか + つき)', example: ['みかづき', 'lua crescente'], group: 'nova' },
    { letter: 'で デ', ipa: '[de]', short: 'de', sound: '“de” de “dedo”; nunca vira “dji”, como o “de” de “tarde”', example: ['でんわ', 'telefone'], group: 'nova' },
    { letter: 'ど ド', ipa: '[do]', short: 'do', sound: '“do” de “dono”', example: ['どうぶつ', 'animal'], group: 'nova' },
    { letter: 'ば バ', ipa: '[ba]', short: 'ba', sound: '“ba” de “bala”. Os tracinhos transformam o “h” em “b”: は → ば', example: ['ばら', 'rosa (a flor)'], group: 'nova' },
    { letter: 'び ビ', ipa: '[bʲi]', short: 'bi', sound: '“bi” de “bico”', example: ['びょういん', 'hospital'], group: 'nova' },
    { letter: 'ぶ ブ', ipa: '[bɯ]', short: 'bu', sound: '“bu” de “bule”, sem bico', example: ['ぶた', 'porco'], group: 'nova' },
    { letter: 'べ ベ', ipa: '[be]', short: 'be', sound: '“be” de “bebê”', example: ['べんとう', 'marmita (bentô)'], group: 'nova' },
    { letter: 'ぼ ボ', ipa: '[bo]', short: 'bo', sound: '“bo” de “bolo”', example: ['ぼうし', 'chapéu'], group: 'nova' },
    // ——— com bolinha (handakuten): o «h» vira «p» ———
    { letter: 'ぱ パ', ipa: '[pa]', short: 'pa', sound: '“pa” de “pato”. A bolinha transforma o “h” em “p”: は → ぱ', example: ['パンダ', 'panda'], group: 'nova' },
    { letter: 'ぴ ピ', ipa: '[pʲi]', short: 'pi', sound: '“pi” de “pipoca”', example: ['ピアノ', 'piano'], group: 'nova' },
    { letter: 'ぷ プ', ipa: '[pɯ]', short: 'pu', sound: '“pu” de “pulo”, sem bico', example: ['プール', 'piscina'], group: 'nova' },
    { letter: 'ぺ ペ', ipa: '[pe]', short: 'pe', sound: '“pe” de “pera”', example: ['ペン', 'caneta'], group: 'nova' },
    { letter: 'ぽ ポ', ipa: '[po]', short: 'po', sound: '“po” de “pote”', example: ['ポケット', 'bolso'], group: 'nova' },
  ],
  // palavras estrangeiras em katakana: quem aprendeu os kana já entende sem estudar (パン veio do português «pão»)
  readingWords: [
    ['コーヒー', '☕', 'café'],
    ['パン', '🍞', 'pão'],
    ['テレビ', '📺', 'televisão'],
    ['バナナ', '🍌', 'banana'],
    ['ピザ', '🍕', 'pizza'],
    ['サッカー', '⚽', 'futebol'],
    ['ギター', '🎸', 'violão'],
    ['タクシー', '🚕', 'táxi'],
    ['カメラ', '📷', 'câmera'],
    ['レストラン', '🍽️', 'restaurante'],
    ['ホテル', '🏨', 'hotel'],
    ['バス', '🚌', 'ônibus'],
    ['トマト', '🍅', 'tomate'],
    ['チョコレート', '🍫', 'chocolate'],
    ['アイスクリーム', '🍦', 'sorvete'],
    ['ハンバーガー', '🍔', 'hambúrguer'],
    ['ロボット', '🤖', 'robô'],
    ['ペンギン', '🐧', 'pinguim'],
    ['ライオン', '🦁', 'leão'],
    ['ラジオ', '📻', 'rádio'],
  ],
};
