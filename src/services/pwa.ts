import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { CLIPS } from '@/data/audio-index';

/**
 * O app na web como «app instalado» (PWA): o pedido de instalação do navegador e as gravações
 * guardadas para ouvir sem internet (quem guarda é o service worker, scripts/sw-modelo.js).
 */

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };

/** instalado · pronto (o navegador oferece instalar) · ios (pelo menu Compartilhar) · manual (pelo menu do navegador) */
export type InstallState = 'instalado' | 'pronto' | 'ios' | 'manual';

const web = Platform.OS === 'web' && typeof window !== 'undefined';
let deferred: InstallPrompt | null = null;
let installed = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

// o navegador avisa uma vez só, logo que a página carrega: o aviso é guardado desde o início
if (web) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferred = e as InstallPrompt;
    emit();
  });
  window.addEventListener('appinstalled', () => {
    deferred = null;
    installed = true;
    emit();
  });
}

function standalone(): boolean {
  if (!web) return false;
  return window.matchMedia?.('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

function isIos(): boolean {
  if (!web) return false;
  const ua = navigator.userAgent;
  // o iPad se apresenta como Mac; a diferença é a tela de toque
  return /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}

export function installState(): InstallState | null {
  if (!web) return null;
  if (installed || standalone()) return 'instalado';
  // no iPhone e no iPad nenhum navegador oferece o pedido: instala-se pelo menu Compartilhar
  if (isIos()) return 'ios';
  return deferred ? 'pronto' : 'manual';
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** Estado da instalação (null fora da web: no celular o app já é instalado). */
export function useInstallState(): InstallState | null {
  return useSyncExternalStore(subscribe, installState, installState);
}

/** Abre o pedido de instalação do navegador. Devolve true se a pessoa aceitou. */
export async function promptInstall(): Promise<boolean> {
  const p = deferred;
  if (!p) return false;
  deferred = null;
  await p.prompt();
  const { outcome } = await p.userChoice;
  if (outcome === 'accepted') {
    installed = true;
    keepStorage();
  }
  emit();
  return outcome === 'accepted';
}

/** Pede ao navegador que não apague os dados do app (o progresso e o que foi guardado) quando faltar espaço. */
export function keepStorage() {
  if (web) navigator.storage?.persist?.().catch(() => {});
}

/** O service worker está ativo (no site publicado; no servidor de desenvolvimento não há). */
export function offlineReady(): boolean {
  return web && typeof caches !== 'undefined' && !!navigator.serviceWorker?.controller;
}

const EXTRAS = 'linulingo-extras-v1';

function audioUrls(lang: string): string[] {
  return Object.values(CLIPS[lang] ?? {}).map((c) => new URL(Asset.fromModule(c.src).uri, window.location.href).href);
}

/** Quantas gravações do idioma já estão guardadas no aparelho. */
export async function savedAudios(lang: string): Promise<{ saved: number; total: number }> {
  const urls = audioUrls(lang);
  if (!offlineReady()) return { saved: 0, total: urls.length };
  const cache = await caches.open(EXTRAS);
  const have = new Set((await cache.keys()).map((r) => r.url));
  return { saved: urls.filter((u) => have.has(u)).length, total: urls.length };
}

/**
 * Baixa as gravações do idioma que ainda faltam (o service worker as guarda ao passar).
 * Avisa o andamento; devolve quantas falharam (sem internet no meio, por exemplo).
 */
export async function saveAudios(
  lang: string,
  onProgress: (p: { done: number; total: number; bytes: number }) => void,
  signal?: { cancelled: boolean },
): Promise<number> {
  keepStorage();
  const cache = await caches.open(EXTRAS);
  const have = new Set((await cache.keys()).map((r) => r.url));
  const missing = audioUrls(lang).filter((u) => !have.has(u));
  let done = 0;
  let bytes = 0;
  let failed = 0;
  onProgress({ done, total: missing.length, bytes });
  for (let i = 0; i < missing.length && !signal?.cancelled; i += 8) {
    await Promise.all(
      missing.slice(i, i + 8).map(async (u) => {
        try {
          const res = await fetch(u);
          if (!res.ok) throw new Error(String(res.status));
          const body = await res.blob();
          bytes += body.size;
          // o service worker também guarda, em segundo plano; aqui garante que ficou guardado antes de contar
          await cache.put(u, new Response(body, { headers: { 'Content-Type': res.headers.get('Content-Type') ?? 'audio/mpeg' } }));
        } catch {
          failed++;
        }
        done++;
      }),
    );
    onProgress({ done, total: missing.length, bytes });
  }
  return failed;
}
