import { WorldComponent } from './screens/world/world.component';
import { BrazilComponent } from './screens/brazil/brazil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BrazilComponent
  },
  {
    path: 'world',
    component: WorldComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
