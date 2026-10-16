import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BANDEIRAS_PAISES } from './bandeiras-paises';

test('bandeiras de país: chave é ISO 3166-1 alfa-2, viewBox válido e a árvore não está vazia', () => {
  const codigos = Object.keys(BANDEIRAS_PAISES);
  assert.ok(codigos.length > 200, `só ${codigos.length} bandeiras — o gerador rodou direito?`);
  for (const [iso2, bandeira] of Object.entries(BANDEIRAS_PAISES)) {
    // a maioria é ISO 3166-1 alfa-2, mas o pacote inclui também algumas bandeiras supranacionais
    // (EU, UN, ARAB, ASEAN...) e de constituintes do Reino Unido (GB-ENG, GB-SCT, GB-WLS) — só
    // maiúsculo com hífen opcional, sem travar no tamanho exato
    assert.match(iso2, /^[A-Z]+(-[A-Z]+)?$/, `${iso2}: código em formato inesperado`);
    assert.match(bandeira.v, /^-?\d+(\.\d+)? -?\d+(\.\d+)? \d+(\.\d+)? \d+(\.\d+)?$/, `${iso2}: viewBox "${bandeira.v}" não tem o formato "x y w h"`);
    assert.ok(bandeira.n.length > 0, `${iso2}: árvore SVG vazia`);
  }
});

test('bandeiras de país: alguns países conhecidos de verdade existem (não é uma lista truncada)', () => {
  for (const iso2 of ['BR', 'PT', 'IT', 'CH', 'US', 'JP', 'MN', 'CN']) {
    assert.ok(BANDEIRAS_PAISES[iso2], `falta a bandeira de ${iso2}`);
  }
});
