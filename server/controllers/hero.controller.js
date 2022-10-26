//Method names to be used (from routes file)
/* 
1. createHero
2. findAllHeroes
3. displayHero
4. updateHero
5. deleteHero
*/

const { request } = require("express")
const Hero = require("../models/hero.model")

// Create a hero
module.exports.createHero = (req, res) => {
    Hero.create(req.body)
    .then( newHero => {res.json({results: newHero})})
    .catch((err) => res.status(400).json({err: err}))
}

module.exports.findAllHeroes = (req, res) => {
    Hero.find()
    .then((allHeroes) => {res.json({results: allHeroes})})
    .catch((err) => res.json({err: err}))
}

module.exports.displayHero = (req, res) => {
    Hero.findOne({_id: req.params.id})
    .then((hero) => res.json({results: hero}))
    .catch((err) => res.json({err: err}))
}

module.exports.updateHero = (req, res) => {
    Hero.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatedHero) => {res.json({results: updatedHero})})
    .catch((err) => res.json({err: err}))
}

module.exports.deleteHero = (req, res) => {
    Hero.deleteOne({_id: req.params.id})
    .then((deletedHero) => {res.json({results: deletedHero})})
    .catch((err) => res.json({err: err}))
}