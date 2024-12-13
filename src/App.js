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
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import EditMeals from './components/EditMeals';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/addmeals" element={<AddMeals />} />
        <Route path='/editmeals/:id' element={<EditMeals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
