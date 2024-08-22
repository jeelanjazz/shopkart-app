import React from "react";
import ProductDetail from "../components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-light rounded p-4 shadow-sm">
            <ProductDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
