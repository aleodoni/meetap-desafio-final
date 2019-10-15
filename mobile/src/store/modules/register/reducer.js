import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
  loading: false,
};

export default function register(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@register/REGISTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@register/REGISTER_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }
      case '@register/REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@register/CANCEL_REGISTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@register/CANCEL_REGISTER_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }
      case '@register/CANCEL_REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
