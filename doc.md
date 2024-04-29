# Endpoints:

## Users:

### Create User

- URL: /users
- Method: POST
- Description: Create a new user.

### Authenticate User

- URL: /users/authenticate
- Method: POST
- Description: Authenticate an existing user.

### Get All Users

- URL: /users
- Method: GET
- Description: Get all users.

## Books:

### Create Book

- URL: /books
- Method: POST
- Description: Create a new book.

### Delete Book

- URL: /books/{bookId}
- Method: DELETE
- Description: Delete a book by ID.

### Loan Out Book

- URL: /books/{bookId}/loan
- Method: POST
- Description: Loan out a book by ID.

### Return Book

- URL: /books/{bookId}/return
- Method: POST
- Description: Return a book by ID.

### Update Book

- URL: /books/{bookId}
- Method: PUT
- Description: Update a book by ID.
