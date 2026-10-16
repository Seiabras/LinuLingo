# Até que nível um dialeto (ou um sotaque promovido a dialeto) consegue chegar

Pedido do dono (16/10/2026): fazer a mesma pesquisa de teto que existe para os idiomas
(`TETO-DOS-IDIOMAS.md`) também para dialetos e sotaques, **para deixar anotado para implementações
futuras** — isto é pesquisa e método, não implementação. Ninguém deve começar a construir um curso de
dialeto a partir só deste documento sem combinar com o dono antes (mesma regra do
`PENDENTES.md`: "No mundo ideal, cada dialeto vira um curso próprio... falta: (1) achar fontes, (2)
medir o teto, (3) fazer o curso" — isto cobre o passo (2), para o primeiro lote).

## Por que o método dos idiomas não dá pra copiar direto

O teto de um **idioma** (`TETO-DOS-IDIOMAS.md`) usa três sinais: o tamanho da Wikipédia própria dele,
quanto as OUTRAS Wikipédias falam dele, e o papel institucional (ensino superior, imprensa,
literatura). Um **dialeto** quase nunca tem Wikipédia própria (a dele é a do idioma inteiro) — então
o primeiro sinal simplesmente não existe na maioria dos casos. É preciso trocar por sinais que
existem de verdade para variedades regionais:

1. **Padronização e academia própria**: tem ortografia oficial distinta, uma academia/instituto que
   regula ou descreve especificamente essa variedade (não o idioma inteiro)? Exemplos reais: a
   Academia Brasileira de Letras (português do Brasil), o Office québécois de la langue française
   (francês do Quebec), o Österreichisches Wörterbuch (alemão da Áustria, dicionário oficial próprio
   desde 1951), o Schweizerisches Idiotikon (suíço-alemão).
2. **Imprensa e mídia DISTINTAS do padrão**: telejornal, jornal, editora ou streaming que usa essa
   variedade como norma própria (não só "o mesmo idioma, sotaque local"), não o conteúdo do país de
   origem do idioma redistribuído.
3. **Literatura e dicionário/gramática dedicados À VARIEDADE** (não ao idioma inteiro): existe um
   dicionário ou gramática que descreve especificamente essa variedade, e não o idioma como um todo?
4. **Reconhecimento oficial/legal**: a variedade tem status de língua regional protegida, cooficial,
   ou de ensino formal na escola como disciplina própria (não como "o idioma", mas como "esta
   variedade dele")?
5. **Wikipédia própria OU grande presença dela em outras Wikipédias**: raro, mas acontece — o
   mirandês tem Wikipédia própria no Incubator; o suíço-alemão tem a Alemannische Wikipedia
   (gsw.wikipedia.org), que é efetivamente uma Wikipédia de dialeto.

**Critério proposto (rascunho, a validar com o dono antes de aplicar em escala):**

| Nível | Critério (variedade regional) |
|---|---|
| **C2** | Já tem curso próprio completo e fontado (mirandês, mongol tradicional) OU acumula TODOS os sinais 1-4: academia/padronização própria, imprensa distinta, dicionário/gramática dedicados, reconhecimento oficial. |
| **C1** | Variedade nacional padrão de um idioma pluricêntrico, com dicionário/guia de estilo oficial próprio e imprensa/mídia de peso que a usa como norma (não precisa de Wikipédia própria — o idioma inteiro já cobre isso). |
| **B2** | Gramática e vocabulário contrastivo documentados em fonte acadêmica dedicada à variedade, com presença real em mídia popular (ex. comédia, música), mas sem status oficial nem dicionário próprio publicado. |
| **B1** | Existe uma gramática de referência ou levantamento dialetológico acadêmico sério, mas sem corpus de texto corrente nem mídia própria — o material dá pra uma lição de "traços e vocabulário", não pra um curso inteiro. |
| **A2** | Só menções em artigos de dialetologia/sociolinguística, sem levantamento sistemático de vocabulário ou gramática. |
| **A1** | O que já está em `sotaques.ts`/`variantes.ts` hoje (um resumo e alguns traços) e nada além disso foi encontrado. |

Isso ainda precisa da mesma ressalva do documento dos idiomas: é estimativa com critério declarado,
não pesquisa fonte por fonte — antes de escrever o curso de um dialeto específico, vale procurar as
fontes dele de verdade.

## Calibração: os dois que já têm curso (referência)

- **Mirandês (`mwl`, dentro do asturiano)**: C2 por definição (curso completo e publicado). Tem
  reconhecimento oficial (língua cooficial em Portugal desde 1999, a única além do português),
  ortografia própria (Convenção Ortográfica da Língua Mirandesa, 1999), e Wikipédia própria no
  Incubator da Wikimedia.
- **Mongol na escrita tradicional (`mvf`, dentro do mongol)**: C2 por definição (curso completo).
  Não é bem "dialeto" no sentido de variedade regional — é uma VARIANTE DE ESCRITA (mesma língua,
  escrita diferente), ensino oficial na Mongólia Interior (China), mas sem Wikipédia própria.

## Amostra de calibração (16/10/2026) — 15 variedades sem curso próprio, só pra testar o critério

Escolhidas entre as que já têm mais conteúdo contrastivo no app hoje (indício de que já havia fonte
disponível quando o sotaque/dialeto foi escrito) e cobrindo o espectro, do mais forte ao mais fraco.
**Não pesquisado fonte-por-fonte nesta rodada** (orçamento desta tarefa é método + amostra, não o
levantamento completo dos 81 dialetos) — são estimativas a partir de conhecimento geral, no mesmo
espírito do "Resumo" do documento de idiomas, e precisam da mesma checagem antes de qualquer curso
começar a ser escrito.

| Variedade | Teto estimado | Por quê |
|---|---|---|
| Português do Brasil (`pt-BR`) | **C2** | Academia Brasileira de Letras, Vocabulário Ortográfico próprio, imprensa e literatura imensas, maioria global de falantes do idioma — arguivelmente mais "padrão de fato" que Portugal em termos de volume. |
| Francês do Quebec (`fr-CA`) | **C1–C2** | Office québécois de la langue française (regula ativamente, inclusive neologismos próprios), imprensa/TV/cinema distintos, mas ainda sob a autoridade simbólica da Académie française para a norma "oficial" do idioma. |
| Inglês do Reino Unido (`en-GB`) | **C2** | É a variedade historicamente "padrão" do idioma — Oxford/Cambridge dictionaries, BBC, toda a tradição literária anterior ao inglês americano. Caso-limite do critério: aqui o "padrão" é a própria variedade regional. |
| Alemão da Áustria (`de-AT`) | **C1** | Österreichisches Wörterbuch (dicionário oficial do Estado austríaco desde 1951), reconhecido no Protocolo da UE sobre a Áustria — mas o Duden (padrão "do idioma") ainda domina fora da Áustria. |
| Alemão da Suíça (`de-CH`, Schweizer Hochdeutsch escrito) | **C1** | Variedade escrita oficial da Suíça (Helvetismos documentados, ortografia sem "ß"), usada em toda a imprensa suíça; o suíço-alemão FALADO (diferente, um continuum de dialetos) seria um caso à parte, abaixo. |
| Espanhol rioplatense (`es-AR`) | **C1** | Voseo com conjugação própria amplamente descrita, Academia Argentina de Letras, imprensa e literatura (Borges, Cortázar) de peso mundial — mas sem dicionário normativo "rioplatense" totalmente independente do espanhol geral. |
| Coreano da Coreia do Norte (`ko-KP`, 문화어) | **C1** | Norma oficial do Estado norte-coreano desde os anos 1960, com dicionário próprio (조선말대사전) e toda a mídia estatal — teto limitado por ser pouquíssimo acessível para pesquisa livre fora da Coreia do Norte (a maior parte do que existe é de origem sul-coreana, estudando-a de fora). |
| Grego de Chipre (cipriota, `el-CY`) | **B2** | Fonologia e léxico bem documentados em dialetologia acadêmica, uso real em mídia local cipriota (rádio, alguma TV), mas sem ortografia própria nem dicionário normativo independente do grego padrão. |
| Japonês do Kansai (`ja-kansai`) | **B2** | Fartamente documentado (até comercialmente, "Kansai-ben nyūmon" e afins) e onipresente na cultura pop (manzai, comédia, personagens de anime), mas sem padronização oficial nem ensino formal como variedade separada. |
| Persa do Afeganistão / dari (`fa-AF`) | **B2–C1** | Na prática já tem status quase de língua própria (uma das duas línguas oficiais do Afeganistão, com imprensa e ensino formal em dari) — o app já trata como dialeto por decisão do dono (ver `docs/duvidas-variedades.md`), mas pelo critério institucional sozinho chegaria perto do persa do Irã. |
| Sueco da Finlândia (`sv-FI`, finlandssvenska) | **C1** | Língua oficial minoritária da Finlândia, com instituição própria (Svenska språknämnden/Institutet för de inhemska språken produz material específico), imprensa própria (Hufvudstadsbladet) — teto alto mesmo sendo minoria. |
| Neerlandês da Bélgica (`nl-BE`, flamengo) | **B2–C1** | Taalunie (a mesma autoridade do neerlandês, mas com representação belga formal) documenta "belgicismos" oficialmente aceitos; imprensa/TV flamenga própria e de peso (VRT) — mas não tem norma totalmente separada do neerlandês dos Países Baixos. |
| Suaíli do Quênia (`sw-KE`) | **B1–B2** | Dialetologia do suaíli documenta bem as diferenças do queniano frente ao padrão de Zanzibar, há produção cultural local (sheng como gíria urbana é um fenômeno à parte, já citado no próprio `sotaques.ts`), mas sem dicionário/gramática normativos próprios. |
| Malaio do Brunei (`ms-BN`) | **B1** | Descrito em estudos dialetológicos do malaio, usado na administração e ensino do Brunei (que também usa o malaio padrão oficialmente) — pouco material além da descrição acadêmica. |
| Gheg (norte da Albânia e Kosovo, `sq-geg`) | **B1–B2** | Tinha status de padrão literário antes de 1945 (toda a literatura albanesa do norte anterior ao regime comunista), hoje sem reconhecimento oficial (o tosk é o único padrão oficial da Albânia) — material histórico substancial, pouco material vivo/atual. |

## E os sotaques?

Pela própria taxonomia do app (`AGENTS.md`, "Dialetos, sotaques e variantes de escrita"): **sotaque é
só a pronúncia** — não tem gramática, sintaxe nem vocabulário próprios o bastante para ser uma
"variedade completa". Por definição, um sotaque não vira curso sozinho: se teria material pra um
curso de verdade (gramática distinta, vocabulário extenso, literatura), **ele deixaria de ser sotaque
e passaria a ser dialeto** — essa é, inclusive, a régua que o próprio `AGENTS.md` já usa pra decidir a
exceção ("dentro de um país, vale sotaque... o que tiver dúvida vai para `docs/duvidas-variedades.md`
para o dono decidir").

Então a pergunta certa para sotaque não é "que nível de curso ele atinge" (nenhum, por definição),
mas: **"este sotaque tem material demais pra continuar sendo só um sotaque?"** — i.e., é candidato a
subir de categoria. Varrendo os 780 sotaques do app por um sinal simples (quantidade de `features`
e `words` já documentados no próprio `sotaques.ts`, que é o que sobra quando não há fonte pra duas
histórias) achei estes candidatos mais fortes a reavaliar primeiro, nenhum ainda com curso ou mesmo
`kind: 'língua'`:

| Sotaque | Idioma | Por que chama atenção |
|---|---|---|
| Baiano (`pt-baiano`) | Português | Vocabulário de origem iorubá/banta documentado, melodia e traços fonéticos extensos — mas já é tratado como sotaque DENTRO do dialeto `pt-BR`, que por sua vez provavelmente chega a C2 sozinho (ver tabela acima); provável que já esteja no nível certo. |
| Cuiabano (`pt-cuiabano`) | Português | Traço gramatical raro e bem documentado (as africadas "tch"/"dj", patrimônio cultural reconhecido por portaria do estado de Mato Grosso desde 2013) — reconhecimento oficial é justo o sinal nº 4 da tabela de dialeto; vale conferir se há gramática dedicada além da marca cultural. |
| Bávaro (`de-baviera`) | Alemão | O bávaro costuma ser tratado como língua/dialeto à parte na linguística alemã (código ISO 639-3 `bar` existe), com gramática e dicionário próprios publicados, e hoje está catalogado como `kind: 'sotaque'` — é o candidato mais forte da lista pra reclassificar. |

**Checado e já corrigido no próprio app, sem precisar de reclassificação**: suíço-alemão (`de-gsw`) e
baixo-alemão (`de-nds`) apareceram no primeiro filtro automático (muito conteúdo documentado), mas
conferindo o código de verdade, os dois já estão como `kind: 'língua'`, não `'sotaque'` — alguém já
fez essa chamada certa antes. A pergunta que sobra pra eles não é "reclassificar", é a mesma do resto
deste documento: será que merecem um curso próprio (como `OWN_LANGUAGE_META` já reconhece que são
línguas de verdade, e os dois têm código ISO 639-3 e Wikipédia própria) — teto a medir se/quando o
dono quiser ir adiante com cursos de línguas próprias da região, não só dialetos do idioma principal.

**Isto é um primeiro filtro automático, não uma decisão** — confirmar com o dono antes de promover
qualquer um desses de sotaque pra dialeto/língua própria (mesma régua de `docs/duvidas-variedades.md`).
O bávaro e o suíço-alemão, em especial, parecem candidatos genuinamente fortes porque já têm código
ISO 639-3 PRÓPRIO — um sinal objetivo de que linguistas tratam a variedade como mais que "sotaque".

## Próximos passos (não feitos aqui, de propósito)

1. Validar o critério de 6 níveis acima com o dono antes de aplicá-lo em escala.
2. Rodar o levantamento completo nos outros ~66 dialetos que ainda não foram nem amostrados aqui
   (a lista de 36 com mais conteúdo contrastivo já pronto está no histórico desta pesquisa — os 15 da
   amostra vieram dela).
3. Decidir, caso a caso, se os sotaques com ISO 639-3 próprio (bávaro, suíço-alemão, baixo-alemão)
   viram dialeto/língua própria.
4. Só depois disso, seguir a ordem já definida em `PENDENTES.md`: fontes → teto → curso, um de
   cada vez, começando pelos que já chegam mais perto de C1/C2 (menos trabalho de pesquisa, mais
   conteúdo aproveitável).
