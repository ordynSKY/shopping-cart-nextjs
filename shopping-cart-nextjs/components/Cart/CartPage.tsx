import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotal,
    removeFromCart,
} from "@/slices/cartSlice";
import { arrowLeft, checkoutSvg, clearSvg } from "@/svg";
import { cartItemType, stateType } from "@/types";
import styles from "@/styles/Cart.module.css";

const CartPage = () => {
    const cart = useSelector((state: stateType) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal(null));
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem: cartItemType) => {
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem: cartItemType) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem: cartItemType) => {
        dispatch(addToCart(cartItem));
    };

    const handleClearCart = () => {
        dispatch(clearCart(null));
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <div className={styles.cartEmpty}>
                        <p className={styles.descText}>
                            Your cart is currently empty
                        </p>
                        <div className={styles.startShopping}>
                            <Link href="/">
                                {arrowLeft}
                                {/* <span>&nbsp;Back to the shop</span> */}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.titles}>
                            <h3 className={styles.title}>Product</h3>
                            <h3 className={styles.price}>Price</h3>
                            <h3 className={styles.quantity}>Quantity</h3>
                            <h3 className={styles.total}>Total</h3>
                        </div>
                        <div className={styles.items}>
                            {cart.cartItems?.map((cartItem: cartItemType) => (
                                <div key={cartItem.id} className={styles.item}>
                                    <div className={styles.product}>
                                        <Image
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                            width={100}
                                            height={136}
                                        />
                                        {/* <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.desc}</p>
                                            <button
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        cartItem
                                                    )
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div> */}
                                    </div>
                                    <div className={styles.productPrice}>
                                        {cartItem.price}$
                                    </div>
                                    <div className={styles.productQuantity}>
                                        <button
                                            onClick={() =>
                                                handleDecreaseCart(cartItem)
                                            }
                                        >
                                            -
                                        </button>
                                        <div className={styles.count}>
                                            {cartItem.cartQuantity}
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleIncreaseCart(cartItem)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.totalPrice}>
                                        {cartItem.price * cartItem.cartQuantity}
                                        $
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.summary}>
                            <button
                                className={styles.clear}
                                onClick={() => handleClearCart()}
                            >
                                {clearSvg}
                                &nbsp; Clear cart
                            </button>
                            <div className={styles.checkout}>
                                <div className={styles.subtotal}>
                                    {/* <span>Subtotal</span>
                                    <span className={styles.amount}>
                                        {cart.cartTotalAmount}$
                                    </span> */}
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button>{checkoutSvg}&nbsp; CheckOut</button>
                                <div className={styles.continueShopping}>
                                    <Link href="/">
                                        {arrowLeft}
                                        {/* <span>&nbsp;Continue shopping</span> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartPage;
