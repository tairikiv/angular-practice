import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../shared/services/teacher.service";
import {Teacher} from "../../shared/model/Teacher";

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  teachers: Teacher[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'city', 'school', 'specialization','joinDate', 'isActive'];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(value =>
    this.teachers = <Teacher[]>value);
  }

}
