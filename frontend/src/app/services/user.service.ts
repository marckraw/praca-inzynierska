import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";



import { API_URL } from "../shared/constants";

@Injectable()
export class BudgetService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public create() {
        console.log("creating user");
    }
}
