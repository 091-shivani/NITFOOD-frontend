import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AddDish() {
  const [dish, setDish] = useState({
    CategoryName: "",
    name: "",
    img: "",
    half: "",
    full: "",
    email: localStorage.getItem("userEmail"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dish);
    const response = await fetch("http://localhost:5000/api/fooditem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dish),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert(json.message);
      //save the auth toke to local storage and redirect
      //   localStorage.setItem('token', json.authToken)
      //   navigate("/login")
    } else {
      alert(json.message);
    }
  };

  const onChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="container">
          <form className="border bg-dark  login1" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputcategory" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                name="CategoryName"
                id="exampleInputcategory"
                value={dish.CategoryName}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name of dish
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleInputName"
                value={dish.name}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputImg" className="form-label">
                Image Link
              </label>
              <input
                type="text"
                className="form-control"
                name="img"
                id="exampleInputImg"
                value={dish.img}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputHalfPlate" className="form-label">
                half plate price
              </label>
              <input
                type="text"
                className="form-control"
                name="half"
                id="exampleInputHalfPlate"
                value={dish.half}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputfullPlate" className="form-label">
                full plate price
              </label>
              <input
                type="text"
                className="form-control"
                name="full"
                id="exampleInputfullPlate"
                value={dish.full}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="m-3 btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddDish;
