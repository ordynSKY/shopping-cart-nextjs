import styles from "@/styles/Home.module.css";
import { addToCartSvg } from "@/svg";
import Image from "next/image";

const Products = (props: any) => {
    const { handleAddToCart, product } = props;
    const { name, image, desc, price } = product;

    return (
        <div className={styles.product}>
            <h3>{name}</h3>
            <Image
                src={image}
                alt={name}
                className={styles.image}
                width={214}
                height={296}
            />
            <div className={styles.description}>
                <span>{desc}</span>
                <span className={styles.price}>{price}$</span>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                {addToCartSvg} &nbsp; Add to cart
            </button>
        </div>
    );
};

export default Products;
