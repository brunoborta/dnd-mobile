import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';

// import api from '~/services/api';

import { Container } from './styles';

function Dashboard({ isFocused }) {
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   async function loadCharacters() {
  //     const response = await api.get('characters');
  //     setCharacters(response.data);
  //   }
  //   if (isFocused) {
  //     loadCharacters();
  //   }
  // }, [isFocused]);
  return (
    <Background>
      <Container>
        <Text>Dashboard</Text>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Personagens',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
