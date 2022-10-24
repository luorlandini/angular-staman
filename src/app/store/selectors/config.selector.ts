import { createSelector } from '@ngrx/store';


const questionsState = (state) => state.questions;

export const selectQuestions = createSelector(
    questionsState,
    (state) => state.questions

)