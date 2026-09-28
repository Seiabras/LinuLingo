import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_FO } from './pronuncia';

/**
 * O feroês padrão das Ilhas Faroé. A escrita é uma só para todas as ilhas; as diferenças de
 * pronúncia entre Suðuroy, o norte e Tórshavn ficam nos sotaques.
 */
export const VARIANTS_FO: LanguageVariant[] = [
  {
    code: 'fo-FO',
    country: 'FRO',
    speechLocale: 'fo-FO',
    ipa: (t) => lexiconIpa(t, IPA_FO),
    name: 'Feroês das Ilhas Faroé',
    flag: '🇫🇴',
    summary: 'O padrão do app: o feroês escrito com a ortografia de 1846, a mesma em todas as ilhas, e a fala do dia a dia das Faroé.',
    card: {
      id: 'fo-fo-c1',
      title: 'Uma escrita para todas as ilhas',
      emoji: '🇫🇴',
      history:
        'O feroês descende do nórdico antigo levado às ilhas pelos colonos noruegueses na Era Viking, e é parente próximo do islandês e dos dialetos do oeste da Noruega. Depois da Reforma, o dinamarquês virou a língua da igreja, da escola e da administração, e por séculos o feroês viveu quase só na fala e nas baladas, as kvæði, cantadas na dança em roda. No fim do século XVIII, Jens Christian Svabo registrou baladas e palavras numa grafia que seguia a pronúncia. Em 1846, o pastor Venceslaus Ulricus Hammershaimb criou a ortografia que se usa até hoje: uma escrita etimológica, que olha para o nórdico antigo e não para o som de uma ilha só. Por isso ela une os dialetos: cada ilha lê a mesma palavra do seu jeito. O preço é a distância entre escrita e fala: o «ð» quase sempre não soa, «á» soa [ɔa] e «ei» soa [ai]. Com a autonomia de 1948, o feroês passou a ser a língua principal das ilhas; hoje quem acompanha a língua é o Málráðið, o conselho do idioma.',
      culture_tip:
        'Nas Faroé, praticamente todo mundo é bilíngue: o feroês é a língua de casa, da escola, do parlamento e da igreja, e o dinamarquês se aprende na escola desde cedo, porque as ilhas fazem parte do Reino da Dinamarca e muita gente estuda ou trabalha em Copenhague. Mesmo assim, o feroês é motivo de orgulho: em vez de importar palavras, a língua costuma criar as suas com raízes nórdicas, como «telda» (computador) e «tyrla» (helicóptero). Na hora de cumprimentar, basta um «Hey!», e ao reencontrar alguém se agradece pelo último encontro: «Takk fyri seinast!».',
      grammar_why:
        'O feroês guarda muito do nórdico antigo, como o islandês: (1) três gêneros, masculino, feminino e neutro; (2) quatro casos, nominativo, acusativo, dativo e genitivo, este último pouco usado na fala; (3) o artigo definido grudado no fim da palavra: «bátur → báturin» (barco → o barco); (4) ordem V2: o verbo conjugado é o segundo elemento da oração principal: «Í dag fari eg til Klaksvíkar»; (5) muitos verbos fortes, que mudam a vogal no passado. E a pronúncia pede atenção: a escrita mostra a história da palavra, não o som.',
      grammar_examples: [
        ['Hey! Hvussu gongur?', 'Oi! Tudo bem?'],
        ['Eg eiti Anna og búgvi í Havn.', 'Meu nome é Anna e eu moro em Tórshavn.'],
        ['Eg havi ein bát. Báturin er reyður.', 'Eu tenho um barco. O barco é vermelho.'],
        ['Í dag fari eg til Klaksvíkar.', 'Hoje eu vou para Klaksvík.'],
        ['Takk fyri seinast!', 'Obrigado pelo nosso último encontro!'],
      ],
      character_guide: null,
    },
  },
];
