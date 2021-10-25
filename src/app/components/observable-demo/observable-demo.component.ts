import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { exhaustMap, take, switchMap, mergeMap, map } from 'rxjs/operators';
import { ObservableDemoService } from './observable-demo.service';
/**
 * https://angular.io/guide/observables-in-angular
 * 
 * https://angular.io/guide/observables
 * 
 * https://rxmarbles.com/
 * 
 * https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables
 * 
 * https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
 */

@Component({
  selector: 'observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  public subscriptions: Subscription[] = [];



  public locations$ = new Observable((observer) => {
    let watchId: number;
    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition((position: {}) => {
        observer.next(position);
      }, (error: {}) => {
        observer.error(error);
      });
    } else {
      observer.error('Geolocation not available');
    }
    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });

  public countries$: Observable<string[]>;

  public num$: Observable<number>;
  public numInterval$: Observable<number>;

  public time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  })

  public exhaustMapResult$: Observable<any>;
  public mergeMapResult$: Observable<any>;
  public switchMapResult$: Observable<any>;

  public btcValue$: Observable<number>;

  constructor(public observableDemoService: ObservableDemoService) { }

  ngOnInit(): void {
    this.num$ = of(1, 2, 3);
    this.numInterval$ = interval();

    this.subscriptions.push(this.locations$.subscribe(value => console.log(value)));

    


    //Set observable to the return value of our demo API
    this.countries$ = this.observableDemoService.getCountries();

    //Pull an actual value from the public coinbase api
    this.btcValue$ = interval(1000).pipe(
      exhaustMap(__ => {
          return this.observableDemoService.getCryptoPrices().pipe(
            map( result => {
              return 1 / Number(result.data.rates['BTC'])
            })
          )
        }
      )
    );
      
    this.countries$ = this.countries$.pipe(
      map(value => {
        return value.map(country => "[Golden Hippo] - " + country)
      })
    );



    this.countries$.subscribe(countries => console.log(countries));

    const clicks: Observable<Event> = fromEvent(document, 'click');
    this.exhaustMapResult$ = clicks.pipe(
      exhaustMap(val => interval(1000).pipe(take(5)))
    );
    this.switchMapResult$ = clicks.pipe(
      switchMap(val => interval(1000).pipe(take(5)))
    );
    this.mergeMapResult$ = clicks.pipe(
      mergeMap(val => interval(1000).pipe(take(5)))
    );

    //this.exhaustMapDemo();
    //this.switchMapDemo();
    //this.mergeMapDemo();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private exhaustMapDemo(): void {
    this.exhaustMapResult$.subscribe(
      result => console.log('exhaustMap result => ', result)
    );
  }

  private switchMapDemo(): void {
    this.subscriptions.push(this.switchMapResult$.subscribe(
      result => console.log('switchMap result => ', result)
    ));
  }

  private mergeMapDemo(): void {
    this.mergeMapResult$.subscribe(
      result => console.log('mergeMap result => ', result)
    )
  }
  
}

