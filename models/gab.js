'use strict';
module.exports = function(sequelize, DataTypes) {
  var gab = sequelize.define('gab', {
    message: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gab;
};