import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actionsTypes";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductItem.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const isProductInCart = cart.some((item) => item.id === product.id);
  const productQuantityInCart = isProductInCart
    ? cart.find((item) => item.id === product.id).quantity
    : 0;

  const titleTrim = (title, maxLength) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-light">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top product-image rounded-top"
            alt={product.title}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">
            {titleTrim(product.title, 20)}
          </h5>
          <p className="card-text mb-1">Price: ${product.price.toFixed(2)}</p>
          <p className="card-text mb-2 text-muted">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          {isProductInCart ? (
            <div className="d-flex align-items-center mb-2">
              <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={handleDecreaseQuantity}
              >
                <FaShoppingCart />-
              </button>
              <span className="me-2">{productQuantityInCart}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleIncreaseQuantity}
              >
                <FaShoppingCart />+
              </button>
            </div>
          ) : (
            <button className="btn btn-primary w-100" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
