import { useEffect, useRef, useState } from 'react';
import { detectarAltura } from './altura';
import { ouvirMicrofone } from './motor';
import { notaMaisPerto } from './notas';

export interface NotaOuvida {
  midi: number;
  cents: number;
  hz: number;
}
export type ErroMicrofone = 'indisponivel' | 'permissao' | null;

/**
 * Liga o microfone enquanto `ativo` é verdadeiro e devolve a nota que está soando. A nota só muda
 * depois de aparecer em dois pedaços seguidos, para não piscar com ruído; `aoMudarNota` é chamado uma
 * vez quando uma nota nova fica firme.
 */
export function useMicrofone(ativo: boolean, aoMudarNota?: (n: NotaOuvida) => void): { nota: NotaOuvida | null; erro: ErroMicrofone } {
  const [nota, setNota] = useState<NotaOuvida | null>(null);
  const [erro, setErro] = useState<ErroMicrofone>(null);
  const ultima = useRef<number | null>(null);
  const firme = useRef<number | null>(null);
  const aviso = useRef(aoMudarNota);
  useEffect(() => {
    aviso.current = aoMudarNota;
  });

  useEffect(() => {
    if (!ativo) return;
    let parar: (() => void) | null = null;
    let vivo = true;
    ouvirMicrofone((amostras, taxa) => {
      const a = detectarAltura(amostras, taxa);
      if (!vivo) return;
      if (!a || a.clareza < 0.8) {
        ultima.current = null;
        firme.current = null;
        setNota(null);
        return;
      }
      const n = notaMaisPerto(a.hz);
      if (ultima.current === n.midi) {
        const ouvida = { ...n, hz: a.hz };
        setNota(ouvida);
        // avisa quem usa o hook quando uma nota nova fica firme (uma vez por nota)
        if (firme.current !== n.midi) {
          firme.current = n.midi;
          aviso.current?.(ouvida);
        }
      }
      ultima.current = n.midi;
    })
      .then((p) => {
        if (vivo) {
          parar = p;
          setErro(null);
        } else p();
      })
      .catch((e: Error) => vivo && setErro(e.message === 'permissao' ? 'permissao' : 'indisponivel'));
    return () => {
      vivo = false;
      parar?.();
    };
  }, [ativo]);

  return { nota: ativo ? nota : null, erro: ativo ? erro : null };
}
