import { Injectable } from "@angular/core";

import { ILocalStorageData } from "../models/local-storage-data.interface";

@Injectable()
export class LocalStorage {
    constructor() { }

    public setItem(data: ILocalStorageData) {
        localStorage.setItem(data.name, data.content);
    }

    public getItem(name: string) {
        return localStorage.getItem(name);
    }

    public removeItem(name: string) {
        return localStorage.removeItem(name);
    }
}
