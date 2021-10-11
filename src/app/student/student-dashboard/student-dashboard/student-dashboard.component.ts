import { Component, OnInit } from '@angular/core';
import {Student} from "../../../shared/model/Student";
import {StudentService} from "../../../shared/services/student.service";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['id', 'studentId', 'name', 'joinDate', 'school', 'grade', 'isActive'];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(value =>
      this.students = <Student[]>value);
  }

}
