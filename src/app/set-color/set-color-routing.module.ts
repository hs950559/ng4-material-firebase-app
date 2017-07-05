import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetColorComponent } from "app/set-color/set-color.component";

const routes: Routes = [{
  path: 'set-color',
  component: SetColorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetColorRoutingModule { }
