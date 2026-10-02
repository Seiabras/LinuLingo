/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingTa } from './reading-tamil';

test('tâmil: க/ப/ட geminados ficam surdos, iguais ao início de palavra', () => {
  // வணக்கம் (oi/tchau): ண colapsa em "n", க்க geminado fica "kk" surdo — grafia popular "vanakkam"
  assert.equal(toReadingTa('வணக்கம்'), 'vanakkam');
  // சிவப்பு (vermelho): ப்ப geminado surdo
  assert.equal(toReadingTa('சிவப்பு'), 'sivappu');
});

test('tâmil: க/ப/ட sonorizam entre vogais e depois da nasal homorgânica, nunca no início', () => {
  // குடி (beber): ட entre vogais vira "d" — "kudi", não "kuti"
  assert.equal(toReadingTa('குடி'), 'kudi');
  // குடும்பம் (família): ட entre vogais ("du"), ப depois de ம் muda vira "b" — grafia popular "kudumbam"
  assert.equal(toReadingTa('குடும்பம்'), 'kudumbam');
  // பொங்கல் (festa da colheita): க depois de ங் muda (nasal velar) vira "g" — grafia popular "Pongal"
  assert.equal(toReadingTa('பொங்கல்'), 'pongal');
  // தங்கை (irmã mais nova): mesma regra — "tangai", não "thankai"
  assert.equal(toReadingTa('தங்கை'), 'tangai');
});

test('tâmil: ற é a consoante dura mais irregular (nunca simples "r" fixo)', () => {
  // நன்றி (obrigado): ற depois da nasal ன் vira "dr" prenasalizado — grafia popular "nandri"
  assert.equal(toReadingTa('நன்றி'), 'nandri');
  // மற்றும் (e): ற்ற geminado vira oclusiva + vibrante "tr" — grafia popular "matrum"
  assert.equal(toReadingTa('மற்றும்'), 'matrum');
  // சோறு (comida/arroz): ற entre vogais (depois de ō) vira "r" simples
  assert.equal(toReadingTa('சோறு'), 'sōru');
});

test('tâmil: ச soa quase sempre "s" na fala (não o africado "ch" da forma literária), vira "j" só depois de nasal', () => {
  // சாப்பிடு (comer): ச no início de palavra — pronúncia falada confirmada no Wiktionary é [s], não [tʃ]
  assert.equal(toReadingTa('சாப்பிடு'), 'sāppidu');
  // சின்ன (pequeno): mesma regra no início
  assert.equal(toReadingTa('சின்ன'), 'sinna');
  // பேசு (falar): ச entre vogais vira "s"
  assert.equal(toReadingTa('பேசு'), 'pēsu');
  // பச்சை (verde): ச்ச geminado vira [sː], não um africado dobrado — "passai"
  assert.equal(toReadingTa('பச்சை'), 'passai');
  // கொஞ்சம் (um pouco): ச depois da nasal ஞ் (que perde o "y" nesse contexto) vira "j" — "konjam"
  assert.equal(toReadingTa('கொஞ்சம்'), 'konjam');
});

test('tâmil: os três "L" — ல e ள colapsam em "l", ழ ganha grafia própria "zh"', () => {
  assert.equal(toReadingTa('இல்லை'), 'illai'); // ல dobrado
  assert.equal(toReadingTa('வெள்ளை'), 'vellai'); // ள dobrado, colide com ல
  assert.equal(toReadingTa('தமிழ்'), 'tamizh'); // ழ, aproximante retroflexa exclusiva do tâmil
});

test('tâmil: vogal longa × curta distingue sentido, nunca cai (sem apagamento de vogal final)', () => {
  assert.equal(toReadingTa('ஆறு'), 'āru'); // seis: ஆ longo
  assert.equal(toReadingTa('ஒன்று'), 'ondru'); // um: ஒ curto, ன்று pós-nasal — grafia popular "ondru"
  assert.equal(toReadingTa('தமிழ்'), 'tamizh'); // termina em consoante muda (ழ்), não ganha vogal extra
  assert.equal(toReadingTa('தலை'), 'talai'); // termina em vogal escrita, mantém — dravídico não apaga como o hindi
});

test('tâmil: letras grantha (só empréstimos do sânscrito) não têm alofonia', () => {
  assert.equal(toReadingTa('ஜ'), 'ja');
  assert.equal(toReadingTa('ஶ'), 'sha');
  assert.equal(toReadingTa('ஷ'), 'sha');
  assert.equal(toReadingTa('ஸ'), 'sa');
  assert.equal(toReadingTa('ஹ'), 'ha');
});

test('tâmil: āytam (ஃ) sozinho e em combinação para sons estrangeiros', () => {
  assert.equal(toReadingTa('ஃ'), 'h');
  assert.equal(toReadingTa('ஃப'), 'fa');
});

test('tâmil: dígitos tâmeis e texto que não é tâmil passam intactos/traduzidos', () => {
  assert.equal(toReadingTa('௧௨௩'), '123');
  assert.equal(toReadingTa('olá, 123!'), 'olá, 123!');
});
