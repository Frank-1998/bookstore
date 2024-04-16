import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BookList/BookList";
import { book, addIcon} from "./assets/icons";
import { Book } from "./store/bookSlice";
import AddBookModal from "./components/AddBookModal/AddBookModal";
import EditBookModal from "./components/EditBook/EditBook";

function App() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openEditModal = (book: Book) => {
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedBook(null);
    setEditModalOpen(false);
  };

  return (
    <div className="allBody">
      <div className="container header">
        <img src={book} alt="book_logo" />
        <h1>BlazeBookStore</h1>
      </div>

      <div className="container bookList">
        <div className="bookListHeader">
          <button className="addBookButton" onClick={openAddModal}>
            <h3>Add Book</h3>
            {/* <img src={addIcon} alt="add" className="addIconBlack" /> */}
          </button>
        </div>
        <BookList onEdit={openEditModal} />
      </div>
      <AddBookModal isOpen={isAddModalOpen} onRequestClose={closeAddModal} />
      {selectedBook && (
        <EditBookModal
          book={selectedBook}
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
        />
      )}
    </div>
  );
}

export default App;
