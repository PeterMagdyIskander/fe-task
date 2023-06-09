import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TodosPageComponent } from './todos-page/todos-page.component';

const routes: Routes = [
  {
    path:'',component:TodosPageComponent
  },
  {
    path:'login',component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
