import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
const AdminDetails = () => {
  let param = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watch/" + param.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <Helmet>
        <title>AdminDetails</title>
      </Helmet>

      <div className="admin_detail_page">
        <Link to="/admin" className="link_to_admin">
          Back Admin Panel
        </Link>
        {
          <div className="product">
            <img src={product.image} alt={product.name} />
            <h2 className="product_name">{product.name}</h2>
            <div className="price">
              <span>$</span> {product.price}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default AdminDetails;
