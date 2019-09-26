import { Injectable } from '@angular/core';

@Injectable()
export class InjectService {
	
	getHelloMessage() : string {
		return "Hello world ";
	}
	
}