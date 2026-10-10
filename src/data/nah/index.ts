import type { LanguagePack } from '../types';
import { VOCAB_NAH } from './vocabulario';
import { UNITS_NAH } from './curriculo';
import { GRAMMAR_NAH } from './gramatica';
import { STORIES_NAH } from './historias';
import { COMMUNITY_NAH, ETYMOLOGY_NAH, JOURNAL_PROMPTS_NAH, SCENARIOS_NAH, SHADOWING_NAH } from './extras';
import { ACCENTS_NAH } from './sotaques';

export const NAUATLE: LanguagePack = {
  code: 'nah',
  name: 'Náuatle',
  // "Nāhuatl" é a grafia do próprio nome da língua (com o macron do "ā" marcando a vogal longa, na
  // ortografia moderna ACK usada neste curso); em português, o nome do idioma é "náuatle".
  nativeName: 'Nāhuatl',
  flag: '🇲🇽',
  lineage: {
    family: 'Uto-asteca',
    branches: ['Aztecano (náuatle/nauano)', 'Aztecano geral', 'Náuatle clássico'],
    region: 'Vale do México e México central, séculos XVI–XVIII (língua de prestígio dos mexicas/astecas; as variedades modernas, descendentes dela, ainda são faladas hoje por cerca de 1,8 milhão de pessoas)',
    writing:
      'Alfabeto latino, na ortografia moderna ACK (Andrews–Campbell–Karttunen, a mesma do Wiktionary e do dicionário de Frances Karttunen): macron para vogal longa (ā, ē, ī, ō) e “h” para o saltillo (oclusiva glotal). Antes do contato espanhol, os mexicas registravam informação com um sistema próprio de pictogramas e ideogramas, de capacidade silábica limitada.',
  },
  // ISO 639-2/3 (nah é o código de macrolíngua para o náuatle; não existe um código 639-1 de duas
  // letras). Nenhum sistema operacional comum traz voz sintetizada para o náuatle — a leitura em voz
  // alta pode não funcionar na maioria dos aparelhos (ver nota em `incomplete`).
  speechLocale: 'nah',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 60 palavras, 4 tópicos de gramática, 2 histórias). O náuatle tem muitas variedades modernas, por vezes pouco inteligíveis entre si (da Huasteca, de Puebla, do Istmo...): este curso ensina o náuatle CLÁSSICO — a língua documentada em Tenochtitlan e no Vale do México entre cerca de 1540 e 1770 —, escolhido por ser, de longe, a variedade mais estudada e com mais dicionários e gramáticas disponíveis (o vocabulário de Alonso de Molina, de 1555/1571, e o “An Analytical Dictionary of Nahuatl” de Frances Karttunen, de 1992, entre outros). Não é a língua nativa de ninguém hoje: é a variedade histórica dos códices, das crônicas coloniais e da poesia asteca. A maioria dos aparelhos também não tem voz sintetizada para o náuatle, então a leitura em voz alta pode não soar certa ou pode faltar. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NAH,
  units: UNITS_NAH,
  etymology: ETYMOLOGY_NAH,
  community: COMMUNITY_NAH,
  scenarios: SCENARIOS_NAH,
  stories: STORIES_NAH,
  accents: ACCENTS_NAH,
  grammar: GRAMMAR_NAH,
  journalPrompts: JOURNAL_PROMPTS_NAH,
  shadowing: SHADOWING_NAH,
  specialChars: ['ā', 'ē', 'ī', 'ō'],
  // o náuatle clássico não marca gênero gramatical: não há artigos nem concordância de gênero nos
  // substantivos e adjetivos (a língua distingue, sim, "animado" de "inanimado" para fins de plural,
  // mas isso não é o mesmo que o gênero masculino/feminino/neutro do português).
  genders: [],
  greeting: 'Niltze',
  sampleSentence: 'Niltze! Nicualli. Nicnequi niccua tlaxcalli!',
  phrases: {
    hi: 'Niltze!',
    thanks: 'Tlazohcamati!',
    letsStart: ['Niltze!', 'Vamos começar!'],
  },
  formalMarkers:
    'O náuatle clássico não separa um “tu” íntimo de um “você” educado, como o espanhol ou o português — mas tem um sistema de respeito bem documentado: o sufixo “-tzin”, colado no final da palavra, marca reverência por quem se fala ou de quem se fala (ex.: “motōcatzin”, “o seu nome”, com respeito, em vez do simples “motoca”). É um pouco como os pronomes de tratamento do português, só que embutido na própria palavra em vez de ser uma palavra à parte.',
  cognateNote:
    'O náuatle não é parente do português — é uma língua indígena da família uto-asteca, de uma origem completamente diferente das línguas europeias —, mas emprestou várias palavras PARA o espanhol colonial e, por ele, para o português: “tomate” (de “tomatl”), “abacate” (de “āhuacatl”, via o espanhol “aguacate”) e “coiote” (de “coyōtl”) são palavras do dia a dia que vieram direto do náuatle clássico. Já “cacau” vem de “cacahuatl”, mas a história da palavra “chocolate” é mais incerta do que parece: a explicação popular de que ela viria de um “xocolātl” (água amarga) não é aceita por boa parte dos especialistas, porque essa forma nunca aparece nos textos náuatles mais antigos — aqui a etimologia conta a versão que as fontes realmente sustentam, não a mais repetida.',
};
