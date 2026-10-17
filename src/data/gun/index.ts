import type { LanguagePack } from '../types';
import { VOCAB_GUN } from './vocabulario';
import { UNITS_GUN } from './curriculo';
import { GRAMMAR_GUN } from './gramatica';
import { STORIES_GUN } from './historias';
import { COMMUNITY_GUN, ETYMOLOGY_GUN, JOURNAL_PROMPTS_GUN, SCENARIOS_GUN, SHADOWING_GUN } from './extras';
import { ACCENTS_GUN } from './sotaques';
import { FONTES_GUN, METODOS_GUN } from './fontes';

export const GUARANI_MBYA: LanguagePack = {
  code: 'gun',
  name: 'Guarani Mbyá',
  // "Nhandeayvu" (nhande, nosso, + ayvu, fala/língua) e "ayvu" (fala) são os nomes nativos
  // registrados na Wikipédia em inglês («Mbyá Guaraní language») e no Wiktionary em inglês, que lista
  // "nhandeayvu" como termo derivado de "ayvu" com o sentido literal de "nossa língua".
  nativeName: 'Nhandeayvu',
  // território: litoral e sul do Brasil — bandeira do Brasil, na falta de um símbolo próprio da
  // língua (o povo mbyá também vive na Argentina e no Paraguai, mas a maior parte do pacote foi
  // documentada a partir de fontes e aldeias brasileiras).
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani (subgrupo I)'],
    region:
      'Tekoa (aldeias) espalhadas pelo litoral e sul do Brasil — Espírito Santo, Rio de Janeiro, São Paulo, Paraná, Santa Catarina e Rio Grande do Sul —, além das províncias de Misiones e Corrientes, na Argentina, e do Paraguai oriental; sem um território contínuo, organizado como uma rede de aldeias geralmente pequenas (20 a 200 pessoas)',
    writing:
      'Alfabeto latino, na ortografia usada por linguistas como Robert A. Dooley (SIL Brasil): vogais nasais com til (ã ẽ ĩ õ ũ), apóstrofo para o puso (oclusiva glotal), “x” para um som parecido com “ch”/“sh”, “y” para uma vogal própria do guarani e “nh” para o som de “ninho”; ao contrário do guarani paraguaio, não existe uma academia que normatize uma grafia oficial única',
  },
  // nenhum serviço de síntese de voz consultado (Wiktionary, Wikipédia) tem voz para o guarani mbyá:
  // os áudios usam a voz do aparelho, se houver.
  speechLocale: 'gun',
  available: true,
  // Curso completo até o teto (B1, em tetos, desde 17/10/2026): os testes de teto leem “incomplete.until igual ao
  // último subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2.
  incomplete: {
    until: 'B1.4',
    note:
      'A1.1 até B1.4 completo: oito unidades, 179 palavras, 16 tópicos de gramática e 8 histórias. O mbyá é uma língua indígena viva da família tupi-guarani, falada em tekoa (aldeias) do litoral e do sul do Brasil, da Argentina e do Paraguai, e reconhecida em 2014 pelo IPHAN como referência cultural brasileira. NÃO é o guarani paraguaio (pacote “gn”) nem o kaiowá (“kgk”): são primos próximos, mas cada palavra daqui foi conferida numa fonte do mbyá. O A1 vem do Wikcionário (que cita o léxico de Robert A. Dooley), do TCC de Darci da Silva — Karai Nhe\'ery, professor mbyá da aldeia Piraí (UFSC, 2020), e de uma pesquisa sobre a contagem nas aldeias Itaty e M\'Biguaçu (REVEMAT, 2018). Do A2 ao B1 — o verbo com os prefixos de pessoa, os donos (xeru, meu pai), a negação, o futuro, as perguntas, as orações ligadas com vy e ramo, o “quem” com va\'e, os prefixos de fazer fazer (mbo-), de si mesmo (je-) e de uns aos outros (jo-), a fala citada e as palavrinhas que dizem de onde vem a notícia (je, ra\'e, raka\'e) — tudo vem do “Léxico Guarani, dialeto Mbyá” de Dooley (SIL, 2006), com a grafia dele e as frases de exemplo dos verbetes, e da tese de Marci Fileti Martins (Unicamp, 2003). Nenhuma frase foi montada. Uns poucos exemplos do B1 vêm de outras fontes, sempre com o nome: trechos curtos e narrativos do Novo Testamento mbyá (2004), na mesma grafia, e contos e cantos infantis do “Ayvu Rapyta” de León Cadogan (1959), do mbyá do Guairá, no Paraguai, com a grafia convertida; os textos sagrados desse livro ficaram de fora. As notas de cultura vêm do ISA (Povos Indígenas no Brasil), do Centro de Trabalho Indigenista e de TCCs de professores mbyá na UFSC. Nenhum serviço de síntese de voz tem voz para o guarani mbyá: os áudios usam a voz do aparelho, se houver.',
  },
  vocab: VOCAB_GUN,
  units: UNITS_GUN,
  etymology: ETYMOLOGY_GUN,
  community: COMMUNITY_GUN,
  scenarios: SCENARIOS_GUN,
  stories: STORIES_GUN,
  accents: ACCENTS_GUN,
  grammar: GRAMMAR_GUN,
  journalPrompts: JOURNAL_PROMPTS_GUN,
  shadowing: SHADOWING_GUN,
  fontes: FONTES_GUN,
  metodos: METODOS_GUN,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', '\''],
  // como as outras línguas tupi-guarani deste app, o guarani mbyá não marca gênero gramatical nos
  // substantivos
  genders: [],
  greeting: 'Aguyjevete!',
  sampleSentence: 'Aguyjevete! Xee Linu. Nhandeayvu porã!',
  phrases: {
    hi: 'Aguyjevete!',
    // "aguyjevete" e "ha'evete" são as duas formas de agradecimento/saudação confirmadas no TCC de
    // Karai Nhe'ery: a primeira, sagrada e solene (usada também como saudação de boas-vindas, de mãos
    // erguidas); a segunda, do dia a dia — ver o relatório da entrega.
    thanks: 'Ha\'evete!',
    letsStart: ['Nhandeayvu!', 'Nossa língua! Vamos conhecer o guarani mbyá.'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome formal separado no guarani mbyá, equivalente ao “usted” do espanhol ou ao “o senhor” do português: os pronomes “xee”/“ndee” servem para qualquer pessoa. A diferença de registro aparece em outro lugar: “aguyjevete” é a palavra sagrada, usada para saudar solenemente (de mãos erguidas) e para agradecer a Nhanderu na opy\'i (casa de reza), enquanto “ha\'evete” é o agradecimento comum do dia a dia, por um gesto qualquer de alguém.',
  cognateNote:
    'O guarani mbyá é parente próximo do guarani paraguaio (pacote “gn” deste app): os dois pertencem ao mesmo subgrupo I da família tupi-guarani e têm cerca de 75% de semelhança no vocabulário, segundo a Wikipédia. Ainda assim, são línguas distintas, não duas variantes da mesma língua: o guarani paraguaio tem uma academia oficial (criada em 2013) que normatiza sua gramática e ortografia desde o Paraguai colonial e suas reduções jesuíticas, enquanto o mbyá nunca teve essa tradição de padronização — foi documentado sobretudo a partir do fim do século XX, por linguistas como Robert A. Dooley, e por professores indígenas em escolas bilíngues nas próprias tekoa. Isso aparece em detalhes concretos: onde o guarani paraguaio diz “mba\'éichapa” para cumprimentar, o mbyá usa “aguyjevete”; onde o paraguaio tem “ha” (e) separado do pronome “ha\'e” (ele, ela), no mbyá a mesma palavra “ha\'e” funciona como as duas coisas. Com o português, o parentesco do mbyá é indireto, pela família tupi-guarani: raízes antigas como “*jawar” e “*jakare” deram, de um lado, o guarani mbyá “jagua” (cachorro) e “jakare” (jacaré) e, do outro — pelo tupi antigo colonial —, o português “jaguar” e “jacaré”: primas pela mesma raiz, não uma copiada da outra. Na direção oposta, o mbyá também emprestou palavras do português depois do contato, como “ovexa”, de “ovelha”.',
};
