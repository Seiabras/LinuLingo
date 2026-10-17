import type { LanguagePack } from '../types';
import { VOCAB_KGP } from './vocabulario';
import { UNITS_KGP } from './curriculo';
import { GRAMMAR_KGP } from './gramatica';
import { STORIES_KGP } from './historias';
import { COMMUNITY_KGP, ETYMOLOGY_KGP, JOURNAL_PROMPTS_KGP, SCENARIOS_KGP, SHADOWING_KGP } from './extras';
import { ACCENTS_KGP } from './sotaques';
import { FONTES_KGP, METODOS_KGP } from './fontes';

export const KAINGANG: LanguagePack = {
  code: 'kgp',
  name: 'Kaingang',
  // "Kanhgág" ("pessoa, gente") é a autodesignação do povo e da língua, confirmada na Wikipédia em
  // português e em inglês sobre a língua kaingang e no Wiktionary (entrada "kanhgág").
  nativeName: 'Kanhgág',
  // não há um símbolo próprio da língua: bandeira do Brasil, o país onde o povo kaingang vive hoje,
  // como já se faz para o tupi antigo (tpw) neste app.
  flag: '🇧🇷',
  lineage: {
    family: 'Macro-Jê',
    branches: ['Jê', 'Jê Meridional (Jê do Sul, junto com o xokleng)'],
    region: 'Sul e sudeste do Brasil: Rio Grande do Sul, Santa Catarina, Paraná e São Paulo, em mais de 30 terras indígenas (como Xapecó, em SC, e Nonoai, no RS)',
    writing: 'Alfabeto latino, ortografia de Ursula Wiesemann (28 grafemas, com vogais centrais e cinco vogais nasais)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o kaingang: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do tupi antigo e do guarani neste app).
  speechLocale: 'kgp',
  available: true,
  // Curso completo até o teto (B1, em tetos, desde 17/10/2026): os testes de teto leem “incomplete.until
  // igual ao último subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2. A
  // nota diz ao aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'B1.4',
    note:
      'A1.1 até B1.4 completo: oito unidades, 230 palavras, 15 tópicos de gramática e 8 histórias, na ortografia de Ursula Wiesemann. O A1 vem do dicionário de Wiesemann (pelo Wiktionary), da Wikipédia e do ISA; as frases do A1 que eram montadas pelo curso foram trocadas, sempre que possível, por frases reais das pesquisas. Do A2 em diante, tudo vem de pesquisas de acesso aberto da Universidade Estadual de Londrina, feitas com falantes da Terra Indígena Apucaraninha (PR): a gramática das frases complexas de Luciana Tabosa (2006 e 2014), as narrativas que Isabella Ferro gravou (2021), os estudos de Lima, Zilli, Oliveira e Souza, e as conversas de falantes do Paraná publicadas por Felisbino e Silveira (2022). A história do B1.4 usa o livro “Vãnh kãmĩ grugru” (Brilhos na floresta), traduzido para o kaingang por Damaris Kanĩnsãnh Felisbino, só pelas frases que as pesquisas citam com tradução, juntadas pelo curso numa conversa (a ordem das falas não é a do livro). Do A2 ao B1, nenhuma frase foi criada pelo curso. Por isso o kaingang do curso é o do Paraná; as diferenças de outros lugares (o “eu” que vira “ijóg” ou “só”, o “ra” de Wiesemann que hoje se diz “rỹ”) vêm indicadas. O dicionário de Wiesemann é pago e não foi consultado direto, só pelas citações. Não há, nas fontes, um “obrigado” próprio: o curso usa “mrir” (feliz). Nenhum serviço de voz tem voz para o kaingang: os áudios usam a voz do aparelho, se houver.',
  },
  vocab: VOCAB_KGP,
  units: UNITS_KGP,
  etymology: ETYMOLOGY_KGP,
  community: COMMUNITY_KGP,
  scenarios: SCENARIOS_KGP,
  stories: STORIES_KGP,
  accents: ACCENTS_KGP,
  grammar: GRAMMAR_KGP,
  journalPrompts: JOURNAL_PROMPTS_KGP,
  shadowing: SHADOWING_KGP,
  fontes: FONTES_KGP,
  metodos: METODOS_KGP,
  // á (vogal central /ə/) e y (vogal central /ɨ/) não existem no português; as cinco nasais
  // (ã, ẽ, ĩ, ũ, ỹ) e o apóstrofo (oclusiva glotal) completam o teclado adaptado.
  specialChars: ['á', 'y', 'ã', 'ẽ', 'ĩ', 'ũ', 'ỹ', "'"],
  // o kaingang não marca gênero gramatical em substantivo nem em adjetivo: a única distinção de
  // gênero é nos pronomes de 3ª pessoa (ti/fi, ag/fag), explicada na gramática desta unidade.
  genders: [],
  // Felisbino e Silveira, Signum 25(3), 2022, p. 56: a conversa abre perguntando se a pessoa está bem.
  greeting: 'Ã mỹ há?',
  sampleSentence: "Ã mỹ há? — Hỹ'ỹ, há inh jẽ.",
  phrases: {
    hi: 'Ã mỹ há?',
    // não há, nas fontes consultadas, uma interjeição kaingang equivalente a "obrigado": usamos o
    // adjetivo real "mrir" (feliz, contente) como expressão de apreço, do mesmo jeito que o curso de
    // tupi antigo usa "katu" (bom) onde a língua não lexicalizou um "obrigado" separado.
    thanks: 'Mrir!',
    // Lima, dissertação UEL, 2023, p. 73 (“Mũ jé!” ‘Vamos!’, de “Brilhos na floresta”, Apucaraninha)
    letsStart: ['Mũ jé!', 'Vamos!'],
  },
  formalMarkers:
    // Lima, dissertação UEL, 2023, p. 76 (nĩ mais polido que ra/rỹ); Zilli, dissertação UEL, 2024,
    // p. 60 e 65 (vó suave, nejé rude, segundo Wiesemann 2011)
    'O kaingang não tem um “você” formal separado: o pronome “ã” serve para qualquer pessoa. A educação aparece em outras escolhas. Num pedido, a marca “nĩ” (“faça quando puder”) soa mais gentil que “rỹ” (“faça agora”), segundo Lima (2023). E, para dizer não, “vó” é suave, enquanto “nejé” é rude, segundo Wiesemann, citada por Zilli (2024).',
  cognateNote:
    'O kaingang não é parente do português: é uma língua jê, do tronco Macro-Jê, nativa do Brasil — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente da tupi-guarani (a do tupi antigo e do guarani já no app). Não há nenhum ancestral comum, então não existem cognatos “de berço” entre kaingang e português. O que existe é o caminho mais raro mostrado na aba de etimologia deste curso: palavras que o kaingang tomou emprestadas do português depois do contato, como “kasor” (cachorro), “kãvãru” (cavalo), “aronh” (arroz) e “vĩjũ” (vinho) — a direção contrária da que costuma aparecer nas outras línguas indígenas do app, onde é a palavra indígena que entrou no português (como “jaguar”, do tupi antigo “îagûara”).',
};
