import React, { useState } from "react"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom";
import { Button, Card, Container, Header } from 'semantic-ui-react'
import checkoutStyles from '../styles/checkoutStyles.css'

function CheckoutForm({ orderId, setPaid }) {
    const [completed, setCompleted] = useState(false)
    const history = useHistory()
    console.log('orderId :>> ', orderId);
    const stripe = useStripe();
    const elements = useElements();
  
    // const stripe = useStripe()
 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const cardElement = elements.getElement(CardElement)

        console.log("card", cardElement)
        // use this to interact with the stripe API
        console.log("stirpe", stripe)
            
        let {token} = await stripe.createToken(cardElement, {name: 'Name'});
        console.log(token.id)
        let response = await fetch('http://localhost:3000/charges', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token.id,
                orderId: orderId
            })
        })

        if (response.ok) {
            // setCompleted(true)
            fetch("http://localhost:3000/orders/" + orderId, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paid: true
                })
            })
            .then( res => res.json())
            .then(data => {
                setPaid(true)
                console.log("You did it!!", data)
            })
        }
    } 
    return (
        <div className="checkout-div">
            <Card>
            <Header as="h1">Please enter your information</Header>
            <br></br>
                <form className="checkout">
                    <br></br>
                    <br></br>
                    <CardElement />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button onClick={handleSubmit} color="primary" size="lg">Purchase</Button>
                </form>   
                <br></br>
            </Card>
        </div> 
    )
}


export default CheckoutForm;