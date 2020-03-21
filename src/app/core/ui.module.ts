import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatTreeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsUIModule } from "./forms.module";
import { ImgFallbackModule } from "ngx-img-fallback";
import { LayoutModule } from "@angular/cdk/layout";
import { ObserversModule } from "@angular/cdk/observers";
import { CKEditorModule } from "ng2-ckeditor";
import { RouterModule } from "@angular/router";
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    // Material
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatTreeModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    ObserversModule,
    // Core
    FormsUIModule,
    // Third parties
    ImgFallbackModule,
    CKEditorModule
  ],
  exports: [
    // Material
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatTreeModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ObserversModule,
    FlexLayoutModule,
    // Core
    FormsUIModule,
    // Third parties
    CKEditorModule
  ],
  declarations: []
})
export class UiModule {}
