/**
 * Regras de escrita do português de Portugal usadas nos verificadores e testes de conteúdo.
 * Apontam brasileirismos num texto que deveria ser europeu. Citações curtas entre « » (até 3
 * palavras) ficam de fora: é assim que o texto cita a forma brasileira («no Brasil, ônibus»).
 */

// \b não enxerga letras acentuadas: as bordas de palavra usam \p{L} com a flag u
const B = '(?<![\\p{L}])';
const E = '(?![\\p{L}])';

/** Grafias do Brasil que em Portugal se escrevem com acento agudo (ou de outro jeito). */
const BR_SPELLING: Record<string, string> = {
  econômico: 'económico', econômica: 'económica', acadêmico: 'académico', acadêmica: 'académica', gênero: 'género', gêneros: 'géneros',
  fenômeno: 'fenómeno', antônio: 'António', tênis: 'ténis', bebê: 'bebé', bebês: 'bebés', polêmica: 'polémica', polêmico: 'polémico',
  prêmio: 'prémio', prêmios: 'prémios', anônimo: 'anónimo', atômico: 'atómico', cômico: 'cómico', gênio: 'génio', quilômetro: 'quilómetro',
  quilômetros: 'quilómetros', crônica: 'crónica', amazônia: 'Amazónia', bônus: 'bónus', vênus: 'Vénus', cômodo: 'cómodo', cômoda: 'cómoda',
  tênue: 'ténue', gêmeo: 'gémeo', gêmeos: 'gémeos', ônibus: 'autocarro', contato: 'contacto', contatos: 'contactos',
  recepção: 'receção', registrar: 'registar', registro: 'registo', equipe: 'equipa', econômicos: 'económicos', eletrônico: 'eletrónico',
  eletrônica: 'eletrónica', telefônico: 'telefónico', astronômico: 'astronómico', autônomo: 'autónomo', harmônico: 'harmónico',
};

/** Palavras do dia a dia que em Portugal são outras (fora de « »). */
const BR_WORDS: Record<string, string> = {
  celular: 'telemóvel', geladeira: 'frigorífico', sorvete: 'gelado', suco: 'sumo', trem: 'comboio',
  aeromoça: 'hospedeira de bordo', caminhão: 'camião', açougue: 'talho', xícara: 'chávena',
  'café da manhã': 'pequeno-almoço',
};

/** Problemas de escrita num texto em português de Portugal. */
export function europeanPortugueseProblems(raw: string): string[] {
  const out: string[] = [];
  // citação curta entre « » (até 3 palavras: «ônibus», «café da manhã») é a forma brasileira
  // citada de propósito e não se confere; falas mais longas entre « » são diálogo e se conferem
  const text = raw.replace(/“([^”]*)”/g, (m, inner: string) => (inner.trim().split(/\s+/).length <= 3 ? '“”' : m));
  if (/[Ѐ-ӿ]/.test(text)) out.push('letra cirílica no português');
  // gerúndio com estar: em Portugal, «estar a + infinitivo»
  const ger = text.match(new RegExp(`${B}(estou|estás|está|estamos|estão|estava|estavas|estávamos|estavam|estive|esteve|estiveram|estar|estará|estarei|estaria) (\\p{L}+ndo)${E}`, 'iu'));
  if (ger) out.push(`“${ger[0]}”: em Portugal usa-se “estar a + infinitivo” (${ger[1]} a ${ger[2].replace(/ndo$/, 'r')})`);
  // pronome átono no começo da frase: em Portugal, ênclise (Diz-me, Chamo-me)
  const procl = text.match(new RegExp(`(?:^|[.!?…]\\s+|—\\s*)(Me|Te|Lhe|Lhes|Vos) \\p{L}+`, 'u'));
  if (procl) out.push(`“${procl[0].trim()}”: em Portugal, frase não começa por pronome átono (use a ênclise: “Diz-me”)`);
  for (const [br, pt] of Object.entries(BR_SPELLING))
    if (new RegExp(`${B}${br}${E}`, 'iu').test(text)) out.push(`“${br}” é a grafia do Brasil; em Portugal: “${pt}”`);
  for (const [br, pt] of Object.entries(BR_WORDS)) {
    const w = br.replace(/ \(.*\)$/, '');
    if (new RegExp(`${B}${w}${E}`, 'iu').test(text)) out.push(`“${w}” é do Brasil; em Portugal: “${pt}” (se for de propósito, ponha entre “ ”)`);
  }
  return out;
}
