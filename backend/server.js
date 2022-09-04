const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // this config.env should be in gitignore

require("./conn");

const medicalRoutes = require("./routes/medical-routes");
const performanceRoutes = require("./routes/performance-routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/medical", medicalRoutes);
app.use("/api/performance", performanceRoutes);

app.listen(5000, () => {
  console.log(`server is running at port 5000`);
});
