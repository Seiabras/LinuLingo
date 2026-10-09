import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BANDEIRAS_REGIONAIS, bandeiraRegionalDe, bandeiraRegionalDeDialeto } from './bandeiras-regionais';
import { PACKS } from './idiomas';

test('bandeiras regionais: todo id em `usadaEm` existe como Accent kind "língua" em algum pacote', () => {
  const allAccents = Object.values(PACKS).flatMap((p) => p.accents ?? []);
  for (const r of BANDEIRAS_REGIONAIS) {
    for (const id of r.usadaEm) {
      const a = allAccents.find((x) => x.id === id);
      assert.ok(a, `${r.id}: ${id} não existe como Accent em nenhum pacote`);
      assert.equal(a!.kind, 'língua', `${r.id}: ${id} deveria ser kind 'língua' (língua própria de uma região)`);
    }
  }
});

test('bandeiras regionais: todo code em `usadaEmDialeto` existe como LanguageVariant kind "dialeto" em algum pacote', () => {
  const allVariants = Object.values(PACKS).flatMap((p) => p.variants ?? []);
  for (const r of BANDEIRAS_REGIONAIS) {
    for (const code of r.usadaEmDialeto ?? []) {
      const v = allVariants.find((x) => x.code === code);
      assert.ok(v, `${r.id}: ${code} não existe como LanguageVariant em nenhum pacote`);
      assert.equal(v!.kind, 'dialeto', `${r.id}: ${code} deveria ser kind 'dialeto'`);
    }
  }
});

test('bandeiras regionais: toda regional tem pelo menos um uso cadastrado (accent ou dialeto)', () => {
  for (const r of BANDEIRAS_REGIONAIS) {
    assert.ok(r.usadaEm.length > 0 || (r.usadaEmDialeto?.length ?? 0) > 0, `${r.id} não tem nenhum uso cadastrado`);
  }
});

test('bandeiras regionais: listras têm cor par de barras (ímpar de faixas, simétrico) e larguras entre 0 e 1', () => {
  for (const r of BANDEIRAS_REGIONAIS) {
    if (r.bandeira.tipo === 'listras') {
      assert.ok(r.bandeira.cores.length >= 3, `${r.id}: poucas listras`);
      assert.equal(r.bandeira.cores[0], r.bandeira.cores[r.bandeira.cores.length - 1], `${r.id}: a primeira e a última listra deveriam ser da mesma cor (simétrico)`);
    }
    if (r.bandeira.tipo === 'faixa-diagonal') {
      assert.ok(r.bandeira.largura > 0 && r.bandeira.largura < 1, `${r.id}: largura da faixa fora de 0–1`);
    }
    if (r.bandeira.tipo === 'cruz-sobre-aspa') {
      assert.ok(r.bandeira.larguraAspa > 0 && r.bandeira.larguraAspa < 1, `${r.id}: largura da aspa fora de 0–1`);
      assert.ok(r.bandeira.larguraCruz > 0 && r.bandeira.larguraCruz < 1, `${r.id}: largura da cruz fora de 0–1`);
    }
    if (r.bandeira.tipo === 'listras-arminhos') {
      assert.ok(r.bandeira.numListras >= 3 && r.bandeira.numListras % 2 === 1, `${r.id}: número de listras deveria ser ímpar (simétrico, começa e termina na mesma cor)`);
    }
  }
});

test('bandeiraRegionalDe: acha a bandeira certa pelo id do accent, e nada pra quem não está cadastrado', () => {
  assert.equal(bandeiraRegionalDe('es-catalan')?.tipo, 'listras');
  assert.equal(bandeiraRegionalDe('es-basque')?.tipo, 'cruz-sobre-aspa');
  assert.equal(bandeiraRegionalDe('fr-basque')?.tipo, 'cruz-sobre-aspa');
  assert.equal(bandeiraRegionalDe('es-galician')?.tipo, 'faixa-diagonal');
  assert.equal(bandeiraRegionalDe('pt-galego')?.tipo, 'faixa-diagonal');
  assert.equal(bandeiraRegionalDe('it-lingua-siciliana')?.tipo, 'diagonal-triscele');
  assert.equal(bandeiraRegionalDe('it-lingua-sarda')?.tipo, 'cruz-mouros');
  assert.equal(bandeiraRegionalDe('fr-corse')?.tipo, 'cabeca-mouro');
  assert.equal(bandeiraRegionalDe('fr-breton')?.tipo, 'listras-arminhos');
  assert.equal(bandeiraRegionalDe('pt-carioca'), undefined);
  assert.equal(bandeiraRegionalDe('não-existe'), undefined);
});

test('bandeiraRegionalDeDialeto: acha a bandeira certa pelo code do dialeto (Quebec), e nada pra quem não está cadastrado', () => {
  assert.equal(bandeiraRegionalDeDialeto('fr-CA')?.tipo, 'cruz-flor-de-lis');
  assert.equal(bandeiraRegionalDeDialeto('fr-FR'), undefined);
  assert.equal(bandeiraRegionalDeDialeto('não-existe'), undefined);
});
