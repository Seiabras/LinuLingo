# Poliglota 🐧

App de idiomas (React Native + Expo) que junta o melhor de Duolingo, Busuu, Rosetta Stone, Air Learn, LingoDeer, Drops, Speakly, Babbel e Mondly: trilha CEFR, repetição espaçada (SM-2), cultura e história antes da prática, imersão sem tradução, conversação com registro social e correção pela comunidade. Funciona offline: tudo fica num banco SQLite no aparelho.

**Experimente no navegador:** https://seiabras.github.io/poliglota/

O mascote é o **Linu**, um pinguim-de-barbicha (*Pygoscelis antarctica*).

## Idiomas

| Idioma | Família › ramo | Estado |
| --- | --- | --- |
| 🇷🇴 Romeno | Indo-europeu › Itálico › Românico › Românico oriental | **disponível** |
| 🇪🇸 Espanhol | Indo-europeu › Itálico › Românico › Ibero-românico | em breve |
| 🇬🇧 Inglês | Indo-europeu › Germânico › Germânico ocidental | em breve |
| 🇫🇮 Finlandês | Urálico › Fínico › Fínico setentrional | em breve |
| 🇪🇪 Estoniano | Urálico › Fínico › Fínico meridional | em breve |
| 🇯🇵 Japonês | Japônico | em breve |
| 🇰🇷 Coreano | Coreânico | em breve |

O seletor do Perfil agrupa os idiomas por família e ramo linguístico.

## O que tem no romeno

- **Trilha CEFR** com 5 unidades (A1 → B1) e 20 lições: lição, desafio de voz e prova por unidade.
- **Lição em 6 etapas**: card «aprenda primeiro» (história, cultura, o porquê da gramática, guia de letras) → associação imagem-som sem tradução (deslize → para «já sei») → lacunas com teclado de ă â î ș ț → desafio de voz (palavras em verde/amarelo/vermelho) → envio para a comunidade → recompensa com XP e fixação no SRS.
- **Sprint de 5 minutos** e **revisão do dia** com gestos: → sei, ← não sei, ↑ fácil, ↓ difícil.
- **Cofre de vocabulário**: 4.162 palavras por frequência (meta: 4.000), estado no SRS, domínio por categoria e **árvore etimológica** com 41 raízes (latim, eslavo, grego, dácio) e cognatos em português, espanhol, italiano e francês.
- **Histórias interativas** em 15 subníveis (A1.1, A1.2, A2.1 … B2.4, C1.1, C1.2, C2), 45 no total, com pelo menos 3 por subnível: leia em romeno e escolha o que o Linu faz. Escolhas que mostram que o texto não foi entendido dão uma dica; cada história tem vários finais.
- **Aba Gramática**: 40 tópicos do A1.1 ao C2, com tabelas, exemplos com áudio e IPA, armadilhas para lusófonos e mini-quiz.
- **IPA** (Alfabeto Fonético Internacional) gerado por regras em todo o romeno do app.
- **Diário**: 3 frases por dia sobre a sua vida. O corretor offline devolve acentos, acerta «un/o» e «meu/mea» pelo gênero do vocabulário e pega erros típicos de lusófonos (*eu este*, *sunt 20 de ani*, *am foame*…), mostrando a versão «como um nativo diria».
- **Shadowing**: ouvir e repetir (depois ou junto com o modelo), com a onda e a curva de altura da voz ao vivo; compara o ritmo e a entonação do fim da frase (sim/não sobe; «ce, unde…» e afirmações descem).
- **Palácio da memória**: os 3 gêneros moram em salas — 🔥 Forja (masc.), 🌊 Lago (fem.), 🦎 Jardim do Camaleão (neutro) —, com jogo «em que sala mora?» e mnemônicos próprios.
- **Áudio de falantes nativos** nas palavras, do [Lingua Libre](https://lingualibre.org) (Wikimedia Commons, licenças livres; créditos no app em Perfil › Créditos dos áudios). Frases usam a voz do aparelho.
- **Mapa-múndi «Onde se fala»**: os 249 países e territórios da ISO 3166-1 (mais o Kosovo, código provisório XK), as 5.046 subdivisões da ISO 3166-2 (as regiões onde cada língua é falada) e uma aba com os 31 países que deixaram de existir (ISO 3166-3), com minimapa dos sucessores. Cada país mostra as línguas, **animais nativos** e **instrumentos musicais** típicos.
- **Variantes**: romeno da Romênia (padrão) e da **Moldávia** (46 diferenças de vocabulário, pronúncia, cultura e 3 histórias em Chișinău, Orheiul Vechi e Cricova).
- **Conversação guiada**: café, hotel, bar com amigos, entrevista de emprego. O Linu avisa quando o tom não combina (ex.: «tu» com o recepcionista).
- **Comunidade**: corrigir textos de outros alunos (+20 XP) e acompanhar os próprios envios.
- **Gamificação**: ofensiva com congelamento, meta diária, XP da semana.
- **Tutorial com o Linu** na primeira visita (e no Perfil), com um cartão de verdade para treinar os gestos.
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
```

Contornos: [Natural Earth](https://www.naturalearthdata.com/) 1:50m (domínio público). Nomes em pt-BR: projeto [iso-codes](https://salsa.debian.org/iso-codes-team/iso-codes) (LGPL-2.1).

## Publicar

`npm run build:web` gera `dist/` para o GitHub Pages (base `/poliglota`, com o `coi-serviceworker` porque o Pages não envia os cabeçalhos COOP/COEP que o SQLite da web exige). O workflow `.github/workflows/pages.yml` faz isso a cada push em `master`.

## Testes

```bash
npm test                                   # SM-2, ofensiva, respostas, trilha e validação do conteúdo
npx tsc --noEmit && npx expo lint
node scripts/fluxo-licao.mjs               # faz uma lição inteira no navegador (servidor rodando)
node scripts/fluxo-extras.mjs              # tutorial, voz, etimologia, sprint, conversa, comunidade, tema escuro
node scripts/fluxo-historia.mjs            # histórias: desvio, dica, final e contador de finais
node scripts/fluxo-praticas.mjs            # diário (corretor), palácio (jogo) e shadowing (microfone falso)
node scripts/fluxo-mapa.mjs                # mapa ISO 3166-1/3166-3 e variante da Moldávia
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
└── data/         conteúdo por idioma (ro/, es/) e registro de idiomas
```

### Adicionar um idioma

1. Crie `src/data/<código>/` com `vocabulario.ts`, `curriculo.ts`, `etimologia.ts`, `conversas.ts` e `index.ts` (um `LanguagePack`).
2. Registre em `PACKS` de `src/data/idiomas.ts`.
3. Rode `npm test`. O teste de conteúdo verifica palavras das lições, gabaritos e etimologia.
