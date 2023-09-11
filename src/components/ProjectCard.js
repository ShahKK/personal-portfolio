import { Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';


export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> 
          <h4 className="proj-git">
            <GitHubIcon onClick={() => window.open(githubLink, '_blank')}/>
          </h4> 
          
        </div>
        <div className = "proj-link">
        
        </div>
      </div>
    </Col>
  )
}
