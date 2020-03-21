import { getActionTypeFromInstance } from "@ngxs/store";
import { Logout } from "../actions/auth.action";

export function logoutPlugin(state, action, next) {
  if (getActionTypeFromInstance(action) === Logout.type) {
    state = {};
  }
  return next(state, action);
}
