import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { RELEASES } from './changelog';

/** 'AAAA-MM-DD HH:MM' em horário de São Paulo (UTC-3, sem horário de verão) → Date em UTC. */
function parseReleaseDate(date: string): Date {
  return new Date(`${date.replace(' ', 'T')}:00-03:00`);
}

describe('changelog: a lista de atualizações não pode ficar desatualizada', () => {
  it('RELEASES está em ordem (mais nova no topo) e cada data é válida', () => {
    for (const r of RELEASES) {
      const d = parseReleaseDate(r.date);
      assert.ok(!Number.isNaN(d.getTime()), `${r.v}: data inválida "${r.date}"`);
      assert.ok(r.items.length > 0, `${r.v}: sem nenhum item`);
    }
    for (let i = 1; i < RELEASES.length; i++) {
      const anterior = parseReleaseDate(RELEASES[i - 1]!.date).getTime();
      const atual = parseReleaseDate(RELEASES[i]!.date).getTime();
      assert.ok(anterior > atual, `${RELEASES[i - 1]!.v} deveria ser mais novo que ${RELEASES[i]!.v}`);
    }
  });

  it('a entrada mais nova não fica muito atrás do commit mais recente do repositório', () => {
    let commitDate: Date | null = null;
    try {
      const iso = execSync('git log -1 --format=%cI', { cwd: __dirname, encoding: 'utf8' }).trim();
      commitDate = new Date(iso);
    } catch {
      // Sem `.git` disponível (ex. checkout raso sem histórico): não dá pra conferir, não falha o teste.
      return;
    }
    if (Number.isNaN(commitDate.getTime())) return;

    const ultimaEntrada = parseReleaseDate(RELEASES[0]!.date);
    const horasDeAtraso = (commitDate.getTime() - ultimaEntrada.getTime()) / 3_600_000;
    assert.ok(
      horasDeAtraso < 48,
      `A última entrada de RELEASES (v${RELEASES[0]!.v}, ${RELEASES[0]!.date}) está ${horasDeAtraso.toFixed(1)}h atrás do commit mais recente. ` +
        'Adicione uma entrada nova em src/data/changelog.ts contando o que foi feito antes de finalizar esta entrega.',
    );
  });
});
