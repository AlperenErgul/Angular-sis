import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";


@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

  form = new FormGroup({

    studentName: new FormControl("" , [Validators.required]),
    studentLastname: new FormControl("" , [Validators.required]),
    studentNumber: new FormControl("" , [Validators.required]),
    studentManOWoman: new FormControl("" , [Validators.required]),

    turkishFirstNote: new FormControl("" , [Validators.required , Validators.max(100) , Validators.min(0)]),
    turkishSecondNote: new FormControl("" , [Validators.required]),
    turkishThirdNote: new FormControl("" , [Validators.required]),

    mathFirstNote: new FormControl("" , [Validators.required]),
    mathSecondNote: new FormControl("" , [Validators.required]),
    mathThirdNote: new FormControl("" , [Validators.required]),

    scienceFirstNote: new FormControl("" , [Validators.required]),
    scienceSecondNote: new FormControl("" , [Validators.required]),
    scienceThirdNote: new FormControl("" , [Validators.required]),

    liberalArtsFirstNote: new FormControl("" , [Validators.required]),
    liberalArtsSecondNote: new FormControl("" , [Validators.required]),
    liberalArtsThirdNote: new FormControl("" , [Validators.required]),

  });

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  onCreate(){

    this.studentService.createStudent(this.form.value);
    this.form.reset();

  }

}
