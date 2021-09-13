import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './directives/custom-validators/forbidden-name.validator';
import { validateMatchingEmailsDirective } from './directives/custom-validators/email-confirm.validator';
import { ReactiveFormModule } from './components/reactive-form/reactive-form.module';
import { PromiseChainSandboxModule } from './components/promise-chain-sandbox/promise-chain-sandbox.module';
import { TemplateDrivenFormModule } from './components/template-driven-form/template-driven-form.module';
import { PipesDemoModule } from './components/pipes-demo/pipes-demo.module';

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
    PipesDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
