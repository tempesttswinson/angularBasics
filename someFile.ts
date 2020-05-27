function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

interface EmployeeOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: string;
    state?: string;
    zipCode?: number;
    occupation?: string;
    hourlyWage?: number;
}

function createEmployee(options: EmployeeOptions): { firstName: string; lastName: string; age: number; phoneNumber: string; state: string; zipCode: number; occupation: string; hourlyWage: number } {

    let newEmployee = { firstName: null, lastName: null, age: null, phoneNumber: null, state: null, zipCode: null, occupation: null, hourlyWage: null };
    newEmployee.firstName = options.firstName;
    newEmployee.lastName = options.lastName;
    if (options.age) {
        newEmployee.age = options.age;
    }
    if (options.phoneNumber) {
        newEmployee.phoneNumber = options.phoneNumber;
    }
    if (options.state) {
        newEmployee.state = options.state;
    }
    if (options.zipCode) {
        newEmployee.zipCode = options.zipCode;

    } if (options.occupation) {
        newEmployee.occupation = options.occupation;
    }
    if (options.hourlyWage) {
        newEmployee.hourlyWage = options.hourlyWage;
    }
    return newEmployee;
}

var newEmployee1 = createEmployee({ firstName: "Tempestt", lastName: "Swinson" });

document.getElementById("interface").innerHTML = newEmployee1.firstName + " " + newEmployee1.lastName;


class Employee {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    certs: string[];

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: number, occupation: string, hourlyWage: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }

    getContactInfo(): string {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Phone Number: " + this.phoneNumber;
    }

    getFullName(): string {
        return "Name: " + this.firstName + " " + this.lastName;
    }

    getAddress(): any {
        return "State: " + this.state + " ZipCode: " + this.zipCode;
    }

    getEmployee(): string {
        return this.getContactInfo() + " " + this.age + " " + this.getAddress() + " " + this.occupation;
    }

    weeklyWage(hoursWorked?: number): string {
        let weeklyWage = 0;
        if (hoursWorked) {
            weeklyWage = this.hourlyWage * hoursWorked;
        } else {
            weeklyWage = this.hourlyWage * 40;
        }
        return this.getFullName() + "'s weekly wage is " + weeklyWage;
    }

    setCerts(...certs: string[]) {
        this.certs = certs;
        addCerts();
    }
    getCerts(): string[] {
        return this.certs;
    }

}


function addCerts(...args: any[]): any[] {
    for (let i = 0; i < args.length; i++) {
        this.certs.push(args[i]);
    }
    return this.certs;
}


var ari = new Employee("Ari", "Lennox", 29, "111-111-1111", "Washington D.C.", 11111, "singer", 25);

var her = new Employee("Gabriella", "Wilson", 22, "222-222-2222", "California", 22222, "singer/songwriter", 25);

var summer = new Employee("Summer", "Walker", 24, "333-333-3333", "Georgia", 33333, "singer", 25);

var jhene = new Employee("Jhene", "Aiko", 32, "444-444-4444", "California", 4444, "singer", 25);

document.getElementById("section2").innerHTML = ari.getContactInfo();
document.getElementById("section3").innerHTML = her.getAddress();
document.getElementById("section4").innerHTML = summer.getFullName();
document.getElementById("section5").innerHTML = jhene.getEmployee().toString();
document.getElementById("weeklywage").innerHTML = ari.weeklyWage();

ari.setCerts("MBA", "CSM", "MCSD");
document.getElementById("certs").innerHTML = ari.getCerts().toString();


