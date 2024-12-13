import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem"; // Importing the MealItem component

const MainPage = () => {
    const [meals, setMeals] = useState([]); // State to store the list of meals
    const [loading, setLoading] = useState(true); // Loading state to show spinner
    const [error, setError] = useState(null); // Error state to handle any fetch errors

    // Fetch meals from the external API when the component mounts
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // Replace with your external API URL
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
                setMeals(response.data.meals); // Update state with the fetched meals
                setLoading(false); // Turn off loading spinner
            } catch (error) {
                console.error('Error fetching meals:', error); // Log errors if fetching fails
                setError("Error fetching meals from API"); // Set error message if request fails
                setLoading(false); // Turn off loading spinner
            }
        };
        fetchMeals(); // Call the fetch function
    }, []); // Empty dependency array ensures this only runs once when the component mounts

    if (loading) {
        return (
            <div className="container text-center">
                <div>Loading meals...</div>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center">
                <div>{error}</div>
            </div>
        );
    }

    return (
        <div className="container"> {/* Bootstrap container for layout */}
            <div className="row"> {/* Bootstrap row for grid layout */}
                <h1>WELCOME TO SEVENTH HEAVEN</h1>
                <p>Browse countless recipes from all over the globe. </p>
                <p>You can also create your own recipe to see</p>
                {meals && meals.length > 0 ? (
                    meals.map((meal) => (
                        // Pass each meal as a prop to the MealItem component
                        <MealItem key={meal.idMeal} meal={meal} />
                    ))
                ) : (
                    <div>No meals found.</div> // Message if no meals found
                )}
            </div>
        </div>
    );
};

export default MainPage;
