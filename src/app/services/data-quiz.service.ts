import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from "@ngrx/store";
import * as DataActions from "../store/actions/data-quiz.action";
import { AppState, getAllItems, getDataState } from "../store/reducers";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private store: Store<AppState>, private http: HttpClient) { }
    loadData() {
        return this.http.get('http://localhost:3000/questions');
    }

    load() {
        this.store.dispatch(new DataActions.LoadDataBegin());
    }
    getData() {
        return this.store.select(getDataState);
    }
    getItems() {
        return this.store.select(getAllItems);
    }

}