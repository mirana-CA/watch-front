import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const AdminAdd = () => {
  function postReq(value) {
    fetch("http://localhost:3000/watch/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(value),
    });
  }
  return (
    <>
      <Helmet>
        <title>AdminAdd</title>
      </Helmet>
      <div className="admin_add">
        <Link to="/admin" className="link_to_admin">
          Back Admin Panel
        </Link>
        <Formik
          initialValues={{ name: "", image: "", price: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            image: Yup.string().required("Required"),
            price: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            postReq(values);
            setSubmitting(false);
            Swal.fire("Succesfully added!");
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
      </div>
    </>
  );
};

export default AdminAdd;
