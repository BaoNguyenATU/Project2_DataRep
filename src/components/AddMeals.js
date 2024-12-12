import axios from "axios";
import { useState } from "react";

const AddMeals = () => {
  const [idMeal, setIdMeal] = useState('');
  const [strMeal, setStrMeal] = useState('');
  const [strCategory, setStrCategory] = useState('');
  const [strArea, setStrArea] = useState('');
  const [strInstructions, setStrInstructions] = useState('');
  const [strMealThumb, setStrMealThumb] = useState('');
  const [strTags, setStrTags] = useState('');
  const [strYoutube, setStrYoutube] = useState('');
  const [strIngredients, setStrIngredients] = useState(['']);
  const [strMeasures, setStrMeasures] = useState(['']);

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...strIngredients];
    updatedIngredients[index] = value;
    setStrIngredients(updatedIngredients);
  };

  const handleMeasureChange = (index, value) => {
    const updatedMeasures = [...strMeasures];
    updatedMeasures[index] = value;
    setStrMeasures(updatedMeasures);
  };

  const addIngredientField = () => {
    setStrIngredients([...strIngredients, '']);
    setStrMeasures([...strMeasures, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const meal = {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strIngredients,
      strMeasures,
    };

    axios.post('http://localhost:4000/api/meals', meal)
      .then((res) => {
        console.log('Meal added:', res.data);
      })
      .catch((err) => {
        console.error('Error adding meal:', err);
      });
  };

  return (
    <div>
      <h3>Add a New Meal</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID: </label>
          <input type="number" className="form-control" value={idMeal} onChange={(e) => setIdMeal(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Meal Name: </label>
          <input type="text" className="form-control" value={strMeal} onChange={(e) => setStrMeal(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Category: </label>
          <input type="text" className="form-control" value={strCategory} onChange={(e) => setStrCategory(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Area: </label>
          <input type="text" className="form-control" value={strArea} onChange={(e) => setStrArea(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Instructions: </label>
          <textarea className="form-control" value={strInstructions} onChange={(e) => setStrInstructions(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Meal Thumbnail URL: </label>
          <input type="text" className="form-control" value={strMealThumb} onChange={(e) => setStrMealThumb(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Tags (comma-separated): </label>
          <input type="text" className="form-control" value={strTags} onChange={(e) => setStrTags(e.target.value)} />
        </div>
        <div className="form-group">
          <label>YouTube URL: </label>
          <input type="text" className="form-control" value={strYoutube} onChange={(e) => setStrYoutube(e.target.value)} />
        </div>

        <h4>Ingredients & Measures</h4>
        {strIngredients.map((ingredient, index) => (
          <div key={index} className="form-row">
            <div className="form-group">
              <label>Ingredient {index + 1}: </label>
              <input
                type="text"
                className="form-control"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Measure {index + 1}: </label>
              <input
                type="text"
                className="form-control"
                value={strMeasures[index] || ''}
                onChange={(e) => handleMeasureChange(index, e.target.value)}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={addIngredientField} className="btn btn-secondary">
          Add More Ingredients
        </button>

        <div className="form-group mt-3">
          <input type="submit" value="Add Meal" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddMeals;

//API URL
//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata