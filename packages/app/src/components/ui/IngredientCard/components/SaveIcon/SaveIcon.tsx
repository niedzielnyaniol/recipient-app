import * as React from 'react';
import { Icon } from 'antd';

interface PropTypes {
  onToggleClick: () => void;
  onSaveClick: () => void;
}

class SaveIcon extends React.PureComponent<PropTypes> {
  save = () => {
    this.props.onSaveClick();
    this.props.onToggleClick();
  }

  render = () => {
    return (
      <Icon type="check" onClick={this.save} />
    );
  }
}

export default SaveIcon;
