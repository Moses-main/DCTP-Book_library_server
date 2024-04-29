Sure, here's the complete Markdown documentation for both the users and books endpoints:

```markdown
# Books and Users API Documentation

This documentation provides details on how to interact with the Books and Users API using JavaScript examples and Postman test scripts.

## Base URL

The base URL for the API is `http://localhost:4000`.

## Books

### Endpoints

#### Create a Book

- **Endpoint:** `POST /books`
  
  Creates a new book.

**JavaScript Example:**
```javascript
const axios = require('axios');

const newBook = {
  name: "Sample Book",
  author: "John Doe",
  series: "Sample Series",
  pages: 200,
  availability: true
};

axios.post('http://localhost:4000/books', newBook)
  .then(response => {
    console.log('New book created:', response.data);
  })
  .catch(error => {
    console.error('Error creating book:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Book is created successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sample Book");
});
```

#### Retrieve All Books

- **Endpoint:** `GET /books`
  
  Retrieves a list of all books.

**JavaScript Example:**
```javascript
const axios = require('axios');

axios.get('http://localhost:4000/books')
  .then(response => {
    console.log('All books:', response.data);
  })
  .catch(error => {
    console.error('Error retrieving books:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("At least one book is returned", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.be.above(0);
});
```

#### Retrieve a Specific Book

- **Endpoint:** `GET /books/{book_id}`
  
  Retrieves a specific book by its ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const bookId = 'book_id_here'; // Replace with actual book ID

axios.get(`http://localhost:4000/books/${bookId}`)
  .then(response => {
    console.log('Book details:', response.data);
  })
  .catch(error => {
    console.error('Error retrieving book:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Book details are returned", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.exist;
});
```

#### Update a Book

- **Endpoint:** `PUT /books/{book_id}`
  
  Updates a specific book by its ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const bookId = 'book_id_here'; // Replace with actual book ID
const updatedBook = {
  name: "Updated Book",
  author: "Jane Smith",
  series: "Updated Series",
  pages: 250,
  availability: true
};

axios.put(`http://localhost:4000/books/${bookId}`, updatedBook)
  .then(response => {
    console.log('Book updated:', response.data);
  })
  .catch(error => {
    console.error('Error updating book:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Book is updated successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Updated Book");
});
```

#### Delete a Book

- **Endpoint:** `DELETE /books/{book_id}`
  
  Deletes a specific book by its ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const bookId = 'book_id_here'; // Replace with actual book ID

axios.delete(`http://localhost:4000/books/${bookId}`)
  .then(response => {
    console.log('Book deleted:', response.data);
  })
  .catch(error => {
    console.error('Error deleting book:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Book is deleted successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.not.exist;
});
```

## Users

### Endpoints

#### Create a User

- **Endpoint:** `POST /users`
  
  Creates a new user.

**JavaScript Example:**
```javascript
const axios = require('axios');

const newUser = {
  name: "John Doe",
  password: "password123",
  email: "john@example.com"
};

axios.post('http://localhost:4000/users', newUser)
  .then(response => {
    console.log('New user created:', response.data);
  })
  .catch(error => {
    console.error('Error creating user:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User is created successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("John Doe");
});
```

#### Retrieve All Users

- **Endpoint:** `GET /users`
  
  Retrieves a list of all users.

**JavaScript Example:**
```javascript
const axios = require('axios');

axios.get('http://localhost:4000/users')
  .then(response => {
    console.log('All users:', response.data);
  })
  .catch(error => {
    console.error('Error retrieving users:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("At least one user is returned", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.be.above(0);
});
```

#### Retrieve a Specific User

- **Endpoint:** `GET /users/{user_id}`
  
  Retrieves a specific user by their ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const userId = 'user_id_here'; // Replace with actual user ID

axios.get(`http://localhost:4000/users/${userId}`)
  .then(response => {
    console.log('User details:', response.data);
  })
  .catch(error => {
    console.error('Error retrieving user:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User details are returned", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.exist;
});
```

#### Update a User

-

 **Endpoint:** `PUT /users/{user_id}`
  
  Updates a specific user by their ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const userId = 'user_id_here'; // Replace with actual user ID
const updatedUser = {
  name: "Jane Smith",
  password: "newpassword123",
  email: "jane@example.com"
};

axios.put(`http://localhost:4000/users/${userId}`, updatedUser)
  .then(response => {
    console.log('User updated:', response.data);
  })
  .catch(error => {
    console.error('Error updating user:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User is updated successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Jane Smith");
});
```

#### Delete a User

- **Endpoint:** `DELETE /users/{user_id}`
  
  Deletes a specific user by their ID.

**JavaScript Example:**
```javascript
const axios = require('axios');

const userId = 'user_id_here'; // Replace with actual user ID

axios.delete(`http://localhost:4000/users/${userId}`)
  .then(response => {
    console.log('User deleted:', response.data);
  })
  .catch(error => {
    console.error('Error deleting user:', error.response.data);
  });
```

**Postman Test Script:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User is deleted successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.not.exist;
});
```

```
