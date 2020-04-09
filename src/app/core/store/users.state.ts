import { User } from "@app/models/user";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { LoadUsers } from "./actions/users.action";

@State<User[]>({
  name: "users",
  defaults: [],
})
export class UsersState {
  constructor(private authService: AuthService) {}
  @Action(LoadUsers)
  loadUsers(ctx: StateContext<User[]>) {
    return this.authService.getUsers().pipe(
      tap((users) => {
        ctx.setState(users);
      })
    );
  }
}
