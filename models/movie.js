'use strict';
const movieValidator = require('../validations/movie');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {}
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : movieValidator.title,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : movieValidator.type,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : movieValidator.year,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : movieValidator.thumbnail,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : movieValidator.slug,
    },
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps: false,
  });
  return Movie;
};
