import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
import WishlistContext from "../../features/wishlistContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watch/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const { wishlist, likeProduct } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Watch Shop</title>
      </Helmet>
      {/* HERO SECTION START */}

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

      {/* HERO SECTION END */}

      {/* NEW ARRIVALS START */}

      <section className="new_arrivals">
        <h1>New Arrivals</h1>
        <div className="new_arrivals_boxes_container">
          <div className="new_arrivals_box">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              alt="new_product"
            />
            <h2 className="new_arrivals_box_name">Thermo Ball Etip Gloves</h2>
            <p className="new_arrivals_box_price">$ 45,743</p>
          </div>
          <div className="new_arrivals_box">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
              alt="new_product"
            />
            <h2 className="new_arrivals_box_name">Thermo Ball Etip Gloves</h2>
            <p className="new_arrivals_box_price">$ 45,743</p>
          </div>
          <div className="new_arrivals_box">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
              alt="new_product"
            />
            <h2 className="new_arrivals_box_name">Thermo Ball Etip Gloves</h2>
            <p className="new_arrivals_box_price">$ 45,743</p>
          </div>
        </div>
      </section>
      {/* NEW ARRIVALS END */}
      {/* PRODUCTS SECTION START */}

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
              <div className="product" key={item._id}>
                <img src={item.image} alt={item.name} />
                <Link to={`/details/${item._id}`}>
                  <h2 className="product_name">{item.name}</h2>{" "}
                </Link>
                <div className="price">
                  <span>$</span> {item.price}
                </div>
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
        <button className="view_more_products">VIEW MORE PRODUCTS</button>
      </section>
      {/* PRODUCTS SECTION END */}

      {/* WATCH OF CHOICE SECTION START */}

      <section className="watch_of_choice_section">
        <div className="watch_of_choice_box">
          <div className="watch_of_choice_box_content">
            <h2>Watch of Choice</h2>
            <p>
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button>SHOW WATCHES</button>
          </div>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
            alt="watch"
          />
        </div>
        <div className="watch_of_choice_box">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
            alt=""
          />

          <div className="watch_of_choice_box_content">
            <h2>Watch of Choice</h2>
            <p>
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button>SHOW WATCHES</button>
          </div>
        </div>
      </section>
      {/* WATCH OF CHOICE SECTION END */}
    </>
  );
};

export default Home;
