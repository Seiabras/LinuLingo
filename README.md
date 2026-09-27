# LinuLingo 🐧

![LinuLingo: aprenda idiomas com o Linu](assets/logo/linulingo-banner.png)

App de idiomas (React Native + Expo) que junta o melhor de Duolingo, Busuu, Rosetta Stone, Air Learn, LingoDeer, Drops, Speakly, Babbel e Mondly: trilha CEFR, repetição espaçada (SM-2), cultura e história antes da prática, imersão sem tradução, conversação com registro social e correção pela comunidade. Funciona offline: tudo fica num banco SQLite no aparelho, e na web o app pode ser instalado e aberto sem internet.

**Experimente no navegador:** https://seiabras.github.io/LinuLingo/

O mascote é o **Linu**, um pinguim-de-barbicha (*Pygoscelis antarctica*). O tutorial e o Perfil mostram fotos reais da espécie (Wikimedia Commons, com autor e licença): o recorte fica centrado na cabeça do pinguim e tocar numa foto abre ela inteira, com setas (ou arrastar, ou as setas do teclado) para passar as outras.

As faixas que rolam para os lados (fotos, trilha de subníveis, idiomas e regiões do mapa, tabelas da gramática, sugestões da conversa) têm setas ‹ › nas pontas, para quem usa mouse e não consegue arrastar.

## Idiomas

| Idioma | Família › ramo | Estado |
| --- | --- | --- |
| 🇷🇴 Romeno | Indo-europeu › Itálico › Românico › Românico oriental | **disponível** |
| 🇷🇺 Russo | Indo-europeu › Balto-eslavo › Eslavo › Eslavo oriental | **disponível** |
| 🇪🇸 Espanhol | Indo-europeu › Itálico › Românico › Ibero-românico | **disponível** |
| 🇮🇹 Italiano | Indo-europeu › Itálico › Românico › Ítalo-dálmata | **disponível** |
| 🇵🇹 Português de Portugal | Indo-europeu › Itálico › Românico › Ibero-românico › Galego-português | **disponível** |
| 🇸🇪 Sueco | Indo-europeu › Germânico › Germânico setentrional › Nórdico oriental | **disponível** |
| 🇳🇴 Norueguês (bokmål, com o nynorsk como variante) | Indo-europeu › Germânico › Germânico setentrional › Nórdico ocidental | **disponível** |
| 🇩🇰 Dinamarquês | Indo-europeu › Germânico › Germânico setentrional › Nórdico oriental | **disponível** |
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

Na aba Cultura, tudo o que dá para estudar de um idioma fica **lado a lado num seletor só**: as variantes nacionais (italiano padrão × da Suíça), os sotaques, os dialetos e as **línguas regionais e minoritárias** (napolitano, siciliano, vêneto, lombardo, sardo, friulano e talian na Itália; mirandês, crioulo cabo-verdiano e galego no português; elfdaliano, meänkieli, sámi, finlandês, romani e ídiche na Suécia), marcadas como «língua» porque não são sotaques do idioma. Escolher qualquer um faz a voz e a IPA seguirem o jeito de lá e liga o treino dele.

Cada idioma mostra os seus jeitos regionais de falar (18 no espanhol, 5 no romeno, 8 no russo): o que marca cada um, exemplos com voz e transcrição, palavras típicas e um **minimapa com as regiões** onde se fala (subdivisões ISO 3166-2). No mapa-múndi, o cartão do país lista os sotaques de lá, e tocar numa região mostra o sotaque daquele lugar. Formato: `Accent` em src/data/types.ts, um arquivo `sotaques.ts` por idioma.


**Gravações de gente de cada região** (`scripts/baixar-vozes-sotaques.mjs`): o script cruza os falantes do Lingua Libre com as regiões de cada sotaque — vale onde a pessoa aprendeu a língua (quando informado) ou onde mora, resolvidos no Wikidata até o código ISO 3166-2 — e baixa palavras do vocabulário do app ditas por eles (só palavras conferidas: há falantes que gravam listas de dicionário ou palavras de outra língua marcadas errado). No cartão e no treino de cada sotaque aparece «🎙️ Gente de lá» (quem gravou e o lugar) e, no topo do painel, «A mesma palavra, sotaques diferentes» para comparar lado a lado. Hoje: espanhol 8 sotaques (Caracas, Cartagena, Bogotá, Buenos Aires, Málaga, Grã Canária, Costa Rica, Chile), romeno os 5, russo 3 (Moscou, São Petersburgo, Perm), italiano 7. Onde ainda não há gravações, o app avisa e convida a gravar no Lingua Libre.
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

## O que tem no português de Portugal (com norma culta)

- Um curso para **brasileiros**: o «idioma» é o português europeu (padrão de Lisboa) e a «tradução» é o português do Brasil. Junto vem a **norma culta** que vale dos dois lados do Atlântico: crase, regência, concordância, colocação pronominal (ênclise, próclise, mesóclise), conjuntivo e infinitivo pessoal, o Acordo de 1990, pontuação, redação e literatura.
- 4.616 palavras (o equivalente brasileiro em cada uma: autocarro = ônibus, pequeno-almoço = café da manhã), 15 unidades, 40 tópicos de gramática, 48 histórias (de Alfama aos Açores, de Luanda a Macau e Díli, e 3 no Brasil), 70 falsos amigos entre as duas normas (rapariga, bicha, propina, fato, camisola…), 158 etimologias e 28 sotaques e dialetos (carioca, caipira, mineiro, baiano, gaúcho, manezinho…, lisboeta, açoriano, madeirense, angolano, moçambicano, o mirandês, o crioulo cabo-verdiano e o galego).
- **IPA em duas normas** (src/services/ipa-pt.ts): Portugal (vogais átonas reduzidas, «s» chiado, «r» uvular, «l» velar, «ei» [ɐj]) e Brasil (t/d antes de [i] → [tʃ dʒ], «l» final [w]); a variante escolhida na aba Cultura troca a IPA e a voz. Dicionário de pronúncia com 8.038 formas (timbre de Portugal: déve, pôrto, nóva).
- **Diário** que corrige «estou fazendo» → «estou a fazer» e «Me chamo» → «Chamo-me»; verificador que aponta brasileirismos no texto europeu; **voz**: a de Portugal ganha de uma brasileira mais natural (a pronúncia muda demais).
- Gravações de nativos só de falantes que moram em Portugal (scripts/falantes-por-pais.mjs).

## O que tem no sueco

- 4.254 palavras (gênero en/ett, formas irregulares na tradução), 15 unidades, 40 tópicos de gramática (V2, forma definida, o «inte» na subordinada, verbos com partícula, s-passiv, klarspråk, Strindberg, Lagerlöf, Bellman), 48 histórias (de Gamla stan a Kiruna e Abisko, Gotland, Åland e a Finlândia sueca, Minnesota), 43 falsos amigos (god, rolig, semester, gift, glass…), 126 etimologias, 15 sotaques e línguas minoritárias (skånska, gotländska, finlandssvenska, älvdalska, meänkieli, sámi…), variantes da Suécia e da Finlândia.
- **IPA por dicionário** (src/services/ipa-lexicon.ts + src/data/sv/pronuncia.ts): a escrita não mostra a quantidade das vogais nem os dois acentos tonais, então cada uma das 9.353 formas do app tem a sua transcrição (tom 2 com circunflexo); o teste exige IPA para toda palavra sueca.
- **Palácio** com gênero comum (en) e neutro (ett); **diário** que corrige «en hus» → «ett hus»; pares mínimos (tak × tack, glas × glass, by × bi, kål × kol) e os bichos em sueco (voff voff, kuckeliku).
- Verificadores genéricos das nórdicas (scripts/checar-vocab-nordico.ts, checar-conteudo-nordico.ts, checar-ipa-nordico.ts): letras e palavras de línguas vizinhas (ø, æ, «ikke» no sueco; ä, ö, «och», «inte» no norueguês e no dinamarquês).

## O que tem no norueguês (bokmål, com o nynorsk)

- 4.330 palavras (os três gêneros en/ei/et, com a forma feminina «boka» nas palavras do dia a dia), 15 unidades, 40 tópicos de gramática (V2, forma definida e dupla definição, o «ikke» na subordinada, passiva com -s e bli, klarspråk, as duas escritas e Ivar Aasen, Ibsen e Bjørnson), 48 histórias (de Oslo e Bergen a Lofoten, Alta, Svalbard e Røros; 3 em nynorsk), 46 falsos amigos (rar, prate, sort, gift, full…), 121 etimologias, 12 sotaques, dialetos e línguas (bergensk, trøndersk, nordnorsk, kebabnorsk, sámi do norte, kven…), variantes bokmål e nynorsk.
- **IPA por dicionário** (src/data/nb/pronuncia.ts, 9.029 formas, fala de Oslo com os dois tons e as retroflexas); o teste exige IPA para toda palavra norueguesa, inclusive as do nynorsk.
- **Palácio** com os três gêneros (a Forja, o Lago e o Jardim do fiorde); **diário** que corrige «et bil» → «en bil» e aceita «en bok» ao lado de «ei bok»; pares mínimos (tak × takk, os dois tons, kj × sj), bichos em norueguês e a roupinha do Linu: o topplue.

## O que tem no dinamarquês

- 4.188 palavras (gênero en/et, formas irregulares na tradução), 15 unidades, 40 tópicos de gramática (o stød e o d suave, a forma definida sem dupla definição — den store bil —, V2, os números de base 20 — halvtreds, tres, firs —, a vírgula dinamarquesa, klarsprog, Andersen e Kierkegaard na grafia antiga), 48 histórias (de Nyhavn a Skagen, Bornholm, Ribe, Jelling, as Ilhas Faroé e a Groenlândia; 3 no Schleswig do Sul), 45 falsos amigos (rar, frokost, fart, gift…), 134 etimologias, 12 sotaques, dialetos e línguas (københavnsk, jysk, sønderjysk, bornholmsk, feroês, groenlandês, a minoria alemã), variantes da Dinamarca e da minoria dinamarquesa na Alemanha.
- **IPA por dicionário** (src/data/da/pronuncia.ts, 8.596 formas, rigsdansk com o stød marcado); o teste exige IPA para toda palavra dinamarquesa.
- **Palácio** com gênero comum (en) e neutro (et), o Jardim de Nyhavn; **diário** que corrige «et bil» → «en bil»; pares mínimos (com e sem stød, o d suave), bichos em dinamarquês e a roupinha do Linu: o studenterhue.

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
- **Shadowing e sombra sonora**: ouvir e repetir (depois ou junto com o modelo), com a onda e a curva de altura da voz ao vivo; compara o ritmo e a entonação do fim da frase (sim/não sobe; «ce, unde…» e afirmações descem). Na web, a **sombra sonora** extrai a curva de tom do próprio áudio do modelo (a gravação do nativo, decodificada, ou a voz embutida), desenha-a tracejada em azul e, depois de gravar, põe a sua em amarelo por cima — as duas em semitons em relação ao tom de cada voz (uma voz grave e uma aguda ficam comparáveis), com a autocorrelação filtrada contra saltos de oitava — e dá a nota «Melodia: X% parecida» (diferença média em semitons). Dicas por idioma: acento tonal do sueco e do norueguês, sílaba tônica do russo, melodia do português de Portugal. Melodia abaixo de 50% manda a frase para o caderno de erros.
- **Palácio da memória**: os 3 gêneros moram em salas — 🔥 Forja (masc.), 🌊 Lago (fem.), 🦎 Jardim do Camaleão (neutro) —, com jogo «em que sala mora?» e mnemônicos próprios.
- **Escuta e ditado** («🎧 Escuta e ditado» em Mais práticas): a gravação de um nativo toca e você escolhe entre 4 palavras que soam ou se escrevem parecido (nunca homófonos, pela IPA do idioma e da variante: «casa» e «caza» só são opções diferentes no espanhol da Espanha) ou escreve o que ouviu. No ditado, falta de acento conta com aviso, homófono (hola × ola, vaca × baca) é aceito com a diferença explicada e uma letra de diferença mostra «por uma letra!». 🔊 repete, 🐢 toca devagar; as erradas voltam mais vezes. Sem gravações no idioma, usa a voz do aparelho.
- **Pares mínimos** («👂 Pares mínimos» em Mais práticas): palavras que só mudam por um som difícil para o brasileiro — espanhol r × rr (pero × perro), rr × j (barra × baja), n × ñ, l × ll e s × z; russo consoante dura × mole (брат × брать) e ы × и (быть × бить); romeno a × ă, t × ț, s × ș e o -i curto do plural (lup × lupi); italiano consoante simples × dupla (caro × carro), n × gn e l × gli. Toca uma das duas e você diz qual ouviu; o acerto por contraste puxa mais os sons em que você erra. Um par só toca nas gravações de nativos se as duas palavras tiverem gravação (senão, as duas na voz do aparelho, para o timbre não entregar a resposta). Pares que soam igual na variante escolhida (casa × caza no espanhol da América) saem do treino, e a tela mostra também as armadilhas ao contrário (tubo × tuvo, луг × лук).
- **Caderno de erros** («📕 Caderno de erros» em Mais práticas, com o número de itens no cartão): tudo o que você erra nas lições (lacunas e imagem e som), nos quizzes de gramática e linguística, na escuta, no ditado, nos pares mínimos, nos falsos amigos, no alfabeto, no palácio, nos sotaques, no jogo do mapa, nos ajustes do corretor do **diário**, nas frases do **shadowing** com ritmo ou melodia longe do modelo e o «não sei» da revisão fica guardado com a sua resposta (riscada), a certa e a explicação. **Ligado ao SRS:** quando o erro é numa palavra do cofre, o fator de facilidade dela (SM-2) cai 0,2 (nunca abaixo de 1,3, e uma vez por dia), as repetições zeram e ela volta no sprint do dia seguinte — as revisões recém-erradas vêm na frente da fila, as mais difíceis primeiro. A revisão do caderno usa as opções originais (ou a certa, a sua e outras do mesmo treino), toca o som nas perguntas de ouvido, e acertar 2 vezes seguidas tira o item de lá; errar de novo num treino devolve. Entra na cópia do progresso.
- **Como faz o bicho?** («🐶» em Mais práticas): como cada língua escuta os bichos (ham-ham, гав-гав, guau guau, bau bau × o au-au do português) e o verbo de cada som (Câinele latră, Соба́ка ла́ет, El perro ladra, Il cane abbaia), 12 bichos por idioma; jogo com três tipos de pergunta, em que a onomatopeia do português aparece como armadilha quando é diferente.
- **Álbum de figurinhas** («📒 Álbum» em Mais práticas): cada atividade concluída dá uma figurinha (dentro do `awardXp`, então vale para todos os treinos), com um aviso por cima de qualquer tela. São os bichos e os instrumentos de cada país do mapa, com 70% de chance de vir dos países do idioma estudado; repetidas contam e 3 delas trocam por uma que falta. Cada figurinha abre a curiosidade e o nome local, com áudio quando é do idioma estudado. Fica na cópia do progresso.
- **Jogo do mapa** («🗺️ Jogo do mapa» em Mais práticas): 8 perguntas de três tipos — tocar num país da região onde a língua é oficial (a estudada, as parentes e as grandes), dizer a língua oficial de um país aceso (as opções erradas são línguas dos vizinhos) e tocar, no mapa das regiões do país, onde fica cada sotaque do idioma estudado. Depois de responder, o mapa mostra em verde onde era, com a explicação.
- **Adivinhe o som** («🔊» em Mais práticas): gravações de verdade de 11 bichos e 15 instrumentos (Wikimedia Commons, licenças livres, escolhidas à mão com a descrição conferida — a busca do Commons traz pronúncias de palavras e cantigas misturadas), cortadas em ~7 s com o volume igualado (`scripts/baixar-sons.mjs`; `scripts/buscar-sons.mjs` lista candidatas). As opções vêm com o nome no idioma estudado (câinele, скри́пка, la fisarmonica…), então o jogo ensina vocabulário. O 🐾 do «Como faz o bicho?» e as figurinhas do álbum que têm som também tocam.
- **Loja do Linu** (Perfil › 🛍️): 40 chapéus e toucados tradicionais, cada um com o país (bandeira), a região e a cultura de onde veio — de presente com as lições de cada idioma (a 1ª com 1 lição, depois 5, 10, 20…: căciulă, ушанка, sombrero vueltiao, chupalla, berritta, carapuça da Madeira, chapéu de couro do vaqueiro, luciakrona, topplue…) e, do mundo, comprados com krill 🦐 (1 a cada 10 XP): sugegasa, gat, nón lá, tam o' shanter, Bollenhut, vinok, ak kalpak, fez, gèlè, isicholo, pagri, lei poʻo, salakot, blangkon, chapéu de caubói. Desenhados em SVG por cima da cabeça, acompanhando as animações; a escolhida aparece em todos os Linus do app, e as compras entram na cópia do progresso.
- **Áudio de falantes nativos** nas palavras, do [Lingua Libre](https://lingualibre.org) e, nas palavras que ele ainda não tinha, de outras coleções livres do Wikimedia Commons (arquivos de pronúncia do Wikcionário, projeto Shtooka) — licenças CC BY, CC BY-SA ou CC0; créditos no app em Perfil › Créditos dos áudios. Frases usam a voz do aparelho ou a voz neural embutida.
- **Mapa-múndi «Onde se fala»**: os 249 países e territórios da ISO 3166-1 (mais o Kosovo, código provisório XK), as 5.046 subdivisões da ISO 3166-2 (as regiões onde cada língua é falada) e uma aba com os 31 países que deixaram de existir (ISO 3166-3), com minimapa dos sucessores. Ao tocar num país, o mapa **aproxima nele e desenha as subdivisões** (Natural Earth 1:10m, um arquivo por país, baixado só quando necessário), com rótulos, as regiões onde o idioma é falado em destaque e o código ISO 3166-2 de cada uma. Botões de **região › sub-região** (a mesma divisão das bandeiras do NeuroSim: América do Sul › Andina, Brasil e Cone Sul, Guianas…) levam a cada parte do mundo e listam os países. Os idiomas do app aparecem na ordem de parentesco com o que você estuda, e **«🔎 Todos os idiomas»** busca entre os 714 idiomas do mundo (dados do [Unicode CLDR](https://cldr.unicode.org/): em que países cada um é falado, a % da população e o status oficial; família pela árvore da ISO 639-5). No cartão do país aparecem todas as línguas, da mais falada para a menos, e o botão «Estudar» só nas que o app ensina. Cada país mostra as línguas, **animais nativos** e **instrumentos musicais** típicos.
- **Variantes**: romeno da Romênia (padrão) e da **Moldávia** (46 diferenças de vocabulário, pronúncia, cultura e 3 histórias em Chișinău, Orheiul Vechi e Cricova).
- **Conversação guiada**: café, hotel, bar com amigos, entrevista de emprego. O Linu avisa quando o tom não combina (ex.: «tu» com o recepcionista).
- **Comunidade leve, sem servidor** («👥 Comunidade»): avalie textos de outros alunos com 3 emojis (😊 entendi tudo · 🤔 entendi quase tudo · 😵 não entendi) e, se quiser, uma sugestão gentil reescrevendo do jeito certo (+20 XP; depois aparece a correção de referência). Para ser avaliado, ponha nos seus envios as **3 frases do diário de hoje** ou **10 segundos de áudio** (gravados no navegador em Opus a 16 kbit/s) e toque em «📤 Mandar para um colega avaliar»: o envio vai **dentro de um link** (depois do «#», que não vai para servidor nenhum); o colega abre, ouve, escolhe o emoji e a sugestão e manda de volta outro link, que, aberto no seu aparelho, guarda a avaliação no envio. Link cortado ou editado é recusado; áudio grande demais sai do link e vai só a frase.
- **Expedições do Linu** («🧭 Expedição da semana» em Mais práticas): toda segunda-feira, 3 paradas sorteadas pela semana entre ~12 cidades de cada idioma (Romênia e Moldávia; Espanha e América; Itália; Portugal, Brasil e África; Rússia; Suécia). A pista vem falada no idioma («Linu călătorește la Iași.»); o aluno toca, no mapa do país, a região onde a cidade fica (códigos ISO 3166-2 conferidos contra os contornos do mapa em teste). A pista escrita e a tradução custam uma estrela cada; errar também, e depois de 3 erros o mapa mostra onde era. Em cada chegada, um fato da cidade; no fim, uma **figurinha rara (dourada)** de um dos países visitados — as raras só saem nas expedições e aparecem no álbum com ✨. Os erros vão para o caderno.
- **Palavras irmãs** («🌳» em Mais práticas e na aba Etimologia do cofre): 28 famílias de palavras (água, noite, coração, mãe, irmão, dia, casa, lobo…) em português, espanhol, italiano, romeno, francês, russo, sueco, norueguês e inglês, organizadas numa árvore: a raiz reconstruída do indo-europeu no topo, os ramos (latim, germânico, eslavo) e, à parte, as palavras que vieram de outra raiz — para aprender que «day» parece «dia» e não é parente, que «день» não parece e é, e que o «hav» sueco é o mar, não a água. Cada palavra tem o áudio na língua dela, e o jogo «Qual é a irmã?» mostra uma palavra do idioma estudado e três do português (os erros vão para o caderno).
- **Linha do tempo das línguas** («⏳» embaixo do mapa-múndi): como as românicas, as eslavas, as germânicas e as urálicas se espalharam, em etapas (c. 100 d.C., c. 1000, c. 1600…) até «hoje», com os países acesos no mapa e um texto por etapa; «▶ Ver a expansão» passa sozinho. As etapas antigas são aproximadas e desenhadas sobre os países de hoje (a tela avisa); onde os historiadores discordam — a formação do romeno, a pátria dos eslavos e dos urálicos — o texto diz que é debatido. A etapa «hoje» sai dos dados do mapa (onde uma língua da família é oficial), e o fim da tela leva aos países que deixaram de existir.
- **Leituras graduadas**: as histórias seguem o subnível da trilha — as do seu nível («✓ no seu nível») e as de baixo ficam abertas, a do subnível seguinte é um desafio e as de cima ficam trancadas até a trilha chegar lá; cada uma mostra quantas palavras-chave você ainda não estudou.
- **Gamificação**: ofensiva com congelamento, meta diária, XP da semana.
- **Tutorial com o Linu** na primeira visita (e no Perfil): começa pela escolha do idioma, cumprimenta no idioma escolhido e mostra cada mecânica, com um cartão de verdade para treinar os gestos.
- **Cópia do progresso** (Perfil › 💾): guarda num arquivo JSON tudo o que é do aluno (XP, ofensiva, lições, revisões, histórias, diário, textos da comunidade, tema, variantes e sotaques), sem o conteúdo dos idiomas, que o app já traz. Para trocar de aparelho ou não perder nada ao limpar o navegador. Antes de restaurar, o app mostra o que a cópia traz; a troca é feita numa transação (ou entra tudo, ou nada muda) e as revisões de palavras que não existem mais ficam de fora. No computador o arquivo é baixado; no celular abre o menu de compartilhar (Arquivos, Drive…).
- Tema claro, escuro ou automático.

## Rodar

```bash
npm install
npx expo start          # w = navegador, ou leia o QR code com o Expo Go
```

### Voz

**Ordem do som:** gravação de um falante nativo (com quem gravou e de onde) › voz natural do aparelho no idioma certo (no português, do país certo) › **voz neural embutida** › voz robótica do aparelho. O app nunca lê um idioma com a voz de outro.

A **voz neural embutida** ([Piper](https://github.com/rhasspy/piper) rodando no navegador com onnxruntime-web, num worker) garante som em todos os idiomas mesmo sem voz no computador — por exemplo no Chrome do Linux, que não tem nenhuma, ou no Firefox com o speech-dispatcher mudo. A voz de cada idioma (licenças CC0/CC BY, lista em src/data/vozes-neurais.ts) baixa uma vez e fica guardada para uso offline; a tela **Perfil › Voz e microfone** deixa ouvir e baixar antes. `scripts/preparar-tts.mjs` copia o motor para `public/tts/` no build.

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
node scripts/baixar-vozes-extras.mjs sv   # completa as palavras sem gravação com outras coleções livres do Commons
                                          # («Sv-palavra.ogg» do Wikcionário, projeto Shtooka) → src/data/sv/audios-extra.ts
```

As duas fontes ficam em arquivos separados (audios.ts e audios-extra.ts) para um script nunca apagar o que o outro achou; quando uma palavra tem as duas, vale a do Lingua Libre. Resultado do extra: sueco de 278 para 1.964 palavras com gravação (de 4.254), russo de 803 para 3.148 (de 3.924, quase todas do projeto Shtooka), romeno +5 (as categorias romenas do Commons são pequenas). O servidor de arquivos do Commons limita o ritmo (erro 429): o script espera 0,7 s entre arquivos e, quando recusado, o tempo que o servidor pede.

### Mapa

```bash
node scripts/gerar-mapa.mjs   # precisa do pacote iso-codes; gera src/data/mapa-mundi.ts e src/data/iso-3166-2.ts
node scripts/gerar-subdivisoes.mjs   # contornos das subdivisões: assets/geo/<ISO3>.geo e src/data/subdivisoes-geo.ts
node scripts/gerar-idiomas-mundo.mjs # todos os idiomas por país (Unicode CLDR, pacote cldr-core) → src/data/idiomas-mundo.ts
node scripts/gerar-linguas-glottolog.mjs # TODAS as línguas de cada país e região (Glottolog, CC BY 4.0; nomes em pt do Wikidata) → src/data/linguas-glottolog.ts
```

O cartão de cada país lista todas as línguas faladas lá — as do CLDR com a % da população e as ~8.000 do [Glottolog](https://glottolog.org) (línguas indígenas, de sinais, crioulos), com o grau de risco e as extintas numa lista à parte; tocar numa região mostra as línguas dela (o Glottolog põe cada língua num ponto, que cai numa subdivisão ISO 3166-2). O arquivo (~0,5 MB) é carregado só quando o mapa abre.

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
node scripts/fluxo-pares.mjs               # pares mínimos: intercepta gravação e voz, confere casa × caza por variante
node scripts/fluxo-erros.mjs               # erra de propósito, confere o caderno e revisa até os itens saírem
npx tsx scripts/fluxo-expedicao.mjs       # expedição da semana: erro, dicas, mapa revelando, figurinha rara dourada no álbum
npx tsx scripts/fluxo-linha-do-tempo.mjs   # linha do tempo: as 4 famílias, etapas, «▶ Ver a expansão» e o atalho para os países antigos
npx tsx scripts/fluxo-irmas.mjs           # palavras irmãs: árvore de «dia» (день × day), jogo em romeno e sueco, «hav» na família do mar
node scripts/fluxo-sombra.mjs              # sombra sonora: curva do modelo antes de gravar, a sua por cima e a nota; dica do acento tonal no sueco
node scripts/fluxo-comunidade.mjs          # diário → caderno; avalia colega com emoji; 10 s de áudio (microfone falso); link de ida e volta entre dois navegadores
node scripts/fluxo-vozes.mjs               # gravações dos sotaques: comparação, «Gente de lá» e créditos com o lugar
node scripts/fluxo-bichos.mjs              # como faz o bicho: lista, armadilha do português e rodada respondida pelos dados
node scripts/fluxo-album.mjs               # termina um treino, vê o aviso da figurinha e abre o álbum
node scripts/fluxo-mapa-jogo.mjs           # jogo do mapa: toca nos países e regiões, confere explicação, verde e XP
node scripts/fluxo-sons.mjs                # adivinhe o som: pelo arquivo tocado, acerta as opções em romeno; 🐾 dos bichos
node scripts/fluxo-roupas.mjs              # loja do Linu: restaura lições de romeno e XP, libera a căciulă, compra uma da loja com krill
node scripts/fluxo-voz-neural.mjs          # voz neural embutida: baixa a voz e fala sem voz no sistema (BROWSER=firefox, DIST=1)
node scripts/fluxo-variedades.mjs          # seletor único (italiano): variantes, sotaques e línguas lado a lado
node scripts/fluxo-tutorial-idioma.mjs     # 1ª visita: o Linu pergunta o idioma, prepara o conteúdo e cumprimenta nele
node scripts/fluxo-fotos.mjs               # fotos do pinguim: setas da faixa, foto aberta (setas, teclado, Esc, fechar) e seta da trilha
node scripts/fluxo-extras.mjs              # tutorial, voz, etimologia, sprint, conversa, comunidade, tema escuro
node scripts/fluxo-historia.mjs            # histórias: desvio, dica, final e contador de finais
node scripts/fluxo-praticas.mjs            # diário (corretor), palácio (jogo) e shadowing (microfone falso)
npx tsx scripts/fluxo-trilha.mjs          # faixa de subníveis e teste para pular
node scripts/fluxo-linguistica.mjs        # áreas da língua, quadro do IPA e aulas
npx tsx scripts/fluxo-russo.mjs           # russo: troca de idioma, cirílico, IPA, teclado, diário
npx tsx scripts/fluxo-espanhol.mjs        # espanhol: falsos amigos, palácio, variante da Espanha ([θ]), linguística, diário
npx tsx scripts/fluxo-sueco.mjs           # sueco: palácio en/ett, variante da Finlândia, diário (en/ett), IPA
npx tsx scripts/fluxo-noruegues.mjs       # norueguês: palácio en/ei/et, variante nynorsk, diário (en/ei/et), IPA
npx tsx scripts/fluxo-dinamarques.mjs     # dinamarquês: palácio en/et, variante do Schleswig do Sul, diário (en/et), IPA
npx tsx scripts/fluxo-portugues.mjs        # português de Portugal: variante do Brasil (IPA), diário (estar a, ênclise), falsos amigos
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
