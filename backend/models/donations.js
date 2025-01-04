const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Donation = sequelize.define("donation", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  donorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  method: {
    type: DataTypes.ENUM("cash", "check", "online"),
    allowNull: false,
  },
});

module.exports = Donation;
