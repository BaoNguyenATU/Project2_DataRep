import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditMeals = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [picture, setPicture] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/movie/' + id)
            .then((res) => {
                console.log("success " + res.data);
                setTitle(res.data.name);
                setYear(res.data.duration);
                setPoster(res.data.picture);
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