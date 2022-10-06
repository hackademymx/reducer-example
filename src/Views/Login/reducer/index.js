import { initialState } from "./constants";
import { actions } from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MODIFY_USER:
      return {
        ...state,
        user: {
          ...state.user,
          [action.id]: action.value,
        },
      };
    case actions.LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.value,
      };
    default:
      return state;
  }
};

export { initialState, actions, reducer };
