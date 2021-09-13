import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CustomValidatorsModule } from "src/app/directives/custom-validators/custom-validators.module";
import { TemplateDrivenFormComponent } from "./template-driven-form.component";


@NgModule({
  declarations: [
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomValidatorsModule
  ],
  exports: [ TemplateDrivenFormComponent],
  providers: []
})
export class TemplateDrivenFormModule { }
