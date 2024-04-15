// components/AddBookModal.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/bookSlice";
import Modal from "../Modal/Modal";


interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddBookModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      addBook({
        id: Math.random(), // Assuming no backend to generate unique IDs
        name,
        price,
        category,
        description,
      })
    );
    onRequestClose(); // Close modal after submission
  };

  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
    >
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Book</button>
        <button onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddBookModal;
