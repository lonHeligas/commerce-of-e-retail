const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },    

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
    category_id: {
        type: DataTypes.INTEGER,   
        references: {
          model: "category",
          key: "id",
        }   
      }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
