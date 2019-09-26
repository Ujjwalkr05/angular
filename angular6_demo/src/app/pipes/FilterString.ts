
			
import { Pipe, PipeTransform} from '@angular/core';

@Pipe ({ 
   name: 'filterString' 
})


export class FilterString implements PipeTransform {
	
     transform(languagesNames: string[], reqLanguage: string): string[] { 
		  
		  var filterLanguageNames:string[] = [];
		  
		  for(var i=0; i<languagesNames.length; i++) {
			if(languagesNames[i] == reqLanguage) {
				filterLanguageNames.push(languagesNames[i]);
			}
		  }
		  return filterLanguageNames;
   } 
}