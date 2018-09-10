import IngredientCard from './IngredientCard';

export default [
  {
    component: IngredientCard,
    name: 'defaultView',
    props: {
      categories: 'meat, sausages',
      image: 'https://images.tienda.com/is/image/LaTienda/cz-07-2?wid=480&qlt=60',
      title: 'Chorizo',
    },
  },
  {
    component: IngredientCard,
    name: 'editMode',
    props: {
      categories: 'meat, sausages',
      title: 'Chorizo',
    },
    state: {
      isEdit: true,
    },
  },
];
