'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      default:false,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};