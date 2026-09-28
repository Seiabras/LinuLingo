import type { MinimalPairs } from '../types';

/** Pares mínimos do finlandês para quem fala português (pronúncia de referência: o finlandês padrão, yleiskieli). */
export const PARES_FI: MinimalPairs = {
  contrasts: [
    {
      id: 'vogal-longa',
      name: 'vogal curta × vogal longa',
      sounds: ['u', 'uː'],
      tip: 'No finlandês, a vogal escrita dobrada dura mais ou menos o dobro do tempo, e isso sozinho muda a palavra: tuli (fogo) × tuuli (vento). Em português a duração não separa palavras, então o ouvido do brasileiro não liga para ela. Estique de verdade a vogal dupla, sem mudar o timbre e sem mexer na tônica, que continua na primeira sílaba.',
    },
    {
      id: 'consoante-dupla',
      name: 'consoante simples × consoante dupla',
      sounds: ['t', 'tː'],
      tip: 'A consoante escrita dobrada é segurada por um instante antes de soltar, como no italiano «notte»: mato (minhoca) × matto (tapete); tuli (fogo) × tulli (alfândega). Nos «kk», «pp» e «tt», feche a boca, faça uma pausinha muda e só então solte. Sem essa pausa, o finlandês ouve a palavra com a consoante simples.',
    },
    {
      id: 'ae-e',
      name: 'ä [æ] × e',
      sounds: ['æ', 'e'],
      tip: 'O «ä» é um «é» bem aberto, com a boca mais escancarada que no nosso «é», quase indo para o «a» (como o «a» do inglês «cat»). O «e» finlandês é um «ê» médio: väri (cor) × veri (sangue); väli (intervalo) × veli (irmão). Abra bem a boca no «ä».',
    },
    {
      id: 'ae-a',
      name: 'ä [æ] × a [ɑ]',
      sounds: ['æ', 'ɑ'],
      tip: 'Os pontinhos mudam tudo: o «a» é pronunciado lá atrás, como um «á» cheio; o «ä» é pronunciado na frente, quase um «é» bem aberto: tähti (estrela) × tahti (ritmo); sää (o tempo, o clima) × saa (recebe; pode). Não trate o «ä» como um «a» com enfeite.',
    },
    {
      id: 'y-u',
      name: 'y [y] × u',
      sounds: ['y', 'u'],
      tip: 'O «y» finlandês nunca é «i» nem «u»: diga «i» e, sem mexer a língua, faça bico com os lábios, como o «u» do francês. O «u» é o nosso «u» mesmo, com a língua recuada: syy (motivo) × suu (boca); kyy (víbora) × kuu (lua).',
    },
    {
      id: 'y-i',
      name: 'y [y] × i',
      sounds: ['y', 'i'],
      tip: 'Com os lábios em bico sai o «y»; com os lábios esticados, num sorriso, sai o «i». A língua fica no mesmo lugar: tyyli (estilo) × tiili (tijolo); kynä (caneta) × kinä (bate-boca).',
    },
    {
      id: 'oe-o',
      name: 'ö [ø] × o',
      sounds: ['ø', 'o'],
      tip: 'O «ö» é um «ê» com os lábios em bico; o «o» é o nosso «ô»: söi (comeu) × soi (tocou, soou); työ (trabalho) × tuo (aquele; traz). Para achar o «ö», diga «ê» e arredonde a boca sem mudar a língua.',
    },
    {
      id: 'r-h',
      name: 'r vibrante × h',
      sounds: ['r', 'h'],
      tip: 'Armadilha de carioca e de paulistano: o nosso «r» do começo da palavra («rato») sai na garganta e soa como o «h» finlandês. O «r» finlandês é sempre vibrado na ponta da língua, como o «r» de «caro» repetido algumas vezes: rinta (peito) × hinta (preço); rauta (ferro) × hauta (túmulo).',
    },
    {
      id: 'h-mudo',
      name: 'h × sem h',
      sounds: ['h', '∅'],
      tip: 'Em português o «h» é mudo, mas no finlandês ele sempre soa, como um sopro leve (o nosso «r» de «rato» bem suave). Se você não soprar, vira outra palavra: hovi (corte real) × ovi (porta); hauki (lúcio, um peixe) × auki (aberto).',
    },
  ],
  pairs: [
    { contrast: 'vogal-longa', a: ['tuli', 'fogo'], b: ['tuuli', 'vento'] },
    { contrast: 'vogal-longa', a: ['tili', 'conta (no banco)'], b: ['tiili', 'tijolo'] },
    { contrast: 'vogal-longa', a: ['sika', 'porco'], b: ['siika', 'corégono (um peixe de lago)'] },
    { contrast: 'consoante-dupla', a: ['tuli', 'fogo'], b: ['tulli', 'alfândega'] },
    { contrast: 'consoante-dupla', a: ['mato', 'minhoca'], b: ['matto', 'tapete'] },
    { contrast: 'consoante-dupla', a: ['kuka', 'quem'], b: ['kukka', 'flor'] },
    { contrast: 'ae-e', a: ['väri', 'cor'], b: ['veri', 'sangue'] },
    { contrast: 'ae-e', a: ['väli', 'intervalo, espaço entre'], b: ['veli', 'irmão'] },
    { contrast: 'ae-a', a: ['tähti', 'estrela'], b: ['tahti', 'ritmo, compasso'] },
    { contrast: 'ae-a', a: ['sää', 'o tempo, o clima'], b: ['saa', 'recebe; pode'] },
    { contrast: 'y-u', a: ['syy', 'motivo, causa'], b: ['suu', 'boca'] },
    { contrast: 'y-u', a: ['kyy', 'víbora'], b: ['kuu', 'lua; mês'] },
    { contrast: 'y-i', a: ['tyyli', 'estilo'], b: ['tiili', 'tijolo'] },
    { contrast: 'y-i', a: ['kynä', 'caneta, lápis'], b: ['kinä', 'bate-boca'] },
    { contrast: 'oe-o', a: ['söi', 'comeu'], b: ['soi', 'tocou, soou'] },
    { contrast: 'oe-o', a: ['työ', 'trabalho'], b: ['tuo', 'aquele; traz'] },
    { contrast: 'r-h', a: ['rinta', 'peito'], b: ['hinta', 'preço'] },
    { contrast: 'r-h', a: ['rauta', 'ferro'], b: ['hauta', 'túmulo'] },
    { contrast: 'h-mudo', a: ['hovi', 'corte (real)'], b: ['ovi', 'porta'] },
    { contrast: 'h-mudo', a: ['hauki', 'lúcio (um peixe)'], b: ['auki', 'aberto'] },
  ],
};
