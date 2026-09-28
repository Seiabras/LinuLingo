/**
 * Correções de pronúncia do catalão: só as formas que as regras de src/services/ipa-ca.ts erram —
 * sobretudo o timbre de «e» e «o» tônicos sem acento gráfico (nen [ɛ] × vell [e]), que a escrita não
 * distingue e as regras resolvem sempre para a vogal aberta. Cada entrada abaixo foi conferida contra
 * a transcrição AFI do Viccionari (ca.wiktionary.org, variant central/oriental). Sem colchetes.
 *
 * Dois padrões sistemáticos confirmados aqui (e aplicados às palavras do vocabulário que se encaixam
 * neles): o sufixo -or/-dor/-ior de agente e comparativo (professor, ordinador, interior, dolor…) é
 * sempre fechado [o], diferente de palavras-raiz como «flor» e «port», que ficam abertas [ɔ]; e o
 * sufixo -ció/-sió/-ió, no plural sem acento (-cions/-sions/-ions: eleccions, milions…), também é
 * sempre fechado, pela mesma vogal do singular (elecció, milió), que já leva o acento fechado ó.
 */
export const IPA_CA: Record<string, string> = {
  vell: 'beʎ',
  vella: 'ˈbeʎə',
  vells: 'beʎs',
  velles: 'ˈbeʎəs',
  carrer: 'kəˈre',
  carrers: 'kəˈres',
  metge: 'ˈmedʒə',
  metges: 'ˈmedʒəs',
  jove: 'ˈʒoβə',
  joves: 'ˈʒoβəs',
  finestra: 'fiˈnestɾə',
  finestres: 'fiˈnestɾəs',
  gos: 'ɡos',
  gossos: 'ˈɡosus',
  // sufixo -or/-dor/-ior (agente e comparativo): fechado [o]
  ordinador: 'urðinəˈðo',
  ordinadors: 'urðinəˈðos',
  professor: 'pɾufəˈso',
  professors: 'pɾufəˈsos',
  dolor: 'duˈlo',
  dolors: 'duˈlos',
  interior: 'intəɾiˈo',
  interiors: 'intəɾiˈos',
  anterior: 'əntəɾiˈo',
  anteriors: 'əntəɾiˈos',
  posterior: 'pustəɾiˈo',
  posteriors: 'pustəɾiˈos',
  exterior: 'əkstəɾiˈo',
  exteriors: 'əkstəɾiˈos',
  superior: 'supəɾiˈo',
  superiors: 'supəɾiˈos',
  inferior: 'iɱfəɾiˈo',
  inferiors: 'iɱfəɾiˈos',
  escriptor: 'əskɾipˈto',
  escriptors: 'əskɾipˈtos',
  entrenador: 'əntɾənəˈðo',
  entrenadors: 'əntɾənəˈðos',
  guanyador: 'ɡwəɲəˈðo',
  guanyadors: 'ɡwəɲəˈðos',
  pintor: 'pinˈto',
  pintors: 'pinˈtos',
  // sufixo -ció/-sió/-ió no plural sem acento: fechado [o], como no singular (elecció, milió)
  eleccions: 'ələksiˈons',
  salutacions: 'səlutəsiˈons',
  atraccions: 'ətɾəksiˈons',
  milions: 'miliˈons',
};
