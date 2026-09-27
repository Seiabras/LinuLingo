# LinuLingo 🐧

![LinuLingo: aprenda idiomas com o Linu](assets/logo/linulingo-banner.png)

App de idiomas (React Native + Expo) que junta o melhor de Duolingo, Busuu, Rosetta Stone, Air Learn, LingoDeer, Drops, Speakly, Babbel e Mondly: trilha CEFR, repetição espaçada (SM-2), cultura e história antes da prática, imersão sem tradução, conversação com registro social e correção pela comunidade. Funciona offline: tudo fica num banco SQLite no aparelho, e na web o app pode ser instalado e aberto sem internet.

**Experimente no navegador:** https://seiabras.github.io/LinuLingo/

O mascote é o **Linu**, um pinguim-de-barbicha (*Pygoscelis antarctica*).

## Idiomas

| Idioma | Família › ramo | Estado |
| --- | --- | --- |
| 🇷🇴 Romeno | Indo-europeu › Itálico › Românico › Românico oriental | **disponível** |
| 🇷🇺 Russo | Indo-europeu › Balto-eslavo › Eslavo › Eslavo oriental | **disponível** |
| 🇪🇸 Espanhol | Indo-europeu › Itálico › Românico › Ibero-românico | **disponível** |
| 🇮🇹 Italiano | Indo-europeu › Itálico › Românico › Ítalo-dálmata | **disponível** |
| 🇬🇧 Inglês | Indo-europeu › Germânico › Germânico ocidental | em breve |
| 🇫🇮 Finlandês | Urálico › Fínico › Fínico setentrional | em breve |
| 🇪🇪 Estoniano | Urálico › Fínico › Fínico meridional | em breve |
| 🇯🇵 Japonês | Japônico | em breve |
| 🇰🇷 Coreano | Coreânico | em breve |

O seletor do Perfil agrupa os idiomas por família e ramo linguístico.

## Linguística (aba Gramática › Por área da língua)

- **As 7 áreas da língua** (fonética, fonologia, morfologia, sintaxe, semântica, pragmática, estilística): o que cada uma estuda, com exemplos do português e palavras-chave, e como ela funciona no idioma estudado (com exemplos em áudio e IPA, os tópicos de gramática da área e mini-quiz).
- **Quadro interativo do IPA**: cada símbolo com como o som é feito e exemplos falados em português, espanhol, romeno, russo e inglês.
- **Ferramentas e normas**: o IPA e a transcrição; códigos ISO 639, ISO 15924 e BCP 47; transliteração e romanização (cirílico, pinyin, Hepburn, coreano); glosas interlineares (regras de Leipzig); o Quadro Europeu (CEFR).
- **Grandes temas**: famílias de línguas, tipologia, sistemas de escrita, mudança linguística, sociolinguística, aquisição de segunda língua e o português entre as línguas do mundo.

## Sotaques e dialetos (aba Cultura)

Cada idioma mostra os seus jeitos regionais de falar (18 no espanhol, 5 no romeno, 8 no russo): o que marca cada um, exemplos com voz e transcrição, palavras típicas e um **minimapa com as regiões** onde se fala (subdivisões ISO 3166-2). No mapa-múndi, o cartão do país lista os sotaques de lá, e tocar numa região mostra o sotaque daquele lugar. Formato: `Accent` em src/data/types.ts, um arquivo `sotaques.ts` por idioma.

## O que tem no espanhol

- **Variante padrão: América Latina** (neutra, com «ustedes»), e mais duas para escolher na aba Cultura: **Espanha** (vosotros, [θ] no «z», 46 diferenças de vocabulário, 3 histórias em Madri, no Caminho de Santiago e nas Fallas) e **Rio da Prata** (voseo, «ll» chiado, 39 diferenças, 3 histórias em La Boca, Montevidéu e Punta Tombo). A variante escolhida troca também a **voz** (es-MX, es-ES, es-AR) e a **IPA**.
- **Trilha CEFR** em 15 subníveis, 60 lições, cada card comparando com o português: heterogenéricos (el viaje, la leche), falsos amigos, ser × estar, «muy × mucho», o «lo» neutro, pronomes átonos, subjuntivo com «cuando», voseo, futuro do subjuntivo nas leis.
- **Falsos amigos** («🪤 Falsos amigos» em Mais práticas): 88 armadilhas (exquisito, embarazada, oficina, polvo…) com o que a palavra quer dizer, o que o brasileiro pensa e como se diz o que ele queria; jogo de 10 perguntas que repete as que você erra.
- 3.482 palavras (heterogenéricos e falsos amigos marcados na tradução; a forma da Espanha citada quando muda), 40 tópicos de gramática, 51 histórias em mais de 20 países (Coyoacán, Monserrate, San Telmo, Havana, Salar de Uyuni, Canal do Panamá, Galápagos, Torres del Paine, Copán, Aracataca, Isla Negra…), 6 cenários de conversa, 60 etimologias (latim, árabe, náuatle, taíno, quéchua) e as 7 áreas da linguística aplicadas ao espanhol.
- **IPA por regras** (src/services/ipa-es.ts): seseo ou distinción, yeísmo e o «sh» rioplatense, b/d/g suaves [β ð ɣ], r simples e múltiplo, assimilação do n (un beso [um ˈbeso]) e do s (mismo [ˈmizmo]), tônica pela ortografia.
- **Palácio da memória** com 2 salas (o espanhol não tem neutro) e dicas para -aje, -umbre e os gregos em -ma; **diário** que pega «la viaje», «mucho bonito» e «me gusta los perros».
- **Bichos e sons** de 7 países (México, Colômbia, Argentina, Peru, Chile, Cuba e Espanha).
- 2.504 gravações de nativos (Lingua Libre).
- Conteúdo conferido pelos verificadores (scripts/checar-vocab-es.ts, scripts/checar-conteudo-es.ts: ortografia da RAE, ¿ ¡, nada de portunhol) e relido por inteiro na revisão.

## O que tem no italiano

- **Italiano padrão**, e a variante da **Suíça italiana** na aba Cultura (natel, azione, licenza di condurre: 21 helvetismos, 3 histórias em Lugano, no vale Verzasca e em Bellinzona; voz it-CH).
- **Trilha CEFR** em 15 subníveis, 60 lições, cada card comparando com o português: falsos amigos, as consoantes duplas que mudam o sentido (caro × carro, nono × nonno), o auxiliar «essere» (sono andato), preposições articuladas, o artigo antes do possessivo, ci e ne, congiuntivo, passato remoto.
- **Falsos amigos**: 92 armadilhas (burro = manteiga, salire = subir, guardare = olhar, caldo = quente, palestra = academia…).
- 4.184 palavras (falsos amigos, gênero diferente do português e plurais irregulares como l’uovo → le uova marcados na tradução), 40 tópicos de gramática, 48 histórias (das 20 regiões da Itália à Suíça, San Marino, Vaticano, Ístria, Serra Gaúcha, Bixiga e La Boca), 6 cenários de conversa, 155 etimologias com cognatos em português, as 7 áreas da linguística e **18 sotaques e dialetos** (romano, toscano, napolitano, siciliano, vêneto, sardo, friulano, o talian do Brasil…).
- **IPA por regras + dicionário de pronúncia** (src/services/ipa-it.ts, src/data/it/pronuncia.ts): a escrita italiana não mostra a tônica nem o timbre de «e» e «o», então cada palavra do app (mais de 8.800 formas) tem a grafia de dicionário (bène, séra, ẓèro); as regras fazem c/g, gn, gli, sc, as geminadas, a vogal longa na sílaba aberta e o «s» sonoro.
- **Palácio da memória** com 2 salas e dicas para -zione, -tà e os plurais que trocam de gênero; **diário** que pega «la fiore», «il studente», «sono 20 anni» e «mi piace i gatti».
- **Bichos e sons** da Itália: lobo-dos-apeninos, urso-marsicano, íbex; piano, violino de Cremona, bandolim napolitano, zampogna.
- Conteúdo conferido pelos verificadores (scripts/checar-vocab-it.ts, checar-conteudo-it.ts, checar-pron-it.ts: acentos «è/perché», apóstrofos «un po’/qual è», nada de letras do português) e relido na revisão.

## O que tem no russo

- **Trilha CEFR** em 15 subníveis (A1.1 → C2), 60 lições. A 1ª unidade ensina o **alfabeto cirílico** (falsos amigos visuais Р = r, В = v, Н = n, С = s), e as seguintes seguem a gramática do russo: casos, aspecto verbal, verbos de movimento, particípios, gerúndios, registro, estilo literário.
- **Tônica marcada** em todo texto russo (молоко́), como nos livros didáticos. A marca alimenta a IPA e é ignorada ao comparar respostas (e na voz).
- **IPA por regras** (src/services/ipa-ru.ts): redução das vogais átonas (о → [ɐ]/[ə], е/я → [ɪ]), consoantes moles, ensurdecimento e assimilação, casos especiais (что, -ого, -тся).
- **Teclado cirílico** completo (ЙЦУКЕН) nas respostas escritas, para quem não tem o teclado russo instalado.
- 3.925 palavras com tônica, 803 gravações nativas (Lingua Libre), 40 tópicos de gramática (do alfabeto aos provérbios e à reforma de 1918), 45 histórias, 3 por subnível, cada uma num lugar diferente (Moscou, Súzdal, Minsk, Bishkek, Almaty, Transiberiano, Baikal, Iakútsk, Kamtchatka, Iásnaia Poliana, Peterhof…), 4 cenários de conversa, 41 etimologias.
- **Treino do alfabeto** («🔤 Alfabeto» em Mais práticas): as 33 letras em «iguais», «falsas amigas» (В Н Р С У Х) e «novas», com som, IPA e palavra de exemplo; jogo de letra → som, som → letra e leitura de palavras emprestadas (метро́, шокола́д…), que prioriza as letras menos dominadas.
- **Diário** com regras próprias: devolve o ё (еще → ещё), acerta мой/моя́/моё pelo gênero e pega erros de lusófonos (я имею 20 лет → мне 20 лет, я нравится → мне нравится, я есть студент → я студент).
- **Shadowing**: a pergunta de sim/não em russo não sobe no fim, e sim tem um pico na palavra-chave (IK-3). O app explica isso e não cobra a subida.
- Conteúdo escrito por um autor e revisado por outro, com verificadores automáticos (scripts/checar-vocab-ru.ts, scripts/checar-conteudo-ru.ts) que exigem a tônica e barram letras latinas misturadas no cirílico.

## O que tem no romeno

- **Trilha CEFR** em 15 subníveis (A1.1 → C2), uma unidade por subnível e 60 lições: lição, desafio de voz e prova por unidade, cada uma com a gramática do subnível (imperfeito, condicional, casos, mais-que-perfeito, passiva, gerúndio, argumentação, registro, texto técnico, perfeito simples literário…). **Teste para pular**: quem já sabe faz a prova de uma unidade bloqueada e, com 80%, a trilha avança até ela.
- **Lição em 6 etapas**: card «aprenda primeiro» (história, cultura, o porquê da gramática, guia de letras) → associação imagem-som sem tradução (deslize → para «já sei») → lacunas com teclado de ă â î ș ț → desafio de voz (palavras em verde/amarelo/vermelho) → envio para a comunidade → recompensa com XP e fixação no SRS.
- **Sprint de 5 minutos** e **revisão do dia** com gestos: → sei, ← não sei, ↑ fácil, ↓ difícil.
- **Cofre de vocabulário**: 4.162 palavras por frequência (meta: 4.000), estado no SRS, domínio por categoria e **árvore etimológica** com 41 raízes (latim, eslavo, grego, dácio) e cognatos em português, espanhol, italiano e francês.
- **Histórias interativas** em 15 subníveis (A1.1, A1.2, A2.1 … B2.4, C1.1, C1.2, C2), 45 no total, com pelo menos 3 por subnível: leia em romeno e escolha o que o Linu faz. Escolhas que mostram que o texto não foi entendido dão uma dica; cada história tem vários finais.
- **Aba Gramática**: 40 tópicos do A1.1 ao C2, com tabelas, exemplos com áudio e IPA, armadilhas para lusófonos e mini-quiz.
- **IPA** (Alfabeto Fonético Internacional) gerado por regras em todo o romeno do app.
- **Diário**: 3 frases por dia sobre a sua vida. O corretor offline devolve acentos, acerta «un/o» e «meu/mea» pelo gênero do vocabulário e pega erros típicos de lusófonos (*eu este*, *sunt 20 de ani*, *am foame*…), mostrando a versão «como um nativo diria».
- **Shadowing**: ouvir e repetir (depois ou junto com o modelo), com a onda e a curva de altura da voz ao vivo; compara o ritmo e a entonação do fim da frase (sim/não sobe; «ce, unde…» e afirmações descem).
- **Palácio da memória**: os 3 gêneros moram em salas — 🔥 Forja (masc.), 🌊 Lago (fem.), 🦎 Jardim do Camaleão (neutro) —, com jogo «em que sala mora?» e mnemônicos próprios.
- **Escuta e ditado** («🎧 Escuta e ditado» em Mais práticas): a gravação de um nativo toca e você escolhe entre 4 palavras que soam ou se escrevem parecido (nunca homófonos, pela IPA do idioma e da variante: «casa» e «caza» só são opções diferentes no espanhol da Espanha) ou escreve o que ouviu. No ditado, falta de acento conta com aviso, homófono (hola × ola, vaca × baca) é aceito com a diferença explicada e uma letra de diferença mostra «por uma letra!». 🔊 repete, 🐢 toca devagar; as erradas voltam mais vezes. Sem gravações no idioma, usa a voz do aparelho.
- **Áudio de falantes nativos** nas palavras, do [Lingua Libre](https://lingualibre.org) (Wikimedia Commons, licenças livres; créditos no app em Perfil › Créditos dos áudios). Frases usam a voz do aparelho.
- **Mapa-múndi «Onde se fala»**: os 249 países e territórios da ISO 3166-1 (mais o Kosovo, código provisório XK), as 5.046 subdivisões da ISO 3166-2 (as regiões onde cada língua é falada) e uma aba com os 31 países que deixaram de existir (ISO 3166-3), com minimapa dos sucessores. Ao tocar num país, o mapa **aproxima nele e desenha as subdivisões** (Natural Earth 1:10m, um arquivo por país, baixado só quando necessário), com rótulos, as regiões onde o idioma é falado em destaque e o código ISO 3166-2 de cada uma. Botões de **região › sub-região** (a mesma divisão das bandeiras do NeuroSim: América do Sul › Andina, Brasil e Cone Sul, Guianas…) levam a cada parte do mundo e listam os países. Os idiomas do app aparecem na ordem de parentesco com o que você estuda, e **«🔎 Todos os idiomas»** busca entre os 714 idiomas do mundo (dados do [Unicode CLDR](https://cldr.unicode.org/): em que países cada um é falado, a % da população e o status oficial; família pela árvore da ISO 639-5). No cartão do país aparecem todas as línguas, da mais falada para a menos, e o botão «Estudar» só nas que o app ensina. Cada país mostra as línguas, **animais nativos** e **instrumentos musicais** típicos.
- **Variantes**: romeno da Romênia (padrão) e da **Moldávia** (46 diferenças de vocabulário, pronúncia, cultura e 3 histórias em Chișinău, Orheiul Vechi e Cricova).
- **Conversação guiada**: café, hotel, bar com amigos, entrevista de emprego. O Linu avisa quando o tom não combina (ex.: «tu» com o recepcionista).
- **Comunidade**: corrigir textos de outros alunos (+20 XP) e acompanhar os próprios envios.
- **Gamificação**: ofensiva com congelamento, meta diária, XP da semana.
- **Tutorial com o Linu** na primeira visita (e no Perfil), com um cartão de verdade para treinar os gestos.
- **Cópia do progresso** (Perfil › 💾): guarda num arquivo JSON tudo o que é do aluno (XP, ofensiva, lições, revisões, histórias, diário, textos da comunidade, tema, variantes e sotaques), sem o conteúdo dos idiomas, que o app já traz. Para trocar de aparelho ou não perder nada ao limpar o navegador. Antes de restaurar, o app mostra o que a cópia traz; a troca é feita numa transação (ou entra tudo, ou nada muda) e as revisões de palavras que não existem mais ficam de fora. No computador o arquivo é baixado; no celular abre o menu de compartilhar (Arquivos, Drive…).
- Tema claro, escuro ou automático.

## Rodar

```bash
npm install
npx expo start          # w = navegador, ou leia o QR code com o Expo Go
```

### Voz

A leitura em voz alta usa as vozes do aparelho. A tela **Perfil › Voz e microfone** detecta o seu sistema, testa a voz e mostra o passo a passo (iPhone/iPad, Android, Windows, Mac, Chromebook e Linux). O app prefere vozes naturais (Piper, Google, Microsoft, «premium») às robóticas (eSpeak).

No **Linux**, `scripts/instalar-piper.sh` instala o [Piper](https://github.com/rhasspy/piper) com a voz romena `ro_RO-mihai-medium` só no seu usuário (sem sudo) e liga ao speech-dispatcher, que é por onde Firefox e Chrome falam:

```bash
sh scripts/instalar-piper.sh          # depois: feche e abra o navegador
sh scripts/instalar-piper.sh ro_RO-mihai-medium ru_RU-irina-medium es_MX-ald-medium it_IT-paola-medium   # romeno, russo, espanhol e italiano
spd-say -l ro "Bună ziua"             # teste
```

O reconhecimento de fala funciona no Chrome, Edge e Safari; no Firefox e no app nativo o aluno digita o que falou.

### Áudios de nativos

```bash
node scripts/baixar-audios.mjs ro   # precisa de ffmpeg; gera assets/audio/ro/*.mp3 e src/data/ro/audios.ts (com autor e licença)
```

### Mapa

```bash
node scripts/gerar-mapa.mjs   # precisa do pacote iso-codes; gera src/data/mapa-mundi.ts e src/data/iso-3166-2.ts
node scripts/gerar-subdivisoes.mjs   # contornos das subdivisões: assets/geo/<ISO3>.geo e src/data/subdivisoes-geo.ts
node scripts/gerar-idiomas-mundo.mjs # todos os idiomas por país (Unicode CLDR, pacote cldr-core) → src/data/idiomas-mundo.ts
```

Contornos: [Natural Earth](https://www.naturalearthdata.com/) 1:50m (domínio público). Nomes em pt-BR: projeto [iso-codes](https://salsa.debian.org/iso-codes-team/iso-codes) (LGPL-2.1).

## Publicar

`npm run build:web` gera `dist/` para o GitHub Pages (base `/LinuLingo`). O workflow `.github/workflows/pages.yml` faz isso a cada push em `master`.

O site é um **app instalável (PWA)** que funciona **sem internet**:

- `public/manifest.json` e os ícones (gerados por `scripts/gerar-icones.mjs`) deixam o navegador instalar o app: ícone na tela inicial e tela cheia. No Perfil, o cartão «📲 Usar como app» mostra o botão de instalar (Chrome, Edge, Samsung Internet) ou o caminho pelo menu Compartilhar (iPhone e iPad).
- `scripts/sw-modelo.js` vira `dist/sw.js`, um service worker só que faz duas coisas: põe os cabeçalhos COOP/COEP que o SQLite da web exige (o Pages não deixa configurá-los; mesma técnica do coi-serviceworker) e guarda o app para abrir sem internet. A lista do que guardar (índice, código, imagens, ~17 MB) e a versão saem do próprio `dist/`, em `scripts/preparar-pages.mjs`.
- Os áudios e os contornos do mapa ficam guardados quando usados pela primeira vez; no Perfil dá para guardar de uma vez todas as gravações do idioma. Pedidos em pedaços (`Range`, como os do `<audio>`) são respondidos do que está guardado.
- Versão nova no site: o service worker novo guarda o app novo em segundo plano, assume sem recarregar a página aberta e apaga a versão velha.

## Testes

```bash
npm test                                   # SM-2, ofensiva, respostas, trilha e validação do conteúdo
npx tsc --noEmit && npx expo lint
node scripts/fluxo-licao.mjs               # faz uma lição inteira no navegador (servidor rodando)
npm run build:web && node scripts/fluxo-offline.mjs   # instalável, app guardado e, com o servidor desligado, abre e toca áudio
node scripts/fluxo-backup.mjs              # guarda a cópia, muda nome/tema/idioma, restaura e confere
node scripts/fluxo-escuta.mjs              # escuta e ditado em espanhol: descobre a gravação tocada e responde certo, errado e sem acento
node scripts/fluxo-extras.mjs              # tutorial, voz, etimologia, sprint, conversa, comunidade, tema escuro
node scripts/fluxo-historia.mjs            # histórias: desvio, dica, final e contador de finais
node scripts/fluxo-praticas.mjs            # diário (corretor), palácio (jogo) e shadowing (microfone falso)
npx tsx scripts/fluxo-trilha.mjs          # faixa de subníveis e teste para pular
node scripts/fluxo-linguistica.mjs        # áreas da língua, quadro do IPA e aulas
npx tsx scripts/fluxo-russo.mjs           # russo: troca de idioma, cirílico, IPA, teclado, diário
npx tsx scripts/fluxo-espanhol.mjs        # espanhol: falsos amigos, palácio, variante da Espanha ([θ]), linguística, diário
npx tsx scripts/fluxo-italiano.mjs        # italiano: falsos amigos, IPA, palácio, variante da Suíça, linguística, diário
node scripts/fluxo-mapa.mjs                # mapa ISO 3166-1/3166-3, zoom nas subdivisões e variante da Moldávia
node scripts/capturas.mjs / /vocabulario   # capturas em desktop, iPhone, Android e iPad
```

Os scripts usam o Chromium do Playwright (`~/.cache/ms-playwright`) ou `CHROME_PATH`.

## Estrutura

```
src/
├── app/          rotas (Expo Router): abas, licao/[id], sprint, revisao, comunidade, cenario/[id]
├── screens/      telas
├── components/   Linu, cartões, etapas da lição, UI
├── database/     esquema SQLite, seed e consultas
├── srs/          algoritmo SuperMemo-2
├── services/     progresso/XP, voz, comparação de respostas, tema, trilha
└── data/         conteúdo por idioma (ro/, ru/, es/) e registro de idiomas
```

### Adicionar um idioma

1. Crie `src/data/<código>/` com `vocabulario.ts`, `curriculo.ts`, `etimologia.ts`, `conversas.ts` e `index.ts` (um `LanguagePack`).
2. Registre em `PACKS` de `src/data/idiomas.ts`.
3. Rode `npm test`. O teste de conteúdo verifica palavras das lições, gabaritos e etimologia.
