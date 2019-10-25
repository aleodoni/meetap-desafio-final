import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import RegisteredMeetup from '~/components/RegisteredMeetup';
import Logo from '~/components/Logo';

import { cancelRegisterRequest } from '~/store/modules/register/actions';

import api from '~/services/api';

import { Container, List } from './styles';

function Inscricoes({ isFocused }) {
  const dispatch = useDispatch();

  const [registeredMeetups, setRegisteredMeetups] = useState([]);

  async function loadRegisteredMeetups() {
    const response = await api.get('registrations');

    console.tron.log(response);

    const data = response.data.map(meetup => {
      const formattedDate = format(
        parseISO(meetup.meetup.date),
        "dd 'de' MMMM', às 'HH:mm'h'",
        { locale: pt }
      );

      return {
        ...meetup,
        formattedDate,
      };
    });

    setRegisteredMeetups(data);
  }

  useEffect(() => {
    if (isFocused) {
      console.tron.log('FOCUSED');
      loadRegisteredMeetups();
    }
  }, [isFocused]);

  async function handleCancel(registrationId) {
    dispatch(cancelRegisterRequest(registrationId));
    const newList = registeredMeetups.filter(item => {
      console.tron.log(item);
      return item.id !== registrationId;
    });
    console.tron.log(newList);
    setRegisteredMeetups(newList);
  }

  return (
    <Background>
      <Container>
        <Logo />
        <List
          data={registeredMeetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <RegisteredMeetup
              data={item}
              onHandleCancel={() => handleCancel(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

function IncricoesIcon({ tintColor }) {
  return <Icon name="local-offer" size={20} color={tintColor} />;
}

IncricoesIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Inscricoes.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

Inscricoes.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: IncricoesIcon,
};

export default withNavigationFocus(Inscricoes);
