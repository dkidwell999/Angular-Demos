import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class ObservableDemoService {

    constructor(public httpClient: HttpClient) {

    }
    public getCountries(): Observable<string[]> {
        return of(
            [
                'United states',
                'Canada',
                'Mexico'
            ],
        )
    }

    public getCryptoPrices(): Observable<any> {
        return this.httpClient.get('https://api.coinbase.com/v2/exchange-rates', {
            headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'http://localhost:4200'},
        });
    }
}