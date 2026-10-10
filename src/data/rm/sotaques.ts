import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os cinco “idiomas” regionais do romanche, cada um com escrita própria, e o Rumantsch Grischun, a
 * norma comum criada por Heinrich Schmid em 1982. Fontes: Wikipédia em romanche e em alemão
 * («Lingua rumantscha», «Rumantsch Grischun», «Sursilvan», «Vallader», «Puter», consultadas em
 * 10/10/2026). Os cinco idiomas são dialetos do romanche (decisão do dono, 10/10/2026), e o
 * Rumantsch Grischun é a escrita comum, o padrão do curso.
 */
const BASE_RM: Accent[] = [
  {
    id: 'rm-sursilvan',
    name: 'Sursilvano',
    kind: 'sotaque',
    region: 'A Surselva, o vale do Reno Anterior',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '🏞️',
    summary: 'O romanche do vale do Reno Anterior, o idioma com mais falantes, com escrita própria e tradição católica.',
    features: ['“Jeu” para “eu”, onde a Engadina diz “eu”.', 'Tem a maior literatura entre os idiomas romanches.'],
    examples: [['Bien di!', 'Bom dia!']],
  },
  {
    id: 'rm-sutsilvan',
    name: 'Sutsilvano',
    kind: 'sotaque',
    region: 'O vale do Reno Posterior (Schons, Domleschg)',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '🌲',
    summary: 'O romanche do Reno Posterior, o idioma com menos falantes, que só ganhou escrita própria nos anos 1940.',
    features: ['O menor dos cinco idiomas, cercado pelo alemão.', 'A escrita própria só foi fixada no século XX.'],
    examples: [['Schons', 'o vale de Schams']],
  },
  {
    id: 'rm-surmiran',
    name: 'Surmirano',
    kind: 'sotaque',
    region: 'O Surses e o vale do Albula',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '⛰️',
    summary: 'O romanche do centro dos Grisões, entre o Reno e a Engadina, com traços dos dois lados.',
    features: ['Fica entre o sursilvano e o da Engadina, e mistura traços dos dois.', 'Tem escrita própria desde o século XX.'],
    examples: [['Surses', 'o vale do Surses']],
  },
  {
    id: 'rm-puter',
    name: 'Puter',
    kind: 'sotaque',
    region: 'A Alta Engadina (St. Moritz, Samedan)',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '⛷️',
    summary: 'O romanche da Alta Engadina, com as vogais “ö” e “ü”, como o vallader, e tradição protestante.',
    features: ['As vogais “ö” e “ü”, como no francês.', '“Allegra!” é o cumprimento típico da Engadina.'],
    examples: [['Allegra!', 'Olá! (cumprimento da Engadina)']],
  },
  {
    id: 'rm-vallader',
    name: 'Vallader',
    kind: 'sotaque',
    region: 'A Baixa Engadina (Scuol) e o Val Müstair',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '🦌',
    summary: 'O romanche da Baixa Engadina, irmão do puter, onde o romanche ainda é a língua do dia a dia de muitas vilas.',
    features: ['As vogais “ö” e “ü”, como no puter.', '“Eu” para “eu”, onde a Surselva diz “jeu”.'],
    examples: [['Allegra!', 'Olá! (cumprimento da Engadina)']],
  },
  {
    id: 'rm-grischun',
    name: 'Rumantsch Grischun',
    kind: 'sotaque',
    region: 'A norma comum, usada pelo cantão dos Grisões e pela Confederação',
    country: 'CHE',
    subdivisions: ['CH-GR'],
    emoji: '📜',
    summary: 'A língua escrita comum, criada em 1982 pelo linguista Heinrich Schmid a partir dos cinco idiomas, usada nos documentos oficiais. Quase ninguém a fala em casa.',
    features: ['Escolhe, para cada palavra, a forma que a maioria dos idiomas compartilha.', 'É a forma usada pelo governo suíço e pelo cantão.'],
    examples: [['Bun di!', 'Bom dia!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_RM: Accent[] = noDialeto(BASE_RM, 'rm-grischun', { iguais: { 'rm-grischun': 'rm-grischun', 'rm-sursilvan': 'rm-sursilvan', 'rm-sutsilvan': 'rm-sutsilvan', 'rm-surmiran': 'rm-surmiran', 'rm-puter': 'rm-puter', 'rm-vallader': 'rm-vallader' } });
