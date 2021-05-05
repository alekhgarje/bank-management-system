import { loan } from "./loan.model";

export class educationLoan {
    constructor(
        public loan: loan,
        public courseFee: string,
        public course: string,
        public fatherOccupation: string,
        public rationCardNumber: string,
        public annualIncome: string
    ) { }
}