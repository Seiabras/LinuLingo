import type { MiniCourse } from './tipos';

/**
 * Mando’a, a língua dos mandalorianos em Star Wars — criada pela escritora Karen Traviss para os
 * seus romances (Republic Commando, Legends), não pelos filmes. Fonte principal: o dicionário
 * mandoa.org (“Original Mando’a dictionary provided by Karen Traviss”), mas o site é fã-mantido e
 * não cita romance+página por verbete — por isso este curso usa só as entradas mais seguras:
 * repetidas como tema central dos romances, ou citadas no artigo da própria Traviss “No Word for
 * Hero: The Mandalorian Language” (Star Wars Insider nº 86, fev/2006). “Ni ceta” (eu me rendo) e
 * “Oya” (grito de guerra/entusiasmo), citadas em fã-wikis sem confirmação romance+página, ficaram
 * de fora de propósito. Regras de gramática de fã (ordem de palavras, negação com “dar-”) também
 * ficaram de fora por não serem atribuíveis à própria Traviss — só o sufixo de plural (-e/-se, bem
 * repetido nas listas de vocabulário dela) entra, com a ressalva marcada na lição.
 */
export const CURSO_MANDOA: MiniCourse = {
  id: 'mandoa',
  name: 'Mando’a',
  emoji: '🛡️',
  kind: 'artificial',
  summary: 'A língua dos mandalorianos em Star Wars, criada por Karen Traviss para os seus romances: não existe palavra pra “herói”, porque esperar coragem de qualquer um é a norma, não uma excepção — e “família” (aliit) é definida como “mais que sangue”.',
  sources: [
    { label: 'mandoa.org — dicionário de Mando’a (base de Karen Traviss)', url: 'https://www.mandoa.org/dictionary.html' },
    { label: 'Wookieepedia — “Mando’a”', url: 'https://starwars.fandom.com/wiki/Mando%27a' },
  ],
  lessons: [
    {
      id: 'identidade',
      title: 'Ni, gar, vod',
      emoji: '🫂',
      intro: [
        'Karen Traviss criou o vocabulário-base do mando’a para os seus romances de Star Wars (Republic Commando, 2004-2006), não para os filmes — por isso é a escritora, não a Lucasfilm, quem é citada como fonte de cada palavra no dicionário comunitário mandoa.org. “Mando’a” é o próprio nome da língua; “Mando’ade” são os mandalorianos, literalmente “filhos de Mandalore”.',
        'Os pronomes mais básicos são “ni” (eu) e “gar” (você) — usados o tempo todo nos romances. E “vod” (irmão/irmã/camarada) é uma das palavras mais repetidas: é como os clones e os mandalorianos se chamam entre si, mesmo sem parentesco de sangue, pra marcar que são de uma mesma irmandade.',
      ],
      items: [
        { term: 'Mando’a', meaning: 'o nome da própria língua' },
        { term: 'Mando’ade', meaning: 'mandalorianos (literalmente “filhos de Mandalore”)' },
        { term: 'ni', meaning: 'eu' },
        { term: 'gar', meaning: 'você' },
        { term: 'vod', meaning: 'irmão/irmã/camarada (irmandade, mesmo sem parentesco de sangue)' },
        { term: 'buir', meaning: 'pai/mãe' },
      ],
      quiz: [
        { q: 'O que significa “vod”?', options: ['Irmão/irmã/camarada', 'Inimigo', 'Estrangeiro'], answer: 0, why: 'É como clones e mandalorianos se chamam entre si nos romances de Traviss, pra marcar irmandade mesmo sem parentesco de sangue.' },
        { q: 'Quem criou o mando’a?', options: ['A escritora Karen Traviss, para os seus romances', 'A Lucasfilm, para os filmes originais', 'Um comitê de linguistas da Disney'], answer: 0 },
      ],
    },
    {
      id: 'familia',
      title: 'Aliit ori’shya tal’din',
      emoji: '🛡️',
      intro: [
        '“Aliit” é clã/família, e a frase “Aliit ori’shya tal’din” (família é mais que sangue) é o credo mandaloriano mais citado nos romances: qualquer um pode entrar numa família mandaloriana por adoção ou escolha, não só por nascimento — um dos temas centrais da saga de Traviss.',
        '“Beskar” é o aço mandaloriano usado nas armaduras, quase indestrutível. Já “dar’manda” é bem mais pesado: não é só “ser estrangeiro”, é o estado de não pertencer mais à identidade mandaloriana — perder o clã é perder quem você é. O oposto de “Mando’ade” é “aruetii” (estrangeiro/traidor, quem não é mandaloriano ou quebra o código).',
      ],
      items: [
        { term: 'aliit', meaning: 'clã/família' },
        { term: 'Aliit ori’shya tal’din.', meaning: 'Família é mais que sangue. (credo mandaloriano, tema central dos romances)' },
        { term: 'beskar', meaning: 'aço mandaloriano, quase indestrutível, usado nas armaduras' },
        { term: 'dar’manda', meaning: 'perda da identidade/pertencimento mandaloriano — não é só “estrangeiro”' },
        { term: 'aruetii', meaning: 'estrangeiro/traidor (quem não é mandaloriano, ou quebra o código)' },
        { term: 'ad', meaning: 'filho/filha' },
      ],
      quiz: [
        { q: 'O que “Aliit ori’shya tal’din” quer dizer?', options: ['Família é mais que sangue', 'O sangue é mais forte que o clã', 'Nunca abandone a armadura'], answer: 0, why: 'É o credo mandaloriano repetido como tema central nos romances de Traviss: a família se escolhe, não só se nasce nela.' },
        { q: 'O que “dar’manda” significa?', options: ['Perder a identidade/pertencimento mandaloriano', 'Um tipo de armadura de beskar', 'Uma saudação formal'], answer: 0 },
      ],
    },
    {
      id: 'honra',
      title: 'Hut’uun, kyr’tsad',
      emoji: '⚔️',
      intro: [
        'Segundo a própria Traviss (no artigo “No Word for Hero”, Star Wars Insider nº 86, 2006), não existe uma palavra pra “herói” em mando’a: esperar coragem de qualquer mandaloriano, homem ou mulher, é a norma, não uma excepção. A mesma ideia volta dentro do romance “Triple Zero”, quando o personagem Kal Skirata usa “hut’uun” (covarde) — o oposto de herói é a única coisa que precisa de palavra própria.',
        '“Kyr’tsad” (Sociedade da Morte) é a seita separatista mandaloriana que também aparece, com esse nome, em Star Wars: The Clone Wars — não é invenção só dos livros. E “osik” é uma imprecação leve (tipo “droga”), marcada como informal no dicionário.',
        'Uma ressalva importante: o sufixo de plural “-e” (depois de consoante) ou “-se” (depois de vogal) — como em “aruetii” → “aruetiise” — é um padrão que a comunidade do mandoa.org notou nas listas de vocabulário da própria Traviss, mas ela nunca publicou isso como regra gramatical formal. Vale saber, mas com essa ressalva.',
      ],
      items: [
        { term: 'hut’uun', meaning: 'covarde (o único lado da moeda que tem palavra própria — não existe “herói” em mando’a)' },
        { term: 'kyr’tsad', meaning: 'Sociedade da Morte (Death Watch), seita separatista mandaloriana (também em The Clone Wars)' },
        { term: 'osik', meaning: 'imprecação leve (“droga”/“merda”), marcada como informal' },
        { term: 'aruetiise', meaning: 'estrangeiros/traidores (plural de “aruetii” + “-se” — padrão notado pela comunidade, não regra publicada pela própria Traviss)' },
      ],
      quiz: [
        { q: 'Por que não existe uma palavra pra “herói” em mando’a, segundo Traviss?', options: ['Porque esperar coragem de qualquer um é a norma, não uma excepção', 'Porque a palavra foi perdida com a queda de Mandalore', 'Porque mandalorianos não valorizam coragem'], answer: 0, why: 'Ideia do artigo “No Word for Hero” (Star Wars Insider nº 86, 2006), repetida dentro do romance “Triple Zero” com a palavra “hut’uun” (covarde).' },
        { q: 'O que é “Kyr’tsad”?', options: ['A Sociedade da Morte, uma seita separatista mandaloriana', 'Um tipo de arma de beskar', 'Uma forma de saudação'], answer: 0 },
      ],
    },
  ],
};
