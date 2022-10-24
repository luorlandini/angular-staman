import { Action } from '@ngrx/store';
import { initialStatePaginationState, paginationState } from './../state/pagination.state';
import { EPaginationActions,  PaginationActions } from '../actions/pagination.action';

export const paginationReducer = (
    state = initialStatePaginationState,
    action: PaginationActions
): paginationState => {

    switch(action.type){
        case EPaginationActions.ChangePage: {

            return {
                ...state,
                page: action.payload.page
            }

        }

    }

}