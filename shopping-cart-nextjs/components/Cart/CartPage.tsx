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
import styled from "styled-components";

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

    const Container = styled.div`
        padding: 2rem 4rem;
        @media (max-width: 375px) {
            padding: 0.5rem 1rem;
        }
        h2 {
            font-weight: 400;
            font-size: 30px;
            text-align: center;
            @media (max-width: 375px) {
                font-size: 20px;
            }
        }
    `;

    const Titles = styled.div`
        margin: 2rem 0 1rem 0;
        h3 {
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
            @media (max-width: 375px) {
                font-size: 10px;
            }
        }
        display: grid;
        align-items: center;
        grid-template-columns: 3fr 1fr 1fr 1fr;
        column-gap: 0.5rem;
    `;

    const CartEmpty = styled.div`
        font-size: 20px;
        margin-top: 2rem;
        color: rgb(84, 84, 84);
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const StartShopping = styled.div`
        margin-top: 1rem;
        a {
            color: gray;
            text-decoration: none;
            display: flex;
            align-items: center;
            span {
                margin-left: 0.5rem;
            }
        }
    `;

    const Title = styled.h3`
        padding-left: 0.5rem;
    `;

    const Total = styled.h3`
        padding-right: 0.5rem;
        justify-self: right;
    `;

    const Item = styled.div`
        border-top: 1px solid rgb(187, 187, 187);
        padding: 1rem 0;
        display: grid;
        align-items: center;
        grid-template-columns: 3fr 1fr 1fr 1fr;
        column-gap: 0.5rem;
    `;

    const Product = styled.div`
        display: flex;
        img {
            width: 100px;
            max-width: 100%;
            margin-right: 1rem;
            @media (max-width: 375px) {
                width: 50px;
                height: 90px;
                max-width: 100%;
                margin-right: 0.5rem;
            }
        }
        h3 {
            font-weight: 400;
            @media (max-width: 375px) {
                font-size: 10px;
            }
        }
        button {
            border: none;
            outline: none;
            margin-top: 0.7rem;
            cursor: pointer;
            background: none;
            color: gray;
            &:hover {
                color: black;
            }
        }
    `;

    const ProductQuantity = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 130px;
        max-width: 100%;
        border: 0.5px solid rgb(177, 177, 177);
        border-radius: 5px;
        @media (max-width: 375px) {
            width: 50px;
            max-width: 100%;
            border: 0.5px solid rgb(177, 177, 177);
            border-radius: 5px;
            align-items: center;
        }
        button {
            border: none;
            outline: none;
            background: none;
            padding: 0.7rem 1.5rem;
            cursor: pointer;
            @media (max-width: 375px) {
                padding: 0.1rem 0.7rem;
            }
        }
    `;

    const Count = styled.div`
        padding: 0.6rem 0;
    `;

    const TotalPrice = styled.div`
        justify-self: right;
        padding-right: 0.5rem;
        font-weight: 700;
    `;

    const Summary = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-top: 1px solid rgb(187, 187, 187);
        padding-top: 2rem;
    `;

    const Clear = styled.button`
        width: 130px;
        max-width: 100%;
        height: 40px;
        border-radius: 5px;
        font-weight: 400;
        letter-spacing: 1.15px;
        border: 0.5px solid rgb(177, 177, 177);
        color: gray;
        background: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 375px) {
            margin-top: 4.6rem;
            margin-left: 1.5rem;
        }
        &:hover {
            background-color: rgb(126, 126, 126);
            color: white;
        }
    `;

    const Checkout = styled.div`
        width: 270px;
        max-width: 100%;
        button {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            font-weight: 400;
            border: 1px solid #00bfff;
            outline: none;
            cursor: pointer;
            background-color: white;
            color: #00bfff;
            letter-spacing: 1.15px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 375px) {
                width: 111px;
                margin-left: 5rem;
            }
            &:hover {
                background-color: #00bfff;
                color: white;
            }
        }
    `;

    const Subtotal = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    `;

    const Amount = styled.span`
        font-weight: 700;
    `;

    const ContinueShopping = styled.div`
        margin-top: 1rem;
        @media (max-width: 375px) {
            display: flex;
            justify-content: flex-end;
        }
        a {
            color: gray;
            text-decoration: none;
            display: flex;
            align-items: center;
            span {
                margin-left: 0.5rem;
            }
        }
    `;

    return (
        <>
            <Container>
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <CartEmpty>
                        <p>Your cart is currently empty</p>
                        <StartShopping>
                            <Link href="/">
                                {arrowLeft}
                                <span>&nbsp;Back to the shop</span>
                            </Link>
                        </StartShopping>
                    </CartEmpty>
                ) : (
                    <>
                        <Titles>
                            <Title>Product</Title>
                            <Title>Price</Title>
                            <Title>Quantity</Title>
                            <Total>Total</Total>
                        </Titles>
                        <div>
                            {cart.cartItems?.map((cartItem: cartItemType) => (
                                <Item key={cartItem.id}>
                                    <Product>
                                        <Image
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                            width={100}
                                            height={136}
                                        />
                                        <div>
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
                                        </div>
                                    </Product>
                                    <div>{cartItem.price}$</div>
                                    <ProductQuantity>
                                        <button
                                            onClick={() =>
                                                handleDecreaseCart(cartItem)
                                            }
                                        >
                                            -
                                        </button>
                                        <Count>{cartItem.cartQuantity}</Count>
                                        <button
                                            onClick={() =>
                                                handleIncreaseCart(cartItem)
                                            }
                                        >
                                            +
                                        </button>
                                    </ProductQuantity>
                                    <TotalPrice>
                                        {cartItem.price * cartItem.cartQuantity}
                                        $
                                    </TotalPrice>
                                </Item>
                            ))}
                        </div>
                        <Summary>
                            <Clear onClick={() => handleClearCart()}>
                                {clearSvg}
                                &nbsp; Clear cart
                            </Clear>
                            <Checkout>
                                <Subtotal>
                                    <span>Subtotal</span>
                                    <Amount>{cart.cartTotalAmount}$</Amount>
                                </Subtotal>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button>{checkoutSvg}&nbsp; CheckOut</button>
                                <ContinueShopping>
                                    <Link href="/">
                                        {arrowLeft}
                                        <span>&nbsp;Continue shopping</span>
                                    </Link>
                                </ContinueShopping>
                            </Checkout>
                        </Summary>
                    </>
                )}
            </Container>
        </>
    );
};

export default CartPage;
