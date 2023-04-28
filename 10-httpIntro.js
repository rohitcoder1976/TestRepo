const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == '/') { // if user is on home page
        res.end('Welcome to the home page');
    } else if (req.url == "/about") {
        res.end("Here is the about page");
    } else {
        res.end(`<h1>404 Error</h1> <p>We can't seem to find the page you're looking for...</p> <a href = "/">Back Home</a>`);
    }

});

// server listens for requests on port 5000
server.listen(5000);