import { createAction, props } from '@ngrx/store/src/action_creator';
import { Book } from '../book-list/book';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
);

export const retrieveBookList = createAction(
  '[Book List] Retrieve Book List',
  props<{ books: ReadonlyArray<Book> }>()
);
