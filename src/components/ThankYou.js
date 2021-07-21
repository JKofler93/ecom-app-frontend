import React from 'react'
import { Card, Button, Container, Icon, Header} from 'semantic-ui-react'

function ThankYou({ currentOrder }) {
    return (
        <Container textAlign='center'>
            <h1>Thank you!!</h1>
            {/* <h2>Your tracking number is: {currentOrder.tracking}</h2> */}
            <div>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34cfe7be-0abf-4a1b-9685-025aeba9d00d/dcn3f5b-694ae090-94a1-49ab-8e92-266e553a9270.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0Y2ZlN2JlLTBhYmYtNGExYi05Njg1LTAyNWFlYmE5ZDAwZFwvZGNuM2Y1Yi02OTRhZTA5MC05NGExLTQ5YWItOGU5Mi0yNjZlNTUzYTkyNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0h5s34w0-puEzB5zMlQB_oD5B1wqRZKm6hGVQwu_h0"/>
            </div>
        </Container>
    )
}

export default ThankYou
