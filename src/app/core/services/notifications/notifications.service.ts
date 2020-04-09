import { Injectable, NgZone } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from "@angular/material";
import { LoadingIndicatorComponent } from "@app/shared/components/loading-indicator/loading-indicator.component";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor(private snackBar: MatSnackBar, private readonly zone: NgZone) {}
  private _loadingRef: MatSnackBarRef<LoadingIndicatorComponent> = null;
  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: "default-notification-overlay",
    });
  }

  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: "info-notification-overlay",
    });
  }

  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: "success-notification-overlay",
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: "warning-notification-overlay",
    });
  }

  error(message: string) {
    this.show(message, {
      duration: 5000,
      panelClass: "error-notification-overlay",
    });
  }
  showLoading(label?: string) {
    this.zone.run(
      () =>
        (this._loadingRef = this.snackBar.openFromComponent(
          LoadingIndicatorComponent,
          {
            data: label,
            duration: -1,
          }
        ))
    );
  }
  closeLoading() {
    if (this._loadingRef) {
      this._loadingRef.dismiss();
    }
  }
  private show(message: string, configuration: MatSnackBarConfig) {
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
