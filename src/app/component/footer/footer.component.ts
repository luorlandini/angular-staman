import { Component, OnInit, Input } from '@angular/core';
import { arraysAreNotAllowedInProps } from '@ngrx/store/src/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() paginations: number;
  @Input() onChangePage:  (args: any) => void;
  numbersItem: Array<number> = [];
  constructor() {

  }

  ngOnInit(): void {
    console.log('paginations')
    console.log(this.paginations)
    this.numbersItem = Array.from({length: 12}, (_, i) => i + 1)

  }

  /*
  handleChangePage(page){
    this.handleChangePage(page)
  }*/


}
