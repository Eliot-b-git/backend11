const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')


mongoose.connect('mongodb+srv://DaDyRaVeN:VfY4tX1U0nj7yJxG@cluster0.k9ndsxz.mongodb.net/?retryWrites=true&w=majority' ,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  // Cela marche en deux temps la premerie on demande qu'elle que chose et ensuite dans le second parametre on met la reponse 
  //  Cette ligne de code définit un en-tête dans la réponse HTTP, en utilisant la méthode setHeader de l'objet res (qui représente la réponse).
  res.setHeader('Access-Control-Allow-Origin', '*');  // Donc elle demande l'accés a qui et * est egale a tout le monde
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json())


app.use('/api/stuff', stuffRoutes); //Pour tout les url api/stuff on utilise stuff routes 
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, '../images')));


module.exports = app;