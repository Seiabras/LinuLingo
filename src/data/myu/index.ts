import type { LanguagePack } from '../types';
import { VOCAB_MYU } from './vocabulario';
import { UNITS_MYU } from './curriculo';
import { GRAMMAR_MYU } from './gramatica';
import { STORIES_MYU } from './historias';
import { COMMUNITY_MYU, ETYMOLOGY_MYU, JOURNAL_PROMPTS_MYU, SCENARIOS_MYU, SHADOWING_MYU } from './extras';

export const MUNDURUKU: LanguagePack = {
  code: 'myu',
  name: 'Mundurukú',
  // autodenominação do povo: wuyjuyũ, “gente” (Gomes 2006, §0.1; o ISA escreve “Wuy jugu”), mas não
  // há atestação de um nome da LÍNGUA formado a partir dela. As cartilhas SIL/Museu Nacional de
  // 1965-66 se chamam “Mõnjoroko ã’õ” (citadas por Picanço 2012, pp. 39 e 46), só que “Mõnjoroko” é
  // apenas a palavra “Mundurukú” dita na pronúncia da língua — e “Mundurukú” é um nome dado de fora:
  // Gomes 2006, §0.1, nota 1 (pp. 1-2), registra numa narrativa “Mõnjoroko bit bo=ku oce=nopag̃o-yũ
  // ma o'e'e”, “Mundurukú é apelido dado pelos tradicionais inimigos” (o ISA diz o mesmo: seria o
  // nome que os Parintintin lhes davam). Escolha: como nome nativo vai a opção mais neutra entre as
  // documentadas, “Munduruku” — o nome que se usa hoje para o povo, a Terra Indígena e as
  // organizações (ISA, pib.socioambiental.org/pt/Povo:Munduruku), sem o acento da grafia
  // linguística do campo “name”. “Mõnjoroko” daria a impressão de um nome próprio da língua, que não
  // é. A nota do pacote (incomplete.note) explica isso ao aluno em uma frase.
  nativeName: 'Munduruku',
  // Terra Indígena Munduruku (PA) e vizinhas — bandeira do Brasil, na falta de um símbolo da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/mund1330): Tupi > East Tupi > Mundurukú (o nó
    // mund1329, com o kuruáya). Picanço 2012, §1.2 e Gomes 2006, §0.2: a família Mundurukú é uma das
    // dez do tronco Tupi e tem só duas línguas, o mundurukú e o kuruáya, este sem falantes desde
    // 2006-2008. Não é tupi-guarani. O primeiro ramo é o mesmo do sateré-mawé (“Tupi oriental”),
    // para os dois ficarem juntos no seletor.
    branches: ['Tupi oriental', 'Mundurukú (família própria, com o kuruáya, já sem falantes)'],
    region:
      'Vale do rio Tapajós e de seus afluentes (Cururu, Kabitutu, Tropas, São Manoel), no Pará, sobretudo na Terra Indígena Munduruku (Jacareacanga) e na aldeia Sai Cinza; também na bacia do rio Madeira, no Amazonas (TI Kwatá-Laranjal, onde restam poucos falantes idosos), e no norte de Mato Grosso (Juara)',
    writing:
      'Alfabeto latino de 22 letras, na ortografia de Marjorie Crofts, a mais usada pelos Munduruku e a adotada pelos professores indígenas (Picanço, 2012): “u” para a vogal /ə/; “x” = /ʃ/, “c” = /tʃ/, “j” = /dʒ/; “g̃” para a nasal /ŋ/; apóstrofo (’) para a oclusiva glotal /ʔ/; “y” e “w” para as semivogais; til nas vogais nasais (ã, ẽ, ĩ, õ, ũ). Os dois tons (alto e baixo) e as vogais laringalizadas existem na fala, mas não se escrevem.',
  },
  // como nos outros idiomas indígenas sem voz sintética deste app: nenhum serviço de síntese de voz
  // consultado tem voz para o mundurukú, e os áudios usam a voz do aparelho, se houver.
  speechLocale: 'myu',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com cerca de 80 palavras, 4 tópicos de gramática e 2 histórias), no mundurukú (myu), a língua do povo Munduruku — os wuyjuyũ, cerca de 18 mil pessoas, a maioria no vale do rio Tapajós, no Pará, onde a língua é a primeira das crianças. O próprio nome “Munduruku” (na língua, “Mõnjoroko”) veio de fora, como apelido dado por antigos inimigos — por isso não há um nome “nativo” da língua; usamos o nome com que o povo é conhecido hoje. É do tronco Tupi, mas não do tupi-guarani: forma uma família própria. A variedade ensinada é a do Pará (alto Tapajós e rio Cururu); no Amazonas, onde hoje restam poucos falantes, o “d” se pronuncia como “r”. A grafia segue a ortografia de Marjorie Crofts, adotada pelos professores munduruku, e as palavras e a gramática seguem o estudo de Gessiane Lobato Picanço (2012), feito para a formação de professores munduruku, a tese de Dioney Moreira Gomes (UnB, 2006) e a gramática de Marjorie Crofts. O mundurukú é uma língua tonal, mas a escrita não marca o tom nem as vogais “rangidas”: o ideal é ouvir falantes de verdade. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_MYU,
  units: UNITS_MYU,
  etymology: ETYMOLOGY_MYU,
  community: COMMUNITY_MYU,
  scenarios: SCENARIOS_MYU,
  stories: STORIES_MYU,
  grammar: GRAMMAR_MYU,
  journalPrompts: JOURNAL_PROMPTS_MYU,
  shadowing: SHADOWING_MYU,
  // apóstrofo (oclusiva glotal), g̃ (nasal velar, g + til combinante, a mesma forma do Novo
  // Testamento e de Picanço 2012) e as vogais nasais que não estão todas no teclado português.
  specialChars: ["'", 'g̃', 'ũ', 'ẽ', 'ĩ', 'õ', 'ã'],
  // Sem gênero gramatical: homem/mulher são palavras diferentes (ag̃okatkat/ayacat) e não há sequer
  // pronome de 3ª pessoa (Gomes 2006, tabela 4.1, nota 2).
  genders: [],
  greeting: 'Wuykabia!',
  sampleSentence: 'Wuykabia! Õn cuk oajẽm.',
  phrases: {
    hi: 'Wuykabia!',
    // As fontes consultadas não registram uma palavra para “obrigado”; no lugar dela, o Linu
    // comemora com “Xipat!” (bom!, está bom — Picanço 2012; Crofts 1973, item 272).
    thanks: 'Xipat!',
    // “Ha'a” é a partícula permissiva das despedidas (Crofts 1973, §1.1.3: “Siga, então!”, “Faça,
    // então!”), usada aqui como “pode começar”.
    letsStart: ["Ha'a!", 'Então vá! (usado aqui como “pode começar”)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há um pronome ou tratamento “formal” separado no mundurukú: “ẽn” (tu, você) serve para qualquer pessoa. A cortesia vem de partículas, como “juy”/“cuy”, que transformam uma ordem num pedido educado — como em outras línguas indígenas deste app (sateré-mawé, karitiana, kaingang).',
  cognateNote:
    'O mundurukú não é parente do português: é do tronco Tupi, numa família própria (com o kuruáya, que já não tem falantes) — por isso é um “primo” distante do sateré-mawé, do guarani, do tupi antigo e do nheengatu, mas não pertence ao tupi-guarani. Do português vieram empréstimos como “kape” (café), “basia’a” (bacia) e “rapi’ip” (lápis), adaptados aos sons da língua, e para números grandes usam-se os do português. Três traços marcam a gramática: há dois “nós” (wuyju, com você; oceju, sem você), o dono vem grudado no nome (oxi, minha mãe; exi, tua mãe) e o tom alto ou baixo pode mudar o sentido de palavras escritas do mesmo jeito.',
};
