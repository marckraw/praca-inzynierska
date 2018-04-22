export interface ICategories {
    _id: string;
    name: string;
    declaredAmount: number;
    enteredAmount: number;
}

export interface IBudget {
    _id: string;
    name: string;
    startDate: string;
    endDate: string;
    categories: ICategories[];
}
