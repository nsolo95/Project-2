const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Kitchen extends Model {}
// the Kitchens are llike the threads of out blog posts. This is where users can post onto different Kitchenm threads
Kitchen.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
     },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
    
);

module.exports = Kitchen;