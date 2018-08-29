import * as React from 'react';

import { Card, Icon } from 'antd';
import EditMeta from './components/EditMeta';
import { InitialValues } from './IngredientCard.types';

interface PropTypes {
  categories: string;
  name: string;
  onSave: (values: InitialValues) => Promise<void>;
  title: string;
}

interface StateTypes {
  isEdit: boolean;
  loading: boolean;
}

class IngredientCard extends React.Component<PropTypes, StateTypes> {
  private actions: React.ReactNode[];
  private editActions: React.ReactNode[];
  private initialValues: InitialValues;

  constructor(props: PropTypes) {
    super(props);

    this.actions = [
      <Icon key={`${name}-edit`} type="edit" onClick={this.toggleClick} />,
    ];

    this.editActions = [
      <Icon key={`${name}-discard`} type="close" onClick={this.toggleClick} />,
      <Icon key={`${name}-save`} type="check" onClick={this.toggleClick} />,
    ];

    this.initialValues = {
      categories:  props.categories,
      name: props.title,
    };

    this.state = {
      isEdit: false,
      loading: false,
    };
  }

  toggleClick = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  onSave = (values: InitialValues) => {
    this.setState({ loading: true });

    this.props.onSave(values).finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <Card
        hoverable
        style={{ cursor: 'auto' }}
        cover={<div>elo</div>}
        actions={this.state.isEdit ? this.editActions : this.actions}
        loading={this.state.loading}
      >
        {
          this.state.isEdit ? (
            <EditMeta
              onSave={this.onSave}
              initialValues={this.initialValues}
            />
          ) : (
            <Card.Meta
              title={this.props.title}
              description={this.props.categories}
            />
          )
        }
      </Card>
    );
  }
}

export default IngredientCard;
