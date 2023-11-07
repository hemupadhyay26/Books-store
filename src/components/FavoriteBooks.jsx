import React, { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/all-books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0,7));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <BooksCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBooks;
