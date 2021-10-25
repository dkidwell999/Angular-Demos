import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableDemoComponent } from './observable-demo.component';
import { ObservableDemoService } from './observable-demo.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ObservableDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ObservableDemoComponent
  ],
  providers: [
    ObservableDemoService,
    HttpClient
  ]
})
export class ObservableDemoModule { }
