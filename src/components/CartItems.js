import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actionsTypes";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text text-muted">
                Price: ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={handleDecreaseQuantity}
                >
                  <FaMinus />
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={handleIncreaseQuantity}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="btn btn-outline-danger"
                onClick={handleRemoveFromCart}
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
