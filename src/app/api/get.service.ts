import { HttpResponse, HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStepInterface } from '../enums/interfaces'


@Injectable()
export class FrontEndChallengeWork {

   constructor(private http: HttpClient) {}

   get(url: string) {
       return this.http.get(url);
   }

   getFulfillmentWork(): Promise<any> {
    let url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

    return this.get(url).toPromise().then((response: IStepInterface) => {
        return Promise.resolve(response);
    }).catch((error: any) => {
        return Promise.reject(error);
    })

   }

}