import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../features/addwishlist/wishlistSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watch/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const liked = useSelector((state) => state.liked);
  console.log(liked);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Watch Shop</title>
      </Helmet>
      <section className="hero_section">
        <div className="container">
          <div className="hero_section_ls">
            <h1>Select Your New Perfect Style</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button>SHOP NOW</button>
          </div>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp"
            alt=""
          />
        </div>
      </section>
      <section className="nev_arrivals">
 
          <h1>New Arrivals</h1>
          <div className="nev_arrivals_boxes_container">
            <div className="nev_arrivals_box">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="new_product" />
              <h2 className="nev_arrivals_box_name">
              Thermo Ball Etip Gloves

              </h2>
              <p className="nev_arrivals_box_price">$ 45,743</p>
            </div>
            <div className="nev_arrivals_box">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="new_product" />
              <h2 className="nev_arrivals_box_name">
              Thermo Ball Etip Gloves

              </h2>
              <p className="nev_arrivals_box_price">$ 45,743</p>
            </div>
            <div className="nev_arrivals_box">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="new_product" />
              <h2 className="nev_arrivals_box_name">
              Thermo Ball Etip Gloves

              </h2>
              <p className="nev_arrivals_box_price">$ 45,743</p>
            </div>
          </div>
 
      </section>
      <section className="products_section">
        <h2 className="products_heading">Popular Items</h2>
        <p className="products_desc">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
        <div className="products_container">
          {products.map((item) => {
            return (
              <Link to={`/details/${item._id}`} key={item._id}>  <div className="product"  >
              <img src={item.image} alt={item.name} />
              <h2 className="product_name">{item.name}</h2>
              <div className="price">
                <span>$</span> {item.price}
              </div>
              <div className="heart_icon">
                {item.liked ? (
                  <FaHeart onClick={() => dispatch(addWishlist(item))} />
                ) : (
                  <CiHeart onClick={() => dispatch(addWishlist(item))} />
                )}
              </div>
            </div></Link>
            
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
