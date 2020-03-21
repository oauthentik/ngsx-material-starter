import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "@app/models/menu";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  constructor(private router: Router) {}
  @Input() breadcrumbs: MenuItem[];
  @Input() routerLinkActiveClasslist = ["active"];
  navigate(slugs) {
    if (slugs && slugs.length) {
      this.router.navigate(slugs);
    }
  }
}
