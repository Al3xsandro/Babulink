import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px;


    background: #fff;
    border-radius: 10px;
    padding: 100px;

    .title {
        h1 {
            font-family: Roboto, sans-serif;
            font-weight: 700;
            font-size: 35px;
            margin: 18px;

            text-align: center;
            color: rgb(69, 75, 217);
        }
        p {
            opacity: 0.7;
            font-weight: 300;
            font-size: 18px;
            font-family: Roboto, sans-serif;
        }
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        input {
            padding: 20px;
            border-radius: 20px;
            
            max-width: 20rem;
            min-height: 4rem;

            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: none;
        }

        button {
            margin: 4px;
            padding: 22.5px;

            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: blue;
            outline: none;

            color: #fff;
            opacity: 0.7;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    .result {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        h1 {
            font-family: Roboto, sans-serif;
            font-weight: 700;
            font-size: 35px;
            margin: 18px;

            text-align: center;
            color: rgb(69, 75, 217);
        }

        label {
            padding: 20px;
            border-radius: 20px;
            
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 400;

            max-width: 20rem;
            min-height: 4rem;
            
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
        } 

        .copyButton {
            margin: 4px;
            padding: 22.5px;

            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: blue;
            outline: none;

            color: #fff;
            opacity: 0.7;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    @media(max-width: 768px){
        background: #fff;
        padding: 20px;

        form, .result {
            display: flex;
            justify-content: center;
            flex-direction: column;

            button, .copyButton {
                margin: 10px;
                padding: 15px;
                max-width: 220px;
            }
        }
    }
`;
