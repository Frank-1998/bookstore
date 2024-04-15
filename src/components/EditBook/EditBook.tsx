// components/EditBookModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../store/bookSlice';

Modal.setAppElement('#root');

interface Props {
  book: {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
  };
  isOpen: boolean;
  onRequestClose: () => void;
}

const EditBookModal: React.FC<Props> = ({ book, isOpen, onRequestClose }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateBook({
      id: book.id,
      name,
      price,
      category,
      description
    }));
    onRequestClose(); // Close modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Book"
    >
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <button type="submit">Update Book</button>
        <button onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditBookModal;
