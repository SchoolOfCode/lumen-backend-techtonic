
// imported express server
 import express from 'express';
// imported cors to link front and backend over localhost
import cors from 'cors';
// importing router
import resourcesRouter from"./routes/resourceRoutes.js";

/**
 * app variable assigned value of express server
 */
const app = express();
// PORT variable takes value from .env file
const PORT = process.env.PORT;

// express runs cors and express.json functions
app.use(cors());
app.use(express.json());

// express uses the path and will call resourcesRouter function
app.use("/api/v2/resources", resourcesRouter); 

// which port our backend is listening on and will console.log message
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

