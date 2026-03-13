const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let username = "";

// Home page
app.get("/", (req, res) => {
    res.send(`
        <h1>Enter your name</h1>
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <button type="submit">Get Greeting</button>
        </form>
    `);
});

// POST request
app.post("/submit", (req, res) => {
    username = req.body.name;
    res.redirect("/greeting");
});

// GET request
app.get("/greeting", (req, res) => {
    res.send(`<h1>Hello, ${username}!</h1>
              <a href="/">Go Back</a>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});