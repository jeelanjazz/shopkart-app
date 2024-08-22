import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/actionsTypes";
import React, { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${searchTerm}`
      );
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  if (searchTerm === "") {
    dispatch(fetchProducts());
  }

  const handleCategoryClick = (category) => {
    navigate("/product", { state: { selectedCategories: [category] } });
  };

  const handleShowAllProducts = () => {
    navigate("/", { state: { selectedCategories: [] } });
  };

  return (
    <header className="bg-primary shadow-sm py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center col-12 col-md-4">
          <button
            onClick={handleShowAllProducts}
            className="btn btn-link text-white d-flex align-items-center p-0 text-decoration-none"
          >
            <img
              src="grocery-store.png"
              alt="Grocery Store"
              className="me-2"
              style={{ width: "50px", height: "50px" }}
            />
            <h5 className="fw-bold mb-0">Shopkart</h5>
          </button>
        </div>

        {/* <nav className="d-none d-md-flex col-12 col-md-4 justify-content-center">
          <button
            onClick={() => handleCategoryClick("men's clothing")}
            className="btn btn-link text-light mx-2"
          >
            Men
          </button>
          <button
            onClick={() => handleCategoryClick("women's clothing")}
            className="btn btn-link text-light mx-2"
          >
            Women
          </button>
          <button
            onClick={() => handleCategoryClick("electronics")}
            className="btn btn-link text-light mx-2"
          >
            Electronics
          </button>
          <button
            onClick={() => handleCategoryClick("jewelery")}
            className="btn btn-link text-light mx-2"
          >
            Jewellery
          </button>
        </nav> */}

        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products and more..."
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="btn btn-light"
              id="search-addon"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-end align-items-center">
          <Link to="/cart" className="btn btn-light d-flex align-items-center">
            <img
              src="shopping-bag.png"
              alt="Shopping Bag"
              className="me-2"
              style={{ height: "24px" }}
            />
            Cart ({totalQuantity})
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
