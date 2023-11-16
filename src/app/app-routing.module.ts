import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddregistrationComponent } from './addregistration-component/addregistration-component.component';



const routes: Routes = [
  {path:'add' , component:AddregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
