import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
 
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
  

 body {
  max-width: 1280px;
  margin: 0 auto;
  padding: 15px;
  background-color: rgb(187,191,247);
  color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}


ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;
