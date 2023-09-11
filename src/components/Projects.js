import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import spotifyImg from "../assets/img/Spotify-Clone.png";
import restaurantImg from "../assets/img/restaurantImg.png"
import linkedinImg from "../assets/img/linkedinImg.png"
import gmailImg from "../assets/img/gmailImg.png"
import groceryImg from "../assets/img/groceryList.png"
import wikiImg from "../assets/img/wikiImg.png"
import weatherImg from "../assets/img/weatherImg.png"
import kbImg from "../assets/img/kbImg.png"
import noteImg from "../assets/img/noteImg.png";
import tetrisImg from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
  const [activeKey, setActiveKey] = useState("first");

  useEffect(() => {
    switch(activeKey) {
      case "first":
        setDescription("During my studies, I leveraged popular JavaScript frameworks, utilizing Angular to meticulously craft a Spotify clone and React to replicate the functionalities of Gmail and LinkedIn; additionally, I combined SQL and Java to engineer a comprehensive journal submission system, and employed Django to design a robust student study management platform.");
        break;
      case "second":
        setDescription("Throughout my academic journey, I embarked on a diverse range of projects, from developing games like Tetris with Python, to creating a real-time weather app with JavaScript, HTML, and CSS, and employing Jupyter Notebook to analyze the Kevin Bacon connection phenomenon in media using advanced graph algorithms.");
        break;
      case "third":
        setDescription("During my undergraduate studies, I actively participated in hackathons, was an engaged member of the Computer Science Undergraduate Society and the Calgary Competitive Programming Club, and further broadened my horizons by collaborating with the SOAR Rocketry Club of Canada on interdisciplinary engineering and aerodynamics projects.");
        break;
      default:
        setDescription("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    }
  }, [activeKey]);



  const projects = [
    {
      title: "Spotify Clone",
      description: "JavaScript, HTML, TailwindCSS, Angular & Nx",
      imgUrl: spotifyImg,
      githubLink: "https://github.com/ShahKK/spotify-clone"
    },
    {
      title: "Japanese Restaurant",
      description: "JavaScript, HTML, CSS & React",
      imgUrl: restaurantImg,
      githubLink: "https://github.com/ShahKK/restaurant-app"
    },
    {
      title: "LinkedIn Clone",
      description: "JavaScript, HTML, CSS, React, React-Router, Redux & Firebase",
      imgUrl: linkedinImg,
      githubLink: "https://github.com/ShahKK/linkedin-clone"
    },
    {
      title: "Gmail Clone",
      description: "JavaScript, HTML, CSS, React, React-Router, Redux & Firebase",
      imgUrl: gmailImg,
      githubLink: "https://github.com/ShahKK/gmail-clone"
    },
    {
      title: "Study Management System",
      description: "Python, Django, SQL, HTML & CSS",
      imgUrl: projImg2,
      githubLink: "https://github.com/ShahKK/django-schoolmanager"
    },
    {
      title: "Journal Submission System",
      description: "Java, Java AWT & SQL",
      imgUrl: projImg3,
      githubLink: "https://github.com/ShahKK/paper-submission"
    },

    
  ];

  const projects2 = [
    {
      title: "Temprary Note-taking App",
      description: "C# & .NET",
      imgUrl: noteImg,
      githubLink: "https://github.com/ShahKK/note-taking"
    },
    {
      title: "Grocery Bud",
      description: "JavaScript, HTML & CSS",
      imgUrl: groceryImg,
      githubLink: "https://github.com/ShahKK/grocery-list"
    },
    {
      title: "Wiki Searcher",
      description: "JavaScript, HTML & CSS",
      imgUrl: wikiImg,
      githubLink: "https://github.com/ShahKK/wiki-searcher"
    },
    {
      title: "Weather App",
      description: "HTML, CSS & JavaScript",
      imgUrl: weatherImg,
      githubLink: "https://github.com/ShahKK/weather-app"
    },
    {
      title: "Tetris",
      description: "Python & Pygame",
      imgUrl: tetrisImg,
      githubLink: "https://github.com/ShahKK/tetris-pygame"
    },
    {
      title: "Kevin Bacon Theory interpretation using Graphs",
      description: "Python, Jupyter Notebook, Numpy, NetworkX",
      imgUrl: kbImg,
      githubLink: "https://github.com/ShahKK/kevin-bacon"
    },


  ];

  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>{description}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" activeKey={activeKey} onSelect={key => setActiveKey(key)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">More Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
                    <div className="project--job-container">
                      <div className="job--header">
                        <span className="job--title">Software Engineer @ Pestica</span>
                        <span className="job--date">May 2023 - Present</span>
                      </div>
                      <ul class="job-tasks">
                        <li>Developed and maintained SQL databases, optimizing complex queries to improve data retrieval speeds, thereby enhancing application performance and user experience.</li>
                        <li>Worked closely with product managers and designers to translate requirements into robust software solutions, ensuring seamless integration and adherence to best coding practices.</li>
                        <li>Leveraged Python for backend processes, and utilized JavaScript, HTML, and CSS for front-end development to build and enhance interactive web applications that served thousands of users.</li>
                        <li>Regularly participated in code reviews and debugging sessions, demonstrating a proactive approach in identifying potential issues and collaborating on solutions to ensure software reliability and efficiency.</li>
                        <li>Designed and implemented responsive user interfaces using HTML and CSS, ensuring compatibility across multiple browsers and devices, resulting in a 15% increase in user retention.</li>
                      </ul>

                      <div className="job--header">
                        <span className="job--title">Student Research Assitant @ U of C</span>
                        <span className="job--date">Sep 2021 - June 2022</span>
                      </div>
                      <ul class="job-tasks">
                        <li>Processed and analyzed extensive datasets from telescopic observations and simulations to draw significant conclusions, supporting the research objectives of the lab.</li>
                        <li>Assisted in the setup, calibration, and operation of sophisticated laboratory equipment and tools, ensuring accurate measurements and data collection for critical astrophysical experiments.</li>
                        <li>Utilized advanced mathematical models to interpret observational data, predict cosmic phenomena, and validate theoretical astrophysical concepts, aiding in the deeper understanding of the universe's mechanics.</li>
                        <li>Presented research findings at departmental meetings, utilizing clear visualizations and explanations to communicate complex astrophysical concepts to both technical and non-technical audiences.</li>
                        
                      </ul>
                    </div>
                    
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
