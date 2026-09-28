import { test } from 'node:test';
import assert from 'node:assert/strict';
import { russianNumber, russianOrdinal, spellRussianNumbers } from '@/services/numeros/ru';

test('números em russo: cardinais, com gênero e caso', () => {
  const cases: [number, string][] = [
    [0, 'ноль'],
    [1, 'один'],
    [11, 'одиннадцать'],
    [21, 'двадцать один'],
    [40, 'сорок'],
    [99, 'девяносто девять'],
    [100, 'сто'],
    [153, 'сто пятьдесят три'],
    [200, 'двести'],
    [1000, 'тысяча'],
    [1812, 'тысяча восемьсот двенадцать'],
    [2000, 'две тысячи'],
    [5000, 'пять тысяч'],
    [21_000, 'двадцать одна тысяча'],
    [1_000_000, 'миллион'],
    [2_000_000, 'два миллиона'],
    [5_550_321, 'пять миллионов пятьсот пятьдесят тысяч триста двадцать один'],
  ];
  for (const [n, w] of cases) assert.equal(russianNumber(n), w, String(n));
  assert.equal(russianNumber(2, 'f'), 'две');
  assert.equal(russianNumber(1, 'n'), 'одно');
  assert.equal(russianNumber(1, 'f', 'acc'), 'одну');
  assert.equal(russianNumber(25, 'm', 'gen'), 'двадцати пяти');
  assert.equal(russianNumber(1642, 'm', 'gen'), 'тысячи шестисот сорока двух');
  assert.equal(russianNumber(348, 'm', 'ins'), 'тремястами сорока восемью');
  assert.equal(russianNumber(2000, 'm', 'dat'), 'двум тысячам');
  assert.equal(russianNumber(1000, 'm', 'acc'), 'тысячу');
});

test('números em russo: ordinais (só a última palavra vira ordinal)', () => {
  assert.equal(russianOrdinal(1), 'первый');
  assert.equal(russianOrdinal(2), 'второй');
  assert.equal(russianOrdinal(3, 'f'), 'третья');
  assert.equal(russianOrdinal(40), 'сороковой');
  assert.equal(russianOrdinal(1812, 'm', 'pre'), 'тысяча восемьсот двенадцатом');
  assert.equal(russianOrdinal(2026, 'm', 'gen'), 'две тысячи двадцать шестого');
  assert.equal(russianOrdinal(2000, 'm', 'pre'), 'двухтысячном');
  assert.equal(russianOrdinal(300), 'трёхсотый');
});

test('números em russo: concordam em gênero com o substantivo', () => {
  assert.equal(spellRussianNumbers('У меня 2 книги.'), 'У меня две книги.');
  assert.equal(spellRussianNumbers('У меня 2 брата.'), 'У меня два брата.');
  assert.equal(spellRussianNumbers('2 здания'), 'два здания');
  assert.equal(spellRussianNumbers('21 день'), 'двадцать один день');
  assert.equal(spellRussianNumbers('Он прочитал 21 книгу.'), 'Он прочитал двадцать одну книгу.');
  assert.equal(spellRussianNumbers('Подождите 1 минуту.'), 'Подождите одну минуту.');
  assert.equal(spellRussianNumbers('22 года'), 'двадцать два года');
  assert.equal(spellRussianNumbers('2 недели назад'), 'две недели назад');
  // um adjetivo no meio
  assert.equal(spellRussianNumbers('Я купила 2 новые книги.'), 'Я купила две новые книги.');
  // substantivos só de plural: coletivos no nominativo, cardinais nos outros casos
  assert.equal(spellRussianNumbers('У нас 2 детей.'), 'У нас двое детей.');
  assert.equal(spellRussianNumbers('3 суток'), 'трое суток');
  assert.equal(spellRussianNumbers('около 2 суток'), 'около двух суток');
  assert.equal(spellRussianNumbers('1 сутки'), 'одни сутки');
  // substantivo adjetivo: два учёных
  assert.equal(spellRussianNumbers('2 учёных'), 'два учёных');
  // palavra desconhecida: a forma de contar
  assert.equal(spellRussianNumbers('2 xyz'), 'два xyz');
  assert.equal(spellRussianNumbers('Ему 2.'), 'Ему два.');
});

test('números em russo: o caso vem da preposição ou da terminação do substantivo', () => {
  assert.equal(spellRussianNumbers('около 5 минут'), 'около пяти минут');
  assert.equal(spellRussianNumbers('из 100 человек'), 'из ста человек');
  assert.equal(spellRussianNumbers('к 5 часам'), 'к пяти часам');
  assert.equal(spellRussianNumbers('с 2 детьми'), 'с двумя детьми');
  assert.equal(spellRussianNumbers('с 2 друзьями'), 'с двумя друзьями');
  assert.equal(spellRussianNumbers('в 3 комнатах'), 'в трёх комнатах');
  assert.equal(spellRussianNumbers('о 2 книгах'), 'о двух книгах');
  assert.equal(spellRussianNumbers('в 1 доме'), 'в одном доме');
  assert.equal(spellRussianNumbers('на 1 неделю'), 'на одну неделю');
  assert.equal(spellRussianNumbers('в 2 раза'), 'в два раза');
  assert.equal(spellRussianNumbers('за 1000 рублей'), 'за тысячу рублей');
  assert.equal(spellRussianNumbers('за 21 000 рублей'), 'за двадцать одну тысячу рублей');
  assert.equal(spellRussianNumbers('по 1 яблоку'), 'по одному яблоку');
  assert.equal(spellRussianNumbers('по 5 рублей'), 'по пять рублей');
  assert.equal(spellRussianNumbers('с 5 до 7 часов'), 'с пяти до семи часов');
  assert.equal(spellRussianNumbers('между 2 и 3'), 'между двумя и тремя');
  // sem preposição: «достига́ет 1642 ме́тров» só pode ser genitivo (2 + genitivo plural)
  assert.equal(spellRussianNumbers('Его глубина достигает 1642 метров.'), 'Его глубина достигает тысячи шестисот сорока двух метров.');
  assert.equal(spellRussianNumbers('Вижу 2 студентов.'), 'Вижу двух студентов.');
  // 11–14 e 5+: o genitivo plural não diz nada sobre o caso
  assert.equal(spellRussianNumbers('25 лет'), 'двадцать пять лет');
  assert.equal(spellRussianNumbers('12 копеек'), 'двенадцать копеек');
});

test('números em russo: anos e datas', () => {
  assert.equal(
    spellRussianNumbers('Дорогу строили с 1891 по 1916 год.'),
    'Дорогу строили с тысяча восемьсот девяносто первого по тысяча девятьсот шестнадцатый год.',
  );
  assert.equal(spellRussianNumbers('в 1812 году'), 'в тысяча восемьсот двенадцатом году');
  assert.equal(spellRussianNumbers('С 1996 года'), 'С тысяча девятьсот девяносто шестого года');
  assert.equal(spellRussianNumbers('к 2030 году'), 'к две тысячи тридцатому году');
  assert.equal(spellRussianNumbers('в 2000 году'), 'в двухтысячном году');
  assert.equal(spellRussianNumbers('в 1957 г. он'), 'в тысяча девятьсот пятьдесят седьмом году он');
  assert.equal(spellRussianNumbers('в 1941–1945 годах'), 'в тысяча девятьсот сорок первом–тысяча девятьсот сорок пятом годах');
  assert.equal(spellRussianNumbers('Пушкин (1799–1837)'), 'Пушкин (тысяча семьсот девяносто девятый–тысяча восемьсот тридцать седьмой)');
  assert.equal(spellRussianNumbers('в 2014, когда'), 'в две тысячи четырнадцатом, когда');
  assert.equal(spellRussianNumbers('15 марта'), 'пятнадцатого марта');
  assert.equal(spellRussianNumbers('4 октября 1957 года'), 'четвёртого октября тысяча девятьсот пятьдесят седьмого года');
  assert.equal(spellRussianNumbers('Сегодня 5 мая.'), 'Сегодня пятое мая.');
  assert.equal(spellRussianNumbers('с 1 по 10 мая'), 'с первого по десятое мая');
  assert.equal(spellRussianNumbers('к 5 мая'), 'к пятому мая');
  assert.equal(spellRussianNumbers('15.03.2020'), 'пятнадцатого марта две тысячи двадцатого года');
});

test('números em russo: ordinais abreviados, decimais, horas, símbolos', () => {
  assert.equal(spellRussianNumbers('1-й'), 'первый');
  assert.equal(spellRussianNumbers('2-я улица'), 'вторая улица');
  assert.equal(spellRussianNumbers('на 2-й улице'), 'на второй улице');
  assert.equal(spellRussianNumbers('в 5-м классе'), 'в пятом классе');
  assert.equal(spellRussianNumbers('1-го апреля'), 'первого апреля');
  assert.equal(spellRussianNumbers('в 90-х годах'), 'в девяностых годах');
  assert.equal(spellRussianNumbers('1990-е'), 'тысяча девятьсот девяностые');
  // terminações de cardinal: двух, пяти, тремя
  assert.equal(spellRussianNumbers('для 2-х человек'), 'для двух человек');
  assert.equal(spellRussianNumbers('до 5-ти'), 'до пяти');
  assert.equal(spellRussianNumbers('с 3-мя друзьями'), 'с тремя друзьями');

  assert.equal(spellRussianNumbers('2,5 литра'), 'две целых пять десятых литра');
  assert.equal(spellRussianNumbers('1,5'), 'одна целая пять десятых');
  assert.equal(spellRussianNumbers('0,75'), 'ноль целых семьдесят пять сотых');

  assert.equal(spellRussianNumbers('в 9:00'), 'в девять часов');
  assert.equal(spellRussianNumbers('в 21:00'), 'в двадцать один час');
  assert.equal(spellRussianNumbers('в 1:00'), 'в час');
  assert.equal(spellRussianNumbers('в 14:30'), 'в четырнадцать тридцать');
  assert.equal(spellRussianNumbers('в 14.30'), 'в четырнадцать тридцать');
  assert.equal(spellRussianNumbers('с 9:00 до 18:00'), 'с девяти часов до восемнадцати часов');

  assert.equal(spellRussianNumbers('10%'), 'десять процентов');
  assert.equal(spellRussianNumbers('около 20%'), 'около двадцати процентов');
  assert.equal(spellRussianNumbers('500 ₽'), 'пятьсот рублей');
  assert.equal(spellRussianNumbers('22 ₽'), 'двадцать два рубля');
  assert.equal(spellRussianNumbers('$10'), 'десять долларов');
  assert.equal(spellRussianNumbers('2 млн рублей'), 'два миллиона рублей');
  assert.equal(spellRussianNumbers('100 км'), 'сто километров');
  assert.equal(spellRussianNumbers('−5 °C'), 'минус пять градусов');
  assert.equal(spellRussianNumbers('№ 5'), 'номер пять');
  assert.equal(spellRussianNumbers('2 000 рублей'), 'две тысячи рублей');
});

test('números em russo: o que não é número russo fica como está', () => {
  assert.equal(spellRussianNumbers('mp3 V2 3D 2h30 1ª'), 'mp3 V2 3D 2h30 1ª');
  assert.equal(spellRussianNumbers('Доброе утро!'), 'Доброе утро!');
  // com o acento da trilha, também funciona
  assert.equal(spellRussianNumbers('У меня́ 2 кни́ги.'), 'У меня́ две кни́ги.');
});
