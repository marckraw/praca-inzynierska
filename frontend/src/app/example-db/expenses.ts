export const expenses = [
    {
        id: 0,
        name: "nowy wydatek",
        when: "2018-02-20",
        where: "Tesco",
        paymentMethod: "Przelew",
        qt: 1,
        cost: 20.3,

        expenseCategory: "Rozrywka",
        budgets: [
            { id: 1, category: 1 },
            { id: 3, category: 2, },
        ],
    },
    {
        id: 1,
        name: "nowy wydatek",
        when: "2018-02-20",
        where: "Tesco",
        paymentMethod: "Przelew",
        qt: 1,
        cost: 20.3,

        expenseCategory: "Posiłki i napoje",
        budgets: [
            { id: 1, category: 1 },
            { id: 3, category: 2, },
        ],
    },
    {
        id: 2,
        name: "nowy wydatek",
        when: "2018-02-20",
        where: "Tesco",
        paymentMethod: "Przelew",
        qt: 1,
        cost: 20.3,

        expenseCategory: "Nauka",
        budgets: [
            { id: 1, category: 1 },
            { id: 3, category: 2, },
        ],
    }
]
