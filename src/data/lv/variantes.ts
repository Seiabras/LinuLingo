import type { LanguageVariant } from '../types';

/**
 * O letão padrão (latviešu literārā valoda), a língua oficial da Letônia. Há uma variante só: o
 * latgaliano e o livônio (línguas próprias), os dialetos (médio, tâmico e alto-letão) e o russo da
 * Letônia ficam nos sotaques.
 */
export const VARIANTS_LV: LanguageVariant[] = [
  {
    code: 'lv-LV',
    country: 'LVA',
    speechLocale: 'lv-LV',
    name: 'Letão da Letônia',
    flag: '🇱🇻',
    summary: 'O padrão do app: o letão literário (latviešu literārā valoda), a língua oficial da Letônia, com a pronúncia de Riga e do centro do país como referência.',
    card: {
      id: 'lv-lv-c1',
      title: 'O letão e o seu primo, o lituano',
      emoji: '🇱🇻',
      history:
        'O letão é a língua materna de cerca de 1,5 milhão de pessoas, a língua oficial da Letônia e, desde 2004, uma das línguas oficiais da União Europeia. Ele pertence ao ramo báltico da família indo-europeia, do qual só sobrevivem duas línguas: o letão e o lituano (o prussiano antigo se extinguiu no século XVIII). As duas são primas próximas, com muitas palavras parecidas, como “saule” e “saulė” (sol) ou “diena” (dia) nas duas línguas, mas um letão e um lituano não se entendem só de ouvir: o letão mudou mais, fixou a tônica na primeira sílaba, encurtou as terminações e recebeu muita influência do livônio, uma língua fínica vizinha, e depois do alemão e do russo. O padrão escrito se apoia no dialeto médio, o do centro do país. Os primeiros livros impressos em letão são catecismos do fim do século XVI, e a Bíblia foi traduzida no fim do século XVII. A ortografia de hoje, com os traços em cima das vogais longas e a vírgula embaixo das palatais, substituiu no começo do século XX a antiga escrita de molde alemão, que grafava “w” no lugar de “v” e “sch” no lugar de “š”.',
      culture_tip:
        'Para cumprimentar, “Labdien!” (bom dia, boa tarde) serve o dia todo, e entre amigos se diz “Sveiki!” ou “Čau!”. Com desconhecidos, clientes e gente mais velha, use o “Jūs” de cortesia (vocês/o senhor); o “tu” fica para os íntimos. Os letões costumam ser reservados no primeiro contato e valorizam a pontualidade e o espaço pessoal, mas se abrem nas festas: a maior é o Jāņi, a noite de São João (23 para 24 de junho), com fogueiras, coroas de folhas e flores e as canções de “līgo”. E cada dia do calendário tem os seus nomes: dar parabéns a alguém no seu dia do nome (vārda diena) é um gesto querido.',
      grammar_why:
        'Cinco marcas do letão que o app ensina: (1) a tônica quase sempre na primeira sílaba: “Latvija”, “Rīga”; (2) as vogais longas, marcadas com um traço (ā ē ī ū), mudam o sentido: “kazas” (cabras) × “kāzas” (casamento); (3) não há artigo, mas há sete casos, e a terminação mostra a função da palavra: “Rīga” (Riga), “Rīgā” (em Riga), “no Rīgas” (de Riga); (4) dois gêneros, com o masculino quase sempre em -s, -š, -is ou -us e o feminino em -a ou -e; (5) construções que o português não tem: o debitivo para a obrigação, “man jāiet” (eu tenho de ir, ao pé da letra “a mim é de ir”), e o modo relatado, para contar o que se ouviu dizer: “viņš esot slims” (dizem que ele está doente).',
      grammar_examples: [
        ['Labdien! Kā Jums iet?', 'Bom dia! Como vai o senhor?'],
        ['Kazas ēd zāli, bet kāzās dejo.', 'As cabras comem grama, mas no casamento se dança.'],
        ['Es dzīvoju Rīgā, bet esmu no Kuldīgas.', 'Eu moro em Riga, mas sou de Kuldīga.'],
        ['Rīt man jāiet uz darbu.', 'Amanhã eu tenho de ir para o trabalho.'],
        ['Viņš saka, ka Siguldā esot ļoti skaisti.', 'Ele diz que em Sigulda é muito bonito (é o que ele diz).'],
      ],
      character_guide: [
        ['ā ē ī ū', 'vogais longas: duram o dobro da curta', 'māja (casa)'],
        ['e / ē', 'às vezes fechado como em “ê”, às vezes aberto como em “é”: a escrita não mostra', 'ezers (lago)'],
        ['o', 'nas palavras letãs é o ditongo “uo”; nas emprestadas, “ó”', 'ola (ovo)'],
        ['ie', 'ditongo: “i” e “e” juntos, como “iê”', 'piens (leite)'],
        ['c', '“ts”, como em “tsunami”', 'cena (preço)'],
        ['č', '“tch”, como em “tchau”', 'čau (oi, tchau)'],
        ['š', '“ch”, como em “chave”', 'šeit (aqui)'],
        ['ž', '“j”, como em “já”', 'žurnāls (revista)'],
        ['dz / dž', '“dz”, como em “pizza” dita à italiana / “dj”, como em “adjetivo”', 'dziesma (canção)'],
        ['j', '“i” rápido, como em “iate”', 'jā (sim)'],
        ['ģ', '“g” palatal: quase um “dj” suave, com a língua no céu da boca', 'ģimene (família)'],
        ['ķ', '“k” palatal: quase um “tch” suave, com a língua no céu da boca', 'ķirsis (cereja)'],
        ['ļ', '“lh”, como em “filho”', 'ļoti (muito)'],
        ['ņ', '“nh”, como em “ninho”', 'viņa (ela)'],
      ],
    },
  },
];
