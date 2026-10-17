/**
 * A árvore da vida dos amigos do Linu: os grupos em que cada um entra, do maior (os animais) ao
 * menor (o gênero). É a classificação de qualquer livro de zoologia; dois pontos merecem fonte:
 * - os pinguins (Sphenisciformes) e as aves marinhas de narinas em tubo (Procellariiformes: albatrozes
 *   e petréis) são grupos-irmãos, o clado Austrodyptornithes (Yuri et al. 2013; confirmado pela
 *   análise de genomas de Jarvis et al. 2014, Science 346: 1320–1331, que estima a separação em cerca
 *   de 60 milhões de anos);
 * - as baleias (Cetacea) ficam dentro dos artiodáctilos (Cetartiodactyla), parentes dos hipopótamos.
 */
export interface NoArvore {
  id: string;
  nome: string;
  /** o que o grupo tem em comum, em uma frase */
  sobre?: string;
  filhos?: NoArvore[];
  /** o id do amigo, nas folhas */
  amigo?: string;
}

const folha = (amigo: string, nome: string): NoArvore => ({ id: amigo, nome, amigo });

export const ARVORE: NoArvore = {
  id: 'animais',
  nome: 'Animais',
  sobre: 'Seres vivos de muitas células que comem outros seres vivos.',
  filhos: [
    {
      id: 'cordados',
      nome: 'Cordados (com coluna)',
      sobre: 'Animais com um eixo nas costas, que nos vertebrados vira a coluna.',
      filhos: [
        {
          id: 'aves',
          nome: 'Aves',
          sobre: 'Penas, bico e ovos.',
          filhos: [
            {
              id: 'austrodyptornithes',
              nome: 'Austrodyptornithes (pinguins + aves de narina em tubo)',
              sobre: 'Os pinguins e os albatrozes e petréis são grupos-irmãos: se separaram há cerca de 60 milhões de anos.',
              filhos: [
                {
                  id: 'spheniscidae',
                  nome: 'Pinguins (Spheniscidae)',
                  sobre: 'Aves que trocaram o voo pelo nado.',
                  filhos: [
                    { id: 'aptenodytes', nome: 'Aptenodytes', filhos: [folha('imperador', 'Pinguim-imperador'), folha('rei', 'Pinguim-rei')] },
                    { id: 'pygoscelis', nome: 'Pygoscelis', filhos: [folha('adelia', 'Pinguim-de-adélia'), folha('gentoo', 'Pinguim-gentoo')] },
                    { id: 'eudyptes', nome: 'Eudyptes', filhos: [folha('macaroni', 'Pinguim-macaroni')] },
                  ],
                },
                {
                  id: 'procellariiformes',
                  nome: 'Aves de narina em tubo (Procellariiformes)',
                  sobre: 'Aves do alto-mar, com as narinas em forma de tubo sobre o bico.',
                  filhos: [
                    { id: 'diomedeidae', nome: 'Albatrozes (Diomedeidae)', filhos: [folha('albatroz', 'Albatroz-errante')] },
                    { id: 'procellariidae', nome: 'Petréis (Procellariidae)', filhos: [folha('petrel', 'Petrel-das-neves')] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'mamiferos',
          nome: 'Mamíferos',
          sobre: 'Pelos e leite para os filhotes.',
          filhos: [
            {
              id: 'carnivora',
              nome: 'Carnívoros (Carnivora)',
              sobre: 'O grupo dos cães, gatos, ursos e focas.',
              filhos: [
                {
                  id: 'phocidae',
                  nome: 'Focas verdadeiras (Phocidae)',
                  sobre: 'Focas sem orelha de fora, que andam em terra se arrastando de barriga.',
                  filhos: [folha('weddell', 'Foca-de-weddell'), folha('leopardo', 'Foca-leopardo'), folha('elefante-marinho', 'Elefante-marinho-do-sul')],
                },
              ],
            },
            {
              id: 'cetartiodactyla',
              nome: 'Artiodáctilos e baleias (Cetartiodactyla)',
              sobre: 'As baleias são parentes dos hipopótamos, dos bois e dos camelos.',
              filhos: [{ id: 'balaenopteridae', nome: 'Rorquais (Balaenopteridae)', filhos: [folha('jubarte', 'Baleia-jubarte')] }],
            },
          ],
        },
      ],
    },
    {
      id: 'artropodes',
      nome: 'Artrópodes',
      sobre: 'Esqueleto por fora do corpo e patas articuladas: insetos, aranhas e crustáceos.',
      filhos: [
        {
          id: 'crustaceos',
          nome: 'Crustáceos',
          sobre: 'Os artrópodes da água, como o camarão e o caranguejo.',
          filhos: [{ id: 'euphausiidae', nome: 'Krill (Euphausiidae)', filhos: [folha('krill', 'Krill-antártico')] }],
        },
      ],
    },
  ],
};

/** O caminho da raiz até o amigo (a lista de grupos em que ele entra). */
export function caminhoAte(amigo: string, no: NoArvore = ARVORE): NoArvore[] | null {
  if (no.amigo === amigo) return [no];
  for (const f of no.filhos ?? []) {
    const c = caminhoAte(amigo, f);
    if (c) return [no, ...c];
  }
  return null;
}

/** O grupo mais próximo que dois amigos têm em comum (o ancestral comum mais recente). */
export function parenteComum(a: string, b: string): NoArvore | null {
  const ca = caminhoAte(a);
  const cb = caminhoAte(b);
  if (!ca || !cb) return null;
  let comum: NoArvore | null = null;
  for (let i = 0; i < Math.min(ca.length, cb.length); i++) {
    if (ca[i]!.id !== cb[i]!.id) break;
    comum = ca[i]!;
  }
  return comum;
}
