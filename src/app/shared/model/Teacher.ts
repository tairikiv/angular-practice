export class Teacher{
  id: String;
  teacherId: String;
  name: String;
  joinDate: Date;
  isActive: boolean;
  school: String;
  specialistFields: String[];

  constructor(id: String, teacherId: String, name: String, joinDate: Date, isActive: boolean, school: String, specialistFields: String[]) {
    this.id = id;
    this.teacherId = teacherId;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}
