import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


/**
 * https://angular.io/guide/pipes
 *  */

/** Immutable.js
 *  https://immutable-js.com/
 * 
 */

@Component({
  selector: 'pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipesDemoComponent {

  public inputValue: string = '';
  public numValue: number;

  public nums: number[] = [];

  public asyncValue$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  })

  //public nums: List<number> = [];

  constructor() { }

  public ngOnInit(): void {
    
  }


  //Mutate array
  public addNumberToNums(n: number): void {
    if(n) {
      this.nums.push(n);
      this.numValue = null;
    }
  }
  public addNumberToNumsImmutably(n: number): void {
    if(n) {
      this.nums = [...this.nums, n];
      this.numValue = null;
    }
  }

  public onNextValueClicked(): void {
    this.asyncValue$.next(this.asyncValue$.value + 1);
  }
}
