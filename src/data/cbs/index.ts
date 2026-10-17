import type { LanguagePack } from '../types';
import { VOCAB_CBS } from './vocabulario';
import { UNITS_CBS } from './curriculo';
import { GRAMMAR_CBS } from './gramatica';
import { STORIES_CBS } from './historias';
import { COMMUNITY_CBS, ETYMOLOGY_CBS, JOURNAL_PROMPTS_CBS, SCENARIOS_CBS, SHADOWING_CBS } from './extras';
import { ACCENTS_CBS } from './sotaques';
import { FONTES_CBS, METODOS_CBS } from './fontes';

export const HUNI_KUIN: LanguagePack = {
  // CÓDIGO ISO 639-3: confirmado como “cbs” em TRÊS fontes independentes consultadas nesta entrega:
  // (1) iso639-3.sil.org/code/cbs — registro oficial do SIL, nome de referência “Cashinahua”, status
  //     ativo, língua viva; (2) en.wikipedia.org/wiki/Kaxinawá_language — infobox cita “iso3: cbs” e o
  //     autoglossônimo “Hãtxa Kuĩ”; (3) pt.wikipedia.org/wiki/Língua_caxinauá — infobox confirma o
  //     mesmo código “cbs”. O candidato alternativo cogitado (“hbu”/“hvn”) NÃO corresponde a esta
  //     língua: “hbu” é o código do habu (uma língua de Papua-Nova Guiné) e “hvn” não está em uso no
  //     ISO 639-3 — nenhum dos dois tem relação com o huni kuĩ/caxinauá. “cbs” é, de fato, o código
  //     certo, ainda que reflita o exônimo “Cashinahua”/“Kaxinawá” (de origem pejorativa, ver abaixo),
  //     não o autônimo “huni kuin” nem o nome “Hãtxa Kuĩ” que a própria língua recebe dos seus falantes.
  code: 'cbs',
  name: 'Huni Kuĩ',
  // “huni kuin” (lit. “homens verdadeiros”, “gente com costumes conhecidos”) é a autodesignação do
  // POVO, confirmada em pt.wikipedia.org/wiki/Huni_Kuin (e no redirecionamento a partir de “Caxinauá”).
  // “Kaxinawá” — nome mais frequente em registros oficiais, acadêmicos e no próprio código ISO (“cbs”,
  // de “Cashinahua”) — é um EXÔNIMO de origem pejorativa: segundo a mesma fonte, significa literalmente
  // “povo morcego”, “povo canibal” ou “povo que anda à noite”, e não é como o povo se chama. A LÍNGUA,
  // por sua vez, costuma ser chamada “Hãtxa Kuĩ” (também grafada “Hantxa Kuin”) — forma usada tanto por
  // en.wikipedia.org/wiki/Kaxinawá_language quanto pelos próprios professores indígenas do Acre
  // (cpiacre.org.br, que lista a disciplina “Língua Hãtxa Kuī” nos cursos de formação) — por isso ela
  // vai no campo `nativeName` abaixo, diferente do nome usado pelo povo para si mesmo.
  nativeName: 'Hãtxa Kuĩ',
  // território: terras indígenas do leste do Acre e o sudeste do Peru — emoji de bandeira do Brasil, na
  // falta de um símbolo próprio da língua (também falada no Peru), mesma solução já usada para outras
  // línguas indígenas brasileiras deste app (baniwa, tukano, kaingang, xavante).
  flag: '🇧🇷',
  lineage: {
    family: 'Pano',
    branches: [
      'Mainline Panoan → Nawa → Headwaters (en.wikipedia.org/wiki/Kaxinawá_language)',
      'Grupo VII: Kaxinawá, Marináwa, Yawanawá (classificação de Oliveira 2014, citada em pt.wikipedia.org/wiki/Línguas_pano)',
      'Subgrupo III-1: Iskonawa, Kaxinawa (classificação de Amarante Ribeiro 2005, citada na mesma fonte)',
    ],
    region:
      'Terras indígenas do leste do Acre (Brasil) — como as do rio Jordão, do Alto Purus, do Humaitá e do Breu — e o sudeste do Peru, ao longo dos rios Curanja e Purus',
    // [KAX11] Tabela 1 (p. 41-43) e Tabela 2 (p. 44-45), e p. 45 (“usamos o símbolo r e não d”; o “n” não
    // marca nasalidade); [HM] (grafia do Jordão, com “d”); [MON] 10-11 (grafia do Peru).
    writing:
      'Alfabeto latino, na grafia prática dos professores huni kuĩ do Acre, a das escolas e dos livros da CPI-Acre: “e” para a vogal central [ɨ]; “x” como o “x” de “xícara” [ʃ]; “sh” para o mesmo som com a língua virada para trás [ʂ]; “tx” como o “tch” de “tchau”; “ts”; e til nas vogais nasais (ã, ẽ, ĩ, ũ). No rio Jordão, escreve-se “d” onde os outros escrevem “r” (“dau” e “rau”, remédio). As teses usam o alfabeto fonético, e o dicionário do Peru escreve “j” no lugar de “h” (“juni”, homem)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o huni kuĩ: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do baniwa, do tukano, do kaingang e do xavante neste app).
  speechLocale: 'cbs',
  available: true,
  // Curso completo até o teto (B1, em tetos, desde 16/10/2026): os testes de teto leem “incomplete.until
  // igual ao último subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2. A
  // nota diz ao aluno de onde vem o material e o que ficou de fora. As fontes estão no cabeçalho de
  // vocabulario.ts.
  incomplete: {
    until: 'B1.4',
    note:
      'A1.1 até B1.4 completo: oito unidades, 169 palavras, 16 tópicos de gramática e 8 histórias, no hãtxa kuĩ, a “língua verdadeira” dos huni kuĩ, a “gente verdadeira” — povo pano do leste do Acre e do sudeste do Peru, por muito tempo chamado de “kaxinawá”, um nome de fora. O curso segue sobretudo a gramática de Joaquim Paulo de Lima Kaxinawá, linguista huni kuĩ (tese da UnB, 2014, escrita em português e em hãtxa kuĩ), e a dissertação dele de 2011, com um artigo de Eliane Camargo (2005) e livros dos professores huni kuĩ publicados pela Comissão Pró-Índio do Acre. A grafia é a das escolas huni kuĩ do Brasil (“e”, “x”, “sh”, “tx”, til); as frases que as teses trazem só em alfabeto fonético foram passadas para ela só com as trocas que o próprio Joaquim Kaxinawá mostra. O A2 traz os cinco passados do verbo e o futuro, as perguntas, a marca de quem faz a ação, “ter” e “não ter” e as ordens. O B1 lê, frase a frase, a história inteira do povo sovino, que Capistrano de Abreu anotou em 1914 e Joaquim Kaxinawá reescreveu na grafia de hoje: o calango e o milho, a curica e o fogo, o beija-flor e o algodão, e a transformação dos bichos, com as adivinhas da mesma época. A gramática do B1 é a das orações ligadas (“porque”, “se”, “quando”, “depois que”, “para que”, com o mesmo sujeito ou com outro), o “-ma” de “fazer fazer”, a fala contada (“aka”, “anikiaki”), o foco (“quem pegou o fogo foi a curica”) e o pronome enfático (“eã”, “ea”). O curso não criou frases novas: só juntou o possessivo a um nome, como as próprias fontes fazem. As fontes não trazem uma saudação fixa nem um “obrigado”: no lugar, o curso usa “Txai!” (primo) e “Hawẽrua!” (bonito). Nenhum serviço de voz consultado fala o hãtxa kuĩ: o áudio usa a voz do aparelho.',
  },
  vocab: VOCAB_CBS,
  units: UNITS_CBS,
  etymology: ETYMOLOGY_CBS,
  community: COMMUNITY_CBS,
  scenarios: SCENARIOS_CBS,
  stories: STORIES_CBS,
  accents: ACCENTS_CBS,
  grammar: GRAMMAR_CBS,
  journalPrompts: JOURNAL_PROMPTS_CBS,
  shadowing: SHADOWING_CBS,
  fontes: FONTES_CBS,
  metodos: METODOS_CBS,
  // As vogais nasais com til; “e”, “x”, “sh”, “tx” e “ts” já estão no teclado comum.
  specialChars: ['ã', 'ẽ', 'ĩ', 'ũ'],
  // As fontes não descrevem gênero gramatical: não há artigo nem concordância de gênero; “aĩbu”
  // (mulher) e “huni” (homem) são palavras diferentes, não terminações ([KAX14] cap. 3).
  genders: [],
  // [KAX14] 67 e 70 (txai, o primo cruzado); “Hawẽrua” (bonito), [KAX14] 37, ex. 1, e o texto de [NHI], usado
  // no lugar de um “obrigado” que as fontes não registram; “Bukawẽ!” (vamos!), [KAX11] Tabela 1, linha
  // 64; a frase de amostra junta “Txai!” e [KAX14] 77, ex. 297.
  greeting: 'Txai!',
  sampleSentence: 'Txai! Na mani piwe.',
  phrases: {
    hi: 'Txai!',
    thanks: 'Hawẽrua!',
    letsStart: ['Bukawẽ!', 'Vamos!'],
  },
  // [KAX14] 71 (o sogro fala com o genro “com delicadeza, de forma carinhosa”; o mesmo entre genro, nora e
  // sogra).
  formalMarkers:
    'Não há em hãtxa kuĩ um “senhor” ou “senhora” separado: “mĩ” (você) serve para qualquer pessoa. O respeito aparece no tratamento entre parentes: os huni kuĩ falam com o sogro, a sogra, o genro e a nora com delicadeza e carinho, e se chamam pelo parentesco, como “txai”, o primo cruzado.',
  // Família pano: [SD25] 12-13 (Loos 1999). Yawanawá “ē” e “mĩ” e o “txai”: src/data/ywn (Vakehu
  // Shenipahu, 2016). “cidade”: [KAX14] 128, ex. 660 (“mĩ cidade anu ka i”, você vai na cidade).
  cognateNote:
    'O hãtxa kuĩ não é parente do português: é da família pano, a mesma do yawanawá, do marubo e do shipibo-konibo. As semelhanças aparecem com essas línguas irmãs: “ẽ” (eu) e “mĩ” (você) são quase iguais no yawanawá, e “txai” é tratamento entre parentes nas duas. Do português vieram palavras novas, como “cidade”, e o próprio nome “kaxinawá” veio de fora. Três traços marcam a gramática: o verbo no fim da frase, a marca “-ã” em quem faz a ação e o fim da frase que diz como você sabe o que conta (“-ki”, “kiki”, “kiaki”).',
};
