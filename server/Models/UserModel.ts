import { DataTypes, Model } from 'sequelize';
import connection_db from '../database/connection_db';

// Definimos una interfaz que describe la estructura del modelo de usuario
interface UserInstance extends Model {
  id: number;
  email: string;
  password: string;
  role: string;
}

// Definimos el modelo de usuario
const UserModel = connection_db.define<UserInstance>('User', {
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
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user', 
    validate: {
      isIn: [['user', 'admin']] 
    }
  }
},{
  timestamps: false
});

// Exportamos el modelo de usuario
export default UserModel;
