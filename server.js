const http = require("http");
const fs = require("fs");

// File paths for storing users and books data
const usersFilePath = "./users.json";
const booksFilePath = "./books.json";

// Ensure files for storing data exist, create them if not
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

if (!fs.existsSync(booksFilePath)) {
  fs.writeFileSync(booksFilePath, JSON.stringify([]));
}

// Read initial data from JSON files
let users = JSON.parse(fs.readFileSync(usersFilePath));
let books = JSON.parse(fs.readFileSync(booksFilePath));

const PORT = 4000;
const HOST_NAME = "localhost";

const requestHandler = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/books" && req.method === "GET") {
    res.end(JSON.stringify(books));
  } else if (req.url === "/books" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newBook = JSON.parse(body);
      newBook.id = generateId(); // Generate a unique ID for the book
      books.push(newBook);
      fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
      res.end(JSON.stringify(newBook));
    });
  } else if (req.url.startsWith("/books/") && req.method === "GET") {
    const bookId = req.url.split("/")[2];
    const book = books.find((b) => b.id === bookId);
    if (book) {
      res.end(JSON.stringify(book));
    } else {
      res.end(JSON.stringify({ error: "Book not found" }));
    }
  } else if (req.url.startsWith("/books/") && req.method === "PUT") {
    const bookId = req.url.split("/")[2];
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedBook = JSON.parse(body);
      const index = books.findIndex((b) => b.id === bookId);
      if (index !== -1) {
        updatedBook.id = bookId; // Ensure ID consistency
        books[index] = updatedBook;
        fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
        res.end(JSON.stringify(updatedBook));
      } else {
        res.end(JSON.stringify({ error: "Book not found" }));
      }
    });
  } else if (req.url.startsWith("/books/") && req.method === "DELETE") {
    const bookId = req.url.split("/")[2];
    const index = books.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      const deletedBook = books.splice(index, 1)[0];
      fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
      res.end(JSON.stringify(deletedBook));
    } else {
      res.end(JSON.stringify({ error: "Book not found" }));
    }
  } else if (req.url === "/users" && req.method === "GET") {
    res.end(JSON.stringify(users));
  } else if (req.url === "/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      newUser.id = generateId(); // Generate a unique ID for the user
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      res.end(JSON.stringify(newUser));
    });
  } else if (req.url === "/users/authenticate" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { username, password } = JSON.parse(body);
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (authenticatedUser) {
        res.end(JSON.stringify(authenticatedUser));
      } else {
        res.end(JSON.stringify({ error: "Authentication failed" }));
      }
    });
  } else if (req.url.startsWith("/users/") && req.method === "GET") {
    const userId = req.url.split("/")[2];
    const user = users.find((u) => u.id === userId);
    if (user) {
      res.end(JSON.stringify(user));
    } else {
      res.end(JSON.stringify({ error: "User not found" }));
    }
  } else if (req.url.startsWith("/users/") && req.method === "PUT") {
    const userId = req.url.split("/")[2];
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedUser = JSON.parse(body);
      const index = users.findIndex((u) => u.id === userId);
      if (index !== -1) {
        updatedUser.id = userId; // Ensure ID consistency
        users[index] = updatedUser;
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.end(JSON.stringify(updatedUser));
      } else {
        res.end(JSON.stringify({ error: "User not found" }));
      }
    });
  } else if (req.url.startsWith("/users/") && req.method === "DELETE") {
    const userId = req.url.split("/")[2];
    const index = users.findIndex((u) => u.id === userId);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      res.end(JSON.stringify(deletedUser));
    } else {
      res.end(JSON.stringify({ error: "User not found" }));
    }
  } else {
    res.end(JSON.stringify({ error: "Invalid endpoint" }));
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server is listening on ${HOST_NAME}:${PORT}`);
});

// Function to generate a unique ID
function generateId() {
  return Date.now().toString(); // Using current timestamp as ID
}
