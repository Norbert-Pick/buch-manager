import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

// actions for adding books
export const addBook = createAction(
  '[Book] Add Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Book] Add Book Success',
  props<{ book: Book }>()
);

export const addBookFailure = createAction(
  '[Book] Add Book Failure',
  props<{ error: any }>()
);

// actions for loading books
export const loadBooks = createAction(
  '[Book] Load Books');

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

// actions for update books
export const updateBook = createAction(
  '[Book] Update Book',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction(
  '[Book] Update Book Success',
  props<{ book: Book }>()
);

export const updateBookFailure = createAction(
  '[Book] Update Book Failure',
  props<{ error: any }>()
);

// actions for delete books
export const removeBook = createAction(
  '[Book] Remove Book',
  props<{ bookId: string }>()
);

export const removeBookSuccess = createAction(
  '[Book] Remove Book Success',
  props<{ bookId: string }>()
);

export const removeBookFailure = createAction(
  '[Book] Remove Book Failure',
  props<{ error: any }>()
);
