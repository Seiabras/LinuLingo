# Passagem de trabalho (IA): idiomas asiáticos e africanos, imagens, provas

Estado em 28/09/2026, branch `claude/funny-ritchie-6x1d7l`. Documento para outra sessão continuar se esta parar no meio. O trabalho era feito por uma sessão coordenadora com até 20 agentes em paralelo. Cada agente cuidava só dos seus próprios arquivos e sem fazer commit; a coordenadora integrava, validava e fazia os commits.

## O que o dono pediu (em ordem)

1. **As línguas asiáticas.** Japonês e coreano completos. Na lista de idiomas, as maiores da Ásia: mandarim, híndi, árabe, bengali, indonésio, urdu, marati, vietnamita, télugo, turco. ✅ A lista está feita.
2. **Provas e dicas.** Provas de proficiência (TOEFL, Cambridge…) e recomendações de filmes, livros, séries etc. para cada idioma. ✅ Feito: tela `/provas`, dados em `src/data/recursos/`, 30 idiomas.
3. **Imagens em vez de emojis** no conteúdo de todos os idiomas, avisando as outras IAs. Regra no `AGENTS.md` ✅. A implementação está em andamento (ver abaixo).
4. **Os 5 maiores idiomas africanos sem o suaíli:** hauçá (ha), amárico (am), iorubá (yo), oromo (om) e igbo (ig). Já estão na lista ✅. Os pacotes completos estão em andamento (ver abaixo).
5. `/goal terminar a lista`: terminar tudo o que está acima.

## Como está cada frente

### Japonês (`src/data/ja`) e coreano (`src/data/ko`): conteúdo quase pronto, falta integrar

- **Infraestrutura pronta e testada:**
  - `src/services/ipa-ja.ts`: kana → IPA/romaji;
  - `ja-leitura.ts`: leitura pelo dicionário;
  - `ipa-ko.ts`: hangul → IPA/RR;
  - `texto-cjk.ts`;
  - `scripts/checar-conteudo-cjk.ts` e `checar-vocab-cjk.ts`;
  - `scripts/gerar-leituras-ja.ts`, que usa o kuromoji, dependência de desenvolvimento.
- **Linha de leitura acima da IPA:** campo `reading` do pacote, componente `<Ipa>` em `src/components/ui.tsx`.
- **Respostas:** a comparação trata kana, kanji e hangul (`answers.ts`), e a resposta em kana vale pelo kanji (`typedReading`).
- **Guia de conteúdo:** `docs/guia-japones-coreano.md`.
- **Estrutura dos arquivos:** um arquivo por parte, cada um de um agente.
  - O vocabulário junta `vocab-trilha` + `vocab-extras` + `vocab-a`/`vocab-b` intercalados (`vocabulario.ts`); palavra repetida vale a primeira.
  - As histórias ficam em `historias-1` (A1.1–B1.3) e `historias-2` (B1.4–C2).

**Tamanho de cada arquivo (linhas) quando esta passagem foi escrita.** Um arquivo com 3–7 linhas ainda é o esqueleto vazio.

| arquivo | ja | ko | meta |
|---|---|---|---|
| curriculo | 1645 | 1361 | 15 unidades, 4 lições cada |
| gramatica | 3813 | 4419 | 40 tópicos |
| linguistica | 3 (vazio) | 3 (vazio) | 7 áreas; o agente da gramática escreve depois |
| historias-1 / -2 | 2522 / 1056 | 1296 / 707 | 21 / 24 histórias (3 por subnível) |
| extras, falsos-amigos, pares, bichos, alfabeto, vocab-extras | prontos | prontos | — |
| vocab-trilha | 304 | 304 | ~270 palavras das lições |
| vocab-a / vocab-b | 2348 / 1966 (b pronto: 1.961) | 1404 / 1364 | ~2.200 / ~1.900 |
| sotaques, linguas-meta | prontos | prontos (+ variante ko-KP em variantes.ts) | — |

**Para conferir se um arquivo está completo**, rode o verificador e conte os itens:
- `npx tsx scripts/checar-conteudo-cjk.ts ja src/data/ja/curriculo.ts` (vale para qualquer arquivo);
- `npx tsx scripts/checar-vocab-cjk.ts ja src/data/ja/vocab-a.ts`.

**Integração** (ainda não feita: o ja e o ko **não estão registrados** em `PACKS`):

1. Completar o que faltar (linguística, histórias, vocabulário), com agentes que usem os prompts do fim deste documento.
2. `npx tsx scripts/gerar-leituras-ja.ts`. Cada «sem leitura» ou algarismo que ele apontar se corrige no texto ou em `src/data/ja/leituras-manuais.ts`.
3. Em `src/data/idiomas.ts`:
   - importar `JAPONES` (`./ja`) e `COREANO` (`./ko`);
   - pôr `ja` e `ko` em `PACKS`;
   - trocar, em `LANGUAGES`, os objetos-esqueleto de ja/ko pelos pacotes.
4. Em `src/data/conteudo.test.ts`: `STORIES_PER_LEVEL` com `ja: 3, ko: 3`.
5. `git apply docs/passagem-pendente.patch`. Ele traz:
   - as roupinhas do Linu dos 7 idiomas novos, em `roupas-linu.ts` (os desenhos já estão em `LinuOutfit.tsx`);
   - o cadastro das línguas próprias, em `linguas-proprias.ts`: espalha `OWN_META_JA`/`KO` e os africanos.

   Só dá para aplicar depois de registrar os pacotes, senão os testes `roupas-linu.test.ts` e `linguas.test.ts` falham. Registre os africanos também, ou tire as linhas deles do patch.
6. `npx tsc --noEmit`, `npx expo lint` e `npm test`. Depois, rodar o app (`CI=1 npx expo start --web --port 8081`) e testar com o Playwright (Chromium em `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; modelo em `scripts/fluxo-finlandes.mjs`).
7. README: seção de cada idioma (modelo: as do finlandês e do francês) e «disponível» na tabela.

**Observações dos agentes que ainda valem:**
- Os pares de acento de altura do japonês têm `prosodic: true`: a IPA não marca o tom, e sem isso os pares cairiam em «soam igual».
- O `registerBreakers` compara por trecho (sem espaço), então não use palavras curtas que caibam dentro de formas educadas (だ, 야, 응).

### Imagens no lugar dos emojis: em andamento (um agente)

- **Plano:**
  1. Casar melhor as fotos que já existem. Ignorar as notas de gramática entre parênteses na tradução recupera ~870 conceitos. Fica em `src/services/word-images.ts`.
  2. Pictogramas livres do **Mulberry Symbols** (CC BY-SA 4.0, https://github.com/mulberrysymbols/mulberry-symbols) para verbos, adjetivos e palavras abstratas:
     - mapa em `src/data/pictogramas-mapa.ts`, da tradução em português para o símbolo;
     - `scripts/pictogramas-palavras.mjs` gera as imagens em `assets/pictogramas/palavras/` e o arquivo `src/data/pictogramas-palavras.ts`.
  3. `WordImage` passa a seguir a ordem foto → pictograma → emoji.
  4. Créditos, fora do pré-cache offline, README.
- **Rede:** o Wikimedia Commons, o Wikidata, o Lingua Libre e o Hugging Face estavam **bloqueados** pela rede deste ambiente (403). Fotos novas dependem de liberar esses domínios nas configurações do ambiente.
- **Onde conferir o estado:**
  - `git status` e os arquivos acima;
  - `npx eslint` nos três arquivos (estava com 2 erros);
  - se `WordImage.tsx` já usa o pictograma.

### Idiomas africanos: começando

- **Pronto:**
  - IPA por regras dos 5 (`src/services/ipa-africa.ts`, com testes);
  - `texto-africa.ts`;
  - `scripts/checar-conteudo-africa.ts` e `checar-vocab-africa.ts`;
  - o guia `docs/guia-africanos.md`;
  - os esqueletos `src/data/{ha,am,yo,om,ig}/`, com o `index.ts` de cada pacote pronto (voz, IPA, transliteração do amárico, letras especiais, gênero);
  - o palácio da memória de ha/am/om (masculino e feminino) e os textos de «sem gênero» de yo/ig, em `mnemonics.ts`;
  - as provas e dicas dos 5.
- **Iorubá:** 7 agentes rodando quando esta passagem foi escrita: trilha, gramática e linguística, as duas metades das histórias, extras, vocabulário A e B. Falta o agente de **sotaques/variantes/línguas próprias** (dialetos oyo, ijẹ̀ṣà, ẹ̀gbá, ìjẹ̀bú, èkìtì…; o iorubá do candomblé no Brasil; a língua lucumí de Cuba).
- **Hauçá, amárico, oromo, igbo:** nada escrito ainda. São os mesmos 8 papéis de agente de cada idioma.
- **Voz:** não há voz neural livre (Piper) para esses idiomas; os modelos MMS da Meta são NC, não servem. Por enquanto, depende da voz do aparelho.

## Os 8 papéis de agente (um idioma de cada vez)

Todos recebem estas instruções:
- ler o guia (`docs/guia-japones-coreano.md` ou `docs/guia-africanos.md`), o `AGENTS.md`, `src/data/types.ts` e os modelos em `src/data/fi/`;
- escrever **só** os próprios arquivos, sem commit;
- dar aos auxiliares da pasta temporária nomes com prefixo próprio (a pasta é compartilhada e já houve colisão);
- validar com o verificador até ✅ e com `npx tsc --noEmit`.

| Papel | Arquivos | O que pedir |
|---|---|---|
| Trilha | `curriculo.ts`, `vocab-trilha.ts` | 15 unidades (uma por subnível, em ordem). Cada uma: cartão com história, cultura, gramática, ≥3 exemplos e guia de escrita na unidade 1; 3 lições (licao, licao, voz «Desafio de voz: …») com 6 palavras (todas em `vocab-trilha`, com emoji) e 3 lacunas de 3 opções; prova com desafio de voz. |
| Gramática | `gramatica.ts`, `linguistica.ts` | 40 tópicos, 2–3 por subnível, quiz ≥3; as 7 áreas na ordem fonetica, fonologia, morfologia, sintaxe, semantica, pragmatica, estilistica, com todo id de gramática em exatamente uma área. |
| Histórias 1 | `historias-1.ts` | 3 por subnível de A1.1 a B1.3 (21). Ramificadas: 1–3 escolhas «wrong», ≥2 finais, ≥1 «bom», glossário; o protagonista é o Linu, cada história num lugar real, ligações com o Brasil. |
| Histórias 2 | `historias-2.ts` | 3 por subnível de B1.4 a C2 (24). |
| Extras | `extras.ts`, `vocab-extras.ts`, `falsos-amigos.ts`, `pares.ts`, `bichos.ts`, `alfabeto.ts` (só idiomas de outra escrita) | Comunidade (~8), cenários (~8, com registerBreakers nos formais), diário (~15), shadowing (~30), etimologias (~60–80; toda palavra em `vocab-extras`), falsos amigos, pares mínimos (≥2 por contraste), bichos (ids = chaves de `BICHOS_PT`, com espaço antes do verbo final). |
| Cultura | `sotaques.ts`, `variantes.ts`, `linguas-meta.ts` | Sotaques, dialetos e línguas próprias com códigos ISO 3166-2 válidos, features ≥2 e exemplos ≥1; `OWN_META_XX` para cada «língua», com glottocodes que existem em `src/data/linguas-glottolog.ts`. |
| Vocabulário A | `vocab-a.ts` | ~2.000–2.200 palavras: Verbos-chave, Descrições, Expressões, Essenciais, Sentimentos, Cores, Números, Tempo, Pessoas, Corpo, Saúde, Profissões. |
| Vocabulário B | `vocab-b.ts` | ~1.700–1.900 palavras: Alimentação, Lazer, Viagens, Animais, Sociedade, Casa, Escola, Natureza, Compras, Trabalho, Roupas, Ciência, Tecnologia. |

A tradução começa pela mesma palavra portuguesa que os outros idiomas usam para o conceito, porque a imagem sai dela. O vocabulário é escrito em lotes de ~300, validados a cada lote.

## Cuidados

- **Outras IAs mexem no repositório ao mesmo tempo.** Edite os arquivos compartilhados só com acréscimos, nunca reformate um arquivo inteiro (o prettier numa tela compartilhada gera conflito) e confira `git fetch origin master` antes de integrar.
- **Fatos a conferir quando a rede voltar:** os agentes de provas e dicas marcaram no relatório o que não conseguiram confirmar. Os pontos principais:
  - a validade do CAPLE e do CILS;
  - títulos brasileiros de alguns filmes;
  - o Bergenstesten;
  - itens da mídia oromo e igbo.
