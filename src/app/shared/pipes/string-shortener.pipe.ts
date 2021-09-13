import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'stringLength',
    pure: true
})
export class StringLengthPipe implements PipeTransform {
    transform(s: string, n: number): string {
        return this.getShortenedString(s, n);
    }
    getShortenedString(s: string, n: number): string {
        if (s.length < n) {
            return s;
        } else {
            return s.substring(0, n - 3) + '...';
        }
    }
}
