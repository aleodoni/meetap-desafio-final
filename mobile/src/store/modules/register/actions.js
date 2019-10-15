export function registerRequest(
  meetupId,
) {
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


export function cancelRegisterRequest(
  meetupId,
) {
  return {
    type: '@register/CANCEL_REGISTER_REQUEST',
    payload: { meetupId },
  };
}

export function cancelRegisterSuccess(meetup) {
  return {
    type: '@register/CANCEL_REGISTER_SUCCESS',
    payload: { meetup },
  };
}

export function cancelRegisterFailure() {
  return {
    type: '@register/CANCEL_REGISTER_FAILURE',
  };
}
