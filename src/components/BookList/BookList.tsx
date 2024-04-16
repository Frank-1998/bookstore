// components/BookList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { deleteBook } from "../../store/bookSlice";
import { Book } from "../../store/bookSlice";
import ListItem from "../ListItem/ListItem";
import { log } from "console";

interface BookListProps {
  onEdit: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ onEdit }) => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();
  
  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      {/* {books.length > 0 ? (
        <ul>
          {books.map((book: Book) => (
            <li key={book.id}>
              <h3 onClick={()=> onEdit(book)}>{book.name}</h3>
              <p>Price: {book.price}</p>
              <p>Category: {book.category}</p>
              <p>{book.description}</p>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )} */}
      {books.length > 0 ? (
        <div>
          {books.map((book: Book) => (
            <ListItem book={book} onEdit={onEdit} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p>no book</p>
      )}
    </div>
  );
};

export default BookList;
