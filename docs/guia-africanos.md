# Guia de conteúdo: hauçá (ha), amárico (am), iorubá (yo), oromo (om) e igbo (ig)

Convenções para escrever os pacotes `src/data/ha`, `src/data/am`, `src/data/yo`, `src/data/om` e `src/data/ig`. Valem também para quem acrescentar conteúdo depois.

## O app e o público

O LinuLingo ensina idiomas a **brasileiros**.

- Todo texto em português é do Brasil: natural, preciso e simpático, com aspas «assim» e sem floreio de marketing.
- Cada arquivo tem o mesmo formato do arquivo de mesmo nome em `src/data/fi/` (finlandês, o modelo mais recente). No amárico, a escrita não é latina: veja também `src/data/ru/` (alfabeto e teclado).
- Os tipos estão em `src/data/types.ts`.
- Onde houver ligação com o Brasil, aproveite:
  - o iorubá do candomblé na Bahia (orixá, axé, Iemanjá, acarajé vêm do iorubá);
  - os agudás, brasileiros retornados que fundaram o Bairro Brasileiro de Lagos;
  - os malês (muçulmanos, muitos hauçás) da Revolta dos Malês, em Salvador, em 1835;
  - o café, que veio da Etiópia.

## Como o app mostra a pronúncia

A IPA sai por regras (`src/services/ipa-africa.ts`) embaixo de cada texto no idioma. No amárico, aparece também a transliteração em letras latinas (ሰላም · sälam).

**Não escreva transliteração nos campos do idioma.** Nos campos em português pode citar a palavra com a pronúncia: «ሰላም (salam)», «Ẹ kú àárọ̀ (é ku aarô)».

## Escrita de cada idioma

| Idioma | Escrita |
|---|---|
| **Iorubá** | Ortografia padrão com **todos os tons marcados**, como nos livros didáticos: agudo = alto (á), grave = baixo (à), sem marca = médio. Use os pontos embaixo: ẹ, ọ, ṣ (caracteres pré-compostos quando existirem). O n depois de vogal no fim da sílaba marca a vogal nasal (ìyàwó, ọmọ, jẹun). |
| **Igbo** | Ortografia padrão (Ọnwụ), com os pontos embaixo: ị, ọ, ụ, ṅ. Os tons **não** são marcados no texto corrido, como os igbos escrevem; nas explicações em português, marque o tom quando ele muda o sentido (ákwà «ovo» × àkwà «cama» × ákwá «choro» × akwà «pano»). |
| **Hauçá** | Boko (alfabeto latino) com ɓ, ɗ, ƙ, ƴ e o apóstrofo; tom e vogal longa **não** são marcados no texto corrido (como nos jornais). Nas explicações em português, cite o tom e a duração quando importar. |
| **Oromo** | Qubee: vogal dobrada = longa (Oromoo), consoante dobrada = geminada (akkam), ejetivas c, ph, q, x, ts, dh implosiva, apóstrofo = oclusiva glotal (ba'e). |
| **Amárico** | Fidel (silabário ge’ez), com a pontuação etíope ። (ponto) e ፣ (vírgula); o ponto de interrogação é «?» (o ፧ é raro). Espaço normal entre as palavras. Sem letras latinas no meio. |

Em todos os idiomas, os **números vão por extenso** (a pronúncia sai do texto), e nada de letras de outra escrita no meio do texto do idioma.

**Registro.** Ensine as formas de respeito desde o começo:

| Idioma | Formas de respeito |
|---|---|
| Iorubá | ẹ em vez de o, e as saudações do tempo e da hora: Ẹ kú àárọ̀, Ẹ kú iṣẹ́ |
| Hauçá | Ina kwana?, Sannu da aiki |
| Amárico | እርስዎ (ərswo) para os mais velhos |
| Oromo | isin como plural de respeito |
| Igbo | Ndewo, a ordem de fala dos mais velhos |

## Vocabulário (`VocabRow`)

Formato: `[palavra, tradução, classe, categoria, emoji, frase de exemplo, gênero?]`.

**Palavra**
- Forma de dicionário:
  - hauçá: substantivo no singular, verbo na forma básica;
  - amárico: verbo no infinitivo com መ- (መብላት, comer);
  - oromo: verbo no infinitivo em -uu (nyaachuu);
  - iorubá e igbo: o verbo nu (jẹ, rie).

**Tradução**
- Comece pela palavra portuguesa simples, **a mesma que os outros idiomas do app usam para o mesmo conceito** (`grep "'água'" src/data/*/vocabulario.ts`). A imagem da palavra é escolhida por essa tradução e reaproveitada entre os idiomas.
- Notas vão depois, entre parênteses.

**Gênero**
- Hauçá, amárico e oromo têm masculino e feminino: 7.º campo `'m'` ou `'f'` nos substantivos.
- Iorubá e igbo não têm gênero: sem 7.º campo.

**Classes**
- substantivo, verbo, adjetivo, advérbio, pronome, preposição, conjunção, numeral, interjeição, expressão, partícula.

**Categoria**
- Use os mesmos nomes dos outros idiomas: Essenciais, Expressões, Verbos-chave, Descrições, Pessoas, Corpo, Saúde, Casa, Alimentação e Restaurantes, Viagens e Transporte, Lazer e Esportes, Escola, Trabalho e Negócios, Compras, Natureza, Animais, Roupas, Profissões, Números, Tempo, Cores, Sentimentos, Sociedade, Ciência, Tecnologia.

**Emoji**
- Ponha um quando servir. O app mostra foto ou pictograma no lugar dele, e o emoji fica como último recurso.
- As palavras das lições **precisam** ter emoji.

**Frase de exemplo**
- Natural, no nível da palavra, terminada em pontuação.

## IDs (únicos no app inteiro)

`<código>-u1`… (unidades), `<código>-c1`… (cartões), `<código>-u1-l1`… e `<código>-u1-p` (lições), `<código>-g-…` (gramática), `<código>-h01`… (histórias), `<código>-s1`… (cenários), `<código>-…` (sotaques).

## Subníveis

A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B1.3, B1.4, B2.1, B2.2, B2.3, B2.4, C1.1, C1.2, C2 (15). `cefr` = os dois primeiros caracteres.

## Validação

- `npx tsx scripts/checar-conteudo-africa.ts <código> src/data/<código>/arquivo.ts`: unidades, histórias, gramática e escrita.
- `npx tsx scripts/checar-vocab-africa.ts <código> src/data/<código>/vocab-a.ts`: vocabulário.
- `npx tsc --noEmit`: tipos.
- `npm test`: testes de conteúdo.
