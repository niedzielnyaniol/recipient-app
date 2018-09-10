import ActionButtons from '.';
import action from '../../../../../utils/action';

const onSaveClick = () => { action('onSaveClick'); };
const onToggleClick = () => { action('onToggleClick'); };

export default [
  {
    component: ActionButtons,
    name: 'defaultView',
    props: {
      onSaveClick,
      onToggleClick,
    },
  },
];
