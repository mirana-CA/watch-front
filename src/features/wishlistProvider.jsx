import React, { useState } from "react";
import WishlistContext from "./wishlistContext";
import useLocalStorage from "use-local-storage";

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function likeProduct(item) {
    let isInArr = wishlist.find((e) => e._id == item._id);
    isInArr
      ? setWishlist(wishlist.filter((e) => e._id != item._id))
      : setWishlist([...wishlist, item]);
  }

  return (
    <WishlistContext.Provider value={{ wishlist, likeProduct }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
