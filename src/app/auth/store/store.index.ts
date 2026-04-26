import { User } from "../model/user.model";

export interface authState {
  user: User | undefined;
}

export const authFeatureKey = "auth";
