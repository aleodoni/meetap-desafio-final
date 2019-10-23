import React from 'react';

import { Container, Imagem } from './styles';

import logo from '~/assets/m.png';

export default function Logo() {
  return (
    <Container>
      <Imagem source={logo} />
    </Container>
  );
}
