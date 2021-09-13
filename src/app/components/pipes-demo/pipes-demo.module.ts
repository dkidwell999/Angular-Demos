import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedPipesModule } from "src/app/shared/pipes/shared-pipes.module";
import { PipesDemoComponent } from "./pipes-demo.component";


@NgModule({
  declarations: [
    PipesDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedPipesModule
  ],
  exports: [
    PipesDemoComponent
  ],
  providers: []
})
export class PipesDemoModule { }