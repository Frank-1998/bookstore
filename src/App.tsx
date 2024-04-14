import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { useDispatch } from 'react-redux';


function App() {
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();
  console.log(books);
  
  return (
    <div>test</div>
  );
}

export default App;
