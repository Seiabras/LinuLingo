import type { LanguagePack } from '../types';
import { VOCAB_KAY } from './vocabulario';
import { UNITS_KAY } from './curriculo';
import { GRAMMAR_KAY } from './gramatica';
import { STORIES_KAY } from './historias';
import { COMMUNITY_KAY, ETYMOLOGY_KAY, JOURNAL_PROMPTS_KAY, SCENARIOS_KAY, SHADOWING_KAY } from './extras';

export const KAMAIURA: LanguagePack = {
  code: 'kay',
  name: 'Kamaiurá',
  // «kamajura» é como o nome do povo aparece nas próprias frases em kamaiurá da gramática de Seki
  // (2000): (798a) «kamajura a-ko», eu sou kamaiurá; (87) «kamajura r-etam-a», a aldeia kamaiurá. Seki
  // (p. 34) conta também que o povo passou a se chamar Apyap desde a passagem pelo Morená — dúvida para
  // o dono do projeto: qual dos dois usar aqui.
  nativeName: 'Kamajura',
  // Parque Indígena do Xingu (MT) — bandeira do Brasil, na falta de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/kama1373): Tupian > Eastern Tupian >
    // Maweti-Guarani > Aweti-Guarani > Tupi-Guarani > Kamayurá. Dentro do tupi-guarani, Rodrigues
    // (1985) pôs o kamaiurá como único membro do subconjunto VII (Seki 2000, pp. 44–45). O primeiro
    // ramo fica «Tupi-guarani», como nos outros pacotes da família (gn, gun, kgk, nhd, oldp1258), para o
    // seletor agrupar o kamaiurá com eles.
    branches: ['Tupi-guarani', 'Kamaiurá (subconjunto VII, ramo próprio)'],
    region:
      'Alto Xingu, no Parque Indígena do Xingu (Mato Grosso, Brasil): aldeias perto da lagoa Ipavu (Ypawu), na região dos formadores do rio Xingu, e também no Morená; cerca de 710 pessoas (Sesai, 2020)',
    writing:
      'Alfabeto latino, na transcrição da linguista Lucy Seki (2000): apóstrofo para a oclusiva glotal, “y” para a vogal central /ɨ/, “ŋ” para o som de “ng”, “ts”, “kw” e “hw” como sons únicos e til nas vogais nasais (ã, ẽ, ĩ, õ, ũ, ỹ); o acento cai quase sempre na última sílaba e por isso não é marcado',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o kamaiurá: os áudios usam a voz do
  // aparelho, se houver (mesma solução dos outros idiomas indígenas sem voz sintética, como mav e gun).
  speechLocale: 'kay',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com 77 palavras, 4 tópicos de gramática e 2 histórias), no kamaiurá, a língua do povo Kamaiurá, que vive perto da lagoa Ipavu, no Parque Indígena do Xingu (MT) — cerca de 710 pessoas em 2020. É da família tupi-guarani, como o guarani e o tupi antigo, mas forma sozinha um ramo próprio dentro dela. Palavras, grafia e gramática seguem a “Gramática do Kamaiurá” de Lucy Seki (Unicamp, 2000), e quase todas as frases do curso são exemplos tirados dessa gramática. A grafia é a da linguista; as escolas kamaiurá podem usar uma grafia um pouco diferente. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_KAY,
  units: UNITS_KAY,
  etymology: ETYMOLOGY_KAY,
  community: COMMUNITY_KAY,
  scenarios: SCENARIOS_KAY,
  stories: STORIES_KAY,
  grammar: GRAMMAR_KAY,
  journalPrompts: JOURNAL_PROMPTS_KAY,
  shadowing: SHADOWING_KAY,
  // apóstrofo (oclusiva glotal), ŋ e as vogais nasais que não estão todas no teclado português
  specialChars: ["'", 'ŋ', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ'],
  // sem gênero gramatical: o sexo de pessoas e bichos se diz com as palavras akwama'e (homem, macho) e
  // kujã (mulher, fêmea) depois do nome — «jawara kujã», onça fêmea (Seki 2000, p. 59).
  genders: [],
  greeting: "Erejo ko'yt?",
  sampleSentence: "Erejo ko'yt? Ije Linu. Kamajura ako!",
  phrases: {
    hi: "Erejo ko'yt?",
    // Seki não registra uma palavra de agradecimento: «aje» (está bem, aceitando um pedido, ex. 231) é
    // o mais próximo atestado de uma resposta gentil.
    thanks: 'Aje!',
    // «aha ko'yt», já vou / estou indo (ex. 214), usado como convite para começar.
    letsStart: ["Aha ko'yt!", 'Já vou! (usado aqui como convite para começar)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há um pronome de respeito separado, como “o senhor”: “ene” (você) serve para qualquer pessoa. O que muda é outra coisa: várias partículas do fim da frase têm uma forma usada por homens e outra por mulheres — o homem diz “wa”, “pa”, “kwãj”; a mulher diz “ra\'e”, “ma\'e”, “kyn”.',
  cognateNote:
    'O kamaiurá não é parente do português, mas é parente próximo de línguas que deram muitas palavras ao português do Brasil: é da família tupi-guarani, a mesma do tupi antigo da costa e do guarani. Por isso há primos fáceis de reconhecer — “jakare” (jacaré), “tatu”, “paje” (pajé) —, que o português recebeu do tupi antigo e o kamaiurá herdou direto das raízes comuns. Outras vezes o parentesco está escondido: a onça, “jawat”, é prima do “jaguar”. Dentro da família, o kamaiurá chama a atenção por guardar as consoantes no fim das palavras (kwat, sol; jawat, onça), que o guarani perdeu (kuarahy, jagua). E, para coisas que chegaram de fora, muitas vezes cria palavras novas com as próprias raízes em vez de copiar o português: o relógio é “kwara ra\'aŋap”, a imagem do sol.',
};
