import { DataTypes, Model } from 'sequelize';
import connection_db from '../database/connection_db';

interface UserInstance extends Model {
  id: number;
  email: string;
  password: string;
  role: string;
}

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
    defaultValue: 'user',
    allowNull: false
  }
},
  {
    timestamps: false
  });

export default UserModel;
