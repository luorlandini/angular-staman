import { createSelector } from '@ngrx/store';


const paginationState = (state) => state.pagination;

export const selectPagination = createSelector(
    paginationState,
    (state) => state.pagination
)
