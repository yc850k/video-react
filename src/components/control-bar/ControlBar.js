import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import ProgressControl from './ProgressControl';
import PlayToggle from './PlayToggle';
import ForwardControl from './ForwardControl';
import ReplayControl from './ReplayControl';
import FullscreenToggle from './FullscreenToggle';
import RemainingTimeDisplay from '../time-controls/RemainingTimeDisplay';
import CurrentTimeDisplay from '../time-controls/CurrentTimeDisplay';
import DurationDisplay from '../time-controls/DurationDisplay';
import TimeDivider from '../time-controls/TimeDivider';
import VolumeMenuButton from './VolumeMenuButton';
import PlaybackRate from './PlaybackRate';
import { mergeAndSortChildren } from '../../utils';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  children: PropTypes.any,
  autoHide: PropTypes.bool,
  disableDefaultControls: PropTypes.bool,
};


const defaultProps = {
  autoHide: true,
};


export default class ControlBar extends Component {
  constructor(props) {
    super(props);

    this.getDefaultChildren = this.getDefaultChildren.bind(this);
    this.getFullChildren = this.getFullChildren.bind(this);
  }

  getDefaultChildren() {
    return [
      <PlayToggle
        {...this.props}
        key="play-toggle"
        order={1}
      />,
      <VolumeMenuButton
        {...this.props}
        key="volume-menu-button"
        order={4}
      />,
      <DurationDisplay
        {...this.props}
        key="duration-display"
        order={5}
      />,
      <ProgressControl
        {...this.props}
        key="progress-control"
        order={6}
      />,
      <RemainingTimeDisplay
        {...this.props}
        key="remaining-time-display"
        order={7}
      />,
      <FullscreenToggle
        {...this.props}
        key="fullscreen-toggle"
        order={8}
      />
    ];
  }

  getFullChildren() {
    return [
      <PlayToggle
        {...this.props}
        key="play-toggle"
        order={1}
      />,
      <ReplayControl
        {...this.props}
        key="replay-control"
        order={2}
      />,
      <ForwardControl
        {...this.props}
        key="forward-control"
        order={3}
      />,
      <VolumeMenuButton
        {...this.props}
        key="volume-menu-button"
        order={4}
      />,
      <CurrentTimeDisplay
        {...this.props}
        key="current-time-display"
        order={5}
      />,
      <TimeDivider
        {...this.props}
        key="time-divider"
        order={6}
      />,
      <DurationDisplay
        {...this.props}
        key="duration-display"
        order={7}
      />,
      <ProgressControl
        {...this.props}
        key="progress-control"
        order={8}
      />,
      <RemainingTimeDisplay
        {...this.props}
        key="remaining-time-display"
        order={9}
      />,
      <PlaybackRate
        {...this.props}
        rates={[1, 1.25, 1.5, 2]}
        key="playback-rate"
        order={10}
      />,
      <FullscreenToggle
        {...this.props}
        key="fullscreen-toggle"
        order={11}
      />
    ];
  }

  getChildren() {
    const children = React.Children.toArray(this.props.children);
    const defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
    return mergeAndSortChildren(defaultChildren, children, this.props);
  }

  render() {
    const { autoHide,style} = this.props;
    const children = this.getChildren();
    return (
      <div className={classNames('video-react-control-bar', {
        'video-react-control-bar-auto-hide': autoHide
      })}
           style={style}>
        {children}
      </div>
    );
  }
}

ControlBar.propTypes = propTypes;
ControlBar.defaultProps = defaultProps;
