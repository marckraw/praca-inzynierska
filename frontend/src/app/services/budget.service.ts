import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IBudget } from "../models/budget.interface";

import { API_URL } from "../shared/constants";

@Injectable()
export class BudgetService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public addBudget(budget: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        console.log("Frontend service: ", budget);
        return this.http.post(`${this.apiUrl}budgets/add`, budget, { headers });
    }

    // public removeIncome(income: any): Observable<any> {
    //     return this.http.request("delete", `${this.apiUrl}incomes/remove`, { body: income });
    // }

    // public showIncomes(): Observable<IIncome[]> {
    //     return this.http.get<IIncome[]>(`${this.apiUrl}incomes`);
    // }

}
