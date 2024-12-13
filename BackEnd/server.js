//ipmorting libs
const express = require('express');
//Initialize Express app
const app = express();
/**Server running on port 4000*/
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:Admin@cluster0.s3fkf.mongodb.net/DB11');

//Defining Meal schema based on API structure
const MealSchema = new mongoose.Schema({
  idMeal: String,
  strMeal: String,
  strCategory: String,
  strArea: String,
  strInstructions: String,
  strMealThumb: String,
  strTags: String,
  strYoutube: String,
  strIngredients: [String],
  strMeasures: [String],
});
//Making Data Model
//Used to interact with the database
//Storing documents in "Meal, mealSchema"
module.exports = mongoose.model('345457', mealSchema);
//API endpoint
//Retrieving all meals
app.get('/api/meals', async (req, res) => {
  try {
      const meals = await mealModel.find({}); // Fetch all meals from the database
      res.status(200).json({ meals }); // Return meals in a JSON response
  } catch (error) {
      console.error('Error fetching meals:', error); // Log errors
      res.status(500).send('Server Error'); // Send an error response
  }
});


app.get('/api/meal/:id', async (req, res) => {
  const meal = await mealModel.findById(req.params.id);
  console.log(meal);
  res.send(meal);
})
//Deleting 
app.delete('/api/meal/:id', async (req, res) => {
  const meal = await mealModelModel.findByIdAndDelete(req.params.id);
  res.send(meal);
})

app.put('/api/meal/:id', async (req, res) => {
  const meal = await mealModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(meal);
})
//Listening to HTTPS request
app.post('/api/meals', async (req, res) => {
  try {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = req.body;

    const newMeal = new mealModel({ idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 });

    await newMeal.save();

    res.status(201).json({ message: 'Meal created successfully', meal: newMeal });
  } catch (error) {
    console.error('Error saving meal:', error);
    res.status(500).json({ error: 'Failed to save meal' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});