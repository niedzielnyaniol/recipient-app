import * as React from 'react';
import action from '../../../utils/action';
import Input from '../Input';
import FormItem from './';

export default [
  {
    component: FormItem,
    name: 'input',
    props: {
      children: <Input />,
      name: 'inputName',
      onBlur: (name:string, isTouched: string) => { action(name, isTouched); },
      onChange: (name:string, val: string) => { action(val); },
      value: '',
    }
  },
  {
    component: FormItem,
    name: 'inputWithText',
    props: {
      children: <Input />,
      name: 'input',
      onBlur: (name:string, isTouched: string) => { action(name, isTouched); },
      onChange: (name:string, val: string) => { action(name, val); },
      value: 'Text',
    }
  },
  {
    component: FormItem,
    name: 'inputWithError',
    props: {
      children: <Input />,
      errorText: 'Error',
      name: 'input',
      onBlur: (name:string, isTouched: string) => { action(name, isTouched); },
      onChange: (name:string, val: string) => { action(name, val); },
      showError: true,
      value: 'Text',
    }
  }
]