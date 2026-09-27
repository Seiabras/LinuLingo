import type { OS } from '@/services/platform-info';

/** Nomes das vozes do sistema por idioma (só onde sabemos o nome exato). */
const VOICE_NAMES: Record<string, Partial<Record<OS | 'piper', string>>> = {
  ro: { ios: 'Ioana', macos: 'Ioana', windows: 'Andrei', piper: 'ro_RO-mihai-medium' },
  ru: { ios: 'Milena', macos: 'Milena', windows: 'Irina', piper: 'ru_RU-irina-medium' },
  es: { ios: 'Paulina', macos: 'Paulina', windows: 'Sabina', piper: 'es_MX-ald-medium' },
  sv: { ios: 'Alva', macos: 'Alva', windows: 'Bengt', piper: 'sv_SE-nst-medium' },
  nb: { ios: 'Nora', macos: 'Nora', windows: 'Jon', piper: 'no_NO-talesyntese-medium' },
  da: { ios: 'Sara', macos: 'Sara', windows: 'Helle', piper: 'da_DK-talesyntese-medium' },
  is: { piper: 'is_IS-bui-medium' },
  fi: { ios: 'Satu', macos: 'Satu', windows: 'Heidi', piper: 'fi_FI-harri-medium' },
  pt: { ios: 'Joana', macos: 'Joana', windows: 'Helia', piper: 'pt_PT-tugão-medium' },
  it: { ios: 'Alice', macos: 'Alice', windows: 'Elsa', piper: 'it_IT-paola-medium' },
};

export const PIPER_SCRIPT_URL = 'https://github.com/Seiabras/LinuLingo/blob/master/scripts/instalar-piper.sh';

export interface GuideStep {
  text: string;
  /** Comando de terminal para copiar */
  code?: string;
}

/** Passo a passo para instalar a voz do idioma em cada sistema. */
export function voiceGuide(os: OS, langCode: string, langName: string, nativeName: string, greeting: string): GuideStep[] {
  const names = VOICE_NAMES[langCode] ?? {};
  const voice = (k: OS) => (names[k] ? ` e baixe a voz «${names[k]}»` : '');
  switch (os) {
    case 'ios':
      return [
        { text: 'Abra Ajustes › Acessibilidade › Conteúdo Falado › Vozes.' },
        { text: `Toque em «${langName}»${voice('ios')} (a versão «Aprimorada» soa mais natural).` },
        { text: 'Volte ao app (ou recarregue a página) e toque em «Verificar de novo».' },
      ];
    case 'android':
      return [
        { text: 'Abra Configurações › Acessibilidade › Conversão de texto em voz (o caminho muda um pouco por marca: procure «texto em voz»).' },
        { text: 'Toque na engrenagem ao lado de «Mecanismo de fala do Google» › Instalar dados de voz.' },
        { text: `Baixe «${nativeName}» (${langName}).` },
        { text: 'Feche e abra o navegador de novo.' },
      ];
    case 'windows':
      return [
        { text: 'Abra Configurações › Hora e idioma › Fala.' },
        { text: `Em «Gerenciar vozes», toque em «Adicionar vozes», procure «${nativeName}»${voice('windows')} e instale.` },
        { text: 'Feche e abra o navegador de novo (o Edge tem as vozes online mais naturais).' },
      ];
    case 'macos':
      return [
        { text: 'Abra Ajustes do Sistema › Acessibilidade › Conteúdo Falado.' },
        { text: `Em «Voz do sistema», escolha «Gerenciar vozes…», marque «${langName}»${voice('macos')}.` },
        { text: 'Feche e abra o navegador de novo.' },
      ];
    case 'chromeos':
      return [
        { text: 'Abra Configurações › Acessibilidade › Texto para fala › Mecanismo de fala.' },
        { text: `Instale a voz «${nativeName}» e reabra o navegador.` },
      ];
    case 'linux':
      return [
        { text: 'O Firefox e o Chrome falam pelo speech-dispatcher. Primeiro, teste se já existe voz:', code: `spd-say -l ${langCode} "${greeting}"` },
        { text: 'Se não falou nada, instale a voz básica (eSpeak, soa robótica):', code: 'sudo pacman -S speech-dispatcher espeak-ng   # ou: sudo apt install speech-dispatcher espeak-ng' },
        {
          text: `Para uma voz natural e offline, instale o Piper${names.piper ? ` com a voz «${names.piper}»` : ''}. O script do LinuLingo faz tudo só no seu usuário, sem sudo:`,
          code: 'git clone https://github.com/Seiabras/LinuLingo && sh LinuLingo/scripts/instalar-piper.sh',
        },
        { text: 'Feche e abra o navegador de novo.' },
      ];
  }
}

export const ALL_OS: OS[] = ['ios', 'android', 'windows', 'macos', 'linux', 'chromeos'];
