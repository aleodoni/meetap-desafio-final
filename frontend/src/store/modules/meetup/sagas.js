import { takeLatest, call, put, all } from 'redux-saga/effects';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/service/api';

import history from '~/service/history';

import {
  selectMeetupFailure,
  selectMeetupSuccess,
  updateMeetupSuccess,
  updateMeetupFailure,
  createMeetupSuccess,
  createMeetupFailure,
  cancelMeetupFailure,
  cancelMeetupSuccess,
} from './actions';

export function* select({ payload }) {
  try {
    const { meetupId } = payload;

    const response = yield call(api.get, `usermeetups/${meetupId}`);

    const parsedDate = format(
      parseISO(response.data.date),
      "dd 'de' MMMM', às ' HH:mm'h'",
      { locale: pt }
    );

    const meetup = {
      ...response.data,
      parsedDate,
    };

    yield put(selectMeetupSuccess(meetup));

    history.push('/detail');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(selectMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.put, `usermeetups/${id}`, {
      ...payload,
      banner_id: Number(payload.banner),
    });

    yield put(updateMeetupSuccess(payload));

    toast.success('Meetup alterado com sucesso.');

    history.push('/');
  } catch (err) {
    toast.error('Falha ao salvar meetup, verifique seus dados.');
    yield put(updateMeetupFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'usermeetups', {
      ...payload,
      banner_id: Number(payload.banner),
    });

    yield put(createMeetupSuccess(payload));

    toast.success('Meetup adicionado com sucesso.');

    history.push('/');
  } catch (err) {
    toast.error('Falha ao salvar meetup, verifique seus dados.');
    yield put(createMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `usermeetups/${id}`);

    history.push('/');

    yield put(cancelMeetupSuccess());

    toast.success('Meetup cancelada com sucesso.');
  } catch (err) {
    toast.error('Falha ao cancelar meetup, verifique seus dados.');
    yield put(cancelMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/SELECT_REQUEST', select),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/CANCEL_REQUEST', cancelMeetup),
]);
