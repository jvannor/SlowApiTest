import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";

@Injectable({
    providedIn: 'root' }
)
export class AppService {
    private slowUrl: string = 'api/dosomethingslow';
    private fastUrl: string = 'api/dosomethingfast';

    constructor (private http: HttpClient) {}

    doSomethingSlow(): Observable<string> {
        return this.http.get(this.slowUrl, { responseType: 'text' }).pipe(
            timeout(120000),
            catchError(this.handleError)
        );
    }

    doSomethingFast(): Observable<any> {
        return this.http.get(this.fastUrl, { responseType: 'text' }).pipe(
            timeout(120000),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}