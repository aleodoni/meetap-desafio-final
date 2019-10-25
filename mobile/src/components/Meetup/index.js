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
  RegisterButton,
  Title,
} from './styles';

export default function Meetup({ data, onHandleRegister }) {
  const loading = useSelector(state => state.meetup.loading);

  return (
    <Container>
      <Imagem source={{ uri: data.banner.url }} />
      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={15} color="#888" />
          <Texto>{data.formattedDate}</Texto>
        </Date>
        <Place>
          <Icon name="room" size={15} color="#888" />
          <Texto>{data.place}</Texto>
        </Place>
        <Organizator>
          <Icon name="person" size={15} color="#888" />
          <Texto>Organizador: {data.organizer.name}</Texto>
        </Organizator>
        <RegisterButton loading={loading} onPress={onHandleRegister}>
          Realizar inscrição
        </RegisterButton>
      </Info>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    organizer: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onHandleRegister: PropTypes.func.isRequired,
};
