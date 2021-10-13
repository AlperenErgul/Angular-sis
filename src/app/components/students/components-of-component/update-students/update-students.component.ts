import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentService} from "../../../../services/student.service";
import {Student} from "../../../../student";

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.css']
})
export class UpdateStudentsComponent implements OnInit {

  @Input() student:any = {};
  @Output() onSave:EventEmitter<Student> = new EventEmitter<Student>();

  save(){
    this.onSave.emit(this.student);
  }

  setStudent(student: Student){
    this.student = student;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
