/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { recognitionErrorMessage } from './recognition-error';

test('recognitionErrorMessage distingue os motivos do reconhecimento de voz falhar', () => {
  assert.match(recognitionErrorMessage('not-allowed'), /permita/i);
  assert.match(recognitionErrorMessage('service-not-allowed'), /ditado|siri/i);
  assert.match(recognitionErrorMessage('audio-capture'), /não encontrei um microfone/i);
  assert.match(recognitionErrorMessage('network'), /sem conexão/i);
  assert.match(recognitionErrorMessage('no-speech'), /não percebi nenhuma fala/i);
  assert.match(recognitionErrorMessage('aborted'), /interrompida/i);
  // qualquer código desconhecido cai na mensagem genérica, nunca fica em branco
  assert.match(recognitionErrorMessage('bad-grammar'), /reconhecimento de voz falhou/i);
  assert.match(recognitionErrorMessage(''), /reconhecimento de voz falhou/i);
});
