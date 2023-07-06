const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const cors = require("cors");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
// server.use(cors());

server.listen(port, () => {
  console.log(`${port}에서 서버가 열렸습니다.`);
});
