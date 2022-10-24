import { Answer } from './../../models/answer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: string;
numbers: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
