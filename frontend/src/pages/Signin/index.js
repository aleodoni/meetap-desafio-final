import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import Logo from '../../components/layout/Logo';

export default function Signin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
