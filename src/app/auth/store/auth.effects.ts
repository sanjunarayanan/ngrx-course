import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./auth.actions";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.userLogin),
        tap((action) => {
          localStorage.setItem("user", JSON.stringify(action.user));
        }),
      ),
    { dispatch: false },
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.userLogout),
        tap(() => {
          localStorage.removeItem("user");
          this.router.navigate(["/login"]);
        }),
      );
    },
    { dispatch: false },
  );
}
