import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
const AdminUpdate = () => {
  let param = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/watch/" + param.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  function updateItem(values) {
    fetch("http://localhost:3000/watch/" + param.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(values),
    });
  }

  return (
    <>
      <Helmet>
        <title>AdminUpdate</title>
      </Helmet>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="admin_update">
          <Link to="/admin" className="link_to_admin">
            Back Admin Panel
          </Link>
          {
            <Formik
              initialValues={{
                name: product.name,
                image: product.image,
                price: product.price,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                image: Yup.string().required("Required"),
                price: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                updateItem(values);
                setSubmitting(false);
                Swal.fire("Succesfully updated!");
              }}
            >
              <Form>
                <label htmlFor="name"> Name</label>
                <Field name="name" type="text" />
                <div className="eroor_msg">
                  <ErrorMessage name="name" />
                </div>

                <label htmlFor="image">Image</label>
                <Field name="image" type="text" />
                <div className="eroor_msg">
                  <ErrorMessage name="image" />
                </div>

                <label htmlFor="price">Price </label>
                <Field name="price" type="number" />
                <div className="eroor_msg">
                  <ErrorMessage name="price" />
                </div>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
          }
        </div>
      )}
    </>
  );
};

export default AdminUpdate;
