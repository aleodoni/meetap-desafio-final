import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, Title, List, DateSelect, Button } from './styles';
import api from '~/services/api';
import { registerRequest } from '~/store/modules/register/actions';

function Dashboard({ isFocused }) {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadMeetups() {
    const response = await api.get('meetups', {
      params: { date, page },
    });

    if (response.data.count > 0) {
      const data = response.data.rows.map(meetup => {
        const formattedDate = format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às 'HH:mm'h'",
          { locale: pt }
        );

        return {
          ...meetup,
          formattedDate,
        };
      });

      const retorno = [...meetups, ...data];

      setMeetups(retorno);
      setPage(page + 1);
    }
  }

  async function loadMoreMeetups() {
    await loadMeetups();
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused, date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
    setMeetups([]);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
    setMeetups([]);
  }

  function handleRegister(meetupId) {
    dispatch(registerRequest(meetupId));
  }

  return (
    <Background>
      <Container>
        <DateSelect>
          <Button onPress={handlePrevDay}>
            <Icon name="chevron-left" size={25} color="#fff" />
          </Button>
          <Title>{dateFormatted}</Title>
          <Button onPress={handleNextDay}>
            <Icon name="chevron-right" size={25} color="#fff" />
          </Button>
        </DateSelect>
        <List
          onEndReached={loadMoreMeetups}
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              onHandleRegister={() => handleRegister(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

function DashboardIcon({ tintColor }) {
  return <Icon name="list" size={20} color={tintColor} />;
}

DashboardIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: DashboardIcon,
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
