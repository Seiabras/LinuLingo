/**
 * Leitura do tâmil (தமிழ்) em letras latinas para quem ainda não lê o alfabeto tâmil, usado em
 * Tamil Nadu, no Sri Lanka e em Singapura.
 *
 * DIFERENÇA CENTRAL em relação ao devanágari e ao télugo (já cobertos por reading-devanagari.ts e
 * reading-telugu.ts): a escrita tâmil tem só 18 letras consonantais nativas, bem menos que o
 * devanágari/télugo, porque NÃO escreve a diferença entre surda/sonora/aspirada (ப não distingue
 * "pa" de "ba" de "pha" do jeito que o télugo distingue ప/బ/ఫ). As seis consoantes "duras"
 * (வல்லினம்): க ச ட த ப ற, representam UM FONEMA CADA, cuja pronúncia muda de verdade conforme a
 * posição na palavra (alofonia) — não é uma escolha de transliteração, é assim que se fala. Esta
 * função decide o som certo olhando o contexto (início de palavra, geminada/dobrada, entre vogais,
 * depois da nasal homorgânica), em vez de mapear cada letra sempre para a mesma string, que é como
 * reading-telugu.ts e reading-devanagari.ts fazem (lá a letra já marca surda/sonora na própria
 * grafia, então não precisam disso).
 *
 * Fontes para a regra de cada uma das seis consoantes duras (confirmadas cruzando Wikipedia e
 * Wiktionary, porque a Wikipedia por si só não bastou — ver nota do ச abaixo):
 *
 * - க (velar): Wikipedia "Tamil phonology" — surda [k] no início e geminada (க்க), sonora [g]
 *   depois de nasal homorgânica (ங்க) e entre vogais. Conferido em பொங்கல் (feriado da colheita,
 *   grafado "Pongal", não "Ponkal") e தங்கை ("irmã mais nova", grafado "thangai"/"tangai", não
 *   "thankai") — ambas em src/data/ta/historias.ts e vocabulario.ts.
 * - ப (labial): mesma regra, surda [p]/sonora [b]. Conferido em குடும்பம் ("família", grafado
 *   "kudumbam", não "kudumpam") — vocabulario.ts.
 * - ட (retroflex) e த (dental): mesma regra, surda [t]/sonora [d]. Conferido em குடி ("beber",
 *   "kudi", não "kuti") e குடும்பம் (o ட de "kudumbam" também já sai "d"). O ponto de retroflexa é
 *   descartado (ட vira "t"/"d" igual a த), pela mesma lógica de reading-telugu.ts/
 *   reading-devanagari.ts: o ponto embaixo não ajuda quem está começando a pronunciar.
 * - ற ("ற dura", trinada alveolar, letra exclusiva do tâmil sem par no télugo/devanágari): a MAIS
 *   irregular das seis — nunca é [r] simples no início (não ocorre no início de palavra nativa:
 *   Wikipedia "Tamil phonology"), geminada (ற்ற) sai como oclusiva+vibrante [t]+[r] (Wiktionary,
 *   மற்றும் "e" → fonético [mɐtrʊm], grafado "matrum"), depois da nasal ன் sai prenasalizada
 *   [n]+[d]+[r] (Wiktionary, நன்றி "obrigado" → fonético [nɐndriː], grafado "nandri" — a grafia
 *   popular do tâmil, não uma simplificação deste app), e entre vogais sai [r] simples (சோறு
 *   "comida/arroz", "cōṟu" no vocabulário, mas falado "sōru"). Por isso ற não tem um único par
 *   surda/sonora como as outras cinco: tem quatro formas (bare "t", inicial/geminada "r" — que junto
 *   com o "t" da primeira metade da geminada forma "tr" —, pós-nasal "dr", intervocálica "r").
 * - ச (palatal): a exceção de verdade. A Wikipedia ("Tamil phonology") descreve ச e ற como "the only
 *   exceptions" à regra geral de vozeamento, dizendo que ச vira [s] entre vogais em vez de um
 *   africado sonoro [dʒ]. Só isso já bastaria para não tratar ச como as outras quatro (க/ப/ட/த), mas
 *   foi preciso ir ALÉM da Wikipedia e cruzar com o Wiktionary (como o enunciado desta tarefa pediu)
 *   porque a transcrição fonética (entre colchetes, a pronúncia real) de palavras tâmeis mostra ச
 *   como [s] em TODAS as posições onde a Wikipedia preveria o africado [tʃ], não só entre vogais:
 *     சாப்பிடு "comer": /tʃɑːpːɪɖ̯ʊ/ (fonêmico) mas [säːpːɪɖ̯ʊ] (fonético) — início de palavra.
 *     சின்ன "pequeno": /tʃɪnːɐ/ mas [sɪnːɐ] — início de palavra.
 *     சென்னை "Chennai": /tʃɛnːɐɪ̯/ mas [se̞nːɐɪ̯] — início de palavra (o nome oficial em inglês vem
 *       do fonêmico "Ch-", mas quem fala tâmil diz "Sennai").
 *     பச்சை "verde": /pɐtʃtʃɐɪ̯/ mas [pɐssɐɪ̯] — geminada ச்ச vira [sː], não um africado dobrado.
 *     கொஞ்சம் "um pouco": /koɲdʒɐm/, [ko̞ɲdʒɐm] — só DEPOIS da nasal ஞ் que ச vira africado sonoro
 *       [dʒ], nunca [s].
 *   Ou seja, na fala real (o que este app quer ensinar, não a forma literária/acadêmica) ச soa [s]
 *   em início de palavra, entre vogais E até geminada — e só vira [dʒ] (aqui "j") depois da nasal
 *   homorgânica ஞ். Esta função segue a pronúncia falada confirmada pelo Wiktionary, não o fonêmico
 *   /tʃ/ da Wikipedia nem a grafia inglesa consagrada de nomes como "Chennai".
 *
 * Os três "L": ல (lateral dental/alveolar, /l̪/), ள (lateral retroflexa, /ɭ/) e ழ (aproximante
 * retroflexa, /ɻ/, exclusiva do tâmil e do malaiala, sem equivalente real em português). Seguindo a
 * mesma lógica de colapsar diacríticos de retroflexa usada em reading-telugu.ts (que já faz isso com
 * ళ/ఴ) e reading-devanagari.ts (ळ), ல e ள colapsam nos dois em "l" simples — a diferença não é
 * pronunciável para quem está começando e um ponto embaixo (ḷ) só confundiria. ழ, porém, GANHA uma
 * grafia própria, "zh": é o próprio comentário de reading-telugu.ts sobre a raríssima ఴ télugo que
 * aponta ழ como a letra aparentada, e "zh" já é a transliteração popular mais conhecida do tâmil
 * para esse som — இது é como "Tamizh" (தமிழ்) já circula em inglês informal, bem mais do que a
 * grafia acadêmica "Tamiḻ"/"Tamiḷ". Confirmado também no Wiktionary: தமிழ் → /t̪ɐmɪɻ/, o [ɻ] final.
 *
 * Os três "N": ந (dental, /n̪/), ன (alveolar, /n/) e ண (retroflexa, /ɳ/) colapsam todos em "n" —
 * mesma lógica das retroflexas acima (e do télugo/devanágari, que já colapsam ణ/ण em "n"). ங
 * (velar, /ŋ/) também vira "n": a Wikipedia nota que ங "só ocorre antes de க" (com ~5 exceções
 * geminadas), então "n" seguido do "g"/"k" que a função já produz para க forma "ng"/"nk" sozinho,
 * sem precisar de um dígrafo à parte — conferido em பொங்கல் → "pongal" e தங்கை → "tangai". ஞ
 * (palatal, /ɲ/) é diferente: sozinha (raríssima no início de palavra nativa, quase só em
 * empréstimos do sânscrito) vira "ny" — mesma grafia de ఞ/ञ nos outros dois arquivos —, mas como
 * consoante muda (pulli) antes do ச homorgânico (ஞ்ச) vira só "n" (o "j" de ச pós-nasal já carrega a
 * palatalização: கொஞ்சம் → "konjam", não "konyjam").
 *
 * As letras grantha (ஜ ஶ ஷ ஸ ஹ), acrescentadas só para transliterar empréstimos do sânscrito
 * (Wikipedia "Tamil script"), não têm alofonia própria: ஜ "j", ஶ/ஷ "sh" (mesmo colapso de श/ष já
 * usado em reading-devanagari.ts), ஸ "s", ஹ "h".
 *
 * ஃ (āytam/ஆய்தம்), o caractere que não é nem vogal nem consoante: no tâmil antigo marcava um som
 * glotal (um "ḥ", segundo a Wikipedia "Tamil script"); no tâmil moderno funciona como um nukta,
 * formando combinações para sons estrangeiros — ஃப [f], ஃஜ/ஃஸ [z], ஃக [x]. Esta função usa ஃப→"f",
 * ஃஜ/ஃஸ→"z", ஃக→"kh" (mesma saída "kh" de ख़ em reading-devanagari.ts para o mesmo [x]) e, sozinho
 * (sem um dos quatro acima depois), "h", ecoando o valor histórico.
 *
 * SEM apagamento de vogal final (diferente do hindi, igual ao télugo): o tâmil é dravídico, não
 * indo-ariano, e a Wikipedia ("Tamil phonology") confirma que "almost all words end with vowels in
 * spoken Tamil" — a fala coloquial chega a ACRESCENTAR uma vogal no final de palavras que terminam
 * em consoante (nil → nillu), o oposto do apagamento do hindi. Como o télugo, a escrita tâmil já
 * marca com o pulli (்) exatamente onde não há vogal nenhuma, então esta função só segue a grafia
 * literalmente — nunca precisa decidir "apagar ou não" um "a" que a própria grafia não marcou.
 *
 * Vogais: 5 pares curta/longa (அ/ஆ, இ/ஈ, உ/ஊ, எ/ஏ, ஒ/ஓ) mais os ditongos ஐ/ஔ — os mácrons (ā ī ū ē
 * ō) ficam, mesma razão de reading-telugu.ts: distinguem pares que importam e já aparecem nos
 * parênteses de src/data/ta/vocabulario.ts (சோறு "cōṟu", ஆறு "āṟu"...). O u final curto (ஒன்று,
 * பூனை) tem uma realização reduzida descrita na Wikipedia (o chamado kuṟṟiyal ukaram, [ɯ~ɨ]) que
 * esta função não modela à parte — fica como "u" simples, mesma simplificação de nuance de fala
 * corrida que os outros dois arquivos já se permitem.
 *
 * O que fica de fora: variação regional/de dialeto na pronúncia exata de க/ச intervocálicos (a
 * própria Wikipedia lista várias realizações possíveis para க entre vogais, [g]~[x]~[ɣ]~[h]; esta
 * função sempre usa a mais simples e mais ensinada, [g]); e a distinção lexical entre palavras
 * nativas e empréstimos do sânscrito que afeta como ச soa em alguns nomes próprios/palavras cultas
 * (சூரியன், do sânscrito सूर्य, sai "sūriyan" por esta função, seguindo a regra geral de ச inicial,
 * mesmo sendo também ouvido como "sooriyan"/"suryan" por influência da grafia sânscrita original —
 * não há como prever isso só pela grafia tâmil sem uma lista palavra por palavra).
 *
 * Fontes: Wikipedia "Tamil phonology" (tabela de alofonia das vallinam, vozeamento condicionado por
 * posição, ச/ற como exceções, nasais, inventário vocálico, āytam); Wikipedia "Tamil script" (abugida,
 * pulli, os três L/três N, letras grantha, āytam); Wiktionary (entradas சாப்பிடு, சின்ன, சென்னை,
 * பச்சை, கொஞ்சம், வணக்கம், நன்றி, குடும்பம், மற்றும், தமிழ் — usadas para confirmar a pronúncia
 * FALADA, entre colchetes, contra a fonêmica); Omniglot "Tamil alphabet"; os parênteses de pronúncia
 * já presentes em src/data/ta/vocabulario.ts, usados como conferência cruzada adicional.
 */

const VIRAMA = '்'; // pulli
const AYTAM = 'ஃ';

/** Consoante "dura" (வல்லினம்): um fonema só, cuja letra latina muda com a posição — ver cabeçalho. */
interface HardConsonant {
  /** Forma muda (pulli logo depois, sem vogal): primeira metade de uma geminada, ou antes de outra consoante. */
  bare: string;
  /** Início de palavra, geminada (segunda metade) ou depois de outra consoante que não é a nasal homorgânica. */
  voiceless: string;
  /** Entre vogais (sem geminação, sem nasal antes). */
  voiced: string;
  /** Depois da nasal homorgânica (ங், ஞ், ண், ந், ம், ன்). */
  postNasal: string;
}

/** As seis consoantes duras. Fontes e exemplos de conferência no cabeçalho do arquivo. */
const HARD: Record<string, HardConsonant> = {
  க: { bare: 'k', voiceless: 'k', voiced: 'g', postNasal: 'g' },
  ச: { bare: 's', voiceless: 's', voiced: 's', postNasal: 'j' }, // ver nota longa no cabeçalho: ச é [s] quase sempre
  ட: { bare: 't', voiceless: 't', voiced: 'd', postNasal: 'd' }, // ponto de retroflexa descartado, colide com த
  த: { bare: 't', voiceless: 't', voiced: 'd', postNasal: 'd' },
  ப: { bare: 'p', voiceless: 'p', voiced: 'b', postNasal: 'b' },
  ற: { bare: 't', voiceless: 'r', voiced: 'r', postNasal: 'dr' }, // a mais irregular das seis, ver cabeçalho
};

/** Nasal homorgânica de cada consoante dura (para saber quando aplicar `postNasal`). */
const NASAL_PARTNER: Record<string, string> = {
  ங: 'க', ஞ: 'ச', ண: 'ட', ந: 'த', ம: 'ப', ன: 'ற',
};

/** Consoantes nasais. Todas colapsam retroflexa/dental/alveolar/velar em "n" (ver cabeçalho); só ம e ஞ destoam. */
const NASALS: Record<string, string> = {
  ங: 'n', ஞ: 'ny', ண: 'n', ந: 'n', ன: 'n', ம: 'm',
};

/** Consoantes sem alofonia de posição: as "médias" (இடையினம்) e as grantha (empréstimos do sânscrito). */
const OTHER_CONSONANTS: Record<string, string> = {
  ய: 'y', ர: 'r', ல: 'l', வ: 'v',
  ழ: 'zh', // aproximante retroflexa exclusiva do tâmil/malaiala — ver cabeçalho (தமிழ் → "tamizh")
  ள: 'l', // lateral retroflexa, colide com ல — mesmo colapso do ळ marata/ళ télugo
  ஜ: 'j', ஶ: 'sh', ஷ: 'sh', ஸ: 's', ஹ: 'h',
};

/** Vogais independentes (começo de palavra ou depois de outra vogal). Tâmil não tem vogais vocálicas r/l como o sânscrito. */
const INDEPENDENT_VOWELS: Record<string, string> = {
  அ: 'a', ஆ: 'ā', இ: 'i', ஈ: 'ī', உ: 'u', ஊ: 'ū',
  எ: 'e', ஏ: 'ē', ஐ: 'ai', ஒ: 'o', ஓ: 'ō', ஔ: 'au',
};

/** Mátras: marcas de vogal que substituem o "a" inerente da consoante anterior. */
const MATRAS: Record<string, string> = {
  'ா': 'ā', 'ி': 'i', 'ீ': 'ī', 'ு': 'u', 'ூ': 'ū',
  'ெ': 'e', 'ே': 'ē', 'ை': 'ai', 'ொ': 'o', 'ோ': 'ō', 'ௌ': 'au',
};

const DIGITS: Record<string, string> = {
  '௦': '0', '௧': '1', '௨': '2', '௩': '3', '௪': '4', '௫': '5', '௬': '6', '௭': '7', '௮': '8', '௯': '9',
};

/** Combinações do āytam (ஃ) com a consoante seguinte, para sons estrangeiros — ver cabeçalho. */
const AYTAM_COMBOS: Record<string, string> = {
  ப: 'f', ஜ: 'z', ஸ: 'z', க: 'kh',
};

/**
 * Tâmil em letras latinas, para quem ainda não lê a escrita. Ver o cabeçalho do arquivo para as
 * fontes, as seis regras de alofonia (e a exceção do ச) e o que fica de fora.
 */
export function toReadingTa(raw: string): string {
  const text = raw.normalize('NFC');
  const out: string[] = [];
  let i = 0;

  // Contexto para decidir a forma das consoantes duras e saber quando aplicar a nasal homorgânica.
  let prevVowelEnd = false; // a última letra lida terminou soando como uma vogal (intervocálico)
  let prevBareNasal: string | null = null; // letra tâmil da última nasal muda emitida (para o postNasal)

  const resetContext = (): void => {
    prevVowelEnd = false;
    prevBareNasal = null;
  };

  while (i < text.length) {
    const c = text[i];

    if (DIGITS[c] !== undefined) {
      out.push(DIGITS[c]);
      i++;
      resetContext();
      continue;
    }

    if (c === AYTAM) {
      const combo = AYTAM_COMBOS[text[i + 1]];
      if (combo !== undefined) {
        i += 2;
        if (text[i] === VIRAMA) {
          out.push(combo);
          i++;
          resetContext();
        } else {
          const matraVowel = MATRAS[text[i]];
          out.push(combo + (matraVowel ?? 'a'));
          if (matraVowel !== undefined) i++;
          prevVowelEnd = true;
          prevBareNasal = null;
        }
      } else {
        out.push('h'); // āytam sozinho: valor histórico glotal, ver cabeçalho
        i++;
        resetContext();
      }
      continue;
    }

    if (INDEPENDENT_VOWELS[c] !== undefined) {
      out.push(INDEPENDENT_VOWELS[c]);
      i++;
      prevVowelEnd = true;
      prevBareNasal = null;
      continue;
    }

    if (NASALS[c] !== undefined) {
      const letter = c;
      i++;
      if (text[i] === VIRAMA) {
        // ஞ muda antes do ச homorgânico não carrega o "y" (ver cabeçalho: கொஞ்சம் → konjam)
        out.push(letter === 'ஞ' ? 'n' : NASALS[letter]);
        i++;
        prevVowelEnd = false;
        prevBareNasal = letter;
        continue;
      }
      const matraVowel = MATRAS[text[i]];
      out.push(NASALS[letter] + (matraVowel ?? 'a'));
      if (matraVowel !== undefined) i++;
      prevVowelEnd = true;
      prevBareNasal = null;
      continue;
    }

    if (HARD[c] !== undefined) {
      const letter = c;
      const sound = HARD[letter];
      i++;

      if (text[i] === VIRAMA) {
        // muda: primeira metade de uma geminada (ex. க்க) ou antes de outra consoante — sempre a forma básica
        out.push(sound.bare);
        i++;
        prevVowelEnd = false;
        prevBareNasal = null;
        continue;
      }

      const onset =
        prevBareNasal !== null && NASAL_PARTNER[prevBareNasal] === letter
          ? sound.postNasal
          : prevVowelEnd
            ? sound.voiced
            : sound.voiceless; // início de palavra, depois de consoante muda diferente, ou segunda metade de geminada

      const matraVowel = MATRAS[text[i]];
      out.push(onset + (matraVowel ?? 'a'));
      if (matraVowel !== undefined) i++;
      prevVowelEnd = true;
      prevBareNasal = null;
      continue;
    }

    if (OTHER_CONSONANTS[c] !== undefined) {
      const latin = OTHER_CONSONANTS[c];
      i++;
      if (text[i] === VIRAMA) {
        out.push(latin);
        i++;
        prevVowelEnd = false;
        prevBareNasal = null;
        continue;
      }
      const matraVowel = MATRAS[text[i]];
      out.push(latin + (matraVowel ?? 'a'));
      if (matraVowel !== undefined) i++;
      prevVowelEnd = true;
      prevBareNasal = null;
      continue;
    }

    // pontuação, espaço, dígitos latinos, texto em outra escrita: passa direto, e quebra o contexto
    // (a consoante seguinte não deve ser lida como se estivesse "entre vogais" de uma palavra anterior)
    out.push(c);
    i++;
    resetContext();
  }

  return out.join('').normalize('NFC');
}
