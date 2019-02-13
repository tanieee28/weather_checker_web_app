import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
    constructor(private _http:Http) {}
    getWeatherData() {
        let url = "http://10.20.3.108:8085/fid-L2M6VFE6AAAMBKBYAE3OMNWH";
        let headers = new Headers({'Content-Type':'text/xml'});
        let options = new RequestOptions({ headers: headers });
        let body = "<Query>"+
                    "<Find format='known,version'>"+
                        "<ExternalEnv>"+
                            "<DCBaseURL ne=''/>"+
                        "</ExternalEnv>"+
                    "</Find>"+
                    "</Query>";
                    console.log(body);
        return this._http.post(url,body,options).map((response:Response)=>response.text());
    }
}