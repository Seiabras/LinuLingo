/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaIt, wordToIpaIt } from './ipa-it';

// dicionário mínimo com a grafia dos dicionários italianos (tônica e timbre)
const LEX = {
  bene: 'bène',
  casa: 'càsa',
  tavolo: 'tàvolo',
  zero: 'ẓèro',
  pizza: 'pìzza',
  perché: 'perché',
  città: 'città',
  buono: 'buòno',
  figlio: 'fìglio',
  scienza: 'sciènza',
  ciao: 'ciào',
  giorno: 'giórno',
  famiglia: 'famìglia',
  parlano: 'pàrlano',
  gnocchi: 'gnòcchi',
  pesce: 'pésce',
  come: 'cóme',
  stai: 'stài',
  grazie: 'gràzie',
  sbaglio: 'sbàglio',
  aereo: 'aèreo',
  ragazzo: 'ragàzzo',
  vino: 'vìno',
  libro: 'lìbro',
  amico: 'amìco',
  acqua: 'àcqua',
  mai: 'mài',
  uomo: 'uòmo',
  piede: 'piède',
  chiesa: 'chièsa',
  mangiare: 'mangiàre',
  anno: 'ànno',
};

const cases: [string, string][] = [
  ['bene', 'ˈbɛːne'],
  ['casa', 'ˈkaːza'],
  ['tavolo', 'ˈtaːvolo'],
  ['zero', 'ˈd͡zɛːro'],
  ['pizza', 'ˈpitt͡sa'],
  ['perché', 'perˈke'],
  ['città', 't͡ʃitˈta'],
  ['buono', 'ˈbwɔːno'],
  ['figlio', 'ˈfiʎʎo'],
  ['scienza', 'ˈʃɛnt͡sa'],
  ['ciao', 'ˈt͡ʃaːo'],
  ['giorno', 'ˈd͡ʒorno'],
  ['famiglia', 'faˈmiʎʎa'],
  ['parlano', 'ˈparlano'],
  ['gnocchi', 'ˈɲɔkki'],
  ['pesce', 'ˈpeʃʃe'],
  ['grazie', 'ˈgratt͡sje'],
  ['sbaglio', 'ˈzbaʎʎo'],
  ['ragazzo', 'raˈgatt͡so'],
  ['libro', 'ˈliːbro'],
  ['acqua', 'ˈakkwa'],
  ['uomo', 'ˈwɔːmo'],
  ['piede', 'ˈpjɛːde'],
  ['chiesa', 'ˈkjɛːza'],
  ['mangiare', 'manˈd͡ʒaːre'],
  ['anno', 'ˈanno'],
  // sem dicionário: penúltima, e/o fechados
  ['parola', 'paˈroːla'],
  ['studente', 'stuˈdente'],
];

test('palavras do italiano em IPA', () => {
  for (const [w, ipa] of cases) assert.equal(wordToIpaIt(w, LEX), ipa, w);
});

test('frases: elisão com apóstrofo e monossílabos', () => {
  assert.equal(toIpaIt('Ciao, come stai?', LEX), '[ˈt͡ʃaːo ˈkoːme stai̯]');
  assert.equal(toIpaIt('L’amico beve l’acqua.', LEX), '[laˈmiːko ˈbeːve ˈlakkwa]');
});
