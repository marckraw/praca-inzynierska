export class AddExpenseDto {
    readonly name: string;
    readonly where: string;
    readonly when: string;
    readonly qt: number;
    readonly paymentMethod: string;
    readonly cost: number;
    readonly totalCost: number;
}
