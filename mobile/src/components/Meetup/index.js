import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useDispatch, useSelector} from 'react-redux';

import { Container, Imagem, Info, Date, Place, Organizator, Texto, RegisterButton, Title } from './styles';

export default function Meetup({data, onHandleRegister}) {

  const dispatch = useDispatch();

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
          <Texto>{data.organizer.name}</Texto>
        </Organizator>
        <RegisterButton loading={loading} onPress={onHandleRegister}>
          Realizar inscrição
        </RegisterButton>
      </Info>
    </Container>
  );
}
