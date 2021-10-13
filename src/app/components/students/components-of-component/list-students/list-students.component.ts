import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StudentService} from "../../../../services/student.service";
import {Student} from "../../../../student";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @Output() openEdit:EventEmitter<Student> = new EventEmitter<Student>();


  constructor(public studentService: StudentService) {
  }


  ngOnInit(): void {
    this.studentService.getStudents();
  }

  onDelete(student:any) {
    this.studentService.deleteStudent(student);
  }

  onEdit(student: Student ) {
    this.openEdit.emit(student);
  }
}
