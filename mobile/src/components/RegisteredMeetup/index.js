import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

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

export default function Meetup({ data, onHandleCancel }) {
  const dispatch = useDispatch();

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
          <Texto>{data.meetup.organizer.name}</Texto>
        </Organizator>
        <CancelButton loading={loading} onPress={onHandleCancel}>
          Cancelar inscrição
        </CancelButton>
      </Info>
    </Container>
  );
}
