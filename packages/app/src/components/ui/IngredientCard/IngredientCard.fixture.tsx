import * as React from 'react';
import styled from 'styled-components';

import IngredientCard from './IngredientCard';

const Wrapper = styled.div`
  width: 250px;
`;

export default [
  {
    component: (props: any) => (<Wrapper><IngredientCard {...props} /></Wrapper>),
    name: 'defaultView',
    namespace: 'IngredientCard/pets',
    props: {
      categories: 'meat, sausages',
      image: 'https://images.tienda.com/is/image/LaTienda/cz-07-2?wid=480&qlt=60',
      title: 'Chorizo',
    },
  },
  {
    component: (props: any) => (<Wrapper><IngredientCard {...props} /></Wrapper>),
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
