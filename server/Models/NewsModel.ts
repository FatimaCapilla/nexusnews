import { Model, DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';
import UserModel from './UserModel';

interface NewsAttributes {
    id: number;
    title: string | null;
    body: string | null;
    user_id: number | null;
    date: Date | null;
    image: string | null;
}

class NewsModel extends Model<NewsAttributes> implements NewsAttributes {
    public id!: number;
    public title!: string | null;
    public body!: string | null;
    public user_id!: number | null;
    public date!: Date | null;
    public image!: string | null;
}

NewsModel.init(
    {
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
    },
    {
        sequelize: connection_db,
        modelName: 'News',
        timestamps: false
    }
);

NewsModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export default NewsModel;
