/**
 * As abordagens da psicologia (as “lentes” da mente, como o dono listou em `docs/areas-futuras.md`):
 * quem criou, quando e o que cada uma olha. As obras e as datas são as de qualquer história da
 * psicologia (OpenStax, “Psychology 2e”, cap. 1.2 “History of Psychology” e cap. 16 “Therapy and
 * Treatment”, CC BY 4.0):
 * - Freud, “A interpretação dos sonhos” (Die Traumdeutung), lançado no fim de 1899 com a data de 1900;
 * - Jung, “Tipos psicológicos”, 1921;
 * - Watson, “Psychology as the Behaviorist Views It”, Psychological Review, 1913;
 * - Skinner, “The Behavior of Organisms”, 1938;
 * - Wertheimer, o artigo sobre o movimento aparente (fenômeno phi), 1912;
 * - Perls, Hefferline e Goodman, “Gestalt Therapy”, 1951;
 * - Maslow, “A Theory of Human Motivation”, Psychological Review, 1943;
 * - Rogers, “Client-Centered Therapy”, 1951;
 * - Frankl, “Em busca de sentido” (… trotzdem Ja zum Leben sagen), 1946;
 * - Ellis, a terapia racional (depois racional-emotiva), apresentada em 1955;
 * - Beck, a terapia cognitiva, nos anos 1960; “Cognitive Therapy of Depression”, 1979.
 * O “como ela olharia” de cada uma é a ideia central da abordagem aplicada a uma situação comum, não um
 * conselho: é para entender a diferença entre as lentes.
 */
export interface Abordagem {
  id: string;
  emoji: string;
  nome: string;
  pergunta: string;
  ideia: string;
  pessoas: { nome: string; obra: string }[];
  /** como essa lente olharia o Linu nervoso antes de uma prova */
  olhar: string;
}

export const SITUACAO = 'O Linu fica muito nervoso antes de toda prova.';

export const ABORDAGENS: Abordagem[] = [
  {
    id: 'psicanalise',
    emoji: '🛋️',
    nome: 'Psicanálise',
    pergunta: 'O que está escondido?',
    ideia:
      'Boa parte da mente é inconsciente: desejos, medos e lembranças da infância que a gente não percebe, mas que aparecem nos sonhos, nos esquecimentos e nos sintomas. Falar livremente ajuda a trazer isso à tona.',
    pessoas: [
      { nome: 'Sigmund Freud', obra: '“A interpretação dos sonhos”, 1900' },
      { nome: 'Carl Gustav Jung', obra: '“Tipos psicológicos”, 1921 (a psicologia analítica)' },
    ],
    olhar: 'Procuraria de onde vem esse medo: o que a prova lembra para o Linu, talvez algo da infância dele, que ele mesmo não percebe.',
  },
  {
    id: 'behaviorismo',
    emoji: '🐀',
    nome: 'Behaviorismo (análise do comportamento)',
    pergunta: 'O que a pessoa faz, e o que acontece depois?',
    ideia:
      'A psicologia deve estudar o comportamento que dá para observar e medir. O que fazemos é aprendido com o ambiente: o que é seguido de recompensa (reforço) tende a se repetir.',
    pessoas: [
      { nome: 'John B. Watson', obra: '“Psychology as the Behaviorist Views It”, 1913' },
      { nome: 'B. F. Skinner', obra: '“The Behavior of Organisms”, 1938' },
    ],
    olhar: 'Olharia o que acontece antes e depois do nervosismo: o que o dispara e o que o mantém, e como aprender, aos pouquinhos, uma reação diferente.',
  },
  {
    id: 'gestalt',
    emoji: '🔲',
    nome: 'Gestalt',
    pergunta: 'Como o todo aparece?',
    ideia:
      'A gente percebe o todo, não pedacinhos: uma melodia continua a mesma em outro tom. Na psicoterapia (a Gestalt-terapia), a atenção vai para o aqui e agora e para o que se sente no corpo.',
    pessoas: [
      { nome: 'Max Wertheimer', obra: 'o movimento aparente (fenômeno phi), 1912' },
      { nome: 'Fritz Perls', obra: '“Gestalt Therapy”, com Hefferline e Goodman, 1951' },
    ],
    olhar: 'Pediria ao Linu para notar o que sente agora, no corpo, quando pensa na prova: onde está o nervosismo e o que ele diz.',
  },
  {
    id: 'humanismo',
    emoji: '🌱',
    nome: 'Humanismo e existencialismo',
    pergunta: 'Quem a pessoa pode vir a ser?',
    ideia:
      'Cada pessoa tem um potencial para crescer e é livre para escolher o sentido da própria vida. A relação de aceitação, sem julgamento, ajuda a pessoa a se desenvolver.',
    pessoas: [
      { nome: 'Abraham Maslow', obra: '“A Theory of Human Motivation” (a hierarquia das necessidades), 1943' },
      { nome: 'Carl Rogers', obra: '“Client-Centered Therapy”, 1951' },
      { nome: 'Viktor Frankl', obra: '“Em busca de sentido”, 1946' },
    ],
    olhar: 'Escutaria o Linu sem julgar e perguntaria o que a prova significa para ele e o que ele quer para a própria vida.',
  },
  {
    id: 'tcc',
    emoji: '💭',
    nome: 'Terapia cognitivo-comportamental (TCC)',
    pergunta: 'O que a pessoa está pensando?',
    ideia:
      'O que sentimos depende de como interpretamos as coisas. Pensamentos automáticos exagerados (“vou errar tudo”) trazem emoções fortes; aprender a examiná-los muda o que se sente e o que se faz.',
    pessoas: [
      { nome: 'Albert Ellis', obra: 'a terapia racional-emotiva, 1955' },
      { nome: 'Aaron Beck', obra: 'a terapia cognitiva, anos 1960; “Cognitive Therapy of Depression”, 1979' },
    ],
    olhar: 'Ajudaria o Linu a perceber o pensamento que vem antes da prova (“vou errar tudo”) e a conferir se ele é verdade.',
  },
];
