# Nodejs
Node js setup step 


<hr>

1.  <b>Install the npm:</b>
    - npm install

2.  <b>setup .env file with variables:</b><br>
    -# Server Post<br>
    -PORT = 7000<br>
    -# DATABASE connection <br>
    -DATABASE = book_store<br>
    -DB_USERNAME = <br>
    -PASSWORD = <br>
    -DB_DIALECT = <br>
    -DB_HOST = <br>
    -# TOKEN JWT<br>
    -JWT_TOKEN = myStoreBookApi<br>
    -JWT_TOKEN_EXPIRESIN = 1h<br>
    -ADMIN_SECRET_KEY = theAdmin<br>

3.  <b>Create Database :</b>
    - CREATE DATABASE book_store;<br>

4.  <b>Run Server for dev :</b>
    - npm run dev<br>


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


