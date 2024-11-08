import "./ShoppingBill.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useToast, useOrders } from "../../index";
import axios from "axios";
import { loadRazorpayScript } from "../../UtilityFunctions/loadRazorpayScript";

function ShoppingBill() {
    const navigate = useNavigate();
    const { userCart, dispatchUserCart } = useCart();
    const { showToast } = useToast();
    const { dispatchUserOrders } = useOrders();
    const [paymentMethod, setPaymentMethod] = useState("razorpay");

    let totalBill = 0;
    const deliveryCharges = 50;

    userCart.forEach(product => {
        totalBill += (product.discountedPrice * product.quantity);
    });

    const finalBill = totalBill + deliveryCharges;

    async function displayRazorPay() {
        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            showToast("error", "", "Razorpay SDK failed to load, kindly check internet connection!");
            return;
        }

        const finalBillAmount = (finalBill * 100).toString();

        const dataResponse = await axios.post(
            "https://bookztron-server.vercel.app/api/razorpay",
            { finalBillAmount }
        );

        const data = dataResponse.data;

        const options = {
            key: "rzp_test_hyc3ht0ngvqOD5",
            amount: data.amount,
            currency: data.currency,
            name: "Bookgrove",
            description: "Thank you for shopping!",
            image: "",
            order_id: data.id,
            handler: async function (response) {
                showToast("success", "", "Payment Successful! 😎");
                showToast("success", "", "Order added to your bag!");
                await handleOrderPlacement(data.id);
                navigate('/orders');
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function handleOrderPlacement(orderId = null) {
        const newOrderItemsArray = userCart.map(orderItem => ({
            ...orderItem,
            orderId: orderId
        }));
        const ordersUpdatedResponse = await axios.post(
            "https://bookztron-server.vercel.app/api/orders",
            { newOrderItemsArray },
            { headers: { 'x-access-token': localStorage.getItem('token') } }
        );
        const emptyCartResponse = await axios.patch(
            "https://bookztron-server.vercel.app/api/cart/empty/all",
            {},
            { headers: { 'x-access-token': localStorage.getItem('token') } }
        );
        if (emptyCartResponse.data.status === 'ok') {
            dispatchUserCart({ type: "UPDATE_USER_CART", payload: [] });
        }
        if (ordersUpdatedResponse.data.status === 'ok') {
            dispatchUserOrders({ type: "UPDATE_USER_ORDERS", payload: ordersUpdatedResponse.data.user.orders });
        }
    }

    function handlePlaceOrder() {
        if (paymentMethod === "razorpay") {
            displayRazorPay();
        } else if (paymentMethod === "cod") {
            showToast("success", "", "Order placed successfully with COD! 😎");
            handleOrderPlacement(); // Handle order placement without payment
            navigate('/orders');
        }
    }

    return (
        <div className="cart-bill">
            <h2 className="bill-heading">Bill Details</h2>

            <hr />

            {userCart.map(product => (
                <div key={product._id} className="cart-price-container">
                    <div className="cart-item-bookname">
                        <p>{product.bookName}</p>
                    </div>
                    <div className="cart-item-quantity">
                        <p>X {product.quantity}</p>
                    </div>
                    <div className="cart-item-total-price" id="price-sum">
                        <p>&#8377;{product.discountedPrice * product.quantity}</p>
                    </div>
                </div>
            ))}

            <hr />

            <div className="cart-delivery-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p>Delivery Charges</p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="delivery-charges">&#8377; {deliveryCharges}</p>
                </div>
            </div>

            <hr />

            <div className="cart-total-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p><b>Total Charges</b></p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="total-charges"><b>&#8377; {finalBill}</b></p>
                </div>
            </div>

            <div className="payment-method-container">
                <label>
                    <input
                        type="radio"
                        name="payment-method"
                        value="razorpay"
                        checked={paymentMethod === "razorpay"}
                        onChange={() => setPaymentMethod("razorpay")}
                    />
                    <span>Razorpay</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment-method"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                    />
                    <span>Cash on Delivery</span>
                </label>
            </div>

            <hr />
            <button
                className="place-order-btn solid-secondary-btn"
                onClick={handlePlaceOrder}
            >
                Place Order
            </button>
        </div>
    );
}

export { ShoppingBill };
