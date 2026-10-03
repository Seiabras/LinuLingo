import type { LanguagePack } from '../types';
import { toReadingEl } from '@/services/reading-greek';
import { VOCAB_TSD } from './vocabulario';
import { UNITS_TSD } from './curriculo';
import { GRAMMAR_TSD } from './gramatica';
import { STORIES_TSD } from './historias';
import { COMMUNITY_TSD, ETYMOLOGY_TSD, JOURNAL_PROMPTS_TSD, SCENARIOS_TSD, SHADOWING_TSD } from './extras';

export const TSAKONIO: LanguagePack = {
  code: 'tsd',
  name: 'Tsaconiano',
  // endônimo, citado no próprio artigo da Wikipédia em inglês (lead do artigo “Tsakonian Greek”):
  // “τσακώνικα (também τσακώνικα ou τσακωνικά)”. A Wikipédia em português usa “tsaconiano”,
  // “tsakoniano”, “tzakoniano” ou “tsakônico” como nomes em português (pt.wikipedia.org/wiki/
  // Língua_tsaconiana) — escolhemos “tsaconiano” para o pacote.
  nativeName: 'Τσακώνικα',
  flag: '🇬🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Helênico'],
    region:
      'Tsacônia, uma faixa de aldeias montanhosas no leste do Peloponeso, Grécia, perto do monte Párnonas e do golfo da Argólida — sobretudo Leonídio e Tiros (onde vive a maioria dos falantes hoje) e, no dialeto do norte, Sitena e Kastanítsa (en.wikipedia.org/wiki/Tsakonian_Greek). Um levantamento mais antigo (pt.wikipedia.org/wiki/Língua_tsaconiana, dados de 2010) estimava cerca de 1.500 falantes.',
    writing:
      'Alfabeto grego comum, mais dígrafos para sons que o grego padrão não tem (σχ, τσχ, τθ, κχ, πφ, ρζ, νν, λλ — veja a aba Gramática). O linguista Thanásis Kostákis criou ainda uma notação alternativa, com pontos, espírito áspero e cáron, usada nos livros dele.',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz
  // para o tsakônio: os áudios usam a voz do aparelho, se houver — o mesmo caso dos outros pacotes de
  // língua pequena/ameaçada deste app (tpj, nhd, gun, kgk, kpc, tuo, yrl).
  speechLocale: 'tsd',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 47 palavras, 4 tópicos de gramática, 2 histórias), no tsaconiano — a variedade do grego moderno com a descendência mais divergente de todas: vem do grego DÓRICO antigo (o de Esparta), não do ramo ático-jônico/coiné de que descendem o grego padrão (pacote “el”, já neste app) e todos os outros dialetos gregos modernos. Por isso alguns linguistas o tratam como uma língua separada, não como um simples dialeto, dentro do ramo helênico do indo-europeu — o caso mais forte desse tipo em toda a família. Tem código ISO 639-3 próprio, “tsd” (confirmado em iso639-3.sil.org/code/tsd), e Glottocode “tsak1248” (Glottolog, que classifica o tsaconiano como “severely endangered”; a UNESCO, no seu Atlas das Línguas em Perigo do Mundo, usa a categoria ainda mais grave “critically endangered” — ambas citadas em en.wikipedia.org/wiki/Tsakonian_Greek). É falado por só algumas centenas de pessoas fluentes, a maioria idosas (a Wikipédia em inglês cita uma queda de cerca de 200 mil falantes no passado para entre 200 e 1.000 por volta de 2007, e um levantamento mais recente, de Campbell & Bellew, “Cataloguing the World’s Endangered Languages”, estima de 2.000 a 4.000 em 2018, incluindo falantes passivos); um dos três dialetos, o de Propôntis (falado numa antiga colônia no Mar de Mármara, Turquia), já se extinguiu por volta de 1970. ESTE É UM DOS PACOTES MAIS POBRES EM FONTES DE TODO O APP: não existe Wikipédia nem Wikcionário escritos NA língua tsaconiana (só artigos SOBRE ela), e a obra de referência lexicográfica, o dicionário de Thanásis Kostákis (“Λεξικό της Τσακωνικής Διαλέκτου”, 1986), é um livro impresso sem versão digital encontrada em nenhum repositório acadêmico testado. Por isso as 47 palavras deste pacote vêm de só duas fontes digitais, conferidas palavra por palavra (nunca presumidas a partir do grego padrão): as 37 entradas da categoria “Tsakonian lemmas” do Wikcionário em inglês (en.wiktionary.org/wiki/Category:Tsakonian_lemmas, cada uma com página própria, de onde vem também o gênero gramatical, conferido no código-fonte de cada página) e mais 10 palavras citadas, com tradução, dentro do próprio texto do artigo da Wikipédia em inglês “Tsakonian Greek” (nas seções de fonologia e na tabela “Sample texts”). Uma palavra do Wikcionário, “εμού”, ficou de fora: a própria tabela de pronomes do Wikcionário a lista ao mesmo tempo como 1ª pessoa do plural (caso oblíquo) e como forma nominativa da 2ª pessoa do plural — uma contradição que não dá pra resolver com segurança só com essa fonte. Pelo menos duas palavras (“αμέρα”, dia, e “γουναίκα”, mulher) têm um gênero gramatical MASCULINO no Wikcionário, diferente do feminino esperado pela palavra equivalente em grego padrão — um fato citado, não uma regra geral. Como nenhuma das duas fontes é um livro de frases, a maioria dos exemplos foi MONTADA combinando só o pronome “νι” (ele/ela/isto) com a cópula de 3ª pessoa do presente, “έννι” (é, está) — essa, sim, atestada na tabela de conjugação do artigo da Wikipédia —, exceto quando a fonte realmente cita uma frase inteira: “Groússa námou eíni ta Tsakónika.” (nossa língua é o tsaconiano), “Κιά έννι το όντα σι;” (onde fica o quarto dele/dela?) e “Μη\' μ\' αντζίζερε όρπα!” (não me toque ali!), todas da tabela “Sample texts” do artigo da Wikipédia ou de outro trecho dele. As fontes consultadas não registram numerais além de “nove” e “um” (feminino, citados só como par mínimo de vogais na seção de fonologia), nem um “oi” ou um “obrigado” fixos — por isso o curso usa a frase testemunhal real de identidade (“Groússa námou eíni ta Tsakónika.”) como saudação, do mesmo jeito que os pacotes tpj e nhd já fazem nas suas próprias lacunas. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas e acessíveis do tsaconiano (em especial, se algum resumo ou trecho citável do dicionário de Kostákis puder ser localizado) forem encontradas.',
  },
  vocab: VOCAB_TSD,
  // o tsaconiano usa o mesmo alfabeto grego comum (ver `writing` acima) — a transcrição ELOT 743 do
  // grego padrão (reading-greek.ts) já dá uma boa aproximação pra quem ainda não lê grego (ex.: εζού
  // → ezoú, γουναίκα → gounéka), mesmo sem cobrir os dígrafos próprios do tsaconiano (ver
  // `specialChars`/gramatica.ts) nem as diferenças reais de som com o grego padrão (ver `cognateNote`).
  reading: (t) => (/[Ͱ-Ͽἀ-῿]/.test(t) ? toReadingEl(t) : ''),
  units: UNITS_TSD,
  etymology: ETYMOLOGY_TSD,
  community: COMMUNITY_TSD,
  scenarios: SCENARIOS_TSD,
  stories: STORIES_TSD,
  grammar: GRAMMAR_TSD,
  journalPrompts: JOURNAL_PROMPTS_TSD,
  shadowing: SHADOWING_TSD,
  // mesmo alfabeto de 24 letras do grego padrão (pacote “el”) — um fato objetivo sobre a escrita
  // tsaconiana, não vocabulário aproveitado daquele pacote.
  keyboardRows: [
    ['ς', 'ε', 'ρ', 'τ', 'υ', 'θ', 'ι', 'ο', 'π'],
    ['α', 'σ', 'δ', 'φ', 'γ', 'η', 'ξ', 'κ', 'λ'],
    ['ζ', 'χ', 'ψ', 'ω', 'β', 'ν', 'μ'],
  ],
  // dígrafos usados no tsaconiano para sons que o alfabeto grego comum não representa sozinho — ver
  // gramatica.ts, tópico “Dígrafos”.
  specialChars: ['σχ', 'τσχ', 'τθ', 'κχ', 'πφ', 'ρζ', 'νν', 'λλ'],
  // três gêneros gramaticais (masculino, feminino, neutro), como o grego padrão — embora pelo menos
  // duas palavras do vocabulário (αμέρα, γουναίκα) tenham um gênero diferente do esperado pela forma
  // equivalente em grego padrão, ver a nota em vocabulario.ts.
  genders: ['m', 'f', 'n'],
  // frase testemunhal real, citada em en.wikipedia.org/wiki/Tsakonian_Greek — usada aqui no lugar de
  // um “oi” inventado, que nenhuma fonte registra.
  greeting: 'Groússa námou eíni ta Tsakónika.',
  sampleSentence: 'Groússa námou eíni ta Tsakónika. Εζού τσαι εκιού.',
  phrases: {
    hi: 'Groússa námou eíni ta Tsakónika.',
    // nenhuma fonte registra um “obrigado” fixo em tsaconiano: “καούρ” (bem, está bem) é usado aqui
    // como expressão de aprovação, do mesmo jeito que o pacote tpj usa “pörä” (bonito) onde a língua
    // não tem um “obrigado” separado documentado.
    thanks: 'Καούρ!',
    // também não há, nas fontes, um “vamos!” imperativo: usamos a forma real “έμε” (nós somos/estamos,
    // 1ª pessoa do plural do presente do verbo “ser/estar”, atestada na tabela de conjugação do artigo
    // da Wikipédia) como convite para começar agora, sem inventar uma forma nova — mesma estratégia do
    // tpj, que reaproveita “a-wata” (eu ando) com o mesmo propósito.
    letsStart: ['Έμε!', 'Estamos! (lit. “nós somos/estamos”; usado aqui como convite para começar agora, já que nenhuma fonte registra um “vamos!” imperativo em tsaconiano)'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no tsaconiano — um traço que, pelas fontes disponíveis, parece comum aos outros pacotes de língua pequena/ameaçada deste app (tpj, nhd e as demais línguas indígenas já incluídas).',
  cognateNote:
    'O tsaconiano é o parente mais distante que o grego padrão (pacote “el”, já neste app) tem dentro do próprio ramo helênico do indo-europeu: os dois vêm do grego antigo, mas de troncos diferentes — o tsaconiano do dórico (o de Esparta), o grego padrão do ático-jônico e do coiné bizantino. Por isso, mesmo sendo parentes mais próximos entre si do que de qualquer outra língua deste app, as duas variedades NÃO são mutuamente inteligíveis, segundo a Wikipédia em inglês. Isso aparece no vocabulário: onde o grego padrão tem “εσύ” (tu, do ático “σύ”), o tsaconiano tem “εκιού” (do dórico “τύ”); onde o grego padrão tem “ημέρα”/“μέρα” (dia), o tsaconiano tem “αμέρα”, preservando a vogal longa dórica onde o ático já tinha trocado por “η”. A palavra “βάννε” (cordeiro) ainda preserva o “digama” (ϝ, o som /w/ do grego pré-clássico) como o som /v/ — um som que o ático já tinha perdido muito antes do grego padrão existir. Com o português, o parentesco do tsaconiano é só o parentesco distante de toda língua indo-europeia, pelo proto-indo-europeu (nunca por descendência direta, como o português tem com o latim) — mas uma raiz, a do pronome “γουναίκα” (mulher), remonta à mesma raiz indo-europeia, “*gʷḗn”, que também está, bem mais distante, por trás da palavra inglesa “queen” (rainha). Cada palavra mostra a raiz e os parentes na aba de etimologia.',
};
