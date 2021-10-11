export class Student{
  id: String;
  studentId: String;
  name: String;
  joinDate: Date;
  isActive: boolean;
  school: String;
  grade: String;

  constructor(id: String, studentId: String, name: String, joinDate: Date, isActive: boolean, school: String, grade: String) {
    this.id = id;
    this.studentId = studentId;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }
}
