TheChefKart(micro-instagram-backend) - Backend System
This project is a custom backend system designed for a simplified version of an Instagram-like application, built using Node.js, Express.js, Sequelize (for ORM), and SQLite. It includes RESTful APIs to manage users and posts, a relational database schema, and unit tests for API endpoints.

Table of Contents
Installation

Project Setup

API Documentation

Testing

Deployment

Contributing

License

Installation
Prerequisites
Node.js(v14 or higher)

SQLite (database will be created locally by Sequelize)

Any IDE or code editor (e.g., VS Code)

Steps to Install
Navigate to the project directory:

bash
cd micro-instagram-backend
Install the dependencies:

bash
npm install
Create a .env file in the root directory to store environment variables such as server port (SQLite will be used by default without the need for a DB host or credentials):

plaintext
PORT=your-preferred-port
Project Setup
Database Configuration
Sequelize will automatically create and use an SQLite database file locally. You don’t need to set up a PostgreSQL or MySQL database server.

Example for SQLite:

plaintext
DB_STORAGE=./database.sqlite
PORT=3000
Migrations
Run the migration to create the tables in the database:

bash
npx sequelize-cli db:migrate
This will create an SQLite database file in the root directory (e.g., ./database.sqlite).

Start the Server
To run the server locally, use the following command:

bash
npm start
This will start the server at the configured PORT.

API Documentation
1. Get all users
Endpoint: GET /users

Description: Retrieves all users from the database.

Response:

json
[
  {
    "id": 1,
    "name": "John Doe",
    "mobile_number": "1234567890",
    "address": "123 Main St",
    "post_count": 5
  }
]
2. Get all posts
Endpoint: GET /posts

Description: Retrieves all posts from the database.

Response:

json
[
  {
    "id": 1,
    "title": "My First Post",
    "description": "This is a test post.",
    "images": ["image1.jpg", "image2.jpg"],
    "userId": 1
  }
]
3. Create a post for a user
Endpoint: POST /:userId/posts

Request Body:

json
{
  "title": "New Post",
  "description": "This is a new post.",
  "images": ["image.jpg"]
}
Response:

json
{
  "id": 1,
  "title": "New Post",
  "description": "This is a new post.",
  "images": ["image.jpg"],
  "userId": 1
}
4. Edit a post
Endpoint: PUT /posts/:postId

Request Body:

json
{
  "title": "Updated Post",
  "description": "Updated description."
}
Response:

json
{
  "id": 1,
  "title": "Updated Post",
  "description": "Updated description.",
  "images": ["image.jpg"],
  "userId": 1
}
5. Delete a post
Endpoint: DELETE /posts/:postId

Response:

json
{
  "message": "Post deleted successfully."
}
Testing
Unit Tests
Unit tests are written using the Jest testing framework. To run the tests:

Install testing dependencies:

bash
npm install --save-dev jest supertest
Run the tests:

bash
npm test
Ensure that all endpoints are covered, and tests check for edge cases, error handling, and proper responses.


Contributing
Feel free to fork this repository and submit pull requests. Please ensure you follow the code standards and provide appropriate tests for new features or bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
