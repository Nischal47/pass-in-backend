const http = require('http');

const app = require('../server');

const port = process.env.PORT || 8000

app.set('port',port)

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});