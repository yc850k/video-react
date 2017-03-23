import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  position: PropTypes.string,
  disableOnPause: PropTypes.bool,
};

const defaultProps = {
  position: 'left',
  disableOnPause: true,
};

export default class BigPlayButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    const { actions } = this.props;
    actions.play();
  }

  render() {
    const { player, position, style, className, disableOnPause } = this.props;
    if (
      (disableOnPause && player.paused || !player.paused) && player.hasStarted ||
      !player.currentSrc
    ) {
      return null;
    }
    return (
      <button
        className={classNames(
	  {[className]:!!className},
          'video-react-big-play-button',
          `video-react-big-play-button-${position}`,
        )}
        type="button"
        aria-live="polite"
        tabIndex="0"
        style={style}
        onClick={this.handleClick}
      >
        <span className="video-react-control-text">Play Video</span>
      </button>
    );
  }
}

BigPlayButton.propTypes = propTypes;
BigPlayButton.defaultProps = defaultProps;

