// To do:
// Remove the harcoded dates and genders from all forms.
// Support file upload feature to the database

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
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

const accounts = require("./models/accounts");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: "Simple Secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(accounts.createStrategy());
passport.serializeUser(accounts.serializeUser());
passport.deserializeUser(accounts.deserializeUser());

// app.get("/", (req, res) => {
//   res.send("Server Route.");
// });

// app.post("/api/login", (req, res) => {
//   const user = new accounts({
//     username: req.body.username,
//     password: req.body.password
//   });

//   req.login(user, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, function() {
//         res.send("Successfully Logged In.");
//       });
//     }
//   });
// });

// app.post("/api/signup", (req, res) => {
//   accounts.register({ 
//     username: req.body.email, 
//     name: req.body.name, 
//     email: req.body.email, 
//     phone: req.body.phone }, req.body.password, (err, user) => {

//       if(err){
//         res.send(err);
//       }else{
//         res.send("Success");
//       }
//   })
// });

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
