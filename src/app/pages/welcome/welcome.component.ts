import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

  clickHandler(event: MouseEvent) {
    console.log(event);
  }
}
