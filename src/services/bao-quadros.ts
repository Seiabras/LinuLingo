/**
 * Os quadros da semeadura animada do bao, a partir dos acontecimentos do lance (`EventoBao`). No bao
 * um lance tem várias voltas: a semente sai da mão, as sementes de uma cova voltam para a mão e seguem
 * semeando (endelea), e as capturadas vêm do lado do adversário para a mão e recomeçam num kichwa. O
 * `quadrosDaSemeadura` do oware e do Kalah cobre uma pegada só; aqui cada etapa vira um `Quadro` do
 * mesmo formato, para o `useSemeadura` tocar. As covas são as 32 do tabuleiro (jogador × 16 + k).
 */
import type { BaoState, EventoBao } from './bao-engine';
import type { Quadro } from './semeadura';

/** Um lance muito longo fica rápido: no máximo uns tantos quadros de semente. */
const MAX_SEMEIA = 40;

export function quadrosDoBao(antes: BaoState, eventos: EventoBao[], depois: BaoState): Quadro[] {
  const quadros: Quadro[] = [];
  let covas = [...antes.covas[0], ...antes.covas[1]];
  let mao = 0;
  const totalSemeia = eventos.filter((e) => e.tipo === 'semeia').length;
  // com muitas sementes, mostra só uma a cada `pulo` (e sempre a última de cada volta)
  const pulo = Math.max(1, Math.ceil(totalSemeia / MAX_SEMEIA));
  let contador = 0;
  eventos.forEach((e, i) => {
    covas = covas.slice();
    if (e.tipo === 'poe') {
      covas[e.g]!++;
      quadros.push({ tipo: 'semeia', covas, cai: e.g, mao: 0, voam: [], chegou: [] });
    } else if (e.tipo === 'pega') {
      covas[e.g]! -= e.n;
      mao += e.n;
      quadros.push({ tipo: 'pega', covas, cai: null, mao, voam: [], chegou: [] });
    } else if (e.tipo === 'captura') {
      covas[e.de] = 0;
      mao += e.n;
      quadros.push({ tipo: 'voa', covas, cai: null, mao, voam: [{ de: e.de, n: e.n, para: e.para }], chegou: [] });
    } else {
      covas[e.g]!++;
      mao--;
      contador++;
      const ultimaDaVolta = eventos[i + 1]?.tipo !== 'semeia';
      if (contador % pulo === 0 || ultimaDaVolta) quadros.push({ tipo: 'semeia', covas, cai: e.g, mao, voam: [], chegou: [] });
    }
  });
  // o `useSemeadura` mede o ritmo pelas sementes na mão do primeiro quadro; aqui ele recebe o número
  // de quadros de semente, para o lance inteiro durar uns poucos segundos (o tabuleiro não mostra esse
  // número no primeiro quadro)
  if (quadros[0]) quadros[0] = { ...quadros[0], mao: Math.max(quadros[0].mao, quadros.filter((q) => q.tipo === 'semeia').length) };
  // garantia: o último quadro é a posição do motor
  const fim = [...depois.covas[0], ...depois.covas[1]];
  const ultimo = quadros[quadros.length - 1];
  if (!ultimo || ultimo.covas.some((n, i) => n !== fim[i])) quadros.push({ tipo: 'chega', covas: fim, cai: null, mao: 0, voam: [], chegou: [] });
  return quadros;
}
