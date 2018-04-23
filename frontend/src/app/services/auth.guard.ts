import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem("isLoggedIn") === "yes") {
            // logged in so return true
            return true;
        }

        this.router.navigate(["/login"]);
        return false;
    }

    public canActivateChild() {
        if (localStorage.getItem("isLoggedIn") === "yes") {
            return true;
        }

        this.router.navigate(["/login"]);
        return false;
    }
}
