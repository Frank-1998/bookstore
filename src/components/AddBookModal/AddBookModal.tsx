// components/AddBookModal.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/bookSlice";
import Modal from "../Modal/Modal";
import { log } from "console";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddBookModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type.startsWith("image")) {
      console.log(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      addBook({
        id: Math.random(), // Assuming no backend to generate unique IDs
        name,
        price,
        category,
        description,
        imageUrl: image,
      })
    );
    onRequestClose(); // Close modal after submission
  };

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <h2>Add New Book</h2>
      <form
        onSubmit={handleSubmit}
        className="grid space-y-5 items-center justify-center"
      >
        <label className="grid space-y-1">
          <div>Name:</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          <div>Price:</div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          <div>Category:</div>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          <div>Description:</div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols={50}
            rows={10}
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
          {image && (
            <img
              src={image}
              alt="Image Preview"
              style={{ width: "100px", height: "150px" }}
            />
          )}
        </label>
        <button
          type="submit"
          className="py-1 bg-black border rounded-md hover:bg-gray-500 hover:cursor-pointer text-white hover:transition transition"
        >
          Add Book
        </button>
        <button
          onClick={onRequestClose}
          className="py-1 bg-white border rounded-md hover:bg-gray-200 hover:cursor-pointer hover:transition transition"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default AddBookModal;
