import React from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { useDispatch } from "react-redux";
import BookList from "./components/BookList";
import logo from "./constants/icons8-book.gif";

function App() {
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();
  console.log(books);

  return (
    <div>
      <div className="container header">
        <img src={logo} alt="book_logo" />
        <h1>BlazeBookStore</h1>
      </div>

      <div className="container bookList">
        <BookList/>
      </div>
    </div>
  );
}

export default App;
