import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do fon (fɔ̀ngbè), língua gbe do Benin — ISO 639-3 «fon».
 *
 * POR QUE ESTE PACOTE EXISTE: foi criado a pedido de «língua geral de mina». «Mina» é a Costa da
 * Mina, nome português antigo do litoral falante de línguas gbe (Gana, Togo, Benin de hoje); os
 * povos dali — chamados nos registros coloniais de «minas» e «jejes» — foram trazidos ao Brasil
 * pelo tráfico atlântico e sua «língua jeje» é citada por Ferretti (1996) e Pereira (1979) como o
 * fon cantado na Casa das Minas, em São Luís do Maranhão (tambor de mina, candomblé jeje). O
 * registro ritual brasileiro em si é fragmentário demais para ensinar com honestidade, mas o fon
 * vivo falado hoje no Benin (~2,3 milhões de falantes, língua nacional) tem gramática e dicionário
 * descritos academicamente — por isso é ele, e não o jeje ritual, que este pacote ensina. Ver a nota
 * completa em `incomplete.note` (index.ts) e o paralelo com o iorubá/candomblé-ketu em `cognateNote`.
 *
 * FONTES E NÍVEIS DE CONFIANÇA (nada aqui foi inventado; o que não achamos, não entrou):
 *
 * Nível A — Wiktionary (en.wiktionary.org), cada verbete com tom marcado, muitos com áudio de
 * falante nativo (Alfred Azasegla, Benin) e citando A Grammar of Fongbe (Lefebvre & Brousseau,
 * 2002) ou o Dictionnaire Fon–Français (Höftmann & Ahohounkpanzon, 2003): sìn, atín, làn, lànmɛ̀,
 * nyɔ́nu, wémà, gbɔ́, lɛ̀ngbɔ́, lɛ̀ngbɔ́ví, azwì, aklasú, asɔkle, awɛ̀wɛ̀, adɔví, ablù, kpátákpátá,
 * itàn, kpàtàkì, ganxixo, hanjitɔ́, hwevi/hweví, acɔci, aboli, nyì, dànhweví, Fɔ̀ngbè, lɛ́ (a marca de
 * plural, vista no próprio verbete de «làn», que mostra o plural «làn lɛ́»).
 *
 * Nível B — Wikipédia (artigo «Fon language» em inglês, com a tabela oficial de marcação de tom, e
 * «Fon (langue)» em francês, com um pequeno dicionário francês→fon escrito pela comunidade e a
 * tradução fon da Declaração Universal dos Direitos Humanos): Kwabɔ, hɔ̀n, wiin, ɔ́ (artigo
 * posposto, visto em duas legendas de imagem: «Sìn ɔ́», «Dànhweví ɔ́»; «Kwabɔ» vem de uma terceira
 * legenda, de uma farmácia no aeroporto de Cotonou), aximɛ, xɔ̀, nǔ, ɖó/ɖò, yì,
 * wâ, dà, houé, yòyò, égbé, gbada, wanyínyí, honton, mɛxó, ví, nú, na, mǐ, un, wé, éh, mɛɖé, kpo,
 * ɖokpó. Essas fontes nem sempre marcam o tom (o próprio artigo da Wikipédia explica que o tom
 * «é marcado em obras de referência, mas nem sempre na escrita do dia a dia») — por isso parte
 * destas palavras aparece sem acento de tom, fiel à fonte, e não por descuido. ATENÇÃO: esse pequeno
 * dicionário francês→fon usa, às vezes, grafia influenciada pelo francês em vez da ortografia oficial
 * do fon — «houé» (ano) e «honton» (amigo) estão nessa forma, não confirmada ainda contra a
 * ortografia oficial (os equivalentes oficiais seriam algo como «xwè» e «hɔ̀ntɔ̃n», mas isso ainda não
 * foi verificado numa fonte independente, então os dois ficam como estão por ora, com este aviso).
 * «akwɛ́» (dinheiro) já foi corrigido dessa grafia à francesa («akouwè») para a forma oficial,
 * confirmada em fr.wiktionary.org/wiki/akwɛ (cauri, a concha que já serviu de moeda na África
 * Ocidental, de onde vem o sentido de «dinheiro»).
 *
 * Nível C — Glosbe (dicionário colaborativo): só a expressão «un dó kú nú mi» (obrigado), a única
 * fonte que achamos para agradecer em fon; é contribuição de usuário, não uma obra acadêmica —
 * merece uma segunda confirmação antes de tratar como definitiva.
 *
 * LACUNAS HONESTAS (preferimos deixar de fora a inventar): não achamos fontes para números além de
 * «ɖokpó» (um), para cores, para «casa», «mãe», «pai», «cão/gato», nem para saudações como «bom
 * dia» ou «como vai» — por isso elas não estão aqui. O tom é marcado como agudo (alto/ascendente),
 * grave (baixo/descendente), cêdilha-chapéu (descendente-ascendente) e circunflexo
 * (ascendente-descendente), exatamente como a própria Wikipédia em inglês descreve a ortografia do
 * fon («Tone marking»); palavra sem acento é palavra cuja fonte consultada também não marcou o tom.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['Kwabɔ', 'bem-vindo', 'interjeição', 'Expressões', '👋', 'Kwabɔ!'],
  ['un dó kú nú mi', 'obrigado', 'expressão', 'Expressões', '🙏', 'Un dó kú nú mi.'],

  // ── Essenciais ──
  ['ɔ́', 'o, a (artigo definido — vem DEPOIS da palavra, nunca antes)', 'artigo', 'Essenciais', '🔹', 'Sìn ɔ́.'],
  ['nǔ', 'coisa', 'substantivo', 'Essenciais', '📦', 'Nǔ ɔ́ kpàtàkì.'],
  ['ɖokpó', 'um, mesmo', 'numeral', 'Essenciais', '1️⃣', 'Wémà ɖokpó.'],
  ['lɛ́', 'marca de plural (vem depois do nome; visto em “làn lɛ́”, carnes)', 'partícula', 'Essenciais', '🔢', 'Nɔví lɛ́.'],
  ['kpo', 'e (liga duas coisas, repetida depois de cada uma: “X kpo Y kpo”)', 'conjunção', 'Essenciais', '➕', 'Gbɔ́ kpo lɛ̀ngbɔ́ kpo.'],
  ['nú', 'para, a (preposição)', 'preposição', 'Essenciais', '➡️', 'Un ɖó wémà nú wé.'],
  ['na', 'vai, vou (marca o futuro, antes do verbo)', 'partícula', 'Essenciais', '⏩', 'Un na wá.'],
  ['akwɛ́', 'dinheiro', 'substantivo', 'Essenciais', '💰', 'Un ɖó akwɛ́.'],
  ['ganxixo', 'hora', 'substantivo', 'Essenciais', '🕐', 'Ganxixo ɖokpó mɛ̀.'],
  ['houé', 'ano', 'substantivo', 'Essenciais', '📅', 'Houé yòyò.'],
  ['égbé', 'hoje', 'advérbio', 'Essenciais', '☀️', 'Égbé, un yì aximɛ.'],
  ['gbada', 'tarde (período do dia)', 'substantivo', 'Essenciais', '🌇', 'Un wâ gbada.'],
  ['wémà', 'livro', 'substantivo', 'Essenciais', '📖', 'Wémà ɔ́.'],
  ['itàn', 'história (palavra emprestada do iorubá “ìtàn”)', 'substantivo', 'Essenciais', '📜', 'Itàn ɔ́.'],
  ['aximɛ', 'mercado', 'substantivo', 'Essenciais', '🏪', 'Un yì aximɛ.'],
  ['kpátákpátá', 'completamente', 'advérbio', 'Essenciais', '💯', 'Kpátákpátá!'],
  ['Fɔ̀ngbè', 'fon (o nome da própria língua: “fala do povo fon”)', 'substantivo', 'Essenciais', '🗣️', 'Fɔ̀ngbè ɔ́.'],

  // ── Pessoas ──
  ['nyɔ́nu', 'mulher', 'substantivo', 'Pessoas', '👩', 'Nyɔ́nu ɔ́.'],
  ['gbɛtɔ́', 'pessoa, ser humano', 'substantivo', 'Pessoas', '🧑', 'Gbɛtɔ́ ɔ́.'],
  ['nɔví', 'irmão, irmã', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Un ɖó nɔví.'],
  ['mǐ', 'nós, vocês', 'pronome', 'Pessoas', '🙌', 'Mǐ yì aximɛ.'],
  ['un', 'eu', 'pronome', 'Pessoas', '🙋', 'Un yì aximɛ.'],
  ['wé', 'você, te', 'pronome', 'Pessoas', '👉', 'Wanyínyí nú wé.'],
  ['éh', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Éh ɖó wémà.'],
  ['mɛɖé', 'alguém', 'pronome', 'Pessoas', '🕵️', 'Mɛɖé wá.'],
  ['ví', 'filho, filha, criança', 'substantivo', 'Pessoas', '👶', 'Ví ɔ́.'],
  ['hanjitɔ́', 'cantor, cantora', 'substantivo', 'Pessoas', '🎤', 'Hanjitɔ́ ɔ́.'],
  ['honton', 'amigo, amiga', 'substantivo', 'Pessoas', '🤝', 'Honton ɔ́.'],
  ['mɛxó', 'pessoa mais velha, irmão/irmã mais velho(a)', 'substantivo', 'Pessoas', '👴', 'Mɛxó ɔ́.'],
  ['nyì', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Nyì ɔ́.'],

  // ── Natureza ──
  ['sìn', 'água', 'substantivo', 'Natureza', '💧', 'Sìn ɔ́.'],
  ['atín', 'árvore', 'substantivo', 'Natureza', '🌳', 'Atín ɔ́.'],
  ['ablù', 'escuridão', 'substantivo', 'Natureza', '🌑', 'Ablù ɔ́.'],

  // ── Animais ──
  ['gbɔ́', 'cabra, carneiro', 'substantivo', 'Animais', '🐐', 'Gbɔ́ ɔ́.'],
  ['lɛ̀ngbɔ́', 'ovelha', 'substantivo', 'Animais', '🐑', 'Lɛ̀ngbɔ́ ɔ́.'],
  ['lɛ̀ngbɔ́ví', 'cordeiro (ovelha + “filhote”)', 'substantivo', 'Animais', '🐑', 'Lɛ̀ngbɔ́ví ɔ́.'],
  ['azwì', 'coelho, lebre', 'substantivo', 'Animais', '🐇', 'Azwì ɔ́.'],
  ['aklasú', 'urubu', 'substantivo', 'Animais', '🦅', 'Aklasú ɔ́.'],
  ['asɔkle', 'francolim (ave parecida com a perdiz)', 'substantivo', 'Animais', '🐦', 'Asɔkle ɔ́.'],
  ['awɛ̀wɛ̀', 'borboleta', 'substantivo', 'Animais', '🦋', 'Awɛ̀wɛ̀ ɔ́.'],
  ['acɔci', 'lagosta', 'substantivo', 'Animais', '🦞', 'Acɔci ɔ́.'],
  ['aboli', 'bagre (peixe-gato)', 'substantivo', 'Animais', '🐟', 'Aboli ɔ́.'],
  ['dànhweví', 'enguia (literalmente “peixe-cobra”)', 'substantivo', 'Animais', '🐍', 'Dànhweví ɔ́.'],
  ['hɔ̀n', 'águia', 'substantivo', 'Animais', '🦅', 'Hɔ̀n ɔ́.'],
  ['wiin', 'abelha', 'substantivo', 'Animais', '🐝', 'Wiin ɔ́.'],

  // ── Alimentação e Restaurantes ──
  ['hweví', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Un xɔ̀ hweví ɖò aximɛ.'],

  // ── Corpo ──
  ['lànmɛ̀', 'corpo (literalmente “dentro da carne”)', 'substantivo', 'Corpo', '🧍', 'Lànmɛ̀ ɔ́.'],
  ['alɔ', 'mão', 'substantivo', 'Corpo', '✋', 'Alɔ ɔ́.'],
  ['adɔví', 'intestino(s)', 'substantivo', 'Corpo', null, 'Adɔví ɔ́.'],

  // ── Verbos-chave ──
  ['xɔ̀', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Un xɔ̀ hweví ɖò aximɛ.'],
  ['ɖó', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Un ɖó wémà.'],
  ['ɖò', 'estar em, estar em (lugar)', 'verbo', 'Verbos-chave', '📍', 'Hweví ɔ́ ɖò aximɛ.'],
  ['yì', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Un yì aximɛ.'],
  ['wâ', 'vir', 'verbo', 'Verbos-chave', '👋', 'Un wâ gbada.'],
  ['dà', 'cozinhar', 'verbo', 'Verbos-chave', '🍳', 'Un dà hweví.'],

  // ── Descrições ──
  ['kpàtàkì', 'importante (empréstimo do iorubá “pàtàkì”)', 'adjetivo', 'Descrições', '⭐', 'Nǔ ɔ́ kpàtàkì.'],
  ['yòyò', 'novo', 'adjetivo', 'Descrições', '✨', 'Houé yòyò.'],
  ['wanyínyí', 'amor', 'substantivo', 'Descrições', '❤️', 'Wanyínyí nú wé.'],
];

export const VOCAB_FON = buildVocab('fon', ROWS);
