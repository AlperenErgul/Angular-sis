import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {StudentService} from "../../../../services/student.service";
import {Student} from "../../../../student";

@Component({
  selector: 'app-detail-students',
  templateUrl: './detail-students.component.html',
  styleUrls: ['./detail-students.component.css']
})
export class DetailStudentsComponent implements OnInit {

  // @ts-ignore
  ourStudent: Student;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    this.studentService.getDetailStudent(id).then((student: any) => {
      this.ourStudent = student
    });

  }


}
