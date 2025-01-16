import React, { useEffect, useState, useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import WishlistContext from "../../features/wishlistContext";

const Details = () => {
  let param = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watch/" + param.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { wishlist, likeProduct } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="detail_page">
        {
          <div className="product">
            <img src={product.image} alt={product.name} />
            <h2 className="product_name">{product.name}</h2>
            <div className="price">
              <span>$</span> {product.price}
            </div>
            <div className="heart_icon" onClick={() => likeProduct(product)}>
              {wishlist.find((e) => e._id == product._id) ? (
                <FaHeart />
              ) : (
                <CiHeart />
              )}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Details;
