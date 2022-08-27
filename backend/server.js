const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // this config.env should be in gitignore

require("./conn");

const medicalRoutes = require("./routes/medical-routes");

const app = express();
app.use(express.json());

app.use("/api/medical", medicalRoutes);

app.listen(5000, () => {
  console.log(`server is running at port 5000`);
});
