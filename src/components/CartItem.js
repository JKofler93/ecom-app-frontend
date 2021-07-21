import React, {useState} from "react"
import { RiCollageFill } from "react-icons/ri"
import { Card, Button, Icon, Image } from 'semantic-ui-react'


function CartItem({item, order, orderStatus, itemOrder}){
  //  const [checkedOut, setCheckedOut] = useState(order.checked_out)


     return(
      <Card>
          <Card.Content>
            <Image src={item.image} height='150' width='150' alt={item.name}/>
            <br></br>
            <br></br>
            <Card.Header>{item.brand}</Card.Header>
            <br></br>
            <Card.Meta>{item.name}</Card.Meta>
            <br></br>

            <Card.Description>${item.cost}</Card.Description>
          </Card.Content>
      </Card>
     )
   }
   
   export default CartItem;


