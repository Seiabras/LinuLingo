/** Nome do idioma no meio da frase: só a primeira letra em minúscula («português de Portugal»). */
export function nomeIdioma(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1);
}
