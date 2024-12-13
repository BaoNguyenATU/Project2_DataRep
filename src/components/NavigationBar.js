import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

/**• Client-Side Routing: Implement navigation within the app*/

const NavigationBar = (theme, toggleTheme) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/addmeals">Add</Nav.Link>
          <Nav.Link href="/mainpage">Main</Nav.Link>
          <Nav.Link href='/editmeals'>Edit</Nav.Link>
          <Nav.Link href='/contactpage'>Contacts</Nav.Link>
          <Nav.Link href='/mealitem'>Meals</Nav.Link>
          <Nav.Link href='/list'>List</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};
/**<button onClick={toggleTheme} className="btn btn-secondary">
            {theme === 'light' ? 'Dark Mode' : 'Dark/Light'}
          </button>
 */
export default NavigationBar;