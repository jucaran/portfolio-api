const server = require("./app.js");
require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log("Server running...");
});
