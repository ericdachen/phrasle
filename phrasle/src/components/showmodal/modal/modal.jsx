import React from "react";
import "./modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  // TODO - update to actual stats
  const statistics = {
    played: 40,
    percentWin: 100,
    curStreak: 40,
    maxStreak: 40
  };

  const countdown = "00:00:00";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main">
        <div className="close" onClick={handleClose} />
        <div className="title">
          STATISTICS
        </div>
        <div className="stats">
          <div className="stat">
            <div className="number">{statistics.played}</div>
            <p>Played</p>
          </div>
          <div className="stat">
            <div className="number">{statistics.percentWin}</div>
            <p>Win %</p>
          </div>
          <div className="stat">
            <div className="number">{statistics.curStreak}</div>
            <p>Current Streak</p>
          </div>
          <div className="stat">
            <div className="number">{statistics.maxStreak}</div>
            <p>Max Streak</p>
          </div>
        </div>
        <div className="title">
          GUESS DISTRIBUTION
        </div>
        {/* temp placeholder until we get actual stats tables going*/}
        <div className="stats">
          <div className="graph" />
        </div>
        <div className="stats">
          <div className="countDown">
            <div className="title">
              NEXT PHRASLE
            </div>
            <div className="number">
              {countdown}
            </div>
          </div>
          {/* <div className="divider">
          </div> */}
          <div className="shareButton">
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;