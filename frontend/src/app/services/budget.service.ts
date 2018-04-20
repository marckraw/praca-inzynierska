import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IBudget } from "../models/budget.interface";

import { API_URL } from "../shared/constants";
import { decodeJwt } from "../shared/helpers";

@Injectable()
export class BudgetService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public addBudget(budget: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        const userId = decodeJwt(localStorage.getItem("jwt"))._id;

        const budgetWithUserId = {
            ...budget,
            userId,
        };

        return this.http.post(`${this.apiUrl}budgets/add`, budgetWithUserId, { headers });
    }

    public showAllBudgets(): Observable<IBudget[]> {
        return this.http.get<IBudget[]>(`${this.apiUrl}budgets`);
    }

    public showBudgets(): Observable<IBudget[]> {
        const userId = decodeJwt(localStorage.getItem("jwt"))._id;

        return this.http.get<IBudget[]>(`${this.apiUrl}budgets/${userId}`);
    }

    // public removeIncome(income: any): Observable<any> {
    //     return this.http.request("delete", `${this.apiUrl}incomes/remove`, { body: income });
    // }
}
