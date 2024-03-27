import { app } from "../app";
import request from 'supertest';
import connection_db from '../database/connection_db';

const api = request(app);

describe('Testing News CRUD', () => {

    let createdNews: object;
    const newsData = {
        title: "test",
        body: "test",
        user_id: "1",
        date: "2024-03-12",
        image: "http://www.test.com"
    }

    afterAll(async () => {
        await connection_db.close();
    });
    describe('Testing getAllNews', () => {
        test('Response body must be an array', async () => {
            const response = await api.get('/api/news');
            expect(Array.isArray(response.body.data)).toBe(true);
        })

    })

})