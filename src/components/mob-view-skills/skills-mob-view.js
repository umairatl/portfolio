import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import angular from "../../assets/ang.png";
import typescript from "../../assets/ts.png";
import html from "../../assets/js.png";
import react from "../../assets/react2.png";
import "../../components/mob-view-skills/skills-mob.css";

const SkillsMobile = () => {
  return (
    <div className="skills-mobile">
      <div className="top-cont-skills">
        <h1>Skills</h1>
        <p>
          Below are the frameworks and programming languages that i have worked
          with
        </p>
      </div>
      <div className="wrap-card">
        <Card className="card-skills">
          <img
            className="img-html"
            src={html}
            width="270px"
            height="160px"
            style={{ marginLeft: "0px" }}
          />
          <CardContent className="title-skills-mob">
            <Typography gutterBottom variant="h5" component="div">
              HTML, CSS, JS
            </Typography>
            <Typography style={{ color: "white" }}>
              Able to create responsive and dynamic web app suing html, css and
              js
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-skills">
          <div className="img-cont">
            <img src={react} width="160px" height="160px" />
          </div>
          <CardContent className="title-skills-mob">
            <Typography gutterBottom variant="h5" component="div">
              React JS
            </Typography>
            <Typography style={{ color: "white" }}>
              Able to use basic components like route, internal state management
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-skills">
          <img src={angular} width="160px" height="160px" />
          <CardContent className="title-skills-mob">
            <Typography gutterBottom variant="h5" component="div">
              Angular Material
            </Typography>
            <Typography style={{ color: "white" }}>
              Able to create a web app using angular material ui component based
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-skills">
          <img src={typescript} width="160px" height="160px" />
          <CardContent className="title-skills-mob">
            <Typography gutterBottom variant="h5" component="div">
              Typescript
            </Typography>
            <Typography style={{ color: "white" }}>
              Understood briefly the concept of object based and have used it
              with typescript before
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillsMobile;
