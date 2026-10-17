import { View } from 'react-native';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, MarcosArea } from '@/components/area/AreaTrilha';
import { MARCOS_MKT_BRASIL } from '@/data/marketing/ideias';

/** A propaganda no Brasil: a história em marcos e as regras que valem para quem anuncia. */
export default function MktBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho area="marketing" titulo="Marketing no Brasil" subtitulo="Do primeiro anúncio de jornal à lei de proteção de dados, e as regras que valem hoje." />

      <SectionTitle>A história, ano a ano</SectionTitle>
      <MarcosArea area="marketing" marcos={MARCOS_MKT_BRASIL} />

      <SectionTitle>As regras de quem anuncia</SectionTitle>
      <View className="gap-2">
        <FichaArea
          titulo="Código de Defesa do Consumidor"
          linha="Lei nº 8.078/1990, arts. 30, 36 a 38"
          paragrafos={[
            'O que o anúncio promete vira parte do contrato (art. 30): a loja tem de cumprir.',
            'A propaganda tem de ser reconhecível como propaganda (art. 36), e não pode ser enganosa nem abusiva (art. 37).',
            'Quem anuncia é quem tem de provar que o anúncio é verdadeiro (art. 38).',
          ]}
        />
        <FichaArea
          titulo="CONAR"
          linha="Conselho Nacional de Autorregulamentação Publicitária, 1980"
          paragrafos={[
            'Qualquer pessoa pode mandar uma queixa sobre um anúncio pelo site do CONAR. O conselho julga e pode recomendar que o anúncio mude ou saia do ar.',
          ]}
        />
        <FichaArea
          titulo="Crianças"
          linha="Resolução Conanda nº 163/2014 e CDC, art. 37, § 2º"
          paragrafos={['A publicidade que se aproveita da inexperiência da criança é abusiva, e a Resolução 163 detalha o que conta: linguagem infantil, personagens, brindes e desenhos animados para convencer a criança a consumir.']}
        />
        <FichaArea
          titulo="Dados pessoais"
          linha="LGPD, Lei nº 13.709/2018"
          paragrafos={['Para usar os seus dados num anúncio ou mandar e-mail de propaganda, a empresa precisa de uma base legal, como o seu consentimento, e você pode pedir para ver, corrigir e apagar os seus dados.']}
        />
      </View>
    </Screen>
  );
}
