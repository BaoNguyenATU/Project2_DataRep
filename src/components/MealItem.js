import React from 'react';
import Card from 'react-bootstrap/Card';

const MealItem = ({ meal }) => {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Header>{meal.strMeal}</Card.Header>
        <Card.Body>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
          <p>{meal.strCategory} - {meal.strArea}</p>
          <p>{meal.strInstructions}</p>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MealItem;
