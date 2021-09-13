import { NgModule } from '@angular/core';
import { MaxNumberPipe } from './max-number.pipe';
import { StringLengthPipe } from './string-shortener.pipe';

@NgModule({
    declarations: [
        StringLengthPipe,
        MaxNumberPipe
    ],
    exports: [
        StringLengthPipe,
        MaxNumberPipe
    ]
})
export class SharedPipesModule { }
