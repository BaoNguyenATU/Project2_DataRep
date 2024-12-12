import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**• Client-Side Routing: Implement navigation within the app*/

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addmeals">Add</Nav.Link>
          <Nav.Link href="/mainpage">MainPage</Nav.Link>
          <Nav.Link href='/editmeals'>Edit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;