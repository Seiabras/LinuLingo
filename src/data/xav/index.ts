import type { LanguagePack } from '../types';
import { VOCAB_XAV } from './vocabulario';
import { UNITS_XAV } from './curriculo';
import { GRAMMAR_XAV } from './gramatica';
import { STORIES_XAV } from './historias';
import { COMMUNITY_XAV, ETYMOLOGY_XAV, JOURNAL_PROMPTS_XAV, SCENARIOS_XAV, SHADOWING_XAV } from './extras';

export const XAVANTE: LanguagePack = {
  code: 'xav',
  name: 'Xavante',
  // "A'uwẽ" ("gente, pessoa") é a autodesignação do povo e da língua; a forma completa "a'uwe uptabi"
  // ("gente de verdade") está confirmada na página do povo xavante no ISA (Instituto Socioambiental,
  // pib.socioambiental.org/pt/Povo:Xavante) e também como nativename alternativo em
  // en.wikipedia.org/wiki/Xavante_language ("A'uwe Uptabi").
  nativeName: 'A\'uwẽ',
  // não há um símbolo próprio da língua: bandeira do Brasil, o país onde o povo xavante vive hoje,
  // como já se faz para o tupi antigo (tpw) e o kaingang (kgp) neste app.
  flag: '🇧🇷',
  lineage: {
    family: 'Macro-Jê',
    branches: ['Jê', 'Jê Central (Akuwẽ, junto com o xerente e o xakriabá)'],
    region: 'Leste do Mato Grosso, Brasil: terras indígenas como Pimentel Barbosa (Étênhiritipá), São Marcos, Sangradouro/Volta Grande e Areões, na região da Serra do Roncador e dos rios das Mortes, Kuluene, Couto de Magalhães, Batovi e Garças',
    writing: 'Alfabeto latino, na ortografia usada pela SIL/dicionário Hall & MacLeod (vogais i, ĩ, e, é, ẽ, â, a, ã, u, ô, o, õ, y; consoantes p, b, m, t, d, n, s, z, nh, r, w, h e o apóstrofo para a oclusiva glotal)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o xavante: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do tupi antigo, do guarani e do kaingang neste app).
  speechLocale: 'xav',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 60 palavras, 4 tópicos de gramática, 2 histórias). As fontes consultadas — o artigo “Língua aquém” da Wikipédia em português (cuja seção de fonologia, ortografia, gramática e a Lista de Swadesh de 100 palavras é “referente ao dialeto Xavante”, segundo o próprio texto, citando Pickering 2010, Hall & MacLeod 2004, Tsipré 2019 e Oliveira 2007), o artigo “Xavante language” da Wikipédia em inglês e a página do povo xavante no Instituto Socioambiental (pib.socioambiental.org) — não registram uma palavra fixa para “oi”, “tchau” ou “obrigado” em xavante, parecida com as do português; por isso o curso usa frases reais de apresentação (“Wa hã a\'uwẽ”, eu sou xavante) em vez de inventar uma saudação, e o adjetivo real “ĩwẽ” (bom) faz as vezes de “obrigado”/expressão de apreço, como já acontece no curso de tupi antigo deste app com “katu” (bom). O xavante também tem um dos sistemas gramaticais mais complexos entre as línguas indígenas já no app — com marcação de caso ergativo-absolutivo, nominativo-acusativo e tripartido, segundo a Wikipédia em inglês —, bem além do que cabe num curso A1; por isso a gramática aqui ensina só as construções mais simples e diretamente atestadas nas fontes, sem inventar regras para preencher lacunas. Nenhum serviço de síntese de voz tem voz para o xavante: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_XAV,
  units: UNITS_XAV,
  etymology: ETYMOLOGY_XAV,
  community: COMMUNITY_XAV,
  scenarios: SCENARIOS_XAV,
  stories: STORIES_XAV,
  grammar: GRAMMAR_XAV,
  journalPrompts: JOURNAL_PROMPTS_XAV,
  shadowing: SHADOWING_XAV,
  // â (vogal central) e y (vogal central alta) não existem no português; as quatro vogais nasais
  // confirmadas (ã, ẽ, ĩ, õ — sem "ũ" nasal, diferente do kaingang) e o apóstrofo (oclusiva glotal)
  // completam o teclado adaptado.
  specialChars: ['â', 'y', 'ã', 'ẽ', 'ĩ', 'õ', "'"],
  // as fontes consultadas não descrevem gênero gramatical em substantivo nem em adjetivo no xavante;
  // a única distinção de gênero documentada é a "fala masculina" × "fala feminina" em certas palavras
  // (como o interrogativo "e marĩ" × "e tiha"), explicada na gramática desta unidade — não é gênero
  // gramatical de substantivo, por isso não entra no campo `genders`.
  genders: [],
  greeting: 'Wa hã a\'uwẽ.',
  sampleSentence: 'Wa hã a\'uwẽ! Wa norĩ hã a\'uwẽ. Te mo!',
  phrases: {
    hi: 'Wa hã a\'uwẽ.',
    // não há, nas fontes consultadas, uma interjeição xavante equivalente a "obrigado": usamos o
    // adjetivo real "ĩwẽ" (bom) como expressão de apreço, do mesmo jeito que o curso de tupi antigo
    // usa "katu" (bom) e o de kaingang usa "mrir" (feliz) onde a língua não lexicalizou um "obrigado".
    thanks: 'Ĩwẽ!',
    // também não há, nas fontes, um verbo "ir" imperativo equivalente a "vamos": usamos o verbo real
    // "te mo" ("ele/ela vem", já citado na forma de dicionário) como convite para começar agora, sem
    // inventar uma forma nova — o mesmo recurso usado no curso de kaingang com o advérbio "ũri" (hoje).
    letsStart: ['Te mo!', 'Vem! (lit. “ele/ela vem”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'As fontes consultadas não descrevem, para o xavante, um pronome “formal” separado do “informal” como o “você”/“o senhor” do português: há só dois pronomes pessoais (wa, eu; a, tu/você), usados com qualquer pessoa. O que existe — descrito por Harrison (2001), citado na Wikipédia em inglês — é um sistema de respeito morfológico bem mais específico: formas gramaticais especiais, com morfemas próprios, usadas por exemplo entre genros e sogros, ou de netos para avós, diferentes das formas comuns do dia a dia. Esse sistema é complexo demais para o nível A1 deste curso, mas vale saber que ele existe.',
  cognateNote:
    'O xavante não é parente do português: é uma língua jê, do tronco Macro-Jê, nativa do Brasil — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente da tupi-guarani (a do tupi antigo e do guarani já no app) e da jê meridional do kaingang (um parente bem mais distante do xavante do que parece à primeira vista: são ramos diferentes da mesma família jê, tão distantes entre si quanto o português é do romeno dentro do indo-europeu). Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” entre xavante e português, nem empréstimos conhecidos em nenhuma direção nas fontes consultadas (diferente do kaingang, que emprestou palavras do português depois do contato, como “kasor”, cachorro). O que existe — e está documentado — é a formação interna de palavras por composição e por prefixos de pessoa, mostrada na aba de etimologia: números como “dez” e “vinte” que são, literalmente, descrições do corpo (“todos os dedos da mão”, “todos os dedos do pé”), e substantivos de parentesco e corpo que só existem já “possuídos” por um prefixo (ĩĩ-, ai-, ĩ-, wa-, da-).',
};
