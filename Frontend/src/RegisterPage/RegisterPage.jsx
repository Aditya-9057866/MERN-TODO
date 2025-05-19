
import MainScreen from '../components/MainScreen'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';



const RegisterPage = () => {
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [pic, setPic] = useState("")
  return (
    <MainScreen title="REGISTER">

    <div className='loginContainer'>
        <Form>
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
 <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
          
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
