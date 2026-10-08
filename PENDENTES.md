# Pendências (atualizado em 08/10/2026)

Este arquivo lista só o que falta fazer ou decidir, e referência útil pra quem continuar o
trabalho. O que já foi implementado e testado não entra aqui — está no `git log`. Leia o
`AGENTS.md` antes de pegar qualquer item.

## Pendente de verdade

### Estado da sessão em 08/10/2026 (fim de tarde/noite) — ponto de retomada
Rodada grande de agentes paralelos, tudo mesclado localmente na master (sem push até agora; **o
Matheus pediu push agora por causa do limite de tokens da sessão** — ver se já foi publicado antes
de confiar nisto). Resumo rápido do que mudou nesta rodada (detalhes em cada seção/no `git log`):
fotos do vocabulário regeradas (1.119, 512px, sem corte); curso de silbo gomero (tipo "canal");
alfabeto completo do romeno (31 letras, grupo novo "internacional"); fix do Linu pixel art (cachecol
+ barriga de perfil); PENDENTES.md reorganizado (este processo); varredura-visual do seiabras-59
(ortografia + conserto das aspas); curso de volapük; artigo definido certo pro país no tutorial
("na Romênia", não "em Romênia"); pontuação dos idiomas (aba Sistemas de escrita + lições es/ja);
botão informativo nos cards de idioma do tutorial (família, região, escrita, falantes — **verificação
visual via Playwright ainda pendente**, só tsc/eslint confirmados).
**Agentes que podem ainda estar rodando/sem mesclar quando a sessão retomar**:
- `destino-conlangs` (worktree `.claude/worktrees/destino-conlangs`): corrige `non`/`vo`/`tok`/`jbo`/
  `io`/`tlh` sem país na aventura (bug achado pelo seiabras-59, teste `aventura.test.ts` falhando).
  Conferir se terminou e mesclar.
- Agente de imagens do seiabras-59 (branch `varredura-visual`, não é meu): bloco 1 (resolvedor de
  imagem única por idioma + WordCard) pronto, bloco 2 (mais acervos de ícones MIT/ISC/Apache) em
  andamento do lado dele.
**Pedidos do Matheus ainda NÃO iniciados nesta sessão** (chegaram nos últimos minutos, token
acabando antes de conseguir despachar):
1. **Fala por IA via IPA**: decisão tomada — manter voz nativa quando houver gravação real; quando
   não houver, usar leitura via IPA (não TTS genérico), principalmente pra diferenciar
   sotaque/dialeto nas telas que já têm IPA documentado por variante (`Accent.features` em
   `sotaques.ts`, ex. `pt/sotaques.ts`) — nunca inventar IPA novo pra palavra sem fonte. Pilotar com
   romeno e russo (IPA mais maduro, recomendação da pesquisa anterior), referência de adaptação:
   `classical-cat-dh-lab/espeak-ng-wasm` (mapping IPA→Kirshenbaum por idioma). Depois disso, por
   ordem explícita do Matheus: 2) variações medievais, 3) idiomas mais falados dos países sem ele.
   **Atualização 08/10/2026: piloto ro/ru iniciado e implementado — ver a seção "Leitura por IPA
   (sotaque/dialeto sem gravação de nativo) — piloto ro/ru implementado" mais abaixo neste arquivo.**
2. **Mapa dos idiomas artificiais** (pedido novo, ainda sem agente despachado): um mapa próprio (não
   o mapa-mundi real) pra idiomas artísticos de ficção (Terra Média do Senhor dos Anéis pra
   quenya/sindarin, Pandora de Avatar pra na'vi — mundo fictício de cada obra) e, pra auxlangs
   terrestres tipo esperanto/volapük/ido/interlíngua/lojban/toki pona, um mapa baseado em
   congressos/comunidades reais (ex. Congresso Universal de Esperanto, cidade sede que muda todo
   ano) — o Linu "andaria" de cidade-sede em cidade-sede, ou mecânica parecida. Ainda não desenhado,
   nem decidido onde entra na UI (substitui a "aventura" desses idiomas? é uma tela nova?).
3. **Auditoria do tutorial**: feita, ver seção própria mais abaixo ("Auditoria do tutorial × app,
   08/10/2026").

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
- **Minicursos de línguas artificiais mais difíceis de documentar** (avaliar viabilidade antes de
  prometer, mesma régua de "nunca inventar"): Huttese (gibberish fragmentário, tipo o caso já
  resolvido dos minions), Heptapod B (semasiográfica e não-linear, não falada — pode nem caber no
  formato do app), Kēlen (sem verbos), aUI, Blissymbols (sistema de símbolos sem forma falada).
  Láadan (Suzette Haden Elgin) é candidata forte, com dicionário/gramática publicados.
- **Tsevhu**: pedido de gramática nova (frases subordinadas tipo "filhotes...") pro conlang Koa
  Vhukva já no app — como a regra do projeto é nunca inventar texto em Tsevhu, precisa ser
  verificado/autorizado pelos autores antes de implementar.

### Trabalho em andamento, ainda não mesclado
- **Pontuação dos idiomas**: agente rodando na branch `pontuacao-idiomas`, ainda sem commits novos
  além do que já está na master — não mesclar nada dali até a rodada fechar.

### Idiomas artificiais: fila restante
Já têm curso de verdade no app: esperanto, toki pona, lojban, volapük, interlíngua, ido (`io` —
código ISO 639-1 real do ido, não "ido"), klingon (`tlh`), solresol, na'vi, alto-valiriano, quenya,
lingua franca nova (elefen), silbo gomero (tipo "canal"), Basic English (língua controlada).
**A segunda leva pedida pelo Matheus em 08/10/2026 (7 cursos em paralelo) está completa**: ido,
klingon, toki pona, lojban, interlíngua e volapük feitos; simlish pesquisado e decidido que NÃO
vale minicurso (ver referência abaixo, gibberish sem gramática oficial + áudio sem licença livre).
Ainda faltam, por ordem de dificuldade crescente de fonte: novial, interslavo (medžuslovjansky),
ithkuil, sindarin, dothraki, lang belta, mando'a — todos com material documentado o suficiente pra
tentar. Os mais arriscados estão na seção acima (Huttese, Heptapod B, Kēlen, aUI, Blissymbols,
Láadan).

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
- **Albanês — variantes como "sotaque", não pacote novo**: gheg, arbëresh, arvanítico são
  mutuamente inteligíveis com o albanês padrão (`sq`) já no app — ideia de nota dentro do pacote
  existente, não pacote separado. Não começado.

### Alfabeto
- **Alfabeto latino completo**: só o romeno (`ro`) tem hoje os 3 grupos (`igual`/`falsa`/
  `internacional`) do alfabeto oficial inteiro em `ALFABETO_LATINO_BASE`
  (`src/services/alfabeto-auto.ts`). Sueco, norueguês, dinamarquês, islandês, estoniano e espanhol
  continuam só com as letras extras (`'nova'`), sem o alfabeto completo — falta confirmar numa fonte
  real (Wikipédia ou gramática de referência), pra CADA idioma, se existe letra "só uso
  estrangeiro/empréstimo" antes de estender (não supor: no romeno a suposição inicial sobre o X
  estava errada). A função `alfabetoLatinoCompleto` já é genérica, só faltam os dados verificados.
- **Cursivo**: árabe já ensina as 4 formas conectadas de cada letra. Faltam hebraico, russo (cirílico
  cursivo) e outras escritas cursivas a identificar.
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

### Features grandes, não começadas ou parciais
- **Jogos do conhecimento**: só damas está pronto. Faltam xadrez, quoridor/bloqueio, octi/octógono
  fantástico e abalone. Fica ao lado de línguas artificiais no Perfil e depois de "tipos de línguas"
  em Cultura.
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
- **Patrimônios da Humanidade (UNESCO) no mapa**: já cobre ROU, MDA, ESP, ITA, FRA, RUS, JPN, PRT,
  SWE, ISL, EST, LVA, LTU, ARG, CHL, COL, CUB, GBR, KEN, MEX, PER, TZA. Países do app ainda sem
  patrimônios cadastrados ficam pra uma rodada futura, baixa prioridade.
- **Reformulação "Antártica selvagem" — pontas sem fechar**: sons ambiente específicos por região de
  destino (fiordes na Noruega, vales na Romênia…) e paisagens específicas por região não feitos.
  Moradias do desembarque faltando pra pt, ru, sv, fr, nb, da, is, fi, et, fo (só romena, andaluza e
  toscana existem) — a cota de geração no Canva acabou; os pedidos (com a barraca como referência)
  estão prontos pra repetir, mas **pausado até o Matheus pedir de novo** (mesma régua desde
  03/10/2026).

### Revisão de conteúdo pendente
- **Histórias "de história em história"**: o Linu, escrito em 3ª pessoa, às vezes "decide" por conta
  própria em vez de esperar a escolha do jogador. Decisão já tomada: não reescrever tudo pra 2ª
  pessoa, só ajustar os trechos em que isso fica mais forte. Ainda não começado: precisa de uma
  passada por `historias.ts` de cada idioma procurando esses trechos específicos.
- Revisar `la`, `oc`, `en`, `id` e `vi` como já foi feito com `gl`, `ast` e `sc`. Há dúvida aberta
  sobre a etimologia de «nai» < matre(m), no galego.
- Suaíli: ~2.400 palavras, meta ~4.000. Próximos lotes em `src/data/sw/vocab-17.ts` e seguintes.

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
