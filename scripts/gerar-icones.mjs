// Gera a logo do LinuLingo (a cabeça do Linu) e os ícones do app a partir de um SVG só:
//  - assets/logo/linu-logo.svg        : a logo (fundo azul da marca)
//  - assets/icon.png (1024)           : ícone do app (iOS e geral)
//  - assets/android-icon-*.png (512)  : ícone adaptativo do Android (frente, fundo, monocromático)
//  - assets/favicon.png (48)          : ícone da aba do navegador
//  - assets/splash-icon.png (1024)    : imagem da abertura
//  - assets/logo/linulingo-banner.png : banner do README (ícone + nome)
// O desenho é o mesmo Linu de src/components/Linu.tsx, ampliado e com olhos maiores.
// Uso: node scripts/gerar-icones.mjs   (usa o Chromium do Playwright para rasterizar)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BLUE = '#2563EB';
const INK = '#1F2A44';
const WHITE = '#F8FAFC';

/** A cabeça do Linu num quadro 1024×1024; `k` encolhe o desenho em volta do centro (zona segura do Android). */
function linu({ k = 1, mono = false } = {}) {
  const ink = mono ? '#FFFFFF' : INK;
  const face = mono ? 'none' : WHITE;
  const t = `translate(512 540) scale(${k}) translate(-512 -540)`;
  if (mono) {
    // silhueta branca de cabeça e ombros com o rosto vazado (transparente), e olhos e bico brancos dentro
    const faceD = 'M214 522 Q224 368 358 368 Q512 406 666 368 Q800 368 810 522 Q829 752 704 867 Q512 944 320 867 Q195 752 214 522 Z';
    return `<defs><mask id="rosto"><rect width="1024" height="1024" fill="#fff"/><path d="${faceD}" fill="#000" transform="${t}"/></mask></defs>
    <g mask="url(#rosto)"><g transform="${t}">
      <circle cx="512" cy="464" r="317" fill="#fff"/>
      <ellipse cx="512" cy="790" rx="384" ry="461" fill="#fff"/>
    </g></g>
    <g transform="${t}">
      <circle cx="388" cy="500" r="66" fill="#fff"/><circle cx="636" cy="500" r="66" fill="#fff"/>
      <path d="M440 572 Q512 560 584 572 Q556 640 512 668 Q468 640 440 572 Z" fill="#fff"/>
    </g>`;
  }
  return `<g transform="${t}">
    <!-- ombros e barriga -->
    <ellipse cx="512" cy="790" rx="384" ry="461" fill="${ink}"/>
    <ellipse cx="512" cy="930" rx="269" ry="326" fill="${face}"/>
    <!-- cabeça com o «boné» preto e o rosto branco -->
    <circle cx="512" cy="464" r="317" fill="${ink}"/>
    <ellipse cx="400" cy="250" rx="120" ry="60" fill="#FFFFFF" opacity="0.10" transform="rotate(-24 400 250)"/>
    <path d="M214 522 Q224 368 358 368 Q512 406 666 368 Q800 368 810 522 Q829 752 704 867 Q512 944 320 867 Q195 752 214 522 Z" fill="${face}"/>
    <!-- a barbicha -->
    <path d="M234 406 Q224 656 339 733 Q512 829 685 733 Q800 656 790 406" stroke="${ink}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <!-- olhos grandes, íris castanho-avermelhada como na espécie -->
    <circle cx="388" cy="500" r="66" fill="#7C2D12"/><circle cx="636" cy="500" r="66" fill="#7C2D12"/>
    <circle cx="392" cy="506" r="42" fill="${ink}"/><circle cx="640" cy="506" r="42" fill="${ink}"/>
    <circle cx="410" cy="478" r="19" fill="#FFFFFF"/><circle cx="658" cy="478" r="19" fill="#FFFFFF"/>
    <circle cx="376" cy="526" r="8" fill="#FFFFFF" opacity="0.8"/><circle cx="624" cy="526" r="8" fill="#FFFFFF" opacity="0.8"/>
    <!-- bochechas -->
    <ellipse cx="300" cy="612" rx="44" ry="30" fill="#FB7185" opacity="0.45"/>
    <ellipse cx="724" cy="612" rx="44" ry="30" fill="#FB7185" opacity="0.45"/>
    <!-- bico -->
    <path d="M440 572 Q512 560 584 572 Q556 640 512 668 Q468 640 440 572 Z" fill="#111827"/>
  </g>`;
}

const svg = (body, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">${bg ? `<rect width="1024" height="1024" fill="${bg}"/>` : ''}${body}</svg>`;

const LOGO = svg(linu(), BLUE);
const FOREGROUND = svg(linu({ k: 0.62 }), null);
const MONO = svg(linu({ k: 0.62, mono: true }), null);
const BACKGROUND = svg('', BLUE);
const SPLASH = svg(linu({ k: 0.8 }), null);

mkdirSync('assets/logo', { recursive: true });
writeFileSync('assets/logo/linu-logo.svg', LOGO);

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await browser.newPage();

async function render(markup, file, size, transparent) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<html><body style="margin:0;background:transparent">${markup.replace('width="1024" height="1024"', `width="${size}" height="${size}"`)}</body></html>`,
  );
  await page.screenshot({ path: file, omitBackground: transparent, clip: { x: 0, y: 0, width: size, height: size } });
  console.log('  ', file, `${size}×${size}`);
}

await render(LOGO, 'assets/icon.png', 1024, false);
await render(FOREGROUND, 'assets/android-icon-foreground.png', 512, true);
await render(BACKGROUND, 'assets/android-icon-background.png', 512, false);
await render(MONO, 'assets/android-icon-monochrome.png', 512, true);
await render(LOGO, 'assets/favicon.png', 48, false);
await render(SPLASH, 'assets/splash-icon.png', 1024, true);

// app instalável (PWA): ícones do manifesto em public/ (copiados para a raiz do site)
mkdirSync('public', { recursive: true });
await render(LOGO, 'public/icon-192.png', 192, false);
await render(LOGO, 'public/icon-512.png', 512, false);
// «maskable»: o sistema recorta em círculo ou gota, então o Linu fica dentro da zona segura (80%)
await render(svg(linu({ k: 0.72 }), BLUE), 'public/icon-maskable-512.png', 512, false);
await render(LOGO, 'public/apple-touch-icon.png', 180, false);

// banner do README: o ícone arredondado e o nome
const BANNER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 400" width="1280" height="400">
  <rect width="1280" height="400" rx="48" fill="#EFF6FF"/>
  <clipPath id="c"><rect x="60" y="50" width="300" height="300" rx="68"/></clipPath>
  <g clip-path="url(#c)"><rect x="60" y="50" width="300" height="300" fill="${BLUE}"/><g transform="translate(60 50) scale(${300 / 1024})">${linu()}</g></g>
  <text x="410" y="222" font-family="Noto Sans CJK JP, sans-serif" font-weight="900" font-size="150" fill="${INK}" letter-spacing="-3">LinuLingo</text>
  <text x="416" y="292" font-family="Noto Sans CJK JP, sans-serif" font-weight="500" font-size="40" fill="${BLUE}">aprenda idiomas com o Linu</text>
</svg>`;
await page.setViewportSize({ width: 1280, height: 400 });
await page.setContent(`<html><body style="margin:0;background:transparent">${BANNER}</body></html>`);
await page.screenshot({ path: 'assets/logo/linulingo-banner.png', omitBackground: true, clip: { x: 0, y: 0, width: 1280, height: 400 } });
console.log('   assets/logo/linulingo-banner.png 1280×400');
await browser.close();
console.log('✅ logo e ícones gerados');
