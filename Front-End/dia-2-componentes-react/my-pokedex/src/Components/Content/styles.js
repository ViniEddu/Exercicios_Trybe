import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    box-shadow: 1px 3px 3px rgba(128, 128, 128, 0.220);
    width: 65%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 750px) {
        width: 30%;
    }
`;

export const Card = styled.div`
    border-radius: 15px;
    border: 0.4px solid grey;
    box-shadow: 1px 3px 3px rgba(128, 128, 128, 0.220);
    min-width: 340px;
    max-width: 350px;
    height: 150px;
    background: rgba(0, 128, 128, 0.850);
    margin: 30px 0px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
`;

export const Paragraph = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    line-height: 40px;
    font-family: 'Poppins', sans-serif;
`;