import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectClass() {
  return (
    <Background>
      <Container>
        <Text>Select Class</Text>
      </Container>
    </Background>
  );
}
