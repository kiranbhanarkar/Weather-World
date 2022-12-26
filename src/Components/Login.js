import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{ useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import './index.css'
import { useHistory, Redirect } from "react-router-dom";


function Login() {
    const user = useSelector((store) => store.user)
     const history = useHistory();

    const [userInfo, setUserInfo] = useState({
		
		emailId: '@',
         password: '',
		
	})

    const submit = (e) => {
    if(user.email==userInfo.emailId && user.cpass==userInfo.password){
        history.push("/Home")
        // <Redirect to="/Home" />
    }
    else if(user.email==""){
        alert("Please Enter Correct Password.")
    }
    else{
        alert("Please Enter Correct Password.")
    }
  }
  return (<>
   <h1>Log In</h1>
    {/* <h2>Full Name: {user.firstName}</h2>
    <h2>Email ID: {user.email}</h2>
    <h2>Password: {user.cpass}</h2>  */}

    <Form onSubmit={submit} className="login">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control className='logintype' type="email" value={userInfo.emailId}
        onChange={(e) =>
            setUserInfo({
              ...userInfo,
              emailId: e.target.value,
            })}
        placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control className='logintype' type="password" value={userInfo.password} 
        onChange={(e) =>
            setUserInfo({
              ...userInfo,
              password: e.target.value,
            })}
        placeholder="Password" />
      </Form.Group>
    
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Login