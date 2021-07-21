import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
//import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe("pk_test_51IaO1jGHXlKuOp6FfPCXYzUhqWF3xQAFL5WCdsfCM6wmwxUHhznNNXcUxqxs6OvYyUWiyHUyHlm0IV0OG1HQsHke00NnsUNTfD")


ReactDOM.render(
  <React.StrictMode>
  <Elements stripe={stripePromise}>
    <App/>
  </Elements>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
