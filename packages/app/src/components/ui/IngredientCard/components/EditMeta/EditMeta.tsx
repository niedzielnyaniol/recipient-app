import * as React from 'react';
import { Formik } from 'formik';

import { RenderForm } from './EditMeta.types';
import { InitialValues } from '../../IngredientCard.types';

import FormItem from '../../../FormItem';
import Input from '../../../Input';
import { Form } from 'antd';

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
    <Form onSubmit={handleSubmit}>
      <FormItem
        name="name"
        onBlur={setFieldTouched}
        onChange={setFieldValue}
        value={values.name}
      >
        <Input label="name: " />
      </FormItem>
      <FormItem
        name="categories"
        onBlur={setFieldTouched}
        onChange={setFieldValue}
        value={values.categories}
      >
        <Input label="categories: " size="small" />
      </FormItem>
    </Form>
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
