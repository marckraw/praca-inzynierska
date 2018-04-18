import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/of";
import { LocalStorage } from "./localstorage.service";

@Injectable()
export class UserDataRepository {
    public loggedIn: Observable<string>;

    constructor(private localStorage: LocalStorage) {
        const loggedIn = this.localStorage.getItem("isLoggedIn");
    }

    public login() {
        // request do servera
        this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
        const loggedIn = this.localStorage.getItem("isLoggedIn");

        this.loggedIn = Observable.of(loggedIn);
    }

    public logout() {
        this.localStorage.removeItem("isLoggedIn");

        this.loggedIn = null;
    }

}
