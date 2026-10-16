import type { MiniCourse } from './tipos';

/**
 * Mabelleto: o jeito de falar da Mabelle Caminha, autora das fanarts do Linu (“O Linu na unha”, ver
 * `src/data/fanarts.ts`), que troca certas palavras por outras — o dono do projeto não sabe se é de
 * propósito ou se ela não conhece a palavra certa. Ideia do dono (14/10/2026), registrada no
 * PENDENTES.md; em 16/10/2026 ele pediu para entrar “somente com o que tem por enquanto”, para ver
 * como fica no app. Tudo aqui vem do que o dono contou: por enquanto, um exemplo só (alpiste no
 * lugar de gergelim). Nada inventado — as próximas palavras entram quando o dono contar.
 */
export const CURSO_MABELLETO: MiniCourse = {
  id: 'mabelleto',
  name: 'Mabelleto',
  emoji: '🌱',
  kind: 'giria',
  rascunho: true,
  summary: 'O jeito de falar da Mabelle Caminha, que desenha as fanarts do Linu: algumas palavras trocadas por outras. Em construção — por enquanto, uma palavra só.',
  sources: [],
  lessons: [
    {
      id: 'alpiste',
      title: 'Alpiste no sushi',
      emoji: '🍣',
      intro: [
        'A Mabelle Caminha é quem desenha as fanarts do Linu que aparecem no app. Ela tem um jeito próprio de falar: troca certas palavras por outras, e ninguém sabe ao certo se é de propósito ou se ela não conhece a palavra certa.',
        'O primeiro exemplo registrado: ela chama de “alpiste” o gergelim, a sementinha que vai no sushi. No português de todo mundo, alpiste é a semente que se dá para passarinho.',
        'O Mabelleto ainda está em construção: as próximas palavras entram aqui conforme forem aparecendo.',
      ],
      items: [{ term: 'alpiste', meaning: 'gergelim, a sementinha do sushi', how: 'No português de todo mundo, alpiste é a semente que se dá para passarinho.' }],
      quiz: [
        { q: 'No Mabelleto, “alpiste” é…', options: ['O gergelim, a sementinha do sushi', 'A semente que se dá para passarinho', 'O arroz do sushi'], answer: 0, why: 'No português de todo mundo, alpiste é comida de passarinho; no Mabelleto, é o gergelim.' },
        { q: 'Quem fala o Mabelleto?', options: ['A Mabelle Caminha, que desenha as fanarts do Linu', 'Os jogadores de videogame', 'Os falantes de uma região do Brasil'], answer: 0 },
      ],
    },
  ],
};
