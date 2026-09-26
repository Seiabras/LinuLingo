const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// expo-sqlite na web usa WebAssembly + SharedArrayBuffer
config.resolver.assetExts.push('wasm');
// contornos das subdivisões do mapa (um arquivo por país, baixado só quando necessário)
config.resolver.assetExts.push('geo');
config.server.enhanceMiddleware = (middleware) => (req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  return middleware(req, res, next);
};

module.exports = withNativeWind(config, { input: './global.css' });
