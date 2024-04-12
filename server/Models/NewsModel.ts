import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import UserModel from "./UserModel";

const NewsModel = connection_db.define('News', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(300),
    allowNull: true,
  }
},{
  timestamps: false
});

NewsModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export default NewsModel;
