import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle, SpeakButton } from '@/components/ui';
import { BioCabecalho } from '@/components/biologia/BioCabecalho';
import { LinuAmigo } from '@/components/LinuAmigo';
import { amigosDaBiologia, bichosDosPaises, CLASSE_DO_AMIGO, NOME_CLASSE, PALAVRA_DO_AMIGO, PAISES_COM_BICHOS, SOBRE_CLASSE, type ClasseBio } from '@/data/biologia/seres';
import { HOMELANDS } from '@/data/fauna-musica';
import { FOTOS_ALBUM } from '@/data/fotos-album';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { useApp } from '@/services/app-state';
import { HScroll } from '@/components/HScroll';
import { NoIdioma } from '@/components/biologia/NoIdioma';
import { ArvoreDaVida } from '@/components/biologia/ArvoreDaVida';
import { insignias, useListaDaVida } from '@/services/lista-da-vida';

/** O botão “Já vi ao vivo” da lista da vida. */
function JaVi({ visto, onPress }: { visto: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: visto }}
      onPress={onPress}
      className={`self-start rounded-full border px-2.5 py-0.5 ${visto ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 dark:border-slate-600'}`}
    >
      <Text className={`text-xs font-bold ${visto ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>{visto ? '✓ Já vi ao vivo' : 'Já vi ao vivo?'}</Text>
    </Pressable>
  );
}

const fotoDe = (nome: string) => FOTOS_ALBUM[nome.normalize('NFC').replace(/́/g, '').toLowerCase().trim()];
const paisDe = (iso: string) => WORLD.find((c) => c.iso === iso);

/**
 * Seres vivos: o catálogo da Biologia. Os bichos do frio (os amigos do Linu, com a classe e o nome
 * científico) e os bichos de cada país do álbum, com foto de verdade, o nome no idioma do país (com
 * áudio, quando é o idioma que você estuda) e o fato. Começa pelos países do idioma estudado.
 */
export default function SeresVivosScreen() {
  const { pack, db } = useApp();
  const { vistos, alternar } = useListaDaVida(db);
  const doIdioma = HOMELANDS[pack.code] ?? [];
  const [pais, setPais] = useState<string>(doIdioma[0] ?? PAISES_COM_BICHOS[0]!);
  const [classe, setClasse] = useState<ClasseBio | null>(null);
  const amigos = amigosDaBiologia().filter((a) => !classe || CLASSE_DO_AMIGO[a.id] === classe);
  const bichos = bichosDosPaises([pais]);
  const ordemPaises = [...doIdioma, ...PAISES_COM_BICHOS.filter((p) => !doIdioma.includes(p)).sort((a, b) => (paisDe(a)?.name ?? a).localeCompare(paisDe(b)?.name ?? b))];
  const falaAqui = doIdioma.includes(pais);

  return (
    <Screen>
      <BioCabecalho titulo="Seres vivos" subtitulo="O catálogo dos bichos do app: cada um com a classe, o nome científico e o nome no idioma que você estuda." />

      <SectionTitle>Minha lista da vida</SectionTitle>
      <Card className="gap-2">
        <Text className="text-sm text-slate-700 dark:text-slate-300">
          Viu um destes bichos ao vivo (no zoo, no aquário, na natureza)? Marque “Já vi ao vivo” no cartão dele. Você já viu <Text className="font-extrabold">{vistos.length}</Text>.
        </Text>
        <View className="flex-row flex-wrap gap-1.5">
          {insignias(vistos, CLASSE_DO_AMIGO).map((i) => (
            <View key={i.nome} style={{ opacity: i.tem ? 1 : 0.4 }} className={`w-[31%] items-center rounded-xl p-1.5 ${i.tem ? 'bg-amber-50 dark:bg-amber-950/50' : 'bg-slate-100 dark:bg-slate-800'}`}>
              <Text className="text-2xl">{i.tem ? i.emoji : '🔒'}</Text>
              <Text className="text-center text-[11px] font-bold text-slate-800 dark:text-slate-100">{i.nome}</Text>
              <Text className="text-center text-[10px] text-slate-600 dark:text-slate-400">{i.como}</Text>
            </View>
          ))}
        </View>
      </Card>

      <SectionTitle>Os bichos do frio</SectionTitle>
      <View className="flex-row flex-wrap gap-1.5">
        {([null, 'ave', 'mamifero', 'crustaceo'] as const).map((c) => (
          <Pressable
            key={c ?? 'todos'}
            accessibilityRole="radio"
            accessibilityState={{ selected: classe === c }}
            onPress={() => setClasse(c)}
            className={`rounded-full border-2 px-3 py-1 ${classe === c ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{c ? `${NOME_CLASSE[c]}s` : 'Todos'}</Text>
          </Pressable>
        ))}
      </View>
      {classe && <Text className="mt-1 text-xs text-slate-600 dark:text-slate-400">{NOME_CLASSE[classe]}: {SOBRE_CLASSE[classe]}</Text>}
      <View className="mt-2 gap-2">
        {amigos.map((a) => (
          <Card key={a.id} className="flex-row gap-3">
            <LinuAmigo id={a.id} size={64} />
            <View className="flex-1 gap-0.5">
              <Text className="text-base font-extrabold text-slate-900 dark:text-white">{a.species}</Text>
              <Text className="text-sm italic text-slate-600 dark:text-slate-400">{a.scientific}</Text>
              <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {NOME_CLASSE[CLASSE_DO_AMIGO[a.id]!]} · {a.size}
              </Text>
              <Text className="text-xs text-slate-600 dark:text-slate-400">{a.home}.</Text>
              <Text className="text-sm text-slate-700 dark:text-slate-300">{a.facts[0]}</Text>
              {PALAVRA_DO_AMIGO[a.id] && <NoIdioma pt={PALAVRA_DO_AMIGO[a.id]!} />}
              <JaVi visto={vistos.includes(`a:${a.id}`)} onPress={() => alternar(`a:${a.id}`)} />
            </View>
          </Card>
        ))}
      </View>

      <SectionTitle>A árvore da vida</SectionTitle>
      <ArvoreDaVida />

      <SectionTitle>Os bichos de cada país</SectionTitle>
      <Text className="mb-2 text-xs text-slate-600 dark:text-slate-400">
        {doIdioma.length ? `Primeiro, os países onde se fala ${pack.name.toLowerCase()}.` : 'Escolha um país.'} O nome de cada bicho vem também na língua do país.
      </Text>
      <HScroll>
        <View className="flex-row gap-1.5 pb-1">
          {ordemPaises.map((iso) => {
            const c = paisDe(iso);
            return (
              <Pressable
                key={iso}
                accessibilityRole="radio"
                accessibilityState={{ selected: pais === iso }}
                onPress={() => setPais(iso)}
                className={`rounded-full border-2 px-3 py-1 ${pais === iso ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  {c ? `${flagOf(c.iso2)} ${c.name}` : iso}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </HScroll>
      <View className="mt-2 gap-2">
        {bichos.map((b) => {
          const foto = fotoDe(b.nome);
          return (
            <Card key={b.nome} className="flex-row gap-3">
              {foto ? (
                <Image source={foto.src} style={{ width: 72, height: 72, borderRadius: 12 }} accessibilityLabel={b.nome} />
              ) : (
                <View style={{ width: 72, height: 72 }} className="items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Text className="text-xs text-slate-500">{b.nome}</Text>
                </View>
              )}
              <View className="flex-1 gap-0.5">
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{b.nome}</Text>
                {b.local && (
                  <View className="flex-row items-center gap-1">
                    <Text className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{b.local}</Text>
                    {falaAqui && pack.speechLocale && <SpeakButton text={b.local} locale={pack.speechLocale} size={14} />}
                  </View>
                )}
                <Text className="text-sm text-slate-700 dark:text-slate-300">{b.fato}</Text>
                <JaVi visto={vistos.includes(`p:${b.iso}:${b.nome}`)} onPress={() => alternar(`p:${b.iso}:${b.nome}`)} />
                {foto && (
                  <Text className="text-[10px] text-slate-500 dark:text-slate-500">
                    Foto: {foto.author}, {foto.license}
                  </Text>
                )}
              </View>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
