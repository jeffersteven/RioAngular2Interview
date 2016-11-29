/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  angularclassLogo = 'assets/img/pluga-logo-blue.svg';
  name = 'Angular 2 Webpack 2 Sass';
  url = '/';
  apps: {};
  constructor(
    public appState: AppState,
    private http: Http
    ){}

  ngOnInit() {
    
    var observable = this.http.get('https://demo4475807.mockable.io/templates_by_apps').map(res => res.json());
    Observable.forkJoin([observable]).subscribe(results => {
      results[0].homeworld = results[1];
      this.apps = results[0];
    });   
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
