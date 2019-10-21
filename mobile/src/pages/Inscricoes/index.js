import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import RegisteredMeetup from '~/components/RegisteredMeetup';
import { cancelRegisterRequest } from '~/store/modules/register/actions';

import api from '~/services/api';

import { Container, List, Title } from './styles';

function Inscricoes({ isFocused }) {
  const dispatch = useDispatch();

  const [registeredMeetups, setRegisteredMeetups] = useState([]);
  const [page, setPage] = useState(1);

  async function loadRegisteredMeetups() {
    const response = await api.get('registrations', {
      params: { page },
    });

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
    // setPage(page + 1);
  }

  async function loadMoreMeetups() {
    await loadRegisteredMeetups();
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
        <Title>Inscrições</Title>
        <List
          // onEndReached={loadMoreMeetups}
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

Inscricoes.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Inscricoes);
