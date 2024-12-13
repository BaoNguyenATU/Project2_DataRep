import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MealItem = ({ meal, handleDelete }) => {
  return (
    <Card>
      <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {meal.strCategory} <br />
          <strong>Area:</strong> {meal.strArea} <br />
          <strong>Instructions:</strong> {meal.strInstructions}
        </Card.Text>
        <Button variant="danger" onClick={() => handleDelete(meal.idMeal)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MealItem;
