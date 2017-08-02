'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});

  User.associate = function(models){
    // userId is just a name for the foreignKey to keep it unique
    User.hasMany(models.Gab, {as: 'gabs', foreignKey: 'user_id', onDelete: 'cascade', hooks: true });

  };
  return User;
};
