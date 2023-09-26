import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      font-family: 'Poppins', sans-serif;

      margin: 0;
      padding: 0;

      list-style: none;
      text-decoration: none;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
    
    background-color: #689dcf;
  }
`;