import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateStudentsComponent } from './components/students/components-of-component/create-students/create-students.component';
import { ListStudentsComponent } from './components/students/components-of-component/list-students/list-students.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UpdateStudentsComponent } from './components/students/components-of-component/update-students/update-students.component';
import { DetailStudentsComponent } from './components/students/components-of-component/detail-students/detail-students.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    AboutUsComponent,
    NotFoundComponent,
    CreateStudentsComponent,
    ListStudentsComponent,
    HomeComponent,
    UpdateStudentsComponent,
    DetailStudentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
