const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // this config.env should be in gitignore

require("./conn");

const medicalRoutes = require("./routes/medical-routes");
const performanceRoutes = require("./routes/performance-routes");
const facultyRoutes = require("./routes/faculty-routes");
const ceaRoutes = require("./routes/cea-routes");
const paymentRoutes = require("./routes/payment-routes");
const propertyRoutes = require("./routes/property-routes");
const trainingRoutes = require("./routes/training-routes");
const serviceRoutes = require("./routes/service-routes");
const rtiRoutes = require("./routes/rti-routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/medical", medicalRoutes);
app.use("/api/performance", performanceRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/cea", ceaRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/training", trainingRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/rti", rtiRoutes);

app.listen(5000, () => {
  console.log(`server is running at port 5000`);
});
