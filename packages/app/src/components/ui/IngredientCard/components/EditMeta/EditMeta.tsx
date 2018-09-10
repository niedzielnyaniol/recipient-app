import * as React from 'react';

import { InitialValues } from '../../IngredientCard.types';

import FormItem from '../../../FormItem';
import Input from '../../../Input';
import { setFieldTouchedType, setFieldValueType } from '../../../../../types/Formik.types';

interface PropTypes {
  values: InitialValues;
  setFieldTouched: setFieldTouchedType;
  setFieldValue: setFieldValueType;
}

const EditMeta: React.SFC<PropTypes> = ({
  values,
  setFieldTouched,
  setFieldValue,
}) => (
  <React.Fragment>
    <FormItem
      name="name"
      onBlur={setFieldTouched}
      onChange={setFieldValue}
      value={values.name}
    >
      <Input/>
    </FormItem>
    <FormItem
      name="categories"
      onBlur={setFieldTouched}
      onChange={setFieldValue}
      value={values.categories}
    >
      <Input size="small" />
    </FormItem>
  </React.Fragment>
);

export default EditMeta;
