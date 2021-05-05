export class account {
    constructor(
        public customerId: string,
        public accountNumber: string,
        public name: string,
        public username: string,
        public password: string,
        public guardianType: string,
        public guardianName: string,
        public address: string,
        public citizenship: string,
        public state: string,
        public country: string,
        public email: string,
        public gender: string,
        public maritalStatus: string,
        public contactNumber: string,
        public dateOfBirth: Date,
        public registrationDate: Date,
        public accountType: string,
        public branchName: string,
        public citizenStatus: string,
        public initialDepositAmount: string,
        public identificationType: string,
        public identificationDocumentNumber: string,
        public referenceAccountHolderName: string,
        public referenceAccountHolderAccountNumber: string,
        public referenceAccountHolderAddress: string
    ) { }
}

/*
<br>*all fields mandatory
xx<br>*Customer id should be generated automatically during the time of registration
and should be shown in the success message, should be in the format of ‘R-XXX’. XXX should be random numeric of 3 digits
shown in the success message.
xx<br>*Account Number should be generated automatically and should be a numeric of 16 digits. Where to put it???
<br>*Activation date - can be calculated based on the registration date. what to do with it???
<br>*bank name in acc update ?? wth

xx<br>1. Name – Name of the customer - alphabets and space only
<br>2. Username – Customer login name
<br>3. Password – Password for login
xx<br>4. Guardian Type – Represents the Guardian Type
xx<br>5. Guardian Name – Represents the Father/Husband name
xx<br>6. Address – Represents the address of the person
<br>7. Citizenship – Represent the customer citizenship
xx<br>8. State – Represent the state based on the country.Based on the country, state has to be populated in the dropdown automatically
xx<br>9. Country – Represent the country
xx<br>10. Email Address – Represents the email address - should contain @ and .
xx<br>11. Gender- Represents the Gender
xx<br>12. Marital Status – Represents the marital status
xx<br>13. Contact no – Represent the customer contact number - 10 digit
xx<br>14. Date of Birth- Represents the customer DOB in DD/MM/YYYY format - should be 18 to 96 only.should not be less than system date.
xx<br>15. Registration Date- Represents the customer registration Date which is automatically populated from the system current date.
xx<br>16. Account type – Represents the type of account. Saving or Salary.
xx<br>17. Branch Name –Represents the branch name
xx<br>18. Citizen status – Represents the citizen status.Based on the DOB, age will be calculated and senior citizen/ citizen/minor will be identified.
<br>19. Initial Deposit Amount - Represents the first deposit amount. based on account type. 0 for salary. 5000 for saving.
xx<br>20. Identification Proof Type – Represents the identification proof
xx<br>21. Identification Document No. – Represents the identification document number - PAN alphanumeric only no space no special characters 12 characters
xx<br>22. Reference account holder name – Represents the nominee account holder name
xx<br>23. Reference account holder acc. No. – Represents the nominee account holder account number
xx<br>24. Reference account holder address- Represents the nominee account holder address
<br>
*/