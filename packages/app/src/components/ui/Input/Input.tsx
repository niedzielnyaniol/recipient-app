import { Form, Input as AInput } from 'antd';
import * as React from 'react';
import noop from '../../../utils/noop';

const Input: React.SFC<PropTypes> = ({
  onChange,
  onBlur,
  name,
  value,
  errorText,
  showError,
  placeholder,
}) => (
  <Form.Item
    validateStatus={showError ? 'error' : undefined}
    help={errorText && showError ? errorText : undefined}
  >
    <AInput
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    />
  </Form.Item>
);

interface PropTypes {
  onChange?: (e: React.SyntheticEvent) => void;
  name?: string;
  onBlur?: () => void;
  value?: string;
  errorText?: string;
  showError?: boolean;
  placeholder?: string;
}

Input.defaultProps = {
  errorText: '',
  name: '',
  onBlur: noop,
  onChange: noop,
  placeholder: '',
  showError: false,
  value: '',
};

export default Input;
