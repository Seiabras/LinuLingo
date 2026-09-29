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
- Só licenças livres (CC0, CC BY, CC BY-SA, domínio público), com autor e licença na tela de créditos.

## Citações (decisão do dono do projeto)

O LinuLingo é um app pessoal e sem fins lucrativos, então citações curtas de qualquer autor podem entrar, inclusive de autores recentes. Não é preciso esperar os 70 anos do domínio público. Mas sempre com o crédito: o autor e a obra. Trechos longos (páginas, letras de música inteiras) continuam de fora.
