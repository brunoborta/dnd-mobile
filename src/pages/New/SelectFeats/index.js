import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectFeats() {
  return (
    <Background>
      <Container>
        <Text>Select Feats</Text>
      </Container>
    </Background>
  );
}
