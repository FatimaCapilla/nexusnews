import request from 'supertest'; 
import app from '../app';
import { expect } from 'chai';



describe('Controladores de Noticias', () => {
  let newsId: number;

  it('Debería obtener todas las noticias', async () => {
    const response = await request(app).get('/news');
    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.data).to.be.an('array');
  });

  it('Debería agregar una nueva noticia', async () => {
    const newsData = {
      title: 'Nueva Noticia',
      body: 'Contenido de la nueva noticia',
      user_id: 1, // Esto debe ser un ID válido de usuario en tu base de datos
      date: '2024-04-12',
      image: 'imagen.jpg'
    };

    const response = await request(app).post('/news').send(newsData);
    expect(response.status).to.equal(201);
    expect(response.body.success).to.be.true;
    expect(response.body.data).to.have.property('id');
    newsId = response.body.data.id; // Guarda el ID de la noticia creada para usarlo en las siguientes pruebas
  });

  it('Debería editar una noticia existente', async () => {
    const updatedNewsData = {
      title: 'Noticia Editada',
      body: 'Contenido de la noticia editada',
      user_id: 1, // Esto debe ser un ID válido de usuario en tu base de datos
      date: '2024-04-12',
      image: 'imagen-editada.jpg'
    };

    const response = await request(app).put(`/news/${newsId}`).send(updatedNewsData);
    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.data).to.have.property('title').that.equals(updatedNewsData.title);
  });

  it('Debería eliminar una noticia existente', async () => {
    const response = await request(app).delete(`/news/${newsId}`);
    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.message).to.equal('Noticia eliminada con éxito');
  });

  it('Debería obtener una sola noticia', async () => {
    const response = await request(app).get(`/news/${newsId}`);
    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.news).to.exist;
  });
});

