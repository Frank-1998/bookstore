import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [
    {
      id: 0,
      name: "book1",
      price: 20.0,
      category: "fiction",
      description: "good book",
    },
    {
      id: 1,
      name: "book2",
      price: 20.0,
      category: "fiction",
      description: "good book",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    deleteBook(state, action: PayloadAction<number>) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook(state, action: PayloadAction<Book>) {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;