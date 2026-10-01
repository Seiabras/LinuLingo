/**
 * Quadro do Alfabeto Fonético Internacional (IPA) com os sons que aparecem no app
 * (português, espanhol, romeno, russo e inglês). Cada exemplo é [locale da voz, palavra, tradução/nota].
 */
export type IpaGroup = 'oclusiva' | 'nasal' | 'fricativa' | 'africada' | 'vibrante' | 'lateral' | 'aproximante' | 'vogal' | 'diacrítico';

export interface IpaSymbol {
  symbol: string;
  group: IpaGroup;
  /** Descrição técnica curta: ponto e modo de articulação, vozeamento (ou altura/posição da vogal) */
  name: string;
  /** Como produzir, em linguagem simples */
  how: string;
  examples: [string, string, string][];
}

export const IPA_GROUPS: { id: IpaGroup; title: string; text: string }[] = [
  { id: 'oclusiva', title: 'Oclusivas', text: 'O ar é bloqueado por um instante e solto de uma vez: p, t, k.' },
  { id: 'nasal', title: 'Nasais', text: 'A boca se fecha e o ar sai pelo nariz: m, n.' },
  { id: 'fricativa', title: 'Fricativas', text: 'O ar passa raspando por um canal estreito: f, s, ch.' },
  { id: 'africada', title: 'Africadas', text: 'Uma oclusiva que termina em fricativa, num só som: o “tch” de “tchau”.' },
  { id: 'vibrante', title: 'Vibrantes e tepe', text: 'A ponta da língua bate uma vez (tepe) ou várias (vibrante).' },
  { id: 'lateral', title: 'Laterais', text: 'O ar sai pelos lados da língua: l, lh.' },
  { id: 'aproximante', title: 'Aproximantes e semivogais', text: 'Os órgãos se aproximam sem raspar: o “i” de “pai”, o “u” de “quase”.' },
  { id: 'vogal', title: 'Vogais', text: 'O ar passa livre; o que muda é a altura da língua, se ela vai para a frente ou para trás e se os lábios arredondam.' },
  { id: 'diacrítico', title: 'Diacríticos e sinais', text: 'Sinais que se somam a um símbolo: tônica, nasal, palatalização, duração.' },
];

export const IPA: IpaSymbol[] = [
  // ---------- oclusivas ----------
  { symbol: 'p', group: 'oclusiva', name: 'oclusiva bilabial surda', how: 'Feche os lábios e solte o ar, sem vibrar a garganta.', examples: [['pt-BR', 'pato', 'pato'], ['es-MX', 'padre', 'pai'], ['ro-RO', 'pâine', 'pão'], ['ru-RU', 'па́па', 'papai']] },
  { symbol: 'b', group: 'oclusiva', name: 'oclusiva bilabial sonora', how: 'Como o [p], mas com a garganta vibrando.', examples: [['pt-BR', 'bola', 'bola'], ['es-MX', 'boca', 'boca'], ['ro-RO', 'bun', 'bom'], ['ru-RU', 'брат', 'irmão']] },
  { symbol: 't', group: 'oclusiva', name: 'oclusiva dental/alveolar surda', how: 'A ponta da língua toca atrás dos dentes de cima e se solta. Sem virar “tch”!', examples: [['pt-BR', 'tatu', 'tatu'], ['es-MX', 'tía', 'tia (sem “tch”)'], ['ro-RO', 'tren', 'trem'], ['ru-RU', 'торт', 'bolo']] },
  { symbol: 'd', group: 'oclusiva', name: 'oclusiva dental/alveolar sonora', how: 'Como o [t], com a garganta vibrando.', examples: [['pt-BR', 'dado', 'dado'], ['es-MX', 'dos', 'dois'], ['ro-RO', 'da', 'sim'], ['ru-RU', 'дом', 'casa']] },
  { symbol: 'k', group: 'oclusiva', name: 'oclusiva velar surda', how: 'O fundo da língua toca o céu da boca mole (véu palatino).', examples: [['pt-BR', 'casa', 'casa'], ['es-MX', 'queso', 'queijo'], ['ro-RO', 'cal', 'cavalo'], ['ru-RU', 'кот', 'gato']] },
  { symbol: 'g', group: 'oclusiva', name: 'oclusiva velar sonora', how: 'Como o [k], com a garganta vibrando.', examples: [['pt-BR', 'gato', 'gato'], ['es-MX', 'gato', 'gato'], ['ro-RO', 'gară', 'estação'], ['ru-RU', 'год', 'ano']] },
  // ---------- nasais ----------
  { symbol: 'm', group: 'nasal', name: 'nasal bilabial', how: 'Lábios fechados, o ar sai pelo nariz.', examples: [['pt-BR', 'mão', 'mão'], ['es-MX', 'mano', 'mão'], ['ro-RO', 'mamă', 'mãe'], ['ru-RU', 'мо́ре', 'mar']] },
  { symbol: 'n', group: 'nasal', name: 'nasal alveolar', how: 'A ponta da língua atrás dos dentes, o ar sai pelo nariz.', examples: [['pt-BR', 'navio', 'navio'], ['es-MX', 'no', 'não'], ['ro-RO', 'nu', 'não'], ['ru-RU', 'нос', 'nariz']] },
  { symbol: 'ɲ', group: 'nasal', name: 'nasal palatal', how: 'O meio da língua encosta no céu da boca: o “nh”.', examples: [['pt-BR', 'banho', 'banho'], ['es-MX', 'niño', 'menino']] },
  { symbol: 'ŋ', group: 'nasal', name: 'nasal velar', how: 'O fundo da língua fecha como no [k], mas o ar sai pelo nariz.', examples: [['es-MX', 'banco', 'banco (o n soa [ŋ] antes de c)'], ['en-GB', 'sing', 'cantar']] },
  // ---------- fricativas ----------
  { symbol: 'f', group: 'fricativa', name: 'fricativa labiodental surda', how: 'Dentes de cima no lábio de baixo, o ar raspa.', examples: [['pt-BR', 'faca', 'faca'], ['es-MX', 'fuego', 'fogo'], ['ro-RO', 'fată', 'moça'], ['ru-RU', 'фо́то', 'foto']] },
  { symbol: 'v', group: 'fricativa', name: 'fricativa labiodental sonora', how: 'Como o [f], com a garganta vibrando. (Não existe no espanhol, onde “v” soa [b]/[β].)', examples: [['pt-BR', 'vaca', 'vaca'], ['ro-RO', 'vin', 'vinho'], ['ru-RU', 'вода́', 'água']] },
  { symbol: 'θ', group: 'fricativa', name: 'fricativa dental surda', how: 'A ponta da língua entre os dentes, o ar raspa: o “ce/ci/z” da Espanha.', examples: [['es-ES', 'cielo', 'céu (na Espanha)'], ['en-GB', 'think', 'pensar']] },
  { symbol: 'ð', group: 'fricativa', name: 'fricativa dental sonora', how: 'Como o [θ], vibrando: o “d” suave do espanhol entre vogais.', examples: [['es-MX', 'cada', 'cada'], ['en-GB', 'this', 'isto']] },
  { symbol: 's', group: 'fricativa', name: 'fricativa alveolar surda', how: 'A língua perto dos dentes, o ar sibila.', examples: [['pt-BR', 'sapo', 'sapo'], ['es-MX', 'sol', 'sol'], ['ro-RO', 'sare', 'sal'], ['ru-RU', 'сок', 'suco']] },
  { symbol: 'z', group: 'fricativa', name: 'fricativa alveolar sonora', how: 'Como o [s], vibrando.', examples: [['pt-BR', 'zebra', 'zebra'], ['ro-RO', 'zi', 'dia'], ['ru-RU', 'зима́', 'inverno']] },
  { symbol: 'ʃ', group: 'fricativa', name: 'fricativa pós-alveolar surda', how: 'O “ch” de “chá”: a língua um pouco mais para trás, lábios levemente arredondados.', examples: [['pt-BR', 'chá', 'chá'], ['ro-RO', 'școală', 'escola'], ['es-AR', 'calle', 'rua (em Buenos Aires)']] },
  { symbol: 'ʒ', group: 'fricativa', name: 'fricativa pós-alveolar sonora', how: 'O “j” de “já”.', examples: [['pt-BR', 'já', 'já'], ['ro-RO', 'joc', 'jogo']] },
  { symbol: 'ʂ', group: 'fricativa', name: 'fricativa retroflexa surda', how: 'Um “ch” mais grave, com a língua recuada: o ш do russo.', examples: [['ru-RU', 'шко́ла', 'escola']] },
  { symbol: 'ʐ', group: 'fricativa', name: 'fricativa retroflexa sonora', how: 'Um “j” mais grave: o ж do russo.', examples: [['ru-RU', 'жена́', 'esposa']] },
  { symbol: 'ɕ', group: 'fricativa', name: 'fricativa alvéolo-palatal surda', how: 'Um “ch” suave, com o meio da língua alto: o щ do russo (longo: [ɕː]).', examples: [['ru-RU', 'щи', 'sopa de repolho']] },
  { symbol: 'x', group: 'fricativa', name: 'fricativa velar surda', how: 'O ar raspa no fundo da boca: o “j” espanhol, o х russo.', examples: [['es-MX', 'jamón', 'presunto'], ['ru-RU', 'хлеб', 'pão']] },
  { symbol: 'χ', group: 'fricativa', name: 'fricativa uvular surda', how: 'Raspando ainda mais atrás, na úvula: um “r” carioca de “rato”.', examples: [['pt-BR', 'rato', 'rato (no Rio de Janeiro)']] },
  { symbol: 'h', group: 'fricativa', name: 'fricativa glotal surda', how: 'Só um sopro na garganta.', examples: [['ro-RO', 'haină', 'casaco'], ['en-GB', 'house', 'casa']] },
  { symbol: 'β', group: 'fricativa', name: 'aproximante bilabial sonora', how: 'Um “b” sem fechar os lábios de todo: o b/v do espanhol entre vogais.', examples: [['es-MX', 'lobo', 'lobo']] },
  { symbol: 'ɣ', group: 'fricativa', name: 'aproximante velar sonora', how: 'Um “g” sem fechar: o g do espanhol entre vogais.', examples: [['es-MX', 'lago', 'lago']] },
  // ---------- africadas ----------
  { symbol: 't͡ʃ', group: 'africada', name: 'africada pós-alveolar surda', how: 'O “tch” de “tchau”.', examples: [['pt-BR', 'tia', 'tia (no Brasil, t vira [t͡ʃ] antes de i)'], ['es-MX', 'chico', 'menino'], ['ro-RO', 'cer', 'céu']] },
  { symbol: 'd͡ʒ', group: 'africada', name: 'africada pós-alveolar sonora', how: 'O “dj” de “dia” no Brasil.', examples: [['pt-BR', 'dia', 'dia'], ['ro-RO', 'ger', 'geada'], ['en-GB', 'jam', 'geleia']] },
  { symbol: 't͡s', group: 'africada', name: 'africada alveolar surda', how: 'Um “ts” num só som.', examples: [['ro-RO', 'țară', 'país'], ['ru-RU', 'центр', 'centro']] },
  { symbol: 't͡ɕ', group: 'africada', name: 'africada alvéolo-palatal surda', how: 'Um “tch” suave, com o meio da língua alto: o ч do russo.', examples: [['ru-RU', 'час', 'hora']] },
  // ---------- vibrantes ----------
  { symbol: 'ɾ', group: 'vibrante', name: 'tepe alveolar', how: 'A ponta da língua bate UMA vez: o “r” de “caro”.', examples: [['pt-BR', 'caro', 'caro'], ['es-MX', 'pero', 'mas'], ['ro-RO', 'mare', 'mar']] },
  { symbol: 'r', group: 'vibrante', name: 'vibrante alveolar múltipla', how: 'A ponta da língua vibra várias vezes: o “rr” espanhol.', examples: [['es-MX', 'perro', 'cachorro'], ['ro-RO', 'rău', 'mau'], ['ru-RU', 'ры́ба', 'peixe']] },
  // ---------- laterais ----------
  { symbol: 'l', group: 'lateral', name: 'lateral alveolar', how: 'A ponta da língua nos dentes, o ar sai pelos lados.', examples: [['pt-BR', 'lua', 'lua'], ['es-MX', 'luna', 'lua'], ['ro-RO', 'lună', 'lua'], ['ru-RU', 'ла́мпа', 'luminária']] },
  { symbol: 'ʎ', group: 'lateral', name: 'lateral palatal', how: 'O meio da língua no céu da boca: o “lh”.', examples: [['pt-BR', 'filho', 'filho']] },
  { symbol: 'ɫ', group: 'lateral', name: 'lateral velarizada', how: 'Um “l” com o fundo da língua levantado, “escuro”: o л duro do russo e o l final do português de Portugal.', examples: [['ru-RU', 'стол', 'mesa'], ['en-GB', 'ball', 'bola']] },
  // ---------- aproximantes ----------
  { symbol: 'j', group: 'aproximante', name: 'aproximante palatal (semivogal)', how: 'Um “i” rápido que não forma sílaba: o de “pai”. Atenção: NÃO é o “j” do português!', examples: [['pt-BR', 'pai', 'pai'], ['es-MX', 'tiene', 'tem'], ['ro-RO', 'iepure', 'coelho'], ['ru-RU', 'я́блоко', 'maçã']] },
  { symbol: 'w', group: 'aproximante', name: 'aproximante labiovelar (semivogal)', how: 'Um “u” rápido que não forma sílaba: o de “quase”.', examples: [['pt-BR', 'quase', 'quase'], ['es-MX', 'bueno', 'bom'], ['en-GB', 'water', 'água']] },
  { symbol: 'ʝ', group: 'aproximante', name: 'fricativa/aproximante palatal sonora', how: 'Um “i” forte, quase “dj”: o y/ll do espanhol.', examples: [['es-MX', 'yo', 'eu'], ['es-MX', 'calle', 'rua']] },
  // ---------- vogais ----------
  { symbol: 'i', group: 'vogal', name: 'vogal fechada anterior não arredondada', how: 'Língua alta e para a frente, lábios esticados.', examples: [['pt-BR', 'vida', 'vida'], ['es-MX', 'sí', 'sim'], ['ru-RU', 'и́мя', 'nome']] },
  { symbol: 'e', group: 'vogal', name: 'vogal meio-fechada anterior', how: 'O “ê” de “você”.', examples: [['pt-BR', 'você', 'você'], ['es-MX', 'mesa', 'mesa'], ['ro-RO', 'des', 'frequente']] },
  { symbol: 'ɛ', group: 'vogal', name: 'vogal meio-aberta anterior', how: 'O “é” de “café”.', examples: [['pt-BR', 'café', 'café'], ['en-GB', 'bed', 'cama']] },
  { symbol: 'a', group: 'vogal', name: 'vogal aberta', how: 'Boca bem aberta, língua baixa.', examples: [['pt-BR', 'pá', 'pá'], ['es-MX', 'casa', 'casa'], ['ro-RO', 'apă', 'água'], ['ru-RU', 'ма́ма', 'mamãe']] },
  { symbol: 'ɔ', group: 'vogal', name: 'vogal meio-aberta posterior arredondada', how: 'O “ó” de “avó”.', examples: [['pt-BR', 'avó', 'avó'], ['en-GB', 'thought', 'pensamento']] },
  { symbol: 'o', group: 'vogal', name: 'vogal meio-fechada posterior arredondada', how: 'O “ô” de “avô”.', examples: [['pt-BR', 'avô', 'avô'], ['es-MX', 'todo', 'tudo'], ['ru-RU', 'дом', 'casa']] },
  { symbol: 'u', group: 'vogal', name: 'vogal fechada posterior arredondada', how: 'Língua alta e para trás, lábios em bico.', examples: [['pt-BR', 'uva', 'uva'], ['es-MX', 'luna', 'lua'], ['ro-RO', 'lup', 'lobo'], ['ru-RU', 'суп', 'sopa']] },
  { symbol: 'ə', group: 'vogal', name: 'vogal média central (schwa)', how: 'A vogal mais “relaxada” de todas, no meio da boca: o ă romeno.', examples: [['ro-RO', 'casă', 'casa'], ['ru-RU', 'молоко́', 'leite (o 1º o)'], ['en-GB', 'about', 'sobre']] },
  { symbol: 'ɐ', group: 'vogal', name: 'vogal quase aberta central', how: 'Um “a” fechado e fraco: o “a” átono do fim de “casa”, e o о russo antes da tônica.', examples: [['pt-BR', 'cama', 'cama (o 2º a)'], ['ru-RU', 'вода́', 'água (o о)']] },
  { symbol: 'ɨ', group: 'vogal', name: 'vogal fechada central não arredondada', how: 'Um “i” com a língua recuada: o â/î romeno e o ы russo.', examples: [['ro-RO', 'pâine', 'pão'], ['ru-RU', 'сыр', 'queijo']] },
  { symbol: 'ɪ', group: 'vogal', name: 'vogal quase fechada anterior', how: 'Um “i” mais frouxo: o е/я átono russo.', examples: [['ru-RU', 'язы́к', 'língua (o я)'], ['en-GB', 'sit', 'sentar']] },
  { symbol: 'ʊ', group: 'vogal', name: 'vogal quase fechada posterior', how: 'Um “u” mais frouxo, átono.', examples: [['ru-RU', 'учи́ться', 'estudar (o у)'], ['en-GB', 'book', 'livro']] },
  // ---------- diacríticos ----------
  { symbol: 'ˈ', group: 'diacrítico', name: 'acento tônico primário', how: 'Vem ANTES da sílaba tônica: [ˈkaza] = “CA-sa”.', examples: [['pt-BR', 'sábia', 'sábia [ˈsabjɐ]'], ['pt-BR', 'sabiá', 'sabiá [sabiˈa]']] },
  { symbol: '◌̃', group: 'diacrítico', name: 'nasalização', how: 'O til sobre a vogal: o ar sai também pelo nariz. Traço marcante do português.', examples: [['pt-BR', 'mãe', 'mãe [mɐ̃j̃]'], ['pt-BR', 'pão', 'pão [pɐ̃w̃]']] },
  { symbol: 'ʲ', group: 'diacrítico', name: 'palatalização', how: 'A consoante “amolece”, com o meio da língua levantado, como se viesse um “i”: fundamental no russo.', examples: [['ru-RU', 'мать', 'mãe [matʲ]'], ['ro-RO', 'lupi', 'lobos [lupʲ]']] },
  { symbol: 'ː', group: 'diacrítico', name: 'duração (som longo)', how: 'O som dura mais.', examples: [['ru-RU', 'щи', 'sopa [ɕːi]']] },
  { symbol: '◌̯', group: 'diacrítico', name: 'não silábico', how: 'A vogal não forma sílaba sozinha (semivogal): [ai̯].', examples: [['es-MX', 'aire', 'ar [ˈai̯ɾe]'], ['ro-RO', 'seară', 'noite [ˈse̯arə]']] },
  { symbol: '[ ] × / /', group: 'diacrítico', name: 'colchetes e barras', how: 'Entre [colchetes] vai a pronúncia real (fonética); entre /barras/, os fonemas do sistema (fonologia). “tia” é /ˈtia/, dita [ˈt͡ʃiɐ] no Brasil.', examples: [['pt-BR', 'tia', 'tia']] },
];
