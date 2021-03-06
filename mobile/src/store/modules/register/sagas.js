import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  cancelRegisterSuccess,
  cancelRegisterFailure,
  registerSuccess,
  registerFailure,
} from './actions';

export function* registerMeetup({ payload }) {
  try {
    const { meetupId } = payload;

    const response = yield call(api.post, 'registrations', {
      meetup_id: meetupId,
    });

    yield put(registerSuccess(response.data));

    Alert.alert('Sucesso', 'Registro na meetup efetuado com sucesso.');
  } catch (err) {
    Alert.alert(
      'Falha ao registrar-se no meetup',
      err.response.data.error.message
    );

    yield put(registerFailure());
  }
}

export function* cancelRegister({ payload }) {
  try {
    const { registrationId } = payload;

    yield call(api.delete, `registrations/${registrationId}`);

    Alert.alert('Sucesso', 'Registro cancelado com sucesso.');

    yield put(cancelRegisterSuccess());
  } catch (err) {
    Alert.alert('Falha ao cancelar meetup', 'Verifique seus dados.');
    yield put(cancelRegisterFailure());
  }
}

export default all([
  takeLatest('@register/REGISTER_REQUEST', registerMeetup),
  takeLatest('@register/CANCEL_REGISTER_REQUEST', cancelRegister),
]);
