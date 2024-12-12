import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMeals = () => {
    const { id } = useParams();
    const [idMeal, setIdMeal] = useState('');
    const [strMeal, setStrMeal] = useState('');
    const [strCategory, setStrCategory] = useState('');
    const [strArea, setStrArea] = useState('');
    const [strInstructions, setStrInstructions] = useState('');
    const [strMealThumb, setStrMealThumb] = useState('');
    const [strTags, setStrTags] = useState('');
    const [strYoutube, setStrYoutube] = useState('');
    const [strIngredients, setStrIngredients] = useState(['']);
    const [strMeasures, setStrMeasures] = useState(['']);

    useEffect(() => {
        axios.get('http://localhost:4000/api/movie/' + id)
            .then((res) => {
                console.log("success " + res.data);
                setName(res.data.name);
                setDuration(res.data.duration);
                setPicture(res.data.picture);
            })
            .catch((err) => { console.log(err) });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const meals = { name, duration, picture };
        console.log(meals);

        axios.put('http://localhost:4000/api/movie/' + id, meals)
            .then((res) => {
                console.log("Edited: " + res.data);
                navigate('/read');
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (
        <div>
            <h3>Hello from edit component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Name of Meal: </label>
                    <input type="text"
                        className="form-control"
                        value={meals}
                        onChange={(e) => { setMeal(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Meal Duration: </label>
                    <input type="text"
                        className="form-control"
                        value={duration}
                        onChange={(e) => { setDuration(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Edit Meal"></input>
                </div>
            </form>
        </div>
    );
}
export default EditMeals;