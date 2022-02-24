const { Movie } = require('../models');

exports.findAll = (req, res) => {
  Movie.findAll().then(movies => {
    return res.json(movies);
  });
};

exports.create = (req, res) => {
  Movie.create(req.query).then(function (movie) {
    return movie ? res.send(movie) : res.status(400).send('Une erreur est survenue.');
  }).catch(err => {
    return res.status(422).send(`${err.message}`);
  });
};

exports.find = (req, res) => {
  Movie.findOne({ where: { id: req.params.id } }).then(movie => {
    return movie === null ? res.status(404).send(`film n°${req.params.id} n'existe pas`) : res.json(movie);
  }).catch(err => {
    return res.status(400).send(`${err.message}`);
  });
};

exports.update = async (req, res) => {
  const movie = await Movie.findOne({where: {id: req.params.id}});
  movie.update(req.query).then(success => {
    return res.json(success);
  }).catch(err => {
    return res.status(400).send(`${err.message}`);
  });
};

exports.destroy = async (req, res) => {
  const movie = await Movie.findOne({where: {id: req.params.id}});
  movie.destroy().then(success => {
    return res.json(success);
  }).catch(err => {
    return res.status(400).send(`${err.message}`);
  });
};