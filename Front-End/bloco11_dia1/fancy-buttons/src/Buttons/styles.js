import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 250px;
    background-color: #472643;
    box-shadow: 1px 2px 3px #f3eae8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 15px;
    background-color: #a25a7f;
    color: #f6adcf;
    border-radius: 5px;
    font-size: 18px;

    :hover {
        box-shadow: 1px 2px 3px #f6adcf;
        cursor: pointer;
        font-weight: bold;
    }
`;