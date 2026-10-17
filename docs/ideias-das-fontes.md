# Ideias das fontes para analisar e implementar

Pedido do dono, 17/10/2026: as ideias do campo `ideiaApp` dos métodos de ensino (`METODOS_<CÓDIGO>` em
`src/data/<código>/fontes.ts`, ver “Fontes para estudar e métodos de ensino” no `AGENTS.md`) ficam
juntas aqui para serem **analisadas e implementadas**. Cada idioma novo que ganhar `fontes.ts` traz
ideias novas: acrescente-as aqui também.

Reunidas em 17/10/2026, a partir dos 8 idiomas que tinham `fontes.ts` (ale, apw, awe, bsk, cbs, gl,
mzr, ywn), 46 ideias. Estão agrupadas por tema, porque várias se repetem entre idiomas e viram um
recurso do app inteiro. Entre parênteses, o código do idioma de onde a ideia veio; a fonte de cada
uma (instituição e URL) está no método correspondente do `fontes.ts`.

Para cada item: analisar se cabe, decidir com o dono quando a ideia mexer em algo grande, marcar [x]
quando implementado (com o commit) ou riscar com o motivo quando ficar de fora.

## 1. Recursos novos do app (servem a todos os idiomas)

- [ ] **Escuta em formato de aviso de rádio**: exercícios curtos de ouvir, como um aviso de rádio,
      com frases do dia a dia e das lições (apw: rádio KNNB de Whiteriver; bsk: Radio Pakistan, Gilgit).
- [ ] **Tarefas de comunidade**: desafios para fazer fora do app, como dizer uma frase da lição a
      alguém mais velho da família, aprender uma palavra com um falante, perguntar a um mais velho e
      recontar o que ouviu, ou pesquisar com a família e contar o que aprendeu (apw ×2, ywn, mzr).
- [ ] **Gravar uma frase para alguém da comunidade**: tarefa de gravar uma frase curta e mandar (bsk:
      virALLanguages). Pode aproveitar os áudios de 10 s da comunidade que o app já tem.
- [ ] **“Pergunta da semana”** na tela inicial, com a resposta escrita pelo aluno na comunidade (apw:
      curso APA 101).
- [ ] **Modo “aula da semana”**: uma lição curta e um encontro marcado, para estudar junto com amigos
      (ale: aula comunitária da tribo Qawalangin).
- [ ] **Prova de voz no fim de cada unidade**, no modelo de uma entrevista oral (ale: programa da APIA).
- [ ] **Revisão espaçada ligada à gramática**: ligar a revisão das palavras aos tópicos de gramática
      em que elas aparecem (ale: curso Unangam Qiliĝingin no Memrise).
- [ ] **Ensinar a ler um verbete do dicionário de referência** (dialeto, ano, exemplo), para o aluno
      seguir sozinho depois do curso (ale: Bergsland; vale para qualquer idioma com dicionário em `fontes`).

## 2. Tipos de exercício novos

- [ ] **Ordens com figuras de uma, duas ou várias pessoas**: o aluno escolhe a forma certa do verbo
      (apw: Resposta Física Total, guia de Phillip Goode).
- [ ] **Ouvir e repetir versos paralelos**, trocando uma palavra de cada vez (mzr: transmissão oral
      pelos pajés).
- [ ] **Traduzir para o idioma frases escritas pelo próprio aluno**, com as palavras do Cofre como
      apoio (ywn: escolas de Tarauacá).
- [ ] **Desenhar o que ouviu antes de ler** a história (ywn: livros bilíngues da ASCY).
- [ ] **Tarefa de escrita no fim do A1**: a apresentação tradicional, com o nome, a família e a terra
      dos pais (ale: curso da Universidade do Alasca em Anchorage).
- [ ] **Lição de alfabeto em que cada letra vem com uma palavra e a imagem dela no Cofre** (bsk:
      cartilha “Burushaski A-B”).

## 3. Leituras e histórias

- [ ] **Leituras bilíngues lado a lado** (texto na língua e tradução) no fim do A2 ou no B1, com
      trechos de textos reais (ale: livros escolares de Atka; ywn: livros da ASCY; mzr: material
      bilíngue pedido pela Univaja).
- [ ] **Histórias dos acervos de documentação**, com a frase original, a tradução, o nome do narrador
      e da aldeia e, quando a licença deixar, o áudio (awe: DoBeS Awetí; bsk: contos gravados; cbs:
      frases de Capistrano na grafia atual, com a de 1914 ao lado).
- [ ] **Unidade organizada em torno de uma história** (mzr: currículo da William & Mary, como as
      lições do Caminho-Morte).
- [ ] **Abrir a unidade com um texto de um autor ou professor da comunidade**, com o crédito (awe:
      Waranaku e Awajatu Aweti; cbs: autores da CPI-Acre).
- [ ] **No B1, a gramática explicada na própria língua** (cbs: as explicações de Joaquim Paulo de
      Lima Kaxinawá em hãtxa kuĩ).

## 4. Escrita, variantes e correção

- [ ] **Aceitar na correção as variantes que a ortografia permite** e explicar por que as duas estão
      certas (awe: jomem/jumem, ozoza/azoza).
- [ ] **Seguir a ortografia da escola e avisar quando uma fonte antiga escreve diferente** (awe:
      cartilha de 2019; cbs: grafia da escola huni kuĩ).
- [ ] **A ortografia ensinada como a escola ensina**: o apóstrofo como letra, o til uma vez só, a
      ordem alfabética própria (awe).
- [ ] **Mostrar que a mesma palavra muda de uma comunidade para outra** (apw: San Carlos, White
      Mountain e Cibecue). Ligar com a regra de dialetos e sotaques do `AGENTS.md`.
- [ ] **Separar as trilhas dos dialetos** como as turmas da comunidade fazem (ale: Atka e o leste).
- [ ] **Sotaque do Peru no huni kuĩ**, com as palavras que mudam de grafia (“juni” e “huni”) (cbs:
      lições de Susan Montag). Conferir com `docs/duvidas-variedades.md` antes.
- [ ] **Escrita em letras árabes ao lado da romanização**, como variante de escrita num nível mais
      alto (bsk: escrita unificada para o currículo).
- [ ] **A tradução para a língua de contato ao lado da palavra** (bsk: o urdu, que os falantes usam
      na escola e no trabalho).

## 5. Conteúdo e currículo de cada curso

- [ ] **Lições de cultura ligadas ao território e às atividades** (o roçado, a pesca, a festa, as
      estações), cada uma com as palavras do tema (awe: buriti, urucum, sal, pesca; cbs; apw: estações
      do ano; ywn: comida, caça, festa).
- [ ] **Unidade cultural em torno de uma festa** (ywn: o Mariri) e **uma trilha para adultos que
      entendem um pouco e querem voltar a falar** (ywn).
- [ ] **O parentesco ensinado primeiro**: como chamar os avós, os tios e o “txai” (cbs).
- [ ] **Cenário de conversa sobre a rotina do dia** no A2.1 (ale: curso UNA 131 do Ilisaġvik College).
- [ ] **Lições curtas para crianças da família que moram longe**, para usar em casa (bsk).
- [ ] **Só frases de falantes, nunca montadas à toa, e o que é cultural marcado para ser tratado com
      respeito** (apw: livro de De Reuse e Adley-SantaMaria). Conferir se os cursos já seguem isso.
- [ ] **Galego: usar o temário de cada Celga** para ver o que falta na trilha a partir do A2 e
      organizar a revisão em comunicação, sistema e cultura (gl).
- [ ] **Galego: mais comparação galego × português × castelhano** e literatura galega desde cedo,
      inclusive de escritoras (gl: matéria escolar na Galiza).
- [ ] **Galego: um caminho de “conversação + civilização”**, com diálogos curtos e cultura (gl:
      leitorados).
- [ ] **Galego: unidades temáticas presas a um lugar** (o Caminho de Santiago, a costa) (gl: cursos de
      verão em Santiago).
