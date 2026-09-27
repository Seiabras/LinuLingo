/**
 * Os instrumentos do «Adivinhe o som» e o nome de cada um nos idiomas do app (com o artigo, como no
 * resto do app; no russo, com a tônica marcada; no português de Portugal, «viola» é o violão).
 * Os bichos usam os nomes de <idioma>/bichos.ts.
 * `sticker`: a figurinha do álbum que tem este som.
 */
export interface InstrumentName {
  id: string;
  emoji: string;
  pt: string;
  names: Record<string, string>;
  sticker?: string;
}

export const INSTRUMENTOS: InstrumentName[] = [
  { id: 'piano', emoji: '🎹', pt: 'piano', names: { pt: 'o piano', sv: 'ett piano', nb: 'et piano', da: 'et klaver', es: 'el piano', ro: 'pianul', ru: 'фортепиа́но', it: 'il pianoforte' }, sticker: 'ITA:instrumento:piano' },
  { id: 'violino', emoji: '🎻', pt: 'violino', names: { pt: 'o violino', sv: 'en fiol', nb: 'en fiolin', da: 'en violin', es: 'el violín', ro: 'vioara', ru: 'скри́пка', it: 'il violino' }, sticker: 'ITA:instrumento:violino' },
  { id: 'violao', emoji: '🎸', pt: 'violão', names: { pt: 'a viola', sv: 'en gitarr', nb: 'en gitar', da: 'en guitar', es: 'la guitarra', ro: 'chitara', ru: 'гита́ра', it: 'la chitarra' } },
  { id: 'acordeao', emoji: '🪗', pt: 'acordeão (sanfona)', names: { pt: 'o acordeão', sv: 'ett dragspel', nb: 'et trekkspill', da: 'en harmonika', es: 'el acordeón', ro: 'acordeonul', ru: 'аккордео́н', it: 'la fisarmonica' } },
  { id: 'flauta', emoji: '🪈', pt: 'flauta', names: { pt: 'a flauta', sv: 'en flöjt', nb: 'en fløyte', da: 'en fløjte', es: 'la flauta', ro: 'flautul', ru: 'фле́йта', it: 'il flauto' } },
  { id: 'tambor', emoji: '🥁', pt: 'tambor (caixa)', names: { pt: 'o tambor', sv: 'en trumma', nb: 'ei tromme', da: 'en tromme', es: 'el tambor', ro: 'toba', ru: 'бараба́н', it: 'il tamburo' } },
  { id: 'harpa', emoji: '🪉', pt: 'harpa', names: { pt: 'a harpa', sv: 'en harpa', nb: 'ei harpe', da: 'en harpe', es: 'el arpa', ro: 'harpa', ru: 'а́рфа', it: "l'arpa" } },
  { id: 'clarinete', emoji: '🎷', pt: 'clarinete', names: { pt: 'o clarinete', sv: 'en klarinett', nb: 'en klarinett', da: 'en klarinet', es: 'el clarinete', ro: 'clarinetul', ru: 'кларне́т', it: 'il clarinetto' } },
  { id: 'violoncelo', emoji: '🎻', pt: 'violoncelo', names: { pt: 'o violoncelo', sv: 'en cello', nb: 'en cello', da: 'en cello', es: 'el violonchelo', ro: 'violoncelul', ru: 'виолонче́ль', it: 'il violoncello' } },
  { id: 'saxofone', emoji: '🎷', pt: 'saxofone', names: { pt: 'o saxofone', sv: 'en saxofon', nb: 'en saksofon', da: 'en saxofon', es: 'el saxofón', ro: 'saxofonul', ru: 'саксофо́н', it: 'il sassofono' } },
  { id: 'trompete', emoji: '🎺', pt: 'trompete', names: { pt: 'o trompete', sv: 'en trumpet', nb: 'en trompet', da: 'en trompet', es: 'la trompeta', ro: 'trompeta', ru: 'труба́', it: 'la tromba' } },
  { id: 'gaita-de-foles', emoji: '🎶', pt: 'gaita de foles', names: { pt: 'a gaita de foles', sv: 'en säckpipa', nb: 'ei sekkepipe', da: 'en sækkepibe', es: 'la gaita', ro: 'cimpoiul', ru: 'волы́нка', it: 'la cornamusa' }, sticker: 'GBR:instrumento:gaita-de-foles-escocesa' },
  { id: 'bandolim', emoji: '🪕', pt: 'bandolim', names: { pt: 'o bandolim', sv: 'en mandolin', nb: 'en mandolin', da: 'en mandolin', es: 'la mandolina', ro: 'mandolina', ru: 'мандоли́на', it: 'il mandolino' }, sticker: 'ITA:instrumento:bandolim-napolitano' },
  { id: 'koto', emoji: '🎼', pt: 'koto', names: { pt: 'o koto', sv: 'en koto', nb: 'en koto', da: 'en koto', es: 'el koto', ro: 'koto', ru: 'кото', it: 'il koto' }, sticker: 'JPN:instrumento:koto' },
  { id: 'cuica', emoji: '🥁', pt: 'cuíca', names: { pt: 'a cuíca', sv: 'en cuíca', nb: 'ei cuíca', da: 'en cuíca', es: 'la cuíca', ro: 'cuica', ru: 'куи́ка', it: 'la cuíca' }, sticker: 'BRA:instrumento:cuica' },
];

/** Figurinhas do álbum que têm som: os instrumentos acima e o lobo (os outros bichos do jogo são os da fazenda). */
export const STICKER_SOUNDS: Record<string, string> = {
  ...Object.fromEntries(INSTRUMENTOS.filter((i) => i.sticker).map((i) => [i.sticker!, i.id])),
  'ROU:bicho:lobo': 'lobo',
};
