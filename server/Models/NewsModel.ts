import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import UserModel from "./UserModel"



const NewsModel = connection_db.define('News', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  body: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { // Define la referencia a la tabla de usuarios
      model: UserModel, // El modelo de usuario
      key: 'id' // La clave primaria en la tabla de usuarios
    }
  },
  date: {
    type: DataTypes.DATE, // Cambiado a tipo DATE para almacenar fechas
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }},{
    timestamps: false
  });

// Establece la relación entre News y User
NewsModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export default NewsModel;
