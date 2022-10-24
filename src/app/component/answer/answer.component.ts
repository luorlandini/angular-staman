import { Answer } from './../../models/answer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input() answers: any;

  constructor() { }

  ngOnInit(): void {
  }

}
