import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/createUserRoute";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
