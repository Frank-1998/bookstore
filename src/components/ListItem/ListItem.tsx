import React from "react";
import { Book } from "../../store/bookSlice";
import { trash } from "../../assets/icons";
type propTypes = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<propTypes> = ({ book, onEdit, onDelete }) => {
  return (
    <div
      onClick={() => onEdit(book)}
      className="relative flex items-center justify-between m-2 p-2 border rounded-lg shadow-sm bg-slate-50" // Adjusted for a more consistent flex layout
    >
      <div className="flex items-center gap-3 2xl:gap-8">
        <img
          src={book.imageUrl}
          alt="book image"
          className="w-20 h-20 2xl:w-40 2xl:h-40"
        />
        <div>
          <h3 className="sm:text-base text-xm md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
            {book.name}
          </h3>
          <p className="sm:text-base text-gray-500 text-xm md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
            <i>{book.category}</i>
          </p>
          <p className="sm:text-base text-xm md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
            ${book.price}
          </p>
        </div>
        <div>
          <h4>Description:</h4>
          <p className="sm:text-base text-xm md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
            {book.description}
          </p>
        </div>
      </div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onDelete(book.id);
        }}
        className="right-2 p-1 border-0 rounded-md bg-transparent 2xl:w-15 2xl:h-15"
      >
        <img
          src={trash}
          alt="delete button"
          className="hover:cursor-pointer hover:animate-bounce 2xl:w-14"
        />
      </button>
    </div>
  );
};

export default ListItem;
