import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { LocalStorage } from "../services/localstorage.service";
import { UserDataRepository } from "../services/user-data.repository";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    @ViewChild("sidenav") public sidenav: MatSidenav;

    public loggedIn: string;

    constructor(private localStorage: LocalStorage, private userDataRepository: UserDataRepository) {}

    public ngOnInit() {
        console.log("ngoninit");
    }

    public logout() {
        this.localStorage.removeItem("isLoggedIn");
    }

    public login() {
        this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
    }

    public close(reason: string) { this.sidenav.close(); }

    // public isLoggedIn(): boolean {
    //     this.localStorage.getItem("isLoggedIn");
    // }
}
