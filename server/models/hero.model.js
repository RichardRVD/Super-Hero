// require mongoose
const mongoose = require("mongoose");

//Create a database table (document in MongoDB)
const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be 2 characters long."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required!"],
        min: [1, "Pick a number from 1 - 10"],
        max: [10, "Pick a number from 1 - 10"]
    },
    img:{
        type: String,
        required: [true, "Image URL is required!"]
    }
});

// Register our new collection (Schema)
const Hero = mongoose.model("Hero", HeroSchema);

module.exports = Hero;