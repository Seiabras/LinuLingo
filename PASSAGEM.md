# Passagem: Encantados (Cartas, contra o Linu)

Pausado em 14/10/2026, a pedido do coordenador (máquina pesada). Pesquisa feita, **nenhum código escrito ainda**.
Worktree `.claude/worktrees/jogos-encantados`, branch `jogos-encantados` (a partir do master e0f9f225, que já tem `etimologia` em `OutroJogo`; o `git merge master` pedido deve ser trivial).
Nenhum servidor nem Playwright foi aberto.

## Fontes (consultadas em 14/10/2026)

- **Manual oficial da 3ª edição (Ace Studios, 12 páginas, PDF só com imagens):** https://www.comparajogos.com.br/f/uploads/short-url/bsSAI0cFYJ8HBSk8uTMqVT9xFLu.pdf (para ler: `pdftoppm -r 150 -png`). Traz 60 cartas, 2 a 4 jogadores, variante 5–6, todas as habilidades e as canções. Ficha técnica: game design Shea Parkes e Fel Barros; arte Daniel R. Lustosa, Lucas Ribeiro e Daniel Araújo; design gráfico Marcelo Groo; desenvolvimento original Rob Seator; produção Marcos Mandina; acestudios.com.br.
- **Ludopedia, Encantados (3ª Edição):** https://ludopedia.com.br/jogo/encantados-3-edicao — ano 2020, lançado 07/2020, editora Ace Studios, e a **contagem das cartas**: Anões 5, Elfos 5, Fadas 5, Faunos 5, Fogos-fátuos 5, Gnomos 5, Leprechauns 5, Mímicos 5, Trolls 4, Goblins 4, Kobolds 4, Canção do verão 1, do outono 2, do inverno 2, da primavera 3 (= 60).
- **Ludopedia, 2ª edição (2018):** https://ludopedia.com.br/jogo/encantados-2-edicao — um baralho de 60 para 2–4 (antes eram dois de 63 para 2–6), entra o Troll e sai a Mandrágora, poderes revistos e pontos reequilibrados. Indicado ao Prêmio Ludopedia Jogo Família do Ano (Designer Nacional) 2018, voto popular.
- **Ludopedia, 1ª edição (2016):** https://ludopedia.com.br/jogo/encantados — 132 cartas (2 decks de 63 + 6 de ajuda), tabuleiro de descarte.
- **Origem do jogo:** https://ludopedia.com.br/topico/79979/menos-e-mais-10-jogos-de-cartas-feitos-por-designers-consagrados — baseado em “Plato 3000”, de Shea Parkes, que veio de brinde na caixa grande do Glory to Rome; Fel Barros o levou para a fantasia medieval e propôs a parceria. Família do buraco e do pife.
- **Valores das cartas:** fotos da galeria da Ludopedia (3ª ed.): https://storage.googleapis.com/ludopedia-imagens-jogo/3fa21_173247.jpg, .../5ea4b_206339.png, .../5b5ff_206338.png, .../361d9_183863.jpeg, .../ce15f_173251.jpg.
- **BGG** (versão 575820 = “Third Edition”, português, 2020) bloqueia acesso automático (403/Cloudflare); a API XML pede autorização.
- **Editora:** Ace Studios no Brasil (manual, Ludopedia, lojas). A loja Bravo Jogos lista a 3ª edição com “Marca: Ludens Spirit” e um arquivo da Ludopedia fala em “distribuição Grok”: não confirmei o papel delas. **Não achei edição fora do Brasil.**

## Valores impressos (confirmados nas fotos, salvo indicação)

Anões 2 · Elfos 3 · Fadas 1 · Faunos 0 · Fogos-fátuos 2 · Gnomos 3 · Goblins 3 · Kobolds 2 (foto borrada, mas legível nas duas fotos) · Leprechauns −4 · Mímicos −3 · Trolls 0 · Primavera 0 · Outono 0 · Inverno 0 · Verão −3 (o manual diz “8 pontos em vez de −3”).

## Regras (resumo do manual, 3ª ed.)

- Mão: 10 cartas (2 jog.), 9 (3), 8 (4, em duplas que dividem o jardim). Resto = pilha de compras. Duas pilhas de descarte: **de busca** (à esquerda) e **de fim de turno** (à direita).
- Rodada 1: começa quem viu uma fada por último; depois, quem tem menos pontos (empate: quem começou a anterior). Sentido horário.
- **Fase 1, comprar** (uma opção): a carta do topo de uma das pilhas de descarte, OU uma **busca**: compra 2 do monte, fica com 1, a outra vai ao descarte de busca.
- **Fase 2, baixar** (em qualquer ordem): (A) uma canção por turno; (B) uma raça nova por turno, com 3 cartas iguais (um mímico pode substituir UMA, nunca dois); (C) expandir, quantas vezes quiser: se a raça já está em jogo em qualquer jardim, baixe quantas cartas dela quiser no seu; no máximo 1 mímico por raça, e mímico sempre acompanhado de pelo menos uma carta da raça; (D) só em duplas, no lugar da canção: troca de 2 cartas com o parceiro, sem conversar. **Não pode baixar a última carta da mão.**
- **Fase 3:** descarte 1 carta no descarte de fim de turno.
- **Fim da rodada:** no fim do turno em que o monte acabou, OU quando 1 jogador (2 jog.), 2 jogadores (3 jog.) ou uma dupla (4) esvaziar a mão. Jardim soma o valor; mão conta negativo; mímico sempre negativo (na mão e no jardim).
- **Fim do jogo:** ao fim de uma rodada, se alguém chegou a 100, vence quem tem mais; empate: mais uma rodada.
- **Variante 5–6** (duas caixas): 7 cartas cada; com 5, a rodada acaba quando 2 baterem; com 6, três duplas.
- Habilidades (as de “2 ou mais” contam só cartas de raça, mímico não ativa):
  - Anões ≥2: na compra, pegue qualquer carta da pilha de descarte, não só a do topo.
  - Elfos ≥2: na busca, compre uma carta a mais (a carta impressa diz “olhe mais uma carta”).
  - Fadas ≥2: seus mímicos no jardim valem 0 em vez de −3.
  - Faunos ≥2: fim da rodada, +2 por canção no seu jardim.
  - Fogos-fátuos ≥2: raça nova com só 2 cartas iguais.
  - Gnomos ≥2: na busca, as cartas compradas vão todas para a mão; depois descarte qualquer carta da mão.
  - Goblins: quando o primeiro entra no seu jardim, escolha um jogador (pode ser você) para comprar 2 do monte.
  - Kobolds: quando o primeiro entra no seu jardim, escolha uma carta de qualquer jardim e ponha no fundo do monte.
  - Leprechauns ≥2: cada um vale +4 no fim da rodada, em vez de −4. Mímico não ajuda a pôr leprechaun em jogo.
  - Trolls: quando o primeiro entra no seu jardim, escolha uma carta em jogo e ponha em qualquer jardim (até no seu).
  - Mímicos: completam o número de uma raça; não contam para habilidades nem como raça na canção do verão.
  - Canção da primavera: escolha um jogador (pode ser você) para fazer uma busca; não conta como a busca do turno e sofre as habilidades.
  - Canção do verão: 8 pontos no fim da rodada (em vez de −3) se o jardim de quem a controla tiver 5 raças diferentes ou mais.
  - Canção do outono: escolha um jogador (pode ser você) para comprar as 4 cartas do topo de uma pilha de descarte; ele escolhe a pilha.
  - Canção do inverno: compre a carta do topo de uma pilha de descarte e faça uma busca (não conta como a do turno; sofre as habilidades).

## Dúvidas de regra (decidir e listar no relatório)

1. Elfos + busca: “olhe 3, fique com 1” (texto da carta) ou “fique com 2” (manual: “comprar uma carta a mais”). Proposta: olhar 3, ficar com 1.
2. Gnomos + elfos juntos: proposta de que as 3 vão à mão e se descartam 2 (saldo +1, como sempre).
3. Goblin/Kobold/Troll “na primeira vez que entrar no seu jardim”: vale também quando o troll move a carta para o jardim de outro? E vale de novo se a raça sair e voltar? Proposta: só quando o dono baixa da mão, uma vez por rodada.
4. Kobold/troll tirando a última carta de uma raça que tem mímico: o fórum da Ludopedia deixa em aberto (https://ludopedia.com.br/topico/32401/duvidas-sobre-leprechauns-e-mimicos). Proposta: o mímico fica; e kobold/troll não escolhem mímico (simplificação).
5. Mão: “contam como pontos negativos” → proposta: −|valor impresso| (leprechaun −4, verão −3, mímico −3).
6. “Raça nova” = raça que não está em nenhum jardim; se já está no do Linu, você expande direto com 1 carta.

## Etimologia (pedido do coordenador)

O manual chama as criaturas de “os Encantados” (“Se você entrar em um jardim, ficar em silêncio... poderá ter a oportunidade de conhecer os Encantados”): o nome vem dos seres mágicos do jardim, todos do folclore europeu. **Não achei fonte que ligue o nome aos “encantados” do folclore e das religiões brasileiras** (tambor de mina, pajelança, encantaria amazônica): tratar como incerto, não afirmar. Não achei outro nome em outras edições (não achei edição estrangeira). O jogo de origem chamava-se “Plato 3000”.

## Folclore das criaturas (para o texto “de onde vem”)

Conferidos na Wikipedia em 14/10/2026:
- Fogos-fátuos: latim “ignis fatuus” (“fogo tolo”); no Brasil, “fogo corredor”, “boitatá”, “João-galafoice”; Anchieta descreveu o boitatá em 1560; explicação: oxidação de fosfina, difosfano e metano da matéria em decomposição. https://pt.wikipedia.org/wiki/Fogo-f%C3%A1tuo
- Kobolds: espírito da casa do folclore alemão (ajuda em troca de leite), confundido com o espírito das minas; o nome do minério de cobalto foi ligado a ele (Grimm), como explicação popular. Etimologia aceita: “kob” (casa) + “walt” (poder). https://en.wikipedia.org/wiki/Kobold
- Leprechauns: irlandês antigo “luchorpán”/“lupracán”; sapateiro solitário com pote de ouro escondido; primeira menção no conto medieval “Echtra Fergus mac Léti”. https://en.wikipedia.org/wiki/Leprechaun
- Mímicos: não é folclore; criatura do “Monster Manual” (1977) do Advanced Dungeons & Dragons, de Gary Gygax. https://en.wikipedia.org/wiki/Mimic_(Dungeons_%26_Dragons)
- Falta conferir: anões (dvergar nórdicos), elfos (álfar), fadas (latim “fata”), faunos (deus romano Fauno, ligado a Pã), gnomos (Paracelso, séc. XVI), goblins, trolls (Escandinávia). Usar https://en.wikipedia.org/wiki/Dwarf_(folklore), /Elf, /Fairy, /Faun, /Gnome, /Goblin, /Troll.

## O que falta (tudo)

- `src/data/outros-jogos/encantados.ts` com `ENCANTADOS: OutroJogo` (cartas, pronto, playable, linu, year “2016 (1ª ed.); 3ª ed. em 2020”, where “Brasil”, etimologia, about com crédito a Fel Barros, Shea/Sheamus Parkes, Ace Studios e artistas, rules ≥2, variants: 3–4 jogadores/duplas, 5–6 jogadores, e as edições). Atenção: o master **não tem** o campo `fontes` (o Hanafuda da branch jogos-areas usa); fontes ficam no comentário.
- `src/services/encantados-engine.ts` + `.test.ts`: plano feito — estado com `baralho`, `descBusca`, `descFim`, `maos`, `jardins` (cartas com `grupo`, para o mímico saber a raça), `pendente` (busca, escolher jogador, escolher pilha, kobold, troll/destino), ações num tipo `Acao` aplicado por `aplicar(e, acao)` + `validar(e, acao)`; rng injetável em `novaPartida(rng)`/`novaRodada`; IA `jogadaDoLinu(e, nivel: NivelLinu, rng)` (tipo de `services/jogos-prefs.ts`) que devolve a próxima `Acao`. Linu escolhe a si mesmo na primavera/outono para não precisar perguntar ao humano.
- `src/components/outros-jogos/EncantadosJogo.tsx`: seguir o padrão de `HanafudaJogo.tsx` (branch jogos-areas) e de `components/jogos/ui.tsx` (`PlacarJogo`, `Instrucao`, `FaixaResultado`, `LinuPensando`, `useLinuJoga`, `useXpDeVitoria`). Cartas próprias em react-native-svg: cor e símbolo por raça (picareta, folha, asas, flauta, chama, gorro, orelhas, lanterna, trevo/pote, máscara, porrete) e pedra com flor/sol/folha/floco nas canções; valor nos cantos. Nada das ilustrações nem do logotipo.
- Rota temporária `src/app/dev-encantados.tsx` (padrão de `dev-galeria.tsx`), testes escopados, tsc, eslint, Playwright desktop + iphone, claro e escuro.
