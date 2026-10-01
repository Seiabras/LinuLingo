import type { LanguagePack } from '../types';
import { VOCAB_YRL } from './vocabulario';
import { UNITS_YRL } from './curriculo';
import { GRAMMAR_YRL } from './gramatica';
import { STORIES_YRL } from './historias';
import { COMMUNITY_YRL, ETYMOLOGY_YRL, JOURNAL_PROMPTS_YRL, SCENARIOS_YRL, SHADOWING_YRL } from './extras';

export const NHEENGATU: LanguagePack = {
  code: 'yrl',
  name: 'Nheengatu',
  // "Nheengatú" ("fala boa", de "nhe'eng", falar, + "katu", bom) é como os próprios falantes chamam
  // a língua — confirmado no Wiktionary em inglês (entrada "nheengatú", citando Marcel Twardowsky
  // Avila, "Dicionário Nheengatu-Português", 2021). "nheengatu", sem acento, é uma grafia alternativa
  // igualmente usada. NÃO confundir com "Abanheenga", o nome do tupi antigo colonial extinto (tpw) —
  // o nheengatu é uma língua à parte, viva, que descende dele.
  nativeName: 'Nheengatú',
  // território: o noroeste do Amazonas (bacia do rio Negro) — emoji de bandeira do Brasil, na falta
  // de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Língua geral amazônica (descendente do tupinambá/tupi antigo)'],
    region:
      'Noroeste do Amazonas, na bacia do rio Negro (São Gabriel da Cachoeira e arredores), com falantes também na Colômbia e na Venezuela, na fronteira com o Brasil; cooficial em São Gabriel da Cachoeira (AM) desde 2002 e uma das línguas indígenas cooficiais do estado do Amazonas desde 2023',
    writing:
      'Alfabeto latino, ortografia moderna (ver Eduardo de Almeida Navarro e Marcel Twardowsky Avila): nasalização com til nas vogais (ã ẽ ĩ õ ũ), “k” no lugar de “qu”/“c”, acento agudo marcando a sílaba tônica',
  },
  // BCP-47 na melhor tentativa: nenhum serviço de síntese de voz consultado (Wiktionary e Wikipédia
  // não mencionam TTS) tem voz para o nheengatu — os áudios usam a voz do aparelho, se houver.
  speechLocale: 'yrl',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 60 palavras, 4 tópicos de gramática, 2 histórias), no nheengatu moderno — a língua geral amazônica VIVA, falada hoje por milhares de pessoas no alto rio Negro (AM), diferente do tupi antigo colonial extinto (tpw) e do guarani paraguaio (gn), ainda que as três sejam da mesma família tupi-guarani. O vocabulário aqui é propositalmente menor que o dos outros pacotes: cada palavra foi conferida individualmente para o nheengatu (não reaproveitada do tupi antigo), principalmente no Wiktionary em inglês — cujas entradas citam o dicionário acadêmico de Marcel Twardowsky Avila (2021) e os cursos de Eduardo de Almeida Navarro. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_YRL,
  units: UNITS_YRL,
  etymology: ETYMOLOGY_YRL,
  community: COMMUNITY_YRL,
  scenarios: SCENARIOS_YRL,
  stories: STORIES_YRL,
  grammar: GRAMMAR_YRL,
  journalPrompts: JOURNAL_PROMPTS_YRL,
  shadowing: SHADOWING_YRL,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', "'"],
  // o nheengatu, como as outras línguas tupi-guarani deste app, não marca gênero gramatical nos
  // substantivos
  genders: [],
  greeting: 'Puranga ara!',
  sampleSentence: 'Puranga ara! Se era Linu. Yasemu!',
  phrases: {
    hi: 'Puranga ara!',
    // "kwekatú" (lit. "que esteja bem", do tupi antigo "e-îkobe-katu") é o "obrigado" documentado do
    // nheengatu — ver o relatório da entrega.
    thanks: 'Kwekatú!',
    // "yasemu" (nós saímos/vamos, 1ª pessoa do plural do verbo "semu") é a forma confirmada no
    // Wiktionary para convidar alguém a ir junto — não existe uma palavra nheengatu documentada igual
    // ao "vamos!" solto do português.
    letsStart: ['Yasemu!', 'Vamos!'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome ou prefixo “formal” separado no nheengatu: “indé” (tu/você) serve para qualquer pessoa, sem a distinção que o português marca com “você”/“o senhor” — um traço comum às línguas tupi-guarani deste app.',
  cognateNote:
    'O nheengatu não é parente do português: é uma língua indígena da família tupi-guarani, descendente do tupinambá (o tupi antigo colonial, hoje extinto, código tpw aqui no app) — não é a mesma língua, é a sua herdeira moderna, formada nos séculos XVII e XVIII como língua de contato entre colonizadores, missionários e povos indígenas na Amazônia. Por isso o parentesco com o português corre nos dois sentidos: de um lado, o nheengatu herdou do tupi antigo palavras como “pirá” (peixe), “tatú” (tatu) e “yakaré” (jacaré) — as mesmas raízes que o tupi antigo já tinha emprestado ao português colonial; do outro, por ter se formado bem depois da colonização, o nheengatu importou diretamente do português palavras do dia a dia como “manha” (mãe), “paya” (pai) e “mamãu” (mamão), adaptadas à fonética da língua. É diferente do guarani paraguaio (gn), primo do nheengatu na mesma família tupi-guarani, mas falado em outro país, com sua própria história de contato — não confundir as duas línguas, nem com o tupi antigo de onde o nheengatu vem.',
};
