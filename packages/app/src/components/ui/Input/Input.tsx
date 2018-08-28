import { Form, Input as AInput } from 'antd';
import _isFunction from 'lodash/isFunction';
import * as React from 'react';
import noop from '../../../utils/noop';

class Input extends React.PureComponent<IPropTypes> {
  private help?: string
  private showError?: 'error' | undefined

  static defaultProps = {
    errorText: '',
    name: '',
    onBlur: noop,
    onChange: noop,
    placeholder: '',
    showError: false,
    value: '',
  };

  constructor(props: IPropTypes) {
    super(props);
    
    if (props.errorText && props.showError) {
      this.help = props.errorText;
    }

    if (this.props.showError) {
      this.showError = 'error';
    } else {
      this.showError = undefined;
    }
  }

  onInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    
    if (this.props.onChange && _isFunction(this.props.onChange)) {
      this.props.onChange(target.value);
    }
  }

  render() {
    return (
      <Form.Item
        validateStatus={this.showError}
        help={this.help}
      >
        <AInput
          name={this.props.name}
          onChange={this.onInputChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      </Form.Item>
    );
  }
};

interface IPropTypes {
  onChange?: (arg1: string) => void,
  name?: string,
  onBlur?: () => void,
  value?: string,
  errorText?: string,
  showError?: boolean,
  placeholder?: string,
};

export default Input;
