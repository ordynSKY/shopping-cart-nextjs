import axios from "axios";

export const fetchProducts = async () => {
    try {
        console.log(process.env);
        const data = await axios.get(`http://localhost:5000/products` || "");
        return data;
    } catch (error) {
        console.log(error);
    }
};
