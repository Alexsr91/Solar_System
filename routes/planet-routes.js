const express = require('express');
const mongoose = require('mongoose');
const planetModel = require('../models/planet.model');
const router  = express.Router();
const axios = require('axios');

const Planet = require('../models/planet.model');
const User = require('../models/user.model'); 



router.get('/planets', (req, res) => {

  Planet.find().then((planets) => {

    res.json(planets)

    
  })
})

router.get('/planet/:myDbId', (req, res) => {

  Planet.findById(req.params.myDbId).then((planet) => {

    axios.get('https://api.le-systeme-solaire.net/rest/bodies/' + planet.apiReferenceId).then((resp) => {
      // possibly merge information from own database with information from API      
      res.json({ apiInfo: resp.data, myModel: planet })
    })

    
  })
})

router.post('/planet', (req, res, next)=>{

  Project.create({
    name: req.body.englishName,
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;