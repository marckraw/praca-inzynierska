import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {

    @ViewChild("sidenav") public sidenav: MatSidenav;

    public reason = "";

    public ngOnInit() {
        console.log(this.sidenav);
    }

    public close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }

}
