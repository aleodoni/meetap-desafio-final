import {takeLatest, call, put, all} from 'redux-saga/effects';
import pt from 'date-fns/locale/pt';
import {format, parseISO} from 'date-fns';
import {Alert} from 'react-native';

import api from '~/services/api';

import {
  cancelRegisterSuccess,
  cancelRegisterFailure,
  registerSuccess,
  registerFailure
} from './actions';

export function* register({payload}) {
  try {
    const {meetupId} = payload;

    const response = yield call(api.post, 'registrations',{
      meetup_id:  meetupId,
    });
    console.tron.log(response)

    yield put(registerSuccess(response.data));

  } catch (err) {
    console.tron.log(err.description);
    Alert.alert('Falha ao registrar-se no meetup', 'Verifique seus dados.');
    yield put(registerFailure());
  }
}

export function* updateMeetup({payload}) {
  try {
    const {id} = payload;

    yield call(api.put, `usermeetups/${id}`, {
      ...payload,
      banner_id: Number(payload.banner),
    });

    yield put(updateMeetupSuccess(payload));

    Alert.alert('Sucesso', 'Meetup alterado com sucesso.');

    // history.push('/');
  } catch (err) {
    Alert.alert('Falha ao salvar meetup', 'Verifique seus dados.');
    yield put(updateMeetupFailure());
  }
}

export function* createMeetup({payload}) {
  try {
    yield call(api.post, 'usermeetups', {
      ...payload,
      banner_id: Number(payload.banner),
    });

    yield put(createMeetupSuccess(payload));

    Alert.alert('Sucesso', 'Meetup adicionado com sucesso.');

    // history.push('/');
  } catch (err) {
    Alert.alert('Falha ao salvar meetup', 'Verifique seus dados.');
    console.l
    yield put(registerFailure());
  }
}

export function* cancelMeetup({payload}) {
  try {
    const {id} = payload;

    yield call(api.delete, `usermeetups/${id}`);

    // history.push('/');

    yield put(cancelMeetupSuccess());

    Alert.alert('Sucesso', 'Meetup cancelada com sucesso.');
  } catch (err) {
    Alert.alert('Falha ao cancelar meetup', 'Verifique seus dados.');
    yield put(cancelMeetupFailure());
  }
}

export default all([
  takeLatest('@register/REGISTER_REQUEST', register),

]);
