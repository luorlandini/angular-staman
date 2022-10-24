import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { TolcConfig } from '../models/config.model';


@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    static nextQuestion: any;
    static getConfig() {
      throw new Error('Method not implemented.');
    }

    configUrl = `${environment.apiUrl}quiz`;

    constructor(private _http: HttpClient) {}

    getConfig(): Observable<TolcConfig>{
        return this._http.get<TolcConfig>(this.configUrl);
    }


    nextQuestion(next): void {
        console.log(next);

    }



}