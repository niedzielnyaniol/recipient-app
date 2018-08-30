import * as React from 'react';
import { Formik } from 'formik';

import { RenderForm } from './EditMeta.types';
import { InitialValues } from '../../IngredientCard.types';

import FormItem from '../../../FormItem';
import Input from '../../../Input';

interface PropTypes {
  initialValues: InitialValues;
  onSave: (values: InitialValues) => void;
}

class EditMeta extends React.PureComponent<PropTypes> {
  renderForm = ({
    setFieldValue,
    setFieldTouched,
    values,
    handleSubmit,
  }: RenderForm) => (
    <form onSubmit={handleSubmit}>
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
    </form>
  )

  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSave}
        render={this.renderForm}
      />
    );
  }
}

export default EditMeta;
