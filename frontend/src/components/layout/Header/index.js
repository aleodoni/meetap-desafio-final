import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/components/layout/Logo';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <Logo />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alexandre Odoni</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button>Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
