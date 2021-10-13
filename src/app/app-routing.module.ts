import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./components/students/students.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ListStudentsComponent} from "./components/students/components-of-component/list-students/list-students.component";
import {CreateStudentsComponent} from "./components/students/components-of-component/create-students/create-students.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailStudentsComponent} from "./components/students/components-of-component/detail-students/detail-students.component";

const routes: Routes = [
  {path: 'students' , children: [
      {path: '' , component: StudentsComponent},
      {path: ':id' , component: DetailStudentsComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
