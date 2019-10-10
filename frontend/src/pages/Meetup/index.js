import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from './BannerInput';
import MyDatePicker from './MyDatePicker';
import { Container } from './styles';
import {
  updateMeetupRequest,
  createMeetupRequest,
} from '~/store/modules/meetup/actions';

export default function Meetup() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);

  const schema = Yup.object().shape({
    title: Yup.string().required('O título é obrigatório.'),
    description: Yup.string().required('A descrição é obrigatória.'),
    date: Yup.string().required('A data é obrigatória.'),
    place: Yup.string().required('A localização é obrigatória.'),
    banner: Yup.string().required('Banner Obrigatório'),
  });

  function handleSubmit({ title, description, date, place, banner }) {
    if (meetup) {
      dispatch(
        updateMeetupRequest(meetup.id, title, description, date, place, banner)
      );
    } else {
      dispatch(createMeetupRequest(title, description, date, place, banner));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="banner" />
        <Input name="title" placeholder="Título do meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <MyDatePicker name="date" placeholderText="Data do meetup" />
        <Input name="place" placeholder="Localização" />
        <div className="button">
          <button type="submit">
            <MdAddCircleOutline size={24} />
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
