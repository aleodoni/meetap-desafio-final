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
      case '@meetup/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/UPDATE_SUCCESS': {
        draft.meetup = null;
        draft.meetupId = null;
        draft.loading = false;
        break;
      }
      case '@meetup/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meetup/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CREATE_SUCCESS': {
        draft.meetup = null;
        draft.meetupId = null;
        draft.loading = false;
        break;
      }
      case '@meetup/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meetup/CANCEL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CANCEL_SUCCESS': {
        draft.meetup = null;
        draft.meetupId = null;
        draft.loading = false;
        break;
      }
      case '@meetup/CANCEL_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meetup/CLEAN': {
        draft.meetup = null;
        draft.meetupId = null;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
