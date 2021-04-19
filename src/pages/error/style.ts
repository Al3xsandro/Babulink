import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    margin: 0 auto;

    .error {
        width: 580px;
        height: 70vh;
    }

    a {
        color: black;
        padding: 10px;

        font-family: Roboto, sans-serif;

        text-decoration: none;

        background-color: #1010ff;
        color: #fff;
        border: 1px solid #ccc;
        outline: none;
        opacity: 0.8;
        border-radius: 15px;

        &:hover{
            opacity: 0.6;
        }
    }

    @media(max-width: 768px){
        width: 300px;
        height: 400px;

        .error {
            width: 350px;
            height: 50vh;
        }
    }
`;