import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";

import { AuthActions } from "./auth.actions";
import { authState } from "./store.index";

export const initialAuthState: authState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.userLogin, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),

  on(AuthActions.userLogout, (state) => ({
    ...state,
    user: undefined,
  })),
);
