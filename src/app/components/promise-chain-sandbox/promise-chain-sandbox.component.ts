import { Component } from '@angular/core';
@Component({
  selector: 'promise-chain-sandbox',
  templateUrl: './promise-chain-sandbox.component.html',
  styleUrls: ['./promise-chain-sandbox.component.scss']
})
export class PromiseChainSandboxComponent {


  constructor() { }

  public ngOnInit(): void {
      console.log('[ngOnInit()] promise-chain-sandbox');
      this.testPromiseChain();
  }

  public testPromiseChain(): void {
    console.log('[testPromiseChain]');
      let p = new Promise((resolve, reject) => {
          resolve(true);
      });
      
      p.then(accountAlreadyExists => {
        console.log('[Then] accountAlreadyExists => ', accountAlreadyExists);
        if(accountAlreadyExists) {
           return Promise.reject('Account already exists!');
        } else {
            return Promise.resolve(true);
        }
      }).then(result => {
        console.log('[then - 3] result => ', result);
        return Promise.resolve(true);
      }).then(result => {
          console.log('This is where the API would return a 200OK ', result);
          return Promise.resolve('200 - OK');
      }).catch(error => {
        console.log('[catch] error => ', error);
      })

  }

}
