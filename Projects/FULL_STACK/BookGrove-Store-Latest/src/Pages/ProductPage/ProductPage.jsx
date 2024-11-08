import { useEffect, useRef } from "react";
import "./ProductPage.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { useToast, useWishlist, useCart } from "../../index";

function ProductPage() {
    const navigate = useNavigate();
    const { dispatchUserWishlist } = useWishlist();
    const { dispatchUserCart } = useCart();
    const { showToast } = useToast();
    const { id } = useParams();

    const productDetailsOnStorage = localStorage.getItem(`${id}`);
    const productdetails = JSON.parse(productDetailsOnStorage);

    const imgRef = useRef(null);
    const cartRef = useRef(null); // Add this reference to the cart icon

    const {
        _id,
        bookName,
        author,
        originalPrice,
        discountedPrice,
        discountPercent,
        imgSrc,
        imgAlt,
        badgeText,
        outOfStock,
        rating,
        description,
    } = productdetails;

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const user = jwt_decode(token);
            if (!user) {
                localStorage.removeItem("token");
            } else {
                (async function getUpdatedWishlistAndCart() {
                    let updatedUserInfo = await axios.get(
                        "https://bookztron-server.vercel.app/api/user",
                        {
                            headers: {
                                "x-access-token": localStorage.getItem("token"),
                            },
                        }
                    );

                    if (updatedUserInfo.data.status === "ok") {
                        dispatchUserWishlist({
                            type: "UPDATE_USER_WISHLIST",
                            payload: updatedUserInfo.data.user.wishlist,
                        });
                        dispatchUserCart({
                            type: "UPDATE_USER_CART",
                            payload: updatedUserInfo.data.user.cart,
                        });
                    }
                })();
            }
        }
    }, []);

    async function addItemToWishlist() {
        const token = localStorage.getItem("token");

        if (token) {
            const user = jwt_decode(token);

            if (!user) {
                localStorage.removeItem("token");
                showToast("warning", "", "Kindly Login");
                navigate("/login");
            } else {
                let wishlistUpdateResponse = await axios.patch(
                    "https://bookztron-server.vercel.app/api/wishlist",
                    {
                        productdetails,
                    },
                    {
                        headers: {
                            "x-access-token": localStorage.getItem("token"),
                        },
                    }
                );

                if (wishlistUpdateResponse.data.status === "ok") {
                    dispatchUserWishlist({
                        type: "UPDATE_USER_WISHLIST",
                        payload: wishlistUpdateResponse.data.user.wishlist,
                    });
                    showToast("success", "", "Item successfully added to wishlist");
                }
            }
        } else {
            showToast("warning", "", "Kindly Login");
        }
    }

    async function addItemToCart() {
        const token = localStorage.getItem("token");

        if (token) {
            const user = jwt_decode(token);

            if (!user) {
                localStorage.removeItem("token");
                showToast("warning", "", "Kindly Login");
                navigate("/login");
            } else {
                let cartUpdateResponse = await axios.patch(
                    "https://bookztron-server.vercel.app/api/cart",
                    {
                        productdetails,
                    },
                    {
                        headers: {
                            "x-access-token": localStorage.getItem("token"),
                        },
                    }
                );
                if (cartUpdateResponse.data.status === "ok") {
                    dispatchUserCart({
                        type: "UPDATE_USER_CART",
                        payload: cartUpdateResponse.data.user.cart,
                    });
                    showToast("success", "", "Item successfully added to cart");
                    flyToCartAnimation();
                }
            }
        } else {
            showToast("warning", "", "Kindly Login");
        }
    }

    // Function for the fly-to-cart animation
    const flyToCartAnimation = () => {
        const img = imgRef.current;
        const cart = cartRef.current;
    
        const imgRect = img.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();
    
        const imgClone = img.cloneNode(true);
        imgClone.style.position = "absolute";
        imgClone.style.top = `${imgRect.top}px`;
        imgClone.style.left = `${imgRect.left}px`;
        imgClone.style.width = `${imgRect.width}px`;
        imgClone.style.height = `${imgRect.height}px`;
        imgClone.style.zIndex = 1000;
        imgClone.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
    
        document.body.appendChild(imgClone);
    
        setTimeout(() => {
            // Calculate the vertical and horizontal movement
            const translateX = cartRect.left - imgRect.left;
            const translateY = cartRect.top - imgRect.top;
    
            // Update transform to move upwards instead of downwards
            imgClone.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(0.2)`;
            imgClone.style.opacity = "0";
        }, 10);
    
        setTimeout(() => {
            imgClone.remove();
        }, 1000);
    };
    

    return (
        <div className="product-page-container">
            <div className="product-page-item">
                <div className="image-container">
                    <img ref={imgRef} className="bookcover-image" src={imgSrc} alt={imgAlt}></img>
                    {badgeText && <span className="badge">{badgeText}</span>}
                </div>
                <div className="item-details">
                    <h1 className="book-title">{bookName}</h1>
                    <p className="author"><strong>Author:</strong> {author}</p>
                    <p className="description"><strong>Description:</strong> {description}</p>
                    <p className="rating"><strong>Rating:</strong> {rating}</p>
                    <div className="price-details">
                        <span className="discounted-price">Rs. {discountedPrice}</span>
                    </div>
                    {outOfStock && <p className="out-of-stock">Out of stock</p>}
                    <div className="button-group">
                        {outOfStock ? (
                            <button className="notify-btn">Notify Me</button>
                        ) : (
                            <>
                                <button onClick={addItemToWishlist} className="wishlist-btn">Add to Wishlist</button>
                                <button onClick={addItemToCart} className="cart-btn">Add to Cart</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* Cart Icon */}
            <div ref={cartRef} className="cart-icon">
                🛒
            </div>
        </div>
    );
}

export { ProductPage };
