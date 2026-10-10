import type { LanguagePack } from '../types';
import { VOCAB_FON } from './vocabulario';
import { UNITS_FON } from './curriculo';
import { GRAMMAR_FON } from './gramatica';
import { STORIES_FON } from './historias';
import { COMMUNITY_FON, ETYMOLOGY_FON, JOURNAL_PROMPTS_FON, SCENARIOS_FON, SHADOWING_FON } from './extras';
import { ACCENTS_FON } from './sotaques';

export const FON: LanguagePack = {
  code: 'fon',
  name: 'Fon',
  nativeName: 'Fɔ̀ngbè',
  flag: '🇧🇯',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Volta-Níger', 'Gbe'],
    region: 'Sul do Benin (região de Cotonou e Abomé, antigo Reino do Daomé), também Togo e Nigéria',
    writing: 'Alfabeto latino (ɖ, ɛ, ɔ; dígrafos gb, hw, kp, ny, xw; tons marcados por acentos)',
  },
  // «fon-BJ» é uma aproximação (código ISO 639-3 «fon» + Benin): não há confirmação de que algum
  // sistema de voz do aparelho tenha uma voz nativa para o fon — vale testar e ajustar depois.
  speechLocale: 'fon-BJ',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Criado a pedido de “língua geral de mina” — uma leitura desta sessão, não algo que o dono do projeto confirmou nessas palavras exatas: “mina” remete à Costa da Mina, e a tradição brasileira que ela aponta (tambor de mina, candomblé jeje, em São Luís do Maranhão) canta numa “língua jeje” que Ferretti (1996) e Pereira (1979) identificam como fon. Esse registro ritual brasileiro é fragmentário demais para ensinar com honestidade; o fon vivo do Benin — língua nacional com gramática e dicionário descritos (Lefebvre & Brousseau, 2002; Höftmann & Ahohounkpanzon, 2003) — foi o caminho concreto escolhido em vez dele (ver o porquê na nota de parentesco mais abaixo, nesta mesma tela). Só o nível A1 por enquanto (duas unidades, 60 palavras, 4 tópicos de gramática, 2 histórias): a pesquisa não achou fontes confiáveis para números além de “um” (ɖokpó), para cores, nem para saudações como “bom dia” ou “como vai” — por isso elas não entraram aqui, em vez de serem inventadas. Da A2.1 em diante, e essas lacunas de vocabulário, ficam para as próximas atualizações, se houver fontes melhores.',
  },
  vocab: VOCAB_FON,
  units: UNITS_FON,
  etymology: ETYMOLOGY_FON,
  community: COMMUNITY_FON,
  scenarios: SCENARIOS_FON,
  stories: STORIES_FON,
  accents: ACCENTS_FON,
  grammar: GRAMMAR_FON,
  journalPrompts: JOURNAL_PROMPTS_FON,
  shadowing: SHADOWING_FON,
  specialChars: ['ɖ', 'ɛ', 'ɔ', 'á', 'à', 'â', 'ǎ', 'ē', 'é', 'è', 'í', 'ì', 'ó', 'ò', 'ú', 'ù', 'ɛ́', 'ɛ̀', 'ɔ́', 'ɔ̀'],
  // línguas gbe (kwa/volta-níger) não marcam gênero gramatical — confirmado pela ausência de
  // qualquer marca de gênero nos substantivos e pronomes vistos nas fontes consultadas.
  genders: [],
  greeting: 'Kwabɔ',
  sampleSentence: 'Kwabɔ! Un ɖó wémà ɖokpó. Mǐ yì aximɛ!',
  phrases: { hi: 'Kwabɔ!', thanks: 'Un dó kú nú mi!', letsStart: ['Mǐ yì!', 'Vamos!'] },
  // nenhuma fonte consultada confirma marcas de formalidade (pronome ou partícula) em fon.
  formalMarkers: 'ainda não confirmado nas fontes consultadas',
  cognateNote:
    'O fon pertence ao ramo gbe da família Níger-Congo e não é parente do português — mas chegou ao Brasil por um caminho indireto. Falantes de línguas gbe (o fon e também o ewe e outros vizinhos) embarcados na Costa da Mina — o litoral de Gana, Togo e Benin de hoje — formaram, no Maranhão, a tradição do tambor de mina e do candomblé jeje, que até hoje canta numa “língua jeje” que Ferretti (1996) e Pereira (1979) identificam como fon: um paralelo ao que o iorubá é para o candomblé ketu (a entrada sobre o pajubá, em “Secretas e cifras”, já cita essa origem jeje/fon ao lado da iorubá, sem repetir os mesmos detalhes aqui). Uma palavra mostra esse parentesco com clareza: “vodum” — do fon “vodún”, “espírito, divindade” — é o nome da própria divindade cultuada na Casa das Minas de São Luís, e a mesma raiz chegou também ao vodu haitiano e ao inglês “voodoo”. Há ainda uma fonte colonial direta que reforça essa ligação: a “Obra Nova da Língua Geral de Mina”, escrita por António da Costa Peixoto em Ouro Preto (1741), descreve justamente uma língua gbe — próxima do fon e do gun — sob o nome de “língua geral de mina”, usada então no Brasil colonial.',
};
