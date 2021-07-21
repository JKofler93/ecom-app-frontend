import React from "react"
import { useLocation } from 'react-router-dom'
import { Card, Button, Icon,  Image} from 'semantic-ui-react'
import '../App.css'

function ItemCard({item, orderId, addItemToCart}){
  const location = useLocation()
  console.log(location)
 // console.log(item)
//  console.log(orderId)
// debugger
// function handleAddToCart(){
//   // console.log(item.id)
//   // console.log(orderId)
//   fetch("http://localhost:3000/item_orders", {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       order_id: orderId,
//       item_id: item.id,
//     }
//     ),
//   })
//   .then(response => response.json())
//   .then(newOrder => addItemToCart(newOrder));
//   // (newOrder) => addToCart(newOrder)
// }

  const handleItemAdd = () => {
    addItemToCart(item)
  }
  return(
      <Card>
          <Card.Content >
            <Image src={item.image} height='150' width='150' alt={item.name}/>
            <br></br>
            <br></br>
            <Card.Header>{item.brand}</Card.Header>
            <Card.Description>${item.cost}</Card.Description>
            <br></br>
            <Card.Meta>{item.name}</Card.Meta>
            <br></br>
          </Card.Content>
          { location.pathname === "/carts"
          
          ?
            null

          : 
            <Button onClick={handleItemAdd} animated>
              <Button.Content visible>Add to Cart</Button.Content>
                <Button.Content hidden>
                  <Icon name='plus cart'/>
                </Button.Content>
            </Button>
          }
      </Card>
  )
}

export default ItemCard;