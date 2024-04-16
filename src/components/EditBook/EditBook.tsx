// components/EditBookModal.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../../store/bookSlice";
import Modal from "../Modal/Modal";
import { Book } from "../../store/bookSlice";

interface Props {
  book: Book;
  isOpen: boolean;
  onRequestClose: () => void;
}

const EditBookModal: React.FC<Props> = ({ book, isOpen, onRequestClose }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);
  const [image, setImage] = useState(book.imageUrl);
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
      updateBook({
        id: book.id,
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
      <h2>Edit Book</h2>
      <form
        onSubmit={handleSubmit}
        className="grid space-y-5 items-center justify-center"
      >
        <label className="grid space-y-1">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-sm min-h-5"
          />
        </label>
        <label className="grid space-y-1">
          Description:
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
        </label>
        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "100px", height: "150px" }}
          />
        )}
        <button
          type="submit"
          className="py-1 border rounded-md hover: cursor-pointer bg-black hover:bg-gray-500 text-white hover:transition transition"
        >
          Update Book
        </button>
        <button
          onClick={onRequestClose}
          className="py-1 border rounded-md hover: cursor-pointer bg-white hover:bg-gray-200 hover:transition transition"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditBookModal;
