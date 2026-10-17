/**
 * Os sons de acerto e erro das lições, para escolher no Perfil (item 19 do PENDENTES.md, 17/10/2026).
 * Os arquivos são gerados por `scripts/gerar-sons-licoes.py` (sintetizados, sem autor a creditar).
 * Fica fora do React Native para o teste rodar em Node.
 */
export type EstiloSomLicao = 'nenhum' | 'suave' | 'sino' | 'xilofone' | 'moeda' | 'fliperama';

export const ESTILOS_SOM_LICAO: { id: EstiloSomLicao; nome: string }[] = [
  { id: 'nenhum', nome: 'Sem som' },
  { id: 'suave', nome: 'Suave' },
  { id: 'sino', nome: 'Sino' },
  { id: 'xilofone', nome: 'Xilofone' },
  { id: 'moeda', nome: 'Moeda' },
  { id: 'fliperama', nome: 'Fliperama' },
];

/** O volume em porcentagem, os mesmos passos do volume dos jogos. */
export const VOLUMES_SOM_LICAO = [20, 40, 60, 80, 100] as const;

export interface SomLicaoPrefs {
  estilo: EstiloSomLicao;
  volume: number;
}

export const SOM_LICAO_PADRAO: SomLicaoPrefs = { estilo: 'suave', volume: 60 };

/** Lê o que ficou guardado no banco; qualquer coisa estranha volta ao padrão. */
export function lerSomLicao(guardado: string | null): SomLicaoPrefs {
  if (!guardado) return SOM_LICAO_PADRAO;
  try {
    const v = JSON.parse(guardado) as Partial<SomLicaoPrefs>;
    const estilo = ESTILOS_SOM_LICAO.some((e) => e.id === v.estilo) ? (v.estilo as EstiloSomLicao) : SOM_LICAO_PADRAO.estilo;
    const volume = (VOLUMES_SOM_LICAO as readonly number[]).includes(v.volume as number) ? (v.volume as number) : SOM_LICAO_PADRAO.volume;
    return { estilo, volume };
  } catch {
    return SOM_LICAO_PADRAO;
  }
}
