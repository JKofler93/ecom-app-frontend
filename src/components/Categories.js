import React, {useState} from "react"
import { Container, Button, Icon } from 'semantic-ui-react'

function Categories({ category, setCategory }) {
    // const [category, setCategory] = useState("")
    //  console.log(category)

    function handleMonitors(){
        setCategory("Monitors")
        // filterCategory("Pants")
    }

    function handleLaptops(){
        setCategory("Laptops")
        // filterCategory("Shirts")
    }

    function handlePhones(){
        setCategory("Phones")
        // filterCategory("Shoes")
    }
    return(
        <Container textAlign='center'>

            <Button onClick={handleMonitors} animated>
                <Button.Content visible>Monitors</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>

            <Button onClick={handleLaptops} animated>
                <Button.Content visible>Laptops</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>

            <Button onClick={handlePhones} animated>
                <Button.Content visible>Phones</Button.Content>
                    <Button.Content hidden>
                        <Icon name='star' />
                    </Button.Content>
            </Button>
       </Container>
    )
}
export default Categories;