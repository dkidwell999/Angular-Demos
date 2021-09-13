import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'maxNumber',
    pure: true
})
export class MaxNumberPipe implements PipeTransform {
    transform(nums: number[]) {
        return this.getMaxNumber(nums);
    }
    getMaxNumber(nums: number[]): number {
        let currentMax: number = Number.MIN_VALUE;
        nums.forEach(num => {
            if(num > currentMax) {
                currentMax = num;
            }
        });
        return currentMax;
    }
}
