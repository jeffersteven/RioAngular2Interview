import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'widget',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './widget.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './widget.component.html'

})
export class widgetComponent implements OnInit{
  // Set our default values
  localState = { value: '' };
  apps: {};
  url_base_img="assets/img/";
  popularimg=this.url_base_img+"popular.png";
  idapp;
  sub: any;
  data;
  // TypeScript public modifiers
  constructor(public appState: AppState, 
    private http: Http, 
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.idapp = params['id']);


    var observable = this.http.get('https://demo4475807.mockable.io/templates_by_apps').map(res => res.json());
    Observable.forkJoin([observable]).subscribe(results => {      
      this.apps = results[0];
      this.data=this.apps;
      console.log(this.apps);
      if(this.data.filter){
        console.log(this.data);
      }
    });    
  }

}

