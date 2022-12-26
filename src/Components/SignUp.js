import { useState, useEffect } from 'react'
import { Button, Row, Col, Form, InputGroup, Alert } from "react-bootstrap"
import './index.css'

import { saveUser } from '../redux/action';
import { useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';

function SignUp() {
    
    const [userDetails, setUserDetails] = useState({
		firstName: '',
		password: '',
		email: '',
         cpass: '',
		
	})

  // let userDetails1 ={
  //   fullName: userDetails.firstName,
  //   email: userDetails.email,
  //   cpass: userDetails.cpass
  // }

  

	const [error, setError] = useState({
		firstName: false,
		password: false,
		email: false,
    cpass: false,
		
	})
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if(submit && !Object.values(error).includes(true)){
			setSuccess(true)
			setUserDetails({
				firstName: '',
				password: '',
				email: '',
        cpass: '',
				
			})
		}
	}, [submit, error])


	
  const dispatch = useDispatch()
  const handleSubmit = (e) => {

    
    // localStorage.setItem("name", userDetails.firstName)
    // localStorage.setItem("email", userDetails1.email)
    // localStorage.setItem("password", userDetails1.cpass)

		e.preventDefault();
    dispatch(saveUser(userDetails))
		setSubmit(true)

		const { firstName, password, email, cpass } = userDetails

		if(firstName.length >= 2) {
			setError((previousError) => ({
				...previousError,
				firstName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				firstName: true
			}))
		}
	
		if(password.length >= 5) {
			setError((previousError) => ({
				...previousError,
				password: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				password: true
			}))
		}
	
		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			setError((previousError) => ({
				...previousError,
				email: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				email: true
			}))
		}

    if(cpass === password) {
			setError((previousError) => ({
				...previousError,
				cpass: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				cpass: true
			}))
		}
	
    
		
  };

  return (
    <div className='container'>
      <h1>SignUp</h1>
      
      <Form onSubmit={handleSubmit} className="registrationForm">
        
          <Form.Group as={Col} md="10" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control className='inputStyle'
              type="text"
              placeholder="Full Name"
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                })
              }
            />
            {submit && !success && (error.firstName ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid first name
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
          </Form.Group>
          
          <Form.Group as={Col} md="10" controlId="validationCustomUsername">
            <Form.Label></Form.Label>
            <InputGroup hasValidation>
              
              <Form.Control className='inputStyle'
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
              {submit && !success && (error.email ? (
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ))}
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="10" controlId="validationCustom02">
            <Form.Label></Form.Label>
            <Form.Control className='inputStyle'
              type="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                })
              }
            />
            {submit && !success && (error.password ? (
              <Form.Control.Feedback type="invalid">
                Password is too short
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
          </Form.Group>

          <Form.Group as={Col} md="10" controlId="validationCustom03">
            <Form.Label></Form.Label>
            <Form.Control className='inputStyle'
              type="password"
              placeholder="Confirm Password"
              value={userDetails.cpass}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  cpass: e.target.value,
                })
              }
            />
            {submit && !success && (error.cpass ? (
              <Form.Control.Feedback type="invalid">
                Password did not match.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback></Form.Control.Feedback>
            ))}

            
          </Form.Group>
            
        
        {success && (<>
        <div className='alert'>Successfully Signed Up! Go to Login.</div>
        
          {/* <Redirect to="/Profile"/> */}
        
      
        
        {/* <Profile name={localStorage.getItem("name")} email={localStorage.getItem("email")} password={localStorage.getItem("password")}/> */}
        </>
      )}
      <br></br>
        <Button className='button'variant="dark" type="submit">Submit form</Button>
      </Form>

      
{/* 
      <div>
                <div>{localStorage.getItem("name")}</div>
                <div>{localStorage.getItem("email")}</div>
                <div>{localStorage.getItem("password")}</div>

            </div> */}

            
          
      
    </div>
  );
};


export default SignUp