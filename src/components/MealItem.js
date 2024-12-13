import React from "react";
import { Card, Button } from "react-bootstrap"; // Importing components from react-bootstrap
import { Link } from "react-router-dom"; // To enable navigation between routes
import axios from "axios"; // For making HTTP requests

const MealItem = (props) => {
    // Fallback check: Ensure the meal prop is passed and not undefined
    if (!props.meal) {
        return <div>Loading...</div>; // Display a loading message if meal data is not yet available
    }

    // Handle deleting a meal from the database
    const handleDelete = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        try {
            // Send a DELETE request to the API to remove the meal by its ID
            await axios.delete(`http://localhost:4000/api/meal/${props.meal._id}`);
            props.reloadMeals(); // Calls the reload function from the parent to refresh the meal list
        } catch (error) {
            console.error('Error deleting meal:', error); // Logs an error if the deletion fails
        }
    };

    return (
        <div className="col-md-4 mb-4"> {/* Wrapper for each meal item */}
            <Card>
                <Card.Header>{props.meal.strMeal}</Card.Header> {/* Meal title */}
                <Card.Body>
                    <img
                        src={props.meal.strMealThumb} // Meal thumbnail
                        alt={props.meal.strMeal} // Alt text for the image
                        className="img-fluid mb-2" // Bootstrap class for responsive images
                        style={{ height: '200px', objectFit: 'cover' }} // Style to maintain image aspect ratio
                    />
                    <p>
                        <strong>Category:</strong> {props.meal.strCategory} {/* Meal category */}
                    </p>
                    <p>
                        <strong>Area:</strong> {props.meal.strArea} {/* Meal area (cuisine type) */}
                    </p>
                    {/* Edit button navigates to an edit page with the meal ID */}
                    <Link
                        className="btn btn-primary me-2"
                        to={`/edit/${props.meal._id}`}
                    >
                        Edit
                    </Link>
                    {/* Delete button calls handleDelete */}
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealItem; // Export the component so it can be used in other files
