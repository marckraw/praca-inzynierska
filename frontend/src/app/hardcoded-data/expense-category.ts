export class HardcodedData {
    public static expenseCategories = [
        { value: "dom_i_rachunki", viewValue: "Dom i rachunki" },
        { value: "wydatki_podstawowe", viewValue: "Wydatki podstawowe" },
        { value: "finanse", viewValue: "Finanse" },
        { value: "rozrywka_i_podroze", viewValue: "Rozrywka i podróże" },
        { value: "zdrowie_i_uroda", viewValue: "Zdrowie i uroda" },
        { value: "samochod_i_transport", viewValue: "Samochód i transport" },
        { value: "edukacja", viewValue: "Edukacja" },
        { value: "pozostale", viewValue: "Pozostałe" },
        { value: "odziez_i_obuwie", viewValue: "Odzież i obuwie" },
        { value: "gotowka", viewValue: "Gotówka" },
    ];

    public static paymentMethods = [
        { value: "karta_debetowa", viewValue: "Karta debetowa" },
        { value: "karta_kredytowa", viewValue: "Karta kredytowa" },
        { value: "transfer", viewValue: "Przelew" },
        { value: "gotowka", viewValue: "Gotówka" },
    ];

    public static productsCategories = [
        {value: "miesa_wedliny", viewValue: "Mięsa i wędliny"},
        {value: "pieczywo", viewValue: "Pieczywo"},
        {value: "przyprawy", viewValue: "Przyprawy"},
        {value: "kawa_i_herbata", viewValue: "Kawa i herbata"},
        {value: "sery_jogurty_i_mleczne", viewValue: "Sery, jogurty i mleczne"},
        {value: "dania_gotowe_i_sosy", viewValue: "Dania gotowe i sosy"},
    ];

    public static productsQType = [
        {value: "by_quantity", viewValue: "Quantity"},
        {value: "by_weight", viewValue: "Weight"},
    ];
}
