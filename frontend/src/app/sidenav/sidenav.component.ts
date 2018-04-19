import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Router } from "@angular/router";
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

    constructor(
        private localStorage: LocalStorage,
        private userDataRepository: UserDataRepository,
        private router: Router,
    ) {}

    public ngOnInit() {
        console.log(this.userDataRepository.loggedIn);
    }

    public logout() {
        this.userDataRepository.logout();
        this.sidenav.close();
        this.router.navigate(["/login"]);
    }

    public close(reason: string) { this.sidenav.close(); }
}
