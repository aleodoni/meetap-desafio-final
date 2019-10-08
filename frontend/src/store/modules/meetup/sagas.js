import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/service/api';

import history from '~/service/history';

import { selectMeetupFailure, selectMeetupSuccess } from './actions';

export function* select({ payload }) {
  try {
    const { meetupId } = payload;

    console.tron.log(payload);

    const response = yield call(api.get, `usermeetups/${meetupId}`);

    const meetup = response.data;

    yield put(selectMeetupSuccess(meetup));

    history.push('/detail');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(selectMeetupFailure());
  }
}

export default all([takeLatest('@meetup/SELECT_REQUEST', select)]);
