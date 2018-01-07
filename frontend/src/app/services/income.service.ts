import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IIncome } from "../models/income.interface";

import { API_URL } from "../shared/constants";

@Injectable()
export class IncomeService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public addIncome(income: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        console.log("Dodaje do bazy przychodow: ", income);
        return this.http.post(`${this.apiUrl}incomes/add`, income, { headers });
    }

    public showIncomes(): Observable<IIncome[]> {
        return this.http.get<IIncome[]>(`${this.apiUrl}incomes`);
    }

}
