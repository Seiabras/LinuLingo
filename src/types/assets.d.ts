/** Contornos das subdivisões do mapa (assets/geo/*.geo): o require devolve a referência do asset. */
declare module '*.geo' {
  const asset: number;
  export default asset;
}
