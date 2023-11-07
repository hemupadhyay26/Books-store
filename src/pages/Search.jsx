import React, { useState } from "react";

const Search = () => {
  const [searchBook, setSearchBook] = useState("");
  const [searchBookRes, setSearchBookRes] = useState([]);

  const handleSearches = () => {
    // console.log(searchBook);
    fetch(`http://localhost:8000/search?searchBook=${searchBook}`, {
      method: "GET", // Use GET method
    })
      .then((res) => res.json())
      .then((res) => {
        setSearchBookRes(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-28 text-center">
      <input
        type="text"
        name="search"
        className="py-2 px-2 rounded-s-sm outline-none bg-gray-200"
        id="search"
        placeholder="Search a book"
        onChange={(e) => setSearchBook(e.target.value)}
      ></input>
      <button
        className="bg-blue-700 px-6 py-2 text-white font-medium 
            hover:bg-black transition-all ease-in duration-200"
        onClick={handleSearches}
      >
        Search
      </button>
      {searchBookRes ? (
        <div className="mt-10 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {searchBookRes.map((book) => (
            <div>
              <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full object-cover"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                </a>
                <div className="p-5 justify-between">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {book.volumeInfo.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Author: {book.volumeInfo.authors} <br />
                    Categories: {book.volumeInfo.categories || "N/A"}<br/>
                    Prize: {book.saleInfo.saleability==="FOR_SALE"? book.saleInfo.listPrice.amount : "NOT_FOR_SALE"}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        {}
      )}
    </div>
  );
};

export default Search;
