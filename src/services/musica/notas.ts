/**
 * As notas: o número MIDI (60 = dó central, o dó 4), a frequência na afinação padrão (lá 4 = 440 Hz,
 * temperamento igual: cada semitom multiplica a frequência por 2^(1/12)) e o nome em português (dó,
 * ré, mi…) e na notação por letras (C, D, E…).
 */
export const LA4 = 440;
export const MIDI_LA4 = 69;

const NOMES_PT = ['dó', 'dó♯', 'ré', 'ré♯', 'mi', 'fá', 'fá♯', 'sol', 'sol♯', 'lá', 'lá♯', 'si'];
const LETRAS = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const NOMES_PT_BEMOL = ['dó', 'ré♭', 'ré', 'mi♭', 'mi', 'fá', 'sol♭', 'sol', 'lá♭', 'lá', 'si♭', 'si'];

export const frequencia = (midi: number) => LA4 * 2 ** ((midi - MIDI_LA4) / 12);
/** O MIDI (com casas decimais) de uma frequência. */
export const midiDe = (hz: number) => MIDI_LA4 + 12 * Math.log2(hz / LA4);
export const oitava = (midi: number) => Math.floor(midi / 12) - 1;
export const nomeNota = (midi: number) => NOMES_PT[((midi % 12) + 12) % 12]!;
export const letraNota = (midi: number) => LETRAS[((midi % 12) + 12) % 12]!;
export const nomeComOitava = (midi: number) => `${nomeNota(midi)}${oitava(midi)}`;
/** O nome com bemol (si♭ em vez de lá♯), como se escreve para os instrumentos em Si♭ e Mi♭. */
export const nomeComOitavaBemol = (midi: number) => `${NOMES_PT_BEMOL[((midi % 12) + 12) % 12]!}${oitava(midi)}`;
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

/**
 * As claves (cursos de instrumento, 17/10/2026): a de sol, a de sol com o 8 embaixo (o violão e a viola
 * caipira, escritos uma oitava acima do som), a de dó na 3ª linha (a viola de arco: o dó 4 na linha do
 * meio) e a de fá na 4ª linha (o violoncelo e o baixolão: o fá 3 na 4ª linha). `deslocamento` é quanto
 * a posição muda em relação à clave de sol (cada passo, meio espaço).
 */
export type Clave = 'sol' | 'sol8' | 'do3' | 'fa';
export const DESLOCAMENTO_DA_CLAVE: Record<Clave, number> = { sol: 0, sol8: 0, do3: 6, fa: 12 };
