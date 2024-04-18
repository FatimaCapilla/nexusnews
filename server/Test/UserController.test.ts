import request from 'supertest';
import {app, server} from '../app'; // Asumiendo que tienes un archivo app.ts que exporta la instancia de Express
import UserModel from "../Models/UserModel";
import { UserLogin, userAdmin, wrongUser } from "../Test/helpers";
import { tokenInit } from '../Test/Token';
import connection_db from '../database/connection_db';
import bcrypt from 'bcrypt';

const api = request(app);

describe('Login and Get Users Tests', () => {
    let token: string;

    beforeEach(async () => {
        // Crear un usuario para las pruebas de login
        const hashedPassword = await bcrypt.hash(userAdmin.password, 10); 

        // Crear el nuevo usuario con la contraseña encriptada
        const newUserAdmin: any = await UserModel.create({...userAdmin, password: hashedPassword });
        // Obtener el token de autenticación para las pruebas de obtención de usuarios
        token = tokenInit(newUserAdmin);
    });

    afterEach(async () => {
        // Eliminar el usuario creado después de cada prueba
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
        // Cerrar el servidor y sincronizar la base de datos para limpiar los datos
        server.close();
        await connection_db.sync({ force: true });
        console.log('All databases are clean');
    });
});
