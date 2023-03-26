import NavBar from "@/components/NavBar/NavBar";
import styled from "styled-components";

const NotFound = () => {
    const NotFound = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #a9a9a9;
        min-height: 80vh;
        h2 {
            font-size: 55px;
        }

        p {
            font-size: 20px;
        }
    `;

    return (
        <>
            <NavBar />
            <NotFound>
                <h2>404</h2>
                <p>Page not found</p>
            </NotFound>
        </>
    );
};

export default NotFound;
