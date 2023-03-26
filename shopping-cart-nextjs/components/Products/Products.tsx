import { addToCartSvg } from "@/svg";
import Image from "next/image";
import styled from "styled-components";

const Products = (props: any) => {
    const { handleAddToCart, product } = props;
    const { name, image, desc, price } = product;

    const Product = styled.div`
        width: 300px;
        max-width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 15px;
        box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
            5px 5px 10px rgba(94, 104, 121, 0.3);
        &:hover {
            box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
                5px 5px 10px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 375px) {
            width: 250px;
        }
        h3 {
            font-size: 25px;
            font-weight: 400;
            text-align: center;
        }
        button {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            margin-top: 2rem;
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
            &:hover {
                background-color: #00bfff;
                color: white;
            }
        }
    `;

    const ImageContainer = styled.div`
        width: 80%;
        object-fit: contain;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        @media (max-width: 375px) {
            width: 100%;
        }
    `;

    const Description = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Price = styled.span`
        font-size: 20px;
        font-weight: 700;
    `;

    return (
        <Product>
            <h3>{name}</h3>
            <ImageContainer>
                <Image src={image} alt={name} width={214} height={296} />
            </ImageContainer>
            <Description>
                <span>{desc}</span>
                <Price>{price}$</Price>
            </Description>
            <button onClick={() => handleAddToCart(product)}>
                {addToCartSvg} &nbsp; Add to cart
            </button>
        </Product>
    );
};

export default Products;
