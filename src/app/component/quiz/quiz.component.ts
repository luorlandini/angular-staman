import { Question } from './../../models/question.model';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() questions : any[];
  @Input() position : number;


  ngOnInit(): void {
    console.log('questionsyy');
    console.log(this.questions);

  }

  ngOnChanges(){
    console.log('questionsxx');
    console.log(this.questions);
    console.log(this.position);


  }
}
