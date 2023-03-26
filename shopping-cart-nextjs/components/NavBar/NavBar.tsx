import { useSelector } from "react-redux";
import Link from "next/link";
import { cartSvg } from "@/svg";
import { stateType } from "@/types";
import styled from "styled-components";

const NavBar = () => {
    const { cartTotalQuantity } = useSelector((state: stateType) => state.cart);

    const Navbar = styled.nav`
        height: 70px;
        background-color: #00bfff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4rem;
        h2 {
            color: white;
            font-size: 40px;
            @media (max-width: 375px) {
                font-size: 30px;
            }
        }
    `;

    const CartIcon = styled.div`
        display: flex;
        align-items: flex-start;
        color: white;
    `;

    const CartQuantity = styled.span`
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 15px;
        width: 15px;
        background-color: #f15656;
        border-radius: 50%;
        font-size: 14px;
        font-weight: 700;
        color: black;
        margin-left: 5px;
    `;

    return (
        <>
            <Navbar>
                <Link href="/">
                    <h2>React Shop</h2>
                </Link>
                <Link href="/cart">
                    <CartIcon>
                        {cartSvg}
                        <CartQuantity>
                            <span style={{ color: "white", fontSize: 10 }}>
                                {cartTotalQuantity}
                            </span>
                        </CartQuantity>
                    </CartIcon>
                </Link>
            </Navbar>
        </>
    );
};

export default NavBar;
