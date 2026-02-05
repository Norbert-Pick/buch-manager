import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book';
import { addBook, removeBook } from '../books/book.actions';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  constructor(private store: Store<{ books: Book[] }>) {}

  addBook(id: string, title: string, author: string) {
    const book: Book = { id, title, author };
    this.store.dispatch(addBook({ book }));
  }

  removeBook(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
