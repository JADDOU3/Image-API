import supertest from 'supertest';
import app from '../src/index';

const request = supertest(app);

describe('GET /api/images', () => {
  it('returns 400 if params are missing', async () => {
    const res = await request.get('/api/images');
    expect(res.status).toBe(400);
  });

  it('returns 200 on valid resize', async () => {
    const res = await request.get(
      '/api/images?filename=test&width=100&height=100',
    );
    expect(res.status).toBe(200);
  });

  it('returns 404 when image does not exist', async () => {
    const res = await request.get(
      '/api/images?filename=nonexistent&width=200&height=200',
    );
    expect(res.status).toBe(404);
  });
});
