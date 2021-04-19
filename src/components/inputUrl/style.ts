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
    padding: 90px;

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
            padding: 10px;
        }
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        input {
            padding: 20px;
            
            max-width: 20rem;
            min-height: 0.4rem;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: none;
        }
        button {
            margin: 7px;
            padding: 1.2rem;
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
            margin: 8px;
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
    .popup {
    position: fixed;
    bottom:10px;
    left: 1px;
    margin: 20px;
    p {
      background-color: #1f73b7;
      color: #fff;
      
      padding: 10px 10px;
      font-size: 14px;
      font-weight: 500;
      font-family: Roboto, sans-serif;
      fill: #fff;
      border-radius: 21px;
      border: none;
    }
  }
  @media(max-width: 968px){
    display: flex;
    background: #fff;

    padding: 20px 10px;

    .title {
        p {
            font-size: 14px;
            text-align: center;
        }
    }
    form, .result {
        display: flex;
        justify-content: center;
        flex-direction: column;
        button, .copyButton {
            margin: 10px;
            padding: 1rem;
            width: 13.8rem;
            max-height: 14rem;
        }
    }
    .popup {
        p {
            border-radius: 10px;
        }
    }
  }
`;