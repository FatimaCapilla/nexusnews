import { app } from "../app";
import request from 'supertest';
import connection_db from '../database/connection_db';

const api = request(app);

describe('Testing News CRUD', () => {

    afterAll(async () => {
        await connection_db.close();
    });
    
    describe('Testing getAllNews', () => {
        test('Response body must be an array and status must be 200', async () => {
            const response = await api.get('/api/news');
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.status).toBe(200);
        })

    })

})