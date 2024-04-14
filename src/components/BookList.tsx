// components/BookList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteBook } from '../store/bookSlice';

interface BookProps {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book: BookProps) => (
            <li key={book.id}>
              <h3>{book.name}</h3>
              <p>Price: {book.price}</p>
              <p>Category: {book.category}</p>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
