import type { LanguagePack } from '../types';
import { VOCAB_YWN } from './vocabulario';
import { UNITS_YWN } from './curriculo';
import { GRAMMAR_YWN } from './gramatica';
import { STORIES_YWN } from './historias';
import { COMMUNITY_YWN, ETYMOLOGY_YWN, JOURNAL_PROMPTS_YWN, SCENARIOS_YWN, SHADOWING_YWN } from './extras';
import { FONTES_YWN, METODOS_YWN } from './fontes';

export const YAWANAWA: LanguagePack = {
  // CÓDIGO ISO 639-3: confirmado como “ywn” em três fontes: (1) iso639-3.sil.org/code/ywn (nome de
  // referência “Yawanawa”, língua viva, aberta de novo em 16/10/2026); (2) glottolog.org/resource/
  // languoid/id/yawa1260 (glotocódigo “yawa1260”, família Pano-Tacanan); (3) en.wikipedia.org/wiki/
  // Yawanawa_language.
  code: 'ywn',
  name: 'Yawanawá',
  // “Yawanawá” é a autodesignação: “yawa” (queixada) + “nawa” (povo). Paula (2003, Revista do GELNE 5,
  // ex. 05b) mostra a composição yawa + nawa + -hu (plural), “os Yawanawá”. O povo chama a língua de
  // “Nuke Tsãi” (nossa fala), segundo o Plano de Vida Yawanawa (2016, p. 59); o nome do curso continua
  // “Yawanawá”, que é o nome usado pelas fontes linguísticas.
  nativeName: 'Yawanawá',
  // Terra Indígena Rio Gregório, Acre: bandeira do Brasil, como nos outros idiomas indígenas brasileiros.
  flag: '🇧🇷',
  lineage: {
    family: 'Pano',
    // Tem de ficar IGUAL à entrada ywn de src/data/idiomas-metadados.ts. O ramo de Loos (1999) vem de
    // Silva e Duarte 2024 (p. 136) e 2025 (Tabela 01).
    branches: [
      'Pano-Tacana → Pano (glottolog.org/resource/languoid/id/yawa1260; en.wikipedia.org/wiki/Yawanawa_language)',
      'Subgrupo Yaminawa, junto com o yaminawa, o amawaka, o kaxinawá (hãtxa kuĩ) e o sharanawa, entre outros (classificação de Loos 1999, citada por Silva e Duarte 2024 e 2025)',
      'Grupo VII: Kaxinawá, Marináwa, Yawanawá (classificação de Oliveira 2014, citada em pt.wikipedia.org/wiki/Línguas_pano) — o mesmo grupo do huni kuĩ/hãtxa kuĩ, pacote “cbs” deste app: o parente mais próximo do yawanawá aqui dentro',
      'Subgrupo III-2-2-2: Mastanawa, Tuxinawa, Yoranawa, Sharanawa, Shanenawa, Arara, Yawanawa, Xitonawa, Yaminawa (classificação de Amarante Ribeiro 2005, citada na mesma fonte) — nesta outra classificação o yawanawá fica agrupado com o yaminawa e o sharanawa/shanenawa, não com o huni kuĩ (que, nesta mesma fonte, fica no Subgrupo III-1)',
    ],
    region:
      'Terra Indígena Rio Gregório, município de Tarauacá (Acre, Brasil), com grupos também no sudeste do Peru e na Bolívia (pib.socioambiental.org/pt/Povo:Yawanawá)',
    // Grafia prática dos livros da comunidade (Costumes e tradições do povo Yawanawá, CPI-Acre 2006;
    // Vakehu Shenipahu, ASCY 2016) e de Camargo-Tavares (2013); os linguistas (Paula 2004) usam o
    // alfabeto fonético. Pares de correspondência na regra de grafia de vocabulario.
    writing:
      'Alfabeto latino, na grafia prática dos livros feitos pelos próprios Yawanawá: “e” para a vogal central [ɨ], “v” para a fricativa bilabial [β], “tx” para [tʃ], “sh” ou “x” para [ʃ], til nas vogais nasais (ã, ĩ, ũ) e o “ē” do livro de contos (Ē, “eu”). Os estudos de linguística, como a tese de Aldir Santos de Paula (2004), usam o alfabeto fonético.',
  },
  // Nenhum serviço de síntese de voz tem voz para o yawanawá: os áudios usam a voz do aparelho, se houver.
  speechLocale: 'ywn',
  available: true,
  // O teto do yawanawá é A1 (tetos.ts). Com a unidade 2 (A1.2) pronta, o curso chega ao teto e fica
  // COMPLETO: o campo continua com until 'A1.2' porque o app e o teste de teto (aventura.test) leem
  // “incomplete.until igual ao último subnível do teto” como curso completo; sem o campo, o teste
  // entenderia conteúdo até o C2. A nota diz ao aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'A1.2',
    note:
      'Curso completo até o teto do yawanawá (A1): duas unidades, 93 palavras, 6 tópicos de gramática e 2 histórias. O yawanawá é uma língua pano da Terra Indígena Rio Gregório (Tarauacá, Acre), de um povo de 960 pessoas (censo de 2022); em 2010, só 160 pessoas a usavam no dia a dia. As duas descrições principais, a tese de Aldir Santos de Paula (Unicamp, 2004) e a dissertação de Lívia Camargo-Tavares (UFRJ, 2013), não foram encontradas abertas na internet. Por isso o curso se apoia no que está aberto: os artigos de Silva e Duarte (2024 e 2025), que citam muitas frases dessas duas obras com a página; dois artigos curtos de Paula (2003 e 2008); a lista de palavras do banco ASJP, feita a partir da tese de Paula; e três livros da própria comunidade: “Costumes e tradições do povo Yawanawá” (professores yawanawá, CPI-Acre, 2006), o livro de contos “Vakehu Shenipahu” (pajé Tata, 2016) e o “Plano de Vida Yawanawa” (2016). A grafia é a desses livros; as frases que vêm de estudos em alfabeto fonético foram passadas para essa grafia trocando só as letras cuja correspondência aparece nas próprias fontes. Ficaram de fora, porque as fontes discordam, as palavras para cabelo, mão, dente e árvore. Não há uma saudação fixa como “oi” nem um “obrigado” nas fontes. No lugar da saudação, o curso usa “txai”, que é o primo cruzado e uma forma de tratamento (a prima cruzada é “tsave”). No lugar do “obrigado”, usa “saiti”, a palavra yawanawá para festa (de “sai”, gritar), que nenhuma fonte registra como agradecimento. O “vamos!” (“hukãwe”) vem da fala dos jabutis no livro de contos.',
  },
  vocab: VOCAB_YWN,
  units: UNITS_YWN,
  etymology: ETYMOLOGY_YWN,
  community: COMMUNITY_YWN,
  scenarios: SCENARIOS_YWN,
  stories: STORIES_YWN,
  grammar: GRAMMAR_YWN,
  journalPrompts: JOURNAL_PROMPTS_YWN,
  shadowing: SHADOWING_YWN,
  fontes: FONTES_YWN,
  metodos: METODOS_YWN,
  // Teclado: as vogais com til dos livros da comunidade (ã, ĩ, ũ; “ẽ” em “Nukē”, que o PDF mostra com
  // traço, fica como “ē”) e o “ë” de “kanë” (grafia do ISA).
  specialChars: ['ã', 'ĩ', 'ũ', 'ē', 'ë'],
  // As fontes não descrevem gênero gramatical no yawanawá (nem artigos, nem concordância de gênero).
  genders: [],
  // “Txai!” (VAK 21; Pérez Gil 1999, p. 60: txai é o primo cruzado; CTY 163: “o txai Terri Aquino”).
  greeting: 'Txai!',
  // “Txai!” + “Ē nukua.” (Camargo-Tavares 2013, p. 95, “ɨ-n nuku-a”, eu cheguei, na grafia dos livros).
  sampleSentence: 'Txai! Ē nukua.',
  phrases: {
    // Nenhuma fonte registra um “oi”. “Txai” é termo de parentesco usado como tratamento: o livro de contos
    // (VAK 21) põe na boca da onça “Ha! Eve nanea, txai.” (“Meus primos”), e o livro dos professores chama
    // assim Terri Aquino. A nota de incomplete avisa o aluno.
    hi: 'Txai!',
    // Também não há “obrigado”: “saiti” (a festa; “sai significa gritar”, ISA; “sayti” em CTY 143) fica como
    // palavra de apreço, do pacote anterior. Nenhuma fonte a registra como agradecimento; a nota avisa.
    thanks: 'Saiti!',
    // VAK 10–11: “Hukãwe, hukãwe, hukãni.”, traduzido no livro “Vamos! Vamos! Vamos todos”.
    letsStart: ['Hukãwe!', 'Vamos! (fala dos jabutis no conto do pajé Tata, no livro “Vakehu Shenipahu”, 2016)'],
  },
  formalMarkers:
    'As fontes não descrevem uma forma “formal” separada da informal, como o “você” e o “o senhor” do português. O que existe são termos de parentesco usados para tratar as pessoas, como “txai” (primo cruzado), que o livro dos professores yawanawá usa também para Terri Aquino, que não é yawanawá, e o respeito aos mais velhos, que o livro dos professores yawanawá chama de “arquivos de histórias”.',
  cognateNote:
    'O yawanawá não é parente do português: é uma língua indígena da família pano, do Acre. Não há ancestral comum, então não há cognatos “de berço” com o português. Dentro da família pano, o yawanawá é parente do huni kuĩ e do marúbo, outras línguas do app: o “um” é “wisti” no yawanawá e “bɨsti” no huni kuĩ, e várias palavras são iguais às do marúbo, como “imi” (sangue), “txi” (fogo), “yame” (noite) e “txai” (primo cruzado). A aba de etimologia mostra também como o yawanawá forma palavras: “Yawanawá” (yawa, queixada + nawa, povo), “vakehu” (criança + plural) e “Nuke Tsãi” (nossa fala).',
};
