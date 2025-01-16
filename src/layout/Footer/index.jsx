import React from "react";
import { IoMdHeart } from "react-icons/io";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt="icon"
            className="icon"
          />
          <p>
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>
        <ul>
          <li>
            <h2>Quick Links</h2>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Offers & Discounts</a>
          </li>
          <li>
            <a href="">Get Coupon</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>

        <ul>
          <li>
            {" "}
            <h2>New Products</h2>
          </li>

          <li>
            <a href="">Woman Cloth</a>
          </li>
          <li>
            <a href="">Fashion Accessories</a>
          </li>
          <li>
            <a href="">Man Accessories</a>
          </li>
          <li>
            <a href="">Rubber made Toys</a>
          </li>
        </ul>

        <ul>
          <li>
            <h2>Support</h2>
          </li>

          <li>
            <a href="">Frequently Asked Questions</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Report a Payment Issue</a>
          </li>
        </ul>
      </div>

      <div className="footer_bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <IoMdHeart /> by
          <span>Mirana</span>
        </p>
        <div className="buttons">
          <CiTwitter />
          <CiFacebook />
          <FaInstagram />
          <TbWorldWww />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
