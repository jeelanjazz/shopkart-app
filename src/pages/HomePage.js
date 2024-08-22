import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../redux/actionsTypes";
import ProductList from "../components/ProductList";
import Filter from "../common/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.selectedCategories !== undefined) {
      setSelectedCategories(location.state.selectedCategories || []);
    } else {
      setSelectedCategories([]);
    }
  }, [location.state]);

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  return (
    <div className="main-content container-fluid">
      <div className="row mt-4">
        <div className="col-md-3">
          <Filter
            onFilterChange={({ categories }) =>
              setSelectedCategories(categories)
            }
          />
        </div>

        <div className="col-md-9">
          <div className="p-3">
            {isLoading ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <p className="text-center fs-4 mb-0">No Products Found....</p>
              </div>
            ) : (
              <ProductList products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
