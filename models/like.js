'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    user_id: DataTypes.INTEGER,
    gab_id: DataTypes.INTEGER
  }, {});
  like.associate = function(models){
    like.belongsTo(models.User, {as: 'user', foreignKey: 'user_id', onDelete: 'cascade', hooks: true});
    like.belongsTo(models.Gab, {as: 'gab', foreignKey: 'gab_id', onDelete: 'cascade', hooks: true});
  };
  return like;
};
