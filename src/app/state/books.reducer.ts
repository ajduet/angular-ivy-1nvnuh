import { createReducer, on } from '@ngrx/store/src/reducer_creator';
import { Book } from '../book-list/book';
import { retrieveBookList } from './book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrieveBookList, (state, { books }) => books)
);
