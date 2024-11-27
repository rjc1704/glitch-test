const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`${port}에서 서버가 열렸습니다.`);
});
