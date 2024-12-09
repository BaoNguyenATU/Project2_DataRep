import axios from "axios";
import { useState } from "react";

const AddMeals = () => {

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const meals = { name, duration, picture };
        console.log(meals);

        axios.post('http://localhost:4000/api/meals', meals)
            .then((res) => { console.log(res.data) })
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <h3>Add your meals!!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Name of the Meal(s): </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Meal Duration: </label>
                    <input type="text"
                        className="form-control"
                        value={duration}
                        onChange={(e) => { setDuration(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Meal Picture: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Meal"></input>
                </div>
            </form>
        </div>
    );
}
export default AddMeals;