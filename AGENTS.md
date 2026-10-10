This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

## Imagens, não emojis, no conteúdo (pedido do dono do projeto)

O conteúdo de todos os idiomas deve mostrar **imagens em vez de emojis**: emoji não existe para tudo e é pequeno demais para ver bem.

- Palavras do vocabulário: a imagem vem da tradução em português (`photoFor` em `src/components/WordImage.tsx`), primeiro a foto do Wikimedia Commons (`src/data/fotos-palavras.ts`) e, para o que não tem foto (verbos, adjetivos, palavras abstratas), um pictograma de licença livre. O emoji fica só como último recurso.
- Ao criar conteúdo novo (palavras, lições, histórias, bichos, idiomas novos), não conte com o emoji para ilustrar: garanta que a palavra tem imagem (rode os scripts de imagens depois de acrescentar palavras) e use a mesma tradução em português das outras línguas para o mesmo conceito, para a imagem ser reaproveitada.
- **Cada palavra do mesmo Cofre tem uma imagem só dela** (decisão do dono do projeto, 08/10/2026): duas palavras diferentes nunca mostram a mesma foto, o mesmo pictograma ou o mesmo emoji (“oi” e “tchau” não podem ter a mesma imagem). Palavras abstratas, conectivos e expressões também ganham uma imagem que faça sentido (09/10/2026): um ícone de acervo livre por metáfora clara (paciência → ampulheta, democracia → urna) ou um desenho próprio do app (`scripts/desenhar-icones-proprios.mjs`: dias da semana, meses, números, parentesco, conectivos). Só quando nada disso serve a palavra fica com o cartão desenhado pelo app (a própria palavra, com cor e padrão só dela), nunca com um ícone forçado. Ícone do OpenMoji que é um emoji comum conta como o mesmo emoji: prefira outro acervo, ou dê ao conceito uma lista de opções em `src/data/icones-mapa.ts`.
- Só licenças livres, com autor e licença na tela de créditos: CC0, CC BY, CC BY-SA, domínio público e, só para ícones e pictogramas, também as licenças permissivas de software MIT, ISC e Apache 2.0 (Lucide, Tabler, Material Symbols). Nada com NC ou ND.

## Citações (decisão do dono do projeto)

O LinuLingo é um app pessoal e sem fins lucrativos, então citações curtas de qualquer autor podem entrar, inclusive de autores recentes. Não é preciso esperar os 70 anos do domínio público. Mas sempre com o crédito: o autor e a obra. Trechos longos (páginas, letras de música inteiras) continuam de fora.

## Aspas (decisão do dono do projeto)

Nas explicações em português (tutorial, gramática, dicas, traduções), as aspas são as tipográficas “ ” e, dentro delas, ‘ ’. Nunca « » no lugar dessas aspas.

Mas « », » «, „ “ e afins **não são proibidos**: a fidelidade ao idioma vem primeiro. Frases e textos escritos no próprio idioma estudado usam as aspas desse idioma, com a tipografia dele (o francês escreve « Bonjour ! », com espaço por dentro; o dinamarquês, »sådan«; o islandês e o lituano, „svona“). E as lições que ensinam a pontuação de um idioma mostram o sinal de verdade. Não troque essas aspas em massa.

## Dialetos, sotaques e variantes de escrita (regra do dono do projeto, 10/10/2026)

Todo idioma do app, os que já estão e os que entrarem, tem de ser verificado em três pontos:

1. **Dialetos:** a língua tem dialetos? Dialeto é um país ou um grupo grande (português do Brasil × de Portugal, inglês dos EUA × do Reino Unido, persa do Irã × dari do Afeganistão). Cada dialeto vira um sub-curso em `variants` (`kind: 'dialeto'`), com cartão, pronúncia, vocabulário e duas histórias. Sem fonte para as histórias, o dialeto entra mesmo assim, com o que é documentado (`src/data/dialeto-de-sotaque.ts` monta o dialeto a partir do sotaque que o descrevia). No mundo ideal, todo dialeto ganha um curso próprio, até o teto, como um idioma do app (ver `PENDENTES.md`).
2. **Sotaques:** cada dialeto tem sotaques? Tudo o que fica dentro de um dialeto (uma cidade, uma região, um estado) é sotaque, em `accents` (`kind: 'sotaque'`, com `variant` apontando o dialeto). As línguas próprias da região (o sardo na Itália, o sámi na Suécia) são `kind: 'língua'`, com uma entrada em `OWN_LANGUAGE_META` (`src/data/linguas-proprias.ts`).
3. **Variantes de escrita:** a língua se escreve de mais de um jeito? Bokmål × nynorsk no norueguês, hanzi simplificado × tradicional × pinyin no chinês, cirílico × latino no sérvio. Cada escrita é uma variante (`kind: 'variante'`) em `variants`. Quando a variante ou o dialeto tem curso próprio no app, o campo `curso` aponta para ele e o detalhe mostra o botão para abrir o curso. O mongol na escrita tradicional (`mvf`) foi o primeiro e é o modelo para todos (decisão do dono, 10/10/2026).

A definição de “dialeto” do dono (variedade completa, com gramática, sintaxe, vocabulário e pronúncia próprios; “sotaque” é só a pronúncia) serve **só para decidir exceções**: dentro de um país, vale sotaque. O que tiver dúvida vai para `docs/duvidas-variedades.md`, para o dono decidir, e a parte sem dúvida segue em frente. Nada de inventar conteúdo linguístico: cada traço e cada exemplo vem com a fonte no comentário do arquivo.

O teste “todo idioma foi revisto” (`src/services/dialetos.test.ts`) falha quando um idioma não tem dialetos, sotaques nem variantes de escrita e não está na lista `SEM_DIVISAO` (línguas antigas, artificiais ou de uma comunidade só, com o motivo). O detalhe por idioma está em `docs/variedades-por-idioma.md` e `docs/variedades-propostas.md`.
