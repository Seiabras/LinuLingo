import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do kichwa (10/10/2026): a serra e a Amazônia, com o kichwa unificado como padrão escrito
 * do curso; e a grafia antiga, à espanhola, como variante de escrita. Sem histórias nos dialetos, por
 * falta de fonte.
 *
 * Fontes: Wikipédia em inglês, «Kichwa language» (consultada em 10/10/2026), a tabela dos falares (a
 * mesma frase em cada um, na grafia do SIL, e no kichwa unificado); [KN] Kichwa.net, “Llika” (as regras
 * do kichwa unificado: o “k” no lugar de c, q e g; o “t” no lugar do “d”; o “p” no lugar de b, v e f;
 * só três vogais).
 */
export const VARIANTS_COLO1257: LanguageVariant[] = [
  dialetoPadrao(
    'colo1257-SERRA',
    'ECU',
    'Kichwa da serra',
    '🇪🇨',
    'O kichwa da serra equatoriana — Imbabura, Pichincha, Tungurahua, Chimborazo, Cañar e Loja —, onde estão os falares mais falados. O curso usa o kichwa unificado, o padrão escrito comum.',
  ),
  {
    code: 'colo1257-AMAZ',
    country: 'ECU',
    kind: 'dialeto',
    name: 'Kichwa da Amazônia',
    flag: '🇪🇨',
    summary: 'O kichwa da baixada amazônica, nas províncias de Napo e de Pastaza, falado também do lado peruano da fronteira.',
    pronunciation: [
      '“Chi” no lugar de “chay” (aquele).',
      'Sem o sopro de ar que a serra põe no “k”: “cari” (homem), onde Chimborazo diz “c’ari”.',
      'O “dia” é “punzha” ou “puncha”.',
    ],
    vocab: [
      ['chay', 'chi', 'aquele, aquela'],
      ['kari', 'cari', 'homem'],
      ['punlla', 'punzha, puncha', 'dia'],
    ],
  },
  {
    code: 'colo1257-antiga',
    country: 'ECU',
    kind: 'variante',
    name: 'Kichwa na grafia antiga',
    flag: '🔤',
    summary: 'Antes do kichwa unificado, o kichwa se escrevia com as letras e as regras do espanhol: “c”, “q” e “g” no lugar do “k”, “b”, “v” e “f” no lugar do “p”, “d” no lugar do “t”, “j” no lugar do “h”. Amostra: a frase “os homens vão vir em dois dias” no kichwa unificado e na grafia à espanhola do SIL, em cada falar.',
    vocab: [
      ['Chay karikunaka ishkay punllallapimi shamunka.', 'Chai jaricunaca ishcai punllapillami shamunga.', 'Os homens vão vir em dois dias (Imbabura)'],
      ['Chay karikunaka ishkay punllallapimi shamunka.', 'Chai c’aricunaca ishqui punllallapimi shamunga.', 'Os homens vão vir em dois dias (Chimborazo)'],
      ['Chay karikunaka ishkay punllallapimi shamunka.', 'Chi c’arigunaga ishqui p’unllallabimi shamunga.', 'Os homens vão vir em dois dias (Salasaca)'],
      ['Chay karikunaka ishkay punllallapimi shamunka.', 'Chi carigunaga ishcai punchallaimi shamunga.', 'Os homens vão vir em dois dias (Napo)'],
    ],
  },
];
