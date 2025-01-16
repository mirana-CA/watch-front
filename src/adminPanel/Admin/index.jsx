import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Admin = () => {
  const [products, setProducts] = useState([]);

  function getItems() {
    fetch("http://localhost:3000/watch/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  function deleteItem(id) {
    fetch("http://localhost:3000/watch/" + id, {
      method: "DELETE",
    });
    getItems();
    Swal.fire("Succesfully deleted!");
  }
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <div className="admin">
        <Link to="/adminadd" className="link_to_add">
          Add New Item <CiCirclePlus />
        </Link>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>

                  <td>
                    <Link
                      to={`/admindetails/${item._id}`}
                      className="admin_item_name"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.price}</td>
                  <td className="delete_btn">
                    <FaRegTrashAlt onClick={() => deleteItem(item._id)} />
                  </td>

                  <td className="update_btn">
                    <Link to={`/adminupdate/${item._id}`}>
                      <FaPencilAlt />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
