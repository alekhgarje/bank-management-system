import { loan } from "./loan.model";

export class personalLoan {
    constructor(
        public loan: loan,
        public annualIncome: string,
        public companyName: string,
        public designaton: string,
        public totalExperience: string,
        public experienceWithCurrentCompany: string
    ) { }
}