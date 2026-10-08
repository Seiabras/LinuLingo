import { useState } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { Card, Chip, Collapsible, InfoLabel, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { KNOWLEDGE_GAMES, type KnowledgeGame } from '@/data/jogos-conhecimento';

/** Tabuleiro desenhado por código (nunca emoji) com a posição inicial de damas: 2 fileiras cheias de cada lado, só nas casas escuras. */
function CheckerBoard({ board }: { board: NonNullable<KnowledgeGame['board']> }) {
  const { size, rows, dark, light, a, b } = board;
  const cell = 28;
  const w = size * cell;
  const h = rows * cell;
  const cells: { x: number; y: number; dark: boolean }[] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < size; c++) cells.push({ x: c * cell, y: r * cell, dark: (r + c) % 2 === 1 });
  const pecaLinhas = Math.floor((rows - 2) / 2);
  return (
    <View className="items-center overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600" style={{ width: w, height: h }}>
      <Svg width={w} height={h}>
        {cells.map((cl, i) => (
          <Rect key={i} x={cl.x} y={cl.y} width={cell} height={cell} fill={cl.dark ? dark : light} />
        ))}
        {cells
          .filter((cl) => cl.dark && cl.y / cell < pecaLinhas)
          .map((cl, i) => <Circle key={`A${i}`} cx={cl.x + cell / 2} cy={cl.y + cell / 2} r={cell * 0.38} fill={a} stroke={light} strokeWidth={1.5} />)}
        {cells
          .filter((cl) => cl.dark && cl.y / cell >= rows - pecaLinhas)
          .map((cl, i) => <Circle key={`B${i}`} cx={cl.x + cell / 2} cy={cl.y + cell / 2} r={cell * 0.38} fill={b} stroke={dark} strokeWidth={1.5} />)}
      </Svg>
    </View>
  );
}

function GameCard({ game }: { game: KnowledgeGame }) {
  const [open, setOpen] = useState<string | null>(null);
  if (game.status === 'em breve') {
    return (
      <Card className="flex-row items-center gap-3 opacity-70">
        <Text className="text-2xl">{game.emoji}</Text>
        <View className="flex-1">
          <Text className="font-bold text-slate-900 dark:text-white">{game.name}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">Em breve</Text>
        </View>
      </Card>
    );
  }
  return (
    <Card className="gap-3">
      <View className="flex-row flex-wrap items-center gap-2">
        <Text className="text-2xl">{game.emoji}</Text>
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{game.name}</Text>
        <Chip label="pronto" tone="green" />
      </View>
      {game.board && <CheckerBoard board={game.board} />}
      <Text className="text-xs text-slate-500 dark:text-slate-400">
        🕰️ {game.year} · 📍 {game.where}
      </Text>
      <Text className="text-sm leading-6 text-slate-700 dark:text-slate-300">{game.about}</Text>
      {game.rules && (
        <Collapsible title="Como se joga" open={open === 'regras'} onToggle={() => setOpen(open === 'regras' ? null : 'regras')}>
          <View className="gap-2 pt-1">
            {game.rules.map((r) => (
              <View key={r.title}>
                <Text className="text-sm font-bold text-slate-900 dark:text-white">{r.title}</Text>
                <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{r.text}</Text>
              </View>
            ))}
          </View>
        </Collapsible>
      )}
      {game.variants && game.variants.length > 0 && (
        <Collapsible title="Variantes" count={game.variants.length} open={open === 'variantes'} onToggle={() => setOpen(open === 'variantes' ? null : 'variantes')}>
          <View className="gap-2 pt-1">
            {game.variants.map((v) => (
              <View key={v.name} className="rounded-xl bg-amber-50 p-2.5 dark:bg-amber-950/40">
                <Text className="text-sm font-bold text-slate-900 dark:text-white">{v.name}</Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">📍 {v.where}</Text>
                <Text className="mt-1 text-sm leading-5 text-slate-700 dark:text-slate-300">{v.text}</Text>
              </View>
            ))}
          </View>
        </Collapsible>
      )}
    </Card>
  );
}

/**
 * Aba "🎲 Jogos do conhecimento" da Cultura: jogos de tabuleiro/estratégia fora do escopo de
 * idiomas — regras e história reais, como todo o resto do app. Lista inicial (pedido do Matheus,
 * 05-07/10/2026): damas, xadrez, quoridor, octi e abalone; a maioria ainda "em breve".
 */
export function KnowledgeGamesTab() {
  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">Jogos de tabuleiro e estratégia, de fora do mundo dos idiomas — mas com a mesma regra do app: história e regras sempre reais.</SpeechBubble>
      </View>
      <InfoLabel
        label={<Text className="text-sm font-bold text-slate-800 dark:text-slate-100">{KNOWLEDGE_GAMES.filter((g) => g.status === 'pronto').length} de {KNOWLEDGE_GAMES.length} prontos</Text>}
        info="Lista inicial, pode crescer com o tempo: damas, xadrez, quoridor (bloqueio), octi (octógono fantástico) e abalone."
      />
      <View className="gap-2">
        {KNOWLEDGE_GAMES.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </View>
    </View>
  );
}
