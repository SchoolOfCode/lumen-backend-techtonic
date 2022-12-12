const express = require("express");
//const morgan = require("morgan");
const cors = require("cors");

const resourcesRouter = require("./routes/resourceRoutes.js");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
//app.use(morgan("dev"));
//app.use(express.static("public"));
app.use(express.json());

app.use("/api/v2/resources", resourcesRouter); // v2 added

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
