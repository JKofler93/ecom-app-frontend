import React, {useState,useEffect} from "react";
import ItemPage from "./ItemPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { useHistory } from "react-router-dom"; 
import LoginForm from "./LoginForm"
import NavBar from "./NavBar"
import Cart from './Cart'
import '../App.css'


function App() {
  // User logged in state
  const [currentUser, setCurrentUser] = useState("")
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId"))
  const [orderId, setOrderId] = useState("")
  console.log( "oderId", orderId)
  // console.log("Order being placed:", currentOrder)
  //refers to itemOrders in cart
  const [cartItems, setCartItems] = useState([])
  //refers to order
  const [currentOrder, setCurrentOrder]= useState(null)
  // const [newArr, setNewArr] = useState([])
  const history = useHistory()
  // console.log(localStorage.getItem("token"))

  console.log(orderId)
  console.log("currentOrder", currentOrder)

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => {
          setCurrentUser(data.user);
          // console.log("I am the current User", data.user)
            setToken(data.token)
            let oId = parseInt(localStorage.getItem("orderId"))
            setOrderId(oId)
            
            if (data.user.orders.find(order => order.id === oId)) {
                setCurrentOrder(data.user.orders.find(order => order.id === oId))
            }
        });
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  console.log( "cart items",cartItems)

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item])

    fetch("http://localhost:3000/item_orders", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        item_id: item.id,
        order_id: orderId
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("inside the fetch", data)
      fetch("http://localhost:3000/orders/" + orderId)
      .then(res => res.json())
      .then(data => {
        setCurrentOrder(data)
        console.log(data)
      } )
    })
  }

  useEffect(()=> {
    fetch('http://localhost:3000/item_orders')
    .then(res => res.json())
    .then(cartItems => setCartItems(cartItems))
  }, [])

// function removeItemFromCart(itemOrder){
//   const newArr = cartItems.filter((item) => item !== itemOrder) 
//   setCartItems(newArr)
// }

function checkOut(){

  fetch(`http://localhost:3000/orders/${orderId}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checked_out: true
    }
    ),
  })
  .then(response => response.json())
  .then(createNewOrder);
 
  setCartItems([])
}

// console.log("tracking number", currentOrder.tracking)

function createNewOrder() {
  fetch("http://localhost:3000/orders", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: 5,
      date: 2021,
      checked_out: false
    }
    ),
  })
  .then(response => response.json())
  .then(newOrder => setOrderId(newOrder.id)) 
  // (newOrder) => addItemToCart(newOrder)


}

  const handleLogOut = () => {
    setCurrentUser("")
    // setToken(null)
    setCurrentUserId(null)
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("orderId")
    history.push("/")
  }


// console.log(orderId)
  return (
    <Router>
      <NavBar currentUser={currentUser} handleLogOut={handleLogOut} currentOrder={currentOrder}/>
        <Switch>
            <Route exact path="/home">
              <ItemPage addItemToCart={addItemToCart} orderId={orderId} setOrderId={setOrderId}/>
            </Route>

            <Route exact path="/carts" >
              <Cart currentOrder={currentOrder} orderId={orderId} setCartItems={setCartItems} cartItems={cartItems} addItemToCart={addItemToCart} checkOut={checkOut}  />
            </Route>

            <Route exact path="/">
              <LoginForm handleLogin={handleLogin} currentUserId={currentUserId} setCurrentUser={setCurrentUser} setCurrentUserId={setCurrentUserId} setOrderId={setOrderId} setCurrentOrder={setCurrentOrder}/>
            </Route>


        </Switch>
      </Router>
  );
}

export default App;

