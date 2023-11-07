import React, { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/all-books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(6,12));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <BooksCard books={books} headline="Others Books" />
    </div>
  );
};

export default OtherBooks;
