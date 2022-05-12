import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";

@Injectable({
    providedIn: 'root' }
)
export class AppService {
    private url: string = 'api/dosomething';

    constructor (private http: HttpClient) {}

    doSomething(): Observable<string> {
        return this.http.get(this.url, { responseType: 'text' }).pipe(
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