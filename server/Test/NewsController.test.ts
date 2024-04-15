import request from 'supertest';
import express from 'express';
import { app } from '../app';
import UsersModel from '../Models/UserModel';
import NewsModel from '../Models/NewsModel';
import { tokenInit } from './Token';
import { CreateUser } from './helpers';

const api = request(app);

describe('CRUD de noticias', () => {
    let newUser: any = {};
    let userToken: string;

    beforeEach(async () => {
        newUser = await UsersModel.create(CreateUser);
        userToken = tokenInit(newUser);
    });

    afterEach(async () => {
        await UsersModel.destroy({ where: { id: newUser.id } });
    });

    it('GET debe devolver un array y un estado 200', async () => {
        const response = await api.get('/api/news').set('Authorization', `Bearer ${userToken}`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('POST debe devolver un objeto y un estado 201', async () => {
        const newNewsData = { title: 'Nueva Noticia', content: 'Contenido de la nueva noticia' };
        const response = await api.post('/api/news').set('Authorization', `Bearer ${userToken}`).send(newNewsData);
        expect(response.status).toBe(201);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(newNewsData);
    });

    it('DELETE debe devolver un estado 200', async () => {
        const newNewsResponse = await api.post('api/news').set('Authorization', `Bearer ${userToken}`).send();
        const response = await api.delete(`/news/${newNewsResponse.body.id}`).set('Authorization', `Bearer ${userToken}`).send();
        expect(response.status).toBe(200);
    });

    it('PUT debe devolver un objeto y un estado 200', async () => {
        const newNewsResponse = await api.post('/api/news').set('Authorization', `Bearer ${userToken}`).send();
        const updatedNewsData = { title: 'Noticia Actualizada', content: 'Contenido Actualizado' };
        const response = await api.put(`/news/${newNewsResponse.body.id}`).set('Authorization', `Bearer ${userToken}`).send(updatedNewsData);
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(updatedNewsData);
    });

    afterAll(async () => {
        await NewsModel.destroy({ where: {} });
        await UsersModel.destroy({ where: {} });
    });
});
