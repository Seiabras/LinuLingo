import type { StorySeed } from '../types';

/**
 * Histórias interativas do árabe egípcio — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Em nenhum nó o personagem decide a identidade ou a escolha do jogador: o jogador
 * sempre escolhe a resposta.
 */
export const STORIES_ARZ: StorySeed[] = [
  {
    id: 'arz-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'القهوة المصرية',
    emoji: '☕',
    summary: 'Você entra numa ahwa (cafeteria tradicional) no Cairo e puxa conversa com o dono.',
    cultural_context:
      'O árabe egípcio é, segundo a Wikipédia, a variedade mais entendida em todo o mundo árabe, graças ao alcance do cinema e da música egípcios desde o século XX.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'إزيك؟',
        translation: 'Como você está?',
        emoji: '👋',
        choices: [
          { text: 'كويس، شكرا!', translation: 'Bem, obrigado!', next: 'pede' },
          { text: 'القمر كبير.', translation: 'A lua é grande.', wrong: 'Isso não responde “como você está”. Use “كويس” ou “مش كويس”.' },
        ],
      },
      pede: {
        text: 'عايز إيه؟',
        translation: 'O que você quer?',
        emoji: '☕',
        choices: [
          { text: 'عايز قهوة.', translation: 'Quero um café.', next: 'final_cafe' },
          { text: 'عايز مية.', translation: 'Quero água.', next: 'final_agua' },
          { text: 'مين إنت؟', translation: 'Quem é você?', wrong: 'Isso não responde o que você quer beber. Use “عايز” (ou “عايزة”, se você for mulher).' },
        ],
      },
      final_cafe: {
        text: 'قهوة كويسة!',
        translation: 'Um café ótimo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'قهوة كويسة!', message: 'Você pediu seu primeiro café em árabe egípcio.' },
      },
      final_agua: {
        text: 'مية كويسة!',
        translation: 'Uma água ótima!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'مية كويسة!', message: 'Você pediu sua primeira água em árabe egípcio.' },
      },
    },
    glossary: [
      ['إزيك', 'como você está'],
      ['عايز', 'querer'],
      ['قهوة', 'café'],
      ['مية', 'água'],
    ],
  },
  {
    id: 'arz-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'بيت جديد',
    emoji: '🏠',
    summary: 'Um vizinho pergunta sobre a casa nova onde você acabou de se mudar.',
    cultural_context:
      'O egípcio falado perdeu as terminações de caso que o árabe padrão ainda marca por escrito — por isso frases como “البيت كبير” soam completas sem nenhuma marca extra no final das palavras.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'البيت جديد؟',
        translation: 'A casa é nova?',
        emoji: '🏠',
        choices: [
          { text: 'أيوه، جديد.', translation: 'Sim, é nova.', next: 'tamanho' },
          { text: 'عايز قهوة.', translation: 'Quero um café.', wrong: 'Isso não responde se a casa é nova. Responda “أيوه” ou “لأ”.' },
        ],
      },
      tamanho: {
        text: 'البيت كبير؟',
        translation: 'A casa é grande?',
        emoji: '📏',
        choices: [
          { text: 'أيوه، كبير.', translation: 'Sim, é grande.', next: 'final_grande' },
          { text: 'لأ، صغير بس كويس.', translation: 'Não, é pequena, mas boa.', next: 'final_pequena' },
        ],
      },
      final_grande: {
        text: 'كويس! إحنا خمسة.',
        translation: 'Que bom! Somos cinco.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'بيت كبير!', message: 'Casa grande, família grande: você já conseguiu falar sobre a sua casa em árabe egípcio.' },
      },
      final_pequena: {
        text: 'صغير، بس كويس!',
        translation: 'Pequena, mas boa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'بيت صغير، كويس!', message: 'Nem toda casa precisa ser grande: você descreveu a sua do seu jeito, em árabe egípcio.' },
      },
    },
    glossary: [
      ['بيت', 'casa'],
      ['كبير', 'grande'],
      ['صغير', 'pequeno'],
      ['خمسة', 'cinco'],
    ],
  },
  // ══════════════════ A2 ══════════════════
  {
    id: 'arz-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'صورة العيلة',
    emoji: '📷',
    summary: 'Um amigo mostra uma foto de família e pergunta quem é quem.',
    cultural_context:
      'Pra apresentar alguém da família em árabe egípcio, o demonstrativo (“ده”/“دي”) vem antes do nome da pessoa, e o gênero dele acompanha o gênero de quem está sendo apresentado — não o de quem fala.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ده مين في الصورة؟',
        translation: 'Quem é este na foto?',
        emoji: '📷',
        choices: [
          { text: 'ده أبويا.', translation: 'Este é meu pai.', next: 'mae' },
          { text: 'عايز قهوة.', translation: 'Quero um café.', wrong: 'Isso não responde quem é a pessoa na foto. Diga “ده أبويا” ou “دي أمي”.' },
        ],
      },
      mae: {
        text: 'وديّ؟',
        translation: 'E esta?',
        emoji: '👩',
        choices: [
          { text: 'دي أمي.', translation: 'Esta é minha mãe.', next: 'irmaos' },
          { text: 'ده اخ كويس.', translation: 'Este é um bom irmão.', wrong: 'A pergunta é sobre a mulher da foto (“ديّ؟”): use “دي”, não “ده”.' },
        ],
      },
      irmaos: {
        text: 'انتو كويسين؟',
        translation: 'Vocês (da família) estão bem?',
        emoji: '🙂',
        choices: [
          { text: 'أيوه، إحنا كويسين.', translation: 'Sim, estamos bem.', next: 'final' },
          { text: 'لأ، إحنا كويسين.', translation: 'Não, estamos bem.', wrong: '“لأ” (não) não combina com “كويسين” (bem): responda “أيوه” se vocês estão bem.' },
        ],
      },
      final: {
        text: 'عيلة كويسة!',
        translation: 'Que família boa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'عيلة كويسة!', message: 'Você apresentou sua família em árabe egípcio, com “ده”, “دي” e “كويسين”.' },
      },
    },
    glossary: [
      ['ده مين؟', 'quem é este?'],
      ['أبويا', 'meu pai'],
      ['أمي', 'minha mãe'],
      ['كويسين', 'bem, bons (plural)'],
    ],
  },
  {
    id: 'arz-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'كارت بوستال من أسوان',
    emoji: '🏔️',
    summary: 'Você recebe um cartão-postal de um amigo em Assuã e descreve a paisagem para outra pessoa.',
    cultural_context:
      'A palavra “بحر” serve tanto pra “mar” quanto pra “rio” no árabe egípcio — o mesmo cartão-postal pode descrever o rio Nilo e o mar Vermelho com a mesma palavra.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'الجبل بعيد ولا قريب؟',
        translation: 'A montanha é longe ou perto?',
        emoji: '⛰️',
        choices: [
          { text: 'الجبل قريب.', translation: 'A montanha é perto.', next: 'bahr' },
          { text: 'عايز سمكة.', translation: 'Quero um peixe.', wrong: 'Isso não responde sobre a distância da montanha. Use “قريب” ou “بعيد”.' },
        ],
      },
      bahr: {
        text: 'والبحر إزاي؟',
        translation: 'E o rio, como é?',
        emoji: '🌊',
        choices: [
          { text: 'البحر أزرق وكبير.', translation: 'O rio é azul e grande.', next: 'final' },
          { text: 'البحر تقيل.', translation: 'O rio é pesado.', wrong: '“تقيل” (pesado) não descreve um rio. Use uma cor, como “أزرق”, ou um tamanho, como “كبير”.' },
        ],
      },
      final: {
        text: 'كارت بوستال كويس!',
        translation: 'Que cartão-postal bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'الجبل والبحر!', message: 'Você descreveu uma paisagem egípcia inteira em árabe egípcio: a montanha e o rio.' },
      },
    },
    glossary: [
      ['جبل', 'montanha'],
      ['بحر', 'mar, rio'],
      ['قريب / بعيد', 'perto / longe'],
      ['أزرق', 'azul'],
    ],
  },
];
