import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap";
import { Link } from "react-router-dom";

/*const MealItem = (props) => {
    useEffect(() => {
        console.log("Meals:", props.meals);
    }, [props.meals]

    
);
}*/


const MealItem = 'http://localhost:4000/api/meals';

export const getMeals = async () => axios.get(MealItem);
export const addMeal = async (meal) => axios.post(MealItem, meal);
export const updateMeal = async (id, meal) => axios.put(`${MealItem}/${id}`, meal);
export const deleteMeal = async (id) => axios.delete(`${MealItem}/${id}`);

export default MealItem;