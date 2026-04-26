import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, authState } from "./store.index";

export const selectAuthState = createFeatureSelector<authState>(authFeatureKey);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user,
);

export const isLoggedIn = createSelector(selectUser, (user) => !!user);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
