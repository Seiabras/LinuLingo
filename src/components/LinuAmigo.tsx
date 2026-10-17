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

// ───────────────────────── amigos das outras áreas (17/10/2026) ─────────────────────────

/** Bento, o pinguim-de-barbicha: rosto todo branco, boné preto e a linha fina preta embaixo do queixo. */
function Barbicha(p: ArtProps) {
  return (
    <Penguin
      {...p}
      dark={['#4B5563', '#1F2937', '#0B1020']}
      feet={['#FCC8D5', '#E07897']}
      face={
        <G>
          {/* o rosto branco, do boné para baixo */}
          <Path d="M30 50 Q32 38 60 40 Q88 38 90 50 Q90 74 60 78 Q30 74 30 50 Z" fill="#FFFFFF" />
          {/* a barbicha: a linha preta de orelha a orelha, passando embaixo do queixo */}
          <Path d="M32 58 Q40 76 60 76 Q80 76 88 58" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
          <Eye x={47} y={52} r={4.6} />
          <Eye x={73} y={52} r={4.6} />
          <Cheeks y={64} dx={20} />
          <Path d="M55 59 L65 59 L60 67 Z" fill="#111827" />
        </G>
      }
    />
  );
}

/** Saltinho, o pinguim-saltador-da-rocha: sobrancelhas amarelas espetadas, olhos vermelhos, no meio de um pulo. */
function Saltador(p: ArtProps) {
  return (
    <G>
      {/* a pedra de onde ele pulou e as linhas do pulo */}
      <Path d="M70 138 Q74 126 92 124 Q110 124 114 138 Z" fill="#94A3B8" />
      <G stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" opacity={0.7}>
        <Path d="M10 120 L20 116" />
        <Path d="M8 128 L18 126" />
      </G>
      <G transform="translate(0 -6)">
        <Penguin
          {...p}
          dark={['#4B5563', '#1F2937', '#0B1020']}
          feet={['#FCC8D5', '#E07897']}
          face={
            <G>
              {/* as sobrancelhas amarelas, separadas, saindo de cima dos olhos */}
              <G stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round">
                <Path d="M52 44 Q40 38 28 40" />
                <Path d="M68 44 Q80 38 92 40" />
              </G>
              <G stroke="#FDE047" strokeWidth="1.6" fill="none" strokeLinecap="round">
                <Path d="M44 40 L36 30" />
                <Path d="M38 40 L28 32" />
                <Path d="M76 40 L84 30" />
                <Path d="M82 40 L92 32" />
              </G>
              {/* o topete preto, espetado */}
              <Path d="M50 20 L54 10 L58 18 L62 8 L66 18 L70 12 L70 22 Z" fill="#111827" />
              <Eye x={47} y={51} r={4.5} iris="#DC2626" />
              <Eye x={73} y={51} r={4.5} iris="#DC2626" />
              <Cheeks y={64} />
              <Path d="M53 58 Q60 55 67 58 Q65 66 60 71 Q55 66 53 58 Z" fill="#EA580C" />
            </G>
          }
        />
      </G>
    </G>
  );
}

/** Maestra, a orca: preta e branca, com a mancha branca atrás do olho e a nadadeira alta nas costas. */
function Orca({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="orca" uid={uid} stops={['#475569', '#1E293B', '#020617']} />
        <LinearGradient id={`mar-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#38BDF8" />
          <Stop offset="1" stopColor="#0369A1" />
        </LinearGradient>
      </Defs>
      {/* notas musicais saindo do canto */}
      <G fill="#0EA5E9">
        <Circle cx="98" cy="26" r="3.5" />
        <Path d="M101 26 L101 12 L108 14" stroke="#0EA5E9" strokeWidth="1.6" fill="none" />
        <Circle cx="84" cy="16" r="2.8" />
        <Path d="M86.5 16 L86.5 5" stroke="#0EA5E9" strokeWidth="1.4" />
      </G>
      {/* a nadadeira de cima, alta */}
      <Path d="M66 54 Q70 30 78 22 Q78 40 82 58 Z" fill={g('orca')} />
      {/* corpo */}
      <Path d="M8 84 Q14 54 56 52 Q96 52 112 86 Q100 104 64 106 Q24 108 8 84 Z" fill={g('orca')} />
      {/* barriga branca e a mancha atrás do olho */}
      <Path d="M12 88 Q30 104 62 104 Q48 98 40 92 Q26 92 12 88 Z" fill="#F8FAFC" />
      <Ellipse cx="36" cy="70" rx="9" ry="4.5" fill="#F8FAFC" transform="rotate(-12 36 70)" />
      {/* a mancha cinza da sela, atrás da nadadeira */}
      <Ellipse cx="86" cy="62" rx="9" ry="4" fill="#94A3B8" opacity={0.6} />
      <Eye x={24} y={74} r={3.4} />
      <Path d="M10 84 Q18 88 26 86" stroke="#F8FAFC" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <Circle cx="28" cy="82" r="3" fill="#FB7185" opacity={0.35} />
      {/* nadadeira do peito */}
      <Path d="M44 98 Q40 114 30 120 Q44 118 52 104 Z" fill={g('orca')} />
      <Path d="M0 112 Q15 106 30 112 Q45 118 60 112 Q75 106 90 112 Q105 118 120 112 L120 140 L0 140 Z" fill={g('mar')} opacity={0.9} />
    </G>
  );
}

/** Cristal, o peixe-gelo: claro e quase transparente (o sangue não tem hemoglobina), focinho comprido. */
function PeixeGelo({ uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <RadialGradient id={`gelo-${uid}`} cx="40%" cy="30%" r="80%">
          <Stop offset="0" stopColor="#F8FAFC" />
          <Stop offset="0.6" stopColor="#E2E8F0" />
          <Stop offset="1" stopColor="#94A3B8" />
        </RadialGradient>
      </Defs>
      <Shadow rx={40} />
      {/* bolhas */}
      <G fill="none" stroke="#7DD3FC" strokeWidth="1.2">
        <Circle cx="18" cy="34" r="4" />
        <Circle cx="10" cy="20" r="2.5" />
        <Circle cx="26" cy="18" r="2" />
      </G>
      {/* cauda */}
      <Path d="M92 76 Q112 58 116 62 Q108 76 116 92 Q110 94 92 82 Z" fill="#CBD5E1" />
      {/* nadadeiras de cima, escuras */}
      <Path d="M54 58 Q62 36 72 40 Q70 52 78 60 Z" fill="#475569" opacity={0.8} />
      <Path d="M76 60 Q86 46 92 52 Q90 62 94 70 Z" fill="#64748B" opacity={0.7} />
      {/* corpo comprido e cabeça grande, de focinho achatado */}
      <Path d="M14 80 Q20 62 52 60 Q86 60 96 78 Q88 96 54 98 Q22 98 14 80 Z" fill={`url(#gelo-${uid})`} opacity={0.95} />
      <Path d="M8 78 Q10 72 24 72 L26 84 Q12 86 8 78 Z" fill="#E2E8F0" />
      {/* o coração aparecendo, de tão claro que é o peixe */}
      <Path d="M44 86 Q44 82 47 82 Q50 82 50 85 Q50 82 53 82 Q56 82 56 86 Q56 90 50 94 Q44 90 44 86 Z" fill="#FDA4AF" opacity={0.7} />
      <Eye x={34} y={72} r={5} />
      <Path d="M12 82 Q18 85 24 83" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <Circle cx="38" cy="82" r="3" fill="#FB7185" opacity={0.3} />
      {/* nadadeira do peito */}
      <Path d="M54 80 Q66 82 70 94 Q60 92 52 86 Z" fill="#CBD5E1" />
    </G>
  );
}

/** Nevinha, a pomba-antártica: toda branca e redonda, com a capa do bico e a pele rosada perto dele. */
function Pomba({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="corpo" uid={uid} stops={['#FFFFFF', '#F8FAFC', '#CBD5E1']} />
        <Rad id="pedra" uid={uid} stops={['#94A3B8', '#64748B', '#334155']} />
      </Defs>
      <Shadow rx={36} />
      <Path d="M22 134 Q24 116 46 114 Q74 112 94 118 Q102 124 100 134 Z" fill={g('pedra')} />
      {/* pernas e pés, sem membrana entre os dedos */}
      <G stroke="#475569" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <Path d="M54 104 L52 116 M52 116 L46 118 M52 116 L54 119 M52 116 L58 117" />
        <Path d="M68 104 L70 116 M70 116 L64 117 M70 116 L72 119 M70 116 L76 118" />
      </G>
      {/* corpo, asa e cauda */}
      <Path d="M82 84 L100 92 L82 96 Z" fill="#E2E8F0" />
      <Ellipse cx="62" cy="84" rx="26" ry="24" fill={g('corpo')} />
      <Path d="M62 74 Q84 72 90 92 Q74 98 62 90 Z" fill="#E2E8F0" />
      {/* cabeça */}
      <Circle cx="46" cy="56" r="17" fill={g('corpo')} />
      <Ellipse cx="40" cy="46" rx="6" ry="2.5" fill="#FFFFFF" opacity={0.6} transform="rotate(-25 40 46)" />
      {/* a pele rosada perto do bico e a capa córnea por cima dele */}
      <Ellipse cx="34" cy="60" rx="6" ry="4" fill="#FBCFE8" />
      <Path d="M30 58 L18 62 L30 66 Z" fill="#FDE68A" />
      <Path d="M30 57 Q24 57 22 60 L30 60 Z" fill="#A16207" opacity={0.7} />
      <Eye x={40} y={53} r={3.4} />
      <Eye x={52} y={53} r={3.4} />
      <Circle cx="56" cy="62" r="3" fill="#FB7185" opacity={0.3} />
      {/* um ponto de interrogação: ela é curiosa */}
      <Path d="M88 30 Q88 22 96 22 Q104 22 104 30 Q104 36 96 38 L96 44" stroke="#8B5CF6" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <Circle cx="96" cy="50" r="1.8" fill="#8B5CF6" />
    </G>
  );
}

/** Blefe, o skua-polar-do-sul: marrom, de bico escuro e curvo na ponta, segurando uma carta. */
function Skua({ g, uid }: ArtProps) {
  return (
    <G>
      <Defs>
        <Rad id="corpo" uid={uid} stops={['#A8A29E', '#78716C', '#44403C']} />
      </Defs>
      <Shadow rx={30} />
      <G stroke="#1C1917" strokeWidth="2.6" strokeLinecap="round">
        <Path d="M54 112 L52 128" />
        <Path d="M68 112 L70 128" />
      </G>
      <Ellipse cx="50" cy="130" rx="7" ry="3" fill="#1C1917" />
      <Ellipse cx="72" cy="130" rx="7" ry="3" fill="#1C1917" />
      {/* cauda, corpo e asa com a mancha branca */}
      <Path d="M70 104 L92 120 L76 110 Z" fill="#57534E" />
      <Ellipse cx="60" cy="90" rx="24" ry="26" fill={g('corpo')} />
      <Path d="M70 72 Q92 80 88 110 Q76 104 68 92 Z" fill="#57534E" />
      <Ellipse cx="82" cy="100" rx="4" ry="2.5" fill="#F5F5F4" transform="rotate(60 82 100)" />
      {/* cabeça */}
      <Circle cx="56" cy="54" r="18" fill={g('corpo')} />
      <Ellipse cx="50" cy="44" rx="6" ry="2.5" fill="#FFFFFF" opacity={0.25} transform="rotate(-25 50 44)" />
      <Eye x={49} y={52} r={3.6} />
      <Eye x={63} y={52} r={3.6} />
      {/* bico escuro, com a ponta em gancho */}
      <Path d="M51 60 L61 60 Q60 68 56 72 Q55 70 53 70 Q51 66 51 60 Z" fill="#1C1917" />
      <Path d="M55 70 Q56 74 58 72" stroke="#1C1917" strokeWidth="1.6" fill="none" />
      <Circle cx="44" cy="60" r="3" fill="#FB7185" opacity={0.3} />
      <Circle cx="68" cy="60" r="3" fill="#FB7185" opacity={0.3} />
      {/* a carta na ponta da asa */}
      <G transform="rotate(-18 28 92)">
        <Path d="M18 80 L36 80 L36 104 L18 104 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        <Path d="M27 86 Q22 92 27 98 Q32 92 27 86 Z" fill="#DC2626" />
      </G>
    </G>
  );
}

/** Tenor, o lobo-marinho-antártico: marrom, com orelhinhas por fora e a cabeça erguida, chamando. */
function LoboMarinho(p: ArtProps) {
  return (
    <Seal
      {...p}
      skin={['#A8A29E', '#6B5B4E', '#3F3229']}
      belly="#C8B8A6"
      head={[38, 72, 22]}
      extra={
        <G>
          {/* o pescoço erguido: ele se apoia nas nadadeiras da frente */}
          <Path d="M24 104 Q26 80 40 76 Q56 80 58 104 Z" fill="#6B5B4E" />
          {/* as notas do chamado */}
          <G fill="#0EA5E9">
            <Circle cx="80" cy="40" r="3" />
            <Path d="M82.5 40 L82.5 28" stroke="#0EA5E9" strokeWidth="1.4" />
            <Circle cx="96" cy="30" r="3" />
            <Path d="M98.5 30 L98.5 18 L104 20" stroke="#0EA5E9" strokeWidth="1.4" fill="none" />
          </G>
        </G>
      }
      face={
        <G>
          {/* as orelhinhas por fora, que as focas verdadeiras não têm */}
          <Ellipse cx="22" cy="60" rx="3" ry="5" fill="#3F3229" transform="rotate(-30 22 60)" />
          <Ellipse cx="54" cy="60" rx="3" ry="5" fill="#3F3229" transform="rotate(30 54 60)" />
          <Eye x={30} y={68} r={4.8} />
          <Eye x={46} y={68} r={4.8} />
          <Ellipse cx="38" cy="80" rx="9" ry="6" fill="#8B7563" />
          <Ellipse cx="38" cy="78" rx="3" ry="2.2" fill={INK} />
          <Ellipse cx="38" cy="86" rx="3.5" ry="3" fill="#7F1D1D" />
          <Whiskers x={38} y={81} />
        </G>
      }
    />
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
  barbicha: Barbicha,
  saltador: Saltador,
  orca: Orca,
  'peixe-gelo': PeixeGelo,
  'pomba-antartica': Pomba,
  skua: Skua,
  'lobo-marinho': LoboMarinho,
};

/** Os ids que têm desenho (para os testes). */
export const AMIGOS_COM_DESENHO = Object.keys(ART);
