
import {Top,Container,Input,Button,GlobalStyle,Jog,Fit, Result,Bmi,Status,Greeting,Heading} from './styles/style';
 import JogImg from './assets/Fitness stats.gif'
import FitImg from './assets/fit.jpg'
import { useState } from "react";
import { useEffect } from 'react';

function App() {
  let [height, setHeight] = useState('');
  let [weight, setWeight] = useState('');
  let [bmi, setBmi] = useState('');
  let [greetMsg, setGreetMsg] = useState('');
  let [status, setStatus] = useState ('');
  let [heading, setHeading] = useState ('');

 const calculateBmi = () =>{
  console.log("test")
  let result = (weight / ((height * height) / 10000)).toFixed(2);
  setBmi(result);
  if(result <18.5){
    setHeading("Your BMI is")
    setStatus("You are under weigh");
  }
    else if(result >=18.5 && result <=24.99){
      setHeading("Your BMI is")
      setStatus("You are on normal weight"); 
  }
    else if(result >=25 && result <=29.99){
      setHeading("Your BMI is")
      setStatus("You are Overweight"); 
  }
  else {
    setHeading("Your BMI is")
    setStatus("You are Obesse")}

 };
 const clearAll = () => {
  setBmi('');
  setHeight('');
  setWeight('');
  setStatus('');
  setHeading('');
 }

console.log(bmi)

useEffect(() => {
  greet();
}, [])
const greet = () => {
  var myDate = new Date();
var hrs = myDate.getHours();

var greet;

switch (true) {
  case hrs > 17 : greet = `Good Evening \n Welcome to  our BMI Calculator!`;
  break;
  case hrs > 12 : greet = `Good Afternoon  \n Welcome to  our BMI Calculator!`;
  break;
  case hrs > 6 : greet = `Good Morning  \n Welcome to  our BMI Calculator! `;
  break;
  default: greet = `Welcome... but isn't it bed time now?`;
}
setGreetMsg(greet)

}

  return (
    <div>
      <GlobalStyle> </GlobalStyle>
        <Top className="glow">BMI Calculator</Top>
        <Greeting>
          <h3>{greetMsg}</h3>
          </Greeting>
         <Jog src={JogImg} alt="jog" />
          <Fit src={FitImg} alt="fit" />
        <Container className="container">
          <p><label htmlFor="ht">Height (in cm)</label><Input type="number" value ={height} onChange={(e) => setHeight(e.target.value)}  /></p>
          <p><label htmlFor="wt">Weight (in kg)</label><Input type="number" value ={weight} onChange={(e) => setWeight(e.target.value)}  /></p>
          <Button onClick={calculateBmi}>Calculate </Button>
          <Button onClick={clearAll}>Clear</Button>
        </Container>
        <Result>
          <Heading> {heading} </Heading>
          <Bmi> {bmi} </Bmi>
          <Status>{status}</Status>
        </Result>
      </div>

      
  );
}

export default App;
