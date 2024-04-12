import request from 'supertest';
import app from '../app';
import { expect } from 'chai';
import NewsModel from '../Models/NewsModel';

const api = request(app);
let newsId;



afterAll(async () => {
  if (newsId) {

    await NewsModel.delete(newsId);
  }
});

describe('Controladores de Noticias', () => {
  describe('Debería obtener todas las noticias', async () => {
    it('Debería obtener todas las noticias correctamente', async () => {
      const response = await request(app).get('/news');
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.data).to.be.an('array');
    });
  });

  describe('Debería agregar una nueva noticia', async () => {
    it('Debería agregar una nueva noticia correctamente', async () => {
      const newsData = {
        title: 'Nueva Noticia',
        body: 'Contenido de la nueva noticia',
        user_id: 1,
        date: '2024-04-12',
        image: 'imagen.jpg'
      };
      const response = await request(app).post('/news').send(newsData);
      expect(response.status).to.equal(201);
      expect(response.body.success).to.be.true;
      expect(response.body.data).to.have.property('id');
      newsId = response.body.data.id;
    });
  });

  describe('Debería editar una noticia existente', async () => {
    it('Debería editar una noticia existente correctamente', async () => {
      const updatedNewsData = {
        title: 'Noticia Editada',
        body: 'Contenido de la noticia editada',
        user_id: 1,
        date: '2024-04-12',
        image: 'imagen-editada.jpg'
      };
      const response = await request(app).put(`/news/${newsId}`).send(updatedNewsData);
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.data).to.have.property('title').that.equals(updatedNewsData.title);
    });
  });

  describe('Debería eliminar una noticia existente', async () => {
    it('Debería eliminar una noticia existente correctamente', async () => {
      const response = await request(app).delete(`/news/${newsId}`);
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal('Noticia eliminada con éxito');
    });
  });

  describe('Debería obtener una sola noticia', async () => {
    it('Debería obtener una sola noticia correctamente', async () => {
      const response = await request(app).get(`/news/${newsId}`);
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.news).to.exist;
    });
  });
});
