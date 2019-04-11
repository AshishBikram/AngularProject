export class Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    setEmptyValue() {
        this.id = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';

    }
}
