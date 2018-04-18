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

        // not logged in so redirect to login page with the return url
        console.log("nawiguj do innego routa, nie zalogowany");
        this.router.navigate(["/login"]);
        return false;
    }

    public canActivateChild() {
        if (localStorage.getItem("isLoggedIn") === "yes") {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        console.log("canactivate child wykrylo ze nie mnoze isc do routa");
        this.router.navigate(["/login"]);
        return false;
    }
}
