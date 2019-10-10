export function selectMeetupRequest(meetupId) {
  return {
    type: '@meetup/SELECT_REQUEST',
    payload: { meetupId },
  };
}

export function selectMeetupSuccess(meetup) {
  return {
    type: '@meetup/SELECT_SUCCESS',
    payload: { meetup },
  };
}

export function selectMeetupFailure() {
  return {
    type: '@meetup/SELECT_FAILURE',
  };
}

export function updateMeetupRequest(
  id,
  title,
  description,
  date,
  place,
  banner
) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: { id, title, description, date, place, banner },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_FAILURE',
  };
}

export function createMeetupRequest(title, description, date, place, banner) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { title, description, date, place, banner },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_FAILURE',
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_REQUEST',
    payload: { id },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_SUCCESS',
  };
}

export function cancelMeetupFailure() {
  return {
    type: '@meetup/CANCEL_FAILURE',
  };
}

export function cleanMeetup() {
  return {
    type: '@meetup/CLEAN',
  };
}
