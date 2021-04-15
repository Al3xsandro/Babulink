import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: rgb(235, 235, 235);
}

.error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    margin: 0 auto;

    width: 600px;
    height: 80vh;
}  
`;