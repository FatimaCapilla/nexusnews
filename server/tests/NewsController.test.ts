import { app } from "../app";
import request from 'supertest';
import connection_db from '../database/connection_db';

const api = request(app);

describe('Testing News CRUD', () => {

    //let createdNews: object;
    const newsData = {
        "title": "testing",
        "body": "testing body",
        "user_id": "1",
        "date": "2024-03-12",
        "image": "http://www.test.com"
    }

    afterAll(async () => {
        await connection_db.close();
    });

    describe('Testing getAllNews', () => {
        test('Response body must be an array and status must be 200', async () => {
            const response = await api.get('/api/news');
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.status).toBe(200);
        })
    });

    describe('Testing addNews', () => {
        test('Should create a news and return status 201', async () => {
            const response = await api.post('/api/news').send(newsData);
            expect(response.status).toBe(201);
        });
        test('Should not create a news if body is empty and return status 422 (validation error)', async () => {
            const response = await api.post('/api/news').send();
            expect(response.status).toBe(500);
        });
    });
})