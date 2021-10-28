import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormModule } from './components/reactive-form/reactive-form.module';
import { PromiseChainSandboxModule } from './components/promise-chain-sandbox/promise-chain-sandbox.module';
import { TemplateDrivenFormModule } from './components/template-driven-form/template-driven-form.module';
import { PipesDemoModule } from './components/pipes-demo/pipes-demo.module';
import { ObservableDemoModule } from './components/observable-demo/observable-demo.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormModule,
    TemplateDrivenFormModule,
    PromiseChainSandboxModule,
    PipesDemoModule,
    ObservableDemoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
