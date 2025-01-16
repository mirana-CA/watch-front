import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { addWishlist } from "../../features/addwishlist/wishlistSlice";

const Details = () => {
  let param = useParams();
  console.log(param.id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watch/" + param.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
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
            <div className="heart_icon">
              {/* {product.liked ? (
                  <FaHeart onClick={() => dispatch(addWishlist(product))} />
                ) : (
                  <CiHeart onClick={() => dispatch(addWishlist(product))} />
                )} */}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Details;
