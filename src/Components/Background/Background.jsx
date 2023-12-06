import "./Background.css";
import video from "../../assets/video.mp4";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";

function Background({ playStatus, heroContent }) {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroContent === 0) {
    return <img src={image1} className="background" alt="image" />;
  } else if (heroContent === 1) {
    return <img src={image2} className="background" alt="image" />;
  } else if (heroContent === 2) {
    return <img src={image3} className="background" alt="image" />;
  }
}

export default Background;
