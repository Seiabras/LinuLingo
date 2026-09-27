/**
 * Vozes neurais (Piper) que o próprio navegador sintetiza quando não há gravação de nativo nem uma
 * voz boa do idioma no aparelho: em muitos computadores (Linux, por exemplo) o navegador não traz
 * voz nenhuma, e o app ficaria mudo. Só vozes de licença livre; cada uma é baixada do repositório
 * do Piper (Hugging Face) na primeira vez que for usada e fica guardada para funcionar sem internet.
 */
export interface NeuralVoice {
  /** nome da voz no Piper: idioma_PAÍS-voz-qualidade */
  id: string;
  /** quem ela imita, para os créditos */
  label: string;
  license: string;
  licenseUrl: string;
  /** página da voz (e do conjunto de gravações que a treinou) */
  page: string;
  /** tamanho do modelo, em MB */
  mb: number;
}

/** Versão fixa do repositório de vozes: o arquivo baixado é sempre o mesmo que foi testado. */
export const PIPER_REVISION = 'c10ece1aade47bb51c153c893d14e5bf8e5b7117';
const HF = `https://huggingface.co/rhasspy/piper-voices/resolve/${PIPER_REVISION}`;

const v = (id: string, label: string, license: string, licenseUrl: string, mb = 63): NeuralVoice => ({
  id,
  label,
  license,
  licenseUrl,
  page: `https://huggingface.co/rhasspy/piper-voices/tree/${PIPER_REVISION}/${voicePath(id).replace(/\/[^/]+$/, '')}`,
  mb,
});

const CC0 = 'https://creativecommons.org/publicdomain/zero/1.0/';
const BY4 = 'https://creativecommons.org/licenses/by/4.0/';

export const NEURAL_VOICES: Record<string, NeuralVoice> = Object.fromEntries(
  [
    v('ro_RO-mihai-medium', 'romeno (Mihai)', 'CC0', CC0),
    v('ru_RU-dmitri-medium', 'russo (Dmitri)', 'CC0', CC0),
    v('es_ES-davefx-medium', 'espanhol da Espanha (davefx)', 'CC0', CC0),
    v('es_MX-ald-medium', 'espanhol do México (ald)', 'Unlicense', 'https://unlicense.org/'),
    v('it_IT-serena-medium', 'italiano (Serena)', 'CC BY 4.0', BY4),
    v('pt_PT-tugão-medium', 'português de Portugal (tugão)', 'CC0', CC0),
    v('pt_BR-faber-medium', 'português do Brasil (Faber)', 'CC0', CC0),
    v('sv_SE-nst-medium', 'sueco (NST)', 'CC0', CC0),
    v('fr_FR-siwis-medium', 'francês (SIWIS)', 'CC BY 4.0', BY4),
    v('ca_ES-upc_ona-medium', 'catalão (Ona, UPC)', 'CC BY-SA 3.0 ES', 'https://creativecommons.org/licenses/by-sa/3.0/es/'),
    v('no_NO-talesyntese-medium', 'norueguês (Talesyntese)', 'CC0', CC0),
    v('da_DK-talesyntese-medium', 'dinamarquês (Talesyntese)', 'CC0', CC0),
    v('fi_FI-harri-medium', 'finlandês (Harri)', 'CC0', CC0),
    v('et_EE-news-medium', 'estoniano (news)', 'CC BY 4.0', BY4, 77),
    v('en_US-joe-medium', 'inglês dos EUA (Joe)', 'CC0', CC0),
    v('en_GB-alba-medium', 'inglês britânico (Alba)', 'CC BY 4.0', BY4),
  ].map((x) => [x.id, x]),
);

/** Caminho do modelo no repositório: «ro_RO-mihai-medium» → ro/ro_RO/mihai/medium/ro_RO-mihai-medium.onnx */
export function voicePath(id: string): string {
  const [locale, name, quality] = id.split('-');
  return `${locale.split('_')[0]}/${locale}/${name}/${quality}/${id}.onnx`;
}

export function voiceUrls(id: string): { model: string; config: string } {
  const model = `${HF}/${encodeURI(voicePath(id))}`;
  return { model, config: `${model}.json` };
}

/**
 * A voz de cada idioma e país. Onde a norma do país muda muito a pronúncia, cada país tem a sua:
 * o espanhol da Espanha (com [θ]) × o da América, o português de Portugal × o do Brasil.
 */
const BY_LOCALE: [RegExp, string][] = [
  [/^ro\b/, 'ro_RO-mihai-medium'],
  [/^ru\b/, 'ru_RU-dmitri-medium'],
  [/^es-ES\b/i, 'es_ES-davefx-medium'],
  [/^es\b/, 'es_MX-ald-medium'],
  [/^it\b/, 'it_IT-serena-medium'],
  [/^pt-BR\b/i, 'pt_BR-faber-medium'],
  [/^pt\b/, 'pt_PT-tugão-medium'],
  [/^sv\b/, 'sv_SE-nst-medium'],
  [/^fr\b/, 'fr_FR-siwis-medium'],
  [/^ca\b/, 'ca_ES-upc_ona-medium'],
  [/^(nb|nn|no)\b/, 'no_NO-talesyntese-medium'],
  [/^da\b/, 'da_DK-talesyntese-medium'],
  [/^fi\b/, 'fi_FI-harri-medium'],
  [/^et\b/, 'et_EE-news-medium'],
  [/^en-(GB|IE|AU|NZ|ZA)\b/i, 'en_GB-alba-medium'],
  [/^en\b/, 'en_US-joe-medium'],
];

export function neuralVoiceFor(locale: string): NeuralVoice | null {
  const hit = BY_LOCALE.find(([re]) => re.test(locale));
  return hit ? NEURAL_VOICES[hit[1]] : null;
}
