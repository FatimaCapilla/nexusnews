import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';

const UserModel = connection_db.define('User', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING, // Corregido el tipo de dato para representar un valor booleano
    allowNull: false,
    defaultValue: false, // Valor predeterminado en false, ya que es poco común que todos los usuarios sean administradores
  }},{
    timestamps: false
  });

      



export default UserModel;
