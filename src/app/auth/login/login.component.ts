import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AuthActions } from "../store/auth.actions";
import { authState } from "../store/store.index";

interface AppState {
  auth: authState;
}

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  standalone: false,
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const data = this.form.value;
    this.auth
      .login(data.email, data.password)
      .pipe(
        tap((user) => {
          console.log("Dispatching action:", user);
          this.store.dispatch(AuthActions.userLogin({ user }));
          this.router.navigateByUrl("/courses");
        }),
      )
      .subscribe(noop, () => alert("login failed"));
  }
}
