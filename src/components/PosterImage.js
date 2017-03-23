import React, { PropTypes } from 'react';

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
  disableOnPause: PropTypes.bool,
};


function PosterImage({ poster, player, actions, disableOnPause = true }) {
  if (
    (disableOnPause && player.paused || !player.paused) && player.hasStarted ||
    !poster
  ) {
    return null;
  }

  return (
    <div
      className="video-react-poster"
      tabIndex="-1"
      style={{
        backgroundImage: `url("${poster}")`,
      }}
      onClick={() => {
        if (player.paused) {
          actions.play();
        }
      }}
    />
  );
}

PosterImage.propTypes = propTypes;

export default PosterImage;
