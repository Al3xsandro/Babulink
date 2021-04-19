import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;

        margin: 20px;
        background: #fff;
        border-radius: 10px;
        padding: 90px;

        h1 {
            font-family: Roboto, sans-serif;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            color: rgb(69, 75, 217);
        }
        p {
            text-align: center;
            margin: 10px;
            font-weight: 300;
            font-family: Roboto, sans-serif;
        }
        label {
            margin: 10px;
            padding: 20px;
            border-radius: 20px;
            
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 400;
            opacity: 0.8;
            max-width: 20rem;
            min-height: 4rem;
            
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
        }

        @media(max-width: 968px){
            margin: 20px;
            padding: 100px 10px;

            h1 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
                text-align: center;
            }
            label {
                max-width: 18rem;
            }
        }
    }
`;