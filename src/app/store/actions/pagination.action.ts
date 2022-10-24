import { Action } from "@ngrx/store";
import { pagination } from "../../models/pagination.model";

export enum EPaginationActions {
    ChangePage = '[Pagination] Change page ',

  }

export class ChangePage implements Action {
    public readonly type = EPaginationActions.ChangePage;
    constructor (public payload: pagination) {}
}

export type PaginationActions = ChangePage;