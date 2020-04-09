import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from "@angular/material";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    NgxMatSelectSearchModule,
    NgxsFormPluginModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMatSelectSearchModule,
  ],
  providers: [
    {
      provide: MAT_LABEL_GLOBAL_OPTIONS,
      useValue: { float: "auto" },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "outline" },
    },
  ],
})
export class FormsUIModule {}
