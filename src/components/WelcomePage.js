import { mediaData } from "./Data";
import "./WelcomePage.css";
import Popup from "./Popup";
import { useEffect, useState } from "react";

function WelcomePage() {
  const data = mediaData();

  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  setTimeout(() => {
    setTimedPopup(false);
  }, 5000);

  return (
    <div className="welcomePage">
      <img src={data.coverPhoto}></img>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <img class="popup-image-welcome" src={data.openSign}></img>
      </Popup>
    </div>
  );
}

export default WelcomePage;
