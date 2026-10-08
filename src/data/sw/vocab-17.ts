// Lote 17 (Claude): Países, nacionalidades e línguas. As nacionalidades seguem a classe m-/wa- dos
// outros povos (Mfaransa, Wafaransa — igual a Mbrazili, Mtanzania, Mzungu, Mwarabu já no vocabulário);
// os nomes de língua levam o prefixo ki- (Kiingereza, Kifaransa); os nomes de país variam: alguns
// levam o prefixo u- (Ufaransa, Ujerumani, Uingereza), outros não (Marekani, Italia, Japani) — sem
// regra única, por isso cada um foi conferido individualmente.
import type { VocabRow } from '../types';

export const ROWS: VocabRow[] = [
  // ── Nacionalidades ──
  ['Mfaransa', 'francês, francesa (pl. Wafaransa)', 'substantivo', 'Pessoas', '🇫🇷', 'Rafiki yangu ni Mfaransa.'],
  ['Mjerumani', 'alemão, alemã (pl. Wajerumani)', 'substantivo', 'Pessoas', '🇩🇪', 'Mwalimu wetu ni Mjerumani.'],
  ['Mwingereza', 'inglês, inglesa (pl. Waingereza)', 'substantivo', 'Pessoas', '🇬🇧', 'Mgeni huyu ni Mwingereza.'],
  ['Mmarekani', 'americano, americana, dos EUA (pl. Wamarekani)', 'substantivo', 'Pessoas', '🇺🇸', 'Dereva wetu ni Mmarekani.'],
  ['Mjapani', 'japonês, japonesa (pl. Wajapani)', 'substantivo', 'Pessoas', '🇯🇵', 'Mwanafunzi mpya ni Mjapani.'],
  ['Mkorea', 'coreano, coreana (pl. Wakorea)', 'substantivo', 'Pessoas', '🇰🇷', 'Mfanyakazi huyu ni Mkorea.'],
  ['Msomali', 'somali (pl. Wasomali)', 'substantivo', 'Pessoas', '🇸🇴', 'Jirani wangu ni Msomali.'],
  ['Mmisri', 'egípcio, egípcia (pl. Wamisri)', 'substantivo', 'Pessoas', '🇪🇬', 'Mtalii huyu ni Mmisri.'],
  ['Mhabeshi', 'etíope (pl. Wahabeshi; termo tradicional em suaíli para a Etiópia)', 'substantivo', 'Pessoas', '🇪🇹', 'Mpishi wetu ni Mhabeshi.'],
  ['Msudani', 'sudanês, sudanesa (pl. Wasudani)', 'substantivo', 'Pessoas', '🇸🇩', 'Mwanariadha huyu ni Msudani.'],
  ['Mganda', 'ugandense (pl. Waganda)', 'substantivo', 'Pessoas', '🇺🇬', 'Mchezaji huyu ni Mganda.'],
  ['Mrusi', 'russo, russa (pl. Warusi)', 'substantivo', 'Pessoas', '🇷🇺', 'Daktari wetu ni Mrusi.'],
  ['Mgiriki', 'grego, grega (pl. Wagiriki)', 'substantivo', 'Pessoas', '🇬🇷', 'Mwenye duka hili ni Mgiriki.'],
  ['Mholanzi', 'holandês, holandesa (pl. Waholanzi)', 'substantivo', 'Pessoas', '🇳🇱', 'Mkulima huyu ni Mholanzi.'],
  ['Mkanada', 'canadense (pl. Wakanada)', 'substantivo', 'Pessoas', '🇨🇦', 'Msafiri huyu ni Mkanada.'],
  // ── Línguas ──
  ['Kiingereza', 'a língua inglesa', 'substantivo', 'Escola', '📘', 'Ninasoma Kiingereza chuoni.'],
  ['Kifaransa', 'a língua francesa', 'substantivo', 'Escola', '📙', 'Dada anaongea Kifaransa vizuri.'],
  ['Kijerumani', 'a língua alemã', 'substantivo', 'Escola', '📕', 'Kijerumani kina sarufi ngumu kidogo.'],
  ['Kihispania', 'a língua espanhola', 'substantivo', 'Escola', '📗', 'Wanafunzi wanajifunza Kihispania mwaka huu.'],
  ['Kiitaliano', 'a língua italiana', 'substantivo', 'Escola', '📔', 'Kiitaliano kina maneno mengi ya muziki.'],
  ['Kichina', 'a língua chinesa (mandarim)', 'substantivo', 'Escola', '📓', 'Kichina kinaandikwa kwa herufi maalum.'],
  ['Kirusi', 'a língua russa', 'substantivo', 'Escola', '📒', 'Kirusi kinatumia alfabeti ya Kisirili.'],
  ['Kiarabu', 'a língua árabe', 'substantivo', 'Escola', '📘', 'Maneno mengi ya Kiswahili yanatoka Kiarabu.'],
  ['Kihindi', 'a língua híndi', 'substantivo', 'Escola', '📙', 'Kihindi kinaongewa na watu wengi nchini India.'],
  ['Kigiriki', 'a língua grega', 'substantivo', 'Escola', '📕', 'Kigiriki cha kale kiliathiri sayansi nyingi.'],
  ['Kituruki', 'a língua turca', 'substantivo', 'Escola', '📗', 'Kituruki kinaongewa zaidi nchini Uturuki.'],
  ['Kiholanzi', 'a língua holandesa', 'substantivo', 'Escola', '📔', 'Kiholanzi kina ufanano na Kijerumani.'],
  ['Kikorea', 'a língua coreana', 'substantivo', 'Escola', '📓', 'Kikorea kinaandikwa kwa hangul.'],
  // ── Países ──
  ['Ufaransa', 'França', 'substantivo', 'Sociedade', '🇫🇷', 'Ufaransa ni nchi ya Ulaya.'],
  ['Ujerumani', 'Alemanha', 'substantivo', 'Sociedade', '🇩🇪', 'Ujerumani ni nchi yenye viwanda vingi.'],
  ['Uingereza', 'Inglaterra, Reino Unido', 'substantivo', 'Sociedade', '🇬🇧', 'Uingereza ni nchi ya kisiwa.'],
  ['Marekani', 'Estados Unidos (sem o prefixo “u-”)', 'substantivo', 'Sociedade', '🇺🇸', 'Marekani ni nchi kubwa sana.'],
  ['Uhispania', 'Espanha', 'substantivo', 'Sociedade', '🇪🇸', 'Uhispania ni nchi ya kusini ya Ulaya.'],
  ['Italia', 'Itália', 'substantivo', 'Sociedade', '🇮🇹', 'Italia ni nchi inayojulikana kwa chakula chake.'],
  ['Uchina', 'China', 'substantivo', 'Sociedade', '🇨🇳', 'Uchina ni nchi yenye watu wengi zaidi duniani.'],
  ['Japani', 'Japão', 'substantivo', 'Sociedade', '🇯🇵', 'Japani ni nchi ya visiwa Asia ya Mashariki.'],
  ['Urusi', 'Rússia', 'substantivo', 'Sociedade', '🇷🇺', 'Urusi ni nchi kubwa zaidi duniani kwa eneo.'],
  ['Misri', 'Egito', 'substantivo', 'Sociedade', '🇪🇬', 'Misri ina mahali pa kale penye urembo mkubwa.'],
  ['Somalia', 'Somália', 'substantivo', 'Sociedade', '🇸🇴', 'Somalia ni nchi ya Pembe ya Afrika.'],
  ['Sudan', 'Sudão', 'substantivo', 'Sociedade', '🇸🇩', 'Sudan ni nchi ya kaskazini mashariki ya Afrika.'],
  ['Uhabeshi', 'Etiópia (termo tradicional em suaíli)', 'substantivo', 'Sociedade', '🇪🇹', 'Uhabeshi ni nchi ya kale ya Afrika.'],
  ['Uganda', 'Uganda', 'substantivo', 'Sociedade', '🇺🇬', 'Uganda ni nchi karibu na Ziwa Victoria.'],
  ['Ugiriki', 'Grécia', 'substantivo', 'Sociedade', '🇬🇷', 'Ugiriki ni nchi ya kale ya Ulaya.'],
  ['Uholanzi', 'Holanda, Países Baixos', 'substantivo', 'Sociedade', '🇳🇱', 'Uholanzi ni nchi tambarare ya Ulaya.'],
  ['Kanada', 'Canadá', 'substantivo', 'Sociedade', '🇨🇦', 'Kanada ni nchi kubwa ya Amerika Kaskazini.'],
  ['India', 'Índia', 'substantivo', 'Sociedade', '🇮🇳', 'India ni nchi yenye watu wengi sana.'],
  ['Australia', 'Austrália', 'substantivo', 'Sociedade', '🇦🇺', 'Australia ni bara na nchi kwa wakati mmoja.'],
];
