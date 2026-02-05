import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import * as BookActions from './book.actions';


// ein Reducer behandelt immer nur einen Teil des AppStates.
// Hier ist es der Teil, der sich mit Büchern beschäftigt.
// Werden weitere Reducer benötigt, wird dafür jeweils ein eigenes Reducer.ts benötigt


// Das wurde vorgeschlagen
// export interface BookState {
//   books: Book[];
//   loading: boolean;
//   error: any;
// }


  export const initialState: ReadonlyArray<Book> = [];

// Das wurde vorgeschlagen
// export const initialState: BookState = {
//   books: [],
//   loading: false,
//   error: null
// };

export const bookReducer = createReducer(
  initialState,
  // Füge das übergebene Buch dem State-Array hinzu
  on(BookActions.addBook, (state, { book }) => [...state, book]),
  on(BookActions.removeBook, (state, { bookId }) => state.filter(book => book.id !== bookId)),
);

