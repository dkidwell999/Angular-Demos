import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './directives/custom-validators/forbidden-name.validator';
import { validateMatchingEmailsDirective } from './directives/custom-validators/email-confirm.validator';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormModule } from './components/reactive-form/reactive-form.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ForbiddenValidatorDirective,
    validateMatchingEmailsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
