import type { LanguageResources } from './tipos';

/**
 * Não há prova de proficiência padronizada de oromo (afaan oromoo): por isso a lista de provas fica
 * vazia, e as dicas explicam como medir e comprovar o nível. A lista de recomendações é curta porque
 * ficou só o que tem autoria e dados bem documentados.
 */
export const RECURSOS_OM: LanguageResources = {
  lang: 'om',
  exams: [],
  media: [
    {
      kind: 'filme',
      title: 'Faya Dayi',
      by: 'Jessica Beshir',
      year: '2021',
      level: 'B2',
      why: 'Documentário em preto e branco sobre o cultivo e o comércio do khat em Harar, no leste da Etiópia, e sobre os jovens que sonham em partir. Estreou no festival de Sundance.',
      accent: 'oromo do leste (Hararghe) e harari',
    },
    {
      kind: 'serie',
      title: 'Dramas da OBN',
      by: 'Oromia Broadcasting Network (OBN)',
      level: 'B1',
      why: 'A emissora pública da região de Oromia exibe novelas e séries em afaan oromoo, muitas delas publicadas no YouTube: o jeito mais fácil de ouvir o oromo do dia a dia com imagem.',
    },
    {
      kind: 'livro',
      title: 'A Bíblia em afaan oromoo',
      original: 'Macaafa Qulqulluu',
      by: 'Onesimos Nesib, com Aster Ganno (primeira tradução completa)',
      year: '1899',
      level: 'B2',
      why: 'A primeira Bíblia completa em oromo foi feita por um ex-escravizado oromo e impressa em 1899, ainda no fidel; as edições atuais usam o alfabeto latino. Como existe em português, dá para ler os dois textos lado a lado.',
    },
    {
      kind: 'musica',
      title: 'Canções de Ali Birra',
      by: 'Ali Birra',
      level: 'B1',
      why: 'A grande voz da música oromo desde os anos 1960, nascido em Dire Dawa; canta devagar e com dicção clara, bom para acompanhar a letra.',
    },
    {
      kind: 'musica',
      title: 'Canções de Hacaaluu Hundeessaa',
      by: 'Hacaaluu Hundeessaa (Hachalu Hundessa)',
      level: 'B2',
      why: 'Cantor cujas letras sobre terra, identidade e justiça viraram hinos dos protestos oromos dos anos 2010; foi assassinado em 2020. Músicas como “Maalan Jira” mostram o oromo poético de hoje.',
    },
    {
      kind: 'musica',
      title: 'Geerarsa',
      by: 'tradição oral oromo',
      level: 'B2',
      why: 'Canto tradicional de bravura e de louvor, parte da poesia oral oromo, com versos construídos em paralelo. Há muitas gravações e apresentações no YouTube.',
    },
    {
      kind: 'noticias',
      title: 'BBC News Afaan Oromoo',
      by: 'BBC World Service',
      level: 'B2',
      why: 'Notícias da Etiópia e do mundo em textos curtos e vídeos, em oromo padrão escrito com o alfabeto latino (qubee).',
    },
    {
      kind: 'noticias',
      title: 'OBN',
      by: 'Oromia Broadcasting Network',
      level: 'B2',
      why: 'A emissora pública da região de Oromia, com telejornais e programas em afaan oromoo, muitos deles no YouTube.',
    },
    {
      kind: 'ferramenta',
      title: 'Oromo-English Dictionary',
      by: 'Tilahun Gamta',
      year: '1989',
      level: 'A2',
      why: 'Dicionário oromo–inglês de referência, organizado por um estudioso oromo; bom para as palavras do dia a dia.',
    },
    {
      kind: 'ferramenta',
      title: 'Oromo Dictionary',
      by: 'Gene B. Gragg',
      year: '1982',
      level: 'B1',
      why: 'Dicionário oromo–inglês acadêmico, útil para conferir sentidos e exemplos de uso.',
    },
    {
      kind: 'ferramenta',
      title: 'Google Tradutor',
      by: 'Google',
      level: 'A1',
      why: 'Traduz do e para o oromo desde 2022. A qualidade ainda é irregular, então use para ter uma ideia do sentido, nunca como modelo de frase.',
    },
    {
      kind: 'ferramenta',
      title: 'Wikipedia em afaan oromoo',
      by: 'voluntários',
      level: 'B1',
      why: 'Artigos escritos por falantes: leia sobre temas que você já conhece em português, e o contexto ajuda a adivinhar as palavras.',
    },
    {
      kind: 'ferramenta',
      title: 'Forvo',
      by: 'comunidade Forvo',
      level: 'A1',
      why: 'Pronúncias de palavras gravadas por falantes nativos, úteis para ouvir as vogais longas e as consoantes com estalo.',
    },
  ],
  tips: [
    'Não existe prova padronizada de oromo. Para comprovar o nível, o caminho são cursos: universidades da Etiópia, como a de Adis Abeba, têm departamentos de afaan oromoo. Se precisar de um certificado de fala para trabalho, pergunte à Language Testing International, que aplica a entrevista oral da ACTFL, se há avaliador de oromo. Sem prova, grave-se lendo e conversando todo mês para acompanhar o progresso.',
    "O oromo usa o alfabeto latino, chamado qubee, adotado oficialmente em 1991. Algumas letras têm valor diferente do português: “c” é um “tch” com estalo, “x” é um “t” com estalo, “q” é um “k” com estalo, “dh” é um “d” dito puxando o ar para dentro, “ny” soa como “nh” e o apóstrofo marca uma pequena parada na garganta, como em “har'a” (hoje).",
    'Vogal dobrada é vogal longa, e consoante dobrada se segura um instante; as duas coisas mudam o sentido das palavras. Em “akkam?” (como vai?), o “k” é dobrado; em “nagaa” (paz), o último “a” é longo. Leia devagar e respeite as duplas.',
    'Cumprimentos para começar: “Akkam?” (como vai?), “Nagaan bulte?” (passou bem a noite?, o nosso bom-dia) e “Galatoomi” (obrigado). Como no português, o verbo concorda com a pessoa, e há masculino e feminino: “inni” é ele, e “isheen”, ela.',
    'Para entender a cultura, conheça o gadaa, sistema tradicional oromo de governo por classes de idade, reconhecido pela UNESCO como patrimônio imaterial da humanidade em 2016, e o irreecha, festa de ação de graças celebrada à beira de lagos e rios. As duas palavras aparecem o tempo todo em música e em notícias.',
  ],
};
