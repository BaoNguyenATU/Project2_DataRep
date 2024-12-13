import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealItem from './MealItem'; // Import MealItem
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const List = () => {
  const [meals, setMeals] = useState([]);  // State to hold meals data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch meals from backend API
    axios.get('http://localhost:4000/api/meals')
      .then(response => {
        setMeals(response.data.meals);
        setLoading(false);  // Update loading state
      })
      .catch(err => {
        console.error('Error fetching meals:', err);
        setError('Failed to fetch meals');
        setLoading(false);  // Update loading state
      });
  }, []);

  const handleDelete = (id) => {
    // Delete meal from database
    axios.delete(`http://localhost:4000/api/meal/${id}`)
      .then(response => {
        setMeals(meals.filter(meal => meal.idMeal !== id)); // Remove deleted meal from state
      })
      .catch(error => {
        console.error('Error deleting meal:', error);
      });
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <div>Loading meals...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center">
        <div>{error}</div>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {meals.map(meal => (
          <Col key={meal.idMeal} md={4}>
            <MealItem meal={meal} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
