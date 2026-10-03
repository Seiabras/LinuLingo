import type { LanguagePack } from '../types';
import { VOCAB_SHP } from './vocabulario';
import { UNITS_SHP } from './curriculo';
import { GRAMMAR_SHP } from './gramatica';
import { STORIES_SHP } from './historias';
import { COMMUNITY_SHP, ETYMOLOGY_SHP, JOURNAL_PROMPTS_SHP, SCENARIOS_SHP, SHADOWING_SHP } from './extras';

export const SHIPIBO_KONIBO: LanguagePack = {
  // CÓDIGO ISO 639-3: "shp" — confirmado em es.wikipedia.org/wiki/Idioma_shipibo, que cita o código ISO
  // 639-3 da língua na infobox, junto com a classificação (família pano-tacana, ramo pano, grupo nawa) e
  // a contagem de falantes do censo peruano de 2017 (~34.152). O artigo em espanhol foi preferido ao
  // correspondente em português/inglês por trazer mais detalhe gramatical (as quatro frases com marcação
  // de caso) e por ser a fonte já usada e citada integralmente no cabeçalho de vocabulario.ts.
  code: 'shp',
  // Não há, nas fontes consultadas, um autônimo documentado que seja DIFERENTE do nome "shipibo-konibo":
  // ao contrário do huni kuĩ (cbs) deste app, em que "kaxinawá" é um exônimo pejorativo e "Hãtxa Kuĩ" é o
  // nome próprio, aqui o próprio nome "shipibo-konibo" já vem da junção de dois autodesignações internas
  // — "shipi-" (que designa o macaco pichico) e "koni-" (que designa a enguia/muçum), cada uma com o
  // morfema de plural "-bo" — originalmente dois grupos que se uniram ao longo da história, segundo
  // es.wikipedia.org/wiki/Shipibo-conibo. Por isso `name` e `nativeName` repetem a mesma forma.
  name: 'Shipibo-Konibo',
  nativeName: 'Shipibo-konibo',
  // território: regiões de Ucayali e Loreto, no leste do Peru — emoji de bandeira do Peru, já que (ao
  // contrário do marúbo e do huni kuĩ deste app, línguas indígenas do Brasil) o shipibo-konibo é falado
  // no território peruano, segundo es.wikipedia.org/wiki/Idioma_shipibo.
  flag: '🇵🇪',
  lineage: {
    family: 'Pano',
    branches: ['Pano-tacana → ramo pano → grupo nawa (classificação citada em es.wikipedia.org/wiki/Idioma_shipibo)'],
    region: 'Regiões de Ucayali e Loreto, no leste do Peru, às margens do rio Ucayali e de seus afluentes (Amazônia peruana)',
    writing:
      'Alfabeto latino, em DUAS transcrições diferentes conforme a fonte: a fonética padronizada da Intercontinental Dictionary Series, com “š” (“x” do português), “č” (“tch” de “tchau”), “β” (fricativa bilabial, entre “b” e “v”), “ṣ̌” (consoante retroflexa), “ɨ” (vogal central alta) e vogais nasais com til (ã, ĩ, ũ, ɨ̃, õ); e a grafia das frases citadas da Wikipédia em espanhol, como “ochíti”, “jakon”, “nawa”, com acento agudo marcando a sílaba tônica.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o shipibo-konibo: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do huni kuĩ, do marúbo, do baniwa, do tukano, do kaingang e do
  // xavante neste app).
  speechLocale: 'shp',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 62 palavras, 4 tópicos de gramática, 2 histórias), no shipibo-konibo, língua indígena viva da família pano, falada por cerca de 34.152 pessoas (censo peruano de 2017) nas regiões de Ucayali e Loreto, no leste do Peru. O código ISO 639-3 “shp” e os dados de classificação e de falantes vêm de es.wikipedia.org/wiki/Idioma_shipibo, que também traz a fonologia, a ordem SOV com posposições, o alinhamento ergativo consistente (diferente de outras línguas pano, que têm ergatividade cindida, segundo Valenzuela, Pilar, 2000) e quatro frases de exemplo com marcação de caso, usadas tal como citadas (com o “E” maiúsculo preservado da fonte onde a frase foi reaproveitada sem adaptação). A evidencialidade (o sufixo reportativo “-ronki”) vem de en.wikipedia.org/wiki/Evidentiality, citando Valenzuela, Pilar (2003). A maior parte do vocabulário de pronomes, numerais, parentesco, partes do corpo, natureza, animais, alimentação, casa e verbos básicos vem do dicionário shipibo-conibo da Intercontinental Dictionary Series (Key, Mary Ritchie, 2023, Max Planck Institute for Evolutionary Anthropology), numa transcrição padronizada para as línguas pano feita por Miller, John e List, Johann-Mattis (2024), conjunto de dados público sob licença CC-BY-4.0. As palavras ligadas à arte gráfica “kené” e à cosmologia (kené, kano, rono/ronin, besho, jakon nete) vêm de es.wikipedia.org/wiki/Kené e es.wikipedia.org/wiki/Shipibo-conibo, citando Favarón e Bensho (2022), Brabec de Mori (2009, 2011) e Loriot, Lauriault e Day (1993). As poucas frases autorais deste curso (que não são citações diretas) combinam só palavras e sufixos já atestados sob padrões de frase também atestados — nunca uma palavra nova inventada. Duas lacunas honestas: nenhuma fonte consultada registra uma forma simples para o numeral “quatro” (os demais de 1 a 10 estão confirmados), e nenhuma mostra como se forma uma pergunta em shipibo-konibo — por isso este curso não tem nenhuma frase interrogativa, só afirmações. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas puderem ser conferidas.',
  },
  vocab: VOCAB_SHP,
  units: UNITS_SHP,
  etymology: ETYMOLOGY_SHP,
  community: COMMUNITY_SHP,
  scenarios: SCENARIOS_SHP,
  stories: STORIES_SHP,
  grammar: GRAMMAR_SHP,
  journalPrompts: JOURNAL_PROMPTS_SHP,
  shadowing: SHADOWING_SHP,
  // ɨ, ɨ̃ (vogal central alta, oral e nasal), ã/ĩ/ũ/õ (vogais nasais), š, č e β não existem no português;
  // ṣ̌ (consoante retroflexa) completa o teclado adaptado. Acentos agudos e o til comum (ã, õ) já existem
  // no teclado em português e por isso não entram de novo aqui.
  specialChars: ['ɨ', 'ɨ̃', 'ã', 'ĩ', 'ũ', 'õ', 'š', 'č', 'β', 'ṣ̌'],
  // as fontes consultadas não descrevem gênero gramatical de substantivo no shipibo-konibo (nem artigos,
  // nem concordância de gênero) — por isso o campo fica vazio, como no huni kuĩ, no marúbo, no baniwa, no
  // tukano, no kaingang e no xavante deste app.
  genders: [],
  greeting: 'Jakon!',
  sampleSentence: 'Jakon! Ɨ-n papa, ɨ-n tita.',
  phrases: {
    hi: 'Jakon!',
    // não há, nas fontes consultadas, uma interjeição shipibo-konibo equivalente a "oi" ou "obrigado":
    // o curso reaproveita "jakon" e "hɨɨ" (duas formas reais e sinônimas de "bom", segundo a
    // Intercontinental Dictionary Series) como cumprimento e agradecimento, a mesma solução já usada no
    // huni kuĩ deste app com "txai" e "hawɨ̃".
    thanks: 'Hɨɨ!',
    // também não há, nas fontes, um "vamos!" imperativo isolado: reaproveitamos a frase real "noa-ra
    // ka-ai" (nós vamos, estamos indo) como convite para começar a jornada deste curso, sem inventar uma
    // forma nova — o mesmo recurso usado no huni kuĩ com "na mani pi wɨ" e no marúbo com "Yové Vai".
    letsStart: ['Noa-ra ka-ai!', 'Nós vamos, estamos indo! (frase real combinando o pronome “noa” com o verbo “ka-ai”; usada aqui como convite para começar a jornada deste curso)'],
  },
  formalMarkers:
    'As fontes consultadas não descrevem, para o shipibo-konibo, uma marca gramatical “formal” separada da informal como o “você”/“o senhor” do português: os mesmos pronomes e as mesmas saudações servem para qualquer pessoa, um traço que a língua compartilha com o huni kuĩ e o marúbo, as outras línguas pano já neste app.',
  cognateNote:
    'O shipibo-konibo não é parente do português: é uma língua indígena viva da família pano, nativa das regiões de Ucayali e Loreto, no leste do Peru — uma família totalmente diferente da indo-europeia (a mesma do português). Dentro da própria família pano, o shipibo-konibo é parente do huni kuĩ (cbs), a outra língua pano já neste app — mas um parente distante, não um dialeto do mesmo idioma: as duas línguas têm gramáticas e vocabulários próprios, e cada palavra deste curso foi conferida em fontes específicas do shipibo-konibo, nunca copiada do huni kuĩ por semelhança. Ainda assim, duas semelhanças concretas valem a pena notar, já que apareceram de forma independente nas fontes de cada idioma: o pronome de primeira pessoa (“eu”) tem a mesma raiz “ɨ” nas duas línguas, e o numeral “dois” é idêntico nas duas (“rabɨ”) — prováveis heranças de um ancestral comum da família pano. Já o numeral “três” mostra o oposto: “kimiša” no shipibo-konibo e “tsamĩ” no huni kuĩ, palavras totalmente diferentes. As duas línguas também compartilham traços gramaticais de família: o alinhamento ergativo (uma marca para o sujeito de verbos sem objeto, outra para o sujeito de verbos com objeto) — mantido de forma consistente no shipibo-konibo, enquanto outras línguas pano o misturam com outros padrões (ergatividade cindida, segundo Valenzuela, Pilar, 2000) — e a evidencialidade, a marcação gramatical da fonte de uma informação: o shipibo-konibo tem o sufixo reportativo “-ronki” (Valenzuela, 2003), e o huni kuĩ, de forma parecida mas não idêntica, distingue no verbo uma informação certa de um relato de terceiros com os sufixos “-kiki”/“-kiaki” (ver a aba Gramática deste curso e a do huni kuĩ) — a mesma área da gramática resolvida por sufixos diferentes em cada língua, não uma regra ou palavra compartilhada.',
};
