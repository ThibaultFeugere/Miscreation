'use strict';
module.exports = (sequelize, DataTypes) => {
  const i_Have = sequelize.define('i_Have', {
    userId: DataTypes.INTEGER,
    distortionId: DataTypes.INTEGER
  }, {});
  i_Have.associate = function (models) {
    // associations can be defined here
    i_Have.belongsToMany(models.User);
    i_Have.belongsToMany(models.Disortion);
  };
  return i_Have;
};