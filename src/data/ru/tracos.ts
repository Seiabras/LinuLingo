import { toIpaRu } from '@/services/ipa-ru';

/**
 * Traços de pronúncia do russo de Belarus, para a IPA do dialeto e do sotaque (10/10/2026): o «р» e o
 * «ч» sempre duros, o «г» fricativo [ɣ] e o «дзе́канье» / «це́канье» (o «д» e o «т» moles soam [d͡zʲ] e
 * [t͡sʲ]). Fonte: Wikipédia em russo («Белорусский диалект русского языка», «Русский язык в
 * Белоруссии», consultadas em 10/10/2026). O «я́канье» não entra: a transcrição padrão não mostra de
 * onde vem cada [ɪ] átono.
 */
function belarus(ipa: string): string {
  return ipa
    .replace(/rʲ/g, 'r')
    .replace(/t͡ɕ/g, 't͡ʂ')
    .replace(/g/g, 'ɣ')
    .replace(/dʲ/g, 'd͡zʲ')
    .replace(/tʲ/g, 't͡sʲ');
}

/** A IPA do russo de Belarus. */
export function toIpaRuBelarus(text: string): string {
  return belarus(toIpaRu(text));
}

/**
 * A IPA do russo da Ucrânia (10/10/2026): o «г» soa [ɦ], como no ucraniano. Fonte: Wikipédia em inglês
 * («Russian language in Ukraine», «Surzhyk») e em russo («Русский язык на Украине»), consultadas em
 * 10/10/2026.
 */
export function toIpaRuUcrania(text: string): string {
  return toIpaRu(text).replace(/g/g, 'ɦ');
}
