import { Injectable } from "@angular/core";

@Injectable()
export class CalculateService {

    constructor() { }

    public calcTwoNumbers(num1, num2) {
        return num1 + num2;
    }
}
