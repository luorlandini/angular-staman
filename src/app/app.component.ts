import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetConfig } from './store/actions/config.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-staman';
  constructor(private _store: Store) {}

  ngOnInit() {
  }


}
