const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./src/development.env" });
const DATABASE_ENDPOINT = process.env.DATABASE_LOCAL_ENDPOINT;

mongoose
  .connect(DATABASE_ENDPOINT)
  .then(() =>
    console.log("Mongo DB database connection established successfully")
  )
  .catch((error) => console.log(error));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port*: ${port}`));
