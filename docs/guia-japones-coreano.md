# Guia de conteúdo: japonês (ja) e coreano (ko)

Convenções para escrever os pacotes `src/data/ja` e `src/data/ko`. Vale para quem acrescentar conteúdo depois.

## O app e o público

LinuLingo ensina idiomas a **brasileiros**. Todo texto em português é do Brasil, natural, preciso e simpático, com aspas «assim» e sem floreio de marketing. O formato de cada arquivo é o mesmo dos outros idiomas: tome como modelo o arquivo de mesmo nome em `src/data/fi/` (finlandês, o pacote mais recente) e, para escrita não latina, `src/data/ru/` (alfabeto, teclado). Os tipos estão em `src/data/types.ts`.

## Como o app mostra a pronúncia

- Embaixo de cada texto no idioma, o app mostra sozinho a **leitura** e a **IPA**:
  - no japonês, kana + romaji Hepburn («わたし は がくせい です · watashi wa gakusei desu»), pelo kuromoji (`scripts/gerar-leituras-ja.ts`);
  - no coreano, a romanização revisada e a IPA pelas regras de pronúncia (`src/services/ipa-ko.ts`).
- **Não escreva romaji nem romanização nos campos do idioma.**
- Nos campos em português (dicas, explicações) pode citar a palavra com a leitura: «ありがとう (arigatō)», «감사합니다 (gamsahamnida)».

## Japonês

- Japonês moderno e natural de Tóquio (padrão, 標準語), sem espaços entre as palavras.
- **Kanji pelo nível**:
  - use kanji para as palavras cujo kanji o aluno do nível já conhece (A1 ≈ N5, A2 ≈ N4, B1 ≈ N3, B2 ≈ N2, C1–C2 ≈ N1);
  - o resto vai em kana, como num livro graduado. Na A1.1, quase tudo em hiragana e katakana, com uns poucos kanji básicos (日本, 人, 私, 一〜十).
- **Números sempre em kanji ou kana** (三時, 二十歳, 千円), nunca em algarismos: a leitura sai do kanji.
- Pontuação japonesa `。、！？「」`; nada de letras latinas nem algarismos no meio do japonês (escreva ティーシャツ, não Tシャツ).
- Registro:
  - A1–A2.1: です/ます;
  - forma simples (dicionário, た, ない) a partir do A2.2;
  - keigo (尊敬語・謙譲語) do B1.4 em diante.
- Nas respostas de voz (`expected`):
  - o primeiro item é a resposta-modelo inteira;
  - depois, 2–4 trechos curtos como o reconhecimento de voz escreve: com o kanji comum («学生», «ありがとうございます») e, quando é comum sair dos dois jeitos, a versão em kana também.
  - A comparação é por trecho, então não precisa de espaços.

## Coreano

- Coreano padrão de Seul (표준어), só em hangul: **nada de hanja** nos campos do idioma (o hanja pode aparecer na explicação em português).
- **Números por extenso em hangul** (세 시, 스무 살, 천 원), com o sistema certo (nativo × sino-coreano).
- Espaçamento padrão (띄어쓰기) e pontuação `. , ? !`.
- Registro:
  - 해요체 desde o A1.1;
  - 합니다체 no A1.2 (apresentações, avisos);
  - 반말 a partir do A2.2;
  - honoríficos (-시-, 드리다, 계시다) do B1 em diante.
- Nas respostas de voz, os trechos-chave podem vir sem a partícula («학생», «감사합니다»): a comparação é por sílaba.

## Vocabulário (`VocabRow`)

`[palavra, tradução, classe, categoria, emoji, frase de exemplo]`, sem 7º campo (não há gênero).

- **palavra**:
  - japonês na grafia usual (水, 食べる, ありがとう, コーヒー), verbos na forma de dicionário;
  - coreano na forma de dicionário (먹다, 예쁘다) e substantivos sem partícula.
- **tradução**: comece pela palavra portuguesa simples, **a mesma que os outros idiomas do app usam para o mesmo conceito** (confira com `grep "'água'" src/data/*/vocabulario.ts`). A imagem da palavra é escolhida por essa tradução e reaproveitada entre os idiomas.
  - Notas depois, entre parênteses, com formas ou gramática: «comer (grupo 2: 食べます, 食べた)», «bonito (adjetivo -い)».
  - Para separar sentidos, uma palavra só entre parênteses: «banco (assento)».
- **classe**: substantivo, verbo, adjetivo, advérbio, pronome, conjunção, numeral, interjeição, expressão, **partícula** (は, が, 을/를) ou **contador** (〜本, 〜枚, 개, 명).
- **categoria**, nos mesmos nomes dos outros idiomas: Essenciais, Expressões, Verbos-chave, Descrições, Pessoas, Corpo, Saúde, Casa, Alimentação e Restaurantes, Viagens e Transporte, Lazer e Esportes, Escola, Trabalho e Negócios, Compras, Natureza, Animais, Roupas, Profissões, Números, Tempo, Cores, Sentimentos, Sociedade, Ciência, Tecnologia.
- **emoji**: ponha um quando houver um que sirva (senão `null`). O app mostra foto ou pictograma no lugar pela tradução; o emoji é o último recurso. As palavras das lições **precisam** ter emoji.
- **frase de exemplo**: natural, no nível da palavra, terminada em `。！？` (ja) ou `. ! ?` (ko).

## IDs (únicos no app inteiro)

| Item | Formato |
|---|---|
| Unidades | `ja-u1`…`ja-u15` |
| Cartões | `ja-c1`… |
| Lições | `ja-u1-l1`, `ja-u1-l2`, `ja-u1-l3`, `ja-u1-p` |
| Gramática | `ja-g-…` |
| Histórias | `ja-h01`… |
| Cenários | `ja-s1`… |
| Sotaques | `ja-…` |

No coreano, `ko-`.

## Subníveis

A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B1.3, B1.4, B2.1, B2.2, B2.3, B2.4, C1.1, C1.2, C2 (15). `cefr` = os dois primeiros caracteres.

## Validação

- `npx tsx scripts/checar-conteudo-cjk.ts ja src/data/ja/arquivo.ts` confere unidades, histórias, gramática e a escrita.
- `npx tsx scripts/checar-vocab-cjk.ts ja src/data/ja/vocab-a.ts` confere o vocabulário.
- `npx tsc --noEmit` confere os tipos.
- `npm test` roda os testes de conteúdo, entre eles `src/data/conteudo.test.ts`.
