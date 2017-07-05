import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'quotes',
    loadChildren: 'app/movie-quote/movie-quote.module#MovieQuoteModule'
  },
  {
    path: '',
    redirectTo: '/set-color',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
