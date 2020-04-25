'use strict';
module.exports = (sequelize, DataTypes) => {
  const Distortion = sequelize.define('Distortion', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    release_date: DataTypes.INTEGER,
    image: DataTypes.STRING,
    finder: DataTypes.STRING
  }, {});
  Distortion.associate = function(models) {
    // associations can be defined here
  };
  return Distortion;
};