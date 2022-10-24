import { TolcConfig } from './../../models/config.model';

export interface TolcConfigState {
    configuration: [];
    questions: []
}

export const initialTolcConfigState: TolcConfigState = {
    configuration: null,
    questions: null
}