import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 20px;

    .logo {
        width: 310px;
        height: 200px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    padding: 10px;
    width: 240px;

    label {
        background: #ffff;
        border-radius: 10px;
        padding: 10px;

        text-align: center;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        margin: 2px;
        color: rgb(80, 56, 190);
        font-weight: 400;
    }

    input {
        background: #ffff;
        border: 1px solid #bdc4c9;
        padding: 13px 18px;
        font-size: 14px;
        border-style: none;
        border-radius: 10px;
        outline: none;
    }

    button {
        background-color: rgb(80, 56, 190);
        color: #ffff;
        border: 1px solid #bdc4c9;
        border-radius: 14px;

        outline: none;
        padding: 8.3px 8px;
        font-size: 14px;
        margin-top: 18px;

        :hover{
            opacity: 0.6;
        }
    }
`;
