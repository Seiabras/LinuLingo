import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaFr } from './ipa-fr';

const CASOS: [string, string][] = [
 ['bonjour','[bɔ̃ʒuʁ]'],['merci','[mɛʁsi]'],['maison','[mɛzɔ̃]'],['chat','[ʃa]'],['chien','[ʃjɛ̃]'],['pain','[pɛ̃]'],['vin','[vɛ̃]'],['blanc','[blɑ̃]'],['bon','[bɔ̃]'],['bonne','[bɔn]'],
 ['enfant','[ɑ̃fɑ̃]'],['temps','[tɑ̃]'],['fille','[fij]'],['famille','[famij]'],['travail','[tʁavaj]'],['soleil','[sɔlɛj]'],['feuille','[fœj]'],['oiseau','[wazo]'],['beaucoup','[boku]'],['eau','[o]'],
 ['heure','[œʁ]'],['fleur','[flœʁ]'],['deux','[dø]'],['jeune','[ʒœn]'],['heureuse','[øʁøz]'],['nuit','[nɥi]'],['lui','[lɥi]'],['oui','[wi]'],['rue','[ʁy]'],['tu','[ty]'],
 ['parler','[paʁle]'],['nez','[ne]'],['aimez','[ɛme]'],['ils parlent','[il paʁl]'],['ils aiment','[ilz‿ɛm]'],['moment','[mɔmɑ̃]'],['souvent','[suvɑ̃]'],['rapidement','[ʁapidəmɑ̃]'],['petit','[pəti]'],['demain','[dəmɛ̃]'],
 ['le','[lə]'],['les amis','[lez‿ami]'],['un ami','[œ̃n‿ami]'],["l'homme",'[lɔm]'],["j'ai faim",'[ʒe fɛ̃]'],["c'est bien",'[sɛ bjɛ̃]'],['nation','[nasjɔ̃]'],['question','[kɛstjɔ̃]'],['garçon','[ɡaʁsɔ̃]'],['manger','[mɑ̃ʒe]'],
 ['mangeons','[mɑ̃ʒɔ̃]'],['guerre','[ɡɛʁ]'],['montagne','[mɔ̃taɲ]'],['cheval','[ʃəval]'],['sel','[sɛl]'],['mer','[mɛʁ]'],['chef','[ʃɛf]'],['sac','[sak]'],['avec','[avɛk]'],['lac','[lak]'],
 ['femme','[fam]'],['ancienne','[ɑ̃sjɛn]'],['année','[ane]'],['ennui','[ɑ̃nɥi]'],['voyage','[vwajaʒ]'],['payer','[peje]'],['rose','[ʁoz]'],['porte','[pɔʁt]'],['mot','[mo]'],['école','[ekɔl]'],
 ['être','[ɛtʁ]'],['fête','[fɛt]'],['père','[pɛʁ]'],['elle','[ɛl]'],['reste','[ʁɛst]'],['effet','[efɛ]'],['ballet','[balɛ]'],['premier','[pʁəmje]'],['dernier','[dɛʁnje]'],['escalier','[ɛskalje]'],
 ['examen','[ɛɡzamɛ̃]'],['exemple','[ɛɡzɑ̃pl]'],['taxi','[taksi]'],['juin','[ʒɥɛ̃]'],['loin','[lwɛ̃]'],['brun','[bʁœ̃]'],['parfum','[paʁfœ̃]'],['nous avons','[nuz‿avɔ̃]'],['vous êtes','[vuz‿ɛt]'],['trois enfants','[tʁwaz‿ɑ̃fɑ̃]'],
 ['le héros','[lə eʁo]'],['cinq','[sɛ̃k]'],["aujourd'hui",'[oʒuʁdɥi]'],['je parlerai','[ʒə paʁləʁe]'],['ils finissent','[il finis]'],["qu'il",'[kil]'],['gens','[ʒɑ̃]'],['champ','[ʃɑ̃]'],['grand','[ɡʁɑ̃]'],['pomme','[pɔm]'],
 ['amie','[ami]'],['place','[plas]'],['rouge','[ʁuʒ]'],['terre','[tɛʁ]'],['dessert','[desɛʁ]'],['belle','[bɛl]'],['cellule','[selyl]'],['gros','[ɡʁo]'],['heureux','[øʁø]'],['voiture','[vwatyʁ]'],
 ['fromage','[fʁɔmaʒ]'],['chocolat','[ʃɔkɔla]'],['livre','[livʁ]'],['table','[tabl]'],['semaine','[səmɛn]'],['musique','[myzik]'],['français','[fʁɑ̃sɛ]'],['française','[fʁɑ̃sɛz]'],['beau','[bo]'],['gâteau','[ɡato]'],
  ['vert', '[vɛʁ]'], ['concert', '[kɔ̃sɛʁ]'], ['piano', '[pjano]'], ['crayon', '[kʁɛjɔ̃]'], ['ruelle', '[ʁɥɛl]'], ['tuer', '[tɥe]'], ['cruel', '[kʁyɛl]'],
];

// infinitivos: dizem quando o -ent é de verbo no plural (ils parlent, mudo) e não de nome (le moment)
const VERBS = new Set(['parler', 'aimer', 'finir', 'dormir', 'manger', 'prendre', 'venir', 'avoir', 'être', 'tuer']);

test('IPA do francês: vogais nasais, e mudo, finais mudas, ill, elisão e ligação', () => {
  const erros = CASOS.filter(([w, ipa]) => toIpaFr(w, VERBS) !== ipa).map(([w, ipa]) => `${w}: ${toIpaFr(w, VERBS)} (esperado ${ipa})`);
  assert.deepEqual(erros, []);
});

test('IPA do francês: h aspirado não liga; ponto quebra a ligação', () => {
  assert.equal(toIpaFr('les haricots', VERBS), '[le aʁiko]');
  assert.equal(toIpaFr('les hommes', VERBS), '[lez‿ɔm]');
  assert.equal(toIpaFr('Je les. Aime', VERBS), '[ʒə le ɛm]');
});
