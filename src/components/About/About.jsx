import React from "react";
import Banner from "../subcomponents/Banner";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Footer from "../Footer";
import "./about.css";

function About() {
  const theme = createTheme();

  theme.typography.h5 = {
    fontFamily: ["Lora", "serif"].join(),
    fontSize: "25px",
    color: "#05361F",
  };
  theme.typography.h6 = {
    fontFamily: ["Lora", "serif"].join(),
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 200,
    color: "#05361F",
    "@media screen and (max-width: 1024px)": {
      textAlign: "center",
    },
  };

  return (
    <div>
      <Banner classname="about-bg-img" title="About" desc="The Green Canopy" />
      <div className="h5Container">
        <Typography
          sx={{ margin: "30px auto" }}
          gutterBottom
          align="center"
          theme={theme}
          variant="h5"
        >
          “Choose a job you love, and you never have to work a day in your life”
        </Typography>
      </div>
      <div style={{ position: "relative" }}>
        <img className="leafone" src="images/leaves/leaf1.png" alt="leaf" />
        <img className="leafseven" src="images/leaves/leaf7.png" alt="leaf" />
      </div>
      <div className="h6Container">
        <Typography
          sx={{ width: "80%", margin: "0px auto 30px auto" }}
          theme={theme}
          variant="h6"
        >
          Quite powerful, this line, made 4 enthusiasts take up Gardening and
          Landscaping full time and here we are now as The Green Canopy. We aim
          to take up this self given responsibility in planning and executing a
          shade of green both of us would come to cherish and be proud of. May
          it be residential or commercial, we look forward to work with you and
          infect our love for it that has become an inseparable part of us. We
          at Green canopy specialise in all kinds of Plants- may it be
          flowering, fruiting or plain vegetation; the Medium- Soil, Coco peat
          etc and the fertilisers- organic and inorganic. It gives us immense
          joy combining our expertise and experience into hand crafting and
          providing the best greens you’d come to appreciate.
        </Typography>
      </div>
      <Footer />
    </div>
  );
}

export default About;
