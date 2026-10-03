import type { LanguagePack } from '../types';
import { VOCAB_HT } from './vocabulario';
import { UNITS_HT } from './curriculo';
import { GRAMMAR_HT } from './gramatica';
import { STORIES_HT } from './historias';
import { COMMUNITY_HT, ETYMOLOGY_HT, JOURNAL_PROMPTS_HT, SCENARIOS_HT, SHADOWING_HT } from './extras';

export const CRIOULO_HAITIANO: LanguagePack = {
  code: 'ht',
  name: 'Crioulo haitiano',
  nativeName: 'Kreyòl ayisyen',
  flag: '🇭🇹',
  lineage: {
    // A classificação genealógica de crioulos é debatida entre linguistas: a maior parte do vocabulário
    // do crioulo haitiano vem do francês do século XVIII, mas a gramática é própria — marcadores de
    // tempo/aspecto/modo antes do verbo (“te”, “ap”, “pral”), nenhuma conjugação verbal por pessoa,
    // pronome sempre obrigatório, plural marcado com “yo” depois do substantivo — e, segundo a
    // Wikipédia (artigo “Haitian Creole”), essa gramática “is that of a West African Volta–Congo
    // language branch, particularly the Fongbe and Igbo languages” (é a de um ramo Volta-Congo da
    // África Ocidental, sobretudo o fon e o igbo). Por isso crioulos costumam não entrar na árvore
    // genealógica da língua que deu o vocabulário (aqui, o francês): não são tratados nem como parentes
    // nem como não-parentes do Indo-europeu. O projeto já segue essa convenção noutros lugares (ver
    // `pcm/index.ts` e o comentário em `linguas-proprias.ts`: “a classificação dos crioulos é discutida:
    // não dizer nem que é parente nem que não é”), com a família própria “Crioulo de base inglesa” para
    // crioulos de léxico inglês. Aqui se segue o mesmo padrão com “Crioulo de base francesa” — nome já
    // usado em `linguas-proprias.ts` (entradas “fr-kreyol-ayisyen” e “fr-kreyol-antillais”) e em
    // `idiomas-mundo.ts` (crioulo haitiano, morisyen, crioulo reunionense, crioulo guianense, crioulo
    // francês seichelense…), mas que ainda não está na lista fechada de famílias de `conteudo.test.ts`
    // — a sessão que acoplar este pacote em `idiomas.ts` precisa acrescentá-la lá também, senão o teste
    // “seletor agrupa por família e ramo” quebra. No infobox da Wikipédia em inglês, o crioulo haitiano é
    // classificado como “French Creole” (fam1) > “Circum-Caribbean French” (fam2) — o grupo tipológico
    // dos crioulos franceses atlânticos/caribenhos.
    family: 'Crioulo de base francesa',
    branches: ['Crioulo francês', 'Francês circum-caribenho (Circum-Caribbean French)'],
    region: 'Haiti (língua nacional e oficial ao lado do francês desde a Constituição de 1987); falada também na diáspora haitiana, sobretudo nos Estados Unidos, no Canadá e na República Dominicana',
    writing: 'Alfabeto latino, ortografia fonêmica oficial desde 1979 (Institut Pédagogique National), com 32 símbolos; o acento grave (ˋ) só aparece em è e ò',
  },
  // não há garantia de voz “ht” em todo aparelho; “ht-HT” é o código BCP-47 mais correto para o crioulo
  // haitiano, e alguns sistemas (Google, iOS) vêm acrescentando voz e reconhecimento de voz em crioulo
  // haitiano nos últimos anos, mas a disponibilidade ainda é bem inconsistente entre aparelhos — valor
  // aproximado/não verificado neste ambiente, no mesmo espírito do fallback discutido em `pcm/index.ts`.
  speechLocale: 'ht-HT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 78 palavras, 4 tópicos de gramática, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HT,
  units: UNITS_HT,
  etymology: ETYMOLOGY_HT,
  community: COMMUNITY_HT,
  scenarios: SCENARIOS_HT,
  stories: STORIES_HT,
  grammar: GRAMMAR_HT,
  journalPrompts: JOURNAL_PROMPTS_HT,
  shadowing: SHADOWING_HT,
  specialChars: ['è', 'ò'],
  // sem gênero gramatical, como a maioria dos crioulos
  genders: [],
  greeting: 'Bonjou',
  sampleSentence: 'Bonjou! Mwen rele Linu. Nou ap aprann kreyòl ayisyen!',
  phrases: { hi: 'Bonjou!', thanks: 'Mèsi!', letsStart: ['Nou ale!', 'Vamos começar!'] },
  formalMarkers:
    'o crioulo haitiano não tem um pronome formal separado como o “tu”/“você” do português: “ou” serve tanto para situações informais quanto formais — o respeito se mostra pelo tom e pelo tratamento, não por trocar o pronome',
  cognateNote:
    'A maior parte do vocabulário do crioulo haitiano vem do francês do século XVIII — “dlo” é “de l’eau”, “lajan” é “l’argent”, “diri” é “du riz” (o artigo francês ficou grudado na palavra) — mas a gramática é outra: o verbo não muda por pessoa, e palavrinhas como “te”, “ap” e “pral” fazem o trabalho que em português fica na conjugação. E nem tudo vem do francês: “mayi” (milho) vem do taino, língua indígena do Haiti antes da colonização; “zonbi” vem de línguas bantas da África central, trazidas pelo tráfico transatlântico de pessoas escravizadas — a mesma raiz que deu “zumbi” em português.',
};
