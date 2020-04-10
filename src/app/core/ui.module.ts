import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { CKEditorModule } from "ng2-ckeditor";
import { ImgFallbackModule } from "ngx-img-fallback";
import { FormsUIModule } from "./forms.module";

@NgModule({
  exports: [
    CommonModule,
    // Material
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatTreeModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatButtonModule,
    FlexLayoutModule,
    // Core
    FormsUIModule,
    ImgFallbackModule,
    // Third parties
    CKEditorModule,
  ],
  declarations: [],
})
export class UiModule {}
