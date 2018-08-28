import * as React from 'react';

interface PropTypes {
  children: React.ReactElement<React.ReactChild>;
  name: string;
  onChange: (arg1: string, arg2: string | boolean) => void;
  onBlur: (arg1: string, arg2: boolean) => void;
  value: string | boolean;
  errorText?: string;
  showError?: boolean;
}

const FormItem: React.SFC<PropTypes> = ({
  children,
  name,
  onChange,
  value,
  onBlur,
  errorText,
  showError,
}) => (
  React.cloneElement(children, {
    errorText,
    name,
    onBlur: () => { onBlur(name, true); },
    onChange: (e: React.SyntheticEvent) => {
      const target = e.target as HTMLInputElement;
      onChange(name, target.value);
    },
    showError,
    value,
  })
);

export default FormItem;
