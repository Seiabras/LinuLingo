import type { EtymologySeed } from '../types';

const c = (pt: string, es: string, it: string, fr: string) => [
  { lang: 'pt', word: pt },
  { lang: 'es', word: es },
  { lang: 'it', word: it },
  { lang: 'fr', word: fr },
];

/**
 * Árvore etimológica: de onde vem cada palavra e seus parentes nas línguas irmãs.
 * transparent = um falante de português reconhece sem estudar.
 */
export const ETYMOLOGY_RO: EtymologySeed[] = [
  { word: 'apă', root_word: 'aqua', origin_language: 'Latim', cognates: c('água', 'agua', 'acqua', 'eau'), evolution_note: 'O «qu» latino virou «p» em romeno: aqua → apă. O mesmo aconteceu em equa → iapă (égua).', transparent: true },
  { word: 'pâine', root_word: 'panis', origin_language: 'Latim', cognates: c('pão', 'pan', 'pane', 'pain'), evolution_note: 'O «a» diante de «n» fechou-se em «â», um som típico do romeno.', transparent: true },
  { word: 'casă', root_word: 'casa', origin_language: 'Latim', cognates: c('casa', 'casa', 'casa', 'case (cabana)'), evolution_note: 'No latim clássico «casa» era uma cabana; a palavra nobre era «domus».', transparent: true },
  { word: 'lapte', root_word: 'lac, lactis', origin_language: 'Latim', cognates: c('leite', 'leche', 'latte', 'lait'), evolution_note: 'O grupo «ct» virou «pt» em romeno: lactem → lapte, noctem → noapte, octo → opt.', transparent: true },
  { word: 'noapte', root_word: 'nox, noctis', origin_language: 'Latim', cognates: c('noite', 'noche', 'notte', 'nuit'), evolution_note: 'Mesma regra de «lapte»: «ct» → «pt».', transparent: true },
  { word: 'om', root_word: 'homo, hominis', origin_language: 'Latim', cognates: c('homem', 'hombre', 'uomo', 'homme'), evolution_note: 'O «h» latino caiu, como em todas as línguas românicas.', transparent: true },
  { word: 'femeie', root_word: 'familia', origin_language: 'Latim', cognates: c('família', 'familia', 'famiglia', 'famille'), evolution_note: 'Curiosidade: a palavra para «família» passou a significar «mulher», a dona da casa. Para «mulher/esposa» o latim tinha «mulier», que deu o nosso «mulher».', transparent: false },
  { word: 'bărbat', root_word: 'barbatus', origin_language: 'Latim', cognates: c('barbado', 'barbado', 'barbato', 'barbu'), evolution_note: '«Barbatus» significava «barbudo», e o homem virou «o de barba». (O Linu é um pinguim-de-barbicha, então aprova. 🐧)', transparent: false },
  { word: 'frate', root_word: 'frater', origin_language: 'Latim', cognates: c('frade', 'fraile', 'fratello', 'frère'), evolution_note: 'Em português «frater» ficou só para o religioso (frade), e «irmão» veio de «germanus».', transparent: false },
  { word: 'soră', root_word: 'soror', origin_language: 'Latim', cognates: c('sóror', 'sor', 'sorella', 'sœur'), evolution_note: 'Assim como «frade», o português guardou «sóror» só para freiras.', transparent: false },
  { word: 'limbă', root_word: 'lingua', origin_language: 'Latim', cognates: c('língua', 'lengua', 'lingua', 'langue'), evolution_note: 'O «ng» virou «mb»: lingua → limbă.', transparent: true },
  { word: 'cuvânt', root_word: 'conventus', origin_language: 'Latim', cognates: c('convento', 'convento', 'convento', 'couvent'), evolution_note: 'De «assembleia, discurso» passou a «palavra». Em português, virou «convento».', transparent: false },
  { word: 'câine', root_word: 'canis', origin_language: 'Latim', cognates: c('cão', 'can', 'cane', 'chien'), evolution_note: 'Mesma evolução de «pâine»: «a + n» → «â».', transparent: true },
  { word: 'inimă', root_word: 'anima', origin_language: 'Latim', cognates: c('alma', 'alma', 'anima', 'âme'), evolution_note: 'A «alma» virou o «coração». Em português, «ânimo» é da mesma família.', transparent: false },
  { word: 'ochi', root_word: 'oculus', origin_language: 'Latim', cognates: c('olho', 'ojo', 'occhio', 'œil'), evolution_note: 'O latim popular dizia «oclus»; o «cl» virou «chi» [ki].', transparent: false },
  { word: 'mână', root_word: 'manus', origin_language: 'Latim', cognates: c('mão', 'mano', 'mano', 'main'), evolution_note: 'O «a» diante de «n» fechou-se em «â».', transparent: true },
  { word: 'cap', root_word: 'caput', origin_language: 'Latim', cognates: c('cabo / cabeça', 'cabo / cabeza', 'capo', 'chef'), evolution_note: 'Em português, «capital» e «capitão» são primos: todos «a cabeça» de algo.', transparent: false },
  { word: 'zi', root_word: 'dies', origin_language: 'Latim', cognates: c('dia', 'día', 'dì', 'di (lundi)'), evolution_note: 'O «d» diante de «i» virou «z»: dies → zi.', transparent: false },
  { word: 'a ști', root_word: 'scire', origin_language: 'Latim', cognates: c('ciente / ciência', 'ciencia', 'scienza', 'science'), evolution_note: 'O verbo «saber» do latim clássico; o português usou «sapere» (saber), e «scire» ficou em «ciência».', transparent: false },
  { word: 'dor', root_word: 'dolus', origin_language: 'Latim', cognates: c('dor', 'dolor', 'dolore', 'douleur'), evolution_note: 'Mesma raiz da nossa «dor», mas passou a significar saudade e desejo.', transparent: false },
  { word: 'biserică', root_word: 'basilica', origin_language: 'Latim (do grego)', cognates: c('basílica', 'basílica', 'basilica', 'basilique'), evolution_note: 'Os primeiros cristãos da Dácia usaram «basilica», e não «ecclesia» (que deu «igreja»).', transparent: false },
  { word: 'a lua', root_word: 'levare', origin_language: 'Latim', cognates: c('levar', 'llevar', 'levare', 'lever'), evolution_note: '«Levantar» virou «pegar, tomar»: levare → lua.', transparent: false },
  { word: 'vin', root_word: 'vinum', origin_language: 'Latim', cognates: c('vinho', 'vino', 'vino', 'vin'), evolution_note: 'Os Cárpatos fazem vinho desde antes dos romanos.', transparent: true },
  { word: 'soare', root_word: 'sol, solis', origin_language: 'Latim', cognates: c('sol', 'sol', 'sole', 'soleil'), evolution_note: 'Veio da forma popular «solem», com «o» ditongado em «oa».', transparent: true },
  { word: 'munte', root_word: 'mons, montis', origin_language: 'Latim', cognates: c('monte', 'monte', 'monte', 'mont'), evolution_note: 'O «o» diante de «n» virou «u»: montem → munte.', transparent: true },
  { word: 'mare', root_word: 'mare', origin_language: 'Latim', cognates: c('mar', 'mar', 'mare', 'mer'), evolution_note: 'Igual ao latim. O adjetivo «mare» (grande) vem de outra palavra latina, «mas, maris» (macho, forte).', transparent: true },
  { word: 'carte', root_word: 'charta', origin_language: 'Latim (do grego)', cognates: c('carta', 'carta', 'carta', 'carte'), evolution_note: 'Falso amigo! «Carte» não é carta: é LIVRO. A carta que se manda é «scrisoare».', transparent: false },
  { word: 'a merge', root_word: 'mergere', origin_language: 'Latim', cognates: c('imergir', 'sumergir', 'immergere', 'immerger'), evolution_note: '«Mergulhar, afundar» virou «ir, andar». Em português ficou em «imergir» e «submergir».', transparent: false },
  { word: 'a plăcea', root_word: 'placere', origin_language: 'Latim', cognates: c('prazer', 'placer', 'piacere', 'plaire'), evolution_note: '«Îmi place» funciona como «me agrada», assim como o espanhol «me gusta».', transparent: false },
  { word: 'a vedea', root_word: 'videre', origin_language: 'Latim', cognates: c('ver', 'ver', 'vedere', 'voir'), evolution_note: 'Parente de «vídeo» e «evidente».', transparent: true },
  { word: 'a veni', root_word: 'venire', origin_language: 'Latim', cognates: c('vir', 'venir', 'venire', 'venir'), evolution_note: 'Parente de «evento», «convenção» e «aventura».', transparent: true },
  { word: 'a face', root_word: 'facere', origin_language: 'Latim', cognates: c('fazer', 'hacer', 'fare', 'faire'), evolution_note: 'Parente de «fábrica», «fato» e «fácil».', transparent: true },
  { word: 'masă', root_word: 'mensa', origin_language: 'Latim', cognates: c('mesa', 'mesa', 'mensa', '—'), evolution_note: 'Como no português, «masă» é mesa e também refeição.', transparent: true },
  { word: 'urs', root_word: 'ursus', origin_language: 'Latim', cognates: c('urso', 'oso', 'orso', 'ours'), evolution_note: 'A Romênia tem a maior população de ursos-pardos da Europa fora da Rússia.', transparent: true },
  { word: 'pădure', root_word: 'padulem (palus)', origin_language: 'Latim', cognates: c('paul (brejo)', 'padul', 'padule', '—'), evolution_note: '«Pântano» virou «floresta». Em português, «paul» ainda é um terreno alagado.', transparent: false },
  { word: 'a iubi', root_word: 'ljubiti', origin_language: 'Eslavo antigo', cognates: [{ lang: 'ru', word: 'любить (lyubit)' }, { lang: 'pl', word: 'lubić' }, { lang: 'cs', word: 'líbit' }], evolution_note: 'O verbo «amar» veio dos vizinhos eslavos, e o latim «amare» se perdeu.', transparent: false },
  { word: 'prieten', root_word: 'prijatelĭ', origin_language: 'Eslavo antigo', cognates: [{ lang: 'ru', word: 'приятель (priyatel)' }, { lang: 'pl', word: 'przyjaciel' }, { lang: 'sr', word: 'prijatelj' }], evolution_note: 'Cerca de 15% do vocabulário romeno tem origem eslava.', transparent: false },
  { word: 'a plăti', root_word: 'platiti', origin_language: 'Eslavo antigo', cognates: [{ lang: 'ru', word: 'платить (platit)' }, { lang: 'bg', word: 'плащам (plashtam)' }], evolution_note: 'Dinheiro e comércio trouxeram palavras eslavas.', transparent: false },
  { word: 'drum', root_word: 'drómos', origin_language: 'Grego', cognates: [{ lang: 'pt', word: 'hipódromo / aeródromo' }, { lang: 'el', word: 'δρόμος (drómos)' }], evolution_note: 'Chegou pelo grego bizantino. Em português aparece nos compostos «-dromo».', transparent: false },
  { word: 'brânză', root_word: '— (substrato dácio, provável)', origin_language: 'Dácio', cognates: [{ lang: 'sq', word: 'brëndës (prov. aparentado)' }], evolution_note: 'Uma das ~100 palavras que provavelmente vêm da língua dos dácios, falada antes dos romanos.', transparent: false },
  { word: 'copil', root_word: '— (substrato pré-romano, provável)', origin_language: 'Dácio', cognates: [{ lang: 'sq', word: 'kopil' }], evolution_note: 'Tem parente no albanês, sinal de uma herança anterior ao latim.', transparent: false },
];
