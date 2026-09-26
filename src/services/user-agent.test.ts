/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { browserFromUserAgent, osFromUserAgent } from './user-agent';
import { ALL_OS, voiceGuide } from '../data/guias-voz';

const UA = {
  linuxFirefox: 'Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0',
  windowsEdge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36 Edg/140.0',
  iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  ipadDesktopMode: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  android: 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36',
  chromebook: 'Mozilla/5.0 (X11; CrOS x86_64 15000.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36',
};

test('detecta o sistema pelo user agent', () => {
  assert.equal(osFromUserAgent(UA.linuxFirefox), 'linux');
  assert.equal(osFromUserAgent(UA.windowsEdge), 'windows');
  assert.equal(osFromUserAgent(UA.iphone), 'ios');
  assert.equal(osFromUserAgent(UA.ipadDesktopMode, 5), 'ios');
  assert.equal(osFromUserAgent(UA.ipadDesktopMode, 0), 'macos');
  assert.equal(osFromUserAgent(UA.android), 'android');
  assert.equal(osFromUserAgent(UA.chromebook), 'chromeos');
});

test('detecta o navegador (Edge antes de Chrome, Chrome antes de Safari)', () => {
  assert.equal(browserFromUserAgent(UA.windowsEdge), 'edge');
  assert.equal(browserFromUserAgent(UA.android), 'chrome');
  assert.equal(browserFromUserAgent(UA.iphone), 'safari');
  assert.equal(browserFromUserAgent(UA.linuxFirefox), 'firefox');
});

test('todo sistema tem guia de voz, com a voz certa do romeno', () => {
  for (const os of ALL_OS) assert.ok(voiceGuide(os, 'ro', 'Romeno', 'Română', 'Bună ziua').length >= 2, os);
  assert.ok(voiceGuide('ios', 'ro', 'Romeno', 'Română', 'Bună ziua').some((s) => s.text.includes('Ioana')));
  assert.ok(voiceGuide('linux', 'ro', 'Romeno', 'Română', 'Bună ziua')[0].code?.includes('spd-say -l ro'));
});
