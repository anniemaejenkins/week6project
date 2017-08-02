'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gab = sequelize.define('Gab', {
    message: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});

  Gab.associate = function(models){
    Gab.belongsTo(models.User, {as: 'users', foreignKey: 'user_id', onDelete: 'cascade', hooks: true });
  };
  return Gab;
};
