import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/observable/of";
import { IUser } from "../models/user.interface";
import { LocalStorage } from "./localstorage.service";

import { API_URL } from "../shared/constants";

@Injectable()
export class UserDataRepository {
    public loggedIn;

    private apiUrl: string = API_URL;

    constructor(
        private localStorage: LocalStorage,
        private http: HttpClient,
    ) {
        const loggedIn = this.localStorage.getItem("isLoggedIn");
        if (loggedIn === "yes") {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }

    public login() {
        // request do servera
        this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
        const loggedIn = this.localStorage.getItem("isLoggedIn");

        if (loggedIn === "yes") {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }

    public login2(userCredentials): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");


        console.log("register from user data frontend repository");
        console.log(userCredentials);
        console.log(`${this.apiUrl}users/login`)
        return this.http.post(`${this.apiUrl}users/login`, userCredentials, { headers });
    }

    public logout() {
        this.localStorage.removeItem("isLoggedIn");
        this.loggedIn = false;
    }

    public register(user) {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");


        console.log("register from user data frontend repository");
        console.log(user);
        console.log(`${this.apiUrl}users/create`);
        return this.http.post(`${this.apiUrl}users/create`, user, { headers });
    }

    // this endpoints still not working

    public getAll() {
        return this.http.get<IUser[]>(`${this.apiUrl}users`);
    }

    public getById(id: number) {
        return this.http.get(`${this.apiUrl}users/${id}`);
    }

    public create(user: IUser) {
        return this.http.post(`${this.apiUrl}users`, user);
    }

    public update(user: IUser) {
        return this.http.put(`${this.apiUrl}users/${user.id}`, user);
    }

    public delete(id: number) {
        return this.http.delete(`${this.apiUrl}users/${id}`);
    }

}
