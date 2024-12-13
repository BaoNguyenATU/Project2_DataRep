import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MealItem = ({ meal, handleDelete }) => {
  // If meal data is undefined, render a loading message
  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <Card.Header>{meal.strMeal}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
            <footer>{meal.strCategory} - {meal.strArea}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={`/edit/${meal.idMeal}`}>Edit</Link>
        <Button className="btn btn-danger" onClick={() => handleDelete(meal.idMeal)}>Delete</Button>
      </Card>
    </div>
  );
};

export default MealItem;
