const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Sermon = sequelize.define("sermon", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  audioUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transcript: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Sermon;
