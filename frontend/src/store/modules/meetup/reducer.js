import produce from 'immer';

const INITIAL_STATE = {
  meetupId: null,
  meetup: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SELECT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/SELECT_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.meetupId = action.payload.meetup.id;
        draft.loading = false;
        break;
      }
      case '@meetup/SELECT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
