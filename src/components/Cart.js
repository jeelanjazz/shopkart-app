import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHome, FaDollarSign } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    navigate("/");
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container d-flex flex-column min-vh-100">
      <div className="container mt-4 flex-grow-1">
        <h2 className="mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            <div className="cart-items-list mb-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
              <div className="total-amount d-flex align-items-center mb-3 mb-md-0">
                <FaDollarSign size={24} className="me-2" />
                <p className="fw-bold fs-5 mb-0">
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary me-2"
                  onClick={handleCheckout}
                  // disabled
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
                <button className="btn btn-secondary" onClick={handleClick}>
                  <FaHome size={18} className="me-2" />
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart text-center my-5">
            <FaShoppingCart size={64} className="text-muted mb-3" />
            <p className="text-muted fs-4">Your cart is currently empty.</p>
            <p className="text-muted mb-4">
              Browse products and add them to your cart to see them here.
            </p>
            <button className="btn btn-primary" onClick={handleClick}>
              <FaHome size={18} className="me-2" />
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
