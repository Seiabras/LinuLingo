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

## Levantamento completo (16/10/2026)

Continuação da amostra de calibração: todas as outras variedades do app (`variants` de cada idioma)
que ainda não têm curso próprio nem entraram na amostra — **224 no total** (a lista real, levantada
agora com um extrator que cobre tanto os objetos `{ code: ... }` quanto as entradas feitas pelos
helpers `dialetoDe()`/`dialetoPadrao()`, que o primeiro levantamento desta pesquisa tinha deixado de
fora; o número "~66 restantes" do rascunho anterior estava errado — a contagem real é bem maior).

**Convenção usada abaixo**: a entrada marcada **(padrão)** é o dialeto "base" de cada idioma (o que
`dialetoPadrao()` registra) — ela não é uma variedade regional de verdade, é só o nome que o sistema
dá ao jeito-padrão de falar o idioma dentro do seu próprio país de origem. O teto dela **é o mesmo
teto que o idioma inteiro já tem** em `TETO-DOS-IDIOMAS.md` (óbvio, mas registrado aqui pra não
sobrar como "não medido"); não repito justificativa pra essas. As variantes de ESCRITA (mesma língua,
alfabeto diferente: cirílico × latim, tradicional × simplificado, romanização) têm uma lógica de teto
diferente das regionais — o critério não é instituição/imprensa, é se aquela escrita específica tem
material de leitura e exemplos suficientes; marco essas com 🔤.

Nível de confiança: a maior parte usa conhecimento geral verificável (status oficial de idioma,
existência de academias/institutos conhecidos). Onde não tive confiança de um fato específico, digo
isso em vez de inventar — e esses casos ficam também na lista "precisa de mais pesquisa" no fim.

### Africâner
- **af-ZA** (padrão) — mesmo teto do africâner (C2 completo).
- **af-NA, Africâner da Namíbia** — **A2.** Língua reconhecida na Namíbia (antiga 2ª língua oficial),
  usada por uma minoria (sobretudo afrikaners e Baster), mas sem imprensa/dicionário distintos do
  africâner sul-africano — é basicamente a mesma norma falada fora da África do Sul.

### Aleúte
- **ale-A, Aleúte de Atka (ocidental)** — **B1.** Dialeto documentado por linguistas (Bergsland), a
  língua inteira já é criticamente ameaçada (poucas dezenas de falantes) — o material que existe é
  acadêmico, não corrente.
- **ale-Cyrl, Aleúte em letras cirílicas** 🔤 — **B1.** Escrita histórica usada nas Ilhas Komandorski
  (Rússia) desde o século XIX (tradição ortodoxa russa) — material religioso/histórico existe, pouco
  uso vivo hoje.
- **ale-E, Aleúte oriental** — **B1.** Mesma situação do ocidental: documentado, mas língua inteira
  em risco crítico de extinção.

### Árabe
- **ar-fusha** (padrão, árabe clássico/MSA) — mesmo teto do árabe (C2, completo).
- **ar-golfo, Árabe do Golfo** — **B2.** Bem documentado em dialetologia árabe, mídia própria real
  (canais do Golfo, música khaliji), mas sem ortografia/dicionário normativo PRÓPRIO — o árabe
  escrito continua sendo o fuṣḥā em qualquer país.
- **ar-hejazi, Árabe do Hejaz** — **B1–B2.** Documentado academicamente (dialeto de Meca/Medina/Jidá),
  menos presença midiática distinta que o golfo.
- **ar-iemenita, Árabe iemenita** — **B1.** Dialetologia documenta bem (é um dos mais conservadores
  foneticamente), pouca mídia/imprensa de peso por causa do conflito no Iêmen.
- **ar-iraquiano, Árabe iraquiano** — **B2.** Mídia e música própria significativas (inclusive
  diáspora grande), bem documentado, mas mesma limitação normativa que os outros dialetos árabes.
- **ar-levantino, Árabe levantino** — **B2–C1.** O dialeto árabe com MAIS material de aprendizado
  de segundas línguas no mundo (cursos, apps, séries turcas dubladas, música pop libanesa/síria),
  efetivamente um padrão de fato pra quem aprende árabe falado — mas ainda sem status oficial nem
  dicionário normativo próprio.
- **ar-magrebino, Árabe magrebino** — **B2.** Bem documentado, mas o mais distante do fuṣḥā (influência
  berbere/francesa forte) — às vezes tratado quase como língua à parte (darija) na linguística, com
  iniciativas marroquinas recentes de valorizar a darija escrita, mas ainda não oficial.
- **ar-sudanes, Árabe sudanês** — **B1.** Documentado, pouca presença internacional de mídia/material.

### Mapudungun
- **arn-AR, Mapudungun da Argentina** — **A2.** Minoria falante bem menor que no Chile, menos material
  publicado especificamente sobre essa variante.
- **arn-CL** (padrão) — mesmo teto do mapudungun.

### Asturiano
- **ast-AS** (padrão) — mesmo teto do asturiano.
- **ast-leones, Leonês (Leão e Zamora)** — **B2–C1.** Tem reconhecimento pela Junta de Castilla y
  León (2006, bem de proteção), a Facendera pola Llengua (associação ativa), e já é citado no
  `PENDENTES.md` do próprio app como candidato natural a curso próprio — provavelmente o PRÓXIMO
  depois do mirandês, dado esse reconhecimento.

### Aimará
- **ay-BO, Aimará da Bolívia** — **B2.** Maior comunidade falante das três (La Paz/El Alto), ensino
  bilíngue formal na Bolívia, rádios comunitárias em aimará — mas sem dicionário normativo distinto
  do aimará peruano.
- **ay-CL, Aimará do Chile** — **A2.** Comunidade bem menor, pouco material específico.
- **ay-PE, Aimará do Peru** — **B1–B2.** Reconhecido oficialmente no Peru, ensino intercultural
  bilíngue formal, mas comunidade falante menor que a boliviana.

### Bielorrusso (variantes de escrita) 🔤
- **be-Cyrl, Bielorrusso em cirílico** — mesmo teto do bielorrusso (é a escrita padrão oficial hoje).
- **be-Latn, Bielorrusso em łacinka** — **B1.** Alfabeto latino histórico, usado hoje por parte da
  diáspora/oposição política como símbolo de identidade — tem Wikipédia própria em łacinka (projeto
  separado), mas é minoritário no uso corrente.
- **be-tarask, Bielorrusso na taraškievica** — **B1–B2.** Não é bem uma escrita diferente, é uma
  norma ortográfica alternativa (pré-reforma soviética de 1933), usada pela Rádio Svaboda e por parte
  da diáspora/oposição — tem gramática própria publicada (de Taraškievič, 1918, e revisões), mídia
  real (Свабода), mas não é a norma oficial do Estado.

### Bengali
- **bn-BD, Bengali de Bangladesh** — mesmo teto do bengali (é o país de origem do idioma no app).
- **bn-IN, Bengali da Índia (Bengala Ocidental)** — **C1.** Também idioma oficial de estado na Índia,
  grande produção literária e cinematográfica própria (Calcutá/Tollywood bengali), mas usa
  essencialmente a mesma norma escrita de Bangladesh.

### Bretão
- **br-gwenedeg, Bretão vannetais (gwenedeg)** — **B1–B2.** Um dos 4 dialetos históricos do bretão,
  documentado, mas a norma escrita unificada (peurunvan) já cobre o bretão como um todo — pouco
  material específico SÓ do vannetais além da dialetologia.
- **br-KLT** (padrão) — mesmo teto do bretão.

### Catalão
- **ca-AD, Catalão de Andorra** — **C1.** Único país do mundo com o catalão como ÚNICA língua
  oficial de Estado — sinal institucional forte, mas usa a norma do Institut d'Estudis Catalans, não
  uma norma própria.
- **ca-ES** (padrão) — mesmo teto do catalão.
- **ca-VC, Valenciano (País Valencià)** — **C1–C2.** Tem a própria academia oficial, a Acadèmia
  Valenciana de la Llengua (criada por lei em 1998, com autoridade normativa reconhecida pela
  Generalitat Valenciana) — um dos casos mais fortes da lista, pode merecer C2 (sinal 1 e 4 bem
  documentados; falta conferir imprensa/dicionário específicos antes de confirmar).

### Checheno
- **ce-GE, Checheno da Geórgia (kist)** — **A2.** Comunidade pequena (kists, no vale de Pankisi),
  pouco material específico.
- **ce-RU** (padrão) — mesmo teto do checheno.

### Curdo central (sorani)
- **ckb-IQ** (padrão) — mesmo teto do curdo central.
- **ckb-IR, Curdo central do Irã** — **B2.** Falado no Curdistão iraniano, imprensa/rádio curda
  existem no Irã mas sob restrição política maior que no Iraque (onde o sorani é cooficial na região
  autônoma do Curdistão) — material menos acessível livremente.

### Kichwa (Equador)
- **colo1257-AMAZ, Kichwa da Amazônia** — **A2–B1.** Variante regional documentada em estudos de
  dialetologia quíchua equatoriana, sem material tão extenso quanto a variante serrana.
- **colo1257-antiga, Kichwa na grafia antiga** 🔤 — **A2.** Ortografia pré-unificação (antes do
  alfabeto unificado quíchua de 1980), usada em textos religiosos/históricos — pouco material novo
  é publicado nela hoje.
- **colo1257-SERRA** (padrão) — mesmo teto do kichwa equatoriano.

### Copta (variantes de escrita/dialeto histórico) 🔤
- **cop-bohairico, Copta bohaírico** — **B2–C1.** É o dialeto copta que SOBREVIVEU como língua
  litúrgica viva da Igreja Ortodoxa Copta até hoje — gramáticas, dicionários e uso litúrgico contínuo
  (inclusive ensino em seminários) dão mais material que o saídico.
- **cop-saidico, Copta saídico** — **B2.** Foi o dialeto literário mais importante do copta antigo
  (a maior parte dos textos bíblicos/gnósticos sobreviventes, como a biblioteca de Nag Hammadi, está
  em saídico) — riquíssimo em corpus histórico, mas sem uso vivo hoje (diferente do bohaírico).

### Dinamarquês
- **da-DE, Dinamarquês do Schleswig do Sul** — **B1–B2.** Minoria dinamarquesa reconhecida no norte
  da Alemanha (Schleswig-Holstein), com escolas próprias (dansk mindretal), mas usa a norma do
  dinamarquês padrão, não uma variante distinta.
- **da-DK** (padrão) — mesmo teto do dinamarquês.

### Alemão
- **de-DE** (padrão) — mesmo teto do alemão.
- (de-AT e de-CH já estão na amostra de calibração.)

### Eʋe
- **ee-GH** (padrão) — mesmo teto do eʋe.
- **ee-TG, Eʋe do Togo** — **A2–B1.** Também falado como língua importante no Togo (não oficial, mas
  amplamente usada), menos material publicado que a variante ganesa.

### Grego
- **el-GR** (padrão) — mesmo teto do grego. (el-CY já está na amostra.)

### Alutiiq
- **ems-CHU, Alutiiq chugach** — **A2–B1.** Dialeto do alutiiq (sugpiaq), língua já em risco crítico;
  documentação acadêmica existe (Alutiiq Museum, Kodiak), mas pouquíssimos falantes.
- **ems-KON** (padrão) — mesmo teto do alutiiq.

### Inglês
- **en-AAVE, Inglês afro-americano (AAVE)** — **B2.** Um dos dialetos mais estudados linguisticamente
  do mundo (Labov, Rickford, décadas de sociolinguística), enorme presença cultural (música, mídia),
  mas sem status oficial nem ortografia normativa própria — é reconhecido como sistema gramatical
  coerente pela linguística, não pelo Estado.
- **en-IE, Inglês da Irlanda (Hiberno-English)** — **C1.** Língua de facto do Estado irlandês (ao
  lado do irlandês oficial), imprensa, literatura e dicionários próprios de expressões (Hiberno-
  English é objeto de dicionários dedicados, ex. Dolan's "A Dictionary of Hiberno-English").
- **en-US** (padrão) — mesmo teto do inglês. (en-GB já está na amostra.)

### Espanhol
- **es-419, Espanhol latino-americano** — **B1.** Não é uma variedade regional de verdade, é uma
  categoria GUARDA-CHUVA de localização usada pela indústria (legendagem, software) pra "espanhol
  neutro" — não corresponde a uma variedade dialetal real descrita pela linguística; teto baixo
  porque não há fonte dialetológica específica pra algo que não existe como variedade única.
- **es-ES** (padrão) — mesmo teto do espanhol. (es-AR já está na amostra.)

### Iúpique central
- **esu-GCY** (padrão) — mesmo teto do iúpique central.
- **esu-HBC, Cup’ik de Hooper Bay e Chevak** — **B1.** Variante documentada separadamente do iúpique
  central (tem até código ISO 639-3 próprio, `cuk`, embora o app trate como sotaque/variante do esu)
  — sinal de que linguistas já tratam como suficientemente distinta.
- **esu-NS, Iúpique de Norton Sound (unaliq-pastuliq)** — **A2–B1.** Documentado, comunidade pequena.
- **esu-NUN, Cup’ig de Nunivak** — **B1.** Também tem código ISO 639-3 próprio (`cux`), mesma lógica
  do Cup'ik de Hooper Bay — candidato a reavaliação de categoria, não só teto.

### Persa
- **fa-IR** (padrão) — mesmo teto do persa. (fa-AF já está na amostra.)
- **fa-TJ, Persa do Tadjiquistão (tadjique)** — **C1.** Língua oficial do Tadjiquistão, MAS escrita
  em alfabeto CIRÍLICO (não árabe-persa) — isso por si só justificaria tratá-la quase como variante
  de escrita também, não só regional; tem imprensa e ensino formal próprios no Tadjiquistão.

### Finlandês
- **fi-FI** (padrão) — mesmo teto do finlandês. (fi-SE já está na amostra.)

### Feroês
- **fo-FO** (padrão) — mesmo teto do feroês (já C1, ver `TETO-DOS-IDIOMAS.md`).

### Francês
- **fr-BE, Francês da Bélgica** — **C1.** Conseil supérieur de la langue française (Bélgica), imprensa
  e TV próprias (RTBF), "belgicismos" documentados em dicionários — teto alto, nível parecido com o
  fr-CH já medido na amostra.
- **fr-CH, Francês da Suíça** — já está na amostra (C1).
- **fr-FR** (padrão) — mesmo teto do francês.
- **fr-SN, Francês da África Ocidental** — **B2.** Falado como língua franca/oficial em vários países
  (Senegal, Costa do Marfim, Mali...), com imprensa e literatura (muitos autores africanos de
  expressão francesa), mas o app trata como UMA variante pra uma região inteira multi-país — teto
  moderado porque não há um único corpo normativo pra "francês da África Ocidental" como categoria.

### Francoprovençal
- **frp-CH, Francoprovençal da Suíça** — **B1.** Língua moribunda, pouquíssimos falantes restantes no
  cantão de Friburgo/Valais — documentação acadêmica existe, uso vivo quase nulo.
- **frp-FR** (padrão) — mesmo teto do francoprovençal.
- **frp-IT, Francoprovençal do Vale de Aosta** — **B2.** O MELHOR caso do francoprovençal: cooficial
  de fato no Vale de Aosta (Itália), com ensino bilíngue e alguma proteção regional — ainda assim
  língua seriamente ameaçada.

### Gaélico escocês
- **gd-CA, Gaélico do Canadá (Nova Escócia)** — **B1–B2.** Comunidade histórica (Cape Breton), com
  revitalização ativa recente (Gaelic College, iniciativas do governo da Nova Escócia), mas muito
  menor que a comunidade escocesa.
- **gd-SC** (padrão) — mesmo teto do gaélico escocês.

### Guarani
- **gn-AR, Guarani da Argentina (Corrientes)** — **B1–B2.** Cooficial na província de Corrientes
  (Argentina) desde 2004 — reconhecimento oficial real, mas comunidade e material menores que o
  guarani paraguaio.
- **gn-BO, Guarani da Bolívia** — **B1.** Reconhecido como idioma oficial nacional da Bolívia (junto
  com dezenas de outros), mas é uma variedade (guarani boliviano/chiriguano) com comunidade bem
  menor que a paraguaia.
- **gn-PY** (padrão) — mesmo teto do guarani.

### Hauçá
- **ha-NE, Hauçá do Níger** — **B2.** Também amplamente falado no Níger (onde não é majoritário como
  na Nigéria), rádio/imprensa em hauçá existem (inclusive BBC Hausa, Voice of America Hausa cobrem
  os dois países), mas a norma escrita de referência é a nigeriana.
- **ha-NG** (padrão) — mesmo teto do hauçá.

### Híndi
- **hi-FJ, Híndi de Fiji (Fiji Hindi/Fiji Baat)** — **B1–B2.** Variedade crioulizada bem distinta do
  híndi padrão, com status oficial em Fiji (uma das línguas oficiais) e alguma literatura/mídia
  própria — linguisticamente já quase uma língua à parte (às vezes tratada como tal), interessante
  candidato a reavaliação de categoria.
- **hi-IN** (padrão) — mesmo teto do híndi.

### Croata
- **hr-AT, Croata do Burgenland (Áustria)** — **B1–B2.** Minoria linguística reconhecida oficialmente
  na Áustria (Burgenland), com escolas bilíngues e um dialeto bem documentado (gradišćanskohrvatski
  tem até uma norma escrita própria desde o século XIX) — candidato mais forte do que parece à
  primeira vista.
- **hr-HR** (padrão) — mesmo teto do croata.

### Húngaro
- **hu-HU** (padrão) — mesmo teto do húngaro.
- **hu-RO, Húngaro da Transilvânia (Romênia)** — **C1.** Maior minoria húngara fora da Hungria (~1,2
  milhão de falantes), imprensa, TV e ensino superior em húngaro na Romênia (universidades com
  ensino em húngaro em Cluj/Târgu Mureș) — teto alto por volume e infraestrutura real, mas usa a
  norma escrita padrão do húngaro.

### Quéchua de Áncash (huay1239)
- **huay1239-CONCHUCOS, Quéchua de Conchucos** — **A2–B1.** Variante regional dentro do quéchua de
  Áncash, documentada em dialetologia quíchua peruana, pouco material além disso.
- **huay1239-HUAYLAS** (padrão) — mesmo teto do quéchua de Áncash.

### Armênio
- **hy-AM** (padrão) — mesmo teto do armênio.
- **hy-IR, Armênio do Irã** — **B1–B2.** Comunidade histórica significativa (sobretudo Isfahan/Nova
  Julfa), igrejas e algumas escolas armênias no Irã, mas usa a norma do armênio oriental padrão.

### Inupiaque
- **ik-NS, Inupiaque da Encosta Norte** — já é o padrão mencionado no `TETO-DOS-IDIOMAS.md` (inupiaque
  já tem teto B1 medido para o idioma inteiro) — mesmo teto.
- **ik-NW, Inupiaque do noroeste do Alasca (malimiutun)** — **A2–B1.** Dialeto documentado, comunidade
  pequena, material é o mesmo corpus geral do inupiaque.
- **ik-SP, Inupiaque da Península de Seward** — **A2.** Idem, dialeto menor dentro de uma língua já
  pequena.

### Islandês
- **is-IS** (padrão) — mesmo teto do islandês (já C2, exceção documentada).
- **is-CA, Islandês ocidental (Canadá)** — **B2–C1.** Comunidade histórica de imigração islandesa em Manitoba (desde 1875, "Nova Islândia"), com jornal próprio de longa tradição (Lögberg-Heimskringla, fundado em 1888 e ainda publicado) e o Icelandic Department da University of Manitoba (o único curso universitário de islandês fora da Islândia e dos países nórdicos) — infraestrutura real e incomum para uma diáspora, mas fala viva em declínio (poucos falantes nativos novos).

### Italiano
- **it-IT** (padrão) — mesmo teto do italiano. (it-CH já está na amostra.)

### Inuktitut/Inuttut
- **iu-Latn, Inuktitut em letras latinas** 🔤 — **B1–B2.** Romanização padronizada usada sobretudo no
  oeste do Ártico canadense (Inuvialuktun) e cada vez mais no ensino — Nunavut está em transição
  oficial do silabário pro alfabeto latino unificado (Qaliujaaqpait, decisão de 2019 do governo de
  Nunavut) — sinal institucional real e recente.
- **iu-LB, Inuttut do Labrador** — **B1.** Reconhecido pelo governo do Nunatsiavut (autogoverno inuíte
  no Labrador), material educacional próprio existe, comunidade pequena.
- **iu-NK, Inuttitut de Nunavik (Quebec)** — **B1–B2.** Região autônoma (Nunavik, dentro de Quebec)
  com administração e ensino em inuktitut, Avataq Cultural Institute produz material — teto razoável.
- **iu-NU** (padrão) — mesmo teto do inuktitut.

### Japonês
- **ja-BR, Japonês da colônia no Brasil (koronia-go)** — **A2–B1.** Fenômeno sociolinguístico real
  (japonês dos imigrantes no Brasil, com empréstimos do português) documentado academicamente, mas é
  um fenômeno de contato de língua, não uma variedade regional padronizada — pouco material além de
  estudos específicos.
- **ja-JP** (padrão) — mesmo teto do japonês. (ja-kansai já está na amostra.)

### Javanês
- **jv-ID** (padrão) — mesmo teto do javanês.
- **jv-SR, Javanês do Suriname** — **B1.** Comunidade histórica de descendentes de contratados
  javaneses (desde o século XIX), ainda falado por uma minoria no Suriname, com alguma documentação
  acadêmica — material bem mais escasso que o javanês da Indonésia.

### Curmanji (curdo do norte)
- **kmr-AM, Curmanji da Armênia e da Geórgia** — **A2–B1.** Minoria curda ezidi na Armênia/Geórgia,
  pouco material específico além de dialetologia.
- **kmr-IQ, Curmanji do Iraque (badini)** — **B2.** Falado na região de Duhok (Curdistão iraquiano),
  onde tem ensino formal e mídia — mas o sorani (ckb) domina institucionalmente na região autônoma.
- **kmr-SY, Curmanji da Síria** — **B1–B2.** Falado pela minoria curda síria, com mídia em curdo nas
  áreas autônomas curdas do norte da Síria (Rojava) desde a guerra civil — reconhecimento recente e
  instável, não uma instituição consolidada.
- **kmr-TR** (padrão) — mesmo teto do curmanji.

### Coreano
- **ko-KR** (padrão) — mesmo teto do coreano. (ko-KP já está na amostra.)

### Judeu-espanhol (ladino)
- **lad-haketia, Haketia (Marrocos)** — **A2–B1.** Variante judeu-espanhola do Marrocos (com mais
  influência árabe que o ladino oriental), hoje praticamente extinta como língua falada — material
  é majoritariamente histórico/acadêmico (ex. trabalhos de Alegría Bendayán, José Benoliel).
- **lad-oriental** (padrão) — mesmo teto do judeu-espanhol.

### Luxemburguês
- **lb-BE, Luxemburguês da Bélgica (Arlon)** — **A2.** Falado por uma pequena comunidade na região de
  Arlon (Bélgica), sem status oficial nem material específico publicado.
- **lb-LU** (padrão) — mesmo teto do luxemburguês.

### Lígure
- **lij-IT** (padrão) — mesmo teto do lígure.
- **lij-MC, Monegasco** — **B1–C1.** Língua nacional de Mônaco (reconhecida por lei, ensino
  obrigatório nas escolas monegascas, Comitê Nacional das Tradições Monegascas mantém o idioma) —
  reconhecimento oficial forte apesar do número pequeno de falantes; vale conferir se há dicionário
  normativo publicado antes de confirmar o nível exato.

### Ladino das Dolomitas
- **lld-anpezan, Anpezan (Cortina d'Ampezzo)** — **B1.** Um dos 5 idiomas ladinos reconhecidos pela
  Itália (Lei 482/1999), ensino nas escolas da área, mas comunidade pequena e normalização menos
  consolidada que os vales do Alto Adige.
- **lld-badiot, Badiot (Val Badia)** — **B1–B2.** Mesma proteção legal; Val Badia é um dos núcleos
  ladinos mais fortes (junto com Gherdëina), com o Istitut Ladin "Micurà de Rü" produzindo material.
- **lld-fascian, Fascian (Val di Fassa)** — **B1–B2.** Mesma proteção; Istitut Cultural Ladin
  "Majon di Fascegn" mantém material próprio — comunidade relativamente forte.
- **lld-fodom, Fodom (Livinallongo)** — **B1.** Protegido, mas o menor dos 5 vales em número de
  falantes.
- **lld-gherdeina, Gherdëina (Val Gardena)** — **B1–B2.** O ladino mais vital e documentado (Val
  Gardena é o centro econômico/turístico da região ladina), ensino trilíngue consolidado.

### Lombardo
- **lmo-ocidental** (padrão) — mesmo teto do lombardo.
- **lmo-oriental, Lombardo oriental** — **B1.** Documentado em dialetologia, sem padronização nem
  reconhecimento oficial — o lombardo como um todo não é língua regional protegida na Itália.

### Lingala
- **ln-CD** (padrão) — mesmo teto do lingala.
- **ln-CG, Lingala do Congo (Brazzaville)** — **B2.** Também língua nacional no Congo-Brazzaville,
  com rádio/TV e música (rumba congolesa tem forte presença dos dois lados do rio) — mas usa
  essencialmente a mesma norma do lingala de Kinshasa.

### Malgaxe
- **mg-MG** (padrão) — mesmo teto do malgaxe.
- **mg-YT, Malgaxe de Mayotte (kibushi/shimaore)** — **B1.** Falado por uma minoria em Mayotte
  (território francês), documentado academicamente, mas pequeno e sem padronização própria.

### Mongol
- **mn-CN, Mongol da Mongólia Interior (China)** — **B2–C1.** Ensino formal em mongol na Mongólia
  Interior (China), mas cada vez mais restrito (reformas educacionais chinesas de 2020 reduziram o
  ensino em mongol) — teto real alto historicamente, mas em declínio institucional recente.
- **mn-MN** (padrão) — mesmo teto do mongol. (mn-Mong, escrita tradicional, já tem curso.)

### Manchu
- **mnc-qing** (padrão) — mesmo teto do manchu.
- **mnc-xibe, Xibe (Xinjiang)** — **B2–C1.** É literalmente a ÚLTIMA forma viva do manchu — os xibe
  de Xinjiang ainda falam e escrevem a língua no dia a dia (jornal próprio,察布查尔报, emissão de
  rádio), enquanto o manchu "clássico" é só histórico — paradoxalmente o xibe pode ter TETO MAIS ALTO
  que o próprio manchu clássico do app, por ter uso vivo real.

### Malaio
- **ms-MY** (padrão) — mesmo teto do malaio. (ms-BN já está na amostra.)
- **ms-SG, Malaio de Singapura** — **C1.** Uma das 4 línguas oficiais de Singapura, com Majlis Bahasa
  Melayu Singapura (conselho de língua oficial) definindo a norma — forte infraestrutura
  institucional, embora minoritário na cidade-estado.

### Norueguês
- (nb-NO e nn-NO/nynorsk já estão cobertos — nynorsk é oficialmente uma das 2 normas escritas do
  norueguês, com status igual ao bokmål, Norsk språkråd regula os dois; teto igual ao do norueguês.)

### Baixo-alemão / baixo-saxão
- **nds-DE** (padrão) — mesmo teto do baixo-alemão (protegido pela Carta Europeia das Línguas
  Regionais na Alemanha).
- **nds-NL, Baixo-saxão dos Países Baixos** — **B2–C1.** TAMBÉM protegido pela Carta Europeia nos
  Países Baixos (reconhecido desde 1996), com institutos regionais (ex. Stellingwarver Schrieversronte
  pro stellingwarfs) — teto comparável ao do lado alemão.

### Neerlandês
- **nl-NL** (padrão) — mesmo teto do neerlandês.
- **nl-SR, Neerlandês do Suriname** — **B2–C1.** Língua oficial do Suriname (único país fora da
  Europa com o neerlandês como idioma oficial de Estado), imprensa e ensino em neerlandês surinamês —
  teto moderado-alto, mas sem norma própria distinta documentada separadamente do neerlandês europeu.
  (nl-BE já está na amostra.)

### Occitano
- **oc-auvernhat, Auvernhês** — **B1.** Um dos 6 dialetos históricos do occitano, documentado
  academicamente, sem padronização própria separada da norma occitana geral (grafia clássica).
- **oc-gascon, Gascão (e aranês)** — **B2–C1.** O aranês (variante do gascão) é COOFICIAL na Catalunha
  (Val d'Aran, desde 2010, com o Institut d'Estudis Aranesi como academia própria) — o caso mais forte
  de todos os dialetos occitanos, candidato real a C1.
- **oc-lemosin, Limosino** — **B1.** Documentado, sem reconhecimento oficial distinto.
- **oc-lengadocian, Languedociano** — **B1–B2.** Considerado a base da norma escrita clássica do
  occitano (o "mais central" dos dialetos), mas sem instituição própria separada do occitano geral.
- **oc-provencau, Provençal** — **B1–B2.** Tem a norma mistralense alternativa (Félibrige, fundado
  por Frédéric Mistral, Nobel de Literatura 1904) — um caso especial, com tradição literária e
  ortográfica PRÓPRIA distinta da norma clássica occitana, forte candidato a reavaliação.
- **oc-vivaroaupenc, Vivaro-alpino** — **B1.** Documentado, sem reconhecimento distinto.

### Oromo
- **om-ET** (padrão) — mesmo teto do oromo.
- **om-KE, Oromo do Quênia (borana)** — **A2–B1.** O borana é falado também no norte do Quênia, sem
  status oficial lá (diferente da Etiópia, onde o oromo é língua regional oficial de Oromia) — menos
  material institucional.

### Panjabi
- **pa-IN** (padrão) — mesmo teto do panjabi.
- **pa-PK, Panjabi do Paquistão (shahmukhi)** 🔤 — **B2.** Maior população de falantes de panjabi do
  mundo está no Paquistão, MAS a língua oficial do Paquistão é o urdu — o panjabi não tem status
  oficial lá apesar do número de falantes, e é escrito em shahmukhi (árabe-persa) em vez do gurmukhi
  indiano — teto limitado mais pela falta de status oficial que pela falta de falantes.

### Polonês
- **pl-BR, Polonês do Paraná** — **A2–B1.** Comunidade de imigração histórica (sul do Brasil, desde o
  século XIX), com algum material de preservação cultural, mas sem padronização própria — é polonês
  com empréstimos do português, documentado em estudos de contato linguístico.
- **pl-PL** (padrão) — mesmo teto do polonês.

### Pachto
- **ps-AF** (padrão) — mesmo teto do pachto.
- **ps-PK, Pachto do Paquistão** — **C1.** Maior número de falantes de pachto está no Paquistão (não
  no Afeganistão), com imprensa e rádio próprios (ex. Pashto-language press em Peshawar), mas sem
  status de língua oficial nacional (diferente do Afeganistão).

### Português
- **pt-AO, Português de Angola** — **C1.** Língua oficial, grande produção literária angolana (Pepetela,
  Ondjaki), imprensa própria — vocabulário angolano já documentado em dicionários específicos.
- **pt-CV, Português de Cabo Verde** — **B2–C1.** Língua oficial (ao lado do crioulo cabo-verdiano, que
  é a língua MATERNA de fato — diglossia real), imprensa em português existe mas o crioulo domina a
  fala cotidiana.
- **pt-GW, Português da Guiné-Bissau** — **B2.** Língua oficial só de direito — na prática falada por
  uma minoria da população (o crioulo guineense é a língua franca real), pouco material específico.
- **pt-IN, Português de Goa** — **A2–B1.** Hoje falado por pouquíssimas pessoas (deixou de ser oficial
  em 1961, quando a Índia anexou Goa) — interesse principalmente histórico/documental.
- **pt-MO, Português de Macau** — **B1–B2.** Cooficial com o cantonês em Macau, usado na administração
  e no ensino superior, mas falado como língua materna por pouquíssimos residentes — é mais língua
  administrativa que vernácula hoje.
- **pt-MZ, Português de Moçambique** — **C1.** Língua oficial, segunda maior população de falantes de
  português da África, imprensa e literatura própria (Mia Couto) de peso internacional.
- **pt-PT** (padrão) — mesmo teto do português. (pt-BR já está na amostra.)
- **pt-ST, Português de São Tomé e Príncipe** — **B1–B2.** Língua oficial, mas o país tem população
  pequena e os crioulos locais (forro, angolar) são as línguas maternas mais faladas.
- **pt-TL, Português de Timor-Leste** — **B1–B2.** Cooficial com o tétum, usado sobretudo no governo e
  no ensino superior — está crescendo como segunda língua, mas não é língua materna da maioria.

### Quéchua sulista
- **qu-ayacucho, Ayacucho (chanka)** — **B1–B2.** Uma das variantes quíchuas mais documentadas do Peru
  (base de muitos materiais didáticos de quíchua sulista), mas sem padronização distinta do cusco-collao.
- **qu-BO, Quéchua da Bolívia** — **B2.** Reconhecido como idioma oficial nacional da Bolívia, ensino
  intercultural bilíngue formal, Academia Boliviana de la Lengua Quechua existe — teto razoável.
- **qu-cusco-collao** (padrão) — mesmo teto do quéchua sulista.

### Romanche
- **rm-grischun, Rumantsch Grischun (escrita comum)** — **C1.** A norma escrita UNIFICADA criada
  especificamente pela Lia Rumantscha (instituto oficial do romanche) para servir de padrão comum
  entre os 5 idiomas/dialetos — usada pela administração cantonal dos Grisões e pela RTR (rádio/TV
  romanche) — o caso mais institucional de todos os dialetos romanches.
- **rm-puter, Puter** — **B2.** Um dos 5 idiomas romanches históricos (Engadina Alta), com tradição
  literária própria, mas cada vez mais substituído pelo Rumantsch Grischun no uso oficial.
- **rm-surmiran, Surmirano** — **B1–B2.** Idem, dialeto histórico menor (região de Surses).
- **rm-sursilvan, Sursilvano** — **B2.** O maior dos 5 idiomas romanches em número de falantes, com
  tradição literária e editorial própria forte (a região mais vital do romanche).
- **rm-sutsilvan, Sutsilvano** — **B1.** O menor dos 5 em número de falantes, documentado mas frágil.
- **rm-vallader, Vallader** — **B2.** Engadina Baixa, segunda maior tradição literária romanche depois
  do sursilvano, jornal próprio (Fögl Ladin) existe.

### Romeno
- **ro-RO** (padrão) — mesmo teto do romeno. (ro-MD já está na amostra.)

### Russo
- **ru-RU** (padrão) — mesmo teto do russo. (ru-BY, ru-KZ, ru-UA já estão na amostra.)

### Sardo
- **sc-campidanes, Sardo campidanês** — **B2–C1.** Um dos 2 grandes dialetos do sardo, a Região
  Autônoma da Sardenha reconhece oficialmente tanto o campidanês quanto o logudorês como as duas
  variedades de referência da Limba Sarda Comuna (norma escrita oficial desde 2006) — teto alto.
- **sc-logudores, Sardo logudorês** — **B2–C1.** Mesmo status institucional do campidanês — considerado
  tradicionalmente o dialeto "mais conservador" foneticamente, base histórica de muita literatura sarda.

### Scots
- **sco-SC** (padrão) — mesmo teto do scots.
- **sco-ulster, Scots do Ulster (Ulster-Scots)** — **B2–C1.** Reconhecido oficialmente pelo Acordo de
  Belfast/Good Friday (1998) e pelo governo da Irlanda do Norte, com a Ulster-Scots Agency mantendo
  material — status institucional real, comparável ao scots da Escócia.

### Somali
- **so-DJ, Somali de Djibuti** — **B1–B2.** Língua nacional de Djibuti (ao lado do árabe e do francês
  oficiais), mídia em somali existe (Radio Djibouti), mas usa essencialmente a norma somali padrão.
- **so-ET, Somali da Etiópia** — **B1–B2.** Língua regional oficial da região de Somali, na Etiópia,
  com algum ensino formal — reconhecimento sub-nacional real.
- **so-KE, Somali do Quênia** — **A2–B1.** Falado pela minoria somali no nordeste do Quênia, sem
  status oficial regional comparável ao etíope.
- **so-SO** (padrão) — mesmo teto do somali.

### Albanês
- **sq-tosk** (padrão) — mesmo teto do albanês. (sq-geg já está na amostra.)

### Sérvio (variantes de escrita) 🔤
- **sr-Cyrl, Sérvio em cirílico** — mesmo teto do sérvio (é a escrita oficial constitucional da Sérvia).
- **sr-Latn, Sérvio em alfabeto latino** — **C1–C2.** Uso corrente generalizado no dia a dia (mídia
  digital, redes sociais, parte da imprensa), ensinado nas escolas como a 2ª escrita oficial — não é
  uma escrita "secundária" de verdade, os dois alfabetos têm paridade real de uso.

### Sueco
- **sv-SE** (padrão) — mesmo teto do sueco. (sv-FI já está na amostra.)

### Suaíli
- **sw-TZ** (padrão) — mesmo teto do suaíli. (sw-KE e sw-CD já estão na amostra/lista.)

### Tâmil
- **ta-IN** (padrão) — mesmo teto do tâmil.
- **ta-LK, Tâmil do Sri Lanka** — **C1.** Língua oficial do Sri Lanka (ao lado do cingalês), com
  imprensa, literatura e emissoras próprias — teto alto, status institucional forte apesar do conflito
  histórico étnico no país.
- **ta-SG, Tâmil de Singapura e da Malásia** — **C1.** Uma das 4 línguas oficiais de Singapura
  (Majlis Bahasa Tamil Singapura regula a norma), ensino formal, mídia estatal em tâmil — infraestrutura
  institucional forte apesar de população pequena.

### Tétum
- **tdt-praca, Tétum-praça** — já é essencialmente o tétum padrão/urbano (Díli) — mesmo teto do tétum.
- **tdt-terik, Tétum-terik** — **A2–B1.** Variedade rural mais conservadora, menos documentada que o
  tétum-praça (que é a base do tétum oficial de Timor-Leste).

### Turco
- **tr-CY, Turco de Chipre (Chipriota turco)** — **B1–B2.** Falado na parte turca de Chipre, com
  algum reconhecimento regional (Chipre do Norte), mas internacionalmente não reconhecido como Estado
  — material é sobretudo dialetológico.
- **tr-TR** (padrão) — mesmo teto do turco.

### Uigur
- **ug-CN** (padrão) — mesmo teto do uigur.
- **ug-KZ, Uigur do Cazaquistão** — **B1.** Comunidade diaspórica (refugiados/migrantes de Xinjiang),
  com alguma imprensa própria em Almaty, mas comunidade pequena e material limitado.

### Ucraniano
- **uk-BR, Ucraniano do Paraná** — **A2–B1.** Comunidade histórica de imigração (sul do Brasil, desde
  1891), com preservação cultural ativa, mas pouco material linguístico formal específico.
- **uk-CA, Ucraniano do Canadá** — **B1–B2.** Maior e mais institucionalizada diáspora ucraniana do
  mundo (Prérias canadenses, desde o século XIX) — tem até um dialeto estudado academicamente
  ("Canadian Ukrainian"), jornais históricos próprios (Ukrainian Canadian Congress) — o mais forte
  dos três ucranianos de diáspora.
- **uk-UA** (padrão) — mesmo teto do ucraniano.

### Urdu
- **ur-IN, Urdu da Índia** — **C1.** Uma das línguas oficiais reconhecidas pela Constituição indiana
  (8º Anexo), grande tradição literária (poesia urdu é um pilar cultural na Índia), mas convive com o
  domínio institucional do híndi.
- **ur-PK** (padrão) — mesmo teto do urdu.

### Uzbeque
- **uz-AF, Uzbeque do Afeganistão** — **A2–B1.** Minoria uzbeque no norte do Afeganistão, sem
  status oficial, pouco material específico.
- **uz-Cyrl, Uzbeque em cirílico** 🔤 — **B1–B2.** Escrita oficial até 1992 (ainda usada por parte da
  população mais velha e por materiais do período soviético) — bastante material histórico/formal
  existe, mas a transição pro latino é política de Estado desde a independência.
- **uz-UZ** (padrão) — mesmo teto do uzbeque.

### Vêneto
- **vec-BR, Talian (Brasil)** — **B2–C1.** Já citado no `AGENTS.md` do próprio app: reconhecido pelo
  IPHAN como Referência Cultural Brasileira (2014), Inventário Nacional da Diversidade Linguística —
  reconhecimento oficial federal brasileiro real, um dos casos mais fortes da lista toda.
- **vec-IT** (padrão) — mesmo teto do vêneto.

### Vietnamita
- **vi-N, Vietnamita do Norte (Hanói)** — é essencialmente o vietnamita padrão/oficial — mesmo teto do
  vietnamita.
- **vi-S, Vietnamita do Sul (Saigon)** — **B2–C1.** Variedade de prestígio alternativa real (usada
  antes de 1975 como norma do Vietnã do Sul, ainda dominante na diáspora vietnamita global, inclusive
  nos EUA) — comunidade de mídia/imprensa própria significativa na diáspora.

### Uolofe
- **wo-GM, Uolofe da Gâmbia** — **B1.** Também amplamente falado na Gâmbia (língua franca informal,
  sem ser oficial — o inglês é o oficial), menos institucionalizado que no Senegal.
- **wo-SN** (padrão) — mesmo teto do uolofe.

### Iídiche
- **yi-hasidic, Iídiche hassídico** — **B2–C1.** Paradoxalmente a variedade do iídiche com MAIS
  falantes NATIVOS vivos hoje (comunidades hassídicas em Nova York, Londres, Israel, Antuérpia —
  crescimento demográfico real, ao contrário do iídiche secular em declínio), com escolas, jornais e
  publicações próprias — mas resiste à norma YIVO por razões religiosas/identitárias, usando
  ortografia e registro distintos.
- **yi-YIVO** (padrão) — mesmo teto do iídiche.

### Iorubá
- **yo-BJ, Iorubá do Benim** — **B1–B2.** Também falado como língua importante no Benim (não oficial),
  menos material e infraestrutura que no lado nigeriano.
- **yo-NG** (padrão) — mesmo teto do iorubá.

### Nheengatu
- **yrl-BR** (padrão) — mesmo teto do nheengatu.
- **yrl-CO, Nheengatu da Colômbia** — **A2.** Comunidade pequena no Vaupés colombiano, documentação
  limitada comparada ao nheengatu brasileiro (que já é cooficial em São Gabriel da Cachoeira).
- **yrl-VE, Nheengatu da Venezuela** — **A2.** Mesma situação, comunidade pequena no Amazonas
  venezuelano.

### Cantonês
- **yue-CN, Cantonês de Cantão (Guangzhou)** — **B2–C1.** Berço histórico do cantonês padrão (a
  pronúncia de Cantão é tradicionalmente a referência, antes de Hong Kong assumir esse papel
  culturalmente) — mas sob pressão política crescente do mandarim na China continental.
- **yue-HK, Cantonês de Hong Kong** — já é essencialmente o próprio cantonês do app (`yue`), que já
  está medido como C2 em `TETO-DOS-IDIOMAS.md` — mesmo teto.
- **yue-MO, Cantonês de Macau** — **C1–C2.** Cooficial com o português em Macau, língua majoritária
  de fato da população — usa a mesma norma de Hong Kong/Cantão, sem corpus normativo distinto.

### Chinês mandarim (variantes de escrita) 🔤
- **zh-Hant, Chinês em escrita tradicional** — mesmo teto do mandarim (C2) — a escrita tradicional é
  a oficial em Taiwan, Hong Kong e Macau, com todo o aparato institucional/editorial que isso implica.
- **zh-Latn, Chinês romanizado (pinyin)** — **B2–C1.** O pinyin é o sistema de romanização OFICIAL da
  China (desde 1958, ISO 7098), usado universalmente no ensino de chinês como língua estrangeira —
  mas como "variante de escrita" pra LER chinês nativo, pinyin sozinho (sem os caracteres) tem uso
  real limitado além de material didático e placas/nomes próprios.


### Estoniano
- **et-EE** (padrão, única entrada) — mesmo teto do estoniano (já C2, completo).

### Lituano
- **lt-LT** (padrão, única entrada) — mesmo teto do lituano.

### Letão
- **lv-LV** (padrão, única entrada) — mesmo teto do letão.

## Precisa de mais pesquisa (confiança baixa demais pra uma estimativa só com conhecimento geral)

- **ms-SG (malaio de Singapura)** e **ta-SG (tâmil de Singapura)**: dei C1 pelo status de língua
  oficial de Singapura, mas não tenho certeza do volume real de material formal/dicionário específico
  publicado — vale conferir antes de tratar como definitivo.
- **lij-MC (monegasco)**: reconhecimento institucional forte (idioma nacional de Mônaco), mas não
  confirmei se existe dicionário normativo publicado — o nível B1–C1 é uma faixa larga de propósito.
- **hi-FJ (híndi de Fiji)**: mencionei que às vezes é tratado como língua à parte — vale confirmar o
  nome/status exato (Fiji Hindi vs. Fijian Hindi) e se há gramática formal publicada antes de decidir
  entre tratá-la como dialeto do híndi ou reclassificar.
- **esu-HBC e esu-NUN**: citei códigos ISO 639-3 próprios (`cuk`, `cux`) de memória — confirmar esses
  códigos antes de usá-los em qualquer lugar do app (mesma regra de nunca inventar código).

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

1. ~~Validar o critério de 6 níveis com o dono~~ **feito, aprovado em 16/10/2026.**
2. ~~Rodar o levantamento completo nos dialetos ainda não amostrados~~ **feito em 16/10/2026** — os
   241 dialetos/variantes do app (menos os 2 com curso próprio) estão todos medidos agora, entre a
   amostra de calibração e o "Levantamento completo" acima. Só 5 casos ficaram com confiança baixa
   demais pra uma estimativa só com conhecimento geral (ver "Precisa de mais pesquisa").
3. Decidir, caso a caso, se os sotaques com ISO 639-3 próprio (bávaro, suíço-alemão, baixo-alemão)
   viram dialeto/língua própria.
4. Conferir os casos listados em "Precisa de mais pesquisa" antes de usá-los pra qualquer decisão.
5. Só depois disso, seguir a ordem já definida em `PENDENTES.md`: fontes → teto → curso, um de
   cada vez, começando pelos que já chegam mais perto de C1/C2 (menos trabalho de pesquisa, mais
   conteúdo aproveitável) — candidatos fortes pra começar, pelo levantamento acima: **valenciano
   (ca-VC)**, **leonês (ast-leones)**, **aranês (oc-gascon)**, **talian (vec-BR)** e **vêneto/sardo**
   (todos já com reconhecimento oficial real, o sinal mais forte do critério).
