import { useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type JogosPrefs, type MancalaSemente, type MancalaTabua, type QuoridorParede, type VelhaEstilo, type XiangqiPecas } from '@/services/jogos-prefs';
import { useLojaJogos } from '@/services/loja-jogos';
import { CORES_CLASSICAS, CORES_EXERCITO, CORES_PARA_EXERCITO, corBloqueada, EXERCITOS, type CoresLado } from '@/data/exercitos-jogos';
import { ITENS_LOJA } from '@/data/loja-jogos';
import { opcoesDoJogo } from '@/data/opcoes-jogos';
import { GRADES_LIGUE4, PAR_PADRAO, PARES_DE_CORES } from '@/data/pares-cores';
import { TEMAS_JOGO, type TemaJogoId } from '@/data/temas-jogos';
import { PecaXadrez } from '@/components/ChessBoard';
import { AmostraTema, LojaJogos, PreviaItem } from './LojaJogos';
import { SEMENTES_MANCALA, Sementes, TABUAS_MANCALA } from './mancala';
import { PAREDES_QUORIDOR } from '@/data/quoridor-paredes';
import { MarcaVelha } from '@/components/VelhaBoard';
import { ESTILOS_XIANGQI, PecaXiangqi } from '@/components/XiangqiBoard';

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

/** Uma cor para escolher: a bolinha com o preenchimento e o contorno; bloqueada, fica apagada e riscada. */
function Bolinha({ nome, cores, ativo, bloqueada = false, natural = false, onPress }: { nome: string; cores: CoresLado; ativo: boolean; bloqueada?: boolean; natural?: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Cor ${nome}`}
      accessibilityState={{ selected: ativo, disabled: bloqueada }}
      disabled={bloqueada}
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: cores.fundo,
        borderWidth: ativo ? 4 : 2,
        borderColor: ativo ? '#2563EB' : cores.contorno,
        opacity: bloqueada ? 0.25 : 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {natural && <Text style={{ fontSize: 13, fontWeight: '900', color: cores.contorno }}>★</Text>}
      {bloqueada && <View style={{ position: 'absolute', width: 40, height: 3, backgroundColor: '#DC2626', transform: [{ rotate: '-45deg' }] }} />}
    </Pressable>
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
  const opcoes = opcoesDoJogo(jogo);
  // nos jogos de peça redonda sem exército, o exército entra se o jogador ligar a opção
  const usaExercito = !jogo || ['xadrez', 'damas', 'hnefatafl'].includes(jogo) || (!!opcoes.coresClassicas && prefs.exercitoEmTodos);

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
            const n = lado === 'w' ? 1 : 2;
            const exercito = lado === 'w' ? prefs.exercito1 : prefs.exercito2;
            const doEx = CORES_EXERCITO[exercito];
            // peças clássicas: a paleta do lado (claras para o 1, escuras para o 2)
            if (!doEx) {
              const k = lado === 'w' ? 'cor1' : 'cor2';
              return (
                <Secao key={lado} titulo={`Cor das peças clássicas do jogador ${n}`}>
                  {CORES_CLASSICAS[lado].map((c) => (
                    <Bolinha key={c.id} nome={c.nome} cores={c} ativo={prefs[k] === c.id} onPress={() => mudar({ [k]: c.id } as Partial<JogosPrefs>)} />
                  ))}
                </Secao>
              );
            }
            // exército: a cor natural dele (o padrão) ou qualquer cor da paleta; com o mesmo exército
            // dos dois lados, as cores parecidas com a do outro jogador ficam bloqueadas (pedido do dono, 11/10/2026)
            const k = lado === 'w' ? 'corEx1' : 'corEx2';
            const mesmo = prefs.exercito1 === prefs.exercito2;
            const natural = mesmo ? doEx[lado] : doEx.w;
            return (
              <Secao key={lado} titulo={`Cor das peças do jogador ${n} (${EXERCITOS.find((e) => e.id === exercito)?.nome ?? exercito}; ★ = a cor do exército)`}>
                {[{ id: 'natural', nome: 'Cor do exército', ...natural }, ...CORES_PARA_EXERCITO].map((c) => {
                  const bloqueada = corBloqueada(prefs, lado, c.id);
                  return (
                    <Bolinha
                      key={c.id}
                      nome={bloqueada ? `${c.nome} (parecida com a do outro jogador)` : c.nome}
                      cores={c}
                      ativo={prefs[k] === c.id}
                      bloqueada={bloqueada}
                      natural={c.id === 'natural'}
                      onPress={() => mudar({ [k]: c.id } as Partial<JogosPrefs>)}
                    />
                  );
                })}
              </Secao>
            );
          })}
          {prefs.exercito1 === prefs.exercito2 && CORES_EXERCITO[prefs.exercito1] && (
            <Text className="text-xs text-slate-600 dark:text-slate-400">Com o mesmo exército dos dois lados, as cores parecidas com a do outro jogador ficam bloqueadas.</Text>
          )}
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

      {opcoes.coresClassicas && (
        <Secao titulo="Exército">
          <Opcao
            rotulo={`${prefs.exercitoEmTodos ? '✓ ' : ''}Usar o exército escolhido também neste jogo`}
            ativo={prefs.exercitoEmTodos}
            onPress={() => mudar({ exercitoEmTodos: !prefs.exercitoEmTodos })}
          />
        </Secao>
      )}
      {opcoes.coresClassicas &&
        !prefs.exercitoEmTodos &&
        (['w', 'b'] as const).map((lado) => {
          const k = lado === 'w' ? 'cor1' : 'cor2';
          return (
            <Secao key={lado} titulo={`Cor das peças do jogador ${lado === 'w' ? 1 : 2}`}>
              {CORES_CLASSICAS[lado].map((c) => (
                <Bolinha key={c.id} nome={c.nome} cores={c} ativo={prefs[k] === c.id} onPress={() => mudar({ [k]: c.id } as Partial<JogosPrefs>)} />
              ))}
            </Secao>
          );
        })}

      {opcoes.par && jogo && (
        <>
          <Secao titulo="Cores das peças">
            {PARES_DE_CORES.map((p) => {
              const ativo = (prefs.pares[jogo] ?? PAR_PADRAO[jogo]) === p.id;
              return (
                <Escolha key={p.id} ativo={ativo} rotulo={`${p.nome}${PAR_PADRAO[jogo] === p.id ? ' ★' : ''}`} onPress={() => mudar({ pares: { ...prefs.pares, [jogo]: p.id } })}>
                  <View style={{ width: 54, height: 40, borderRadius: 8, backgroundColor: TEMAS_JOGO[prefs.tema].superficie, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    {p.cores.map((c) => (
                      <View key={c} style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: c, borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.55)' }} />
                    ))}
                  </View>
                </Escolha>
              );
            })}
          </Secao>
          {jogo === 'conecta4' && (
            <Secao titulo="Grade do Ligue 4">
              {GRADES_LIGUE4.map((g) => (
                <Escolha key={g.id} ativo={prefs.ligue4Grade === g.id} rotulo={g.nome} onPress={() => mudar({ ligue4Grade: g.id })}>
                  <View style={{ width: 54, height: 40, borderRadius: 8, backgroundColor: g.cor, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 3, padding: 4 }}>
                    {[0, 1, 2, 3, 4, 5].map((k) => (
                      <View key={k} style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#F8FAFC' }} />
                    ))}
                  </View>
                </Escolha>
              ))}
            </Secao>
          )}
        </>
      )}

      {opcoes.paredes && (
        <Secao titulo="Paredes">
          {(Object.keys(PAREDES_QUORIDOR) as QuoridorParede[]).map((id) => {
            const pa = PAREDES_QUORIDOR[id];
            return (
              <Escolha key={id} ativo={prefs.quoridorParede === id} rotulo={pa.nome} onPress={() => mudar({ quoridorParede: id })}>
                <View style={{ width: 54, height: 40, borderRadius: 8, backgroundColor: TEMAS_JOGO[prefs.tema].superficie, alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ width: 42, height: 9, borderRadius: pa.raio, backgroundColor: pa.cor, borderWidth: 1.5, borderColor: pa.borda ?? pa.contorno, borderStyle: pa.tracejada ? 'dashed' : 'solid' }} />
                </View>
              </Escolha>
            );
          })}
        </Secao>
      )}

      {opcoes.marcas && (
        <Secao titulo="Jeito do X e do O">
          {(['classico', 'giz', 'pincel', 'neon'] as VelhaEstilo[]).map((id) => (
            <Escolha key={id} ativo={prefs.velhaEstilo === id} rotulo={{ classico: 'Clássico', giz: 'Giz', pincel: 'Pincel', neon: 'Néon' }[id]} onPress={() => mudar({ velhaEstilo: id })}>
              <View style={{ width: 54, height: 40, borderRadius: 8, backgroundColor: id === 'giz' ? '#1F3A2E' : id === 'neon' ? '#0B1020' : TEMAS_JOGO[prefs.tema].claro, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MarcaVelha m="x" tamanho={22} estilo={id} />
                <MarcaVelha m="o" tamanho={22} estilo={id} />
              </View>
            </Escolha>
          ))}
        </Secao>
      )}

      {(opcoes.mancala || !jogo) && (
        <>
          <Secao titulo="Tabuleiro das mancalas (oware e Kalah)">
            {(Object.keys(TABUAS_MANCALA) as MancalaTabua[]).map((id) => {
              const t = TABUAS_MANCALA[id];
              return (
                <Escolha key={id} ativo={prefs.mancalaTabua === id} rotulo={t.nome} onPress={() => mudar({ mancalaTabua: id })}>
                  <View style={{ width: 54, height: 40, borderRadius: 10, backgroundColor: t.tabua, borderWidth: 2, borderColor: t.borda, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    {[0, 1].map((k) => (
                      <View key={k} style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: t.cova, borderWidth: 1, borderColor: t.borda }} />
                    ))}
                  </View>
                </Escolha>
              );
            })}
          </Secao>
          <Secao titulo="Sementes">
            {(Object.keys(SEMENTES_MANCALA) as MancalaSemente[]).map((id) => (
              <Escolha key={id} ativo={prefs.mancalaSemente === id} rotulo={SEMENTES_MANCALA[id].nome} onPress={() => mudar({ mancalaSemente: id })}>
                <View style={{ width: 54, height: 54, borderRadius: 27, backgroundColor: TABUAS_MANCALA[prefs.mancalaTabua].cova, alignItems: 'center', justifyContent: 'center' }}>
                  <Sementes n={5} r={24} tipo={id} />
                </View>
              </Escolha>
            ))}
          </Secao>
        </>
      )}

      {(opcoes.xiangqi || !jogo) && (
        <Secao titulo="Peças do xadrez chinês">
          {(Object.keys(ESTILOS_XIANGQI) as XiangqiPecas[]).map((id) => (
            <Escolha key={id} ativo={prefs.xiangqiPecas === id} rotulo={ESTILOS_XIANGQI[id].nome} onPress={() => mudar({ xiangqiPecas: id })}>
              <View style={{ width: 54, height: 54, borderRadius: 8, backgroundColor: TEMAS_JOGO[prefs.tema].superficie, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <PecaXiangqi p={{ cor: 'r', tipo: 'h' }} tamanho={24} estilo={id} />
                <PecaXiangqi p={{ cor: 'b', tipo: 'r' }} tamanho={24} estilo={id} />
              </View>
            </Escolha>
          ))}
        </Secao>
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
