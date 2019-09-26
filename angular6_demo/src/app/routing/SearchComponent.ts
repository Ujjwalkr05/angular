import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component ( {
	selector:"my-app",
	templateUrl: "app/routing/search.html"
})


export class SearchComponent {
    searchValue = ""
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe( params => this.searchValue = params["what"]);
    }
}