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

        return this.http.post(`${this.apiUrl}budgets/add`, budget, { headers });
    }

    public showAllBudgets(): Observable<IBudget[]> {
        return this.http.get<IBudget[]>(`${this.apiUrl}budgets`);
    }

    public removeBudget(budget: any) {
        return this.http.request("delete", `${this.apiUrl}budgets/remove`, { body: budget });
    }
}
