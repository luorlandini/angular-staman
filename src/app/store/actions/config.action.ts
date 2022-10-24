import { Action } from "@ngrx/store";
import { TolcConfig } from "../../models/config.model";


export enum EConfigActions {
    GetConfig = '[Config] Get Action ',
    GetConfigSuccess = '[Config] Get Action Success'
  }

export class GetConfig implements Action {
    public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
    public readonly type = EConfigActions.GetConfigSuccess;
    constructor (public payload:  TolcConfig) {}
}

export type ConfigActions =
  | GetConfig
  | GetConfigSuccess;