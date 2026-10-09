const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// expo-sqlite na web usa WebAssembly + SharedArrayBuffer
config.resolver.assetExts.push('wasm');
// contornos das subdivisões do mapa (um arquivo por país, baixado só quando necessário)
config.resolver.assetExts.push('geo');
// worktrees de agentes (.claude/worktrees) são cópias inteiras do repo, só para trabalho isolado —
// o Metro não precisa varrer nem vigiar esses arquivos (achado real: deixava o Metro muito lento
// pra subir e pra notar arquivo novo, com várias worktrees abertas ao mesmo tempo, 09/10/2026)
config.resolver.blockList = [...config.resolver.blockList, /\.claude[\\/]worktrees[\\/].*/];
config.server.enhanceMiddleware = (middleware) => (req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  return middleware(req, res, next);
};

module.exports = withNativeWind(config, { input: './global.css' });
