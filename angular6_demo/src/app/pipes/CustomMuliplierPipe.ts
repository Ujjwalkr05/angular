import { Pipe, PipeTransform} from '@angular/core';

@Pipe ({ 
   name: 'multiplier' 
})


export class CustomMuliplierPipe implements PipeTransform {
	
    transform(value: number, multiply: number): number {
		  return multiply * value; 
    } 
}