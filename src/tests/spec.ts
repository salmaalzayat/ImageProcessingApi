import { imageResize } from '../router/resizeApi';
import fs from 'fs';
import app from '../app';
import supertest from 'supertest';

// create a request object
const request = supertest(app);

describe(' Tests', () => {
  it('expected to cashe the image file after processing', () => {
    const image: string = '.\\Cashe\\fjord.jpg444444.jpg';

    if (fs.existsSync(image)) {
      fs.unlinkSync(image);
    }

    imageResize('444', '444', 'fjord.jpg');

    setTimeout(() => {
      expect(fs.existsSync(image)).toBeTrue();
    }, 100);
  });
  it('limit other EndPoints', async () => {
    const response = await request.get('/*');
    expect(response.status).toBe(404);
  });

  it('get the EndPoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint', async () => {
    const response = await request.get(
      '/api/images?imageName=fjord&height=400&width=444'
    );
    expect(response.status).toBe(200);
  });
});
