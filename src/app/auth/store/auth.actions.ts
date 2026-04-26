import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { User } from "../model/user.model";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    "User Login": props<{ user: User }>(),
    "User Logout": emptyProps(),
  },
});
