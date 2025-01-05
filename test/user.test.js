const request = require('supertest');
const app = require('../index');
const { User } = require('../models');

describe('User API', () => {
  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        mobileNumber: 1234567890,
        address: '123 Main St',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
