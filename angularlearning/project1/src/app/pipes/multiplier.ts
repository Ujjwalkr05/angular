
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "multipler"
})
export class multiplier implements PipeTransform {
 transform(value:number,b:number): number {
     return value*b;
 }
}