import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do marúbo, língua pano do Vale do Javari (Amazonas, Brasil), código ISO 639-3 “mzr”.
 * Pacote DRASTICAMENTE menor que o modelo padrão deste app — ver `incomplete` em index.ts para a
 * explicação completa. O marúbo é uma língua pouco documentada digitalmente: não há dicionário
 * publicado disponível online, nem lista de Swadesh, nem gramática descritiva de acesso livre — só
 * números de falantes, fonologia abstrata (sem exemplos de palavras) e um punhado de termos culturais
 * citados, cada um com sua glosa, pela página do povo marúbo no Instituto Socioambiental (ISA).
 *
 * TODAS as 11 palavras abaixo vêm de pib.socioambiental.org/pt/Povo:Marubo (Instituto Socioambiental,
 * “Povos Indígenas no Brasil”), a única fonte encontrada com palavras marúbo individuais e suas glosas
 * em português. Nenhuma palavra foi adivinhada por semelhança com outra língua pano (como o huni kuĩ/
 * cbs, já neste app) — são famílias próximas, mas cada palavra aqui foi conferida nesta fonte específica
 * do marúbo, nunca por parecença.
 *
 * MÉTODO DAS FRASES DE EXEMPLO: a fonte não registra nenhuma frase marúbo com gramática (sujeito+verbo,
 * posse, pergunta) — só palavras e expressões isoladas, a maioria títulos sociais ou termos cosmológicos,
 * citadas dentro de frases em português (“a filha do koka”, “o título de kakáya”). Para não inventar
 * nenhuma regra de combinação de palavras, as frases de exemplo abaixo são:
 * (a) a palavra sozinha (como uma citação, do mesmo jeito que “Txai!” aparece sozinho no curso de huni
 *     kuĩ/cbs deste app), quando a fonte não registra a palavra combinada com nenhuma outra; ou
 * (b) um dos dois compostos realmente citados pelo ISA — “Yové Vai” (caminho dos espíritos) e “Vei Vai”
 *     (caminho da névoa) — quando a palavra aparece em um deles.
 * Em nenhum caso uma frase combina duas palavras marúbo de fontes diferentes nem usa uma regra de
 * gramática não documentada.
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas (parentesco e papéis sociais) ──
  [
    'koka',
    'tio materno (categoria que inclui também sobrinhos por irmã mais velhos; a filha do koka era o casamento preferencial entre os Marúbo)',
    'substantivo',
    'Pessoas',
    '👨',
    'Koka.',
  ],
  [
    'take',
    'termo de parentesco aplicado a qualquer pessoa da própria seção/clã, sem distinção de sexo',
    'substantivo',
    'Pessoas',
    '🧑‍🤝‍🧑',
    'Take.',
  ],
  [
    'kakáya',
    'título dado ao dono de maloca respeitado, de modo pacífico e comedido, que promove festas e a paz e é procurado como conselheiro',
    'substantivo',
    'Pessoas',
    '🏠',
    'Kakáya.',
  ],
  [
    'kenchintxô',
    'especialista reconhecido que entoa os cânticos de cura (“curador”)',
    'substantivo',
    'Pessoas',
    '🎶',
    'Kenchintxô.',
  ],
  [
    'romeyá',
    'pajé, xamã — toma rapé e ayahuasca à noite para receber os espíritos até o amanhecer',
    'substantivo',
    'Pessoas',
    '🧙',
    'Romeyá.',
  ],
  // ── Cultura (cosmologia e rituais) ──
  [
    'yové',
    'seres espirituais de caráter benevolente, de outras camadas do cosmos, com quem o xamã (romeyá) se comunica',
    'substantivo',
    'Cultura',
    '✨',
    'Yové Vai.',
  ],
  [
    'shokó',
    'o céu (camada do cosmos) onde a alma troca de pele; o mesmo nome se dá ao parente homenageado ao se escolher um nome',
    'substantivo',
    'Cultura',
    '🌌',
    'Shokó.',
  ],
  [
    'vai',
    'caminho — palavra identificada comparando os dois caminhos cosmológicos citados pelo ISA, “Yové Vai” e “Vei Vai” (ver gramática)',
    'substantivo',
    'Cultura',
    '🛤️',
    'Yové Vai.',
  ],
  [
    'vei',
    'névoa — identificada comparando “Vei Vai” (Caminho da Névoa) com “Yové Vai” (ver gramática)',
    'substantivo',
    'Cultura',
    '🌫️',
    'Vei Vai.',
  ],
  [
    'tanaméa',
    'a festa mais elaborada e mais rara entre os Marúbo, na qual a maloca anfitriã “limpa os caminhos”',
    'substantivo',
    'Cultura',
    '🎉',
    'Tanaméa.',
  ],
  // ── Animais ──
  [
    'Roka',
    'macaco-parauacu — animal em cuja pele a alma é trocada no Caminho da Névoa, antes de chegar ao lugar onde vivem as almas da própria seção',
    'substantivo',
    'Animais',
    '🐒',
    'Roka.',
  ],
];

export const VOCAB_MZR = buildVocab('mzr', ROWS);
