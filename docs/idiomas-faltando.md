# Idiomas que ainda não entraram no LinuLingo

> Levantamento de 16/10/2026 (pedido do dono: “tem alguns idiomas que não entraram no aplicativo, tanto naturais quanto artificiais, faz uma lista”). Tetos são palpites pelo critério de TETO-DOS-IDIOMAS.md; conferir fontes antes de começar cada curso.

Levantamento de 16/10/2026, feito contra o repositório (só leitura) e contra fontes públicas.

## Resumo

| Bloco | Prioridade alta | Média | Baixa (agrupada) | Total listado |
|---|---|---|---|---|
| Naturais: oficiais de país | 54 | — | — | 54 |
| Naturais: oficiais de região, estado ou república autônoma | ~60 | — | — | ~60 |
| Naturais: mais de 1 milhão de falantes, sem status oficial | — | ~55 (algumas linhas juntam várias) | — | ~55 |
| Naturais: com Wikipédia própria ativa (que ainda não apareceram acima) | — | 22 | ~40 | ~62 |
| Naturais: línguas do Brasil (indígenas e de imigração) | 10 | 18 | ~15 | ~43 |
| Naturais: históricas e clássicas | 18 | 20 | ~15 | ~53 |
| Línguas de sinais (sem curso de verdade) | 3 | 10 | ~6 | ~19 |
| Artificiais | 9 | 13 | ~25 | ~47 |

Somando, são cerca de **320 línguas naturais** (sem contar os grupos da seção A7), **19 de sinais** e **47 artificiais** que não têm
curso. Dessas, cerca de **60 aparecem no app só como “língua própria”, sotaque ou minicurso**
(ver a seção “No app de um jeito duvidoso”).

### As 15 primeiras que eu recomendo

Escolhidas por peso no mundo, teto alto (dá para fazer um curso grande com material livre) e
interesse para quem estuda em português. A ordem é uma sugestão.

| # | Língua | Código | Teto provável | Por que primeiro |
|---|---|---|---|---|
| 1 | Irlandês | `ga` | C1 | Oficial na Irlanda e na UE, Wikipédia de 64 mil artigos. Hoje só existe como cartão dentro do inglês, e o PENDENTES.md dizia por engano que já estava feito |
| 2 | Galês | `cy` | C1 (C2 discutível) | Oficial no País de Gales, ensino superior em galês, Wikipédia de 285 mil artigos. Também está só como cartão do inglês |
| 3 | Sânscrito | `sa` | C2 (leitura) | Língua clássica com corpus enorme, igual à exceção do latim. É também uma das 22 línguas oficiais da Índia |
| 4 | Grego antigo | `grc` | C2 (leitura) | Corpus gigante (Perseus, TLG). Fecha a lacuna mais visível das clássicas, ao lado do latim que já existe |
| 5 | Azerbaijano | `az` | C2 | Língua de Estado, ensino superior, Wikipédia de 218 mil artigos com 855 editores ativos |
| 6 | Cazaque | `kk` | C2 | Língua de Estado, Wikipédia de 246 mil artigos com 404 editores. Primeiro túrquico depois do turco e do uzbeque |
| 7 | Nepalês | `ne` | C1 | Oficial no Nepal e em Sikkim, cerca de 22 milhões de falantes |
| 8 | Cingalês | `si` | C1 | Oficial no Sri Lanka, escrita própria. O tâmil, a outra língua oficial do país, já está no app |
| 9 | Tártaro | `tt` | C1 | Oficial no Tartaristão, a república mais forte da Rússia em mídia e escola. O PENDENTES.md já pedia |
| 10 | Quiniaruanda | `rw` | B2 | Língua de quase toda a população de Ruanda. Abre a África dos Grandes Lagos (o kirundi é quase igual) |
| 11 | Cebuano | `ceb` | C1 | Cerca de 28 milhões de falantes, a 2ª Wikipédia do mundo em número de artigos (gerados por robô). Hoje é só cartão dentro do tagalo |
| 12 | Taiwanês (min nan) | `nan` | C1 | Língua nacional de Taiwan desde 2019, Wikipédia de 434 mil artigos com 127 editores. Hoje é só cartão dentro do chinês |
| 13 | Chinês clássico | `lzh` | C2 (leitura) | O latim do Leste Asiático: base do chinês, do japonês e do coreano escritos. Tem Wikipédia própria (14,7 mil artigos) |
| 14 | Guajajara (tenetehara) | `gub` | B1 | Uma das maiores línguas indígenas do Brasil (cerca de 11 a 20 mil falantes), tupi-guarani, com Novo Testamento, dicionários e escola bilíngue no Maranhão |
| 15 | Interlingue (Occidental) | `ile` | B2 | A artificial com Wikipédia ativa (13,8 mil artigos) que falta. A outra é o kotava (`avk`) |

Na fila logo depois: guzerate (`gu`), malaiala (`ml`, C2), canarim (`kn`), tadjique (`tg`),
quirguiz (`ky`), xona (`sn`), tigrínia (`ti`), hebraico bíblico (`hbo`), inglês antigo (`ang`),
galego-português medieval, iucateco (`yua`), quiché (`quc`), kotava (`avk`) e o curso completo de Libras.

## Como foi feito

- **O que já está:** os 197 códigos de `src/data/idiomas-metadados.ts`; as cerca de 180 línguas com
  `kind: 'língua'` nos `sotaques.ts` (o cartão de “línguas próprias”, `OWN_LANGUAGE_META` em
  `src/data/linguas-proprias.ts` e os `linguas-meta.ts` do japonês e do coreano); as variantes
  (`variantes.ts`); os 18 minicursos de `src/data/cursos/`; os cartões de conlangs de
  `src/data/tipos-de-linguas.ts`; e `src/data/linguas-sinais.ts`.
- **Línguas do mundo:** a tabela `WORLD_LANGUAGE_ROWS` de `src/data/idiomas-mundo.ts` (Unicode CLDR
  48.2, com número de falantes por país e se a língua é oficial no país ou numa região). Os números de
  falantes desta lista vêm de lá quando existem: **são milhões e incluem quem fala como segunda língua**.
  Os outros números vêm da Wikipédia (resumo do Ethnologue) e, nas línguas indígenas do Brasil, do
  Censo do IBGE de 2010. Todos são aproximados.
- **Wikipédias:** a tabela do wikistats.wmcloud.org (a mesma do TETO-DOS-IDIOMAS.md), baixada hoje,
  16/10/2026. Os números aparecem como “artigos / editores ativos”.
- **Teto:** é um palpite pelo critério da seção “O que cada nível exige” do TETO-DOS-IDIOMAS.md,
  comparado com os idiomas parecidos que já têm teto em `src/data/tetos.ts` (amárico C1, havaiano C1,
  divehi B2, groenlandês B2, ainu B1). Antes de escrever o curso, a regra do arquivo continua valendo:
  procurar as fontes específicas da língua.
- **Fora da lista:** filipino (o `tl` já cobre), norueguês nynorsk (já é variante do `nb`), dari (variante
  do `fa`), montenegrino (cartão do `sr`, junto com sérvio, croata e bósnio, que já têm curso), curdo
  genérico (já existem `ckb` e `kmr`), tachelhit, cabila e tarifit (já são dialetos do `zgh`), buriato
  (já tem curso, o `bxr`), maltês, galego, africâner e okinawano (têm curso e cartão).

## No app de um jeito duvidoso

Línguas que existem só como cartão (“língua própria” dentro de outro curso), como sotaque ou como
minicurso, mas que pelo peso mereceriam curso próprio.

**Mais graves, porque são oficiais e grandes:**

| Língua | Onde está hoje | Por que merece curso |
|---|---|---|
| Irlandês (`ga`) | cartão `en-irlandes` | oficial na Irlanda e na UE. O PENDENTES.md (“Idiomas naturais ainda não começados”) diz que o irlandês “já está feito”, mas não há pacote `ga` |
| Galês (`cy`) | cartão `en-gales-lingua` | oficial no País de Gales, Wikipédia de 285 mil artigos |
| Libras | minicurso + cartão `pt-libras` | língua oficial de comunicação no Brasil (Lei 10.436/2002). Para o público do app é a mais importante de todas as que faltam |
| Taiwanês/min nan (`nan`) e hakka (`hak`) | cartões `zh-taiyu`, `zh-hakka` | línguas nacionais de Taiwan (lei de 2019), cada uma com a sua Wikipédia |
| Wu/xangainês (`wuu`) | cartão `zh-wu` | cerca de 80 milhões de falantes, Wikipédia com 102 editores ativos |
| Cebuano (`ceb`) e ilocano (`ilo`) | cartões `tl-cebuano`, `tl-ilocano` | 28 e 11 milhões de falantes, oficiais regionais nas Filipinas |
| Sundanês (`su`) e minangkabau (`min`) | cartões `id-sundanes`, `id-minangkabau` | 34 e 8 milhões de falantes. O minangkabau tem Wikipédia de 230 mil artigos |
| Maithili (`mai`), bhojpuri (`bho`), awadhi (`awa`) | cartões em `hi` | o maithili é uma das 22 línguas oficiais da Índia. Bhojpuri tem 35 milhões de falantes e cinema próprio |
| Concani (`kok`) | cartão `mr-concani` | oficial em Goa e uma das 22 línguas oficiais da Índia. Tem ligação histórica com o português |
| Saraiki (`skr`), sylheti (`syl`), chittagoniano (`ctg`) | cartões em `pa` e `bn` | de 8 a 30 milhões de falantes cada |
| Isan (`tts`) | cartão `th-isan` | cerca de 17 milhões de falantes, um terço da Tailândia |
| Papiamento (`pap`) | cartão `nl-papiamento` | oficial em Curaçao e em Aruba, com imprensa e escola |
| Crioulo cabo-verdiano (`kea`) | cartão `pt-kriolu` | língua de quase todos os cabo-verdianos, e de base portuguesa |
| Híndi de Fiji (`hif`) | sotaque `hi-fiji` | oficial em Fiji, Wikipédia própria com 67 editores |
| Sámi de Lule, do sul, de Inari e skolt | cartões `sv-samiska`, `fi-saami` | oficiais em municípios da Noruega, da Suécia e da Finlândia. Só o sámi do norte (`se`) tem curso |
| Carélio (`krl`, `olo`) | cartão `fi-carelio` | o PENDENTES.md já sugeria. Wikipédia em livvi |

**Médias, de Europa e Cáucaso:** samogiciano, latgaliano, võro, seto, silesiano, rusyn, baixo-sorábio,
frísio do norte, frísio de Saterland, limburguês, baixo-saxão neerlandês, picardo, alsaciano,
mingreliano, svan, laz, zazaki, gilaki, mazandarani, pôntico, kven, meänkieli e romani. Todas têm
código ISO próprio e quase todas têm Wikipédia. Hoje são só cartão.

**Do Brasil:** talian (cartão `it-talian`), hunsriqueano (`de-hunsrik`, código `hrx`) e pomerano
(`de-pomerano`). O pomerano e o talian são cooficiais em municípios do Espírito Santo, de Santa
Catarina e do Rio Grande do Sul.

**Artificiais só como minicurso:** quenya, sindarin, na'vi, alto valiriano, dothraki, Lingua Franca
Nova, solresol, láadan, lang belta e mando'a. Todos poderiam virar curso completo com teto baixo
(A2 ou B1). A Lingua Franca Nova pode chegar ao B2.

---

## A. Línguas naturais

### A1. Prioridade alta: oficiais de um país (54)

Falantes em milhões (CLDR, inclui L2), salvo nota. Wikipédia em artigos / editores ativos.

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Irlandês | `ga` | Indo-europeu › Celta › Goidélico | Irlanda, Irlanda do Norte | 1,3 | 64.477 / 119 | C1 | oficial, com escola e universidade, mas a Wikipédia é média |
| Azerbaijano | `az` | Túrquico › Oghuz | Azerbaijão, noroeste do Irã | 32 | 218.379 / 855 | C2 | língua de Estado, ensino superior, Wikipédia grande e escrita por pessoas |
| Cazaque | `kk` | Túrquico › Kipchak | Cazaquistão | 14 | 245.646 / 404 | C2 | idem |
| Quirguiz | `ky` | Túrquico › Kipchak | Quirguistão | 3,4 | 76.566 / 123 | C1 | oficial, com imprensa e escola. A Wikipédia é menor que 90 mil artigos |
| Tadjique | `tg` | Indo-europeu › Iraniano | Tadjiquistão | 11 | 119.283 / 115 | C1 | muitos artigos, mas poucos editores. É quase o persa em cirílico |
| Turcomeno | `tk` | Túrquico › Oghuz | Turcomenistão | 7,2 | 7.345 / 49 | C1 | língua de Estado com pouco acervo aberto |
| Nepalês | `ne` | Indo-europeu › Indo-ariano | Nepal, Sikkim, Butão | 22 | 30.055 / 153 | C1 | oficial, com imprensa, literatura e universidade |
| Cingalês | `si` | Indo-europeu › Indo-ariano insular | Sri Lanka | 15 | 25.761 / 138 | C1 | idem |
| Dzonga | `dz` | Sino-tibetano › Tibético | Butão | 0,4 | 386 / 11 | B2 | oficial, com dicionário e gramática do governo (DDC), mas quase sem Wikipédia |
| Tigrínia | `ti` | Afro-asiático › Semítico › Etiópico | Eritreia, Tigré (Etiópia) | 11 | 372 / 11 | B2 | oficial, com imprensa, mas Wikipédia mínima (divehi e amárico servem de régua) |
| Quiniaruanda | `rw` | Níger-Congo › Banto | Ruanda | 12 | 10.440 / 61 | B2 | língua de quase todo o país, Wikipédia pequena |
| Kirundi | `rn` | Níger-Congo › Banto | Burundi | 8,6 | 729 / 7 | B2 | oficial, quase igual ao quiniaruanda |
| Xona | `sn` | Níger-Congo › Banto | Zimbábue | 14 | 11.847 / 20 | B2 | oficial, com literatura e escola, Wikipédia pequena |
| Nianja (chichewa) | `ny` | Níger-Congo › Banto | Malawi, Zâmbia, Moçambique | 19 | 1.151 / 17 | B2 | oficial no Malawi, com imprensa e Bíblia |
| Soto do sul (sesotho) | `st` | Níger-Congo › Banto | Lesoto, África do Sul | 7 | 2.219 / 37 | B2 | oficial nos dois países |
| Tswana | `tn` | Níger-Congo › Banto | Botsuana, África do Sul | 6,5 | 6.116 / 56 | B2 | idem |
| Suázi | `ss` | Níger-Congo › Banto | Essuatíni, África do Sul | 2,3 | 1.196 / 35 | B1 | oficial, mas com pouco acervo |
| Sango | `sg` | Crioulo de base ngbandi | República Centro-Africana | 2,8 | 377 / 11 | B1 | oficial, língua franca do país, acervo pequeno |
| Comoriano | `zdj`/`wni`/`swb` | Níger-Congo › Banto (suaíli) | Comores, Mayotte | 0,6 | — | B1 | oficial, mas com gramática e textos curtos |
| Afar | `aa` | Afro-asiático › Cuxítico | Etiópia, Eritreia, Djibuti | 2,3 | 0 | B1 | língua de trabalho federal da Etiópia desde 2020 |
| Akan (twi, fante) | `ak` (`tw`, `fat`) | Níger-Congo › Kwa | Gana | 13 | 4.739 / 25 (twi) | B2 | língua mais falada de Gana, com escola e rádio |
| Bambara | `bm` | Níger-Congo › Mandê | Mali | 10 | 931 / 10 | B2 | oficial desde a Constituição de 2023. Também se escreve em N'Ko |
| Fula (pulaar, fulfulde) | `ff` | Níger-Congo › Atlântico | do Senegal a Camarões | 9 a 16 | 22.475 / 59 | B2 | oficial no Mali (2023) e língua nacional em vários países |
| Zarma | `dje` | Nilo-saariano › Songai | Níger | 4,5 | — | B1 | língua nacional do Níger, gramáticas e textos curtos |
| Kabiyè | `kbp` | Níger-Congo › Gur | Togo | 1 | 1.715 / 9 | B1 | língua nacional ao lado do eʋe |
| Tok pisin | `tpi` | Crioulo de base inglesa | Papua-Nova Guiné | 7,1 | 1.417 / 13 | B2 | oficial, com jornal (Wantok) e Bíblia |
| Hiri motu | `ho` | Pidgin de base motu | Papua-Nova Guiné | 0,2 | 3 / 0 | A2 | oficial, mas em declínio e com pouco texto |
| Bislamá | `bi` | Crioulo de base inglesa | Vanuatu | 0,3 | 1.515 / 21 | B1 | oficial, Bíblia e rádio |
| Pijin das Ilhas Salomão | `pis` | Crioulo de base inglesa | Ilhas Salomão | 0,5 | — | A2 | língua franca, sem status formal, com Bíblia |
| Samoano | `sm` | Austronésio › Polinésio | Samoa, Samoa Americana | 0,5 | 1.208 / 9 | B2 | oficial, com imprensa e escola |
| Tonganês | `to` | Austronésio › Polinésio | Tonga | 0,2 | 2.047 / 8 | B1 | oficial, Bíblia e dicionário |
| Fijiano | `fj` | Austronésio › Oceânico | Fiji | 0,6 | 1.728 / 8 | B2 | oficial, imprensa e escola |
| Híndi de Fiji | `hif` | Indo-europeu › Indo-ariano | Fiji | 0,4 | 12.500 / 67 | B1 | oficial (hoje é sotaque `hi-fiji`) |
| Gilbertês (kiribatiano) | `gil` | Austronésio › Micronésio | Kiribati | 0,1 | — | B1 | oficial, Bíblia e dicionário |
| Marshalês | `mh` | Austronésio › Micronésio | Ilhas Marshall | 0,06 | 4 / 1 | B1 | idem |
| Palauano | `pau` | Austronésio | Palau | 0,02 | — | A2 | oficial, gramática de referência (Josephs) |
| Tuvaluano | `tvl` | Austronésio › Polinésio | Tuvalu | 0,01 | — | A2 | oficial, mas só descrições acadêmicas |
| Nauruano | `na` | Austronésio › Micronésio | Nauru | 0,007 | 0 | A2 | idem |
| Niueano | `niu` | Austronésio › Polinésio | Niue | 0,002 | — | A2 | idem |
| Tokelauano | `tkl` | Austronésio › Polinésio | Toquelau | 0,001 | — | A2 | idem |
| Maori das Ilhas Cook (rarotongano) | `rar` | Austronésio › Polinésio | Ilhas Cook | 0,01 | — | B1 | oficial, com dicionário e Bíblia (hoje é cartão `mi-ilhas-cook`) |
| Crioulo seichelense | `crs` | Crioulo de base francesa | Seicheles | 0,07 | — | B1 | oficial, com dicionário e escola |
| Papiamento | `pap` | Crioulo de base ibérica | Curaçao, Aruba, Bonaire | 0,3 | 5.793 / 25 | B2 | oficial, com imprensa e escola (hoje é cartão) |
| Crioulo da Guiné-Bissau | `pov` | Crioulo de base portuguesa | Guiné-Bissau | 1 | — | B1 | língua franca do país, sem status formal |
| Crioulo cabo-verdiano | `kea` | Crioulo de base portuguesa | Cabo Verde | 1 | — | B1 | língua de quase todos, em processo de oficialização (hoje é cartão) |
| Forro (santome) | `cri` | Crioulo de base portuguesa | São Tomé e Príncipe | 0,04 | — | A2 | língua nacional, com pouca gramática publicada |
| Manx | `gv` | Indo-europeu › Celta › Goidélico | Ilha de Man | 0,002 | 7.128 / 23 | B1 | oficial no Tynwald, revitalizada, dicionários e textos antigos |
| Chamorro | `ch` | Austronésio | Guam, Ilhas Marianas | 0,05 | 583 / 22 | B1 | oficial em Guam, dicionário e gramática |
| Taitiano | `ty` | Austronésio › Polinésio | Polinésia Francesa | 0,1 | 1.251 / 6 | B1 | reconhecida no território, Bíblia e dicionário da Académie tahitienne |
| Árabe hassaniya | `mey` | Afro-asiático › Semítico | Mauritânia, Saara Ocidental | 9,3 | — | B1 | variedade nacional da Mauritânia, oficial no Mali |
| Ndebele do sul | `nr` | Níger-Congo › Banto | África do Sul | 1 | 338 / 10 | B1 | uma das 12 línguas oficiais sul-africanas |
| Soto do norte (sepedi) | `nso` | Níger-Congo › Banto | África do Sul | 5,7 | 9.135 / 64 | B2 | idem |
| Tsonga | `ts` | Níger-Congo › Banto | África do Sul, Moçambique | 5,3 | 1.332 / 55 | B1 | idem |
| Venda | `ve` | Níger-Congo › Banto | África do Sul, Zimbábue | 1,5 | 928 / 40 | B1 | idem |

(As últimas quatro são oficiais na África do Sul.)

### A2. Prioridade alta: oficiais de região, estado ou república autônoma (~60)

**Índia (línguas da 8ª Lista da Constituição que faltam).**

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Guzerate | `gu` | Indo-ariano | Gujarat | 66 | 30.934 / 93 | C1 | oficial no estado, com imprensa, literatura e universidade |
| Canarim | `kn` | Dravídico | Karnataka | 52 | 34.709 / 204 | C1 | idem, com literatura de mais de mil anos |
| Malaiala | `ml` | Dravídico | Kerala | 46 | 89.185 / 470 | C2 | ensino superior e Wikipédia no limite do critério, muito ativa |
| Oriá | `or` | Indo-ariano | Odisha | 45 | 21.146 / 57 | C1 | oficial no estado, com imprensa e literatura |
| Assamês | `as` | Indo-ariano | Assam | 18 | 25.891 / 197 | C1 | idem |
| Sindi | `sd` | Indo-ariano | Sindh (Paquistão), Índia | 42 | 22.751 / 49 | C1 | oficial no Sindh, duas escritas |
| Caxemira | `ks` | Indo-ariano (dárdico) | Caxemira | 6 | 11.839 / 21 | B2 | oficial no território, literatura antiga, Wikipédia pequena |
| Santali | `sat` | Austro-asiático › Munda | Jharkhand, Bengala | 7,8 | 16.071 / 56 | B2 | escrita própria (ol chiki), escola, pouco acervo |
| Meitei (manipuri) | `mni` | Sino-tibetano | Manipur | 1,8 | 10.531 / 33 | B2 | oficial no estado, escrita meetei mayek |
| Bodo | `brx` | Sino-tibetano | Assam | 1,5 | — | B1 | oficial em Assam, pouco acervo aberto |
| Dogri | `doi` | Indo-ariano | Jammu | 2,8 | — | B1 | idem |
| Maithili | `mai` | Indo-ariano | Bihar, Nepal | 20 | 14.368 / 39 | C1 | oficial, com literatura (Vidyapati) e imprensa (hoje é cartão) |
| Concani | `kok`/`gom` | Indo-ariano | Goa | 4,5 | 3.644 / 12 | B2 | oficial em Goa, escrita em devanágari e em latino (hoje é cartão) |

(O sânscrito, também da 8ª Lista, está nas clássicas.)

**Rússia (línguas oficiais de repúblicas).**

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Tártaro | `tt` | Túrquico › Kipchak | Tartaristão | 2 a 5 | 709.942 / 85 | C1 | imprensa, escola e teatro. Muitos artigos, mas gerados por robô |
| Baquir | `ba` | Túrquico › Kipchak | Bascortostão | 1,2 a 1,8 | 64.307 / 76 | C1 | idem |
| Tchuvache | `cv` | Túrquico › Oghur | Tchuváchia | 0,7 a 1 | 59.228 / 45 | B2 | único oghur vivo, Wikipédia média com poucos editores |
| Sakha (iacuto) | `sah` | Túrquico › Siberiano | Iacútia | 0,45 | 18.258 / 45 | B2 | imprensa e escola, acervo pequeno |
| Tuviniano | `tyv` | Túrquico › Siberiano | Tuva | 0,2 | 4.123 / 9 | B1 | idem, com canto difônico famoso |
| Altai | `alt` | Túrquico › Siberiano | República de Altai | 0,06 | 1.113 / 14 | B1 | oficial, poucos textos |
| Cacasso | `kjh` | Túrquico › Siberiano | Cacássia | 0,04 | — | A2 | oficial, só descrições |
| Kumyk | `kum` | Túrquico › Kipchak | Daguestão | 0,4 | — | B1 | uma das línguas oficiais do Daguestão |
| Karachay-balkar | `krc` | Túrquico › Kipchak | Karachay-Cherkessia, Kabardino-Balkaria | 0,3 | 3.032 / 21 | B1 | oficial nas duas repúblicas |
| Nogai | `nog` | Túrquico › Kipchak | Daguestão, Karachay-Cherkessia | 0,09 | — | A2 | idem |
| Calmuco | `xal` | Mongólico | Calmúquia | 0,08 | 1.577 / 16 | B1 | única língua mongólica nativa da Europa |
| Inguche | `inh` | Nakh-daguestânico › Nakh | Inguchétia | 0,3 | 2.561 / 13 | B1 | irmão do checheno, que já está no app |
| Avar | `av` | Nakh-daguestânico | Daguestão | 0,8 | 4.017 / 27 | B1 | maior língua do Daguestão |
| Lezgui | `lez` | Nakh-daguestânico | Daguestão, Azerbaijão | 0,6 | 4.496 / 21 | B1 | oficial no Daguestão |
| Dargwa | `dar` | Nakh-daguestânico | Daguestão | 0,5 | — | A2 | idem, poucas fontes abertas |
| Lak | `lbe` | Nakh-daguestânico | Daguestão | 0,15 | 1.053 / 11 | A2 | idem |
| Tabassarão | `tab` | Nakh-daguestânico | Daguestão | 0,1 | — | A2 | famoso pelo número de casos gramaticais |
| Kabardiano | `kbd` | Abcázio-adigue | Kabardino-Balkaria | 1,1 | 1.675 / 12 | B1 | primo do abcázio, que já está no app |
| Adigue | `ady` | Abcázio-adigue | Adiguésia | 0,45 | 647 / 25 | B1 | idem |
| Osseto | `os` | Indo-europeu › Iraniano | Ossétia do Norte, Ossétia do Sul | 0,5 | 21.759 / 29 | B2 | iraniano do Cáucaso, epopeia nart, acervo médio |
| Komi | `kv` | Urálico › Pérmico | República de Komi | 0,2 | 5.830 / 18 | B1 | oficial, poucos editores |
| Komi-permyak | `koi` | Urálico › Pérmico | Perm | 0,06 | 3.471 / 9 | A2 | idem |
| Udmurte | `udm` | Urálico › Pérmico | Udmúrtia | 0,3 | 5.917 / 17 | B1 | idem |
| Mari (dos prados e das colinas) | `mhr`/`mrj` | Urálico | Mari El | 0,4 | 11.328 / 21 e 10.437 / 13 | B1 | duas normas oficiais |
| Erzya | `myv` | Urálico › Mordóvico | Mordóvia | 0,3 | 7.874 / 20 | B1 | idem |
| Mocsa | `mdf` | Urálico › Mordóvico | Mordóvia | 0,2 | 7.630 / 20 | B1 | idem |
| Carélio | `krl`/`olo` | Urálico › Fínico | Carélia | 0,03 | 5.096 / 20 (livvi) | B1 | o PENDENTES.md já pedia. Hoje é cartão |
| Vepso | `vep` | Urálico › Fínico | Carélia, Leningrado | 0,005 | 7.111 / 28 | A2 | Wikipédia própria, gramática acadêmica |
| Tártaro da Crimeia | `crh` | Túrquico › Kipchak | Crimeia (Ucrânia) | 0,3 | 29.762 / 56 | B2 | reconhecida como língua de povo indígena na Ucrânia |

**China (línguas de regiões ou prefeituras autônomas).**

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Tibetano (padrão de Lhasa) | `bod` | Sino-tibetano › Tibético | Tibete, Qinghai, exílio | 3 a 6 | 8.113 / 31 | B2 | escrita e literatura antigas, pouca mídia aberta |
| Zhuang | `za` | Tai-kadai | Guangxi | 4 a 16 | 3.024 / 13 | B1 | oficial em Guangxi, escrita latina pouco usada |
| Yi de Sichuan (nuosu) | `ii` | Sino-tibetano › Lolo-birmanês | Liangshan | 2 a 8,5 | 3 / 1 | B1 | silabário oficial, mas acervo online pequeno |
| Hmong (daw, njua) | `mww`/`hnj` | Hmong-mien | China, Laos, Vietnã, EUA | 2 a 4 | — | B1 | escrita RPA, diáspora grande, dicionários |

**Europa, Oriente Médio e outros.**

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Galês | `cy` | Indo-europeu › Celta › Britônico | País de Gales | 0,9 | 284.754 / 171 | C1 | oficial, universidade (Coleg Cymraeg). C2 se contar o acervo nacional, como no islandês |
| Córnico | `kw` | Indo-europeu › Celta › Britônico | Cornualha | 0,002 | 7.284 / 25 | B1 | revitalizado, com ortografia padrão (SWF) e minoria reconhecida no Reino Unido |
| Gagauz | `gag` | Túrquico › Oghuz | Gagaúzia (Moldávia) | 0,15 | 3.009 / 18 | B1 | oficial na região autônoma |
| Frísio do norte | `frr` | Indo-europeu › Germânico | Schleswig-Holstein | 0,01 | 21.532 / 26 | B1 | reconhecido na Alemanha (hoje é cartão) |
| Sámi de Lule, do sul, de Inari, skolt | `smj`/`sma`/`smn`/`sms` | Urálico › Sámi | Noruega, Suécia, Finlândia | 0,0003 a 0,002 cada | 6.746 / 19 (Inari) | B1 (Lule, sul), A2 (os outros) | oficiais em municípios (hoje é cartão) |
| Normando (jèrriais, guernésiais) | `nrm` | Indo-europeu › Românico | Jersey, Guernsey, Normandia | 0,003 | 5.059 / 19 | B1 | reconhecido pelos governos de Jersey e Guernsey |
| Assírio moderno (neoaramaico) | `aii` | Afro-asiático › Semítico › Aramaico | Iraque, Síria, Irã, diáspora | 0,5 a 1 | 1.920 / 15 (aramaico) | B1 | reconhecido no Curdistão iraquiano. O aramaico vivo mais falado |
| Turcomano iraquiano | dialeto de `az` | Túrquico | Iraque | 0,6 | — | — | entra junto com o azerbaijano, como variante |
| Rapa nui | `rap` | Austronésio › Polinésio | Ilha de Páscoa (Chile) | 0,004 | — | A2 | cooficial na ilha, só descrições |
| Miskito | `miq` | Misumalpa | costa caribenha da Nicarágua e de Honduras | 0,18 | — | B1 | oficial nas regiões autônomas da Nicarágua, com Bíblia |
| Garífuna | `cab` | Arawak | Honduras, Belize, Guatemala | 0,1 | — | B1 | patrimônio da UNESCO, com dicionários |
| Cree | `cr` (`crk`…) | Álgico | Canadá | 0,1 | 0 / 6 | B1 | oficial nos Territórios do Noroeste, silabário próprio |
| Ojíbua | `oj` | Álgico | Canadá, EUA | 0,05 | — | B1 | gramáticas e dicionário online (Ojibwe People's Dictionary) |
| Iucateco (maia) | `yua` | Maia | Iucatã (México) | 0,8 | — | B1 | língua nacional do México, com gramáticas e literatura |
| Quiché (k'iche') | `quc` | Maia | Guatemala | 1,6 | — | B1 | a maior maia, a do Popol Vuh |

(Bolívia, México e Guatemala reconhecem dezenas de outras línguas indígenas: ver A7.)

### A3. Prioridade média: mais de 1 milhão de falantes, sem status oficial (~55)

| Língua | Código | Família | Onde | Falantes | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|---|---|
| Wu (xangainês) | `wuu` | Sino-tibetano › Chinês | Xangai, Zhejiang | 85 | 48.465 / 102 | B2 | enorme, mas sem norma escrita oficial (hoje é cartão) |
| Min nan (taiwanês, hokkien) | `nan` | Sino-tibetano › Chinês | Fujian, Taiwan, diáspora | 40 | 434.672 / 127 | C1 | língua nacional de Taiwan (2019), com escrita em latino (POJ/Tâi-lô) |
| Hakka | `hak` | Sino-tibetano › Chinês | Guangdong, Taiwan | 35 | 10.506 / 31 | B2 | língua nacional de Taiwan (hoje é cartão) |
| Xiang | `hsn` | Sino-tibetano › Chinês | Hunan | 41 | — | A2 | quase sem material de ensino aberto |
| Gan | `gan` | Sino-tibetano › Chinês | Jiangxi | 24 | 6.819 / 25 | A2 | idem |
| Min dong (fuzhou) | `cdo` | Sino-tibetano › Chinês | Fujian | 10 | 16.771 / 37 | B1 | romanização própria (Foochow) e Bíblia |
| Árabe levantino | `apc` | Afro-asiático › Semítico | Síria, Líbano, Jordânia, Palestina | 44 | — | — | já é variante do `ar` |
| Árabe magrebino (marroquino, argelino, tunisiano) | `ary`/`arq`/`aeb` | Afro-asiático › Semítico | Magrebe | 33 + 39 + 11 | 20.413 / 58 (ary) | B2 | já é variante do `ar`. O marroquino teria curso próprio, como o `arz` |
| Árabe sudanês | `apd` | Afro-asiático › Semítico | Sudão | 31 | — | B1 | pouco material didático |
| Lahnda (panjabi ocidental) | `pnb` | Indo-ariano | Paquistão | 101 | 75.770 / 58 | B2 | entraria como variante em shahmukhi do `pa` |
| Bhojpuri | `bho` | Indo-ariano | Bihar, Uttar Pradesh, diáspora | 35 | 9.257 / 40 | B2 | cinema e música próprios (hoje é cartão) |
| Saraiki | `skr` | Indo-ariano | Punjab paquistanês | 30 | 24.758 / 25 | B2 | (hoje é cartão) |
| Awadhi | `awa` | Indo-ariano | Uttar Pradesh | 27 | 3.022 / 32 | B1 | língua do Ramcharitmanas (hoje é cartão) |
| Marwari e rajasthani | `mwr` | Indo-ariano | Rajastão | 17 | — | B1 | (hoje é cartão `hi-rajasthani`) |
| Magahi | `mag` | Indo-ariano | Bihar | 17 | 3.733 / 17 | A2 | pouco material |
| Chhattisgarhi | `hne` | Indo-ariano | Chhattisgarh | 16 | — | A2 | idem |
| Hariani | `bgc` | Indo-ariano | Haryana | 17 | — | A2 | idem |
| Rangpuri | `rkt` | Indo-ariano | Bangladesh, Bengala | 17 | — | A2 | idem |
| Dakhini | `dcc` | Indo-ariano | Deccan | 14 | — | A2 | idem |
| Sylheti | `syl` | Indo-ariano | Bangladesh, diáspora britânica | 8,4 | 1.238 / 16 | B1 | escrita própria (sylheti nagri) (hoje é cartão) |
| Chittagoniano | `ctg` | Indo-ariano | Bangladesh | 13 | — | A2 | (hoje é cartão) |
| Sundanês | `su` | Austronésio | Java Ocidental | 34 | 62.981 / 52 | C1 | imprensa e escola regionais (hoje é cartão) |
| Madurês | `mad` | Austronésio | Madura | 18 | 5.585 / 44 | B1 | pouca mídia |
| Minangkabau | `min` | Austronésio | Sumatra Ocidental | 8,4 | 229.987 / 61 | B2 | Wikipédia grande, quase toda gerada por robô (hoje é cartão) |
| Balinês | `ban` | Austronésio | Bali | 5,1 | 39.310 / 107 | B2 | escrita própria e muita cultura escrita |
| Buginês | `bug` | Austronésio | Celebes do Sul | 4,5 | 15.976 / 17 | B1 | escrita lontara |
| Achém | `ace` | Austronésio | Achém (Sumatra) | 3,9 | 13.084 / 29 | B1 | idem |
| Banjar | `bjn` | Austronésio | Bornéu | 4,2 | 12.410 / 67 | B1 | idem |
| Betawi | `bew` | Crioulo malaio | Jacarta | 5,9 | 3.348 / 22 | B1 | (hoje é cartão) |
| Hiligaynon | `hil` | Austronésio › Filipino | Visayas Ocidentais | 9,9 | — | B1 | oficial regional na escola |
| Waray | `war` | Austronésio › Filipino | Samar, Leyte | 3,4 | 1.267.010 / 81 | B1 | Wikipédia enorme, mas gerada por robô |
| Bikol, kapampangan, pangasinã | `bcl`/`pam`/`pag` | Austronésio › Filipino | Luzon | 3,5 / 2,7 / 1,7 | 22.580 / 59 etc. | B1 | Wikipédias pequenas, ensino regional |
| Ilocano | `ilo` | Austronésio › Filipino | norte de Luzon | 11 | 15.527 / 24 | B2 | oficial em La Union (hoje é cartão) |
| Cebuano | `ceb` | Austronésio › Filipino | Visayas, Mindanao | 28 | 6.115.949 / 271 | C1 | imprensa e literatura regionais, Wikipédia quase toda gerada por robô (hoje é cartão) |
| Shan | `shn` | Tai-kadai | Myanmar | 3,7 | 44.242 / 26 | B1 | escrita própria |
| Isan | `tts` | Tai-kadai | Nordeste da Tailândia | 17 | — | B1 | escrito em tailandês, pouco material próprio (hoje é cartão) |
| Tai do norte (lanna) | `nod` | Tai-kadai | Chiang Mai | 6,7 | — | A2 | (hoje é cartão) |
| Karen s'gaw | `ksw` | Sino-tibetano | Myanmar, Tailândia | 2 a 3 | — | B1 | Bíblia e escola na fronteira |
| Jingpo (kachin) | `kac` | Sino-tibetano | Myanmar | 1 | — | B1 | idem |
| Mon | `mnw` | Austro-asiático | Myanmar | 0,9 | 4.617 / 22 | B1 | escrita antiga, mãe da birmanesa |
| Gondi | `gon` | Dravídico | Índia central | 3,4 | — | A2 | pouco texto |
| Tulu | `tcy` | Dravídico | Karnataka | 1,8 | 4.000 / 38 | B1 | escrita própria revivida |
| Luba-kasai (tshiluba) | `lua` | Níger-Congo › Banto | RD Congo | 11 | — | B1 | língua nacional do Congo |
| Kikongo (kituba e kongo) | `kg`/`ktu` | Níger-Congo › Banto | RD Congo, Angola, Congo | 1,7 a 5 | 2.042 / 15 | B1 | língua nacional nos dois Congos, ligação com Angola |
| Umbundu | `umb` | Níger-Congo › Banto | Angola | 11 | — | B1 | a maior língua nacional de Angola. Interesse direto para quem fala português |
| Macua (emakhuwa) | `vmw` | Níger-Congo › Banto | Moçambique | 4 a 8 | — | B1 | a maior língua de Moçambique |
| Kikuyu, luo, luganda, kamba, luyia | `ki`/`luo`/`lg`/`kam`/`luy` | Níger-Congo e Nilo-saariano | Quênia, Uganda | de 4 a 10 cada | 5.869 / 97 (lg) | B1 | rádio e Bíblia. O luganda é o mais documentado |
| Mossi (mooré) | `mos` | Níger-Congo › Gur | Burkina Faso | 9 | 1.326 / 6 | B1 | língua nacional |
| Dagbani | `dag` | Níger-Congo › Gur | Gana | 1,2 | 14.533 / 42 | B1 | Wikipédia jovem e muito ativa |
| Krio | `kri` | Crioulo de base inglesa | Serra Leoa | 8,7 | — | B1 | língua franca do país |
| Crioulo jamaicano (patoá) | `jam` | Crioulo de base inglesa | Jamaica | 2,7 | 1.720 / 17 | B1 | Bíblia (2012), música e literatura |
| Crioulo mauriciano | `mfe` | Crioulo de base francesa | Maurício | 1,3 | — | B1 | escola e dicionário |
| Bávaro | `bar` | Indo-europeu › Germânico | Baviera, Áustria | 14 a 23 | 27.234 / 80 | B1 | contado como dialeto do alemão, com código próprio |
| Romani | `rom` (`rmy`…) | Indo-europeu › Indo-ariano | toda a Europa | 2 a 4 | 758 / 9 | B1 | minoria reconhecida em muitos países (hoje é cartão) |
| Iorubá, hauçá e igbo já estão; ibibio/efique e tiv | `ibb`/`efi`/`tiv` | Níger-Congo | Nigéria | 3,3 / 3,8 | — | A2 | pouco material aberto |

### A4. Prioridade média: com Wikipédia própria ativa, ainda não citadas (22, mais ~40 pequenas)

Línguas regionais com Wikipédia própria de pelo menos uns mil artigos e uma comunidade escrevendo.
Quase todas são da Europa, contadas como “dialetos” no país delas, mas com código ISO próprio.

| Língua | Código | Onde | Wikipédia | Teto | Motivo |
|---|---|---|---|---|---|
| Zazaki | `diq` | Turquia oriental | 43.431 / 45 | B1 | (hoje é cartão `tr-zaza`) |
| Gilaki | `glk` | Irã (Gilan) | 48.310 / 21 | A2 | (hoje é cartão) |
| Mazandarani | `mzn` | Irã (Mazandaran) | 76.189 / 54 | B1 | (hoje é cartão) |
| Talysh | `tly` | Azerbaijão, Irã | 10.227 / 46 | A2 | pouca gramática publicada |
| Azerbaijano do sul | `azb` | Irã | 244.907 / 116 | — | entraria como variante em escrita árabe do `az` |
| Mingreliano | `xmf` | Geórgia | 22.484 / 34 | B1 | (hoje é cartão) |
| Silesiano | `szl` | Polônia | 61.627 / 49 | B1 | (hoje é cartão) |
| Samogiciano | `sgs` | Lituânia | 17.276 / 27 | B1 | (hoje é cartão) |
| Latgaliano | `ltg` | Letônia | 1.163 / 12 | B1 | norma escrita oficial na Letônia (hoje é cartão) |
| Võro | `vro` | Estônia | 6.928 / 15 | B1 | (hoje é cartão) |
| Rusyn | `rue` | Eslováquia, Ucrânia, Sérvia | 10.348 / 53 e 1.617 / 29 (panônio) | B1 | oficial na Voivodina (Sérvia) (hoje é cartão) |
| Baixo-sorábio | `dsb` | Lusácia (Alemanha) | 3.452 / 23 | B1 | (hoje é cartão) |
| Limburguês | `lim` | Países Baixos, Bélgica | 15.221 / 27 | B1 | reconhecido nos Países Baixos (hoje é cartão) |
| Baixo-saxão neerlandês | `nds-nl` | Países Baixos | 8.109 / 31 | — | variante do `nds` |
| Frísio de Saterland | `stq` | Alemanha | 4.196 / 16 | A2 | (hoje é cartão) |
| Picardo | `pcd` | França, Bélgica | 6.156 / 32 | B1 | (hoje é cartão `fr-chti`) |
| Emiliano-romanholo | `egl`/`rgn` | Emília-Romanha | 14.340 / 33 | B1 | “dialeto” italiano com código próprio |
| Tarantino | — (glottocode `tara1316`) | Taranto | 9.508 / 17 | A2 | variedade do napolitano. Melhor como sotaque do `nap` |
| Flamengo ocidental | `vls` | Bélgica | 8.361 / 36 | B1 | idem |
| Zelandês | `zea` | Países Baixos | 7.454 / 20 | A2 | idem |
| Ripuário (kölsch) | `ksh` | Colônia | 3.038 / 13 | A2 | (já é sotaque do alemão) |
| Estremenho | `ext` | Estremadura (Espanha) | 4.292 / 26 | A2 | asturo-leonês, primo do mirandês |
| Pôntico | `pnt` | Grécia, Turquia | 681 / 11 | B1 | (hoje é cartão) |
| Kotava e Interlingue | `avk`/`ile` | — | 29.905 / 17 e 13.807 / 29 | — | artificiais (ver B) |

Outras Wikipédias pequenas sem curso: bishnupriya (`bpy`), newari (`new`, 75 mil artigos, escrita
própria), doteli (`dty`), angika (`anp`), atayal (`tay`), amis (`ami`), sakizaya (`szy`), paiwan (`pwn`)
e seediq (`trv`) de Taiwan, gorontalo (`gor`), banyumasan (`map-bms`), komering (`kge`), nias (`nia`),
mandailing (`btm`), batak toba (`bbc`), iban (`iba`), dusun (`dtp`), kanuri (`knc`), tyap (`kcg`), nupe
(`nup`), igala (`igl`), dagaare (`dga`), kusaal (`kus`), gurene (`gur`), obolo (`ann`), jju (`kaj`),
karai-karai (`kai`), bole (`bol`), tumbuka (`tum`, 19,6 mil / 30), wayuu (`guc`), pipil (`ppl`),
cherokee (`chr`, 999 / 20), cheyenne (`chy`), atikamekw (`atj`), alemão da Pensilvânia (`pdc`),
palatino (`pfl`), guianense (`gcr`), pa'o (`blk`), tai nüa (`tdd`), tigré (`tig`), dinka (`din`). Teto
de A2 a B1 em todas.

### A5. Línguas do Brasil

O app já tem 22 línguas indígenas do Brasil, ou ligadas a ele: mbyá, kaiowá, ñandeva, tapiete, tupi
antigo, guarani antigo, nheengatu, ka'apor, kamaiurá, aikewára, sateré-mawé, awetí, mundurukú,
kaingang, xavante, tikuna, tukano, baniwa, terena, huni kuĩ, marúbo, yawanawá e karitiana. Os números
de falantes abaixo são do Censo do IBGE de 2010, salvo nota.

**Prioridade alta: as grandes e bem documentadas (10).**

| Língua | Código | Família | Onde | Falantes | Teto | Motivo |
|---|---|---|---|---|---|---|
| Guajajara e tembé (tenetehara) | `gub`/`tqb` | Tupi › Tupi-guarani | Maranhão, Pará | ~11 mil a 20 mil | B1 | Novo Testamento, dicionários, escola bilíngue |
| Yanomami (yanomam e yanomámi) | `wca`/`guu` | Yanomami | Roraima, Amazonas, Venezuela | ~13 mil no Brasil | B1 | gramáticas, dicionário do ISA, material da Hutukara |
| Kayapó (mebêngôkre) | `txu` | Macro-jê › Jê | Pará, Mato Grosso | ~6 mil | B1 | Novo Testamento e gramática descritiva |
| Macuxi | `mbc` | Karib | Roraima, Guiana | ~5 mil no Brasil | B1 | dicionário, escola bilíngue, ensino na UFRR |
| Wapixana | `wap` | Aruak | Roraima, Guiana | ~3 a 4 mil no Brasil | B1 | idem |
| Bororo (boe) | `bor` | Macro-jê | Mato Grosso | ~1,5 mil | B1 | a Enciclopédia Bororo (3 volumes) é um dos maiores acervos sobre uma língua indígena brasileira |
| Karajá (inỹ rybè) | `kpj` | Macro-jê | Tocantins, Goiás | ~3 mil | B1 | fala diferente para homens e mulheres. Gramática e dicionário |
| Pirahã | `myp` | Mura | Amazonas | ~400 | A2 | famosa pelos debates (recursão, números), com descrições acadêmicas |
| Kadiwéu | `kbc` | Guaikuru | Mato Grosso do Sul | ~1,5 mil | A2 | os desenhos corporais são patrimônio. Descrições acadêmicas |
| Apurinã | `apu` | Aruak | Amazonas, Acre | ~2 mil | B1 | gramática de referência (Facundes, 2000) |

**Prioridade média (18):** paresí (`pab`, aruak, MT, ~2 mil, B1); kawaiwete/kayabi (`kyz`, tupi, MT,
~1,5 mil, A2); apinajé (`apn`, jê, TO, ~2 mil, B1); krahô e outros timbira (`xra`, jê, TO/MA, ~3 mil,
A2); xerente (`xer`, jê, TO, ~3 mil, B1, irmão do xavante); waiwai (`waw`, karib, PA/RR, ~2 mil, B1, com
Bíblia); tiriyó (`tri`, karib, PA, ~2 mil, A2); ye'kwana (`mch`, karib, RR, ~500 no Brasil, A2); palikur
(`plu`, aruak, AP, ~1,5 mil, B1); kokama (`cod`, tupi, AM, revitalização, A2); hup (`jup`, naduhup, AM,
~1,5 mil, B1, gramática de Epps); matsés (`mcf`, pano, AM, ~2 mil, A2, gramática de Fleck); desano
(`des`, tukano, AM, ~2 mil, A2); kanamari (`knm`, katukina, AM, ~1,5 mil, A2); madija/kulina (`cul`,
arawá, AC/AM, ~3 mil, A2); paumari (`pad`, arawá, AM, ~300, A2); kuikuro (`kui`, karib, Xingu, ~600, A2);
fulni-ô/yaathe (`fun`, macro-jê, PE, ~1 mil, A2, a única língua indígena viva do Nordeste fora do
Maranhão).

**Prioridade baixa, agrupadas (~15):** ikpeng, waujá, mehinaku, yawalapiti, kalapalo e kĩsêdjê (Xingu);
nambikwara, cinta larga, suruí paiter, zoró e gavião de Rondônia; zo'é, awá-guajá e parkatêjê (Pará e
Maranhão); patxohã (revitalização pataxó); e as históricas kipeá-kiriri (gramática de Mamiani, 1699) e
língua geral paulista. Teto de A1 a A2.

**Línguas de imigração no Brasil (hoje só cartão):** talian (`vec`, ~0,5 milhão de falantes, B1);
hunsriqueano (`hrx`, ~1 milhão no auge, B1, com escrita padronizada pela ESCRITHU); pomerano (glottocode
`pome1236`, ~0,3 milhão, B1, cooficial em municípios do ES); plautdietsch (`pdt`, menonitas no Paraná e no
Paraguai, B1). Também o japonês colonial (já é variante `ja-br`) e o pomerano do RS.

### A6. Históricas e clássicas

O app já tem latim, latim medieval, toscano antigo, francês antigo, castelhano medieval, nórdico antigo,
eslavo eclesiástico antigo, alto-alemão médio, árabe clássico, copta, tupi antigo, guarani antigo,
náuatle clássico, manchu e mongol em escrita tradicional.

**Prioridade alta (18).**

| Língua | Código | Família | Onde e quando | Teto | Motivo |
|---|---|---|---|---|---|
| Sânscrito | `san` | Indo-europeu › Indo-ariano | Índia, do 2º milênio a.C. até hoje | C2 (leitura) | corpus gigante, como o latim. Oficial na Índia e em Uttarakhand, Wikipédia de 12,6 mil artigos |
| Grego antigo | `grc` | Indo-europeu › Helênico | Grécia, séc. VIII a.C. a VI d.C. | C2 (leitura) | Perseus e TLG, gramáticas (Smyth) em domínio público |
| Chinês clássico (wenyan) | `lzh` | Sino-tibetano | China, séc. V a.C. a 1919 | C2 (leitura) | corpus gigante (CText), Wikipédia própria de 14,7 mil artigos |
| Hebraico bíblico | `hbo` | Afro-asiático › Semítico | Israel e Judá, séc. X a II a.C. | C1 (leitura) | corpus fechado mas estudado palavra por palavra, gramáticas em domínio público (Gesenius) |
| Egípcio (médio) | `egy` | Afro-asiático › Egípcio | Egito, de 2000 a.C. em diante | B2 (leitura) | gramáticas (Gardiner, Allen) e o Thesaurus Linguae Aegyptiae online. Antepassado do copta |
| Acadiano | `akk` | Afro-asiático › Semítico | Mesopotâmia, de 2500 a.C. a 100 d.C. | B2 (leitura) | ORACC e a gramática de Huehnergard. Corpus enorme (Gilgamesh, Hamurabi) |
| Sumério | `sux` | Isolada | Mesopotâmia, de 3300 a 1800 a.C. | B1 (leitura) | ETCSL (Oxford) e ePSD. É a primeira língua escrita |
| Inglês antigo | `ang` | Indo-europeu › Germânico | Inglaterra, séc. V a XII | B2 | Beowulf, gramáticas e Wikipédia própria (5,3 mil artigos / 73 editores) |
| Galego-português medieval | sem ISO (glottocode a conferir) | Indo-europeu › Românico | Galiza e Portugal, séc. XIII e XIV | B2 | as cantigas (Santa Maria, de amigo e de escárnio) e o projeto Universo Cantigas. Antepassado direto do português do aluno |
| Páli | `pli` | Indo-europeu › Indo-ariano | Índia, Sri Lanka, Sudeste Asiático | C1 (leitura) | o Tipitaka inteiro online, Wikipédia própria de 322 artigos com 20 editores |
| Aramaico (imperial e bíblico) | `arc` | Afro-asiático › Semítico | Oriente Médio, séc. VIII a.C. a VII d.C. | B1 | partes da Bíblia (Daniel, Esdras), língua de Jesus, Wikipédia de 1,9 mil artigos |
| Siríaco clássico | `syc` | Afro-asiático › Semítico › Aramaico | Edessa e o Oriente cristão, séc. I a XIII | B2 | Peshitta e literatura enorme. Litúrgico até hoje |
| Ge'ez | `gez` | Afro-asiático › Semítico › Etiópico | Etiópia e Eritreia | B1 | litúrgico, com escrita própria (a do amárico, que já está no app) |
| Gótico | `got` | Indo-europeu › Germânico oriental | séc. IV (Bíblia de Wulfila) | B1 | corpus pequeno, mas gramáticas completas. Wikipédia de 1 mil artigos |
| Turco otomano | `ota` | Túrquico | Império Otomano, séc. XIII a 1928 | B2 (C1 discutível) | ensinado nas universidades turcas, arquivos imensos, em escrita árabe |
| Japonês clássico (bungo) | `ojp` (antigo) / sem código (clássico) | Japônico | Japão, de Heian a 1945 | B2 | o Genji Monogatari e a poesia. Ensinado no ensino médio japonês |
| Tâmil clássico (sangam) | `oty` | Dravídico | sul da Índia, séc. III a.C. a III d.C. | B2 | Língua Clássica oficial da Índia, corpus sangam online |
| Avéstico | `ave` | Indo-europeu › Iraniano | Pérsia antiga | B1 | os Gathas de Zaratustra, corpus pequeno |

**Prioridade média (20):** inglês médio (`enm`, Chaucer, B2/C1); occitano antigo (`pro`, trovadores,
B2); irlandês antigo (`sga`, B1); galês médio (`wlm`, Mabinogion, B1); alto-alemão antigo (`goh`, B1);
saxão antigo (`osx`, Heliand, A2); persa antigo (`peo`, inscrições de Dario, A2); persa médio/pálavi
(`pal`, B1); armênio clássico/grabar (`xcl`, B2); georgiano antigo (`oge`, B1); eslavo oriental antigo
(`orv`, B1); coreano médio (`okm`, B1); tibetano clássico (`xct`, B2); turco antigo/orkhon (`otk`, A2);
chagatai (`chg`, B1); javanês antigo/kawi (`kaw`, B1); malaio clássico (glottocode `clas1250`, B1);
hitita (`hit`, B1, a língua indo-europeia escrita mais antiga); prácrito (`pra`, B1); maia clássico
(glottocode `clas1251`, A2 a B1, escrita hieroglífica em boa parte decifrada).

**Prioridade baixa, agrupadas (~15):** micênico/linear B (`gmy`), fenício (`phn`), ugarítico (`uga`),
hebraico mishnaico, etrusco (`ett`), osco (`osc`), úmbrio (`xum`), gaulês (`xtg`), luvita (`xlu`),
tocário A e B (`xto`/`txb`), prussiano antigo (`prg`), khmer antigo (`okz`), tangut (`txg`), frísio
antigo (`ofs`), elamita (`elx`). Teto de A1 a A2, e várias só servem para leitura de inscrições.

### A7. Prioridade baixa: grupos não detalhados

- **Línguas indígenas das Américas** com dezenas a centenas de milhares de falantes: q'eqchi' (`kek`,
  ~1 milhão), mam (`mam`), kaqchikel (`cak`), tzeltal (`tzh`), tzotzil (`tzo`), mixteco (`mix`), zapoteco
  (`zap`), otomi (`oto`), totonaca, mazateco, purépecha (`tsz`), ngäbere (`gym`), guna (`cuk`), emberá,
  wayuu (`guc`), shuar (`jiv`), awajún (`agr`), wichí, qom (`tob`), chiquitano, moxo, chimane
  (Bolívia reconhece 36 línguas oficiais), mohawk (`moh`), cherokee (`chr`), blackfoot (`bla`), mi'kmaq
  (`mic`), innu. Teto de A2 a B1, com Bíblias, gramáticas e às vezes escola bilíngue.
- **Austrália:** kriol (`rop`), crioulo do estreito de Torres (`tcs`), warlpiri (`wbp`), pitjantjatjara
  (`pjt`), yolŋu matha (`dhg`), tiwi. A2 a B1.
- **Papua-Nova Guiné e Melanésia:** centenas de línguas com só descrições acadêmicas. A1 a A2.
- **Línguas pequenas da África e da Ásia** (CLDR tem mais de 400 que não listei uma a uma). A1 a B1.

### A8. Línguas de sinais (sem curso de verdade)

O app tem minicursos de Libras e de ASL, uma lição de BSL, LSF, LGP e Sinal Internacional, a
aba informativa `linguas-sinais.ts` e o cartão da língua de sinais islandesa.

| Língua | Código | Onde | Usuários | Teto | Motivo |
|---|---|---|---|---|---|
| **Libras (curso completo)** | `bzs` | Brasil | ~2 a 5 milhões | B2 | língua legal desde 2002, com dicionário do INES, VLibras e corpus Libras da UFSC |
| ASL (curso completo) | `ase` | EUA, Canadá | ~0,5 milhão | B2 | o maior acervo de vídeo aberto (Handspeak, ASL-LEX) |
| Língua Gestual Portuguesa | `psr` | Portugal | ~60 mil | B1 | reconhecida na Constituição portuguesa |
| LSF francesa | `fsl` | França | ~0,1 milhão | B1 | a mãe da Libras |
| BSL britânica | `bfi` | Reino Unido | ~0,15 milhão | B1 | reconhecida por lei em 2022 |
| LSE espanhola | `ssp` | Espanha | ~0,1 milhão | B1 | lei de 2007 |
| LSM mexicana | `mfs` | México | ~0,1 milhão | B1 | lei de 2005 |
| LSA argentina | `aed` | Argentina | — | A2 | lei de 2023 |
| LIS italiana | `ise` | Itália | ~0,04 milhão | B1 | reconhecida em 2021 |
| DGS alemã | `gsg` | Alemanha | ~0,2 milhão | B1 | reconhecida em 2002 |
| NZSL neozelandesa | `nzs` | Nova Zelândia | ~0,02 milhão | B1 | **língua oficial** do país desde 2006, com dicionário online completo |
| Auslan | `asf` | Austrália | ~0,02 milhão | B1 | dicionário Signbank |
| Língua de sinais japonesa | `jsl` | Japão | ~0,3 milhão | A2 | pouco material aberto em outras línguas |

Baixa prioridade: língua de sinais urubu-ka'apor (Brasil, `uks`), cena (Jaicós, Piauí), língua de sinais
kaingang, nicaraguense (`ncs`), al-sayyid beduína, coreana (`kvk`), chinesa (`csl`), indo-paquistanesa
(`ins`). Teto de A1 a A2 nas de aldeia.

---

## B. Línguas artificiais

Já têm curso completo: esperanto, interlíngua, volapük, toki pona, lojban, ido, klingon, novial e
interslavo. Têm minicurso: Lingua Franca Nova, na'vi, alto valiriano, quenya, solresol, tsevhu,
sindarin, dothraki, lang belta, láadan e mando'a. Têm só cartão em `tipos-de-linguas.ts`: lingua ignota,
ithkuil, língua filosófica de Wilkins, simlish, minionês, ofidioglossia, lapine, novilíngua, nadsat e
brithenig.

### B1. Prioridade alta (9)

| Língua | Código | Tipo | Origem | Comunidade | Teto | Motivo |
|---|---|---|---|---|---|---|
| Interlingue (Occidental) | `ile` | Auxiliar, a posteriori | Edgar de Wahl, 1922 | ~centenas | B2 | Wikipédia própria (13,8 mil / 29), gramáticas, a revista Cosmoglotta. Não tem nada no app |
| Kotava | `avk` | Auxiliar, a priori | Staren Fetcey, 1978 | ~dezenas a centenas | B1 | Wikipédia de 29,9 mil artigos (17 editores), dicionário completo. Não tem nada no app |
| Lingua Franca Nova (curso completo) | `lfn` | Auxiliar, a posteriori | C. George Boeree, 1965/1998 | ~centenas | B2 | Wikipédia própria (4,7 mil / 21) e dicionário completo. Hoje é minicurso |
| Quenya (curso completo) | `qya` | Artística | J. R. R. Tolkien | fãs no mundo todo | B1 | corpus de Tolkien publicado (Parma Eldalamberon, Vinyar Tengwar). Hoje é minicurso |
| Sindarin (curso completo) | `sjn` | Artística | J. R. R. Tolkien | idem | A2 | menos vocabulário que o quenya. Hoje é minicurso |
| Na'vi (curso completo) | — | Artística | Paul Frommer, “Avatar” (2009) | ~milhares | B1 | cerca de 2,8 mil palavras oficiais, LearnNavi e o dicionário Reykunyu |
| Alto valiriano (curso completo) | — | Artística | David J. Peterson, “Game of Thrones” | ~milhares | B1 | teve curso no Duolingo, com uns 2 mil vocábulos. Hoje é minicurso |
| Dothraki (curso completo) | — | Artística | David J. Peterson | idem | A2 | cerca de 4 mil palavras, livro oficial “Living Language Dothraki”. Hoje é minicurso |
| Símbolos Bliss | `zbl` | Sistema gráfico (pasigrafia) | Charles Bliss, 1949 | usado em comunicação alternativa | B1 | tem código ISO e milhares de símbolos padronizados (BCI). É o mais útil socialmente da lista: comunicação aumentativa para pessoas sem fala |

### B2. Prioridade média (13)

| Língua | Código | Tipo | Origem | Teto | Motivo |
|---|---|---|---|---|---|
| Latino sine flexione | — | Auxiliar | Giuseppe Peano, 1903 | A2 a B1 | latim sem flexão, com obras científicas da época |
| Lingwa de planeta | — | Auxiliar | Dmitri Ivanov e outros, 2010 | B1 | vocabulário das dez maiores línguas, dicionário completo |
| Globasa | — | Auxiliar | Hector Ortega, 2019 | B1 | comunidade ativa, dicionário e gramática completos |
| Pandunia | — | Auxiliar | Risto Kupsala, 2007 | A2 | idem, comunidade menor |
| Idiom Neutral | — | Auxiliar | Academia de Volapük, 1902 | A2 | o “sucessor” do volapük que já está no app |
| Sambahsa | — | Auxiliar | Olivier Simon, 2007 | B1 | indo-europeu reconstruído, gramática completa |
| Ithkuil (curso) | — | Filosófica | John Quijada, 2004/2023 | A2 | gramática completa, mas quase impossível de falar. Hoje é cartão |
| Láadan (curso completo) | `ldn` | Artística/filosófica | Suzette Haden Elgin, 1982 | A2 | dicionário oficial. Hoje é minicurso |
| Lang Belta (curso completo) | — | Artística | Nick Farmer, “The Expanse” | A2 | hoje é minicurso |
| Mando'a (curso completo) | — | Artística | Karen Traviss, Star Wars | A2 | hoje é minicurso |
| Dovahzul | — | Artística | “Skyrim” (2011) | A2 | dicionário de fãs (Thuum.org) |
| Trigedasleng | — | Artística | David J. Peterson, “The 100” | A2 | dicionário oficial publicado |
| Solresol (curso completo) | — | Auxiliar, a priori (musical) | François Sudre, 1827 | A2 | hoje é minicurso |

### B3. Prioridade baixa, agrupadas (~25)

- **Tolkien, além do quenya e do sindarin:** telerin, khuzdul (anões), adûnaico, fala negra, entês.
  A1, porque há poucas dezenas de palavras.
- **Ficção:** atlante (“Atlantis”, Marc Okrand), kryptoniano, huttês, shyriiwook, goa'uld, barsoomiano,
  rikchik, méníshè, simlish e minionês (cartões; são “gibberish”, sem gramática). A1.
- **Artlangs e filosóficas de autor:** kēlen (Sylvia Sotomayor), verdurian (Mark Rosenfelder),
  teonaht, wenedyk (o eslavo latino, irmão do brithenig), brithenig (hoje é cartão), aUI, ro, ygyde,
  toki pona já está. A1 a A2.
- **Históricas:** língua enoquiana (John Dee, séc. XVI), lingua ignota (Hildegarda de Bingen, hoje é
  cartão), balaibalan (séc. XVI, otomano), a língua filosófica de Wilkins (1668, hoje é cartão), o
  pasigrafia de Dalgarno, medefaidrin (Nigéria, anos 1930, com escrita no Unicode). A1.
- **Auxiliares menores e sucessoras:** uropi, neo (`neu`), afrihili (`afh`), interglossa (`igs`),
  folkspraak, slovio (substituído pelo interslavo), mundolinco, Esperanto II, universal. A1 a A2.
- **Controladas:** o Basic English já tem minicurso. Simplified Technical English, fraseologia da aviação,
  seaspeak e Globish estão só como cartão (são línguas controladas, não conlangs; ficam na aba delas).
