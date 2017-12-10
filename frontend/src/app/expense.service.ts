import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { API_URL } from "./shared/constants";

import { IExpense } from "./models/expense";

@Injectable()
export class ExpenseService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public addExpense(expense: IExpense) {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        return this.http.post(`${this.apiUrl}expenses/add`, expense, { headers });
    }

    public showExpenses(): Observable<IExpense[]> {
        return this.http.get<IExpense[]>(`${this.apiUrl}expenses`);
    }

}
