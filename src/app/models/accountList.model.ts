import { account } from "./account.model";

export class accountList {
    public static theAccountList = new accountList();
    accounts: account[] = [];
    addAccount(acc) {
        this.accounts.push(acc);
        console.warn(this.accounts);
    }
}