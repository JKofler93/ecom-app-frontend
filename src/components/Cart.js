import React, {useState} from 'react';
import CartItem from './CartItem'
import { Card, Button, Container, Icon, Header} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import CheckoutForm from './CheckoutForm';

import ItemCard from './ItemCard';

// const stripePromise = loadStripe('pk_test_51IaO1jGHXlKuOp6FfPCXYzUhqWF3xQAFL5WCdsfCM6wmwxUHhznNNXcUxqxs6OvYyUWiyHUyHlm0IV0OG1HQsHke00NnsUNTfD');


function Cart({ orderId, currentOrder, setCartItems, cartItems, checkOut}) {
    const [paid, setPaid] = useState(false)
    const [letsPay, setLetsPay] = useState(false)

    console.log("Current Order in cart:", currentOrder)
    const baseStripeElementOptions = {
        style: {
            base: {
                fontFamily: 'Oxanium',
                fontSize: '16px',
                    color: '#000000',
                    '::placeholder': {
                    color: '#000000',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        }
    }

    // const handleToken = (token, address) => {
    //     console.log('token :>> ', address);
    // }

    
    
    if (currentOrder){
    
        // const itemArr = currentOrder.items.filter((cartItem) => cartItem.order.id === orderId && cartItem.order.paid == false)

        // const itemList = currentOrder.items.map((item) => {
        //     return <CartItem key={item.id} cartItems={cartItems} item={item} currentOrder={currentOrder}/>
        // }) 


    return (
        <div>
                 {!paid ? 
                    <div>
                        <Container textAlign='center'>
                            <Header as='h1' >Cart</Header>
                            <Header as='h3' >Your cart total is: {currentOrder.total_cost}</Header>
                            <br></br>
                            <br></br>
                           { letsPay 
                           
                           ?

                            <div>
                                <CheckoutForm orderId={orderId} setPaid={setPaid}/>
                            </div>

                            :

                            <Button onClick={() => setLetsPay(true)}>Check Out</Button>
                           }

                        </Container>

                        <Container style={{padding: "20px"}}>
                            <Card.Group itemsPerRow={4} style={{padding: "20px"}}>
                                {currentOrder.items.map((item) => {
                                    return <ItemCard item={item}/>
                                })}
                            </Card.Group>
                        </Container>


                        
                    </div>
                :
                
              
                <div>
                    <Container textAlign='center'>
                       <Header as='h1'>Order has been placed!</Header>
                       <Header as='h3' >Your tracking number is: {currentOrder.tracking}</Header> 
                       <img src="https://i.pinimg.com/originals/5c/3c/d0/5c3cd0df10cd58710d9dc4a0622b795f.gif" alt="hedge-hog"/>
                       <Link to="/home">
                       <br></br>
                       <br></br>
                       <Button onClick={() => setPaid(false)}>Continue Shopping?</Button>
                       </Link>
                      
                    </Container>
                </div>
               
            }
            </div>
        )
    }else {
        return(
            <div>
                {/* Loading... */}
            </div>
        )
    }

}

export default Cart;


{/* <div>
<StripeProvider apiKey="pk_test_51IaO1jGHXlKuOp6FfPCXYzUhqWF3xQAFL5WCdsfCM6wmwxUHhznNNXcUxqxs6OvYyUWiyHUyHlm0IV0OG1HQsHke00NnsUNTfD">
    <Elements stripe={stripePromise}> 
        <CheckoutForm orderId={orderId}/>
    </Elements>
</StripeProvider>

</div> */}