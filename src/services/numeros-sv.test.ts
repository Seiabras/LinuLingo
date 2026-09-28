import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spellSwedishNumbers, swedishNumber, swedishOrdinal, swedishYear } from '@/services/numeros/sv';

test('números em sueco: uma palavra só até o milhão (tjugoett, tvåhundrafemtio, ettusen)', () => {
  const cases: [number, string][] = [
    [0, 'noll'],
    [1, 'ett'],
    [7, 'sju'],
    [18, 'arton'],
    [20, 'tjugo'],
    [21, 'tjugoett'],
    [45, 'fyrtiofem'],
    [100, 'hundra'],
    [120, 'hundratjugo'],
    [250, 'tvåhundrafemtio'],
    [1000, 'tusen'],
    [1200, 'tusentvåhundra'],
    [2003, 'tvåtusentre'],
    [21_000, 'tjugoettusen'],
    [300_000, 'trehundratusen'],
    [1_000_000, 'en miljon'],
    [2_500_000, 'två miljoner femhundratusen'],
  ];
  for (const [n, w] of cases) assert.equal(swedishNumber(n), w, String(n));
  assert.equal(swedishNumber(1, 'm'), 'en');
  assert.equal(swedishYear(1946), 'nittonhundrafyrtiosex');
  assert.equal(swedishYear(1809), 'artonhundranio');
  assert.equal(swedishYear(2003), null);
  assert.equal(swedishOrdinal(1), 'första');
  assert.equal(swedishOrdinal(2), 'andra');
  assert.equal(swedishOrdinal(6), 'sjätte');
  assert.equal(swedishOrdinal(20), 'tjugonde');
  assert.equal(swedishOrdinal(21), 'tjugoförsta');
  assert.equal(swedishOrdinal(30), 'trettionde');
});

test('números em sueco: o 1 concorda com o substantivo (en krona, ett år)', () => {
  assert.equal(spellSwedishNumbers('Jag har 1 katt och 1 hus.'), 'Jag har en katt och ett hus.');
  assert.equal(spellSwedishNumbers('Det kostar 1 krona.'), 'Det kostar en krona.');
  assert.equal(spellSwedishNumbers('Hon bodde där i 1 år.'), 'Hon bodde där i ett år.');
  // um adjetivo no meio
  assert.equal(spellSwedishNumbers('1 stor hund'), 'en stor hund');
  // sozinho, contando, nas horas: ett
  assert.equal(spellSwedishNumbers('Frågan diskuteras i kapitel 1.'), 'Frågan diskuteras i kapitel ett.');
  assert.equal(spellSwedishNumbers('Klockan är 1.'), 'Klockan är ett.');
  assert.equal(spellSwedishNumbers('1 + 1 = 2'), 'ett + ett = två');
});

test('números em sueco: frases do curso (datas, anos, horas, dinheiro)', () => {
  assert.equal(spellSwedishNumbers('Dagens rätt kostar 120 kronor.'), 'Dagens rätt kostar hundratjugo kronor.');
  assert.equal(spellSwedishNumbers('Malmö har över 300 000 invånare.'), 'Malmö har över trehundratusen invånare.');
  assert.equal(spellSwedishNumbers('Biljetten kostar ca 1 200 kronor.'), 'Biljetten kostar ca tusentvåhundra kronor.');
  assert.equal(spellSwedishNumbers('Samernas nationaldag firas den 6 februari.'), 'Samernas nationaldag firas den sjätte februari.');
  assert.equal(spellSwedishNumbers('Skicka din ansökan senast den 1 mars.'), 'Skicka din ansökan senast den första mars.');
  assert.equal(spellSwedishNumbers('Sverige har haft fred sedan 1814.'), 'Sverige har haft fred sedan artonhundrafjorton.');
  assert.equal(spellSwedishNumbers('Alfred Nobel (1833–1896)'), 'Alfred Nobel (artonhundratrettiotre–artonhundranittiosex)');
  assert.equal(spellSwedishNumbers('Bron öppnades år 2000.'), 'Bron öppnades år tvåtusen.');
  assert.equal(spellSwedishNumbers('Huset byggdes på 1700-talet.'), 'Huset byggdes på sjuttonhundratalet.');
  assert.equal(spellSwedishNumbers('Han kom på 1880-talet.'), 'Han kom på artonhundraåttiotalet.');
  assert.equal(spellSwedishNumbers('kl. 14.30'), 'kl. fjorton trettio');
  assert.equal(spellSwedishNumbers('kl. 08.05'), 'kl. åtta noll fem');
  assert.equal(spellSwedishNumbers('3,5 procent'), 'tre komma fem procent');
  assert.equal(spellSwedishNumbers('Räntan är 2 %.'), 'Räntan är två procent.');
  assert.equal(spellSwedishNumbers('Det kostar 20 kr.'), 'Det kostar tjugo kronor.');
  assert.equal(spellSwedishNumbers('Det kostar 1 kr.'), 'Det kostar en krona.');
  assert.equal(spellSwedishNumbers('den 1:a maj'), 'den första maj');
  assert.equal(spellSwedishNumbers('Ring 112!'), 'Ring ett ett två!');
});

test('números em sueco: algarismos grudados em letras ficam como estão', () => {
  assert.equal(spellSwedishNumbers('V2, 3D, mp3, A1.1, 4x4'), 'V2, 3D, mp3, A1.1, 4x4');
  assert.equal(spellSwedishNumbers('God morgon!'), 'God morgon!');
});
