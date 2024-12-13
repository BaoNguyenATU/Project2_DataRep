import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem"; // Importing the MealItem component

const MainPage = () => {
    const [meals, setMeals] = useState([]); // State to store the list of meals

    // Fetch meals from the server when the component mounts
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/meals'); // GET request to fetch meals
                setMeals(response.data.meals); // Update state with the fetched meals
            } catch (error) {
                console.error('Error fetching meals:', error); // Log errors if fetching fails
            }
        };
        fetchMeals(); // Call the fetch function
    }, []); // Empty dependency array ensures this only runs once when the component mounts

    // Function to reload meals after an operation (e.g., delete or update)
    const reloadMeals = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/meals'); // Re-fetch meals
            setMeals(response.data.meals); // Update state with the latest meals
        } catch (error) {
            console.error('Error reloading meals:', error); // Log errors
        }
    };

    return (
        <div className="container"> {/* Bootstrap container for layout */}
            <div className="row"> {/* Bootstrap row for grid layout */}
                {meals.map((meal) => (
                    // Pass each meal as a prop to the MealItem component
                    <MealItem key={meal._id} meal={meal} reloadMeals={reloadMeals} />
                ))}
            </div>
        </div>
    );
};

export default MainPage; 
