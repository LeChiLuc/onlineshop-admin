import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AuthenService } from '../core/services/authen.service';
import { LoginComponent } from './login.component';

export const routes: Routes =[
  //localhost:4200/login
  {path:'', component: LoginComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers:[AuthenService]
})
export class LoginModule { }
