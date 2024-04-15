import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../Models/UserModel';
import NewsModel from "../Models/NewsModel";
import { CreateUser, testTry } from './helpers';
import { tokenInit } from './Token';

const api = request(app);

describe('TESTING CRUD news', () => {
    let newUser: any = {};
    let token: string;
    let createdNewsId: number;

    beforeEach(async () => {
        // Crear un nuevo usuario antes de cada prueba
        newUser = await UsersModel.create(CreateUser);
        // Asignar el rol "admin" al usuario para pruebas
        newUser.role = "admin";
        await newUser.save();
        token = tokenInit(newUser);
    });

    afterEach(async () => {
        // Eliminar el usuario creado después de cada prueba
        await UsersModel.destroy({ where: { id: newUser.id } });
    });

    describe('GET /api/news', () => {
        it('debe devolver un array y un estado 200', async () => {
            const response = await api.get('/api/news').set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/news', () => {
        it('debe crear una nueva noticia y devolver un objeto y un estado 201', async () => {
            const response = await api.post('/api/news').set('Authorization', `Bearer ${token}`).send(testTry);
            expect(response.status).toBe(201);
            expect(typeof response.body).toBe('object');
            expect(response.body).toMatchObject(testTry);
            createdNewsId = response.body.id; // Guardar el ID de la noticia creada para pruebas posteriores
        });
    });

    describe('DELETE /api/news/:id', () => {
        it('debe eliminar una noticia existente y devolver un estado 204', async () => {
            // Verificar los roles del usuario antes de enviar la solicitud DELETE
            console.log("User roles:", newUser.role);
            
            const response = await api.delete(`/api/news/${createdNewsId}`).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(204);
            
            // Verificar que la noticia haya sido eliminada de la base de datos
            const deletedNews = await NewsModel.findByPk(createdNewsId);
            expect(deletedNews).toBeNull();
        });
    });
    

    afterAll(async () => {
        // Cerrar el servidor y sincronizar la base de datos para limpiar los datos
        server.close();
        await connection_db.sync({ force: true });
        console.log('All databases are clean');
    });
});
