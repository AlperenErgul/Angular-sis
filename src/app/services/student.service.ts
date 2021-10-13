import {Injectable} from '@angular/core';
import {Student} from "../student";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {





  students: Student[] = [];
  dataUrl = "https://studentdataservice-552b8-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) {
  }

  // aşşağıda databaseye eklenmiş hali ile listeyi çağırıyorum
  getStudents() {
    this.students = [];

    this.http.get(this.dataUrl + ".json")
      .toPromise().then((response: any) => {
      this.students = Object.keys(response).map((key) => {
        return {id: key, ...response[key]}
      });
    });
  }

  // Öğrenciyi database ye ekliyorum
  createStudent(student: Student) {
    this.http.post(this.dataUrl + ".json", student)
      .toPromise().then((response: any) => {
      this.getStudents();
    });
  }

  deleteStudent(student: any) {
    this.http.delete(this.dataUrl + student.id + "/.json")
      .toPromise().then((response) => {

      this.getStudents();

    });
  }



  onUpdate(student:Student) {

    this.http.put(this.dataUrl + student.id + "/.json", student )
      .toPromise().then((response) => {
      this.getStudents();
    });



  }

  getDetailStudent(id: string){

    return this.http.get(this.dataUrl + id + "/.json").toPromise()

  }
}
