import { TodoComponent } from './component/todo/todo.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",redirectTo:'/todo',pathMatch:'full'
  },
{
  path:"navbar",component:NavbarComponent
},
{
  path:"todo",component:TodoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
