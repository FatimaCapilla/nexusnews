import request from 'supertest';
import { app, server } from '../app';
import UserModel from "../Models/UserModel";
import { UserLogin, userAdmin, wrongUser } from "../Test/helpers";
import { tokenInit } from '../Test/Token';
import connection_db from '../database/connection_db';
import bcrypt from 'bcrypt';

const api = request(app);

describe('Login and Get Users Tests', () => {
    let token: string;

    beforeEach(async () => {
        const hashedPassword = await bcrypt.hash(userAdmin.password, 10);
        const newUserAdmin: any = await UserModel.create({ ...userAdmin, password: hashedPassword });
        token = tokenInit(newUserAdmin);
    });

    afterEach(async () => {
        await UserModel.destroy({ where: { email: UserLogin.email } });
    });

    describe('Login Test', () => {
        test('Login should return 200 status and token', async () => {
            const response = await api.post('/api/users/login').send(UserLogin);
            expect(response.status).toBe(200);
            expect(response.body.token).toBeDefined();
        });

        test('Login with incorrect credentials should return 401 status', async () => {
            const response = await api.post('/api/users/login').send(wrongUser);
            expect(response.status).toBe(401);
        });
    });

    describe('Get Users Test', () => {
        test('Get Users should return 200 status and array of users', async () => {
            const response = await api.get('/api/users').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.data)).toBe(true);
        });

        test('Get Users without authentication should return 401 status', async () => {
            const response = await api.get('/api/users');
            expect(response.status).toBe(401);
        });
    });
    afterAll(async () => {
        server.close();
        await connection_db.sync({ force: true });
        console.log('All databases are clean');
    });
});
