import type { LanguagePack } from '../types';
import { VOCAB_TUO } from './vocabulario';
import { UNITS_TUO } from './curriculo';
import { GRAMMAR_TUO } from './gramatica';
import { STORIES_TUO } from './historias';
import { COMMUNITY_TUO, ETYMOLOGY_TUO, JOURNAL_PROMPTS_TUO, SCENARIOS_TUO, SHADOWING_TUO } from './extras';

export const TUKANO: LanguagePack = {
  code: 'tuo',
  name: 'Tukano',
  // “Ye'pâ-masa” (lit. “gente da nossa terra”) é a autodesignação do povo e da língua, confirmada em
  // pt.wikipedia.org/wiki/Língua_tucano e em pib.socioambiental.org/pt/Povo:Tukano (ISA). Os próprios
  // falantes também se chamam “Dásea”/“Dahseyé” (tucano, a ave) — é dessa segunda autodesignação que
  // vem o nome “tukano”/“tucano” usado em português (ver a etimologia de “Dásea” em extras.ts). NÃO
  // confundir com o nheengatu (código `yrl`, outra língua, de outra família, de outro processo).
  nativeName: "Ye'pâ-masa",
  // território: Alto Rio Negro, noroeste do Amazonas — emoji de bandeira do Brasil, na falta de um
  // símbolo próprio da língua (também falada na Colômbia).
  flag: '🇧🇷',
  lineage: {
    family: 'Tukano (Tukanoana)',
    branches: ['Tukano Oriental', 'Ramo Leste', 'Subdivisão Central (tukano propriamente dito)'],
    region:
      'Alto Rio Negro e bacia do rio Uaupés (e afluentes como o Tiquié e o Papuri), noroeste do Amazonas — especialmente em torno de São Gabriel da Cachoeira e Iauaretê —, com falantes também na Colômbia; cooficial em São Gabriel da Cachoeira (AM) desde 2002 (Lei Municipal 145), ao lado do português, do nheengatu e do baniwa, e língua franca histórica do complexo multilíngue do Alto Rio Negro, organizado pela exogamia linguística (cada pessoa fala a língua do pai e se casa fora do seu grupo).',
    writing:
      'Alfabeto latino adaptado por missionários e linguistas (ortografia usada pelo SIL International e por B. West & B. Welsch, “Gramática Pedagógica del Tucano”, 2004): til (~) marca nasalização, acento agudo (´) marca tom ascendente, circunflexo (^) marca tom alto (a ausência de acento indica tom baixo), e apóstrofo (’) marca a oclusiva glotal — o tukano é uma língua tonal, com três tons fonológicos.',
  },
  // Nenhum serviço de síntese de voz consultado tem voz para o tukano — os áudios usam a voz do
  // aparelho, se houver (igual ao nheengatu e a outras línguas indígenas deste app).
  speechLocale: 'tuo',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 26 palavras, 4 tópicos de gramática, 2 histórias), no tukano falado hoje no Alto Rio Negro (AM) — língua franca viva da família Tukano (Tukanoana), SEM relação com o tupi-guarani, o guarani ou o jê, e diferente do nheengatu, que é cooficial na mesma região mas pertence a outra família (tupi-guarani). O vocabulário aqui é bem menor que o dos outros pacotes de propósito: cada palavra foi conferida numa fonte específica sobre o tukano (a Wikipédia em português e em inglês, o Wiktionary citando a gramática pedagógica de West & Welsch, 2004, e o Instituto Socioambiental), e preferimos um pacote pequeno e 100% verificado a completar uma cota maior com palavras não confirmadas. Por isso faltam, por exemplo, números além de “dois” e “três”, nomes de animais, cores e uma palavra para “obrigado” — nenhuma fonte consultada registrou um agradecimento fixo em tukano. Da A2.1 até o C2 chega nas próximas atualizações, se mais fontes confiáveis forem encontradas.',
  },
  vocab: VOCAB_TUO,
  units: UNITS_TUO,
  etymology: ETYMOLOGY_TUO,
  community: COMMUNITY_TUO,
  scenarios: SCENARIOS_TUO,
  stories: STORIES_TUO,
  grammar: GRAMMAR_TUO,
  journalPrompts: JOURNAL_PROMPTS_TUO,
  shadowing: SHADOWING_TUO,
  specialChars: ['ɨ', 'ɨ̃', 'â', 'ã', 'î', 'ô', 'ũ', "'"],
  // o tukano não marca gênero gramatical nos substantivos comuns (não há artigos “o/a”); a distinção
  // real que a língua tem — feminino/não-feminino — só aparece na 3ª pessoa de seres animados
  // (pronomes e sufixos verbais), explicada em gramatica.ts, não no sistema de gênero dos substantivos
  genders: [],
  greeting: 'Anuáto!',
  sampleSentence: "Anuáto! Yɨ'ɨ ye'pâ-masɨ nii-'.",
  phrases: {
    hi: 'Anuáto!',
    // Nenhuma das fontes consultadas (Wikipédia em português e em inglês, Wiktionary, Instituto
    // Socioambiental) registra uma palavra tukano para “obrigado”/agradecer — ver a nota em
    // vocabulario.ts e o relatório da entrega. Em vez de inventar uma, usamos aqui “Aɨ!”, a interjeição
    // de concordância/aprovação atestada (“tá bom!”, “combinado!”): não é uma tradução literal de
    // “obrigado”, só a expressão positiva mais próxima que encontramos com fonte — fica sinalizado
    // para quem revisar este pacote depois, caso apareça uma fonte melhor.
    thanks: 'Aɨ!',
    // “te'á!” (vamos!) é a interjeição de convite documentada para o tukano.
    letsStart: ["Te'á!", 'Vamos!'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome ou marcador “formal” separado no tukano: o mesmo jeito de falar (e os mesmos pronomes, como “mɨ\'ɨ”, tu/você) serve para qualquer pessoa, sem a distinção que o português marca com “você”/“o senhor”.',
  cognateNote:
    "O tukano não é parente do português, nem do tupi-guarani (como o guarani paraguaio ou o nheengatu, cooficial na mesma região mas de outra família): é uma língua da família Tukano (Tukanoana), de uma linhagem totalmente diferente. O que aproxima o tukano do português, nesta região, não é parentesco de origem, mas convivência: o Alto Rio Negro é organizado pela exogamia linguística — cada pessoa nasce falando a língua do pai e se casa com alguém de fora do seu grupo, idealmente falante de outra língua — e por isso quase todo morador da região fala várias línguas indígenas diferentes, além do português. Nesse cenário multilíngue, o tukano funciona como língua franca entre povos de línguas maternas diferentes, um papel parecido com o do nheengatu na mesma região, mas por um caminho histórico totalmente distinto: o nheengatu nasceu do contato colonial com o português; o tukano é uma das línguas nativas do Alto Rio Negro que já existia antes disso, e que seguiu sendo falada ao lado do português, não a partir dele.",
};
