import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import { NgPipesModule } from "angular-pipes";
import { MatCellTemplateDirective } from "./directives/mat-cell-template.directive";
import { MatTableAdvancedComponent } from "./mat-table-advanced.component";
import { MatTableAdvancedService } from "./mat-table-advanced.service";

@NgModule({
  declarations: [MatTableAdvancedComponent, MatCellTemplateDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgPipesModule,
    MatCardModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatSliderModule,
    MatAutocompleteModule
  ],
  providers: [],
  exports: [MatTableAdvancedComponent, MatCellTemplateDirective]
})
export class MatAdvancedTableModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatAdvancedTableModule,
      providers: [MatTableAdvancedService]
    };
  }
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: MatAdvancedTableModule,
      providers: []
    };
  }
}
