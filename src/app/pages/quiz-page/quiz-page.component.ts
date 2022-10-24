import { state } from '@angular/animations';
import { Component, OnInit, OnChanges } from '@angular/core';
import {Store, select} from '@ngrx/store'

import { selectQuestions } from '../../store/selectors/config.selector';
import { GetConfig} from '../../store/actions/config.action';
import { ChangePage } from '../../store/actions/pagination.action';
import { ConfigService } from '../../services/config.service';

import { selectPagination } from '../../store/selectors/pagination.selector';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit, OnChanges {

  constructor(private _store: Store) {


  }
  page$ = this._store.pipe(select(selectPagination));
  questions = this._store.pipe(select(selectQuestions))
  position=0;
  private _questions:any;

  ngOnInit() {
    this._store.dispatch(new GetConfig());

  }
  ngOnChanges(){
    console.log(this.position)

  }



  handlePagination(event){

    ConfigService.nextQuestion(event)

  }

}
