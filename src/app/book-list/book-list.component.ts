import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { addBook, removeBook } from '../books/book.actions';
import {AppState} from '../app.state';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string) {
    const book: Book = { id, title, author };
    this.store.dispatch(addBook({ book }));
  }

  removeBook(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
