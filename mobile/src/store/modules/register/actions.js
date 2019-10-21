export function registerRequest(meetupId) {
  return {
    type: '@register/REGISTER_REQUEST',
    payload: { meetupId },
  };
}

export function registerSuccess(meetup) {
  return {
    type: '@register/REGISTER_SUCCESS',
    payload: { meetup },
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}

export function cancelRegisterRequest(registrationId) {
  return {
    type: '@register/CANCEL_REGISTER_REQUEST',
    payload: { registrationId },
  };
}

export function cancelRegisterSuccess() {
  return {
    type: '@register/CANCEL_REGISTER_SUCCESS',
  };
}

export function cancelRegisterFailure() {
  return {
    type: '@register/CANCEL_REGISTER_FAILURE',
  };
}
