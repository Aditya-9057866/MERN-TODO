
import MainScreen from '../components/MainScreen'
import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { data, Link } from "react-router-dom";
import { useState } from 'react';
import Loading from '../components/loading';
import Error from '../components/error';
import axios from 'axios';

// import { register } from "../../actions/userActions";



const RegisterPage = () => {
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
 
  const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      setMessage('Passwords do not match')
    } else {
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            
          },
        }
        setLoading(true)
        const { data } = await axios.post(
          "/api/users",
          { name, email, password },
          config
        )
        setLoading(false)
        localStorage.setItem("userInfo",JSON.stringify(data))
      } catch (error) {
        setError(error.respomse.data.message)
      }
    }
    console.log(name,email);
    
  }
  return (
    <MainScreen title="REGISTER">

      <div className='loginContainer'>
        {error && <Error variant='danger'>{ error}</Error>}
        {message && <Error variant='danger'>{message}</Error>}
        {loading&&<Loading/>}
        <Form onSubmit={SubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
            <Form.Control type="name"
              value={name}
              
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
            <Form.Control type="email"
              value={email}
              
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              value={password}
              
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
        <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="confirmpassword"
              value={confirmpassword}
              
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          
 
             <Button variant="primary" type="submit">
            Register
          </Button>    
         </Form>
           <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
    </div>
    </MainScreen>
  )
}

export default RegisterPage
