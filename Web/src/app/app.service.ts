import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    private baseUrl = "http://localhost:8080"

    constructor(private _http: Http) {}

    // get("/plaintext")
    plaintext(): Observable<string> {
        return this._http
        .get(`${this.baseUrl}/plaintext`)
        .map((res: Response) => res.text())
    }
}