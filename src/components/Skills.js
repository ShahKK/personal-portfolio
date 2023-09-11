import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a foundation in front-end, back-end, and full-stack development, I've proficiently harnessed programming languages like JavaScript, Python, C++, among others. My aptitude for problem-solving, paired with effective communication, has consistently enabled me to collaborate with varied teams, ensuring timely and quality project deliveries.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>2+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>5+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>3+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>2+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>3+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>4+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>1+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>2+ years</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>1+ year</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
