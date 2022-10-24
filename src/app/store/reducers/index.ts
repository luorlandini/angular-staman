import { configReducers } from './config.reducers';
import { ActionReducerMap } from "@ngrx/store";

import { routerReducer } from '@ngrx/router-store';


export const appReducers : ActionReducerMap<any> = {
  questions: configReducers

}
