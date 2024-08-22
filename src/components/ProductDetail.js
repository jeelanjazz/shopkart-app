import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted fs-4 mb-3">
            Price: ${product.price.toFixed(2)}
          </p>
          <p className="mb-3">{product.description}</p>
          <p className="mb-4">
            <strong>Rating:</strong> {product.rating.rate} (
            {product.rating.count} reviews)
          </p>
          <Link to="/" className="btn btn-outline-secondary">
            <FaArrowLeft className="me-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
