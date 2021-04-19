import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    padding: 15px 28px 15px 24px; // Acima, direita, baixo e esquerda

    .title {
        h1 {
            font-family: Roboto, sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: rgb(69, 75, 217);
        }
    }

    nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 3px;
    
    li, a {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        color: black;
        text-decoration: none;
        list-style: none;
        margin: 17px;
        &:hover{
            opacity: 0.9;
        }
    }
} 

@media(max-width: 768px){
    .title {
        h1 {
            font-size: 20px;
            margin: 10px;
        }
    }
    nav ul {
      display: none;
    }
}    
`;