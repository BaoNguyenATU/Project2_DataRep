// src/components/MealList.js
import React, { useEffect, useState } from 'react';
import { getMeals } from '../api/mealApi';

const List = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const { data } = await getMeals();
      setMeals(data);
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
