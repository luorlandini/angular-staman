import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { TolcConfig } from "src/app/models/config.model";
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.action';
import { ConfigService } from './../../services/config.service';


@Injectable()
export class ConfigEffects {
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions) { }

    getConfig = createEffect(() =>
        this._actions$.pipe(
            ofType<GetConfig>(EConfigActions.GetConfig),
            switchMap(() => this._configService.getConfig()),
            switchMap((config: TolcConfig) => {
                return of(new GetConfigSuccess(config));
            })
        )
    )

}