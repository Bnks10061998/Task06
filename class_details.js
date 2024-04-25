//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Kumar", "mani",21, "computer", "kumarmani@gmail.com", 9876543210, "Delhi");
let person2 = new Person("Lakshmi","priya", 20, "computer", "priya@gmail.com", 6789054321, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());