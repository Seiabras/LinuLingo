/**
 * Junta os jogos das outras áreas (cartas, azar, brincadeiras, esportes e videogames) num lugar só.
 * Cada área tem o seu arquivo; para entrar um jogo novo: (1) o jogo no arquivo da área, (2) o
 * componente jogável em `components/outros-jogos/registro.ts`, (3) `playable: true` no jogo.
 */
import { AZAR } from './azar';
import { BRINCADEIRAS } from './brincadeiras';
import { CARTAS } from './cartas';
import { ESPORTES } from './esportes';
import { VIDEOGAMES } from './videogames';
import type { AreaJogo, OutroJogo } from './tipos';

export * from './tipos';

export const OUTROS_JOGOS: OutroJogo[] = [...CARTAS, ...AZAR, ...BRINCADEIRAS, ...ESPORTES, ...VIDEOGAMES];

export const jogosDaArea = (area: AreaJogo) => OUTROS_JOGOS.filter((j) => j.area === area);

export const outroJogo = (area: string | undefined, id: string | undefined) => OUTROS_JOGOS.find((j) => j.area === area && j.id === id);
