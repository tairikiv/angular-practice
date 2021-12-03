import {City} from "./City";

export class Teacher {
  id: number;
  firstName: String;
  lastName: String;
  age: number;
  city: City;
  school: String;
  specialization: String;
  joinDate: Date;
  isActive: boolean;


  constructor(id: number, firstName: String, lastName: String, age: number, city: City, school: String, specialization: String, joinDate: Date, isActive: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.school = school;
    this.specialization = specialization;
    this.joinDate = joinDate;
    this.isActive = isActive;
  }
}

