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

**Resolvido em 08/10/2026 (rodada seguinte, decisão do coordenador, não confirmada por mensagem
explícita do Matheus — ele ainda não respondeu à pergunta)**: dado que a frase cortada
("...escolho norueguês da Noruega, em cultura vai continua…") descreve exatamente esse fluxo
(escolher a variante do norueguês e então ver o que Cultura mostra), que o `nb/sotaques.ts` já
tinha o mesmo problema estrutural do português, e que a mudança é pequena/reversível, estendi o
filtro em vez de deixar travado. Se o Matheus responder com outra intenção, é fácil desfazer. Avisar
ele desta decisão quando possível. `accentsForDialect` (`dialetos.ts`) passou a usar
`(pack.variants ?? []).length >= 2` (em vez de só `realDialects(pack).length >= 2`) e
`VarietyPicker`/`AccentsPanel.tsx` passou a calcular `escopo` com `variants.length >= 2` (em vez de
só `dialetosNacionais.length >= 2`) — a função nunca precisou saber se é dialeto ou variante de
escrita, só compara o código salvo contra `Accent.variant`, então a extensão foi só nesses dois
pontos de gate. O norueguês (`nb/sotaques.ts`) já tinha os sotaques de bokmål e nynorsk marcados com
`.variant` desde antes, sem nenhum filtro os separar — o mesmo "não faz muito sentido" que motivou o
pedido original também valia aqui. Confirmado que nenhum pacote mistura `kind: 'dialeto'` e `kind:
'variante'` no mesmo `variants[]` (só `nb` e `zh` usam `'variante'`, cada um com exatamente 2
entradas do mesmo tipo), então a generalização não introduz um caso de borda inesperado. Teste novo
em `dialetos.test.ts` ("o mesmo escopo vale pra variantes de escrita, não só dialeto nacional").

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

**As 5 que tinham brasão/figura: retomadas e concluídas em 08/10/2026 (sessão seguinte)**. Na
primeira tentativa, o download de `upload.wikimedia.org` bateu em 429/limite de taxa repetidamente e
nenhuma das 5 entrou. Numa nova sessão, o 429 já tinha liberado: baixei o SVG oficial de cada uma do
Wikimedia Commons, confirmei a licença no `extmetadata` da API (todas domínio público ou CC, dentro
da regra do projeto) e desenhei a versão simplificada em SVG inline, no mesmo padrão das 3 acima
(geometria vetorial direta em `RegionFlag.tsx`, sem arquivo de imagem externo) — a figura principal
de cada uma (flor-de-lis, tríscele, cabeça de mouro) ficou reconhecível e proporcionalmente correta,
com detalhe fino do brasão simplificado (sem curvas Bézier exatas, sem cores de pele/cabra de cobra
na Sicília, sem o laço da bandana na Córsega). As 5 entraram:
- **Quebec** (dialeto `fr-CA`, "Francês do Quebec" — aqui é `code` de `LanguageVariant`, kind
  'dialeto', não um `Accent`, então a bandeira NÃO usa `usadaEm`/`OwnLanguagesTab.tsx`: criei um
  campo irmão `usadaEmDialeto` + a função `bandeiraRegionalDeDialeto()`, e troquei o ícone principal
  de `DialectsTab.tsx` (que mostrava `🇨🇦`, a bandeira do Canadá inteiro) pelo Fleurdelisé de verdade.
  Fonte: `Flag_of_Quebec.svg`, domínio público. Campo azul, cruz branca dividindo em 4 quadrantes,
  flor-de-lis branca simplificada (pétala central + 2 laterais + faixa com 2 laços na base) em cada
  quadrante. (O "Belga"/`fr-belge` continua fora dessa lista: é `sameAsVariant: 'fr-BE'`, representa
  a Bélgica como país — não é o caso de região específica dentro de um país.)
- **Sicília** (`it-lingua-siciliana`, kind 'língua' — entra por `usadaEm`, automático via
  `OwnLanguagesTab.tsx`): tríscele (cabeça + 3 pernas dobradas no joelho, simetria de rotação de
  120°) centrado sobre metade vermelha (superior-direita) × metade amarela (inferior-esquerda),
  divididas por uma diagonal do canto superior-esquerdo ao inferior-direito. Fonte:
  `Flag_of_Sicily.svg`, domínio público (declarado pelo autor, Angelo Romano). **Não entrou**:
  `it-siciliano` (o mesmo sotaque, mas kind 'sotaque', não 'ência') — esse não aparece em
  `OwnLanguagesTab.tsx`, aparece no painel comum de sotaques (`AccentsPanel.tsx`), que não tem esse
  mecanismo de troca de bandeira; ficaria pra uma entrega à parte se o Matheus quiser esse painel
  também mostrando bandeira por sotaque.
- **Sardenha** (`it-lingua-sarda`, mesmo caso de kind 'língua'; `it-sardo` fora pelo mesmo motivo de
  `it-siciliano`): campo branco, cruz vermelha fina (Cruz de Alcoraz) de ponta a ponta, uma cabeça de
  mouro simplificada (círculo preto + faixa branca na testa) em cada um dos 4 quadrantes — os Quatro
  Mouros. Fonte: `Flag_of_Sardinia.svg`, CC BY-SA 3.0 (autor: icnussa e colaboradores).
- **Córsega** (`fr-corse`, kind 'língua'): campo branco, uma única cabeça de mouro grande — um perfil
  oval (não um círculo liso, que ficava parecendo sinal de "proibido" na primeira versão; troquei por
  uma elipse com nariz saliente e queixo pontudo) com faixa branca na altura dos olhos. Fonte:
  `Flag_of_Corsica.svg`, CC0 (autora: Patricia.fidi).
- **Bretanha** (`fr-breton`, kind 'língua'): Gwenn ha Du — 9 listras horizontais alternadas (5
  pretas, 4 brancas, começando preta no topo), com um quadrante branco no canto superior esquerdo
  (as primeiras 4 listras, ~45% da largura) cheio de arminhos — losangos pretos pequenos no lugar da
  "mouchetures d'hermine" heráldica real (que tem 3 pontas e rabo, detalhe fino demais pro tamanho
  que esse ícone é exibido). Fonte: `Flag_of_Brittany.svg`, CC BY-SA 4.0 (autor: GwenofGwened e
  versões anteriores do arquivo).

Verificação visual: sem acesso a navegador nesta sessão também (mesma limitação já registrada mais
abaixo), então renderizei as mesmas 5 bandeiras como SVG puro (fora do app, script descartável) e
converti pra PNG com `rsvg-convert` pra conferir a olho — todas as 5 ficaram reconhecíveis
(Fleurdelisé, tríscele, Quatro Mouros, cabeça de mouro, Gwenn ha Du com arminhos); a Córsega precisou
de um ajuste (ver acima) depois da primeira versão não ficar clara o bastante. Dentro do app em si
(React Native, não web puro) continua sem confirmação visual.

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
- **Variações medievais/históricas**: nórdico antigo (`non`, Futhark/runas), francês antigo (`fro`),
  eslavo eclesiástico antigo (`cu`, glagolítico e cirílico antigo), alto-alemão médio (`gmh`),
  castelhano medieval (`osp`) e copta (`cop`, alfabeto grego + demótico) já feitos — **ver as seções
  próprias "Variações medievais" mais abaixo** (rodadas de 08/10/2026, incluindo a de 09/10/2026, com
  o copta) pra fontes e o que ficou faltando. Candidatos ainda pendentes: árabe clássico/corânico (sem
  código ISO 639-3 próprio — só o glottocode `clas1259`, como "dialeto" do árabe padrão; não
  pesquisado a fundo ainda), toscano antigo/dantesco (mesma situação: sem ISO próprio, glottocode
  `fior1236`, "dialeto" do italiano no Glottolog — por isso NÃO seguiria o padrão de pacote novo com
  código ISO como os cinco já feitos, precisa de decisão de design antes), e latim medieval/
  eclesiástico (variação DENTRO do `la`, que hoje só tem o clássico — investigado nesta rodada, ver
  abaixo, decisão de design ainda pendente).
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
- **Pontuação dos idiomas**: já concluído e mesclado (ver a seção própria acima, "Pontuação dos
  idiomas: aba Sistemas de escrita + lacunas no currículo") — a branch `pontuacao-idiomas` não existe
  mais, nota antiga mantida aqui por engano.
- **Varredura visual** (ícones, contraste WCAG AA, imagem única por palavra): branch `varredura-visual`
  tem trabalho real não mesclado (7 commits: 1.547 ícones em 2 levas, contraste claro/escuro, Cofre
  com imagem única por palavra) E mudanças não commitadas no worktree (`scripts/baixar-fotos-palavras.mjs`
  modificado + fotos novas em `assets/fotos/palavras/`) — sessão de outro agente (Opus 5.5) ainda em
  andamento. Não tocar: nem mesclar os commits, nem a pasta do worktree, até a sessão dele fechar.

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
7 + Láadan + os candidatos mais arriscados; o novial foi implementado numa rodada anterior (rate
limit interrompeu o trabalho no meio daquela sessão). **Rodada seguinte (mesmo dia, agente
`conlangs-fila-2`)**: toda fonte foi CONFERIDA DE NOVO (não copiada da pesquisa anterior sem
checar) e mais 5 candidatos saíram do papel — **interslavo** (pacote completo), **sindarin**,
**dothraki**, **lang belta** e **láadan** (minicursos). Só o **mando'a** ficou de fora desta vez,
por decisão explícita (curadoria extra ainda necessária, ver o item dele mais abaixo). **Rodada de
08/10/2026 (agente `panjabi-mandoa`): mando'a implementado**, fechando a fila dos 6 candidatos da
terceira leva — ver o item dele, atualizado mais abaixo.

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

- **Interslavo/medžuslovjansky (`isv`) — FEITO, pacote completo** (`src/data/isv/`, registrado em
  `idiomas.ts` PACKS/LANGUAGES, `REGIOES_SEM_PAIS` em `aventura.ts` — sem país, por design — e ficha
  nova em `CONLANGS`/`tipos-de-linguas.ts`, sem árvore genealógica porque não descende do esperanto
  como o novial/ido, e sim das línguas eslavas reais pelo método comparativo). Código ISO 639-3 real
  (`isv`, adicionado em abril/2024, confirmado via busca nesta sessão — duas tentativas anteriores,
  2012 e 2014, tinham falhado). 96 palavras (9 categorias), 2 unidades (A1.1/A1.2), 5 tópicos de
  gramática, 2 histórias, extras completos (comunidade, cenário, 5 etimologias, diário, shadowing),
  alfabeto latino de 27 letras. **Teto registrado em `tetos.ts`/`TETO-DOS-IDIOMAS.md`: B2** (um nível
  acima de nov/io/vo, que são B1) — mesma justificativa da interlíngua (`ia`, também B2): gramática e
  dicionário completos on-line, com literatura traduzida (Pequeno Príncipe, Pai-Nosso, Declaração dos
  Direitos Humanos), mas sem Wikipédia própria nem texto original.
  Fonte oficial reconfirmada nesta sessão (a conexão HTTPS direta falhou no sandbox — geobloqueio
  típico de `free.fr`; funcionou por HTTP puro): `steen.free.fr/interslavic/` (site de Jan van
  Steenbergen, um dos 5 linguistas do comitê atual: Vojtěch Merunka, Jan van Steenbergen, Roberto
  Lombino, Michał Swat, Pavel Skrylev; projeto fundido em 2017 a partir do Slovianski/Novoslověnsky).
  **Armadilhas reconfirmadas a NUNCA usar como fonte**: `interslavic.org` (domínio hostil de
  terceiros) e `neoslavonic.org` (domínio expirado). Decisões de implementação: fixado o locativo em
  `-u` (a variante que o próprio site recomenda) e o passado composto (L-participle + "byti"), nunca
  o aoristo; saudação "Dobry denj" (não "ahoj/alo", emprestado e fraco como fonte única) — tudo igual
  ao que a pesquisa anterior já indicava, conferido de novo linha por linha contra as páginas
  `nouns.html`/`pronouns.html`/`adjectives.html`/`verbs.html`/`numerals.html`/`syntax.html`/
  `orthography.html` e o dicionário `en-ms.html` (~12.700 linhas). O curso de A1 evita martelar a
  declensão completa (3 gêneros, 7 casos): os substantivos do vocabulário ficam no nominativo, e um
  caso diferente só aparece quando a própria gramática oficial dá o exemplo exato (ex. "pet domov",
  do capítulo de numerais) ou a regra é mecânica e já confirmada na mesma página.

- **Sindarin — FEITO, minicurso** (`src/data/cursos/sindarin.ts`, 3 lições, ficha já existia em
  `CONLANGS`). Fonte reconfirmada nesta sessão via Wayback Machine (o domínio original,
  folk.uib.no, e ardalambion.net continuam fora do ar/com SSL quebrado):
  `web.archive.org/web/2022id_/http://folk.uib.no/hnohf/sindarin.htm` — o curso acadêmico de Helge
  Fauskanger no Ardalambion, tudo rastreável a *The Lord of the Rings*, *Letters*, *The Etymologies*,
  *War of the Jewels*. Conferido de novo linha por linha: mellon (amigo, senha da Porta de Moria),
  mae govannen (bem encontrado/olá), loth (flor), galadh (árvore), a mutação consonantal inicial
  (lenição) com os três exemplos atestados por Tolkien (tâl→i dâl, bess→i vess, galadh→i 'aladh), e
  as frases "Pedo mellon a minno" (fala, amigo, e entra, na Porta de Moria) e "A Elbereth
  Gilthoniel" (canção élfica). **Achado desta conferência**: o par "adar/edair" (pai/pais) citado na
  pesquisa anterior não está diretamente atestado para o sindarin clássico — a forma "edeir" que a
  fonte dá é do estágio anterior ("Noldorin", nas Etymologies pré-O Senhor dos Anéis), não da língua
  madura dos apêndices; por isso o par ficou de fora do minicurso, pra não publicar uma flexão não
  confirmada.

- **Dothraki — FEITO, minicurso** (`src/data/cursos/dothraki.ts`, 3 lições, ficha já existia em
  `CONLANGS`). Fontes reconfirmadas nesta sessão: Wikipédia (inglês) "Dothraki language" e
  `dothraki.com` (blog de David J. Peterson, não dothraki.org, que é site de fãs). A Wikipédia
  confirma a correção já apontada: dothraki é **SVO**, não VSO ("Khal ahhas arakh" = o khal afiou o
  arakh, sujeito-verbo-objeto). Vocabulário conferido: arakh (lâmina curva), hrakkares (leão), ave
  (pai), rakh (menino), shierak (estrela), rhaesh (país); saudações do dothraki.com: M'athchomaroon!
  (olá, "com respeito"), Hash yer dothrae chek? (como vai?, lit. "você andou bem hoje?"), Chek!
  (bem!), Dothras chek! (tchau, lit. "ande bem!"). Substantivos têm 2 classes (animado/inanimado) e 5
  casos (nominativo, acusativo, genitivo, alativo, ablativo); só os animados variam em número.
  **Lacuna confirmada de novo**: não há números 1-5 documentados em fonte oficial — não inventados,
  ficam de fora.

- **Lang Belta (The Expanse) — FEITO, minicurso** (`src/data/cursos/lang-belta.ts`, 3 lições + ficha
  nova em `CONLANGS`, que não existia). Fonte reconfirmada nesta sessão: Wikipédia (inglês) "Belter
  Creole", que cita o linguista Nick Farmer (contratado pela produção, 2014–2015) mais de uma dúzia
  de vezes — a pesquisa trouxe bem mais material que a rodada anterior, incluindo gramática
  (pronomes mi/to/im + sufixo -lowda pro plural, a partícula de pergunta "ke" no FINAL da frase,
  marcadores de tempo/aspecto ando/tili/ta/gonya/finyish) e um sistema numérico completo e composto
  (nada=0, wang=1... teng=10, tuteng=20, xanya=100). Vocabulário conferido: owkwa (água), beratna/
  sésata (irmão/irmã), kopeng (amigos, mistura francês "copain" + mandarim 朋友), ya/na (sim/não),
  oye/oyedeng (olá/tchau), taki taki (obrigado, sueco/dinamarquês "tak" + mandarim 谢谢).

- **Mando'a (Star Wars) — FEITO, minicurso (08/10/2026, agente `panjabi-mandoa`)**
  (`src/data/cursos/mandoa.ts`, 3 lições, ficha nova em `CONLANGS`/`tipos-de-linguas.ts`, que não
  existia). Fonte reconfirmada nesta sessão (WebFetch/WebSearch de novo, não copiada da pesquisa
  anterior): mandoa.org (dicionário, "Original Mando'a dictionary provided by Karen Traviss") e
  Wookieepedia ("Mando'a"). O site é fã-mantido e NÃO cita romance+página por verbete, então o curso
  usa só as entradas mais seguras: as repetidas como tema central dos romances, ou citadas no artigo
  da própria Traviss ("No Word for Hero: The Mandalorian Language", *Star Wars Insider* nº 86,
  fev/2006). 13 itens confirmados com confiança forte, todos com uso recorrente/temático nos
  romances: Mando'a, Mando'ade, ni, gar, vod, buir, aliit ("Aliit ori'shya tal'din" = família é mais
  que sangue), beskar, dar'manda, aruetii, ad, osik, kyr'tsad (a Sociedade da Morte/Death Watch,
  também canônica em *The Clone Wars*, não só nos livros) — mais um 14º item opcional e bem
  confirmado, **hut'uun** (covarde), citado dentro do próprio romance *Triple Zero* (personagem Kal
  Skirata) e ligado à ideia central do artigo da Insider: não existe palavra pra "herói" em mando'a,
  porque esperar coragem de qualquer um é a norma, não uma excepção.
  **Confirmado de novo que "Ni ceta" (eu me rendo) e "Oya" (grito de guerra/entusiasmo) continuam só
  em fã-wikis/mandocreator.com, sem citação de romance+página** (tentei achar contra os apêndices dos
  livros da Traviss e não achei nada melhor que fã-wiki) — ficam de fora, como a pesquisa anterior já
  recomendava. Também não usei nenhuma saudação tipo "Su cuy'gar" (mesma situação de fonte fraca).
  **Gramática**: NÃO existe regra de ordem de palavras (SOV/SVO) nem de negação ("dar-" como prefixo
  geral) publicada pela própria Traviss — o que circula em fóruns do mandoa.org é sistematização de
  fã sobre o vocabulário dela, não regra formal; o curso evita apresentar isso como regra fechada. A
  única regra gramatical que entrou foi o sufixo de plural "-e"/"-se" (ex. aruetii → aruetiise), com
  a ressalva explícita de que é um padrão notado pela comunidade, não publicado pela autora.

- **Láadan — FEITO, minicurso** (`src/data/cursos/laadan.ts`, 3 lições, ficha já existia em
  `CONLANGS`). Fonte reconfirmada nesta sessão: Wikipédia em inglês "Láadan", que bateu exatamente
  com a pesquisa anterior e trouxe mais detalhe: partículas de ato de fala no início da frase
  (bíi=declarativo, báa=pergunta, bó=comando raro, bóo=pedido comum, bé=promessa, bée=aviso) e
  partículas evidenciais no fim (wa=percebido, wi=autoevidente, we=sonhado, wáa=assumido verdadeiro,
  waá=assumido falso, wo=imaginado, wóo=sem validade conhecida) — ex. atestado: "bíi ril áya mahina
  wa" (a flor é bonita). Vocabulário conferido: áya (ser bonita), mahina (flor), ruleth (gato),
  lanemid (cachorro), thul/thulid (mãe/pai), le/ne (eu/você), o sistema de pronomes por prefixo (l-/
  n-/b-) e os sufixos de afeto (-a=amado, lhe-=desprezado) e de plural (-zh/-n). **Confirmado de
  novo que "radiidin" e "ramimelh" não aparecem na Wikipédia** — continuam de fora do curso, como a
  pesquisa anterior já recomendava.

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
- **Indo-ariano/outros da Ásia**: nepalês, dzonga, tibetano (panjabi já feito, ver seção "Malgaxe e
  panjabi criados").
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
- **Semáforo de bandeiras**: as 26 letras (A–Z) implementadas em `src/data/codigos.ts` →
  `src/components/Codigos.tsx` (Cultura → Tipos de línguas → Secretas e cifras → Códigos). P, W, X e
  Y entraram em 08/10/2026 (sessão seguinte), confirmadas contra 2 fontes — ver a seção "Semáforo de
  bandeiras: as 26 letras confirmadas" mais abaixo. Ainda não virou quiz "qual letra é esta posição"
  (o pedido original) — ver o fim daquela seção.
- **Escritas antigas não alfabéticas**: hieróglifos egípcios e glifos maias pedem imagem/SVG de cada
  sinal (não são digitáveis) e um jeito novo de "digitar" resposta nas lições que o app não tem
  ainda — tratar como projeto de código separado. Copta é mais simples (alfabeto Unicode, parecido
  com o grego) e pode seguir o fluxo atual.
- **Mitologia de criação dos povos**: implementada em 10 países (Japão, Islândia, Finlândia, Peru,
  México, Coreia do Sul, Itália, Colômbia, Quênia, Rússia), como categoria opcional `creationMyth` em
  `src/data/cultura-paises.ts` (aba 🏛️ Cultura) — ver a seção "Mito de criação: implementado em 10
  países" mais abaixo.
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

### Semáforo de bandeiras: as 26 letras confirmadas (08/10/2026, 2ª sessão)
Entra como mais um código em `src/data/codigos.ts` → `SEMAFORO_TABLE`/`semaforo()` (grupo "sinal",
junto do morse e do código de batidas), visível em Cultura → Tipos de línguas → Secretas e cifras →
Códigos (`src/components/Codigos.tsx`, sem mudança de UI — reaproveita o mesmo cartão com tabela e a
caixa de "escreva uma palavra" que os outros códigos já têm). Cada posição de bandeira vira uma seta
Unicode (↑ ↗ → ↘ ↓ ↙ ← ↖, uma das 8 direções, tipo horas de relógio), duas setas por letra.

**Por que não são as 26 letras**: nenhuma fonte (Wikipédia, dcode.fr, folheto do usmcmuseum.com) tem
a tabela como texto, só como desenho — exatamente o bloqueio que a pesquisa anterior já tinha achado.
A diferença desta rodada: em vez de "ler" os desenhos a olho (arriscado, sem como conferir), as 26
letras foram lidas por **coordenada**, de dois jeitos independentes:
1. **Wikimedia Commons**: baixado o SVG de cada letra (`Semaphore_<Letra>.svg`, ex.
   `Semaphore_Alpha.svg` pra A) e lida a posição exata de cada bandeira nas coordenadas do próprio
   arquivo (os quadrados/losangos amarelo-e-vermelho têm coordenadas `d="M x,y L x,y…"` ou um
   `transform="rotate(graus cx,cy)"` — nada de "olhar a imagem", é aritmética sobre os números do
   arquivo).
2. **dcode.fr** (`dcode.fr/semaphore-flags`): baixado o PNG de cada letra
   (`dcode.fr/tools/semaphore-flag/images/char(<código ASCII>).png`) e achado o centro de massa dos
   pixels amarelos/vermelhos de cada bandeira por varredura de componentes conexos; a posição (uma
   de 8 direções) sai comparando a distância ao pivô esperado (o braço tem um comprimento fixo, então
   a combinação correta bandeira↔braço é a que dá distâncias mais próximas do raio esperado).

As duas leituras bateram exatamente em todas as 22 letras conferidas nos dois jeitos (A–O, Q–V, Z) —
inclusive uma vez em que a primeira tentativa de pareamento por "ângulo mais limpo" deu errado (letra
D) e só o critério do raio/distância corrigiu, o que reforça que não foi coincidência. Na sessão
anterior, **P, W, X e Y** ficaram de fora: o download dos SVGs da Wikimedia (`upload.wikimedia.org`)
ficou bloqueado por "429 Too many requests" por tempo demais (mesmo com esperas de 15–25s entre
tentativas); só restava a leitura do dcode.fr (uma fonte só) pra essas 4, e pela regra de nunca
aceitar sem bater 2 fontes elas não entraram — a leitura do dcode.fr já apontava P = N,W · W = E,NE ·
X = SE,NE · Y = E,NW.

**Retomado em 08/10/2026 (2ª sessão)**: o 429 já tinha liberado — baixei os 4 SVGs
(`Semaphore_Papa.svg`, `Semaphore_Whiskey.svg`, `Semaphore_X-ray.svg`, `Semaphore_Yankee.svg`) nos
hashes já anotados (`7/7d`, `8/83`, `c/c0`, `c/c3`). Mas essas 4 letras usam dois estilos de arquivo
diferentes dos primeiros 22 (um deles, o de P, nem é do Inkscape, é outro gerador totalmente
diferente, com `<use>`/`rotate()` em vez de `matrix()` nos braços), então a leitura direta "achar o
quadrado/losango e tirar a coordenada" não bateu igual. Em vez disso, usei uma regra equivalente mas
mais robusta: toda bandeira do semáforo nestes arquivos nasce de um gabarito apontando pra baixo (S),
girado por uma `matrix(a,b,c,d,0,0)` (ou, no caso de P, por um `rotate()` explícito) — então o ângulo
da bandeira, em graus a partir do Norte no sentido horário, é sempre **o ângulo dessa rotação + 90°**.
Calibrei essa regra contra 8 letras já confirmadas nos dois jeitos (A, D, E, H, O — braço esquerdo e
direito, cobrindo S, SW, NE, N e um caso com `scale(-1,-1)`, que é só uma rotação de 180° disfarçada)
e bateu exatamente nas 8, sem exceção; apliquei a mesma regra às 4 letras que faltavam e cheguei a
**P = [N,W] · W = [E,NE] · X = [SE,NE] · Y = [E,NW]** — exatamente o que o dcode.fr já tinha
apontado. Duas fontes batendo de novo (leitura geométrica da Wikimedia por um caminho diferente do
"achar a coordenada final direto" + a leitura por pixel do dcode.fr já feita antes), então as 4
entraram pela mesma regra das outras 22.

**Resultado: as 26 letras (A–Z) confirmadas**, todas contra 2 fontes independentes. `codigos.test.ts`
atualizado (a tabela tem 26 entradas, sem combinação de setas repetida, `semaforo('WOW')` cobre P/W/X/Y
agora presentes). Não virou exercício "qual letra é esta posição" (o pedido original) — a tabela + o
encodificador interativo (mesmo padrão do morse/braille já existentes) continuam sendo o formato
usado; promover pra quiz agora que as 26 letras fecharam é trabalho novo, não feito nesta entrega.

### Mito de criação: implementado em 10 países (08/10/2026, 2ª rodada)
Decisão (sem pedir confirmação, por ser reversível e de baixo risco): entra como mais uma categoria
dentro da aba 🏛️ Cultura, no mesmo padrão de `CULTURE_KINDS`/`CountryCulture` que já existe pra
comida/folclore/danças/plantas/brincadeiras/gestos/dinheiro (`src/data/cultura-paises.ts`) — não
dentro de "folclore" porque mito de criação é uma categoria com identidade própria (explica a origem
do mundo/povo, não uma lenda ou criatura avulsa), e as fichas de folclore já existentes (ex. Miorița
na Moldávia, Kitsune no Japão) não cobrem isso. Diferença do resto das categorias: é **opcional**
(`creationMyth?: NatureItem[]`, com `optional: true` em `CULTURE_KINDS`) — a maioria dos ~28 países
de `CULTURA_PAISES` não tem ficha, ao contrário das outras sete categorias, que são obrigatórias em
todo país (o teste `cultura-paises.test.ts` foi ajustado pra pular a checagem de "não vazio" só nessa
categoria, e as telas que iteram `CULTURE_KINDS` — `CultureScreen`, `AlbumScreen`, `MapScreen` — foram
ajustadas pra não quebrar nem mostrar um título de categoria vazio quando o país não tem ficha).

**1ª rodada (08/10/2026) — 5 países**, com fonte real e verificável (Wikipédia, cruzada por assunto,
não por imagem):
- 🇯🇵 **Japão**: o nascimento das ilhas (国生み, Kuniumi) — Izanagi e Izanami mexendo o oceano
  primordial com uma lança, do Kojiki (712).
- 🇮🇸 **Islândia**: Ymir e o vazio primordial (Ginnungagap) — da Edda em prosa de Snorri Sturluson,
  escrita na própria Islândia no século XIII.
- 🇫🇮 **Finlândia**: o ovo que virou o mundo — a deusa do ar Ilmatar/Luonnotar e o ovo do pato, do
  início da Kalevala (Elias Lönnrot, 1835).
- 🇵🇪 **Peru**: Viracocha e o lago Titicaca — dos cronistas espanhóis (Juan de Betanzos e outros)
  sobre a cosmogonia inca.
- 🇲🇽 **México**: o Quinto Sol — Nanahuatzin se jogando na fogueira para virar o sol, do mito asteca
  dos Cinco Sóis.

**2ª rodada (08/10/2026) — mais 5 países**, mesma régua de fonte (Wikipédia cruzada por assunto, mais
a checagem direta do texto/crônica original quando o artigo cita um):
- 🇰🇷 **Coreia do Sul**: Dangun e a fundação da Coreia (단군신화) — Hwanung desce ao monte Baekdu,
  casa com a ursa que virou mulher (Ungnyeo) e o filho dos dois, Dangun, funda Gojoseon em 2333 a.C.;
  do Samguk Yusa, escrito por volta de 1285 pelo monge budista Iryeon (o registro mais antigo que
  sobrou do mito).
- 🇮🇹 **Itália**: Rômulo e Remo — os gêmeos filhos de Marte, amamentados por uma loba depois de
  abandonados no Tibre; Rômulo funda Roma em 753 a.C. e mata o irmão numa disputa pelos limites da
  cidade. De Tito Lívio (Ab Urbe Condita) e Plutarco (Vida de Rômulo).
- 🇨🇴 **Colômbia**: Bachué e a lagoa de Iguaque — a deusa muísca que sai da lagoa com um menino nos
  braços, casa com ele depois que ele cresce, povoa a terra e no fim da vida volta à lagoa virando
  serpente. Do cronista espanhol Pedro Simón (Noticias historiales de las conquistas de Tierra Firme,
  1626).
- 🇰🇪 **Quênia**: Gĩkũyũ e Mũmbi no monte Kenya — o deus Ngai leva Gĩkũyũ ao topo do monte Kenya
  (Kĩrĩnyaga), ele encontra Mũmbi perto de uma figueira sagrada, e as nove filhas do casal dão origem
  aos nove clãs gĩkũyũ. Da tradição oral gĩkũyũ registrada por Jomo Kenyatta (primeiro presidente do
  Quênia) em Facing Mount Kenya (1938).
- 🇷🇺 **Rússia**: Deus e o Diabo mergulhador — Deus manda o Diabo mergulhar no oceano primordial
  para trazer terra; o Diabo esconde um punhado na boca, engasga, e onde a terra cai nascem as
  montanhas. Das Lendas populares russas (Народные русские легенды), reunidas por Alexander Afanássiev
  em 1859 — é a versão russa (eslava oriental) do “mito do mergulhador”, presente também na Polônia e
  na Bulgária com variações.

**Decisões de não incluir, com o motivo** (pra não repetir a pesquisa à toa numa rodada futura):
- 🇳🇴🇸🇪🇩🇰🇫🇴 **Noruega, Suécia, Dinamarca e Ilhas Faroe**: não entraram porque a mitologia nórdica
  (Ymir, Ginnungagap) já está atribuída à Islândia — as Eddas que são a única fonte textual real da
  cosmogonia nórdica foram escritas na Islândia (por Snorri Sturluson), e não há um registro distinto
  de criação do mundo específico de cada um desses outros países nórdicos; repetir o mesmo Ymir em
  4 fichas a mais seria duplicar, não documentar algo novo.
- 🇪🇪 **Estônia**: por motivo parecido — a cosmogonia do "ovo do mundo" é fineso-estoniana/báltica
  compartilhada com a Kalevala finlandesa (já atribuída à Finlândia), sem uma versão estoniana
  distinta e tão bem documentada quanto a compilação de Lönnrot.
- 🇱🇹🇱🇻 **Lituânia e Letônia**: a mitologia báltica sobrevive sobretudo em cantigas populares
  (dainos) sem um texto-fonte único e bem datado equivalente à Kalevala/Edda/Samguk Yusa; não achei
  uma versão de criação do mundo específica e forte o bastante pra bater a régua das outras — ficou
  de fora por risco de ficha fraca/obscura, não por falta de ficha cultural.
- 🇧🇷🇦🇷🇨🇱🇨🇺 **Brasil, Argentina, Chile e Cuba**: têm ficha cultural completa, mas cada um reúne
  várias tradições indígenas/afro diferentes sem um mito de criação único e dominante documentado por
  uma fonte central (ao contrário do asteca no México ou do inca no Peru) — não pesquisei a fundo
  cada tradição regional (tupi-guarani, mapuche, taína etc.) nesta rodada; fica pra outra vez, se
  alguma delas tiver fonte boa.
- 🇫🇷🇬🇧 **França e Reino Unido**: a mitologia céltica/gaulesa pré-romana não tem registro escrito
  próprio (os celtas tinham tradição oral; o que os romanos escreveram sobre eles é etnografia de
  fora, não a cosmogonia deles mesmos) — não achei uma fonte equivalente às Eddas ou ao Kojiki.
- 🇪🇸🇵🇹 **Espanha e Portugal**: mesmo problema — mitologia ibérica pré-romana mal documentada por
  fonte própria.
- **Egito, Grécia, China e Índia** (sugeridos no pedido): nenhum dos quatro tem ficha em
  `CULTURA_PAISES` hoje (não têm entrada em `FAUNA_MUSICA`/`DINHEIRO_PAISES`) — como o mito de criação
  só entra em país que já tem ficha cultural completa, ficam de fora até (e se) algum deles ganhar
  ficha própria, o que é tarefa maior e separada.

Não cobre os ~18 países restantes de `CULTURA_PAISES` sem ficha de mito — ficam pra uma rodada futura
só se aparecer fonte real forte o bastante (a régua é a mesma das 10 já feitas: fonte nomeada e
datável, não resumo de memória).

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

### Países sem o idioma mais falado deles: primeira rodada real (08/10/2026)
Terceira etapa da sequência pedida pelo Matheus ("depois das variações medievais, os idiomas mais
falados dos países que não tem"). Antes de escolher, confirmei de novo contra fonte real (não usei a
lista antiga de conhecimento geral sem checar) — Wikipédia (inglês) e o CLDR já embutido no app
(`src/data/idiomas-mundo.ts`, `WORLD_LANGUAGE_ROWS`, gerado do Unicode CLDR 48.2.0) bateram:
- **Javanês** (`jv`): a língua regional mais falada da Indonésia, com mais falantes nativos (~68-84
  milhões, Wikipédia "Javanese language") do que o indonésio (`id`, já no app) tem como língua
  materna — o indonésio é lingua franca/oficial, não a língua de casa da maioria. CLDR confirma:
  `IDN:f:34` (34% da Indonésia), 96 milhões de falantes no mundo.
- **Panjabi** (`pa`, Paquistão) e **Malgaxe** (`mg`, Madagascar) também pesquisados e confirmados como
  gaps reais e de alta prioridade (Panjabi: 37% dos paquistaneses como língua materna pelo censo de
  2023, mais que o urdu oficial, que é só 9,25%; Malgaxe: idioma oficial de Madagascar ao lado do
  francês, falado pela maioria, CLDR `MDG:o:90`) — pesquisa de vocabulário básico já feita (ver
  abaixo), mas **pacote NÃO criado nesta rodada**, só o javanês, por decisão de qualidade: construir
  um pacote novo com fonte confiável para CADA palavra (regra do projeto: nunca inventar) consumiu
  muito mais verificação do que o esperado só para o javanês (várias palavras que pareciam óbvias por
  proximidade com o indonésio na verdade não bateram na fonte, ou só a romanização aparecia sem
  tradução — teve que ir atrás da entrada em escrita javanesa original ou do Wiktionary em javanês
  pra confirmar). Mais sobre isso abaixo.

**Feito**: pacote `jv` (javanês, registro ngoko/informal — ver nota sobre krama), A1 completo (2
unidades, 4 lições + 2 provas, ~70 palavras, 4 tópicos de gramática, 2 histórias, 1 cenário, 2
etimologias, 4 temas de diário, 4 frases de shadowing), registrado em `PACKS`/`LANGUAGES`
(`src/data/idiomas.ts`). Vocabulário sem foto nova: todas as palavras novas reusam fotos/pictogramas
já existentes pela tradução em português (rodei `scripts/pictogramas-palavras.mjs`, sem nenhuma
palavra nova ficando só no emoji) — nenhuma imagem precisou ser baixada porque os conceitos (família,
casa, comida, cores, números, dias) já tinham tradução cadastrada por outros idiomas.

**Fonte de cada palavra**: Wiktionary em inglês (seção "Javanese" de cada entrada, inclusive indo até
a forma em escrita javanesa ꦗꦮ quando só a romanização aparecia sem glosa) e o Wiktionary **em
javanês** (`jv.wiktionary.org`) para 2 casos que o inglês não cobria (`-ku`, possessivo de 1ª pessoa;
`piyé`, "como"). Também usei o roteiro de frases do Wikivoyage ("Javanese phrasebook", CC BY-SA) para
saudações, números, dias e cores. **Descobertas que valem registrar** pra quem for revisar ou
expandir: (a) o javanês tem clítico possessivo `-ku` ("meu") confirmado, mas eu NÃO confirmei `-mu`
("seu/sua" informal) nem `-é`/`-né` (3ª pessoa/definido) em nenhuma fonte — o pacote evita essas duas
formas de propósito, usando "duwé" (ter) como alternativa quando precisava de posse; (b) o vocabulário
krama (registro formal) não está nesta versão — o `incomplete.note` já avisa; (c) uma primeira
tentativa de rascunho tinha pelo menos 15 palavras erradas ou inventadas por proximidade com o
indonésio (`kopi`, `kanggo`, `bantuan`, `kelas`, `jam`, `tahun`, `kerja`, `kenalno`, `critakna`,
`asal`+sufixo, `mesthi`, `rawuh` com sentido errado, `mara` com sentido errado — "mara" na verdade é
"eu" arcaico ou "morrer", não "ir/vir" — , `sethithik`, `nikmat`, `masak`, `deres`) — todas
substituídas por palavras confirmadas antes do commit. Isso é um alerta geral: para línguas muito
próximas de outra já no app (javanês~indonésio, como aconteceria com cazaque~uzbeque, azeri~turco
etc.), a tentação de "supor que é igual" é alta e errada com frequência.

**Pesquisa já feita, pronta pra quem continuar** (não implementada, pra não entregar pacote raso):
- **Panjabi** (`pa`): **IMPLEMENTADO numa rodada seguinte (08/10/2026, agente `panjabi-mandoa`) — ver
  a seção “Malgaxe e panjabi criados” mais abaixo pro pacote completo e pra como o bug do destino foi
  resolvido.** Ficam só o histórico da pesquisa original e o diagnóstico original do bug nos
  parágrafos abaixo. Maior falante nativo do Paquistão, mas normalmente escrito em Shahmukhi
  (alfabeto perso-árabe, abjad, RTL) no Paquistão — infraestrutura RTL do app já existe (`ar`, `ur`
  etc.), mas é um alfabeto novo pra ensinar do zero (não dá pra reaproveitar o teclado do urdu sem
  conferir letra por letra). Atenção a uma pegadinha de dado: no CLDR do app (`idiomas-mundo.ts`), o
  `pa` não tem papel `'o'` (oficial) nem em `PAK`, só `'f'` (falada sem status oficial); `IND` tem
  papel `'r'` (regional) — então a função `pickCountry`/`destinoDoIdioma` (`src/services/aventura.ts`)
  escolheria a ÍNDIA como destino de viagem do pacote, não o Paquistão, que foi o país que motivou a
  escolha. Precisa de decisão consciente (ex.: fixar a bandeira/país manualmente, como outros pacotes
  já fazem no campo `flag`, sem depender do `pickCountry`) antes de implementar.
- **Malgaxe** (`mg`): alfabeto latino, família austronésia (parente distante do javanês/indonésio,
  apesar de falado em Madagascar). Vocabulário básico já levantado e confirmado via Wiktionary
  (inglês) e Glosbe (mg→en): saudações (salama, veloma, misaotra, azafady, eny, tsia), pronomes (aho,
  ianao, izy), números 1-10 (iray, roa, telo, efatra, dimy, enina, fito, valo, sivy, folo), os 7 dias
  da semana (alahady, alatsinainy, talata, alarobia, alakamisy, zoma, asabotsy), 5 cores (mena, manga,
  maitso, fotsy, mainty), família (reny=mãe, dada=pai, rahalahy=irmão, rahavavy=irmã,
  sakaiza=amigo — atenção: "namana" NÃO é amigo, é "cúmplice", erro fácil de cometir — ,
  fianakaviana=família), casa/cidade (trano, tanàna), comida (mofo=pão, ronono=leite, kafe=café,
  vary=arroz, trondro=peixe), bichos (alika=cão, saka=gato), adjetivos (tsara=bom, ratsy=mau,
  lehibe=grande, kely=pequeno), verbos (manana=ter, tia=gostar/amar, mandeha=ir, mihinana=comer,
  misotro=beber), tempo (androany=hoje, rahampitso=amanhã, omaly=ontem). Um traço gramatical
  importante pra quem for montar a gramática: o malgaxe é VOS (verbo-objeto-sujeito), não SVO, e o
  verbo conjuga por tempo (passado/presente/futuro via prefixo), diferente do javanês/indonésio.
  Ainda faltam confirmar verbos de registro mais neutro ("saber", "morar", "falar", "querer" — as
  tentativas de hoje com "mahalala", "monina", "miteny"/"miresaka", "te-" não se confirmaram numa
  fonte, ou vieram inconclusivas por limite de taxa das ferramentas de busca).
- **Lista de gaps restante** (herdada da pesquisa de conhecimento geral de uma rodada anterior, cada
  item precisa da mesma confirmação de fonte real antes de qualquer pacote): África (Botswana, Burkina
  Faso, Burundi, Rep. Centro-Africana, Eritreia, Essuatíni, Gâmbia, Gana, Guiné, Lesoto, Madagascar —
  parcialmente pesquisado acima —, Malawi, Mali, Namíbia, Ruanda, Sudão do Sul, Uganda, Zâmbia,
  Zimbábue); Ásia (Paquistão/panjabi — pesquisado acima —, Sri Lanka/cingalês, Nepal, Butão,
  Cazaquistão, Turcomenistão, Quirguistão, Azerbaijão/azeri — bom próximo candidato: alfabeto latino,
  mesma família túrquica do turco/uzbeque já no app, ~24-32 milhões de falantes, CLDR `AZE:o:89` —);
  Oceania (Papua-Nova Guiné/tok pisin — atenção: o código `tok` já é toki pona no app, Tok Pisin
  precisaria de um código diferente, ex. `tpi` —, Fiji, Samoa, Tonga); regiões autônomas (Tibete, País
  de Gales, Hong Kong/Macau, repúblicas autônomas da Rússia).

### Malgaxe e panjabi criados (continuação da rodada anterior, 08/10/2026 — panjabi numa rodada seguinte, agente `panjabi-mandoa`)
Pegando a pesquisa já levantada na seção acima ("Países sem o idioma mais falado deles"): conferi de
novo cada palavra do malgaxe contra fonte real antes de montar o pacote (a pesquisa anterior já estava
sólida, mas apareceram 2 correções e algumas lacunas preenchidas — ver abaixo). Decisão de qualidade
(pedido explícito do Matheus: "prefira 1 com qualidade a 2 rasos"): **só o malgaxe foi implementado
nesta rodada**; o panjabi (Shahmukhi, alfabeto perso-árabe novo pro app) ficou de fora — ver o motivo
na seção própria mais abaixo. Trabalho feito no branch `panjabi-malgaxe` (worktree separado), ainda
não mesclado no `master`.

**Feito**: pacote `mg` (malgaxe, dialeto merina/padrão), A1 completo (2 unidades, 4 lições + 2 provas,
67 palavras, 4 tópicos de gramática, 2 histórias, 1 cenário, 1 etimologia, 4 temas de diário, 4 frases
de shadowing), registrado em `PACKS`/`LANGUAGES` (`src/data/idiomas.ts`) e com teto `C1` em
`src/data/tetos.ts`/`TETO-DOS-IDIOMAS.md` (Wikipédia malgaxe: ~100.691 artigos, só ~39 editores ativos
em 2025 — perto do javanês nesse quesito, mas com status oficial de verdade). Vocabulário sem foto ou
pictograma novo: todas as palavras reusam imagens já existentes pela tradução em português (rodei
`scripts/pictogramas-palavras.mjs`); só 8 das 67 palavras ficam só no emoji (“obrigado”, “desculpa”,
“eu”, “você”, “nós”, “amigo”, “nome”, “ter”), todas palavras abstratas/função sem pictograma em
NENHUM outro idioma do app — não é lacuna específica do malgaxe.

**Fonte de cada palavra**: Wiktionary em inglês (seção “Malagasy”, inclusive o apêndice “Malagasy
Swadesh list”, que deu de uma vez aho/ianao/izy/isika/izahay, lehibe/kely, mihinana/misotro,
mena/maitso/fotsy/mainty e mahafantatra), o dicionário acadêmico malagasyword.org (Malagasy Word
Network, malgaxe-inglês-francês) e o roteiro do Wikivoyage (“Malagasy phrasebook”, CC BY-SA, pros
cumprimentos, números e dias). Gramática (ordem VOS, partícula “ve”, sufixos possessivos -ko/-nao/-ny,
prefixo de tempo mi-/ni-/hi-) confirmada contra Wikipédia, WALS e a tese de Keenan & Ralalaoherivony
sobre pronomes malgaxes.

**Correções achadas na pesquisa anterior** (a pesquisa de 08/10/2026 já estava certa na maior parte,
mas): o “20” do Wikivoyage aparecia como “roambolo”, grafia que não bate em nenhum dicionário — a forma
confirmada (malagasyword.org, languagesandnumbers.com) é **roapolo**. “Namana” continua confirmado como
“cúmplice”, NÃO “amigo” (a palavra certa é “sakaiza”) — igual a pesquisa anterior já tinha avisado.

**Lacunas preenchidas**: “saber/entender” → **mahafantatra** (confirmado no apêndice Swadesh, não
“mahalala”, que só o malagasyword.org dava); “morar” → **monina** (malagasyword.org: “to dwell, to
reside, to inhabit”); “falar” → **miteny** (malagasyword.org); “querer” → **mila** (malagasyword.org:
“to want, to need”, bem confirmado) — nenhuma das 4 usa “te-”, que a pesquisa anterior não conseguiu
confirmar em fonte nenhuma, nem “maniry” (mais “desejar/almejar” do que “querer” do dia a dia).

**Descoberta que vale registrar pra quem for revisar ou expandir**: “rahalahy” (irmão) e “rahavavy”
(irmã) têm uma nuance que a tradução simples não mostra — no malagasyword.org, “rahalahy” é
literalmente “irmão de um HOMEM” e “rahavavy” é “irmã de uma MULHER”; o malgaxe tem palavras diferentes
(“anadahy”/“anabavy”) pro irmão de uma mulher/irmã de um homem. A nuance está explicada no card da
unidade 2 (`src/data/mg/curriculo.ts`), mas “anadahy”/“anabavy” não entraram no vocabulário desta
versão — ficam para quem expandir a gramática de parentesco depois.

**Panjabi (`pa`) implementado numa rodada seguinte (08/10/2026, agente `panjabi-mandoa`, branch
`panjabi-mandoa`, worktree separado, ainda não mesclado no `master`).** Pacote A1 completo da
variante do PAQUISTÃO, escrita em Shahmukhi (perso-árabe, abjad, RTL) — `src/data/pa/` (2 unidades,
4 lições + 2 provas, 67 palavras, 4 tópicos de gramática, 2 histórias, 1 cenário, 1 etimologia, 4
temas de diário, 4 frases de shadowing), registrado em `PACKS`/`LANGUAGES` (`idiomas.ts`) e com teto
`C1` (ver `tetos.ts`/`TETO-DOS-IDIOMAS.md`).

**Bug do destino, resolvido**: `destinoDoIdioma('pa')` escolhia a Índia (`pickCountry` prioriza
`oficial` → `regional`, e o CLDR só dá `PAK:f:70` falada/`IND:r:2.8` regional, sem papel oficial em
nenhum dos dois). Como o pacote não tem `EXPEDITION_PLACES` e `pickCountry` SEMPRE acha um resultado
(a Índia, por ser `regional`), só adicionar `pa` a `PAIS_HISTORICO` não bastava (esse mapa só é
consultado quando os passos anteriores da cadeia dão `undefined`, o que não é o caso aqui). Criado um
novo mecanismo, `PAIS_FIXO` (`src/services/aventura.ts`), consultado ANTES de `pickCountry` na cadeia
de `destinoDoIdioma`, para línguas vivas cujo papel no CLDR aponta o destino errado (diferente de
`PAIS_HISTORICO`, que é só pra línguas extintas sem falantes vivos) — `pa: 'PAK'`. Testado: a suíte
inteira de `aventura.test.ts` passa, incluindo a trilha completa do panjabi desembarcando no
Paquistão.

**Letra por letra, o alfabeto Shahmukhi**: confirmado contra a Wikipédia em inglês (“Shahmukhi”) que
ele é o mesmo conjunto de 39 letras do urdu (já no app) MAIS duas letras raras e específicas do
panjabi — `ࣇ` (um “l” retroflexo) e `ݨ` (um “n” retroflexo), ambas marcadas pela própria Wikipédia
como “differ from Urdu”/“seldom used”. Achado importante: os sons que no Gurmukhi (escrita indiana)
ganham letra própria (ਘ/ਝ/ਢ/ਧ/ਭ, hoje marcadores de TOM no panjabi falado) NÃO recebem letra própria
no Shahmukhi oficial — são dígrafos com `ھ` (consoante + `ھ`, ex. `گھ`=ਘ), que o urdu já tinha no
conjunto. Um “alfabeto panjabi” com 8 letras implosivas extras existe (omniglot.com/conscripts), mas
é ativista/não-oficial (emprestado do sindi) — não usado aqui, por não ser o Shahmukhi padrão/
acadêmico (learnpunjabi.org, Punjabi University Patiala).

**Vocabulário**: cada palavra conferida com a grafia Shahmukhi ESPECÍFICA (não derivada
mecanicamente do Gurmukhi) no Wiktionary em inglês (campo “Shahmukhi spelling”), complementado por
`pnb.wiktionary.org`/`pnb.wikipedia.org` (2 palavras que o Wiktionary inglês não cobria) e pelo
Wikivoyage (“Punjabi phrasebook”, saudações e a frase “qual é seu nome”, com a própria grafia
Shahmukhi). Vocabulário sem foto ou pictograma novo: reusa imagens já existentes pela tradução em
português (rodei `scripts/pictogramas-palavras.mjs`, sem nenhuma chave nova — todos os conceitos já
tinham imagem cadastrada por outros idiomas); cerca de 10 das 67 palavras ficam só no emoji
(“obrigado”, “desculpa”, “amigo”, “nome”, “eu”, “nós”, “ser/estar”, “um”, e os possessivos/pronomes
formais “seu/sua”, “você” informal/formal), o mesmo padrão de função/abstração sem imagem já visto em
outros idiomas (malgaxe, javanês) — não é lacuna específica do panjabi.

**Achados que valem registrar pra quem for revisar ou expandir**:
- “ہاں” (hā̃) é ao mesmo tempo “sim” E a 1ª pessoa do presente do verbo “ser/estar” (“eu sou/estou”)
  — confirmado no Wiktionary (verbete “ਹਾਂ”): não é coincidência de romanização, é o mesmo item
  lexical com dois sentidos, e por isso o curso reaproveita essa única palavra pros dois usos.
- “کی” (o quê, em panjabi) é DIFERENTE do urdu/hindi “کیا/क्या” — um falso parente fácil de confundir
  pra quem já estuda os dois; citado na nota de etimologia do pacote (`cognateNote`, `index.ts`).
- “کل” serve pra “ontem” E “amanhã” — a MESMA palavra (confirmado em `pnb.wiktionary.org/wiki/کل`),
  distinguida só pelo contexto/tempo do verbo da frase, não por uma palavra diferente — virou tópico
  de gramática (`pa-g4`).
- “وڈا بھرا”/“چھوٹا بھرا” (lit. “irmão grande”/“irmão pequeno”) é como o panjabi nomeia irmão mais
  velho/mais novo — não existe uma palavra neutra pra “irmão” sem marcar a idade relativa.
- “ماہی” (māhī, “amado/a”, poético) é falso amigo de “مچھی” (macchī, peixe) — parecidas, sem relação.
- A conjugação do presente habitual do panjabi (particípio + cópula, concordando em gênero) está bem
  documentada em fonte acadêmica (curso “Basic Punjabi”, Michigan State University), mas SEM grafia
  Shahmukhi atestada pra maioria dos verbos específicos — por decisão de qualidade, o pacote evita
  inventar essa conjugação: só “بولݨا” (falar) tem uma forma conjugada usada (“بولدا”, confirmada
  contra um exemplo real em Shahmukhi do Wiktionary, mesma classe morfológica de “وجنا”/vajjṇā), e
  os outros verbos aparecem como substantivo verbal (“X چنگا اے” = fazer X é bom) ou na cópula sozinha
  (“ہاں”/“اے”), nunca com uma flexão pessoal/genérica inventada. Também não confirmados em Shahmukhi,
  e por isso de fora desta versão: “por favor” isolado, “ter” (posse, “ਕੋਲ”), “meu/minha” (possessivo
  de 1ª pessoa — “تہاڈا”, de 2ª formal, ESTÁ confirmado e entrou), “pai” na forma sânscrita formal
  (“ਪਿਤਾ”) e a forma “comum” (não impessoal) de “querer”.
- Adjetivos de gênero: o panjabi concorda adjetivo e substantivo em gênero (como hindi/urdu), mas só
  as formas masculinas de cada adjetivo foram confirmadas em Shahmukhi nesta pesquisa — o pacote evita
  de propósito combinar esses adjetivos com substantivos femininos, e o gap está documentado no card
  da unidade 2 (`pa-c2`) e em `pa-g3`.

**Deixado de fora, documentado, pra quem expandir**: romanização (`reading`), A2 em diante, as
formas femininas dos adjetivos, a conjugação verbal completa (2ª/3ª pessoa, plural) e a grafia
Shahmukhi de “por favor”/“ter”/“meu”.

### Variações medievais, rodada de 08/10/2026 (passo 2 do pedido do Matheus, depois do piloto de IPA)
Ordem do Matheus: 1) voz por IPA quando não há gravação nativa (feito, ver seção própria acima),
2) variações medievais (esta seção), 3) idiomas mais falados dos países que não têm. Antes de
começar, conferido `git worktree list`/`git branch -a` — nenhum branch/worktree com nome parecido a
"medieval"/"antigo"/"eslavo"/"latim" tinha trabalho não mesclado; o único precedente real é o
nórdico antigo (`non`, Futhark/runas), já mesclado na master (commit `86b1e046`) antes desta rodada.

**Decisão de estrutura**: segui o MESMO padrão do `non` (pacote `LanguagePack` completo, não um
minicurso "idioma controlado" tipo `src/data/cursos/`) — `incomplete: { until: 'A1.2' }`, 2 unidades,
4 tópicos de gramática, 2 histórias, extras. Não virou minicurso porque o `non` já é o precedente
oficial de "variação histórica" no app e está mesclado — reaproveitar a mesma régua evita duas
convenções concorrentes pro mesmo tipo de conteúdo.

**Feito nesta rodada: francês antigo (`fro`, código ISO 639-3, sem 639-1 de duas letras — confirmado
em iso639-3.sil.org/code/fro)**. Arquivos em `src/data/fro/` (vocabulario/curriculo/gramatica/
historias/extras/index), registrado em `idiomas.ts` (`PACKS`, `LANGUAGES`, logo depois de `LATIM` —
ancestral do francês moderno `fr`, já completo) e em `PAIS_HISTORICO` de `aventura.ts` (`fro: 'FRA'`).
Par natural: `fr` já é pacote completo no app.
- **Fontes, conferidas de verdade (WebFetch, não por memória)**: Wiktionary (seção "Old French"
  dedicada de cada palavra — `chevalier`, `rei`, `grant`, `petit`, `estre`, `avoir`, `voloir`,
  `parler`, `le`, `mon`, `nom`, `pere`, `mere`, `frere`, `fille`, `meson`, `chien`, `chat`, `blanc`,
  `noir`, `vert`, `rouge`, `bon`, `merci`, `oïl`, `vos`, cada uma com tabela de declinação/
  conjugação e etimologia latina, checada individualmente); Wikipedia em inglês ("Old French",
  "Oaths of Strasbourg", "The Song of Roland", "Oïl languages") pra período (séc. IX-XIV), os
  Juramentos de Estrasburgo (842, primeiro texto em língua galo-românica), a Chanson de Roland
  (~1040-1115) e a distinção langue d'oïl/langue d'oc; "Old French Online" (UT Austin, Brigitte
  Bauer, 2006, lrc.la.utexas.edu/eieol/ofrol — a URL certa tem "ofrol", não "frool" como a pesquisa
  anterior sugeria; confirmada com conteúdo real nas lições 1 e 2) pro sistema de dois casos
  (reto/oblíquo) com o exemplo "chevaliers"/"chevalier" e pra citação sobre o sistema de caso se
  perdendo já dentro do próprio texto da Chanson de Roland.
- **Lacuna honesta, documentada e respeitada**: não existe, em nenhuma fonte conferida, uma
  interjeição de saudação curta atestada em francês antigo (o pesquisador tentou "Dex vos saut" e
  variantes — não confirmou). Por isso o pacote usa "Bienvenu" (bem-vindo, atestado indiretamente
  pela etimologia do francês moderno "bienvenu": "do francês antigo bienvenu") como `greeting`/
  `phrases.hi`, e nunca inventou uma saudação tipo "Heill" do nórdico antigo. Também não há "não"
  verbal conjugado com certeza (a negação verbal do francês antigo usa "ne…pas/mie/nient", não
  confirmada em detalhe) — por isso nenhuma frase do pacote nega um verbo; "non" só aparece como
  resposta solta de uma palavra.
- **Confiança**: alta pra quase todo o vocabulário e pra gramática (dois casos, verbos estre/avoir,
  artigo le/la/li nascendo do latim "ille") — cada forma citada em `gramatica.ts` vem de uma tabela
  de conjugação/declinação real do Wiktionary, conferida nesta rodada (não copiada da pesquisa
  anterior, que tinha achado a URL errada do curso da UT Austin). Média só pra "pain" (bread) — a
  página do Wiktionary não tem seção "Old French" dedicada pra esse sentido, só a cadeia de
  etimologia citando "Old French pain ('bread')" duas vezes (francês e inglês) — considerada
  confiável o bastante por vir de duas citações independentes, mas sinalizada aqui.
- **Testes**: `node --import tsx --test src/data/conteudo.test.ts` (1910 testes, todos passando,
  incluindo os 11 novos do `fro`), `src/services/aventura.test.ts` e `src/data/sistemas-escrita.test.ts`
  (11 testes, todos passando). `npx tsc --noEmit` e `npx eslint src/data/fro/ src/data/idiomas.ts
  src/services/aventura.ts` sem erros.

**Feito na mesma rodada (agente em paralelo): eslavo eclesiástico antigo (`cu`, código ISO 639-1 —
confirmado em iso639-3.sil.org/code/chu, que também lista o 639-1 "cu"; pela regra do projeto, o
639-1 de duas letras ganha do 639-3 "chu")**. Arquivos em `src/data/cu/` (vocabulario/curriculo/
gramatica/historias/extras/alfabeto/index), registrado em `idiomas.ts` (`PACKS`/`LANGUAGES`, no fim
do bloco eslavo, depois de `CASSUBIO`) e em `PAIS_HISTORICO` de `aventura.ts` (`cu: 'BGR'` — a
língua nasceu perto de Tessalônica e foi padronizada pra missão à Grande Morávia, mas quase todo o
corpus que sobreviveu foi escrito no Primeiro Império Búlgaro, corte de Preslav). Também ganhou uma
entrada nova em `sistemas-escrita.ts` (`glagolitico`, ao lado do `cirilico` que já existia) — o
eslavo eclesiástico antigo é o único idioma do app cujo `lineage.writing` cita os dois alfabetos.
Par natural: `ru` já é pacote completo no app (e o eslavo eclesiástico antigo é o ancestral
literário comum de quase toda a família eslava, não só do russo).
- **Fontes, conferidas de verdade (WebFetch, não por memória)**: Wiktionary (seção "Old Church
  Slavonic" dedicada de cada palavra — `азъ`, `тꙑ`, `мꙑ`, `вꙑ`, `мати`, `отьць`, `братъ`/`братръ`,
  `сестра`, `сꙑнъ`, `домъ`, `вода`, `хлѣбъ`, `вино`, `имѧ`, `богъ`, `чловѣкъ`, `малъ`, `бѣлъ`,
  `чрьнъ`, `зеленъ`, `не`, `и`, `или`, `трава`, `добръ`, `мои`, `твои`, `бꙑти`, `имѣти`,
  `глаголати`, `радовати сѧ`, `хвала`, cada uma com declinação/conjugação e etimologia protoeslava,
  checada individualmente; categoria "Old Church Slavonic cardinal numbers" pros 10 numerais);
  iso639-3.sil.org pro código; Wikipedia em inglês ("Old Church Slavonic", "Early Cyrillic
  alphabet", "Glagolitic script", "Hail Mary") pro contexto histórico (missão de Cirilo e Metódio à
  Grande Morávia, 863; Rastislau; os dois alfabetos — glagolítico primeiro, cirílico depois, na
  Escola de Preslav; uso litúrgico do eslavo eclesiástico que continua até hoje) e pro alfabeto
  cirílico antigo completo com IPA (usado no `alfabeto.ts`, só o subconjunto de 25 letras que o
  vocabulário deste pacote precisa).
- **Achado que corrigiu uma suposição minha no meio da pesquisa**: tentei usar a forma "ѥстъ/ѥсмь"
  sem o ѥ inicial (como "естъ"/"есмь") pela semelhança com o russo moderno — a tabela de conjugação
  real do Wiktionary pra `бꙑти` mostra que a forma correta do período é com ѥ inicial em todas as
  pessoas (ѥсмь/ѥси/ѥстъ/ѥсвѣ/ѥста/ѥсмъ/ѥсте/сѫтъ); corrigido em todo o pacote antes de comitar.
- **Lacuna honesta, documentada e respeitada**: não existe, em nenhuma fonte conferida, uma
  partícula simples de "sim" no eslavo eclesiástico antigo ("да" neste período só significa "para
  que/a fim de" — o sentido de "sim" é um desenvolvimento posterior, só em búlgaro/macedônio/russo
  modernos). Por isso o curso ensina a resposta afirmativa repetindo o verbo da pergunta (um traço
  real de várias línguas indo-europeias antigas, incluindo o latim) em vez de inventar uma palavra
  — ver a lição de gramática dedicada a isso. Também não achei "filha" (дъчи) atestado numa seção
  "Old Church Slavonic" própria (só em eslavo oriental antigo) — por isso "filha" não entrou no
  vocabulário, só os outros quatro parentescos.
- **Simplificação consciente, documentada no cabeçalho de `vocabulario.ts`**: depois de numerais de
  2 em diante, o idioma de verdade exigia um caso gramatical diferente no substantivo (regência
  parecida com o russo moderno) — este pacote, no nível A1, só junta o numeral à forma de dicionário
  do substantivo, sem ensinar essa concordância ainda (mesma régua de simplificação que o `non` já
  usa pra declinação nórdica).
- **Confiança**: alta pra quase todo o vocabulário, pros dois alfabetos e pro verbo `бꙑти` com dual
  (tabela de conjugação conferida linha a linha) — cada forma citada em `gramatica.ts` vem de uma
  tabela ou categoria real do Wiktionary ou da Wikipédia, conferida nesta rodada. Média pras formas
  femininas/neutras dos adjetivos de cor (`чрьнъ`/`зеленъ`): o Wiktionary confirma que os dois têm
  "declinação curta e longa" do mesmo tipo regular que `добръ` (confirmado com as três formas
  completas), mas não cita cada forma individualmente — a extensão do padrão é regular, não um
  chute.
- **Testes**: `node --import tsx --test src/data/conteudo.test.ts` (1921 testes, todos passando,
  incluindo os novos do `cu`), `src/services/aventura.test.ts` e `src/data/sistemas-escrita.test.ts`
  (11 testes, todos passando). `npx tsc --noEmit` e `npx eslint src/data/cu/ src/data/idiomas.ts
  src/services/aventura.ts src/data/sistemas-escrita.ts` sem erros.

**Candidatas que ficaram de fora desta rodada, e o motivo**:
- **Alto-alemão médio, castelhano medieval, toscano antigo/dantesco, latim medieval**: não
  pesquisados de novo nesta rodada (sem fonte reconferida ao vivo) — ficam como próximos candidatos,
  na mesma ordem de prioridade sugerida pela pesquisa de 08/10/2026 (ver acima): alemão (`de`) e
  espanhol (`es`)/italiano (`it`) já são pacotes completos, então castelhano medieval e toscano
  antigo também fariam par natural forte. Não entraram só por tempo/escopo desta rodada (o Matheus
  pediu 1-3 variações, não as 7 de uma vez).
- **Árabe clássico/corânico**: sem bloqueio técnico (o árabe padrão `ar` já é completo), mas não
  pesquisado nesta rodada — fica pra depois.
- **Copta**: não é um dos 7 candidatos medievais originais da pesquisa de 08/10/2026, mas aparece
  em "Escritas antigas não alfabéticas" (mais abaixo neste arquivo) como "mais simples (alfabeto
  Unicode, parecido com o grego) e pode seguir o fluxo atual" — vale reavaliar junto com os outros
  candidatos numa próxima rodada (par natural possível: `arz`, árabe egípcio, já completo — o copta
  é a língua egípcia de antes da arabização, com uso litúrgico na Igreja Ortodoxa Copta até hoje,
  parecido com o eslavo eclesiástico). Não pesquisado nem iniciado nesta rodada — citado aqui só
  pra não se perder entre as duas seções do arquivo.

### Variações medievais, rodada de 08/10/2026 (continuação): castelhano medieval e alto-alemão médio
Terceira e quarta variações medievais da fila (depois de nórdico antigo, francês antigo e eslavo
eclesiástico antigo, já mesclados). Seguido o MESMO padrão dos três anteriores (pacote
`LanguagePack` completo, `incomplete: { until: 'A1.2' }`, 2 unidades, 4 tópicos de gramática, 2
histórias, extras). Antes de começar, conferido `git worktree list`/`git branch -a` — nenhum outro
trabalho em andamento nesses dois códigos.

**Achado importante, documentado antes de pesquisar de verdade**: o pedido original citava
"Middle High German Online"/"Old Spanish Online" da UT Austin (mesmo padrão do "Old French Online"
usado pro francês antigo) como fontes esperadas — **esses dois cursos não existem**. A série real
da UT Austin (EIEOL, `lrc.la.utexas.edu/eieol`) tem 18 cursos (latim, grego, eslavo eclesiástico
antigo, armênio, iraniano antigo, nórdico antigo, báltico, hitita, sânscrito, gótico, francês
antigo, irlandês antigo, inglês antigo, tocário, albanês, russo antigo — conferido ao vivo, lista
completa), mas nenhum de alto-alemão médio ou de castelhano/espanhol antigo — esses dois não são
"indo-europeu arcaico", são romance/germânico MEDIEVAL, fora do escopo da série. Em vez disso:
- **Alto-alemão médio**: usei a Wikipédia em inglês ("Middle High German" — período, dialetos,
  obras, gramática) e o Wiktionary (seção "Middle High German" dedicada, quando existe). "A Middle
  High German Primer" de Joseph Wright (3ª ed., 1917, domínio público, Project Gutenberg #22636)
  existe e é um curso acadêmico real, mas não foi usado diretamente nesta rodada (o Wiktionary já
  deu tabela de conjugação/declinação suficiente pros 4 tópicos de gramática) — fica registrado
  aqui como fonte extra pra quem expandir o pacote além do A1.
- **Castelhano medieval**: usei a Wikipédia em inglês ("Old Spanish language", "Cantar de Mio
  Cid") e o Wiktionary (seção "Old Spanish" dedicada, quando existe). Não achei nenhum curso aberto
  equivalente (tentei "Old Spanish Readings"/"Old Spanish grammar PDF" — só achei cursos
  universitários pagos, como o de Rafael Lapesa referenciado no syllabus da San José State).

**Feito: alto-alemão médio (`gmh`, código ISO 639-3, sem 639-1 — confirmado em
iso639-3.sil.org/code/gmh: "Middle High German (ca. 1050-1500)", tipo histórico)**. Arquivos em
`src/data/gmh/` (vocabulario/curriculo/gramatica/historias/extras/index), registrado em
`idiomas.ts` (`PACKS`/`LANGUAGES`, logo depois de `ALEMAO` — alemão moderno, já completo) e em
`PAIS_HISTORICO` de `aventura.ts` (`gmh: 'DEU'`). Par natural: `de` já é pacote completo no app.
- **Fontes, conferidas de verdade (WebFetch/WebSearch, não por memória)**: Wiktionary (seção
  "Middle High German" dedicada de cada palavra — `sīn`/`wesen`, `vater`, `muoter`, `bruoder`,
  `tohter` (com declinação completa), `sun` (com declinação completa), `nāme`, `vriunt`, `hūs`
  (com declinação), `wazzer`, `hunt`, `katze`, `wīn`, `daȥ`, `wir`, `ir`, `guot`, cada uma
  conferida individualmente, várias com tabela de declinação/conjugação real); Wikipédia em inglês
  ("Middle High German" — período ca. 1050-1350, dialetos da Alemanha central/superior, a corte dos
  Hohenstaufen e a língua literária baseada no suábio, Nibelungenlied/Parzival/Tristan/Erec/
  Iwein/Minnesang de Walther von der Vogelweide, os 4 casos/3 gêneros/classes fortes-fracas, e o
  fato de que a marcação de vogal longa com circunflexo é convenção acadêmica moderna — sobretudo
  de Karl Lachmann, séc. XIX —, não algo que os manuscritos originais faziam).
- **Lacuna honesta, documentada e respeitada**: o verbo "haben" (ter) existia, mas NENHUMA fonte
  conferida (nem a seção "Middle High German" direta, nem a cadeia etimológica pelo alto-alemão
  antigo) trouxe uma tabela de conjugação do presente especificamente pro alto-alemão médio — por
  isso "haben" NÃO entra no vocabulário nem em nenhuma frase deste pacote; só "sīn" (ser/estar), com
  tabela de presente plenamente atestada (ich bin, du bist, ër ist, wir birn, ir birt, sie sint), é
  ensinado. Também não há confirmação, nas fontes conferidas, de que "ir" (plural de "du")
  funcionasse como cortesia dirigida a uma só pessoa no PRÓPRIO alto-alemão médio (a fonte descreve
  isso como "pouco atestado, talvez regional" até pro alto-alemão antigo) — por isso o pacote trata
  "du"/"ir" só como número, diferente do francês antigo e do castelhano medieval (que têm "vos" de
  cortesia bem confirmado). Também não achei confirmação específica pra adjetivos "grande"/"pequeno"
  (tentei "grôz" — achei só uma forma verbal homônima de outra palavra, "grieȥen", conferida e
  descartada — e "michel"/"luzzel", sem seção própria) — por isso o pacote só ensina "guot" (bom)
  como adjetivo essencial, fora as cores.
- **Achado que corrigiu uma suposição minha no meio da pesquisa**: tentei a grafia "grôz" pra
  "grande" por lembrança de alemão antigo geral — a página do Wiktionary pra essa grafia exata é
  na verdade uma forma verbal (pretérito de "griezen"), não o adjetivo; descartada antes de entrar
  no pacote, documentada aqui em vez de adivinhar.
- **Confiança**: alta pra "sīn" (tabela de presente completa e atestada), pra "daȥ"/"mīn" (seção
  própria), e pra quase toda a família (vater/muoter/bruoder/sun/tohter/vriunt, com declinação de
  sun/tohter/hūs conferida linha a linha). Média pra "swëster" (só via lista de descendentes do
  alto-alemão antigo, sem seção MHG própria própria no Wiktionary), pra "ja"/"nein"/"danc"/
  "willekomen"/"ritter"/as 4 cores/os numerais 4-10 (confirmados só pela etimologia do alemão
  moderno citando a forma do alto-alemão médio, não por seção "Middle High German" dedicada) — e
  pras extensões mínimas "dīn" (teu, pelo mesmo padrão de "mīn") e "unde"/"hie" (confirmadas via
  etimologia do alemão moderno "und"/"hie").
- **Testes**: `npx tsx --test src/data/conteudo.test.ts src/services/aventura.test.ts` (1984
  testes, todos passando, incluindo os novos do `gmh`). `npx tsc --noEmit` e `npx eslint src/data/
  gmh/ src/data/idiomas.ts src/services/aventura.ts src/data/tetos.ts` sem erros.

**Feito na mesma rodada: castelhano medieval (`osp`, código ISO 639-3 "Old Spanish", sem 639-1 —
confirmado em iso639-3.sil.org/code/osp)**. Arquivos em `src/data/osp/` (vocabulario/curriculo/
gramatica/historias/extras/index), registrado em `idiomas.ts` (`PACKS`/`LANGUAGES`, logo depois de
`FRANCES_ANTIGO`, no mesmo cluster de línguas históricas românicas ao lado de `LATIM`) e em
`PAIS_HISTORICO` de `aventura.ts` (`osp: 'ESP'`). Par natural: `es` já é pacote completo no app.
Cenário: a corte de Rodrigo Díaz de Vivar, "El Cid" — o herói do Cantar de Mio Cid (1140-1207, a
obra mais famosa do período, manuscrito de Per Abbat datado de 1207).
- **Fontes, conferidas de verdade (WebFetch/WebSearch, não por memória)**: Wiktionary (seção "Old
  Spanish" dedicada de cada palavra — `yo`, `nos`, `seer`/`seyo`/`sees`/`sie`/`sedemos` (tabela de
  presente), `aver`/`aves`/`ave`/`avemos`/`avedes`/`aven` (tabela de presente), `padre`, `fijo`,
  `fija`, `ermano` (corrigiu a suposição de "hermano" — ver abaixo), `casa`, `rey`, `agua`, `pan`,
  `vino`, `verde` (com citação real de Gonzalo de Berceo, "Verde e bien sençido", Lapidario c.
  1250), `vermejo` (grafia real, não "bermejo"), `grande`, `bueno`, `uno`/`dos`/`tres`/`quatro`/
  `seys`/`ocho`/`diez` (tabela/categoria de numerais), `mio`, cada uma conferida individualmente,
  várias com tabela de declinação/conjugação real); Wikipédia em inglês ("Old Spanish language" —
  período séc. IX-XV, b/v ainda distintos, f- inicial ainda pronunciado "f", "Cantar de Mio Cid"
  como a obra mais famosa e mais antiga do período).
- **Achado que corrigiu uma suposição minha no meio da pesquisa**: tentei "hermano" (irmão) por
  semelhança com o espanhol moderno — o Wiktionary confirma que a forma real do castelhano medieval
  é "ermano" (sem H), e que o espanhol moderno "hermano" só ganhou o H depois; o mesmo vale pra
  "fijo"/"hijo" e "fazer"/"hacer" (o F inicial do latim ainda se pronunciava "f" no período, citado
  na lição de gramática dedicada a isso). Também corrigido "bermejo" para a grafia real "vermejo".
- **Lacuna honesta, documentada e respeitada**: NÃO existe, em nenhuma fonte conferida, uma
  partícula de "sim" no castelhano medieval do período do Cid — "sí" nessa época só significava
  "assim" (do latim "sic"); o sentido de "sim" só apareceu nos séc. XIV-XV, já depois do período
  retratado neste pacote. Por isso o pacote ensina a resposta afirmativa repetindo o verbo da
  pergunta (o mesmo traço que o eslavo eclesiástico antigo documenta, pelo mesmo motivo) — ver a
  lição de gramática dedicada a isso. Também não há forma atestada de "yo" com o verbo "aver" (a
  tabela de presente do Wiktionary só traz formas reconstruídas pra 1ª pessoa, sem página própria)
  — por isso nenhuma frase do pacote usa "yo" com "aver"; os exemplos usam a 3ª pessoa "ave" em vez
  disso. Os verbos "querer"/"fablar"/"dezir"/"fazer" existiam (meio confirmado), mas NENHUM tem
  tabela de conjugação própria pro castelhano medieval no Wiktionary (só a de "Old Galician-
  Portuguese", uma língua diferente, ou nenhuma) — por isso não entraram no vocabulário nem nas
  lições deste pacote, só "seer" e "aver" são ensinados como verbos. "Grado" (obrigado) é confiança
  média: só a etimologia do espanhol moderno cita "Old Spanish grado" como "ato de agradecimento"
  (do latim tardio "gratum"), sem citação direta de uso no período — melhor aproximação encontrada,
  sem inventar uma palavra melhor.
- **Confiança**: alta pra "seer"/"aver" (tabelas de presente conferidas linha a linha, com as
  formas reconstruídas marcadas e evitadas), pra quase toda a família (padre/madre/fijo/fija/
  ermano/ermana), pra "verde"/"vermejo"/"grande"/"bueno" (seção própria) e pros numerais 1, 2, 3, 4,
  6, 8, 10 (categoria "Old Spanish cardinal numbers" ou seção própria). Média pra "amigo"/"gato"/
  "blanco"/"negro"/"cavallero"/"nombre" (confirmados só pela etimologia do espanhol moderno citando
  a forma do castelhano medieval, ou — no caso de "cavallero" — por atestação direta no texto do
  Cantar de Mio Cid, verso 720 da edição Menéndez Pidal: "¡Feridlos, cavalleros, por amor del
  Criador!") e pros numerais 5 ("çinco", só como "grafia obsoleta" sem seção própria), 7 ("siete",
  sem seção "Old Spanish" encontrada) e 9 ("nueve", confirmado só via "nueve~nuef" na etimologia).
- **Testes**: `npx tsx --test src/data/conteudo.test.ts src/services/aventura.test.ts` (1984
  testes, todos passando, incluindo os novos do `osp`). `npx tsc --noEmit` e `npx eslint src/data/
  osp/ src/data/idiomas.ts src/services/aventura.ts src/data/tetos.ts` sem erros.

**Candidatas que continuam de fora**: árabe clássico/corânico e copta (ver notas da rodada
anterior, acima) — ainda não pesquisados. Toscano antigo/dantesco (par com `it`) e latim medieval/
eclesiástico (variação dentro do `la`) também ficaram de fora desta rodada por tempo, não por falta
de fonte esperada — latim medieval em particular deve ter MUITO material aberto (é a língua mais
documentada do levantamento de tetos, já C2 no `la` clássico), bom candidato pra próxima rodada.

Ambos os pacotes seguem o teto C1 (como `non`/`fro`/`cu`) — atualizado em `src/data/tetos.ts` e em
`TETO-DOS-IDIOMAS.md` (resumo e seção "## C1" com a contagem certa: 36 idiomas, 172 no total).

### Variações medievais, rodada de 09/10/2026: copta feito; árabe clássico, toscano antigo e latim
### medieval investigados e adiados (achado de design que muda o próximo passo dos três)
Quinta variação medieval da fila (depois de nórdico antigo, francês antigo, eslavo eclesiástico
antigo, alto-alemão médio e castelhano medieval, já mesclados). Antes de começar, conferido
`git worktree list`/`git branch -a` — só a `varredura-visual`, de outro agente, sem relação com esta
tarefa, estava ativa. Candidatos revisitados desta vez: árabe clássico/corânico, copta, toscano
antigo/dantesco e latim medieval/eclesiástico (os quatro que ainda restavam da pesquisa original de
08/10/2026). Seguindo a orientação de qualidade sobre quantidade (a rodada anterior também fez só 2
de 6 pelo mesmo motivo): **1 implementado com confiança alta (copta), 3 investigados a fundo e
adiados com achado de design documentado** — não por falta de tempo cego, mas porque a investigação
revelou que os três não se encaixam no padrão direto "pacote novo com código ISO" que `non`/`fro`/
`cu`/`gmh`/`osp`/`cop` seguiram.

**Achado principal, antes de implementar qualquer coisa**: nenhum dos três ficou de fora — árabe
clássico, toscano antigo e latim medieval — tem um código ISO 639-3 PRÓPRIO (confirmado em
iso639-3.sil.org e por busca cruzada): a Wikipédia em inglês lista o ISO 639-3 de "Classical Arabic"
e de "Old Italian" como "–" (nenhum), e o do latim medieval/eclesiástico também cai dentro do próprio
`lat` (o mesmo código do latim clássico, já no app como `la`). Os três TÊM glottocode no Glottolog
(`clas1259`, `fior1236`, `medi1250`, respectivamente, confirmados direto em glottolog.org via
WebFetch) — mas o Glottolog classifica os três como **"Dialect"**, filhos do idioma-padrão
correspondente (árabe padrão `stan1318`, italiano `ital1282`, latim `lati1261`), não como língua
irmã independente. Esse é exatamente o mesmo status que o guarani antigo (`oldp1258`, já no app,
também "Dialect" de `para1311` no Glottolog) tem — e mesmo assim o guarani antigo ganhou um pacote
PRÓPRIO, com o glottocode como código. Ou seja: o precedente do guarani antigo, por si só, NÃO
impede um pacote novo pra árabe clássico ou toscano antigo — mas o pedido desta rodada foi explícito
em tratar o latim medieval como VARIAÇÃO dentro do `la`, não pacote novo (ver investigação abaixo), o
que sugere que o critério certo não é "tem glottocode" e sim algo mais específico de cada caso, que
caberia ao Matheus decidir antes da próxima rodada.

**Feito com confiança alta: copta (`cop`, sem ISO 639-1, ISO 639-3 "cop" — confirmado em
iso639-3.sil.org/code/cop: escopo "Individual", tipo "Extinct")**. Dialeto SAÍDICO (o mais estudado e
com mais verbetes no Wiktionary — a Wikipédia em inglês, "Coptic language", diz que é "generally the
dialect studied by learners"; o BOHAÍRICO, do delta do Nilo, é o litúrgico de hoje na Igreja
Ortodoxa Copta). Arquivos em `src/data/cop/` (vocabulario/curriculo/gramatica/historias/extras/
alfabeto/index), registrado em `idiomas.ts` (`PACKS`/`LANGUAGES`, logo depois de `ARABE_EGIPCIO`),
em `PAIS_HISTORICO` de `aventura.ts` (`cop: 'EGY'`), em `sistemas-escrita.ts` (entrada nova `copta`,
com `test: /alfabeto copta/i`) e em `tetos.ts`/`TETO-DOS-IDIOMAS.md` (teto C1, como os outros cinco —
contagem atualizada pra C1 39, total 182). Par geográfico (NÃO genealógico) com `arz` (árabe
egípcio), já pacote completo no app.
- **Fontes, conferidas de verdade (WebFetch/WebSearch, não por memória)**: Wiktionary (seção
  "Coptic" dedicada de cada palavra — `ⲉⲓⲱⲧ`, `ⲙⲁⲁⲩ`, `ⲥⲟⲛ`, `ⲥⲱⲛⲉ`, `ϣⲏⲣⲉ`, `ⲣⲱⲙⲉ`, `ⲥϩⲓⲙⲉ`,
  `ⲏⲓ`, `ⲙⲟⲟⲩ`, `ⲉⲓⲉⲣⲟ`, `ⲣⲏ`, `ⲟⲉⲓⲕ`, `ⲏⲣⲡ`, `ⲛⲟⲩⲧⲉ`, `ⲣⲁⲛ`, `ⲭⲉⲣⲉ`, `ⲟⲩⲁ`, `ⲥⲛⲁⲩ`, `ϣⲟⲙⲛ̄ⲧ`,
  `ϥⲧⲟⲟⲩ`, `ⲛⲟϭ`, `ⲕⲟⲩⲓ`, `ⲙⲉ` (com tabela de conjugação COMPLETA do presente e do passado, Sahídico,
  conferida linha a linha), `ⲟⲩⲱⲙ`, `ⲥⲱ`, `ⲛⲁⲩ`, `ⲙⲛ̄`, `ⲇⲉ`, `ϣⲉⲡϩⲙⲟⲧ`, cada uma conferida
  individualmente, com etimologia até o demótico/egípcio antigo); Wikipédia em inglês ("Coptic
  language", "Coptic alphabet") pro contexto histórico (última fase do egípcio antigo, séc. III-XIV,
  auge saídico 325-800, conquista árabe de 641, alfabeto de 24 letras gregas + 7 demóticas); um
  estudo da Universidade de Leiden sobre sentenças nominais coptas
  (scholarlypublications.universiteitleiden.nl/access/item%3A3247493/view), citando o exemplo
  acadêmico de Boud'hors/Shisha-Halevy "ⲁⲛⲟⲕ ⲡⲉ ⲡϣⲏⲣⲉ ⲙ̄ⲡⲛⲟⲩⲧⲉ" ("eu sou o filho de Deus") pro
  padrão sujeito–ⲡⲉ/ⲧⲉ–predicado (o copta não tem verbo "ser"); pesquisa sobre marcação diferencial
  de objeto no saídico (Sahidic differential object marking) pra preposição ⲛ̄-/ⲙ̄- antes do objeto
  direto; Coptic Dictionary Online (KELLIA) pra confirmar `ⲙⲛ̄` ("e"/"com").
- **Achado que corrigiu um rascunho meu no meio da pesquisa**: o primeiro rascunho das frases de
  exemplo colocava o ⲡⲉ/ⲧⲉ NO FIM da frase ("sujeito-predicado-ⲡⲉ") — a tabela acadêmica real mostra
  que a ordem certa é sujeito–ⲡⲉ/ⲧⲉ–predicado, com o ⲡⲉ/ⲧⲉ ENTRE as duas partes ("ⲁⲛⲟⲕ ⲡⲉ Ⲗⲓⲛⲟⲩ", não
  "ⲁⲛⲟⲕ Ⲗⲓⲛⲟⲩ ⲡⲉ"); corrigido em todo o pacote antes de comitar. Também descartei um rascunho de
  frases com adjetivo+substantivo sem ⲡⲉ (tipo "ⲟⲩⲛⲟϭ ⲛ̄ⲏⲓ", "uma casa grande") por não ter
  confirmação direta da ordem/do uso do ligador ⲛ̄- com adjetivos comuns — todas as frases do pacote
  usam só os dois padrões confirmados (ⲡⲉ/ⲧⲉ como predicado nominal, e o prefixo do presente + ⲛ̄-/
  ⲙ̄- como objeto direto).
- **Lacuna honesta, documentada e respeitada**: não há, em nenhuma fonte conferida, uma partícula de
  "por favor" nem cores básicas (branco/preto/vermelho) com seção "Coptic" própria e inequívoca, nem
  um numeral "cinco" claramente saídico (a única forma achada, `ϯⲟⲩ`, está rotulada como faiúmica no
  Wiktionary), nem uma palavra interrogativa confirmada para "que/qual" — por isso NENHUMA frase do
  pacote é uma pergunta (igual o eslavo eclesiástico antigo resolveu o "sim" repetindo o verbo, aqui o
  Linu só se apresenta e espera que o aluno se apresente também, sem perguntar). "Obrigado"
  (`ϣⲉⲡϩⲙⲟⲧ`, literalmente "receber graça") É confirmado, mas só em BOHAÍRICO (com tabela de
  conjugação completa) — usado como única importação pontual desse dialeto dentro de um pacote
  majoritariamente saídico, documentado no cabeçalho de `vocabulario.ts`. A etimologia deste pacote
  aponta pra TRÁS (pro egípcio antigo/demótico), não pra um idioma moderno completo: o copta não tem
  descendente vivo rastreado no app — o árabe egípcio SUBSTITUIU o copta como língua falada, mas não
  desceu dele (são ramos diferentes do afro-asiático, egípcio × semítico) — apontar `arz` como
  cognato seria inventar parentesco que não existe.
- **Confiança**: alta pra quase todo o vocabulário e pra gramática (o padrão ⲡⲉ/ⲧⲉ, os possessivos
  ⲡⲁ-/ⲧⲁ-/ⲡⲉⲕ-/ⲧⲉⲕ-, o prefixo do presente — todos com tabela ou exemplo real do Wiktionary/Leiden,
  conferidos nesta rodada). Média pra "ϣⲉⲡϩⲙⲟⲧ" (confirmado, mas só em bohaírico, não saídico) e pras
  frases que aplicam o prefixo do presente confirmado (via `ⲙⲉ`) a outros verbos (`ⲟⲩⲱⲙ`, `ⲥⲱ`,
  `ⲛⲁⲩ`) pela mesma regra regular — generalização razoável, não uma forma inventada do nada, mas
  também não uma tabela própria conferida pra cada verbo.
- **Testes**: `npx tsx --test src/data/conteudo.test.ts src/services/aventura.test.ts
  src/data/sistemas-escrita.test.ts` (2044 testes, todos passando, incluindo os novos do `cop`).
  `npx tsc --noEmit` e `npx eslint src/data/cop/ src/data/idiomas.ts src/services/aventura.ts
  src/data/sistemas-escrita.ts src/data/tetos.ts` sem erros.

**Investigado e adiado: árabe clássico/corânico**. Sem bloqueio técnico de escrita (reaproveitaria o
abjad árabe, RTL e teclado já prontos em `ar`), mas com um bloqueio de FONTE real: o Wiktionary NÃO
separa "Classical Arabic" de "Arabic" como cabeçalhos L2 diferentes (ao contrário do francês antigo/
eslavo eclesiástico antigo/alto-alemão médio/castelhano medieval, que têm seção própria) — a própria
Wikipédia em inglês ("Classical Arabic") cita que "in the Arab world little distinction is made
between Classical Arabic and Modern Standard Arabic" e que essa distinção é sobretudo acadêmica
ocidental. Isso significa que, pra fazer esse pacote bem, cada palavra precisaria vir de uma fonte
diferente do padrão já usado (o Corpus Árabe Alcorânico, corpus.quran.com, licença GPL, com anotação
morfológica palavra por palavra do Alcorão) em vez do Wiktionary — um levantamento bem maior do que
"conferir o verbete". Fica como candidato pra uma rodada dedicada, com essa fonte alternativa em
mente, não descartado.

**Investigado e adiado: toscano antigo/dantesco**. Mesmo achado do latim medieval (abaixo): sem
código ISO 639-3 próprio (cai dentro do `ita`), com glottocode `fior1236` classificado como "Dialect"
de `ital1282` no Glottolog — ou seja, não segue o padrão direto dos cinco pacotes já feitos (que TÊM
código ISO 639-3 próprio: `fro`, `cu`, `gmh`, `osp`; o `cop` desta rodada tem ISO 639-3 `cop`
também). Como o próprio pedido desta rodada tratou o latim medieval como variação dentro do `la` por
um motivo parecido (mesma língua numa fase diferente, não uma língua-filha separada), o toscano
antigo provavelmente merece o MESMO tratamento — uma variação dentro do `it` — em vez de um pacote
`fior1236` novo. Mas essa é uma decisão de design que ainda não existe no código (ver o item do latim
medieval abaixo): não pesquisado a fundo (nenhuma palavra individual conferida no Wiktionary), porque
pesquisar vocabulário antes de ter clareza de ONDE ele vai morar no código arriscava trabalho
duplicado.

**Investigado e adiado: latim medieval/eclesiástico — achado de design, decisão pendente do Matheus**.
Investigado `src/data/la/` (vocabulario/curriculo/gramatica/historias/extras/index) e o tipo
`LanguagePack`/`LanguageVariant` em `src/data/types.ts` antes de escrever qualquer palavra, como
pedido. Conclusão: **não existe hoje, no código, nenhum precedente de "variação HISTÓRICA/temporal de
um idioma já existente"** — o único mecanismo de "variante" que já existe, `LanguageVariant`
(`variants?: LanguageVariant[]` em `LanguagePack`), é pra variantes REGIONAIS/nacionais da MESMA época
(romeno da Moldávia, português de Portugal — ver o comentário de `kind: 'variante' | 'dialeto'` em
`types.ts`, com a taxonomia do dono do app de 04/10/2026 sobre "variante" × "dialeto", nenhuma das
duas pensada pra "século diferente"). Encaixar o latim medieval ali seria espremer o tipo pra um uso
que ele não foi desenhado pra fazer (o seletor de variantes aparece ao lado de bandeira/país da MESMA
língua viva, não faz sentido pra uma fase histórica morta há séculos), e o latim clássico (`la`) no
app hoje já está ele mesmo incompleto (só A1, campo `incomplete.until: 'A1.2'`) — adicionar uma
segunda trilha inteira (vocabulário, gramática, histórias) dentro do mesmo pacote exigiria um campo
novo no tipo `LanguagePack` (algo como `historicalRegister?: {...}`, espelhando a forma do próprio
`LanguagePack` mas aninhado), que é uma decisão de arquitetura — não um puxão de pesquisa linguística.
Por isso NENHUMA palavra de latim medieval foi escrita nesta rodada: a pesquisa de vocabulário só
valeria depois que o Matheus decidir entre (a) estender `LanguageVariant` com um `kind: 'historico'`
e aceitar o uso forçado do seletor de variantes, (b) criar um campo novo dedicado a registros
históricos dentro do mesmo pacote, ou (c) tratar como pacote próprio mesmo sem ISO (usando um
glottocode, como o guarani antigo `oldp1258` e, em tese, os glottocodes já achados de árabe clássico/
toscano antigo) — rompendo com a orientação original desta rodada, mas alinhado ao único precedente
real que o app já tem pra "variedade sem ISO próprio". As três opções ficam documentadas aqui pra
quem decidir.

Candidatos restantes, sem mudança: nenhum — os sete candidatos da pesquisa original de 08/10/2026
(nórdico antigo, francês antigo, eslavo eclesiástico antigo, alto-alemão médio, castelhano medieval,
árabe clássico, copta) mais o toscano antigo e o latim medieval (que entraram depois) foram todos
revisitados ao menos uma vez. Os três que restam (árabe clássico, toscano antigo, latim medieval)
têm, cada um, um motivo específico e documentado pra não terem entrado ainda — nenhum é "esquecido".

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

### Idiomas minoritários/isolados: cantonês, tamazight, ainu, checheno, abcázio, burushaski e jeju feitos (08/10/2026, burushaski e jeju em 09/10/2026)
Tarefa: da lista "Idiomas naturais ainda não começados" (acima), pegar as línguas minoritárias
dentro de países que já têm outro idioma no app (tamazight, ainu, burushaski, checheno, abecásio,
jeju, cantonês) — **não** as línguas de "países sem idioma mais falado" (outro agente, em paralelo).
Confirmação prévia contra `src/data/idiomas.ts`: **o suruí do Pará (aikewára) já estava feito**
(código `mdz`, `AIKEWARA`) — a linha dele na lista "Idiomas naturais ainda não começados" acima está
desatualizada, igual ao padrão de ESTALE já apontado no topo daquela seção; não foi tocado de novo
aqui.

**Feito, pacote A1 completo** — **cantonês** (`yue`, `src/data/yue/`): 91 palavras (9 categorias),
4 tópicos de gramática, 2 unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 2
etimologias, 3 textos da comunidade, diário e shadowing. Registrado em `idiomas.ts` (família
Sino-tibetano, ramo Yue, ao lado do mandarim/birmanês — nenhuma família nova, nenhum teste
quebrado). Não precisou de `onde-se-fala.ts`/`idiomas-mundo.ts`/`aventura.ts`: o CLDR já tinha uma
linha pra `yue` (Hong Kong oficial, Guangdong/Macau falada), então o mapa e o destino da aventura
resolvem sozinhos pelo fallback `fromCldr`. Fontes: Wikipédia em inglês ("Cantonese", "Cantonese
grammar", "Hong Kong Cantonese"), Wikcionário em inglês (palavra por palavra, com jyutping — Linguistic
Society of Hong Kong), Omniglot ("Cantonese phrases", "Cantonese numbers", "Cantonese kinship"),
consultados em 08/10/2026. Achado de verdade, não invenção: o português "chá" vem do cantonês 茶
(caa⁴), não do mandarim — o Wikcionário em português confirma (comércio de chá português passava por
Macau/Guangdong); isso entrou como etimologia no pacote.

**Achado técnico pra quem adicionar o próximo idioma com romanização por tons numéricos (jyutping,
pinyin sem diacrítico, etc.)**: `isGrammarNote` (`src/services/word-images.ts`) trata qualquer
parêntese com dígito como "sentido" (pra não apagar notas tipo "quarto (1/4)"), então "água (seoi2)"
NUNCA perde o parêntese e a foto do Wikimedia Commons nunca bate — só o pictograma/emoji aparecem.
Resolvido nos arquivos do cantonês escrevendo o tom em algarismo sobrescrito (seoi², não seoi2):
`\d` não casa com ⁰–⁹ Unicode, então o parêntese volta a ser tratado como nota fonética e a foto
bate de novo (testado: foto bateu em 10 das 91 palavras do pacote, ante 0 com dígito comum). Não
mudei `isGrammarNote` (função compartilhada por ~170 idiomas) — o sobrescrito é só tipográfico, o
valor do tom é o mesmo.

**Feito nesta rodada, pacote A1 completo** — **tamazight padrão marroquina** (`zgh`,
`src/data/zgh/`): 54 palavras (7 categorias — menos que o cantonês de propósito: o dicionário livre
documentado em inglês/português pra essa língua é bem mais escasso, então o tamanho do pacote seguiu
a fonte real, não uma meta de contagem), 4 tópicos de gramática, 2 unidades/4 lições+2 provas, 2
histórias interativas, 1 cenário, 5 etimologias, 3 textos da comunidade, diário e shadowing.
Registrado em `idiomas.ts` (família Afro-asiático, ramo Berbere — família já existia, nenhum teste
quebrado) e em `tetos.ts`/`TETO-DOS-IDIOMAS.md` (teto C1: Wikipédia própria `zgh.wikipedia.org` com
12.259 artigos e 46 editores ativos, confirmado via `zgh.wikipedia.org/wiki/Special:Statistics` em
08/10/2026 — língua oficial no Marrocos desde 2011, com ensino básico, mas acervo online médio).
Não precisou de `onde-se-fala.ts`/`idiomas-mundo.ts`/`aventura.ts`: o CLDR já tinha uma linha pra
`zgh` (oficial no Marrocos), então o mapa e o destino da aventura resolvem sozinhos.

A pesquisa anterior (parágrafo de baixo, de uma sessão passada) tinha levantado a maior parte do
conteúdo, mas **cada fonte foi reconferida do zero nesta sessão** (pedido explícito: nunca copiar
pesquisa antiga sem checar de novo) — e isso corrigiu alguns detalhes: "nekkni" (nós) na verdade é
"nekʷni" no Wikcionário em inglês (cabila); "tasliyt" é "tasli-t"; "i/ay" (sim) não bate com o
Wikivoyage, que dá "ih" (ⵉⵀ); a preposição "ɣer/ɣur" pra posse não foi confirmada em nenhuma fonte
desta sessão (ficou de fora) — em vez dela, "dari" (eu tenho, lit. "em mim") está atestado de verdade
no manuscrito de Ibn Tunart (Wikipédia em inglês, "Ibn Tunart", lista de palavras do tashelhit). A
negação "ur...ʃa" bateu certinho com um exemplo de verdade ("uriffiɣ ʃa", "ele não saiu", Wikipédia em
inglês "Central Atlas Tamazight grammar"). Achado novo: a partícula "d" tem duas funções — "e"
(conjunção, que muda a palavra seguinte pra forma de anexação: aɣrum/pão vira uɣrum depois de "d") e
marcador de predicado sem verbo "ser" ("d izem", "é um leão", Encyclopédie berbère via
openedition.org) — usada pra todas as frases de apresentação do pacote ("Nekk, d Linu", "eu sou o
Linu"). Vocabulário com fonte de verdade (Wikcionário em inglês/francês/russo, verbete por verbete, a
maioria em cabila ou tarifit — pan-berberes, não exclusivos do padrão marroquino, nota já dada no
cabeçalho de cada arquivo do pacote): aman (água), aɣrum (pão), aydi (cão), yemma (mãe), baba (pai),
aberkan (preto), awraɣ (amarelo), azeggaɣ (vermelho), azegzaw (verde/azul), ameqqran/amecṭuḥ
(grande/pequeno), lmed (aprender, possível empréstimo do púnico/hebraico bíblico), ḥemmel (gostar
de, empréstimo do árabe). Fontes gerais (todas consultadas de novo em 08/10/2026): Wikipédia em
inglês ("Standard Moroccan Tamazight", "Tifinagh", "Berber languages", "Tashelhit", "Central Atlas
Tamazight grammar", "Ibn Tunart"), Wikcionário em inglês/francês, Wikivoyage ("Berber phrasebook").
Caiu da lista anterior por falta de confirmação nesta sessão: "amellal" (branco, só achado como
sinônimo regional de outra palavra tarifit, confirmação fraca demais) e a preposição ɣer/ɣur pra
posse (substituída por "dari", de fonte mais sólida).

**Feito numa rodada seguinte (agente separado, mesma data), pacotes A1 completos** — **checheno**
(`ce`, `src/data/ce/`) e **abcázio** (`ab`, `src/data/ab/`), os dois priorizados nessa rodada por
pesquisa prévia confirmando fonte real suficiente (burushaski e jeju, pesquisados primeiro, mostraram
fonte mais fraca ou arriscada — ver o bloco deles, abaixo). Juntos abriram a família "Caucasiano do
norte" em `groupByLineage` (`src/data/idiomas.ts`, entre "Austronésio" e "Construída", exatamente como
a nota anterior previu) e no teste "seletor agrupa por família e ramo" (`conteudo.test.ts`) — os dois
dividem o rótulo do CLDR, mas são famílias diferentes de origem (checheno é nakh-daguestanês/caucasiano
do NORDESTE; abcázio é abecásio-adigue/caucasiano do NOROESTE), registradas com `branches` distintos.

- **Checheno** (`ce`, `src/data/ce/`): 39 palavras (6 categorias), 4 tópicos de gramática, 2
  unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 4 etimologias, 3 textos da
  comunidade, diário e shadowing. Teto C1 em `tetos.ts`/`TETO-DOS-IDIOMAS.md`: achado de risco que
  vale registrar — a Wikipédia chechena (`ce.wikipedia.org`) tem 868.015 "artigos", mas só 100
  editores ativos (confirmado via `Special:Statistics` em 08/10/2026); a proporção tão desigual é
  sinal de robô (mesmo padrão já visto no árabe egípcio e no ladino das Dolomitas), então o teto não
  seguiu a contagem de artigos — seguiu o checheno ser língua oficial da República da Chechênia, com
  imprensa, escola e o dicionário acadêmico de Nichols e Vagapov (Chechen-English and English-Chechen
  Dictionary, Routledge, citado pelo Wikcionário e pela página de gramática da UC Berkeley). Fontes de
  conteúdo: o curso livre do Wikibooks em inglês ("Chechen/Lesson 1" e "Chechen/Lesson 2" — as ÚNICAS
  duas lições já escritas desse curso; "Lesson 3" em diante segue como "Coming Soon" desde que foi
  criado), a Wikipédia em inglês ("Chechen language") e o Omniglot (números), todas consultadas em
  08/10/2026. Achado de gramática de verdade, não inventado: o verbo "ser" (ву/ю/ду/бу) concorda com a
  CLASSE do substantivo que vem depois na frase, não com o gênero de quem fala ("Со кIант ву", eu sou
  um rapaz, usa "ву" porque "кIант" é classe 1 — a mesma pessoa diria "Со йоI ю" se fosse moça); e o
  verbo "saber" (хаа) pede o sujeito no caso dativo ("суна", não "со"), diferente da maioria dos
  outros verbos. A tabela completa da cópula por pessoa/classe (со/хьо/иза → ву ou ю; тхо/шу → ду;
  уьш → бу) veio inteira do Wikibooks, sem precisar inferir nenhuma célula.

- **Abcázio** (`ab`, `src/data/ab/`): 41 palavras (9 categorias), 4 tópicos de gramática, 2
  unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 4 etimologias, 3 textos da
  comunidade, diário e shadowing. Teto C1 em `tetos.ts`/`TETO-DOS-IDIOMAS.md`: Wikipédia própria
  pequena mas de verdade (`ab.wikipedia.org`, 6.745 artigos, 33 editores ativos, sem sinal de robô),
  somada ao abcázio ser língua oficial da Abecásia (reconhecimento internacional parcial), com
  imprensa e escola. Fontes: o roteiro de frases do Wikivoyage em inglês ("Abkhaz phrasebook" —
  saudações, números, cores, comida, dias/meses), a tabela de pronomes do Wikcionário em inglês
  (cruzada com a lista de Campbell no "Compendium of the World's Languages", via o Rosetta Project),
  verbetes individuais do Wikcionário em russo (conferidos um a um: "ан"/mãe, "аб"/pai, "аӡы"/água,
  "аҩны"/casa têm definição própria; "амца"/fogo é inferida de "афымца", eletricidade, que o
  Wikcionário deriva de "афы", relâmpago, + "амца") e o capítulo de Chirikba sobre formação de
  palavras no abecásio (word-formation handbook da de Gruyter — deu a distinção de gênero em
  "уара"/"бара" e o fato de a língua quase não ter casos gramaticais). Achado de cautela que vale
  registrar: os pronomes de 3ª pessoa (ele/ela/eles) ficaram de FORA do pacote porque a tabela de
  Campbell e a do Wikcionário discordam na forma exata (jara/ya(ra), dara/da(ra)) — sem uma terceira
  fonte pra desempatar, essas três palavras não entraram, em vez de arriscar ensinar a forma errada
  (mesmo critério já usado pro "ɣer/ɣur" do tamazight). Também não usei palavras do capítulo de
  Chirikba que só vinham em transliteração científica sem checar a grafia em cirílico de verdade —
  uma delas ("апа", que o capítulo dava como "filho" nessa composição) na verdade significa "fino,
  magro" no Wikcionário em russo, confirmando que a cautela era necessária.

Bandeira do abcázio: a Abecásia não tem bandeira de consenso internacional (reconhecimento parcial),
então usei o mesmo mecanismo já aplicado ao curmanji/Curdistão (☀️) — um emoji que representa o
emblema central da bandeira abecásia de verdade (a mão aberta branca, ao lado de 7 estrelas), em vez
da bandeira da Geórgia (que já é a bandeira do pacote `ka`, geórgio — reutilizá-la pro abcázio
confundiria os dois no seletor, além de ser uma escolha política, já que a Abecásia não se considera
parte da Geórgia).

**Feito nesta rodada, pacote A1 completo** — **ainu** (`ain`, `src/data/ain/`), confirmando que era
mesmo "a próxima mais fácil da fila" como a nota anterior apostava: 42 palavras (7 categorias), 4
tópicos de gramática, 2 unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 5 etimologias,
3 textos da comunidade, diário e shadowing. Registrado em `idiomas.ts` (família "Língua isolada", ao
lado do tikuna/basco/mapudungún — já existia em `groupByLineage`, nenhum teste quebrado) e em
`tetos.ts`/`TETO-DOS-IDIOMAS.md` (teto B1: sem Wikipédia própria — uma proposta de 2004 nunca saiu do
papel, conferido tentando abrir `ain.wikipedia.org` e buscando o pedido no Meta-Wiki —, mas com
gramática de referência (Tamura), dicionários (Batchelor e outros) e um corpus real de textos: os
épicos yukar, transcritos por Chiri Yukie em 1923 e por Imekanu em 134 cadernos, com tradução pro
japonês (Kindaichi, 1959–1966) e pro inglês (Philippi, 1979) — mais rico que o "corpus pequeno"
típico do B1, mas sem imprensa nem ensino de Estado que justificasse C1). Não precisou de
`onde-se-fala.ts`/`idiomas-mundo.ts`/`aventura.ts`: o ainu não tem entrada no CLDR (poucos falantes
demais), mas o destino da aventura resolve pela bandeira do próprio pacote (🇯🇵, Japão — mecanismo já
existente em `destinoDoIdioma()`, usado antes pro mirandês/manchu).

Achados de pesquisa que vale registrar: o ainu é SOV como o japonês, mas sem parentesco comprovado
com ele (só empréstimos nos dois sentidos); marca pessoa no verbo por prefixo (ku-/e-, 3ª pessoa sem
prefixo) e não por pronome livre sozinho; distingue "nós" com e sem quem ouve (ciutari/anutari, uma
categoria que o português não tem); o verbo "ser" (ne) fecha a frase, mas palavras de estado como
"pirka" (bom, bonito) já são verbos completos, sem precisar de "ne" depois. A etimologia de "kamuy"
(deus/espírito) tem um debate de verdade no Wikcionário em inglês sobre se o japonês "kami" vem do
ainu ou o contrário. Duas palavras (cise, "casa", e nupuri, "montanha") não têm verbete no
Wikcionário em inglês ainda — confirmadas por fontes secundárias confiáveis (biblioteca de Hokkaido,
geoparque de Apoi, corpus acadêmico valpal.info) em vez de inventadas. Fontes gerais: Wikipédia em
inglês ("Ainu language", "Ainu grammar"), Wikcionário em inglês (verbete por verbete, com exemplo de
frase sempre que havia um — boa parte do vocabulário usa frases 100% atestadas, não construídas),
Omniglot ("Ainu numbers"), todas consultadas em 08/10/2026.

- **Burushaski** (Paquistão/Caxemira) e **jeju** (Coreia do Sul): família "Língua isolada"
  (burushaski) e "Coreânico" (jeju) já existem em `groupByLineage`, nenhum teste quebraria. Pesquisa
  de verdade feita numa rodada seguinte (mesma data, antes de decidir priorizar checheno/abcázio) —
  ficaram de fora por falta de fonte confiável, não por falta de tempo:
  - **Burushaski**: a lista de Swadesh do Wikcionário em inglês (`Appendix:Burushaski_Swadesh_list`,
    122 itens, a maioria preenchida) é a única fonte de vocabulário em inglês fácil de achar — mas
    vem só em escrita perso-árabe com transliteração cheia de diacríticos raros (ṭ, ġ, c̣, ẏ…), sem
    NENHUM exemplo de frase pronto, e a gramática de referência (Berger, em alemão, três volumes) não
    tem resumo em inglês/português acessível nesta sessão. Sem frase atestada nenhuma pra montar
    lições ou histórias sem inventar — a língua tem 5 classes nominais e marca ergatividade no verbo
    (fonte: resumos da Wikipédia), mas sem exemplo de verdade pra ensinar isso direito.
  - **Jeju**: criticamente ameaçada (UNESCO, desde 2010; só 5–10 mil falantes, todos com mais de 70
    anos). A Wikipédia em inglês ("Jeju language") dá vocabulário de verdade, mas espalhado dentro da
    explicação de pontos gramaticais específicos (ex.: "쉐" "swe", gado, só aparece pra ilustrar
    composição com "궤기", carne), não como lista pronta — junto com os números do Omniglot, dá uns 15
    itens confiáveis, pouco pra um pacote A1 (os outros pacotes feitos nesta rodada têm de 39 a 54).
    O dicionário falante de Jeju (Cheng e Harrison, Living Tongues Institute,
    `talkingdictionary.swarthmore.edu/jeju`) e o dicionário oficial da província (lançado online em
    2024, 20 mil verbetes) são as fontes certas pra aprofundar — mas pedem uma sessão de pesquisa
    própria, vasculhando verbete por verbete, em vez de uma busca geral.
  Os dois continuam bons candidatos pra uma rodada futura com orçamento de pesquisa dedicado a cada
  um (não dividido entre quatro candidatos como nesta).

**Atualização de 09/10/2026 — burushaski e jeju implementados, pacotes A1 completos**: a pesquisa
anterior (parágrafo acima) tinha orçamento dividido entre quatro candidatos e usou só a primeira
busca de cada um; com uma sessão dedicada só a esses dois, uma busca mais profunda achou fonte real
suficiente pros dois — a conclusão de "sem fonte confiável" acima estava errada por pesquisa
insuficiente, não porque a fonte não existisse.

- **Burushaski** (`bsk`, `src/data/bsk/`): 49 palavras (8 categorias), 4 tópicos de gramática, 2
  unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 5 etimologias, 3 textos da
  comunidade, diário e shadowing. Registrado em `idiomas.ts` (família "Língua isolada", branch
  `Burushaski` — já existia, nenhum teste quebrado) e em `tetos.ts`/`TETO-DOS-IDIOMAS.md` (teto A2:
  vocabulário e gramática reais, mas sem imprensa, sem status oficial e quase sem frase de conversa
  pronta). O que a pesquisa anterior não tinha achado: o dicionário comparativo ANOTADO de G.
  Starostin ("Annotated Swadesh wordlists for the Burushaski group",
  `starlingdb.org/new100/bur.pdf`, abril de 2013) organiza e cita palavra por palavra as duas
  gramáticas de referência de Hermann Berger (`Das Yasin-Burushaski`, 1974; `Die
  Burushaski-Sprache von Hunza und Nager`, 3 vols., 1998, ambas em alemão) — cerca de 110 itens de
  Swadesh em dois dialetos (Yasin e Hunza-Nager), com nota de fonte e comentário filológico pra cada
  palavra, tudo em inglês. O artigo da Wikipédia em inglês ("Burushaski") também tinha muito mais
  conteúdo gramatical ATESTADO do que a pesquisa anterior registrou: paradigma completo de
  numerais (1 a 100, com sistema vigesimal a partir do 20), prefixos de posse em substantivos de
  parentesco (i-mi/mu-mi/u-mi, "a mãe dele/dela/deles"), prefixos de pessoa do OBJETO no verbo
  (i-phus-i-m-a, "eu ato ele"), classes nominais com exemplo de uma mesma raiz mudando de classe
  (sal em pedaços × sal em pó) e formação de plural. Pra cortesia (saudação, "obrigado", "sim",
  "não"), nenhuma gramática acadêmica ajudou — a fonte foi o roteiro do Wikivoyage em inglês
  ("Burushaski phrasebook"), um roteiro incompleto (várias linhas em branco, como o próprio
  Wikivoyage avisa), mas usado com mais confiança do que um roteiro de viagem normal porque os
  NÚMEROS e as CORES desse mesmo roteiro batem, item por item, com os valores academicamente
  atestados por Berger — e "sim" (awa) é confirmado de forma independente pela própria tabela de
  tradução do Wikcionário para "yes" (mesmo padrão de fonte já aceito no abcázio). Fontes tentadas e
  descartadas, registradas pra não repetir a busca: o dicionário Burushaski-Hunza do Webonary (3.649
  verbetes, atrás de um desafio do Cloudflare que bloqueou até URLs de verbete específicas), o site
  comunitário burushaski.io (SPA em JavaScript, sem conteúdo no HTML estático), a coleção da UNT
  Digital Library (domínio inacessível nesta sessão) e burushaskilanguage.com (domínio expirado,
  hoje uma página de estacionamento). Achado de cautela: o roteiro do Wikivoyage rotula "Hello." com
  duas frases emendadas sem separação clara ("Ba bila" e "Salam o alaykum") — só a segunda é
  claramente um empréstimo árabe; a primeira entrou no pacote como a saudação informal nativa
  ("Bebila?"), por ser consistente com o uso de "bila" (é, está) em outras perguntas do mesmo roteiro
  (how are you, what's your name), não por tradução isolada.
- **Jejuense** (`jje`, `src/data/jje/`): 46 palavras (10 categorias), 4 tópicos de gramática, 2
  unidades/4 lições+2 provas, 2 histórias interativas, 1 cenário, 5 etimologias, 3 textos da
  comunidade, diário e shadowing. Registrado em `idiomas.ts` (família "Coreânico", branch `Jeju` —
  branch novo, diferente do branch `Coreano` do pacote `ko`, pra não misturar os dois no seletor;
  família já existia, nenhum teste quebrado) e em `tetos.ts`/`TETO-DOS-IDIOMAS.md` (teto B1: sem
  Wikipédia própria, sem imprensa nem ensino formal, mas com o primeiro livro em inglês dedicado à
  língua — Yang, Yang & O'Grady, University of Hawai'i Press, 2020 — e um dicionário falante real
  com áudio, mesmo critério do ainu). Classificação: o Ethnologue e o Glottolog já dão ao jejuense um
  código próprio (ISO 639-3 `jje`, Glottolog `jeju1234`), separado do coreano (`kore1280`) dentro da
  família coreânica — por isso entrou como pacote à parte, não variante do coreano; o pacote `ko`
  já tinha essa previsão registrada no `cognateNote` ("a família inclui só o coreano e o jejuense"),
  escrita antes desta sessão. O que a pesquisa anterior não tinha achado: o Jeju-eo Talking
  Dictionary (Cheng e Harrison, Living Tongues Institute + Swarthmore College, 2014,
  `talkingdictionary.swarthmore.edu/jeju`) tem 218 verbetes, não só os ~15 que a busca geral da
  sessão anterior achou espalhados na Wikipédia — cada um foi aberto e conferido individualmente
  pelo número do verbete (`?entry=N`), não copiado de uma lista pronta; depois de tirar duplicatas,
  entradas com erro de pareamento palavra/tradução no próprio banco de dados do dicionário (alguns
  números trocados) e palavras que usam a vogal histórica "ㆍ" (arae-a, grafada "ㄷ'ㄹ" etc. no site,
  sem compor um bloco de hangul de verdade em fonte comum), sobraram as 46 usadas no pacote. A
  página de gramática do curso de linguística de campo da Swarthmore
  (`wikis.swarthmore.edu/ling073/Jeju/Grammar`, que resume o livro de Yang, Yang & O'Grady) deu
  dezenas de frases REAIS com partículas de caso, sufixos de tempo verbal e o sufixo de ênfase
  "-마씸"/"-마씀" (sem equivalente direto no coreano padrão) — material de gramática bem mais rico do
  que o "~15 itens" relatado antes. Pra saudação, "혼저옵서예!" (a saudação de boas-vindas mais
  conhecida da ilha, citada em mais de uma fonte independente, incluindo o roteiro do Wikivoyage
  sobre a ilha) resolveu o que antes não tinha fonte nenhuma. "Obrigado" (고맙수다) é a única peça
  CONSTRUÍDA do pacote, não copiada de um dicionário: raiz herdada do coreano ("고맙-") + o sufixo
  "-수다" (atestado como terminação declarativa honorífica em várias frases da página de gramática da
  Swarthmore) — mesmo tipo de construção já aceito no checheno ("Дика ду"). O dicionário oficial da
  província (2024, 20 mil verbetes) citado na pesquisa anterior não foi testado nesta sessão (sem
  link direto encontrado) — candidato bom pra aumentar o vocabulário numa rodada futura.

### Git
Desde 08/10/2026, por pedido do Matheus: só dar `git push` pra master (dispara o deploy automático
do GitHub Pages) quando uma rodada de trabalho estiver fechada de verdade — mesclar localmente sem
pressa, mas não publicar a cada merge pequeno.
