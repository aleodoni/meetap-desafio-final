import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import { Container, Content, Header, Meetup } from './styles';
import api from '~/service/api';
import { selectMeetupRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('usermeetups');

      const data = response.data.map(meetup => {
        const parsedDate = format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às ' HH:mm'h'",
          { locale: pt }
        );

        return {
          parsedDate,
          ...meetup,
        };
      });
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleMeetupDetailsClick(meetupId) {
    dispatch(selectMeetupRequest(meetupId));
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>Meus meetups</h1>
          <button type="button">
            <MdAddCircleOutline size={24} />
            Novo meetup
          </button>
        </Header>
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id}>
              <strong>{meetup.title}</strong>
              <span>
                {meetup.parsedDate}
                <button
                  type="button"
                  onClick={() => handleMeetupDetailsClick(meetup.id)}
                >
                  <MdChevronRight size={30} color="#fff" />
                </button>
              </span>
            </Meetup>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
