import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieQuoteComponent } from 'app/movie-quote/movie-quote.component';

const routes: Routes = [{
  path: '',
  component: MovieQuoteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieQuoteRoutingModule { }
