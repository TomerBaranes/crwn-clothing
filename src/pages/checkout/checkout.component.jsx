import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsPrice = useSelector(selectCartItemsPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${cartItemsPrice}</span>
        <br />
        <button
          className="checkout-button"
          onClick={() =>
            Swal.fire(
              "Stripe's not working in Israel without a VPN and an American bank account makes me sad"
            )
          }
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
