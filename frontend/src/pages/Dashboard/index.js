import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Content, Header } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Meus meetups</h1>
          <button>
            <MdAddCircleOutline size={24} />
            Novo meetup
          </button>
        </Header>
      </Content>
    </Container>
  );
}
