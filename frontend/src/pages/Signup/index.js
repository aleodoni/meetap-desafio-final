import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import Logo from '../../components/layout/Logo';

export default function Signup() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/signin">Já tenho login</Link>
      </Form>
    </>
  );
}
