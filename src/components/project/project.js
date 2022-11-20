import React from "react";
import '../project/project.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kingkongfood from '../../assets/kingkongfood.png'; 


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
//  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Project = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return ( 
        <section className="project" id="project">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="project-bx wow zoomIn">
                        <h2>MY PROJECTS</h2>
                     
            <div className="box">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            2021
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Final Year Project (BSc in e-Business)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="img-kkf"> 
            <h1>KingKongFood Web Application</h1>
            <img src={kingkongfood} width='70%'/></div>
            <div className="content">
            <p>The main objective of the implementation and development of KingKongFood Web Application is to
help the café to overcome its business problems. With the help of this website, KingKongFood is now
able to have a more effective way of online ordering and thus avoid human error to occur. Besides that,
by having KingKongWebsite, the business is utilizing the digital platform to promote and bring more
customers into the business as it gives more exposure to the public about KingKongFood. The customers
can also find the café information easily including location since the location of KingKongFood is not
strategic and a bit difficult to find, hence the website provides the customer with the café information and
it also helps the customers directly linked to the café location in Google Map. Customers also able to give
feedback and the business can collect feedback information effectively.</p>
<ul> <b>Language</b>
            <li>HTML</li>
            <li>PHP</li>
            <li>MySQL</li>
           </ul>
          
           <ul> <b>Strength</b>
            <li>Offer convinience to use</li>
            <li>Attractive design</li>
            <li>Provide validation and security to users</li>
            <li>Admin can view report/summary of the project</li>
            <li>Animation tracking page</li>
           </ul>
           </div>

          </Typography>
          <Button className="btn-1" size="small" 
        onClick={() => window.open('https://www.youtube.com/watch?v=Dj5xrAZxWyU')}>Preview</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>2022</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Front End Module Hackathon (BeSquare)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>  
     
     
            {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={kingkongfood}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Final Year Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Currently 
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="btn-1" size="small" 
        onClick={() => window.open('https://www.youtube.com/watch?v=Dj5xrAZxWyU')}>Preview</Button>
      </CardActions>
    </Card> */}
  </div>

</div>
    </div> 
        </div>
    </section>
     );
}
 
export default Project;