import React, { useState } from "react";
import '../components/css/login.css';
import { useHistory } from "react-router-dom"; 


function LoginForm( {handleLogin, setCurrentUser, getOrder, setOrderId, setCurrentOrder} ){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()


 
  function loginUser(e){
    e.preventDefault()
  
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        console.log("variable", data)
        localStorage.setItem("userId", data.user.id)
        localStorage.setItem("token", data.token)
        console.log("Token token", data.token)
        setCurrentUser(data.user)
        console.log("Current User Log in form", data.user)

        let trackingNum = "";
        let possible = "012345678900000000000000000000000ABCDEFGHIJKLMNOPQRSTUVWXYZJFDFDSKJFLDSJFSDJDSF";
        
        for (let i = 0; i < 15; i++) {
          trackingNum += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            paid: false,
            user_id: data.user.id,
            tracking: trackingNum
          })
        })
        .then(res => res.json())
        .then(data => {
          setCurrentOrder(data)
          console.log("Order:", data)
          localStorage.setItem("orderId", data.id)
          let oId = parseInt(localStorage.getItem("orderId"))
          setOrderId(oId)
          console.log(oId)
          history.push('/home')

        })
      }
    })
  }  
    return (
      <div className="login-container">
        <div className="login-box">
        <h1 className="heading">Sign in</h1>
          <form 
            onSubmit={loginUser}
            href="/home"
            className="login-form"
          >
              <input 
                type="text"
                value={email}
                id="email"
                className="login-form-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <br></br>
              <br></br>

              <input
                className="login-form-input"
                type="password"
                value={password}
                id="password"
                placeholder="Password" 
                onChange={(e) => (setPassword(e.target.value))} 
              />

              <br></br> 
              <br></br>

              <div className="login-button-div">
                <button
                  type="submit"
                  className="login-submit-button"
                >
                Login
                </button>
              </div>
          </form>
        </div>
    </div>
    ) 
}

  
  export default LoginForm;
