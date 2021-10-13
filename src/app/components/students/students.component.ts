import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {UpdateStudentsComponent} from "./components-of-component/update-students/update-students.component";
import {Student} from "../../student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  // @ts-ignore
  @ViewChild(UpdateStudentsComponent) updateComponent: UpdateStudentsComponent;

  updateModal = false;

  openUpdate(student:Student){
    this.updateModal = true;

    setTimeout(() =>{
      this.updateComponent.setStudent(student);
    },500);

  }

  confirmUpdate(student: Student){
    this.studentService.onUpdate(student)
    this.updateModal = false;
  }



  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}
