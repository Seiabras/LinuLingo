import { before, test } from 'node:test';
import assert from 'node:assert/strict';
import { carregarNumeros, spellNumbers } from '@/services/numeros';

// os soletradores carregam sob demanda (como no app); aqui, todos antes dos testes
before(() => Promise.all(['pt', 'ru', 'es', 'it', 'fr'].map(carregarNumeros)));

test('números: o idioma certo pela localidade, emojis de tecla intactos, idioma sem regras intacto', () => {
  assert.equal(spellNumbers('16 anos', 'pt-PT'), 'dezasseis anos');
  assert.equal(spellNumbers('16 anos', 'pt-BR'), 'dezesseis anos');
  assert.equal(spellNumbers('2 книги', 'ru-RU'), 'две книги');
  assert.equal(spellNumbers('Tengo 2 gatos 2️⃣ y 3 perros', 'es-MX'), 'Tengo dos gatos 2️⃣ y tres perros');
  assert.equal(spellNumbers('5️⃣', 'it-IT'), '5️⃣');
  assert.equal(spellNumbers('3 cats', 'en-US'), '3 cats');
  assert.equal(spellNumbers('sem números', 'fr-FR'), 'sem números');
});
