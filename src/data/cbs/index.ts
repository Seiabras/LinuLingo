import type { LanguagePack } from '../types';
import { VOCAB_CBS } from './vocabulario';
import { UNITS_CBS } from './curriculo';
import { GRAMMAR_CBS } from './gramatica';
import { STORIES_CBS } from './historias';
import { COMMUNITY_CBS, ETYMOLOGY_CBS, JOURNAL_PROMPTS_CBS, SCENARIOS_CBS, SHADOWING_CBS } from './extras';

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
    writing:
      'Alfabeto latino, em ortografia prática: nasalização marcada por til (ã, ĩ, ũ e a vogal central ɨ também nasalizável, ɨ̃); a vogal central alta ɨ, sem equivalente direto no português; os dígrafos “tx” (africada, como o “tch” de “tchau”) e “x” (como o “x” de “xícara”); e, nas fontes consultadas, a letra “ş” para uma fricativa retroflexa',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o huni kuĩ: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do baniwa, do tukano, do kaingang e do xavante neste app).
  speechLocale: 'cbs',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 40 palavras, 4 tópicos de gramática, 2 histórias), no huni kuĩ/hãtxa kuĩ — também chamado “kaxinawá”, um exônimo de origem pejorativa —, língua viva da família pano, falada por cerca de 13 mil pessoas em terras indígenas do leste do Acre (Brasil) e no sudeste do Peru. O código ISO 639-3 usado por este pacote, “cbs” (nome de referência oficial “Cashinahua”), foi confirmado em iso639-3.sil.org/code/cbs, en.wikipedia.org/wiki/Kaxinawá_language e pt.wikipedia.org/wiki/Língua_caxinauá — as três fontes concordam entre si, apesar de o código refletir o exônimo “Cashinahua”/“Kaxinawá”, não o autônimo “huni kuin” nem “Hãtxa Kuĩ”, o nome que a própria língua recebe dos seus falantes. O vocabulário aqui foi conferido palavra por palavra em pt.wikipedia.org/wiki/Língua_caxinauá (artigo com fonologia, as duas séries de pronomes pessoais, numerais, ordem SOV e a distinção modal -kiki/-kiaki, citando Eliane Camargo, “Fonologia enunciativa da língua Kaxinawá”, dissertação de mestrado, 1991), complementado por en.wikipedia.org/wiki/Kaxinawá_language, pt.wikipedia.org/wiki/Huni_Kuin (autodesignação, organização social, vocabulário cultural: muka, yuxin, dume, nixi pae, dau, mukaia), en.wikipedia.org/wiki/Txai (a palavra “txai”) e cpiacre.org.br/publicacoes (confirmando o nome “Hãtxa Kuī” usado pelos próprios professores indígenas do Acre e títulos de livros bilíngues como “Shenipabu Miyui”). As poucas frases de exemplo que não são citações diretas foram montadas combinando só palavras já atestadas com padrões de frase também atestados (nunca uma palavra nova inventada). NÃO encontrei, em nenhuma fonte consultada, uma palavra fixa para “oi”/“olá” ou “obrigado”: por isso o curso usa “Txai!” (termo de parentesco cruzado usado como forma de tratamento amistosa, popularizado nacionalmente a partir do convívio de Chico Mendes com o povo huni kuĩ) como saudação, e o adjetivo real “hawɨ̃” (bonito, bom — extraído da frase atestada “ɨ-ã hiwɨ hawɨ̃-rua”, minha casa é bonita) como expressão de apreço, do mesmo tipo de solução já usada no baniwa, no tukano, no xavante e no kaingang deste app em vez de inventar palavras nessas lacunas. Algumas palavras foram deliberadamente deixadas de fora por falta de confirmação específica: não incluí um termo para “kene” (os padrões gráficos pelos quais o povo huni kuĩ é mundialmente conhecido) porque nenhuma das fontes consultadas nesta entrega registra a forma exata da palavra; e não tentei decompor o trecho da Declaração Universal dos Direitos Humanos em huni kuĩ citado por en.wikipedia.org/wiki/Kaxinawá_language (“Yudabu dasibi jabiaskadi akin, xinantidubuki”) palavra por palavra, por não haver uma glosa confiável disponível. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_CBS,
  units: UNITS_CBS,
  etymology: ETYMOLOGY_CBS,
  community: COMMUNITY_CBS,
  scenarios: SCENARIOS_CBS,
  stories: STORIES_CBS,
  grammar: GRAMMAR_CBS,
  journalPrompts: JOURNAL_PROMPTS_CBS,
  shadowing: SHADOWING_CBS,
  // ɨ (vogal central alta) e as vogais nasais (ã, ĩ, ũ, ɨ̃) não existem no português; “ş” (fricativa
  // retroflexa, citada em pt.wikipedia.org/wiki/Língua_caxinauá) completa o teclado adaptado. Os
  // dígrafos “tx” e “x” usam letras já existentes no teclado comum, por isso não entram aqui.
  specialChars: ['ɨ', 'ɨ̃', 'ã', 'ĩ', 'ũ', 'ş'],
  // as fontes consultadas não descrevem gênero gramatical de substantivo no huni kuĩ (não há artigos
  // “o/a” nem concordância de gênero); a única distinção que aparece é lexical, não gramatical (como
  // “aĩbu”, mulher, × “huni”, homem) — por isso o campo fica vazio, como no baniwa e no tukano deste app.
  genders: [],
  greeting: 'Txai!',
  sampleSentence: 'Txai! Ɨ huni kuin. Na mani pi wɨ!',
  phrases: {
    hi: 'Txai!',
    // não há, nas fontes consultadas, uma interjeição huni kuĩ equivalente a “obrigado”: usamos o
    // adjetivo real “hawɨ̃” (bonito, bom), extraído da frase atestada “ɨ-ã hiwɨ hawɨ̃-rua” (minha casa é
    // bonita), como expressão de apreço — do mesmo jeito que o curso de baniwa usa “keepe” (gordo) e o
    // de xavante usa “ĩwẽ” (bom) onde a língua não lexicalizou um “obrigado” separado.
    thanks: 'Hawɨ̃!',
    // também não há, nas fontes, um “vamos!” imperativo isolado: reaproveitamos a frase real atestada
    // “na mani pi wɨ” (coma esta banana, com o sufixo imperativo “-wɨ”) como convite animado para
    // começar agora, sem inventar uma forma nova — o mesmo recurso usado no baniwa com “núawa” (eu irei).
    letsStart: ['Na mani pi wɨ!', 'Coma esta banana! (frase real com o sufixo imperativo “-wɨ”; usada aqui como convite animado para começar agora)'],
  },
  formalMarkers:
    'As fontes consultadas não registram, para o huni kuĩ, um pronome ou marca gramatical “formal” separada da informal como o “você”/“o senhor” do português: “mĩ” (tu/você) serve para qualquer pessoa, e “txai” (parceiro, amigo) funciona como forma de tratamento tanto para conhecidos quanto para visitantes — um traço que o huni kuĩ compartilha com o baniwa, o tukano e o xavante, as outras línguas indígenas já neste app.',
  cognateNote:
    'O huni kuĩ não é parente do português: é uma língua indígena viva da família pano, nativa de terras indígenas do leste do Acre e do sudeste do Peru — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente do tupi-guarani, do jê, do aruak (arawak) e do tukano, famílias de outras línguas indígenas já neste app. Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” entre as duas línguas, nem empréstimos conhecidos registrados nas fontes consultadas. O que existe — e está documentado — é a formação interna de palavras dentro do próprio huni kuĩ, mostrada na aba de etimologia: o autônimo “huni kuin” nasce da junção de “huni” (pessoa, homem) com “kuin” (verdadeiro), em contraste direto com o exônimo pejorativo “kaxinawá”; “mukaia” (pajé) nomeia quem maneja o “muka” (poder xamânico); e o sistema de duas séries pronominais, com os sufixos de caso “-ã” (ergativo) e “-a” (acusativo), mostra uma lógica de marcação gramatical bem diferente da portuguesa, mais próxima do que se conhece de outras línguas pano, como o shipibo-konibo.',
};
