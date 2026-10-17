/**
 * As notas: o número MIDI (60 = dó central, o dó 4), a frequência na afinação padrão (lá 4 = 440 Hz,
 * temperamento igual: cada semitom multiplica a frequência por 2^(1/12)) e o nome em português (dó,
 * ré, mi…) e na notação por letras (C, D, E…).
 */
export const LA4 = 440;
export const MIDI_LA4 = 69;

const NOMES_PT = ['dó', 'dó♯', 'ré', 'ré♯', 'mi', 'fá', 'fá♯', 'sol', 'sol♯', 'lá', 'lá♯', 'si'];
const LETRAS = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

export const frequencia = (midi: number) => LA4 * 2 ** ((midi - MIDI_LA4) / 12);
/** O MIDI (com casas decimais) de uma frequência. */
export const midiDe = (hz: number) => MIDI_LA4 + 12 * Math.log2(hz / LA4);
export const oitava = (midi: number) => Math.floor(midi / 12) - 1;
export const nomeNota = (midi: number) => NOMES_PT[((midi % 12) + 12) % 12]!;
export const letraNota = (midi: number) => LETRAS[((midi % 12) + 12) % 12]!;
export const nomeComOitava = (midi: number) => `${nomeNota(midi)}${oitava(midi)}`;
/** Se a tecla é preta (as notas com sustenido). */
export const ehPreta = (midi: number) => [1, 3, 6, 8, 10].includes(((midi % 12) + 12) % 12);

/**
 * A nota mais perto de uma frequência e quanto ela está fora, em cents (100 cents = 1 semitom).
 * Positivo: mais aguda (alta); negativo: mais grave (baixa).
 */
export function notaMaisPerto(hz: number): { midi: number; cents: number } {
  const m = midiDe(hz);
  const midi = Math.round(m);
  return { midi, cents: Math.round((m - midi) * 100) };
}

/**
 * A posição de uma nota natural na pauta da clave de sol: 0 é a 1ª linha (mi 4); cada passo é meio
 * espaço (linha → espaço → linha). As notas com sustenido ficam na posição da natural de baixo.
 */
const PASSO_NA_ESCALA = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6]; // dó, dó♯, ré… → grau da escala de dó
export function posicaoNaPauta(midi: number): number {
  const grau = PASSO_NA_ESCALA[((midi % 12) + 12) % 12]! + 7 * oitava(midi);
  const mi4 = 2 + 7 * 4;
  return grau - mi4;
}
