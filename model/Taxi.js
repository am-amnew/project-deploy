const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://amal:amal2001@cluster0.ss5kt1w.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
const taxiSchema = new mongoose.Schema({
    Nom: String,
    Prenom: String,
    Tele: String,
    Matricule: String,
    HdP: String,
    Destination: String,
    num: { type: String }
})
const Taxi = new mongoose.model("Taxi", taxiSchema)
module.exports = Taxi