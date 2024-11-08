import "./ProductOrderCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast, useOrders } from "../../index";

function ProductOrderCard({ productDetails }) {
    const { dispatchUserOrders } = useOrders();
    const navigate = useNavigate();
    const { showToast } = useToast();

    const {
        _id,
        bookName,
        author,
        imgSrc,
        imgAlt,
        badgeText,
        quantity,
        orderId,
    } = productDetails;

    const removeItemFromOrders = async () => {
        try {
            const updatedUserInfo = await axios.patch(
                `https://bookztron-server.vercel.app/api/orders/${_id}`,
                { orderId },
                { headers: { 'x-access-token': localStorage.getItem('token') } }
            );

            if (updatedUserInfo.data.status === "ok") {
                dispatchUserOrders({
                    type: "UPDATE_USER_ORDERS",
                    payload: updatedUserInfo.data.user.orders,
                });
                showToast("Item removed from orders successfully!", "success");
            }
        } catch (error) {
            showToast("Failed to remove item from orders.", "error");
        }
    };

    return (
        <div className="card-basic-horizontal">
            <img className="cart-item-book-img" src={imgSrc} alt={imgAlt} />
            <div className="card-item-details">
                <h4 id="item-title">{bookName}</h4>
                <p className="item-author">By {author}</p>
                <div className="item-cart-quantity">
                    <p className="cart-quantity-para">Quantity: </p>
                    <p>{quantity}</p>
                </div>
                <p className="order-id">Order ID: {orderId}</p>
                <div className="cart-horizontal-card-btns">
                    <button
                        className="solid-primary-btn"
                        onClick={removeItemFromOrders}
                    >
                        Remove item from Order
                    </button>
                </div>
                {badgeText && <div className="badge-on-card">{badgeText}</div>}
            </div>
        </div>
    );
}

export { ProductOrderCard };
