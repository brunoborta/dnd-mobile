import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectRace() {
  return (
    <Background>
      <Container>
        <Text>Select Race</Text>
      </Container>
    </Background>
  );
}
