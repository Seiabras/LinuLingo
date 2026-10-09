import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import type { AlphabetLetter } from '@/data/types';
import { alfabetoAutomatico, alfabetoLatinoExtra, CURSIVO_POR_IDIOMA } from './alfabeto-auto';

test('alfabeto gerado: cada letra tem som e uma palavra do vocabulário que começa com ela', () => {
  let n = 0;
  for (const p of Object.values(PACKS)) {
    if (p.alphabet || !p.keyboardRows || !p.reading) continue;
    const a = alfabetoAutomatico(p);
    if (!a) continue;
    n++;
    for (const l of a.letters) {
      const min = l.letter.split(' ').at(-1)!;
      assert.ok(l.short && l.short !== min, `${p.code}: ${l.letter} sem som`);
      assert.ok(l.example, `${p.code}: ${l.letter} sem exemplo`);
      assert.ok(l.example![0].toLocaleLowerCase(p.speechLocale).startsWith(min), `${p.code}: ${l.example![0]} não começa com ${min}`);
      assert.ok(p.vocab.some((v) => v.word_target === l.example![0]), `${p.code}: ${l.example![0]} fora do vocabulário`);
    }
  }
  assert.ok(n >= 15, `só ${n} idiomas com alfabeto gerado`);
});

test('alfabeto árabe: letras conectáveis têm as 4 formas, as 6 que não conectam adiante só têm isolada/final', () => {
  const a = alfabetoAutomatico(PACKS.ar)!;
  const conecta = a.letters.find((l) => l.letter === 'ب'); // conecta dos dois lados
  assert.ok(conecta?.joining?.initial && conecta.joining.medial && conecta.joining.final);
  const naoConecta = a.letters.find((l) => l.letter === 'د' || l.letter === 'ا' || l.letter === 'ر');
  if (naoConecta) {
    assert.equal(naoConecta.joining?.initial, undefined);
    assert.equal(naoConecta.joining?.medial, undefined);
    assert.ok(naoConecta.joining?.final);
  }
  // idiomas de outra escrita (não-árabe) não ganham `joining`
  assert.ok(alfabetoAutomatico(PACKS.uk)!.letters.every((l) => l.joining === undefined));
});

test('alfabeto gerado: letras com cara de latina viram iguais ou falsas amigas', () => {
  const uk = alfabetoAutomatico(PACKS.uk)!;
  assert.equal(uk.letters.find((l) => l.letter === 'Н н')?.group, 'falsa');
  assert.equal(uk.letters.find((l) => l.letter === 'К к')?.group, 'igual');
  // georgiano: sem a maiúscula mtavruli, que não se usa no texto comum
  assert.ok(alfabetoAutomatico(PACKS.ka)!.letters.every((l) => !l.letter.includes(' ')));
  // o russo continua com o alfabeto feito à mão (as letras são as mesmas; só o objeto passa a ser
  // outro porque `alfabetoAutomatico` acrescenta a nota de cursivo por cima — ver o teste de
  // cursivo mais abaixo, que confere letters/readingWords e o cursiveInfo separadamente)
  assert.equal(alfabetoAutomatico(PACKS.ru)!.letters, PACKS.ru.alphabet!.letters);
  assert.equal(alfabetoAutomatico(PACKS.ru)!.readingWords, PACKS.ru.alphabet!.readingWords);
});

// sueco, norueguês, dinamarquês, islandês, estoniano e espanhol ganharam o alfabeto oficial completo
// nesta rodada (ver PENDENTES.md pras fontes de cada um) — o mesmo tratamento que o romeno já tinha.
// A tabela abaixo confere, pra cada um: o total de letras oficiais, a ordem oficial completa (não a
// ordem por categoria) e alguns pontos de checagem (grupo esperado de letras-chave).
const LATINOS_COMPLETOS: {
  code: 'sv' | 'nb' | 'da' | 'is' | 'et' | 'es';
  ordem: string;
  grupos: Record<string, AlphabetLetter['group']>;
}[] = [
  {
    code: 'sv',
    ordem: 'a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö',
    // h/j/r/u/y são as falsas amigas (h tem som, j soa “y”, r nunca é gutural, u/y são vogais sem
    // equivalente); c/q/w/x/z só aparecem em empréstimos (en.wikipedia.org/wiki/Swedish_alphabet)
    grupos: { h: 'falsa', j: 'falsa', r: 'falsa', u: 'falsa', y: 'falsa', c: 'internacional', q: 'internacional', w: 'internacional', x: 'internacional', z: 'internacional', å: 'nova', ä: 'nova', ö: 'nova' },
  },
  {
    code: 'nb',
    ordem: 'a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å',
    grupos: { h: 'falsa', j: 'falsa', r: 'falsa', u: 'falsa', y: 'falsa', c: 'internacional', q: 'internacional', w: 'internacional', x: 'internacional', z: 'internacional', æ: 'nova', ø: 'nova', å: 'nova' },
  },
  {
    code: 'da',
    ordem: 'a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å',
    // o dinamarquês não tem o abrandamento de g/k do sueco/norueguês, mas tem o “soft d” e o r uvular
    grupos: { h: 'falsa', j: 'falsa', r: 'falsa', y: 'falsa', u: 'igual', c: 'internacional', q: 'internacional', w: 'internacional', x: 'internacional', z: 'internacional', æ: 'nova', ø: 'nova', å: 'nova' },
  },
  {
    code: 'is',
    ordem: 'a á b d ð e é f g h i í j k l m n o ó p r s t u ú v x y ý þ æ ö',
    // islandês não distingue b/d/g de p/t/k pela voz (só pelo sopro) — por isso b/d/g são falsas
    // amigas; c/q/w/z NÃO fazem parte do alfabeto oficial islandês (por isso nem aparecem na ordem)
    grupos: { b: 'falsa', d: 'falsa', g: 'falsa', h: 'falsa', j: 'falsa', r: 'falsa', u: 'falsa', y: 'falsa', x: 'igual', þ: 'nova', ð: 'nova', á: 'nova', é: 'nova', í: 'nova', ó: 'nova', ú: 'nova', ý: 'nova', æ: 'nova', ö: 'nova' },
  },
  {
    code: 'et',
    ordem: 'a b d e f g h i j k l m n o p r s š z ž t u v õ ä ö ü',
    // estoniano também não distingue b/d/g de p/t/k pela voz; f/š/z/ž fazem parte do alfabeto oficial
    // mas só aparecem em empréstimos (por isso 'internacional', não 'nova'); c/q/w/x/y NÃO fazem
    // parte do alfabeto estoniano (por isso nem aparecem na ordem)
    grupos: { b: 'falsa', d: 'falsa', g: 'falsa', h: 'falsa', j: 'falsa', r: 'falsa', f: 'internacional', š: 'internacional', z: 'internacional', ž: 'internacional', õ: 'nova', ä: 'nova', ö: 'nova', ü: 'nova' },
  },
  {
    code: 'es',
    ordem: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z',
    // g/j/r/v/z são as falsas amigas (g e j soam “r” gutural antes de e/i ou sempre, v soa “b”, r
    // dobrado/inicial é vibrado, nunca o nosso r gutural); k/w só em empréstimos
    grupos: { g: 'falsa', j: 'falsa', r: 'falsa', v: 'falsa', z: 'falsa', k: 'internacional', w: 'internacional', ñ: 'nova' },
  },
];

test('alfabeto latino completo: sv/nb/da/is/et/es ganharam o alfabeto oficial inteiro, não só as letras extras', () => {
  for (const { code, ordem, grupos } of LATINOS_COMPLETOS) {
    const esperada = ordem.split(' ');
    const a = alfabetoAutomatico(PACKS[code])!;
    assert.ok(a, `${code}: devia ter alfabeto`);
    assert.deepEqual(
      a.letters.map((l) => l.short),
      esperada,
      `${code}: ordem oficial não bate`,
    );
    for (const [letra, grupo] of Object.entries(grupos)) {
      const l = a.letters.find((x) => x.short === letra);
      assert.equal(l?.group, grupo, `${code}: ${letra} devia ser '${grupo}'`);
    }
    // toda letra tem IPA, som explicado e (exemplo real do vocabulário OU, só nas internacionais
    // sem palavra cadastrada ainda, nenhum exemplo — nunca um inventado)
    for (const l of a.letters) {
      assert.ok(l.ipa, `${code}: ${l.letter} sem IPA`);
      assert.ok(l.sound, `${code}: ${l.letter} sem explicação do som`);
      if (l.example) {
        assert.ok(PACKS[code].vocab.some((v) => v.word_target === l.example![0]), `${code}: ${l.example![0]} fora do vocabulário`);
      } else {
        assert.equal(l.group, 'internacional', `${code}: ${l.letter}: só a letra internacional pode ficar sem exemplo`);
      }
    }
    // o tour (tour.ts) e o jogo de múltipla escolha só-com-letras-extras continuam usando
    // alfabetoLatinoExtra sozinho — precisa continuar funcionando por cima do alfabeto completo
    const soExtra = alfabetoLatinoExtra(PACKS[code]);
    if (soExtra) assert.ok(soExtra.letters.every((l) => l.group === 'nova'), `${code}: alfabetoLatinoExtra só devia trazer 'nova'`);
  }
});

test('alfabeto do romeno: as 31 letras oficiais, K/Q/W/Y só em palavras internacionais', () => {
  const a = alfabetoAutomatico(PACKS.ro)!;
  assert.equal(a.letters.length, 31, 'o alfabeto romeno oficial tem 31 letras');

  const porLetra = new Map(a.letters.map((l) => [l.letter.split(' ').at(-1)!, l]));
  // as 5 já cadastradas como 'nova' continuam lá
  for (const l of ['ă', 'â', 'î', 'ș', 'ț']) assert.equal(porLetra.get(l)?.group, 'nova', `${l} devia ser 'nova'`);
  // K, Q, W, Y: a Wikipédia (en.wikipedia.org/wiki/Romanian_alphabet) diz que só aparecem em
  // palavras estrangeiras/nomes próprios — nunca em palavra nativa romena
  for (const l of ['k', 'q', 'w', 'y']) assert.equal(porLetra.get(l)?.group, 'internacional', `${l} devia ser 'internacional'`);
  // X tem IPA própria (/ks/, /ɡz/) e dezenas de palavras comuns no vocabulário (taxi, examen...):
  // não é letra só-internacional, mesmo sendo rara nas outras línguas latinas com essa marca
  assert.equal(porLetra.get('x')?.group, 'igual');
  // as outras 20 (26 - 5 nova - 4 k/q/w/y - x, já checado) são 'igual' ou 'falsa' (h e r soam
  // diferente do nosso h mudo e do nosso r gutural — mesmo critério já usado no esperanto)
  for (const l of ['h', 'r']) assert.equal(porLetra.get(l)?.group, 'falsa', `${l} devia ser 'falsa'`);
  const igual = 'abcdefgijlmnopstuvz'.split('');
  for (const l of igual) assert.equal(porLetra.get(l)?.group, 'igual', `${l} devia ser 'igual'`);

  // toda letra tem IPA, som explicado e (exemplo real do vocabulário OU, nas internacionais sem
  // palavra cadastrada ainda, nenhum exemplo — nunca um inventado)
  for (const l of a.letters) {
    assert.ok(l.ipa, `${l.letter} sem IPA`);
    assert.ok(l.sound, `${l.letter} sem explicação do som`);
    if (l.example) {
      assert.ok(
        PACKS.ro.vocab.some((v) => v.word_target === l.example![0]),
        `${l.letter}: ${l.example![0]} fora do vocabulário`,
      );
    } else {
      assert.equal(l.group, 'internacional', `${l.letter}: só a letra internacional pode ficar sem exemplo`);
    }
  }
  // Q é a única sem exemplo — nenhuma palavra do vocabulário ainda cadastrada com ela
  assert.equal(porLetra.get('q')?.example, undefined);
  // o jogo de leitura (igual ao dos idiomas de outra escrita) também passou a existir
  assert.ok(a.readingWords.length > 0);
  // o tour (tour.ts) usa alfabetoLatinoExtra sozinho pra saber se é "escrita diferente" ou só
  // "falta uma letra": continua valendo com as 5 letras extras, mesmo agora que o alfabeto
  // completo existe por cima dele
  const soExtra = alfabetoLatinoExtra(PACKS.ro);
  assert.equal(soExtra?.letters.length, 5);
  assert.ok(soExtra!.letters.every((l) => l.group === 'nova'));
});

test('alfabeto do romeno: ordem oficial da escola (a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z), não a ordem por categoria', () => {
  // pedido do dono do app (08/10/2026): o treino deve ensinar o alfabeto na sequência que um
  // nativo aprende na escola — não agrupado por igual/falsa/nova/internacional. A ordem oficial
  // (en.wikipedia.org/wiki/Romanian_alphabet) intercala as letras extras (ă â î ș ț) e as
  // internacionais (k q w y) no lugar certo, misturadas com as 'igual'/'falsa'.
  const ordemOficial = 'a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z'.split(' ');
  const a = alfabetoAutomatico(PACKS.ro)!;
  const ordemObtida = a.letters.map((l) => l.short);
  assert.deepEqual(ordemObtida, ordemOficial);
  // a categoria continua acessível em cada letra, só não dita mais a ordem de exibição
  assert.equal(a.letters.find((l) => l.short === 'h')?.group, 'falsa');
  assert.equal(a.letters.find((l) => l.short === 'ă')?.group, 'nova');
  assert.equal(a.letters.find((l) => l.short === 'k')?.group, 'internacional');
});

test('cursivo: russo e hebraico ganham a nota de que o cursivo é um traçado diferente por letra, não uma forma reposicionada como o árabe', () => {
  // confirmado em en.wikipedia.org/wiki/Russian_cursive e en.wikipedia.org/wiki/Cursive_Hebrew
  // (08/10/2026): nos dois, a letra de mão (письменный шрифт / כתב יד) muda de TRAÇADO por letra —
  // diferente do árabe, em que a MESMA forma de letra troca de posição (isolada/inicial/medial/
  // final, campo `joining`). Por isso usam `cursiveInfo` (texto), não `joining` (glifo).
  assert.ok(CURSIVO_POR_IDIOMA.ru.includes('письменный'));
  assert.ok(CURSIVO_POR_IDIOMA.he.includes('כתב יד'));
  // o russo tem alfabeto feito à mão (pack.alphabet) e já mostra a nota de ponta a ponta
  const ru = alfabetoAutomatico(PACKS.ru)!;
  assert.equal(ru.cursiveInfo, CURSIVO_POR_IDIOMA.ru);
  // nenhum idioma de escrita latina (nem o árabe, que usa `joining`) ganha esta nota
  assert.equal(alfabetoAutomatico(PACKS.ro)!.cursiveInfo, undefined);
  assert.equal(alfabetoAutomatico(PACKS.ar)!.cursiveInfo, undefined);
  // o hebraico tem a nota pronta em CURSIVO_POR_IDIOMA, mas o pacote (`he/index.ts`) ainda não tem
  // `reading` (é A1, incompleto — nota do próprio pacote: "ainda não tem romanização automática") e
  // por isso `alfabetoAutomatico` nem chega a gerar um alfabeto pro hebraico hoje — a nota de
  // cursivo já está pronta pro dia em que o hebraico ganhar leitura automática (ver PENDENTES.md),
  // mas não é visível na tela ainda. Não é regressão desta entrega: confirmar que continua null.
  assert.equal(alfabetoAutomatico(PACKS.he), null);
});
