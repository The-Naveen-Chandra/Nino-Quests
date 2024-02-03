import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Cutu please.",
  "Don't do this to me.",
  "I'm gonna cry...",
  "You're braking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              alt="bears kissing"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
            <div className="okText">Ok yay!!!!</div>
          </>
        ) : (
          <>
            <img
              alt="bear with roses"
              src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.webp"
              className="bearWithRoses"
            />
            <div className="text">Will you be my valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{
                  fontSize: yesButtonSize,
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button className="noButton" onClick={handleNoClick}>
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
