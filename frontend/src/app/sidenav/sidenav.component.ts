import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { LocalStorage } from "../services/localstorage.service";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    @ViewChild("sidenav") public sidenav: MatSidenav;

    public loggedIn: boolean;

    constructor(private localStorage: LocalStorage) {}

    public ngOnInit() {
        console.log("ngoninit");
    }

    public setLocalStorage() {
        this.localStorage.setItem({ name: "isLoggedIn", content: "yes"});
    }

    public getLocalStorage() {
        console.log(this.localStorage.getItem("isLoggedIn"));
    }

    public removeLocalStorage() {
        console.log(this.localStorage.removeItem("isLoggedIn");
    }

    public close(reason: string) { this.sidenav.close(); }

    // public isLoggedIn(): boolean {
    //     this.localStorage.getItem("isLoggedIn");
    // }
}
