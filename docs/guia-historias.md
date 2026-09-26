# Guia para escrever histórias interativas em romeno (app Poliglota)

Protagonista: **Linu**, um pinguim-de-barbicha simpático e curioso, visitando/morando na Romênia. Público: brasileiros aprendendo romeno.

## Formato (TypeScript, tipo StorySeed — veja exemplos reais em
/home/seiabras/Documentos/aplicativo de idiomas/meu-app-idiomas/src/data/ro/historias.ts
e os tipos em .../src/data/types.ts)

Cada história é um objeto:
```
{
  id: 'ro-hNN',            // use EXATAMENTE os ids que te passarem
  level: 'B1.3',           // subnível (ver tabela)
  cefr: 'B1',              // A1 | A2 | B1 | B2 | C1 | C2  (= começo do subnível)
  title: 'Título em romeno',
  emoji: '🎭',
  summary: 'Resumo em português (1 frase).',
  cultural_context: 'Fato cultural VERDADEIRO em português (1–2 frases).',
  start: 'start',
  glossary: [['romeno', 'português'], ...],   // 5–8 pares
  nodes: {
    start: { emoji: '🏙️', text: 'Romeno…', translation: 'Português…', choices: [
      { text: 'Escolha em romeno.', translation: 'Tradução.', next: 'outroNo' },
      { text: 'Escolha que mostra NÃO ter entendido.', translation: '…', wrong: 'Explicação gentil em português do que o texto dizia.' },
    ]},
    final_bom: { emoji: '🎉', text: '…', translation: '…', ending: { tone: 'bom', title: 'Título do final (pt)', message: 'Mensagem (pt).' } },
    ...
  },
},
```

## Regras OBRIGATÓRIAS (há testes automáticos)
- Todo nó alcançável a partir de `start`. Todo `next` aponta para nó existente.
- Nó sem `ending` tem pelo menos 1 escolha com `next`. Nó com `ending` NÃO tem `choices`.
- Cada escolha tem `next` OU `wrong`, nunca os dois. 1–3 escolhas `wrong` por história (testam compreensão).
- Pelo menos 2 finais por história, pelo menos 1 com tone 'bom'.
- ș ț com vírgula (U+0219, U+021B), NUNCA ş ţ com cedilha. Diálogos com « ». Sem apóstrofo reto dentro das strings (use ’). Strings em aspas simples.
- Fatos culturais/históricos: SÓ os que você tem certeza. Nada de marcas registradas nem pessoas reais vivas.
- Romeno natural e correto (conjugação, gênero, artigo enclítico, clíticos). Revise tudo antes de entregar.

## Subníveis — gramática-alvo e tamanho
| Nível | Foco gramatical / temático | Nós | Frases por nó |
|---|---|---|---|
| A1.1 | presente de a fi / a avea, saudações, apresentar-se, números até 10 | 6–8 | 1–2 muito curtas |
| A1.2 | presente de verbos regulares, artigo definido enclítico, cores, horas | 6–8 | 2 curtas |
| A2.1 | perfect compus (am mâncat…), possessivos (meu/mea…) | 7–9 | 2–3 |
| A2.2 | futuro (o să / voi + inf.), imperativo, comparativo (mai… decât) | 7–9 | 2–3 |
| B1.1 | subjuntivo com să (vreau să…, trebuie să…), pronomes clíticos (îl, o, le, îi) | 8–10 | 3 |
| B1.2 | imperfeito (eram, mergeam) para narrar/descrever o passado | 8–10 | 3 |
| B1.3 | condicional (aș vrea, dacă aș putea…), pedidos educados, discurso indireto simples | 8–10 | 3–4 |
| B1.4 | genitivo/dativo (casa mamei, i-am dat prietenului), relativas (care, pe care, al cărui) | 8–10 | 3–4 |
| B2.1 | mais-que-perfeito (plecasem), conectores (totuși, deși, prin urmare, în schimb) | 8–10 | 3–4 |
| B2.2 | voz passiva e «se» passivo, registro formal (cartas, instituições) | 8–10 | 3–4 |
| B2.3 | gerúndio (mergând), particípio, expressões idiomáticas comuns (a-și face griji, a da de…) | 8–10 | 4 |
| B2.4 | opinião e argumentação, notícias/debates, «consider că», «din punctul meu de vedere» | 8–10 | 4 |
| C1.1 | nuance, humor e ironia, registro coloquial vs. formal, mal-entendidos de tom | 8–10 | 4–5 |
| C1.2 | textos especializados (história, ciência, economia) com vocabulário abstrato | 8–10 | 4–5 |
| C2 | estilo literário, provérbios e ditados, regionalismos (moldovenesc, ardelenesc, bănățean) explicados, perfeito simples literário (plecă, zise) | 8–10 | 5 |

A escolha `wrong` deve depender de um detalhe do texto que só quem entendeu a gramática-alvo acerta (ex.: em B1.2, entender que o imperfeito descreve um hábito passado).
Varie cenários pela Romênia (Iași, Timișoara, Constanța, Delta do Danúbio, Sibiu, Suceava/Bucovina, Oradea, Craiova, Transfăgărășan, Sighișoara…) e temas (trabalho, amor, esporte, ciência, festas, burocracia, natureza, história, gastronomia).

## Entrega
Escreva SOMENTE os objetos (separados por vírgula, sem import/export, sem array externo) no arquivo que te indicarem. Depois confira à mão as regras de estrutura e revise o romeno. Responda com 1 linha por história (id, nível, título, nº de finais) e dúvidas culturais relevantes, bem curto.
