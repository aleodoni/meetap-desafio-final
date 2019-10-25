import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  Container,
  Imagem,
  Info,
  Date,
  Place,
  Organizator,
  Texto,
  CancelButton,
  Title,
} from './styles';

export default function RegisteredMeetup({ data, onHandleCancel }) {
  const loading = useSelector(state => state.meetup.loading);

  return (
    <Container>
      <Imagem source={{ uri: data.meetup.banner.url }} />
      <Info>
        <Title>{data.meetup.title}</Title>
        <Date>
          <Icon name="event" size={15} color="#888" />
          <Texto>{data.formattedDate}</Texto>
        </Date>
        <Place>
          <Icon name="room" size={15} color="#888" />
          <Texto>{data.meetup.place}</Texto>
        </Place>
        <Organizator>
          <Icon name="person" size={15} color="#888" />
          <Texto>Organizador: {data.meetup.organizer.name}</Texto>
        </Organizator>
        <CancelButton loading={loading} onPress={onHandleCancel}>
          Cancelar inscrição
        </CancelButton>
      </Info>
    </Container>
  );
}

RegisteredMeetup.propTypes = {
  data: PropTypes.shape({
    meetup: PropTypes.shape({
      banner: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      organizer: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    formattedDate: PropTypes.string.isRequired,
  }).isRequired,
  onHandleCancel: PropTypes.func.isRequired,
};
