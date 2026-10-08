import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do toki pona — a segunda língua CONSTRUÍDA com curso de verdade no app (depois do
 * esperanto, pedido do Matheus, 08/10/2026: "cria o equivalente (A1) para os outros idiomas
 * artificiais"). Aqui a proposta é diferente da do esperanto: o toki pona foi desenhado por Sonja
 * Lang (Sonja Elen Kisa) com um vocabulário TOTAL minúsculo de propósito — por isso este pacote
 * cobre praticamente toda a língua, não só um recorte A1.
 *
 * As ~124 linhas abaixo são o "nimi pu": as palavras do livro oficial "Toki Pona: The Language of
 * Good" (Sonja Lang, 2014) — o próprio livro fala de 120 palavras principais mais 3 sinônimos (por
 * isso listas atuais da comunidade somam ~123; "ale" e "ali" são o mesmo sinônimo aqui numa linha
 * só). NÃO entram aqui palavras de "nimi ku" (as da segunda obra de Sonja Lang, o dicionário "Toki
 * Pona Dictionary", 2021) nem propostas de fã ("nimi ku suli"/"nimi ku lili") — mesmo as 3 que a
 * comunidade mais aceitou (tonsi, n, soko) ficam de fora do núcleo e só aparecem citadas pelo nome,
 * claramente marcadas como extensão não-oficial, no `culture_tip` da primeira unidade (curriculo.ts,
 * card "tok-c1"). Fontes: Sonja Lang, "Toki Pona: The
 * Language of Good" (2014); tokipona.org (site oficial, inclusive a página "Clarifying
 * misconceptions"); Wikipédia ("Toki Pona"); en.wiktionary.org (verbetes "Appendix:Toki Pona/…",
 * usados para a etimologia em extras.ts, não para o sentido aqui).
 *
 * Duas notas importantes sobre os dados:
 * 1) Toki pona não separa as palavras em classes gramaticais do jeito indo-europeu: a MESMA palavra
 *    funciona como substantivo, verbo ou modificador segundo a posição na frase ("moku" depois de
 *    "li" é o verbo "comer"; "moku" depois de "e" pode ser o substantivo "comida"). O campo de classe
 *    gramatical aqui é só uma aproximação pro app (a leitura mais comum/didática), não uma categoria
 *    fixa da língua — ver o tópico de gramática sobre polissemia.
 * 2) Cada palavra cobre um campo de sentido amplo de propósito (polissemia); a tradução usa "/" entre
 *    os sentidos mais usados, com o mais concreto primeiro (ajuda a imagem da palavra a aparecer).
 * 3) "mi jan Ana"/"nimi mi li Ana" (nome próprio depois de "jan"/"li") segue a prática real e
 *    documentada do toki pona pra apresentar nomes — não é uma raiz nova, é um nome emprestado.
 */
export const ROWS: VocabRow[] = [
  // Expressões (interjeições — podem ser frases sozinhas, sem li/e)
  ['a', 'dá ênfase/emoção (ah, há, oh)', 'interjeição', 'Expressões', '😮', 'pona a!'],
  ['mu', 'som de bicho (miau, au-au...)', 'interjeição', 'Expressões', '🐾', 'mu!'],
  ['pu', 'relativo ao livro oficial do toki pona', 'substantivo', 'Expressões', '📖', 'mi pu.'],
  // Essenciais
  ['ala', 'não/zero/nada', 'numeral', 'Essenciais', '🚫', 'mi moku ala.'],
  ['anpa', 'embaixo/baixo/humilde', 'adjetivo', 'Essenciais', '⬇️', 'poki li lon anpa.'],
  ['ante', 'diferente/outro/mudar', 'adjetivo', 'Essenciais', '🔄', 'ni li ante.'],
  ['anu', 'ou', 'conjunção', 'Essenciais', null, 'telo anu pan?'],
  ['e', 'marca o objeto direto', 'partícula', 'Essenciais', null, 'mi moku e kili.'],
  ['en', 'e (liga sujeitos)', 'conjunção', 'Essenciais', null, 'jan en soweli li lon ma.'],
  ['esun', 'mercado/loja/negócio', 'substantivo', 'Essenciais', '🏪', 'mi tawa esun.'],
  ['ijo', 'coisa/objeto', 'substantivo', 'Essenciais', '🧩', 'ni li ijo pona.'],
  ['ike', 'mau/ruim/negativo', 'adjetivo', 'Essenciais', '👎', 'ni li ike.'],
  ['ilo', 'ferramenta/instrumento/máquina', 'substantivo', 'Essenciais', '🔧', 'mi kepeken ilo.'],
  ['jaki', 'sujo/nojento', 'adjetivo', 'Essenciais', '🤢', 'tomo li jaki.'],
  ['kalama', 'som/ruído', 'substantivo', 'Essenciais', '🔊', 'mi kute e kalama.'],
  ['kin', 'também/até', 'advérbio', 'Essenciais', null, 'mi kin wile moku.'],
  ['ko', 'pasta/pó/massa', 'substantivo', 'Essenciais', null, 'ko li lon poki.'],
  ['la', 'marca o contexto da frase', 'partícula', 'Essenciais', null, 'tenpo suno la, mi moku.'],
  ['len', 'roupa/tecido/pano', 'substantivo', 'Essenciais', '👕', 'mi jo e len.'],
  ['lete', 'frio/cru', 'adjetivo', 'Essenciais', '❄️', 'telo li lete.'],
  ['li', 'marca o predicado (o verbo)', 'partícula', 'Essenciais', null, 'jan li pona.'],
  ['lili', 'pequeno/jovem', 'adjetivo', 'Essenciais', null, 'tomo li lili.'],
  ['linja', 'linha/corda/cabelo', 'substantivo', 'Essenciais', null, 'mi jo e linja.'],
  ['lipu', 'papel/documento/página', 'substantivo', 'Essenciais', '📄', 'mi lukin e lipu.'],
  ['lon', 'estar/existir/em', 'verbo', 'Essenciais', '📍', 'mi lon tomo.'],
  ['lupa', 'buraco/porta/janela', 'substantivo', 'Essenciais', null, 'lupa li lon tomo.'],
  ['ma', 'terra/país/solo', 'substantivo', 'Essenciais', '🌍', 'mi lon ma.'],
  ['mani', 'dinheiro/riqueza', 'substantivo', 'Essenciais', '💰', 'mi jo e mani.'],
  ['moli', 'morrer/matar/morto', 'verbo', 'Essenciais', '💀', 'soweli li moli.'],
  ['musi', 'diversão/brincar/jogo/arte', 'substantivo', 'Essenciais', '🎮', 'mi musi.'],
  ['nasa', 'estranho/bobo/louco/bêbado', 'adjetivo', 'Essenciais', '🤪', 'ni li nasa.'],
  ['nasin', 'caminho/jeito/método', 'substantivo', 'Essenciais', null, 'mi lukin e nasin.'],
  ['ni', 'isto/isso/aquilo', 'pronome', 'Essenciais', '👉', 'ni li pona.'],
  ['nimi', 'palavra/nome', 'substantivo', 'Essenciais', '🏷️', 'nimi mi li Ana.'],
  ['o', 'marca o imperativo/vocativo', 'partícula', 'Essenciais', null, 'o moku!'],
  ['pakala', 'erro/dano/quebrar', 'substantivo', 'Essenciais', '💥', 'pakala!'],
  ['pi', 'agrupa dois ou mais modificadores', 'partícula', 'Essenciais', null, 'tomo pi jan pona li suli.'],
  ['poka', 'lado/perto', 'substantivo', 'Essenciais', null, 'mi lon poka tomo.'],
  ['poki', 'caixa/recipiente/tigela', 'substantivo', 'Essenciais', '📦', 'pan li lon poki.'],
  ['pona', 'bom/simples/consertar', 'adjetivo', 'Essenciais', '👍', 'soweli li pona tawa mi.'],
  ['sama', 'igual/mesmo/semelhante', 'adjetivo', 'Essenciais', null, 'mi sama sina.'],
  ['seme', 'o quê/qual', 'pronome', 'Essenciais', '❓', 'sina wile e seme?'],
  ['sewi', 'alto/céu/acima/sagrado', 'substantivo', 'Essenciais', '⬆️', 'mi lon sewi tomo.'],
  ['sike', 'círculo/roda/ano/redondo', 'substantivo', 'Essenciais', '⭕', 'ilo li sike.'],
  ['sin', 'novo/outro', 'adjetivo', 'Essenciais', '🆕', 'tomo li sin.'],
  ['sitelen', 'imagem/desenho/escrever', 'verbo', 'Essenciais', '✍️', 'mi sitelen e nimi.'],
  ['suli', 'grande/alto/longo/importante', 'adjetivo', 'Essenciais', '📏', 'mama li suli tawa mi.'],
  ['supa', 'superfície plana/mesa/cadeira', 'substantivo', 'Essenciais', '🪑', 'mi lon supa.'],
  ['tan', 'de/porque/causa', 'preposição', 'Essenciais', null, 'mi kama tan ma ante.'],
  ['taso', 'mas/só/somente', 'conjunção', 'Essenciais', null, 'ni li pona, taso ni li suli.'],
  ['telo', 'água/líquido', 'substantivo', 'Essenciais', '💧', 'mi moku e telo.'],
  ['tenpo', 'tempo/momento/período', 'substantivo', 'Essenciais', '⏰', 'tenpo ni la, mi pona.'],
  ['tomo', 'casa/construção/cômodo', 'substantivo', 'Essenciais', '🏠', 'tomo li suli.'],
  ['unpa', 'sexo/sexualidade', 'substantivo', 'Essenciais', null, 'ona li toki e unpa.'],
  ['utala', 'luta/conflito/atacar', 'substantivo', 'Essenciais', '⚔️', 'utala li ike.'],
  ['wawa', 'força/energia/poder', 'substantivo', 'Essenciais', '💪', 'mi wawa.'],
  ['weka', 'longe/ausente/remover', 'adjetivo', 'Essenciais', null, 'ona li weka.'],
  // Pessoas
  ['jan', 'pessoa/gente/humano', 'substantivo', 'Pessoas', '🧑', 'jan li lon tomo.'],
  ['kulupu', 'grupo/comunidade', 'substantivo', 'Pessoas', '👥', 'mi lon kulupu.'],
  ['mama', 'pai/mãe/criador', 'substantivo', 'Pessoas', '👪', 'mama mi li pona.'],
  ['meli', 'mulher/esposa/feminino', 'substantivo', 'Pessoas', '👩', 'meli li pona.'],
  ['mi', 'eu/nós', 'pronome', 'Pessoas', '🙋', 'mi pona.'],
  ['mije', 'homem/marido/masculino', 'substantivo', 'Pessoas', '👨', 'mije li pona.'],
  ['ona', 'ele/ela/eles', 'pronome', 'Pessoas', null, 'ona li pona.'],
  ['sina', 'você/vocês', 'pronome', 'Pessoas', '🫵', 'sina pona.'],
  // Verbos-chave
  ['alasa', 'caçar/pescar/coletar', 'verbo', 'Verbos-chave', '🏹', 'mi alasa e kala.'],
  ['awen', 'ficar/esperar/continuar', 'verbo', 'Verbos-chave', '⏳', 'mi awen lon tomo.'],
  ['jo', 'ter/conter', 'verbo', 'Verbos-chave', '🤲', 'mi jo e tomo.'],
  ['kama', 'vir/chegar/tornar-se', 'verbo', 'Verbos-chave', '🚶‍♂️', 'ona li kama.'],
  ['ken', 'poder/conseguir', 'verbo', 'Verbos-chave', '🆗', 'mi ken moku.'],
  ['kepeken', 'usar/com (usando)', 'verbo', 'Verbos-chave', '🛠️', 'mi toki kepeken toki pona.'],
  ['kipisi', 'cortar/dividir/parte', 'verbo', 'Verbos-chave', '✂️', 'mi kipisi e pan.'],
  ['kute', 'ouvir/escutar/obedecer', 'verbo', 'Verbos-chave', '👂', 'mi kute e toki sina.'],
  ['lape', 'dormir/descansar', 'verbo', 'Verbos-chave', '😴', 'mi lape.'],
  ['lukin', 'ver/olhar/tentar', 'verbo', 'Verbos-chave', '👀', 'mi lukin e kala.'],
  ['olin', 'amar/amor/respeitar', 'verbo', 'Verbos-chave', '❤️', 'mi olin e sina.'],
  ['open', 'abrir/começar', 'verbo', 'Verbos-chave', '🔓', 'mi open e lupa.'],
  ['pali', 'fazer/trabalhar/trabalho', 'verbo', 'Verbos-chave', '🔨', 'mi pali.'],
  ['pana', 'dar/colocar/enviar', 'verbo', 'Verbos-chave', '🤲', 'mi pana e pan.'],
  ['pini', 'terminar/fim/passado', 'verbo', 'Verbos-chave', '🏁', 'mi pini e pali.'],
  ['sona', 'saber/conhecimento/sabedoria', 'verbo', 'Verbos-chave', '🧠', 'mi sona e toki pona.'],
  ['tawa', 'ir/mover/para', 'verbo', 'Verbos-chave', '🚶', 'mi tawa tomo.'],
  ['toki', 'falar/língua/dizer', 'verbo', 'Verbos-chave', '🗣️', 'mi toki e toki pona.'],
  ['wile', 'querer/precisar/dever', 'verbo', 'Verbos-chave', '💭', 'mi wile moku.'],
  // Corpo
  ['insa', 'dentro/estômago/interior', 'substantivo', 'Corpo', null, 'telo li lon insa.'],
  ['lawa', 'cabeça/mente/liderar', 'substantivo', 'Corpo', '🧠', 'lawa mi li pona.'],
  ['luka', 'mão/braço/cinco', 'substantivo', 'Corpo', '✋', 'mi jo e luka tu.'],
  ['monsi', 'atrás/costas', 'substantivo', 'Corpo', null, 'mi lon monsi tomo.'],
  ['nena', 'nariz/elevação/colina', 'substantivo', 'Corpo', null, 'nena mi li lili.'],
  ['noka', 'perna/pé/base', 'substantivo', 'Corpo', '🦵', 'noka mi li suli.'],
  ['oko', 'olho', 'substantivo', 'Corpo', '👁️', 'oko mi li pona.'],
  ['pilin', 'sentimento/sentir/coração', 'substantivo', 'Corpo', '❤️', 'pilin mi li pona.'],
  ['selo', 'pele/superfície/exterior', 'substantivo', 'Corpo', null, 'selo mi li pona.'],
  ['sijelo', 'corpo/estado físico', 'substantivo', 'Corpo', '🫀', 'sijelo mi li pona.'],
  ['sinpin', 'frente/rosto/parede/peito', 'substantivo', 'Corpo', null, 'mi lon sinpin tomo.'],
  ['uta', 'boca', 'substantivo', 'Corpo', '👄', 'uta mi li suli.'],
  // Natureza
  ['akesi', 'réptil/anfíbio', 'substantivo', 'Natureza', '🦎', 'akesi li lon ma.'],
  ['kala', 'peixe', 'substantivo', 'Natureza', '🐟', 'kala li lon telo.'],
  ['kasi', 'planta/árvore/folha', 'substantivo', 'Natureza', '🌿', 'kasi li suli.'],
  ['kiwen', 'pedra/duro/sólido', 'adjetivo', 'Natureza', '🪨', 'ni li kiwen.'],
  ['kon', 'ar/vento/espírito', 'substantivo', 'Natureza', '💨', 'kon li tawa.'],
  ['mun', 'lua/céu noturno', 'substantivo', 'Natureza', '🌙', 'mun li lon sewi.'],
  ['palisa', 'vara/graveto/objeto longo e rígido', 'substantivo', 'Natureza', null, 'mi jo e palisa.'],
  ['pipi', 'inseto/bicho pequeno', 'substantivo', 'Natureza', '🐛', 'pipi li lili.'],
  ['seli', 'fogo/calor/quente', 'substantivo', 'Natureza', '🔥', 'seli li suli.'],
  ['soweli', 'animal (mamífero/terrestre)', 'substantivo', 'Natureza', '🐾', 'soweli li moku.'],
  ['suno', 'sol/luz', 'substantivo', 'Natureza', '☀️', 'suno li walo.'],
  ['waso', 'pássaro/ave', 'substantivo', 'Natureza', '🐦', 'waso li tawa sewi.'],
  // Alimentação e Restaurantes
  ['kili', 'fruta/vegetal', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'kili li suwi.'],
  ['moku', 'comer/beber/comida', 'verbo', 'Alimentação e Restaurantes', '🍽️', 'mi moku e kili.'],
  ['namako', 'tempero/condimento/extra', 'substantivo', 'Alimentação e Restaurantes', null, 'mi pana e namako.'],
  ['pan', 'grão/cereal/pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'pan li suli.'],
  ['suwi', 'doce/fofo/açúcar', 'adjetivo', 'Alimentação e Restaurantes', '🍬', 'ni li suwi tawa mi.'],
  // Números
  ['ale', 'tudo/todos/infinito', 'numeral', 'Números', '♾️', 'mi jo e ale.'],
  ['mute', 'muitos/vários', 'numeral', 'Números', null, 'jan mute li lon ma.'],
  ['nanpa', 'número/marca ordinal', 'substantivo', 'Números', '🔢', 'jan nanpa wan li lon tomo.'],
  ['tu', 'dois/dividir', 'numeral', 'Números', '2️⃣', 'jan tu li lon tomo.'],
  ['wan', 'um/unir', 'numeral', 'Números', '1️⃣', 'jan wan li lon tomo.'],
  // Cores
  ['jelo', 'amarelo', 'adjetivo', 'Cores', '🟡', 'pan li jelo.'],
  ['laso', 'azul/verde (claro)', 'adjetivo', 'Cores', '🔵', 'telo li laso.'],
  ['loje', 'vermelho', 'adjetivo', 'Cores', '🔴', 'kili li loje.'],
  ['pimeja', 'preto/escuro/sombra', 'adjetivo', 'Cores', '⚫', 'tenpo pimeja la, mi lape.'],
  ['walo', 'branco/claro', 'adjetivo', 'Cores', '⚪', 'lipu li walo.'],
  // Cor/aparência (fica junto de Essenciais por não ter campo próprio no app)
  ['kule', 'cor/colorido/pintado', 'substantivo', 'Cores', '🎨', 'ni li kule pona.'],
];

export const VOCAB_TOK = buildVocab('tok', ROWS);
