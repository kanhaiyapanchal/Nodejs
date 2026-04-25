# Nodejs
Node js setup step 


<hr>

1.  <b>Install the npm:</b>
    - npm install

2.  <b>setup .env file with variables:</b>
    -# Server Post
    -PORT = 7000
    -# DATABASE connection 
    -DATABASE = book_store
    -DB_USERNAME = 
    -PASSWORD = 
    -DB_DIALECT = 
    -DB_HOST = 
    -# TOKEN JWT
    -JWT_TOKEN = myStoreBookApi
    -JWT_TOKEN_EXPIRESIN = 1h

    -ADMIN_SECRET_KEY = theAdmin

3.  <b>Create Database :</b>
    - CREATE DATABASE book_store;

4.  <b>Run Server for dev :</b>
    - npm run dev


<hr>

1.  <b>END points :</b>

    <b>Request Method</b> : - POST /api/auth/register <br>
    <b>Request Method</b> : - POST /api/auth/login<br>
    <b>Request Method</b> : - GET /api/books<br>
    <b>Request Method</b> : - GET /api/books/:id<br>
    <b>Request Method</b> : - POST /api/books<br>
    <b>Request Method</b> : - PATCH /api/books/:id<br>
    <b>Request Method</b> : - DELETE /api/books/:id<br>
    <b>Request Method</b> : - POST /api/books/:id/images<br>
    <b>Request Method</b> : - DELETE /api/books/:id/images/:imageId<br>


