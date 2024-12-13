import logo from './logo.svg';
import './App.css';
/**Importing Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

/**Importing Navigation Bar*/
import NavigationBar from './components/NavigationBar';

/**Importing pages*/
import ContactPage from './components/ContactPage';
import AddMeals from './components/AddMeals';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import EditMeals from './components/EditMeals';
import MealItem from './components/MealItem';
import { use } from 'react';


function App() {
  //Dark/Light mode
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <Router>
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />
      <div className={theme}>
        <Routes>
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/addmeals" element={<AddMeals />} />
          <Route path='/editmeals' element={<EditMeals />} />
          <Route path='/mealitem' element={<MealItem />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
/**        <Route path='/editmeals/:id' element={<EditMeals />} /> */