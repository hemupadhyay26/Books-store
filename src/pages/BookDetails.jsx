import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  return (
    <div className="mt-28  px-4 lg:px-24">
    <img src={book.imageURL} className="h-96"/>
      <h2>{book.bookTitle}</h2>
    </div>
  );
};

export default BookDetails;
