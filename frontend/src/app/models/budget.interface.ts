export interface ICategories {
    id: number;
    name: string;
    declaredAmount: number;
    enteredAmount: number;
}

export interface IBudget {
    name: string;
    startDate: string;
    endDate: string;
    isAlive: boolean;
    categories: ICategories[];
}
