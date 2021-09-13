import { Routes } from "@angular/router";
import { PipesDemoComponent } from "../components/pipes-demo/pipes-demo.component";
import { PromiseChainSandboxComponent } from "../components/promise-chain-sandbox/promise-chain-sandbox.component";
import { ReactiveFormComponent } from "../components/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "../components/template-driven-form/template-driven-form.component";

export const routes: Routes = [
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'promise-chain-sandbox', component: PromiseChainSandboxComponent},
    { path: 'pipes-demo', component: PipesDemoComponent }
  ];