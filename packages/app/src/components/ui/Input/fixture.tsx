import action from '../../../utils/action';
import Input from './';

const onChange = (value: string) => { action(value); };

const onBlur = () => { action('onBlur'); };

export default [
  {
    component: Input,
    name: 'defaultView',
    props: {
      name: 'name',
      onBlur,
      onChange,
      value: '',
    },
  },
  {
    component: Input,
    name: 'withText',
    props: {
      name: 'name',
      onBlur,
      onChange,
      value: 'Text',
    },
  },
  {
    component: Input,
    name: 'withPlaceholder',
    props: {
      name: 'name',
      onBlur,
      onChange,
      placeholder: 'placeholder',
    },
  },
  {
    component: Input,
    name: 'withError',
    props: {
      errorText: 'Error',
      name: 'name',
      onBlur,
      onChange,
      showError: true,
    },
  },
];
