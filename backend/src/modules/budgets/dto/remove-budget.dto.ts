export class RemoveBudgetDto {
    readonly _id: string;
    readonly name: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly categories: [
        {
            id: number;
            name: string;
            declaredAmount: number;
            enteredAmount: number;
        }
    ];
}
