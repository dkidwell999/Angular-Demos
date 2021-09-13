import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromiseChainSandboxComponent } from "./promise-chain-sandbox.component";


@NgModule({
  declarations: [
    PromiseChainSandboxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PromiseChainSandboxComponent
  ],
  providers: []
})
export class PromiseChainSandboxModule { }