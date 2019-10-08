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
