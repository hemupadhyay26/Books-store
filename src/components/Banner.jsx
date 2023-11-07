import React, { useState } from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  const [searchBook, setSearchBook] = useState("");

  const handleSearches = () => {
    // console.log(searchBook);
    fetch(`http://localhost:8000/search?searchBook=${searchBook}`,{
      method: 'GET', // Use GET method
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-sung text-black">
            Buy and Sell your <span className="text-blue-700">books</span>.
          </h2>
          <p className="md:w-4/5"> </p>
          <input
            type="text"
            name="search"
            className="py-2 px-2 rounded-s-sm outline-none"
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
        </div>
      </div>
      <div>
        <BannerCard></BannerCard>
      </div>
    </div>
  );
};

export default Banner;
