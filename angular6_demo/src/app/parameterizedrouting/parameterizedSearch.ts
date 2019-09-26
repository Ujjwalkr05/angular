import {Component,Injectable, } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Http , Response } from '@angular/http';

import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Routes, RouterModule, ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

class ParameterizedSearchItem {
  constructor(public name: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string) {
  }
}

@Injectable()
export class ParameterizedSearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: ParameterizedSearchItem[];

  constructor(private http: Http) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = this.apiRoot  + "?term=" + term  + "&media=music&limit=20&callback=JSONP_CALLBACK";
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { // Success
                this.results = res.json().results.map(item => {
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.trackViewUrl,
                      item.artworkUrl30,
                      item.artistId
                  );
                });
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }
}




@Component({
  selector: 'app-search',
  templateUrl: 'app/routing/searchForm.html',
  providers: [ParameterizedSearchService], 
})

export class ParameterizedSearchComponent {
  private loading: boolean = false;

  constructor(private searchService: ParameterizedSearchService, private route: ActivatedRoute) {
	this.route.params.subscribe( params => console.log(params));
	this.route.params.subscribe( params => this.doSearch(params['term']));
  }

  doSearch(term: string) {
    this.loading = true;
    this.searchService.search(term).then(_ => this.loading = false)
  }
}

export class SearchItem {
  trackName:string;
  artistName:string;
  trackViewUrl:string;
  artworkUrl30:string;
  artistId:string;
  constructor(trackName:string, artistName:string, trackViewUrl:string, artworkUrl30:string, artistId:string) {
    this.trackName = trackName;
    this.artistName = artistName;
    this.trackViewUrl = trackViewUrl;
    this.artworkUrl30 = artworkUrl30;
    this.artistId = artistId;

  }


}
