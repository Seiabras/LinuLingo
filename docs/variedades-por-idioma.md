# Variedades por idioma: dialetos, sotaques e línguas próprias

Plano combinado com o dono do app em 09/10/2026, ao revisar os falares idioma por idioma.

## A regra

- **Dialeto** é a variedade de um país ou de um grupo grande. Ele entra em `pack.variants` como
  sub-curso completo: cartão cultural, traços de pronúncia, tabela de vocabulário contrastivo,
  IPA própria e **2 histórias**. Exemplos: português do Brasil, de Portugal, de Angola.
- **Sotaque** é tudo o que fica dentro de um dialeto: o carioca, o alentejano, o andaluz. Ele entra
  em `pack.accents` com `kind: 'sotaque'` e `variant` apontando para o dialeto. Pode mudar o som e
  também palavras e expressões.
- **Língua própria** é outra língua falada no mesmo lugar (`kind: 'língua'`): o mirandês, o sardo, o
  sámi. Quando ela já tem curso ou verbete em outro idioma do app (o talian no italiano, o nheengatu
  no curso `yrl`), o idioma só **aponta** para ele, sem copiar.
- **Critério para as exceções** (dono, 10/10/2026): dialeto é uma variedade completa, com gramática,
  sintaxe, vocabulário e pronúncia próprias; sotaque é só a pronúncia. Esse critério **não** muda a
  regra de cima (dentro de um país continua sendo sotaque): serve para decidir os casos especiais,
  como o AAVE e o mandarim de Sichuan, que viraram dialetos. Pronúncia mais algumas palavras soltas,
  sem gramática própria (Petersburgo × Moscou), continua sotaque.
- **Exceções vão para o dono decidir.** Um falar pequeno que muda mais que o som (mistura de duas
  línguas, gramática própria, pouca intercompreensão) não vira sotaque automaticamente. Exemplo já
  decidido: o barranquenho, de uma vila só, é **dialeto completo**.
- O sotaque que é o próprio dialeto (o angolano dentro do português de Angola) usa
  `sameAsVariant` e aparece dentro do dialeto, não duas vezes no seletor.
- **Falar com bastante material documentado pode entrar** (dono, 09/10/2026), seja sotaque ou
  dialeto, mesmo fora da lista. Sem fonte, não entra.
- **Fontes:** todo verbete novo cita no comentário do arquivo de onde vieram os fatos.
- **IPA por sotaque:** os traços de cada sotaque ficam numa tabela (no português,
  `src/data/pt/tracos.ts`), e a IPA do sotaque escolhido segue esses traços.
- **Coordenação:** outra sessão sobe o nível de vários idiomas ao mesmo tempo. zh e sq já foram
  liberados (09/10/2026); perguntar antes de mexer em idioma que ela esteja tocando.

## Situação por idioma

O quadro completo de hoje e as propostas para todos os outros idiomas do app estão em
`variedades-propostas.md` (10/10/2026).

Legenda: ✅ decidido · ❓ exceção ou escolha para o dono · ➕ falta acrescentar.

### Português (pt) — feito em 09/10/2026
- ✅ Dialetos: Portugal, Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe,
  Timor-Leste, Macau, Goa, barranquenho (exceção decidida). Cada um com cartão, pronúncia,
  vocabulário e duas histórias.
- ✅ Sotaques do Brasil: os 12 de hoje, mais cuiabano, curitibano, maranhense e capixaba.
- ✅ Línguas próprias: mirandês e galego (Portugal), kriolu (Cabo Verde), nheengatu e Libras (Brasil),
  e apontar para o talian (italiano) e o Hunsrik (alemão).
- ✅ IPA por sotaque.
- ➕ Sugestões para depois: kriol da Guiné-Bissau, forro (São Tomé), tétum (Timor) e patuá macaense
  como línguas próprias dos seus dialetos; Língua Gestual Portuguesa no pt-PT.

### Espanhol (es) — feito em 09/10/2026
- ✅ Dialetos: padrão latino-americano (`es-419`, o do curso), México, América Central, Caribe, Andes,
  Chile, rio-platense e Espanha. Os novos com cartão, pronúncia, vocabulário e duas histórias.
- ✅ Sotaques dentro de cada um: mexicano, nortenho e iucateco (México); tico (América Central);
  cubano, boricua, dominicano, venezuelano e costeño (Caribe); paisa, rolo e andino (Andes);
  cordobês (rio-platense); castelhano, andaluz e canário (Espanha). O chileno e o portenho são o
  próprio dialeto (`sameAsVariant`).
- ✅ IPA por sotaque (`src/data/es/tracos.ts`): «s» e «jota» aspirados, «ch» chiado, «d» que cai,
  «r» de Porto Rico, «rr» assibilado.
- ➕ Sugestões para depois: paraguaio (com o guarani), espanhol dos EUA, da Guiné Equatorial.

### Francês (fr) — feito em 09/10/2026
- ✅ Dialetos: França, Quebec, **Acádia** (novo, completo, com duas histórias), Bélgica, Suíça e África
  Ocidental. O sotaque “Africano” é agora o próprio `fr-SN`, e o acadiano o próprio `fr-acadie`.
- ✅ **Picardo (ch'ti)** virou língua própria.
- ➕ Possíveis novos: francês da África Central (Congo, Camarões), do Magrebe, cajun (Luisiana).

### Italiano (it)
- Hoje: Itália e Suíça como dialetos; sotaques regionais; línguas próprias (napolitano, siciliano,
  sardo…). Já está de acordo com a regra. Nada a mudar.

### Romeno (ro) — feito em 09/10/2026
- ✅ Moldavo, transilvano, banatense e oltênio viraram sotaques (o moldavo continua sem `variant`,
  porque atravessa os dois lados do Prut).
- ✅ Aromeno como língua própria, com botão para o curso `rup`.
- ➕ Meglenorromeno e istrorromeno: ver com o dono.

### Russo (ru) — feito em 10/10/2026
- ✅ Dialetos: Rússia (`ru-RU`, o padrão), **Belarus** (`ru-BY`), **Cazaquistão** (`ru-KZ`) e **Ucrânia**
  (`ru-UA`, decisão do dono), os três com cartão, pronúncia, vocabulário e duas histórias; IPA de
  Belarus e da Ucrânia por traços.
- ✅ Moscou, Petersburgo, norte, sul e Sibéria são sotaques do padrão; Odessa e Kharkiv, da Ucrânia.

### Sueco (sv) — feito em 09/10/2026
- ✅ Gutamål virou sotaque, como recomendado.

### Norueguês (nb) — feito em 09/10/2026
- ✅ “Vales do interior” virou sotaque.

### Dinamarquês (da) — feito em 09/10/2026
- ✅ Vestjysk, sønderjysk e bornholmsk viraram sotaques; o dinamarquês das Faroé continua sotaque.

### Catalão (ca) — feito em 09/10/2026
- ✅ Dialetos: central (`ca-ES`, o do curso), **valenciano** (`ca-VC`), **Andorra** (`ca-AD`),
  **rossellonês** (`ca-FR`) e **alguerês** (`ca-IT`), os quatro novos com cartão, pronúncia,
  vocabulário e duas histórias.
- ✅ Barcelona, Lleida (nord-occidental) e Baleares viraram sotaques do central; o aranês continua
  língua própria. IPA por traços (átonas ocidentais, “x” [tʃ], “j” [dʒ], rotacismo alguerês…).

### Islandês (is) — feito em 09/10/2026
- ✅ O “Vestur-íslenska” é o próprio `is-CA` (sotaque com `sameAsVariant`).

### Finlandês (fi) — feito em 09/10/2026
- ✅ Os 5 dialetos regionais viraram sotaques.

### Estoniano (et), lituano (lt), letão (lv) — feito em 09/10/2026
- ✅ Os dialetos regionais viraram sotaques. As línguas próprias continuam.

### Feroês (fo) — feito em 10/10/2026
- ✅ Os 4 dialetos regionais viraram sotaques.
- ✅ O kvæði saiu dos sotaques e virou ficha de dança na aba Cultura (decisão do dono).

### Suaíli (sw) — feito em 10/10/2026
- ✅ Dialetos: Tanzânia (`sw-TZ`, o padrão), **Quênia** (`sw-KE`) e **RD Congo** (`sw-CD`), os dois
  novos com cartão, pronúncia, vocabulário e duas histórias.
- ✅ Zanzibar e o continente são sotaques da Tanzânia; Mombasa, Lamu e o sheng, do Quênia; o
  kingwana é o próprio dialeto do Congo (`sameAsVariant`), e ganhou o sotaque novo de **Lubumbashi**
  (“swahili facile”). IPA por traços (dh/th simplificados no Quênia; r → l e h mudo em Lubumbashi).

### Japonês (ja) — feito em 09/10/2026
- ✅ Dialetos: padrão de Tóquio (`ja-JP`, o do curso), **Kansai** (`ja-kansai`) e **koronia-go**
  (`ja-BR`), os dois novos com cartão, pronúncia, vocabulário e duas histórias.
- ✅ Os outros “-ben” viraram sotaques do padrão; Osaka, Quioto e Kobe, sotaques do Kansai.

### Coreano (ko) — feito em 09/10/2026
- ✅ Dialetos: Sul (`ko-KR`, o do curso), Norte (`ko-KP`), **China/Yanbian** (`ko-CN`) e **Ásia
  Central/고려말** (`ko-koryo`), os dois novos com cartão, pronúncia, vocabulário e duas histórias.
- ✅ Os falares das províncias viraram sotaques do Sul ou do Norte; Yanbian e 고려말 aparecem como o
  sotaque do seu dialeto (`sameAsVariant`). O jejuense continua língua própria.

### Albanês (sq) — feito em 10/10/2026
- ✅ Dialetos por grupo: **tosk** (`sq-tosk`, base do padrão) e **gheg** (`sq-geg`, norte e Kosovo), o
  gheg com cartão, pronúncia, vocabulário e duas histórias (A2, porque o curso ainda vai até o A2).
- ✅ Arbëresh e arvanítico viraram línguas próprias (com glottocode e reconhecimento).

### Alemão (de) — feito em 10/10/2026
- ✅ Dialetos: Alemanha (`de-DE`, o padrão), **Áustria** (`de-AT`) e **Suíça** (`de-CH`), os dois novos com
  cartão, pronúncia, vocabulário e duas histórias (A2, porque o curso ainda vai até o A2).
- ✅ Sotaques: norte/Hamburgo, Berlim, Kiezdeutsch, Colônia, Saxônia, Baviera, Suábia (Alemanha); Viena,
  Tirol, Vorarlberg (Áustria); alemão-padrão da Suíça (=).
- ✅ Línguas com curso próprio, para onde o alemão aponta: suíço-alemão, baixo-alemão, luxemburguês,
  alto-sorábio. Imigração: hunsriqueano e pomerano (o português também aponta para o pomerano).
- ⏳ O alemão ainda não tem motor de IPA: os traços por sotaque ficam para quando houver.

### Inglês (en) — feito em 10/10/2026
- ✅ Dialetos: EUA (`en-US`, o padrão), **Reino Unido**, **Irlanda**, **AAVE** (decisão do dono),
  **Canadá**, **Austrália**, **Nova Zelândia**, **Índia** e **África do Sul**, os oito novos com cartão,
  pronúncia, vocabulário e duas histórias (A2).
- ✅ Sotaques: General American, sul, Nova York, Boston, Califórnia (EUA); RP, cockney, MLE, scouse,
  geordie, Manchester, Yorkshire, Escócia, Gales, Irlanda do Norte (Reino Unido). IPA não rótica por traços.
- ✅ Línguas: scots, gaélico escocês, maori, havaiano, pidgin nigeriano e africâner (com curso no app),
  galês e irlandês.
- ❓ Nigéria como dialeto do inglês (hoje só o pidgin, como língua).

### Chinês (zh) — feito em 10/10/2026
- ✅ Dialetos: China (`zh-CN`, o padrão), **Taiwan** (`zh-TW`, em caracteres tradicionais), **Singapura**
  (`zh-SG`) e **Sichuan** (`zh-sichuan`, decisão do dono), os três com cartão, pronúncia, vocabulário e
  duas histórias (A2).
- ✅ As escritas (tradicional, pinyin) continuam variantes; o seletor agora mostra as duas fileiras
  separadas (`AccentsPanel.tsx`), e escolher uma escrita mantém os sotaques do padrão.
- ✅ Sotaques: Pequim, nordeste, Xangai, Cantão. Línguas: cantonês (→ `yue`), taiwanês, hakka, wu.

### Neerlandês (nl), grego (el), malaio (ms), bengali (bn) — feitos em 10/10/2026
- ✅ nl: Países Baixos (padrão), **Bélgica** e **Suriname**, com duas histórias cada; sotaques Randstad,
  Brabante, Limburgo, Groningen, Antuérpia, Flandres Ocidental; línguas frísio, limburguês, baixo-saxão,
  papiamento, sranan, africâner.
- ✅ el: Grécia (padrão) e **Chipre**; sotaques Atenas, Creta, norte, Ilhas Jônicas; línguas pôntico,
  grico, tsacônio.
- ✅ ms: Malásia (padrão) e **Brunei**; sotaques Kelantan, Terengganu, Kedah, Negeri Sembilan, Sarawak,
  Sabah e Singapura (❓ Singapura como dialeto).
- ✅ bn: Bangladesh (padrão) e **Índia**; sotaques Daca, Barisal; línguas sylheti e chittagoniano.
- ✅ af: só sotaques (Oosgrens, Kaaps, rio Orange, Namíbia, Patagônia); ❓ Namíbia como dialeto.

### Línguas regionais da Europa, só sotaques — feitas em 10/10/2026
- ✅ Galego (ocidental, central, oriental), asturiano (central, ocidental, oriental), aragonês (ocidental,
  central, oriental), basco (biscainho, guipuscoano, navarro, navarro-lapurdino, suletino), corso
  (cismontano, oltramontano), valão (Liège, Namur, Charleroi), friulano (central, ocidental, cárnico).

### Todos os outros idiomas — feitos em 10/10/2026
- ✅ Persa: Irã e **Afeganistão (dari)** como dialetos, com duas histórias; sotaques de Teerã, Isfahan,
  Shiraz, Mashhad, Cabul, Herat, hazaragi e o tadjique; línguas gilaki, mazandarani, luri, baluchi.
- ✅ Variantes de escrita novas: sérvio (cirílico × latino), uzbeque (latino × cirílico), bielorrusso
  (cirílico × łacinka), com amostra transliterada (`src/services/transliteracao.ts`).
- ✅ Sotaques (e línguas próprias) em todos os demais idiomas vivos da lista: europeus, eslavos, do
  Cáucaso, do Oriente Médio, do sul, sudeste, centro e leste da Ásia, do Pacífico, da África e das
  Américas, e as pronúncias do latim e os dialetos do copta.
- Sem divisão (lista `SEM_DIVISAO` no teste): línguas antigas, artificiais e de um povo só.
- ❓ As dúvidas estão em `duvidas-variedades.md`.

## Regra para os idiomas novos (dono, 10/10/2026)

Todo idioma que entrar passa pelas mesmas três perguntas: tem dialetos? cada dialeto tem sotaques? tem
variantes de escrita? Ver a seção “Dialetos, sotaques e variantes de escrita” do `AGENTS.md`. O teste
“todo idioma foi revisto” (`src/services/dialetos.test.ts`) falha se um idioma ficar sem resposta.
