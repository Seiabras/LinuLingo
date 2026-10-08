import { chromium } from 'playwright-core';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

function chromiumPath() {
  const root = join(homedir(), '.cache/ms-playwright');
  const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  return process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined);
}

const browser = await chromium.launch({ executablePath: chromiumPath() });
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERROR:', m.text()); });
page.on('pageerror', (e) => console.log('PAGE ERROR:', e.message));
await page.goto('http://localhost:8123/atualizacoes', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(15000);
const body = await page.textContent('body');
console.log('TEM v9.3?', body.includes('v9.3'));
console.log('TEM TITULO 9.3?', body.includes('Variante, dialeto e sotaque'));
console.log('TEM v1.0?', body.includes('v1.0'));
console.log('TEM TITULO 1.0?', body.includes('O Linu dá as boas-vindas'));
await page.screenshot({ path: '/tmp/changelog-screenshot.png' });
await browser.close();
console.log('OK');
