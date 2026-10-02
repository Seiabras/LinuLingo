import type { LanguagePack } from '../types';
import { VOCAB_NV } from './vocabulario';
import { UNITS_NV } from './curriculo';
import { GRAMMAR_NV } from './gramatica';
import { STORIES_NV } from './historias';
import { COMMUNITY_NV, ETYMOLOGY_NV, JOURNAL_PROMPTS_NV, SCENARIOS_NV, SHADOWING_NV } from './extras';

export const NAVAJO: LanguagePack = {
  code: 'nv',
  name: 'Navajo',
  // “Diné Bizaad” (“a língua do povo”) é a autodesignação confirmada pela Wikipédia em inglês e pelo
  // Wiktionary; o governo da Nação Navajo também usa “Naabeehó bizaad” como nome oficial da língua.
  nativeName: 'Diné Bizaad',
  // a Nação Navajo fica nos Estados Unidos (Arizona, Novo México e Utah).
  flag: '🇺🇸',
  lineage: {
    family: 'Na-Dené',
    branches: ['Atabascano (Dené)', 'Atabascano meridional (apachiano)'],
    region: 'Sudoeste dos Estados Unidos — Nação Navajo (Arizona, Novo México e Utah)',
    writing:
      'Alfabeto latino, com vogais nasalizadas marcadas por um gancho (ogonek: ą, ę, į, ǫ), tom alto marcado por acento agudo (tom baixo sem marca), vogais longas escritas em dobro (aa, ee, ii, oo) e o apóstrofo (ʼ) como letra própria para a oclusiva glotal e as consoantes ejetivas.',
  },
  // nenhum serviço de síntese de voz consultado tem voz dedicada ao navajo: 'nv-US' é só a melhor
  // aproximação de locale (ver a nota em `incomplete`); na prática, os áudios usam a voz do aparelho,
  // se houver, e provavelmente sem pronúncia correta do tom nem das consoantes próprias do navajo.
  speechLocale: 'nv-US',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 46 palavras, 4 tópicos de gramática, 2 histórias), com um vocabulário deliberadamente pequeno e 100% verificado: a morfologia verbal navajo é notoriamente complexa (prefixos que mudam a própria raiz do verbo, segundo a Wikipédia e o Wiktionary), e as fontes abertas consultadas trazem palavras isoladas e um punhado de saudações fixas com segurança, mas não frases completas de uso cotidiano com verbo conjugado — por isso preferimos um curso menor e honesto a inventar conjugações que nenhuma fonte confirma. Nenhum serviço de síntese de voz consultado tem voz para o navajo: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem encontradas.',
  },
  vocab: VOCAB_NV,
  units: UNITS_NV,
  etymology: ETYMOLOGY_NV,
  community: COMMUNITY_NV,
  scenarios: SCENARIOS_NV,
  stories: STORIES_NV,
  grammar: GRAMMAR_NV,
  journalPrompts: JOURNAL_PROMPTS_NV,
  shadowing: SHADOWING_NV,
  specialChars: ['ʼ', 'ł', 'ą', 'ę', 'į', 'ǫ'],
  // o navajo não marca gênero gramatical nos substantivos (masculino/feminino/neutro); o que a língua
  // tem é um sistema de quatro classificadores verbais (ver gramática), um fenômeno diferente, por
  // isso não é marcado aqui como gênero.
  genders: [],
  greeting: 'Yáʼátʼééh!',
  sampleSentence: 'Yáʼátʼééh! Diné bizaad.',
  phrases: {
    hi: 'Yáʼátʼééh!',
    thanks: 'Ahéheeʼ!',
    letsStart: ['Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ, ashdlaʼ!', 'Vamos contar até cinco em navajo!'],
  },
  formalMarkers:
    'As fontes consultadas não confirmam, em navajo, uma distinção simples entre tratamento formal e informal como o “tu”/“você” do português: o respeito (sobretudo a idosos) aparece mais na escolha de verbos inteiros e no comportamento do que num pronome à parte — por isso este curso não marca um contraste de registro que nenhuma fonte confirma.',
  cognateNote:
    'O navajo pertence à família na-dené, sem nenhum parentesco com línguas indo-europeias como o português: não espere reconhecer palavras navajo pela semelhança sonora ou escrita. Um dos poucos empréstimos documentados na direção oposta é “hogan” (a casa tradicional navajo), que o inglês tomou emprestado do navajo “hooghan”. O uso mais famoso do navajo fora da própria comunidade é um fato histórico, não linguístico: durante a Segunda Guerra Mundial, falantes navajo serviram como “code talkers”, usando a complexidade própria da língua — sem relação com nenhuma língua europeia — para criar um código que as forças do Eixo nunca conseguiram decifrar, documentado pela Marinha dos Estados Unidos e por museus como o Smithsonian.',
};
