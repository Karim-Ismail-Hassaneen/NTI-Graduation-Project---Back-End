const express = require("express");
const AgencyApp = express();
const hostname = "localhost";
const port = 9000;
const cors = require("cors");
//connect to DB
require("./Database/AgencyDB");
const HeaderRoute = require("./Routes/Header/HeaderRoute");
const ServicesRoute = require("./Routes/Services/ServicesRoute");
const AboutRoute = require("./Routes/About/AboutRoute");
const PortfolioRoute = require("./Routes/Portfolio/PortfolioRoute");
const ContactRoute = require("./Routes/Contact/ContactRoute");

// HOME SECTION ROUTES _________________________________________________________________________
const HomeHeroSection = require('./Routes/Home/HeroSection/HeroSectionRoute');
const HomeAboutSection = require('./Routes/Home/AboutSection/AboutSectionRoute');
const HomeServicesSection = require('./Routes/Home/ServicesSection/ServicesSectionRoute');
const HomeContactSection = require('./Routes/Home/ContactSection/ContactSectionRoute');
// HOME SECTION ROUTES __________________________________________________________________________

// USER ROUTES _________________________________________________________________________________
const AuthRoute = require("./Routes/Auth/AuthRoute")
const userTypeRoute = require('./Routes/Auth/userTypeRoute');

// Agency Server App Middlewares
const morgan = require("morgan");
AgencyApp.use(express.json());
AgencyApp.use(express.urlencoded({ extended: true }));
AgencyApp.use(morgan("dev"));
AgencyApp.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  })
);
// Static Files
AgencyApp.use("/images", express.static("./images"));
// Routes
AgencyApp.use("/Header", HeaderRoute);
AgencyApp.use("/Services", ServicesRoute);
AgencyApp.use("/About", AboutRoute);
AgencyApp.use("/Portfolio", PortfolioRoute);
AgencyApp.use("/Contact", ContactRoute);

// ROUTES => HOME SECTION ______________________________________________________________
AgencyApp.use("/Home/Hero", HomeHeroSection);
AgencyApp.use("/Home/About", HomeAboutSection);
AgencyApp.use("/Home/Services", HomeServicesSection);
AgencyApp.use("/Home/Contact", HomeContactSection);
// ROUTES => HOME SECTION _______________________________________________________________


// ROUTES => USER ______________________________________________________________
AgencyApp.use("/Auth", AuthRoute)
AgencyApp.use('/userType',userTypeRoute);

// Listen
AgencyApp.listen(port, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
