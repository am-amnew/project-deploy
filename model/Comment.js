const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://amal:amal2001@cluster0.ss5kt1w.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
const commentSchema = new mongoose.Schema({
    comment: String,
    comment2: String,
    comment3: String,
    comment4: String


})
const Comment = new mongoose.model("comment", commentSchema)
module.exports = Comment