import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  HostBinding
} from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { markFormGroupTouched } from "@app/utils/forms.utils";
import { Select, Store } from "@ngxs/store";
import { AuthState } from "@app/core/store/app.state";
import { Login } from "@app/core/store/actions/auth.action";
import { APP_NAME, APP_LOGO, APP_IMAGES } from "@app/config/di";
import { AppImage, AppImagesEnum } from "@app/config/images";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  @HostBinding("style.background-image")
  public get background(): string {
    return this.appImgs[AppImagesEnum.LoginBackground];
  }

  @Select(AuthState.authErrors) error: Observable<Error | null>;
  @Select(AuthState.isAuthenticating) isAuthenticating: Observable<boolean>;
  visiblePwd: boolean;
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private store: Store,
    @Inject(APP_NAME) public appName: string,
    @Inject(APP_LOGO) public appLogo: string,
    @Inject(APP_IMAGES) public appImgs: AppImage
  ) {
    this.form = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  ngOnInit() {}

  login() {
    markFormGroupTouched(this.form);
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(new Login(this.form.value));
  }
}
