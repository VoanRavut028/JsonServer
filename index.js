const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middleware = jsonserver.defaults(); // GET, POST, PUT, DELETE
const cors = require("cors");

server.use(cors());
server.use(middleware);
server.use(router);

const port = 3010;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`json server listening on http://${host}:${port}`);
});
