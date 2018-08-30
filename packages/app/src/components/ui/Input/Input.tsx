import { Form, Input as AInput } from 'antd';
import _isFunction from 'lodash/isFunction';
import * as React from 'react';
import noop from '../../../utils/noop';

interface PropTypes {
  onChange?: (arg1: string) => void;
  label?: string;
  name?: string;
  onBlur?: () => void;
  value?: string;
  errorText?: string;
  showError?: boolean;
  size?: 'large' | 'default' | 'small';
  placeholder?: string;
}

class Input extends React.PureComponent<PropTypes> {
  static defaultProps = {
    errorText: '',
    label: '',
    name: '',
    onBlur: noop,
    onChange: noop,
    placeholder: '',
    showError: false,
    size: 'default',
    value: '',
  };

  private help?: string;
  private showError?: 'error' | undefined;

  constructor(props: PropTypes) {
    super(props);

    this.showError = this.props.showError ? 'error' : undefined;

    if (props.errorText && props.showError) {
      this.help = props.errorText;
    }
  }

  onInputChange = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;

    if (this.props.onChange && _isFunction(this.props.onChange)) {
      this.props.onChange(target.value);
    }
  }

  render() {
    return (
      <Form.Item
        validateStatus={this.showError}
        help={this.help}
        label={this.props.label}
        style={{ margin: 0 }}
      >
        <AInput
          name={this.props.name}
          onChange={this.onInputChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          placeholder={this.props.placeholder}
          size={this.props.size}
        />
      </Form.Item>
    );
  }
}

export default Input;
