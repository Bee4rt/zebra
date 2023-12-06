import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

function Hero({
  heroData,
  setHeroContent,
  heroContent,
  setPlayStatus,
  playStatus,
}) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-exp">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="arrow/btn" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroContent(0)}
            className={heroContent === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroContent(1)}
            className={heroContent === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroContent(2)}
            className={heroContent === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>

        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
