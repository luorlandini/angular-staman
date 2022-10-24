import { ConfigActions, EConfigActions } from "../actions/config.action";
import { initialTolcConfigState, TolcConfigState } from './../state/config.state';

export const configReducers = (
    state = initialTolcConfigState,
    action: ConfigActions
): TolcConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {

            return {
                ...state,
                questions: action.payload.questions,
                configuration: action.payload.configuration

            };
        }

        default:
            return state;

    }
}