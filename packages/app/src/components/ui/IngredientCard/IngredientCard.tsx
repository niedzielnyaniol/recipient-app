import * as React from 'react';
import { Formik } from 'formik';

import { Card, Icon } from 'antd';
import EditMeta from './components/EditMeta';
import Photo from './components/Photo';
import SaveIcon from './components/SaveIcon';

import { InitialValues, RenderForm } from './IngredientCard.types';

import {
  BodyWrapper,
  CardWrapper,
} from './IngredientCard.styles';

interface PropTypes {
  categories: string;
  image?: string;
  name: string;
  onSave: (values: InitialValues) => Promise<void>;
  title: string;
}

interface StateTypes {
  isEdit: boolean;
}

class IngredientCard extends React.Component<PropTypes, StateTypes> {
  private initialValues: InitialValues;
  constructor(props: PropTypes) {
    super(props);

    this.initialValues = {
      categories:  props.categories,
      image: props.image,
      name: props.title,
    };

    this.state = {
      isEdit: false,
    };
  }

  toggleClick = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  renderForm = ({
    setFieldValue,
    setFieldTouched,
    values,
    handleSubmit,
    isSubmitting,
    submitForm,
  }: RenderForm) => (
    <form onSubmit={handleSubmit}>
      <CardWrapper isSubmitting={isSubmitting}>
        <Card
          hoverable
          style={{ cursor: 'auto' }}
          cover={
            <Photo
              image={values.image}
              isEdit={this.state.isEdit}
              onChange={setFieldValue}
              onUpload={setFieldTouched}
            />
          }
          loading={isSubmitting}
          actions={
            this.state.isEdit ? [
              <Icon key={`${name}-discard`} type="close" onClick={this.toggleClick} />,
              <SaveIcon
                key={`${name}-save`}
                onSaveClick={submitForm}
                onToggleClick={this.toggleClick}
              />,
            ] : [
              <Icon key={`${name}-edit`} type="edit" onClick={this.toggleClick} />,
            ]
          }
        >
          <BodyWrapper isEdit={this.state.isEdit} >
            {
              this.state.isEdit ? (
                <EditMeta
                  values={values}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              ) : (
                <Card.Meta
                  title={values.name}
                  description={values.categories}
                />
              )
            }
          </BodyWrapper>
        </Card>
      </CardWrapper>
    </form>
  )

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.props.onSave}
        render={this.renderForm}
      />
    );
  }
}

export default IngredientCard;
