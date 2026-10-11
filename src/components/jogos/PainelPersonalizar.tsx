import { useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type JogosPrefs } from '@/services/jogos-prefs';
import { useLojaJogos } from '@/services/loja-jogos';
import { CORES_CLASSICAS, EXERCITOS } from '@/data/exercitos-jogos';
import { ITENS_LOJA } from '@/data/loja-jogos';
import { opcoesDoJogo } from '@/data/opcoes-jogos';
import { TEMAS_JOGO, type TemaJogoId } from '@/data/temas-jogos';
import { PecaXadrez } from '@/components/ChessBoard';
import { AmostraTema, LojaJogos, PreviaItem } from './LojaJogos';

const GRATIS: TemaJogoId[] = ['madeira', 'verde', 'oceano', 'gelo', 'noite', 'contraste'];

function Opcao({ rotulo, ativo, onPress }: { rotulo: string; ativo: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      className={`rounded-full border-2 px-3 py-1.5 ${ativo ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text className={`text-sm font-bold ${ativo ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{rotulo}</Text>
    </Pressable>
  );
}

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View className="gap-1.5">
      <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-600 dark:text-slate-400">{titulo}</Text>
      <View className="flex-row flex-wrap gap-2">{children}</View>
    </View>
  );
}

/** Escolha com prévia: a borda azul marca o escolhido. */
function Escolha({ ativo, rotulo, onPress, children }: { ativo: boolean; rotulo: string; onPress: () => void; children: ReactNode }) {
  return (
    <Pressable accessibilityLabel={rotulo} accessibilityState={{ selected: ativo }} onPress={onPress} className="items-center gap-1">
      <View style={{ borderRadius: 11, borderWidth: 3, borderColor: ativo ? '#2563EB' : 'transparent' }}>{children}</View>
      <Text className="max-w-[72px] text-center text-[11px] font-bold text-slate-700 dark:text-slate-200">{rotulo}</Text>
    </Pressable>
  );
}

/**
 * Personalização dos jogos: o tabuleiro, o exército de cada jogador, as peças especiais de cada
 * jogo, as ajudas e o adversário. Mostra o que é grátis e o que já foi comprado; o resto está na
 * loja (o botão abre a loja aqui mesmo). `jogo` filtra o que só faz sentido para aquele jogo.
 */
export function PainelPersonalizar({ jogo, linu }: { jogo?: string; linu?: boolean }) {
  const [prefs, mudar] = useJogosPrefs();
  const loja = useLojaJogos();
  const [verLoja, setVerLoja] = useState(false);

  const temas = [...GRATIS, ...(Object.keys(TEMAS_JOGO) as TemaJogoId[]).filter((id) => !GRATIS.includes(id) && loja.tem.has(`tabuleiro:${id}`))];
  const exercitos = ['classico', ...EXERCITOS.filter((e) => e.preco === 0 || loja.tem.has(`jogador:${e.id}`)).map((e) => e.id)];
  const skins = ITENS_LOJA.filter((i) => i.tipo === 'jogo' && loja.tem.has(i.id) && (!jogo || i.skin?.jogo === jogo));
  const usaExercito = !jogo || ['xadrez', 'damas', 'hnefatafl'].includes(jogo);
  const opcoes = opcoesDoJogo(jogo);

  const liga = (k: keyof JogosPrefs, rotulo: string) => (
    <Opcao key={k} rotulo={`${prefs[k] ? '✓ ' : ''}${rotulo}`} ativo={!!prefs[k]} onPress={() => mudar({ [k]: !prefs[k] } as Partial<JogosPrefs>)} />
  );
  const alternarSkin = (id: string, j: string) => {
    const semOutrasDoJogo = prefs.skins.filter((s) => ITENS_LOJA.find((i) => i.id === s)?.skin?.jogo !== j);
    mudar({ skins: prefs.skins.includes(id) ? semOutrasDoJogo : [...semOutrasDoJogo, id] });
  };

  const seletorExercito = (k: 'exercito1' | 'exercito2', cor: 'w' | 'b') =>
    exercitos.map((id) => {
      const e = EXERCITOS.find((x) => x.id === id);
      return (
        <Escolha key={`${k}-${id}`} ativo={prefs[k] === id} rotulo={e?.nome ?? 'Clássico'} onPress={() => mudar({ [k]: id } as Partial<JogosPrefs>)}>
          <View
            style={{
              width: 54,
              height: 54,
              borderRadius: 8,
              backgroundColor: TEMAS_JOGO[prefs.tema].claro,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PecaXadrez cor={cor} tipo="n" tamanho={26} estilo={prefs.pecas} exercito={id} />
            <PecaXadrez cor={cor} tipo="k" tamanho={26} estilo={prefs.pecas} exercito={id} />
          </View>
        </Escolha>
      );
    });

  return (
    <View className="gap-4">
      {opcoes.tabuleiro && (
        <Secao titulo="Tabuleiro">
          {temas.map((id) => (
            <Escolha key={id} ativo={prefs.tema === id} rotulo={TEMAS_JOGO[id].nome} onPress={() => mudar({ tema: id })}>
              <AmostraTema t={TEMAS_JOGO[id]} />
            </Escolha>
          ))}
        </Secao>
      )}

      {usaExercito && (
        <>
          <Secao titulo="Exército do jogador 1 (brancas, claras)">{seletorExercito('exercito1', 'w')}</Secao>
          <Secao titulo="Exército do jogador 2 (pretas, escuras)">{seletorExercito('exercito2', 'b')}</Secao>
          {(['w', 'b'] as const).map((lado) => {
            const k = lado === 'w' ? 'cor1' : 'cor2';
            return (
              <Secao key={lado} titulo={`Cor das peças clássicas do jogador ${lado === 'w' ? 1 : 2}`}>
                {CORES_CLASSICAS[lado].map((c) => (
                  <Pressable
                    key={c.id}
                    accessibilityLabel={`Cor ${c.nome}`}
                    accessibilityState={{ selected: prefs[k] === c.id }}
                    onPress={() => mudar({ [k]: c.id } as Partial<JogosPrefs>)}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: c.fundo,
                      borderWidth: prefs[k] === c.id ? 4 : 2,
                      borderColor: prefs[k] === c.id ? '#2563EB' : c.contorno,
                    }}
                  />
                ))}
              </Secao>
            );
          })}
          {(!jogo || jogo === 'xadrez') && (
            <Secao titulo="Peças clássicas do xadrez">
              {(['desenho', 'simbolos'] as const).map((e) => (
                <Escolha key={e} ativo={prefs.pecas === e} rotulo={e === 'desenho' ? 'Desenhadas' : 'Símbolos'} onPress={() => mudar({ pecas: e })}>
                  <View
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 8,
                      backgroundColor: TEMAS_JOGO[prefs.tema].claro,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PecaXadrez cor="w" tipo="n" tamanho={26} estilo={e} />
                    <PecaXadrez cor="b" tipo="q" tamanho={26} estilo={e} />
                  </View>
                </Escolha>
              ))}
            </Secao>
          )}
        </>
      )}

      {skins.length > 0 && (
        <Secao titulo="Peças especiais do jogo">
          {skins.map((i) => (
            <Escolha key={i.id} ativo={prefs.skins.includes(i.id)} rotulo={i.nome} onPress={() => alternarSkin(i.id, i.skin!.jogo)}>
              <PreviaItem item={i} />
            </Escolha>
          ))}
        </Secao>
      )}

      {linu !== false && (
        <Secao titulo="Adversário">
          <Opcao rotulo="2 jogadores no aparelho" ativo={prefs.adversario === 'humano'} onPress={() => mudar({ adversario: 'humano' })} />
          <Opcao rotulo="Contra o Linu" ativo={prefs.adversario === 'linu'} onPress={() => mudar({ adversario: 'linu' })} />
        </Secao>
      )}
      {linu !== false && prefs.adversario === 'linu' && (
        <Secao titulo="Nível do Linu">
          <Opcao rotulo="Fácil" ativo={prefs.nivel === 'facil'} onPress={() => mudar({ nivel: 'facil' })} />
          <Opcao rotulo="Médio" ativo={prefs.nivel === 'medio'} onPress={() => mudar({ nivel: 'medio' })} />
          <Opcao rotulo="Difícil" ativo={prefs.nivel === 'dificil'} onPress={() => mudar({ nivel: 'dificil' })} />
        </Secao>
      )}

      <Secao titulo="Ajudas e aparência">
        {opcoes.dicas && liga('dicas', 'Mostrar lances possíveis')}
        {opcoes.ultimoLance && liga('ultimoLance', 'Marcar o último lance')}
        {opcoes.coordenadas && liga('coordenadas', 'Coordenadas')}
        {liga('animacoes', 'Animações')}
        {opcoes.tabuleiro && liga('clima', 'Clima do tema (pétalas, chuva…)')}
        {liga('sons', 'Sons do tabuleiro')}
        {(!jogo || jogo === 'xadrez') && liga('girar', 'Girar o xadrez a cada vez')}
      </Secao>

      <Pressable
        accessibilityRole="button"
        onPress={() => setVerLoja((v) => !v)}
        className="flex-row items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3"
      >
        <Text className="text-sm font-extrabold text-white">
          {verLoja ? 'Fechar a loja' : `Mais tabuleiros, exércitos e coleções na loja · 🦐 ${loja.krill}`}
        </Text>
      </Pressable>
      {verLoja && <LojaJogos />}
    </View>
  );
}
