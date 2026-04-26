import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedIn } from "./store/auth.selectors";
import { map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl("/login");
          return false;
        }
        return true;
      }),
    );
  }
}
