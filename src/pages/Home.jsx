import React from "react";
import Banner from "../components/Banner";
import FavBooks from "../components/FavBooks";
import Promo from "../components/Promo";
import FavoriteBooks from "../components/FavoriteBooks";
import OtherBooks from "../components/OtherBooks";
import Footers from "../components/Footers";

function Home() {
  return (
    <div className="h-screen ">
      <Banner/>
      <FavoriteBooks />
      <FavBooks/>
      <Promo/>
      <OtherBooks />
      <Footers />
      </div>
  );
}

export default Home;
