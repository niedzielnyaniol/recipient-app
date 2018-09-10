import EditMeta from './';
import action from '../../../../../utils/action';

const setFieldTouched = (name: string, isTouched: boolean) => { action(name, isTouched); };
const setFieldValue = (name: string, value: string) => { action(name, value); };

export default[
  {
    component: EditMeta,
    name: 'defaultView',
    props: {
      setFieldTouched,
      setFieldValue,
      values: {
        categories: '',
        name: '',
      },
    },
  },
];
