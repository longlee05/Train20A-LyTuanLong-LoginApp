import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{
  path: 'loginpage' , component: LoginpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
