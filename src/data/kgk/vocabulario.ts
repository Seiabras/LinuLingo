import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kaiowá (também chamado kaiwá ou pãi-tavyterã; código ISO 639-3 «kgk»), língua indígena
 * viva do subgrupo I (guarani) da família tupi-guarani, falada sobretudo no sul do Mato Grosso do Sul
 * (Brasil) e no leste do Paraguai. DIFERENTE do guarani paraguaio (pacote «gn», normatizado pela
 * Academia de la Lengua Guaraní) e do guarani mbyá (pacote «gun»): os três são primos próximos, mas
 * nenhuma palavra daqui foi tirada de gn ou gun por parecença.
 *
 * Fonte principal, desde a revisão de 17/10/2026: Eliane Berendina Loman de Barros, «Dicionário bilíngue
 * kaiwá-português» (dissertação de mestrado, UFMS, Três Lagoas, 2014; 1.034 verbetes com exemplos tirados
 * de 65 histórias contadas por 21 falantes das aldeias de Dourados e Panambizinho, em 1960 e em 2013;
 * repositorio.ufms.br/handle/123456789/2029). As páginas citadas abaixo são as impressas no rodapé da
 * dissertação (a página impressa é a do PDF menos uma). Também: Valéria Faria Cardoso, «Aspectos
 * morfossintáticos da língua Kaiowá (Guarani)» (tese, Unicamp, 2008), e Eliel Benites, «A busca do teko
 * araguyje» (tese, UFGD, 2021, com glossário; escrita na grafia paraguaia).
 *
 * GRAFIA. O curso segue a ortografia kaiwá do SIL descrita por Loraine Bridgeman (2002) e usada por
 * Barros (2014, pp. 90–91 e 141–142): nh (não ñ), gw (não gu), kw (não ku), x (não ch), v para /w/
 * (yvy, não ywy), apóstrofo para a oclusiva glotal e til só na última vogal nasal da palavra. Na revisão
 * de 17/10/2026 as palavras do A1, que estavam numa grafia mista, passaram para essa ortografia pela
 * tabela de correspondências de Barros (2014, p. 91, Quadro 5: gu → gw, ku → kw, ñ → nh, ch → x). As
 * palavras que o dicionário de Barros não traz e que vieram da tese de Benites (agwyjevete, dos
 * agradecimentos; gwa'a, da lista das aves sagradas) foram convertidas pela mesma tabela. «ára» (céu, dia, tempo) fica como em Benites; Barros registra
 * «áry» (p. 148) — ver a nota da palavra. As escolas indígenas da região de Dourados usam muitas vezes a
 * convenção do guarani paraguaio (Cardoso 2008, pp. 19–20, citada por Barros 2014, p. 92): por isso o
 * aluno vai encontrar também «ñe'ẽ», «aguyjevete», «kuarahy».
 *
 * Os exemplos são frases do dicionário de Barros, copiadas como estão (às vezes só a oração principal),
 * com a página. Os poucos exemplos montados seguem uma regra documentada e estão marcados.
 *
 * B1 (17/10/2026): 80 palavras novas, B1.1 a B1.4, todas verbetes de Barros (2014), com a frase do
 * próprio verbete (as páginas foram conferidas no texto em duas colunas do PDF, coluna por coluna).
 * Nenhum exemplo do B1 foi montado.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  // Benites 2021, agradecimentos («Aguyjevete maymávape!», “obrigado a todos”; «che aguyjevete», “sou muito
  // grato”), grafia convertida (gu → gw, Barros 2014, p. 91); a raiz «agwyje» (perfeito, maduro) está em Barros
  // 2014, p. 144. (Revisão: tirado o sentido “bem-vindo”, que nenhuma das fontes registra.)
  ['agwyjevete', 'muito obrigado(a) (expressão ligada a agwyje, “perfeito, maduro”)', 'interjeição', 'Expressões', '🙏', 'Agwyjevete!'],
  // Barros 2014, p. 201 (porã) e p. 99 (karia'y porã, “jovem bom”)
  ['porã', 'bom, bonito; bem', 'adjetivo', 'Expressões', '👍', "Karia'y porã."],
  // ── Pessoas ──
  // Barros 2014, p. 102 (Quadro 8) e p. 170 (Xe sy ndive aju)
  ['xe', 'eu; me; meu, minha', 'pronome', 'Pessoas', '🙋', 'Xe sy ndive aju.'],
  // Barros 2014, p. 189 (ne1, Ne resãi?)
  ['ne', 'tu, você; teu, tua (também nde)', 'pronome', 'Pessoas', '🫵', 'Ne resãi?'],
  // Barros 2014, p. 154 (ha'e1) e p. 200 (Ha'e ipitu va'e)
  ["ha'e", 'ele, ela', 'pronome', 'Pessoas', '👤', "Ha'e ipitu va'e."],
  // Barros 2014, p. 102 (Quadro 8: nhande, nhane) e p. 192 (nhane2: nhane nhe'ẽ)
  ['nhane', 'nós, nosso (incluindo quem ouve; também nhande)', 'pronome', 'Pessoas', '🙌', "Ou nhane pytygwõ."],
  // Barros 2014, p. 196 (ore2: Orojapo ore kyha)
  ['ore', 'nós, nosso (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Orojapo ore kyha.'],
  // Barros 2014, p. 199 (peẽ)
  ['peẽ', 'vocês (também pende, pene)', 'pronome', 'Pessoas', '👥', "Amombe'u-ta peẽ-my kwarahy ipuku."],
  // Barros 2014, p. 154 (ha'e kwéry) e p. 158 (Ha'e kwéry ohendu mombyry-gwi)
  ["ha'e kwéry", 'eles, elas', 'pronome', 'Pessoas', '👥', "Ha'e kwéry ohendu mombyry-gwi."],
  // Barros 2014, p. 149 (ava); exemplo montado pela regra do numeral antes do nome (p. 100)
  ['ava', 'gente, pessoa, especialmente pessoa indígena', 'substantivo', 'Pessoas', '🧑', 'Peteĩ ava.'],
  // Barros 2014, p. 175 (kunha) e p. 97 (Quadro 6: kunha, “mulher”)
  ['kunha', 'mulher; fêmea', 'substantivo', 'Pessoas', '👩', 'Entéro kunha gwive okyhyje.'],
  // Barros 2014, p. 172 (karai)
  ['karai', 'não indígena, branco(a)', 'substantivo', 'Pessoas', '🧑‍💼', "Ypy ramogware ndoikói karai, he'i nhamói."],
  // ── Família ──
  // Barros 2014, p. 211 (sy), p. 94 (nde sy, isy, osy) e p. 179 (Mamo nde sy oho?)
  ['sy', 'mãe (nome de posse obrigatória: xe sy, minha mãe; isy, a mãe dele)', 'substantivo', 'Família', '👩', 'Mamo nde sy oho?'],
  // Barros 2014, p. 185 (ména) e p. 97 (Quadro 6: iména, “seu marido”)
  ['ména', 'marido, esposo (nome de posse obrigatória: iména, o marido dela)', 'substantivo', 'Família', '🤵', 'Iména.'],
  // Barros 2014, p. 185 (mitã)
  ['mitã', 'criança', 'substantivo', 'Família', '🧒', "Mokõi mitã oiko va'ekwe."],
  // Barros 2014, p. 214 (ta'y) e p. 207 (ra'y: Ndaha'éi xe ra'y)
  ["ta'y", "filho, dito pelo pai (com r- depois de outra palavra: xe ra'y, meu filho)", 'substantivo', 'Família', '👶', "Ndaha'éi xe ra'y."],
  // Barros 2014, p. 214 (tamói); o sentido de líder vem do ISA (Povos Indígenas no Brasil: «Tamõi (avô)», «Jari (avó)»)
  ['tamói', 'avô; também o líder de uma família extensa', 'substantivo', 'Família', '👴', "Nda'éi voi xe pene ramói-pe."],
  // Barros 2014, p. 166 (jari)
  ['jari', 'avó; também a líder de uma família extensa', 'substantivo', 'Família', '👵', 'Ajevy jari róga-gwi.'],
  // ── Natureza ──
  // Benites 2021 (glossário: «Ára: céu, dia, tempo-espaço»); Barros 2014, p. 148, registra «áry» (céu; dia). Exemplo montado pela regra
  // do adjetivo atributivo depois do nome (Barros 2014, p. 99)
  ['ára', 'céu; dia; tempo (uma só palavra para os três sentidos; Barros escreve áry)', 'substantivo', 'Natureza', '🌤️', 'Ára porã.'],
  // Barros 2014, p. 176 (kwarahy: Haku eterei kwarahy)
  ['kwarahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Haku eterei kwarahy.'],
  // Barros 2014, p. 166 (jasy: lua; mês) e p. 187 (Mokõi jasy oky)
  ['jasy', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Mokõi jasy oky.'],
  // Barros 2014, p. 222 (y) e p. 151 (Osẽ y-gwi)
  ['y', 'água', 'substantivo', 'Natureza', '💧', 'Osẽ y-gwi.'],
  // Barros 2014, p. 223 (yvy) e p. 102 (ko yvy, “esta terra”)
  ['yvy', 'terra, chão', 'substantivo', 'Natureza', '🌍', 'Ko yvy.'],
  // Barros 2014, p. 224 (yvyra) e p. 174 (Nhanhemi yvyra kupe-py)
  ['yvyra', 'árvore; madeira', 'substantivo', 'Natureza', '🌳', 'Nhanhemi yvyra kupe-py.'],
  // Barros 2014, p. 146 (ama), oração tirada de «Oporandu xe-vy: Kipy nde topa ama?» (“Eles me perguntaram: aonde
  // a chuva te pegou?”)
  ['ama', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Kipy nde topa ama?'],
  // Barros 2014, p. 214 (tata) e p. 186 (Omoendy meme tata okyhyje-gwi)
  ['tata', 'fogo', 'substantivo', 'Natureza', '🔥', 'Omoendy meme tata okyhyje-gwi.'],
  // Barros 2014, p. 164 (ita: Ohupity ita)
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Ohupity ita.'],
  // Barros 2014, p. 171 (ka'agwy)
  ["ka'agwy", 'mata, floresta', 'substantivo', 'Natureza', '🌲', "Ha'e kwéry oiko ka'agwy-rehe."],
  // ── Animais ──
  // Barros 2014, p. 165 (jagwarete) e p. 146 (Amo ou jagwarete)
  ['jagwarete', 'onça', 'substantivo', 'Animais', '🐆', 'Amo ou jagwarete.'],
  // Benites 2021 (gua'a, arara, na lista das aves sagradas do cap. sobre o ayvu), grafia convertida (gu → gw, Barros 2014, p. 91); exemplo montado pela regra
  // do numeral antes do nome (Barros 2014, p. 100)
  ["gwa'a", 'arara', 'substantivo', 'Animais', '🦜', "Peteĩ gwa'a."],
  // Barros 2014, p. 152 (gwyra: Gwyra porã voi xirino)
  ['gwyra', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Gwyra porã voi xirino.'],
  // Barros 2014, p. 200 (pira) e p. 170 (Ke'y oho ojopói pira ysyry-py)
  ['pira', 'peixe', 'substantivo', 'Animais', '🐟', "Ke'y oho ojopói pira ysyry-py."],
  // ── Corpo ──
  // Barros 2014, p. 146 (akã: Ani upéa eremoĩ ne akã-my)
  ['akã', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Ani upéa eremoĩ ne akã-my.'],
  // Barros 2014, p. 216 (tesa: Nde resa'i) e p. 97 (Quadro 6: hesa, “seu olho”)
  ['tesa', 'olho (nome de posse obrigatória: nde resa, teu olho; hesa, o olho dele)', 'substantivo', 'Corpo', '👁️', "Nde resa'i."],
  // Barros 2014, p. 203 (py2) e p. 200 (Ore py ijapiru'apa va'erã)
  ['py', 'pé', 'substantivo', 'Corpo', '🦶', "Ore py ijapiru'apa va'erã."],
  // ── Descrições ──
  // Barros 2014, p. 219 (vai: Jagwarete ko ipy'a vai, he'i)
  ['vai', 'mau, ruim, feio', 'adjetivo', 'Descrições', '👎', "Jagwarete ko ipy'a vai, he'i."],
  // Barros 2014, p. 205 (pytã); exemplo montado pela regra do adjetivo depois do nome (p. 99)
  ['pytã', 'vermelho', 'adjetivo', 'Descrições', '🔴', "Gwa'a pytã."],
  // Barros 2014, p. 160 (hũ: Ka'agwy hũ porã eterei ko ka'agwy)
  ['hũ', 'preto, escuro', 'adjetivo', 'Descrições', '⚫', "Ka'agwy hũ porã eterei ko ka'agwy."],
  // Barros 2014, p. 188 (morotĩ) e p. 99 (avati morotĩ, “milho branco”)
  ['morotĩ', 'branco', 'adjetivo', 'Descrições', '⚪', 'Avati morotĩ.'],
  // Barros 2014, p. 161 (hovy: azul ou verde); exemplo montado pela regra do adjetivo depois do nome (p. 99)
  ['hovy', 'verde, azul', 'adjetivo', 'Descrições', '🟢', "Ka'agwy hovy."],
  // Barros 2014, p. 151 (gwasu); exemplo montado pela regra do adjetivo depois do nome (p. 99)
  ['gwasu', 'grande', 'adjetivo', 'Descrições', '📏', 'Yvyra gwasu.'],
  // Barros 2014, p. 185 (mirĩ: Ohexa jagwarete gwavira mirĩ aju)
  ['mirĩ', 'pequeno', 'adjetivo', 'Descrições', '🤏', 'Ohexa jagwarete gwavira mirĩ aju.'],
  // Barros 2014, p. 203 (pyahu: Gwóga pyahu-py oiko)
  ['pyahu', 'novo', 'adjetivo', 'Descrições', '✨', 'Gwóga pyahu-py oiko.'],
  // Barros 2014, p. 217 (tuja: Ituja-ma óga)
  ['tuja', 'velho (coisas e homens idosos)', 'adjetivo', 'Descrições', '👴', 'Ituja-ma óga.'],
  // ── Verbos-chave ──
  // Barros 2014, p. 163 (iko: viver, existir; nascer; morar) — Oiko xe sy gwóga-py
  ['iko', 'viver, existir; morar', 'verbo', 'Verbos-chave', '🧍', 'Oiko xe sy gwóga-py.'],
  // Barros 2014, p. 176 (kwaa, verbo da classe ai-: Xe aikwaa mamo pa oĩ heta tanhykatĩ)
  ['kwaa', 'saber, conhecer', 'verbo', 'Verbos-chave', '🧠', 'Xe aikwaa mamo pa oĩ heta tanhykatĩ.'],
  // Barros 2014, p. 159 (hexa: Kagware ohexa ranhe jagwarete-pe)
  ['hexa', 'ver, enxergar', 'verbo', 'Verbos-chave', '👀', 'Kagware ohexa ranhe jagwarete-pe.'],
  // Barros 2014, p. 151 (gwata) e p. 150 (Arakwe entéro ogwata)
  ['gwata', 'andar, caminhar', 'verbo', 'Verbos-chave', '🚶', 'Arakwe entéro ogwata.'],
  // Barros 2014, p. 151 (gwahẽ: Orokanhy orogwahẽ óga-py)
  ['gwahẽ', 'chegar', 'verbo', 'Verbos-chave', '🏁', 'Orokanhy orogwahẽ óga-py.'],
  // Barros 2014, p. 166 (japo: Gwogarã ojapo pindo-gwi)
  ['japo', 'fazer', 'verbo', 'Verbos-chave', '🔨', 'Gwogarã ojapo pindo-gwi.'],
  // Barros 2014, p. 218 ('u, verbo da classe ha-) e p. 211 (Xe nda'úi so'o)
  ["'u", 'comer; beber', 'verbo', 'Verbos-chave', '🍽️', "Xe nda'úi so'o."],
  // ── Números ──
  // Barros 2014, p. 200 (peteĩ) e p. 100 (os numerais vêm antes do nome)
  ['peteĩ', 'um, uma', 'numeral', 'Números', '1️⃣', 'Upéixa ohasa ave peteĩ ro\'y.'],
  // Barros 2014, p. 187 (mokõi)
  ['mokõi', 'dois, duas', 'numeral', 'Números', '2️⃣', 'Mokõi jasy oky.'],
  // Barros 2014, p. 182 (mbohapy) e p. 155 (Ohasa mbohapy jasy)
  ['mbohapy', 'três', 'numeral', 'Números', '3️⃣', 'Ohasa mbohapy jasy.'],
  // Barros 2014, p. 164 (irundy) e p. 161 (Yma rupigwa hexakáry oĩ araka'e irundy)
  ['irundy', 'quatro', 'numeral', 'Números', '4️⃣', "Yma rupigwa hexakáry oĩ araka'e irundy."],
  // Barros 2014, p. 159 (heta) e p. 100 (a partir de quatro, usa-se heta)
  ['heta', 'muitos, muitas', 'numeral', 'Números', '🔢', 'Heta yvypóry oĩ, heta hemiarirõ kwéry oĩ.'],
  // ── Cultura ──
  // Barros 2014, p. 196 (óga, com r-/gw-/h-: Aju jevy xe róga-py)
  ['óga', 'casa (xe róga, minha casa; hóga, a casa dele)', 'substantivo', 'Cultura', '🏠', 'Aju jevy xe róga-py.'],
  // Barros 2014, p. 215 (tekoha: modo de vida; caráter) e p. 72 (Pereira 2004: o tekoha é a maior unidade
  // de organização kaiwá); exemplo montado pela regra do adjetivo depois do nome (p. 99)
  ['tekoha', 'aldeia, território: o lugar onde se vive o teko (o modo de ser kaiowá)', 'substantivo', 'Cultura', '🏘️', 'Tekoha porã.'],
  // Barros 2014, p. 215 (teko) e p. 76 (teko porã, teko marangatu)
  ['teko', 'modo de ser, jeito de viver, comportamento; vida', 'substantivo', 'Cultura', '🌿', "A-rami ae teko porã, ja'e nhane memby kwéry-pe."],
  // Barros 2014, p. 192 (nhe'ẽ1: palavra; alma; língua; história) e p. 149 (Ava nhe'ẽ ymagware oĩ arã)
  ["nhe'ẽ", 'palavra, fala, língua; também alma', 'substantivo', 'Cultura', '💬', "Ava nhe'ẽ ymagware oĩ arã."],
  // Barros 2014, p. 181 (mbaraka) e p. 146 (Ajúri omoĩ mbaraka)
  ['mbaraka', 'chocalho, usado nos cantos-reza (deu origem à palavra “maraca” do português)', 'substantivo', 'Cultura', '🪇', 'Ajúri omoĩ mbaraka.'],
  // Barros 2014, p. 149 (avati) e p. 73 (o avati morotĩ, milho branco, carrega a espiritualidade)
  ['avati', 'milho (o avati morotĩ, milho branco, é sagrado para o povo kaiowá)', 'substantivo', 'Cultura', '🌽', "Otopa mokõi avati ra'ỹi."],

  // ═══ A1.1, lições extras (17/10/2026) ═══
  // Barros 2014, p. 181 (mba'éixa: Mba'éixa pa ereiko? “Como você está?”)
  ["Mba'éixa pa ereiko?", 'como vai?, como você está?', 'expressão', 'Expressões', '🙂', "Mba'éixa pa ereiko?"],
  // Barros 2014, p. 189 (ne1: Ne resãi? “Você está com saúde?”) e p. 208 (resãi, ter saúde)
  ['Ne resãi?', 'você está com saúde? (cumprimento)', 'expressão', 'Expressões', '💪', 'Ne resãi?'],
  // Barros 2014, p. 189 (naháni: resposta negativa a uma pergunta)
  ['naháni', 'não', 'advérbio', 'Expressões', '🙅', "Naháni, he'i."],
  // Barros 2014, p. 171 (ka'ay: mate, da erva-mate)
  ["ka'ay", 'erva-mate', 'substantivo', 'Cultura', '🧉', "Egwahẽ ja'u ka'ay, he'i."],
  // Barros 2014, p. 165 (jaha: “nós vamos”, do verbo irregular ir)
  ['jaha', 'vamos', 'verbo', 'Expressões', '👣', "Jaha katu, ha'e íxupe."],
  // Barros 2014, p. 150 (e-, imperativo: Eju ko'a-py, “Venha aqui”)
  ["Eju ko'a-py.", 'venha aqui', 'expressão', 'Expressões', '👋', "Eju ko'a-py."],
  // Barros 2014, p. 177 (kwimba'e)
  ["kwimba'e", 'homem; macho', 'substantivo', 'Pessoas', '👨', "Kwimba'e oje'ói hikwái kagwĩ ha-py."],
  // Barros 2014, p. 175 (kunumi)
  ['kunumi', 'menino', 'substantivo', 'Pessoas', '👦', "Ko peteĩ oiko va'e katu kunumi ahayhu."],
  // Barros 2014, p. 175 (kunhataĩ)
  ['kunhataĩ', 'moça', 'substantivo', 'Pessoas', '👧', "Pe kunhataĩ-rehe ojepota mborevi."],
  // Barros 2014, p. 172 (karia'y)
  ["karia'y", 'rapaz, homem jovem', 'substantivo', 'Pessoas', '🧑', "Upe kwimba'e karia'y nde pota va'e."],
  // Barros 2014, p. 158 (héry, com t-/r-/gw-/h-) e p. 159 (Upéixa-gwi pe héry kwarahy)
  ['héry', 'nome (com r- depois de outra palavra: avati morotĩ réry, o nome do milho branco)', 'substantivo', 'Pessoas', '🏷️', 'Upéixa-gwi pe héry kwarahy.'],
  // Barros 2014, p. 185 (mitã'i: bebê, criancinha)
  ["mitã'i", 'bebê', 'substantivo', 'Família', '👶', "Imbaraete-ma mitã'i ave."],

  // ═══ A2.1 (17/10/2026) ═══
  // Barros 2014, p. 172 (karu: comer, não específico; alimentar-se) e p. 108 (Quadro 11)
  ['karu', 'alimentar-se, fazer a refeição', 'verbo', 'Verbos-chave', '🍲', "Heta so'o areko-ta akaru hagwã."],
  // Barros 2014, p. 180 (mba'apo) e p. 174 (Kokwe-py omba'apo)
  ["mba'apo", 'trabalhar', 'verbo', 'Verbos-chave', '⚒️', "Kokwe-py omba'apo."],
  // Barros 2014, p. 173 (ke1: Oroke arã ore kyha-py)
  ['ke', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Oroke arã ore kyha-py.'],
  // Barros 2014, p. 170 (ju: vir; 3ª pessoa ou) e p. 111 (Quadro 15)
  ['ju', 'vir', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Xe sy ndive aju.'],
  // Barros 2014, p. 160 (ho: ir, irregular — aha, ereho, oho, jaha, oroho, peho)
  ['ho', 'ir', 'verbo', 'Verbos-chave', '➡️', 'Upéi oho osy ha-py.'],
  // Barros 2014, p. 151 (gwapy: sentar)
  ['gwapy', 'sentar-se', 'verbo', 'Verbos-chave', '🪑', 'Ogwapy oĩ-vy xe sy.'],
  // Barros 2014, p. 158 (hendu: ouvir, escutar)
  ['hendu', 'ouvir', 'verbo', 'Verbos-chave', '👂', "Ha'e kwéry ohendu mombyry-gwi."],
  // Barros 2014, p. 202 (porahéi1: cantar)
  ['porahéi', 'cantar', 'verbo', 'Verbos-chave', '🎶', 'Heta oroju oroporahéi.'],
  // Barros 2014, p. 209 (ru1: pai)
  ['ru', 'pai', 'substantivo', 'Família', '👨', "Yma jeko oiko araka'e nhande ru."],
  // Barros 2014, p. 185 (memby1: filho ou filha, em relação à mãe)
  ['memby', 'filho ou filha (dito pela mãe)', 'substantivo', 'Família', '🧒', "Eju ne memby ndive anho."],
  // Barros 2014, p. 173 (ke'y: irmão mais velho; variante ryke'y)
  ["ke'y", 'irmão mais velho', 'substantivo', 'Família', '🧑', "Ke'y ogwejy yvyra rakã-gwi."],
  // Barros 2014, p. 178 (kyvy: irmão, em relação à irmã)
  ['kyvy', 'irmão (dito pela irmã)', 'substantivo', 'Família', '👦', "Xe ndaiporivéi-ma xe kyvy."],
  // Barros 2014, p. 215 (tembireko, com t-/r-/gw-/h-) e p. 98
  ['tembireko', 'esposa (xe rembireko, minha esposa)', 'substantivo', 'Família', '👰', "Ha hembireko katu he'i íxupe."],
  // Barros 2014, p. 216 (temiarirõ, com t-/r-/gw-/h-)
  ['temiarirõ', 'neto, neta', 'substantivo', 'Família', '👶', "Hemiarirõ kwéry ijurugwy-py oiko arã."],
  // Barros 2014, p. 174 (kokwe: roça)
  ['kokwe', 'roça', 'substantivo', 'Cultura', '🌱', "Kokwe-py omba'apo."],
  // Barros 2014, p. 216 (tembi'u, com t-/r-/gw-/h-) e p. 95 (tembi- + 'u, “comer”)
  ["tembi'u", 'comida', 'substantivo', 'Cultura', '🥘', "Orogwereko tembi'u jygwe ramo, orome'ẽ ojóupe."],
  // Barros 2014, p. 171 (ka'aru: tarde)
  ["ka'aru", 'tarde', 'substantivo', 'Natureza', '🌇', "Oroho ka'aru-ma voi."],
  // Barros 2014, p. 204 (pyhare: noite)
  ['pyhare', 'noite', 'substantivo', 'Natureza', '🌃', "Upéa-gwi ha'e kwéry ndogwatáiry pyhare."],
  // Barros 2014, p. 174 (ko'ẽ: madrugada, manhã)
  ["ko'ẽ", 'manhã, madrugada', 'substantivo', 'Natureza', '🌅', "Ko'ẽ jevy ramo oho."],
  // Barros 2014, p. 174 (ko'ánga: agora)
  ["ko'ánga", 'agora', 'advérbio', 'Expressões', '⏱️', "Ko'ánga amombe'u-ta monde rehegwa nhe'ẽ."],

  // ═══ A2.2 (17/10/2026) ═══
  // Barros 2014, p. 179 (mamo: onde, aonde)
  ['mamo', 'onde, aonde', 'advérbio', 'Perguntas', '📍', 'Mamo nde sy oho?'],
  // Barros 2014, p. 180 (máva: quem?)
  ['máva', 'quem', 'pronome', 'Perguntas', '🕵️', "Máva pa a-py oĩ-ma?"],
  // Barros 2014, p. 180 (mba'e1: que coisa?)
  ["mba'e", 'o quê, que coisa; também “coisa”', 'pronome', 'Perguntas', '❓', "Mba'e pa ojehu nde-vy?"],
  // Barros 2014, p. 184 (mbovy: quanto(s)?)
  ['mbovy', 'quantos', 'pronome', 'Perguntas', '🧮', "Mbovy ánho erereko ko'ánga?"],
  // Barros 2014, p. 179 (ma'erã: por quê? para quê?)
  ["ma'erã", 'por quê', 'advérbio', 'Perguntas', '🤔', "Ma'erã erekyhyje xéhegwi?"],
  // Barros 2014, p. 176 (kwehe: ontem, semana passada)
  ['kwehe', 'ontem', 'advérbio', 'Tempo', '⏪', "Kwehe ogwenohẽ va'e ogwenohẽ tãi."],
  // Barros 2014, p. 174 (ko'ẽ ramo: amanhã)
  ["ko'ẽ ramo", 'amanhã', 'advérbio', 'Tempo', '⏩', "Ko'ẽ ramo aha-ta Tanambi-py."],
  // Barros 2014, p. 222 (yma: antigamente)
  ['yma', 'antigamente', 'advérbio', 'Tempo', '📜', "Yma jeko araka'e ovu y."],
  // Barros 2014, p. 185 (meme: sempre) e p. 155 (Ahapeko meme voi xe sy-pe)
  ['meme', 'sempre', 'advérbio', 'Tempo', '🔁', "Ahapeko meme voi xe sy-pe."],
  // Barros 2014, p. 169 (jevy1: de novo, outra vez) e p. 114 (Eju jevy a-py)
  ['jevy', 'de novo', 'advérbio', 'Tempo', '🔂', 'Eju jevy a-py.'],
  // Barros 2014, p. 187 (mombyry: longe)
  ['mombyry', 'longe', 'advérbio', 'Lugares', '🗺️', 'Ha mombyry erehexa.'],
  // Barros 2014, p. 144 (agwĩ: perto, próximo; o contrário de mombyry)
  ['agwĩ', 'perto', 'advérbio', 'Lugares', '📌', "Hi'agwĩ-ma jave ogwahẽ ramo oiyva-ma."],
  // Barros 2014, p. 177 (kyhyje: ter medo)
  ['kyhyje', 'ter medo', 'verbo', 'Sentimentos', '😨', 'Ani erekyhyje.'],
  // Barros 2014, p. 219–220 (vy'a1: estar alegre, feliz)
  ["vy'a", 'alegre', 'verbo', 'Sentimentos', '😊', "Avy'a eterei xe ryke ogwahẽ jevy ramo."],
  // Barros 2014, p. 202 (poxy: estar bravo, irado; verbo da classe xe)
  ['poxy', 'bravo, zangado', 'verbo', 'Sentimentos', '😠', 'Ipoxy nhamói.'],
  // Barros 2014, p. 156 (hasy1: estar doente, doer)
  ['hasy', 'doente; doer', 'verbo', 'Sentimentos', '🤒', 'Isy hasy-gwi, oho pya\'e eterei.'],
  // Barros 2014, p. 177 (kwerái: cansado; verbo da classe xe)
  ['kwerái', 'cansado', 'verbo', 'Sentimentos', '🥱', "Ikwerái jagwarete ojeupi-vy karumbe ru'y-rehe."],
  // Barros 2014, p. 169 (jogwa: comprar)
  ['jogwa', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Ajogwa arã kure.'],
  // Barros 2014, p. 184 (me'ẽ: dar)
  ["me'ẽ", 'dar', 'verbo', 'Verbos-chave', '🎁', "Xe sy xe-vy ome'ẽ jety."],
  // Barros 2014, p. 202 (pota1: querer, verbo da classe ai-)
  ['pota', 'querer', 'verbo', 'Verbos-chave', '💭', "Aipota pya'e ou."],

  // ═══ B1.1 (17/10/2026): ligar as orações (Barros 2014, Quadro 19, pp. 115–116) e a roça ═══
  // Barros 2014, p. 206 (ramo1: “se” e “quando”)
  ['ramo', 'quando; se (vem depois do verbo da oração que depende)', 'conjunção', 'Conectivos', '⏲️', "Ko'ẽ jevy ramo oho."],
  // Barros 2014, p. 209 (rire)
  ['rire', 'depois de', 'conjunção', 'Conectivos', '⏭️', "Peteĩ jasy rire ha'e kwéry ojapo kagwĩ."],
  // Barros 2014, p. 184 (mboyve)
  ['mboyve', 'antes de', 'conjunção', 'Conectivos', '⏮️', "Ohupyty y mboyve, ke'y-pe jakare oporandu jevy."],
  // Barros 2014, p. 167 (jave: simultaneidade)
  ['jave', 'enquanto; quando (ao mesmo tempo)', 'conjunção', 'Conectivos', '⌛', "Otopa jave ha'e oĩ-ma y mbyte-py."],
  // Barros 2014, p. 155 (hagwã: propósito)
  ['hagwã', 'para, a fim de', 'conjunção', 'Conectivos', '🎯', 'Ogwejy ko yvy ári opyta hagwã.'],
  // Barros 2014, p. 168 (jepe)
  ['jepe', 'embora, mesmo que', 'conjunção', 'Conectivos', '🤷', "Ojo'o ramo jepe ndikatúi ha'e onheresende."],
  // Barros 2014, p. 218 (upéi)
  ['upéi', 'então, depois', 'advérbio', 'Conectivos', '🔜', "Upéi peteĩ jasy rire ha'e kwéry ojapo kagwĩ."],
  // Barros 2014, p. 193 (nhemitỹ)
  ['nhemitỹ', 'plantar', 'verbo', 'Roça', '🫘', 'A-py ore heta oronhemitỹ.'],
  // Barros 2014, p. 188 (mono'õ)
  ["mono'õ", 'colher (safra)', 'verbo', 'Roça', '🌾', "Nhaha'arõ are nhane remitỹgwe nhamono'õ hagwã."],
  // Barros 2014, p. 179 (mandi'o) e p. 74 (a mandioca vem depois do milho em importância, mas está na maioria das roças)
  ["mandi'o", 'mandioca', 'substantivo', 'Roça', '🍠', "Ha onhotỹ mandi'o."],
  // Barros 2014, p. 146 (andai)
  ['andai', 'abóbora', 'substantivo', 'Roça', '🎃', 'Onhotỹ andai.'],
  // Barros 2014, p. 198 (pakova) e p. 218 (frase do verbete ugwĩ)
  ['pakova', 'banana', 'substantivo', 'Roça', '🍌', "Ugwĩ pakova [...] eremoĩ arã upéixa ko ója-py."],
  // Barros 2014, p. 169 (jety)
  ['jety', 'batata', 'substantivo', 'Roça', '🥔', "Xe sy xe-vy ome'ẽ jety."],
  // Barros 2014, p. 197 (oky, que não se flexiona)
  ['oky', 'chover', 'verbo', 'Natureza', '🌦️', 'Mokõi jasy oky.'],
  // Barros 2014, p. 224 (yvytu). Barros traduz a frase como “Se matarmos a borboleta, vem um vento forte derrubar
  // nossa casa”, mas o verbete xirino (p. 221) é “beija-flor”
  ['yvytu', 'vento', 'substantivo', 'Natureza', '🌬️', 'Jajuka ramo xirino ou yvytugwasu oity nhande róga.'],
  // Barros 2014, p. 147 (arai)
  ['arai', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Ha oĩ ramo arai ndajahexa porái jasytata.'],
  // Barros 2014, p. 166 (jasytata)
  ['jasytata', 'estrela', 'substantivo', 'Natureza', '⭐', 'Áry potĩ jave jahexa heta jasytata pyhare ramo.'],
  // Barros 2014, p. 198 (páy)
  ['páy', 'acordar', 'verbo', 'Verbos-chave', '⏰', 'Apáy ramo, ndakevéi.'],
  // Barros 2014, p. 211 (sẽ)
  ['sẽ', 'sair', 'verbo', 'Verbos-chave', '🚪', 'Xe oky eterei jave ndikatúi asẽ xe róga-gwi.'],
  // Barros 2014, p. 163 (ike)
  ['ike', 'entrar', 'verbo', 'Verbos-chave', '↘️', 'Jagwarete oike y-py.'],

  // ═══ B1.2 (17/10/2026): quem faz e o que se faz; escola, caça e pesca ═══
  // Barros 2014, p. 182 (mbo'e)
  ["mbo'e", 'ensinar', 'verbo', 'Escola', '👩‍🏫', "Ymagware ombo'e pe ta'ýry-pe ojapo hagwã monde."],
  // Barros 2014, p. 182 (mbo'eháry)
  ["mbo'eháry", 'professor(a)', 'substantivo', 'Escola', '🧑‍🏫', "Xe mbo'eháry he'i xe-vy."],
  // Barros 2014, p. 176 (kwatia: papel, livro, carta); frase do verbete mbo'e, p. 182
  ['kwatia', 'livro; também papel, carta', 'substantivo', 'Escola', '📖', "João ombo'e-ta ave íxupe kwatia nhe'ẽ-re omonhe'ẽ porã hagwã."],
  // Barros 2014, p. 188 (monhe'ẽ) e p. 93 (o- + mbo- + nhe'ẽ “falar” = omonhe'ẽ, “ler”)
  ["monhe'ẽ", 'ler', 'verbo', 'Escola', '📚', "Omonhe'ẽse Nhandejáry nhe'ẽ."],
  // Barros 2014, p. 187 (mombe'u)
  ["mombe'u", 'contar, narrar', 'verbo', 'Escola', '📣', "Ãy amombe'u-ta ymagware rehegwa nhe'ẽ."],
  // Barros 2014, p. 202 (porandu)
  ['porandu', 'perguntar', 'verbo', 'Escola', '🙋‍♀️', "Aporandu-ta nde-vy peteĩ mba'e-rehe."],
  // Barros 2014, p. 216 (tembiapo, com t-/r-/gw-/h-) e p. 95 (tembi- + apo, “aquilo que se faz, trabalho”)
  ['tembiapo', 'trabalho, obra (aquilo que se faz)', 'substantivo', 'Escola', '🛠️', "Ojapo te'ýi rembiapokwe voi."],
  // Barros 2014, p. 148 (arandu)
  ['arandu', 'sábio', 'substantivo', 'Escola', '🦉', "Upéixa he'i arandu nhe'ẽ-py onhemombe'u."],
  // Barros 2014, p. 183 (mborahéi; variante porahéi)
  ['mborahéi', 'canção, canto', 'substantivo', 'Cultura', '🎵', 'Mborahéi ogwerekopa.'],
  // Barros 2014, p. 187 (monde1: mundéu, armadilha para pegar animais)
  ['monde', 'armadilha (o mundéu, para pegar bichos)', 'substantivo', 'Caça e pesca', '🪤', 'Omano tatu pe monde gwy-py.'],
  // Barros 2014, p. 180 (marika)
  ['marika', 'caçar', 'verbo', 'Caça e pesca', '🐾', "Ha'e oike pe ka'agwy-rehe omarika hagwã ojapo monde."],
  // Barros 2014, p. 170 (jopói)
  ['jopói', 'pescar', 'verbo', 'Caça e pesca', '🎣', "Ke'y oho ojopói pira ysyry-py."],
  // Barros 2014, p. 200 (pinda)
  ['pinda', 'anzol', 'substantivo', 'Caça e pesca', '🪝', "Jakare he'i: nda'úi ne pinda pota."],
  // Barros 2014, p. 177 (kyse)
  ['kyse', 'faca', 'substantivo', 'Caça e pesca', '🔪', 'Kyse voi ogwereko.'],
  // Barros 2014, p. 153 (gwyrapa)
  ['gwyrapa', 'arco (de flecha)', 'substantivo', 'Caça e pesca', '🏹', "Ome'ẽ íxupe gwyrapa ogwahu hagwã."],
  // Barros 2014, p. 161 (hu'y, com r-/gw-/h-)
  ["hu'y", 'flecha', 'substantivo', 'Caça e pesca', '🪶', "Omoĩ hu'y hapeasa ramo."],
  // Barros 2014, p. 147 (apyka)
  ['apyka', 'banco (para sentar)', 'substantivo', 'Cultura', '🛋️', "Pa'ikwara apykakwe jakare ramo omondo."],
  // Barros 2014, p. 145 (ajaka)
  ['ajaka', 'cesto', 'substantivo', 'Cultura', '🧺', "Onhomi hagwe ojaho'i ajaka-py."],
  // Barros 2014, p. 159 (hexakáry; o mesmo que pa'i, p. 198)
  ['hexakáry', "pajé (o mesmo que pa'i)", 'substantivo', 'Cultura', '🧙', "Yma rupigwa hexakáry oĩ araka'e irundy."],
  // Barros 2014, p. 171 (kagware)
  ['kagware', 'tamanduá', 'substantivo', 'Animais', '🐜', 'Kagware onhemondýi.'],

  // ═══ B1.3 (17/10/2026): fazer fazer (mbo-, -uka), a si mesmo (je-), um ao outro (jo-); cuidar ═══
  // Barros 2014, p. 184 (mbovy'a) e p. 182 (mbo-: “alguém causa a ação em outro”)
  ["mbovy'a", 'alegrar (alguém)', 'verbo', 'Cuidado', '🥳', "Tombovy'a jevy nhamói-pe."],
  // Barros 2014, p. 182 (mboaty)
  ['mboaty', 'reunir, juntar', 'verbo', 'Cuidado', '🫂', "Oromboaty íxupe tataendy va'ekwe."],
  // Barros 2014, p. 182 (mbogwera: “curar, fazer sarar”)
  ['mbogwera', 'curar', 'verbo', 'Saúde', '🩹', "Nhande va'ekwe nhambogwera va'ekwe Ilda-pe."],
  // Barros 2014, p. 188 (mongaru: “alimentar, dar comida, fazer comer”)
  ['mongaru', 'alimentar, dar de comer', 'verbo', 'Cuidado', '🥣', 'Aikwaapa kunumi amongaru hagwã.'],
  // Barros 2014, p. 186 (moĩ)
  ['moĩ', 'pôr, colocar', 'verbo', 'Verbos-chave', '📥', 'Ha omoĩ avati morotĩ.'],
  // Barros 2014, p. 187 (mondo: Ikypy'ýry upe ani eremondo y-py, “Não mande sua irmã mais nova para dentro d'água”)
  ['mondo', 'enviar, mandar', 'verbo', 'Verbos-chave', '📤', "Ikypy'ýry upe ani eremondo y-py."],
  // Barros 2014, p. 187 (mondýi)
  ['mondýi', 'assustar', 'verbo', 'Sentimentos', '😱', 'Omondýi jagwarete-pe.'],
  // Barros 2014, p. 188 (mopotĩ)
  ['mopotĩ', 'limpar', 'verbo', 'Cuidado', '🧹', 'Omopotĩ-ma.'],
  // Barros 2014, p. 183 (mboty)
  ['mboty', 'fechar', 'verbo', 'Verbos-chave', '🔒', "Upe jave ohexa onhembotypa ogweroajere hagwã mo'ã monde-pe."],
  // Barros 2014, p. 159 (hexa uka)
  ['hexa uka', 'mostrar', 'verbo', 'Verbos-chave', '👉', 'Erehose ramo ahexa uka-ne nde-vy.'],
  // Barros 2014, p. 165 (jahu)
  ['jahu', 'tomar banho', 'verbo', 'Cuidado', '🛁', 'Ani pejahu.'],
  // Barros 2014, p. 193 (nhemi)
  ['nhemi', 'esconder-se', 'verbo', 'Verbos-chave', '🙈', 'Onhemi jagwarete-gwi.'],
  // Barros 2014, p. 194 (nhomongeta)
  ['nhomongeta', 'conversar', 'verbo', 'Cuidado', '🗨️', "Eju ko'a-py nhanhomongeta."],
  // Barros 2014, p. 205 (pytygwõ, verbo da classe ai-)
  ['pytygwõ', 'ajudar', 'verbo', 'Cuidado', '🤲', 'Upéixa ore oronhopytygwõmba.'],
  // Barros 2014, p. 201 (pohã)
  ['pohã', 'remédio', 'substantivo', 'Saúde', '💊', 'Iporã ramo pohã ko, oikove jevy arã.'],
  // Barros 2014, p. 201 (pohano)
  ['pohano', 'dar remédio, medicar', 'verbo', 'Saúde', '💉', 'Ereipohano nde resa.'],
  // Barros 2014, p. 177 (kwera)
  ['kwera', 'sarar', 'verbo', 'Saúde', '❤️‍🩹', "Xe rasy rei-gwi va'ekwe, xe akwera va'ekwe."],
  // Barros 2014, p. 180 (mba'asy, sentido 1)
  ["mba'asy", 'doença', 'substantivo', 'Saúde', '🦠', "Ãgwéry omoĩ mba'asy ivai va'e."],
  // Barros 2014, p. 194 (nheno)
  ['nheno', 'deitar-se', 'verbo', 'Cuidado', '🛌', 'Kyha orojapo ramo oronheno.'],
  // Barros 2014, p. 203 (puka)
  ['puka', 'rir', 'verbo', 'Sentimentos', '😂', 'Opuka hese gwyra kampána.'],

  // ═══ B1.4 (17/10/2026): dizem que, antigamente; as histórias dos antigos ═══
  // Barros 2014, p. 168 (jeko: “dizem, ouvi dizer”, algo dito por outra pessoa)
  ['jeko', 'dizem que, ouvi dizer (o que se ouviu contar)', 'partícula', 'Histórias', '📢', "Yma jeko oiko araka'e nhande ru."],
  // Barros 2014, p. 148 (araka'e: passado remoto, geralmente não presenciado pelo falante)
  ["araka'e", 'no passado distante (que quem conta não viu)', 'advérbio', 'Histórias', '🏺', "Yma jeko araka'e ovu y."],
  // Barros 2014, p. 222 (ymagware: as coisas antigas; os antigos)
  ['ymagware', 'os antigos; as coisas de antigamente', 'substantivo', 'Histórias', '🧓', 'Upéa-gwi voi ymagware ndojukáiry.'],
  // Barros 2014, p. 194 (nhepyrũ1)
  ['nhepyrũ', 'começar', 'verbo', 'Histórias', '🚦', "Onhepyrũ ho'yta."],
  // Barros 2014, p. 197 (opa)
  ['opa', 'acabar', 'verbo', 'Histórias', '🔚', "Opa-ma ka'agwy."],
  // Barros 2014, pp. 179–180 (mano)
  ['mano', 'morrer', 'verbo', 'Histórias', '🪦', "Kwimba'e omano ramo, kunha opyta ha'e anho."],
  // Barros 2014, p. 170 (juka)
  ['juka', 'matar', 'verbo', 'Histórias', '🗡️', 'Ajuka-ta jagwarete-pe.'],
  // Barros 2014, p. 172 (kanhy)
  ['kanhy', 'fugir', 'verbo', 'Histórias', '🏃', 'Okanhy jagwarete-gwi.'],
  // Barros 2014, p. 208 (ripara)
  ['ripara', 'correr', 'verbo', 'Histórias', '🏃‍♀️', 'Xe aripara aju-vy.'],
  // Barros 2014, p. 211 (sapukái)
  ['sapukái', 'gritar', 'verbo', 'Histórias', '🗯️', 'Nde hatãve eresapukái.'],
  // Barros 2014, p. 165 (jahe'o)
  ["jahe'o", 'chorar', 'verbo', 'Sentimentos', '😢', "Ojahe'o oĩ-vy xe ruvanga."],
  // Barros 2014, p. 179 (mandu'a, verbo da classe xe)
  ["mandu'a", 'lembrar-se', 'verbo', 'Histórias', '🔖', "Nhane mandu'a-ta jasy-rehe jevy."],
  // Barros 2014, p. 159 (hesarái)
  ['hesarái', 'esquecer', 'verbo', 'Histórias', '🫥', "Ogwahẽ-vy ykwa-py [...] hesarái itúvy he'i va'ekwe-rehe."],
  // Barros 2014, p. 165 (jakare)
  ['jakare', 'jacaré', 'substantivo', 'Animais', '🐊', "Ke'y ojeupi jakare ati'y-rehe."],
  // Barros 2014, p. 171 (ka'i)
  ["ka'i", 'macaco', 'substantivo', 'Animais', '🐒', "Ojapo gwyrarã, ka'irã."],
  // Barros 2014, p. 214 (tatu)
  ['tatu', 'tatu', 'substantivo', 'Animais', '🦡', "Ipohýi xe rekove, he'i tatu monde gwy-py oime jave."],
  // Barros 2014, p. 183 (mborevi)
  ['mborevi', 'anta', 'substantivo', 'Animais', '🐗', "Nome'ẽi xe-vy mborevi ka'ẽ."],
  // Barros 2014, p. 170 (ju'i)
  ["ju'i", 'sapo', 'substantivo', 'Animais', '🐸', "Onhe'ẽ-ma ave ju'i."],
  // Barros 2014, p. 221 (xirino); frase do verbete jejuka, p. 167
  ['xirino', 'beija-flor', 'substantivo', 'Animais', '🌺', 'Erehexa ramo xirino ndojejukái voite.'],
  // Barros 2014, p. 170 (jy'y)
  ["jy'y", 'arco-íris', 'substantivo', 'Natureza', '🌈', "Jy'y ojekwaa-ma xe-vy."],
];

export const VOCAB_KGK = buildVocab('kgk', ROWS);
