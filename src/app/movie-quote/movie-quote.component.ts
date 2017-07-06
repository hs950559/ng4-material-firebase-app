import { Component, OnInit } from '@angular/core';
import { MovieQuote } from './movie-quote';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movie-quote',
  templateUrl: './movie-quote.component.html',
  styleUrls: ['./movie-quote.component.scss']
})
export class MovieQuoteComponent implements OnInit {
   movieQuoteFormData: MovieQuote = {
    movie: '',
    quote: ''
  };

  isResetting = false;

  movieQuotesStream: FirebaseListObservable<any[]>;

  //  movieQuotes: MovieQuote[] = [
  //     {'movie': 'Rocky', 'quote': 'Yo Adrian'},
  //     {'movie': 'Terminator', 'quote': 'I\'ll be back' },
  //     {'movie': 'Titanic', 'quote': 'I\'m the king of the world!' },
  //     {'movie': 'The Princess Bride', 'quote': 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'}
  // ];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.movieQuotesStream = this.db.list('/quotes');
  }

  submitMovieQuoteForm(movieQuoteForm){
    this.isResetting = true;
    if ( this.movieQuoteFormData.$key ) {
      this.movieQuotesStream.update(this.movieQuoteFormData.$key, this.movieQuoteFormData);
    } else {
      this.movieQuotesStream.push(this .movieQuoteFormData);
    }

    setTimeout(() => this.isResetting = false, 0);
      this.movieQuoteFormData = {
        movie: '',
        quote: ''
      };
  }

  editQuote(quote) {
    this.movieQuoteFormData = quote;
  }

  removeQuote(quote){
    this.movieQuotesStream.remove(quote);
  }
}
