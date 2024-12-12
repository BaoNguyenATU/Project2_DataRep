import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMeals = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [strMeal, setStrMeal] = useState('');
  const [strCategory, setStrCategory] = useState('');
  const [strArea, setStrArea] = useState('');
  const [strInstructions, setStrInstructions] = useState('');
  const [strMealThumb, setStrMealThumb] = useState('');
  const [strTags, setStrTags] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/meals/' + id)
      .then((res) => {
        console.log("success", res.data);
        setStrMeal(res.data.strMeal);
        setStrCategory(res.data.strCategory);
        setStrArea(res.data.strArea);
        setStrInstructions(res.data.strInstructions);
        setStrMealThumb(res.data.strMealThumb);
        setStrTags(res.data.strTags);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMeal = {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
    };

    axios.put('http://localhost:4000/api/meals/' + id, updatedMeal)
      .then((res) => {
        console.log("Edited: ", res.data);
        navigate('/read');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Meal</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Meal Name:</label>
          <input
            type="text"
            className="form-control"
            value={strMeal}
            onChange={(e) => setStrMeal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            className="form-control"
            value={strCategory}
            onChange={(e) => setStrCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input
            type="text"
            className="form-control"
            value={strArea}
            onChange={(e) => setStrArea(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            className="form-control"
            value={strInstructions}
            onChange={(e) => setStrInstructions(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meal Thumbnail URL:</label>
          <input
            type="text"
            className="form-control"
            value={strMealThumb}
            onChange={(e) => setStrMealThumb(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tags:</label>
          <input
            type="text"
            className="form-control"
            value={strTags}
            onChange={(e) => setStrTags(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Edit Meal</button>
      </form>
    </div>
  );
};

export default EditMeals;
