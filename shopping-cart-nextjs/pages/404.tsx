import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import styles from "@/styles/NotFound.module.css";
import styled from "styled-components";

const NotFound = () => {
    const NotFound = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #a9a9a9;
        min-height: 80vh;
    `;

    return (
        <>
            <NavBar />
            <div>
                <h2>404</h2>
                <p>Page not found</p>
            </div>
        </>
    );
};

export default NotFound;
