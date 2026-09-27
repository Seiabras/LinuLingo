/**
 * No navegador: no celular abre o menu de compartilhar (Salvar em Arquivos, Drive…); no computador,
 * baixa o arquivo.
 */
export async function saveBackupFile(name: string, text: string): Promise<'salvo' | 'cancelado'> {
  const file = new File([text], name, { type: 'application/json' });
  const touch = window.matchMedia?.('(pointer: coarse)').matches;
  if (touch && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Cópia do progresso do LinuLingo' });
      return 'salvo';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelado';
      // sem permissão para compartilhar: cai no download
    }
  }
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  return 'salvo';
}

/** No navegador: escolhe o arquivo da cópia. null se a pessoa desistir. */
export function pickBackupFile(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json,text/plain';
    input.onchange = () => {
      const f = input.files?.[0];
      if (!f) return resolve(null);
      f.text().then(resolve, reject);
    };
    input.addEventListener('cancel', () => resolve(null));
    input.click();
  });
}
