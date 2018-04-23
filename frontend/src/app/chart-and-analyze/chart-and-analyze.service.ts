import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IIncome } from "../models/income.interface";

import { map, reduce } from "rxjs/operators";

import { IExpense } from "../models/expense.interface";
import { LocalStorage } from "../services/localstorage.service";
import { API_URL } from "../shared/constants";
import { decodeJwt } from "../shared/helpers";

@Injectable()
export class ChartAndAnalyzeService {
    private apiUrl: string = API_URL;
    private userId: string;

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorage,
    ) { }

    public getUserIncomes() {
        const userId = this.getUserId();

        return this.http.get<IIncome[]>(`${this.apiUrl}incomes/${userId}`)
    }

    public getUserExpenses() {
        const userId = this.getUserId();

        return this.http.get<IExpense[]>(`${this.apiUrl}expenses/${userId}`);
    }

    public getUserIncomesByMethod(method) {
        const userId = this.getUserId();

        return this.http.get<IIncome[]>(`${this.apiUrl}incomes/${userId}/${method}`);
    }

    public addIncome(income: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        const userId = decodeJwt(localStorage.getItem("jwt"))._id;

        const incomeWithUserId = {
            ...income,
            userId,
        };

        return this.http.post(`${this.apiUrl}incomes/add`, incomeWithUserId, { headers });
    }

    public editIncome(income: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        return this.http.put(`${this.apiUrl}incomes/edit`, income, { headers });
    }

    public removeIncome(income: any): Observable<any> {
        return this.http.request("delete", `${this.apiUrl}incomes/remove`, { body: income });
    }

    public showIncomes(): Observable<IIncome[]> {
        const userId = decodeJwt(localStorage.getItem("jwt"))._id;

        return this.http.get<IIncome[]>(`${this.apiUrl}incomes/${userId}`);
    }

    public showAllIncomes(): Observable<IIncome[]> {
        return this.http.get<IIncome[]>(`${this.apiUrl}incomes`);
    }

    private getUserId() {
        return decodeJwt(localStorage.getItem("jwt"))._id;
    }
}
