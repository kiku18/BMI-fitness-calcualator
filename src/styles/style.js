import styled, { keyframes, createGlobalStyle } from "styled-components";

const glow = keyframes`
from {
    text-shadow: 0 0 10px #FAF8F1, 0 0 20px #FAF8F1, 0 0 30px #FAEAB1, 0 0 40px #FAEAB1, 0 0 50px #FAEAB1, 0 0 60px #FFE15D, 0 0 70px #FFE15D;
  }
  
  to {
    text-shadow: 0 0 20px #ffbf00, 0 0 30px #ffcf40, 0 0 40px #ffcf40, 0 0 50px #ffcf40, 0 0 60px #ffcf40, 0 0 70px #ffcf40, 0 0 80px #ffcf40;
  }

`;
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
padding:0;
}

`;

export const Top = styled.h1`
  text-align: center;
  justify-content: center;
  background-color: #06535b;
  height: 50px;
  font: size 35px;
  color: #faf8f1;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  margin-top: 70px;
`;

export const Input = styled.input`
  border: 3px solid #ffbf00;
  outline-color: #ffe15d;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 275px;
  width: 100%;
  height: 30px;
  &:focus-visible {
    border: 1px solid#ffcf40;
  }
`;

export const Button = styled.button`
  background-color: #f1c40f;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 8px 24px;
  margin: 8px 2px;
`;

export const Jog =styled.img`
width: 465px;
  height: 465px;
  position: absolute;
  top: 50;
  @media(max-width:550px){
    display: none;
  }
  @media(max-width:1530px){
    display: none;
  }
`
;

export const Fit =styled.img`
width: 465px;
  height: 465px;
  position: absolute;
  right: 0;
  top: 50;
  @media(max-width:550px){
    display: none;
  }
  @media(max-width:1530px){
    display: none;
  }
`
;

export const Result =styled.div`
max-width: 600px;
   width: 100%;
   background-color: #fff0d3;
   margin: 0 auto;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content:center;
   text-align: center;
   height: 200px;
   margin-top: 70px;
   border-radius: 30px; 
`
;

export const Heading =styled.h6`
  color: #32325d;
  font-family: "Merriweather";
  font-size: 26px;
`
;

export const Bmi =styled.h5`
  color: #32325d;
  font-family: "Merriweather";
  font-size: 35px;
`
;


export const Status =styled.h6`
  color: #32325d;
  font-family: "Merriweather";
  font-size: 18px;
`
;

export const Greeting =styled.div`
  max-width: 600px;
   width: 100%;
   background-color:#d3368a;
   margin: 0 auto;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content:center;
   text-align: center;
   height: 75px;
   margin-top: 35px;
   border-radius: 30px;
   color: white;
   white-space: pre-line;
`;

