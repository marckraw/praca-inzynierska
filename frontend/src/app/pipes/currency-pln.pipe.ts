import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "currencyPln",
})
export class CurrencyPlnPipe implements PipeTransform {

    public transform(value: any, args?: any): any {
        return value + " zł";
    }

}
