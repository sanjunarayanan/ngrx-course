import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { AuthActions } from "./auth/store/auth.actions";
import { isLoggedIn, isLoggedOut } from "./auth/store/auth.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  loading = true;
  isLoggedin$: Observable<boolean>;
  isLoggedout$: Observable<boolean>;
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit() {
    const userProfile = localStorage.getItem("user");
    if(userProfile){
      this.store.dispatch(AuthActions.userLogin({ user: JSON.parse(userProfile) }));
    }
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
    this.isLoggedin$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedout$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(AuthActions.userLogout());
  }
}
