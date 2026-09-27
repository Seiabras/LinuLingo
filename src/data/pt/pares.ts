import type { MinimalPairs } from '../types';

/** Pares mínimos da pronúncia de Portugal para quem fala o português do Brasil. */
export const PARES_PT: MinimalPairs = {
  contrasts: [
    {
      id: 'o-aberto',
      name: 'ó aberto × ô fechado',
      sounds: ['ɔ', 'o'],
      tip: 'Como no Brasil, o timbre do «o» tônico muda o sentido: avó × avô. Em Portugal há ainda pode [ˈpɔðɨ] (presente) × pôde [ˈpoðɨ] (passado), que se distinguem só pela boca mais aberta ou mais fechada.',
    },
    {
      id: 'e-aberto',
      name: 'é aberto × ê fechado',
      sounds: ['ɛ', 'e'],
      tip: 'O «é» abre a boca; o «ê» fecha. É a mesma diferença do Brasil, mas em Portugal as vogais em volta ficam tão curtas que a tônica é quase tudo o que se ouve.',
    },
    {
      id: 'a-tonico',
      name: 'á aberto × â fechado (falamos × falámos)',
      sounds: ['a', 'ɐ'],
      tip: 'Uma marca de Portugal: no presente, «falamos» tem o «a» fechado [ɐ]; no pretérito, «falámos» tem o «a» aberto [a] e leva acento na escrita. No Brasil as duas formas soam igual.',
    },
    {
      id: 'r-rr',
      name: 'r simples × rr forte',
      sounds: ['ɾ', 'ʁ'],
      tip: 'O «r» entre vogais é uma batida da língua (caro); o «rr» e o «r» do começo vêm da garganta em Lisboa [ʁ], parecido com o «r» carioca de «carro».',
    },
    {
      id: 's-z',
      name: 's surdo × z sonoro',
      sounds: ['s', 'z'],
      tip: 'Entre vogais, «ss» e «ç» soam [s] e o «s» sozinho soa [z]: caça × casa. Igual no Brasil, mas vale treinar o ouvido para a fala rápida de Portugal.',
    },
  ],
  pairs: [
    { contrast: 'o-aberto', a: ['avó', 'avó'], b: ['avô', 'avô'] },
    { contrast: 'o-aberto', a: ['pode', 'pode (presente)'], b: ['pôde', 'pôde (passado)'] },
    { contrast: 'e-aberto', a: ['pé', 'pé'], b: ['pê', 'a letra p'] },
    { contrast: 'e-aberto', a: ['sé', 'sé (catedral)'], b: ['sê', 'sê! (seja)'] },
    { contrast: 'a-tonico', a: ['falamos', 'falamos (agora)'], b: ['falámos', 'falamos (ontem)'] },
    { contrast: 'a-tonico', a: ['cantamos', 'cantamos (agora)'], b: ['cantámos', 'cantamos (ontem)'] },
    { contrast: 'r-rr', a: ['caro', 'caro'], b: ['carro', 'carro'] },
    { contrast: 'r-rr', a: ['muro', 'muro'], b: ['murro', 'soco'] },
    { contrast: 's-z', a: ['caça', 'caça'], b: ['casa', 'casa'] },
    { contrast: 's-z', a: ['assa', 'assa (no forno)'], b: ['asa', 'asa'] },
  ],
  sameSound: [
    { words: [['cozer', 'cozinhar'], ['coser', 'costurar']], note: 'Em Portugal as duas soam [kuˈzeɾ]: só o contexto separa «cozer o arroz» de «coser a camisa».' },
    { words: [['concerto', 'show de música'], ['conserto', 'reparo']], note: 'Mesma pronúncia dos dois lados do Atlântico; a escrita é que muda.' },
  ],
};
