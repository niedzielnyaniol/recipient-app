import EditMeta from './';
import action from '../../../../../utils/action';
import { InitialValues } from '../../IngredientCard.types';

export default[
  {
    component: EditMeta,
    name: 'defaultView',
    props: {
      initialValues: {
        name: '',
      },
      onSave: (values: InitialValues) => action(values),
    },
  },
];
