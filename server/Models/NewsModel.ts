import { DataTypes, Model } from "sequelize";
import connection_db from "../database/connection_db";
import UserModel from "./UserModel";

interface NewsInstance extends Model {
  id: number;
  title: string;
  body: string;
  user_id: number | null;
  date: Date;
  image: string;
}

const NewsModel = connection_db.define<NewsInstance>("News", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING(10000),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: UserModel,
      key: "id",
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false
});

// Establece la relación entre News y User
NewsModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export default NewsModel;
