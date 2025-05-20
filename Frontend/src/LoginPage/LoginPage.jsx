import MainScreen from '../components/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../components/loading';
import Error from '../components/error';

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  const submitHandler = async(e) => {
    e.preventDefault()
     console.log(email,password)
    try {
      const config = {
        headers: {
          "Content-type":"application/json"
        }
      }
      setLoading(true)
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      )
      console.log(data)
      localStorage.setItem('userInfo',JSON.stringify(data))
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setLoading(false)

      
    }
  }
  
  return (
    <MainScreen title="LOGIN">
      <div className='loginContainer'>
        {error && <Error>{ message}</Error>}
        {loading &&<Loading/>}
         <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
              value={email}
              placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}    />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              value={password}
              
              placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
         <Row className="py-3">
          <Col>
            New User ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>

      </div>
      
   </MainScreen>
  )
}

export default LoginPage
