import { useId, type ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';
import { AMIGOS_LINU } from '@/data/amigos-linu';

const INK = '#1F2A44';

/**
 * Os amigos do Linu, desenhados no mesmo quadro (120 × 140) e no mesmo estilo «meio 3D» dele:
 * degradês com a luz vindo de cima, à esquerda. Desenhos parados (sem animação).
 */
export function LinuAmigo({ id, size = 96 }: { id: string; size?: number }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const amigo = AMIGOS_LINU.find((a) => a.id === id);
  const Art = ART[id];
  if (!Art) return null;
  return (
    <View style={{ width: size, height: size * (140 / 120) }} accessibilityRole="image" accessibilityLabel={amigo ? `${amigo.name}, ${amigo.species.toLowerCase()}` : id}>
      <Svg width="100%" height="100%" viewBox="0 0 120 140">
        <Art g={(name) => `url(#${name}-${uid})`} uid={uid} />
      </Svg>
    </View>
  );
}

type ArtProps = { g: (name: string) => string; uid: string };

/** Degradê radial com luz no alto à esquerda: claro → meio → escuro. */
function Rad({ id, uid, stops }: { id: string; uid: string; stops: [string, string, string] }) {
  return (
    <RadialGradient id={`${id}-${uid}`} cx="38%" cy="26%" r="85%">
      <Stop offset="0" stopColor={stops[0]} />
      <Stop offset="0.5" stopColor={stops[1]} />
      <Stop offset="1" stopColor={stops[2]} />
    </RadialGradient>
  );
}

const Shadow = ({ rx = 32 }: { rx?: number }) => <Ellipse cx="60" cy="135" rx={rx} ry="4.5" fill="#64748B" opacity={0.3} />;

/** Olho aberto com dois reflexos de luz. */
function Eye({ x, y, r = 5, iris }: { x: number; y: number; r?: number; iris?: string }) {
  return (
    <G>
      {iris && <Circle cx={x} cy={y} r={r * 1.25} fill={iris} />}
      <Circle cx={x} cy={y} r={r} fill={INK} />
      <Circle cx={x + r * 0.35} cy={y - r * 0.4} r={r * 0.38} fill="#fff" />
      <Circle cx={x - r * 0.35} cy={y + r * 0.4} r={r * 0.17} fill="#fff" opacity={0.8} />
    </G>
  );
}

const Cheeks = ({ y = 64, dx = 22 }: { y?: number; dx?: number }) => (
  <G>
    <Circle cx={60 - dx} cy={y} r="5" fill="#FB7185" opacity={0.3} />
    <Circle cx={60 + dx} cy={y} r="5" fill="#FB7185" opacity={0.3} />
  </G>
);

// ───────────────────────── pinguins ─────────────────────────

/**
 * O corpo comum dos pinguins de rosto escuro: corpo e cabeça escuros, barriga branca começando
 * abaixo do bico, nadadeiras e pés. `face` desenha o que muda de uma espécie para outra.
 */
function Penguin({ g, uid, dark, feet, belly = ['#FFFFFF', '#F1F5F9', '#C9D3E1'], face, chest }: ArtProps & { dark: [string, string, string]; feet: [string, string]; belly?: [string, string, string]; face: ReactNode; chest?: ReactNode }) {
  return (
    <G>
      <Defs>
        <Rad id="corpo" uid={uid} stops={dark} />
        <Rad id="barriga" uid={uid} stops={belly} />
        <RadialGradient id={`pe-${uid}`} cx="40%" cy="30%" r="80%">
          <Stop offset="0" stopColor={feet[0]} />
          <Stop offset="1" stopColor={feet[1]} />
        </RadialGradient>
      </Defs>
      <Shadow />
      <Ellipse cx="46" cy="132" rx="11" ry="5" fill={g('pe')} />
      <Ellipse cx="74" cy="132" rx="11" ry="5" fill={g('pe')} />
      <Path d="M24 76 Q6 100 18 120 Q30 104 30 82 Z" fill={g('corpo')} />
      <Path d="M96 76 Q114 100 102 120 Q90 104 90 82 Z" fill={g('corpo')} />
      <Ellipse cx="60" cy="84" rx="40" ry="48" fill={g('corpo')} />
      <Circle cx="60" cy="50" r="33" fill={g('corpo')} />
      <Path d="M32 92 Q33 74 60 72 Q87 74 88 92 Q90 120 60 130 Q30 120 32 92 Z" fill={g('barriga')} />
      {chest}
      <Ellipse cx="45" cy="28" rx="10" ry="4.5" fill="#FFFFFF" opacity={0.18} transform="rotate(-28 45 28)" />
      {face}
    </G>
  );
}

/** Tobias, o pinguim-imperador: manchas amarelas atrás da cabeça e bico longo com uma faixa rosa-alaranjada. */
function Imperador(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#4B5563', '#1F2937', '#0B1020']}
      feet={['#4B5563', '#111827']}
      chest={<Ellipse cx="60" cy="80" rx="21" ry="7.5" fill="#FDE68A" opacity={0.75} />}
      face={
        <G>
          <Path d="M28 58 Q24 72 36 80 Q40 70 36 60 Z" fill="#FBBF24" />
          <Path d="M92 58 Q96 72 84 80 Q80 70 84 60 Z" fill="#FBBF24" />
          <Eye x={47} y={50} />
          <Eye x={73} y={50} />
          <Cheeks y={62} />
          <Path d="M55 58 Q60 56 65 58 Q63 68 60 76 Q57 68 55 58 Z" fill="#111827" />
          <Path d="M57.5 64 Q60 63 62.5 64 L60 72 Z" fill="#FB923C" />
        </G>
      }
    />
  );
}

/** Duque, o pinguim-rei: como o primo imperador, mas com manchas laranja mais vivas e o peito alaranjado. */
function Rei(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#6B7280', '#374151', '#111827']}
      feet={['#4B5563', '#111827']}
      chest={<Ellipse cx="60" cy="80" rx="22" ry="8" fill="#FB923C" opacity={0.85} />}
      face={
        <G>
          <Path d="M27 50 Q20 64 34 74 Q38 64 34 52 Z" fill="#F97316" />
          <Path d="M93 50 Q100 64 86 74 Q82 64 86 52 Z" fill="#F97316" />
          <Eye x={47} y={49} />
          <Eye x={73} y={49} />
          <Cheeks y={61} />
          <Path d="M55 57 Q60 55 65 57 Q63 67 60 75 Q57 67 55 57 Z" fill="#111827" />
          <Path d="M57.5 63 Q60 62 62.5 63 L60 71 Z" fill="#F97316" />
          {/* coroa, só por graça */}
          <Path d="M48 20 L52 11 L56 18 L60 9 L64 18 L68 11 L72 20 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
        </G>
      }
    />
  );
}

/** Dedé, o pinguim-de-adélia: cabeça toda preta, anel branco em volta dos olhos e bico curto. */
function Adelia(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#4B5563', '#1F2937', '#0B1020']}
      feet={['#FCC8D5', '#E07897']}
      face={
        <G>
          <Circle cx="47" cy="50" r="7.5" fill="#FFFFFF" />
          <Circle cx="73" cy="50" r="7.5" fill="#FFFFFF" />
          <Eye x={47} y={50} r={4.2} />
          <Eye x={73} y={50} r={4.2} />
          <Cheeks y={63} />
          <Path d="M55 59 L65 59 L60 67 Z" fill="#111827" />
          <Path d="M56 59 L60 59 L57.5 61.5 Z" fill="#B45309" opacity={0.8} />
          {/* a pedrinha do ninho, na nadadeira */}
          <Ellipse cx="16" cy="121" rx="6" ry="4.5" fill="#94A3B8" />
          <Ellipse cx="14.5" cy="119.5" rx="2" ry="1.2" fill="#E2E8F0" />
        </G>
      }
    />
  );
}

/** Pipo, o gentoo: faixa branca por cima da cabeça, de olho a olho, bico e pés laranja. */
function Gentoo(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#6B7280', '#1F2937', '#0B1020']}
      feet={['#FDBA74', '#EA580C']}
      face={
        <G>
          <Path d="M40 42 Q50 30 60 32 Q70 30 80 42" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" />
          <Eye x={47} y={50} />
          <Eye x={73} y={50} />
          <Cheeks y={63} />
          <Path d="M53 58 L67 58 L60 69 Z" fill="#F97316" />
          <Path d="M58 58 L67 58 L62 63 Z" fill="#111827" opacity={0.85} />
        </G>
      }
    />
  );
}

/** Topete, o macaroni: penacho amarelo-alaranjado saindo da testa, bico grosso e olhos vermelhos. */
function Macaroni(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#4B5563', '#1F2937', '#0B1020']}
      feet={['#FCC8D5', '#E07897']}
      face={
        <G>
          <G stroke="#F59E0B" strokeWidth="3.5" fill="none" strokeLinecap="round">
            <Path d="M60 34 Q48 30 36 38 Q30 42 26 34" />
            <Path d="M60 34 Q72 30 84 38 Q90 42 94 34" />
          </G>
          <G stroke="#FCD34D" strokeWidth="2" fill="none" strokeLinecap="round">
            <Path d="M58 36 Q46 34 38 42" />
            <Path d="M62 36 Q74 34 82 42" />
          </G>
          <Eye x={47} y={50} r={4.5} iris="#DC2626" />
          <Eye x={73} y={50} r={4.5} iris="#DC2626" />
          <Cheeks y={64} />
          <Path d="M52 57 Q60 54 68 57 Q66 66 60 72 Q54 66 52 57 Z" fill="#C2410C" />
          <Path d="M55 58 Q60 56.5 63 58 L59 62 Z" fill="#FFFFFF" opacity={0.25} />
        </G>
      }
    />
  );
}

// ───────────────────────── focas ─────────────────────────

/**
 * Foca deitada de barriga: corpo comprido, cabeça à esquerda olhando para quem vê, nadadeiras de
 * trás à direita. `extra` desenha o que muda (pintas, tromba…).
 */
function Seal({ g, uid, skin, belly, head, extra, face }: ArtProps & { skin: [string, string, string]; belly: string; head: [number, number, number]; extra?: ReactNode; face: ReactNode }) {
  const [hx, hy, hr] = head;
  return (
    <G>
      <Defs>
        <Rad id="pele" uid={uid} stops={skin} />
      </Defs>
      <Shadow rx={50} />
      {/* nadadeiras de trás */}
      <Path d="M100 116 Q116 104 118 94 Q108 104 98 106 Z" fill={g('pele')} />
      <Path d="M100 120 Q118 124 119 132 Q106 126 96 124 Z" fill={g('pele')} />
      <Path d="M18 120 Q40 88 76 96 Q104 102 104 118 Q100 132 60 132 Q24 132 18 120 Z" fill={g('pele')} />
      <Path d="M30 126 Q56 118 92 126 Q70 132 40 132 Z" fill={belly} opacity={0.8} />
      {extra}
      {/* nadadeira da frente */}
      <Path d="M50 116 Q46 128 58 132 Q60 124 58 114 Z" fill={skin[2]} opacity={0.6} />
      <Circle cx={hx} cy={hy} r={hr} fill={g('pele')} />
      <Ellipse cx={hx - hr * 0.4} cy={hy - hr * 0.55} rx={hr * 0.35} ry={hr * 0.15} fill="#FFFFFF" opacity={0.2} transform={`rotate(-25 ${hx - hr * 0.4} ${hy - hr * 0.55})`} />
      {face}
    </G>
  );
}

const Whiskers = ({ x, y }: { x: number; y: number }) => (
  <G stroke="#E2E8F0" strokeWidth="0.9" strokeLinecap="round" opacity={0.9}>
    <Path d={`M${x - 7} ${y} L${x - 20} ${y - 3}`} />
    <Path d={`M${x - 7} ${y + 2} L${x - 20} ${y + 3}`} />
    <Path d={`M${x + 7} ${y} L${x + 20} ${y - 3}`} />
    <Path d={`M${x + 7} ${y + 2} L${x + 20} ${y + 3}`} />
  </G>
);

/** Wendel, a foca-de-weddell: cinza-azulada com manchas claras e cara de quem está sorrindo. */
function Weddell(p: ArtProps) {
  return (
    <Seal
      {...p}
      skin={['#94A3B8', '#475569', '#1E293B']}
      belly="#CBD5E1"
      head={[40, 84, 24]}
      extra={
        <G fill="#CBD5E1" opacity={0.55}>
          <Ellipse cx="70" cy="104" rx="5" ry="3" />
          <Ellipse cx="86" cy="110" rx="4" ry="2.5" />
          <Ellipse cx="62" cy="116" rx="3.5" ry="2" />
          <Ellipse cx="92" cy="120" rx="3" ry="2" />
        </G>
      }
      face={
        <G>
          <Eye x={31} y={80} r={5.5} />
          <Eye x={49} y={80} r={5.5} />
          <Circle cx="25" cy="90" r="4.5" fill="#FB7185" opacity={0.3} />
          <Circle cx="55" cy="90" r="4.5" fill="#FB7185" opacity={0.3} />
          <Ellipse cx="40" cy="91" rx="3.5" ry="2.5" fill={INK} />
          <Path d="M34 96 Q40 101 46 96" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <Whiskers x={40} y={93} />
        </G>
      }
    />
  );
}

/** Bolota, o elefante-marinho: marrom, grandalhão, com a tromba caindo sobre a boca. */
function ElefanteMarinho(p: ArtProps) {
  return (
    <Seal
      {...p}
      skin={['#C4A484', '#8B6B4A', '#4A3423']}
      belly="#D6C3A8"
      head={[40, 80, 27]}
      extra={<Path d="M60 100 Q70 94 82 100" stroke="#4A3423" strokeWidth="1.5" fill="none" opacity={0.5} />}
      face={
        <G>
          <Eye x={30} y={74} r={5.5} />
          <Eye x={50} y={74} r={5.5} />
          {/* a tromba */}
          <Path d="M33 82 Q40 78 47 82 Q50 94 44 102 Q40 106 36 102 Q30 94 33 82 Z" fill="#6B4F36" />
          <Ellipse cx="37.5" cy="100" rx="1.6" ry="1.2" fill={INK} />
          <Ellipse cx="42.5" cy="100" rx="1.6" ry="1.2" fill={INK} />
          <Path d="M33 106 Q40 110 47 106" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </G>
      }
    />
  );
}

/** Malhada, a foca-leopardo: cinzenta com pintas escuras, cabeça grande e comprida e um sorrisão. */
function Leopardo(p: ArtProps) {
  return (
    <Seal
      {...p}
      skin={['#CBD5E1', '#64748B', '#334155']}
      belly="#E2E8F0"
      head={[38, 86, 23]}
      extra={
        <G fill="#1E293B" opacity={0.6}>
          <Circle cx="66" cy="104" r="2.4" />
          <Circle cx="78" cy="101" r="1.8" />
          <Circle cx="88" cy="108" r="2.2" />
          <Circle cx="74" cy="114" r="1.6" />
          <Circle cx="96" cy="116" r="1.8" />
          <Circle cx="60" cy="112" r="1.5" />
        </G>
      }
      face={
        <G>
          {/* focinho comprido, para a frente */}
          <Ellipse cx="38" cy="96" rx="16" ry="9" fill="#94A3B8" />
          <Eye x={29} y={80} r={5} />
          <Eye x={47} y={80} r={5} />
          <Ellipse cx="38" cy="91" rx="3" ry="2.2" fill={INK} />
          <Path d="M25 97 Q38 106 51 97" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
          <Circle cx="24" cy="74" r="1.6" fill="#1E293B" opacity={0.6} />
          <Circle cx="52" cy="72" r="1.4" fill="#1E293B" opacity={0.6} />
        </G>
      }
    />
  );
}

// ───────────────────────── outros ─────────────────────────

/** Jubi, a jubarte: saltando da água, com a nadadeira do peito comprida e branca e as pregas da garganta. */
function Jubarte({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="baleia" uid={uid} stops={['#64748B', '#334155', '#0F172A']} />
        <LinearGradient id={`mar-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#38BDF8" />
          <Stop offset="1" stopColor="#0369A1" />
        </LinearGradient>
      </Defs>
      {/* corpo em arco, cabeça no alto à esquerda, cauda entrando na água */}
      <Path d="M14 58 Q20 30 52 32 Q86 36 100 74 Q106 92 110 104 L96 108 Q84 86 64 78 Q30 72 14 58 Z" fill={g('baleia')} />
      {/* garganta clara com pregas */}
      <Path d="M16 60 Q36 76 66 80 Q42 84 22 72 Z" fill="#E2E8F0" />
      <G stroke="#94A3B8" strokeWidth="0.8" opacity={0.8}>
        <Path d="M22 64 Q40 74 60 78" />
        <Path d="M26 68 Q42 76 56 80" />
      </G>
      {/* nadadeira do peito, bem comprida */}
      <Path d="M48 74 Q46 100 30 116 Q40 114 56 94 Q60 84 58 76 Z" fill="#F1F5F9" />
      <Path d="M36 108 L38 104 M42 101 L44 98" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <Eye x={34} y={50} r={3.8} />
      <Path d="M18 58 Q24 62 30 60" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <Circle cx="36" cy="58" r="3.5" fill="#FB7185" opacity={0.3} />
      <Ellipse cx="44" cy="38" rx="10" ry="3.5" fill="#FFFFFF" opacity={0.18} transform="rotate(-10 44 38)" />
      {/* o mar e os respingos */}
      <Path d="M0 112 Q15 106 30 112 Q45 118 60 112 Q75 106 90 112 Q105 118 120 112 L120 140 L0 140 Z" fill={g('mar')} />
      <G fill="#E0F2FE">
        <Circle cx="94" cy="104" r="3" />
        <Circle cx="112" cy="102" r="2.5" />
        <Circle cx="104" cy="96" r="2" />
      </G>
    </G>
  );
}

/** Kiko, o krill: camarãozinho rosado e translúcido, com olho grande, antenas e perninhas. */
function Krill({ uid }: ArtProps) {
  const segs = [0, 1, 2, 3, 4, 5];
  return (
    <G>
      <Defs>
        <RadialGradient id={`krill-${uid}`} cx="40%" cy="30%" r="80%">
          <Stop offset="0" stopColor="#FED7AA" />
          <Stop offset="0.6" stopColor="#FB923C" />
          <Stop offset="1" stopColor="#C2410C" />
        </RadialGradient>
      </Defs>
      <Shadow rx={30} />
      {/* bolhas */}
      <G fill="none" stroke="#7DD3FC" strokeWidth="1.2">
        <Circle cx="100" cy="30" r="4" />
        <Circle cx="108" cy="18" r="2.5" />
        <Circle cx="92" cy="16" r="2" />
      </G>
      {/* antenas */}
      <G stroke="#EA580C" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <Path d="M30 62 Q14 40 20 14" />
        <Path d="M32 60 Q26 34 40 12" />
      </G>
      {/* perninhas */}
      <G stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round">
        {segs.slice(0, 5).map((i) => (
          <Path key={i} d={`M${44 + i * 10} ${86 + i * 2} l-3 12`} />
        ))}
      </G>
      {/* corpo em segmentos, curvado */}
      {segs.map((i) => (
        <Ellipse key={i} cx={40 + i * 11} cy={74 + i * i * 0.9} rx="11" ry={14 - i * 1.2} fill={`url(#krill-${uid})`} opacity={0.92} />
      ))}
      {/* cauda em leque */}
      <Path d="M96 104 Q108 118 104 126 Q98 118 92 112 Z" fill="#F97316" />
      <Path d="M98 102 Q114 108 116 118 Q106 114 96 108 Z" fill="#FB923C" />
      {/* cabeça, olho e sorriso */}
      <Circle cx="34" cy="70" r="15" fill={`url(#krill-${uid})`} />
      <Eye x={30} y={66} r={5.5} />
      <Path d="M24 76 Q29 80 34 77" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <Circle cx="40" cy="74" r="3" fill="#FB7185" opacity={0.35} />
      {/* os pontinhos que brilham (fotóforos) */}
      <G fill="#FDE047">
        <Circle cx="52" cy="84" r="1.5" />
        <Circle cx="64" cy="87" r="1.5" />
        <Circle cx="76" cy="92" r="1.5" />
      </G>
    </G>
  );
}

/** Vento, o albatroz-errante: corpo branco, asas enormes abertas (escuras por cima) e bico rosado com ponta curva. */
function Albatroz({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="corpo" uid={uid} stops={['#FFFFFF', '#F1F5F9', '#CBD5E1']} />
        <LinearGradient id={`asa-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#475569" />
          <Stop offset="1" stopColor="#1E293B" />
        </LinearGradient>
      </Defs>
      {/* nuvenzinha */}
      <Path d="M76 118 Q78 110 86 112 Q90 104 98 110 Q106 108 106 116 Q108 122 100 122 L80 122 Q74 122 76 118 Z" fill="#E0F2FE" />
      {/* asas abertas, compridas e finas */}
      <Path d="M52 66 Q30 58 2 70 Q24 72 50 78 Z" fill={g('asa')} />
      <Path d="M68 66 Q90 58 118 70 Q96 72 70 78 Z" fill={g('asa')} />
      <Path d="M50 76 Q30 72 8 72 Q28 78 50 80 Z" fill="#F8FAFC" opacity={0.9} />
      <Path d="M70 76 Q90 72 112 72 Q92 78 70 80 Z" fill="#F8FAFC" opacity={0.9} />
      {/* corpo e cauda */}
      <Ellipse cx="60" cy="80" rx="15" ry="22" fill={g('corpo')} />
      <Path d="M52 98 L60 112 L68 98 Z" fill="#94A3B8" />
      {/* cabeça */}
      <Circle cx="60" cy="54" r="14" fill={g('corpo')} />
      <Eye x={54} y={52} r={3} />
      <Eye x={66} y={52} r={3} />
      {/* bico rosado, com a ponta curva */}
      <Path d="M56 58 L64 58 Q63 70 60 74 Q57 70 56 58 Z" fill="#F9A8D4" />
      <Path d="M58.5 72 Q60 76 61.5 72" stroke="#DB2777" strokeWidth="1.5" fill="none" />
      <Circle cx="50" cy="60" r="2.5" fill="#FB7185" opacity={0.3} />
      <Circle cx="70" cy="60" r="2.5" fill="#FB7185" opacity={0.3} />
    </G>
  );
}

/** Floco, o petrel-das-neves: todo branco, bico e olhos pretos, pousado numa pedra. */
function Petrel({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="corpo" uid={uid} stops={['#FFFFFF', '#F8FAFC', '#CBD5E1']} />
        <Rad id="pedra" uid={uid} stops={['#94A3B8', '#64748B', '#334155']} />
      </Defs>
      <Shadow rx={40} />
      {/* a pedra, com neve em cima */}
      <Path d="M18 132 Q20 110 44 106 Q70 102 96 110 Q106 118 104 132 Z" fill={g('pedra')} />
      <Path d="M26 112 Q44 104 70 104 Q90 106 96 112 Q80 110 60 110 Q40 110 26 112 Z" fill="#F8FAFC" />
      {/* flocos de neve */}
      <G fill="#E0F2FE">
        <Circle cx="18" cy="30" r="2" />
        <Circle cx="102" cy="24" r="2.5" />
        <Circle cx="96" cy="60" r="1.8" />
        <Circle cx="14" cy="76" r="1.6" />
      </G>
      {/* cauda, corpo, asa e pés */}
      <Path d="M80 92 L106 98 L80 102 Z" fill="#E2E8F0" />
      <Ellipse cx="60" cy="88" rx="26" ry="18" fill={g('corpo')} />
      <Path d="M58 80 Q80 76 92 94 Q74 98 58 92 Z" fill="#E2E8F0" />
      <G stroke="#475569" strokeWidth="2.5" strokeLinecap="round">
        <Path d="M52 104 L50 108" />
        <Path d="M64 104 L66 108" />
      </G>
      <Circle cx="44" cy="66" r="17" fill={g('corpo')} />
      <Ellipse cx="38" cy="56" rx="6" ry="2.5" fill="#FFFFFF" opacity={0.6} transform="rotate(-25 38 56)" />
      <Eye x={38} y={64} r={3.5} />
      <Eye x={52} y={64} r={3.5} />
      <Path d="M41 70 L49 70 L45 78 Z" fill="#111827" />
      <Circle cx="34" cy="72" r="3" fill="#FB7185" opacity={0.3} />
      <Circle cx="56" cy="72" r="3" fill="#FB7185" opacity={0.3} />
    </G>
  );
}

const ART: Record<string, (p: ArtProps) => ReactNode> = {
  imperador: Imperador,
  rei: Rei,
  adelia: Adelia,
  gentoo: Gentoo,
  macaroni: Macaroni,
  weddell: Weddell,
  'elefante-marinho': ElefanteMarinho,
  leopardo: Leopardo,
  jubarte: Jubarte,
  krill: Krill,
  albatroz: Albatroz,
  petrel: Petrel,
};

/** Os ids que têm desenho (para os testes). */
export const AMIGOS_COM_DESENHO = Object.keys(ART);
