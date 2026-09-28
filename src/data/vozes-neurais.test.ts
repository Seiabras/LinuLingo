import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from './idiomas';
import { neuralVoiceFor, NEURAL_VOICES } from './vozes-neurais';

/** Idiomas sem voz neural: o som vem das gravações e da voz do aparelho. */
// o lituano tem voz no Piper (lt_LT-reginute1), mas ela precisa de um fonemizador próprio que o app ainda não roda
// japonês e coreano: o Piper não tem voz nenhuma para nenhum dos dois (conferido em rhasspy/piper-voices)
const WITHOUT_VOICE = new Set<string>(['lt', 'ja', 'ko']);

test('vozes neurais: todo idioma e toda variante do app têm voz embutida', () => {
  // sem ela, no Linux (Chrome sem voz nenhuma, Firefox com o speech-dispatcher mudo) o que não tem
  // gravação de nativo fica em silêncio
  for (const p of Object.values(PACKS)) {
    if (WITHOUT_VOICE.has(p.code)) {
      assert.equal(neuralVoiceFor(p.speechLocale), null, `${p.code}: tem voz agora, tire da lista`);
      continue;
    }
    assert.ok(neuralVoiceFor(p.speechLocale), `${p.code}: sem voz neural para ${p.speechLocale}`);
    for (const v of p.variants ?? []) if (v.speechLocale) assert.ok(neuralVoiceFor(v.speechLocale), `${v.code}: sem voz neural para ${v.speechLocale}`);
  }
});

test('vozes neurais: a voz escolhida é do idioma pedido', () => {
  for (const p of Object.values(PACKS)) {
    if (WITHOUT_VOICE.has(p.code)) continue;
    const voice = neuralVoiceFor(p.speechLocale)!;
    const lang = p.speechLocale.split('-')[0];
    // o Piper chama o norueguês de «no»; o app usa «nb» (bokmål)
    assert.equal(voice.id.split(/[_-]/)[0], lang === 'nb' ? 'no' : lang, `${p.code}: ${voice.id}`);
  }
  assert.ok(Object.values(NEURAL_VOICES).every((v) => v.mb > 0 && v.license));
});
