/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from './idiomas';
import type { FonteEstudo } from './types';

// As fontes para estudar e os métodos de ensino de cada idioma (tela /fontes): formato mínimo para
// a tela não mostrar cartão vazio nem link quebrado. Se o dado está certo (a obra existe, a URL abre)
// é conferido à mão por quem acrescenta; ver “Fontes para estudar e métodos de ensino” no AGENTS.md.
const TIPOS: FonteEstudo['tipo'][] = ['gramatica', 'dicionario', 'curso', 'textos', 'tese', 'audio', 'site'];
const ACESSOS: FonteEstudo['acesso'][] = ['aberto', 'pago', 'biblioteca'];

for (const pack of Object.values(PACKS)) {
  if (pack.fontes) {
    const fontes = pack.fontes;
    test(`${pack.code}: fontes com título, descrição, tipo e acesso válidos`, () => {
      for (const f of fontes) {
        assert.ok(f.titulo.trim(), `${pack.code}: fonte sem título`);
        assert.ok(f.sobre.trim(), `${pack.code}: “${f.titulo}” sem “sobre”`);
        assert.ok(TIPOS.includes(f.tipo), `${pack.code}: “${f.titulo}” com tipo inválido (${f.tipo})`);
        assert.ok(ACESSOS.includes(f.acesso), `${pack.code}: “${f.titulo}” com acesso inválido (${f.acesso})`);
        if (f.url !== undefined) assert.match(f.url, /^https?:\/\/\S+$/, `${pack.code}: “${f.titulo}” com URL inválida`);
      }
    });
    test(`${pack.code}: nenhuma URL de fonte repetida`, () => {
      const urls = fontes.flatMap((f) => (f.url ? [f.url.replace(/\/$/, '')] : []));
      const repetidas = urls.filter((u, i) => urls.indexOf(u) !== i);
      assert.deepEqual(repetidas, [], `${pack.code}: URLs repetidas`);
    });
  }
  if (pack.metodos) {
    const metodos = pack.metodos;
    test(`${pack.code}: métodos de ensino com nome, como funciona e fonte`, () => {
      for (const m of metodos) {
        assert.ok(m.nome.trim(), `${pack.code}: método sem nome`);
        assert.ok(m.comoFunciona.trim(), `${pack.code}: “${m.nome}” sem “comoFunciona”`);
        assert.ok(m.fonte.trim(), `${pack.code}: “${m.nome}” sem fonte`);
      }
    });
  }
}

test('o galego, piloto, tem fontes e métodos', () => {
  assert.ok((PACKS.gl?.fontes?.length ?? 0) > 0);
  assert.ok((PACKS.gl?.metodos?.length ?? 0) > 0);
});
