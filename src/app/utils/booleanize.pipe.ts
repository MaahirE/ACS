import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booleanize'
})
export class BooleanizePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return (value === 'true');
    }

}