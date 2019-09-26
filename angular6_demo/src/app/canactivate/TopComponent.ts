import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: '{{data.message}}'
})
export class TopComponent implements OnInit {
  data: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
  
    this.data = this.activatedRoute.snapshot.data;
	console.log("****************** " + this.data.message);
  }
}