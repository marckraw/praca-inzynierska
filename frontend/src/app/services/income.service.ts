import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IIncome } from "../models/income.interface";

import { API_URL } from "../shared/constants";
import { decodeJwt } from "../shared/helpers";
import { LocalStorage } from "./localstorage.service";

@Injectable()
export class IncomeService {
    private apiUrl: string = API_URL;

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorage,
    ) { }

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

        console.log(income);

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
}
