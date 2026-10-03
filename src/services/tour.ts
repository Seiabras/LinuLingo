import { useSyncExternalStore } from 'react';
import type { View } from 'react-native';
import type { LinuMood } from '@/components/Linu';
import type { LanguagePack } from '@/data/types';
import { EXPEDITION_PLACES } from '@/data/expedicoes';
import { destinoDoIdioma } from '@/services/aventura';
import { nomeIdioma } from '@/services/idioma-nome';

/**
 * O passeio guiado do tutorial: depois de escolher o idioma, o Linu vai abrindo cada página do app e
 * apontando a parte de que está falando, num balão curto por vez (ver TourOverlay). Cada passo diz
 * a página (`rota`), o pedaço da tela a destacar (`alvo`, marcado com `alvoDoTour`) e o que dizer.
 */
export interface PassoTour {
  id: string;
  rota: string;
  alvo?: string;
  humor: LinuMood;
  titulo: string;
  texto: string;
  extra?: 'etapas' | 'gestos' | 'voz';
}

/** Limite de cada balão: o passeio mostra um pouco de cada vez, nunca um bloco de texto. */
export const TOUR_MAX_TEXTO = 190;

export function passosDoTour(pack: LanguagePack, opts: { web: boolean }): PassoTour[] {
  const idioma = nomeIdioma(pack.name);
  const destino = destinoDoIdioma(pack.code, pack.flag)?.name ?? `onde se fala ${idioma}`;
  const ff = pack.falseFriends?.[0];
  const sotaques = (pack.accents ?? []).filter((a) => a.kind !== 'língua').length;
  const variedades = (pack.variants?.length ?? 0) > 1 || sotaques > 0;
  const escrita = textoDaEscrita(pack);
  const p = (x: PassoTour) => x;
  return [
    // trilha
    p({
      id: 'abrigo',
      rota: '/',
      alvo: 'abrigo',
      humor: 'feliz',
      titulo: 'Este é o meu abrigo',
      texto: 'Cada objeto é um atalho: a porta abre a parada de agora, o mural mostra a meta do dia e a cama guarda as revisões.',
    }),
    p({
      id: 'objetos',
      rota: '/',
      alvo: 'abrigo',
      humor: 'falando',
      titulo: 'Pode mexer em tudo',
      texto: 'O rádio abre a Conversa, o caderno é o diário, a estante guarda o álbum e no cabideiro ficam as minhas roupinhas. O lampião troca a luz.',
    }),
    p({
      id: 'moradias',
      rota: '/',
      alvo: 'moradias',
      humor: 'comemorando',
      titulo: 'Casas novas pelo caminho',
      texto: `Conforme a gente avança, eu me mudo: barraca, estação, refúgio, navio e, no fim, uma casa em ${destino}.`,
    }),
    p({
      id: 'ofensiva',
      rota: '/',
      alvo: 'status',
      humor: 'comemorando',
      titulo: 'Ofensiva e XP',
      texto: '🔥 conta os dias seguidos estudando. A cada 7 dias você ganha um 🧊, que protege um dia perdido. ⚡ é o seu XP.',
    }),
    p({
      id: 'mapa',
      rota: '/',
      alvo: 'mapa',
      humor: 'falando',
      titulo: 'A trilha é uma expedição',
      texto: `Saio da Antártica e desembarco em ${destino}. Cada parada é um subnível, do A1.1 ao C2: toque nela para ver as lições.`,
    }),
    p({
      id: 'etapas',
      rota: '/',
      alvo: 'mapa',
      humor: 'pensando',
      titulo: 'Cada lição, 5 etapas',
      texto: 'Primeiro você entende, depois pratica. Nada de decorar sem saber o porquê:',
      extra: 'etapas',
    }),
    p({
      id: 'travessia',
      rota: '/',
      alvo: 'mapa',
      humor: 'falando',
      titulo: 'As travessias 🌊',
      texto: 'Entre as paradas fica um desafio com a unidade toda: rádio, decisões, lacunas e voz. Com 80% de acertos, a gente segue viagem.',
    }),
    p({
      id: 'pular',
      rota: '/',
      alvo: 'mapa',
      humor: 'pensando',
      titulo: 'Já sabe um nível?',
      texto: 'Abra a parada e toque em “Já sei isto”: um teste rápido e você pula até lá.',
    }),
    p({
      id: 'sprint',
      rota: '/',
      alvo: 'sprint',
      humor: 'feliz',
      titulo: 'Sprint de 5 minutos',
      texto: 'No sprint e na revisão, você desliza os cartões. Experimente:',
      extra: 'gestos',
    }),
    ...(escrita
      ? [
          p({
            id: 'escrita',
            rota: '/',
            alvo: pack.alphabet ? 'pratica:/alfabeto' : 'praticas',
            humor: 'pensando',
            titulo: 'Outra escrita, sem medo',
            texto: escrita,
          }),
        ]
      : []),
    ...(ff
      ? [
          p({
            id: 'falsos-amigos',
            rota: '/',
            alvo: 'pratica:/falsos-amigos',
            humor: 'pensando',
            titulo: 'Cuidado com os falsos amigos',
            texto: curto(
              `“${ff.word}” quer dizer “${ff.means}”, não “${ff.looksLike}”. Aqui tem a lista e um jogo para treinar.`,
              `“${ff.word}” quer dizer “${semNota(ff.means)}”, não “${semNota(ff.looksLike)}”. Aqui tem a lista e um jogo para treinar.`,
            ),
          }),
        ]
      : []),
    p({
      id: 'praticas',
      rota: '/',
      alvo: 'praticas',
      humor: 'falando',
      titulo: 'Mais práticas',
      texto: 'Escuta e ditado, histórias com vários finais, diário corrigido, shadowing com a curva da melodia… um treino para cada coisa.',
    }),
    p({
      id: 'erros',
      rota: '/',
      alvo: 'pratica:/erros',
      humor: 'pensando',
      titulo: 'Caderno de erros',
      texto: 'Tudo o que você erra, em qualquer treino, vem para cá. Acertou 2 vezes seguidas, o item sai do caderno.',
    }),
    p({
      id: 'album',
      rota: '/',
      alvo: 'pratica:/album',
      humor: 'comemorando',
      titulo: 'Álbum de figurinhas',
      texto: 'Cada lição ou treino vale uma figurinha de bicho ou instrumento. Com 3 repetidas, você troca por uma que falta.',
    }),
    ...(EXPEDITION_PLACES[pack.code]
      ? [
          p({
            id: 'expedicao',
            rota: '/',
            alvo: 'pratica:/expedicao',
            humor: 'falando',
            titulo: 'Expedição da semana',
            texto: 'Toda semana eu viajo por 3 cidades. Ouça a pista no idioma e ache no mapa para onde fui: vale uma figurinha dourada.',
          }),
        ]
      : []),
    p({
      id: 'cursos',
      rota: '/',
      alvo: 'pratica:/cursos',
      humor: 'feliz',
      titulo: 'Cursos curtos',
      texto: 'Libras, Braille, esperanto, klingon e o Tsevhu, uma língua que se escreve em volta de um peixe koi.',
    }),
    // cofre
    p({
      id: 'cofre',
      rota: '/vocabulario',
      alvo: 'cofre',
      humor: 'pensando',
      titulo: 'O cofre lembra por você',
      texto: 'Cada palavra que você aprende entra aqui. Eu calculo o dia certo de revisar: um pouco antes de você esquecer.',
    }),
    p({
      id: 'etimologia',
      rota: '/vocabulario',
      alvo: 'cofre-abas',
      humor: 'feliz',
      titulo: 'Palavras parentes',
      texto: 'Na aba Etimologia, a árvore de cada raiz em várias línguas: noite, noche, notte, night.',
    }),
    // gramática
    p({
      id: 'gramatica',
      rota: '/gramatica',
      alvo: 'gramatica-modos',
      humor: 'pensando',
      titulo: 'Dois jeitos de estudar',
      texto: '“Por nível” segue a trilha, do A1.1 ao C2. “Por área” é um curso de linguística, com fonética, sintaxe e o quadro do IPA.',
    }),
    // cultura
    p({
      id: 'cultura',
      rota: '/cultura',
      alvo: 'cultura-abas',
      humor: 'feliz',
      titulo: 'Cultura & história',
      texto: `A família do ${idioma}, bichos, comida e folclore de lá. Nas outras abas: línguas próprias, indígenas, de sinais e tipos de línguas.`,
    }),
    ...(variedades
      ? [
          p({
            id: 'sotaques',
            rota: '/cultura',
            alvo: 'cultura-variedades',
            humor: 'falando',
            titulo: 'Jeitos de falar',
            texto: `${sotaques ? `São ${sotaques} jeitos de falar ${idioma}. ` : ''}Escolha um e a minha voz e a pronúncia passam a seguir o jeito de lá.`,
          }),
        ]
      : []),
    p({
      id: 'mundo',
      rota: '/mapa',
      alvo: 'mapa-idiomas',
      humor: 'falando',
      titulo: 'O mundo das línguas',
      texto: 'Toque num idioma para ver onde se fala, ou num país para ver as línguas, os bichos e os instrumentos de lá. São mais de 8 mil idiomas.',
    }),
    p({
      id: 'linha-do-tempo',
      rota: '/mapa',
      alvo: 'mapa-linha',
      humor: 'pensando',
      titulo: 'Linha do tempo',
      texto: 'Etapa por etapa, por onde 16 famílias de línguas se espalharam até hoje.',
    }),
    // conversa e comunidade
    p({
      id: 'conversa',
      rota: '/conversa',
      alvo: 'conversa-lista',
      humor: 'falando',
      titulo: 'Conversa',
      texto: 'Situações de verdade: café, hotel, entrevista. Eu aviso se o tom ficou formal ou informal demais.',
    }),
    p({
      id: 'comunidade',
      rota: '/comunidade',
      alvo: 'comunidade',
      humor: 'feliz',
      titulo: 'Comunidade',
      texto: 'Avalie colegas com 3 emojis e ganhe 20 XP. Para ser avaliado, mande seu diário ou um áudio por link, sem servidor.',
    }),
    // perfil
    p({
      id: 'meta',
      rota: '/perfil',
      alvo: 'perfil-meta',
      humor: 'comemorando',
      titulo: 'Meta do dia',
      texto: 'Escolha quanto quer estudar por dia, de 10 a 50 XP. Aqui também se troca o idioma.',
    }),
    p({
      id: 'loja',
      rota: '/perfil',
      alvo: 'perfil-loja',
      humor: 'feliz',
      titulo: 'Loja do Linu',
      texto: `Roupas e pinturas do mundo todo. As do ${idioma} eu ganho nas lições; as outras se compram com krill 🦐, que você ganha estudando.`,
    }),
    ...(opts.web
      ? [
          p({
            id: 'app',
            rota: '/perfil',
            alvo: 'perfil-app',
            humor: 'feliz',
            titulo: 'Leve o app com você',
            texto: 'Instale o LinuLingo como app: ganha um ícone na tela inicial e funciona sem internet.',
          }),
        ]
      : []),
    p({
      id: 'voz',
      rota: '/perfil',
      alvo: 'perfil-ajuda',
      humor: 'falando',
      titulo: 'Minha voz',
      texto: 'Quando há gravação de um nativo, você ouve ele. Senão, eu falo. Este tutorial também fica aqui, para rever.',
      extra: 'voz',
    }),
    p({
      id: 'fim',
      rota: '/',
      alvo: 'mapa',
      humor: 'comemorando',
      titulo: 'Bora começar!',
      texto: `${pack.phrases.letsStart[0]} (${semNota(pack.phrases.letsStart[1])}) A primeira parada já está aberta.`,
    }),
  ];
}

/** O texto inteiro, se cabe no balão; senão, a versão curta. */
const curto = (inteiro: string, resumo: string) => (inteiro.length <= TOUR_MAX_TEXTO ? inteiro : resumo);
/** Tira a explicação entre parênteses do fim: “moça, garota (palavra neutra…)” → “moça, garota”. */
const semNota = (t: string) => t.replace(/\s*\(.*$/, '');

/** O aviso sobre a escrita, nos idiomas que não usam o nosso alfabeto (ou que marcam a tônica). */
function textoDaEscrita(pack: LanguagePack): string | null {
  if (pack.code === 'ru')
    return 'O russo tem alfabeto próprio. O treino “🔤 Alfabeto” ensina as letras, e a tônica vem marcada (молоко́) só para você pronunciar certo.';
  if (pack.code === 'ja')
    return 'Hiragana, katakana e kanji: o treino “🔤 Kana” ensina as sílabas, e cada frase vem com a leitura e o romaji. Pode responder em kana.';
  if (pack.code === 'ko') return 'O hangul é um alfabeto: cada bloco é uma sílaba (ㅎ + ㅏ + ㄴ = 한). O treino “🔤 Alfabeto” ensina as letras.';
  if (pack.reading || pack.keyboardRows) {
    return `O ${nomeIdioma(pack.name)} tem escrita própria. Embaixo de cada frase vem a leitura, e o botão “⌨️ Mostrar teclado” ajuda a responder.`;
  }
  return null;
}

// --- estado do passeio ---------------------------------------------------------------------------

let estado: { passo: number } | null = null;
const ouvintes = new Set<() => void>();
const avisar = () => ouvintes.forEach((l) => l());

export function iniciarTour() {
  estado = { passo: 0 };
  avisar();
}
export function irParaPasso(passo: number) {
  estado = { passo };
  avisar();
}
export function encerrarTour() {
  estado = null;
  avisar();
}
/** O passo atual do passeio, ou `null` quando ele não está acontecendo. */
export function usePassoDoTour(): number | null {
  return useSyncExternalStore(
    (l) => {
      ouvintes.add(l);
      return () => ouvintes.delete(l);
    },
    () => estado?.passo ?? null,
    () => null,
  );
}

// --- alvos: os pedaços de tela que o passeio destaca ----------------------------------------------

const alvos = new Map<string, View>();

/** `ref` para marcar um pedaço de tela como alvo do passeio: `<View ref={alvoDoTour('mapa')}>`. */
export function alvoDoTour(id: string) {
  return (node: View | null) => {
    if (node) alvos.set(id, node);
    else alvos.delete(id);
  };
}
export function nodeDoAlvo(id: string): View | undefined {
  return alvos.get(id);
}
