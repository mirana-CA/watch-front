import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import WishlistContext from "../../features/wishlistContext";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, likeProduct } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlist">
        <div className="wishlist_items_container">
          {wishlist.map((item) => {
            return (
              <div className="wishlist_item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <Link to={`/details/${item._id}`}>
                  <h2>{item.name}</h2>
                </Link>
                <p>{item.price}</p>
                <div className="heart_icon" onClick={() => likeProduct(item)}>
                  {wishlist.find((e) => e._id == item._id) ? (
                    <FaHeart />
                  ) : (
                    <CiHeart />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
