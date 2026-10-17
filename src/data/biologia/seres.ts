import { AMIGOS_LINU, type AmigoLinu } from '@/data/amigos-linu';
import { FAUNA_MUSICA } from '@/data/fauna-musica';

/**
 * Os seres vivos da área Biologia (pedido do dono, 17/10/2026): o catálogo junta o que o app já tem,
 * sem inventar bicho novo — os amigos do Linu (`amigos-linu.ts`, com espécie, nome científico, onde
 * vivem e fatos) e os bichos nativos de cada país do álbum (`fauna-musica.ts`, com o nome no idioma
 * local). A classe de cada amigo do Linu é o que todo livro de biologia diz desses grupos: pinguins,
 * albatroz e petrel são aves; focas, elefante-marinho e baleia são mamíferos; o krill é um crustáceo.
 */
export type ClasseBio = 'ave' | 'mamifero' | 'crustaceo';
export const NOME_CLASSE: Record<ClasseBio, string> = { ave: 'Ave', mamifero: 'Mamífero', crustaceo: 'Crustáceo' };
export const SOBRE_CLASSE: Record<ClasseBio, string> = {
  ave: 'Tem penas, bico e põe ovos.',
  mamifero: 'Tem pelos (mesmo que poucos) e mama no leite da mãe quando filhote.',
  crustaceo: 'Tem uma carapaça por fora do corpo e muitas patinhas, como o camarão.',
};

export const CLASSE_DO_AMIGO: Record<string, ClasseBio> = {
  imperador: 'ave',
  rei: 'ave',
  adelia: 'ave',
  gentoo: 'ave',
  macaroni: 'ave',
  weddell: 'mamifero',
  'elefante-marinho': 'mamifero',
  leopardo: 'mamifero',
  jubarte: 'mamifero',
  krill: 'crustaceo',
  albatroz: 'ave',
  petrel: 'ave',
};

/**
 * A palavra em português que liga o bicho ao vocabulário do idioma estudado (a ponte com os
 * idiomas): se o Cofre do idioma tem essa palavra, a tela mostra a tradução, com imagem e áudio.
 */
export const PALAVRA_DO_AMIGO: Record<string, string> = {
  imperador: 'pinguim',
  rei: 'pinguim',
  adelia: 'pinguim',
  gentoo: 'pinguim',
  macaroni: 'pinguim',
  weddell: 'foca',
  'elefante-marinho': 'foca',
  leopardo: 'foca',
  jubarte: 'baleia',
  albatroz: 'pássaro',
  petrel: 'pássaro',
};

export const amigosDaBiologia = (): AmigoLinu[] => AMIGOS_LINU.filter((a) => CLASSE_DO_AMIGO[a.id]);

/** Um bicho do catálogo vindo do álbum: o nome em português, o nome no idioma do país e o fato. */
export interface BichoDoPais {
  iso: string;
  nome: string;
  local?: string;
  fato: string;
}

export function bichosDosPaises(isos: string[]): BichoDoPais[] {
  return isos.flatMap((iso) => (FAUNA_MUSICA[iso]?.animals ?? []).map((a) => ({ iso, nome: a.name, local: a.local, fato: a.fact })));
}

export const PAISES_COM_BICHOS = Object.keys(FAUNA_MUSICA).filter((iso) => FAUNA_MUSICA[iso]!.animals.length > 0);
