export class loan {
    constructor(
        public loanType: string,
        public loanAmount: string,
        public loanApplyDate: string,
        public loanIssueDate: string,
        public rateOfInterest: string,
        public durationOfLoan: string,
    ) { }
}