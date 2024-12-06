import logo from './logo.svg';
import './App.css';
/**Importing Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**Importing Navigation Bar*/
import NavigationBar from './components/NavigationBar';

/**Importing pages*/
import ContactPage from './components/ContactPage';
import AddMeals from './components/AddMeals';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
