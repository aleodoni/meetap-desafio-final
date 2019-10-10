import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever, MdModeEdit, MdEvent, MdPlace } from 'react-icons/md';

import { Container, Content, Header, Meetup, Info } from './styles';
import history from '~/service/history';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

export default function Detail() {
  const meetup = useSelector(state => state.meetup.meetup);

  const dispatch = useDispatch();

  function handleUpdateClick() {
    history.push('/meetup');
  }

  function handleCancelClick() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>{meetup.title}</h1>
          <span>
            <button
              className="editar"
              type="button"
              onClick={handleUpdateClick}
            >
              <MdModeEdit size={24} />
              Editar
            </button>
            <button
              className="cancelar"
              type="button"
              onClick={handleCancelClick}
            >
              <MdDeleteForever size={24} />
              Cancelar
            </button>
          </span>
        </Header>
        <Meetup>
          <img src={meetup.banner.url} alt="banner" />
          {/* <span>
            <p align="justify">{meetup.description}</p>
          </span> */}
          <div className="text">{meetup.description}</div>
          <Info>
            <MdEvent size={24} />
            <span>{meetup.parsedDate}</span>
            <MdPlace size={24} />
            <span>{meetup.place}</span>
          </Info>
        </Meetup>
      </Content>
    </Container>
  );
}
