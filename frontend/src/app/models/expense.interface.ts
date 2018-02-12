export interface IExpense {
    _id: string;
    _v: number;
    name: string;
    where: string;
    when: string;
    qt: number;
    paymentMethod: string;
    cost: number;
    totalCost: number;
}
