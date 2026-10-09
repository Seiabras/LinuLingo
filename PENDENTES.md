# Pendências (atualizado em 08/10/2026)

Este arquivo lista só o que falta fazer ou decidir, e referência útil pra quem continuar o
trabalho. O que já foi implementado e testado não entra aqui — está no `git log`. Leia o
`AGENTS.md` antes de pegar qualquer item.

## Pendente de verdade

### Reforma da taxonomia dialeto/sotaque, bandeiras regionais e auditoria do Perfil (pedido do Matheus, 08/10/2026)
Pedido do Matheus por WhatsApp: "a parte dialetos em cultura e historia n faz muito sentido, ela tá
incompleta" / "Tem que ter uma reformulação do que é considerado sotaque e dialeto" + "clicando
'Português' deve mostrar 'português do Brasil' / 'português de Portugal' como dois sub-cursos
separados dentro do mesmo idioma; dentro de cada um, em Cultura a lista de sotaques de Cultura deve
ficar restrita só a esse dialeto/país" + pedido separado de bandeiras regionais + auditoria do
Perfil.

**Decisão de arquitetura (antes de codar)**: a taxonomia variante/dialeto/sotaque já existia desde
04/10/2026 (`LanguageVariant.kind: 'variante'|'dialeto'` em `pack.variants`, `Accent.kind:
'sotaque'|'dialeto'|'língua'` em `pack.accents`, `Accent.variant?: string` linkando um sotaque ao
dialeto/variante a que pertence) — **não inventei um campo novo**, reaproveitei o que já existia,
porque já tinha tudo que o pedido precisava e o Matheus já tinha validado essa estrutura. Dez
idiomas já tinham dado real de 2+ dialetos nacionais com conteúdo cultural diferenciado (não só o
português, o exemplo dado): `es`, `pt`, `ro`, `fr`, `it`, `da`, `fi`, `is`, `ko`, `sv` (confirmado
contra `splitPacks()`/`dialetos.test.ts`, que já cobria isso). O bug de verdade era puramente de UI:
**faltavam dois comportamentos**, não dados novos:

1. **Perfil não oferecia o dialeto como sub-curso**: clicar em "Português" trocava direto pro
   padrão (`pt-PT`, o primeiro da lista), sem perguntar qual dialeto. **Feito**: `ProfileScreen.tsx`
   — idioma com `realDialects(pack).length >= 2` (nova função em `dialetos.ts`) abre como cartão com
   os dialetos embaixo, cada um clicável como um sub-curso (`switchToDialect`, grava a variante ANTES
   de trocar o idioma — ver o comentário no código sobre a corrida com o `refresh()` do
   `setLanguage`, e zera o sotaque salvo desse idioma, pra não sobreviver à troca de dialeto). Os
   ~90 idiomas com só 1 dialeto continuam exatamente como antes, sem fileira nova.
2. **Cultura misturava sotaques dos dois dialetos**: a lista de sotaques/dialetos regionais em
   `AccentsPanel.tsx` (`VarietyPicker`) mostrava `pack.accents` inteiro, sem filtrar pelo dialeto
   ativo — escolher português do Brasil ainda mostrava sotaques de Portugal (lisboeta, açoriano…) e
   vice-versa. **Era exatamente esse o "não faz muito sentido" que o Matheus citou.** **Feito**:
   `accentsForDialect(pack, dialectCode)`, em `src/services/dialetos.ts` — com 2+ dialetos nacionais
   de verdade, mostra só os sotaques/dialetos regionais cujo `.variant` bate com o dialeto ativo;
   quem não tem `.variant` (de propósito, porque atravessa mais de um dialeto — `ro-moldovenesc`,
   dos dois lados do Prut; `ko-koryomar`, que não segue nem Seul nem Pyongyang; `fr-afrique`, que
   cobre vários países) continua aparecendo nos dois lados, sem mudança de comportamento. Reaproveitei
   esse comentário já existente no código de cada um em vez de inventar regra nova.
   - Achei 5 sotaques do português (`pt-angolano`, `pt-mocambicano`, `pt-cabo-verdiano`,
     `pt-sao-tomense`, `pt-timorense`) sem `.variant` cadastrado, por omissão (não de propósito, ao
     contrário dos três do parágrafo acima). Como os cinco já tinham `speechLocale: 'pt-PT'` (os
     PALOP e Timor-Leste seguem a norma europeia, não a brasileira), completei o campo que faltava
     (`variant: 'pt-PT'`) em vez de deixá-los aparecer nos dois dialetos — é dado que já estava
     implícito no próprio arquivo, não uma escolha nova.
   - Teste novo: `src/services/dialetos.test.ts`, bloco `accentsForDialect` (pt BR×PT não se
     misturam, PALOP/Timor só em pt-PT, ro-moldovenesc nos dois lados, e idiomas sem dialeto real ou
     sem escolha ativa não filtram nada).

**Pendência explícita — pede confirmação do Matheus antes de implementar**: a mensagem dele sobre o
pedido 2 foi cortada no meio: "...escolho norueguês da Noruega, em cultura vai continua…". O
norueguês (`nb`) é um idioma com **variante de escrita** (`kind: 'variante'`, bokmål × nynorsk), não
dialeto nacional — e eu confirmei, investigando o código, que `nb/sotaques.ts` tem exatamente o
mesmo problema que o do português: sotaques de bokmål (`nb-ostnorsk`, `nb-bergensk`…) e de nynorsk
(`nb-vestlandsk`…) aparecem juntos na lista de sotaques, sem filtrar pela variante ativa. **Não
estendi o filtro `accentsForDialect` pra variantes de escrita** porque (a) a instrução explícita
deste pedido foi "mantenha intocado o comportamento de variantes, elas continuam acima dos sotaques,
exatamente como já ficam hoje" e (b) a frase cortada do Matheus parece estar indo exatamente nessa
direção (ele escolhe o país/variante do norueguês e descreve o que acontece em Cultura a seguir) —
**mas não dá pra saber se ele ia dizer "e o mesmo bug aí, resolve" ou outra coisa** (alguma nuance da
interação variante→dialeto→sotaque que eu não deveria adivinhar). Antes de alguém estender
`accentsForDialect`/`VarietyPicker` pra filtrar sotaques por variante de escrita também (bokmål×
nynorsk, chinês tradicional×pinyin, mongol tradicional×cirílico), **pergunte ao Matheus o que ele
ia dizer depois de "em cultura vai continua…"** — a mudança de código seria pequena (a mesma função
já dá suporte, só trocar o `dialetosNacionais.length >= 2` por incluir também `variantesDeEscrita`
em `AccentsPanel.tsx`), mas é melhor confirmar a intenção antes, já que o próprio pedido disse pra
não tocar nisso.

**Albanês (gheg, arbëresh, arvanítico) — item da fila "Idiomas naturais ainda não começados"**:
encaixou na mesma reforma. Pesquisei cada um na Wikipédia (inglês, consultada em 08/10/2026:
"Gheg Albanian", "Arbëresh language", "Arvanitika") e criei `src/data/sq/sotaques.ts` com os três
como `Accent` de `kind: 'dialeto'` dentro do pacote `sq` já existente (não pacote novo, como já
estava decidido) — **sem inventar frases**: como não achei exemplos de frase completa com fonte
confiável pra nenhum dos três (ao contrário do coreano/`ko-koryomar`, que tinha fonte rica), usei só
substituições de palavra isolada, diretamente das fontes (ex. gheg "âsht" por "është", arbëresh
"gluhë" por "gjuhë", arvanítico "gljuhë" por "gjuhë"), igual ao princípio já registrado sobre o
Simlish: contar com confiança o que a fonte confirma, não completar o resto por conta própria.

**Bandeiras regionais (pedido separado, mas relacionado)**: criado `src/data/bandeiras-regionais.ts`
+ `src/components/RegionFlag.tsx` (desenha a bandeira em SVG, porque o Unicode só tem emoji de
bandeira pra PAÍS — região nenhuma tem sequência de emoji própria, exceto Escócia/Gales/Inglaterra
no Reino Unido, que nem apareceram como caso de uso aqui). Troquei a bandeira do país pela bandeira
regional só onde a bandeira já referenciava um país inteiro pra representar uma região específica —
em `OwnLanguagesTab.tsx` (aba "Línguas próprias" da Cultura), que é onde catalão/basco/galego
aparecem (são `kind: 'língua'`, não sotaque comum). **Entraram** (geometria simples — listras ou
faixas retas —, cores e desenho confirmados por fonte, todas bandeiras oficiais de governo, de uso
livre):
- **Catalunha** (`es-catalan`): Senyera, 9 listras horizontais (5 de ouro, 4 vermelhas). Fonte:
  Wikipédia (inglês) "Flag of Catalonia", 08/10/2026. Oficial da Generalitat (1933).
- **País Basco** (`es-basque`, `fr-basque` — a mesma bandeira serve pro lado espanhol e francês,
  porque o Iparralde francês não tem bandeira própria de autoridade, e a Ikurriña também representa
  o País Basco como região cultural inteira): campo vermelho, aspa verde, cruz branca por cima.
  Fonte: Wikipédia (inglês) "Ikurrina", 08/10/2026. Oficial da Comunidade Autónoma (1936/1978). As
  larguras exatas da aspa/cruz não vieram na fonte (só a proporção geral 14:25) — usei uma largura
  aproximada razoável; as cores e o desenho (campo/aspa/cruz) são exatos.
- **Galiza** (`es-galician`, `pt-galego`): campo branco, faixa diagonal azul-celeste (versão civil,
  sem o brasão — o brasão tem elementos complexos demais pra reproduzir com confiança). Fonte:
  Wikipédia (inglês) "Flag of Galicia", 08/10/2026. Oficial da Xunta (Lei 5/1984).

**Ficaram de fora** (região já citada no app, mas bandeira oficial tem brasão/figura — leão, flor-
de-lis, cabeça de mouro, tríscele — complexo demais pra desenhar com confiança em SVG sem baixar o
arquivo vetorial de verdade; tentei baixar de `upload.wikimedia.org` durante a sessão e o servidor
devolveu 429/limite de taxa, então não arrisquei uma aproximação de memória):
- **Quebec** (variante `fr-CA`, "Francês do Quebec", hoje com `emoji: '🍁'`, uma folha de bordo
  genérica, não uma bandeira): Fleurdelisé — campo azul, cruz branca, 4 flores-de-lis brancas nos
  cantos. (O "Belga"/`fr-belge` NÃO entra nessa lista: é `sameAsVariant: 'fr-BE'`, ou seja,
  representa a Bélgica como país — a bandeira do país já está certa ali, não é o caso de região
  específica dentro de um país.)
- **Sicília** (`it-siciliano`, `it-lingua-siciliana`): tríscele (cabeça da Medusa com três pernas).
- **Sardenha** (`it-sardo`, `it-lingua-sarda`): os Quatro Mouros.
- **Córsega** (`fr-corse`): cabeça de mouro (bandana).
- **Bretanha** (`fr-breton`): Gwenn ha Du — listras preto/branco mais arminhos (figuras) no canto.
Pra qualquer uma dessas, o caminho certo é baixar o SVG oficial do Wikimedia Commons (confirmando a
licença no rodapé do arquivo, como o Matheus pediu) e servir como asset de imagem, não tentar
redesenhar a figura à mão.

**Auditoria do Perfil (item 3, feita depois de A e B)**: reli `ProfileScreen.tsx` inteiro já com as
mudanças acima aplicadas. Achado e corrigido: o tutorial (`tour.ts`, passo "sotaques", alvo
`cultura-variedades`) contava `pack.accents` inteiro ("São N jeitos de falar X") sem escopar pelo
dialeto ativo — pra português, prometia ~28 quando a Cultura, com um dialeto escolhido, mostra só a
metade. `passosDoTour` agora recebe `variant` (passado por `TourOverlay.tsx`, que já tinha acesso
via `useApp()`) e usa `accentsForDialect` pra contar certo. Resto do Perfil (rótulos, Collapsible de
Acessibilidade, botões de Ajuda) revisado e sem mais nada desatualizado encontrado.

**Verificação**: `npx tsc --noEmit` limpo, eslint limpo nos arquivos tocados, testes novos e os já
existentes de sotaque/dialeto/cultura passando (`dialetos.test.ts`, `sotaques.test.ts`,
`bandeiras-regionais.test.ts`, `cultura-paises.test.ts`, `quiz-sotaque*.test.ts`, `tour.test.ts`).
**Não deu pra verificar visualmente** (Playwright/navegador): o `expo start --web` desta sessão
subiu e respondeu (`/status` → `packager-status:running`, HTML servindo em `/LinuLingo/`), mas não
havia ferramenta de navegador disponível neste agente pra tirar print, e reconstruir manualmente a
URL do bundle de desenvolvimento do Metro (Expo Router 57.x, com `baseUrl` de produção configurado
em `app.json`) não deu certo nas tentativas feitas. Quem retomar isso com acesso a navegador: testar
o fluxo Perfil → clicar em "Português" → escolher "do Brasil"/"de Portugal" → Cultura mostrando só
os sotaques daquele dialeto, e os três cartões de "Línguas próprias" (catalão, basco, galego) com a
bandeira regional nova.

### Auditoria de imagens fora do vocabulário: resolução e corte (pedido do Matheus, 08/10/2026)
Pedido literal: "Verificar as imagens para ver se todas estão em boa resolução e não estão
cortadas." As fotos do vocabulário (`assets/fotos/palavras/`) já tinham sido conferidas e
regeradas nesta mesma sessão (ver seção acima) — esta auditoria cobriu o resto: mapeei todas as
pastas de imagem do app (`find assets -type d`) e exclui de propósito `assets/pictogramas/palavras`
(mapeado por `pictogramas-mapa.ts`, que o seiabras-59 está mexendo agora na branch
`varredura-visual`, problema diferente — mesma imagem em palavras diferentes, não resolução/corte).

**Achado real, mesma causa-raiz da já corrigida em `fotos-palavras`**: `scripts/baixar-fotos-album.mjs`
(gera as fotos dos Amigos do Linu E dos bichos/instrumentos do álbum de figurinhas) tinha o mesmo
bug do script de palavras antes do conserto de hoje: pedia uma miniatura de só 400px à API do
Wikimedia e aplicava `crop='min(iw,ih)'` (quadrado centrado, sem x/y) antes de reduzir pra 256px —
cortava topo/base ou laterais de qualquer foto que não fosse originalmente quadrada. Confirmado
visualmente: a foto do imperador-pinguim (`assets/fotos/amigos/0001.jpg`) cortava a cabeça dos dois
pinguins adultos. Afetava as 112 fotos geradas por esse script: 100 em `assets/fotos/album/` + 12 em
`assets/fotos/amigos/`.

**Corrigido**: troquei o `crop` forçado pelo mesmo encaixe sem cortar já usado em
`baixar-fotos-palavras.mjs` (scale com `force_original_aspect_ratio=decrease` + overlay centrado em
fundo branco 512×512) e pedi uma miniatura maior da fonte (`iiurlwidth` 400→800). Acrescentei
`--refazer` pro script, no mesmo padrão do script de palavras. Rodei o script inteiro (sem cache
local nesta worktree, então baixou tudo de novo): **112/112 fotos regeradas** com os mesmos nomes de
arquivo, mesma chave, mesmo autor/licença (só o pixel mudou) — 100/124 bichos/instrumentos do álbum
e 12/12 Amigos do Linu, exatamente a mesma taxa de sucesso de antes (os outros 24 itens do álbum já
não tinham foto de licença livre achada antes, não é regressão desta correção). Conferido visualmente
em amostra (imperador-pinguim, urso-pardo, piano de cauda): nenhuma foto cortada, nitidamente mais
nítidas (512×512 em vez de 256×256).

Also conferi `assets/fotos/pinguim-barbicha-*.jpg` (as 4 fotos de verdade do pinguim-de-barbicha,
`scripts/baixar-fotos-linu.mjs`, usadas em `SpeciesPhotos.tsx`): esse script **nunca cortou nada**
— guarda a proporção natural da foto e aplica o corte só na hora de exibir a miniatura (com um ponto
de foco escolhido à mão pra manter a cabeça do pinguim visível; a versão em tela cheia mostra a foto
inteira). Não é bug, é um crop inteligente proposital. Mas a miniatura fonte vinha em só 960px de
largura (`iiurlwidth: 800`, a API devolveu o bucket de 960) e o visualizador em tela cheia pode pedir
até 960px lógicos de largura (`Math.min(winW - 32, 960)` em `RealPhotoModal`/`PhotoViewer`) — em
telas grandes/retina (desktop web, não o uso típico no celular) isso ficaria raso. Correção simples e
seguríssima (mesma fonte, mesmo autor/licença): subi `iiurlwidth` pra 1600 e rodei de novo — as 4
fotos agora saem em 1600px de largura (+3,4 MB no total, irrelevante perto dos 270 MB de `assets/`).

**Pastas conferidas e sem problema de resolução/corte** (não precisaram de correção): `assets/logo/`
(banner 1280×400, só aparece no README, fora do app; `linu-logo.svg` é vetor), `assets/pixel/` (pixel
art gerado por `scripts/linu-pixel.py`/`.mjs`, baixa resolução é o estilo proposital — conferido que
`PixelShelter.tsx` exibe cada cena no tamanho nativo exato, 344×192, sem esticar), `assets/geo/`
(dados de polígono do mapa-múndi, não são imagens raster), ícones do app (`assets/icon.png` 1024×1024,
`assets/android-icon-*.png` 512×512, `public/icon-*.png`, `favicon.png` — todos do tamanho padrão
esperado pra cada plataforma).

**Não corrigido / observação à parte, fora do escopo deste pedido** (resolução/corte): a foto do
piano de cauda no álbum (`assets/fotos/album/0050.jpg`, chave "piano") mostra a marca "Steinway &
Sons" bem visível no corpo do instrumento — o filtro de marca do script (`BRAND`) só olha o NOME do
arquivo no Commons, não o conteúdo visual da foto. Não é um bug introduzido agora (a foto já estava
no catálogo antes, com a mesma marca visível) e não é resolução/corte, então não mexi; registro aqui
caso o Matheus queira decidir trocar essa foto por outra sem marca visível no futuro.

Arquivos tocados: `scripts/baixar-fotos-album.mjs`, `scripts/baixar-fotos-linu.mjs` (lógica),
`src/data/fotos-linu.ts` (regenerado, só a proporção de uma foto mudou de 1.501 pra 1.500 por
arredondamento — autor/licença intactos), 112 `.jpg` em `assets/fotos/album/` e `assets/fotos/amigos/`
+ 4 `.jpg` em `assets/fotos/` (pinguim-barbicha). `npx tsc --noEmit` limpo; eslint nos dois scripts
só acusa o `no-undef` de `Buffer` já pré-existente em `baixar-fotos-palavras.mjs` (scripts Node sem
configuração de globals no eslint, não é regressão desta mudança).

### Pontuação dos idiomas: aba Sistemas de escrita + lacunas no currículo (08/10/2026)
**Feito**: a aba "Sistemas de escrita" (`sistemas-escrita.ts`/`AlphabetsTab.tsx`) ganhou pontuação
em todas as 22 entradas (campo `punctuation`, seção "✒️ Pontuação" no card de cada sistema).
Lições novas de nível B2.4 em `es` (comillas «» × "", raya do diálogo, vírgula decimal) e `ja`
(。、largura total, 「」/『』 no lugar de aspas, sem espaço entre palavras). Confirmado quais idiomas
já tinham lição "Pontuação": da, et, fr, is, lt, lv, nb, pt, ru, sv.
**Pendente**: alemão/árabe/chinês ainda não têm lição de pontuação porque esses 3 pacotes só vão até
A1.2 (sem nível B2.4 pra encaixar) — o conteúdo já pesquisado (aspas „baixa-alta" do alemão; vírgula/
ponto e vírgula/interrogação espelhados ،؛؟ do árabe; pontuação de largura total ，。！？ do chinês)
fica pronto pra quando esses currículos crescerem. Os ~150 idiomas fora da lista de candidatos ainda
não foram auditados (pode haver outros com pontuação distinta, tipo ucraniano/galego/catalão).

### Auditoria do tutorial × app (08/10/2026)
Pedido do Matheus depois da rodada grande de features de hoje: conferir `src/services/tour.ts` (o
roteiro passo a passo do passeio guiado) e `TourOverlay.tsx` contra a tela/feature real de cada
passo, e corrigir ou completar onde achar discrepância de verdade — nunca por suposição, só o que
foi confirmado abrindo o componente de cada `rota`/`alvo`.

**Discrepâncias reais encontradas e corrigidas** (2 passos, `src/services/tour.ts`):
- **Passo `cultura`**: o balão dizia "Nas outras abas: línguas próprias, indígenas, de sinais e
  tipos de línguas" — só 4 das 7 outras abas de `CultureScreen.tsx` (`TABS`). Faltavam 3 abas novas
  dos últimos dias: 🎲 Jogos (do conhecimento), 🌍 Dialetos e 🔤 Sistemas de escrita (a que substituiu
  "Alfabeto" e ganhou a pontuação dos idiomas nesta sessão). Corrigido para citar as 7, na mesma
  ordem da barra de abas; "comida e folclore de lá" perdeu o "de lá" pra caber no limite de 190
  letras do balão (`TOUR_MAX_TEXTO`) mesmo com o nome de idioma mais longo do app ("Mongol (escrita
  tradicional)").
- **Passo `meta`** (Perfil): o balão dizia só "Aqui também se troca o idioma", sem indicar que agora
  há dois grupos (🗣️ Naturais / 🤖 Artificiais, `ProfileScreen.tsx`) — idiomas artificiais com curso de
  verdade (esperanto, volapük, ido, klingon, toki pona, lojban, interlíngua, na'vi, alto-valiriano,
  quenya, solresol, lingua franca nova) ganharam essa separação. Corrigido para "Aqui também se troca
  o idioma, natural ou artificial."

**Conferido e já correto, sem mudança** (pra não inventar discrepância que não existe):
- Passo `ficha`: a fala do cachecol ("22 cordas da capoeira, da cinza à branca do mestre") bate com
  `src/services/cachecol.ts` (22 `CORDAS`, de Cinza a Branca/Mestre, cachecol só a partir da 1ª lição)
  — já tinha sido corrigido numa entrega anterior (commit `f4dc5c60`).
- Passo `escrita`: aponta pro treino `/alfabeto` (`AlphabetScreen.tsx`, card "🔤 Alfabeto" na Home) —
  é um treino de letras por idioma, diferente da aba cultural "Sistemas de escrita" (que é sobre
  escritas do mundo em geral, não treino). Os dois nomes coexistem sem conflito, não é o caso do
  "Alfabeto" ter sido renomeado/substituído ali.
- Passo `cursos`: cita só 5 exemplos ("Libras, Braille, esperanto, klingon e o Tsevhu") de um total de
  19 minicursos hoje (`src/data/cursos/index.ts`, `MINI_COURSES`) — é um teaser com "…", igual outros
  passos do tour (ex. "praticas"), não uma lista fechada; os 5 exemplos continuam existindo e corretos,
  então não foi tratado como discrepância.
- Passos `cofre`/`etimologia`/`gramatica`/`conversa`/`comunidade`/`mapa`/`mundo`/`linha-do-tempo` e os
  demais: alvo e texto batem com a tela de verdade (confirmado abrindo `VocabScreen.tsx`,
  `GrammarScreen.tsx`, `ConversationScreen.tsx`, `CommunityScreen.tsx`, `MapScreen.tsx`).
- Todos os `alvoDoTour(...)` citados em `tour.ts` existem de verdade no código (checado com grep, e
  confirmado pelos testes).

**Ficou de fora, por decisão explícita (não é esquecimento)**:
- **Botão informativo nos cards de idioma** (ficha com família/região/escrita/falantes, feito nesta
  sessão em `LanguageInfoSheet.tsx`/`TutorialScreen.tsx`): não entrou como passo do tour porque
  aparece na tela de ESCOLHA do idioma, que roda antes do passeio guiado começar (`iniciarTour()` só
  dispara depois que essa tela fecha, em `TutorialScreen.tsx`) — não há como o passeio "visitar" uma
  tela que já passou. Também é auto-explicativo (ícone ⓘ clássico), então nem precisaria de aviso.
- **Jogos do conhecimento** e **idiomas artificiais**: cobertos de forma leve (citados pelo nome nos
  passos `cultura` e `meta`, corrigidos acima), sem passo dedicado — o tour, pelo padrão já existente,
  não abre uma aba de cada vez dentro de Cultura/Perfil (não há passo próprio para "Dialetos" ou
  "Tipos de línguas" também, por exemplo), só nomeia as abas na visão geral. Dar um passo extra só pra
  Jogos ou só pra idiomas artificiais quebraria essa régua sem motivo real.

Testes: `node --import tsx --test src/services/tour.test.ts` passa (3/3) com as duas edições, incluindo
a checagem de limite de 190 letras por balão pra todos os pacotes, e `npx tsc --noEmit` +
`npx eslint src/services/tour.ts` sem erros.

### Leitura por IPA (sotaque/dialeto sem gravação de nativo) — piloto ro/ru implementado (08/10/2026)
Decisão do Matheus: manter voz nativa quando houver gravação real; sem ela, ler o IPA (não TTS
genérico) — principalmente pra diferenciar sotaque/dialeto. Pilotando com romeno e russo antes de
estender pros ~160 idiomas. **Feito nesta rodada:**
- `src/services/ipa-voz.ts`: tabela de tradução IPA (Unicode) → notação ASCII do espeak-ng
  (`[[...]]`, uma variante do Kirshenbaum) pra `ro` e `ru`, com `ipaParaVoz(ipa, lang)` e
  `ipaDaNota(nota)` (separa a nota de exemplo que é IPA da que é comentário em português, tipo
  `"no padrão: ..."`). **Cada símbolo foi conferido contra o `phsource/ph_romanian`/`ph_russian`/
  `phonemes` reais do repositório espeak-ng/espeak-ng (tag 1.52.0) E testado de verdade no binário
  `espeak-ng` 1.52.0 instalado no sistema** (`espeak-ng -v ro/ru --ipa -x -f arquivo.txt`, comparando
  o IPA que ele devolve com o que eu pedi) — não é tabela genérica copiada sem conferir. O projeto
  `classical-cat-dh-lab/espeak-ng-wasm` citado na pesquisa anterior só tem mapeamento pronto pro latim
  (`mapping/la.json`), nenhum pra `ro`/`ru`; serviu de referência de FORMATO (tabela por idioma,
  conferida fonema a fonema contra o binário real), não de dado pra copiar.
- Achados que iam dar IPA errado se eu tivesse só copiado a tabela genérica do Kirshenbaum: o /ɨ/ do
  romeno E do russo («ы») é o fonema `y` no espeak-ng (não `i"` como a tabela genérica sugere — pra
  `ro` nem funciona; pro russo, o espeak-ng simplesmente rotula a mesma vogal como `[y]`, não `[ɨ]`,
  no próprio `--ipa` dele); `ʲ` (palatalização) precisa ficar colada na consoante anterior **sem**
  separador (`nI^`, não `n_I^`); duas letras juntas sem separador podem casar com o nome de um fonema
  de 2+ letras por acidente (`t`+`s.` lê `ts` e perde o `.`) — por isso a função junta os fonemas
  traduzidos com `_` (separador mudo do espeak-ng), exceto antes de `I^`.
- `speech.ts`: `speak(text, locale, { ipa })` — quando não há gravação nativa e cai na voz neural, se
  `ipa` foi passado e o idioma está no piloto (`temVozPorIpa`), tenta `ipaParaVoz`; se der (nem todo
  símbolo tem tradução — ver `GAPS`), manda o texto em fonemas pro `speakNeural` em vez do texto
  ortográfico; se não der, cai no caminho de sempre (texto comum). `ui.tsx`: `SpeakButton` ganhou a
  prop `ipa`. **Religado numa tela de verdade** (prova de conceito, não só a função isolada):
  `AccentsPanel.tsx` → `AccentDetails` → cada frase de exemplo (`Accent.examples`) já tem um 3º campo
  (`note`) que às vezes é a transcrição IPA entre colchetes (ex. russo: `"[kɐˈnʲeʂnə prʲɪxɐˈdʲi]"`) e
  às vezes é comentário em português (ex. romeno: `"no padrão: “De ce nu vii?”"`); `ipaDaNota` separa
  os dois e só passa IPA de verdade pro `SpeakButton`.
- Testes em `src/services/ipa-voz.test.ts` (30 testes no total do arquivo, todos passando): símbolos
  isolados (≥10 por idioma, incluindo os que aparecem de verdade em `ro/sotaques.ts`/`ru/sotaques.ts`),
  frases inteiras de `ru/sotaques.ts` (features e examples), frases do romeno geradas pelo `ipa-ro.ts`
  (já shipado no app) a partir dos exemplos de `ro/sotaques.ts`, e frases do russo geradas pelo
  `ipa-ru.ts`. `npx tsc --noEmit` e `eslint` limpos nos arquivos tocados.
- **Cobertura de símbolos**: romeno — todos os símbolos que aparecem em `ro/sotaques.ts` (ʃ, ʒ) e
  todos os que o `ipa-ro.ts` já shipado produz (a, ă/ə, â·î/ɨ, e, i, o, u, j, w, h, r, ʲ, africadas
  ce/ci·ge/gi·ț) têm tradução. Russo — todos os símbolos que aparecem em `ru/sotaques.ts` (ɐ, ə, ʂ,
  ɣ, ɡ, ɫ, ɵ, ɛ, ʲ, africadas incluindo a variante `t͜ʂ` do sotaque de Belarus) têm tradução; só `ʊ`
  (у/ю átono, que o `ipa-ru.ts` produz mas não aparece em nenhum exemplo de `ru/sotaques.ts`) ficou
  sem tradução confiável — o candidato óbvio (`U` maiúsculo) trava o leitor de fonemas do espeak-ng
  1.52.0 (o texto depois dele some) e não achei outro nome de fonema pra essa vogal reduzida.
- **Limitação séria, documentada no código (`ipa-voz.ts`)**: quando a tônica (`'`) cai bem antes de
  uma consoante que tem `ʲ` na sequência (`...ˈnʲe...`, o padrão de "коне́чно"), o espeak-ng 1.52.0
  reposiciona a tônica pra antes da vogal e a palatalização se perde — testei no binário, não achei
  como contornar sem mudar a ORDEM do texto (o que erraria a leitura da tônica em troca). Numa
  consoante palatalizada isolada, ou uma que não vem logo depois da marca de tônica, funciona.
- **Risco não resolvido**: toda a conferência usou o `espeak-ng` 1.52.0 do sistema operacional (`apt`),
  não o espeak-ng/piper-phonemize empacotado dentro de `@diffusionstudio/piper-wasm` (o motor que a
  voz neural do app usa de verdade, copiado pra `public/tts/` por `scripts/preparar-tts.mjs`) — não
  achei a versão exata do espeak-ng dentro desse pacote wasm pra confirmar que é a mesma. Nomes de
  fonema raramente mudam de versão pra versão, mas isso não foi testado dentro do wasm do próprio
  app (precisaria rodar o worker de verdade no navegador/Playwright com rede, ou extrair e rodar o
  `piper_phonemize.wasm` via Node — não tentado nesta rodada).
- **O que falta pra ligar de verdade** (além do ponto acima): 1) ouvir o áudio de verdade (só confirmei
  pelo `--ipa -x`, que imprime o fonema calculado, não toquei o som) — principalmente a limitação da
  tônica+palatalização; 2) `ro/sotaques.ts` não tem nenhuma frase de exemplo com IPA pronto (só os dois
  símbolos ʃ/ʒ soltos nas `features`): pra aproveitar o leitor de IPA numa tela de romeno de verdade,
  falta ALGUÉM (não eu — regra do projeto é não inventar IPA sem fonte) documentar o IPA de frases de
  exemplo em `ro/sotaques.ts` do jeito que `ru/sotaques.ts` já tem; 3) estender a tabela pra outros
  idiomas quando o Matheus decidir ampliar o piloto (o método — conferir contra `phsource/ph_<lang>` e
  testar no binário real — é reaproveitável, mas o trabalho de achar os fonemas certos é por idioma).

### Aguardando decisão do Matheus (pesquisa feita, falta escolher o caminho)
- **Fala só por IA lendo pelo IPA**: pesquisa concluída. Hoje a fala passa por
  `src/services/speech.ts` → `neural-tts.ts` → `public/tts/voz-worker.mjs` (espeak-ng + Piper/ONNX).
  Não dá pra injetar o IPA que o app já calcula direto — o espeak-ng só aceita a notação própria dele
  (Kirshenbaum), não IPA padrão. Caminho real: montar uma tabela de tradução IPA→espeak por IDIOMA
  (projeto de referência pra adaptar: `classical-cat-dh-lab/espeak-ng-wasm`, pasta `mapping/<lang>.json`).
  Recomendação do pesquisador: pilotar com 1-2 idiomas de IPA maduro (romeno ou russo) antes de
  estender pros ~160. **Atualização 08/10/2026: o piloto ro/ru foi feito — ver a seção acima.** O
  `mapping/<lang>.json` citado aqui só existe pro latim no projeto de referência; não tinha nada pra
  copiar pra ro/ru (ver a seção acima pra como a tabela foi conferida de verdade).
- **Variações medievais/históricas**: nórdico antigo (`non`, com Futhark/runas) já feito. Candidatos
  pesquisados com fonte real, faltando só prioridade: eslavo eclesiástico antigo (ru/uk/bg/sr…),
  francês antigo, alto-alemão médio, castelhano medieval, toscano antigo/dantesco, latim
  medieval/eclesiástico (como variação dentro do `la`, que hoje só tem o clássico). Árabe
  clássico/corânico também é candidato, e o bloqueio original ("só depois do árabe padrão existir")
  já caiu — o árabe padrão (`ar`) já tem pacote completo.
- **Países/regiões sem o idioma mais falado deles no app**: levantamento feito, mas de conhecimento
  geral consolidado (Ethnologue/CIA Factbook/Wikipédia), sem busca ao vivo país por país — tratar
  como ponto de partida, cada país escolhido precisa de confirmação de fonte antes de construir o
  pacote. Lacunas levantadas: África (Botswana, Burkina Faso, Burundi, Rep. Centro-Africana,
  Eritreia, Essuatíni, Gâmbia, Gana, Guiné, Lesoto, Madagascar, Malawi, Mali, Namíbia, Ruanda, Sudão
  do Sul, Uganda, Zâmbia, Zimbábue); Ásia (Paquistão/panjabi, Indonésia/javanês, Sri Lanka/cingalês,
  Nepal, Butão, Cazaquistão, Turcomenistão, Quirguistão, Azerbaijão); Oceania (Papua-Nova
  Guiné/tok pisin, Fiji, Samoa, Tonga, + ilhas pequenas); regiões autônomas (Tibete, País de Gales,
  Hong Kong/Macau-cantonês, repúblicas autônomas da Rússia — tártaro, tchetcheno, baquir, sakha).
  Territórios de soberania disputada ficaram de fora (mesma neutralidade do mapa). Europa/Américas:
  sem lacuna de país, só variedades coloquiais sem pacote próprio apesar do idioma oficial já
  existir (patoá jamaicano, sranan tongo, crioulos de Maurícia/Seicheles/Serra Leoa/Cabo
  Verde-Guiné-Bissau). Aguardando decisão de por onde começar.
- **Minicursos de línguas artificiais mais difíceis de documentar — AVALIADOS em 08/10/2026** (ver
  "Idiomas artificiais: fila restante", mais abaixo, pra pesquisa completa e veredito de cada um):
  Huttese e Heptapod B e Blissymbols não cabem (estrutural ou sem gramática real); Kēlen e aUI
  ficam de fora por agora (risco/obscuridade, não por incompatibilidade); Láadan É viável como
  minicurso, com vocabulário e gramática já levantados — falta só implementar.
- **Tsevhu**: pedido de gramática nova (frases subordinadas tipo "filhotes...") pro conlang Koa
  Vhukva já no app — como a regra do projeto é nunca inventar texto em Tsevhu, precisa ser
  verificado/autorizado pelos autores antes de implementar.

### Trabalho em andamento, ainda não mesclado
- **Pontuação dos idiomas**: agente rodando na branch `pontuacao-idiomas`, ainda sem commits novos
  além do que já está na master — não mesclar nada dali até a rodada fechar.

### Idiomas artificiais: fila restante
Já têm curso de verdade no app: esperanto, toki pona, lojban, volapük, interlíngua, ido (`io` —
código ISO 639-1 real do ido, não "ido"), klingon (`tlh`), **novial** (`nov`, terceira leva, ver
abaixo), solresol, na'vi, alto-valiriano, quenya, lingua franca nova (elefen), silbo gomero (tipo
"canal"), Basic English (língua controlada).
**A segunda leva pedida pelo Matheus em 08/10/2026 (7 cursos em paralelo) está completa**: ido,
klingon, toki pona, lojban, interlíngua e volapük feitos; simlish pesquisado e decidido que NÃO
vale minicurso (ver referência abaixo, gibberish sem gramática oficial + áudio sem licença livre).

**Terceira leva (08/10/2026, "por ordem de dificuldade crescente de fonte: novial, interslavo,
ithkuil, sindarin, dothraki, lang belta, mando'a")** — pesquisa real (WebFetch/WebSearch) feita nos
7 + Láadan + os candidatos mais arriscados; **só o novial foi implementado nesta rodada** (rate
limit da sessão interrompeu o trabalho no meio; a coordenação pediu para fechar com o que já estava
pronto em vez de arriscar mais pacotes sem revisão). Os outros 6 + Láadan ficam pesquisados e
prontos pra implementar, com toda fonte já levantada — ver o relatório completo logo abaixo, pra
quem continuar não precisar repetir a pesquisa.

- **Novial (`nov`) — FEITO, pacote completo** (`src/data/nov/`, registrado em `idiomas.ts` PACKS/
  LANGUAGES, `REGIOES_SEM_PAIS` em `aventura.ts` — sem país, por design, como as outras auxlangs
  internacionais — e ficha nova em `CONLANGS`/`tipos-de-linguas.ts`, como filha do ido na
  `ARVORE_ESPERANTO`). 99 palavras, 2 unidades (A1.1/A1.2), 5 tópicos de gramática, 2 histórias,
  extras completos (comunidade, cenário, 5 etimologias, diário, shadowing), alfabeto. Fontes: Otto
  Jespersen, "An International Language" (1928, archive.org, item `AILjespersen`, capítulos
  AILsosp/AILstrs/AILnumb/AILpro/AILadj/AILcase/AILinfimp/AILprspst/AILfutcon/AILperplu); "Novial
  Lexike" (1930, dicionário oficial — o site original, blahedo.org/novial, caiu em 2026; usado via
  Wayback Machine, `web.archive.org/web/2005/http://www.blahedo.org/novial/nl/<letra>.txt`);
  Wikipédia (inglês) "Novial" e o curso Wikibooks "Novial" (fiel à gramática de Jespersen), só pra
  cross-check e frases de exemplo. Fontes descartadas por não serem o novial "clássico" de
  Jespersen: "Novial 98" (reforma não-oficial de outra pessoa) e a Wikipédia ESCRITA em novial
  (pode ter neologismo moderno não documentado por ele). Duas lacunas honestas, documentadas no
  cabeçalho de `vocabulario.ts`: não existe saudação fixa tipo "olá" nem fórmula pronta de "por
  favor" no Lexike — "bon jorne" é composição de duas palavras atestadas (bon + jorne), do mesmo
  jeito que toda frase de exemplo do curso é composta com vocabulário e gramática reais, nunca uma
  palavra nova; e "céu" ("siele", citado numa tradução do Pai-Nosso na Wikipédia) não foi
  encontrado no Lexike nem no livro de 1928, por isso ficou de fora do vocabulário. Também corrigido
  de passagem: a ficha do ithkuil (`tipos-de-linguas.ts`) dizia "nem o criador fala fluentemente",
  frase que a pesquisa não conseguiu confirmar em fonte nenhuma (a mais citada, o perfil da New
  Yorker sobre Quijada, estava bloqueada) — trocada por uma frase só com o que foi confirmado (quase
  100 casos gramaticais na versão de 2011; a fala em tempo real exige muito mais reflexão que numa
  língua natural, segundo o próprio Quijada).

- **Interslavo/medžuslovjansky — PESQUISADO, não implementado. Recomendação: PACOTE COMPLETO**,
  mesmo nível de novial/ido/volapük. Fonte oficial real: `steen.free.fr/interslavic/` (pra onde
  `interslavic.info` redireciona — site de Jan van Steenbergen, um dos 5 linguistas do comitê atual:
  Vojtěch Merunka, Jan van Steenbergen, Roberto Lombino, Michał Swat, Pavel Skrylev; projeto fundido
  em 2017 a partir do Slovianski/Slovioski/Neoslavonic, desde 2006). Tem gramática aberta completa
  (`nouns.html`, `pronouns.html`, `adjectives.html`, `verbs.html`, `numerals.html`, `syntax.html`,
  `orthography.html`) e dicionário inglês↔interslavo com ~12.700 linhas (`en-ms.html`) — sobra
  material. ~110 palavras já levantadas por categoria (expressões, pessoas, natureza, comida, corpo,
  números, cores, verbos), gramática central completa (3 gêneros/7 casos nos substantivos, 2
  conjugações verbais regulares + "byti" irregular, aspecto perfectivo/imperfectivo, negação com
  "ne", pergunta com "či"/"li"/entonação, SVO), alfabeto latino E cirílico (ambos "oficialmente
  iguais"), e até textos longos prontos (Pequeno Príncipe, Pai-Nosso, Torre de Babel, Declaração dos
  Direitos Humanos) pra alimentar histórias. **Armadilhas confirmadas a NUNCA usar como fonte**:
  `interslavic.org` (domínio hostil de terceiros, o próprio site oficial avisa) e `neoslavonic.org`
  (domínio expirado, hoje é parking de anúncios). Pontos de atenção pra quem implementar: fixar UMA
  variante por regra (o site já marca a recomendada, ex. locativo em -u) pra não gerar exercício de
  múltipla escolha ambíguo; usar só o passado composto (L-participle + "byti"), não o aoristo (o
  próprio site diz que a maioria dos eslavos não entende); a saudação mais neutra e sourceada é
  "Dobry denj" (não "ahoj/alo", que é emprestado e fraco como fonte única).

- **Sindarin — PESQUISADO, não implementado. Recomendação: MINICURSO** (mesmo nível de quenya/
  na'vi, não pacote completo — segue o padrão já decidido antes pra essa língua no catálogo). Fonte
  única recomendada: o curso acadêmico de Helge Fauskanger no Ardalambion ("Sindarin — the Noble
  Tongue"), hoje só acessível vivo via Wayback Machine
  (`web.archive.org/web/2022id_/http://folk.uib.no/hnohf/sindarin.htm` — o domínio original e
  ardalambion.net estão fora do ar/com SSL quebrado) — tudo nele é rastreável a *The Lord of the
  Rings*, *Letters*, *The Etymologies*, *War of the Jewels* etc. Tolkien Gateway confirma
  independentemente. Vocabulário/frases já levantados (todos com a obra/página de origem): mellon
  (amigo, senha da Porta de Moria), mae govannen (bem encontrado/olá), Edhel/Edhil (elfo/elfos),
  adar/edair (pai/pais), tâl/tail (pé/pés), galadh (árvore), loth (flor), e frases inteiras como "A
  Elbereth Gilthoniel", "Pedo mellon a minno" (fala, amigo, e entra), o linnod de Gilraen. Fonologia
  (dh=/ð/, th=/θ/, ch=/x/, ll/lh=/ɬ/) e a mutação consonantal inicial (lenição: tâl→i dâl, bess→i
  vess, galadh→i 'aladh) também documentadas. Material "sobra" pra um minicurso de 2-3 lições.

- **Dothraki — PESQUISADO, não implementado. Recomendação: MINICURSO** (mesmo nível de na'vi/
  alto-valiriano). **Correção importante**: dothraki.org, citado originalmente como possível fonte,
  é site de FÃS (a própria página se descreve como "not officially a part of them... for fans, by
  fans") — usar em vez disso dothraki.com (blog pessoal de David J. Peterson), dedalvs.com (site
  dele) e as apresentações dele na WorldCon 2011/LCC4 (hospedadas em dedalvs.com/conference.
  conlang.org). Também corrigir uma suposição errada: dothraki é **SVO**, não VSO. Mais de 25
  palavras/frases genuínas de Peterson já levantadas: M'athchomaroon (olá, com respeito), Hash yer
  dothrae chek? (como vai?), khal/khaleesi, mahrazh/chiori (homem/mulher), arakh, vorsa (fogo),
  sistema de 2 classes de substantivo (animado/inanimado) e 5 casos. **Lacuna confirmada**: não há
  números 1-5 documentados em fonte oficial nenhuma — não inventar, só deixar de fora.

- **Lang Belta (The Expanse) — PESQUISADO, não implementado. Recomendação: MINICURSO, pode ir
  direto pra produção**, fonte oficial clara e forte: Nick Farmer, linguista contratado pela
  produção, confirma vocabulário publicamente (conta no Twitter/X @Nfarmerlinguist, citada ~15
  vezes como referência na Wikipédia em inglês "Belter Creole") + cobertura jornalística cruzada
  (Ars Technica 2019, Wired 2017, Quartz 2016). ~20 itens + números já levantados: owkwa (água),
  beratna/sésata (irmão/irmã), kopeng (amigos, mistura francês+mandarim — ótimo exemplo didático de
  crioulo), ya/na (sim/não), oye/oyedeng (olá/tchau), taki taki (obrigado), sistema numérico completo
  até 1000.

- **Mando'a (Star Wars) — PESQUISADO, não implementado. Recomendação: MINICURSO, com curadoria
  extra** antes de fechar a lista final. mandoa.org confirma que a base é "Original Mando'a
  dictionary provided by Karen Traviss", mas o site é fã-mantido e NÃO cita romance+página por
  verbete — por isso usar só as entradas mais seguras (citadas no artigo da própria Traviss, "No
  Word for Hero: The Mandalorian Language", *Star Wars Insider* nº 86, fev/2006, ou repetidas como
  tema central dos romances): Mando'a, Mando'ade, vod, ad, buir, aliit ("Aliit ori'shya tal'din" =
  família é mais que sangue), beskar, dar'manda, aruetii, osik, kyr'tsad, ni/gar. Evitar "Ni ceta"/
  "Oya" (só em fã-wikis, sem confirmação romance+página nesta pesquisa) até alguém conferir contra
  um dos livros físicos/e-book da Traviss (apêndices de *Hard Contact*, *Triple Zero*, *True
  Colors*, *Order 66*, *Imperial Commando: 501st*).

- **Láadan — PESQUISADO (avaliação pedida pelo Matheus), não implementado. Recomendação: MINICURSO
  viável.** A ficha já existente no catálogo está correta (confirmado contra a Wikipédia em inglês
  "Láadan"): partículas de ato de fala no início da frase (Bíi=declarativo, Báa=pergunta,
  Bó=comando, Bóo=pedido, Bé=promessa, Bée=aviso) e partículas evidenciais no fim (wa=percebido, wi=
  autoevidente, we=sonhado, wáa=assumido verdadeiro, waá=assumido falso, wo=imaginado,
  wóo=sem validade conhecida) — ex. real: "Bíi ril áya mahina wa" (a flor é bonita). ~15-20
  substantivos/pronomes básicos levantados (áya=ser bonita, mahina=flor, thul/thulid=mãe/pai,
  ruleth=gato, lanemid=cachorro) e o sistema de pronomes por prefixo+sufixo (l-/n-/b- + -e/-a/-zh/
  -n). O Wiktionary cataloga 290+ lemas em Láadan, confirmando volume real. **Não confirmado**:
  "radiidin" e "ramimelh" (citadas de memória em blogs, ausentes da Wikipédia e do Wiktionary nesta
  pesquisa) — deixar de fora até achar o dicionário de Elgin (1988) direto ou outra fonte confiável;
  laadanlanguage.org (site oficial) deu erro de SSL nesta sessão, vale tentar de novo manualmente.

- **Ithkuil — AVALIADO, decisão: NÃO cabe lição nenhuma (nem minicurso), só a ficha já existente no
  catálogo** (corrigida nesta rodada, ver acima). Confirmado com a fonte primária (o léxico oficial
  em PDF, `ithkuil.net/newithkuil_lexicon.pdf`): a língua rejeita estruturalmente a ideia de "palavra
  simples" — cada raiz se desdobra em Stems (BSC/CTE/CSV/OBJ) que já são definições de frase inteira,
  e não existe um lexema isolado pra "sim"/"não" (são derivados por flexão de caso). Não é falta de
  fonte, é incompatibilidade de formato mesmo.

- **Huttese — AVALIADO, decisão: não cabe** (mesmo caso já resolvido do minionês). Confirmado na
  Wikipédia: "constructed language, with many distorted English words"; sem gramática substancial
  documentada, só fragmentos sonoros de Ben Burtt.

- **Heptapod B — AVALIADO, decisão: não cabe, e é estrutural.** Confirmado na Wikipédia:
  "semasiographic; the language does not have a spoken form" — não existe "palavra" isolada com
  pronúncia equivalente a digitar num cartão de vocabulário.

- **Kēlen — AVALIADO, decisão: não vale o risco agora.** É real (Sylvia Sotomayor, 1998) e de fato
  não tem verbos (usa 4 "relationals" sem conteúdo semântico próprio) — cabe tecnicamente (tem
  substantivos normais), mas uma lição padrão de "palavra + tradução" ficaria didaticamente
  estranha sem antes explicar a categoria "relational" por inteiro. Fica pra um pedido específico.

- **aUI — AVALIADO, decisão: não vale o risco agora, por fonte, não por estrutura.** Tem, sim,
  forma falada (pronúncia construída, 31 morfema-fonemas) — a hipótese de que seria incompatível
  por ser semasiográfica estava errada. O problema real é a obscuridade: poucas fontes de
  vocabulário verificável disponíveis, sem comunidade.

- **Blissymbols — AVALIADO, decisão: não cabe, e é estrutural.** Confirmado na Wikipédia: "the
  characters do not correspond at all to the sounds of any spoken language" — o criador concebeu
  "a written language with no phonology". O campo de pronúncia do app ficaria vazio por definição.

### Cursos curtos: removidos os que já têm pacote completo (pedido do Matheus por WhatsApp, 08/10/2026)
A aba "Cursos" (minicursos, `MiniCoursesScreen.tsx`, `MINI_COURSES` em `src/data/cursos/index.ts`)
listava TODOS os minicursos, incluindo vários que ganharam pacote completo de trilha na mesma sessão
de hoje — ficavam duplicados (minicurso E idioma completo ao mesmo tempo). Cruzando `MINI_COURSES`
× `PACKS`/`isArtificial` (`src/data/idiomas.ts`), confirmado que 7 minicursos já tinham pacote
completo e saíram da lista: esperanto (`eo`), toki pona (`tok`), interlíngua (`ia`), ido (`io`),
volapük (`vo`), lojban (`jbo`) e klingon (`tlh`). Saíram também do código-fonte (sem outro consumidor
que precisasse deles isolados, checado por grep antes de apagar): `src/data/cursos/artificiais.ts`
(só tinha os três primeiros) foi removido por inteiro; `artificiais-mais.ts`, `novas-artificiais.ts`
e `mais-licoes.ts` perderam só os blocos/exports dos graduados. O Tsevhu foi conferido com cuidado e
CONTINUA minicurso: o comentário em `idiomas.ts` (linha ~535) confirma que ele só tem dicionário em
`src/data/tsevhu/`, sem currículo montado — não é pacote completo. Continuam minicursos também os
que nunca vão ficar completos por natureza (Libras/ASL/sinais, Braille/tátil, Basic
English/controlada, silbo gomero/canal) e os que ainda não foram, mas podem ser (na'vi,
alto-valiriano, quenya, solresol, lingua franca nova/elefen — nenhum tem código em `PACKS`).

Consumidores que apontavam pro minicurso de um idioma já graduado foram ajustados pra não quebrar:
`LanguageTypesTab.tsx` (ficha de "Tipos de línguas") e `MapaConlangsScreen.tsx` ganharam um botão
"📚 Aprender X na trilha" (troca o idioma de estudo direto, via `setLanguage` + `/mapa`) no lugar do
antigo "🎓 Fazer o curso de X", que abriria uma rota agora inexistente; `HomeScreen.tsx`, `tour.ts` e
o texto de `KIND_LABEL`/`tipos.ts` tiveram as menções a esperanto/klingon/etc. trocadas por exemplos
que continuam sendo minicurso (na'vi, quenya).

**Verificação "como o esperanto" (nenhuma informação perdida sem destino)** — pedida explicitamente
pelo Matheus: todo conteúdo de cada minicurso graduado (lições, afixos, frases, fontes) foi
comparado com TODOS os arquivos do pacote completo correspondente (`alfabeto.ts`, `gramatica.ts`,
`vocabulario.ts`, `curriculo.ts`, `historias.ts`, `extras.ts`) e com a ficha em `CONLANGS`
(`tipos-de-linguas.ts`) antes de remover. O que só existia no minicurso foi migrado, nunca jogado
fora:
- **Esperanto**: a tabela dos correlativos (kio/tio, kiu/tiu/ĉiu/neniu, kie/tie/ĉie/nenie,
  kiam/tiam/ĉiam/neniam, kiel/tiel, kial/tial) e os modos -us (condicional) e -u (imperativo) foram
  para tópicos novos de gramática (`eo-g6`, `eo-g8`); os afixos -ej-/-ist-/-ul- (lugar/profissão/
  pessoa) e ge- (junta os dois sexos: "gepatroj") foram para `eo-g7`; a terminação de advérbio -e e
  o -n que marca direção depois de preposição (diferente do -n de objeto direto, já ensinado) foram
  ampliados em `eo-g2`/`eo-g3`. Vocabulário que faltava (avo/avino, dias da semana, tago/semajno/
  monato/jaro, flava, bela/malbela, nova/malnova, kafo, frukto, ĉambro, kuirejo, tranĉilo, mil,
  unua, sur/sub/kun/sen, "ĝis revido", "bonan matenon") foi para `vocabulario.ts`, e a nota de
  `incomplete` em `index.ts` foi atualizada pra "8 tópicos de gramática".
- **Toki pona**: o mecanismo dos pré-verbos (kama/ken/wile/awen antes de outro verbo, pra marcar
  começo/continuação/capacidade/vontade sem sufixo nenhum) virou o tópico novo `tok-g6`. Tonsi/n/
  soko (as 3 "nimi ku suli" mais aceitas) e a correção de Sonja Lang sobre o rótulo "língua taoísta"
  pegar mais do que ela pretendia (dezembro de 2024) foram para o `culture_tip` de `curriculo.ts` —
  e o comentário de `vocabulario.ts`, que prometia esse conteúdo num `extras.ts` que nunca teve esse
  formato, foi corrigido pra apontar pro lugar certo. Os números do servidor de Discord da
  comunidade ("ma pona pi toki pona", 16 mil+ membros) foram pro `cultural_context` de
  `historias.ts`; os detalhes do sitelen pona (licença CC0 liberada por Sonja Lang em 2021, sem
  posição oficial no Unicode) foram para `index.ts`.
- **Interlíngua**: o condicional -rea (`ia-g3`) e o pronome neutro "illo" (`ia-g4`); "quando",
  "proque" e o verbo/frase "comprender"/"Io non comprende" foram para `vocabulario.ts`.
- **Ido**: só faltava o condicional -us, ampliado em `ido-g4`.
- **Volapük**: a ligação entre o nome "Volapük" e o caso genitivo -a ("vola", do mundo — a mesma
  terminação da tabela de casos) ficou explícita em `extras.ts`; a fonte em português (Wikipédia)
  foi somada às fontes já citadas em `index.ts`.
- **Klingon**: a palavra "yaS" (oficial) foi para `vocabulario.ts`, com "puq legh yaS." como
  exemplo extra do padrão de prefixo-zero em `gramatica.ts`; a comparação do som "H" com o "r"
  carioca raspado foi para `alfabeto.ts`; o provérbio "Heghlu'meH QaQ jajvam" (hoje é um bom dia
  para morrer) já estava na ficha de "Tipos de línguas" — não se perdeu — e ganhou também o
  `cultural_context` da primeira história em `historias.ts`; a explicação do sistema de números
  compostos (-maH para dezena, -vatlh para centena) foi para um tópico novo de gramática (`tlh-g6`).
  A palavra "HIja'" (sim, resposta a uma pergunta — diferente de "HISlaH") também entrou em
  `vocabulario.ts`, conferida contra o mesmo padrão de fonte que já rege o resto do vocabulário do
  pacote (nunca um "muSHa'" da internet sem confirmação de Okrand).
- **Lojban**: nada se perdeu — todo o conteúdo do minicurso (e do `LOJBAN_MAIS`) já estava, em
  geral com mais detalhe, no pacote completo.

Ficou de fora da migração, por não ter um lugar limpo no esquema de dados atual (nenhum pacote tem
hoje um array genérico de "curiosidades" solto — só `COMMUNITY_*`/`SCENARIOS_*`/`ETYMOLOGY_*`/
`JOURNAL_PROMPTS_*`/`SHADOWING_*` em `extras.ts`): as subcomunidades temáticas do toki pona ("ma
nanpa", ciência/matemática; "ma sewi", religião/espiritualidade; a zine "lipu tenpo"), o debate
sobre o toki pona servir ou não pra escrita técnica/científica, e o exemplo composicional "telo
nasa" (bebida alcoólica, literalmente "líquido estranho") — baixa prioridade, candidatos a um array
de curiosidades futuro (`CURIOSITIES_TOK` ou nome parecido) se esse padrão for criado pro pacote.

**Jogos do conhecimento, agora também na aba de Cursos**: `src/data/jogos-conhecimento.ts` já era
acessível pela aba "🎲 Jogos" de `CultureScreen.tsx` e por um atalho no `ProfileScreen.tsx`. Em vez
de forçar os jogos de tabuleiro a virarem `MiniCourse` de verdade (a estrutura de dados,
`KnowledgeGame`, é bem diferente — regras e variantes, não lições com quiz), `MiniCoursesScreen.tsx`
ganhou um card extra no topo, antes das seções por tipo, levando direto pra `/cultura?aba=jogos` —
mesmo padrão visual dos cards de minicurso.

### Idiomas naturais ainda não começados
Confirmado contra `src/data/idiomas.ts` em 08/10/2026 (vários itens que o PENDENTES.md antigo listava
como "faltando" já estavam feitos e não foram atualizados — ver nota de ESTALE no final do relatório
desta limpeza). Realmente faltam:
- **Afro-asiático**: tamazight/berbere.
- **Isoladas**: ainu (Japão), burushaski (Paquistão).
- **Caucásicas do Norte**: checheno, abecásio.
- **Coreânica**: jeju (além do coreano, já feito).
- **Tupi**: suruí do Pará (demais línguas tupi indígenas já feitas).
- **Sino-tibetano**: cantonês (diferente da distinção escrita tradicional/simplificada do mandarim,
  que já entrou como variante).
- **Túrquico**: cazaque, turcomeno, quirguiz, azeri (uzbeque já feito).
- **Austronésio/Sudeste Asiático**: javanês, tok pisin, fijiano, samoano, tonganês (malaio, birmanês
  e tétum já feitos).
- **Indo-ariano/outros da Ásia**: panjabi, nepalês, dzonga, tibetano.
- **Repúblicas autônomas da Rússia**: tártaro, baquir, sakha; carélio (nota de dado: no mapa, Carélia
  hoje pinta como finlandês — se o carélio entrar, é a escolha mais precisa pra essa subdivisão).
- **Céltico**: galês (irlandês e gaélico escocês já feitos).
- **Crioulos sem pacote próprio** (idioma oficial do país já está no app): patoá jamaicano, sranan
  tongo, crioulo mauriciano, crioulo seichelense, krio (Serra Leoa), crioulos de Cabo
  Verde/Guiné-Bissau.
- ~~**Albanês — variantes como "sotaque", não pacote novo**~~: **feito em 08/10/2026** — ver a
  seção "Reforma da taxonomia dialeto/sotaque", mais abaixo.

### Alfabeto
- **Alfabeto latino completo — FEITO (08/10/2026)**: sueco, norueguês, dinamarquês, islandês,
  estoniano e espanhol ganharam os 3 grupos (`igual`/`falsa`/`internacional`) por cima do `'nova'`
  que já tinham, igual ao romeno. Ver a seção dedicada abaixo ("Alfabeto latino completo: sv/nb/da/
  is/et/es") para as fontes e o que ficou de fora.
- **Cursivo — PARCIAL (08/10/2026)**: hebraico e russo ganharam uma nota (texto, não glifo — ver a
  seção dedicada abaixo) sobre como a letra cursiva de cada um funciona. Outras escritas cursivas
  (persa, iídiche, urdu…) foram avaliadas e ficaram de fora por motivo explicado na mesma seção.
- **"Melhorar o ensino do alfabeto, tá bem incompleto hoje em dia"**: feedback geral do Matheus, sem
  detalhe específico do que falta — avaliar o que já existe antes de expandir.

### Alfabeto: ordem oficial em vez de ordem por categoria (08/10/2026)
Pedido do Matheus: a tela do alfabeto (`AlphabetScreen.tsx`) deve mostrar PRIMEIRO a sequência
completa na ordem oficial (como um nativo aprende na escola) e só depois, como vista secundária
fechada por padrão (botão "Ver separado por categoria"), a separação por igual/falsa amiga/nova/
internacional que antes era a organização principal da tela.
- **Feito**: `AlphabetScreen.tsx` agora renderiza `data.letters` na ordem em que o array vem (seção
  "🔤 O alfabeto, em ordem", com o selo da categoria dentro de cada letra), e os grupos antigos
  (`GROUPS`) viraram uma seção togglable (`porCategoria`) abaixo, fechada por padrão. `buildRound`
  (`alphabet.ts`) não foi alterado — ele já reordena/filtra as letras por conta própria, não depende
  da ordem de inserção do array.
- **Feito (romeno, prova de conceito)**: `AlfabetoLatinoCompleto` (`alfabeto-auto.ts`) montava
  `letters` concatenando por grupo (igual, depois falsa, depois internacional, depois nova
  cadastrado à parte) — isso NÃO é a ordem alfabética oficial (ela intercala ă depois de a, â depois
  de ă, h entre g e i, î depois de i, k entre j e l, q/r entre p e s, ș depois de s, ț depois de t,
  w/x/y entre v e z). Acrescentei `ordem: string[]` em `ALFABETO_LATINO_BASE.ro` com a sequência
  oficial (mesma fonte já citada, en.wikipedia.org/wiki/Romanian_alphabet) e um `letters.sort(...)`
  por essa ordem no final da função — a categoria de cada letra (`group`) não mudou, só a posição no
  array. Teste novo em `alfabeto-auto.test.ts` ("ordem oficial da escola") confere a sequência
  completa das 31 letras.
- **Idiomas com ordem oficial já CONFIRMADA contra referência externa nesta sessão**: só o romeno
  (acima). Os outros idiomas com alfabeto feito à mão (`pack.alphabet`) foram conferidos de cabeça
  contra o que eu já sabia (não contra uma fonte aberta de novo nesta sessão) e pareciam já bater com
  a ordem oficial, sem precisar mudar nada:
  - russo (`ru/alfabeto.ts`), esperanto (`eo`), ido (`ido`), interlíngua (`ia`), volapük (`vo`),
    toki pona (`tok`), lojban (`jbo`), klingon (`tlh`), nórdico antigo/runas (`non`), japonês — só
    hiragana/katakana (`ja`), amárico (`am`): a ordem do array já é a sequência oficial (ou, nos que
    não têm "ordem oficial única" formal como o lojban/interlíngua, já é a ordem alfabética latina
    natural que esses idiomas usam). **Vale conferir contra uma fonte aberta de verdade antes de
    assumir 100% certo** — mesma régua que o romeno recebeu.
  - **coreano (`ko/alfabeto.ts`) é um caso à parte, sinalizado, não corrigido**: a ordem no array hoje
    é a ordem "pedagógica" do ensino infantil (consoantes básicas ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ, depois
    vogais básicas, só depois as consoantes dobradas ㄲㄸㅃㅆㅉ e vogais compostas) — ISSO bate com a
    canção "가나다" que criança coreana aprende primeiro. Mas a ordem de COLATION/dicionário oficial
    (ordem alfabética "de verdade", usada pra ordenar palavras) intercala as dobradas logo depois da
    simples (ㄱㄲㄴㄷㄸㄹ…) e as vogais compostas logo depois da simples (ㅏㅐㅑㅒㅓㅔ…). As duas ordens
    são "nativas" de um jeito ou de outro — não troquei nada até o Matheus decidir qual das duas
    conta como "a ordem que um coreano aprende" pro propósito desta tela.
- **Idiomas de escrita não latina gerados pelo caminho genérico (`keyboardRows` + `reading`, em
  `alfabetoAutomatico`, função de fallback no fim de `alfabeto-auto.ts`) NÃO têm ordem oficial
  nenhuma hoje — a ordem vem de `pack.keyboardRows.flat()`, que em vários idiomas é o layout físico
  do teclado, não o alfabeto**. Conferido nesta sessão:
  - `bg` (búlgaro): `keyboardRows` por coincidência (ou por ter sido montado assim de propósito) já
    está na ordem alfabética oficial búlgara (а б в г д е ж з и й к л м н о п р с т у ф х ц ч ш щ ъ
    ь ю я) — não precisa de nada extra.
  - `uk` (ucraniano) e `ar` (árabe): `keyboardRows` é o layout físico do teclado (ЙЦУКЕН ucraniano;
    QWERTY-árabe), bem diferente da ordem alfabética/abjad oficial (ucraniano: а б в г ґ д е є ж з и
    і ї й к л м н о п р с т у ф х ц ч ш щ ю я; árabe: ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م
    ن ه و ي) — a tela do alfabeto desses dois (e provavelmente de todo idioma que usa esse caminho
    genérico sem checar) ensina as letras fora de ordem.
  - **Não dá pra corrigir isso sem um projeto à parte**: são ~15+ idiomas (cirílico, árabe, persa,
    devanágari, tailandês, birmanês, georgiano, armênio, mongol, sérvio, divehi, pachto, iídiche,
    télugo, tâmil…), cada um com ordem oficial própria que precisa vir de uma fonte checada um a um
    (mesmo cuidado que o romeno recebeu) — e precisa decidir se a ordem muda na tela sem mudar o
    `keyboardRows` (que também serve de teclado adaptado digitável, onde a ordem física pode importar
    por outro motivo). Melhor registrar a limitação do que inventar uma ordem alfabética sem conferir
    pra cada um desses idiomas.

### Alfabeto: frase de abertura por tipo de escrita (08/10/2026, mesma sessão)
Pedido do Matheus, chegado no meio da tarefa de ordem oficial acima: `AlphabetScreen.tsx` mostra
agora, antes do treino, uma frase de abertura que não chama todo sistema de escrita de "alfabeto"
(mesmo motivo do card do Home ter virado "Sistema de escrita"). Novo serviço
`src/services/sistema-escrita.ts`, `fraseAberturaEscrita(pack)`, usado na `SpeechBubble` da tela.
- **Genérico por tipo, não por idioma**: lê `pack.lineage.writing` (texto livre em português já
  escrito à mão por idioma) e classifica pelas palavras que o próprio texto já usa — "abjad",
  "abugida", "silabário/silábic", "alfabeto" (e "romanização"/"letras latinas" como sinônimo de
  alfabeto, pro klingon, que não usa a palavra "alfabeto" no texto) — em vez de uma frase hardcoded
  por idioma. Sem nenhuma palavra-chave reconhecida, a frase fica neutra ("o sistema de escrita do
  X") em vez de inventar uma classificação sem fonte (caso de `mvf`/`mnc`, mongol tradicional e
  manchu, que não têm essa classificação nos dados ainda).
- **Escrita combinada (japonês)**: quando `writing` é só uma lista curta de nomes de escrita
  separados por vírgula/"e" (hoje só `ja`, "Hiragana, katakana e kanji") e TODOS os nomes são
  conhecidos (dicionário `ESCRITA_POR_NOME`, por ESCRITA, reaproveitável por qualquer idioma
  futuro que combine as mesmas escritas — ex. o ryukyuano também usa hiragana+kanji), a frase
  enumera por tipo: "Vamos praticar o sistema de escrita do japonês: dois silabários, Hiragana e
  Katakana, e um logográfico, Kanji." — frase exigida literalmente pelo Matheus, confirmada em
  teste (`sistema-escrita.test.ts`).
- Testado contra os 40 idiomas que passam por `alfabetoAutomatico` (todo idioma que chega nesta
  tela) — a saída de cada um foi conferida manualmente nesta sessão; ver `sistema-escrita.test.ts`
  pros casos cobertos por teste automatizado (romeno, japonês, árabe, hindi, amárico, toki pona,
  klingon, mongol tradicional).
- **Limitação igual à de cima, mesma causa**: a classificação depende do texto de `writing` já
  mencionar o tipo certo — idiomas cujo `writing` descreve só o nome da escrita sem dizer o tipo
  (ex. se um idioma novo chegar com `writing: 'Escrita X'` sem "abugida"/"silabário"/"alfabeto" em
  lugar nenhum) caem no fallback neutro. Não é bug, é a régua "não inventar sem fonte" — se
  `writing` não disser o tipo, a frase também não diz.

### Alfabeto latino completo: sv/nb/da/is/et/es (08/10/2026)
Pedido do Matheus, item "Alfabeto" do pendente acima: estender o alfabeto oficial completo
(`ALFABETO_LATINO_BASE`, `src/services/alfabeto-auto.ts`) do romeno pros outros 6 idiomas latinos
que só tinham as letras extras (`ALFABETO_LATINO_EXTRA`). Cada idioma foi conferido numa fonte real
antes de estender — não repeti o erro do romeno (suposição sem checar).

- **Sueco (`sv`), 29 letras**. Fonte: en.wikipedia.org/wiki/Swedish_alphabet (ordem oficial A-Z + Å
  Ä Ö; confirma que C/Q/W/X/Z só aparecem em empréstimos/nomes próprios) e en.wikipedia.org/wiki/
  Swedish_phonology (IPA de cada letra). `falsa`: h (tem som, nunca mudo), j (soa “y”, nunca “j” de
  “janela”), r (batido/vibrado, nunca o gutural de “rato”/“carro”), u e y (vogais sem equivalente em
  português). `igual` com duas pronúncias conforme a vizinha (`prefer`, mesmo padrão do c/g romeno):
  g e k abrandam antes de e/i/y/ä/ö. `internacional`: c q w x z.
- **Norueguês (`nb`/Bokmål), 29 letras**. Fonte: en.wikipedia.org/wiki/Norwegian_orthography (“as
  letras c, q, w, x, z não são usadas na grafia de palavras nativas norueguesas”) e en.wikipedia.org/
  wiki/Norwegian_phonology (confirma j = /j/ “y”; k abranda antes de vogal anterior pro som “kj”
  /ç/; r é batida apical no leste do país, gutural no oeste/sul). Mesma régua do sueco pra
  `falsa`/`internacional`; o g NÃO leva `prefer` aqui (abrandamento de g não confirmado como regular
  no norueguês do jeito que é no sueco — fiquei só com o que a fonte confirmou, sem supor).
- **Dinamarquês (`da`), 29 letras**. Fonte: en.wikipedia.org/wiki/Danish_orthography (mesma lista
  c/q/w/x/z só em empréstimos, com o uso específico de cada um: c em palavras de origem latina, q em
  “quiz”, w reconhecida como letra separada do v só recentemente, x em empréstimos do inglês e em
  grego, z em “zebra”/“pizza”) e en.wikipedia.org/wiki/Danish_phonology (confirma o “soft d” /ð/,
  que “é percebido por falantes não nativos quase como um l”; e o r como fricativa/aproximante
  uvular [ʁ̞], nada parecido com r batido ou gutural forte). `d` e `u` ficam em `igual` (o d por ser a
  pronúncia padrão no começo da palavra, com a nota do “d mole” no texto; o u dinamarquês é mesmo
  /u/, diferente do sueco/norueguês). Sem abrandamento de k confirmado (diferente do sueco/
  norueguês), por isso k fica simples.
- **Islandês (`is`), 32 letras — o maior achado desta rodada**. Fonte: en.wikipedia.org/wiki/
  Icelandic_orthography (ordem oficial completa, “A Á B D Ð E É F G H I Í J K L M N O Ó P R S T U Ú
  V X Y Ý Þ Æ Ö”; confirma que C/Q/W/Z NÃO fazem parte do alfabeto islandês — por isso ficam de fora
  da `ordem` e o grupo `internacional` do islandês é vazio, diferente do romeno/sueco/norueguês/
  dinamarquês) e en.wikipedia.org/wiki/Icelandic_orthography de novo, seção de vogais (confirma que
  á/é/í/ó/ú/ý representam sons GENUINAMENTE diferentes de a/e/i/o/u/y — não são marca de tonicidade
  como em espanhol/português, porque o islandês nem marca tonicidade com acento — por isso contam
  como letra “à parte” pela mesma régua já usada pro ø/å nórdicos, e **tive que acrescentar 8 letras
  que faltavam em `ALFABETO_LATINO_EXTRA.is`** (só tinha þ/ð; æ e ö também são letras oficiais do
  alfabeto islandês e estavam de fora por engano antes desta entrega). Fonte da aspiração: en.
  wikipedia.org/wiki/Icelandic_phonology (confirma que p/t/k são aspirados e b/d/g são só versões
  sem sopro de p/t/k — islandês não tem consoante “sonora” pela vibração da voz como o português,
  só pelo sopro — por isso b/d/g viram `falsa`, não `igual`).
- **Estoniano (`et`), 27 letras**. Fonte: en.wikipedia.org/wiki/Estonian_orthography (ordem oficial
  intercalando Š/Z/Ž logo depois do S; confirma que F/Š/Z/Ž SÃO letras oficiais do alfabeto mas “só
  ocorrem em empréstimos e nomes próprios” — por isso entram como `internacional`, igual ao k/q/w/y
  do romeno, e não como `'nova'` — e que C/Q/W/X/Y NÃO fazem parte do alfabeto estoniano, igual ao
  c/q/w/z do islandês) e en.wikipedia.org/wiki/Estonian_phonology (confirma que b/d/g são só versões
  fracas/breves de p/t/k, sem vibração de voz de verdade — mesma lógica do islandês — e que o h
  inicial costuma desaparecer na fala corrida). Letra z: nenhuma palavra do vocabulário estoniano
  tem z (confirmado: é mesmo só empréstimo, nenhuma nativa) — fica sem exemplo, igual ao Q do
  romeno.
- **Espanhol (`es`), 27 letras**. Fonte: en.wikipedia.org/wiki/Spanish_orthography (27 letras
  oficiais da RAE desde a reforma de 2010 — sem ch/ll/rr como letra à parte —, confirma que k e w só
  aparecem em empréstimos como “karate”/“kilo”). `falsa`: g e j (soam um “r” gutural forte antes de
  e/i ou sempre — bem diferente do nosso g de “gelo”/j de “janela”), r (vibrado/dobrado, nunca o
  gutural de “rato”/“carro”), v (soa exatamente como “b” — espanhol não distingue os dois), z (soa
  “s” surdo, nunca o nosso “z” vibrante). O pacote `es` descreve a região como Castela mas usa voz
  mexicana (`es-MX`) pro áudio (inconsistência pré-existente, não corrigida aqui, fora do escopo) —
  por isso a nota do z/c cita a pronúncia “seseante” (sem o “th”), que é a que o áudio realmente
  fala, com o “th” castelhano como informação extra no texto.
- **Conferido e corrigido durante o trabalho**: o `tour.ts` tinha uma checagem
  (`alfabetoAutomatico(pack) && !alfabetoLatinoExtra(pack)`) usada como proxy de “este idioma tem
  escrita diferente da nossa” — funcionava enquanto só o romeno tinha `alfabetoLatinoCompleto`
  preenchido (romeno sempre teve ≥3 letras extras, então `alfabetoLatinoExtra` também não era nulo
  pra ele). Como o espanhol tem só 1 letra extra (ñ), `alfabetoLatinoExtra(es)` continua nulo mesmo
  com o alfabeto completo novo — o que faria o tour dizer, errado, que "o espanhol tem escrita
  própria". Corrigido pra checar `!alfabetoLatinoCompleto(pack) && !alfabetoLatinoExtra(pack)`;
  teste novo em `tour.test.ts` confere que `es` não ganha o passo "escrita".
- **Teste**: `alfabeto-auto.test.ts`, teste "alfabeto latino completo: sv/nb/da/is/et/es…" — confere
  a ordem oficial completa de cada um (não a ordem por categoria) e o grupo de cada letra-chave.
- **Ficou de fora, por decisão explícita**: as variantes dialetais de pronúncia (sueco do sul com r
  uvular, norueguês ocidental/do sul com r gutural) foram citadas no texto como informação extra,
  não como grupo `falsa`/`igual` à parte — o pacote ensina a pronúncia padrão/mais comum de cada
  idioma, igual ao romeno (que também não abre grupo pra variante regional).

### Cursivo: hebraico e russo (08/10/2026)
Pedido do Matheus, mesmo pendente "Alfabeto": o árabe já ensina as 4 formas conectadas de cada letra
(`joining`, campo que já existia). Pesquisei como o cursivo do hebraico (כתב יד) e do russo
(письменный шрифт) funcionam antes de estender — e a resposta NÃO é "mais do mesmo padrão árabe".

- **Achado principal**: no árabe, `joining` representa *positional allography* — a MESMA forma de
  letra troca de posição (isolada/inicial/medial/final) dentro da palavra, e isso vale pro alfabeto
  IMPRESSO comum (qualquer fonte do sistema já desenha assim). Hebraico e russo são diferentes: a
  letra CURSIVA (escrita à mão) de cada um é um TRAÇADO DIFERENTE por letra — uma espécie de "outra
  fonte" —, não um reposicionamento da mesma forma. Fontes: en.wikipedia.org/wiki/Cursive_Hebrew
  (seção "Contemporary forms", com o alfabeto cursivo atual letra por letra; "Historical forms"
  descreve como alef se separou em duas partes, lamed perdeu a curva e virou um traço puxado pra
  direita, mem final se abre por baixo) e en.wikipedia.org/wiki/Russian_cursive (т cursivo parecido
  com o nosso m; д pode ganhar um rabicho por baixo; и/л/м/ш/щ/ы compartilham um traçado parecido,
  fácil de confundir entre si; as letras de uma palavra se conectam num traço só, mas cada uma troca
  de FORMA, não de posição).
- **Por que não usei o campo `joining`**: ele representa um glifo (o texto renderizado pelo sistema
  escolhe a forma certa, como já faz com o árabe). Cursivo hebraico e cirílico NÃO têm um codepoint
  Unicode próprio (diferente do árabe, que tem as Formas de Apresentação Árabes) — o mesmo caractere
  “א” ou “т” sempre renderiza no estilo impresso/de livro em qualquer fonte do sistema. Pra mostrar o
  traçado cursivo de verdade seria preciso uma fonte específica licenciada (o app não carrega
  nenhuma fonte customizada hoje — só o que o sistema já tem) ou imagens por letra (recortadas de um
  gráfico, com pesquisa de licença própria) — as duas são um projeto à parte, maior que esta entrega
  e fora do que foi pedido. Em vez de fingir um glifo que o celular vai desenhar igual ao impresso
  (o que seria inventar uma diferença que não aparece na tela), implementei um campo novo e honesto:
  `AlphabetData.cursiveInfo` (texto), explicado na tela como um cartão "✍️ A letra cursiva" em
  `AlphabetScreen.tsx`. `CURSIVO_POR_IDIOMA` (exportado de `alfabeto-auto.ts`) guarda o texto de cada
  idioma; `he` e `ru` estão prontos.
- **Corrigido de passagem**: o comentário do campo `joining` em `types.ts` dizia que "nos abjads
  árabe/hebraico a letra muda de forma conforme a posição na palavra" — impreciso pro hebraico (só
  5 letras — כ מ נ פ צ — têm uma 2ª forma, usada no fim da palavra, já representada por um codepoint
  Unicode à parte, tipo ך/כ; isso é uma troca de CODEPOINT no alfabeto impresso, não "formas
  conectadas" no sentido do árabe, e não tem nada a ver com cursivo). Reescrevi o comentário pra não
  generalizar hebraico=árabe.
- **Hebraico tem a nota pronta, mas ainda não aparece na tela**: `alfabetoAutomatico(PACKS.he)`
  continua retornando `null` hoje — não é regressão desta entrega, é porque `he/index.ts` não tem
  `reading` (a própria nota de `incomplete` do pacote já avisa: "este pacote ainda não tem
  romanização automática... até o pacote ganhar leitura automática", decisão anterior do projeto,
  mesma situação do pinyin do mandarim). Sem `reading`, a função genérica de `alfabetoAutomatico`
  nem gera um alfabeto pro hebraico, então a tela de alfabeto do hebraico continua indisponível —
  bug pré-existente, fora do escopo de "cursivo" (resolver precisa de uma função de romanização pro
  abjad hebraico, tarefa própria). A nota de cursivo em `CURSIVO_POR_IDIOMA.he` já está pronta e
  entra automaticamente no dia em que o hebraico ganhar `reading`, sem precisar de mais nenhum
  trabalho em cursivo.
- **Outras escritas cursivas avaliadas, ficaram de fora**:
  - **Persa, urdu, pachto, curdo (central/curmanji), uigur, árabe-egípcio**: usam escrita árabe (os
    caracteres extras do persa — پ چ ژ گ — e os demais já são `\p{Script=Arabic}` no Unicode,
    confirmado testando com `node`) — por isso **já ganham `joining` de graça**, pelo mesmo código
    que já existe pro árabe padrão (`formasArabes`, testado por script Unicode, não por código de
    idioma). Nenhum trabalho novo precisou ser feito pra esses.
  - **Iídiche (`yi`)**: usa o mesmo abjad hebraico do hebraico moderno — mas o pacote também está
    incompleto (A1 só) e sem `reading`, mesma situação do hebraico. Não conferido se o cursivo
    iídiche (que historicamente tem suas próprias convenções, diferentes do ktav yad israelense) é
    igual ou diferente do hebraico — ficou de fora por falta de fonte própria conferida.
  - **Dhivehi (`dv`, escrita thaana)**: cotado como candidato (thaana também é uma escrita com
    comportamento de conexão), mas thaana é um Script Unicode PRÓPRIO (`\p{Script=Thaana}`, não
    Arabic) — precisaria de pesquisa e código à parte pra confirmar se/como conecta, e o pacote
    também está incompleto. Não pesquisado nesta rodada.
  - **Mongol tradicional (`mvf`) e outras escritas verticais conectadas**: candidatos óbvios (são
    escritas cursivas por natureza), mas não pesquisados nesta rodada — fora do escopo (hebraico e
    russo foram os dois pedidos explicitamente).
- **Teste**: `alfabeto-auto.test.ts`, teste "cursivo: russo e hebraico ganham a nota…" — confere o
  texto de cada nota, que `ru` mostra a nota de ponta a ponta (`alfabetoAutomatico`), que nenhum
  idioma latino ou o árabe ganham a nota por engano, e que `he` continua `null` (documentando o
  motivo, não uma regressão).

### Features grandes, não começadas ou parciais
- **Jogos do conhecimento**: só damas está pronto. Faltam xadrez, quoridor/bloqueio, octi/octógono
  fantástico e abalone. Fica ao lado de línguas artificiais no Perfil e depois de "tipos de línguas"
  em Cultura. (Atualizado abaixo em 08/10/2026 — o quoridor já saiu dessa lista.)
- **Mais lições e tipos de exercício**: os exercícios "Pareie" e "Ordene a frase" já existem em
  todos os idiomas, e só es/it/pt ganharam as 2 lições extras de exemplo na A1.1. Falta decidir se
  estende as lições extras pros ~160 idiomas e demais níveis — escopo grande, sem instrução de por
  onde começar.
- **Semáforo de bandeiras**: pesquisado (sistema real, baseado no telégrafo de Chappe/Popham/Pasley),
  mas toda fonte encontrada (Wikipédia, dcode.fr, National Museum of the Marine Corps) mostra a
  tabela completa só como desenho, nunca como texto — transcrever 26 ângulos à mão sem como conferir
  é arriscado. Melhor fonte pra alguém transcrever com cuidado: folheto "Semaphore Flag
  Communication" do usmcmuseum.com, página 3, idealmente conferindo contra uma segunda fonte visual.
- **Escritas antigas não alfabéticas**: hieróglifos egípcios e glifos maias pedem imagem/SVG de cada
  sinal (não são digitáveis) e um jeito novo de "digitar" resposta nas lições que o app não tem
  ainda — tratar como projeto de código separado. Copta é mais simples (alfabeto Unicode, parecido
  com o grego) e pode seguir o fluxo atual.
- **Mitologia de criação dos povos**: ideia do Matheus, ainda sem decisão de onde entra (Cultura?
  aba própria? campo novo `creationMyth` no `LanguagePack`?) — mesmo cuidado de fonte real do resto
  do conteúdo.
- **Reorganizar idiomas no Perfil**: falta a parte de abas por tipo (naturais/artificiais/outros)
  permitindo escolher qualquer um dos 8 mil+ idiomas do mundo; os sem trilha (e sem planos de ter)
  iriam para "cursos" (`src/app/cursos.tsx`/`curso/[id]`, já existe como conceito).
- **Patrimônios da Humanidade (UNESCO) no mapa**: cobertura atual e os países fora dela estão
  descritos na seção "Patrimônios da Humanidade (UNESCO): terceira leva de países" mais abaixo.
- **Reformulação "Antártica selvagem" — pontas sem fechar**: sons ambiente específicos por região de
  destino (fiordes na Noruega, vales na Romênia…) e paisagens específicas por região não feitos.
  Moradias do desembarque faltando pra pt, ru, sv, fr, nb, da, is, fi, et, fo (só romena, andaluza e
  toscana existem) — a cota de geração no Canva acabou; os pedidos (com a barraca como referência)
  estão prontos pra repetir, mas **pausado até o Matheus pedir de novo** (mesma régua desde
  03/10/2026).

### Revisão de conteúdo pendente
- ~~**Histórias "de história em história"**~~ — passada feita em 08/10/2026, ver seção abaixo.
- ~~Revisar `la`, `oc`, `en`, `id` e `vi` como já foi feito com `gl`, `ast` e `sc`~~ — feito em
  08/10/2026, ver seção abaixo. A dúvida sobre a etimologia de «nai» < matre(m), no galego, continua
  aberta (não foi resolvida, só reconfirmada).
- ~~Suaíli: ~2.400 palavras, meta ~4.000. Próximos lotes em `src/data/sw/vocab-17.ts`~~ — `vocab-17.ts`
  criado em 08/10/2026 (47 palavras), ver seção abaixo; a meta de ~4.000 segue longe.

### Revisão de conteúdo: histórias, etimologia e suaíli (08/10/2026)
Três partes independentes de uma mesma rodada de revisão de conteúdo pendente.

**Parte 1 — Histórias "de história em história"**: varredura por `grep` em todos os `historias*.ts`
(193 arquivos) procurando "Linu decid"/"Linu resolv"/"Linu optou"/"Linu escolheu"/"Linu prefer*" (o
padrão que o Matheus descreveu) — 86 ocorrências em 22 idiomas. Lendo o contexto de cada uma (não só
a ocorrência isolada), ficou claro que quase todas são o padrão de escrita já estabelecido e correto
do app pros **botões de escolha**: em praticamente todo idioma completo (da, et, fi, fr, is, it, ja,
ko, lt, lv, nb, pt, ro, ru, sv, sw), AMBAS as opções de uma escolha são narradas em 3ª pessoa como
"Linu fez/decidiu X" — isso não é o Linu "decidindo" no lugar do jogador, é como o botão descreve a
ação que o jogador está escolhendo (ex. `da/historias.ts`: `{ text: 'Linu satte en spand...' }` e
`{ text: 'Linu besluttede at skrive...' }` são as DUAS opções do mesmo `choices[]` — o jogador clica
numa das duas). O mesmo vale pra texto de desfecho (`ending`) que narra a CONSEQUÊNCIA de uma escolha
já feita antes pelo jogador (ex. `et/historias.ts`, nó `final_segadus`: só existe depois que o
jogador escolheu "Jätta asi sinnapaika..." = deixar pra lá) — também correto, não é o Linu decidindo
por conta própria.

**Achado real** (2 correções, só em `src/data/es/historias.ts`, a língua que o Matheus citou junto
com o catalão como exemplo original do problema):
- Resumo (`summary`) da história "Chapulines en el mercado" dizia "o Linu decide se prova gafanhotos
  crocantes ou chocolate quente" — atribuindo ao Linu uma escolha que é, de fato, a primeira decisão
  do JOGADOR na história (os dois primeiros `choices` são exatamente esses dois pratos). Todos os
  outros ~20 resumos do mesmo arquivo usam uma pergunta neutra, sem dizer quem decide (ex. "Museu ou
  churros?", "Sopa de congro ou peixe fresco para levar?") — esse resumo quebrava o próprio padrão do
  arquivo. Corrigido para "o Linu vai à barraca de dona Rosa. Gafanhotos crocantes ou chocolate
  quente?".
- No nó `comida` da história das tartarugas, uma das duas opções de escolha dizia "Linu decide
  buscarla solo entre las piedras, sin decir nada." — diferente de TODAS as outras opções do mesmo
  arquivo (que são fala direta em aspas, ou uma ação em infinitivo sem sujeito, nunca "Linu decide +
  infinitivo"). Corrigido para "Buscarla solo entre las piedras, sin decir nada." (ação em infinitivo,
  sem narrar a decisão como já tomada pelo Linu).

Não encontrei o mesmo problema em catalão (`ca`) apesar de ter sido a outra língua citada pelo
Matheus — as 4 ocorrências ali (nós `cami_platja`, `cami_curt`, `llegir_carta`) já são consequência de
escolha anterior do jogador (ex. "ficar na praia tomando sol" → nó narra "Linu decidiu descansar na
praia", batendo com a escolha). Pode ser que o problema relatado em 01/10/2026 já tenha sido corrigido
numa sessão anterior (o item ficou "pendente" no arquivo só por não ter sido marcado como feito), ou
que a amostra de 86 ocorrências via `grep` não capturou o trecho exato que o Matheus viu originalmente
(o relato não cita o nó/história). Não fiz uma segunda passada manual lendo as ~170 histórias
inteiras linha a linha (span grande demais pra uma sessão); se o problema aparecer de novo pro
Matheus, vale pedir o trecho/screenshot exato pra achar o nó certo.

**Parte 2 — Revisão de etimologia/vocabulário (`la`, `oc`, `en`, `id`, `vi`)**: `gl`/`ast`/`sc` não
têm `etimologia.ts` próprio (são pacotes "só A1.1/A1.2") — a "etimologia" deles é o array
`ETYMOLOGY_<CÓDIGO>` em `extras.ts`, com 3 a 5 palavras cada. `la`/`oc`/`en`/`id`/`vi` têm a mesma
estrutura (3 a 5 entradas), que foi conferida contra o Wiktionary (inglês, em `en.wiktionary.org`):
- `la` (aqua/familia/pater) e `oc` (aiga/maire/vin): etimologias triviais e corretas, sem achado.
- `en` "coffee" e `id`/`vi`: corretas, confirmadas contra o Wiktionary (cadeia árabe → turco → holandês
  pro inglês; árabe → holandês pro indonésio "kopi"; francês → italiano → turco → árabe pro vietnamita
  "cà phê", confirmando a cadeia simplificada já usada no app). `id` "anggur" (uva/vinho, do persa
  "angur") também confirmado.
- **Achado real e corrigido**: `en` "mother" tinha `root_word: 'mōdor (proto-germânico)'` — mas
  "mōdor" é a forma do **inglês antigo**, não do proto-germânico (que o Wiktionary reconstrói como
  "\*mōdēr"). Corrigido pra `root_word: '*mōdēr (proto-germânico) → mōdor (inglês antigo)'`, com a
  `evolution_note` ajustada pra citar as duas formas certas.
- A dúvida já registrada sobre galego «nai» < matre(m) foi reconfirmada, não resolvida: o Wiktionary
  galego não tem etimologia nenhuma pra "nai" (categoria "Entradas en galego sen etimoloxía") — ou
  seja, a afirmação do app de que é uma evolução fonética regular de "matre(m)" não tem fonte
  confirmando. Não encontrei a MESMA dúvida (uma etimologia proposta no app sem fonte real) em
  nenhuma das 5 línguas novas revisadas — todas as etimologias que checei têm fonte real que bate.
- Vocabulário (`vocabulario.ts`, ~90-110 palavras cada, os mesmos pacotes "só A1"): lido por completo
  nos 5 idiomas, sem achado de tradução errada (palavras básicas bem conhecidas: saudações, família,
  comida, números, dias da semana, cores — nenhuma suspeita de verdade).

**Parte 3 — Suaíli, mais vocabulário**: confirmado o total real antes de começar —
`VOCAB_SW.length` (depois do dedup) é **2.397 palavras**, batendo com o "~2.400" do PENDENTES. Meta de
~4.000 continua válida (nenhuma decisão nova do Matheus achada reduzindo a meta). Antes de escrever
`vocab-17.ts`, descobri que o suaíli **já cobre as 25 categorias padrão completas** (as mesmas 25 que
`pt`, o idioma "bandeira" do app, usa) — e a maioria está bem profunda (`Verbos-chave` 325 palavras,
`Descrições` 264, `Animais` 120, `Alimentação e Restaurantes` 56 já cobrindo quase toda fruta/verdura/
tempero óbvio, `Casa` 52 já cobrindo quase todo móvel/utensílio óbvio, `Corpo` 47 já cobrindo até
órgãos internos). Isso tornou achar vocabulário **novo** (não duplicado, sem inventar tradução) mais
difícil do que o esperado: cada ideia óbvia de palavra que testei (comida, casa, corpo, família
extensa) já estava lá.
- **Lacuna real achada**: nomes de país, nacionalidade e língua — só 3 nacionalidades existiam
  (Mbrazili, Mtanzania, Mkenya) e nenhum nome de país nem de língua estrangeira (fora "Kiswahili" e
  "Kireno", já existentes) tinha entrada própria.
- Criado `src/data/sw/vocab-17.ts` (47 palavras, registrado em `vocabulario.ts`): 15 nacionalidades
  (classe m-/wa-, mesmo padrão de Mbrazili/Mzungu/Mwarabu já no app: Mfaransa, Mjerumani, Mwingereza,
  Mmarekani, Mjapani, Mkorea, Msomali, Mmisri, Mhabeshi, Msudani, Mganda, Mrusi, Mgiriki, Mholanzi,
  Mkanada), 13 línguas (prefixo ki-: Kiingereza, Kifaransa, Kijerumani, Kihispania, Kiitaliano,
  Kichina, Kirusi, Kiarabu, Kihindi, Kigiriki, Kituruki, Kiholanzi, Kikorea) e 19 nomes de país
  (Ufaransa, Ujerumani, Uingereza, Marekani, Uhispania, Italia, Uchina, Japani, Urusi, Misri, Somalia,
  Sudan, Uhabeshi, Uganda, Ugiriki, Uholanzi, Kanada, India, Australia). Cada palavra foi escolhida só
  entre as que tenho confiança alta (vocabulário básico, bem documentado, ensinado em qualquer curso
  de suaíli) — descartei candidatas que lembrava com menos certeza (ex. nacionalidades pra Nigéria,
  Moçambique, Zâmbia, cujo formato exato em suaíli eu não tinha certeza) em vez de arriscar inventar.
  Conferido com `grep` que nenhuma das 47 já existia nos outros 17 arquivos de vocabulário suaíli
  (sem duplicata). Total depois do lote: **2.444 palavras**.
- **Não rodei o script de pictogramas** (`scripts/pictogramas-palavras.mjs`, sem `--relatorio`) pra
  esse lote: as 47 palavras já têm emoji de bandeira/livro, que é a imagem correta e final pra esse
  tipo de conceito (nome de país e de língua não tem "foto" de objeto fazendo sentido — bandeira já É
  a imagem certa, mesmo padrão já usado em Mbrazili 🇧🇷/Mtanzania 🇹🇿/Mkenya 🇰🇪 antes desta rodada).
  Rodei só `--relatorio` (sem gerar nada) pra confirmar que o script funciona nesta worktree (clonou o
  Mulberry Symbols com sucesso: 89.452 palavras/170 idiomas, 17,5% com foto, 40,0% com pictograma,
  42,5% só emoji).
- **Ficou de fora, pra quem continuar**: chegar aos ~4.000 exige ~1.550 palavras mais — e, como quase
  toda categoria "óbvia" já está no nível de profundidade de um idioma completo, os próximos lotes
  vão precisar ir pra vocabulário mais específico/técnico (ex. termos de artesanato, culinária
  regional detalhada, provérbios/`methali` — que pesquisei de cabeça, mas não tenho confiança alta o
  suficiente pra citar sem fonte, por isso não entraram) ou aceitar lotes menores que os anteriores
  (os lotes 06-16 tinham 120-166 palavras; este teve 47, por escassez de tema seguro e não-duplicado,
  não por falta de tempo).

Testes: `conteudo.test.ts` (1899/1899) e `stories.test.ts` (1/1) passam; `npx tsc --noEmit` e
`npx eslint` limpos nos arquivos tocados (`src/data/en/extras.ts`, `src/data/es/historias.ts`,
`src/data/sw/vocab-17.ts`, `src/data/sw/vocabulario.ts`).

### Limitações técnicas conhecidas (não são bugs, não há o que corrigir sem escopo maior)
- **Microfone no app nativo**: no Expo Go/build nativo não existe reconhecimento de voz
  (`Platform.OS !== 'web'` sempre volta `false`) — precisa de módulo nativo de STT e build de
  desenvolvimento, fora do alcance de uma sessão de CLI sem Xcode/Android Studio. No navegador
  (Web Speech API) já funciona, com mensagens de erro específicas por código.

### Achados ainda sem reprodução/causa confirmada
- **Erro `removeChild` intermitente** (~1 em 4 rodadas do `fluxo-licao.mjs`, ao sair da tela de
  recompensa com `goBack`): não quebra nada visível, causa não encontrada.
- **"LinuLingo já está aberto em outra aba"**: mitigado (a tela recarrega sozinha se ninguém
  responder em 2,5s), mas a causa raiz do relato original (preso depois de abrir/voltar de
  `/amigos`) nunca foi reproduzida no Playwright.

### Outras pendências pequenas
- XP: o Matheus pediu sugestões, ainda sem decisão de qual seguir.
- ❓ **Mensagem confusa, ainda sem resposta do Matheus** (duas partes possivelmente misturadas):
  "Conjuga certo no tutorial, quando você está escrevendo tem que aparecer, na parte de novas casas
  pelo caminho: e no fim uma casa nas Ilhas Faroe ou na Romênia e etc." Pode ser (a) o tutorial
  mostrar/conjugar texto corretamente enquanto a pessoa digita uma resposta, e (b) retomar as casas
  que faltam no mapa (ver item acima) — Romênia já tem casa, então pode ser só um exemplo do Matheus
  sem saber que já existe. Perguntar antes de agir.
- "Enviar pra nativos" (botão do Diário/`communityPrompt`) hoje só grava local, sem destino de
  verdade — talvez valha ajustar o texto do botão pra deixar isso mais claro.

### Álbum: reunidas as informações de cada país (pedido do Matheus, 08/10/2026) — e a lacuna dos sons
Pedido do Matheus: "colocar no álbum todas as informações de cada país: bichos, sons, comida,
folclore...". O `AlbumScreen.tsx` já mostrava os bichos e os instrumentos (figurinhas, por país,
gated pela coleção). O que faltava reunir (comida, folclore e o resto) já existia espalhado:

- **Bichos** e **sons** (= instrumentos musicais, rotulados "Sons" na aba Cultura): já eram as
  figurinhas do álbum (`src/data/fauna-musica.ts`), sem mudança.
- **Comida, folclore, danças, plantas, brincadeiras, gestos e dinheiro**: já existiam prontos em
  `src/data/cultura-paises.ts` (`CULTURA_PAISES`/`CULTURE_KINDS`, com `money` vindo de
  `src/data/dinheiro-paises.ts`) e já apareciam na aba 🏛️ Cultura (`CultureScreen.tsx`) — só não
  estavam no Álbum. Acrescentado um bloco expansível por país, abaixo das figurinhas (fechado por
  padrão, pra não estourar a tela: o Álbum já lista os 28 países de `FAUNA_MUSICA`/`CULTURA_PAISES`,
  não só os do idioma estudado), que mostra as 7 categorias de `CULTURE_KINDS` direto dos dados — sem
  reescrever nenhum fato, só citando a mesma ficha da aba Cultura. Comida usa `WordImage` (foto do
  Wikimedia Commons pela tradução em português, senão pictograma, senão emoji — a cadeia já existe em
  `src/components/WordImage.tsx`); as outras categorias usam emoji grande, do mesmo jeito que já
  estava na aba Cultura (não é vocabulário com foto obrigatória: folclore, por exemplo, é figura
  mitológica, sem foto real pra achar).
- Teste novo em `src/services/album.test.ts` ("todo país das figurinhas existe no mapa e tem a ficha
  de cultura"), e `src/data/cultura-paises.test.ts` (já existente) continua garantindo que todo país
  com bichos/instrumentos tem as 7 categorias preenchidas.

**O que ficou de fora, por falta de dado-fonte estruturado (não inventado agora):**
- **Sons de verdade (áudio) de bichos e instrumentos**: `src/data/sons-nomes.ts`
  (`STICKER_SOUNDS`) só liga 7 das 136 figurinhas (71 bichos + 65 instrumentos) a um clipe de áudio
  real (`src/data/sons.ts`, gerado por `scripts/baixar-sons.mjs`) — os instrumentos comuns ao jogo
  "Adivinhe o som" (piano, violino, tambor etc.) e o lobo (`ROU:bicho:lobo`). A maioria dos bichos
  (ex. onça-pintada, boto-cor-de-rosa, urso-pardo) e quase todos os instrumentos tradicionais
  específicos (nai, cobza, balalaica…) não têm som gravado — o botão "🔊 Ouvir o som" simplesmente
  não aparece pra eles, e isso não mudou nesta rodada. Gravar/baixar um som
  de licença livre pra cada um dos ~129 restantes é trabalho de script (tipo
  `scripts/baixar-sons.mjs`/`baixar-fotos-album.mjs`), fora do escopo de "reunir o que já existe".
- **Fotos de comida**: não existe hoje um `FOTOS_ALBUM`-equivalente pros nomes de pratos de
  `cultura-paises.ts` (o `scripts/baixar-fotos-album.mjs` só baixa pra `fauna-musica.ts` e
  `amigos-linu.ts`). O `WordImage` usado no Álbum só acha foto/pictograma quando o nome do prato
  (ex. "chá", "sushi") já bate com uma palavra do vocabulário cadastrada em
  `src/data/fotos-palavras.ts`; pratos com nome composto (ex. "Charutos de repolho", "Bandeja paisa")
  ficam só no emoji grande, como fallback do próprio `WordImage`. Não foi gerada nenhuma foto nova
  nesta rodada — exigiria rodar um script de download contra o Wikimedia Commons, que é criação de
  conteúdo novo, não reaproveitamento.

### Patrimônios da Humanidade (UNESCO): terceira leva de países (08/10/2026)
Pedido do Matheus: "Eu adorei a parte dos locais da UNESCO, vamos implementar mais e melhorar essa
parte." Entraram 5 países novos em `patrimonios-paises.ts`/`patrimonios-pontos.ts` (4 sítios cada,
20 no total), fechando a cobertura de todos os países que já têm ficha cultural em
`cultura-paises.ts` (o critério usado desde a primeira leva — esses são exatamente os países com
idioma completo em `PACKS`, via `HOMELANDS`):
- **BRA**: Ouro Preto (1980), Centro Histórico de Salvador de Bahia (1985), Brasília (1987), Parque
  Nacional do Iguaçu (1986).
- **DNK**: Montes/pedras rúnicas/igreja de Jelling (1994), Catedral de Roskilde (1995), Castelo de
  Kronborg (2000), Falésia de Stevns Klint (2014).
- **FIN**: Fortaleza de Suomenlinna (1991), Velha Rauma (1991), Igreja Velha de Petäjävesi (1994),
  Sammallahdenmäki (1999).
- **NOR**: Bryggen (1979), Igreja de madeira de Urnes (1979), Cidade mineira de Røros (1980),
  Fiordes do oeste da Noruega — Geirangerfjord e Nærøyfjord (2005).
- **KOR**: Palácio de Changdeokgung (1997), Gruta de Seokguram e Templo de Bulguksa (1995), Áreas
  históricas de Gyeongju (2000), Ilha vulcânica e tubos de lava de Jeju (2007).

Fonte: as páginas "List of World Heritage Sites in \<país\>" da Wikipédia em inglês (lista, ano e
critério oficial cultural/natural/misto), e o infobox de cada sítio na Wikipédia em inglês pra
número oficial na Lista do Patrimônio Mundial (WHC) e coordenadas — tudo conferido em 08/10/2026,
nunca chutado. As coordenadas foram validadas pelo teste geométrico de `patrimonios-pontos.test.ts`
(cada ponto cai dentro do polígono do país no mapa, com folga de ~15 km pra litoral/fronteira
simplificados), que passou pra todos os 20 pontos novos, incluindo os mais arriscados perto de
fronteira (Røros, a ~15 km da Suécia; Kronborg, a ~4 km da Suécia pelo estreito de Öresund).

**Deixados de fora, e por quê:**
- **Groenlândia**: os 3 sítios da UNESCO lá (Ilulissat Icefjord, Kujataa, Aasivissuit–Nipisat) NÃO
  entraram em DNK porque, no mapa do app, a Groenlândia (`GRL`) é um país separado da Dinamarca
  (`DNK`) — colocá-los em DNK faria o teste geométrico falhar (ponto fora do polígono do país). Se
  o Matheus quiser, dá pra criar uma entrada própria `PATRIMONIOS_PAISES.GRL` depois (groenlandês
  `kl` já existe como pacote incompleto).
- **Demais ~165 países do mapa-múndi**: fora de escopo desta leva por critério (só os que já têm
  ficha cultural/idioma completo). Candidatos fortes pra uma próxima leva, se o Matheus quiser
  expandir alem do critério atual: Alemanha/Áustria/Suíça (`de`, pacote incompleto, mas com
  `HOMELANDS` já mapeado pra DEU/AUT/CHE), China (`zh`), Índia (`hi`), Egito, Grécia (`el`), Turquia
  (`tr`) — todos teriam que passar pela mesma pesquisa país a país e pelo mesmo teste geométrico
  antes de entrar.
- **Reformulação visual** (ícone diferente por tipo cultural/natural/misto da UNESCO): avaliado e
  deixado de fora nesta leva — o pedido do Matheus foi "adorei... vamos implementar mais e
  **melhorar**", mas também pediu explicitamente priorizar expandir cobertura, não redesenhar a
  tela. Fazer certo exigiria confirmar o tipo oficial (cultural/natural/misto) de cada um dos ~116
  sítios já cadastrados, não só dos novos — risco de inconsistência visual e de erro maior que o
  ganho. Fica como ideia pra um pedido futuro específico sobre isso.

## Referência útil (não é tarefa, mas ajuda quem continuar)

### Como fazer um pacote novo
- Modelo: `src/data/rm/` e `src/data/lad/`. Língua morta: `src/data/la/`. Escrita não latina:
  `src/data/ja/`, `src/data/ko/`, `src/data/uk/`.
- Estrutura: 2 unidades (A1.1 e A1.2), cada uma com 2 lições de 6 palavras e 3 lacunas, mais uma
  prova; 4 tópicos de gramática e 2 histórias; extras (3 textos da comunidade, 1 cenário, 5
  etimologias, 4 temas do diário, 4 frases de shadowing); `incomplete: { until: 'A1.2', note }` — a
  nota não deve dizer "sem transcrição fonética" (o app já lista isso sozinho).
- Validação: toda palavra de lição existe no vocabulário e tem imagem; a resposta da lacuna está
  entre as opções; as histórias não têm galho sem saída. `src/data/conteudo.test.ts` já cobre boa
  parte disso.
- Depois de registrar, rode `npm test`, `npx tsc --noEmit`, `npm run lint`,
  `npx tsx scripts/fluxo-incompletos.mjs <códigos>` (com o servidor web rodando) e
  `npx tsx scripts/pictogramas-palavras.mjs`.

### Taxonomia variante/dialeto/sotaque (já aplicada, mas útil pra idiomas novos)
Definida pelo Matheus e já em uso no app: **variante** = forma ESCRITA diferente da mesma língua
(ex.: bokmål/nynorsk, chinês tradicional/simplificado, mongol tradicional/cirílico, formas
latinizadas como romaji/pinyin); **dialeto** = muda por país/região, bem documentado (ex.:
português de Portugal/Angola/Brasil); **sotaque** = variação de pronúncia dentro do mesmo
país/região (ex.: carioca, nordestino, baiano, centro-oeste). Ao criar ou revisar um pacote, aplicar
essa régua em `LanguageVariant`/`Accent`.

### RTL (direita pra esquerda) — resolvido, não reinvestigar
Os 7 pacotes RTL do app (ar, arz, fa, ur, yi, he, ckb) já são pacotes completos de verdade, não
placeholders, e o bug de bidi (trechos RTL embutidos em texto português reordenando as frases em
português ao redor) já foi corrigido com `isolateRtlRuns` (`src/services/bidi.ts`), em uso em
`CulturalGrammarCard.tsx`, `TourOverlay.tsx`, `HomeScreen.tsx` e `TutorialScreen.tsx`. Árabe também já
tem as 4 formas cursivas de cada letra. Se alguma nota antiga em qualquer lugar do projeto disser
"RTL bloqueado" ou "placeholder" pra esses códigos, está desatualizada — confira o código antes de
confiar na nota.

### Simlish — pesquisado, decisão de não criar minicurso
A origem é real (SimCopter 1996, Will Wright, gibberish improvisado por Stephen Kearin e Gerri
Lawlor pra evitar repetição cansativa entre idiomas reais), mas a própria Wikipédia confirma que
"Simlish não pretende ser uma língua estruturada" — toda tabela de "vocabulário" que aparece em
buscas vem de wiki de fã ou análise acadêmica externa não confirmada pela EA/Maxis. Ensinar isso
como vocabulário certo violaria a regra de nunca inventar conteúdo linguístico. Tratamento atual (já
suficiente, não precisa de pacote): cartão de curiosidade em `src/data/tipos-de-linguas.ts`
(id `'simlish'`), com a história real e só "Sul sul!" = "Olá!" como amostra confirmada.

### Artigo definido com nome de país (bug achado pelo Matheus, 08/10/2026)
O tutorial dizia "uma casa em Romênia" / "desembarco em Ilhas Faroe" — "em" cru sem contrair com
o artigo certo do país ("na Romênia", "nas Ilhas Faroe"). **Feito**: `src/services/artigo-geografico.ts`
(tabela de artigo por nome de país de `WORLD`, funções `emLocal`/`deLocal`, fontes: Manual de
Comunicação da Secom do Senado, Ciberdúvidas, boletim "a folha" da DGT/Comissão Europeia) — 98 dos
250 nomes com artigo confirmado, 152 sem artigo por falta de fonte segura ("em X" cru nunca está
errado). Aplicado em `tour.ts` (2 falas) e no seletor de moradia em `HomeScreen.tsx`. Se quiser
aumentar a cobertura depois, ver o critério exato no topo de `artigo-geografico.ts` antes de
preencher mais entradas (não vale só "terminar em -a": Angola/Samoa/Cuba terminam em -a e não levam
artigo nenhum).

### Destino da aventura pra línguas sem país no CLDR/mapa (bug achado por agente, corrigido 08/10/2026)
`non`, `vo`, `tok`, `jbo`, `io`, `tlh` usam bandeira simbólica (não a de um país real) e não têm
entrada no CLDR (`idiomas-mundo.ts`) nem em `onde-se-fala.ts` — `destinoDoIdioma()` (`aventura.ts`)
devolvia `null` pra todos, quebrando a trilha. Nota: esperanto e interlíngua só "funcionavam" por
coincidência — o CLDR registra ruído estatístico de falantes (San Marino pro esperanto, França pra
interlíngua), não é um padrão deliberado pra línguas sem território, então não virou precedente.
**Feito**: nórdico antigo (`non`) é língua histórica real — ganhou destino de verdade, a Islândia
(`PAIS_HISTORICO` em `aventura.ts`), por ser onde as sagas foram preservadas e onde é mais estudado
hoje. As 4 construídas internacionais (`vo`/`tok`/`jbo`/`io`, sem pátria por design) e o klingon
(`tlh`, língua fictícia de Star Trek, sem povo real) entraram em `REGIOES_SEM_PAIS` (mesmo mecanismo
do curmanji/Curdistão), com nome honesto em vez de inventar um país ou capital simbólica: "nenhum
país" pras 4 construídas, "espaço (ficção)" pro klingon (com entrada em `ARTIGOS` pra "no espaço
(ficção)"). Testes: `aventura.test.ts`, `artigo-geografico.test.ts`, `tour.test.ts`.
### Trocar o código de um pacote (o caso do guarani antigo, 08/10/2026)
O guarani antigo usava `gnw`, que no ISO 639-3 é o guarani boliviano ocidental (outra língua viva).
O SIL não tem código para o guarani antigo/clássico (nem histórico), então ele passou para o
glottocode `oldp1258` (“Old Guarani”, dialeto histórico sob o guarani paraguaio `para1311`:
glottolog.org/resource/languoid/id/oldp1258). O `gnw` que continua em `linguas-glottolog.ts` é o
guarani boliviano ocidental de verdade, não mexer. O código do pacote vai parar em todo o progresso
salvo (ids de palavras e lições, `language`, origem do XP, chaves do Meta), então a troca veio com:
- `src/database/codigos-renomeados.ts`: a troca (`gnw` → `oldp1258`), as colunas que levam código
  e a função que renomeia no banco (só palavra inteira: `gnw-u1-l1`, `escuta_prog_gnw`, nunca
  `agnw`);
- a migração 6 em `schema.ts` (roda uma vez, pelo `user_version`);
- `BACKUP_FORMAT = 2` em `backup.ts`: cópias de formato 1 são renomeadas ao ler. Efeito colateral:
  uma versão antiga do app recusa cópias novas (“feita numa versão mais nova”).
Para trocar outro código: nova entrada em `codigos-renomeados.ts`, nova migração só com ela, novo
`BACKUP_FORMAT`. Testes: `src/database/codigos-renomeados.test.ts`.

 (pedido do Matheus, 05-07/10/2026 — entregue 08/10/2026)
Fica ao lado de línguas artificiais no Perfil e depois de "tipos de línguas" em Cultura (a entrada
mais acima em "Features grandes" dizia "faltam xadrez, quoridor, octi e abalone" — o quoridor saiu
dessa lista). **Feito**: Quoridor com motor de regras completo (`src/services/quoridor-engine.ts`)
e tabuleiro jogável, 2 jogadores no mesmo aparelho (`src/components/QuoridorBoard.tsx`),
reaproveitando o padrão de história/regras/variante em texto já usado pela Damas
(`jogos-conhecimento.ts`, campo novo `playable`). O motor cobre: andar uma casa, saltar reto sobre
a peça adversária, saltar na diagonal quando o salto reto está bloqueado por parede ou pela borda
do tabuleiro, colocar parede (sem sobrepor, sem cruzar outra — mas "T" encostando no meio é
permitido, como na regra oficial —, e nunca fechando o último caminho de NENHUM jogador até a
chegada dele, checado por busca em largura a cada parede proposta), 10 paredes por jogador,
detecção de vitória. Testado em `quoridor-engine.test.ts` (12 casos: estado inicial, movimento
simples, rejeição de jogada ilegal sem mutar o estado, salto reto, salto diagonal, parede
sobreposta rejeitada, parede cruzada rejeitada, parede em T aceita, bloqueio total do caminho
rejeitado, estoque de paredes zerado bloqueia nova parede, vitória ao chegar na fileira certa).
XP: 10 por vitória, fonte `jogo:quoridor`, categoria `jogo` com limite diário de 3 rodadas em
`xp-regras.ts` (mesmo padrão das outras práticas avulsas do app, tipo `sprint`/`pares`).

Fontes: Wikipédia (artigo "Quoridor") — criado pelo designer francês Mirko Marchesi em 1997,
publicado pela Gigamic (França); selo Mensa Select da American Mensa em 1998; variante oficial
para 4 jogadores (5 paredes cada) já descrita na própria caixa do jogo.

**Não entrou nessa rodada** (continuam na lista de "Features grandes" acima):
- **Xadrez**: regras ricas (en passant, roque, promoção, detecção de xeque/xeque-mate) — fazer
  certo exige um motor bem mais trabalhoso que o do quoridor; melhor ficar pra uma entrega própria,
  só pra ele, do que arriscar um motor com bug de regra.
- **Abalone**: tabuleiro hexagonal e regra de empurrar peças em fileira (sumito, com regra de
  maioria) — regras mais simples que xadrez, mas pede um componente de tabuleiro hexagonal novo (o
  app só tem grade quadrada até aqui, como no quoridor/damas). Candidato natural pra próxima
  entrega, com a mesma régua de teste do quoridor (motor puro + testes de movimento legal/ilegal).
- **Octi (octógono fantástico)**: esta sessão não teve orçamento de busca na internet pra
  confirmar uma fonte de regra oficial e completa (Mind Sports Olympiad/BoardGameGeek) antes de
  implementar — mesmo cuidado já registrado pro semáforo de bandeiras (não inventar regra quando a
  fonte é fraca ou não foi checada). Falta essa checagem antes de prometer "pronto" ou decidir que
  a fonte não é boa o bastante.

### Mapas dos idiomas construídos (pedido do Matheus, 08/10/2026 — Terra-média/Pandora para as artlangs, congresso-sede para as auxlangs)
Pedido original: um mapa que mostre onde cada idioma artificial é "falado" — como a Terra-média de
Tolkien ou a Pandora de Avatar para as artísticas, e seguindo o Congresso Universal de Esperanto
(cidade-sede que muda todo ano) para as auxiliares sem país.

**Descoberta importante antes de implementar**: o pedido supunha que `qya`/`sjn`/`val`/`sol`/`lfn`
já eram códigos de pacote jogável em `idiomas.ts` — não são. Só sete idiomas construídos têm pacote
completo lá (`eo`, `ia`, `vo`, `tok`, `jbo`, `io`, `tlh`). Quenya, na'vi, alto-valiriano, solresol e
elefen (lingua franca nova) existem no app de outro jeito: como **minicurso** (`src/data/cursos/`,
ids `quenya`/`navi`/`alto-valiriano`/`solresol`/`elefen`, abertos por `/curso/[id]`) e como ficha no
catálogo `CONLANGS` (`tipos-de-linguas.ts`). Sindarin e dothraki só têm ficha no catálogo, sem
minicurso ainda (ver "Idiomas artificiais: fila restante", mais acima). Por isso a arquitetura nova
indexa pelo **id do catálogo `CONLANGS`**, não pelo código de `idiomas.ts` — cobre os dois casos.

**Também não pisei no trabalho do agente `destino-conlangs`** (mesclado em `50b804bb`, antes desta
sessão terminar): aquele conserta `destinoDoIdioma()`/`REGIOES_SEM_PAIS` em `aventura.ts` — a trilha
de aventura (Antártica → país) pra `non`/`vo`/`tok`/`jbo`/`io`/`tlh`, que é uma mecânica diferente
(a progressão de lições) e só toca `aventura.ts`/`PENDENTES.md`. Esta tarefa aqui é outra tela,
outro arquivo de dados, sem overlap de arquivo nenhum.

**Feito** — `src/data/mapa-conlangs.ts` (+ teste `mapa-conlangs.test.ts`), tela nova
`src/app/mapa-conlangs.tsx` → `src/screens/MapaConlangsScreen.tsx`, link a partir do cartão de cada
conlang em `LanguageTypesTab.tsx` ("🗺️ Ver o mapa de X", só aparece quando existe entrada):
- **Tipo `'congresso'`** (auxlangs reais, sem país, no mapa-múndi de verdade — mesma projeção de
  `projecao.ts`/`mapa-mundi.ts` do resto do app): **esperanto** completo, 16 sedes reais de 1905 a
  2025 em ordem cronológica (1905 Boulogne-sur-Mer → ... → 2024 Arusha, a primeira vez na África →
  2025 Brno), fonte Wikipédia (inglês) "World Esperanto Congress", consultada em 08/10/2026,
  coordenadas lat/lon de cada cidade (não do local exato do congresso).
- **Tipo `'ficcao'`** (artlangs, sem mapa-múndi real — esquema estilizado desenhado em SVG pelo
  próprio app, sem nenhuma imagem licenciada de terceiro): **klingon** (Qo'noS, Praxis, Boreth,
  Khitomer, Rura Penthe — cânone de Star Trek), **quenya** (Valinor, Tirion, Rivendell, Minas
  Tirith — O Silmarillion/apêndices de O Senhor dos Anéis) e **na'vi** (Kelutral, Vitraya Ramunong,
  Montanhas Flutuantes, Hell's Gate — filme Avatar de 2009 + Pandorapedia) — os dois últimos são os
  exemplos literais que o Matheus deu (Terra-média, Pandora).

**Pesquisado e confirmado, mas NÃO implementado ainda (falta o agente seguinte preencher)**:
- **Interlingua**: tem congresso real e ativo — a UMI (Union Mundial pro Interlingua) organiza uma
  conferência internacional de dois em dois anos, numa cidade diferente, desde os anos 1980 (fonte:
  Wikipédia (inglês) "Interlingua", consultada em 08/10/2026); nos anos entre, sociedades
  escandinavas de interlíngua organizam outra, sempre na Suécia. Falta só levantar a lista concreta
  de cidades-sede e anos (a Wikipédia em inglês não lista a tabela, diferente do artigo do
  esperanto) — bom próximo candidato a tipo `'congresso'`.
- **Volapük**: teve 3 congressos internacionais de verdade (1884 Friedrichshafen, 1887 Munique,
  1889 Paris, o último todo em volapük), mas o movimento perdeu força para o esperanto logo depois
  e não há congresso nenhum desde então (fonte: Wikipédia (inglês) "Volapük"). Dá pra mapear como um
  tipo `'congresso'` histórico de só 3 paradas, com nota clara de que acabou em 1889 — mas é uma
  escolha editorial (vale o esforço para 3 pontos?), por isso deixei em aberto.
- **Ido**: só achei um congresso confirmado (o Congresso Internacional de Ido, Dessau, 1922) — nada
  de moderno/recorrente na Wikipédia em inglês. Precisa de fonte melhor (ex. o site da Uniono por la
  Linguo Internaciona Ido) antes de decidir se existe comunidade atual grande o bastante pra um mapa.
- **Lojban**: não achei nenhum congresso/"LogFest"/encontro recorrente citado na Wikipédia em inglês
  (o artigo fala de comunidade on-line — IRC, listas —, não de encontro presencial). Sem fonte, sem
  mapa.
- **Toki Pona**: tem encontros presenciais da comunidade (citados pela Wikipédia em inglês: Sarajevo,
  Viena, Maastricht, Berlim, Seattle, Amsterdã), mas sem ano nem ordem — não é um "congresso" com
  sede que roda ano a ano como o do esperanto, é uma lista solta de meetups. Não virou mapa por
  faltar a estrutura cronológica, não por falta de fonte.
- **Solresol**: sem comunidade viva confirmada (a própria ficha em `tipos-de-linguas.ts` não cita
  nenhuma) — não força mapa nenhum, tipo `'congresso'` nem `'ficcao'` fazem sentido aqui.
- **Sindarin, dothraki, alto-valiriano**: tipo `'ficcao'` é o caminho certo (mesmo padrão de quenya/
  na'vi/klingon) — sindarin encaixaria em Beleriand/Doriath/Rivendell/Valfenda (a língua do dia a dia
  dos elfos na Terra-média, ao contrário do quenya cerimonial); dothraki e alto-valiriano, em
  Essos/Westeros (Game of Thrones) — mas nenhum foi pesquisado a fundo ainda, ficou de fora só por
  tempo, não por falta de fonte esperada (a árvore genealógica de `tipos-de-linguas.ts` já dá um
  começo).

**Padrão pra estender**: adicionar uma entrada em `MAPAS_CONLANGS` (`src/data/mapa-conlangs.ts`),
com `idConlang` igual ao `id` do catálogo `CONLANGS`; tipo `'congresso'` pede `ano`/`cidade`/`iso`/
`lat`/`lon`/`nota` por sede, em ordem cronológica (o teste cobra isso), com `iso` existindo em
`WORLD` (`mapa-mundi.ts`); tipo `'ficcao'` pede `nome`/`nota`/`icone` (um nome de `PixelIcon.tsx`)
por lugar. O teste `mapa-conlangs.test.ts` cobra campo vazio, ids inválidos e ordem cronológica —
roda sozinho com `npx tsx --test src/data/mapa-conlangs.test.ts`. Nunca inventar sede/fato: sem
fonte real e específica (não um "parece que"), a língua fica de fora e a limitação entra aqui.

### Git
Desde 08/10/2026, por pedido do Matheus: só dar `git push` pra master (dispara o deploy automático
do GitHub Pages) quando uma rodada de trabalho estiver fechada de verdade — mesclar localmente sem
pressa, mas não publicar a cada merge pequeno.
