import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { cartItemType, cartTotalType } from "@/types";

if (typeof window !== "undefined") {
    console.log("You are on the browser");
    // 👉️ can use localStorage here

    localStorage.setItem("name", "Tom");

    console.log(localStorage.getItem("name")); // 👉️ "Tom"
} else {
    console.log("You are on the server");
    // 👉️ can't use localStorage
}

const getStorLocal = (item: string) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(item);
    }
    return null;
};

const setStorLocal = (item: string, value: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(item, value);
    }
};

const initialState = {
    cartItems: getStorLocal("cartItems")
        ? JSON.parse(getStorLocal("cartItems") || "")
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item: cartItemType) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(
                    `Increased ${state.cartItems[itemIndex].name} product quantity`,
                    {
                        position: "bottom-left",
                    }
                );
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left",
                });
            }
            setStorLocal("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem: cartItemType) => cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            setStorLocal("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left",
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem: cartItemType) => cartItem.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem: cartItemType) =>
                        cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
                setStorLocal("cartItems", JSON.stringify(state.cartItems));
                toast.error(`${action.payload.name} removed from cart`, {
                    position: "bottom-left",
                });
            }
            setStorLocal("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            toast.error("Cart cleared", {
                position: "bottom-left",
            });
            setStorLocal("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal: cartTotalType, cartItem: cartItemType) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } =
    cartSlice.actions;

export default cartSlice.reducer;
