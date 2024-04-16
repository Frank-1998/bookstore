import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orangeCity, vow, waiting, whoIsBack } from "../assets/images";

export interface Book {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  imageUrl: string;
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [
    {
      id: 0,
      name: "book1",
      price: "20.0",
      category: "fiction",
      description: "A book description is a short summary of a book’s story or content that is designed to “hook” a reader and lead to a sale. Typically, the book’s description conveys important information about its topic or focus (in nonfiction) or the plot and tone (for a novel or any other piece of fiction). Readers can usually find the back description on the back cover of a book, or prominently displayed on retailer websites, like Amazon.",
      imageUrl: whoIsBack,
    },
    {
      id: 1,
      name: "book2",
      price: "20.0",
      category: "fiction",
      description: "A book description is a short summary of a book’s story or content that is designed to “hook” a reader and lead to a sale. Typically, the book’s description conveys important information about its topic or focus (in nonfiction) or the plot and tone (for a novel or any other piece of fiction). Readers can usually find the back description on the back cover of a book, or prominently displayed on retailer websites, like Amazon.",
      imageUrl: vow,
    },
    {
      id: 2,
      name: "book3",
      price: "20.0",
      category: "fiction",
      description: "A book description is a short summary of a book’s story or content that is designed to “hook” a reader and lead to a sale. Typically, the book’s description conveys important information about its topic or focus (in nonfiction) or the plot and tone (for a novel or any other piece of fiction). Readers can usually find the back description on the back cover of a book, or prominently displayed on retailer websites, like Amazon.",
      imageUrl: waiting,
    },
    {
      id: 3,
      name: "book4",
      price: "20.0",
      category: "fiction",
      description: "A book description is a short summary of a book’s story or content that is designed to “hook” a reader and lead to a sale. Typically, the book’s description conveys important information about its topic or focus (in nonfiction) or the plot and tone (for a novel or any other piece of fiction). Readers can usually find the back description on the back cover of a book, or prominently displayed on retailer websites, like Amazon.",
      imageUrl: orangeCity,
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