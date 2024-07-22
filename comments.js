// Create web server
// Import express
const express = require('express');
const path = require('path');
// Create server
const app = express();
// Set port
const port = 3000;
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set data for comments
const comments = [
    { username: 'John', comment: 'Hello' },
    { username: 'Mary', comment: 'Hi' },
    { username: 'Bob', comment: 'Good morning' }
];

// Set route
app.get('/', (req, res) => {
    res.render('comments', { comments });
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
