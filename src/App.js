import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, button, Alert, Card, Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Container>
      <Form>
        <Row>
        <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com"/>
            <Form.Text className="test-muted">We'll never share your email, trust us!</Form.Text>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
            <Form.Text className="test-muted">Shhh, it's a secret!</Form.Text>
          </Form.Group>
        </Col>
        </Row>
        <Button variant="secondary" type="submit">Login</Button>
      </Form>

      <Card>
        <Card.Img src="https://picsum.photos/200/50"/>
        <Card.Body>
          <Card.Title>
Card Example
          </Card.Title>
          <Card.Text>
This is an example of react botstrap card
          </Card.Text>
          <Button>Read More</Button>
        </Card.Body>
      </Card>
    </Container>
    </header>
    </div>
  );
}

export default App;
