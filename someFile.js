function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
function createEmployee(options) {
    var newEmployee = { firstName: null, lastName: null, age: null, phoneNumber: null, state: null, zipCode: null, occupation: null, hourlyWage: null };
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
    }
    if (options.occupation) {
        newEmployee.occupation = options.occupation;
    }
    if (options.hourlyWage) {
        newEmployee.hourlyWage = options.hourlyWage;
    }
    return newEmployee;
}
var newEmployee1 = createEmployee({ firstName: "Tempestt", lastName: "Swinson" });
document.getElementById("interface").innerHTML = newEmployee1.firstName + " " + newEmployee1.lastName;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Employee.prototype.getContactInfo = function () {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Phone Number: " + this.phoneNumber;
    };
    Employee.prototype.getFullName = function () {
        return "Name: " + this.firstName + " " + this.lastName;
    };
    Employee.prototype.getAddress = function () {
        return "State: " + this.state + " ZipCode: " + this.zipCode;
    };
    Employee.prototype.getEmployee = function () {
        return this.getContactInfo() + " " + this.age + " " + this.getAddress() + " " + this.occupation;
    };
    Employee.prototype.weeklyWage = function (hoursWorked) {
        var weeklyWage = 0;
        if (hoursWorked) {
            weeklyWage = this.hourlyWage * hoursWorked;
        }
        else {
            weeklyWage = this.hourlyWage * 40;
        }
        return this.getFullName() + "'s weekly wage is " + weeklyWage;
    };
    Employee.prototype.setCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        this.certs = certs;
        addCerts();
    };
    Employee.prototype.getCerts = function () {
        return this.certs;
    };
    return Employee;
}());
function addCerts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
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
