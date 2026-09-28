/** Temas do diário (um por dia, em rodízio) e frases de shadowing. */
export const JOURNAL_PROMPTS_CA: [string, string][] = [
  ['Què has fet avui?', 'O que você fez hoje?'],
  ['Què has menjat avui?', 'O que você comeu hoje?'],
  ['Quin temps fa avui?', 'Como está o tempo hoje?'],
  ['Com et sents avui? Per què?', 'Como você se sente hoje? Por quê?'],
  ['Quins plans tens per al cap de setmana?', 'Que planos você tem para o fim de semana?'],
  ['Descriu casa teva.', 'Descreva a sua casa.'],
  ['Qui és el teu millor amic?', 'Quem é o seu melhor amigo?'],
  ['Què t\'agrada fer a la nit?', 'O que você gosta de fazer à noite?'],
  ['On t\'agradaria viatjar?', 'Para onde você gostaria de viajar?'],
  ['Què has après de nou aquesta setmana?', 'O que você aprendeu de novo esta semana?'],
  ['Descriu la teva família.', 'Descreva a sua família.'],
  ['A què et dediques o què estudies?', 'Em que você trabalha ou o que estuda?'],
];

/** Frases curtas com afirmações, perguntas de sim/não (sobem) e perguntas com «què, on…» (descem). */
export const SHADOWING_CA: [string, string][] = [
  ['Bon dia! Com estàs?', 'Bom dia! Como você está?'],
  ['Soc del Brasil.', 'Sou do Brasil.'],
  ['Parles català?', 'Você fala catalão?'],
  ['On és l\'estació?', 'Onde fica a estação?'],
  ['Té una habitació lliure?', 'O senhor tem um quarto livre?'],
  ['Et trobo a faltar.', 'Tenho saudade de você.'],
  ['Quant costa el bitllet?', 'Quanto custa a passagem?'],
  ['M\'agrada molt Catalunya.', 'Eu gosto muito da Catalunha.'],
  ['Puc pagar amb targeta?', 'Posso pagar com cartão?'],
  ['Moltes gràcies, bon dia!', 'Muito obrigado, um bom dia!'],
  ['Anem a la muntanya el cap de setmana?', 'Vamos à montanha no fim de semana?'],
  ['No ho entenc. Més a poc a poc, si us plau.', 'Não entendo. Mais devagar, por favor.'],
];
