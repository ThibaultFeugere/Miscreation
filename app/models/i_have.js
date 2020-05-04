'use strict';
module.exports = (sequelize, DataTypes) => {
  const i_Have = sequelize.define('i_Have', {
    userId: DataTypes.INTEGER,
    distortionId: DataTypes.INTEGER
  }, {});
  i_Have.associate = function (models) {
    // associations can be defined here
    // i_Have.belongsToMany(models.User, {
    //   through: models.User
    // });
    // i_Have.belongsToMany(models.Disortion, {
    //   through: models.User
    // });
    models.User.belongsToMany(models.Distortion, {
      through: i_Have
    })
    models.Distortion.belongsToMany(models.User, {
      through: i_Have
    })
  };
  return i_Have;
};