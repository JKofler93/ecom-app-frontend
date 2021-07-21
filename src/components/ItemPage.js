import React, {useState, useEffect} from "react"
import ItemCollection from "./ItemCollection"
import Categories from "./Categories"
import Cart from "./Cart" 
import {Container, Header} from 'semantic-ui-react'

function ItemPage({addItemToCart, orderId}){
    const [items, setItems] = useState([])
    const [sidebar, setSidebar] = ['']
    const [category, setCategory] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(false)
    // const [itemOrders, setItemOrders] = useState([]); 
    
    useEffect(()=> {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(setItems)
      }, [])


      useEffect(()=> {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => setUser(users[0]))
    }, [])



    const categoriedItems = items.filter(item => item.category.includes(category))
    // console.log(categoriedItems)
    return (
        <div>
        <Container textAlign='center'>
        <Header as='h1'>Clothzilla</Header>
        </Container>
            <Categories category={category} setCategory={setCategory}/>
            <ItemCollection items={categoriedItems} orderId={orderId} user={user} addItemToCart={addItemToCart} />
        </div>
    )
}
export default ItemPage;

